import re
from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError

FIELD_TYPES = [(key, key) for key in sorted(fields.Field.by_type)]
RE_ORDER_FIELDS = re.compile(r'"?(\w+)"?\s*(?:asc|desc)?', flags=re.I)


class IrModel(models.Model):
    _inherit = 'ir.model'

    is_report = fields.Boolean(string='Is Report')

    def write(self, vals):
        context = self.env.context.copy()
        context.update({'is_report': True})
        return super(IrModel, self.with_context(context)).write(vals)

    @api.constrains('order', 'field_id')
    def _check_order(self):
        if not self.env.context.get('is_report'):
            for model in self:
                try:
                    model._check_qorder(model.order)  # regex check for the whole clause ('is it valid sql?')
                except UserError as e:
                    raise ValidationError(str(e))
                # add MAGIC_COLUMNS to 'stored_fields' in case 'model' has not been
                # initialized yet, or 'field_id' is not up-to-date in cache
                stored_fields = set(
                    model.field_id.filtered('store').mapped('name') + models.MAGIC_COLUMNS
                )
                order_fields = RE_ORDER_FIELDS.findall(model.order)
                for field in order_fields:
                    if field not in stored_fields:
                        raise ValidationError(_("Unable to order by %s: fields used for ordering must be present on the model and stored.", field))


class IrModelFields(models.Model):
    _inherit = 'ir.model.fields'

    is_report = fields.Boolean(string='Is Report', store=True)

    def write(self, vals):
        if 'is_report' in vals:
            sql = """
                UPDATE ir_model_fields SET is_report = %s WHERE ID = %s
            """ % (vals.get('is_report'), self.id)
            self._cr.execute(sql)
        else:
            return super(IrModelFields, self).write(vals)


class ReportReportLine(models.Model):
    _name = "report.report.line"
    _description = "Report Line"

    report_id = fields.Many2one('report.report', string='Report Report')
    model_id = fields.Many2one('ir.model', string='Model', ondelete="cascade")
    field_domain = fields.Many2many('ir.model.fields', string='Field Domain', compute='_compute_field_domain')
    field_id = fields.Many2one('ir.model.fields', string='Field', ondelete="cascade", required=True)
    field_description = fields.Char(string='Field Description', related='field_id.field_description')
    ttype = fields.Selection(selection=FIELD_TYPES, string='Field Type', related='field_id.ttype')
    is_report = fields.Boolean(string='Is Report', default=True)

    @api.depends('model_id')
    def _compute_field_domain(self):
        for record in self:
            fields = []
            record.field_domain = self._get_fields(fields=fields, model=record.model_id)

    def _get_fields(self, fields=None, model=None):
        for field in model.field_id:
            if field.ttype != 'one2many':
                if field.is_report:
                    fields.append(field.id)
            else:
                model = self.env['ir.model'].search([('model', '=', field.relation)], limit=1)
                if model.is_report and field.relation != self.report_id.model_id.model:
                    self._get_fields(fields=fields if fields else [], model=model)
        return fields
