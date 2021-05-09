from odoo import models, fields, api, _
from odoo.exceptions import ValidationError

FIELD_TYPES = [(key, key) for key in sorted(fields.Field.by_type)]


class IrModel(models.Model):
    _inherit = 'ir.model'

    is_report = fields.Boolean(string='Is Report')


class ReportReportLine(models.Model):
    _name = "report.report.line"
    _description = "Report Line"

    report_id = fields.Many2one('report.report', string='Report Report')
    model_id = fields.Many2one('ir.model', string='Model', ondelete="cascade")
    field_domain = fields.Many2many('ir.model.fields', string='Field Domain', compute='_compute_field_domain')
    field_id = fields.Many2one('ir.model.fields', string='Field', ondelete="cascade", required=True)
    field_description = fields.Char(string='Field Description', related='field_id.field_description')
    ttype = fields.Selection(selection=FIELD_TYPES, string='Field Type', related='field_id.ttype')
    is_report = fields.Boolean(string='Is Report')

    @api.depends('model_id')
    def _compute_field_domain(self):
        for record in self:
            fields = []
            record.field_domain = self._get_fields(fields=fields, record=record.model_id)

    def _get_fields(self, fields=None, record=None):
        for field in record.field_id:
            if field.ttype != 'one2many':
                fields.append(field.id)
            else:
                record = self.env['ir.model'].search([('model', '=', field.relation)], limit=1)
                if record.is_report:
                    self._get_fields(fields=fields if fields else [], record=record)
        return fields
