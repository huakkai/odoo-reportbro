from odoo import models, fields, api, _
from odoo.exceptions import ValidationError


class ReportReport(models.Model):
    _name = "report.report"
    _description = "Report"

    name = fields.Char(string='Name', required=True)
    model_id = fields.Many2one('ir.model', string='Model', ondelete="cascade", required=True)
    state = fields.Selection([('draft', 'Draft'), ('approve', 'Approve'), ('forbid', 'Forbid')], default='draft',
                             string='State')
    line_ids = fields.One2many('report.report.line', 'report_id', string='Report Line')

    def button_draft(self):
        pass

    def button_approve(self):
        pass

    def button_forbid(self):
        pass

    def button_designer(self):
        pass
