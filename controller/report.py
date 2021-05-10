import os
import json
import requests
import werkzeug
from PyPDF2 import PdfFileWriter, PdfFileReader

import odoo

from odoo import http


class ReportServer(http.Controller):
    @http.route('/report_server', type='json', auth='public')
    def report_server(self, *args, **kwargs):
        return True

    @http.route('/report_save', type='json', auth='public')
    def report_save(self, *args, **kwargs):
        return True

    @http.route('/run', type='json', auth='public')
    def report_run(self, *args, **kwargs):
        return True
