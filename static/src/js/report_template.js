odoo.define('report_template', function (require) {
    "use strict";
    var core = require('web.core');
    // var Widget = require('web.Widget');
    var AbstractAction = require('web.AbstractAction')
    var ReportPage = AbstractAction.extend({
        template: 'report.template',
        init: function (parent, params) {
            this.name = "Print";
            this._super(parent);
            this.params = params;
            var data = params.params.data;
            var number = params.params.number;
            this._rpc({route: '/report_server'}).then(function (stats) {
                $(document).ready(function () {
                    function saveReport() {
                        var report = $('#reportbro').reportBro('getReport');
                        $.ajax({
                            url: '/report_save',
                            data: JSON.stringify({
                                'params': report,
                            }),
                            dataType: 'json',
                            type: 'POST',
                            async: false,
                            contentType: 'application/json',
                            success: function (data) {
                                alert("Save Success");
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                alert('Save Fail');
                            }
                        });
                    }

                    $('#reportbro').reportBro({
                        saveCallback: saveReport,
                        // reportServerUrl: "http://localhost:8888/reportbro/report/run",
                        additionalFonts: [
                            {name: 'Firefly', value: 'firefly'}
                        ],
                    });
                    var report =
                        {
                            "docElements": [],
                            "parameters":
                                JSON.parse(data)
                            ,
                            "styles": [],
                            "version": 1,
                            "documentProperties":
                                {
                                    "pageFormat": "A4",
                                    "pageWidth": "",
                                    "pageHeight": "",
                                    "unit": "mm",
                                    "orientation": "portrait",
                                    "contentHeight": "",
                                    "marginLeft": "20",
                                    "marginTop": "20",
                                    "marginRight": "20",
                                    "marginBottom": "10",
                                    "header": true,
                                    "headerSize": "60",
                                    "headerDisplay": "always",
                                    "footer": true,
                                    "footerSize": "60",
                                    "footerDisplay": "always",
                                    "patternLocale": "de",
                                    "patternCurrencySymbol": number
                                }
                        };
                    $('#reportbro').reportBro('load', report);
                });
            });
        },
        events: {
            'click button#btnPrint': 'print',
            'click button#btnRen': 'ren'
        },
    });
    core.action_registry.add('report_template', ReportPage);
    return ReportPage;
});
