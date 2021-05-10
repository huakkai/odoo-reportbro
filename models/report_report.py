import json
from odoo import models, fields, api, _
from odoo.exceptions import ValidationError

STEP = 1000


class ReportReport(models.Model):
    _name = "report.report"
    _description = "Report"

    name = fields.Char(string='Name', required=True)
    model_id = fields.Many2one('ir.model', string='Model', ondelete="cascade", required=True)
    state = fields.Selection([('draft', 'Draft'), ('approve', 'Approve'), ('forbid', 'Forbid')], default='draft',
                             string='State')
    report = fields.Text(string='Report')
    line_ids = fields.One2many('report.report.line', 'report_id', string='Report Line')

    def button_draft(self):
        for record in self:
            record.state = 'draft'

    def button_approve(self):
        for record in self:
            record.state = 'approve'

    def button_forbid(self):
        for record in self:
            record.state = 'forbid'

    def button_enable(self):
        for record in self:
            record.state = 'draft'

    def button_designer(self):
        report_data = self._get_report_data()
        return {
            'type': 'ir.actions.client',
            'tag': 'report_template',
            'target': 'current',
            'params': {
                'data': report_data,
                'number': 9999,
            },
        }

    def _get_report_data(self):
        cid = 0
        _data = {}
        for line in self.line_ids:
            value = {"id": self._get_cid(cid),
                     "name": line.field_description,
                     "type": 'string',
                     "eval": False,
                     "pattern": "",
                     "expression": "",
                     "showOnlyNameType": False}
            if line.field_id.model_id.name in _data:
                _data.get(line.field_id.model_id.name).append(value)
            else:
                _data[line.field_id.model_id.name] = [value]
        report_data = []
        for key, value in _data.items():
            index = STEP * list(_data.keys()).index(key)
            children = []
            for v in value:
                v['id'] += index
                children.append(v)
            report_data.append(
                {"id": index,
                 "name": key,
                 "type": "map",
                 "eval": False,
                 "pattern": "",
                 "expression": "",
                 "showOnlyNameType": False,
                 "testData": "",
                 "children": children})
        return json.dumps(report_data)

    def _get_cid(self, cid):
        cid += 1
        return cid

