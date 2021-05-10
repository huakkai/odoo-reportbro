{
    'name': 'Odoo Reportbro',
    'version': '1.0',
    'summary': 'report designer',
    'author': 'huaqiangyan@163.com',
    'website': 'https://github.com/huakkai',
    'category': 'Tools',
    'license': 'OEEL-1',
    'depends': [],
    'data': [
        'security/ir.model.access.csv',
        'views/report_report.xml',
    ],
    'qweb': [
    ],
    'js': ["static/src/dist/*.js"],
    'js': ["static/src/dist/ext/*.js"],
    'css': ["static/src/dist/*.css"],
    'css': ["static/src/dist/ext/*.css"],
    'application': True,
    'installable': True,
}
