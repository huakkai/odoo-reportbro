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
        print(8888)
        return True

    @http.route('/report_save', type='json', auth='public')
    def report_save(self, *args, **kwargs):
        print(9999)
        return True
