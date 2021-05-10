/*!
 * Copyright (C) 2017 jobsta
 * 
 * This file is part of ReportBro, a library to generate PDF and Excel reports.
 * Demos can be found at https://www.reportbro.com.
 * 
 * ReportBro is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * ReportBro is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 145);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(101);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setInputInteger = setInputInteger;
exports.setInputPositiveInteger = setInputPositiveInteger;
exports.setInputDecimal = setInputDecimal;
exports.checkInputDecimal = checkInputDecimal;
exports.convertInputToNumber = convertInputToNumber;
exports.roundValueToInterval = roundValueToInterval;
exports.roundValueToLowerInterval = roundValueToLowerInterval;
exports.roundValueToUpperInterval = roundValueToUpperInterval;
exports.replaceAll = replaceAll;
exports.initColorPicker = initColorPicker;
exports.insertAtCaret = insertAtCaret;
exports.getDataTransferType = getDataTransferType;
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

function setInputInteger(el) {
    el.on('keyup', function () {
        var nvalue = this.value.reverse().replace(/[^0-9\-]|\-(?=.)/g, '').reverse();
        if (this.value != nvalue) this.value = nvalue;
    });
}

function setInputPositiveInteger(el) {
    el.on('keyup', function () {
        var nvalue = this.value.replace(/[^0-9]/g, '');
        if (this.value != nvalue) this.value = nvalue;
    });
}

function setInputDecimal(el) {
    el.on('keyup', function () {
        var nvalue = this.value.reverse().replace(/[^0-9\-\.,]|[\-](?=.)|[\.,](?=[0-9]*[\.,])/g, '').reverse();
        var className = this.className;
        var pos = className.indexOf('decimalPlaces');
        if (pos != -1) {
            pos += 13;
            var pos2 = className.indexOf(' ', pos);
            var places;
            if (pos2 != -1) {
                places = parseInt(className.substring(pos, pos2), 10);
            } else {
                places = parseInt(className.substr(pos), 10);
            }
            if (!isNaN(places)) {
                pos = nvalue.indexOf('.');
                if (pos == -1) {
                    pos = nvalue.indexOf(',');
                }
                if (pos != -1 && nvalue.length - 1 - pos > places) {
                    nvalue = nvalue.substring(0, pos + places + 1);
                }
            }
        }
        if (this.value != nvalue) this.value = nvalue;
    });
}

function checkInputDecimal(val, min, max) {
    var value = parseFloat(val.replace(',', '.'));
    if (isNaN(value)) {
        return '' + min;
    } else if (value < min) {
        return '' + min;
    } else if (value > max) {
        return '' + max;
    }
    return val;
}

function convertInputToNumber(val) {
    if (val === '') {
        return 0;
    }
    var ret = parseInt(val, 10);
    if (isNaN(ret)) {
        return 0;
    }
    return ret;
}

function roundValueToInterval(val, interval) {
    var tmp = Math.ceil(val / interval) * interval;
    if (tmp - val <= interval >> 1) {
        return tmp;
    }
    return tmp - interval;
}

function roundValueToLowerInterval(val, interval) {
    return Math.floor(val / interval) * interval;
}

function roundValueToUpperInterval(val, interval) {
    return Math.ceil(val / interval) * interval;
}

function replaceAll(str, oldVal, newVal) {
    // not the fastest solution but works
    var ret = str;
    while (ret.indexOf(oldVal) !== -1) {
        ret = ret.replace(oldVal, newVal);
    }
    return ret;
}

function initColorPicker(el, rb, options) {
    var allOptions = {
        showInitial: false,
        preferredFormat: "hex",
        containerClassName: "rbroColorContainer",
        replacerClassName: "rbroColorPicker",
        showPalette: true,
        showButtons: false,
        showSelectionPalette: false, // disable showing previous selections by user
        palette: [["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"], ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"], ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"], ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"], ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"], ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"], ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]],
        change: function change(color) {
            el.spectrum("hide");
        },
        show: function show(color) {
            el.parent().addClass('rbroActive');
        },
        hide: function hide(color) {
            el.parent().removeClass('rbroActive');
        }
    };
    $.extend(allOptions, options || {});
    el.spectrum(allOptions);
    el.show(); // show original text input
    el.focus(function (event) {
        el.parent().addClass('rbroActive');
    });
    el.blur(function (event) {
        el.parent().removeClass('rbroActive');
    });
}

function insertAtCaret(element, text) {
    if (document.selection) {
        element.focus();
        var sel = document.selection.createRange();
        sel.text = text;
        element.focus();
    } else if (element.selectionStart || element.selectionStart === 0) {
        var startPos = element.selectionStart;
        var endPos = element.selectionEnd;
        var scrollTop = element.scrollTop;
        element.value = element.value.substring(0, startPos) + text + element.value.substring(endPos, element.value.length);
        element.focus();
        element.selectionStart = startPos + text.length;
        element.selectionEnd = startPos + text.length;
        element.scrollTop = scrollTop;
    } else {
        element.value += text;
        element.focus();
    }
}

function getDataTransferType(transferType, prefix) {
    var parts = transferType.split('/');
    if (parts.length >= 2 && parts[0] == prefix) {
        return parts[1];
    }
    return null;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Command to set a single value of a data object.
 * @class
 */
var SetValueCmd = function () {
    function SetValueCmd(objId, tagId, field, value, type, rb) {
        (0, _classCallCheck3.default)(this, SetValueCmd);

        this.objId = objId;
        this.tagId = tagId;
        this.field = field;
        this.value = value;
        this.type = type;
        this.rb = rb;

        var obj = rb.getDataObject(objId);
        this.oldValue = obj.getValue(field);
        this.firstExecution = true;
        this.select = true;
    }

    (0, _createClass3.default)(SetValueCmd, [{
        key: 'getName',
        value: function getName() {
            return 'Set value';
        }
    }, {
        key: 'do',
        value: function _do() {
            if (!this.firstExecution && this.select) {
                this.rb.selectObject(this.objId, true);
            }
            this.setValue(this.value);
            this.firstExecution = false;
        }
    }, {
        key: 'undo',
        value: function undo() {
            if (this.select) {
                this.rb.selectObject(this.objId, true);
            }
            this.setValue(this.oldValue);
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            var obj = this.rb.getDataObject(this.objId);
            var detailData = this.rb.getDetailData();
            var isShown = detailData !== null && detailData.getId() === this.objId;
            var elSelector = '#' + this.tagId;
            obj.setValue(this.field, value, elSelector, isShown);

            if (this.field === 'name') {
                $('#rbro_menu_item_name' + this.objId).text(value);
                $('#rbro_menu_item_name' + this.objId).attr('title', value);
                this.rb.notifyEvent(obj, _Command2.default.operation.rename);
            } else {
                this.rb.notifyEvent(obj, _Command2.default.operation.change, this.field);
            }
            if (isShown) {
                if (this.type === SetValueCmd.type.text || this.type === SetValueCmd.type.select) {
                    $(elSelector).val(value);
                } else if (this.type === SetValueCmd.type.filename) {
                    $(elSelector).text(value);
                    if (value === '') {
                        $('#' + this.tagId + '_container').addClass('rbroHidden');
                    } else {
                        $('#' + this.tagId + '_container').removeClass('rbroHidden');
                    }
                } else if (this.type === SetValueCmd.type.checkbox) {
                    $(elSelector).prop('checked', value);
                } else if (this.type === SetValueCmd.type.button) {
                    if (value) {
                        $(elSelector).addClass('rbroButtonActive');
                    } else {
                        $(elSelector).removeClass('rbroButtonActive');
                    }
                } else if (this.type === SetValueCmd.type.buttonGroup) {
                    $(elSelector).find('button').removeClass('rbroButtonActive');
                    $(elSelector).find('button[value="' + value + '"]').addClass('rbroButtonActive');
                } else if (this.type === SetValueCmd.type.color) {
                    $(elSelector).spectrum("set", value);
                }
            }
        }

        /**
         * Disables selection of the element containing the changed field. By default an element is automatically
         * selected after one of its fields was changed.
         */

    }, {
        key: 'disableSelect',
        value: function disableSelect() {
            this.select = false;
        }

        /**
         * Returns true if the given command targets the same field. This information can be useful to avoid separate
         * commands for every keystroke in a text field and generate just one command for the whole changed text instead.
         * @param {SetValueCmd} newCmd
         * @returns {boolean}
         */

    }, {
        key: 'allowReplace',
        value: function allowReplace(newCmd) {
            return this.type === SetValueCmd.type.text && this.objId === newCmd.objId && this.tagId === newCmd.tagId && this.field === newCmd.field;
        }
    }]);
    return SetValueCmd;
}();

exports.default = SetValueCmd;


SetValueCmd.type = {
    text: 'text',
    select: 'select',
    file: 'file',
    filename: 'filename',
    checkbox: 'checkbox',
    button: 'button',
    buttonGroup: 'buttonGroup', // one button inside a group of buttons with only one active button
    color: 'color',
    internal: 'internal'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(32);

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Document = __webpack_require__(15);

var _Document2 = _interopRequireDefault(_Document);

var _MovePanelItemCmd = __webpack_require__(56);

var _MovePanelItemCmd2 = _interopRequireDefault(_MovePanelItemCmd);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base class for all doc elements.
 * @class
 */
var DocElement = function () {
    function DocElement(name, id, defaultWidth, defaultHeight, rb) {
        (0, _classCallCheck3.default)(this, DocElement);

        this.rb = rb;
        this.id = id;
        this.name = name;
        this.panelItem = null;
        this.x = '0';
        this.y = '0';
        this.width = '' + defaultWidth;
        this.height = '' + defaultHeight;
        this.containerId = null;
        // in case of frame or band element, this is the container represented by the element
        this.linkedContainerId = null;
        this.printIf = '';
        this.removeEmptyElement = false;

        this.el = null;
        this.selected = false;

        this.xVal = 0;
        this.yVal = 0;
        this.widthVal = 0;
        this.heightVal = 0;

        this.errors = [];
    }

    (0, _createClass3.default)(DocElement, [{
        key: 'setInitialData',
        value: function setInitialData(initialData) {
            for (var key in initialData) {
                if (initialData.hasOwnProperty(key) && this.hasOwnProperty(key)) {
                    this[key] = initialData[key];
                }
            }

            // make sure x, y, width and height are strings (they are stored as numbers when serialized)
            this.x = '' + this.x;
            this.y = '' + this.y;
            this.width = '' + this.width;
            this.height = '' + this.height;

            this.xVal = utils.convertInputToNumber(this.x);
            this.yVal = utils.convertInputToNumber(this.y);
            this.widthVal = utils.convertInputToNumber(this.width);
            this.heightVal = utils.convertInputToNumber(this.height);
        }

        /**
         * Called after initialization is finished.
         */

    }, {
        key: 'setup',
        value: function setup() {
            var container = this.getContainer();
            if (container !== null) {
                // adapt position if new element is outside container
                var containerSize = container.getSize();
                if (this.xVal + this.widthVal > containerSize.width) {
                    this.xVal = containerSize.width - this.widthVal;
                }
                if (this.xVal < 0) {
                    this.xVal = 0;
                }
                if (this.yVal + this.heightVal > containerSize.height) {
                    this.yVal = containerSize.height - this.heightVal;
                }
                if (this.yVal < 0) {
                    this.yVal = 0;
                }
                this.x = '' + this.xVal;
                this.y = '' + this.yVal;
            }
        }

        /**
         * Register event handlers so element can be selected, dragged and resized.
         */

    }, {
        key: 'registerEventHandlers',
        value: function registerEventHandlers() {
            var _this = this;

            this.el.dblclick(function (event) {
                _this.handleClick(event, true);
            }).mousedown(function (event) {
                _this.handleClick(event, false);
            });
        }

        /**
         * Handle mouse click on this element so the element can be selected, dragged and resized.
         * @param {jQuery.Event} event - browser event object.
         * @param {Boolean} ignoreSelectedContainer - if true the element will always be selected in case it
         * was not selected before. Otherwise the element will only be selected if it's container is
         * not selected (e.g. the frame container when this element is inside a frame).
         */

    }, {
        key: 'handleClick',
        value: function handleClick(event, ignoreSelectedContainer) {
            if (!this.rb.isSelectedObject(this.id)) {
                if (ignoreSelectedContainer || !this.isContainerSelected()) {
                    this.rb.selectObject(this.id, !event.shiftKey);
                    event.stopPropagation();
                }
            } else {
                if (event.shiftKey) {
                    this.rb.deselectObject(this.id);
                } else {
                    this.rb.getDocument().startDrag(event.originalEvent.pageX, event.originalEvent.pageY, this.containerId, this.linkedContainerId, this.getElementType(), DocElement.dragType.element);
                }
                event.stopPropagation();
            }
        }
    }, {
        key: 'getId',
        value: function getId() {
            return this.id;
        }

        /**
         * Returns highest id of this component including all its child components.
         * @returns {Number}
         */

    }, {
        key: 'getMaxId',
        value: function getMaxId() {
            return this.id;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'getPanelItem',
        value: function getPanelItem() {
            return this.panelItem;
        }
    }, {
        key: 'setPanelItem',
        value: function setPanelItem(panelItem) {
            this.panelItem = panelItem;
        }
    }, {
        key: 'getContainerId',
        value: function getContainerId() {
            return this.containerId;
        }
    }, {
        key: 'getContainer',
        value: function getContainer() {
            return this.rb.getDataObject(this.getContainerId());
        }
    }, {
        key: 'getLinkedContainer',
        value: function getLinkedContainer() {
            if (this.linkedContainerId !== null) {
                return this.rb.getDataObject(this.linkedContainerId);
            }
            return null;
        }
    }, {
        key: 'getContainerSize',
        value: function getContainerSize() {
            var container = this.getContainer();
            return container !== null ? container.getSize() : { width: 0, height: 0 };
        }
    }, {
        key: 'appendToContainer',
        value: function appendToContainer() {
            var container = this.getContainer();
            if (container !== null) {
                container.appendElement(this.el);
            }
        }
    }, {
        key: 'isContainerSelected',
        value: function isContainerSelected() {
            var container = this.getContainer();
            if (container !== null) {
                return container.isSelected();
            }
            return false;
        }
    }, {
        key: 'appendContainerChildren',
        value: function appendContainerChildren(elements) {
            if (this.linkedContainerId !== null) {
                if (this.panelItem !== null) {
                    var children = this.panelItem.getChildren();
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = (0, _getIterator3.default)(children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var child = _step.value;

                            if (child.getData() instanceof DocElement) {
                                elements.push(child.getData());
                                child.getData().appendContainerChildren(elements);
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            }
        }

        /**
         * Check element bounds within container and adapt position/size if necessary.
         *
         * This should be called when an element is resized or moved to another container to guarantee that
         * the element is not out of bounds.
         * @param {Number} x - x value of doc element.
         * @param {Number} y - y value of doc element.
         * @param {Number} width - width value of doc element.
         * @param {Number} height - height value of doc element.
         * @param {Object} containerSize - width and height of container where this doc element belongs to.
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'checkBounds',
        value: function checkBounds(x, y, width, height, containerSize, cmdGroup) {
            if (x + width > containerSize.width) {
                x = containerSize.width - width;
            }
            if (x < 0) {
                x = 0;
            }
            if (x + width > containerSize.width) {
                width = containerSize.width - x;
            }
            if (y + height > containerSize.height) {
                y = containerSize.height - height;
            }
            if (y < 0) {
                y = 0;
            }
            if (y + height > containerSize.height) {
                height = containerSize.height - y;
            }

            if (x !== this.xVal && this.getXTagId() !== '') {
                var cmd = new _SetValueCmd2.default(this.id, this.getXTagId(), 'x', '' + x, _SetValueCmd2.default.type.text, this.rb);
                cmd.disableSelect();
                cmdGroup.addCommand(cmd);
            }
            if (y !== this.yVal && this.getYTagId() !== '') {
                var _cmd = new _SetValueCmd2.default(this.id, this.getYTagId(), 'y', '' + y, _SetValueCmd2.default.type.text, this.rb);
                _cmd.disableSelect();
                cmdGroup.addCommand(_cmd);
            }
            if (width !== this.widthVal && this.getWidthTagId() !== '') {
                var _cmd2 = new _SetValueCmd2.default(this.id, this.getWidthTagId(), 'width', '' + width, _SetValueCmd2.default.type.text, this.rb);
                _cmd2.disableSelect();
                cmdGroup.addCommand(_cmd2);
            }
            if (height !== this.heightVal && this.getHeightTagId() !== '') {
                var _cmd3 = new _SetValueCmd2.default(this.id, this.getHeightTagId(), 'height', '' + height, _SetValueCmd2.default.type.text, this.rb);
                _cmd3.disableSelect();
                cmdGroup.addCommand(_cmd3);
            }

            var linkedContainer = this.getLinkedContainer();
            if (linkedContainer !== null && linkedContainer.getPanelItem() !== null) {
                var linkedContainerSize = { width: width, height: height };
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = (0, _getIterator3.default)(linkedContainer.getPanelItem().getChildren()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var child = _step2.value;

                        if (child.getData() instanceof DocElement) {
                            var docElement = child.getData();
                            docElement.checkBounds(docElement.getValue('xVal'), docElement.getValue('yVal'), docElement.getValue('widthVal'), docElement.getValue('heightVal'), linkedContainerSize, cmdGroup);
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getValue',
        value: function getValue(field) {
            return this[field];
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            this[field] = value;
            if (field === 'x' || field === 'y' || field === 'width' || field === 'height') {
                this[field + 'Val'] = utils.convertInputToNumber(value);
                this.updateDisplay();
            } else if (field === 'containerId') {
                if (this.el !== null) {
                    // detach dom node from container and then attach it to new container
                    this.el.detach();
                    this.appendToContainer();
                }
            } else if (['styleId', 'bold', 'italic', 'underline', 'horizontalAlignment', 'verticalAlignment', 'textColor', 'backgroundColor', 'font', 'fontSize', 'lineSpacing', 'borderColor', 'borderWidth', 'borderAll', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom'].indexOf(field) !== -1) {

                this.updateStyle();

                if (['borderWidth', 'borderAll', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom'].indexOf(field) !== -1) {
                    this.updateDisplay();
                }
            }
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            return [];
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return DocElement.type.none;
        }
    }, {
        key: 'setBorderAll',
        value: function setBorderAll(fieldPrefix, value) {
            this[fieldPrefix + 'borderAll'] = value;
        }
    }, {
        key: 'updateDisplay',
        value: function updateDisplay() {
            this.updateDisplayInternal(this.xVal, this.yVal, this.widthVal, this.heightVal);
        }
    }, {
        key: 'updateDisplayInternal',
        value: function updateDisplayInternal(x, y, width, height) {
            if (this.el !== null) {
                var props = { left: this.rb.toPixel(x), top: this.rb.toPixel(y),
                    width: this.rb.toPixel(width), height: this.rb.toPixel(height) };
                this.el.css(props);
            }
        }
    }, {
        key: 'updateStyle',
        value: function updateStyle() {}
    }, {
        key: 'updateChangedStyle',
        value: function updateChangedStyle(styleId) {
            if (this.styleId == styleId) {
                this.updateStyle();
            }
        }
    }, {
        key: 'updateDrag',
        value: function updateDrag(diffX, diffY, dragType, dragContainer, gridSize, cmdGroup) {
            var posX1 = this.xVal;
            var posY1 = this.yVal;
            var posX2 = posX1 + this.widthVal;
            var posY2 = posY1 + this.heightVal;
            var maxWidth = this.getMaxWidth();
            var MIN_DRAG_SIZE = 20;
            if (dragType === DocElement.dragType.element) {
                posX1 += diffX;
                if (gridSize !== 0) {
                    posX1 = utils.roundValueToInterval(posX1, gridSize);
                }
                posX2 = posX1 + this.widthVal;
                posY1 += diffY;
                if (gridSize !== 0) {
                    posY1 = utils.roundValueToInterval(posY1, gridSize);
                }
                posY2 = posY1 + this.heightVal;
            } else {
                var containerSize = this.getContainerSize();
                if (dragType === DocElement.dragType.sizerNW || dragType === DocElement.dragType.sizerN || dragType === DocElement.dragType.sizerNE) {
                    posY1 += diffY;
                    if (gridSize !== 0) {
                        posY1 = utils.roundValueToInterval(posY1, gridSize);
                    }
                    if (posY1 > posY2 - MIN_DRAG_SIZE) {
                        if (gridSize !== 0) {
                            posY1 = utils.roundValueToLowerInterval(posY2 - MIN_DRAG_SIZE, gridSize);
                        } else {
                            posY1 = posY2 - MIN_DRAG_SIZE;
                        }
                    } else if (posY1 < 0) {
                        posY1 = 0;
                    }
                }
                if (dragType === DocElement.dragType.sizerNE || dragType === DocElement.dragType.sizerE || dragType === DocElement.dragType.sizerSE) {
                    posX2 += diffX;
                    if (gridSize !== 0) {
                        posX2 = utils.roundValueToInterval(posX2, gridSize);
                    }
                    if (posX2 < posX1 + MIN_DRAG_SIZE) {
                        if (gridSize !== 0) {
                            posX2 = utils.roundValueToUpperInterval(posX1 + MIN_DRAG_SIZE, gridSize);
                        } else {
                            posX2 = posX1 + MIN_DRAG_SIZE;
                        }
                    } else if (posX2 > maxWidth) {
                        posX2 = maxWidth;
                    }
                }
                if (dragType === DocElement.dragType.sizerSE || dragType === DocElement.dragType.sizerS || dragType === DocElement.dragType.sizerSW) {
                    posY2 += diffY;
                    if (gridSize !== 0) {
                        posY2 = utils.roundValueToInterval(posY2, gridSize);
                    }
                    if (posY2 < posY1 + MIN_DRAG_SIZE) {
                        if (gridSize !== 0) {
                            posY2 = utils.roundValueToUpperInterval(posY1 + MIN_DRAG_SIZE, gridSize);
                        } else {
                            posY2 = posY1 + MIN_DRAG_SIZE;
                        }
                    } else if (posY2 > containerSize.height) {
                        posY2 = containerSize.height;
                    }
                }
                if (dragType === DocElement.dragType.sizerSW || dragType === DocElement.dragType.sizerW || dragType === DocElement.dragType.sizerNW) {
                    posX1 += diffX;
                    if (gridSize !== 0) {
                        posX1 = utils.roundValueToInterval(posX1, gridSize);
                    }
                    if (posX1 > posX2 - MIN_DRAG_SIZE) {
                        if (gridSize !== 0) {
                            posX1 = utils.roundValueToLowerInterval(posX2 - MIN_DRAG_SIZE, gridSize);
                        } else {
                            posX1 = posX2 - MIN_DRAG_SIZE;
                        }
                    } else if (posX1 < 0) {
                        posX1 = 0;
                    }
                }
            }
            var width = posX2 - posX1;
            var height = posY2 - posY1;
            if (cmdGroup !== null) {
                var containerChanged = false;
                var container = this.getContainer();
                var _containerSize = { width: 0, height: 0 };
                if (dragContainer !== null && dragContainer.getId() !== this.getContainerId()) {
                    containerChanged = true;
                    _containerSize = dragContainer.getSize();
                    if (container !== null) {
                        var relativeOffset = dragContainer.getOffsetTo(container);
                        posX1 -= relativeOffset.x;
                        posY1 -= relativeOffset.y;
                    }
                } else {
                    _containerSize = container.getSize();
                }
                if (!containerChanged || dragContainer.isElementAllowed(this.getElementType())) {
                    this.checkBounds(posX1, posY1, width, height, _containerSize, cmdGroup);

                    if (containerChanged) {
                        var cmd = new _SetValueCmd2.default(this.id, null, 'containerId', dragContainer.getId(), _SetValueCmd2.default.type.internal, this.rb);
                        cmdGroup.addCommand(cmd);
                        cmd = new _MovePanelItemCmd2.default(this.getPanelItem(), dragContainer.getPanelItem(), dragContainer.getPanelItem().getChildren().length, this.rb);
                        cmdGroup.addCommand(cmd);
                    }

                    if (cmdGroup.isEmpty()) {
                        // nothing was changed, make sure displayed element is updated to saved position/size after drag
                        this.updateDisplay();
                    }
                } else {
                    this.updateDisplayInternal(this.xVal, this.yVal, this.widthVal, this.heightVal);
                }
            } else {
                this.updateDisplayInternal(posX1, posY1, width, height);
            }
        }
    }, {
        key: 'select',
        value: function select() {
            var _this2 = this;

            var elSizerContainer = this.getSizerContainerElement();
            var sizers = this.getSizers();
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                var _loop = function _loop() {
                    var sizer = _step3.value;

                    var sizerVal = sizer;
                    var elSizer = $('<div class="rbroSizer rbroSizer' + sizer + '"></div>').mousedown(function (event) {
                        _this2.rb.getDocument().startDrag(event.pageX, event.pageY, _this2.containerId, _this2.linkedContainerId, _this2.getElementType(), DocElement.dragType['sizer' + sizerVal]);
                        event.stopPropagation();
                    });
                    elSizerContainer.append(elSizer);
                };

                for (var _iterator3 = (0, _getIterator3.default)(sizers), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    _loop();
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            this.el.addClass('rbroSelected');
            this.el.css('z-index', '10');
            this.selected = true;
        }
    }, {
        key: 'deselect',
        value: function deselect() {
            var elSizerContainer = this.getSizerContainerElement();
            elSizerContainer.find('.rbroSizer').remove();
            this.el.css('z-index', '');
            this.el.removeClass('rbroSelected');
            this.selected = false;
        }

        /**
         * Returns allowed sizers when element is selected.
         * @returns {String[]}
         */

    }, {
        key: 'getSizers',
        value: function getSizers() {
            return ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        }

        /**
         * Returns id for dom element of x value.
         * @returns {String} Is empty in case doc element does not have x value.
         */

    }, {
        key: 'getXTagId',
        value: function getXTagId() {
            return '';
        }

        /**
         * Returns id for dom element of y value.
         * @returns {String} Is empty in case doc element does not have y value.
         */

    }, {
        key: 'getYTagId',
        value: function getYTagId() {
            return '';
        }

        /**
         * Returns id for dom element of width value.
         * @returns {String} Is empty in case doc element does not have width value.
         */

    }, {
        key: 'getWidthTagId',
        value: function getWidthTagId() {
            return '';
        }

        /**
         * Returns id for dom element of height value.
         * @returns {String} Is empty in case doc element does not have height value.
         */

    }, {
        key: 'getHeightTagId',
        value: function getHeightTagId() {
            return '';
        }
    }, {
        key: 'hasBorderSettings',
        value: function hasBorderSettings() {
            return false;
        }
    }, {
        key: 'isDraggingAllowed',
        value: function isDraggingAllowed() {
            return true;
        }

        /**
         * Returns maximum allowed width of element.
         * This is needed when the element is resized by dragging so the resized element does not overflow its container.
         * @returns {Number}.
         */

    }, {
        key: 'getMaxWidth',
        value: function getMaxWidth() {
            var containerSize = this.getContainerSize();
            return containerSize.width;
        }
    }, {
        key: 'createElement',
        value: function createElement() {}
    }, {
        key: 'getElement',
        value: function getElement() {
            return this.el;
        }
    }, {
        key: 'getSizerContainerElement',
        value: function getSizerContainerElement() {
            return this.el;
        }

        /**
         * Returns dom node where elements will be added if they are inside this element.
         * Is null in case this element is not a container element like a frame or a band.
         * @returns {[Object]} dom node
         */

    }, {
        key: 'getContentElement',
        value: function getContentElement() {
            return null;
        }

        /**
         * Adds SetValue commands to command group parameter in case the specified parameter is used in any of
         * the object fields.
         * @param {String} oldParameterName
         * @param {String} newParameterName
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameter',
        value: function addCommandsForChangedParameter(oldParameterName, newParameterName, cmdGroup) {}
    }, {
        key: 'addChildren',
        value: function addChildren(docElements) {}
    }, {
        key: 'addError',
        value: function addError(error) {
            this.errors.push(error);
        }
    }, {
        key: 'clearErrors',
        value: function clearErrors() {
            this.errors = [];
        }
    }, {
        key: 'getErrors',
        value: function getErrors() {
            return this.errors;
        }
    }, {
        key: 'remove',
        value: function remove() {
            if (this.el !== null) {
                this.el.remove();
                this.el = null;
            }
            if (this.panelItem !== null) {
                this.panelItem.getParent().removeChild(this.panelItem);
                this.panelItem = null;
            }
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            var ret = { elementType: this.getElementType() };
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = (0, _getIterator3.default)(this.getFields()), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var field = _step4.value;

                    if (['x', 'y', 'width', 'height'].indexOf(field) === -1) {
                        ret[field] = this.getValue(field);
                    } else {
                        ret[field] = this.getValue(field + 'Val');
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return ret;
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            return (0, _stringify2.default)(this.toJS());
        }
    }]);
    return DocElement;
}();

exports.default = DocElement;


DocElement.type = {
    none: 'none',
    text: 'text',
    image: 'image',
    line: 'line',
    table: 'table',
    pageBreak: 'page_break',
    tableText: 'table_text',
    barCode: 'bar_code',
    band: 'band',
    frame: 'frame'
};

DocElement.dragType = {
    none: -1,
    element: 0,
    sizerN: 1,
    sizerNE: 2,
    sizerE: 3,
    sizerSE: 4,
    sizerS: 5,
    sizerSW: 6,
    sizerW: 7,
    sizerNW: 8
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(103);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(100);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(64);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(64);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(32);

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Parameter = __webpack_require__(16);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Popup window to show selectable items (parameters, patterns, etc.) or to edit test data for array parameter.
 * @class
 */
var PopupWindow = function () {
    function PopupWindow(rootElement, rb) {
        (0, _classCallCheck3.default)(this, PopupWindow);

        this.rootElement = rootElement;
        this.rb = rb;
        this.elWindow = null;
        this.elContent = null;
        this.input = null;
        this.objId = null;
        this.type = null;
        this.parameters = null;
        this.visible = false;
    }

    (0, _createClass3.default)(PopupWindow, [{
        key: 'render',
        value: function render() {
            var _this = this;

            this.elWindow = $('<div class="rbroPopupWindow rbroHidden"></div>');
            this.elContent = $('<div class="rbroPopupWindowContent"></div>').mouseup(function (event) {
                // stop propagation so popup window is not closed
                event.stopPropagation();
            });
            this.elWindow.append(this.elContent);
            var btn = $('<div class="rbroButton rbroRoundButton rbroPopupWindowCancel rbroIcon-cancel"></div>').click(function (event) {
                _this.hide();
            });
            this.elWindow.append(btn);
            $('body').append(this.elWindow);
        }

        /**
         * Shows a popup window for the given items.
         * @param {Object[]} items - items to display in the popup window. Each item must contain a name (String), and
         * optional a description (String) and separator (Boolean). If separator is true the item is not selectable.
         * @param {String} objId - id of data object where the field belongs to.
         * @param {String} tagId - id of DOM element in the panel for the given field. In case of empty string there is no
         * input element available.
         * @param {String} field - field of data object where selected item will be written into.
         * @param {PopupWindow.type} type
         */

    }, {
        key: 'show',
        value: function show(items, objId, tagId, field, type) {
            var _this2 = this;

            var winWidth = $(window).width();
            var winHeight = $(window).height();
            this.input = tagId !== '' ? $('#' + tagId) : null;
            this.objId = objId;
            this.type = type;
            this.elContent.empty();
            $('#rbro_background_overlay').remove();
            if (type === PopupWindow.type.testData) {
                var div = $('<div></div>');
                var table = $('<table></table>');
                var tableHeaderRow = $('<tr></tr>');
                var tableBody = $('<tbody></tbody>');
                var i = void 0;
                tableHeaderRow.append('<th></th>');
                this.parameters = items[0];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(this.parameters), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var parameter = _step.value;

                        tableHeaderRow.append('<th>' + parameter.name + '</th>');
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                table.append($('<thead></thead>').append(tableHeaderRow));
                if (items.length === 1) {
                    this.addTestDataRow(tableBody, this.parameters, null);
                }
                for (i = 1; i < items.length; i++) {
                    this.addTestDataRow(tableBody, this.parameters, items[i]);
                }
                table.append(tableBody);
                div.append(table);
                div.append($('<div class="rbroButton rbroPopupWindowButton rBFullWidthButton">' + this.rb.getLabel('parameterAddTestData') + '</div>').click(function (event) {
                    _this2.addTestDataRow(tableBody, _this2.parameters, null);
                }));
                this.elContent.append(div);
                var width = Math.round(winWidth * 0.8);
                var height = Math.round(winHeight * 0.8);
                this.elWindow.css({ left: Math.round((winWidth - width) / 2) + 'px', top: Math.round((winHeight - height) / 2) + $(window).scrollTop() + 'px',
                    width: width + 'px', height: height + 'px' });
                $('body').append($('<div id="rbro_background_overlay" class="rbroBackgroundOverlay"></div>'));
                $('body').addClass('rbroFixedBackground'); // no scroll bars for background while popup is shown
            } else {
                var ul = $('<ul></ul>').mousedown(function (event) {
                    // prevent default so blur event of input is not triggered,
                    // otherwise popup window would be closed before click event handler of selected
                    // item is triggered
                    event.preventDefault();
                });
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    var _loop = function _loop() {
                        var item = _step2.value;

                        var li = $('<li></li>');
                        if (item.separator) {
                            var separatorClass = 'rbroPopupItemSeparator';
                            if (item.separatorClass) {
                                separatorClass += ' ' + item.separatorClass;
                            }
                            li.attr('class', separatorClass);
                        } else {
                            li.mousedown(function (event) {
                                if (type === PopupWindow.type.pattern) {
                                    _this2.input.val(item.name);
                                    _this2.input.trigger('input');
                                    _this2.hide();
                                } else if (type === PopupWindow.type.parameterSet) {
                                    var paramText = '${' + item.name + '}';
                                    _this2.input.val(paramText);
                                    _this2.input.trigger('input');
                                    autosize.update(_this2.input);
                                    _this2.hide();
                                } else if (type === PopupWindow.type.parameterAppend) {
                                    var _paramText = '${' + item.name + '}';
                                    utils.insertAtCaret(_this2.input.get(0), _paramText);
                                    autosize.update(_this2.input);
                                    _this2.input.trigger('input');
                                    _this2.hide();
                                }
                                event.preventDefault();
                            });
                        }
                        li.append('<div class="rbroPopupItemHeader">' + item.name + '</div>');
                        if (item.description && item.description !== '') {
                            li.append('<div class="rbroPopupItemDescription">' + item.description + '</div>');
                        }
                        ul.append(li);
                    };

                    for (var _iterator2 = (0, _getIterator3.default)(items), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        _loop();
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                this.elContent.append(ul);
                var offset = this.input.offset();
                var top = offset.top;
                // test if popup window should be shown above or below input field
                if (top < winHeight / 2 || top < 300) {
                    top += this.input.height();
                } else {
                    top -= 300;
                }
                this.elWindow.css({ left: offset.left + 'px', top: top + 'px', width: '400px', height: '300px' });
            }

            this.elWindow.removeClass('rbroHidden');
            this.visible = true;
        }
    }, {
        key: 'hide',
        value: function hide() {
            if (this.visible) {
                if (this.input !== null) {
                    this.input.focus();
                }
                if (this.type === PopupWindow.type.testData) {
                    var testData = [];
                    var rows = this.elContent.find('tbody').find('tr');
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = (0, _getIterator3.default)(rows), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var row = _step3.value;

                            var inputs = $(row).find('input');
                            var rowData = {};
                            var i = 0;
                            var _iteratorNormalCompletion4 = true;
                            var _didIteratorError4 = false;
                            var _iteratorError4 = undefined;

                            try {
                                for (var _iterator4 = (0, _getIterator3.default)(this.parameters), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                    var parameter = _step4.value;

                                    var input = inputs.eq(i);
                                    rowData[parameter.name] = input.val().trim();
                                    i++;
                                }
                            } catch (err) {
                                _didIteratorError4 = true;
                                _iteratorError4 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                        _iterator4.return();
                                    }
                                } finally {
                                    if (_didIteratorError4) {
                                        throw _iteratorError4;
                                    }
                                }
                            }

                            testData.push(rowData);
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    var obj = this.rb.getDataObject(this.objId);
                    var testDataStr = (0, _stringify2.default)(testData);
                    if (obj !== null && obj.getValue('testData') !== testDataStr) {
                        var cmd = new _SetValueCmd2.default(this.objId, 'rbro_parameter_test_data', 'testData', testDataStr, _SetValueCmd2.default.type.text, this.rb);
                        this.rb.executeCommand(cmd);
                    }
                    $('#rbro_background_overlay').remove();
                }
                this.elWindow.addClass('rbroHidden');
                this.elContent.empty();
                $('body').removeClass('rbroFixedBackground');
                this.visible = false;
            }
        }
    }, {
        key: 'addTestDataRow',
        value: function addTestDataRow(tableBody, parameters, testData) {
            var _this3 = this;

            var newRow = $('<tr></tr>');
            newRow.append($('<th></th>').append($('<div class="rbroButton rbroDeleteButton rbroIcon-cancel"></div>').click(function (event) {
                $(event.target).parent().parent().remove();
            })));
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                var _loop2 = function _loop2() {
                    var parameter = _step5.value;

                    var data = '';
                    if (testData !== null && parameter.name in testData) {
                        data = testData[parameter.name];
                    }
                    var input = $('<input type="text" value="' + data + '">').focus(function (event) {
                        input.parent().addClass('rbroHasFocus');
                    }).blur(function (event) {
                        input.parent().removeClass('rbroHasFocus');
                    });

                    if (parameter.type === _Parameter2.default.type.number) {
                        utils.setInputDecimal(input);
                    } else if (parameter.type === _Parameter2.default.type.date) {
                        input.attr('placeholder', _this3.rb.getLabel('parameterTestDataDatePattern'));
                    }
                    newRow.append($('<td></td>').append(input));
                };

                for (var _iterator5 = (0, _getIterator3.default)(parameters), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    _loop2();
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            tableBody.append(newRow);
        }
    }]);
    return PopupWindow;
}();

exports.default = PopupWindow;


PopupWindow.type = {
    parameterSet: 0,
    parameterAppend: 1,
    pattern: 2,
    testData: 3
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Interface for all commands.
 * @class
 */
var Command = function () {
    function Command() {
        (0, _classCallCheck3.default)(this, Command);
    }

    (0, _createClass3.default)(Command, [{
        key: 'getName',
        value: function getName() {}
    }, {
        key: 'do',
        value: function _do() {}
    }, {
        key: 'undo',
        value: function undo() {}
    }]);
    return Command;
}();

exports.default = Command;


Command.operation = {
    rename: 'rename',
    change: 'change',
    add: 'add',
    remove: 'remove',
    move: 'move'
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _AddDeleteDocElementCmd = __webpack_require__(24);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _AddDeleteParameterCmd = __webpack_require__(83);

var _AddDeleteParameterCmd2 = _interopRequireDefault(_AddDeleteParameterCmd);

var _AddDeleteStyleCmd = __webpack_require__(84);

var _AddDeleteStyleCmd2 = _interopRequireDefault(_AddDeleteStyleCmd);

var _CommandGroupCmd = __webpack_require__(20);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _MovePanelItemCmd = __webpack_require__(56);

var _MovePanelItemCmd2 = _interopRequireDefault(_MovePanelItemCmd);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Container = __webpack_require__(28);

var _Container2 = _interopRequireDefault(_Container);

var _Parameter = __webpack_require__(16);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _BandElement = __webpack_require__(38);

var _BandElement2 = _interopRequireDefault(_BandElement);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _Document = __webpack_require__(15);

var _Document2 = _interopRequireDefault(_Document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A main panel item either represents a data object (doc element, parameter, etc.) or a container (e.g. page header) for
 * other panel items.
 * @class
 */
var MainPanelItem = function () {
    function MainPanelItem(panelName, panelCategory, parent, data, properties, rb) {
        var _this = this;

        (0, _classCallCheck3.default)(this, MainPanelItem);

        this.properties = { hasChildren: false, showAdd: false, showDelete: true, hasDetails: true, visible: true, draggable: false };
        $.extend(this.properties, properties);
        this.panelName = panelName;
        this.panelCategory = panelCategory;
        var name = data !== null ? data.getName() : '';
        this.id = data !== null ? data.getId() : properties.id;
        this.parent = parent;
        this.data = data;
        this.rb = rb;
        this.children = [];
        this.dragEnterCount = 0;

        this.element = $('<li></li>');
        if (!this.properties.visible) {
            this.element.addClass('rbroHidden');
        }
        var itemDiv = $('<div id="rbro_menu_item' + this.id + '" class="rbroMenuItem"></div>');
        if (this.properties.draggable) {
            itemDiv.attr('draggable', 'true');
            itemDiv.on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', ''); // without setData dragging does not work in FF
                event.originalEvent.dataTransfer.effectAllowed = 'move';
                _this.rb.startBrowserDrag('panelItem', _this.panelCategory, null, _this.id);
                // avoid calling dragstart handler for main div which disables dragging for all other elements
                event.stopPropagation();
            });
        }
        itemDiv.on('dragover', function (event) {
            if (_this.rb.isBrowserDragActive('panelItem') && _this.rb.getBrowserDragCategory() === _this.panelCategory && _this.rb.getBrowserDragId() !== _this.id) {
                // without preventDefault for dragover event, the drop event is not fired
                event.preventDefault();
                event.stopPropagation();
            }
        }).on('dragenter', function (event) {
            if (_this.rb.isBrowserDragActive('panelItem') && _this.rb.getBrowserDragCategory() === _this.panelCategory && _this.rb.getBrowserDragId() !== _this.id) {
                itemDiv.addClass('rbroMenuItemDragOver');
                _this.dragEnterCount++;
                event.preventDefault(); // needed for IE
            }
        }).on('dragleave', function (event) {
            if (_this.rb.isBrowserDragActive('panelItem') && _this.rb.getBrowserDragCategory() === _this.panelCategory && _this.rb.getBrowserDragId() !== _this.id) {
                _this.dragEnterCount--;
                if (_this.dragEnterCount === 0) {
                    itemDiv.removeClass('rbroMenuItemDragOver');
                }
            }
        }).on('drop', function (event) {
            if (_this.rb.isBrowserDragActive('panelItem') && _this.rb.getBrowserDragCategory() === _this.panelCategory && _this.rb.getBrowserDragId() !== _this.id) {
                _this.dragEnterCount--;
                itemDiv.removeClass('rbroMenuItemDragOver');
                var draggedId = _this.rb.getBrowserDragId();
                var draggedObj = _this.rb.getDataObject(draggedId);
                if (draggedObj !== null) {
                    var pos = _this.getSiblingPosition();
                    var parentPanel = _this;
                    if (_this.getParent() !== null) {
                        parentPanel = _this.getParent();
                        pos++;
                    }
                    if (parentPanel !== draggedObj.getPanelItem().getParent() || pos !== draggedObj.getPanelItem().getSiblingPosition()) {
                        var moveItem = false;
                        var cmdGroup = new _CommandGroupCmd2.default('Move panel item', _this.rb);
                        if (draggedObj instanceof _Parameter2.default) {
                            // do not allow dragging array/map into other array/map parameter
                            if (draggedObj.getValue('type') !== _Parameter2.default.type.array && draggedObj.getValue('type') !== _Parameter2.default.type.map || parentPanel === _this.rb.getMainPanel().getParametersItem()) {
                                moveItem = true;
                            }
                        } else if (draggedObj instanceof _DocElement2.default) {
                            var container = null;
                            if (parentPanel.getData() instanceof _Container2.default) {
                                container = parentPanel.getData();
                            } else {
                                var destObj = parentPanel.getData();
                                if (destObj instanceof _DocElement2.default) {
                                    // get linked container if available (e.g. container of frame element),
                                    // otherwise use the parent container
                                    container = destObj.getLinkedContainer();
                                    if (container === null) {
                                        container = destObj.getContainer();
                                    }
                                }
                            }
                            if (container !== null) {
                                moveItem = container.isElementAllowed(draggedObj.getElementType());
                                if (moveItem) {
                                    if (draggedObj.getValue('containerId') !== container.getId()) {
                                        draggedObj.checkBounds(draggedObj.getValue('xVal'), draggedObj.getValue('yVal'), draggedObj.getValue('widthVal'), draggedObj.getValue('heightVal'), container.getSize(), cmdGroup);

                                        var cmd = new _SetValueCmd2.default(draggedObj.getId(), null, 'containerId', container.getId(), _SetValueCmd2.default.type.internal, _this.rb);
                                        cmdGroup.addCommand(cmd);
                                    }
                                }
                            }
                        } else {
                            moveItem = true;
                        }

                        if (moveItem) {
                            var _cmd = new _MovePanelItemCmd2.default(draggedObj.getPanelItem(), parentPanel, pos, _this.rb);
                            cmdGroup.addCommand(_cmd);
                            _this.rb.executeCommand(cmdGroup);
                        }
                    }
                }
                event.preventDefault();
                return false;
            }
        });

        var nameDiv = $('<div class="rbroMenuItemText"><span id="rbro_menu_item_name' + this.id + '">' + name + '</span></div>');
        if (this.properties.showAdd) {
            itemDiv.append($('<span id="rbro_menu_item_add' + this.id + '" class="rbroButton rbroRoundButton rbroIcon-plus"></span>').click(function (event) {
                if (panelName === 'parameter') {
                    var cmd = new _AddDeleteParameterCmd2.default(true, {}, _this.rb.getUniqueId(), _this.getId(), -1, _this.rb);
                    _this.rb.executeCommand(cmd);
                } else if (panelName === 'style') {
                    var _cmd2 = new _AddDeleteStyleCmd2.default(true, {}, _this.rb.getUniqueId(), _this.getId(), -1, _this.rb);
                    _this.rb.executeCommand(_cmd2);
                } else if (panelName === 'band') {
                    var obj = _this.rb.getDataObject(_this.getId());
                    if (obj !== null) {
                        var initialData = null;
                        if (obj instanceof _BandElement2.default) {
                            var linkedContainer = obj.getLinkedContainer();
                            if (linkedContainer !== null) {
                                initialData = { containerId: linkedContainer.getId() };
                            }
                        } else {
                            initialData = { containerId: _this.getId() };
                        }
                        if (initialData !== null) {
                            var _cmd3 = new _AddDeleteDocElementCmd2.default(true, _DocElement2.default.type.band, initialData, _this.rb.getUniqueId(), _this.getId(), -1, _this.rb);
                            _this.rb.executeCommand(_cmd3);
                        }
                    }
                }
                var newItem = _this.children[_this.children.length - 1];
                _this.rb.selectObject(newItem.getId(), true);
                event.stopPropagation();
            }));
        }
        if (this.properties.showDelete) {
            itemDiv.append($('<div class="rbroButton rbroDeleteButton rbroIcon-cancel"></div>').click(function (event) {
                var initialData = _this.getData().toJS();
                var pos = _this.getSiblingPosition();
                var cmd = null;
                if (panelName === 'parameter') {
                    cmd = new _AddDeleteParameterCmd2.default(false, initialData, _this.getId(), _this.parent.getId(), pos, _this.rb);
                } else if (panelName === 'style') {
                    cmd = new _AddDeleteStyleCmd2.default(false, initialData, _this.getId(), _this.parent.getId(), pos, _this.rb);
                } else if (panelName === _DocElement2.default.type.text || panelName === _DocElement2.default.type.image || panelName === _DocElement2.default.type.line || panelName === _DocElement2.default.type.table || panelName === _DocElement2.default.type.pageBreak || panelName === _DocElement2.default.type.frame || panelName === _DocElement2.default.type.band) {
                    cmd = new _AddDeleteDocElementCmd2.default(false, panelName, initialData, _this.getId(), _this.parent.getId(), pos, _this.rb);
                }
                if (cmd !== null) {
                    _this.rb.executeCommand(cmd);
                }
            }));
        }
        itemDiv.click(function (event) {
            // only allow toggle children list of menu item if there are no details or menu item is currently selected
            if (!_this.properties.hasDetails || $('#rbro_menu_item' + _this.id).hasClass('rbroMenuItemActive')) {
                var elChildren = $('#rbro_menu_item_children' + _this.id);
                if (elChildren.length > 0) {
                    itemDiv.toggleClass('rbroMenuItemOpen');
                    elChildren.toggleClass('rbroHidden');
                }
            }
            if (_this.properties.hasDetails) {
                _this.rb.selectObject(_this.id, true);
            }
        });
        if (this.properties.hasChildren) {
            itemDiv.addClass('rbroMenuItemNoChildren rbroMenuItemOpen');
            nameDiv.prepend('<div id="rbro_menu_item_children_toggle' + this.id + '" class="rbroMenuArrow rbroIcon-arrow-right"></div>');
            this.element.append($('<ul id="rbro_menu_item_children' + this.id + '"></ul>'));
        }
        itemDiv.prepend(nameDiv);
        this.element.prepend(itemDiv);
    }

    (0, _createClass3.default)(MainPanelItem, [{
        key: 'getId',
        value: function getId() {
            return this.id;
        }
    }, {
        key: 'getElement',
        value: function getElement() {
            return this.element;
        }
    }, {
        key: 'show',
        value: function show() {
            this.element.removeClass('rbroHidden');
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.element.addClass('rbroHidden');
        }
    }, {
        key: 'getPanelName',
        value: function getPanelName() {
            return this.panelName;
        }
    }, {
        key: 'getParent',
        value: function getParent() {
            return this.parent;
        }
    }, {
        key: 'getData',
        value: function getData() {
            return this.data;
        }
    }, {
        key: 'setData',
        value: function setData(data) {
            this.data = data;
            var name = data !== null ? data.getName() : '';
            $('#rbro_menu_item_name' + this.id).text(name);
        }
    }, {
        key: 'setActive',
        value: function setActive() {
            $('.rbroMenuItem').removeClass('rbroMenuItemActive');
            $('#rbro_menu_item' + this.id).addClass('rbroMenuItemActive');
            if (this.properties.hasDetails) {
                this.rb.setDetailPanel(this.panelName, this.data);
            }
        }
    }, {
        key: 'openParentItems',
        value: function openParentItems() {
            var parent = this.getParent();
            while (parent !== null) {
                parent.open();
                parent = parent.getParent();
            }
        }
    }, {
        key: 'open',
        value: function open() {
            var elChildren = $('#rbro_menu_item_children' + this.getId());
            if (elChildren.length > 0) {
                $('#rbro_menu_item' + this.getId()).addClass('rbroMenuItemOpen');
                elChildren.removeClass('rbroHidden');
            }
        }
    }, {
        key: 'close',
        value: function close() {
            var elChildren = $('#rbro_menu_item_children' + this.getId());
            if (elChildren.length > 0) {
                $('#rbro_menu_item' + this.getId()).removeClass('rbroMenuItemOpen');
                elChildren.addClass('rbroHidden');
            }
        }
    }, {
        key: 'appendChild',
        value: function appendChild(child) {
            if (this.children.length === 0) {
                $('#rbro_menu_item' + this.getId()).removeClass('rbroMenuItemNoChildren');
            }
            this.children.push(child);
            $('#rbro_menu_item_children' + this.getId()).append(child.getElement());
        }
    }, {
        key: 'insertChild',
        value: function insertChild(pos, child) {
            if (this.children.length === 0) {
                $('#rbro_menu_item' + this.getId()).removeClass('rbroMenuItemNoChildren');
            }
            if (pos !== -1) {
                this.children.splice(pos, 0, child);
            } else {
                this.children.push(child);
            }
            var elChildren = $('#rbro_menu_item_children' + this.getId() + ' > li');
            if (pos !== -1 && pos < elChildren.length) {
                elChildren.eq(pos).before(child.getElement());
            } else {
                $('#rbro_menu_item_children' + this.getId()).append(child.getElement());
            }
        }
    }, {
        key: 'getChildren',
        value: function getChildren() {
            return this.children;
        }
    }, {
        key: 'removeChild',
        value: function removeChild(child) {
            this.removeChildInternal(child, true);
        }
    }, {
        key: 'removeChildInternal',
        value: function removeChildInternal(child, deleteDomNode) {
            for (var i = 0; i < this.children.length; i++) {
                if (child.getId() === this.children[i].getId()) {
                    this.children.splice(i, 1);
                    if (deleteDomNode) {
                        child.getElement().remove();
                    }
                    if (this.children.length === 0) {
                        $('#rbro_menu_item' + this.getId()).addClass('rbroMenuItemNoChildren');
                    }
                    break;
                }
            }
        }
    }, {
        key: 'getSiblingPosition',
        value: function getSiblingPosition() {
            if (this.getParent() !== null) {
                var siblings = this.getParent().getChildren();
                for (var i = 0; i < siblings.length; i++) {
                    if (siblings[i] === this) {
                        return i;
                    }
                }
            }
            return 0;
        }

        /**
         * Move panel item to another parent.
         * The panel will be appended to the parent, i.e. added after all children of the parent.
         * @param {MainPanelItem} parentPanelItem - new parent panel
         */

    }, {
        key: 'moveTo',
        value: function moveTo(parentPanelItem) {
            var el = this.element.detach();
            this.parent.removeChildInternal(this, false);
            this.parent = parentPanelItem;
            parentPanelItem.appendChild(this);
        }

        /**
         * Move panel item to another parent at given position.
         * @param {MainPanelItem} parentPanelItem - new parent panel
         * @param {Number} pos - Position index in children list of new parent where the panel will be inserted.
         */

    }, {
        key: 'moveToPosition',
        value: function moveToPosition(parentPanelItem, pos) {
            var el = this.element.detach();
            this.parent.removeChildInternal(this, false);
            this.parent = parentPanelItem;
            parentPanelItem.insertChild(pos, this);
        }
    }, {
        key: 'clear',
        value: function clear() {
            $('#rbro_menu_item_children' + this.id).empty();
            this.children = [];
        }
    }]);
    return MainPanelItem;
}();

exports.default = MainPanelItem;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(102);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Style data object. Contains all text styles (alignment, border, etc.):
 * @class
 */
var Style = function () {
    function Style(id, initialData, rb) {
        (0, _classCallCheck3.default)(this, Style);

        this.rb = rb;
        this.id = id;
        this.name = rb.getLabel('style');
        this.panelItem = null;
        this.errors = [];

        this.bold = false;
        this.italic = false;
        this.underline = false;
        this.horizontalAlignment = Style.alignment.left;
        this.verticalAlignment = Style.alignment.top;
        this.textColor = '#000000';
        this.backgroundColor = '';
        this.font = Style.font.courier;
        this.fontSize = 12;
        this.lineSpacing = 1;
        this.borderColor = '#000000';
        this.borderWidth = '1';
        this.borderAll = false;
        this.borderLeft = false;
        this.borderTop = false;
        this.borderRight = false;
        this.borderBottom = false;
        this.paddingLeft = '';
        this.paddingTop = '';
        this.paddingRight = '';
        this.paddingBottom = '';
        this.setInitialData(initialData);
    }

    (0, _createClass3.default)(Style, [{
        key: 'setInitialData',
        value: function setInitialData(initialData) {
            for (var key in initialData) {
                if (initialData.hasOwnProperty(key) && this.hasOwnProperty(key)) {
                    this[key] = initialData[key];
                }
            }
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            return ['id', 'name', 'bold', 'italic', 'underline', 'horizontalAlignment', 'verticalAlignment', 'textColor', 'backgroundColor', 'font', 'fontSize', 'lineSpacing', 'borderColor', 'borderWidth', 'borderAll', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom'];
        }
    }, {
        key: 'getId',
        value: function getId() {
            return this.id;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'getPanelItem',
        value: function getPanelItem() {
            return this.panelItem;
        }
    }, {
        key: 'setPanelItem',
        value: function setPanelItem(panelItem) {
            this.panelItem = panelItem;
        }
    }, {
        key: 'getValue',
        value: function getValue(field) {
            return this[field];
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            this[field] = value;
            if (field.indexOf('border') !== -1) {
                Style.setBorderValue(this, field, '', value, elSelector, isShown);
            }
        }
    }, {
        key: 'setBorderAll',
        value: function setBorderAll(fieldPrefix, value) {
            this[fieldPrefix + 'borderAll'] = value;
        }
    }, {
        key: 'addError',
        value: function addError(error) {
            this.errors.push(error);
        }
    }, {
        key: 'clearErrors',
        value: function clearErrors() {
            this.errors = [];
        }
    }, {
        key: 'getErrors',
        value: function getErrors() {
            return this.errors;
        }
    }, {
        key: 'remove',
        value: function remove() {}
    }, {
        key: 'select',
        value: function select() {}
    }, {
        key: 'deselect',
        value: function deselect() {}
    }, {
        key: 'toJS',
        value: function toJS() {
            var ret = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.getFields()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var field = _step.value;

                    ret[field] = this.getValue(field);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return ret;
        }

        /**
         * Updates GUI for border settings and borderAll setting of object.
         * @param {Object} obj - document element of which the border settings will be updated.
         * @param {String} field - border field which was modified.
         * @param {String} fieldPrefix - prefix of field to reuse style settings for different
         * sections (e.g. for conditional style).
         * @param {Boolean} value - new value for specified field.
         * @param {String} elSelector - jquery selector to specify the DOM element.
         * @param {Boolean} isShown - true if the specified object is currently visible in the GUI.
         */

    }], [{
        key: 'setBorderValue',
        value: function setBorderValue(obj, field, fieldPrefix, value, elSelector, isShown) {
            if (field === fieldPrefix + 'borderAll') {
                obj.borderLeft = obj.borderTop = obj.borderRight = obj.borderBottom = value;
                if (isShown) {
                    if (value) {
                        $(elSelector).parent().find('button').addClass('rbroButtonActive');
                    } else {
                        $(elSelector).parent().find('button').removeClass('rbroButtonActive');
                    }
                }
            } else if (field === fieldPrefix + 'borderLeft' || field === fieldPrefix + 'borderTop' || field === fieldPrefix + 'borderRight' || field === fieldPrefix + 'borderBottom') {
                if (obj.getValue(fieldPrefix + 'borderLeft') && obj.getValue(fieldPrefix + 'borderTop') && obj.getValue(fieldPrefix + 'borderRight') && obj.getValue(fieldPrefix + 'borderBottom')) {
                    obj.setBorderAll(fieldPrefix, true);
                    if (isShown) {
                        $(elSelector).parent().find('button[value="' + fieldPrefix + 'borderAll"]').addClass('rbroButtonActive');
                    }
                } else {
                    obj.setBorderAll(fieldPrefix, false);
                    if (isShown) {
                        $(elSelector).parent().find('button[value="' + fieldPrefix + 'borderAll"]').removeClass('rbroButtonActive');
                    }
                }
            }
        }
    }]);
    return Style;
}();

// Verdana, Arial
// ['Courier', 'Courier-Bold', 'Courier-BoldOblique', 'Courier-Oblique', 'Helvetica', 'Helvetica-Bold', 'Helvetica-BoldOblique', 'Helvetica-Oblique', 'Symbol', 'Times-Bold', 'Times-BoldItalic', 'Times-Italic', 'Times-Roman', 'ZapfDingbats']


exports.default = Style;
Style.font = {
    courier: 'courier',
    helvetica: 'helvetica',
    timesRoman: 'times_roman'
};

Style.alignment = {
    // horizontal
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify',
    // vertical
    top: 'top',
    middle: 'middle',
    bottom: 'bottom'
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _AddDeleteDocElementCmd = __webpack_require__(24);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _DocumentProperties = __webpack_require__(37);

var _DocumentProperties2 = _interopRequireDefault(_DocumentProperties);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Area to display all bands and its doc elements.
 * Further handles dragging of doc elements.
 * @class
 */
var Document = function () {
    function Document(rootElement, showGrid, rb) {
        (0, _classCallCheck3.default)(this, Document);

        this.rootElement = rootElement;
        this.rb = rb;
        this.elDocContent = null;
        this.elHeader = null;
        this.elContent = null;
        this.elFooter = null;
        this.gridVisible = showGrid;
        this.gridSize = 10;
        this.pdfPreviewExists = false;

        // moving/resizing of element
        this.dragging = false;
        this.dragElementType = null;
        this.dragType = _DocElement2.default.dragType.none;
        this.dragContainerId = null;
        this.dragLinkedContainerId = null;
        this.dragCurrentContainerId = null;
        this.dragStartX = 0;
        this.dragStartY = 0;
        this.dragCurrentX = 0;
        this.dragCurrentY = 0;
        this.dragSnapToGrid = false;
        this.dragEnterCount = 0;
    }

    (0, _createClass3.default)(Document, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var panel = $('#rbro_document_panel').mousedown(function (event) {
                if (_this.rb.isDocElementSelected()) {
                    _this.rb.deselectAll();
                }
            });

            var elDocTabs = $('<div id="rbro_document_tabs" class="rbroDocumentTabs"></div>').mousedown(function (event) {
                // avoid deselection of doc elements when clicking document tab
                event.stopPropagation();
            });

            elDocTabs.append($('<div id="rbro_document_tab_pdf_layout" class="rbroDocumentTab rbroButton rbroTabButton">\n               ' + this.rb.getLabel('documentTabPdfLayout') + '</div>').click(function (event) {
                _this.setDocumentTab(Document.tab.pdfLayout);
            }));
            var btnPdfPreview = $('<div id="rbro_document_tab_pdf_preview" class="rbroDocumentTab rbroButton rbroTabButton rbroHidden rbroPdfPreview \n                ' + (this.rb.getProperty('enableSpreadsheet') ? 'rbroXlsxDownload' : '') + '">\n                ' + this.rb.getLabel('documentTabPdfPreview') + '</div>').click(function (event) {
                _this.setDocumentTab(Document.tab.pdfPreview);
            });
            if (this.rb.getProperty('enableSpreadsheet')) {
                btnPdfPreview.append($('<span class="rbroIcon-xlsx rbroXlsxDownlaodButton" title="' + this.rb.getLabel('documentTabXlsxDownload') + '"></span>').click(function (event) {
                    _this.rb.downloadSpreadsheet();
                }));
            }
            btnPdfPreview.append($('<span class="rbroIcon-cancel" title="' + this.rb.getLabel('documentTabClose') + '"></span>').click(function (event) {
                _this.closePdfPreviewTab();
            }));
            elDocTabs.append(btnPdfPreview);
            panel.append(elDocTabs);

            var elDoc = $('<div id="rbro_document_pdf" class="rbroDocument rbroDragTarget rbroHidden"></div>');
            var docProperties = this.rb.getDocumentProperties();
            this.elDocContent = $('<div id="rbro_document_content"\n            class="rbroDocumentContent ' + (this.gridVisible ? 'rbroDocumentGrid' : '') + '"></div>');
            this.elHeader = $('<div id="rbro_header" class="rbroDocumentBand rbroElementContainer"\n            style="top: 0px; left: 0px;"></div>');
            this.elHeader.append($('<div class="rbroDocumentBandDescription">' + this.rb.getLabel('bandHeader') + '</div>'));
            this.elDocContent.append(this.elHeader);
            this.elContent = $('<div id="rbro_content" class="rbroDocumentBand rbroElementContainer"></div>');
            this.elContent.append($('<div class="rbroDocumentBandDescription">' + this.rb.getLabel('bandContent') + '</div>'));
            this.elDocContent.append(this.elContent);
            this.elFooter = $('<div id="rbro_footer" class="rbroDocumentBand rbroElementContainer"\n            style="bottom: 0px; left 0px;"></div>');
            this.elFooter.append($('<div class="rbroDocumentBandDescription">' + this.rb.getLabel('bandFooter') + '</div>'));
            this.elDocContent.append(this.elFooter);
            elDoc.append(this.elDocContent);

            this.initializeEventHandlers();

            elDoc.append('<div id="rbro_divider_margin_left" class="rbroDivider rbroDividerMarginLeft"></div>');
            elDoc.append('<div id="rbro_divider_margin_top" class="rbroDivider rbroDividerMarginTop"></div>');
            elDoc.append('<div id="rbro_divider_margin_right" class="rbroDivider rbroDividerMarginRight"></div>');
            elDoc.append('<div id="rbro_divider_margin_bottom" class="rbroDivider rbroDividerMarginBottom"></div>');
            elDoc.append('<div id="rbro_divider_header" class="rbroDivider rbroDividerHeader"></div>');
            elDoc.append('<div id="rbro_divider_footer" class="rbroDivider rbroDividerFooter"></div>');
            panel.append(elDoc);

            panel.append($('<div id="rbro_document_pdf_preview" class="rbroDocumentPreview"></div>'));

            var size = docProperties.getPageSize();
            this.updatePageSize(size.width, size.height);
            this.updateHeader();
            this.updateFooter();
            this.updatePageMargins();
            this.updateDocumentTabs();

            this.setDocumentTab(Document.tab.pdfLayout);
        }
    }, {
        key: 'initializeEventHandlers',
        value: function initializeEventHandlers() {
            var _this2 = this;

            $('#rbro_document_panel').mousemove(function (event) {
                if (_this2.dragging) {
                    if (_this2.dragType === _DocElement2.default.dragType.element) {
                        var container = _this2.getContainer(event.originalEvent.pageX, event.originalEvent.pageY, _this2.dragElementType);
                        var containerId = null;
                        if (container !== null) {
                            containerId = container.getId();
                            if (containerId === _this2.dragLinkedContainerId) {
                                // container is the same as the linked container of dragged element, this is
                                // the case when dragging container elements like frames
                                container = container.getParent();
                                containerId = container !== null ? container.getId() : null;
                            }
                        }
                        if (containerId !== _this2.dragCurrentContainerId) {
                            $('.rbroElementContainer').removeClass('rbroElementDragOver');
                            if (container !== null && containerId !== _this2.dragContainerId) {
                                container.dragOver();
                            }
                        }
                        _this2.dragCurrentContainerId = containerId;
                    }
                    _this2.dragCurrentX = event.originalEvent.pageX;
                    _this2.dragCurrentY = event.originalEvent.pageY;
                    _this2.dragSnapToGrid = !event.ctrlKey;
                    _this2.rb.updateSelectionDrag(event.originalEvent.pageX - _this2.dragStartX, event.originalEvent.pageY - _this2.dragStartY, _this2.dragType, null, _this2.dragSnapToGrid, false);
                }
            });
            this.elDocContent.on('dragover', function (event) {
                if (_this2.rb.isBrowserDragActive('docElement')) {
                    var container = _this2.getContainer(event.originalEvent.pageX, event.originalEvent.pageY, _this2.dragElementType);
                    var containerId = container !== null ? container.getId() : null;
                    if (containerId !== _this2.dragContainerId) {
                        $('.rbroElementContainer').removeClass('rbroElementDragOver');
                        if (container !== null) {
                            container.dragOver();
                        }
                        _this2.dragContainerId = containerId;
                    }
                    // without preventDefault for dragover event, the drop event is not fired
                    event.preventDefault();
                    event.stopPropagation();
                }
            }).on('dragenter', function (event) {
                if (_this2.rb.isBrowserDragActive('docElement')) {
                    _this2.dragEnterCount++;
                    event.preventDefault(); // needed for IE
                }
            }).on('dragleave', function (event) {
                if (_this2.rb.isBrowserDragActive('docElement')) {
                    _this2.dragEnterCount--;
                    if (_this2.dragEnterCount === 0) {
                        $('.rbroElementContainer').removeClass('rbroElementDragOver');
                        _this2.dragContainerId = null;
                    }
                }
            }).on('drop', function (event) {
                if (_this2.rb.isBrowserDragActive('docElement')) {
                    $('.rbroElementContainer').removeClass('rbroElementDragOver');
                    var docProperties = _this2.rb.getDocumentProperties();
                    var container = _this2.getContainer(event.originalEvent.pageX, event.originalEvent.pageY, _this2.dragElementType);
                    while (container !== null && !container.isElementAllowed(_this2.dragElementType)) {
                        container = container.getParent();
                    }
                    if (container !== null && container.isElementAllowed(_this2.dragElementType)) {
                        var offset = _this2.elDocContent.offset();
                        var x = event.originalEvent.pageX - offset.left;
                        var y = event.originalEvent.pageY - offset.top;
                        var containerOffset = container.getOffset();
                        x -= containerOffset.x;
                        y -= containerOffset.y;
                        if (!event.ctrlKey && _this2.rb.getDocument().isGridVisible()) {
                            var gridSize = _this2.rb.getDocument().getGridSize();
                            x = utils.roundValueToInterval(x, gridSize);
                            y = utils.roundValueToInterval(y, gridSize);
                        }
                        var initialData = { x: '' + x, y: '' + y, containerId: container.getId() };
                        var cmd = new _AddDeleteDocElementCmd2.default(true, _this2.dragElementType, initialData, _this2.rb.getUniqueId(), container.getId(), -1, _this2.rb);
                        _this2.rb.executeCommand(cmd);
                    }
                    event.preventDefault();
                    return false;
                }
            });
        }
    }, {
        key: 'updatePageSize',
        value: function updatePageSize(width, height) {
            $('#rbro_document_pdf').css({ width: this.rb.toPixel(width), height: this.rb.toPixel(height) });
        }
    }, {
        key: 'updatePageMargins',
        value: function updatePageMargins() {
            var docProperties = this.rb.getDocumentProperties();
            var left = this.rb.toPixel(utils.convertInputToNumber(docProperties.getValue('marginLeft')) - 1);
            var top = this.rb.toPixel(utils.convertInputToNumber(docProperties.getValue('marginTop')) - 1);
            var marginRight = utils.convertInputToNumber(docProperties.getValue('marginRight'));
            var marginBottom = utils.convertInputToNumber(docProperties.getValue('marginBottom'));
            var right = this.rb.toPixel(marginRight);
            var bottom = this.rb.toPixel(marginBottom);
            $('#rbro_divider_margin_left').css('left', left);
            $('#rbro_divider_margin_top').css('top', top);
            // hide right/bottom divider in case margin is 0, otherwise divider is still visible
            // because it is one pixel to the left/top of document border
            if (marginRight !== 0) {
                $('#rbro_divider_margin_right').css('right', right).show();
            } else {
                $('#rbro_divider_margin_right').hide();
            }
            if (marginBottom !== 0) {
                $('#rbro_divider_margin_bottom').css('bottom', bottom).show();
            } else {
                $('#rbro_divider_margin_bottom').hide();
            }
            this.elDocContent.css({ left: left, top: top, right: right, bottom: bottom });
        }
    }, {
        key: 'updateHeader',
        value: function updateHeader() {
            var docProperties = this.rb.getDocumentProperties();
            if (docProperties.getValue('header')) {
                var headerSize = this.rb.toPixel(docProperties.getValue('headerSize'));
                this.elHeader.css('height', headerSize);
                this.elHeader.show();
                $('#rbro_divider_header').css('top', this.rb.toPixel(utils.convertInputToNumber(docProperties.getValue('marginTop')) + utils.convertInputToNumber(docProperties.getValue('headerSize')) - 1));
                $('#rbro_divider_header').show();
                this.elContent.css('top', headerSize);
            } else {
                this.elHeader.hide();
                $('#rbro_divider_header').hide();
                this.elContent.css('top', this.rb.toPixel(0));
            }
        }
    }, {
        key: 'updateFooter',
        value: function updateFooter() {
            var docProperties = this.rb.getDocumentProperties();
            if (docProperties.getValue('footer')) {
                var footerSize = this.rb.toPixel(docProperties.getValue('footerSize'));
                this.elFooter.css('height', footerSize);
                this.elFooter.show();
                $('#rbro_divider_footer').css('bottom', this.rb.toPixel(utils.convertInputToNumber(docProperties.getValue('marginBottom')) + utils.convertInputToNumber(docProperties.getValue('footerSize'))));
                $('#rbro_divider_footer').show();
                this.elContent.css('bottom', footerSize);
            } else {
                this.elFooter.hide();
                $('#rbro_divider_footer').hide();
                this.elContent.css('bottom', this.rb.toPixel(0));
            }
        }
    }, {
        key: 'setDocumentTab',
        value: function setDocumentTab(tab) {
            $('#rbro_document_tabs .rbroDocumentTab').removeClass('rbroActive');
            // use z-index to show pdf preview instead of show/hide of div because otherwise pdf is reloaded (and generated) again
            if (tab === Document.tab.pdfLayout) {
                $('#rbro_document_tab_pdf_layout').addClass('rbroActive');
                $('#rbro_document_pdf').removeClass('rbroHidden');
                $('#rbro_document_pdf_preview').css('z-index', '');
                $('.rbroElementButtons .rbroMenuButton').removeClass('rbroDisabled').prop('draggable', true);
                $('.rbroActionButtons .rbroActionButton').prop('disabled', false);
            } else if (this.pdfPreviewExists && tab === Document.tab.pdfPreview) {
                $('#rbro_document_tab_pdf_preview').addClass('rbroActive');
                $('#rbro_document_pdf').addClass('rbroHidden');
                $('#rbro_document_pdf_preview').css('z-index', '1');
                $('.rbroElementButtons .rbroMenuButton').addClass('rbroDisabled').prop('draggable', false);
                $('.rbroActionButtons .rbroActionButton').prop('disabled', true);
            }
        }
    }, {
        key: 'openPdfPreviewTab',
        value: function openPdfPreviewTab(reportUrl) {
            var pdfObj = '<object data="' + reportUrl + '" type="application/pdf" width="100%" height="100%"></object>';
            this.pdfPreviewExists = true;
            $('#rbro_document_pdf_preview').empty();
            $('#rbro_document_pdf_preview').append(pdfObj);
            this.setDocumentTab(Document.tab.pdfPreview);
            this.updateDocumentTabs();
        }
    }, {
        key: 'closePdfPreviewTab',
        value: function closePdfPreviewTab() {
            this.pdfPreviewExists = false;
            $('#rbro_document_pdf_preview').empty();
            this.setDocumentTab(Document.tab.pdfLayout);
            this.updateDocumentTabs();
        }
    }, {
        key: 'updateDocumentTabs',
        value: function updateDocumentTabs() {
            var tabCount = 1;
            if (this.pdfPreviewExists) {
                $('#rbro_document_tab_pdf_preview').removeClass('rbroHidden');
                tabCount++;
            } else {
                $('#rbro_document_tab_pdf_preview').addClass('rbroHidden');
            }
            if (tabCount > 1) {
                $('#rbro_document_tabs').show();
                $('#rbro_document_panel').addClass('rbroHasTabs');
            } else {
                $('#rbro_document_tabs').hide();
                $('#rbro_document_panel').removeClass('rbroHasTabs');
            }
        }

        /**
         * Returns container for given absolute position.
         * @param {Number} absPosX - absolute x position.
         * @param {Number} absPosY - absolute y position.
         * @param {String} elementType - needed for finding container, not all elements are allowed
         * in all containers (e.g. a frame cannot contain another frame).
         * @returns {[Container]} Container or null in case no container was found for given position.
         */

    }, {
        key: 'getContainer',
        value: function getContainer(absPosX, absPosY, elementType) {
            var offset = this.elDocContent.offset();
            return this.rb.getContainer(absPosX - offset.left, absPosY - offset.top, elementType);
        }
    }, {
        key: 'isGridVisible',
        value: function isGridVisible() {
            return this.gridVisible;
        }
    }, {
        key: 'toggleGrid',
        value: function toggleGrid() {
            this.gridVisible = !this.gridVisible;
            if (this.gridVisible) {
                this.elDocContent.addClass('rbroDocumentGrid');
            } else {
                this.elDocContent.removeClass('rbroDocumentGrid');
            }
        }
    }, {
        key: 'getGridSize',
        value: function getGridSize() {
            return this.gridSize;
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this.elDocContent.height();
        }
    }, {
        key: 'getElement',
        value: function getElement(band) {
            if (band === Document.band.header) {
                return this.elHeader;
            } else if (band === Document.band.content) {
                return this.elContent;
            } else if (band === Document.band.footer) {
                return this.elFooter;
            }
            return null;
        }
    }, {
        key: 'isDragging',
        value: function isDragging() {
            return this.dragging;
        }
    }, {
        key: 'isDragged',
        value: function isDragged() {
            return this.dragging && (this.dragStartX !== this.dragCurrentX || this.dragStartY !== this.dragCurrentY);
        }
    }, {
        key: 'startDrag',
        value: function startDrag(x, y, containerId, linkedContainerId, elementType, dragType) {
            this.dragging = true;
            this.dragStartX = this.dragCurrentX = x;
            this.dragStartY = this.dragCurrentY = y;
            this.dragElementType = elementType;
            this.dragType = dragType;
            this.dragContainerId = containerId;
            this.dragLinkedContainerId = linkedContainerId;
            this.dragCurrentContainerId = null;
            this.dragSnapToGrid = false;
        }
    }, {
        key: 'stopDrag',
        value: function stopDrag() {
            var diffX = this.dragCurrentX - this.dragStartX;
            var diffY = this.dragCurrentY - this.dragStartY;
            if (diffX !== 0 || diffY !== 0) {
                var container = null;
                if (this.dragType === _DocElement2.default.dragType.element) {
                    container = this.rb.getDataObject(this.dragCurrentContainerId);
                }
                this.rb.updateSelectionDrag(diffX, diffY, this.dragType, container, this.dragSnapToGrid, true);
            } else {
                this.rb.updateSelectionDrag(0, 0, this.dragType, null, this.dragSnapToGrid, false);
            }
            this.dragging = false;
            this.dragType = _DocElement2.default.dragType.none;
            this.dragContainerId = this.dragCurrentContainerId = null;
            $('.rbroElementContainer').removeClass('rbroElementDragOver');
        }
    }, {
        key: 'startBrowserDrag',
        value: function startBrowserDrag(dragElementType) {
            this.dragEnterCount = 0;
            this.dragContainerId = null;
            this.dragLinkedContainerId = null;
            this.dragElementType = dragElementType;
        }
    }]);
    return Document;
}();

exports.default = Document;


Document.band = {
    none: -1,
    header: 1,
    content: 2,
    footer: 3
};

Document.tab = {
    pdfLayout: 'pdfLayout',
    pdfPreview: 'pdfPreview'
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(32);

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parameter data object. Contains all parameter settings including test data.
 * @class
 */
var Parameter = function () {
    function Parameter(id, initialData, rb) {
        (0, _classCallCheck3.default)(this, Parameter);

        this.rb = rb;
        this.id = id;
        this.name = rb.getLabel('parameter');
        this.panelItem = null;
        this.errors = [];

        this.type = Parameter.type.string;
        this.arrayItemType = Parameter.type.string;
        this.eval = !rb.getProperty('adminMode'); // if false value comes from database
        this.nullable = false;
        this.pattern = '';
        this.expression = '';
        this.testData = '';
        this.children = [];
        this.editable = rb.getProperty('adminMode');
        this.showOnlyNameType = false;
        this.setInitialData(initialData);
    }

    (0, _createClass3.default)(Parameter, [{
        key: 'setInitialData',
        value: function setInitialData(initialData) {
            for (var key in initialData) {
                if (initialData.hasOwnProperty(key) && this.hasOwnProperty(key)) {
                    this[key] = initialData[key];
                }
            }
            if ('showOnlyNameType' in initialData && initialData['showOnlyNameType']) {
                this.editable = false;
            }
        }

        /**
         * Called after initialization is finished.
         */

    }, {
        key: 'setup',
        value: function setup() {
            if (this.type === Parameter.type.array || this.type === Parameter.type.map) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(this.children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var child = _step.value;

                        var parameter = new Parameter(child.id || this.rb.getUniqueId(), child, this.rb);
                        this.rb.addParameter(parameter);
                        var panelItem = new _MainPanelItem2.default('parameter', '', this.panelItem, parameter, { hasChildren: true, showAdd: this.editable, showDelete: this.editable, draggable: true }, this.rb);
                        parameter.setPanelItem(panelItem);
                        this.panelItem.appendChild(panelItem);
                        parameter.setup();
                        this.rb.notifyEvent(parameter, _Command2.default.operation.add);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            return ['id', 'name', 'type', 'arrayItemType', 'eval', 'nullable', 'pattern', 'expression', 'showOnlyNameType', 'testData'];
        }
    }, {
        key: 'getId',
        value: function getId() {
            return this.id;
        }

        /**
         * Returns highest id of this component including all its child components.
         * @returns {Number}
         */

    }, {
        key: 'getMaxId',
        value: function getMaxId() {
            var maxId = this.id;
            if (this.type === Parameter.type.array || this.type === Parameter.type.map) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = (0, _getIterator3.default)(this.children), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var child = _step2.value;

                        if (child.id > maxId) {
                            maxId = child.id;
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
            return maxId;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'getPanelItem',
        value: function getPanelItem() {
            return this.panelItem;
        }
    }, {
        key: 'setPanelItem',
        value: function setPanelItem(panelItem) {
            this.panelItem = panelItem;
        }
    }, {
        key: 'getValue',
        value: function getValue(field) {
            return this[field];
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            this[field] = value;
            if (field === 'type') {
                if (isShown && value === Parameter.type.date) {
                    $('#rbro_parameter_test_data').attr('placeholder', this.rb.getLabel('parameterTestDataDatePattern'));
                } else {
                    $('#rbro_parameter_test_data').attr('placeholder', '');
                }
            }
        }

        /**
         * Returns parent in case parameter is child of a map/array parameter.
         * @returns {[Parameter]} parent parameter if available, null otherwise.
         */

    }, {
        key: 'getParent',
        value: function getParent() {
            if (this.panelItem !== null && this.panelItem.getParent().getData() instanceof Parameter) {
                return this.panelItem.getParent().getData();
            }
            return null;
        }

        /**
         * Returns the full parameter name.
         * In case parameter is child of a map/array parameter the returned name is parentName.name, otherwise only name.
         * @param {[String]} parentName - use this name for parent instead of current parent name. If null the
         * current parent name is used.
         * @param {[String]} name - use this name for the parameter instead of current name. If null the
         * current parameter name is used.
         * @returns {String}
         */

    }, {
        key: 'getFullName',
        value: function getFullName(parentName, name) {
            if (name === null) {
                name = this.getName();
            }
            var parent = this.getParent();
            if (parent !== null) {
                if (parentName === null) {
                    parentName = parent.getName();
                }
                return parentName + '.' + name;
            }
            return name;
        }
    }, {
        key: 'addError',
        value: function addError(error) {
            this.errors.push(error);
        }
    }, {
        key: 'clearErrors',
        value: function clearErrors() {
            this.errors = [];
        }
    }, {
        key: 'getErrors',
        value: function getErrors() {
            return this.errors;
        }
    }, {
        key: 'remove',
        value: function remove() {}
    }, {
        key: 'select',
        value: function select() {}
    }, {
        key: 'deselect',
        value: function deselect() {}

        /**
         * Adds SetValue commands to command group parameter in case the specified parameter is used in any of
         * the object fields.
         * @param {String} oldParameterName
         * @param {String} newParameterName
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameter',
        value: function addCommandsForChangedParameter(oldParameterName, newParameterName, cmdGroup) {
            if (this.expression.indexOf(oldParameterName) !== -1) {
                var cmd = new _SetValueCmd2.default(this.id, 'rbro_parameter_expression', 'expression', utils.replaceAll(this.expression, oldParameterName, newParameterName), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(cmd);
            }
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = (0, _getIterator3.default)(this.getChildren()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var child = _step3.value;

                    child.addCommandsForChangedParameter(oldParameterName, newParameterName, cmdGroup);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }

        /**
         * Update test data for arrays. Adapt field names of list items so test data is still valid when a
         * parameter of a list item is renamed.
         * @param {String} oldParameterName
         * @param {String} newParameterName
         * @param {CommandGroupCmd} cmdGroup - possible SetValue command will be added to this command group.
         */

    }, {
        key: 'addUpdateTestDataCmdForChangedParameter',
        value: function addUpdateTestDataCmdForChangedParameter(oldParameter, newParameter, cmdGroup) {
            if (this.type === Parameter.type.array) {
                var rows = [];
                try {
                    var testData = JSON.parse(this.testData);
                    if (Array.isArray(testData)) {
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = (0, _getIterator3.default)(testData), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var row = _step4.value;

                                var itemRow = {};
                                for (var val in row) {
                                    if (row.hasOwnProperty(val)) {
                                        if (val === oldParameter) {
                                            itemRow[newParameter] = row[val];
                                        } else {
                                            itemRow[val] = row[val];
                                        }
                                    }
                                }
                                rows.push(itemRow);
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                    _iterator4.return();
                                }
                            } finally {
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }
                    }
                    var testDataStr = (0, _stringify2.default)(rows);
                    if (this.testData !== testDataStr) {
                        var cmd = new _SetValueCmd2.default(this.id, 'rbro_parameter_test_data', 'testData', testDataStr, _SetValueCmd2.default.type.text, this.rb);
                        cmdGroup.addCommand(cmd);
                    }
                } catch (e) {}
            }
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            var ret = {};
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = (0, _getIterator3.default)(this.getFields()), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var field = _step5.value;

                    ret[field] = this.getValue(field);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            if (this.type === Parameter.type.array || this.type === Parameter.type.map) {
                var children = [];
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = (0, _getIterator3.default)(this.panelItem.getChildren()), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var child = _step6.value;

                        children.push(child.getData().toJS());
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }

                ret.children = children;
            }
            return ret;
        }
    }, {
        key: 'getChildren',
        value: function getChildren() {
            var children = [];
            if (this.type === Parameter.type.array || this.type === Parameter.type.map) {
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = (0, _getIterator3.default)(this.panelItem.getChildren()), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var child = _step7.value;

                        children.push(child.getData());
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }
            }
            return children;
        }

        /**
         * In case of map parameter all child parameters are appended, for other parameter types the
         * parameter itself is appended. Parameters with type array are only added if explicitly
         * specified in allowedTypes parameter.
         * Used for parameter popup window.
         * @param {Object[]} parameters - list where parameter items will be appended to.
         * @param {String[]} allowedTypes - specify allowed parameter types which will be added to the
         * parameter list. If not set all parameter types are allowed.
         */

    }, {
        key: 'appendParameterItems',
        value: function appendParameterItems(parameters, allowedTypes) {
            if (this.type === Parameter.type.map) {
                var parametersToAppend = [];
                if (Array.isArray(allowedTypes)) {
                    var _iteratorNormalCompletion8 = true;
                    var _didIteratorError8 = false;
                    var _iteratorError8 = undefined;

                    try {
                        for (var _iterator8 = (0, _getIterator3.default)(this.getChildren()), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                            var child = _step8.value;

                            if (allowedTypes.indexOf(child.type) !== -1) {
                                parametersToAppend.push(child);
                            }
                        }
                    } catch (err) {
                        _didIteratorError8 = true;
                        _iteratorError8 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion8 && _iterator8.return) {
                                _iterator8.return();
                            }
                        } finally {
                            if (_didIteratorError8) {
                                throw _iteratorError8;
                            }
                        }
                    }
                } else {
                    parametersToAppend = this.getChildren();
                }
                if (parametersToAppend.length > 0) {
                    parameters.push({ separator: true, separatorClass: 'rbroParameterGroup', name: this.name });
                }
                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = undefined;

                try {
                    for (var _iterator9 = (0, _getIterator3.default)(parametersToAppend), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                        var parameter = _step9.value;

                        parameters.push({ name: this.name + '.' + parameter.getName(), description: '' });
                    }
                } catch (err) {
                    _didIteratorError9 = true;
                    _iteratorError9 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion9 && _iterator9.return) {
                            _iterator9.return();
                        }
                    } finally {
                        if (_didIteratorError9) {
                            throw _iteratorError9;
                        }
                    }
                }
            } else if (this.type !== Parameter.type.array) {
                if (!Array.isArray(allowedTypes) || allowedTypes.indexOf(this.type) !== -1) {
                    parameters.push({ name: this.name, description: '' });
                }
            } else if (Array.isArray(allowedTypes) && allowedTypes.indexOf(this.type) !== -1) {
                // add array parameter only if explicitly specified in allowedTypes
                parameters.push({ name: this.name, description: '' });
            }
        }

        /**
         * Appends field parameters of array parameter.
         * Used for parameter popup window of sum/average expression field.
         * @param {Object[]} parameters - list where parameter items will be appended to.
         * @param {String} fieldType - allowed parameter type which will be added to the
         * parameter list. If empty all parameter types are allowed.
         */

    }, {
        key: 'appendFieldParameterItems',
        value: function appendFieldParameterItems(parameters, fieldType) {
            if (this.type === Parameter.type.array) {
                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                    for (var _iterator10 = (0, _getIterator3.default)(this.panelItem.getChildren()), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                        var child = _step10.value;

                        var parameter = child.getData();
                        if (!fieldType || parameter.getValue('type') === fieldType) {
                            parameters.push({ name: this.name + '.' + parameter.getName(), description: '' });
                        }
                    }
                } catch (err) {
                    _didIteratorError10 = true;
                    _iteratorError10 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion10 && _iterator10.return) {
                            _iterator10.return();
                        }
                    } finally {
                        if (_didIteratorError10) {
                            throw _iteratorError10;
                        }
                    }
                }
            }
        }

        /**
         * Returns test data of array parameter as array.
         * @returns {[Object[]]} rows of test data. Null in case parameter is not an array.
         */

    }, {
        key: 'getTestDataRows',
        value: function getTestDataRows() {
            if (this.type !== Parameter.type.array && this.type !== Parameter.type.simpleArray) {
                return null;
            }
            var availableFields = {};
            if (this.type === Parameter.type.simpleArray) {
                availableFields['data'] = true;
            } else {
                var _iteratorNormalCompletion11 = true;
                var _didIteratorError11 = false;
                var _iteratorError11 = undefined;

                try {
                    for (var _iterator11 = (0, _getIterator3.default)(this.getChildren()), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                        var child = _step11.value;

                        availableFields[child.getName()] = true;
                    }
                } catch (err) {
                    _didIteratorError11 = true;
                    _iteratorError11 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion11 && _iterator11.return) {
                            _iterator11.return();
                        }
                    } finally {
                        if (_didIteratorError11) {
                            throw _iteratorError11;
                        }
                    }
                }
            }
            var rows = [];
            try {
                var testData = JSON.parse(this.testData);
                if (Array.isArray(testData)) {
                    var _iteratorNormalCompletion12 = true;
                    var _didIteratorError12 = false;
                    var _iteratorError12 = undefined;

                    try {
                        for (var _iterator12 = (0, _getIterator3.default)(testData), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                            var row = _step12.value;

                            var itemRow = {};
                            var hasData = false;
                            for (var val in row) {
                                if (val in availableFields) {
                                    hasData = true;
                                    itemRow[val] = row[val];
                                }
                            }
                            if (hasData) {
                                rows.push(itemRow);
                            }
                        }
                    } catch (err) {
                        _didIteratorError12 = true;
                        _iteratorError12 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion12 && _iterator12.return) {
                                _iterator12.return();
                            }
                        } finally {
                            if (_didIteratorError12) {
                                throw _iteratorError12;
                            }
                        }
                    }
                }
            } catch (e) {}
            return rows;
        }
    }]);
    return Parameter;
}();

exports.default = Parameter;


Parameter.type = {
    'none': 'none',
    'string': 'string',
    'number': 'number',
    'boolean': 'boolean',
    'date': 'date',
    'image': 'image',
    'array': 'array',
    'simpleArray': 'simpleArray',
    'map': 'map',
    'sum': 'sum',
    'average': 'average'
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(121)
  , defined = __webpack_require__(43);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(51)('wks')
  , uid        = __webpack_require__(36)
  , Symbol     = __webpack_require__(17).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Command container for multiple commands. All commands of this container will be executed in a single do/undo operation.
 * @class
 */
var CommandGroupCmd = function () {
    function CommandGroupCmd(name, rb) {
        (0, _classCallCheck3.default)(this, CommandGroupCmd);

        this.name;
        this.rb = rb;
        this.commands = [];
    }

    (0, _createClass3.default)(CommandGroupCmd, [{
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'do',
        value: function _do() {
            for (var i = 0; i < this.commands.length; i++) {
                this.commands[i].do();
            }
        }
    }, {
        key: 'undo',
        value: function undo() {
            for (var i = this.commands.length - 1; i >= 0; i--) {
                this.commands[i].undo();
            }
        }
    }, {
        key: 'addCommand',
        value: function addCommand(cmd) {
            if (this.commands.length > 0 && cmd instanceof _SetValueCmd2.default) {
                cmd.disableSelect();
            }
            this.commands.push(cmd);
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return this.commands.length == 0;
        }
    }]);
    return CommandGroupCmd;
}();

exports.default = CommandGroupCmd;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(29)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(25)
  , IE8_DOM_DEFINE = __webpack_require__(67)
  , toPrimitive    = __webpack_require__(53)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _BandElement = __webpack_require__(38);

var _BandElement2 = _interopRequireDefault(_BandElement);

var _BarCodeElement = __webpack_require__(58);

var _BarCodeElement2 = _interopRequireDefault(_BarCodeElement);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _FrameElement = __webpack_require__(59);

var _FrameElement2 = _interopRequireDefault(_FrameElement);

var _ImageElement = __webpack_require__(60);

var _ImageElement2 = _interopRequireDefault(_ImageElement);

var _LineElement = __webpack_require__(61);

var _LineElement2 = _interopRequireDefault(_LineElement);

var _PageBreakElement = __webpack_require__(62);

var _PageBreakElement2 = _interopRequireDefault(_PageBreakElement);

var _TableElement = __webpack_require__(39);

var _TableElement2 = _interopRequireDefault(_TableElement);

var _TextElement = __webpack_require__(41);

var _TextElement2 = _interopRequireDefault(_TextElement);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Command to add and delete a doc element.
 * @class
 */
var AddDeleteDocElementCmd = function () {
    function AddDeleteDocElementCmd(add, elementType, initialData, id, parentId, position, rb) {
        (0, _classCallCheck3.default)(this, AddDeleteDocElementCmd);

        this.add = add;
        this.elementType = elementType;
        this.initialData = initialData;
        this.parentId = parentId;
        this.position = position;
        this.rb = rb;
        this.id = id;
        this.firstExecution = true;
    }

    (0, _createClass3.default)(AddDeleteDocElementCmd, [{
        key: 'getName',
        value: function getName() {
            if (this.add) {
                return 'Add element';
            } else {
                return 'Delete element';
            }
        }
    }, {
        key: 'do',
        value: function _do() {
            if (this.add) {
                this.addElement();
            } else {
                this.deleteElement();
            }
            this.firstExecution = false;
        }
    }, {
        key: 'undo',
        value: function undo() {
            if (this.add) {
                this.deleteElement();
            } else {
                this.addElement();
            }
        }
    }, {
        key: 'addElement',
        value: function addElement() {
            var parent = this.rb.getDataObject(this.parentId);
            if (parent !== null) {
                var element = void 0;
                var properties = { draggable: true };
                if (this.elementType === _DocElement2.default.type.text) {
                    element = new _TextElement2.default(this.id, this.initialData, this.rb);
                } else if (this.elementType === _DocElement2.default.type.line) {
                    element = new _LineElement2.default(this.id, this.initialData, this.rb);
                } else if (this.elementType === _DocElement2.default.type.image) {
                    element = new _ImageElement2.default(this.id, this.initialData, this.rb);
                } else if (this.elementType === _DocElement2.default.type.pageBreak) {
                    element = new _PageBreakElement2.default(this.id, this.initialData, this.rb);
                } else if (this.elementType === _DocElement2.default.type.table) {
                    element = new _TableElement2.default(this.id, this.initialData, this.rb);
                    properties.hasChildren = true;
                } else if (this.elementType === _DocElement2.default.type.frame) {
                    element = new _FrameElement2.default(this.id, this.initialData, this.rb);
                    properties.hasChildren = true;
                } else if (this.elementType === _DocElement2.default.type.band) {
                    element = new _BandElement2.default(this.id, this.initialData, this.rb);
                    properties.hasChildren = true;
                    properties.showAdd = true;
                    // properties.draggable = false;
                } else if (this.elementType === _DocElement2.default.type.barCode) {
                    element = new _BarCodeElement2.default(this.id, this.initialData, this.rb);
                }
                this.rb.addDocElement(element);
                var panelItem = new _MainPanelItem2.default(this.elementType, '', parent.getPanelItem(), element, properties, this.rb);
                panelItem.openParentItems();
                element.setPanelItem(panelItem);
                parent.getPanelItem().insertChild(this.position, panelItem);
                element.setup();
                this.rb.notifyEvent(element, _Command2.default.operation.add);
                this.rb.selectObject(this.id, true);

                if (this.add && this.firstExecution) {
                    // in case of add command we serialize initialData on first execution so it contains all data
                    // created during setup (e.g. ids of table bands and table cells for a table)
                    this.initialData = element.toJS();
                }
            }
        }
    }, {
        key: 'deleteElement',
        value: function deleteElement() {
            var element = this.rb.getDataObject(this.id);
            if (element !== null) {
                this.rb.notifyEvent(element, _Command2.default.operation.remove);
                this.rb.deleteDocElement(element);
            }
        }
    }]);
    return AddDeleteDocElementCmd;
}();

exports.default = AddDeleteDocElementCmd;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(17)
  , core      = __webpack_require__(9)
  , ctx       = __webpack_require__(65)
  , hide      = __webpack_require__(27)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(23)
  , createDesc = __webpack_require__(35);
module.exports = __webpack_require__(21) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Container can contain doc elements. The doc elements are always relative to the container offset.
 * @class
 */
var Container = function () {
    function Container(id, name, rb) {
        (0, _classCallCheck3.default)(this, Container);

        this.rb = rb;
        this.id = id;
        this.panelItem = null;
        this.name = name;
        this.el = null;
        this.elContent = null;
        this.owner = null;
        this.level = 0; // number of containers "above"
        this.parent = null; // parent container
    }

    (0, _createClass3.default)(Container, [{
        key: 'init',
        value: function init(owner) {
            this.owner = owner;
            this.el = owner.getElement();
            this.elContent = owner.getContentElement();
            this.panelItem = owner.getPanelItem();
            this.parent = owner.getContainer();
            this.level = 0;
            var parent = this.parent;
            while (parent !== null) {
                this.level++;
                parent = parent.getParent();
            }
        }

        /**
         * Called after initialization is finished.
         */

    }, {
        key: 'setup',
        value: function setup() {}
    }, {
        key: 'remove',
        value: function remove() {}
    }, {
        key: 'appendElement',
        value: function appendElement(el) {
            if (this.elContent !== null) {
                this.elContent.append(el);
            }
        }
    }, {
        key: 'getId',
        value: function getId() {
            return this.id;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'getPanelItem',
        value: function getPanelItem() {
            return this.panelItem;
        }
    }, {
        key: 'setPanelItem',
        value: function setPanelItem(panelItem) {
            this.panelItem = panelItem;
        }
    }, {
        key: 'getLevel',
        value: function getLevel() {
            return this.level;
        }
    }, {
        key: 'getParent',
        value: function getParent() {
            return this.parent;
        }
    }, {
        key: 'isSelected',
        value: function isSelected() {
            if (this.owner !== null && this.rb.isSelectedObject(this.owner.getId())) {
                return true;
            }
            return false;
        }

        /**
         * Returns true if the given element type can be added to this container.
         * @param {String} elementType
         */

    }, {
        key: 'isElementAllowed',
        value: function isElementAllowed(elementType) {
            return false;
        }

        /**
         * Update container style when an element is currently dragged over this container.
         */

    }, {
        key: 'dragOver',
        value: function dragOver() {
            if (this.el !== null) {
                this.el.addClass('rbroElementDragOver');
            }
        }

        /**
         * Returns absolute container offset.
         * @returns {Object} x and y offset coordinates.
         */

    }, {
        key: 'getOffset',
        value: function getOffset() {
            return { x: 0, y: 0 };
        }

        /**
         * Returns offset relative to other container.
         * @param {Container} otherContainer
         * @returns {Object} x and y offset coordinates.
         */

    }, {
        key: 'getOffsetTo',
        value: function getOffsetTo(otherContainer) {
            if (otherContainer !== null && otherContainer != this) {
                var offset = this.getOffset();
                var otherOffset = otherContainer.getOffset();
                return { x: offset.x - otherOffset.x, y: offset.y - otherOffset.y };
            }
            return { x: 0, y: 0 };
        }

        /**
         * Returns container size.
         * @returns {Object} width and height of container.
         */

    }, {
        key: 'getSize',
        value: function getSize() {
            return { width: 0, height: 0 };
        }

        /**
         * Returns true if given absolute position is inside container.
         * @param {Number} x - absolute x coordinate.
         * @param {Number} y - absolute y coordinate.
         */

    }, {
        key: 'isInside',
        value: function isInside(posX, posY) {
            var offset = this.getOffset();
            var size = this.getSize();
            posX -= offset.x;
            posY -= offset.y;
            if (posX >= 0 && posY >= 0 && posX < size.width && posY < size.height) {
                return true;
            }
            return false;
        }
    }, {
        key: 'clearErrors',
        value: function clearErrors() {}
    }]);
    return Container;
}();

exports.default = Container;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all style properties.
 * @class
 */
var StylePanel = function () {
    function StylePanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, StylePanel);

        this.rootElement = rootElement;
        this.rb = rb;
        this.selectedObjId = null;
    }

    (0, _createClass3.default)(StylePanel, [{
        key: 'render',
        value: function render(data) {
            var _this = this;

            var panel = $('<div id="rbro_style_panel" class="rbroHidden"></div>');
            var elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_style_name">' + this.rb.getLabel('styleName') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elStyleName = $('<input id="rbro_style_name">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    if (elStyleName.val().trim() !== '') {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_style_name', 'name', elStyleName.val(), _SetValueCmd2.default.type.text, _this.rb);
                        _this.rb.executeCommand(cmd);
                    } else {
                        elStyleName.val(style.getName());
                    }
                }
            });
            elFormField.append(elStyleName);
            elDiv.append(elFormField);
            panel.append(elDiv);

            StylePanel.renderStyle(panel, 'style_', '', _DocElement2.default.type.none, this, this.rb);

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'show',
        value: function show(data) {
            $('#rbro_style_panel').removeClass('rbroHidden');
            this.updateData(data);
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_style_panel').addClass('rbroHidden');
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {Style} data
         */

    }, {
        key: 'updateData',
        value: function updateData(data) {
            if (data !== null) {
                $('#rbro_style_name').prop('disabled', false);
                this.selectedObjId = data.getId();
            } else {
                $('#rbro_style_name').prop('disabled', true);
            }
            StylePanel.updateStyleData(data, 'style_', '', _DocElement2.default.type.none);
            this.updateErrors();
        }
    }, {
        key: 'notifyEvent',


        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         */
        value: function notifyEvent(obj, operation) {}

        /**
         * Updates displayed errors of currently selected data object.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#rbro_style_panel .rbroFormRow').removeClass('rbroError');
            $('#rbro_style_panel .rbroErrorMessage').text('');
            var selectedObj = this.rb.getDataObject(this.selectedObjId);
            if (selectedObj !== null) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(selectedObj.getErrors()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var error = _step.value;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getSelectedObjId',
        value: function getSelectedObjId() {
            return this.selectedObjId;
        }
    }], [{
        key: 'renderPaddingControls',
        value: function renderPaddingControls(elPanel, idPrefix, fieldPrefix, panel, rb) {
            var elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_' + idPrefix + 'padding">' + rb.getLabel('stylePadding') + ':</label>');
            var elFormField = $('<div class="rbroFormField rbroSmallInput"></div>');

            var elPaddingTopDiv = $('<div class="rbroColumnCenter"></div>');
            var elPaddingTop = $('<input id="rbro_' + idPrefix + 'padding_top" placeholder="' + rb.getLabel('orientationTop') + '">').on('input', function (event) {
                if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                    var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'padding_top', fieldPrefix + 'paddingTop', elPaddingTop.val(), _SetValueCmd2.default.type.text, rb);
                    rb.executeCommand(cmd);
                }
            });
            utils.setInputPositiveInteger(elPaddingTop);
            elPaddingTopDiv.append(elPaddingTop);
            elFormField.append(elPaddingTopDiv);

            var elDiv2 = $('<div class="rbroSplit"></div>');
            var elPaddingLeft = $('<input id="rbro_' + idPrefix + 'padding_left" placeholder="' + rb.getLabel('orientationLeft') + '">').on('input', function (event) {
                if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                    var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'padding_left', fieldPrefix + 'paddingLeft', elPaddingLeft.val(), _SetValueCmd2.default.type.text, rb);
                    rb.executeCommand(cmd);
                }
            });
            utils.setInputPositiveInteger(elPaddingLeft);
            elDiv2.append(elPaddingLeft);
            var elPaddingRight = $('<input id="rbro_' + idPrefix + 'padding_right" placeholder="' + rb.getLabel('orientationRight') + '">').on('input', function (event) {
                if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                    var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'padding_right', fieldPrefix + 'paddingRight', elPaddingRight.val(), _SetValueCmd2.default.type.text, rb);
                    rb.executeCommand(cmd);
                }
            });
            utils.setInputPositiveInteger(elPaddingRight);
            elDiv2.append(elPaddingRight);
            elFormField.append(elDiv2);

            var elPaddingBottomDiv = $('<div class="rbroColumnCenter"></div>');
            var elPaddingBottom = $('<input id="rbro_' + idPrefix + 'padding_bottom" placeholder="' + rb.getLabel('orientationBottom') + '">').on('input', function (event) {
                if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                    var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'padding_bottom', fieldPrefix + 'paddingBottom', elPaddingBottom.val(), _SetValueCmd2.default.type.text, rb);
                    rb.executeCommand(cmd);
                }
            });
            utils.setInputPositiveInteger(elPaddingBottom);
            elPaddingBottomDiv.append(elPaddingBottom);
            elFormField.append(elPaddingBottomDiv);
            elDiv.append(elFormField);
            elPanel.append(elDiv);
        }
    }, {
        key: 'renderStyle',
        value: function renderStyle(elPanel, idPrefix, fieldPrefix, elementType, panel, rb) {
            var elDiv = void 0,
                elFormField = void 0;
            if (elementType === _DocElement2.default.type.none || elementType === _DocElement2.default.type.text) {
                elDiv = $('<div class="rbroFormRow"></div>');
                elDiv.append('<label>' + rb.getLabel('styleTextStyle') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elTextStyle = $('<div id="rbro_' + idPrefix + 'textstyle"></div>');
                var elBold = $('<button id="rbro_' + idPrefix + 'bold" name="style_bold" class="rbroButton rbroActionButton rbroIcon-bold" type="button"\n                    title="' + rb.getLabel('styleBold') + '"></button>').click(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'bold', fieldPrefix + 'bold', !elBold.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elTextStyle.append(elBold);
                var elItalic = $('<button id="rbro_' + idPrefix + 'italic"\n                    class="rbroButton rbroActionButton rbroIcon-italic" type="button"\n                    title="' + rb.getLabel('styleItalic') + '"></button>').click(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'italic', fieldPrefix + 'italic', !elItalic.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elTextStyle.append(elItalic);
                var elunderline = $('<button id="rbro_' + idPrefix + 'underline"\n                    class="rbroButton rbroActionButton rbroIcon-underline" type="button"\n                    title="' + rb.getLabel('styleunderline') + '"></button>').click(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'underline', fieldPrefix + 'underline', !elunderline.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elTextStyle.append(elunderline);
                elFormField.append(elTextStyle);
                elDiv.append(elFormField);
                elPanel.append(elDiv);
            }

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label>' + rb.getLabel('styleAlignment') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elHAlignment = $('<div id="rbro_' + idPrefix + 'halignment"></div>');
            var elHAlignmentLeft = $('<button id="rbro_' + idPrefix + 'halignment_left"\n                class="rbroButton rbroActionButton rbroIcon-text-align-left" type="button" value="left"\n                title="' + rb.getLabel('styleHAlignmentLeft') + '"></button>').click(function (event) {
                if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                    var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'halignment', fieldPrefix + 'horizontalAlignment', _Style2.default.alignment.left, _SetValueCmd2.default.type.buttonGroup, rb);
                    rb.executeCommand(cmd);
                }
            });
            elHAlignment.append(elHAlignmentLeft);
            var elHAlignmentCenter = $('<button id="rbro_' + idPrefix + 'halignment_center"\n                class="rbroButton rbroActionButton rbroIcon-text-align-center" type="button" value="center"\n                title="' + rb.getLabel('styleHAlignmentCenter') + '"></button>').click(function (event) {
                if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                    var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'halignment', fieldPrefix + 'horizontalAlignment', _Style2.default.alignment.center, _SetValueCmd2.default.type.buttonGroup, rb);
                    rb.executeCommand(cmd);
                }
            });
            elHAlignment.append(elHAlignmentCenter);
            var elHAlignmentRight = $('<button id="rbro_' + idPrefix + 'halignment_right"\n                class="rbroButton rbroActionButton rbroIcon-text-align-right" type="button" value="right"\n                title="' + rb.getLabel('styleHAlignmentRight') + '"></button>').click(function (event) {
                if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                    var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'halignment', fieldPrefix + 'horizontalAlignment', _Style2.default.alignment.right, _SetValueCmd2.default.type.buttonGroup, rb);
                    rb.executeCommand(cmd);
                }
            });
            elHAlignment.append(elHAlignmentRight);
            if (elementType === _DocElement2.default.type.none || elementType === _DocElement2.default.type.text) {
                var elHAlignmentJustify = $('<button id="rbro_' + idPrefix + 'halignment_justify"\n                    class="rbroButton rbroActionButton rbroIcon-text-align-justify" type="button" value="justify"\n                    title="' + rb.getLabel('styleHAlignmentJustify') + '"></button>').click(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'halignment', fieldPrefix + 'horizontalAlignment', _Style2.default.alignment.justify, _SetValueCmd2.default.type.buttonGroup, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elHAlignment.append(elHAlignmentJustify);
            }
            elFormField.append(elHAlignment);

            var elVAlignment = $('<div id="rbro_' + idPrefix + 'valignment"></div>');
            var elVAlignmentTop = $('<button id="rbro_' + idPrefix + 'valignment_top"\n                class="rbroButton rbroActionButton rbroIcon-align-top" type="button" value="top"\n                title="' + rb.getLabel('styleVAlignmentTop') + '"></button>').click(function (event) {
                if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                    var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'valignment', fieldPrefix + 'verticalAlignment', _Style2.default.alignment.top, _SetValueCmd2.default.type.buttonGroup, rb);
                    rb.executeCommand(cmd);
                }
            });
            elVAlignment.append(elVAlignmentTop);
            var elVAlignmentMiddle = $('<button id="rbro_' + idPrefix + 'valignment_middle"\n                class="rbroButton rbroActionButton rbroIcon-align-middle" type="button" value="middle"\n                title="' + rb.getLabel('styleVAlignmentMiddle') + '"></button>').click(function (event) {
                if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                    var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'valignment', fieldPrefix + 'verticalAlignment', _Style2.default.alignment.middle, _SetValueCmd2.default.type.buttonGroup, rb);
                    rb.executeCommand(cmd);
                }
            });
            elVAlignment.append(elVAlignmentMiddle);
            var elVAlignmentBottom = $('<button id="rbro_' + idPrefix + 'valignment_bottom"\n                class="rbroButton rbroActionButton rbroIcon-align-bottom" type="button" value="bottom"\n                title="' + rb.getLabel('styleVAlignmentBottom') + '"></button>').click(function (event) {
                if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                    var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'valignment', fieldPrefix + 'verticalAlignment', _Style2.default.alignment.bottom, _SetValueCmd2.default.type.buttonGroup, rb);
                    rb.executeCommand(cmd);
                }
            });
            elVAlignment.append(elVAlignmentBottom);
            elFormField.append(elVAlignment);
            elDiv.append(elFormField);
            elPanel.append(elDiv);

            if (elementType === _DocElement2.default.type.none || elementType === _DocElement2.default.type.text) {
                elDiv = $('<div class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_' + idPrefix + 'text_color">' + rb.getLabel('styleTextColor') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elTextColorContainer = $('<div class="rbroColorPickerContainer"></div>');
                var elTextColor = $('<input id="rbro_' + idPrefix + 'text_color">').change(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'text_color', fieldPrefix + 'textColor', elTextColor.val(), _SetValueCmd2.default.type.color, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elTextColorContainer.append(elTextColor);
                elFormField.append(elTextColorContainer);
                elDiv.append(elFormField);
                elPanel.append(elDiv);
                utils.initColorPicker(elTextColor, rb);
            }

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_' + idPrefix + 'background_color">' + rb.getLabel('styleBackgroundColor') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elBgColorContainer = $('<div class="rbroColorPickerContainer"></div>');
            var elBgColor = $('<input id="rbro_' + idPrefix + 'background_color">').change(function (event) {
                if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                    var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'background_color', fieldPrefix + 'backgroundColor', elBgColor.val(), _SetValueCmd2.default.type.color, rb);
                    rb.executeCommand(cmd);
                }
            });
            elBgColorContainer.append(elBgColor);
            elFormField.append(elBgColorContainer);
            elDiv.append(elFormField);
            elPanel.append(elDiv);
            utils.initColorPicker(elBgColor, rb, { allowEmpty: true });

            if (elementType === _DocElement2.default.type.none || elementType === _DocElement2.default.type.text) {
                elDiv = $('<div class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_' + idPrefix + 'font">' + rb.getLabel('styleFont') + ':</label>');
                elFormField = $('<div class="rbroFormField rbroSplit rbroSelectFont"></div>');
                var strFont = '<select id="rbro_' + idPrefix + 'font">';
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = (0, _getIterator3.default)(rb.getFonts()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var font = _step2.value;

                        strFont += '<option value="' + font.value + '">' + font.name + '</option>';
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                strFont += '</select>';
                var elFont = $(strFont).change(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'font', fieldPrefix + 'font', elFont.val(), _SetValueCmd2.default.type.select, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elFont);
                var strFontSize = '<select id="rbro_' + idPrefix + 'font_size">';
                var _arr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 44, 48, 54, 60, 66, 72, 80];
                for (var _i = 0; _i < _arr.length; _i++) {
                    var size = _arr[_i];
                    strFontSize += '<option value="' + size + '">' + size + '</option>';
                }
                strFontSize += '</select>';
                var elFontSize = $(strFontSize).change(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'font_size', fieldPrefix + 'fontSize', elFontSize.val(), _SetValueCmd2.default.type.select, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elFontSize);
                elFormField.append('<span>' + rb.getLabel('styleFontSizeUnit') + '</span>');
                elDiv.append(elFormField);
                elPanel.append(elDiv);

                elDiv = $('<div class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_' + idPrefix + 'line_spacing">' + rb.getLabel('styleLineSpacing') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elLineSpacing = $('<select id="rbro_' + idPrefix + 'line_spacing">\n                    <option value="1">1</option>\n                    <option value="1.5">1.5</option>\n                    <option value="2">2</option>\n                </select>').change(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'line_spacing', fieldPrefix + 'lineSpacing', elLineSpacing.val(), _SetValueCmd2.default.type.select, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elLineSpacing);
                elDiv.append(elFormField);
                elPanel.append(elDiv);

                var elBorderDiv = $('<div id="rbro_' + idPrefix + 'border_div"></div>');
                elDiv = $('<div class="rbroFormRow"></div>');
                elDiv.append('<label>' + rb.getLabel('styleBorder') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elBorderStyle = $('<div id="rbro_' + idPrefix + 'border"></div>');
                var elBorderAll = $('<button id="rbro_' + idPrefix + 'border_all" class="rbroButton rbroActionButton rbroIcon-border-all"\n                    type="button" value="' + fieldPrefix + 'borderAll"\n                    title="' + rb.getLabel('styleBorderAll') + '"></button>').click(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'border_all', fieldPrefix + 'borderAll', !elBorderAll.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elBorderStyle.append(elBorderAll);
                var elBorderLeft = $('<button id="rbro_' + idPrefix + 'border_left" class="rbroButton rbroActionButton rbroIcon-border-left"\n                    type="button" value="' + fieldPrefix + 'borderLeft"\n                    title="' + rb.getLabel('orientationLeft') + '"></button>').click(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'border_left', fieldPrefix + 'borderLeft', !elBorderLeft.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elBorderStyle.append(elBorderLeft);
                var elBorderTop = $('<button id="rbro_' + idPrefix + 'border_top" class="rbroButton rbroActionButton rbroIcon-border-top"\n                    type="button" value="' + fieldPrefix + 'borderTop"\n                    title="' + rb.getLabel('orientationTop') + '"></button>').click(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'border_top', fieldPrefix + 'borderTop', !elBorderTop.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elBorderStyle.append(elBorderTop);
                var elBorderRight = $('<button id="rbro_' + idPrefix + 'border_right" class="rbroButton rbroActionButton rbroIcon-border-right"\n                    type="button" value="' + fieldPrefix + 'borderRight"\n                    title="' + rb.getLabel('orientationRight') + '"></button>').click(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'border_right', fieldPrefix + 'borderRight', !elBorderRight.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elBorderStyle.append(elBorderRight);
                var elBorderBottom = $('<button id="rbro_' + idPrefix + 'border_bottom" class="rbroButton rbroActionButton rbroIcon-border-bottom"\n                    type="button" value="' + fieldPrefix + 'borderBottom"\n                    title="' + rb.getLabel('orientationBottom') + '"></button>').click(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'border_bottom', fieldPrefix + 'borderBottom', !elBorderBottom.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elBorderStyle.append(elBorderBottom);
                elFormField.append(elBorderStyle);
                elDiv.append(elFormField);
                elBorderDiv.append(elDiv);

                elDiv = $('<div class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_' + idPrefix + 'border_color">' + rb.getLabel('styleBorderColor') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elBorderColorContainer = $('<div class="rbroColorPickerContainer"></div>');
                var elBorderColor = $('<input id="rbro_' + idPrefix + 'border_color">').change(function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'border_color', fieldPrefix + 'borderColor', elBorderColor.val(), _SetValueCmd2.default.type.color, rb);
                        rb.executeCommand(cmd);
                    }
                });
                elBorderColorContainer.append(elBorderColor);
                elFormField.append(elBorderColorContainer);
                elDiv.append(elFormField);
                elBorderDiv.append(elDiv);
                utils.initColorPicker(elBorderColor, rb);

                elDiv = $('<div class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_' + idPrefix + 'border_width">' + rb.getLabel('styleBorderWidth') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elBorderWidth = $('<input id="rbro_' + idPrefix + 'border_width">').on('input', function (event) {
                    if (rb.getDataObject(panel.getSelectedObjId()) !== null) {
                        if (elBorderWidth.val().trim() !== '') {
                            var cmd = new _SetValueCmd2.default(panel.getSelectedObjId(), 'rbro_' + idPrefix + 'border_width', fieldPrefix + 'borderWidth', elBorderWidth.val(), _SetValueCmd2.default.type.text, rb);
                            rb.executeCommand(cmd);
                        } else {
                            elBorderWidth.val(rb.getDetailData().getValue('borderWidth'));
                        }
                    }
                });
                elFormField.append(elBorderWidth);
                elDiv.append(elFormField);
                elBorderDiv.append(elDiv);
                utils.setInputPositiveInteger(elBorderWidth);
                elPanel.append(elBorderDiv);

                StylePanel.renderPaddingControls(elPanel, idPrefix, fieldPrefix, panel, rb);
            }
        }
    }, {
        key: 'updateStyleData',
        value: function updateStyleData(data, idPrefix, fieldPrefix, elementType) {
            if (data !== null) {
                $('#rbro_' + idPrefix + 'halignment_left').prop('disabled', false);
                $('#rbro_' + idPrefix + 'halignment_center').prop('disabled', false);
                $('#rbro_' + idPrefix + 'halignment_right').prop('disabled', false);
                $('#rbro_' + idPrefix + 'valignment_top').prop('disabled', false);
                $('#rbro_' + idPrefix + 'valignment_middle').prop('disabled', false);
                $('#rbro_' + idPrefix + 'valignment_bottom').prop('disabled', false);
                $('#rbro_' + idPrefix + 'background_color').spectrum('enable');
                $('#rbro_' + idPrefix + 'border_all').prop('disabled', false);
                $('#rbro_' + idPrefix + 'border_left').prop('disabled', false);
                $('#rbro_' + idPrefix + 'border_top').prop('disabled', false);
                $('#rbro_' + idPrefix + 'border_right').prop('disabled', false);
                $('#rbro_' + idPrefix + 'border_bottom').prop('disabled', false);
                $('#rbro_' + idPrefix + 'border_color').spectrum('enable');
                $('#rbro_' + idPrefix + 'border_width').prop('disabled', false);
                if (elementType === _DocElement2.default.type.none) {
                    $('#rbro_' + idPrefix + 'name').prop('disabled', false);
                }
                if (elementType === _DocElement2.default.type.none || elementType === _DocElement2.default.type.text) {
                    $('#rbro_' + idPrefix + 'bold').prop('disabled', false);
                    $('#rbro_' + idPrefix + 'italic').prop('disabled', false);
                    $('#rbro_' + idPrefix + 'underline').prop('disabled', false);
                    $('#rbro_' + idPrefix + 'halignment_justify').prop('disabled', false);
                    $('#rbro_' + idPrefix + 'text_color').spectrum('enable');
                    $('#rbro_' + idPrefix + 'font').prop('disabled', false);
                    $('#rbro_' + idPrefix + 'font_size').prop('disabled', false);
                    $('#rbro_' + idPrefix + 'line_spacing').prop('disabled', false);
                    $('#rbro_' + idPrefix + 'padding_top').prop('disabled', false);
                    $('#rbro_' + idPrefix + 'padding_left').prop('disabled', false);
                    $('#rbro_' + idPrefix + 'padding_right').prop('disabled', false);
                    $('#rbro_' + idPrefix + 'padding_bottom').prop('disabled', false);
                }

                $('#rbro_' + idPrefix + 'halignment_left').parent().find('button').removeClass('rbroButtonActive');
                var horizontalAlignment = data.getValue(fieldPrefix + 'horizontalAlignment');
                if (horizontalAlignment === _Style2.default.alignment.left) {
                    $('#rbro_' + idPrefix + 'halignment_left').addClass('rbroButtonActive');
                } else if (horizontalAlignment === _Style2.default.alignment.center) {
                    $('#rbro_' + idPrefix + 'halignment_center').addClass('rbroButtonActive');
                } else if (horizontalAlignment === _Style2.default.alignment.right) {
                    $('#rbro_' + idPrefix + 'halignment_right').addClass('rbroButtonActive');
                } else if (horizontalAlignment === _Style2.default.alignment.justify) {
                    $('#rbro_' + idPrefix + 'halignment_justify').addClass('rbroButtonActive');
                }
                $('#rbro_' + idPrefix + 'valignment_top').parent().find('button').removeClass('rbroButtonActive');
                var verticalAlignment = data.getValue(fieldPrefix + 'verticalAlignment');
                if (verticalAlignment == _Style2.default.alignment.top) {
                    $('#rbro_' + idPrefix + 'valignment_top').addClass('rbroButtonActive');
                } else if (verticalAlignment === _Style2.default.alignment.middle) {
                    $('#rbro_' + idPrefix + 'valignment_middle').addClass('rbroButtonActive');
                } else if (verticalAlignment === _Style2.default.alignment.bottom) {
                    $('#rbro_' + idPrefix + 'valignment_bottom').addClass('rbroButtonActive');
                }

                if (elementType === _DocElement2.default.type.none || elementType === _DocElement2.default.type.text || elementType === _DocElement2.default.type.image) {
                    $('#rbro_' + idPrefix + 'background_color').spectrum("set", data.getValue(fieldPrefix + 'backgroundColor'));
                    if (data.getValue(fieldPrefix + 'borderAll')) {
                        $('#rbro_' + idPrefix + 'border_all').addClass('rbroButtonActive');
                    } else {
                        $('#rbro_' + idPrefix + 'border_all').removeClass('rbroButtonActive');
                    }
                    if (data.getValue(fieldPrefix + 'borderLeft')) {
                        $('#rbro_' + idPrefix + 'border_left').addClass('rbroButtonActive');
                    } else {
                        $('#rbro_' + idPrefix + 'border_left').removeClass('rbroButtonActive');
                    }
                    if (data.getValue(fieldPrefix + 'borderTop')) {
                        $('#rbro_' + idPrefix + 'border_top').addClass('rbroButtonActive');
                    } else {
                        $('#rbro_' + idPrefix + 'border_top').removeClass('rbroButtonActive');
                    }
                    if (data.getValue(fieldPrefix + 'borderRight')) {
                        $('#rbro_' + idPrefix + 'border_right').addClass('rbroButtonActive');
                    } else {
                        $('#rbro_' + idPrefix + 'border_right').removeClass('rbroButtonActive');
                    }
                    if (data.getValue(fieldPrefix + 'borderBottom')) {
                        $('#rbro_' + idPrefix + 'border_bottom').addClass('rbroButtonActive');
                    } else {
                        $('#rbro_' + idPrefix + 'border_bottom').removeClass('rbroButtonActive');
                    }
                    $('#rbro_' + idPrefix + 'border_color').spectrum("set", data.getValue(fieldPrefix + 'borderColor'));
                    $('#rbro_' + idPrefix + 'border_width').val(data.getValue(fieldPrefix + 'borderWidth'));
                }

                if (elementType === _DocElement2.default.type.none) {
                    $('#rbro_' + idPrefix + 'name').val(data.getName());
                }
                if (elementType === _DocElement2.default.type.none || elementType === _DocElement2.default.type.text) {
                    if (data.getValue(fieldPrefix + 'bold')) {
                        $('#rbro_' + idPrefix + 'bold').addClass('rbroButtonActive');
                    } else {
                        $('#rbro_' + idPrefix + 'bold').removeClass('rbroButtonActive');
                    }
                    if (data.getValue(fieldPrefix + 'italic')) {
                        $('#rbro_' + idPrefix + 'italic').addClass('rbroButtonActive');
                    } else {
                        $('#rbro_' + idPrefix + 'italic').removeClass('rbroButtonActive');
                    }
                    if (data.getValue(fieldPrefix + 'underline')) {
                        $('#rbro_' + idPrefix + 'underline').addClass('rbroButtonActive');
                    } else {
                        $('#rbro_' + idPrefix + 'underline').removeClass('rbroButtonActive');
                    }
                    $('#rbro_' + idPrefix + 'text_color').spectrum("set", data.getValue(fieldPrefix + 'textColor'));
                    $('#rbro_' + idPrefix + 'font').val(data.getValue(fieldPrefix + 'font'));
                    $('#rbro_' + idPrefix + 'font_size').val(data.getValue(fieldPrefix + 'fontSize'));
                    $('#rbro_' + idPrefix + 'line_spacing').val(data.getValue(fieldPrefix + 'lineSpacing'));
                    $('#rbro_' + idPrefix + 'padding_top').val(data.getValue(fieldPrefix + 'paddingTop'));
                    $('#rbro_' + idPrefix + 'padding_left').val(data.getValue(fieldPrefix + 'paddingLeft'));
                    $('#rbro_' + idPrefix + 'padding_right').val(data.getValue(fieldPrefix + 'paddingRight'));
                    $('#rbro_' + idPrefix + 'padding_bottom').val(data.getValue(fieldPrefix + 'paddingBottom'));
                }
            } else {
                $('#rbro_' + idPrefix + 'halignment_left').prop('disabled', true);
                $('#rbro_' + idPrefix + 'halignment_center').prop('disabled', true);
                $('#rbro_' + idPrefix + 'halignment_right').prop('disabled', true);
                $('#rbro_' + idPrefix + 'valignment_top').prop('disabled', true);
                $('#rbro_' + idPrefix + 'valignment_middle').prop('disabled', true);
                $('#rbro_' + idPrefix + 'valignment_bottom').prop('disabled', true);
                $('#rbro_' + idPrefix + 'background_color').spectrum('disable');
                if (elementType === _DocElement2.default.type.none || elementType === _DocElement2.default.type.text || elementType === _DocElement2.default.type.image) {
                    $('#rbro_' + idPrefix + 'border_left').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'border_top').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'border_right').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'border_bottom').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'border_color').spectrum('disable');
                    $('#rbro_' + idPrefix + 'border_width').prop('disabled', true);
                }

                if (elementType === _DocElement2.default.type.none) {
                    $('#rbro_' + idPrefix + 'name').prop('disabled', true);
                }
                if (elementType === _DocElement2.default.type.none || elementType === _DocElement2.default.type.text) {
                    $('#rbro_' + idPrefix + 'bold').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'italic').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'underline').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'halignment_justify').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'text_color').spectrum('disable');
                    $('#rbro_' + idPrefix + 'font').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'font_size').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'line_spacing').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'padding_top').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'padding_left').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'padding_right').prop('disabled', true);
                    $('#rbro_' + idPrefix + 'padding_bottom').prop('disabled', true);
                }
            }
        }
    }]);
    return StylePanel;
}();

exports.default = StylePanel;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(72)
  , enumBugKeys = __webpack_require__(44);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Data object containing all document properties like page size, margins, etc.
 * @class
 */
var DocumentProperties = function () {
    function DocumentProperties(rb) {
        (0, _classCallCheck3.default)(this, DocumentProperties);

        this.rb = rb;
        this.id = '0_document_properties';
        this.panelItem = null;
        this.errors = [];

        this.pageFormat = DocumentProperties.pageFormat.A4;
        this.pageWidth = '';
        this.pageHeight = '';
        this.unit = DocumentProperties.unit.mm;
        this.orientation = DocumentProperties.orientation.portrait;
        this.contentHeight = '';
        this.marginLeft = '';
        this.marginLeftVal = 0;
        this.marginTop = '';
        this.marginTopVal = 0;
        this.marginRight = '';
        this.marginRightVal = 0;
        this.marginBottom = '';
        this.marginBottomVal = 0;

        this.header = true;
        this.headerSize = '80';
        this.headerDisplay = DocumentProperties.display.always;
        this.footer = true;
        this.footerSize = '80';
        this.footerDisplay = DocumentProperties.display.always;

        this.headerSizeVal = this.header ? utils.convertInputToNumber(this.headerSize) : 0;
        this.footerSizeVal = this.footer ? utils.convertInputToNumber(this.footerSize) : 0;

        this.patternLocale = rb.getProperty('patternLocale');
        this.patternCurrencySymbol = rb.getProperty('patternCurrencySymbol');

        // width and height in pixel
        this.width = 0;
        this.height = 0;
    }

    (0, _createClass3.default)(DocumentProperties, [{
        key: 'setInitialData',
        value: function setInitialData(initialData) {
            for (var key in initialData) {
                if (initialData.hasOwnProperty(key) && this.hasOwnProperty(key)) {
                    this[key] = initialData[key];
                }
            }
            this.headerSizeVal = this.header ? utils.convertInputToNumber(this.headerSize) : 0;
            this.footerSizeVal = this.footer ? utils.convertInputToNumber(this.footerSize) : 0;
            this.marginLeftVal = utils.convertInputToNumber(this.marginLeft);
            this.marginTopVal = utils.convertInputToNumber(this.marginTop);
            this.marginRightVal = utils.convertInputToNumber(this.marginRight);
            this.marginBottomVal = utils.convertInputToNumber(this.marginBottom);
        }

        /**
         * Called after initialization is finished.
         */

    }, {
        key: 'setup',
        value: function setup() {
            var size = this.getPageSize();
            this.updatePageSize(size);
            this.rb.getDocument().updatePageMargins();
            this.rb.getDocument().updateHeader();
            this.rb.getDocument().updateFooter();
            this.updateHeader();
            this.updateFooter();
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            return ['pageFormat', 'pageWidth', 'pageHeight', 'unit', 'orientation', 'contentHeight', 'marginLeft', 'marginTop', 'marginRight', 'marginBottom', 'header', 'headerSize', 'headerDisplay', 'footer', 'footerSize', 'footerDisplay', 'patternLocale', 'patternCurrencySymbol'];
        }
    }, {
        key: 'getId',
        value: function getId() {
            return this.id;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this.rb.getLabel('documentProperties');
        }
    }, {
        key: 'getPanelItem',
        value: function getPanelItem() {
            return this.panelItem;
        }
    }, {
        key: 'setPanelItem',
        value: function setPanelItem(panelItem) {
            this.panelItem = panelItem;
        }
    }, {
        key: 'getValue',
        value: function getValue(field) {
            return this[field];
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            this[field] = value;
            if (field === 'marginLeft' || field === 'marginTop' || field === 'marginRight' || field === 'marginBottom') {
                this[field + 'Val'] = utils.convertInputToNumber(value);
                this.rb.getDocument().updatePageMargins();
                this.rb.getDocument().updateHeader();
                this.rb.getDocument().updateFooter();
            } else if (field === 'header') {
                this.updateHeader();
            } else if (field === 'footer') {
                this.updateFooter();
            }
            if (field === 'header' || field === 'headerSize') {
                this.rb.getDocument().updateHeader();
                this.headerSizeVal = this.header ? utils.convertInputToNumber(this.headerSize) : 0;
            }
            if (field === 'footer' || field === 'footerSize') {
                this.rb.getDocument().updateFooter();
                this.footerSizeVal = this.footer ? utils.convertInputToNumber(this.footerSize) : 0;
            }
            if (field === 'pageFormat' || field === 'pageWidth' || field === 'pageHeight' || field === 'unit' || field === 'orientation' || field === 'contentHeight' || field === 'marginTop' || field === 'marginBottom') {
                var size = this.getPageSize();
                this.updatePageSize(size);
            }
        }
    }, {
        key: 'updatePageSize',
        value: function updatePageSize(size) {
            this.width = size.width;
            this.height = size.height;
            this.rb.getDocument().updatePageSize(size.width, size.height);
        }
    }, {
        key: 'updateHeader',
        value: function updateHeader() {
            if (this.header) {
                this.rb.getMainPanel().showHeader();
            } else {
                this.rb.getMainPanel().hideHeader();
            }
        }
    }, {
        key: 'updateFooter',
        value: function updateFooter() {
            if (this.footer) {
                this.rb.getMainPanel().showFooter();
            } else {
                this.rb.getMainPanel().hideFooter();
            }
        }

        /**
         * Returns page size in pixels at 72 dpi.
         * @returns {Object} width, height
         */

    }, {
        key: 'getPageSize',
        value: function getPageSize() {
            var pageWidth = void 0;
            var pageHeight = void 0;
            var unit = void 0;
            var dpi = 72;
            if (this.pageFormat === DocumentProperties.pageFormat.A4) {
                if (this.orientation === DocumentProperties.orientation.portrait) {
                    pageWidth = 210;
                    pageHeight = 297;
                } else {
                    pageWidth = 297;
                    pageHeight = 210;
                }
                unit = DocumentProperties.unit.mm;
            } else if (this.pageFormat === DocumentProperties.pageFormat.A5) {
                if (this.orientation === DocumentProperties.orientation.portrait) {
                    pageWidth = 148;
                    pageHeight = 210;
                } else {
                    pageWidth = 210;
                    pageHeight = 148;
                }
                unit = DocumentProperties.unit.mm;
            } else if (this.pageFormat === DocumentProperties.pageFormat.letter) {
                if (this.orientation === DocumentProperties.orientation.portrait) {
                    pageWidth = 8.5;
                    pageHeight = 11;
                } else {
                    pageWidth = 11;
                    pageHeight = 8.5;
                }
                unit = DocumentProperties.unit.inch;
            } else {
                pageWidth = utils.convertInputToNumber(this.pageWidth);
                pageHeight = utils.convertInputToNumber(this.pageHeight);
                unit = this.unit;
            }
            if (unit === DocumentProperties.unit.mm) {
                pageWidth = Math.round(dpi * pageWidth / 25.4);
                pageHeight = Math.round(dpi * pageHeight / 25.4);
            } else {
                pageWidth = Math.round(dpi * pageWidth);
                pageHeight = Math.round(dpi * pageHeight);
            }
            if (this.contentHeight.trim() !== '') {
                pageHeight = utils.convertInputToNumber(this.contentHeight) + this.marginTopVal + this.marginBottomVal + this.headerSizeVal + this.footerSizeVal;
            }
            return { width: pageWidth, height: pageHeight };
        }

        /**
         * Returns size of content band without any margins.
         * @returns {Object} width, height
         */

    }, {
        key: 'getContentSize',
        value: function getContentSize() {
            var size = this.getPageSize();
            var height = void 0;
            if (this.contentHeight.trim() !== '') {
                height = utils.convertInputToNumber(this.contentHeight);
            } else {
                height = size.height - this.marginTopVal - this.marginBottomVal - this.headerSizeVal - this.footerSizeVal;
            }
            return { width: size.width - this.marginLeftVal - this.marginRightVal,
                height: height };
        }
    }, {
        key: 'addError',
        value: function addError(error) {
            this.errors.push(error);
        }
    }, {
        key: 'clearErrors',
        value: function clearErrors() {
            this.errors = [];
        }
    }, {
        key: 'getErrors',
        value: function getErrors() {
            return this.errors;
        }
    }, {
        key: 'remove',
        value: function remove() {}
    }, {
        key: 'select',
        value: function select() {}
    }, {
        key: 'deselect',
        value: function deselect() {}
    }, {
        key: 'toJS',
        value: function toJS() {
            var ret = {};
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.getFields()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var field = _step.value;

                    ret[field] = this.getValue(field);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return ret;
        }
    }]);
    return DocumentProperties;
}();

exports.default = DocumentProperties;


DocumentProperties.outputFormat = {
    pdf: 'pdf',
    xlsx: 'xlsx'
};

DocumentProperties.pageFormat = {
    A4: 'A4',
    A5: 'A5',
    letter: 'letter', // 215.9 x 279.4 mm
    userDefined: 'user_defined'
};

DocumentProperties.unit = {
    mm: 'mm',
    inch: 'inch'
};

DocumentProperties.orientation = {
    portrait: 'portrait',
    landscape: 'landscape'
};

DocumentProperties.display = {
    always: 'always',
    notOnFirstPage: 'not_on_first_page'
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(4);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _AddDeleteDocElementCmd = __webpack_require__(24);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _Band = __webpack_require__(57);

var _Band2 = _interopRequireDefault(_Band);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _Document = __webpack_require__(15);

var _Document2 = _interopRequireDefault(_Document);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Band element. Bands can be added to the content band and can contain other Bands. All Elements inside
 * the band are positioned relative.
 * @class
 */
var BandElement = function (_DocElement) {
    (0, _inherits3.default)(BandElement, _DocElement);

    function BandElement(id, initialData, rb) {
        (0, _classCallCheck3.default)(this, BandElement);

        var _this = (0, _possibleConstructorReturn3.default)(this, (BandElement.__proto__ || (0, _getPrototypeOf2.default)(BandElement)).call(this, rb.getLabel('docElementBand'), id, -1, 60, rb));

        _this.band = null;
        _this.setupComplete = false;
        _this.dataSource = '';
        _this.label = '';

        _this.shrinkToContentHeight = false;

        _this.setInitialData(initialData);
        return _this;
    }

    (0, _createClass3.default)(BandElement, [{
        key: 'setup',
        value: function setup() {
            (0, _get3.default)(BandElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(BandElement.prototype), 'setup', this).call(this);
            this.createElement();
            this.updateDisplay();

            if (this.linkedContainerId === null) {
                this.linkedContainerId = this.rb.getUniqueId();
            }
            this.band = new _Band2.default(_Document2.default.band.none, this.linkedContainerId, 'band_' + this.linkedContainerId, this.rb);
            this.band.init(this);
            this.rb.addContainer(this.band);

            this.setupComplete = true;
            this.updateStyle();
            this.updateName();
            this.panelItem.open();
        }

        /**
         * Do not register any event handlers so element cannot be selected.
         */

    }, {
        key: 'registerEventHandlers',
        value: function registerEventHandlers() {}

        /**
         * Returns highest id of this component, this is the id of the linked container because it is
         * created after the band element.
         * @returns {Number}
         */

    }, {
        key: 'getMaxId',
        value: function getMaxId() {
            return this.linkedContainerId;
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            (0, _get3.default)(BandElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(BandElement.prototype), 'setValue', this).call(this, field, value, elSelector, isShown);

            if (field === 'label' || field === 'dataSource') {
                this.updateName();
            }
        }
    }, {
        key: 'updateDisplayInternal',
        value: function updateDisplayInternal(x, y, width, height) {
            if (this.el !== null) {
                var props = { left: this.rb.toPixel(0), top: this.rb.toPixel(y),
                    width: '100%', height: this.rb.toPixel(height) };
                // props['background-color'] = '#c07839';
                this.el.css(props);
            }

            var styleProperties = {};
            styleProperties['width'] = '100%';
            styleProperties['height'] = this.rb.toPixel(height);
            $('#rbro_el_content_band' + this.id).css(styleProperties);
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            return ['id', 'containerId', 'linkedContainerId', 'dataSource', 'label', 'y', 'height', 'printIf', 'removeEmptyElement', 'shrinkToContentHeight'];
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return _DocElement3.default.type.band;
        }

        /**
         * Returns allowed sizers when element is selected.
         * @returns {String[]}
         */

    }, {
        key: 'getSizers',
        value: function getSizers() {
            return [];
        }
    }, {
        key: 'getYTagId',
        value: function getYTagId() {
            return 'rbro_band_element_position_y';
        }
    }, {
        key: 'getHeightTagId',
        value: function getHeightTagId() {
            return 'rbro_band_element_height';
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<div id="rbro_el' + this.id + '" class="rbroDocElement rbroBandElement rbroElementContainer"></div>');
            // rbroContentContainerHelper contains border styles
            // rbroDocElementContentBand contains height
            this.el
            //            .append($(`<div id="rbro_el_content${this.id}" class="rbroContentContainerHelper"></div>`)
            .append($('<div id="rbro_el_content_band' + this.id + '" class="rbroDocElementContentBand"></div>'));
            //            );
            this.appendToContainer();
            this.registerEventHandlers();
        }
    }, {
        key: 'getContentElement',
        value: function getContentElement() {
            return $('#rbro_el_content_band' + this.id);
        }
    }, {
        key: 'remove',
        value: function remove() {
            (0, _get3.default)(BandElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(BandElement.prototype), 'remove', this).call(this);
            this.rb.deleteContainer(this.band);
        }
    }, {
        key: 'updateName',
        value: function updateName() {
            this.name = this.rb.getLabel('docElementBand');
            if (this.dataSource.trim() !== '') {
                this.name += ' ' + this.dataSource;
            }
            // if (this.label.trim() !== '') {
            //     this.name = this.label;
            // } else {
            //     this.name = this.rb.getLabel('docElementBand');
            // }
            $('#rbro_menu_item_name' + this.id).text(this.name);
        }

        /**
         * Returns all child parameters of the data source parameter (which must be an array parameter).
         * @returns {Parameter[]}
         */

    }, {
        key: 'getDataParameters',
        value: function getDataParameters() {
            var parameters = [];
            var dataSource = this.dataSource.trim();
            if (dataSource.length >= 3 && dataSource.substr(0, 2) === '${' && dataSource.charAt(dataSource.length - 1) === '}') {
                var dataSourceParameter = dataSource.substring(2, dataSource.length - 1);
                var param = this.rb.getParameterByName(dataSourceParameter);
                if (param !== null) {
                    parameters = param.getChildren();
                }
            }
            return parameters;
        }

        /**
         * Adds SetValue commands to command group parameter in case the specified parameter is used in any of
         * the object fields.
         * @param {String} oldParameterName
         * @param {String} newParameterName
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameter',
        value: function addCommandsForChangedParameter(oldParameterName, newParameterName, cmdGroup) {
            if (this.printIf.indexOf(oldParameterName) !== -1) {
                var cmd = new _SetValueCmd2.default(this.id, 'rbro_band_element_print_if', 'printIf', utils.replaceAll(this.printIf, oldParameterName, newParameterName), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(cmd);
            }
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            var ret = (0, _get3.default)(BandElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(BandElement.prototype), 'toJS', this).call(this);
            return ret;
        }
    }]);
    return BandElement;
}(_DocElement3.default);

exports.default = BandElement;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(4);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _TableBandElement = __webpack_require__(63);

var _TableBandElement2 = _interopRequireDefault(_TableBandElement);

var _AddDeleteDocElementCmd = __webpack_require__(24);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Table doc element. Each table cell consists of a text element.
 * @class
 */
var TableElement = function (_DocElement) {
    (0, _inherits3.default)(TableElement, _DocElement);

    function TableElement(id, initialData, rb) {
        (0, _classCallCheck3.default)(this, TableElement);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TableElement.__proto__ || (0, _getPrototypeOf2.default)(TableElement)).call(this, rb.getLabel('docElementTable'), id, 200, 40, rb));

        _this.setupComplete = false;
        _this.dataSource = '';
        _this.borderColor = '#000000';
        _this.border = TableElement.border.grid;
        _this.header = true;
        _this.footer = false;
        _this.contentRows = '1';
        _this.columns = '2';
        _this.headerData = null;
        _this.contentDataRows = [];
        _this.footerData = null;
        _this.spreadsheet_hide = false;
        _this.spreadsheet_column = '';
        _this.spreadsheet_addEmptyRow = false;
        _this.setInitialData(initialData);
        return _this;
    }

    (0, _createClass3.default)(TableElement, [{
        key: 'setup',
        value: function setup() {
            (0, _get3.default)(TableElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableElement.prototype), 'setup', this).call(this);
            this.createElement();
            this.updateDisplay();

            this.headerData = this.createBand('header', -1, null);
            var contentRows = utils.convertInputToNumber(this.contentRows);
            if (contentRows < 1) {
                contentRows = 1;
            }
            var contentDataRows = [];
            for (var i = 0; i < contentRows; i++) {
                contentDataRows.push(this.createBand('content', i, null));
            }
            this.contentDataRows = contentDataRows;
            this.footerData = this.createBand('footer', -1, null);
            this.setupComplete = true;
            this.updateWidth();
            this.updateStyle();
            this.updateName();
            this.panelItem.open();
        }
    }, {
        key: 'createBand',
        value: function createBand(band, index, dataValues) {
            var data = void 0;
            var dataKey = band + (band === 'content' ? 'DataRows' : 'Data');
            var dataId = void 0;
            var panelItemProperties = { hasChildren: true, showDelete: false };
            if (dataValues) {
                data = dataValues;
            } else if (this[dataKey] && (band !== 'content' || index < this[dataKey].length)) {
                if (band === 'content') {
                    data = this[dataKey][index];
                } else {
                    data = this[dataKey];
                }
                dataId = data.id;
            } else {
                data = {};
            }
            data.parentId = this.id;
            if (!dataId) {
                dataId = this.rb.getUniqueId();
            }
            if (band === 'header' && !this.header || band === 'footer' && !this.footer) {
                panelItemProperties.visible = false;
            }
            var bandElement = new _TableBandElement2.default(dataId, data, band, this.rb);
            this.rb.addDataObject(bandElement);
            var panelItemBand = new _MainPanelItem2.default('table_band', '', this.panelItem, bandElement, panelItemProperties, this.rb);
            bandElement.setPanelItem(panelItemBand);
            this.panelItem.appendChild(panelItemBand);
            bandElement.setup();
            var columns = utils.convertInputToNumber(this.columns);
            bandElement.createColumns(columns, false);

            if (band === 'header') {
                bandElement.show(this.header);
            } else if (band === 'footer') {
                bandElement.show(this.footer);
            }
            return bandElement;
        }

        /**
         * Returns highest id of this component including all its child components.
         * @returns {Number}
         */

    }, {
        key: 'getMaxId',
        value: function getMaxId() {
            var maxId = this.id;
            var tempId = void 0;
            tempId = this.headerData.getMaxId();
            if (tempId > maxId) {
                maxId = tempId;
            }
            for (var i = 0; i < this.contentDataRows.length; i++) {
                tempId = this.contentDataRows[i].getMaxId();
                if (tempId > maxId) {
                    maxId = tempId;
                }
            }
            tempId = this.footerData.getMaxId();
            if (tempId > maxId) {
                maxId = tempId;
            }
            return maxId;
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            (0, _get3.default)(TableElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableElement.prototype), 'setValue', this).call(this, field, value, elSelector, isShown);
            if (field === 'dataSource') {
                this.updateName();
            } else if (field === 'header') {
                this.headerData.show(value);
                if (value) {
                    this.headerData.getPanelItem().show();
                } else {
                    this.headerData.getPanelItem().hide();
                }
            } else if (field === 'footer') {
                this.footerData.show(value);
                if (value) {
                    this.footerData.getPanelItem().show();
                } else {
                    this.footerData.getPanelItem().hide();
                }
            } else if (field.indexOf('border') !== -1) {
                this.updateStyle();
            }
        }
    }, {
        key: 'updateDisplayInternal',
        value: function updateDisplayInternal(x, y, width, height) {
            if (this.el !== null) {
                var props = { left: this.rb.toPixel(x), top: this.rb.toPixel(y) };
                this.el.css(props);
            }
        }
    }, {
        key: 'updateStyle',
        value: function updateStyle() {
            var elTable = this.el.find('table');
            var i = void 0;
            if (this.border === TableElement.border.grid || this.border === TableElement.border.frameRow || this.border === TableElement.border.frame) {
                elTable.css({ 'border-style': 'solid', 'border-width': '1px', 'border-color': this.borderColor });
            } else {
                elTable.css({ 'border-style': 'none' });
            }
            var styleProperties = void 0;
            if (this.border === TableElement.border.grid || this.border === TableElement.border.frameRow || this.border === TableElement.border.row) {
                styleProperties = { 'border-style': 'solid none solid none',
                    'border-width': '1px', 'border-color': this.borderColor };
            } else {
                styleProperties = { 'border-style': 'none' };
            }
            this.headerData.getElement().css(styleProperties);
            for (i = 0; i < this.contentDataRows.length; i++) {
                this.contentDataRows[i].getElement().css(styleProperties);
            }
            this.footerData.getElement().css(styleProperties);

            if (this.border === TableElement.border.grid) {
                styleProperties = { 'border-style': 'none solid none solid',
                    'border-width': '1px', 'border-color': this.borderColor };
            } else {
                styleProperties = { 'border-style': 'none' };
            }
            this.headerData.getElement().find('td').css(styleProperties);
            for (i = 0; i < this.contentDataRows.length; i++) {
                this.contentDataRows[i].getElement().find('td').css(styleProperties);
            }
            this.footerData.getElement().find('td').css(styleProperties);

            this.el.removeClass('rbroBorderTableGrid rbroBorderTableFrameRow rbroBorderTableFrame rbroBorderTableRow rbroBorderTableNone');
            this.el.addClass('rbroBorderTable' + this.border.charAt(0).toUpperCase() + this.border.slice(1));
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            return ['id', 'containerId', 'x', 'y', 'dataSource', 'columns', 'header', 'contentRows', 'footer', 'border', 'borderColor', 'spreadsheet_hide', 'spreadsheet_column', 'spreadsheet_addEmptyRow'];
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return _DocElement3.default.type.table;
        }
    }, {
        key: 'select',
        value: function select() {
            (0, _get3.default)(TableElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableElement.prototype), 'select', this).call(this);
            var elSizerContainer = this.getSizerContainerElement();
            var _arr = ['NE', 'SE', 'SW', 'NW'];
            for (var _i = 0; _i < _arr.length; _i++) {
                var sizer = _arr[_i];
                elSizerContainer.append($('<div class="rbroSizer rbroSizer' + sizer + ' rbroSizerInactive"></div>'));
            }
        }

        /**
         * Returns allowed sizers when element is selected.
         * @returns {String[]}
         */

    }, {
        key: 'getSizers',
        value: function getSizers() {
            return [];
        }
    }, {
        key: 'getXTagId',
        value: function getXTagId() {
            return 'rbro_table_element_position_x';
        }
    }, {
        key: 'getYTagId',
        value: function getYTagId() {
            return 'rbro_table_element_position_y';
        }
    }, {
        key: 'getWidthTagId',
        value: function getWidthTagId() {
            return 'rbro_table_element_width';
        }
    }, {
        key: 'getHeightTagId',
        value: function getHeightTagId() {
            return 'rbro_table_element_height';
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<div class="rbroDocElement rbroTableElement">\n                <table id="rbro_el_table' + this.id + '">\n                    <thead id="rbro_el_table_header' + this.id + '">\n                    </thead>\n                    <tbody id="rbro_el_table_content' + this.id + '">\n                    </tbody>\n                    <tfoot id="rbro_el_table_footer' + this.id + '">\n                    </tfoot>\n                </table>\n            </div>');
            this.appendToContainer();
            this.registerEventHandlers();
        }
    }, {
        key: 'remove',
        value: function remove() {
            (0, _get3.default)(TableElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableElement.prototype), 'remove', this).call(this);
            this.rb.deleteDataObject(this.headerData);
            this.headerData.remove();
            this.headerData = null;
            for (var i = 0; i < this.contentDataRows.length; i++) {
                this.rb.deleteDataObject(this.contentDataRows[i]);
                this.contentDataRows[i].remove();
            }
            this.contentDataRows = [];
            this.rb.deleteDataObject(this.footerData);
            this.footerData.remove();
            this.footerData = null;
        }

        /**
         * Is called when column width of a single column was changed to update the column width of all table bands.
         * @param {Number} columnIndex - index of changed column.
         * @param {Number} width - new column width.
         * @param {Boolean} updateTableWidth - if true the table width will be updated as well.
         */

    }, {
        key: 'updateColumnWidth',
        value: function updateColumnWidth(columnIndex, width, updateTableWidth) {
            if (this.setupComplete) {
                this.headerData.updateColumnWidth(columnIndex, width);
                for (var i = 0; i < this.contentDataRows.length; i++) {
                    this.contentDataRows[i].updateColumnWidth(columnIndex, width);
                }
                this.footerData.updateColumnWidth(columnIndex, width);
                if (updateTableWidth) {
                    this.updateWidth();
                }
            }
        }

        /**
         * Update table width based on width of all cells of content band.
         */

    }, {
        key: 'updateWidth',
        value: function updateWidth() {
            if (this.setupComplete) {
                var width = this.headerData.getWidth();
                this.width = '' + width;
                this.widthVal = width;
                $('#rbro_el_table' + this.id).css('width', this.widthVal + 1 + 'px');
            }
        }

        /**
         * Is called when column width of a cell was changed to update all DOM elements accordingly.
         * @param {TableBandElement} tableBand - band containing the changed cell.
         * @param {Number} columnIndex - column index of changed cell.
         * @param {Number} newColumnWidth
         */

    }, {
        key: 'notifyColumnWidthResized',
        value: function notifyColumnWidthResized(tableBand, columnIndex, newColumnWidth) {
            if (!this.setupComplete) return;

            if (tableBand !== this.headerData) {
                var _column = this.headerData.getColumn(columnIndex);
                if (_column !== null) {
                    _column.updateDisplayInternalNotify(0, 0, newColumnWidth, 0, false);
                }
            }
            for (var i = 0; i < this.contentDataRows.length; i++) {
                if (tableBand !== this.contentDataRows[i]) {
                    var _column2 = this.contentDataRows[i].getColumn(columnIndex);
                    if (_column2 !== null) {
                        _column2.updateDisplayInternalNotify(0, 0, newColumnWidth, 0, false);
                    }
                }
            }
            if (tableBand !== this.footerData) {
                var _column3 = this.footerData.getColumn(columnIndex);
                if (_column3 !== null) {
                    _column3.updateDisplayInternalNotify(0, 0, newColumnWidth, 0, false);
                }
            }
            var width = this.headerData.getWidth();
            var column = this.headerData.getColumn(columnIndex);
            if (column !== null) {
                width -= column.getValue('widthVal') - newColumnWidth;
            }
            $('#rbro_el_table' + this.id).css('width', width + 1 + 'px');
        }
    }, {
        key: 'updateName',
        value: function updateName() {
            this.name = this.rb.getLabel('docElementTable');
            if (this.dataSource.trim() !== '') {
                this.name += ' ' + this.dataSource;
            }
            $('#rbro_menu_item_name' + this.id).text(this.name);
        }

        /**
         * Returns all child parameters of the data source parameter (which must be an array parameter).
         * @returns {Parameter[]}
         */

    }, {
        key: 'getDataParameters',
        value: function getDataParameters() {
            var parameters = [];
            var dataSource = this.dataSource.trim();
            if (dataSource.length >= 3 && dataSource.substr(0, 2) === '${' && dataSource.charAt(dataSource.length - 1) === '}') {
                var dataSourceParameter = dataSource.substring(2, dataSource.length - 1);
                var param = this.rb.getParameterByName(dataSourceParameter);
                if (param !== null) {
                    parameters = param.getChildren();
                }
            }
            return parameters;
        }
    }, {
        key: 'addChildren',
        value: function addChildren(docElements) {
            var i = void 0;
            docElements.push(this.headerData);
            for (i = 0; i < this.contentDataRows.length; i++) {
                docElements.push(this.contentDataRows[i]);
            }
            docElements.push(this.footerData);
            this.headerData.addChildren(docElements);
            for (i = 0; i < this.contentDataRows.length; i++) {
                this.contentDataRows[i].addChildren(docElements);
            }
            this.footerData.addChildren(docElements);
        }

        /**
         * Adds SetValue commands to command group parameter in case the specified parameter is used in any of
         * the object fields.
         * @param {String} oldParameterName
         * @param {String} newParameterName
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameter',
        value: function addCommandsForChangedParameter(oldParameterName, newParameterName, cmdGroup) {
            if (this.dataSource.indexOf(oldParameterName) !== -1) {
                var cmd = new _SetValueCmd2.default(this.id, 'rbro_table_element_data_source', 'dataSource', utils.replaceAll(this.dataSource, oldParameterName, newParameterName), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(cmd);
            }
        }

        /**
         * Adds commands to command group parameter to recreate table with new column count.
         * @param {Number} columns - requested new column count.
         * @param {CommandGroupCmd} cmdGroup - possible commands will be added to this command group.
         * @returns {Number} either new column count or existing column count in case there is not enough space
         * for all column.
         */

    }, {
        key: 'addCommandsForChangedColumns',
        value: function addCommandsForChangedColumns(columns, cmdGroup) {
            var COLUMN_MIN_WIDTH = 20;
            var existingColumns = utils.convertInputToNumber(this.columns);
            var maxColumns = Math.floor(this.widthVal / COLUMN_MIN_WIDTH);
            if (columns > existingColumns && columns > maxColumns) {
                // not enough space for all columns
                return existingColumns;
            }

            // delete table with current settings and restore below with new columns, necessary for undo/redo
            var cmd = new _AddDeleteDocElementCmd2.default(false, this.getPanelItem().getPanelName(), this.toJS(), this.id, this.getContainerId(), -1, this.rb);
            cmdGroup.addCommand(cmd);

            if (columns > existingColumns) {
                var newColumns = columns - existingColumns;
                var spaceNeeded = newColumns * COLUMN_MIN_WIDTH;
                // reduce width of all existing columns until there is enough space
                var i = existingColumns - 1;
                while (i >= 0) {
                    var column = this.headerData.getColumn(i);
                    var freeSpace = column.getValue('widthVal') - COLUMN_MIN_WIDTH;
                    var newWidth = COLUMN_MIN_WIDTH;
                    if (freeSpace > spaceNeeded) {
                        newWidth = column.getValue('widthVal') - spaceNeeded;
                    }
                    this.updateColumnWidth(i, newWidth, false);
                    spaceNeeded -= freeSpace;
                    if (spaceNeeded <= 0) break;
                    i--;
                }
            } else if (columns < existingColumns) {
                var usedWidth = 0;
                for (var _i2 = 0; _i2 < columns; _i2++) {
                    usedWidth += this.headerData.getColumn(_i2).getValue('widthVal');
                }
                // add remaining space to last column
                var _column4 = this.headerData.getColumn(columns - 1);
                if (this.widthVal - usedWidth > 0) {
                    this.updateColumnWidth(columns - 1, _column4.getValue('widthVal') + (this.widthVal - usedWidth), false);
                }
            }

            this.columns = columns;
            this.headerData.createColumns(columns, true);
            for (var _i3 = 0; _i3 < this.contentDataRows.length; _i3++) {
                this.contentDataRows[_i3].createColumns(columns, true);
            }
            this.footerData.createColumns(columns, true);

            // restore table with new column count and updated settings
            cmd = new _AddDeleteDocElementCmd2.default(true, this.getPanelItem().getPanelName(), this.toJS(), this.id, this.getContainerId(), -1, this.rb);
            cmdGroup.addCommand(cmd);

            return columns;
        }

        /**
         * Adds commands to command group parameter to recreate table with new content rows.
         * @param {Number} contentRows - new content rows count.
         * @param {CommandGroupCmd} cmdGroup - possible commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedContentRows',
        value: function addCommandsForChangedContentRows(contentRows, cmdGroup) {
            if (contentRows === utils.convertInputToNumber(this.contentRows)) {
                return;
            }
            // delete table with current settings and restore below with new columns, necessary for undo/redo
            var cmd = new _AddDeleteDocElementCmd2.default(false, this.getPanelItem().getPanelName(), this.toJS(), this.id, this.getContainerId(), -1, this.rb);
            cmdGroup.addCommand(cmd);

            var i = void 0;
            if (contentRows < this.contentDataRows.length) {
                for (i = contentRows; i < this.contentDataRows.length; i++) {
                    this.rb.deleteDataObject(this.contentDataRows[i]);
                    this.contentDataRows[i].remove();
                }
                this.contentDataRows.splice(contentRows, this.contentDataRows.length - contentRows);
            } else {
                var data = void 0;
                if (this.contentDataRows.length > 0) {
                    data = { height: this.contentDataRows[0].height, columnData: [] };
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = (0, _getIterator3.default)(this.contentDataRows[0].columnData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var columnData = _step.value;

                            data.columnData.push({ width: columnData.width });
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
                for (i = this.contentDataRows.length; i < contentRows; i++) {
                    this.contentDataRows.push(this.createBand('content', i, data));
                }
            }

            this.contentRows = '' + contentRows;
            // restore table with new content rows and updated settings
            cmd = new _AddDeleteDocElementCmd2.default(true, this.getPanelItem().getPanelName(), this.toJS(), this.id, this.getContainerId(), -1, this.rb);
            cmdGroup.addCommand(cmd);
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            var ret = (0, _get3.default)(TableElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableElement.prototype), 'toJS', this).call(this);
            ret['headerData'] = this.headerData.toJS();
            var contentDataRows = [];
            for (var i = 0; i < this.contentDataRows.length; i++) {
                contentDataRows.push(this.contentDataRows[i].toJS());
            }
            ret['contentDataRows'] = contentDataRows;
            ret['footerData'] = this.footerData.toJS();
            return ret;
        }
    }], [{
        key: 'removeIds',
        value: function removeIds(data) {
            var _arr2 = ['headerData', 'footerData'];

            for (var _i4 = 0; _i4 < _arr2.length; _i4++) {
                var bandKey = _arr2[_i4];
                TableElement.removeBandIds(data[bandKey]);
            }
            for (var i = 0; i < data.contentDataRows.length; i++) {
                TableElement.removeBandIds(data.contentDataRows[i]);
            }
        }
    }, {
        key: 'removeBandIds',
        value: function removeBandIds(bandData) {
            delete bandData.id;
            var columns = bandData.columnData;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = (0, _getIterator3.default)(columns), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var column = _step2.value;

                    delete column.id;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }]);
    return TableElement;
}(_DocElement3.default);

exports.default = TableElement;


TableElement.border = {
    grid: 'grid',
    frameRow: 'frame_row',
    frame: 'frame',
    row: 'row',
    none: 'none'
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _TextElement2 = __webpack_require__(41);

var _TextElement3 = _interopRequireDefault(_TextElement2);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Table text doc element. A text element inside a table cell.
 * @class
 */
var TableTextElement = function (_TextElement) {
    (0, _inherits3.default)(TableTextElement, _TextElement);

    function TableTextElement(id, initialData, rb) {
        (0, _classCallCheck3.default)(this, TableTextElement);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TableTextElement.__proto__ || (0, _getPrototypeOf2.default)(TableTextElement)).call(this, id, initialData, rb));

        _this.columnIndex = initialData.columnIndex;
        _this.parentId = initialData.parentId;
        _this.tableId = initialData.tableId;
        return _this;
    }

    (0, _createClass3.default)(TableTextElement, [{
        key: 'registerEventHandlers',
        value: function registerEventHandlers() {
            var _this2 = this;

            this.el.dblclick(function (event) {
                if (!_this2.rb.isSelectedObject(_this2.id)) {
                    if (_this2.rb.isSelectedObject(_this2.tableId)) {
                        _this2.rb.selectObject(_this2.id, !event.shiftKey);
                        event.stopPropagation();
                    }
                }
            }).mousedown(function (event) {
                if (!_this2.rb.isSelectedObject(_this2.id)) {
                    if (_this2.rb.isTableElementSelected(_this2.tableId)) {
                        _this2.rb.selectObject(_this2.id, !event.shiftKey);
                        event.stopPropagation();
                    }
                } else {
                    if (event.shiftKey) {
                        _this2.rb.deselectObject(_this2.id);
                    }
                    event.stopPropagation();
                }
            });
        }
    }, {
        key: 'getContainerId',
        value: function getContainerId() {
            var table = this.getTable();
            if (table !== null) {
                return table.getContainerId();
            }
            return null;
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            (0, _get3.default)(TableTextElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableTextElement.prototype), 'setValue', this).call(this, field, value, elSelector, isShown);
            if (field === 'width') {
                var tableObj = this.rb.getDataObject(this.tableId);
                if (tableObj !== null) {
                    tableObj.updateColumnWidth(this.columnIndex, value, true);
                }
            } else if (field === 'height') {
                this.updateDisplayInternalNotify(0, 0, this.widthVal, this.heightVal, false);
            }
        }
    }, {
        key: 'updateColumnWidth',
        value: function updateColumnWidth(width) {
            this.width = width;
            this.widthVal = utils.convertInputToNumber(this.width);
            this.updateDisplayInternalNotify(0, 0, this.widthVal, this.heightVal, false);
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            var fields = ['id', 'width', 'height', 'content', 'eval', 'styleId', 'bold', 'italic', 'underline', 'horizontalAlignment', 'verticalAlignment', 'textColor', 'backgroundColor', 'font', 'fontSize', 'lineSpacing', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'removeEmptyElement', 'alwaysPrintOnSamePage', 'pattern', 'cs_condition', 'cs_styleId', 'cs_bold', 'cs_italic', 'cs_underline', 'cs_horizontalAlignment', 'cs_verticalAlignment', 'cs_textColor', 'cs_backgroundColor', 'cs_font', 'cs_fontSize', 'cs_lineSpacing', 'cs_paddingLeft', 'cs_paddingTop', 'cs_paddingRight', 'cs_paddingBottom'];
            var tableBandObj = this.rb.getDataObject(this.parentId);
            if (tableBandObj !== null && tableBandObj.getValue('tableBand') === 'header') {
                fields.push('printIf');
            }
            return fields;
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return _DocElement2.default.type.tableText;
        }
    }, {
        key: 'updateDisplayInternal',
        value: function updateDisplayInternal(x, y, width, height) {
            this.updateDisplayInternalNotify(x, y, width, height, true);
        }
    }, {
        key: 'updateDisplayInternalNotify',
        value: function updateDisplayInternalNotify(x, y, width, height, notifyTableElement) {
            if (this.el !== null) {
                // set td width to width - 1 because border consumes 1 pixel
                var props = { width: this.rb.toPixel(width - 1) };
                this.el.css(props);
            }
            // update inner text element width
            var contentSize = this.getContentSize(width, height, this.getStyle());
            $('#rbro_el_content_text' + this.id).css({ width: this.rb.toPixel(contentSize.width), height: this.rb.toPixel(contentSize.height) });

            if (notifyTableElement) {
                var tableObj = this.rb.getDataObject(this.tableId);
                if (tableObj !== null) {
                    var tableBandObj = this.rb.getDataObject(this.parentId);
                    tableObj.notifyColumnWidthResized(tableBandObj, this.columnIndex, width);
                }
            }
        }

        /**
         * Returns allowed sizers when element is selected.
         * @returns {String[]}
         */

    }, {
        key: 'getSizers',
        value: function getSizers() {
            return ['E'];
        }
    }, {
        key: 'getXTagId',
        value: function getXTagId() {
            return '';
        }
    }, {
        key: 'getYTagId',
        value: function getYTagId() {
            return '';
        }
    }, {
        key: 'getWidthTagId',
        value: function getWidthTagId() {
            return 'rbro_text_element_width';
        }
    }, {
        key: 'getHeightTagId',
        value: function getHeightTagId() {
            return '';
        }
    }, {
        key: 'hasBorderSettings',
        value: function hasBorderSettings() {
            return false;
        }
    }, {
        key: 'isDraggingAllowed',
        value: function isDraggingAllowed() {
            return false;
        }

        /**
         * Returns maximum allowed width of element.
         * This is needed when the element is resized by dragging so the resized element does not overflow its container.
         * @returns {Number}.
         */

    }, {
        key: 'getMaxWidth',
        value: function getMaxWidth() {
            var tableObj = this.rb.getDataObject(this.tableId);
            var tableBandObj = this.rb.getDataObject(this.parentId);
            if (tableObj !== null && tableBandObj !== null) {
                var contentWidth = this.rb.getDocumentProperties().getContentSize().width;
                var widths = tableBandObj.getColumnWidths();
                var widthOther = 0; // width of other cells
                for (var i = 0; i < widths.length; i++) {
                    if (i !== this.columnIndex) {
                        widthOther += widths[i];
                    }
                }
                return contentWidth - widthOther - tableObj.xVal;
            }
            return 0;
        }

        /**
         * Returns x-offset relative to table.
         * @returns {Number}.
         */

    }, {
        key: 'getOffsetX',
        value: function getOffsetX() {
            var tableBandObj = this.rb.getDataObject(this.parentId);
            if (tableBandObj !== null) {
                var widths = tableBandObj.getColumnWidths();
                var offsetX = 0;
                for (var i = 0; i < this.columnIndex; i++) {
                    offsetX += widths[i];
                }
                return offsetX;
            }
            return 0;
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<td id="rbro_el' + this.id + '" class="rbroTableTextElement"></td>').append($('<div id="rbro_el_content' + this.id + '" class="rbroContentContainerHelper"></div>').append($('<div id="rbro_el_content_text' + this.id + '" class="rbroDocElementContentText"></div>')));
            $('#rbro_el_table_band' + this.parentId).append(this.el);
            $('#rbro_el_content_text' + this.id).text(this.content);
            this.registerEventHandlers();
        }
    }, {
        key: 'getParent',
        value: function getParent() {
            return this.rb.getDataObject(this.parentId);
        }
    }, {
        key: 'getTable',
        value: function getTable() {
            return this.rb.getDataObject(this.tableId);
        }
    }]);
    return TableTextElement;
}(_TextElement3.default);

exports.default = TableTextElement;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(4);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Text doc element.
 * @class
 */
var TextElement = function (_DocElement) {
    (0, _inherits3.default)(TextElement, _DocElement);

    function TextElement(id, initialData, rb) {
        (0, _classCallCheck3.default)(this, TextElement);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TextElement.__proto__ || (0, _getPrototypeOf2.default)(TextElement)).call(this, rb.getLabel('docElementText'), id, 100, 20, rb));

        _this.content = '';
        _this.eval = false;

        _this.styleId = '';
        _this.bold = false;
        _this.italic = false;
        _this.underline = false;
        _this.horizontalAlignment = _Style2.default.alignment.left;
        _this.verticalAlignment = _Style2.default.alignment.top;
        _this.textColor = '#000000';
        _this.backgroundColor = '';
        // yanhuaqiang
        _this.font = _Style2.default.font.helvetica;
        _this.fontSize = 12;
        _this.lineSpacing = 1;
        _this.borderColor = '#000000';
        _this.borderWidth = '1';
        _this.borderAll = false;
        _this.borderLeft = false;
        _this.borderTop = false;
        _this.borderRight = false;
        _this.borderBottom = false;
        _this.paddingLeft = '2';
        _this.paddingTop = '2';
        _this.paddingRight = '2';
        _this.paddingBottom = '2';

        _this.cs_condition = '';
        _this.cs_styleId = '';
        _this.cs_bold = false;
        _this.cs_italic = false;
        _this.cs_underline = false;
        _this.cs_horizontalAlignment = _Style2.default.alignment.left;
        _this.cs_verticalAlignment = _Style2.default.alignment.top;
        _this.cs_textColor = '#000000';
        _this.cs_backgroundColor = '';
        // yanhuaqiang
        _this.cs_font = _Style2.default.font.helvetica;
        _this.cs_fontSize = 12;
        _this.cs_lineSpacing = 1;
        _this.cs_borderColor = '#000000';
        _this.cs_borderWidth = '1';
        _this.cs_borderAll = false;
        _this.cs_borderLeft = false;
        _this.cs_borderTop = false;
        _this.cs_borderRight = false;
        _this.cs_borderBottom = false;
        _this.cs_paddingLeft = '2';
        _this.cs_paddingTop = '2';
        _this.cs_paddingRight = '2';
        _this.cs_paddingBottom = '2';

        _this.alwaysPrintOnSamePage = true;
        _this.pattern = '';

        _this.spreadsheet_hide = false;
        _this.spreadsheet_column = '';
        _this.spreadsheet_addEmptyRow = false;

        _this.setInitialData(initialData);
        return _this;
    }

    (0, _createClass3.default)(TextElement, [{
        key: 'setup',
        value: function setup() {
            (0, _get3.default)(TextElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TextElement.prototype), 'setup', this).call(this);
            this.createElement();
            this.updateDisplay();
            this.updateStyle();
            this.updateContent(this.content);
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            if (field.indexOf('border') !== -1) {
                // Style.setBorderValue needs to be called before super.setValue because it calls updateStyle() which expects
                // the correct border settings
                this[field] = value;
                if (field.substr(0, 3) === 'cs_') {
                    _Style2.default.setBorderValue(this, field, 'cs_', value, elSelector, isShown);
                } else {
                    _Style2.default.setBorderValue(this, field, '', value, elSelector, isShown);
                }
            }

            (0, _get3.default)(TextElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TextElement.prototype), 'setValue', this).call(this, field, value, elSelector, isShown);

            if (field === 'content') {
                this.updateContent(value);
            } else if (field === 'width' || field === 'height') {
                this.updateDisplay();
            } else if (field === 'styleId') {
                if (value !== '') {
                    $('#rbro_text_element_style_settings').hide();
                } else {
                    $('#rbro_text_element_style_settings').show();
                }
            } else if (field === 'cs_styleId') {
                if (value != '') {
                    $('#rbro_text_element_cs_style_settings').hide();
                } else {
                    $('#rbro_text_element_cs_style_settings').show();
                }
            }
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            return ['id', 'containerId', 'x', 'y', 'width', 'height', 'content', 'eval', 'styleId', 'bold', 'italic', 'underline', 'horizontalAlignment', 'verticalAlignment', 'textColor', 'backgroundColor', 'font', 'fontSize', 'lineSpacing', 'borderColor', 'borderWidth', 'borderAll', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'printIf', 'removeEmptyElement', 'alwaysPrintOnSamePage', 'pattern', 'cs_condition', 'cs_styleId', 'cs_bold', 'cs_italic', 'cs_underline', 'cs_horizontalAlignment', 'cs_verticalAlignment', 'cs_textColor', 'cs_backgroundColor', 'cs_font', 'cs_fontSize', 'cs_lineSpacing', 'cs_borderColor', 'cs_borderWidth', 'cs_borderAll', 'cs_borderLeft', 'cs_borderTop', 'cs_borderRight', 'cs_borderBottom', 'cs_paddingLeft', 'cs_paddingTop', 'cs_paddingRight', 'cs_paddingBottom', 'spreadsheet_hide', 'spreadsheet_column', 'spreadsheet_addEmptyRow'];
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return _DocElement3.default.type.text;
        }
    }, {
        key: 'updateDisplayInternal',
        value: function updateDisplayInternal(x, y, width, height) {
            if (this.el !== null) {
                var props = { left: this.rb.toPixel(x), top: this.rb.toPixel(y),
                    width: this.rb.toPixel(width), height: this.rb.toPixel(height) };
                this.el.css(props);
            }
            // update inner text element size
            var contentSize = this.getContentSize(width, height, this.getStyle());
            var styleProperties = {};
            styleProperties['width'] = this.rb.toPixel(contentSize.width);
            styleProperties['height'] = this.rb.toPixel(contentSize.height);
            $('#rbro_el_content_text' + this.id).css(styleProperties);
        }
    }, {
        key: 'getStyle',
        value: function getStyle() {
            var style = this;
            if (this.styleId !== '') {
                var styleObj = this.rb.getDataObject(this.styleId);
                if (styleObj !== null) {
                    style = styleObj;
                }
            }
            return style;
        }
    }, {
        key: 'getContentSize',
        value: function getContentSize(width, height, style) {
            var borderWidth = utils.convertInputToNumber(style.getValue('borderWidth'));
            width -= utils.convertInputToNumber(style.getValue('paddingLeft')) + utils.convertInputToNumber(style.getValue('paddingRight'));
            if (this.borderLeft) {
                width -= borderWidth;
            }
            if (this.borderRight) {
                width -= borderWidth;
            }
            height -= utils.convertInputToNumber(style.getValue('paddingTop')) + utils.convertInputToNumber(style.getValue('paddingBottom'));
            if (this.borderTop) {
                height -= borderWidth;
            }
            if (this.borderBottom) {
                height -= borderWidth;
            }
            return { width: width, height: height };
        }
    }, {
        key: 'updateStyle',
        value: function updateStyle() {
            var styleProperties = {};
            var borderStyleProperties = {};
            var style = this.getStyle();
            var contentSize = this.getContentSize(this.widthVal, this.heightVal, style);
            var horizontalAlignment = style.getValue('horizontalAlignment');
            var verticalAlignment = style.getValue('verticalAlignment');
            var alignClass = 'rbroDocElementAlign' + horizontalAlignment.charAt(0).toUpperCase() + horizontalAlignment.slice(1);
            var valignClass = 'rbroDocElementVAlign' + verticalAlignment.charAt(0).toUpperCase() + verticalAlignment.slice(1);
            styleProperties['width'] = this.rb.toPixel(contentSize.width);
            styleProperties['height'] = this.rb.toPixel(contentSize.height);
            styleProperties['text-align'] = horizontalAlignment;
            styleProperties['vertical-align'] = verticalAlignment;
            styleProperties['background-color'] = style.getValue('backgroundColor');
            styleProperties['font-weight'] = style.getValue('bold') ? 'bold' : '';
            styleProperties['font-style'] = style.getValue('italic') ? 'italic' : 'normal';
            styleProperties['text-decoration'] = style.getValue('underline') ? 'underline' : 'none';
            styleProperties['color'] = style.getValue('textColor');
            styleProperties['font-family'] = style.getValue('font');
            styleProperties['font-size'] = style.getValue('fontSize') + 'px';
            styleProperties['line-height'] = style.getValue('lineSpacing') * 100.0 + '%';
            if (style.getValue('borderLeft') || style.getValue('borderTop') || style.getValue('borderRight') || style.getValue('borderBottom')) {
                borderStyleProperties['border-style'] = style.getValue('borderTop') ? 'solid' : 'none';
                borderStyleProperties['border-style'] += style.getValue('borderRight') ? ' solid' : ' none';
                borderStyleProperties['border-style'] += style.getValue('borderBottom') ? ' solid' : ' none';
                borderStyleProperties['border-style'] += style.getValue('borderLeft') ? ' solid' : ' none';
                borderStyleProperties['border-width'] = style.getValue('borderWidth') + 'px';
                borderStyleProperties['border-color'] = style.getValue('borderColor');
            } else {
                borderStyleProperties['border-style'] = 'none';
            }
            if (style.getValue('paddingLeft') != '' || style.getValue('paddingTop') != '' || style.getValue('paddingRight') != '' || style.getValue('paddingBottom') != '') {
                styleProperties['padding'] = this.rb.toPixel(style.getValue('paddingTop'));
                styleProperties['padding'] += ' ' + this.rb.toPixel(style.getValue('paddingRight'));
                styleProperties['padding'] += ' ' + this.rb.toPixel(style.getValue('paddingBottom'));
                styleProperties['padding'] += ' ' + this.rb.toPixel(style.getValue('paddingLeft'));
            } else {
                styleProperties['padding'] = '';
            }
            $('#rbro_el_content' + this.id).css(borderStyleProperties);
            $('#rbro_el_content' + this.id).removeClass().addClass('rbroContentContainerHelper').addClass(alignClass).addClass(valignClass);
            $('#rbro_el_content_text' + this.id).css(styleProperties);
        }
    }, {
        key: 'getXTagId',
        value: function getXTagId() {
            return 'rbro_text_element_position_x';
        }
    }, {
        key: 'getYTagId',
        value: function getYTagId() {
            return 'rbro_text_element_position_y';
        }
    }, {
        key: 'getWidthTagId',
        value: function getWidthTagId() {
            return 'rbro_text_element_width';
        }
    }, {
        key: 'getHeightTagId',
        value: function getHeightTagId() {
            return 'rbro_text_element_height';
        }
    }, {
        key: 'hasBorderSettings',
        value: function hasBorderSettings() {
            return true;
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<div id="rbro_el' + this.id + '" class="rbroDocElement rbroTextElement"></div>');
            // rbroContentContainerHelper contains border styles and alignment classes
            // rbroDocElementContentText contains specific styles
            this.el.append($('<div id="rbro_el_content' + this.id + '" class="rbroContentContainerHelper"></div>').append($('<div id="rbro_el_content_text' + this.id + '" class="rbroDocElementContentText"></div>')));
            this.appendToContainer();
            $('#rbro_el_content_text' + this.id).text(this.content);
            (0, _get3.default)(TextElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TextElement.prototype), 'registerEventHandlers', this).call(this);
        }
    }, {
        key: 'updateContent',
        value: function updateContent(value) {
            if (value.trim() === '') {
                this.name = this.rb.getLabel('docElementText');
            } else {
                this.name = value;
            }
            $('#rbro_menu_item_name' + this.id).text(this.name);
            $('#rbro_menu_item_name' + this.id).attr('title', this.name);
            $('#rbro_el_content_text' + this.id).text(value);
        }

        /**
         * Adds SetValue commands to command group parameter in case the specified parameter is used in any of
         * the object fields.
         * @param {String} oldParameterName
         * @param {String} newParameterName
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameter',
        value: function addCommandsForChangedParameter(oldParameterName, newParameterName, cmdGroup) {
            if (this.content.indexOf(oldParameterName) !== -1) {
                var cmd = new _SetValueCmd2.default(this.id, 'rbro_text_element_content', 'content', utils.replaceAll(this.content, oldParameterName, newParameterName), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(cmd);
            }
            if (this.printIf.indexOf(oldParameterName) !== -1) {
                var _cmd = new _SetValueCmd2.default(this.id, 'rbro_text_element_print_if', 'printIf', utils.replaceAll(this.printIf, oldParameterName, newParameterName), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(_cmd);
            }
            if (this.cs_condition.indexOf(oldParameterName) !== -1) {
                var _cmd2 = new _SetValueCmd2.default(this.id, 'rbro_text_element_cs_condition', 'cs_condition', utils.replaceAll(this.cs_condition, oldParameterName, newParameterName), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(_cmd2);
            }
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            var ret = (0, _get3.default)(TextElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TextElement.prototype), 'toJS', this).call(this);
            var _arr = ['borderWidth', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'cs_paddingLeft', 'cs_paddingTop', 'cs_paddingRight', 'cs_paddingBottom'];
            for (var _i = 0; _i < _arr.length; _i++) {
                var field = _arr[_i];
                ret[field] = utils.convertInputToNumber(this.getValue(field));
            }
            return ret;
        }
    }]);
    return TextElement;
}(_DocElement3.default);

exports.default = TextElement;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(25)
  , dPs         = __webpack_require__(127)
  , enumBugKeys = __webpack_require__(44)
  , IE_PROTO    = __webpack_require__(50)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(66)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(120).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(48)
  , createDesc     = __webpack_require__(35)
  , toIObject      = __webpack_require__(18)
  , toPrimitive    = __webpack_require__(53)
  , has            = __webpack_require__(22)
  , IE8_DOM_DEFINE = __webpack_require__(67)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(21) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(23).f
  , has = __webpack_require__(22)
  , TAG = __webpack_require__(19)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(51)('keys')
  , uid    = __webpack_require__(36);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(30);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(17)
  , core           = __webpack_require__(9)
  , LIBRARY        = __webpack_require__(45)
  , wksExt         = __webpack_require__(55)
  , defineProperty = __webpack_require__(23).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(19);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _Document = __webpack_require__(15);

var _Document2 = _interopRequireDefault(_Document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Command to move a menu panel item. In case the item is moved to a different container (e.g. from content to header band)
 * the corresponding doc element is moved to the new container as well.
 * @class
 */
var MovePanelItemCmd = function () {
    function MovePanelItemCmd(panelItem, moveToParentPanel, moveToPosition, rb) {
        (0, _classCallCheck3.default)(this, MovePanelItemCmd);

        this.objId = panelItem.getId();
        this.moveToParentId = moveToParentPanel.getId();
        this.moveToPosition = moveToPosition;
        this.oldParentId = panelItem.getParent().getId();
        this.oldPosition = panelItem.getSiblingPosition();
        this.oldContainerId = null;
        this.moveToContainerId = null;
        if (panelItem.getData() instanceof _DocElement2.default) {
            var docElement = panelItem.getData();
            this.oldContainerId = docElement.getValue('containerId');
            var moveToContainer = rb.getMainPanel().getContainerByItem(moveToParentPanel);
            if (moveToContainer !== null) {
                this.moveToContainerId = moveToContainer.getId();
            }
        }
        this.rb = rb;
    }

    (0, _createClass3.default)(MovePanelItemCmd, [{
        key: 'getName',
        value: function getName() {
            return 'Move panel item';
        }
    }, {
        key: 'do',
        value: function _do() {
            var pos = this.moveToPosition;
            if (this.moveToParentId === this.oldParentId && this.oldPosition < pos) {
                pos--;
            }
            this.moveTo(this.moveToParentId, pos, this.moveToContainerId !== this.oldContainerId ? this.moveToContainerId : null);
        }
    }, {
        key: 'undo',
        value: function undo() {
            this.moveTo(this.oldParentId, this.oldPosition, this.moveToContainerId !== this.oldContainerId ? this.oldContainerId : null);
        }
    }, {
        key: 'moveTo',
        value: function moveTo(toParentId, toPosition, toContainerId) {
            var obj = this.rb.getDataObject(this.objId);
            var parent = this.rb.getDataObject(toParentId);
            if (obj !== null && parent !== null) {
                obj.getPanelItem().moveToPosition(parent.getPanelItem(), toPosition);
                obj.getPanelItem().openParentItems();
                this.rb.notifyEvent(obj, _Command2.default.operation.move);
            }
        }
    }]);
    return MovePanelItemCmd;
}();

exports.default = MovePanelItemCmd;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Container2 = __webpack_require__(28);

var _Container3 = _interopRequireDefault(_Container2);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _Document = __webpack_require__(15);

var _Document2 = _interopRequireDefault(_Document);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Standard band container for header, content and footer band.
 * @class
 */
var Band = function (_Container) {
    (0, _inherits3.default)(Band, _Container);

    function Band(band, id, name, rb) {
        (0, _classCallCheck3.default)(this, Band);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Band.__proto__ || (0, _getPrototypeOf2.default)(Band)).call(this, id, name, rb));

        _this.panelItem = null;
        _this.band = band;
        if (band === _Document2.default.band.header) {
            _this.id = '0_header';
            _this.name = rb.getLabel('bandHeader');
        } else if (band === _Document2.default.band.content) {
            _this.id = '0_content';
            _this.name = rb.getLabel('bandContent');
            _this.allowAllElements = true;
        } else if (band === _Document2.default.band.footer) {
            _this.id = '0_footer';
            _this.name = rb.getLabel('bandFooter');
        }
        _this.el = null;
        return _this;
    }

    /**
     * Called after initialization is finished.
     */


    (0, _createClass3.default)(Band, [{
        key: 'setup',
        value: function setup() {
            this.el = this.rb.getDocument().getElement(this.band);
            this.elContent = this.el;
        }

        /**
         * Returns true if the given element type can be added to this container.
         * @param {String} elementType
         */

    }, {
        key: 'isElementAllowed',
        value: function isElementAllowed(elementType) {
            if (elementType === _DocElement2.default.type.tableText) {
                return false;
            }
            return this.band === _Document2.default.band.content || this.band === _Document2.default.band.none || elementType !== _DocElement2.default.type.pageBreak && elementType !== _DocElement2.default.type.table;
        }

        /**
         * Returns absolute container offset.
         * @returns {Object} x and y offset coordinates.
         */

    }, {
        key: 'getOffset',
        value: function getOffset() {
            var y = 0;
            if (this.band === _Document2.default.band.none) {
                if (this.owner !== null) {
                    y = this.owner.getValue('yVal');
                }
                if (this.parent !== null) {
                    y += this.parent.getOffset().y;
                }
            } else {
                var docProperties = this.rb.getDocumentProperties();
                if (this.band === _Document2.default.band.content && docProperties.getValue('header')) {
                    y = utils.convertInputToNumber(docProperties.getValue('headerSize'));
                } else if (this.band === _Document2.default.band.footer) {
                    y = this.rb.getDocument().getHeight() - utils.convertInputToNumber(docProperties.getValue('footerSize'));
                }
            }
            return { x: 0, y: y };
        }

        /**
         * Returns container size.
         * @returns {Object} width and height of container.
         */

    }, {
        key: 'getSize',
        value: function getSize() {
            var documentProperties = this.rb.getDocumentProperties();
            var width = documentProperties.getValue('width') - documentProperties.getValue('marginLeftVal') - documentProperties.getValue('marginRightVal');
            var height = 0;
            if (this.band === _Document2.default.band.none) {
                if (this.owner !== null) {
                    height = this.owner.getValue('heightVal');
                }
            } else if (this.band === _Document2.default.band.header) {
                height = documentProperties.getValue('headerSizeVal');
            } else if (this.band === _Document2.default.band.content) {
                height = documentProperties.getValue('height') - documentProperties.getValue('headerSizeVal') - documentProperties.getValue('footerSizeVal') - documentProperties.getValue('marginTopVal') - documentProperties.getValue('marginBottomVal');
            } else if (this.band === _Document2.default.band.footer) {
                height = documentProperties.getValue('footerSizeVal');
            }
            return { width: width, height: height };
        }
    }]);
    return Band;
}(_Container3.default);

exports.default = Band;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(4);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Barcode doc element. Currently only Code-128 is supported.
 * @class
 */
var BarCodeElement = function (_DocElement) {
    (0, _inherits3.default)(BarCodeElement, _DocElement);

    function BarCodeElement(id, initialData, rb) {
        (0, _classCallCheck3.default)(this, BarCodeElement);

        var _this = (0, _possibleConstructorReturn3.default)(this, (BarCodeElement.__proto__ || (0, _getPrototypeOf2.default)(BarCodeElement)).call(this, rb.getLabel('docElementImage'), id, 80, 80, rb));

        _this.elBarCode = null;
        _this.content = '';
        _this.format = 'CODE128';
        _this.displayValue = true;
        _this.spreadsheet_hide = false;
        _this.spreadsheet_column = '';
        _this.spreadsheet_addEmptyRow = false;
        _this.setInitialData(initialData);
        _this.name = _this.rb.getLabel('docElementBarCode');
        $('#rbro_menu_item_name' + _this.id).text(_this.name);
        return _this;
    }

    (0, _createClass3.default)(BarCodeElement, [{
        key: 'setup',
        value: function setup() {
            (0, _get3.default)(BarCodeElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(BarCodeElement.prototype), 'setup', this).call(this);
            this.createElement();
            if (this.content !== '') {
                this.updateBarCode();
            }
            this.updateDisplay();
            this.updateStyle();
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            (0, _get3.default)(BarCodeElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(BarCodeElement.prototype), 'setValue', this).call(this, field, value, elSelector, isShown);
            if (field === 'content' || field === 'format' || field === 'displayValue' || field === 'height') {
                this.updateBarCode();
                this.updateDisplay();
            }
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            return ['id', 'containerId', 'x', 'y', 'height', 'content', 'format', 'displayValue', 'printIf', 'removeEmptyElement', 'spreadsheet_hide', 'spreadsheet_column', 'spreadsheet_addEmptyRow'];
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return _DocElement3.default.type.barCode;
        }
    }, {
        key: 'updateDisplayInternal',
        value: function updateDisplayInternal(x, y, width, height) {
            if (this.el !== null) {
                var props = { left: this.rb.toPixel(x), top: this.rb.toPixel(y),
                    width: this.rb.toPixel(width), height: this.rb.toPixel(height) };
                this.el.css(props);
            }
        }

        /**
         * Returns allowed sizers when element is selected.
         * @returns {String[]}
         */

    }, {
        key: 'getSizers',
        value: function getSizers() {
            return ['N', 'S'];
        }
    }, {
        key: 'getXTagId',
        value: function getXTagId() {
            return 'rbro_bar_code_element_position_x';
        }
    }, {
        key: 'getYTagId',
        value: function getYTagId() {
            return 'rbro_bar_code_element_position_y';
        }
    }, {
        key: 'getHeightTagId',
        value: function getHeightTagId() {
            return 'rbro_bar_code_element_height';
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<div id="rbro_el' + this.id + '" class="rbroDocElement rbroBarCodeElement"></div>');
            this.elBarCode = $('<canvas></canvas>');
            this.el.append(this.elBarCode);
            this.appendToContainer();
            this.updateBarCode();
            (0, _get3.default)(BarCodeElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(BarCodeElement.prototype), 'registerEventHandlers', this).call(this);
        }
    }, {
        key: 'remove',
        value: function remove() {
            (0, _get3.default)(BarCodeElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(BarCodeElement.prototype), 'remove', this).call(this);
        }
    }, {
        key: 'updateBarCode',
        value: function updateBarCode() {
            var valid = false;
            var options = { format: this.format, height: this.displayValue ? this.heightVal - 22 : this.heightVal,
                margin: 0, displayValue: this.displayValue };
            if (this.content !== '' && this.content.indexOf('${') === -1) {
                try {
                    this.elBarCode.JsBarcode(this.content, options);
                    valid = true;
                } catch (ex) {}
            }
            if (!valid) {
                // in case barcode cannot be created because of invalid input use default content appropriate
                // for selected format
                var content = '';
                if (this.format === 'CODE39' || this.format === 'CODE128') {
                    content = '12345678';
                } else if (this.format === 'EAN13') {
                    content = '5901234123457';
                } else if (this.format === 'EAN8') {
                    content = '96385074';
                } else if (this.format === 'EAN5') {
                    content = '12345';
                } else if (this.format === 'EAN2') {
                    content = '12';
                } else if (this.format === 'ITF14') {
                    content = '12345678901231';
                } else if (this.format === 'MSI' || this.format === 'MSI10' || this.format === 'MSI11' || this.format === 'MSI1010' || this.format === 'MSI1110' || this.format == 'pharmacode') {
                    content = '1234';
                }
                this.elBarCode.JsBarcode(content, options);
            }
            this.widthVal = this.elBarCode.width();
            this.width = '' + this.widthVal;
        }

        /**
         * Adds SetValue commands to command group parameter in case the specified parameter is used in any of
         * the object fields.
         * @param {String} oldParameterName
         * @param {String} newParameterName
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameter',
        value: function addCommandsForChangedParameter(oldParameterName, newParameterName, cmdGroup) {
            if (this.content.indexOf(oldParameterName) !== -1) {
                var cmd = new _SetValueCmd2.default(this.id, 'rbro_bar_code_element_content', 'content', utils.replaceAll(this.source, oldParameterName, newParameterName), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(cmd);
            }
            if (this.printIf.indexOf(oldParameterName) !== -1) {
                var _cmd = new _SetValueCmd2.default(this.id, 'rbro_bar_code_element_print_if', 'printIf', utils.replaceAll(this.printIf, oldParameterName, newParameterName), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(_cmd);
            }
        }
    }]);
    return BarCodeElement;
}(_DocElement3.default);

exports.default = BarCodeElement;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(4);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _AddDeleteDocElementCmd = __webpack_require__(24);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _Frame = __webpack_require__(85);

var _Frame2 = _interopRequireDefault(_Frame);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Frame element. Frames can contain any number of other doc element. These doc elements
 * are positioned relative to the frame.
 * @class
 */
var FrameElement = function (_DocElement) {
    (0, _inherits3.default)(FrameElement, _DocElement);

    function FrameElement(id, initialData, rb) {
        (0, _classCallCheck3.default)(this, FrameElement);

        var _this = (0, _possibleConstructorReturn3.default)(this, (FrameElement.__proto__ || (0, _getPrototypeOf2.default)(FrameElement)).call(this, rb.getLabel('docElementFrame'), id, 100, 100, rb));

        _this.frame = null;
        _this.setupComplete = false;
        _this.label = '';
        _this.backgroundColor = '';
        _this.borderAll = false;
        _this.borderLeft = false;
        _this.borderTop = false;
        _this.borderRight = false;
        _this.borderBottom = false;
        _this.borderColor = '#000000';
        _this.borderWidth = '1';

        _this.shrinkToContentHeight = false;

        _this.spreadsheet_hide = false;
        _this.spreadsheet_column = '';
        _this.spreadsheet_addEmptyRow = false;

        _this.setInitialData(initialData);

        _this.borderWidthVal = utils.convertInputToNumber(_this.borderWidth);
        return _this;
    }

    (0, _createClass3.default)(FrameElement, [{
        key: 'setup',
        value: function setup() {
            this.borderWidthVal = utils.convertInputToNumber(this.borderWidth);
            (0, _get3.default)(FrameElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(FrameElement.prototype), 'setup', this).call(this);
            this.createElement();
            this.updateDisplay();

            if (this.linkedContainerId === null) {
                this.linkedContainerId = this.rb.getUniqueId();
            }
            this.frame = new _Frame2.default(this.linkedContainerId, 'frame_' + this.linkedContainerId, this.rb);
            this.frame.init(this);
            this.rb.addContainer(this.frame);

            this.setupComplete = true;
            this.updateStyle();
            this.updateName();
            this.panelItem.open();
        }

        /**
         * Returns highest id of this component, this is the id of the linked container because it is
         * created after the frame element.
         * @returns {Number}
         */

    }, {
        key: 'getMaxId',
        value: function getMaxId() {
            return this.linkedContainerId;
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            if (field.indexOf('border') !== -1) {
                // Style.setBorderValue needs to be called before super.setValue because it calls updateStyle() which expects
                // the correct border settings
                this[field] = value;
                if (field === 'borderWidth') {
                    this.borderWidthVal = utils.convertInputToNumber(value);
                }
                _Style2.default.setBorderValue(this, field, '', value, elSelector, isShown);
            }

            (0, _get3.default)(FrameElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(FrameElement.prototype), 'setValue', this).call(this, field, value, elSelector, isShown);

            if (field === 'label') {
                this.updateName();
            }
        }
    }, {
        key: 'updateDisplayInternal',
        value: function updateDisplayInternal(x, y, width, height) {
            if (this.el !== null) {
                var props = { left: this.rb.toPixel(x), top: this.rb.toPixel(y),
                    width: this.rb.toPixel(width), height: this.rb.toPixel(height) };
                this.el.css(props);
            }
            // update inner frame element size
            if (this.borderLeft) {
                width -= this.borderWidthVal;
            }
            if (this.borderRight) {
                width -= this.borderWidthVal;
            }
            if (this.borderTop) {
                height -= this.borderWidthVal;
            }
            if (this.borderBottom) {
                height -= this.borderWidthVal;
            }

            var styleProperties = {};
            styleProperties['width'] = this.rb.toPixel(width);
            styleProperties['height'] = this.rb.toPixel(height);
            $('#rbro_el_content_frame' + this.id).css(styleProperties);
        }
    }, {
        key: 'updateStyle',
        value: function updateStyle() {
            var styleProperties = {};
            var borderStyleProperties = {};
            styleProperties['background-color'] = this.getValue('backgroundColor');
            if (this.getValue('borderLeft') || this.getValue('borderTop') || this.getValue('borderRight') || this.getValue('borderBottom')) {
                borderStyleProperties['border-style'] = this.getValue('borderTop') ? 'solid' : 'none';
                borderStyleProperties['border-style'] += this.getValue('borderRight') ? ' solid' : ' none';
                borderStyleProperties['border-style'] += this.getValue('borderBottom') ? ' solid' : ' none';
                borderStyleProperties['border-style'] += this.getValue('borderLeft') ? ' solid' : ' none';
                borderStyleProperties['border-width'] = this.getValue('borderWidth') + 'px';
                borderStyleProperties['border-color'] = this.getValue('borderColor');
            } else {
                borderStyleProperties['border-style'] = 'none';
            }
            $('#rbro_el_content' + this.id).css(borderStyleProperties);
            this.el.css(styleProperties);
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            return ['id', 'containerId', 'linkedContainerId', 'label', 'x', 'y', 'width', 'height', 'backgroundColor', 'borderAll', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom', 'borderColor', 'borderWidth', 'printIf', 'removeEmptyElement', 'shrinkToContentHeight', 'spreadsheet_hide', 'spreadsheet_column', 'spreadsheet_addEmptyRow'];
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return _DocElement3.default.type.frame;
        }
    }, {
        key: 'getXTagId',
        value: function getXTagId() {
            return 'rbro_frame_element_position_x';
        }
    }, {
        key: 'getYTagId',
        value: function getYTagId() {
            return 'rbro_frame_element_position_y';
        }
    }, {
        key: 'getWidthTagId',
        value: function getWidthTagId() {
            return 'rbro_frame_element_width';
        }
    }, {
        key: 'getHeightTagId',
        value: function getHeightTagId() {
            return 'rbro_frame_element_height';
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<div id="rbro_el' + this.id + '" class="rbroDocElement rbroFrameElement rbroElementContainer"></div>');
            // rbroContentContainerHelper contains border styles
            // rbroDocElementContentFrame contains width and height
            this.el.append($('<div id="rbro_el_content' + this.id + '" class="rbroContentContainerHelper"></div>').append($('<div id="rbro_el_content_frame' + this.id + '" class="rbroDocElementContentFrame"></div>')));
            this.appendToContainer();
            this.registerEventHandlers();
        }
    }, {
        key: 'getContentElement',
        value: function getContentElement() {
            return $('#rbro_el_content_frame' + this.id);
        }
    }, {
        key: 'remove',
        value: function remove() {
            (0, _get3.default)(FrameElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(FrameElement.prototype), 'remove', this).call(this);
            this.rb.deleteContainer(this.frame);
        }
    }, {
        key: 'updateName',
        value: function updateName() {
            if (this.label.trim() !== '') {
                this.name = this.label;
            } else {
                this.name = this.rb.getLabel('docElementFrame');
            }
            $('#rbro_menu_item_name' + this.id).text(this.name);
        }

        /**
         * Adds SetValue commands to command group parameter in case the specified parameter is used in any of
         * the object fields.
         * @param {String} oldParameterName
         * @param {String} newParameterName
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameter',
        value: function addCommandsForChangedParameter(oldParameterName, newParameterName, cmdGroup) {
            if (this.printIf.indexOf(oldParameterName) !== -1) {
                var cmd = new _SetValueCmd2.default(this.id, 'rbro_frame_element_print_if', 'printIf', utils.replaceAll(this.printIf, oldParameterName, newParameterName), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(cmd);
            }
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            var ret = (0, _get3.default)(FrameElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(FrameElement.prototype), 'toJS', this).call(this);
            return ret;
        }
    }]);
    return FrameElement;
}(_DocElement3.default);

exports.default = FrameElement;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(4);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Image doc element. Supported formats are png and jpg.
 * @class
 */
var ImageElement = function (_DocElement) {
    (0, _inherits3.default)(ImageElement, _DocElement);

    function ImageElement(id, initialData, rb) {
        (0, _classCallCheck3.default)(this, ImageElement);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ImageElement.__proto__ || (0, _getPrototypeOf2.default)(ImageElement)).call(this, rb.getLabel('docElementImage'), id, 80, 80, rb));

        _this.source = '';
        _this.image = '';
        _this.imageWidth = 0;
        _this.imageHeight = 0;
        _this.imageRatio = 0;
        _this.imageFilename = '';
        _this.elImg = null;
        _this.horizontalAlignment = _Style2.default.alignment.left;
        _this.verticalAlignment = _Style2.default.alignment.top;
        _this.backgroundColor = '';
        _this.spreadsheet_hide = false;
        _this.spreadsheet_column = '';
        _this.spreadsheet_addEmptyRow = false;
        _this.setInitialData(initialData);
        return _this;
    }

    (0, _createClass3.default)(ImageElement, [{
        key: 'setup',
        value: function setup() {
            (0, _get3.default)(ImageElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(ImageElement.prototype), 'setup', this).call(this);
            this.createElement();
            if (this.image !== '') {
                // setImage must be called after createElement so load event handler of image element is triggered
                this.setImage(this.image);
            }
            this.updateDisplay();
            this.updateStyle();
            this.updateName();
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            (0, _get3.default)(ImageElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(ImageElement.prototype), 'setValue', this).call(this, field, value, elSelector, isShown);
            if (field === 'source' || field === 'imageFilename') {
                this.updateName();
            } else if (field === 'image') {
                this.setImage(value);
            }
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            return ['id', 'containerId', 'x', 'y', 'width', 'height', 'source', 'image', 'imageFilename', 'horizontalAlignment', 'verticalAlignment', 'backgroundColor', 'printIf', 'removeEmptyElement', 'spreadsheet_hide', 'spreadsheet_column', 'spreadsheet_addEmptyRow'];
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return _DocElement3.default.type.image;
        }
    }, {
        key: 'updateDisplayInternal',
        value: function updateDisplayInternal(x, y, width, height) {
            if (this.el !== null) {
                var props = { left: this.rb.toPixel(x), top: this.rb.toPixel(y),
                    width: this.rb.toPixel(width), height: this.rb.toPixel(height) };
                this.el.css(props);

                var imgWidth = 0;
                var imgHeight = 0;
                if (this.imageRatio !== 0) {
                    imgWidth = this.imageWidth < width ? this.imageWidth : width;
                    imgHeight = this.imageHeight < height ? this.imageHeight : height;
                    if (imgWidth !== this.imageWidth || imgHeight !== this.imageHeight) {
                        var scaledWidth = Math.floor(imgHeight * this.imageRatio);
                        if (scaledWidth < width) {
                            imgWidth = scaledWidth;
                        } else {
                            imgHeight = Math.floor(imgWidth / this.imageRatio);
                        }
                    }
                }
                this.elImg.css({ width: this.rb.toPixel(imgWidth), height: this.rb.toPixel(imgHeight) });
            }
        }
    }, {
        key: 'updateStyle',
        value: function updateStyle() {
            var styleProperties = {};
            var horizontalAlignment = this.getValue('horizontalAlignment');
            var verticalAlignment = this.getValue('verticalAlignment');
            var alignClass = 'rbroDocElementAlign' + horizontalAlignment.charAt(0).toUpperCase() + horizontalAlignment.slice(1);
            var valignClass = 'rbroDocElementVAlign' + verticalAlignment.charAt(0).toUpperCase() + verticalAlignment.slice(1);
            styleProperties['text-align'] = horizontalAlignment;
            styleProperties['vertical-align'] = verticalAlignment;
            styleProperties['background-color'] = this.getValue('backgroundColor');
            $('#rbro_el_content' + this.id).css(styleProperties);
            $('#rbro_el_content' + this.id).removeClass().addClass('rbroContentContainerHelper').addClass(alignClass).addClass(valignClass);
        }
    }, {
        key: 'getXTagId',
        value: function getXTagId() {
            return 'rbro_image_element_position_x';
        }
    }, {
        key: 'getYTagId',
        value: function getYTagId() {
            return 'rbro_image_element_position_y';
        }
    }, {
        key: 'getWidthTagId',
        value: function getWidthTagId() {
            return 'rbro_image_element_width';
        }
    }, {
        key: 'getHeightTagId',
        value: function getHeightTagId() {
            return 'rbro_image_element_height';
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            var _this2 = this;

            this.el = $('<div id="rbro_el' + this.id + '" class="rbroDocElement rbroImageElement"></div>');
            this.elImg = $('<img src="">').on('load', function (event) {
                // get image width and height in load event, because width/height are not
                // directly available in some browsers after setting src
                _this2.imageWidth = _this2.elImg.get(0).naturalWidth;
                _this2.imageHeight = _this2.elImg.get(0).naturalHeight;
                if (_this2.imageHeight !== 0) {
                    _this2.imageRatio = _this2.imageWidth / _this2.imageHeight;
                } else {
                    _this2.imageRatio = 0;
                }
                _this2.updateDisplay();
            });
            this.el.append($('<div id="rbro_el_content' + this.id + '" class="rbroContentContainerHelper"></div>').append(this.elImg));
            this.appendToContainer();
            this.setImage(this.image);
            (0, _get3.default)(ImageElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(ImageElement.prototype), 'registerEventHandlers', this).call(this);
        }
    }, {
        key: 'remove',
        value: function remove() {
            this.elImg = null;
            (0, _get3.default)(ImageElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(ImageElement.prototype), 'remove', this).call(this);
        }
    }, {
        key: 'setImage',
        value: function setImage(imgBase64) {
            this.elImg.attr('src', '');
            if (imgBase64 !== '') {
                this.elImg.attr('src', imgBase64);
            } else {
                this.imageWidth = 0;
                this.imageHeight = 0;
                this.imageRatio = 0;
                this.updateDisplay();
            }
        }
    }, {
        key: 'updateName',
        value: function updateName() {
            if (this.getValue('imageFilename').trim() !== '') {
                this.name = this.getValue('imageFilename');
            } else if (this.getValue('source').trim() !== '') {
                this.name = this.getValue('source');
            } else {
                this.name = this.rb.getLabel('docElementImage');
            }
            $('#rbro_menu_item_name' + this.id).text(this.name);
            $('#rbro_menu_item_name' + this.id).attr('title', this.name);
        }

        /**
         * Adds SetValue commands to command group parameter in case the specified parameter is used in any of
         * the object fields.
         * @param {String} oldParameterName
         * @param {String} newParameterName
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameter',
        value: function addCommandsForChangedParameter(oldParameterName, newParameterName, cmdGroup) {
            if (this.source.indexOf(oldParameterName) !== -1) {
                var cmd = new _SetValueCmd2.default(this.id, 'rbro_image_element_source', 'source', utils.replaceAll(this.source, oldParameterName, newParameterName), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(cmd);
            }
            if (this.printIf.indexOf(oldParameterName) !== -1) {
                var _cmd = new _SetValueCmd2.default(this.id, 'rbro_image_element_print_if', 'printIf', utils.replaceAll(this.printIf, oldParameterName, newParameterName), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(_cmd);
            }
        }
    }]);
    return ImageElement;
}(_DocElement3.default);

exports.default = ImageElement;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(4);

var _DocElement3 = _interopRequireDefault(_DocElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Line doc element. Currently only horizontal lines are supported.
 * @class
 */
var LineElement = function (_DocElement) {
    (0, _inherits3.default)(LineElement, _DocElement);

    function LineElement(id, initialData, rb) {
        (0, _classCallCheck3.default)(this, LineElement);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LineElement.__proto__ || (0, _getPrototypeOf2.default)(LineElement)).call(this, rb.getLabel('docElementLine'), id, 100, 1, rb));

        _this.color = '#000000';
        _this.setInitialData(initialData);
        return _this;
    }

    (0, _createClass3.default)(LineElement, [{
        key: 'setup',
        value: function setup() {
            (0, _get3.default)(LineElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(LineElement.prototype), 'setup', this).call(this);
            this.createElement();
            this.updateDisplay();
            this.updateStyle();
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            (0, _get3.default)(LineElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(LineElement.prototype), 'setValue', this).call(this, field, value, elSelector, isShown);
            if (field === 'color') {
                this.updateStyle();
            }
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            return ['id', 'containerId', 'x', 'y', 'width', 'height', 'color', 'printIf'];
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return _DocElement3.default.type.line;
        }
    }, {
        key: 'updateStyle',
        value: function updateStyle() {
            var styleProperties = {};
            styleProperties['background-color'] = this.getValue('color');
            this.el.css(styleProperties);
        }

        /**
         * Returns allowed sizers when element is selected.
         * @returns {String[]}
         */

    }, {
        key: 'getSizers',
        value: function getSizers() {
            return ['E', 'W'];
        }
    }, {
        key: 'getXTagId',
        value: function getXTagId() {
            return 'rbro_line_element_position_x';
        }
    }, {
        key: 'getYTagId',
        value: function getYTagId() {
            return 'rbro_line_element_position_y';
        }
    }, {
        key: 'getWidthTagId',
        value: function getWidthTagId() {
            return 'rbro_line_element_width';
        }
    }, {
        key: 'getHeightTagId',
        value: function getHeightTagId() {
            return 'rbro_line_element_height';
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<div id="rbro_el' + this.id + '" class="rbroDocElement rbroLineElement"></div>');
            this.appendToContainer();
            (0, _get3.default)(LineElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(LineElement.prototype), 'registerEventHandlers', this).call(this);
        }
    }]);
    return LineElement;
}(_DocElement3.default);

exports.default = LineElement;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(4);

var _DocElement3 = _interopRequireDefault(_DocElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Page break doc element. A page break triggers a new page when the document is printed.
 * @class
 */
var PageBreakElement = function (_DocElement) {
    (0, _inherits3.default)(PageBreakElement, _DocElement);

    function PageBreakElement(id, initialData, rb) {
        (0, _classCallCheck3.default)(this, PageBreakElement);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PageBreakElement.__proto__ || (0, _getPrototypeOf2.default)(PageBreakElement)).call(this, rb.getLabel('docElementPageBreak'), id, -1, 1, rb));

        _this.setInitialData(initialData);
        return _this;
    }

    (0, _createClass3.default)(PageBreakElement, [{
        key: 'setup',
        value: function setup() {
            (0, _get3.default)(PageBreakElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(PageBreakElement.prototype), 'setup', this).call(this);
            this.createElement();
            this.updateDisplay();
            this.updateStyle();
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            (0, _get3.default)(PageBreakElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(PageBreakElement.prototype), 'setValue', this).call(this, field, value, elSelector, isShown);
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            return ['id', 'containerId', 'y'];
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return _DocElement3.default.type.pageBreak;
        }
    }, {
        key: 'updateDisplayInternal',
        value: function updateDisplayInternal(x, y, width, height) {
            if (this.el !== null) {
                var props = { left: this.rb.toPixel(0), top: this.rb.toPixel(y),
                    width: '100%', height: this.rb.toPixel(1) };
                this.el.css(props);
            }
        }

        /**
         * Returns allowed sizers when element is selected.
         * @returns {String[]}
         */

    }, {
        key: 'getSizers',
        value: function getSizers() {
            return [];
        }
    }, {
        key: 'getYTagId',
        value: function getYTagId() {
            return 'rbro_page_break_element_position_y';
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<div id="rbro_el' + this.id + '" class="rbroDocElement rbroPageBreakElement"></div>');
            this.appendToContainer();
            (0, _get3.default)(PageBreakElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(PageBreakElement.prototype), 'registerEventHandlers', this).call(this);
        }
    }]);
    return PageBreakElement;
}(_DocElement3.default);

exports.default = PageBreakElement;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(4);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _TableTextElement = __webpack_require__(40);

var _TableTextElement2 = _interopRequireDefault(_TableTextElement);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Table band doc element. This is the header, content or footer of a table.
 * @class
 */
var TableBandElement = function (_DocElement) {
    (0, _inherits3.default)(TableBandElement, _DocElement);

    function TableBandElement(id, initialData, tableBand, rb) {
        (0, _classCallCheck3.default)(this, TableBandElement);

        var name = tableBand === 'header' ? rb.getLabel('bandHeader') : tableBand === 'footer' ? rb.getLabel('bandFooter') : rb.getLabel('bandContent');

        var _this = (0, _possibleConstructorReturn3.default)(this, (TableBandElement.__proto__ || (0, _getPrototypeOf2.default)(TableBandElement)).call(this, name, id, 0, 20, rb));

        _this.tableBand = tableBand;
        _this.repeatHeader = false;
        _this.alwaysPrintOnSamePage = true;
        _this.backgroundColor = '';
        _this.alternateBackgroundColor = '';
        _this.groupExpression = '';
        _this.parentId = initialData.parentId;
        _this.columnData = [];

        _this.heightVal = 0;

        _this.setInitialData(initialData);
        return _this;
    }

    (0, _createClass3.default)(TableBandElement, [{
        key: 'setInitialData',
        value: function setInitialData(initialData) {
            for (var key in initialData) {
                if (initialData.hasOwnProperty(key) && this.hasOwnProperty(key)) {
                    this[key] = initialData[key];
                }
            }
            this.heightVal = utils.convertInputToNumber(this.height);
        }
    }, {
        key: 'setup',
        value: function setup() {
            this.createElement();
            this.updateStyle();
        }
    }, {
        key: 'registerEventHandlers',
        value: function registerEventHandlers() {}

        /**
         * Returns highest id of this component including all its child components.
         * @returns {Number}
         */

    }, {
        key: 'getMaxId',
        value: function getMaxId() {
            var maxId = this.id;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.columnData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var col = _step.value;

                    if (col.getId() > maxId) {
                        maxId = col.getId();
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return maxId;
        }
    }, {
        key: 'getContainerId',
        value: function getContainerId() {
            var parent = this.getParent();
            if (parent !== null) {
                return parent.getContainerId();
            }
            return null;
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value, elSelector, isShown) {
            this[field] = value;
            if (field === 'height') {
                var height = utils.convertInputToNumber(value);
                this[field + 'Val'] = height;
                // set td height to height - 1 because border consumes 1 pixel
                this.getElement().find('td').css({ height: this.rb.toPixel(height - 1) });
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = (0, _getIterator3.default)(this.columnData), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var col = _step2.value;

                        col.setValue(field, value, elSelector, isShown);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            } else if (field === 'backgroundColor') {
                this.updateStyle();
            }
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            var fields = ['id', 'height', 'backgroundColor'];
            if (this.tableBand === 'header') {
                fields.push('repeatHeader');
            } else if (this.tableBand === 'content') {
                fields.push('alternateBackgroundColor');
                fields.push('groupExpression');
                fields.push('printIf');
                fields.push('alwaysPrintOnSamePage');
            }
            return fields;
        }
    }, {
        key: 'updateDisplayInternal',
        value: function updateDisplayInternal(x, y, width, height) {}
    }, {
        key: 'updateStyle',
        value: function updateStyle() {
            this.el.css('background-color', this.backgroundColor);
        }

        /**
         * Returns allowed sizers when element is selected.
         * @returns {String[]}
         */

    }, {
        key: 'getSizers',
        value: function getSizers() {
            return [];
        }
    }, {
        key: 'getHeightTagId',
        value: function getHeightTagId() {
            return 'rbro_table_band_element_height';
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this.heightVal;
        }
    }, {
        key: 'isDraggingAllowed',
        value: function isDraggingAllowed() {
            return false;
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<tr id="rbro_el_table_band' + this.id + '" class="rbroTableBandElement"></tr>');
            $('#rbro_el_table_' + this.tableBand + this.parentId).append(this.el);
        }
    }, {
        key: 'remove',
        value: function remove() {
            (0, _get3.default)(TableBandElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableBandElement.prototype), 'remove', this).call(this);
            for (var i = 0; i < this.columnData.length; i++) {
                this.rb.deleteDataObject(this.columnData[i]);
            }
        }
    }, {
        key: 'getParent',
        value: function getParent() {
            return this.rb.getDataObject(this.parentId);
        }
    }, {
        key: 'createColumns',
        value: function createColumns(columns, isUpdate) {
            if (this.panelItem === null) {
                return;
            }

            if (isUpdate) {
                for (var i = 0; i < this.columnData.length; i++) {
                    this.columnData[i].remove();
                    if (i >= columns) {
                        this.rb.deleteDataObject(this.columnData[i]);
                    }
                }
            }
            var newColumnData = [];
            for (var _i = 0; _i < columns; _i++) {
                var data = void 0;
                var dataId = void 0;
                if (_i < this.columnData.length) {
                    data = this.columnData[_i];
                    dataId = data.id;
                    if (!isUpdate) {
                        data.band = this.band;
                        data.columnIndex = _i;
                        data.parentId = this.id;
                        data.tableId = this.parentId;
                    }
                } else {
                    data = { band: this.band, columnIndex: _i, parentId: this.id, tableId: this.parentId,
                        width: isUpdate ? 20 : 100, height: this.height };
                }
                if (!dataId) {
                    dataId = this.rb.getUniqueId();
                }

                var textElement = new _TableTextElement2.default(dataId, data, this.rb);
                newColumnData.push(textElement);
                this.rb.addDataObject(textElement);
                var panelItemText = new _MainPanelItem2.default(_DocElement3.default.type.text, '', this.panelItem, textElement, { showDelete: false }, this.rb);
                textElement.setPanelItem(panelItemText);
                this.panelItem.appendChild(panelItemText);
                textElement.setup();
            }
            this.columnData = newColumnData;
            this.getElement().find('td').css({ height: this.rb.toPixel(this.heightVal - 1) });
        }
    }, {
        key: 'show',
        value: function show(visible) {
            if (visible) {
                $('#rbro_el_table_band' + this.id).removeClass('rbroHidden');
            } else {
                $('#rbro_el_table_band' + this.id).addClass('rbroHidden');
            }
        }
    }, {
        key: 'updateColumnWidth',
        value: function updateColumnWidth(columnIndex, width) {
            if (columnIndex < this.columnData.length) {
                var colData = this.columnData[columnIndex];
                colData.updateColumnWidth(width);
            }
        }
    }, {
        key: 'getColumn',
        value: function getColumn(columnIndex) {
            if (columnIndex >= 0 && columnIndex < this.columnData.length) {
                return this.columnData[columnIndex];
            }
            return null;
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            var width = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = (0, _getIterator3.default)(this.columnData), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var col = _step3.value;

                    width += col.getValue('widthVal');
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return width;
        }
    }, {
        key: 'getColumnWidths',
        value: function getColumnWidths() {
            var widths = [];
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = (0, _getIterator3.default)(this.columnData), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var col = _step4.value;

                    widths.push(col.getValue('widthVal'));
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return widths;
        }
    }, {
        key: 'addChildren',
        value: function addChildren(docElements) {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = (0, _getIterator3.default)(this.columnData), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var column = _step5.value;

                    docElements.push(column);
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            var ret = (0, _get3.default)(TableBandElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableBandElement.prototype), 'toJS', this).call(this);
            ret['columnData'] = [];
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = (0, _getIterator3.default)(this.columnData), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var column = _step6.value;

                    ret['columnData'].push(column.toJS());
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            return ret;
        }
    }]);
    return TableBandElement;
}(_DocElement3.default);

exports.default = TableBandElement;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(105);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(104);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(115);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30)
  , document = __webpack_require__(17).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(21) && !__webpack_require__(29)(function(){
  return Object.defineProperty(__webpack_require__(66)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(45)
  , $export        = __webpack_require__(26)
  , redefine       = __webpack_require__(74)
  , hide           = __webpack_require__(27)
  , has            = __webpack_require__(22)
  , Iterators      = __webpack_require__(33)
  , $iterCreate    = __webpack_require__(123)
  , setToStringTag = __webpack_require__(49)
  , getPrototypeOf = __webpack_require__(71)
  , ITERATOR       = __webpack_require__(19)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(72)
  , hiddenKeys = __webpack_require__(44).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(22)
  , toObject    = __webpack_require__(75)
  , IE_PROTO    = __webpack_require__(50)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(22)
  , toIObject    = __webpack_require__(18)
  , arrayIndexOf = __webpack_require__(117)(false)
  , IE_PROTO     = __webpack_require__(50)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(26)
  , core    = __webpack_require__(9)
  , fails   = __webpack_require__(29);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(43);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(130)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(68)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
var global        = __webpack_require__(17)
  , hide          = __webpack_require__(27)
  , Iterators     = __webpack_require__(33)
  , TO_STRING_TAG = __webpack_require__(19)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ReportBro = __webpack_require__(82);

var _ReportBro2 = _interopRequireDefault(_ReportBro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$.fn.reportBro = function (options) {
    var args = Array.prototype.slice.call(arguments, 1); // arguments for method call
    var ret = this; // function return value (this jQuery obj by default)

    this.each(function (i, _element) {
        var element = $(_element);
        var reportBro = element.data('reportBro');
        var currentResult;

        // method call
        if (typeof options === 'string') {
            if (reportBro && $.isFunction(reportBro[options])) {
                currentResult = reportBro[options].apply(reportBro, args);
                if (i === 0) {
                    ret = currentResult;
                }
                if (options === 'destroy') {
                    element.removeData('reportBro');
                }
            }
        }
        // new ReportBro instance
        else if (!reportBro) {
                reportBro = new _ReportBro2.default(element, options);
                element.data('reportBro', reportBro);
                reportBro.render();
                reportBro.setup();
            }
    });

    return ret;
}; //
// Copyright (C) 2017 jobsta
//
// This file is part of ReportBro, a library to generate PDF and Excel reports.
// Demos can be found at https://reportbro.com.
//
// ReportBro is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// ReportBro is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(32);

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Document = __webpack_require__(15);

var _Document2 = _interopRequireDefault(_Document);

var _PopupWindow = __webpack_require__(10);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

var _AddDeleteDocElementCmd = __webpack_require__(24);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _CommandGroupCmd = __webpack_require__(20);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Band = __webpack_require__(57);

var _Band2 = _interopRequireDefault(_Band);

var _Container = __webpack_require__(28);

var _Container2 = _interopRequireDefault(_Container);

var _DocumentProperties = __webpack_require__(37);

var _DocumentProperties2 = _interopRequireDefault(_DocumentProperties);

var _Parameter = __webpack_require__(16);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _BandElement = __webpack_require__(38);

var _BandElement2 = _interopRequireDefault(_BandElement);

var _BarCodeElement = __webpack_require__(58);

var _BarCodeElement2 = _interopRequireDefault(_BarCodeElement);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _FrameElement = __webpack_require__(59);

var _FrameElement2 = _interopRequireDefault(_FrameElement);

var _ImageElement = __webpack_require__(60);

var _ImageElement2 = _interopRequireDefault(_ImageElement);

var _LineElement = __webpack_require__(61);

var _LineElement2 = _interopRequireDefault(_LineElement);

var _PageBreakElement = __webpack_require__(62);

var _PageBreakElement2 = _interopRequireDefault(_PageBreakElement);

var _TableBandElement = __webpack_require__(63);

var _TableBandElement2 = _interopRequireDefault(_TableBandElement);

var _TableElement = __webpack_require__(39);

var _TableElement2 = _interopRequireDefault(_TableElement);

var _TableTextElement = __webpack_require__(40);

var _TableTextElement2 = _interopRequireDefault(_TableTextElement);

var _TextElement = __webpack_require__(41);

var _TextElement2 = _interopRequireDefault(_TextElement);

var _BandElementPanel = __webpack_require__(88);

var _BandElementPanel2 = _interopRequireDefault(_BandElementPanel);

var _BarCodeElementPanel = __webpack_require__(89);

var _BarCodeElementPanel2 = _interopRequireDefault(_BarCodeElementPanel);

var _DocumentPropertiesPanel = __webpack_require__(90);

var _DocumentPropertiesPanel2 = _interopRequireDefault(_DocumentPropertiesPanel);

var _EmptyDetailPanel = __webpack_require__(91);

var _EmptyDetailPanel2 = _interopRequireDefault(_EmptyDetailPanel);

var _FrameElementPanel = __webpack_require__(92);

var _FrameElementPanel2 = _interopRequireDefault(_FrameElementPanel);

var _ImageElementPanel = __webpack_require__(93);

var _ImageElementPanel2 = _interopRequireDefault(_ImageElementPanel);

var _LineElementPanel = __webpack_require__(94);

var _LineElementPanel2 = _interopRequireDefault(_LineElementPanel);

var _MainPanel = __webpack_require__(86);

var _MainPanel2 = _interopRequireDefault(_MainPanel);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _MenuPanel = __webpack_require__(87);

var _MenuPanel2 = _interopRequireDefault(_MenuPanel);

var _PageBreakElementPanel = __webpack_require__(95);

var _PageBreakElementPanel2 = _interopRequireDefault(_PageBreakElementPanel);

var _ParameterPanel = __webpack_require__(96);

var _ParameterPanel2 = _interopRequireDefault(_ParameterPanel);

var _StylePanel = __webpack_require__(31);

var _StylePanel2 = _interopRequireDefault(_StylePanel);

var _TableElementPanel = __webpack_require__(98);

var _TableElementPanel2 = _interopRequireDefault(_TableElementPanel);

var _TableBandElementPanel = __webpack_require__(97);

var _TableBandElementPanel2 = _interopRequireDefault(_TableBandElementPanel);

var _TextElementPanel = __webpack_require__(99);

var _TextElementPanel2 = _interopRequireDefault(_TextElementPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used for the main ReportBro instance.
 * @class
 */
var ReportBro = function () {
    function ReportBro(element, properties) {
        var _this = this;

        (0, _classCallCheck3.default)(this, ReportBro);

        this.element = element;
        this.nextId = 1;
        this.locale = {
            bandContent: '表体',
            bandFooter: '表尾',
            bandHeader: '表头',
            barCodeElementContent: '内容',
            barCodeElementDisplayValue: '显示数值',
            barCodeElementFormat: '格式',
            contentHeight: '内容高度',
            contentHeightInfo: 'affects only GUI size to place elements and not the real page size',
            docElementAlwaysPrintOnSamePage: '显示在一页上',
            docElementBand: 'Band',
            docElementBarCode: '条码',
            docElementColor: '颜色',
            docElementConditionalStyle: 'Conditional style',
            docElementConditionalStyleCondition: 'Condition',
            docElementDataSource: 'Data source',
            docElementFrame: 'Frame',
            docElementHeight: 'Height',
            docElementImage: '图片',
            docElementLabel: 'Label',
            docElementLine: '分割线',
            docElementPageBreak: '分页线',
            docElementPosition: '位置 (x, y)',
            docElementPositionX: 'Position (x)',
            docElementPositionY: 'Position (y)',
            docElementPrintIf: '打印条件',
            docElementPrintSettings: '打印设置',
            docElementRemoveEmptyElement: '删除空行',
            docElementRoot: 'Document',
            docElementSize: '尺寸 (宽度, 高度)',
            docElementSpreadsheet: '电子表格',
            docElementSpreadsheetAddEmptyRow: '添加空行',
            docElementSpreadsheetColumn: '固定列',
            docElementSpreadsheetHide: '隐藏',
            docElementWidth: 'Width',
            docElementStyle: '样式',
            docElementTable: '表格',
            docElementText: '内容',
            documentProperties: '文档属性',
            documentTabClose: 'Close',
            documentTabPdfLayout: 'PDF Layout',
            documentTabPdfPreview: 'PDF Preview',
            documentTabXlsxDownload: 'XLSX Download',
            emptyPanel: 'Empty panel',
            errorMsgDuplicateParameterField: 'Field already exists',
            errorMsgInvalidArray: 'Invalid list',
            errorMsgInvalidAvgSumExpression: 'Expression must contain number field of a list parameter',
            errorMsgInvalidBarCode: 'Invalid bar code content',
            errorMsgInvalidDataSource: 'Invalid data source',
            errorMsgInvalidDataSourceParameter: 'Parameter must be a list',
            errorMsgInvalidDate: 'Invalid date, expected format is YYYY-MM-DD ( or YYYY-MM-DD hh:mm for date with time)',
            errorMsgInvalidExpression: 'Invalid expression: ${info}',
            errorMsgInvalidExpressionFuncNotDefined: 'Function ${info} not defined',
            errorMsgInvalidExpressionNameNotDefined: 'Name ${info} not defined',
            errorMsgInvalidImage: 'Invalid image data, image must be base64 encoded',
            errorMsgInvalidImageSource: 'Invalid source, expected url starting with http:// or https://',
            errorMsgInvalidImageSourceParameter: 'Parameter must be an image or string (containing a url)',
            errorMsgInvalidMap: 'Invalid collection',
            errorMsgInvalidNumber: 'Invalid number',
            errorMsgInvalidPageSize: 'Invalid page size',
            errorMsgInvalidParameterData: 'Data does not match parameter',
            errorMsgInvalidParameterName: 'Name must start with a character or underscore, and must only contain characters, digits and underscores (_)',
            errorMsgInvalidPattern: 'Invalid pattern',
            errorMsgInvalidPosition: 'The position is outside the area',
            errorMsgInvalidSize: 'The element is outside the area',
            errorMsgInvalidTestData: 'Invalid test data',
            errorMsgMissingData: 'Missing data',
            errorMsgMissingDataSourceParameter: 'Data source parameter not found',
            errorMsgMissingExpression: 'Expression must be set',
            errorMsgMissingImage: 'Missing image, no source or image file specified',
            errorMsgMissingParameter: 'Parameter not found',
            errorMsgMissingParameterData: 'Data for parameter {info} not found',
            errorMsgUnicodeEncodeError: 'Text contains non printable character',
            errorMsgUnsupportedImageType: 'Image does not have supported image type (.jpg, .png)',
            footer: '表尾',
            footerDisplay: '显示',
            footerSize: '表尾高度',
            frameElementShrinkToContentHeight: 'Shrink to content height',
            imageElementImage: '图片文件',
            imageElementLoadErrorMsg: 'Loading image failed',
            imageElementSource: '来源',
            header: '表头',
            headerDisplay: '显示',
            headerFooterDisplayAlways: '总是',
            headerFooterDisplayNotOnFirstPage: '在第一页显示',
            headerSize: '表头高度',
            menuAlignBottom: 'Align bottom',
            menuAlignCenter: 'Align center',
            menuAlignLeft: 'Align left',
            menuAlignMiddle: 'Align middle',
            menuAlignRight: 'Align right',
            menuAlignTop: 'Align top',
            menuPreview: 'PREVIEW',
            menuPreviewTip: '预览',
            menuRedo: 'REDO',
            menuRedoTip: '回退',
            menuSave: 'SAVE',
            menuSaveTip: '保存',
            menuToggleGrid: 'Show/Hide grid',
            menuUndo: 'UNDO',
            menuUndoTip: '取消',
            orientation: '方向',
            orientationBottom: 'bottom',
            orientationLandscape: '纵向',
            orientationLeft: 'left',
            orientationPortrait: '横向',
            orientationRight: 'right',
            orientationTop: 'top',
            pageFormat: '页面格式',
            pageFormatA4: 'DIN A4 (210 x 297 mm)',
            pageFormatA5: 'DIN A5 (148 x 210 mm)',
            pageFormatLetter: 'Letter (8.5 x 11.0 inches)',
            pageFormatUserDefined: 'Own dimensions',
            pageHeight: 'height',
            pageMargins: '页边距',
            pageWidth: 'width',
            parameter: 'Parameter',
            parameterExpression: '表达式',
            parameterListType: 'List type',
            parameterName: '名称',
            parameterPattern: '格式化',
            parameters: '打印参数',
            parameterAddTestData: 'Add row',
            parameterArrayItemType: 'List item type',
            parameterEditTestData: '编辑',
            parameterEditTestDataNoFields: 'No fields defined for this list',
            parameterEval: '运算',
            parameterNullable: '允许为空',
            parameterTestData: 'Test data',
            parameterTestDataDatePattern: 'YYYY-MM-DD',
            parameterType: '类型',
            parameterTypeArray: 'List',
            parameterTypeAverage: '平均',
            parameterTypeBoolean: '布尔',
            parameterTypeDate: '日期',
            parameterTypeImage: '图片',
            parameterTypeMap: 'Collection',
            parameterTypeNumber: '数字',
            parameterTypeSimpleArray: 'Simple List',
            parameterTypeString: '文本',
            parameterTypeSum: '求和',
            patternCurrencySymbol: '货币符号',
            patternDate1: 'day.month.year, e.g. 1.6.1980',
            patternDate2: 'day.month.year (2-digit), hour(24h):minute, e.g. 1.6.80, 14:30',
            patternDate3: 'day/month/year (month abbreviation), e.g. 1/Jun/1980',
            patternDate4: 'month/day/year (day and month with leading zero if single digit), e.g. 06/01/1980',
            patternLocale: '模式设置',
            patternNumber1: 'Show thousand separator',
            patternNumber2: 'Show decimal point followed by 3 decimal places',
            patternNumber3: 'Show decimal point followed by minimum of 2 and maximum of 4 decimal places',
            patternNumber4: 'Show thousand separator and decimal point followed by 2 decimal places',
            patternNumber5: 'Show currency symbol in front of number',
            patternSeparatorDates: '--- Date patterns ---',
            patternSeparatorNumbers: '--- Number patterns ---',
            select: 'select...',
            style: 'Style',
            styleAlignment: '排列',
            styleBackgroundColor: '背景色',
            styleBold: 'Bold',
            styleBorder: '边框',
            styleBorderAll: 'borders',
            styleBorderColor: '边框颜色',
            styleBorderWidth: '边框宽度',
            styleFont: '字体',
            styleFontSizeUnit: 'pt',
            styleHAlignmentCenter: 'Center',
            styleHAlignmentLeft: 'Left',
            styleHAlignmentJustify: 'Justify',
            styleHAlignmentRight: 'Right',
            styleItalic: 'Italic',
            styleLineSpacing: '行间距',
            styleName: 'Name',
            styleNone: 'None',
            stylePadding: '边距',
            styleTextColor: '文本颜色',
            styleTextStyle: '文本样式',
            styleUnderline: 'Underline',
            styleVAlignmentBottom: 'Bottom',
            styleVAlignmentMiddle: 'Middle',
            styleVAlignmentTop: 'Top',
            styles: '样式',
            tableElementAlternateBackgroundColor: 'Alternate background color',
            tableElementBorderFrame: 'Frame',
            tableElementBorderFrameRow: 'Frame and row',
            tableElementBorderGrid: 'Grid',
            tableElementBorderNone: 'None',
            tableElementBorderRow: 'Row',
            tableElementColumns: 'Columns',
            tableElementContentRows: 'Content rows',
            tableElementGroupExpression: 'Group expression',
            tableElementRepeatHeader: 'Repeat header',
            textElementContent: '内容',
            textElementEval: '运算',
            textElementPattern: 'Pattern'
        };

        this.properties = {
            additionalFonts: [],
            adminMode: true,
            enableSpreadsheet: true,
            fonts: [
                // { name: 'Courier', value: 'courier' }, { name: 'Helvetica', value: 'helvetica' }, { name: 'Times New Roman', value: 'times' }
                ],
            localStorageReportKey: null,
            menuShowButtonLabels: false,
            menuSidebar: false,
            saveCallback: null,
            showGrid: true,
            patternAdditionalDates: [],
            patternAdditionalNumbers: [],
            patternCurrencySymbol: '$',
            patternDates: [{ name: 'd.M.yyyy', description: this.locale['patternDate1'] }, { name: 'd.M.yy, H:mm', description: this.locale['patternDate2'] }, { name: 'd/MMM/yyyy', description: this.locale['patternDate3'] }, { name: 'MM/dd/yyyy', description: this.locale['patternDate4'] }],
            patternLocale: 'en',
            patternNumbers: [{ name: '#,##0', description: this.locale['patternNumber1'] }, { name: '0.000', description: this.locale['patternNumber2'] }, { name: '0.00##', description: this.locale['patternNumber3'] }, { name: '#,##0.00', description: this.locale['patternNumber4'] }, { name: '$ #,##0.00', description: this.locale['patternNumber5'] }],
            reportServerTimeout: 20000,
            //reportServerUrl: 'https://www.reportbro.com/report/run',
            reportServerUrl: 'https://print-tools.mypscloud.com/reportbro/report/run',
            reportServerUrlCrossDomain: false
        };
        if (properties) {
            for (var prop in properties) {
                if (this.properties.hasOwnProperty(prop)) {
                    this.properties[prop] = properties[prop];
                }
            }
            $.extend(this.locale, properties['locale'] || {});
        }
        if (this.properties.additionalFonts.length > 0) {
            this.properties.fonts = this.properties.fonts.concat(this.properties.additionalFonts);
        }
        if (this.properties.patternAdditionalDates.length > 0) {
            this.properties.patternDates = this.properties.patternDates.concat(this.properties.patternAdditionalDates);
        }
        if (this.properties.patternAdditionalNumbers.length > 0) {
            this.properties.patternNumbers = this.properties.patternNumbers.concat(this.properties.patternAdditionalNumbers);
        }

        this.detailData = null;
        this.document = new _Document2.default(element, this.properties.showGrid, this);
        this.popupWindow = new _PopupWindow2.default(element, this);
        this.docElements = [];
        this.headerBand = new _Band2.default(_Document2.default.band.header, '', '', this);
        this.contentBand = new _Band2.default(_Document2.default.band.content, '', '', this);
        this.footerBand = new _Band2.default(_Document2.default.band.footer, '', '', this);
        this.parameterContainer = new _Container2.default('0_parameters', this.getLabel('parameters'), this);
        this.styleContainer = new _Container2.default('0_styles', this.getLabel('styles'), this);
        this.documentProperties = new _DocumentProperties2.default(this);
        this.clipboardElements = [];

        this.mainPanel = new _MainPanel2.default(element, this.headerBand, this.contentBand, this.footerBand, this.parameterContainer, this.styleContainer, this);
        this.menuPanel = new _MenuPanel2.default(element, this);
        this.activeDetailPanel = 'none';
        this.detailPanels = {
            'none': new _EmptyDetailPanel2.default(element, this),
            'band': new _BandElementPanel2.default(element, this),
            'bar_code': new _BarCodeElementPanel2.default(element, this),
            'frame': new _FrameElementPanel2.default(element, this),
            'text': new _TextElementPanel2.default(element, this),
            'line': new _LineElementPanel2.default(element, this),
            'image': new _ImageElementPanel2.default(element, this),
            'page_break': new _PageBreakElementPanel2.default(element, this),
            'table': new _TableElementPanel2.default(element, this),
            'table_band': new _TableBandElementPanel2.default(element, this),
            'parameter': new _ParameterPanel2.default(element, this),
            'style': new _StylePanel2.default(element, this),
            'documentProperties': new _DocumentPropertiesPanel2.default(this.documentProperties, element, this)
        };
        this.commandStack = [];
        this.lastCommandIndex = -1;
        this.modified = false;
        this.selectionSinceLastCommand = false;
        this.objectMap = {};
        this.containers = [this.headerBand, this.contentBand, this.footerBand];
        this.selections = [];
        this.reportKey = null; // key of last report preview to allow download of xlsx file for this report

        this.browserDragType = '';
        this.browserDragCategory = '';
        this.browserDragId = '';

        this.documentProperties.setPanelItem(this.mainPanel.getDocumentPropertiesItem());
        this.initObjectMap();

        $(document).keydown(function (event) {
            // check metaKey instead of ctrl for Mac
            if (event.metaKey || event.ctrlKey) {
                switch (event.which) {
                    case 67:
                        {
                            // Ctrl + C: copy
                            if (!(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) {
                                var cleared = false;
                                var idMap = {};
                                var i = void 0;
                                var _iteratorNormalCompletion = true;
                                var _didIteratorError = false;
                                var _iteratorError = undefined;

                                try {
                                    for (var _iterator = (0, _getIterator3.default)(_this.selections), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                        var selectionId = _step.value;

                                        var obj = _this.getDataObject(selectionId);
                                        if (obj instanceof _DocElement2.default && !(obj instanceof _TableTextElement2.default)) {
                                            if (!cleared) {
                                                _this.clipboardElements = [];
                                                cleared = true;
                                            }
                                            if (!(obj.getId() in idMap)) {
                                                idMap[obj.getId()] = true;
                                                _this.clipboardElements.push(obj.toJS());
                                                if (obj instanceof _FrameElement2.default) {
                                                    var nestedElements = [];
                                                    obj.appendContainerChildren(nestedElements);
                                                    var _iteratorNormalCompletion2 = true;
                                                    var _didIteratorError2 = false;
                                                    var _iteratorError2 = undefined;

                                                    try {
                                                        for (var _iterator2 = (0, _getIterator3.default)(nestedElements), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                                            var nestedElement = _step2.value;

                                                            if (nestedElement.getId() in idMap) {
                                                                // in case a nested element is also selected we make sure to add it only once to
                                                                // the clipboard objects and to add it after its parent element
                                                                for (i = 0; i < _this.clipboardElements.length; i++) {
                                                                    if (nestedElement.getId() === _this.clipboardElements[i].id) {
                                                                        _this.clipboardElements.splice(i, 1);
                                                                        break;
                                                                    }
                                                                }
                                                            } else {
                                                                idMap[nestedElement.getId()] = true;
                                                            }
                                                            _this.clipboardElements.push(nestedElement.toJS());
                                                        }
                                                    } catch (err) {
                                                        _didIteratorError2 = true;
                                                        _iteratorError2 = err;
                                                    } finally {
                                                        try {
                                                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                                                _iterator2.return();
                                                            }
                                                        } finally {
                                                            if (_didIteratorError2) {
                                                                throw _iteratorError2;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return) {
                                            _iterator.return();
                                        }
                                    } finally {
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }

                                event.preventDefault();
                            }
                            break;
                        }
                    case 86:
                        {
                            // Ctrl + V: paste
                            if (!(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) {
                                var _cleared = false;
                                var mappedContainerIds = {};
                                var _iteratorNormalCompletion3 = true;
                                var _didIteratorError3 = false;
                                var _iteratorError3 = undefined;

                                try {
                                    for (var _iterator3 = (0, _getIterator3.default)(_this.clipboardElements), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                        var clipboardElement = _step3.value;

                                        clipboardElement.id = _this.getUniqueId();
                                        if (clipboardElement.linkedContainerId) {
                                            var linkedContainerId = _this.getUniqueId();
                                            mappedContainerIds[clipboardElement.linkedContainerId] = linkedContainerId;
                                            clipboardElement.linkedContainerId = linkedContainerId;
                                        }
                                        if (clipboardElement.elementType === _DocElement2.default.type.table) {
                                            _TableElement2.default.removeIds(clipboardElement);
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError3 = true;
                                    _iteratorError3 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                            _iterator3.return();
                                        }
                                    } finally {
                                        if (_didIteratorError3) {
                                            throw _iteratorError3;
                                        }
                                    }
                                }

                                var _iteratorNormalCompletion4 = true;
                                var _didIteratorError4 = false;
                                var _iteratorError4 = undefined;

                                try {
                                    for (var _iterator4 = (0, _getIterator3.default)(_this.clipboardElements), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                        var _clipboardElement = _step4.value;

                                        // map id of container in case element is inside other pasted container (frame/band)
                                        if (_clipboardElement.containerId in mappedContainerIds) {
                                            _clipboardElement.containerId = mappedContainerIds[_clipboardElement.containerId];
                                        }
                                        _clipboardElement.x = _clipboardElement.y = 0;
                                        _this.createDocElement(_clipboardElement, true);
                                        _this.selectObject(_clipboardElement.id, !_cleared);
                                        _cleared = true;
                                    }
                                } catch (err) {
                                    _didIteratorError4 = true;
                                    _iteratorError4 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                            _iterator4.return();
                                        }
                                    } finally {
                                        if (_didIteratorError4) {
                                            throw _iteratorError4;
                                        }
                                    }
                                }

                                event.preventDefault();
                            }
                            break;
                        }
                    case 89:
                        {
                            // Ctrl + Y: redo
                            _this.redoCommand();
                            event.preventDefault();
                            break;
                        }
                    case 90:
                        {
                            // Ctrl + Z: undo
                            _this.undoCommand();
                            event.preventDefault();
                            break;
                        }
                }
            } else {
                if (event.which === 27) {
                    // escape
                    _this.popupWindow.hide();
                } else if (!(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) {
                    switch (event.which) {
                        case 8: // backspace
                        case 46:
                            {
                                // delete
                                var cmdGroup = new _CommandGroupCmd2.default('Delete', _this);
                                var _iteratorNormalCompletion5 = true;
                                var _didIteratorError5 = false;
                                var _iteratorError5 = undefined;

                                try {
                                    for (var _iterator5 = (0, _getIterator3.default)(_this.selections), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                        var _selectionId = _step5.value;

                                        var _obj = _this.getDataObject(_selectionId);
                                        if (_obj instanceof _DocElement2.default) {
                                            var cmd = new _AddDeleteDocElementCmd2.default(false, _obj.getPanelItem().getPanelName(), _obj.toJS(), _obj.getId(), _obj.getContainerId(), _obj.getPanelItem().getSiblingPosition(), _this);
                                            cmdGroup.addCommand(cmd);
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError5 = true;
                                    _iteratorError5 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                            _iterator5.return();
                                        }
                                    } finally {
                                        if (_didIteratorError5) {
                                            throw _iteratorError5;
                                        }
                                    }
                                }

                                if (!cmdGroup.isEmpty()) {
                                    _this.executeCommand(cmdGroup);
                                }
                                event.preventDefault();
                                break;
                            }
                        case 37: // left
                        case 38: // up
                        case 39: // right
                        case 40:
                            {
                                // down
                                var _cmdGroup = new _CommandGroupCmd2.default('Move element', _this);
                                var tagId = void 0;
                                var field = event.which === 37 || event.which === 39 ? 'x' : 'y';
                                var bandWidth = _this.getDocumentProperties().getContentSize().width;
                                var _iteratorNormalCompletion6 = true;
                                var _didIteratorError6 = false;
                                var _iteratorError6 = undefined;

                                try {
                                    for (var _iterator6 = (0, _getIterator3.default)(_this.selections), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                        var _selectionId2 = _step6.value;

                                        var _obj2 = _this.getDataObject(_selectionId2);
                                        if (_obj2 instanceof _DocElement2.default) {
                                            if (event.which === 37 || event.which === 39) {
                                                tagId = _obj2.getXTagId();
                                            } else {
                                                tagId = _obj2.getYTagId();
                                            }
                                            if (tagId !== '') {
                                                var val = null;
                                                if (event.which === 37) {
                                                    if (_obj2.getValue('xVal') > 0) {
                                                        val = _obj2.getValue('xVal') - 1;
                                                    }
                                                } else if (event.which === 38) {
                                                    if (_obj2.getValue('yVal') > 0) {
                                                        val = _obj2.getValue('yVal') - 1;
                                                    }
                                                } else if (event.which === 39) {
                                                    var containerSize = _obj2.getContainerSize();
                                                    if (_obj2.getValue('xVal') + _obj2.getValue('widthVal') < containerSize.width) {
                                                        val = _obj2.getValue('xVal') + 1;
                                                    }
                                                } else if (event.which === 40) {
                                                    var _containerSize = _obj2.getContainerSize();
                                                    if (_obj2.getValue('yVal') + _obj2.getValue('heightVal') < _containerSize.height) {
                                                        val = _obj2.getValue('yVal') + 1;
                                                    }
                                                }
                                                if (val !== null) {
                                                    var _cmd = new _SetValueCmd2.default(_selectionId2, tagId, field, val, _SetValueCmd2.default.type.text, _this);
                                                    _cmdGroup.addCommand(_cmd);
                                                }
                                            }
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError6 = true;
                                    _iteratorError6 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                            _iterator6.return();
                                        }
                                    } finally {
                                        if (_didIteratorError6) {
                                            throw _iteratorError6;
                                        }
                                    }
                                }

                                if (!_cmdGroup.isEmpty()) {
                                    _this.executeCommand(_cmdGroup);
                                }
                                event.preventDefault();
                                break;
                            }
                    }
                }
            }
        });
    }

    /**
     * Adds default parameters like page count/number.
     */


    (0, _createClass3.default)(ReportBro, [
    {
        key: 'addDefaultParameters',
        value: function addDefaultParameters() {
            var _arr = [{ name: 'page_count', type: _Parameter2.default.type.number, eval: false, editable: false, showOnlyNameType: true }, { name: 'page_number', type: _Parameter2.default.type.number, eval: false, editable: false, showOnlyNameType: true }];

            for (var _i = 0; _i < _arr.length; _i++) {
                var parameterData = _arr[_i];
                var parameter = new _Parameter2.default(this.getUniqueId(), parameterData, this);
                var parentPanel = this.mainPanel.getParametersItem();
                var panelItem = new _MainPanelItem2.default('parameter', '', parentPanel, parameter, { hasChildren: false, showAdd: false, showDelete: false, draggable: false }, this);
                panelItem.openParentItems();
                parameter.setPanelItem(panelItem);
                parentPanel.appendChild(panelItem);
                parameter.setup();
                this.addParameter(parameter);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            this.element.empty();
            if (this.getProperty('menuSidebar')) {
                this.element.addClass('rbroMenuPanelSidebar');
            }
            this.element.append('<div class="rbroLogo"></div>');
            this.element.append('<div class="rbroMenuPanel" id="rbro_menu_panel"></div>');
            this.element.append('<div class="rbroContainer">\n                <div class="rbroMainPanel" id="rbro_main_panel"><ul id="rbro_main_panel_list"></ul></div>\n                <div class="rbroDetailPanel" id="rbro_detail_panel"></div>\n                <div class="rbroDocumentPanel" id="rbro_document_panel"></div>\n            </div>');
            this.mainPanel.render();
            this.menuPanel.render();
            for (var panelName in this.detailPanels) {
                this.detailPanels[panelName].render();
            }
            this.detailPanels[this.activeDetailPanel].show(this.detailData);
            this.document.render();
            this.popupWindow.render();
            this.updateMenuButtons();

            $(document).mouseup(function (event) {
                if (_this2.document.isDragging()) {
                    _this2.document.stopDrag();
                }
                _this2.popupWindow.hide();
            });
            this.element.on('dragstart', function (event) {
                // disable dragging per default, otherwise e.g. a text selection can be dragged in Chrome
                event.preventDefault();
            });
        }
    }, {
        key: 'setup',
        value: function setup() {
            this.addDefaultParameters();
            this.headerBand.setup();
            this.contentBand.setup();
            this.footerBand.setup();
            this.documentProperties.setup();
        }
    }, {
        key: 'initObjectMap',
        value: function initObjectMap() {
            this.addDataObject(this.headerBand);
            this.addDataObject(this.contentBand);
            this.addDataObject(this.footerBand);
            this.addDataObject(this.parameterContainer);
            this.addDataObject(this.styleContainer);
            this.addDataObject(this.documentProperties);
        }

        /**
         * Returns the label for given key.
         * @param {String} key
         * @returns {String} Label for given key, if it does not exist then the key is returned.
         */

    }, {
        key: 'getLabel',
        value: function getLabel(key) {
            if (key in this.locale) {
                return this.locale[key];
            }
            return key;
        }
    }, {
        key: 'getProperty',
        value: function getProperty(key) {
            return this.properties[key];
        }

        /**
         * Returns a new unique id which can be used for any data object.
         * @returns {Number}
         */

    }, {
        key: 'getUniqueId',
        value: function getUniqueId() {
            return this.nextId++;
        }
    }, {
        key: 'getMainPanel',
        value: function getMainPanel() {
            return this.mainPanel;
        }
    }, {
        key: 'getDocument',
        value: function getDocument() {
            return this.document;
        }
    }, {
        key: 'getPopupWindow',
        value: function getPopupWindow() {
            return this.popupWindow;
        }
    }, {
        key: 'getFonts',
        value: function getFonts() {
            return this.properties.fonts;
        }

        /**
         * Returns a list of all number and date patterns.
         * @returns {Object[]} Each item contains name (String), optional description (String) and optional separator (Boolean).
         */

    }, {
        key: 'getPatterns',
        value: function getPatterns() {
            var patterns = [];
            if (this.properties.patternNumbers.length > 0) {
                patterns.push({ separator: true, name: this.getLabel('patternSeparatorNumbers') });
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = (0, _getIterator3.default)(this.properties.patternNumbers), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var pattern = _step7.value;

                        patterns.push(pattern);
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }
            }
            if (this.properties.patternDates.length > 0) {
                patterns.push({ separator: true, name: this.getLabel('patternSeparatorDates') });
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                    for (var _iterator8 = (0, _getIterator3.default)(this.properties.patternDates), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                        var _pattern = _step8.value;

                        patterns.push(_pattern);
                    }
                } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
                            _iterator8.return();
                        }
                    } finally {
                        if (_didIteratorError8) {
                            throw _iteratorError8;
                        }
                    }
                }
            }
            return patterns;
        }

        /**
         * Returns a list of parameter items.
         * Used for parameter popup window.
         * @param {DocElement} docElement - adds all parameters available for this element, e.g. array field parameters
         * of a table data source.
         * @param {String[]} allowedTypes - specify allowed parameter types which will be added to the
         * parameters list. If not set all parameter types are allowed.
         * @returns {Object[]} Each item contains name (String), optional description (String) and
         * optional separator (Boolean).
         */

    }, {
        key: 'getParameterItems',
        value: function getParameterItems(docElement, allowedTypes) {
            var parameters = [];
            var parameterItems = this.getMainPanel().getParametersItem().getChildren();
            parameters.push({ separator: true, name: this.getLabel('parameters') });
            var panelItem = docElement.getPanelItem();
            while (panelItem !== null) {
                if (panelItem !== null && panelItem.getData() instanceof _TableBandElement2.default && panelItem.getData().getValue('tableBand') === 'content') {
                    if (panelItem.getParent() !== null && panelItem.getParent().getData() instanceof _TableElement2.default) {
                        var _iteratorNormalCompletion9 = true;
                        var _didIteratorError9 = false;
                        var _iteratorError9 = undefined;

                        try {
                            for (var _iterator9 = (0, _getIterator3.default)(panelItem.getParent().getData().getDataParameters()), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                var dataParameter = _step9.value;

                                dataParameter.appendParameterItems(parameters, allowedTypes);
                            }
                        } catch (err) {
                            _didIteratorError9 = true;
                            _iteratorError9 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion9 && _iterator9.return) {
                                    _iterator9.return();
                                }
                            } finally {
                                if (_didIteratorError9) {
                                    throw _iteratorError9;
                                }
                            }
                        }
                    }
                } else if (panelItem !== null && panelItem.getData() instanceof _BandElement2.default) {
                    var _iteratorNormalCompletion10 = true;
                    var _didIteratorError10 = false;
                    var _iteratorError10 = undefined;

                    try {
                        for (var _iterator10 = (0, _getIterator3.default)(panelItem.getData().getDataParameters()), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                            var _dataParameter = _step10.value;

                            _dataParameter.appendParameterItems(parameters, allowedTypes);
                        }
                    } catch (err) {
                        _didIteratorError10 = true;
                        _iteratorError10 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion10 && _iterator10.return) {
                                _iterator10.return();
                            }
                        } finally {
                            if (_didIteratorError10) {
                                throw _iteratorError10;
                            }
                        }
                    }
                }
                panelItem = panelItem.getParent();
            }
            var mapParameters = []; // add all parameters of collections at end of list with a header containing the collection name
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
                for (var _iterator11 = (0, _getIterator3.default)(parameterItems), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                    var parameterItem = _step11.value;

                    var parameter = parameterItem.getData();
                    if (parameter.getValue('type') === _Parameter2.default.type.map) {
                        parameter.appendParameterItems(mapParameters, allowedTypes);
                    } else {
                        parameter.appendParameterItems(parameters, allowedTypes);
                    }
                }
            } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
                        _iterator11.return();
                    }
                } finally {
                    if (_didIteratorError11) {
                        throw _iteratorError11;
                    }
                }
            }

            return parameters.concat(mapParameters);
        }

        /**
         * Returns a list of all array field parameter items.
         * Used for parameter popup window.
         * @param {String} fieldType - allowed parameter type which will be added to the
         * parameter list. If empty all parameter types are allowed.
         * @returns {Object[]} Each item contains name (String), optional description (String) and
         * optional separator (Boolean).
         */

    }, {
        key: 'getArrayFieldParameterItems',
        value: function getArrayFieldParameterItems(fieldType) {
            var parameters = [];
            var parameterItems = this.getMainPanel().getParametersItem().getChildren();
            parameters.push({ separator: true, name: this.getLabel('parameters') });
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
                for (var _iterator12 = (0, _getIterator3.default)(parameterItems), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                    var parameterItem = _step12.value;

                    var parameter = parameterItem.getData();
                    if (parameter.getValue('type') === _Parameter2.default.type.array) {
                        parameter.appendFieldParameterItems(parameters, fieldType);
                    }
                }
            } catch (err) {
                _didIteratorError12 = true;
                _iteratorError12 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion12 && _iterator12.return) {
                        _iterator12.return();
                    }
                } finally {
                    if (_didIteratorError12) {
                        throw _iteratorError12;
                    }
                }
            }

            return parameters;
        }
    }, {
        key: 'getParameterByName',
        value: function getParameterByName(parameterName) {
            var parameters = this.getParameters();
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
                for (var _iterator13 = (0, _getIterator3.default)(parameters), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                    var parameter = _step13.value;

                    if (parameter.getValue('name') === parameterName) {
                        return parameter;
                    }
                }
            } catch (err) {
                _didIteratorError13 = true;
                _iteratorError13 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion13 && _iterator13.return) {
                        _iterator13.return();
                    }
                } finally {
                    if (_didIteratorError13) {
                        throw _iteratorError13;
                    }
                }
            }

            return null;
        }

        /**
         * Append document elements of given container.
         * @param {Container} container
         * @param {Boolean} asObjects - if true the document element instances are returned, otherwise
         * each instance is transformed to a js map.
         * @param {DocElement[]} docElements - list where document elements will be appended to.
         */

    }, {
        key: 'appendContainerDocElements',
        value: function appendContainerDocElements(container, asObjects, docElements) {
            var children = container.getPanelItem().getChildren();
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
                for (var _iterator14 = (0, _getIterator3.default)(children), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                    var child = _step14.value;

                    if (child.getData() instanceof _DocElement2.default) {
                        var docElement = child.getData();
                        if (asObjects) {
                            docElements.push(docElement);
                            // we are also adding all internal children (document elements which belong
                            // to other document elements and cannot be created independently),
                            // e.g. a table band or a table cell (table text) of a table element.
                            docElement.addChildren(docElements);
                        } else {
                            // js map also includes data of internal children
                            docElements.push(docElement.toJS());
                        }
                        var linkedContainer = docElement.getLinkedContainer();
                        // add children of doc elements which represent containers, e.g. frames
                        if (linkedContainer !== null) {
                            this.appendContainerDocElements(linkedContainer, asObjects, docElements);
                        }
                    }
                }
            } catch (err) {
                _didIteratorError14 = true;
                _iteratorError14 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion14 && _iterator14.return) {
                        _iterator14.return();
                    }
                } finally {
                    if (_didIteratorError14) {
                        throw _iteratorError14;
                    }
                }
            }
        }
    }, {
        key: 'getDocElements',


        /**
         * Get document elements of all bands.
         * @param {Boolean} asObjects - if true the document element instances are returned, otherwise
         * each instance is transformed to a js map.
         * @returns {DocElement[]} List of document elements.
         */
        value: function getDocElements(asObjects) {
            var docElements = [];
            this.appendContainerDocElements(this.headerBand, asObjects, docElements);
            this.appendContainerDocElements(this.contentBand, asObjects, docElements);
            this.appendContainerDocElements(this.footerBand, asObjects, docElements);
            return docElements;
        }
    }, {
        key: 'setDetailPanel',
        value: function setDetailPanel(panelName, data) {
            this.detailPanels[this.activeDetailPanel].hide();
            this.activeDetailPanel = panelName;
            this.detailData = data;
            this.detailPanels[panelName].show(data);
        }
    }, {
        key: 'updateDetailPanel',
        value: function updateDetailPanel() {
            this.detailPanels[this.activeDetailPanel].updateData(this.detailData);
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         * @param {[String]} field - affected field in case of change operation.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation, field) {
            if (obj instanceof _Parameter2.default) {
                if (obj.getValue('type') === _Parameter2.default.type.array || obj.getValue('type') === _Parameter2.default.type.map) {
                    $('#rbro_menu_item_add' + obj.getId()).show();
                    $('#rbro_menu_item_children' + obj.getId()).show();
                    $('#rbro_menu_item_children_toggle' + obj.getId()).show();
                } else {
                    $('#rbro_menu_item_add' + obj.getId()).hide();
                    $('#rbro_menu_item_children' + obj.getId()).hide();
                    $('#rbro_menu_item_children_toggle' + obj.getId()).hide();
                }
            } else if (obj instanceof _Style2.default) {
                var _iteratorNormalCompletion15 = true;
                var _didIteratorError15 = false;
                var _iteratorError15 = undefined;

                try {
                    for (var _iterator15 = (0, _getIterator3.default)(this.docElements), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                        var docElement = _step15.value;

                        docElement.updateChangedStyle(obj.getId());
                    }
                } catch (err) {
                    _didIteratorError15 = true;
                    _iteratorError15 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion15 && _iterator15.return) {
                            _iterator15.return();
                        }
                    } finally {
                        if (_didIteratorError15) {
                            throw _iteratorError15;
                        }
                    }
                }
            }
            for (var panelName in this.detailPanels) {
                this.detailPanels[panelName].notifyEvent(obj, operation);
            }
        }
    }, {
        key: 'addParameter',
        value: function addParameter(parameter) {
            this.addDataObject(parameter);
        }
    }, {
        key: 'deleteParameter',
        value: function deleteParameter(parameter) {
            this.deleteDataObject(parameter);
        }
    }, {
        key: 'addStyle',
        value: function addStyle(style) {
            this.addDataObject(style);
            this.notifyEvent(style, _Command2.default.operation.add);
        }
    }, {
        key: 'deleteStyle',
        value: function deleteStyle(style) {
            this.deleteDataObject(style);
            this.notifyEvent(style, _Command2.default.operation.remove);
        }
    }, {
        key: 'getStyles',
        value: function getStyles() {
            var styles = [];
            var _iteratorNormalCompletion16 = true;
            var _didIteratorError16 = false;
            var _iteratorError16 = undefined;

            try {
                for (var _iterator16 = (0, _getIterator3.default)(this.getMainPanel().getStylesItem().getChildren()), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                    var styleItem = _step16.value;

                    styles.push(styleItem.getData());
                }
            } catch (err) {
                _didIteratorError16 = true;
                _iteratorError16 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion16 && _iterator16.return) {
                        _iterator16.return();
                    }
                } finally {
                    if (_didIteratorError16) {
                        throw _iteratorError16;
                    }
                }
            }

            return styles;
        }
    }, {
        key: 'getParameters',
        value: function getParameters() {
            var parameters = [];
            var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
                for (var _iterator17 = (0, _getIterator3.default)(this.getMainPanel().getParametersItem().getChildren()), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                    var parameterItem = _step17.value;

                    parameters.push(parameterItem.getData());
                }
            } catch (err) {
                _didIteratorError17 = true;
                _iteratorError17 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion17 && _iterator17.return) {
                        _iterator17.return();
                    }
                } finally {
                    if (_didIteratorError17) {
                        throw _iteratorError17;
                    }
                }
            }

            return parameters;
        }
    }, {
        key: 'addDocElement',
        value: function addDocElement(element) {
            this.docElements.push(element);
            this.addDataObject(element);
        }
    }, {
        key: 'deleteDocElement',
        value: function deleteDocElement(element) {
            for (var i = 0; i < this.docElements.length; i++) {
                if (this.docElements[i].getId() === element.getId()) {
                    if (this.detailData === this.docElements[i]) {
                        this.setDetailPanel('none', null);
                    }
                    this.docElements.splice(i, 1);
                    this.deleteDataObject(element);
                    break;
                }
            }
        }
    }, {
        key: 'getDetailData',
        value: function getDetailData() {
            return this.detailData;
        }
    }, {
        key: 'getDocumentProperties',
        value: function getDocumentProperties() {
            return this.documentProperties;
        }
    }, {
        key: 'executeCommand',
        value: function executeCommand(cmd) {
            cmd.do();
            if (this.lastCommandIndex < this.commandStack.length - 1) {
                this.commandStack = this.commandStack.slice(0, this.lastCommandIndex + 1);
            }
            if (!this.selectionSinceLastCommand && cmd instanceof _SetValueCmd2.default && this.commandStack.length > 0) {
                // if previous and current command are both SetValueCmds and target the same text field,
                // we can discard the previous command and only keep the latest update
                var prevCmd = this.commandStack[this.commandStack.length - 1];
                if (prevCmd instanceof _SetValueCmd2.default && prevCmd.allowReplace(cmd)) {
                    cmd.oldValue = prevCmd.oldValue;
                    this.commandStack = this.commandStack.slice(0, this.commandStack.length - 1);
                    this.lastCommandIndex--;
                }
            }
            this.commandStack.push(cmd);
            this.lastCommandIndex++;
            this.modified = true;
            this.selectionSinceLastCommand = false;
            this.updateMenuButtons();
        }
    }, {
        key: 'undoCommand',
        value: function undoCommand() {
            if (this.lastCommandIndex >= 0) {
                this.commandStack[this.lastCommandIndex].undo();
                this.lastCommandIndex--;
                this.modified = true;
                this.updateMenuButtons();
            }
        }
    }, {
        key: 'redoCommand',
        value: function redoCommand() {
            if (this.lastCommandIndex < this.commandStack.length - 1) {
                this.lastCommandIndex++;
                this.commandStack[this.lastCommandIndex].do();
                this.modified = true;
                this.updateMenuButtons();
            }
        }
    }, {
        key: 'updateMenuButtons',
        value: function updateMenuButtons() {
            $('#rbro_menu_save').prop('disabled', this.commandStack.length === 0 || !this.modified);
            $('#rbro_menu_undo').prop('disabled', this.lastCommandIndex < 0);
            $('#rbro_menu_redo').prop('disabled', this.lastCommandIndex >= this.commandStack.length - 1);
        }
    }, {
        key: 'updateMenuAlignButtons',
        value: function updateMenuAlignButtons() {
            var elementCount = 0;
            var previousContainerId = '';
            var elementDifferentContainers = false;
            var _iteratorNormalCompletion18 = true;
            var _didIteratorError18 = false;
            var _iteratorError18 = undefined;

            try {
                for (var _iterator18 = (0, _getIterator3.default)(this.selections), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                    var selectionId = _step18.value;

                    var obj = this.getDataObject(selectionId);
                    if (obj instanceof _DocElement2.default && obj.getXTagId() !== '') {
                        elementCount++;
                        if (elementCount === 1) {
                            previousContainerId = obj.getValue('containerId');
                        } else {
                            if (previousContainerId !== obj.getValue('containerId')) {
                                elementDifferentContainers = true;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError18 = true;
                _iteratorError18 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion18 && _iterator18.return) {
                        _iterator18.return();
                    }
                } finally {
                    if (_didIteratorError18) {
                        throw _iteratorError18;
                    }
                }
            }

            if (elementCount > 1) {
                $('#rbro_menu_align').show();
                if (elementDifferentContainers) {
                    $('#rbro_menu_valign').hide();
                } else {
                    $('#rbro_menu_valign').show();
                }
            } else {
                $('#rbro_menu_align').hide();
                $('#rbro_menu_valign').hide();
            }
        }
    }, {
        key: 'debugCommandStack',
        value: function debugCommandStack() {
            console.clear();
            for (var i = 0; i < this.commandStack.length; i++) {
                if (i > this.lastCommandIndex) {
                    console.log('( ' + i + ' ' + this.commandStack[i].getName() + ' )');
                } else {
                    console.log(i + ' ' + this.commandStack[i].getName());
                }
            }
        }
    }, {
        key: 'addDataObject',
        value: function addDataObject(obj) {
            this.objectMap[obj.getId()] = obj;
        }
    }, {
        key: 'deleteDataObject',
        value: function deleteDataObject(obj) {
            if (this.isSelectedObject(obj.getId())) {
                this.deselectObject(obj.getId());
            }
            if (obj.getId() in this.objectMap) {
                obj.remove();
                delete this.objectMap[obj.getId()];
            }
        }
    }, {
        key: 'getDataObject',
        value: function getDataObject(id) {
            if (id !== null && id in this.objectMap) {
                return this.objectMap[id];
            }
            return null;
        }
    }, {
        key: 'isSelectedObject',
        value: function isSelectedObject(id) {
            return this.selections.indexOf(id) !== -1;
        }
    }, {
        key: 'isDocElementSelected',
        value: function isDocElementSelected() {
            var _iteratorNormalCompletion19 = true;
            var _didIteratorError19 = false;
            var _iteratorError19 = undefined;

            try {
                for (var _iterator19 = (0, _getIterator3.default)(this.selections), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                    var selectionId = _step19.value;

                    var obj = this.getDataObject(selectionId);
                    if (obj instanceof _DocElement2.default) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError19 = true;
                _iteratorError19 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion19 && _iterator19.return) {
                        _iterator19.return();
                    }
                } finally {
                    if (_didIteratorError19) {
                        throw _iteratorError19;
                    }
                }
            }

            return false;
        }
    }, {
        key: 'isTableElementSelected',
        value: function isTableElementSelected(tableId) {
            var _iteratorNormalCompletion20 = true;
            var _didIteratorError20 = false;
            var _iteratorError20 = undefined;

            try {
                for (var _iterator20 = (0, _getIterator3.default)(this.selections), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                    var selectionId = _step20.value;

                    var obj = this.getDataObject(selectionId);
                    if (obj instanceof _TableTextElement2.default) {
                        if (obj.getValue('tableId') === tableId) {
                            return true;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError20 = true;
                _iteratorError20 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion20 && _iterator20.return) {
                        _iterator20.return();
                    }
                } finally {
                    if (_didIteratorError20) {
                        throw _iteratorError20;
                    }
                }
            }

            return false;
        }
    }, {
        key: 'selectObject',
        value: function selectObject(id, clearSelection) {
            if (clearSelection) {
                this.deselectAll();
            }
            var obj = this.getDataObject(id);
            if (obj !== null) {
                this.selections.push(id);
                obj.select();
                if (obj.getPanelItem() !== null) {
                    obj.getPanelItem().openParentItems();
                    obj.getPanelItem().setActive();
                }
            }
            this.selectionSinceLastCommand = true;
            this.updateMenuAlignButtons();
        }
    }, {
        key: 'deselectObject',
        value: function deselectObject(id) {
            this.deselectObjectInternal(id, true);
            this.updateMenuAlignButtons();
        }
    }, {
        key: 'deselectObjectInternal',
        value: function deselectObjectInternal(id, updateSelections) {
            var obj = this.getDataObject(id);
            if (obj !== null) {
                obj.deselect();
                if (this.detailData === obj) {
                    this.setDetailPanel('none', null);
                    $('.rbroMenuItem').removeClass('rbroMenuItemActive');
                }
            }
            if (updateSelections) {
                var selectionIndex = this.selections.indexOf(id);
                if (selectionIndex !== -1) {
                    this.selections.splice(selectionIndex, 1);
                }
            }
        }
    }, {
        key: 'deselectAll',
        value: function deselectAll() {
            var _iteratorNormalCompletion21 = true;
            var _didIteratorError21 = false;
            var _iteratorError21 = undefined;

            try {
                for (var _iterator21 = (0, _getIterator3.default)(this.selections), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                    var selectionId = _step21.value;

                    this.deselectObjectInternal(selectionId, false);
                }
            } catch (err) {
                _didIteratorError21 = true;
                _iteratorError21 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion21 && _iterator21.return) {
                        _iterator21.return();
                    }
                } finally {
                    if (_didIteratorError21) {
                        throw _iteratorError21;
                    }
                }
            }

            this.selections = [];
            this.updateMenuAlignButtons();
        }
    }, {
        key: 'getContainer',
        value: function getContainer(posX, posY, elementType) {
            var bestMatch = null;
            var bestMatchLevel = -1;
            for (var i = 0; i < this.containers.length; i++) {
                var container = this.containers[i];
                if (container.getLevel() > bestMatchLevel && container.isElementAllowed(elementType) && container.isInside(posX, posY)) {
                    bestMatch = container;
                    bestMatchLevel = container.getLevel();
                }
            }
            return bestMatch;
        }
    }, {
        key: 'addContainer',
        value: function addContainer(container) {
            this.containers.push(container);
            this.addDataObject(container);
        }
    }, {
        key: 'deleteContainer',
        value: function deleteContainer(container) {
            for (var i = 0; i < this.containers.length; i++) {
                if (this.containers[i].getId() === container.getId()) {
                    this.containers.splice(i, 1);
                    break;
                }
            }
            this.deleteDataObject(container);
        }

        /**
         * Store our own drag data because dataTransfer data of event is not available in
         * dragenter/dragover/dragleave events (in some browsers).
         */

    }, {
        key: 'startBrowserDrag',
        value: function startBrowserDrag(browserDragType, browserDragCategory, browserDragElementType, browserDragId) {
            this.browserDragType = browserDragType;
            this.browserDragCategory = browserDragCategory;
            this.browserDragId = browserDragId;
            this.getDocument().startBrowserDrag(browserDragElementType);
        }
    }, {
        key: 'isBrowserDragActive',
        value: function isBrowserDragActive(browserDragType) {
            return this.browserDragType === browserDragType;
        }
    }, {
        key: 'getBrowserDragCategory',
        value: function getBrowserDragCategory() {
            return this.browserDragCategory;
        }
    }, {
        key: 'getBrowserDragId',
        value: function getBrowserDragId() {
            return this.browserDragId;
        }
    }, {
        key: 'updateSelectionDrag',
        value: function updateSelectionDrag(diffX, diffY, dragType, dragContainer, snapToGrid, store) {
            var cmdGroup = void 0;
            if (store) {
                cmdGroup = new _CommandGroupCmd2.default(dragType === _DocElement2.default.dragType.element ? 'Update position' : 'Resize', this);
            }
            var gridSize = 0;
            if (snapToGrid && this.document.isGridVisible()) {
                gridSize = this.document.getGridSize();
            }
            var _iteratorNormalCompletion22 = true;
            var _didIteratorError22 = false;
            var _iteratorError22 = undefined;

            try {
                for (var _iterator22 = (0, _getIterator3.default)(this.selections), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                    var selectionId = _step22.value;

                    var obj = this.getDataObject(selectionId);
                    if (obj !== null) {
                        if (dragType !== _DocElement2.default.dragType.element || obj.isDraggingAllowed()) {
                            obj.updateDrag(diffX, diffY, dragType, dragContainer, gridSize, store ? cmdGroup : null);
                        }
                    }
                }
            } catch (err) {
                _didIteratorError22 = true;
                _iteratorError22 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion22 && _iterator22.return) {
                        _iterator22.return();
                    }
                } finally {
                    if (_didIteratorError22) {
                        throw _iteratorError22;
                    }
                }
            }

            if (store && !cmdGroup.isEmpty()) {
                this.executeCommand(cmdGroup);
            }
        }

        /**
         * Aligns all currently selected doc elements to each other.
         * @param {Style.alignment} alignment
         */

    }, {
        key: 'alignSelections',
        value: function alignSelections(alignment) {
            var alignVal = NaN;
            var x = void 0,
                y = void 0,
                width = void 0,
                height = void 0;
            var minX = Number.MAX_VALUE,
                maxX = Number.MIN_VALUE,
                minY = Number.MAX_VALUE,
                maxY = Number.MIN_VALUE;
            var elementCount = 0;
            var _iteratorNormalCompletion23 = true;
            var _didIteratorError23 = false;
            var _iteratorError23 = undefined;

            try {
                for (var _iterator23 = (0, _getIterator3.default)(this.selections), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                    var _selectionId3 = _step23.value;

                    var _obj3 = this.getDataObject(_selectionId3);
                    if (_obj3 instanceof _DocElement2.default && _obj3.getXTagId() !== '') {
                        elementCount++;
                        x = _obj3.getValue('xVal');
                        y = _obj3.getValue('yVal');
                        width = _obj3.getValue('widthVal');
                        height = _obj3.getValue('heightVal');
                        if (x < minX) {
                            minX = x;
                        }
                        if (x + width > maxX) {
                            maxX = x + width;
                        }
                        if (y < minY) {
                            minY = y;
                        }
                        if (y + height > maxY) {
                            maxY = y + height;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError23 = true;
                _iteratorError23 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion23 && _iterator23.return) {
                        _iterator23.return();
                    }
                } finally {
                    if (_didIteratorError23) {
                        throw _iteratorError23;
                    }
                }
            }

            var center = minX + (maxX - minX) / 2;
            var vcenter = minY + (maxY - minY) / 2;
            if (elementCount > 1) {
                var cmdGroup = new _CommandGroupCmd2.default('Align elements', this);
                var _iteratorNormalCompletion24 = true;
                var _didIteratorError24 = false;
                var _iteratorError24 = undefined;

                try {
                    for (var _iterator24 = (0, _getIterator3.default)(this.selections), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                        var selectionId = _step24.value;

                        var obj = this.getDataObject(selectionId);
                        if (obj instanceof _DocElement2.default && !(obj instanceof _PageBreakElement2.default)) {
                            switch (alignment) {
                                case _Style2.default.alignment.left:
                                    {
                                        var cmd = new _SetValueCmd2.default(obj.getId(), obj.getXTagId(), 'x', '' + minX, _SetValueCmd2.default.type.text, this);
                                        cmdGroup.addCommand(cmd);
                                    }
                                    break;
                                case _Style2.default.alignment.center:
                                    {
                                        var _cmd2 = new _SetValueCmd2.default(obj.getId(), obj.getXTagId(), 'x', '' + (center - obj.getValue('widthVal') / 2), _SetValueCmd2.default.type.text, this);
                                        cmdGroup.addCommand(_cmd2);
                                    }
                                    break;
                                case _Style2.default.alignment.right:
                                    {
                                        var _cmd3 = new _SetValueCmd2.default(obj.getId(), obj.getXTagId(), 'x', '' + (maxX - obj.getValue('widthVal')), _SetValueCmd2.default.type.text, this);
                                        cmdGroup.addCommand(_cmd3);
                                    }
                                    break;
                                case _Style2.default.alignment.top:
                                    {
                                        var _cmd4 = new _SetValueCmd2.default(obj.getId(), obj.getYTagId(), 'y', '' + minY, _SetValueCmd2.default.type.text, this);
                                        cmdGroup.addCommand(_cmd4);
                                    }
                                    break;
                                case _Style2.default.alignment.middle:
                                    {
                                        var _cmd5 = new _SetValueCmd2.default(obj.getId(), obj.getYTagId(), 'y', '' + (vcenter - obj.getValue('heightVal') / 2), _SetValueCmd2.default.type.text, this);
                                        cmdGroup.addCommand(_cmd5);
                                    }
                                    break;
                                case _Style2.default.alignment.bottom:
                                    {
                                        var _cmd6 = new _SetValueCmd2.default(obj.getId(), obj.getYTagId(), 'y', '' + (maxY - obj.getValue('heightVal')), _SetValueCmd2.default.type.text, this);
                                        cmdGroup.addCommand(_cmd6);
                                    }
                                    break;
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError24 = true;
                    _iteratorError24 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion24 && _iterator24.return) {
                            _iterator24.return();
                        }
                    } finally {
                        if (_didIteratorError24) {
                            throw _iteratorError24;
                        }
                    }
                }

                this.executeCommand(cmdGroup);
            }
        }

        /**
         * Converts given value to a string which can be used in css style attribute
         * where a position or size must be specified.
         * @param {String|Number} val - a number value, can also be given as a string.
         * @returns {String}
         */

    }, {
        key: 'toPixel',
        value: function toPixel(val) {
            if (val === '') {
                return '0px';
            }
            if ($.type(val) === 'string') {
                val = parseFloat(val.replace(',', '.'));
                if (val === NaN) {
                    return '0px';
                }
            }
            return val + 'px';
        }
    }, {
        key: 'createDocElement',
        value: function createDocElement(docElementData, openParentItems) {
            var properties = { draggable: true };
            var element = null;
            if (docElementData.elementType === _DocElement2.default.type.text) {
                element = new _TextElement2.default(docElementData.id, docElementData, this);
            } else if (docElementData.elementType === _DocElement2.default.type.line) {
                element = new _LineElement2.default(docElementData.id, docElementData, this);
            } else if (docElementData.elementType === _DocElement2.default.type.image) {
                element = new _ImageElement2.default(docElementData.id, docElementData, this);
            } else if (docElementData.elementType === _DocElement2.default.type.barCode) {
                element = new _BarCodeElement2.default(docElementData.id, docElementData, this);
            } else if (docElementData.elementType === _DocElement2.default.type.table) {
                element = new _TableElement2.default(docElementData.id, docElementData, this);
                properties.hasChildren = true;
            } else if (docElementData.elementType === _DocElement2.default.type.frame) {
                element = new _FrameElement2.default(docElementData.id, docElementData, this);
                properties.hasChildren = true;
            } else if (docElementData.elementType === _DocElement2.default.type.band) {
                element = new _BandElement2.default(docElementData.id, docElementData, this);
                properties.hasChildren = true;
                properties.showAdd = true;
            } else if (docElementData.elementType === _DocElement2.default.type.pageBreak) {
                element = new _PageBreakElement2.default(docElementData.id, docElementData, this);
            }
            this.addDocElement(element);
            var parentPanel = element.getContainer().getPanelItem();
            var panelItem = new _MainPanelItem2.default(docElementData.elementType, '', parentPanel, element, properties, this);
            if (openParentItems) {
                panelItem.openParentItems();
            }
            element.setPanelItem(panelItem);
            parentPanel.appendChild(panelItem);
            element.setup();
            return element;
        }

        /**
         * Shows a global loading image which disables all controls.
         */

    }, {
        key: 'showLoading',
        value: function showLoading() {
            if ($('#rbro_loading_div').length == 0) {
                $('body').append('<div id="rbro_loading_div" class="rbroLoadingIndicator"></div>');
            }
        }

        /**
         * Hides global loading image.
         */

    }, {
        key: 'hideLoading',
        value: function hideLoading() {
            $('#rbro_loading_div').remove();
        }
    }, {
        key: 'getTestData',
        value: function getTestData() {
            var ret = {};
            var _iteratorNormalCompletion25 = true;
            var _didIteratorError25 = false;
            var _iteratorError25 = undefined;

            try {
                for (var _iterator25 = (0, _getIterator3.default)(this.getParameters()), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                    var parameter = _step25.value;

                    if (!parameter.getValue('showOnlyNameType')) {
                        var type = parameter.getValue('type');
                        if (type === _Parameter2.default.type.map) {
                            var testData = {};
                            var _iteratorNormalCompletion26 = true;
                            var _didIteratorError26 = false;
                            var _iteratorError26 = undefined;

                            try {
                                for (var _iterator26 = (0, _getIterator3.default)(parameter.getChildren()), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
                                    var child = _step26.value;

                                    testData[child.getName()] = child.getValue('testData');
                                }
                            } catch (err) {
                                _didIteratorError26 = true;
                                _iteratorError26 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion26 && _iterator26.return) {
                                        _iterator26.return();
                                    }
                                } finally {
                                    if (_didIteratorError26) {
                                        throw _iteratorError26;
                                    }
                                }
                            }

                            ret[parameter.getName()] = testData;
                        } else if (type === _Parameter2.default.type.array) {
                            ret[parameter.getName()] = parameter.getTestDataRows();
                        } else if (type === _Parameter2.default.type.simpleArray) {
                            var testDataRows = [];
                            // because test data rows are stored as map items we convert the list to a list of simple values
                            var _iteratorNormalCompletion27 = true;
                            var _didIteratorError27 = false;
                            var _iteratorError27 = undefined;

                            try {
                                for (var _iterator27 = (0, _getIterator3.default)(parameter.getTestDataRows()), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
                                    var testDataRow = _step27.value;

                                    if ('data' in testDataRow) {
                                        testDataRows.push(testDataRow['data']);
                                    }
                                }
                            } catch (err) {
                                _didIteratorError27 = true;
                                _iteratorError27 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion27 && _iterator27.return) {
                                        _iterator27.return();
                                    }
                                } finally {
                                    if (_didIteratorError27) {
                                        throw _iteratorError27;
                                    }
                                }
                            }

                            ret[parameter.getName()] = testDataRows;
                        } else if (type === _Parameter2.default.type.string || type === _Parameter2.default.type.number || type === _Parameter2.default.type.date) {
                            ret[parameter.getName()] = parameter.getValue('testData');
                        }
                    }
                }
            } catch (err) {
                _didIteratorError25 = true;
                _iteratorError25 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion25 && _iterator25.return) {
                        _iterator25.return();
                    }
                } finally {
                    if (_didIteratorError25) {
                        throw _iteratorError25;
                    }
                }
            }

            return ret;
        }
    }, {
        key: 'processErrors',
        value: function processErrors(errors) {
            var _iteratorNormalCompletion28 = true;
            var _didIteratorError28 = false;
            var _iteratorError28 = undefined;

            try {
                for (var _iterator28 = (0, _getIterator3.default)(errors), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
                    var error = _step28.value;

                    if (error.object_id) {
                        $('#rbro_menu_item' + error.object_id).addClass('rbroError');
                        var obj = this.getDataObject(error.object_id);
                        if (obj !== null) {
                            obj.addError(error);
                        }
                    }
                }
            } catch (err) {
                _didIteratorError28 = true;
                _iteratorError28 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion28 && _iterator28.return) {
                        _iterator28.return();
                    }
                } finally {
                    if (_didIteratorError28) {
                        throw _iteratorError28;
                    }
                }
            }

            if (errors.length > 0) {
                this.detailPanels[this.activeDetailPanel].updateErrors();
                this.selectObject(errors[0].object_id, true);
            }
        }

        /**
         * Performs ajax request to upload the report and either update displayed errors or
         * display report pdf in case report is valid.
         * @param {Object} data - report data.
         * @param {Boolean} isTestData - true if data contains test data from parameters.
         */

    },
        {
        key: 'previewInternal',
        value: function previewInternal(data, isTestData) {
            var self = this;
            $('.rbroMenuItem').removeClass('rbroError');
            for (var objId in this.objectMap) {
                this.objectMap[objId].clearErrors();
            }
            this.detailPanels[this.activeDetailPanel].updateErrors();
            this.showLoading();
            $.ajax(this.properties.reportServerUrl, {
                data: (0, _stringify2.default)({
                    report: this.getReport(),
                    outputFormat: _DocumentProperties2.default.outputFormat.pdf,
                    data: data,
                    isTestData: isTestData
                }),
                type: "PUT", contentType: "application/json",
                timeout: this.properties.reportServerTimeout,
                crossDomain: this.properties.reportServerUrlCrossDomain,
                success: function success(data) {
                    self.hideLoading();
                    var pdfPrefix = 'data:application/pdf';
                    if (data.substr(0, 4) === 'key:') {
                        self.reportKey = data.substr(4);
                        self.getDocument().openPdfPreviewTab(self.properties.reportServerUrl + '?key=' + self.reportKey + '&outputFormat=pdf');
                        //window.location.href=self.properties.reportServerUrl + '?key=' + self.reportKey + '&outputFormat=pdf';
                        //window.open(self.properties.reportServerUrl + '?key=' + self.reportKey + '&outputFormat=pdf');
                    } else {
                        self.reportKey = null;
                        try {
                            var obj = JSON.parse(data);
                            if (obj.errors.length > 0) {
                                self.processErrors(obj.errors);
                            }
                        } catch (e) {
                            alert('preview failed');
                        }
                    }
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                    self.hideLoading();
                    if (textStatus === "timeout") {
                        alert('preview failed (timeout)');
                    } else {
                        alert('preview failed');
                    }
                }
            });
        }

        ///////////////////////////////////////////////////////////////////////////
        // API functions
        ///////////////////////////////////////////////////////////////////////////

        /**
         * Returns report object containing everything needed for the report.
         * @returns {Object}
         */

    }, {
        key: 'getReport',
        value: function getReport() {
            var ret = { docElements: [], parameters: [], styles: [], version: 2 };
            var i = void 0;
            ret.docElements = this.getDocElements(false);
            // let existingIds = {};
            // for (i=0; i < this.docElements.length; i++) {
            //     let docElement = this.docElements[i];
            //     if (!(docElement.getId() in existingIds)) {
            //         existingIds[docElement.getId()] = true;
            //         ret.docElements.push(docElement.toJS());
            //     }
            // }
            var _iteratorNormalCompletion29 = true;
            var _didIteratorError29 = false;
            var _iteratorError29 = undefined;

            try {
                for (var _iterator29 = (0, _getIterator3.default)(this.getParameters()), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
                    var parameter = _step29.value;

                    ret.parameters.push(parameter.toJS());
                }
            } catch (err) {
                _didIteratorError29 = true;
                _iteratorError29 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion29 && _iterator29.return) {
                        _iterator29.return();
                    }
                } finally {
                    if (_didIteratorError29) {
                        throw _iteratorError29;
                    }
                }
            }

            var _iteratorNormalCompletion30 = true;
            var _didIteratorError30 = false;
            var _iteratorError30 = undefined;

            try {
                for (var _iterator30 = (0, _getIterator3.default)(this.getStyles()), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
                    var style = _step30.value;

                    ret.styles.push(style.toJS());
                }
            } catch (err) {
                _didIteratorError30 = true;
                _iteratorError30 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion30 && _iterator30.return) {
                        _iterator30.return();
                    }
                } finally {
                    if (_didIteratorError30) {
                        throw _iteratorError30;
                    }
                }
            }

            ret.documentProperties = this.documentProperties.toJS();

            return ret;
        }

        /**
         * Either calls saveCallback (if available) or stores report in local storage (if key is available).
         */

    }, {
        key: 'save',
        value: function save() {
            if (this.properties.saveCallback) {
                this.properties.saveCallback();
                this.modified = false;
            } else if (this.properties.localStorageReportKey) {
                if ('localStorage' in window && window['localStorage'] !== null) {
                    try {
                        var report = this.getReport();
                        // console.log(JSON.stringify(report));
                        window.localStorage.setItem(this.properties.localStorageReportKey, (0, _stringify2.default)(report));
                        this.modified = false;
                    } catch (e) {}
                }
            }
            this.updateMenuButtons();
        }

        /**
         * Loads report object into ReportBro Designer.
         * @param {Object} report - the report object.
         */

    }, {
        key: 'load',
        value: function load(report) {
            var _iteratorNormalCompletion31 = true;
            var _didIteratorError31 = false;
            var _iteratorError31 = undefined;

            try {
                for (var _iterator31 = (0, _getIterator3.default)(this.getParameters()), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
                    var parameter = _step31.value;

                    this.deleteParameter(parameter);
                }
            } catch (err) {
                _didIteratorError31 = true;
                _iteratorError31 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion31 && _iterator31.return) {
                        _iterator31.return();
                    }
                } finally {
                    if (_didIteratorError31) {
                        throw _iteratorError31;
                    }
                }
            }

            var _iteratorNormalCompletion32 = true;
            var _didIteratorError32 = false;
            var _iteratorError32 = undefined;

            try {
                for (var _iterator32 = (0, _getIterator3.default)(this.getStyles()), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
                    var style = _step32.value;

                    this.deleteStyle(style);
                }
            } catch (err) {
                _didIteratorError32 = true;
                _iteratorError32 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion32 && _iterator32.return) {
                        _iterator32.return();
                    }
                } finally {
                    if (_didIteratorError32) {
                        throw _iteratorError32;
                    }
                }
            }

            this.nextId = 1;
            this.setDetailPanel('none', null);
            this.docElements = [];
            this.objectMap = {};
            this.initObjectMap();
            this.selections = [];
            this.getMainPanel().clearAll();
            this.getMainPanel().getHeaderItem().close();
            this.getMainPanel().getDocumentItem().close();
            this.getMainPanel().getFooterItem().close();
            this.getMainPanel().getParametersItem().close();
            this.getMainPanel().getStylesItem().close();

            if (report.version < 2) {
                var _iteratorNormalCompletion33 = true;
                var _didIteratorError33 = false;
                var _iteratorError33 = undefined;

                try {
                    for (var _iterator33 = (0, _getIterator3.default)(report.docElements), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
                        var docElementData = _step33.value;

                        if (docElementData.elementType === _DocElement2.default.type.table) {
                            docElementData.contentDataRows = [docElementData.contentData];
                            docElementData.contentRows = '1';
                        }
                    }
                } catch (err) {
                    _didIteratorError33 = true;
                    _iteratorError33 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion33 && _iterator33.return) {
                            _iterator33.return();
                        }
                    } finally {
                        if (_didIteratorError33) {
                            throw _iteratorError33;
                        }
                    }
                }
            }

            this.documentProperties.setInitialData(report.documentProperties);
            this.documentProperties.setup();

            var _iteratorNormalCompletion34 = true;
            var _didIteratorError34 = false;
            var _iteratorError34 = undefined;

            try {
                for (var _iterator34 = (0, _getIterator3.default)(report.styles), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
                    var styleData = _step34.value;

                    var _style = new _Style2.default(styleData.id, styleData, this);
                    var parentPanel = this.mainPanel.getStylesItem();
                    var panelItem = new _MainPanelItem2.default('style', '', parentPanel, _style, { draggable: true }, this);
                    _style.setPanelItem(panelItem);
                    parentPanel.appendChild(panelItem);
                    this.addStyle(_style);
                    if (styleData.id >= this.nextId) {
                        this.nextId = styleData.id + 1;
                    }
                }
            } catch (err) {
                _didIteratorError34 = true;
                _iteratorError34 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion34 && _iterator34.return) {
                        _iterator34.return();
                    }
                } finally {
                    if (_didIteratorError34) {
                        throw _iteratorError34;
                    }
                }
            }

            var _iteratorNormalCompletion35 = true;
            var _didIteratorError35 = false;
            var _iteratorError35 = undefined;

            try {
                for (var _iterator35 = (0, _getIterator3.default)(report.parameters), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
                    var parameterData = _step35.value;

                    var _parameter = new _Parameter2.default(parameterData.id, parameterData, this);
                    var _parentPanel = this.mainPanel.getParametersItem();
                    var _panelItem = new _MainPanelItem2.default('parameter', '', _parentPanel, _parameter, { hasChildren: true, showAdd: _parameter.getValue('editable'),
                        showDelete: _parameter.getValue('editable'), draggable: true }, this);
                    _parameter.setPanelItem(_panelItem);
                    _parentPanel.appendChild(_panelItem);
                    _parameter.setup();
                    if (_parameter.getValue('type') !== _Parameter2.default.type.array && _parameter.getValue('type') !== _Parameter2.default.type.map) {
                        $('#rbro_menu_item_add' + _parameter.getId()).hide();
                        $('#rbro_menu_item_children' + _parameter.getId()).hide();
                        $('#rbro_menu_item_children_toggle' + _parameter.getId()).hide();
                    }
                    this.addParameter(_parameter);
                    var maxId = _parameter.getMaxId();
                    if (maxId >= this.nextId) {
                        this.nextId = maxId + 1;
                    }
                }
            } catch (err) {
                _didIteratorError35 = true;
                _iteratorError35 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion35 && _iterator35.return) {
                        _iterator35.return();
                    }
                } finally {
                    if (_didIteratorError35) {
                        throw _iteratorError35;
                    }
                }
            }

            var _iteratorNormalCompletion36 = true;
            var _didIteratorError36 = false;
            var _iteratorError36 = undefined;

            try {
                for (var _iterator36 = (0, _getIterator3.default)(report.docElements), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
                    var _docElementData = _step36.value;

                    var element = this.createDocElement(_docElementData, false);
                    var _maxId = element.getMaxId();
                    if (_maxId >= this.nextId) {
                        this.nextId = _maxId + 1;
                    }
                }
            } catch (err) {
                _didIteratorError36 = true;
                _iteratorError36 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion36 && _iterator36.return) {
                        _iterator36.return();
                    }
                } finally {
                    if (_didIteratorError36) {
                        throw _iteratorError36;
                    }
                }
            }

            this.browserDragType = '';
            this.browserDragCategory = '';
            this.browserDragId = '';

            this.commandStack = [];
            this.lastCommandIndex = -1;
            this.modified = false;
            this.updateMenuButtons();
        }

        /**
         * Loads report from local storage (if key and report is available).
         */

    }, {
        key: 'loadLocalReport',
        value: function loadLocalReport() {
            if (this.properties.localStorageReportKey) {
                if ('localStorage' in window && window['localStorage'] !== null) {
                    var report = null;
                    try {
                        report = JSON.parse(window.localStorage[this.properties.localStorageReportKey]);
                    } catch (e) {}
                    if (report !== null) {
                        this.load(report);
                    }
                }
            }
        }
    }, {
        key: 'preview',
        value: function preview() {
            this.previewInternal(this.getTestData(), true);
        }
    }, {
        key: 'previewWithData',
        value: function previewWithData(data) {
            this.previewInternal(data, false);
        }

        /**
         * Downloads spreadsheet file for a report where a preview was executed before.
         */

    }, {
        key: 'downloadSpreadsheet',
        value: function downloadSpreadsheet() {
            if (this.reportKey !== null) {
                window.open(this.properties.reportServerUrl + '?key=' + this.reportKey + '&outputFormat=xlsx', '_blank');
            }
        }
    }]);
    return ReportBro;
}();

exports.default = ReportBro;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _Parameter = __webpack_require__(16);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Command to add and delete a parameter.
 * @class
 */
var AddDeleteParameterCmd = function () {
    function AddDeleteParameterCmd(add, initialData, id, parentId, position, rb) {
        (0, _classCallCheck3.default)(this, AddDeleteParameterCmd);

        this.add = add;
        this.initialData = initialData;
        this.parentId = parentId;
        this.position = position;
        this.rb = rb;
        this.id = id;
    }

    (0, _createClass3.default)(AddDeleteParameterCmd, [{
        key: 'getName',
        value: function getName() {
            if (this.add) {
                return 'Add parameter';
            } else {
                return 'Delete parameter';
            }
        }
    }, {
        key: 'do',
        value: function _do() {
            if (this.add) {
                this.addParameter();
            } else {
                this.deleteParameter();
            }
        }
    }, {
        key: 'undo',
        value: function undo() {
            if (this.add) {
                this.deleteParameter();
            } else {
                this.addParameter();
            }
        }
    }, {
        key: 'addParameter',
        value: function addParameter() {
            var parent = this.rb.getDataObject(this.parentId);
            if (parent !== null) {
                var parameter = new _Parameter2.default(this.id, this.initialData, this.rb);
                this.rb.addParameter(parameter);
                var panelItem = new _MainPanelItem2.default('parameter', '', parent.getPanelItem(), parameter, { hasChildren: true, showAdd: true, draggable: true }, this.rb);
                panelItem.openParentItems();
                parameter.setPanelItem(panelItem);
                parent.getPanelItem().insertChild(this.position, panelItem);
                parameter.setup();
                this.rb.notifyEvent(parameter, _Command2.default.operation.add);
            }
        }
    }, {
        key: 'deleteParameter',
        value: function deleteParameter() {
            var parameter = this.rb.getDataObject(this.id);
            if (parameter !== null) {
                this.initialData = parameter.toJS();
                this.rb.notifyEvent(parameter, _Command2.default.operation.remove);
                this.rb.deleteParameter(parameter);
                parameter.getPanelItem().getParent().removeChild(parameter.getPanelItem());
            }
        }
    }]);
    return AddDeleteParameterCmd;
}();

exports.default = AddDeleteParameterCmd;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Command to add and delete a style.
 * @class
 */
var AddDeleteStyleCmd = function () {
    function AddDeleteStyleCmd(add, initialData, id, parentId, position, rb) {
        (0, _classCallCheck3.default)(this, AddDeleteStyleCmd);

        this.add = add;
        this.initialData = initialData;
        this.parentId = parentId;
        this.position = position;
        this.rb = rb;
        this.id = id;
    }

    (0, _createClass3.default)(AddDeleteStyleCmd, [{
        key: 'getName',
        value: function getName() {
            if (this.add) {
                return 'Add style';
            } else {
                return 'Delete style';
            }
        }
    }, {
        key: 'do',
        value: function _do() {
            if (this.add) {
                this.addStyle();
            } else {
                this.deleteStyle();
            }
        }
    }, {
        key: 'undo',
        value: function undo() {
            if (this.add) {
                this.deleteStyle();
            } else {
                this.addStyle();
            }
        }
    }, {
        key: 'addStyle',
        value: function addStyle() {
            var parent = this.rb.getDataObject(this.parentId);
            if (parent !== null) {
                var style = new _Style2.default(this.id, this.initialData, this.rb);
                var panelItem = new _MainPanelItem2.default('style', '', parent.getPanelItem(), style, { draggable: true }, this.rb);
                panelItem.openParentItems();
                style.setPanelItem(panelItem);
                parent.getPanelItem().insertChild(this.position, panelItem);
                this.rb.addStyle(style);
            }
        }
    }, {
        key: 'deleteStyle',
        value: function deleteStyle() {
            var style = this.rb.getDataObject(this.id);
            if (style !== null) {
                this.initialData = style.toJS();
                this.rb.deleteStyle(style);
                style.getPanelItem().getParent().removeChild(style.getPanelItem());
            }
        }
    }]);
    return AddDeleteStyleCmd;
}();

exports.default = AddDeleteStyleCmd;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Container2 = __webpack_require__(28);

var _Container3 = _interopRequireDefault(_Container2);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _Document = __webpack_require__(15);

var _Document2 = _interopRequireDefault(_Document);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A frame container which can contain various doc elements.
 * @class
 */
var Frame = function (_Container) {
    (0, _inherits3.default)(Frame, _Container);

    function Frame(id, name, rb) {
        (0, _classCallCheck3.default)(this, Frame);
        return (0, _possibleConstructorReturn3.default)(this, (Frame.__proto__ || (0, _getPrototypeOf2.default)(Frame)).call(this, id, name, rb));
    }

    /**
     * Called after initialization is finished.
     */


    (0, _createClass3.default)(Frame, [{
        key: 'setup',
        value: function setup() {
            this.el = this.rb.getDocument().getElement(this.band);
        }

        /**
         * Returns true if the given element type can be added to this container.
         * @param {String} elementType
         */

    }, {
        key: 'isElementAllowed',
        value: function isElementAllowed(elementType) {
            return elementType !== _DocElement2.default.type.pageBreak && elementType !== _DocElement2.default.type.frame && elementType !== _DocElement2.default.type.band;
        }

        /**
         * Returns absolute container offset.
         * @returns {Object} x and y offset coordinates.
         */

    }, {
        key: 'getOffset',
        value: function getOffset() {
            var x = 0,
                y = 0;
            if (this.owner !== null) {
                x = this.owner.getValue('xVal');
                y = this.owner.getValue('yVal');
            }
            if (this.parent !== null) {
                var offset = this.parent.getOffset();
                x += offset.x;
                y += offset.y;
            }
            return { x: x, y: y };
        }

        /**
         * Returns container size.
         * @returns {Object} width and height of container.
         */

    }, {
        key: 'getSize',
        value: function getSize() {
            var width = 0,
                height = 0;
            if (this.owner !== null) {
                width = this.owner.getValue('widthVal');
                height = this.owner.getValue('heightVal');
                var borderWidth = this.owner.getValue('borderWidthVal');
                if (this.owner.getValue('borderLeft')) {
                    width -= borderWidth;
                }
                if (this.owner.getValue('borderRight')) {
                    width -= borderWidth;
                }
                if (this.owner.getValue('borderTop')) {
                    height -= borderWidth;
                }
                if (this.owner.getValue('borderBottom')) {
                    height -= borderWidth;
                }
            }
            return { width: width, height: height };
        }
    }]);
    return Frame;
}(_Container3.default);

exports.default = Frame;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _Container = __webpack_require__(28);

var _Container2 = _interopRequireDefault(_Container);

var _Document = __webpack_require__(15);

var _Document2 = _interopRequireDefault(_Document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main panel which contains all report elements like doc elements, parameters and styles.
 * The main panel shows the structure and all components of the report.
 * @class
 */
var MainPanel = function () {
    function MainPanel(rootElement, headerBand, contentBand, footerBand, parameterContainer, styleContainer, rb) {
        (0, _classCallCheck3.default)(this, MainPanel);

        this.rootElement = rootElement;
        this.rb = rb;
        this.headerItem = new _MainPanelItem2.default('band', 'bandHeader', null, headerBand, { hasChildren: true, showAdd: false, showDelete: false, hasDetails: false,
            visible: this.rb.getDocumentProperties().getValue('header') }, rb);

        this.documentItem = new _MainPanelItem2.default('band', 'bandContent', null, contentBand, { hasChildren: true, showAdd: true, showDelete: false, hasDetails: false }, rb);

        this.footerItem = new _MainPanelItem2.default('band', 'bandFooter', null, footerBand, { hasChildren: true, showAdd: false, showDelete: false, hasDetails: false,
            visible: this.rb.getDocumentProperties().getValue('footer') }, rb);

        this.parametersItem = new _MainPanelItem2.default('parameter', 'parameters', null, parameterContainer, { hasChildren: true, showAdd: rb.getProperty('adminMode'), showDelete: false, hasDetails: false }, rb);

        this.stylesItem = new _MainPanelItem2.default('style', 'styles', null, styleContainer, { hasChildren: true, showAdd: true, showDelete: false, hasDetails: false }, rb);
        this.documentPropertiesItem = new _MainPanelItem2.default('documentProperties', 'documentProperties', null, rb.getDocumentProperties(), { showDelete: false, hasDetails: true }, rb);
        this.items = [this.headerItem, this.documentItem, this.footerItem, this.parametersItem, this.stylesItem, this.documentPropertiesItem];

        headerBand.setPanelItem(this.headerItem);
        contentBand.setPanelItem(this.documentItem);
        footerBand.setPanelItem(this.footerItem);
        parameterContainer.setPanelItem(this.parametersItem);
        styleContainer.setPanelItem(this.stylesItem);
    }

    (0, _createClass3.default)(MainPanel, [{
        key: 'getHeaderItem',
        value: function getHeaderItem() {
            return this.headerItem;
        }
    }, {
        key: 'getDocumentItem',
        value: function getDocumentItem() {
            return this.documentItem;
        }
    }, {
        key: 'getFooterItem',
        value: function getFooterItem() {
            return this.footerItem;
        }
    }, {
        key: 'getParametersItem',
        value: function getParametersItem() {
            return this.parametersItem;
        }
    }, {
        key: 'getStylesItem',
        value: function getStylesItem() {
            return this.stylesItem;
        }
    }, {
        key: 'getContainerByItem',
        value: function getContainerByItem(item) {
            while (item !== null) {
                if (item.getData() instanceof _Container2.default) {
                    return item.getData();
                }
                item = item.getParent();
            }
            return null;
        }
    }, {
        key: 'getDocumentPropertiesItem',
        value: function getDocumentPropertiesItem() {
            return this.documentPropertiesItem;
        }
    }, {
        key: 'render',
        value: function render() {
            var panel = $('#rbro_main_panel_list');
            this.appendChildren(panel, this.items);
        }
    }, {
        key: 'appendChildren',
        value: function appendChildren(el, items) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(items), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    el.append(item.getElement());
                    var children = item.getChildren();
                    if (children.length > 0) {
                        var elChildren = $('#' + item.getId() + '_children');
                        this.appendChildren(el, children);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'showHeader',
        value: function showHeader() {
            this.headerItem.show();
        }
    }, {
        key: 'hideHeader',
        value: function hideHeader() {
            this.headerItem.hide();
        }
    }, {
        key: 'showFooter',
        value: function showFooter() {
            this.footerItem.show();
        }
    }, {
        key: 'hideFooter',
        value: function hideFooter() {
            this.footerItem.hide();
        }
    }, {
        key: 'clearAll',
        value: function clearAll() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = (0, _getIterator3.default)(this.items), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var item = _step2.value;

                    item.clear();
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }]);
    return MainPanel;
}();

exports.default = MainPanel;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The menu panel contains all menu buttons.
 * @class
 */
var MenuPanel = function () {
    function MenuPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, MenuPanel);

        this.rootElement = rootElement;
        this.rb = rb;
    }

    (0, _createClass3.default)(MenuPanel, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var menuShowButtonLabels = this.rb.getProperty('menuShowButtonLabels');
            var menuButtonClass = menuShowButtonLabels ? '' : 'rbroHidden';
            var panel = $('#rbro_menu_panel');
            var panelLeft = $('<div class="rbroToolButtonContainer"></div>');
            if (this.rb.getProperty('saveCallback') || this.rb.getProperty('localStorageReportKey')) {
                panelLeft.append($('<button id="rbro_menu_save" class="rbroButton rbroMenuButton" title="' + this.rb.getLabel('menuSaveTip') + '">\n                    <span class="rbroIcon-save"></span><span class="' + menuButtonClass + '">' + this.rb.getLabel('menuSave') + '</span></button>').click(function (event) {
                    _this.rb.save();
                }));
            }
            panelLeft.append($('<button id="rbro_menu_undo" class="rbroButton rbroMenuButton" title="' + this.rb.getLabel('menuUndoTip') + '">\n                <span class="rbroIcon-undo"></span><span class="' + menuButtonClass + '">' + this.rb.getLabel('menuUndo') + '</span></button>').click(function (event) {
                _this.rb.undoCommand();
            }));
            panelLeft.append($('<button id="rbro_menu_redo" class="rbroButton rbroMenuButton" title="' + this.rb.getLabel('menuRedoTip') + '">\n                <span class="rbroIcon-redo"></span><span class="' + menuButtonClass + '">' + this.rb.getLabel('menuRedo') + '</span></button>').click(function (event) {
                _this.rb.redoCommand();
            }));
            panelLeft.append($('<button id="rbro_menu_preview" class="rbroButton rbroMenuButton" title="' + this.rb.getLabel('menuPreviewTip') + '">\n                <span class="rbroIcon-play"></span><span class="' + menuButtonClass + '">' + this.rb.getLabel('menuPreview') + '</span></button>').click(function (event) {
                _this.rb.preview();
            }));
            panel.append(panelLeft);

            var panelRight = $('<div class="rbroElementButtonContainer"></div>');
            var elElementsDiv = $('<div class="rbroElementButtons"></div>');
            elElementsDiv.append($('<div id="rbro_menu_element_text" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementText') + '">\n                    <span class="rbroIcon-text"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', ''); // without setData dragging does not work in FF
                event.originalEvent.dataTransfer.effectAllowed = 'copy';

                _this.rb.startBrowserDrag('docElement', null, _DocElement2.default.type.text, '');

                // avoid calling dragstart handler for main div which disables dragging for all other elements
                event.stopPropagation();
            }));
            elElementsDiv.append($('<div id="rbro_menu_element_line" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementLine') + '">\n                    <span class="rbroIcon-line"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', null, _DocElement2.default.type.line, '');
                event.stopPropagation();
            }));
            elElementsDiv.append($('<div id="rbro_menu_element_image" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementImage') + '">\n                    <span class="rbroIcon-image"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', null, _DocElement2.default.type.image, '');
                event.stopPropagation();
            }));
            elElementsDiv.append($('<div id="rbro_menu_element_bar_code" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementBarCode') + '">\n                    <span class="rbroIcon-barcode"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', null, _DocElement2.default.type.barCode, '');
                event.stopPropagation();
            }));
            elElementsDiv.append($('<div id="rbro_menu_element_table" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementTable') + '">\n                    <span class="rbroIcon-table"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', null, _DocElement2.default.type.table, '');
                event.stopPropagation();
            }));
            elElementsDiv.append($('<div id="rbro_menu_element_frame" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementFrame') + '">\n                    <span class="rbroIcon-frame"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', null, _DocElement2.default.type.frame, '');
                event.stopPropagation();
            }));
            elElementsDiv.append($('<div id="rbro_menu_element_page_break" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementPageBreak') + '">\n                    <span class="rbroIcon-page-break"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', null, _DocElement2.default.type.pageBreak, '');
                event.stopPropagation();
            }));
            panelRight.append(elElementsDiv);

            var elActionsDiv = $('<div class="rbroActionButtons"></div>');
            var elAlignDiv = $('<div id="rbro_menu_align" style="display: none;"></div>');
            var elAlignLeft = $('<button id="rbro_menu_align_left"\n                class="rbroButton rbroActionButton rbroIcon-align-left" type="button"\n                title="' + this.rb.getLabel('menuAlignLeft') + '"></button>').click(function (event) {
                _this.rb.alignSelections(_Style2.default.alignment.left);
            });
            elAlignDiv.append(elAlignLeft);
            var elAlignCenter = $('<button id="rbro_menu_align_center"\n                class="rbroButton rbroActionButton rbroIcon-align-center" type="button"\n                title="' + this.rb.getLabel('menuAlignCenter') + '"></button>').click(function (event) {
                _this.rb.alignSelections(_Style2.default.alignment.center);
            });
            elAlignDiv.append(elAlignCenter);
            var elAlignRight = $('<button id="rbro_menu_align_right"\n                class="rbroButton rbroActionButton rbroIcon-align-right" type="button"\n                title="' + this.rb.getLabel('menuAlignRight') + '"></button>').click(function (event) {
                _this.rb.alignSelections(_Style2.default.alignment.right);
            });
            elAlignDiv.append(elAlignRight);
            elActionsDiv.append(elAlignDiv);
            var elVAlignDiv = $('<div id="rbro_menu_valign" style="display: none;"></div>');
            var elAlignTop = $('<button id="rbro_menu_align_top"\n                class="rbroButton rbroActionButton rbroIcon-align-top" type="button"\n                title="' + this.rb.getLabel('menuAlignTop') + '"></button>').click(function (event) {
                _this.rb.alignSelections(_Style2.default.alignment.top);
            });
            elVAlignDiv.append(elAlignTop);
            var elAlignMiddle = $('<button id="rbro_menu_align_middle"\n                class="rbroButton rbroActionButton rbroIcon-align-middle" type="button"\n                title="' + this.rb.getLabel('menuAlignMiddle') + '"></button>').click(function (event) {
                _this.rb.alignSelections(_Style2.default.alignment.middle);
            });
            elVAlignDiv.append(elAlignMiddle);
            var elAlignBottom = $('<button id="rbro_menu_align_bottom"\n                class="rbroButton rbroActionButton rbroIcon-align-bottom" type="button"\n                title="' + this.rb.getLabel('menuAlignBottom') + '"></button>').click(function (event) {
                _this.rb.alignSelections(_Style2.default.alignment.bottom);
            });
            elVAlignDiv.append(elAlignBottom);
            elActionsDiv.append(elVAlignDiv);

            var elMenuToggleGrid = $('<button id="rbro_menu_toggle_grid"\n                class="rbroButton rbroGridButton rbroActionButton rbroIcon-grid ' + (this.rb.getProperty('showGrid') ? 'rbroButtonActive' : '') + '" type="button"\n                title="' + this.rb.getLabel('menuToggleGrid') + '"></button>').click(function (event) {
                elMenuToggleGrid.toggleClass('rbroButtonActive');
                _this.rb.getDocument().toggleGrid();
            });
            elActionsDiv.append(elMenuToggleGrid);
            panelRight.append(elActionsDiv);
            panel.append(panelRight);
        }
    }]);
    return MenuPanel;
}();

exports.default = MenuPanel;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Parameter = __webpack_require__(16);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _PopupWindow = __webpack_require__(10);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all band properties.
 * @class
 */
var BandElementPanel = function () {
    function BandElementPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, BandElementPanel);

        this.rootElement = rootElement;
        this.rb = rb;
        this.selectedObjId = null;
    }

    (0, _createClass3.default)(BandElementPanel, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var panel = $('<div id="rbro_band_element_panel" class="rbroHidden"></div>');

            var elDiv = $('<div class="rbroFormRow" id="rbro_band_element_data_source_row"></div>');
            elDiv.append('<label for="rbro_band_element_data_source">' + this.rb.getLabel('docElementDataSource') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elDataSource = $('<textarea id="rbro_band_element_data_source" rows="1"></textarea>').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_band_element_data_source', 'dataSource', elDataSource.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            }).focus(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj, [_Parameter2.default.type.array]), _this.selectedObjId, 'rbro_band_element_data_source', 'dataSource', _PopupWindow2.default.type.parameterSet);
                }
            }).blur(function (event) {
                _this.rb.getPopupWindow().hide();
            }).mouseup(function (event) {
                event.preventDefault();
                event.stopPropagation();
            });
            autosize(elDataSource);
            elFormField.append(elDataSource);
            elFormField.append('<div id="rbro_band_element_data_source_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_band_element_position_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_band_element_position_y">' + this.rb.getLabel('docElementPositionY') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elPosY = $('<input id="rbro_band_element_position_y">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_band_element_position_y', 'y', elPosY.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosY);
            elFormField.append(elPosY);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_band_element_size_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_band_element_width">' + this.rb.getLabel('docElementSize') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elHeight = $('<input id="rbro_band_element_height">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('height') !== elHeight.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_band_element_height', 'height', elHeight.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elHeight);
            elFormField.append(elHeight);
            elFormField.append('<div id="rbro_band_element_size_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            var elPrintHeader = $('<div class="rbroPanelSectionHeader"></div>');
            var elPrintHeaderIcon = $('<span id="rbro_band_element_print_header_icon" class="rbroIcon-plus"></span>');
            elDiv = $('<div id="rbro_band_element_print_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                $('#rbro_band_element_print_header').toggleClass('rbroPanelSectionHeaderOpen');
                $('#rbro_band_element_print_section').toggleClass('rbroHidden');
                elPrintHeaderIcon.toggleClass('rbroIcon-plus');
                elPrintHeaderIcon.toggleClass('rbroIcon-minus');
                if (elPrintHeaderIcon.hasClass('rbroIcon-minus')) {
                    $('#rbro_detail_panel').scrollTop(elPrintHeader.position().top);
                }
                autosize.update($('#rbro_band_element_print_if'));
            });
            elPrintHeader.append(elPrintHeaderIcon);
            elPrintHeader.append('<span>' + this.rb.getLabel('docElementPrintSettings') + '</span>');
            elDiv.append(elPrintHeader);
            panel.append(elDiv);

            var elPrintSectionDiv = $('<div id="rbro_band_element_print_section" class="rbroHidden"></div>');
            elDiv = $('<div id="rbro_band_element_print_if_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_band_element_print_if">' + this.rb.getLabel('docElementPrintIf') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPrintIf = $('<textarea id="rbro_band_element_print_if" rows="1"></textarea>').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_band_element_print_if', 'printIf', elPrintIf.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            autosize(elPrintIf);
            elFormField.append(elPrintIf);
            var elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj), _this.selectedObjId, 'rbro_band_element_print_if', 'parameter', _PopupWindow2.default.type.parameterAppend);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_band_element_print_if_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_band_element_remove_empty_element">' + this.rb.getLabel('docElementRemoveEmptyElement') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elRemoveEmptyElement = $('<input id="rbro_band_element_remove_empty_element" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_band_element_remove_empty_element', 'removeEmptyElement', elRemoveEmptyElement.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elRemoveEmptyElement);
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_band_element_shrink_to_content_height">' + this.rb.getLabel('frameElementShrinkToContentHeight') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elShrinkToContentHeight = $('<input id="rbro_band_element_shrink_to_content_height" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_band_element_shrink_to_content_height', 'shrinkToContentHeight', elShrinkToContentHeight.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elShrinkToContentHeight);
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);
            panel.append(elPrintSectionDiv);

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'updateAutosizeInputs',
        value: function updateAutosizeInputs() {
            autosize.update($('#rbro_band_element_print_if'));
        }
    }, {
        key: 'show',
        value: function show(data) {
            $('#rbro_band_element_panel').removeClass('rbroHidden');
            this.updateData(data);
            this.updateAutosizeInputs();
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_band_element_panel').addClass('rbroHidden');
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {LineElement} data
         */

    }, {
        key: 'updateData',
        value: function updateData(data) {
            if (data !== null) {
                $('#rbro_band_element_data_source').prop('disabled', false);
                $('#rbro_band_element_label').prop('disabled', false);
                $('#rbro_band_element_position_y').prop('disabled', false);
                $('#rbro_band_element_height').prop('disabled', false);
                $('#rbro_band_element_print_if').prop('disabled', false);
                $('#rbro_band_element_remove_empty_element').prop('disabled', false);
                $('#rbro_band_element_shrink_to_content_height').prop('disabled', false);

                $('#rbro_band_element_data_source').val(data.getValue('dataSource'));
                $('#rbro_band_element_label').val(data.getValue('label'));
                $('#rbro_band_element_position_y').val(data.getValue('y'));
                $('#rbro_band_element_height').val(data.getValue('height'));
                $('#rbro_band_element_print_if').val(data.getValue('printIf'));
                $('#rbro_band_element_remove_empty_element').prop('checked', data.getValue('removeEmptyElement'));
                $('#rbro_band_element_shrink_to_content_height').prop('checked', data.getValue('shrinkToContentHeight'));
                this.selectedObjId = data.getId();
            } else {
                $('#rbro_band_element_data_source').prop('disabled', true);
                $('#rbro_band_element_label').prop('disabled', true);
                $('#rbro_band_element_position_y').prop('disabled', true);
                $('#rbro_band_element_height').prop('disabled', true);
                $('#rbro_band_element_print_if').prop('disabled', true);
                $('#rbro_band_element_remove_empty_element').prop('disabled', true);
                $('#rbro_band_element_shrink_to_content_height').prop('disabled', true);
            }

            this.updateAutosizeInputs();
            this.updateErrors();
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation) {}

        /**
         * Updates displayed errors of currently selected data object.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#rbro_band_element_panel .rbroFormRow').removeClass('rbroError');
            $('#rbro_band_element_panel .rbroPanelSection').removeClass('rbroError');
            $('#rbro_band_element_panel .rbroErrorMessage').text('');
            var selectedObj = this.rb.getDataObject(this.selectedObjId);
            if (selectedObj !== null) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(selectedObj.getErrors()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var error = _step.value;

                        var rowId = 'rbro_band_element_' + error.field + '_row';
                        var errorId = 'rbro_band_element_' + error.field + '_error';
                        var errorMsg = this.rb.getLabel(error.msg_key);
                        if (error.info) {
                            errorMsg = errorMsg.replace('${info}', '<span class="rbroErrorMessageInfo">' + error.info + '</span>');
                        }
                        $('#' + rowId).addClass('rbroError');
                        $('#' + errorId).html(errorMsg);
                        if (error.field === 'print_if') {
                            $('#rbro_band_element_print_header').addClass('rbroError');
                            if (!$('#rbro_band_element_print_header').hasClass('rbroPanelSectionHeaderOpen')) {
                                $('#rbro_band_element_print_header').trigger('click');
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getSelectedObjId',
        value: function getSelectedObjId() {
            return this.selectedObjId;
        }
    }]);
    return BandElementPanel;
}();

exports.default = BandElementPanel;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _StylePanel = __webpack_require__(31);

var _StylePanel2 = _interopRequireDefault(_StylePanel);

var _CommandGroupCmd = __webpack_require__(20);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _PopupWindow = __webpack_require__(10);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all barcode properties.
 * @class
 */
var BarCodeElementPanel = function () {
    function BarCodeElementPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, BarCodeElementPanel);

        this.rootElement = rootElement;
        this.rb = rb;
        this.selectedObjId = null;
    }

    (0, _createClass3.default)(BarCodeElementPanel, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var panel = $('<div id="rbro_bar_code_element_panel" class="rbroHidden"></div>');
            var elDiv = $('<div id="rbro_bar_code_element_content_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_bar_code_element_content">' + this.rb.getLabel('barCodeElementContent') + ':</label>');
            var elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elContent = $('<textarea id="rbro_bar_code_element_content" rows="1"></textarea>').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_bar_code_element_content', 'content', elContent.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            autosize(elContent);
            elFormField.append(elContent);
            var elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj), _this.selectedObjId, 'rbro_bar_code_element_content', 'parameter', _PopupWindow2.default.type.parameterAppend);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_bar_code_element_content_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_bar_code_element_format_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_bar_code_element_format">' + this.rb.getLabel('barCodeElementFormat') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elFormat = $('<select id="rbro_bar_code_element_format" disabled="disabled">\n                <option value="CODE128">CODE128</option>\n            </select>').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_bar_code_element_format', 'format', elFormat.val(), _SetValueCmd2.default.type.select, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elFormat);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_bar_code_element_display_value_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_bar_code_element_display_value">' + this.rb.getLabel('barCodeElementDisplayValue') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elDisplayValue = $('<input id="rbro_bar_code_element_display_value" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_bar_code_element_display_value', 'displayValue', elDisplayValue.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elDisplayValue);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_bar_code_element_position_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_bar_code_element_position">' + this.rb.getLabel('docElementPosition') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPosX = $('<input id="rbro_bar_code_element_position_x">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('x') !== elPosX.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_bar_code_element_position_x', 'x', elPosX.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosX);
            elFormField.append(elPosX);
            var elPosY = $('<input id="rbro_bar_code_element_position_y">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('y') !== elPosY.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_bar_code_element_position_y', 'y', elPosY.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosY);
            elFormField.append(elPosY);
            elFormField.append('<div id="rbro_bar_code_element_position_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_bar_code_element_size_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_bar_code_element_size">' + this.rb.getLabel('docElementHeight') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elHeight = $('<input id="rbro_bar_code_element_height">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('height') !== elHeight.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_bar_code_element_height', 'height', elHeight.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elHeight);
            elFormField.append(elHeight);
            elFormField.append('<div id="rbro_bar_code_element_size_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            var elPrintHeader = $('<div class="rbroPanelSectionHeader"></div>');
            var elPrintHeaderIcon = $('<span id="rbro_bar_code_element_print_header_icon" class="rbroIcon-plus"></span>');
            elDiv = $('<div id="rbro_bar_code_element_print_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                $('#rbro_bar_code_element_print_header').toggleClass('rbroPanelSectionHeaderOpen');
                $('#rbro_bar_code_element_print_section').toggleClass('rbroHidden');
                elPrintHeaderIcon.toggleClass('rbroIcon-plus');
                elPrintHeaderIcon.toggleClass('rbroIcon-minus');
                if (elPrintHeaderIcon.hasClass('rbroIcon-minus')) {
                    $('#rbro_detail_panel').scrollTop(elPrintHeader.position().top);
                }
                autosize.update($('#rbro_bar_code_element_print_if'));
            });
            elPrintHeader.append(elPrintHeaderIcon);
            elPrintHeader.append('<span>' + this.rb.getLabel('docElementPrintSettings') + '</span>');
            elDiv.append(elPrintHeader);
            panel.append(elDiv);

            var elPrintSectionDiv = $('<div id="rbro_bar_code_element_print_section" class="rbroHidden"></div>');
            elDiv = $('<div id="rbro_bar_code_element_print_if_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_bar_code_element_print_if">' + this.rb.getLabel('docElementPrintIf') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPrintIf = $('<textarea id="rbro_bar_code_element_print_if" rows="1"></textarea>').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_bar_code_element_print_if', 'printIf', elPrintIf.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            autosize(elPrintIf);
            elFormField.append(elPrintIf);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj), _this.selectedObjId, 'rbro_bar_code_element_print_if', 'parameter', _PopupWindow2.default.type.parameterAppend);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_bar_code_element_print_if_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_bar_code_element_remove_empty_element">' + this.rb.getLabel('docElementRemoveEmptyElement') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elRemoveEmptyElement = $('<input id="rbro_bar_code_element_remove_empty_element" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_bar_code_element_remove_empty_element', 'removeEmptyElement', elRemoveEmptyElement.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elRemoveEmptyElement);
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);
            panel.append(elPrintSectionDiv);

            if (this.rb.getProperty('enableSpreadsheet')) {
                var elSpreadsheetHeader = $('<div class="rbroPanelSectionHeader"></div>');
                var elSpreadsheetHeaderIcon = $('<span id="rbro_bar_code_element_spreadsheet_header_icon" class="rbroIcon-plus"></span>');
                elDiv = $('<div id="rbro_bar_code_element_spreadsheet_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        $('#rbro_bar_code_element_spreadsheet_header').toggleClass('rbroPanelSectionHeaderOpen');
                        $('#rbro_bar_code_element_spreadsheet_section').toggleClass('rbroHidden');
                        elSpreadsheetHeaderIcon.toggleClass('rbroIcon-plus');
                        elSpreadsheetHeaderIcon.toggleClass('rbroIcon-minus');
                        if (elSpreadsheetHeaderIcon.hasClass('rbroIcon-minus')) {
                            $('#rbro_detail_panel').scrollTop($('#rbro_detail_panel').scrollTop() + elSpreadsheetHeader.position().top);
                        }
                    }
                });
                elSpreadsheetHeader.append(elSpreadsheetHeaderIcon);
                elSpreadsheetHeader.append('<span>' + this.rb.getLabel('docElementSpreadsheet') + '</span>');
                elDiv.append(elSpreadsheetHeader);
                panel.append(elDiv);

                var elSpreadsheetSectionDiv = $('<div id="rbro_bar_code_element_spreadsheet_section" class="rbroHidden"></div>');
                elDiv = $('<div id="rbro_bar_code_element_spreadsheet_hide_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_bar_code_element_spreadsheet_hide">' + this.rb.getLabel('docElementSpreadsheetHide') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetHide = $('<input id="rbro_bar_code_element_spreadsheet_hide" type="checkbox">').change(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_bar_code_element_spreadsheet_hide', 'spreadsheet_hide', elSpreadsheetHide.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elSpreadsheetHide);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_bar_code_element_spreadsheet_column_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_bar_code_element_spreadsheet_column">' + this.rb.getLabel('docElementSpreadsheetColumn') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetColumn = $('<input id="rbro_bar_code_element_spreadsheet_column">').on('input', function (event) {
                    var obj = _this.rb.getDataObject(_this.selectedObjId);
                    if (obj !== null && obj.getValue('spreadsheet_column') !== elSpreadsheetColumn.val()) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_bar_code_element_spreadsheet_column', 'spreadsheet_column', elSpreadsheetColumn.val(), _SetValueCmd2.default.type.text, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                utils.setInputPositiveInteger(elSpreadsheetColumn);
                elFormField.append(elSpreadsheetColumn);
                elFormField.append('<div id="rbro_bar_code_element_spreadsheet_column_error" class="rbroErrorMessage"></div>');
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_bar_code_element_spreadsheet_add_empty_row_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_bar_code_element_spreadsheet_add_empty_row">' + this.rb.getLabel('docElementSpreadsheetAddEmptyRow') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetAddEmptyRow = $('<input id="rbro_bar_code_element_spreadsheet_add_empty_row" type="checkbox">').change(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_bar_code_element_spreadsheet_add_empty_row', 'spreadsheet_addEmptyRow', elSpreadsheetAddEmptyRow.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elSpreadsheetAddEmptyRow);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);
                panel.append(elSpreadsheetSectionDiv);
            }

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'updateAutosizeInputs',
        value: function updateAutosizeInputs() {
            autosize.update($('#rbro_bar_code_element_content'));
            autosize.update($('#rbro_bar_code_element_print_if'));
        }
    }, {
        key: 'show',
        value: function show(data) {
            this.updateData(data);
            $('#rbro_bar_code_element_panel').removeClass('rbroHidden');
            this.updateAutosizeInputs();
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_bar_code_element_panel').addClass('rbroHidden');
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {BarCodeElement} data
         */

    }, {
        key: 'updateData',
        value: function updateData(data) {
            if (data !== null) {
                $('#rbro_bar_code_element_content').prop('disabled', false);
                $('#rbro_bar_code_element_display_value').prop('disabled', false);
                $('#rbro_bar_code_element_position_x').prop('disabled', false);
                $('#rbro_bar_code_element_position_y').prop('disabled', false);
                $('#rbro_bar_code_element_width').prop('disabled', false);
                $('#rbro_bar_code_element_height').prop('disabled', false);
                $('#rbro_bar_code_element_print_if').prop('disabled', false);
                $('#rbro_bar_code_element_remove_empty_element').prop('disabled', false);
                $('#rbro_bar_code_element_spreadsheet_hide').prop('disabled', false);
                $('#rbro_bar_code_element_spreadsheet_column').prop('disabled', false);
                $('#rbro_bar_code_element_spreadsheet_add_empty_row').prop('disabled', false);

                $('#rbro_bar_code_element_content').val(data.getValue('content'));
                $('#rbro_bar_code_element_format').val(data.getValue('format'));
                $('#rbro_bar_code_element_display_value').prop('checked', data.getValue('displayValue'));
                $('#rbro_bar_code_element_position_x').val(data.getValue('x'));
                $('#rbro_bar_code_element_position_y').val(data.getValue('y'));
                $('#rbro_bar_code_element_width').val(data.getValue('width'));
                $('#rbro_bar_code_element_height').val(data.getValue('height'));
                $('#rbro_bar_code_element_print_if').val(data.getValue('printIf'));
                $('#rbro_bar_code_element_remove_empty_element').prop('checked', data.getValue('removeEmptyElement'));
                $('#rbro_bar_code_element_spreadsheet_hide').prop('checked', data.getValue('spreadsheet_hide'));
                $('#rbro_bar_code_element_spreadsheet_column').val(data.getValue('spreadsheet_column'));
                $('#rbro_bar_code_element_spreadsheet_add_empty_row').prop('checked', data.getValue('spreadsheet_addEmptyRow'));
                this.selectedObjId = data.getId();
            } else {
                $('#rbro_bar_code_element_content').prop('disabled', true);
                $('#rbro_bar_code_element_display_value').prop('disabled', true);
                $('#rbro_bar_code_element_position_x').prop('disabled', true);
                $('#rbro_bar_code_element_position_y').prop('disabled', true);
                $('#rbro_bar_code_element_width').prop('disabled', true);
                $('#rbro_bar_code_element_height').prop('disabled', true);
                $('#rbro_bar_code_element_print_if').prop('disabled', true);
                $('#rbro_bar_code_element_remove_empty_element').prop('disabled', true);
                $('#rbro_bar_code_element_spreadsheet_hide').prop('disabled', true);
                $('#rbro_bar_code_element_spreadsheet_column').prop('disabled', true);
                $('#rbro_bar_code_element_spreadsheet_add_empty_row').prop('disabled', true);
            }
            this.updateAutosizeInputs();
            this.updateErrors();
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation) {}

        /**
         * Updates displayed errors of currently selected data object.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#rbro_bar_code_element_panel .rbroFormRow').removeClass('rbroError');
            $('#rbro_bar_code_element_panel .rbroPanelSection').removeClass('rbroError');
            $('#rbro_bar_code_element_panel .rbroErrorMessage').text('');
            var selectedObj = this.rb.getDataObject(this.selectedObjId);
            if (selectedObj !== null) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(selectedObj.getErrors()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var error = _step.value;

                        var rowId = 'rbro_bar_code_element_' + error.field + '_row';
                        var errorId = 'rbro_bar_code_element_' + error.field + '_error';
                        var errorMsg = this.rb.getLabel(error.msg_key);
                        if (error.info) {
                            errorMsg = errorMsg.replace('${info}', '<span class="rbroErrorMessageInfo">' + error.info + '</span>');
                        }
                        $('#' + rowId).addClass('rbroError');
                        $('#' + errorId).html(errorMsg);
                        if (error.field === 'print_if') {
                            $('#rbro_bar_code_element_print_header').addClass('rbroError');
                            if (!$('#rbro_bar_code_element_print_header').hasClass('rbroPanelSectionHeaderOpen')) {
                                $('#rbro_bar_code_element_print_header').trigger('click');
                            }
                        } else if (error.field === 'spreadsheet_column') {
                            $('#rbro_bar_code_element_spreadsheet_header').addClass('rbroError');
                            if (!$('#rbro_bar_code_element_spreadsheet_header').hasClass('rbroPanelSectionHeaderOpen')) {
                                $('#rbro_bar_code_element_spreadsheet_header').trigger('click');
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getSelectedObjId',
        value: function getSelectedObjId() {
            return this.selectedObjId;
        }
    }]);
    return BarCodeElementPanel;
}();

exports.default = BarCodeElementPanel;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _DocumentProperties = __webpack_require__(37);

var _DocumentProperties2 = _interopRequireDefault(_DocumentProperties);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all document properties.
 * @class
 */
var DocumentPropertiesPanel = function () {
    function DocumentPropertiesPanel(documentProperties, rootElement, rb) {
        (0, _classCallCheck3.default)(this, DocumentPropertiesPanel);

        this.documentProperties = documentProperties;
        this.rootElement = rootElement;
        this.rb = rb;
    }

    (0, _createClass3.default)(DocumentPropertiesPanel, [{
        key: 'render',
        value: function render(data) {
            var _this = this;

            var panel = $('<div id="rbro_document_properties_panel" class="rbroHidden"></div>');
            var elDiv = $('<div id="rbro_document_properties_page_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_page_format">' + this.rb.getLabel('pageFormat') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elPageFormat = $('<select id="rbro_document_properties_page_format">\n                <option value="A4">' + this.rb.getLabel('pageFormatA4') + '</option>\n                <option value="A5">' + this.rb.getLabel('pageFormatA5') + '</option>\n                <option value="letter">' + this.rb.getLabel('pageFormatLetter') + '</option>\n                <option value="user_defined">' + this.rb.getLabel('pageFormatUserDefined') + '</option>\n            </select>').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this.documentProperties.getId(), 'rbro_document_properties_page_format', 'pageFormat', elPageFormat.val(), _SetValueCmd2.default.type.select, _this.rb);
                _this.rb.executeCommand(cmd);
            });
            elFormField.append(elPageFormat);

            var elPageSizeDiv = $('<div id="rbro_document_properties_page_size_row" class="rbroTripleSplit"></div>');
            var elPageWidth = $('<input id="rbro_document_properties_page_width" maxlength="5">').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this.documentProperties.getId(), 'rbro_document_properties_page_width', 'pageWidth', elPageWidth.val(), _SetValueCmd2.default.type.select, _this.rb);
                _this.rb.executeCommand(cmd);
            });
            utils.setInputPositiveInteger(elPageWidth);
            elPageSizeDiv.append(elPageWidth);
            var elPageHeight = $('<input id="rbro_document_properties_page_height" maxlength="5">').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this.documentProperties.getId(), 'rbro_document_properties_page_height', 'pageHeight', elPageHeight.val(), _SetValueCmd2.default.type.text, _this.rb);
                _this.rb.executeCommand(cmd);
            });
            utils.setInputPositiveInteger(elPageHeight);
            elPageSizeDiv.append(elPageHeight);
            var elUnit = $('<select id="rbro_document_properties_unit">\n            <option value="mm">mm</option>\n            <option value="inch">inch</option>\n        </select>').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this.documentProperties.getId(), 'rbro_document_properties_unit', 'unit', elUnit.val(), _SetValueCmd2.default.type.select, _this.rb);
                _this.rb.executeCommand(cmd);
            });
            elPageSizeDiv.append(elUnit);
            elFormField.append(elPageSizeDiv);
            elFormField.append('<div id="rbro_document_properties_page_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);
            if (this.documentProperties.getValue('pageFormat') !== _DocumentProperties2.default.pageFormat.userDefined) {
                elPageSizeDiv.hide();
            }

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_orientation">' + this.rb.getLabel('orientation') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elOrientation = $('<select id="rbro_document_properties_orientation">\n                <option value="portrait">' + this.rb.getLabel('orientationPortrait') + '</option>\n                <option value="landscape">' + this.rb.getLabel('orientationLandscape') + '</option>\n            </select>').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this.documentProperties.getId(), 'rbro_document_properties_orientation', 'orientation', elOrientation.val(), _SetValueCmd2.default.type.select, _this.rb);
                _this.rb.executeCommand(cmd);
            });
            elFormField.append(elOrientation);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_content_height">' + this.rb.getLabel('contentHeight') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elContentHeight = $('<input id="rbro_document_properties_content_height">').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this.documentProperties.getId(), 'rbro_document_properties_content_height', 'contentHeight', elContentHeight.val(), _SetValueCmd2.default.type.text, _this.rb);
                _this.rb.executeCommand(cmd);
            });
            utils.setInputPositiveInteger(elContentHeight);
            elFormField.append(elContentHeight);
            elFormField.append('<div class="rbroInfo">' + this.rb.getLabel('contentHeightInfo') + '</div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            this.renderMarginControls(panel);
            this.renderHeaderFooter(panel);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_pattern_locale">' + this.rb.getLabel('patternLocale') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elPatternLocale = $('<select id="rbro_document_properties_pattern_locale">\n                <option value="de">de</option>\n                <option value="en">en</option>\n                <option value="es">es</option>\n                <option value="fr">fr</option>\n                <option value="it">it</option>\n            </select>').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this.documentProperties.getId(), 'rbro_document_properties_pattern_locale', 'patternLocale', elPatternLocale.val(), _SetValueCmd2.default.type.select, _this.rb);
                _this.rb.executeCommand(cmd);
            });
            elFormField.append(elPatternLocale);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_pattern_currency_symbol">' + this.rb.getLabel('patternCurrencySymbol') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elPatternCurrencySymbol = $('<input id="rbro_document_properties_pattern_currency_symbol">').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this.rb.getDetailData().getId(), 'rbro_document_properties_pattern_currency_symbol', 'patternCurrencySymbol', elPatternCurrencySymbol.val(), _SetValueCmd2.default.type.text, _this.rb);
                _this.rb.executeCommand(cmd);
            });
            elFormField.append(elPatternCurrencySymbol);
            elDiv.append(elFormField);
            panel.append(elDiv);

            $('#rbro_detail_panel').append(panel);

            this.updateData(this.documentProperties);
        }
    }, {
        key: 'renderMarginControls',
        value: function renderMarginControls(panel) {
            var _this2 = this;

            var elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_page_margin_top">' + this.rb.getLabel('pageMargins') + ':</label>');
            var elFormField = $('<div class="rbroFormField rbroSmallInput"></div>');

            var elMarginTopDiv = $('<div class="rbroColumnCenter"></div>');
            var elMarginTop = $('<input id="rbro_document_properties_page_margin_top" placeholder="' + this.rb.getLabel('orientationTop') + '">').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this2.documentProperties.getId(), 'rbro_document_properties_page_margin_top', 'marginTop', elMarginTop.val(), _SetValueCmd2.default.type.text, _this2.rb);
                _this2.rb.executeCommand(cmd);
            });
            utils.setInputPositiveInteger(elMarginTop);
            elMarginTopDiv.append(elMarginTop);
            elFormField.append(elMarginTopDiv);

            var elDiv2 = $('<div class="rbroSplit"></div>');
            var elMarginLeft = $('<input id="rbro_document_properties_page_margin_left" placeholder="' + this.rb.getLabel('orientationLeft') + '">').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this2.documentProperties.getId(), 'rbro_document_properties_page_margin_left', 'marginLeft', elMarginLeft.val(), _SetValueCmd2.default.type.text, _this2.rb);
                _this2.rb.executeCommand(cmd);
            });
            utils.setInputPositiveInteger(elMarginLeft);
            elDiv2.append(elMarginLeft);
            var elMarginRight = $('<input id="rbro_document_properties_page_margin_right" placeholder="' + this.rb.getLabel('orientationRight') + '">').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this2.documentProperties.getId(), 'rbro_document_properties_page_margin_right', 'marginRight', elMarginRight.val(), _SetValueCmd2.default.type.text, _this2.rb);
                _this2.rb.executeCommand(cmd);
            });
            utils.setInputPositiveInteger(elMarginRight);
            elDiv2.append(elMarginRight);
            elFormField.append(elDiv2);

            var elMarginBottomDiv = $('<div class="rbroColumnCenter"></div>');
            var elMarginBottom = $('<input id="rbro_document_properties_page_margin_bottom" placeholder="' + this.rb.getLabel('orientationBottom') + '">').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this2.documentProperties.getId(), 'rbro_document_properties_page_margin_bottom', 'marginBottom', elMarginBottom.val(), _SetValueCmd2.default.type.text, _this2.rb);
                _this2.rb.executeCommand(cmd);
            });
            utils.setInputPositiveInteger(elMarginBottom);
            elMarginBottomDiv.append(elMarginBottom);
            elFormField.append(elMarginBottomDiv);
            elDiv.append(elFormField);
            panel.append(elDiv);
        }
    }, {
        key: 'renderHeaderFooter',
        value: function renderHeaderFooter(panel) {
            var _this3 = this;

            var elHeaderDiv = $('<div class="rbroFormRowContainer"></div>');
            var elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_header">' + this.rb.getLabel('header') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elHeaderLabel = $('<label class="switch-light switch-material"></label>');
            var elHeader = $('<input id="rbro_document_properties_header" type="checkbox">').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this3.documentProperties.getId(), 'rbro_document_properties_header', 'header', elHeader.is(":checked"), _SetValueCmd2.default.type.checkbox, _this3.rb);
                _this3.rb.executeCommand(cmd);
            });
            elHeaderLabel.append(elHeader);
            var elHeaderSpan = $('<span></span>');
            elHeaderSpan.append($('<span></span>'));
            elHeaderSpan.append($('<span></span>'));
            elHeaderSpan.append($('<a></a>'));
            elHeaderLabel.append(elHeaderSpan);
            elFormField.append(elHeaderLabel);
            elDiv.append(elFormField);
            elHeaderDiv.append(elDiv);
            var elHeaderSettings = $('<div id="rbro_document_properties_header_settings"></div>');
            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_header_size">' + this.rb.getLabel('headerSize') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elHeaderSize = $('<input id="rbro_document_properties_header_size">').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this3.documentProperties.getId(), 'rbro_document_properties_header_size', 'headerSize', elHeaderSize.val(), _SetValueCmd2.default.type.text, _this3.rb);
                _this3.rb.executeCommand(cmd);
            });
            utils.setInputPositiveInteger(elHeaderSize);
            elFormField.append(elHeaderSize);
            elDiv.append(elFormField);
            elHeaderSettings.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_header_display">' + this.rb.getLabel('headerDisplay') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elHeaderDisplay = $('<select id="rbro_document_properties_header_display">\n                <option value="always">' + this.rb.getLabel('headerFooterDisplayAlways') + '</option>\n                <option value="not_on_first_page">' + this.rb.getLabel('headerFooterDisplayNotOnFirstPage') + '</option>\n            </select>').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this3.documentProperties.getId(), 'rbro_document_properties_header_display', 'headerDisplay', elHeaderDisplay.val(), _SetValueCmd2.default.type.select, _this3.rb);
                _this3.rb.executeCommand(cmd);
            });
            elFormField.append(elHeaderDisplay);
            elDiv.append(elFormField);
            elHeaderSettings.append(elDiv);
            elHeaderDiv.append(elHeaderSettings);
            panel.append(elHeaderDiv);

            var elFooterDiv = $('<div class="rbroFormRowContainer"></div>');
            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_footer">' + this.rb.getLabel('footer') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elFooterLabel = $('<label class="switch-light switch-material"></label>');
            var elFooter = $('<input id="rbro_document_properties_footer" type="checkbox">').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this3.documentProperties.getId(), 'rbro_document_properties_footer', 'footer', elFooter.is(":checked"), _SetValueCmd2.default.type.checkbox, _this3.rb);
                _this3.rb.executeCommand(cmd);
            });
            elFooterLabel.append(elFooter);
            var elFooterSpan = $('<span></span>');
            elFooterSpan.append($('<span></span>'));
            elFooterSpan.append($('<span></span>'));
            elFooterSpan.append($('<a></a>'));
            elFooterLabel.append(elFooterSpan);
            elFormField.append(elFooterLabel);
            elDiv.append(elFormField);
            elFooterDiv.append(elDiv);
            var elFooterSettings = $('<div id="rbro_document_properties_footer_settings"></div>');
            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_footer_size">' + this.rb.getLabel('footerSize') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elFooterSize = $('<input id="rbro_document_properties_footer_size">').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this3.documentProperties.getId(), 'rbro_document_properties_footer_size', 'footerSize', elFooterSize.val(), _SetValueCmd2.default.type.text, _this3.rb);
                _this3.rb.executeCommand(cmd);
            });
            utils.setInputPositiveInteger(elFooterSize);
            elFormField.append(elFooterSize);
            elDiv.append(elFormField);
            elFooterSettings.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_footer_display">' + this.rb.getLabel('footerDisplay') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elFooterDisplay = $('<select id="rbro_document_properties_footer_display">\n                <option value="always">' + this.rb.getLabel('headerFooterDisplayAlways') + '</option>\n                <option value="not_on_first_page">' + this.rb.getLabel('headerFooterDisplayNotOnFirstPage') + '</option>\n            </select>').change(function (event) {
                var cmd = new _SetValueCmd2.default(_this3.documentProperties.getId(), 'rbro_document_properties_footer_display', 'footerDisplay', elFooterDisplay.val(), _SetValueCmd2.default.type.select, _this3.rb);
                _this3.rb.executeCommand(cmd);
            });
            elFormField.append(elFooterDisplay);
            elDiv.append(elFormField);
            elFooterSettings.append(elDiv);
            elFooterDiv.append(elFooterSettings);
            panel.append(elFooterDiv);
        }
    }, {
        key: 'show',
        value: function show(data) {
            $('#rbro_document_properties_panel').removeClass('rbroHidden');
            this.updateData(data);
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_document_properties_panel').addClass('rbroHidden');
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {DocumentProperties} data
         */

    }, {
        key: 'updateData',
        value: function updateData(data) {
            if (data !== null) {
                $('#rbro_document_properties_page_format').val(data.getValue('pageFormat'));
                $('#rbro_document_properties_page_width').val(data.getValue('pageWidth'));
                $('#rbro_document_properties_page_height').val(data.getValue('pageHeight'));
                $('#rbro_document_properties_unit').val(data.getValue('unit'));
                $('#rbro_document_properties_orientation').val(data.getValue('orientation'));
                $('#rbro_document_properties_content_height').val(data.getValue('contentHeight'));
                $('#rbro_document_properties_page_margin_top').val(data.getValue('marginTop'));
                $('#rbro_document_properties_page_margin_left').val(data.getValue('marginLeft'));
                $('#rbro_document_properties_page_margin_right').val(data.getValue('marginRight'));
                $('#rbro_document_properties_page_margin_bottom').val(data.getValue('marginBottom'));
                $('#rbro_document_properties_header').prop('checked', data.getValue('header'));
                $('#rbro_document_properties_header_size').val(data.getValue('headerSize'));
                $('#rbro_document_properties_header_display').val(data.getValue('headerDisplay'));
                $('#rbro_document_properties_footer').prop('checked', data.getValue('footer'));
                $('#rbro_document_properties_footer_size').val(data.getValue('footerSize'));
                $('#rbro_document_properties_footer_display').val(data.getValue('footerDisplay'));
                $('#rbro_document_properties_pattern_locale').val(data.getValue('patternLocale'));
                $('#rbro_document_properties_pattern_currency_symbol').val(data.getValue('patternCurrencySymbol'));
                this.updateVisibility(data);
            }
            this.updateErrors();
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation) {
            if (obj instanceof _DocumentProperties2.default && obj === this.rb.getDetailData() && operation === _Command2.default.operation.change) {
                this.updateVisibility(obj);
            }
        }
    }, {
        key: 'updateVisibility',
        value: function updateVisibility(obj) {
            if (obj.getValue('pageFormat') === _DocumentProperties2.default.pageFormat.userDefined) {
                $('#rbro_document_properties_page_size_row').show();
            } else {
                $('#rbro_document_properties_page_size_row').hide();
            }
            if (obj.getValue('header')) {
                $('#rbro_document_properties_header_settings').show();
            } else {
                $('#rbro_document_properties_header_settings').hide();
            }
            if (obj.getValue('footer')) {
                $('#rbro_document_properties_footer_settings').show();
            } else {
                $('#rbro_document_properties_footer_settings').hide();
            }
        }

        /**
         * Updates displayed errors of currently selected data object.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#rbro_document_properties_panel .rbroFormRow').removeClass('rbroError');
            $('#rbro_document_properties_panel .rbroErrorMessage').text('');
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.documentProperties.getErrors()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var error = _step.value;

                    var rowId = 'rbro_document_properties_' + error.field + '_row';
                    var errorId = 'rbro_document_properties_' + error.field + '_error';
                    var errorMsg = this.rb.getLabel(error.msg_key);
                    if (error.info) {
                        errorMsg = errorMsg.replace('${info}', '<span class="rbroErrorMessageInfo">' + error.info + '</span>');
                    }
                    $('#' + rowId).addClass('rbroError');
                    $('#' + errorId).html(errorMsg);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);
    return DocumentPropertiesPanel;
}();

exports.default = DocumentPropertiesPanel;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Empty panel which is shown when no data object is selected.
 * @class
 */
var EmptyDetailPanel = function () {
    function EmptyDetailPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, EmptyDetailPanel);

        this.rootElement = rootElement;
        this.rb = rb;
    }

    (0, _createClass3.default)(EmptyDetailPanel, [{
        key: 'render',
        value: function render() {
            var panel = $('#rbro_detail_panel');
            $('#rbro_detail_panel').append('<div id="rbro_empty_detail_panel" class="rbroEmptyDetailPanel rbroHidden">\n                <div class="rbroLogo"></div>\n            </div>');
        }
    }, {
        key: 'show',
        value: function show(data) {
            $('#rbro_empty_detail_panel').removeClass('rbroHidden');
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_empty_detail_panel').addClass('rbroHidden');
        }
    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation) {}
    }, {
        key: 'updateErrors',
        value: function updateErrors() {}
    }]);
    return EmptyDetailPanel;
}();

exports.default = EmptyDetailPanel;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _PopupWindow = __webpack_require__(10);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all frame properties.
 * @class
 */
var FrameElementPanel = function () {
    function FrameElementPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, FrameElementPanel);

        this.rootElement = rootElement;
        this.rb = rb;
        this.selectedObjId = null;
    }

    (0, _createClass3.default)(FrameElementPanel, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var panel = $('<div id="rbro_frame_element_panel" class="rbroHidden"></div>');

            var elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_frame_element_label">' + this.rb.getLabel('docElementLabel') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elLabel = $('<input id="rbro_frame_element_label">').on('input', function (event) {
                if (_this.rb.getDataObject(_this.getSelectedObjId()) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.getSelectedObjId(), 'rbro_frame_element_label', 'label', elLabel.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elLabel);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_frame_element_position_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_frame_element_position_x">' + this.rb.getLabel('docElementPosition') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPosX = $('<input id="rbro_frame_element_position_x">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('x') !== elPosX.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_position_x', 'x', elPosX.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosX);
            elFormField.append(elPosX);
            var elPosY = $('<input id="rbro_frame_element_position_y">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('y') !== elPosY.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_position_y', 'y', elPosY.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosY);
            elFormField.append(elPosY);
            elFormField.append('<div id="rbro_frame_element_position_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_frame_element_size_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_frame_element_width">' + this.rb.getLabel('docElementSize') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elWidth = $('<input id="rbro_frame_element_width">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('width') !== elWidth.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_width', 'width', elWidth.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elWidth);
            elFormField.append(elWidth);
            var elHeight = $('<input id="rbro_frame_element_height">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('height') !== elHeight.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_height', 'height', elHeight.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elHeight);
            elFormField.append(elHeight);
            elFormField.append('<div id="rbro_frame_element_size_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_frame_element_background_color">' + this.rb.getLabel('styleBackgroundColor') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elBgColorContainer = $('<div class="rbroColorPickerContainer"></div>');
            var elBgColor = $('<input id="rbro_frame_element_background_color">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_background_color', 'backgroundColor', elBgColor.val(), _SetValueCmd2.default.type.color, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBgColorContainer.append(elBgColor);
            elFormField.append(elBgColorContainer);
            elDiv.append(elFormField);
            panel.append(elDiv);
            utils.initColorPicker(elBgColor, this.rb, { allowEmpty: true });

            var elBorderDiv = $('<div id="rbro_frame_element_border_div"></div>');
            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label>' + this.rb.getLabel('styleBorder') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elBorderStyle = $('<div id="rbro_frame_element_border"></div>');
            var elBorderAll = $('<button id="rbro_frame_element_border_all"\n                class="rbroButton rbroActionButton rbroIcon-border-all"\n                type="button" value="borderAll"\n                title="' + this.rb.getLabel('styleBorderAll') + '"></button>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_border_all', 'borderAll', !elBorderAll.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBorderStyle.append(elBorderAll);
            var elBorderLeft = $('<button id="rbro_frame_element_border_left"\n                class="rbroButton rbroActionButton rbroIcon-border-left"\n                type="button" value="borderLeft"\n                title="' + this.rb.getLabel('orientationLeft') + '"></button>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_border_left', 'borderLeft', !elBorderLeft.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBorderStyle.append(elBorderLeft);
            var elBorderTop = $('<button id="rbro_frame_element_border_top"\n                class="rbroButton rbroActionButton rbroIcon-border-top"\n                type="button" value="borderTop"\n                title="' + this.rb.getLabel('orientationTop') + '"></button>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_border_top', 'borderTop', !elBorderTop.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBorderStyle.append(elBorderTop);
            var elBorderRight = $('<button id="rbro_frame_element_border_right"\n                class="rbroButton rbroActionButton rbroIcon-border-right"\n                type="button" value="borderRight"\n                title="' + this.rb.getLabel('orientationRight') + '"></button>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_border_right', 'borderRight', !elBorderRight.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBorderStyle.append(elBorderRight);
            var elBorderBottom = $('<button id="rbro_frame_element_border_bottom"\n                class="rbroButton rbroActionButton rbroIcon-border-bottom"\n                type="button" value="borderBottom"\n                title="' + this.rb.getLabel('orientationBottom') + '"></button>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_border_bottom', 'borderBottom', !elBorderBottom.hasClass('rbroButtonActive'), _SetValueCmd2.default.type.button, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBorderStyle.append(elBorderBottom);
            elFormField.append(elBorderStyle);
            elDiv.append(elFormField);
            elBorderDiv.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_frame_element_border_color">' + this.rb.getLabel('styleBorderColor') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elBorderColorContainer = $('<div class="rbroColorPickerContainer"></div>');
            var elBorderColor = $('<input id="rbro_frame_element_border_color">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_border_color', 'borderColor', elBorderColor.val(), _SetValueCmd2.default.type.color, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBorderColorContainer.append(elBorderColor);
            elFormField.append(elBorderColorContainer);
            elDiv.append(elFormField);
            elBorderDiv.append(elDiv);
            utils.initColorPicker(elBorderColor, this.rb);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_frame_element_border_width">' + this.rb.getLabel('styleBorderWidth') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elBorderWidth = $('<input id="rbro_frame_element_border_width">').on('input', function (event) {
                if (_this.rb.getDataObject(_this.getSelectedObjId()) !== null) {
                    if (elBorderWidth.val().trim() !== '') {
                        var cmd = new _SetValueCmd2.default(_this.getSelectedObjId(), 'rbro_frame_element_border_width', 'borderWidth', elBorderWidth.val(), _SetValueCmd2.default.type.text, _this.rb);
                        _this.rb.executeCommand(cmd);
                    } else {
                        elBorderWidth.val(_this.rb.getDetailData().getValue('borderWidth'));
                    }
                }
            });
            elFormField.append(elBorderWidth);
            elDiv.append(elFormField);
            elBorderDiv.append(elDiv);
            utils.setInputPositiveInteger(elBorderWidth);
            panel.append(elBorderDiv);

            var elPrintHeader = $('<div class="rbroPanelSectionHeader"></div>');
            var elPrintHeaderIcon = $('<span id="rbro_frame_element_print_header_icon" class="rbroIcon-plus"></span>');
            elDiv = $('<div id="rbro_frame_element_print_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                $('#rbro_frame_element_print_header').toggleClass('rbroPanelSectionHeaderOpen');
                $('#rbro_frame_element_print_section').toggleClass('rbroHidden');
                elPrintHeaderIcon.toggleClass('rbroIcon-plus');
                elPrintHeaderIcon.toggleClass('rbroIcon-minus');
                if (elPrintHeaderIcon.hasClass('rbroIcon-minus')) {
                    $('#rbro_detail_panel').scrollTop(elPrintHeader.position().top);
                }
                autosize.update($('#rbro_frame_element_print_if'));
            });
            elPrintHeader.append(elPrintHeaderIcon);
            elPrintHeader.append('<span>' + this.rb.getLabel('docElementPrintSettings') + '</span>');
            elDiv.append(elPrintHeader);
            panel.append(elDiv);

            var elPrintSectionDiv = $('<div id="rbro_frame_element_print_section" class="rbroHidden"></div>');
            elDiv = $('<div id="rbro_frame_element_print_if_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_frame_element_print_if">' + this.rb.getLabel('docElementPrintIf') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPrintIf = $('<textarea id="rbro_frame_element_print_if" rows="1"></textarea>').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_print_if', 'printIf', elPrintIf.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            autosize(elPrintIf);
            elFormField.append(elPrintIf);
            var elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj), _this.selectedObjId, 'rbro_frame_element_print_if', 'parameter', _PopupWindow2.default.type.parameterAppend);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_frame_element_print_if_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_frame_element_remove_empty_element">' + this.rb.getLabel('docElementRemoveEmptyElement') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elRemoveEmptyElement = $('<input id="rbro_frame_element_remove_empty_element" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_remove_empty_element', 'removeEmptyElement', elRemoveEmptyElement.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elRemoveEmptyElement);
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_frame_element_shrink_to_content_height">' + this.rb.getLabel('frameElementShrinkToContentHeight') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elShrinkToContentHeight = $('<input id="rbro_frame_element_shrink_to_content_height" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_shrink_to_content_height', 'shrinkToContentHeight', elShrinkToContentHeight.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elShrinkToContentHeight);
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);
            panel.append(elPrintSectionDiv);

            if (this.rb.getProperty('enableSpreadsheet')) {
                var elSpreadsheetHeader = $('<div class="rbroPanelSectionHeader"></div>');
                var elSpreadsheetHeaderIcon = $('<span id="rbro_frame_element_spreadsheet_header_icon" class="rbroIcon-plus"></span>');
                elDiv = $('<div id="rbro_frame_element_spreadsheet_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        $('#rbro_frame_element_spreadsheet_header').toggleClass('rbroPanelSectionHeaderOpen');
                        $('#rbro_frame_element_spreadsheet_section').toggleClass('rbroHidden');
                        elSpreadsheetHeaderIcon.toggleClass('rbroIcon-plus');
                        elSpreadsheetHeaderIcon.toggleClass('rbroIcon-minus');
                        if (elSpreadsheetHeaderIcon.hasClass('rbroIcon-minus')) {
                            $('#rbro_detail_panel').scrollTop($('#rbro_detail_panel').scrollTop() + elSpreadsheetHeader.position().top);
                        }
                    }
                });
                elSpreadsheetHeader.append(elSpreadsheetHeaderIcon);
                elSpreadsheetHeader.append('<span>' + this.rb.getLabel('docElementSpreadsheet') + '</span>');
                elDiv.append(elSpreadsheetHeader);
                panel.append(elDiv);

                var elSpreadsheetSectionDiv = $('<div id="rbro_frame_element_spreadsheet_section" class="rbroHidden"></div>');
                elDiv = $('<div id="rbro_frame_element_spreadsheet_hide_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_frame_element_spreadsheet_hide">' + this.rb.getLabel('docElementSpreadsheetHide') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetHide = $('<input id="rbro_frame_element_spreadsheet_hide" type="checkbox">').change(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_spreadsheet_hide', 'spreadsheet_hide', elSpreadsheetHide.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elSpreadsheetHide);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_frame_element_spreadsheet_column_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_frame_element_spreadsheet_column">' + this.rb.getLabel('docElementSpreadsheetColumn') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetColumn = $('<input id="rbro_frame_element_spreadsheet_column">').on('input', function (event) {
                    var obj = _this.rb.getDataObject(_this.selectedObjId);
                    if (obj !== null && obj.getValue('spreadsheet_column') !== elSpreadsheetColumn.val()) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_spreadsheet_column', 'spreadsheet_column', elSpreadsheetColumn.val(), _SetValueCmd2.default.type.text, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                utils.setInputPositiveInteger(elSpreadsheetColumn);
                elFormField.append(elSpreadsheetColumn);
                elFormField.append('<div id="rbro_frame_element_spreadsheet_column_error" class="rbroErrorMessage"></div>');
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_frame_element_spreadsheet_add_empty_row_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_frame_element_spreadsheet_add_empty_row">' + this.rb.getLabel('docElementSpreadsheetAddEmptyRow') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetAddEmptyRow = $('<input id="rbro_frame_element_spreadsheet_add_empty_row" type="checkbox">').change(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_frame_element_spreadsheet_add_empty_row', 'spreadsheet_addEmptyRow', elSpreadsheetAddEmptyRow.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elSpreadsheetAddEmptyRow);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);
                panel.append(elSpreadsheetSectionDiv);
            }

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'updateAutosizeInputs',
        value: function updateAutosizeInputs() {
            autosize.update($('#rbro_frame_element_print_if'));
        }
    }, {
        key: 'show',
        value: function show(data) {
            $('#rbro_frame_element_panel').removeClass('rbroHidden');
            this.updateData(data);
            this.updateAutosizeInputs();
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_frame_element_panel').addClass('rbroHidden');
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {LineElement} data
         */

    }, {
        key: 'updateData',
        value: function updateData(data) {
            if (data !== null) {
                $('#rbro_frame_element_label').prop('disabled', false);
                $('#rbro_frame_element_position_x').prop('disabled', false);
                $('#rbro_frame_element_position_y').prop('disabled', false);
                $('#rbro_frame_element_width').prop('disabled', false);
                $('#rbro_frame_element_height').prop('disabled', false);
                $('#rbro_frame_element_background_color').spectrum('enable');
                $('#rbro_frame_element_border_all').prop('disabled', false);
                $('#rbro_frame_element_border_left').prop('disabled', false);
                $('#rbro_frame_element_border_top').prop('disabled', false);
                $('#rbro_frame_element_border_right').prop('disabled', false);
                $('#rbro_frame_element_border_bottom').prop('disabled', false);
                $('#rbro_frame_element_border_color').spectrum('enable');
                $('#rbro_frame_element_border_width').prop('disabled', false);
                $('#rbro_frame_element_print_if').prop('disabled', false);
                $('#rbro_frame_element_remove_empty_element').prop('disabled', false);
                $('#rbro_frame_element_shrink_to_content_height').prop('disabled', false);
                $('#rbro_frame_element_spreadsheet_hide').prop('disabled', false);
                $('#rbro_frame_element_spreadsheet_column').prop('disabled', false);
                $('#rbro_frame_element_spreadsheet_add_empty_row').prop('disabled', false);

                $('#rbro_frame_element_label').val(data.getValue('label'));
                $('#rbro_frame_element_position_x').val(data.getValue('x'));
                $('#rbro_frame_element_position_y').val(data.getValue('y'));
                $('#rbro_frame_element_width').val(data.getValue('width'));
                $('#rbro_frame_element_height').val(data.getValue('height'));
                $('#rbro_frame_element_background_color').spectrum("set", data.getValue('backgroundColor'));
                if (data.getValue('borderAll')) {
                    $('#rbro_frame_element_border_all').addClass('rbroButtonActive');
                } else {
                    $('#rbro_frame_element_border_all').removeClass('rbroButtonActive');
                }
                if (data.getValue('borderLeft')) {
                    $('#rbro_frame_element_border_left').addClass('rbroButtonActive');
                } else {
                    $('#rbro_frame_element_border_left').removeClass('rbroButtonActive');
                }
                if (data.getValue('borderTop')) {
                    $('#rbro_frame_element_border_top').addClass('rbroButtonActive');
                } else {
                    $('#rbro_frame_element_border_top').removeClass('rbroButtonActive');
                }
                if (data.getValue('borderRight')) {
                    $('#rbro_frame_element_border_right').addClass('rbroButtonActive');
                } else {
                    $('#rbro_frame_element_border_right').removeClass('rbroButtonActive');
                }
                if (data.getValue('borderBottom')) {
                    $('#rbro_frame_element_border_bottom').addClass('rbroButtonActive');
                } else {
                    $('#rbro_frame_element_border_bottom').removeClass('rbroButtonActive');
                }
                $('#rbro_frame_element_border_color').spectrum("set", data.getValue('borderColor'));
                $('#rbro_frame_element_border_width').val(data.getValue('borderWidth'));
                $('#rbro_frame_element_print_if').val(data.getValue('printIf'));
                $('#rbro_frame_element_remove_empty_element').prop('checked', data.getValue('removeEmptyElement'));
                $('#rbro_frame_element_shrink_to_content_height').prop('checked', data.getValue('shrinkToContentHeight'));
                $('#rbro_frame_element_spreadsheet_hide').prop('checked', data.getValue('spreadsheet_hide'));
                $('#rbro_frame_element_spreadsheet_column').val(data.getValue('spreadsheet_column'));
                $('#rbro_frame_element_spreadsheet_add_empty_row').prop('checked', data.getValue('spreadsheet_addEmptyRow'));
                this.selectedObjId = data.getId();
            } else {
                $('#rbro_frame_element_label').prop('disabled', true);
                $('#rbro_frame_element_position_x').prop('disabled', true);
                $('#rbro_frame_element_position_y').prop('disabled', true);
                $('#rbro_frame_element_width').prop('disabled', true);
                $('#rbro_frame_element_height').prop('disabled', true);
                $('#rbro_frame_element_background_color').spectrum('disable');
                $('#rbro_frame_element_border_all').prop('disabled', true);
                $('#rbro_frame_element_border_left').prop('disabled', true);
                $('#rbro_frame_element_border_top').prop('disabled', true);
                $('#rbro_frame_element_border_right').prop('disabled', true);
                $('#rbro_frame_element_border_bottom').prop('disabled', true);
                $('#rbro_frame_element_border_color').spectrum('disable');
                $('#rbro_frame_element_border_width').prop('disabled', true);
                $('#rbro_frame_element_print_if').prop('disabled', true);
                $('#rbro_frame_element_remove_empty_element').prop('disabled', true);
                $('#rbro_frame_element_shrink_to_content_height').prop('disabled', true);
                $('#rbro_frame_element_spreadsheet_hide').prop('disabled', true);
                $('#rbro_frame_element_spreadsheet_column').prop('disabled', true);
                $('#rbro_frame_element_spreadsheet_add_empty_row').prop('disabled', true);
            }

            this.updateAutosizeInputs();
            this.updateErrors();
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation) {}

        /**
         * Updates displayed errors of currently selected data object.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#rbro_frame_element_panel .rbroFormRow').removeClass('rbroError');
            $('#rbro_frame_element_panel .rbroPanelSection').removeClass('rbroError');
            $('#rbro_frame_element_panel .rbroErrorMessage').text('');
            var selectedObj = this.rb.getDataObject(this.selectedObjId);
            if (selectedObj !== null) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(selectedObj.getErrors()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var error = _step.value;

                        var rowId = 'rbro_frame_element_' + error.field + '_row';
                        var errorId = 'rbro_frame_element_' + error.field + '_error';
                        var errorMsg = this.rb.getLabel(error.msg_key);
                        if (error.info) {
                            errorMsg = errorMsg.replace('${info}', '<span class="rbroErrorMessageInfo">' + error.info + '</span>');
                        }
                        $('#' + rowId).addClass('rbroError');
                        $('#' + errorId).html(errorMsg);
                        if (error.field === 'print_if') {
                            $('#rbro_frame_element_print_header').addClass('rbroError');
                            if (!$('#rbro_frame_element_print_header').hasClass('rbroPanelSectionHeaderOpen')) {
                                $('#rbro_frame_element_print_header').trigger('click');
                            }
                        } else if (error.field === 'spreadsheet_column') {
                            $('#rbro_frame_element_spreadsheet_header').addClass('rbroError');
                            if (!$('#rbro_frame_element_spreadsheet_header').hasClass('rbroPanelSectionHeaderOpen')) {
                                $('#rbro_frame_element_spreadsheet_header').trigger('click');
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getSelectedObjId',
        value: function getSelectedObjId() {
            return this.selectedObjId;
        }
    }]);
    return FrameElementPanel;
}();

exports.default = FrameElementPanel;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _StylePanel = __webpack_require__(31);

var _StylePanel2 = _interopRequireDefault(_StylePanel);

var _CommandGroupCmd = __webpack_require__(20);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Parameter = __webpack_require__(16);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _PopupWindow = __webpack_require__(10);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all image properties.
 * @class
 */
var ImageElementPanel = function () {
    function ImageElementPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, ImageElementPanel);

        this.rootElement = rootElement;
        this.rb = rb;
        this.selectedObjId = null;
    }

    (0, _createClass3.default)(ImageElementPanel, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var panel = $('<div id="rbro_image_element_panel" class="rbroHidden"></div>');
            var elDiv = $('<div id="rbro_image_element_source_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_image_element_source">' + this.rb.getLabel('imageElementSource') + ':</label>');
            var elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elSource = $('<textarea id="rbro_image_element_source" rows="1"></textarea>').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_image_element_source', 'source', elSource.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            autosize(elSource);
            elFormField.append(elSource);
            var elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj, [_Parameter2.default.type.image, _Parameter2.default.type.string]), _this.selectedObjId, 'rbro_image_element_source', 'parameter', _PopupWindow2.default.type.parameterSet);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_image_element_source_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_image_element_image_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_image_element_image">' + this.rb.getLabel('imageElementImage') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elImage = $('<input id="rbro_image_element_image" type="file">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var files = event.target.files;
                    if (files && files[0]) {
                        var fileReader = new FileReader();
                        var rb = _this.rb;
                        var fileName = files[0].name;
                        var objId = _this.selectedObjId;
                        fileReader.onload = function (e) {
                            var cmdGroup = new _CommandGroupCmd2.default('Load image', this.rb);
                            var cmd = new _SetValueCmd2.default(objId, 'rbro_image_element_image', 'image', e.target.result, _SetValueCmd2.default.type.file, rb);
                            cmdGroup.addCommand(cmd);
                            cmd = new _SetValueCmd2.default(objId, 'rbro_image_element_image_filename', 'imageFilename', fileName, _SetValueCmd2.default.type.filename, rb);
                            cmdGroup.addCommand(cmd);
                            rb.executeCommand(cmdGroup);
                        };
                        fileReader.onerror = function (e) {
                            alert(this.rb.getLabel('imageElementLoadErrorMsg'));
                        };
                        fileReader.readAsDataURL(files[0]);
                    }
                }
            });
            elFormField.append(elImage);
            var elFilenameDiv = $('<div class="rbroSplit rbroHidden" id="rbro_image_element_image_filename_container"></div>');
            elFilenameDiv.append($('<div id="rbro_image_element_image_filename"></div>'));
            elFilenameDiv.append($('<div id="rbro_image_element_image_filename_clear" class="rbroIcon-cancel rbroButton rbroDeleteButton rbroRoundButton"></div>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    elImage.val('');
                    var cmdGroup = new _CommandGroupCmd2.default('Clear image', _this.rb);
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_image_element_image', 'image', '', _SetValueCmd2.default.type.file, _this.rb);
                    cmdGroup.addCommand(cmd);
                    cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_image_element_image_filename', 'imageFilename', '', _SetValueCmd2.default.type.filename, _this.rb);
                    cmdGroup.addCommand(cmd);
                    _this.rb.executeCommand(cmdGroup);
                }
            }));
            elFormField.append(elFilenameDiv);
            elFormField.append('<div id="rbro_image_element_image_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_image_element_position_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_image_element_position">' + this.rb.getLabel('docElementPosition') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPosX = $('<input id="rbro_image_element_position_x">').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var val = utils.checkInputDecimal(elPosX.val(), 0, 1000);
                    if (val !== elPosX.val()) {
                        elPosX.val(val);
                    }
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_image_element_position_x', 'x', val, _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosX);
            elFormField.append(elPosX);
            var elPosY = $('<input id="rbro_image_element_position_y">').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var val = utils.checkInputDecimal(elPosY.val(), 0, 1000);
                    if (val !== elPosY.val()) {
                        elPosY.val(val);
                    }
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_image_element_position_y', 'y', val, _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosY);
            elFormField.append(elPosY);
            elFormField.append('<div id="rbro_image_element_position_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_image_element_size_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_image_element_size">' + this.rb.getLabel('docElementSize') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elWidth = $('<input id="rbro_image_element_width">').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var val = utils.checkInputDecimal(elWidth.val(), 10, 1000);
                    if (val !== elWidth.val()) {
                        elWidth.val(val);
                    }
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_image_element_width', 'width', val, _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elWidth);
            elFormField.append(elWidth);
            var elHeight = $('<input id="rbro_image_element_height">').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var val = utils.checkInputDecimal(elHeight.val(), 10, 1000);
                    if (val !== elHeight.val()) {
                        elHeight.val(val);
                    }
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_image_element_height', 'height', val, _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elHeight);
            elFormField.append(elHeight);
            elFormField.append('<div id="rbro_image_element_size_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            var elStyleHeader = $('<div class="rbroPanelSectionHeader"></div>');
            var elStyleHeaderIcon = $('<div id="rbro_image_element_style_header_icon" class="rbroPanelSectionHeaderOpen rbroIcon-minus"></div>');
            elDiv = $('<div id="rbro_image_element_style_header" class="rbroFormRow rbroPanelSection rbroPanelSectionHeaderOpen"></div>').click(function (event) {
                $('#rbro_image_element_style_header').toggleClass('rbroPanelSectionHeaderOpen');
                $('#rbro_image_element_style_section').toggleClass('rbroHidden');
                elStyleHeaderIcon.toggleClass('rbroIcon-plus');
                elStyleHeaderIcon.toggleClass('rbroIcon-minus');
                if (elStyleHeaderIcon.hasClass('rbroIcon-minus')) {
                    $('#rbro_detail_panel').scrollTop(elStyleHeader.position().top);
                }
            });
            elStyleHeader.append(elStyleHeaderIcon);
            elStyleHeader.append('<span>' + this.rb.getLabel('docElementStyle') + '</span>');
            elDiv.append(elStyleHeader);
            panel.append(elDiv);

            var elStyleSectionDiv = $('<div id="rbro_image_element_style_section"></div>');
            _StylePanel2.default.renderStyle(elStyleSectionDiv, 'image_element_', '', _DocElement2.default.type.image, this, this.rb);
            panel.append(elStyleSectionDiv);

            var elPrintHeader = $('<div class="rbroPanelSectionHeader"></div>');
            var elPrintHeaderIcon = $('<span id="rbro_image_element_print_header_icon" class="rbroIcon-plus"></span>');
            elDiv = $('<div id="rbro_image_element_print_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                $('#rbro_image_element_print_header').toggleClass('rbroPanelSectionHeaderOpen');
                $('#rbro_image_element_print_section').toggleClass('rbroHidden');
                elPrintHeaderIcon.toggleClass('rbroIcon-plus');
                elPrintHeaderIcon.toggleClass('rbroIcon-minus');
                if (elPrintHeaderIcon.hasClass('rbroIcon-minus')) {
                    $('#rbro_detail_panel').scrollTop(elPrintHeader.position().top);
                }
                autosize.update($('#rbro_image_element_print_if'));
            });
            elPrintHeader.append(elPrintHeaderIcon);
            elPrintHeader.append('<span>' + this.rb.getLabel('docElementPrintSettings') + '</span>');
            elDiv.append(elPrintHeader);
            panel.append(elDiv);

            var elPrintSectionDiv = $('<div id="rbro_image_element_print_section" class="rbroHidden"></div>');
            elDiv = $('<div id="rbro_image_element_print_if_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_image_element_print_if">' + this.rb.getLabel('docElementPrintIf') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPrintIf = $('<textarea id="rbro_image_element_print_if" rows="1"></textarea>').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_image_element_print_if', 'printIf', elPrintIf.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            autosize(elPrintIf);
            elFormField.append(elPrintIf);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj), _this.selectedObjId, 'rbro_image_element_print_if', 'parameter', _PopupWindow2.default.type.parameterAppend);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_image_element_print_if_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_image_element_remove_empty_element">' + this.rb.getLabel('docElementRemoveEmptyElement') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elRemoveEmptyElement = $('<input id="rbro_image_element_remove_empty_element" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_image_element_remove_empty_element', 'removeEmptyElement', elRemoveEmptyElement.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elRemoveEmptyElement);
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);
            panel.append(elPrintSectionDiv);

            if (this.rb.getProperty('enableSpreadsheet')) {
                var elSpreadsheetHeader = $('<div class="rbroPanelSectionHeader"></div>');
                var elSpreadsheetHeaderIcon = $('<span id="rbro_image_element_spreadsheet_header_icon" class="rbroIcon-plus"></span>');
                elDiv = $('<div id="rbro_image_element_spreadsheet_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        $('#rbro_image_element_spreadsheet_header').toggleClass('rbroPanelSectionHeaderOpen');
                        $('#rbro_image_element_spreadsheet_section').toggleClass('rbroHidden');
                        elSpreadsheetHeaderIcon.toggleClass('rbroIcon-plus');
                        elSpreadsheetHeaderIcon.toggleClass('rbroIcon-minus');
                        if (elSpreadsheetHeaderIcon.hasClass('rbroIcon-minus')) {
                            $('#rbro_detail_panel').scrollTop($('#rbro_detail_panel').scrollTop() + elSpreadsheetHeader.position().top);
                        }
                    }
                });
                elSpreadsheetHeader.append(elSpreadsheetHeaderIcon);
                elSpreadsheetHeader.append('<span>' + this.rb.getLabel('docElementSpreadsheet') + '</span>');
                elDiv.append(elSpreadsheetHeader);
                panel.append(elDiv);

                var elSpreadsheetSectionDiv = $('<div id="rbro_image_element_spreadsheet_section" class="rbroHidden"></div>');
                elDiv = $('<div id="rbro_image_element_spreadsheet_hide_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_image_element_spreadsheet_hide">' + this.rb.getLabel('docElementSpreadsheetHide') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetHide = $('<input id="rbro_image_element_spreadsheet_hide" type="checkbox">').change(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_image_element_spreadsheet_hide', 'spreadsheet_hide', elSpreadsheetHide.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elSpreadsheetHide);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_image_element_spreadsheet_column_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_image_element_spreadsheet_column">' + this.rb.getLabel('docElementSpreadsheetColumn') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetColumn = $('<input id="rbro_image_element_spreadsheet_column">').on('input', function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_image_element_spreadsheet_column', 'spreadsheet_column', elSpreadsheetColumn.val(), _SetValueCmd2.default.type.text, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                utils.setInputPositiveInteger(elSpreadsheetColumn);
                elFormField.append(elSpreadsheetColumn);
                elFormField.append('<div id="rbro_image_element_spreadsheet_column_error" class="rbroErrorMessage"></div>');
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_image_element_spreadsheet_add_empty_row_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_image_element_spreadsheet_add_empty_row">' + this.rb.getLabel('docElementSpreadsheetAddEmptyRow') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetAddEmptyRow = $('<input id="rbro_image_element_spreadsheet_add_empty_row" type="checkbox">').change(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_image_element_spreadsheet_add_empty_row', 'spreadsheet_addEmptyRow', elSpreadsheetAddEmptyRow.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elSpreadsheetAddEmptyRow);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);
                panel.append(elSpreadsheetSectionDiv);
            }

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'updateAutosizeInputs',
        value: function updateAutosizeInputs() {
            autosize.update($('#rbro_image_element_source'));
            autosize.update($('#rbro_image_element_print_if'));
        }
    }, {
        key: 'show',
        value: function show(data) {
            $('#rbro_image_element_panel').removeClass('rbroHidden');
            this.updateData(data);
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_image_element_panel').addClass('rbroHidden');
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {ImageElement} data
         */

    }, {
        key: 'updateData',
        value: function updateData(data) {
            if (data !== null) {
                $('#rbro_image_element_source').prop('disabled', false);
                $('#rbro_image_element_image').prop('disabled', false);
                $('#rbro_image_element_position_x').prop('disabled', false);
                $('#rbro_image_element_position_y').prop('disabled', false);
                $('#rbro_image_element_width').prop('disabled', false);
                $('#rbro_image_element_height').prop('disabled', false);
                $('#rbro_image_element_print_if').prop('disabled', false);
                $('#rbro_image_element_remove_empty_element').prop('disabled', false);
                $('#rbro_image_element_spreadsheet_hide').prop('disabled', false);
                $('#rbro_image_element_spreadsheet_column').prop('disabled', false);
                $('#rbro_image_element_spreadsheet_add_empty_row').prop('disabled', false);

                $('#rbro_image_element_source').val(data.getValue('source'));
                $('#rbro_image_element_image_filename').text(data.getValue('imageFilename'));
                if (data.getValue('imageFilename') !== '') {
                    $('#rbro_image_element_image_filename_container').removeClass('rbroHidden');
                } else {
                    $('#rbro_image_element_image_filename_container').addClass('rbroHidden');
                }
                $('#rbro_image_element_position_x').val(data.getValue('x'));
                $('#rbro_image_element_position_y').val(data.getValue('y'));
                $('#rbro_image_element_width').val(data.getValue('width'));
                $('#rbro_image_element_height').val(data.getValue('height'));
                $('#rbro_image_element_print_if').val(data.getValue('printIf'));
                $('#rbro_image_element_remove_empty_element').prop('checked', data.getValue('removeEmptyElement'));
                $('#rbro_image_element_spreadsheet_hide').prop('checked', data.getValue('spreadsheet_hide'));
                $('#rbro_image_element_spreadsheet_column').val(data.getValue('spreadsheet_column'));
                $('#rbro_image_element_spreadsheet_add_empty_row').prop('checked', data.getValue('spreadsheet_addEmptyRow'));
                this.selectedObjId = data.getId();
            } else {
                $('#rbro_image_element_source').prop('disabled', true);
                $('#rbro_image_element_image_filename').text('');
                $('#rbro_image_element_image_filename_container').addClass('rbroHidden');
                $('#rbro_image_element_image').prop('disabled', true);
                $('#rbro_image_element_position_x').prop('disabled', true);
                $('#rbro_image_element_position_y').prop('disabled', true);
                $('#rbro_image_element_width').prop('disabled', true);
                $('#rbro_image_element_height').prop('disabled', true);
                $('#rbro_image_element_print_if').prop('disabled', true);
                $('#rbro_image_element_remove_empty_element').prop('disabled', true);
                $('#rbro_image_element_spreadsheet_hide').prop('disabled', true);
                $('#rbro_image_element_spreadsheet_column').prop('disabled', true);
                $('#rbro_image_element_spreadsheet_add_empty_row').prop('disabled', true);
            }
            $('#rbro_image_element_image').val('');
            _StylePanel2.default.updateStyleData(data, 'image_element_', '', _DocElement2.default.type.image);

            this.updateAutosizeInputs();
            this.updateErrors();
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation) {}

        /**
         * Updates displayed errors of currently selected data object.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#rbro_image_element_panel .rbroFormRow').removeClass('rbroError');
            $('#rbro_image_element_panel .rbroPanelSection').removeClass('rbroError');
            $('#rbro_image_element_panel .rbroErrorMessage').text('');
            var selectedObj = this.rb.getDataObject(this.selectedObjId);
            if (selectedObj !== null) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(selectedObj.getErrors()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var error = _step.value;

                        var rowId = 'rbro_image_element_' + error.field + '_row';
                        var errorId = 'rbro_image_element_' + error.field + '_error';
                        var errorMsg = this.rb.getLabel(error.msg_key);
                        if (error.info) {
                            errorMsg = errorMsg.replace('${info}', '<span class="rbroErrorMessageInfo">' + error.info + '</span>');
                        }
                        $('#' + rowId).addClass('rbroError');
                        $('#' + errorId).html(errorMsg);
                        if (error.field === 'print_if') {
                            $('#rbro_image_element_print_header').addClass('rbroError');
                            if (!$('#rbro_image_element_print_header').hasClass('rbroPanelSectionHeaderOpen')) {
                                $('#rbro_image_element_print_header').trigger('click');
                            }
                        } else if (error.field === 'spreadsheet_column') {
                            $('#rbro_image_element_spreadsheet_header').addClass('rbroError');
                            if (!$('#rbro_image_element_spreadsheet_header').hasClass('rbroPanelSectionHeaderOpen')) {
                                $('#rbro_image_element_spreadsheet_header').trigger('click');
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getSelectedObjId',
        value: function getSelectedObjId() {
            return this.selectedObjId;
        }
    }]);
    return ImageElementPanel;
}();

exports.default = ImageElementPanel;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _PopupWindow = __webpack_require__(10);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all line properties.
 * @class
 */
var LineElementPanel = function () {
    function LineElementPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, LineElementPanel);

        this.rootElement = rootElement;
        this.rb = rb;
        this.selectedObjId = null;
    }

    (0, _createClass3.default)(LineElementPanel, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var panel = $('<div id="rbro_line_element_panel" class="rbroHidden"></div>');
            var elDiv = $('<div id="rbro_line_element_position_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_line_element_position">' + this.rb.getLabel('docElementPosition') + ':</label>');
            var elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPosX = $('<input id="rbro_line_element_position_x">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('x') !== elPosX.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_line_element_position_x', 'x', elPosX.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosX);
            elFormField.append(elPosX);
            var elPosY = $('<input id="rbro_line_element_position_y">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('y') !== elPosY.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_line_element_position_y', 'y', elPosY.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosY);
            elFormField.append(elPosY);
            elFormField.append('<div id="rbro_line_element_position_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_line_element_size_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_line_element_size">' + this.rb.getLabel('docElementSize') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elWidth = $('<input id="rbro_line_element_width">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('width') !== elWidth.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_line_element_width', 'width', elWidth.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elWidth);
            elFormField.append(elWidth);
            var elHeight = $('<input id="rbro_line_element_height">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('height') !== elHeight.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_line_element_height', 'height', elHeight.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elHeight);
            elFormField.append(elHeight);
            elFormField.append('<div id="rbro_line_element_size_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_line_element_color">' + this.rb.getLabel('docElementColor') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elColorContainer = $('<div class="rbroColorPickerContainer"></div>');
            var elColor = $('<input id="rbro_line_element_color">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_line_element_color', 'color', elColor.val(), _SetValueCmd2.default.type.color, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elColorContainer.append(elColor);
            elFormField.append(elColorContainer);
            elDiv.append(elFormField);
            panel.append(elDiv);
            utils.initColorPicker(elColor, this.rb);

            elDiv = $('<div id="rbro_line_element_print_if_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_line_element_print_if">' + this.rb.getLabel('docElementPrintIf') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPrintIf = $('<textarea id="rbro_line_element_print_if" rows="1"></textarea>').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('printIf') !== elPrintIf.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_line_element_print_if', 'printIf', elPrintIf.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            autosize(elPrintIf);
            elFormField.append(elPrintIf);
            var elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj), _this.selectedObjId, 'rbro_line_element_print_if', 'parameter', _PopupWindow2.default.type.parameterAppend);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_line_element_print_if_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'updateAutosizeInputs',
        value: function updateAutosizeInputs() {
            autosize.update($('#rbro_line_element_print_if'));
        }
    }, {
        key: 'show',
        value: function show(data) {
            $('#rbro_line_element_panel').removeClass('rbroHidden');
            this.updateData(data);
            this.updateAutosizeInputs();
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_line_element_panel').addClass('rbroHidden');
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {LineElement} data
         */

    }, {
        key: 'updateData',
        value: function updateData(data) {
            if (data !== null) {
                $('#rbro_line_element_position_x').prop('disabled', false);
                $('#rbro_line_element_position_y').prop('disabled', false);
                $('#rbro_line_element_width').prop('disabled', false);
                $('#rbro_line_element_height').prop('disabled', false);
                $('#rbro_line_element_color').spectrum('enable');
                $('#rbro_line_element_print_if').prop('disabled', false);

                $('#rbro_line_element_position_x').val(data.getValue('x'));
                $('#rbro_line_element_position_y').val(data.getValue('y'));
                $('#rbro_line_element_width').val(data.getValue('width'));
                $('#rbro_line_element_height').val(data.getValue('height'));
                $('#rbro_line_element_color').spectrum("set", data.getValue('color'));
                $('#rbro_line_element_print_if').val(data.getValue('printIf'));
                this.selectedObjId = data.getId();
            } else {
                $('#rbro_line_element_position_x').prop('disabled', true);
                $('#rbro_line_element_position_y').prop('disabled', true);
                $('#rbro_line_element_width').prop('disabled', true);
                $('#rbro_line_element_height').prop('disabled', true);
                $('#rbro_line_element_color').spectrum('disable');
                $('#rbro_line_element_print_if').prop('disabled', true);
            }

            this.updateAutosizeInputs();
            this.updateErrors();
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation) {}

        /**
         * Updates displayed errors of currently selected data object.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#rbro_line_element_panel .rbroFormRow').removeClass('rbroError');
            $('#rbro_line_element_panel .rbroPanelSection').removeClass('rbroError');
            $('#rbro_line_element_panel .rbroErrorMessage').text('');
            var selectedObj = this.rb.getDataObject(this.selectedObjId);
            if (selectedObj !== null) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(selectedObj.getErrors()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var error = _step.value;

                        var rowId = 'rbro_line_element_' + error.field + '_row';
                        var errorId = 'rbro_line_element_' + error.field + '_error';
                        var errorMsg = this.rb.getLabel(error.msg_key);
                        if (error.info) {
                            errorMsg = errorMsg.replace('${info}', '<span class="rbroErrorMessageInfo">' + error.info + '</span>');
                        }
                        $('#' + rowId).addClass('rbroError');
                        $('#' + errorId).html(errorMsg);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getSelectedObjId',
        value: function getSelectedObjId() {
            return this.selectedObjId;
        }
    }]);
    return LineElementPanel;
}();

exports.default = LineElementPanel;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all page break properties.
 * @class
 */
var PageBreakElementPanel = function () {
    function PageBreakElementPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, PageBreakElementPanel);

        this.rootElement = rootElement;
        this.rb = rb;
        this.selectedObjId = null;
    }

    (0, _createClass3.default)(PageBreakElementPanel, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var panel = $('<div id="rbro_page_break_element_panel" class="rbroHidden"></div>');
            var elDiv = $('<div id="rbro_page_break_element_position_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_page_break_element_position_y">' + this.rb.getLabel('docElementPositionY') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elPosY = $('<input id="rbro_page_break_element_position_y">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_page_break_element_position_y', 'y', elPosY.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosY);
            elFormField.append(elPosY);
            elDiv.append(elFormField);
            panel.append(elDiv);

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'show',
        value: function show(data) {
            $('#rbro_page_break_element_panel').removeClass('rbroHidden');
            this.updateData(data);
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_page_break_element_panel').addClass('rbroHidden');
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {PageBreakElement} data
         */

    }, {
        key: 'updateData',
        value: function updateData(data) {
            if (data !== null) {
                $('#rbro_page_break_element_position_y').prop('disabled', false);
                $('#rbro_page_break_element_position_y').val(data.getValue('y'));
                this.selectedObjId = data.getId();
            } else {
                $('#rbro_page_break_element_position_y').prop('disabled', true);
            }
            this.updateErrors();
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation) {}

        /**
         * Updates displayed errors of currently selected data object.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#rbro_page_break_element_panel .rbroFormRow').removeClass('rbroError');
            $('#rbro_page_break_element_panel .rbroErrorMessage').text('');
            var selectedObj = this.rb.getDataObject(this.selectedObjId);
            if (selectedObj !== null) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(selectedObj.getErrors()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var error = _step.value;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getSelectedObjId',
        value: function getSelectedObjId() {
            return this.selectedObjId;
        }
    }]);
    return PageBreakElementPanel;
}();

exports.default = PageBreakElementPanel;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _CommandGroupCmd = __webpack_require__(20);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Parameter = __webpack_require__(16);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _PopupWindow = __webpack_require__(10);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all parameter properties.
 * @class
 */
var ParameterPanel = function () {
    function ParameterPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, ParameterPanel);

        this.rootElement = rootElement;
        this.rb = rb;
        this.selectedObjId = null;
    }

    (0, _createClass3.default)(ParameterPanel, [{
        key: 'render',
        value: function render(data) {
            var _this = this;

            var panel = $('<div id="rbro_parameter_panel" class="rbroHidden"></div>');
            var elDiv = $('<div id="rbro_parameter_name_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_parameter_name">' + this.rb.getLabel('parameterName') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elParameterName = $('<input id="rbro_parameter_name">').change(function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null) {
                    if (elParameterName.val().trim() != '') {
                        var newParameterName = elParameterName.val();
                        var cmdGroup = new _CommandGroupCmd2.default('Rename parameter');
                        var oldName = obj.getFullName(null, null);
                        var newName = obj.getFullName(null, newParameterName);
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_parameter_name', 'name', newParameterName, _SetValueCmd2.default.type.text, _this.rb);
                        cmdGroup.addCommand(cmd);

                        var namesToConvert = [{ oldName: oldName, newName: newName }];
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = (0, _getIterator3.default)(obj.getChildren()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var child = _step.value;

                                oldName = child.getFullName(null, null);
                                newName = child.getFullName(newParameterName, null);
                                namesToConvert.push({ oldName: oldName, newName: newName });
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        var parent = obj.getParent();
                        if (parent !== null) {
                            parent.addUpdateTestDataCmdForChangedParameter(obj.getName(), newParameterName, cmdGroup);
                        }
                        // add commands to convert all values containing the currently changed parameter
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = (0, _getIterator3.default)(namesToConvert), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var nameToConvert = _step2.value;

                                var docElements = _this.rb.getDocElements(true);
                                var _iteratorNormalCompletion3 = true;
                                var _didIteratorError3 = false;
                                var _iteratorError3 = undefined;

                                try {
                                    for (var _iterator3 = (0, _getIterator3.default)(docElements), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                        var docElement = _step3.value;

                                        docElement.addCommandsForChangedParameter('${' + nameToConvert.oldName + '}', '${' + nameToConvert.newName + '}', cmdGroup);
                                    }
                                } catch (err) {
                                    _didIteratorError3 = true;
                                    _iteratorError3 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                            _iterator3.return();
                                        }
                                    } finally {
                                        if (_didIteratorError3) {
                                            throw _iteratorError3;
                                        }
                                    }
                                }

                                var _iteratorNormalCompletion4 = true;
                                var _didIteratorError4 = false;
                                var _iteratorError4 = undefined;

                                try {
                                    for (var _iterator4 = (0, _getIterator3.default)(_this.rb.getParameters()), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                        var _parameter = _step4.value;

                                        _parameter.addCommandsForChangedParameter('${' + nameToConvert.oldName + '}', '${' + nameToConvert.newName + '}', cmdGroup);
                                    }
                                } catch (err) {
                                    _didIteratorError4 = true;
                                    _iteratorError4 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                            _iterator4.return();
                                        }
                                    } finally {
                                        if (_didIteratorError4) {
                                            throw _iteratorError4;
                                        }
                                    }
                                }
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        _this.rb.executeCommand(cmdGroup);
                    } else {
                        elParameterName.val(parameter.getName());
                    }
                }
            });
            elFormField.append(elParameterName);
            elFormField.append('<div id="rbro_parameter_name_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_parameter_type_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_parameter_type">' + this.rb.getLabel('parameterType') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elType = $('<select id="rbro_parameter_type">\n                <option value="string">' + this.rb.getLabel('parameterTypeString') + '</option>\n                <option value="number">' + this.rb.getLabel('parameterTypeNumber') + '</option>\n                <option value="boolean">' + this.rb.getLabel('parameterTypeBoolean') + '</option>\n                <option value="date">' + this.rb.getLabel('parameterTypeDate') + '</option>\n                <option value="image">' + this.rb.getLabel('parameterTypeImage') + '</option>\n                <option value="array">' + this.rb.getLabel('parameterTypeArray') + '</option>\n                <option value="simpleArray">' + this.rb.getLabel('parameterTypeSimpleArray') + '</option>\n                <option value="map">' + this.rb.getLabel('parameterTypeMap') + '</option>\n                <option value="sum">' + this.rb.getLabel('parameterTypeSum') + '</option>\n                <option value="average">' + this.rb.getLabel('parameterTypeAverage') + '</option>\n            </select>').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_parameter_type', 'type', elType.val(), _SetValueCmd2.default.type.select, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elType);
            elFormField.append('<div id="rbro_parameter_type_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_parameter_array_item_type_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_parameter_array_item_type_row">' + this.rb.getLabel('parameterArrayItemType') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elArrayItemType = $('<select id="rbro_parameter_array_item_type">\n                <option value="string">' + this.rb.getLabel('parameterTypeString') + '</option>\n                <option value="number">' + this.rb.getLabel('parameterTypeNumber') + '</option>\n                <option value="boolean">' + this.rb.getLabel('parameterTypeBoolean') + '</option>\n                <option value="date">' + this.rb.getLabel('parameterTypeDate') + '</option>\n            </select>').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_parameter_array_item_type', 'arrayItemType', elArrayItemType.val(), _SetValueCmd2.default.type.select, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elArrayItemType);
            elFormField.append('<div id="rbro_parameter_array_item_type_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            if (this.rb.getProperty('adminMode')) {
                elDiv = $('<div class="rbroFormRow" id="rbro_parameter_eval_row"></div>');
                elDiv.append('<label for="rbro_parameter_eval">' + this.rb.getLabel('parameterEval') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elEval = $('<input id="rbro_parameter_eval" type="checkbox">').change(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_parameter_eval', 'eval', elEval.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elEval);
                elDiv.append(elFormField);
                panel.append(elDiv);
            }

            elDiv = $('<div class="rbroFormRow" id="rbro_parameter_nullable_row"></div>');
            elDiv.append('<label for="rbro_parameter_nullable">' + this.rb.getLabel('parameterNullable') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elNullable = $('<input id="rbro_parameter_nullable" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_parameter_nullable', 'nullable', elNullable.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elNullable);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow" id="rbro_parameter_pattern_row"></div>');
            elDiv.append('<label for="rbro_parameter_pattern">' + this.rb.getLabel('parameterPattern') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elPattern = $('<input id="rbro_parameter_pattern">').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_parameter_pattern', 'pattern', elPattern.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            }).focus(function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null) {
                    var patterns = void 0;
                    if (obj.getValue('type') === _Parameter2.default.type.date) {
                        patterns = _this.rb.getProperty('patternDates');
                    } else {
                        patterns = _this.rb.getProperty('patternNumbers');
                    }
                    _this.rb.getPopupWindow().show(patterns, _this.selectedObjId, 'rbro_parameter_pattern', 'pattern', _PopupWindow2.default.type.pattern);
                }
                event.preventDefault();
            }).blur(function (event) {
                _this.rb.getPopupWindow().hide();
            }).mouseup(function (event) {
                event.preventDefault();
                event.stopPropagation();
            });
            elFormField.append(elPattern);
            elFormField.append('<div id="rbro_parameter_pattern_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow" id="rbro_parameter_expression_row"></div>');
            elDiv.append('<label for="rbro_parameter_expression">' + this.rb.getLabel('parameterExpression') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elExpression = $('<textarea id="rbro_parameter_expression" rows="1"></textarea>').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_parameter_expression', 'expression', elExpression.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            autosize(elExpression);
            elFormField.append(elExpression);
            var elParameterButton = $('<div id="rbro_parameter_expression_param_button"\n        class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    var items = void 0;
                    var popupType = void 0;
                    if (selectedObj.getValue('type') === _Parameter2.default.type.sum || selectedObj.getValue('type') === _Parameter2.default.type.average) {
                        items = _this.rb.getArrayFieldParameterItems(_Parameter2.default.type.number);
                        popupType = _PopupWindow2.default.type.parameterSet;
                    } else {
                        items = _this.rb.getParameterItems(selectedObj);
                        popupType = _PopupWindow2.default.type.parameterAppend;
                    }
                    _this.rb.getPopupWindow().show(items, _this.selectedObjId, 'rbro_parameter_expression', 'expression', popupType);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_parameter_expression_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow" id="rbro_parameter_test_data_row"></div>');
            elDiv.append('<label for="rbro_parameter_test_data">' + this.rb.getLabel('parameterTestData') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elTestData = $('<input id="rbro_parameter_test_data">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_parameter_test_data', 'testData', elTestData.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elTestData);
            var elEditTestDataButton = $('<button id="rbro_parameter_edit_test_data"\n        class="rbroButton rbroActionButton" style="display: none;">\n                    <span>' + this.rb.getLabel('parameterEditTestData') + '</span>\n                    <span class="rbroIcon-edit"></span>\n                </button>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    var parameters = [];
                    if (selectedObj.getValue('type') == _Parameter2.default.type.simpleArray) {
                        parameters.push({ name: 'data', type: selectedObj.getValue('arrayItemType') });
                    } else {
                        var _iteratorNormalCompletion5 = true;
                        var _didIteratorError5 = false;
                        var _iteratorError5 = undefined;

                        try {
                            for (var _iterator5 = (0, _getIterator3.default)(selectedObj.getChildren()), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                var child = _step5.value;

                                parameters.push({ name: child.getName(), type: child.getValue('type') });
                            }
                        } catch (err) {
                            _didIteratorError5 = true;
                            _iteratorError5 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                    _iterator5.return();
                                }
                            } finally {
                                if (_didIteratorError5) {
                                    throw _iteratorError5;
                                }
                            }
                        }
                    }
                    if (parameters.length > 0) {
                        var rows = selectedObj.getTestDataRows();
                        rows.unshift(parameters);
                        _this.rb.getPopupWindow().show(rows, _this.selectedObjId, '', 'testData', _PopupWindow2.default.type.testData);
                    } else {
                        alert(_this.rb.getLabel('parameterEditTestDataNoFields'));
                    }
                }
            });
            elFormField.append(elEditTestDataButton);
            elFormField.append('<div id="rbro_parameter_test_data_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'updateAutosizeInputs',
        value: function updateAutosizeInputs() {
            autosize.update($('#rbro_parameter_expression'));
        }
    }, {
        key: 'show',
        value: function show(data) {
            $('#rbro_parameter_panel').removeClass('rbroHidden');
            this.updateData(data);
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_parameter_panel').addClass('rbroHidden');
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {Parameter} data
         */

    }, {
        key: 'updateData',
        value: function updateData(data) {
            if (data !== null) {
                var editable = data.getValue('editable');
                $('#rbro_parameter_name').prop('disabled', !editable);
                $('#rbro_parameter_type').prop('disabled', !editable);
                $('#rbro_parameter_eval').prop('disabled', !editable);
                $('#rbro_parameter_nullable').prop('disabled', !editable);
                $('#rbro_parameter_pattern').prop('disabled', !editable);
                $('#rbro_parameter_expression').prop('disabled', !editable);
                if (editable) {
                    $('#rbro_parameter_name_row label').removeClass('rbroDisabled');
                    $('#rbro_parameter_type_row label').removeClass('rbroDisabled');
                    $('#rbro_parameter_eval_row label').removeClass('rbroDisabled');
                    $('#rbro_parameter_nullable_row label').removeClass('rbroDisabled');
                    $('#rbro_parameter_pattern_row label').removeClass('rbroDisabled');
                    $('#rbro_parameter_expression_row label').removeClass('rbroDisabled');
                } else {
                    $('#rbro_parameter_name_row label').addClass('rbroDisabled');
                    $('#rbro_parameter_type_row label').addClass('rbroDisabled');
                    $('#rbro_parameter_eval_row label').addClass('rbroDisabled');
                    $('#rbro_parameter_nullable_row label').addClass('rbroDisabled');
                    $('#rbro_parameter_pattern_row label').addClass('rbroDisabled');
                    $('#rbro_parameter_expression_row label').addClass('rbroDisabled');
                }
                $('#rbro_parameter_test_data').prop('disabled', false);

                $('#rbro_parameter_name').val(data.getName());
                $('#rbro_parameter_type').val(data.getValue('type'));
                $('#rbro_parameter_eval').prop('checked', data.getValue('eval'));
                $('#rbro_parameter_nullable').prop('checked', data.getValue('nullable'));
                $('#rbro_parameter_pattern').val(data.getValue('pattern'));
                $('#rbro_parameter_expression').val(data.getValue('expression'));
                $('#rbro_parameter_test_data').val(data.getValue('testData'));
                this.updatePatternPlaceholder(data);
                this.updateVisibility(data);
                this.selectedObjId = data.getId();
            } else {
                $('#rbro_parameter_name').prop('disabled', true);
                $('#rbro_parameter_type').prop('disabled', true);
                $('#rbro_parameter_eval').prop('disabled', true);
                $('#rbro_parameter_nullable').prop('disabled', true);
                $('#rbro_parameter_pattern').prop('disabled', true);
                $('#rbro_parameter_expression').prop('disabled', true);
                $('#rbro_parameter_test_data').prop('disabled', true);
            }

            this.updateAutosizeInputs();
            this.updateErrors();
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation) {
            if (obj instanceof _Parameter2.default && obj === this.rb.getDetailData() && operation === _Command2.default.operation.change) {
                this.updateVisibility(obj);
            }
        }
    }, {
        key: 'updatePatternPlaceholder',
        value: function updatePatternPlaceholder(obj) {
            if (obj !== null && obj.getValue('type') === _Parameter2.default.type.date) {
                $('#rbro_parameter_test_data').attr('placeholder', this.rb.getLabel('parameterTestDataDatePattern'));
            } else {
                $('#rbro_parameter_test_data').attr('placeholder', '');
            }
        }
    }, {
        key: 'updateVisibility',
        value: function updateVisibility(obj) {
            var type = obj.getValue('type');
            var showOnlyNameType = obj.getValue('showOnlyNameType');
            var parentParameter = null;
            if (obj.getPanelItem() !== null && obj.getPanelItem().getParent().getData() instanceof _Parameter2.default) {
                parentParameter = obj.getPanelItem().getParent().getData();
            }

            if (type === _Parameter2.default.type.simpleArray) {
                $('#rbro_parameter_array_item_type_row').show();
            } else {
                $('#rbro_parameter_array_item_type_row').hide();
            }
            if (type === _Parameter2.default.type.string || type === _Parameter2.default.type.number || type === _Parameter2.default.type.boolean || type === _Parameter2.default.type.date || type === _Parameter2.default.type.array || type === _Parameter2.default.type.simpleArray || type === _Parameter2.default.type.map) {
                $('#rbro_parameter_nullable_row').show();
            } else {
                $('#rbro_parameter_nullable_row').hide();
            }
            if ((type === _Parameter2.default.type.number || type === _Parameter2.default.type.date || type === _Parameter2.default.type.sum || type === _Parameter2.default.type.average) && !showOnlyNameType) {
                $('#rbro_parameter_pattern_row').show();
            } else {
                $('#rbro_parameter_pattern_row').hide();
            }
            if (type === _Parameter2.default.type.image || type === _Parameter2.default.type.sum || type === _Parameter2.default.type.average || showOnlyNameType) {
                $('#rbro_parameter_eval_row').hide();
                $('#rbro_parameter_test_data_row').hide();
            } else {
                if (type === _Parameter2.default.type.image || type === _Parameter2.default.type.array || type === _Parameter2.default.type.simpleArray || type === _Parameter2.default.type.map) {
                    $('#rbro_parameter_eval_row').hide();
                } else {
                    $('#rbro_parameter_eval_row').show();
                }
                if (parentParameter !== null && parentParameter.getValue('type') === _Parameter2.default.type.array || type === _Parameter2.default.type.map) {
                    $('#rbro_parameter_test_data_row').hide();
                } else {
                    if (type === _Parameter2.default.type.array || type === _Parameter2.default.type.simpleArray || !obj.getValue('eval')) {
                        $('#rbro_parameter_test_data_row').show();
                    } else {
                        $('#rbro_parameter_test_data_row').hide();
                    }
                }
                if (type === _Parameter2.default.type.array || type === _Parameter2.default.type.simpleArray) {
                    $('#rbro_parameter_test_data').hide();
                    $('#rbro_parameter_edit_test_data').show();
                } else {
                    $('#rbro_parameter_test_data').show();
                    $('#rbro_parameter_edit_test_data').hide();
                }
            }
            if ((obj.getValue('eval') && (type === _Parameter2.default.type.string || type === _Parameter2.default.type.number || type === _Parameter2.default.type.boolean || type === _Parameter2.default.type.date) || type === _Parameter2.default.type.sum || type === _Parameter2.default.type.average) && !showOnlyNameType) {
                $('#rbro_parameter_expression_row').show();
            } else {
                $('#rbro_parameter_expression_row').hide();
            }
            // do not allow nested array/map
            if (obj.getPanelItem() !== null && obj.getPanelItem().getParent() === this.rb.getMainPanel().getParametersItem()) {
                $('#rbro_parameter_type option[value="array"]').removeClass('rbroHidden');
                $('#rbro_parameter_type option[value="map"]').removeClass('rbroHidden');
            } else {
                $('#rbro_parameter_type option[value="array"]').addClass('rbroHidden');
                $('#rbro_parameter_type option[value="map"]').addClass('rbroHidden');
            }
            // do not allow image and sum/average parameter in list
            if (parentParameter !== null && parentParameter.getValue('type') === _Parameter2.default.type.array) {
                $('#rbro_parameter_type option[value="image"]').addClass('rbroHidden');
                $('#rbro_parameter_type option[value="sum"]').addClass('rbroHidden');
                $('#rbro_parameter_type option[value="average"]').addClass('rbroHidden');
            } else {
                $('#rbro_parameter_type option[value="image"]').removeClass('rbroHidden');
                $('#rbro_parameter_type option[value="sum"]').removeClass('rbroHidden');
                $('#rbro_parameter_type option[value="average"]').removeClass('rbroHidden');
            }
        }

        /**
         * Updates displayed errors of currently selected data object.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#rbro_parameter_panel .rbroFormRow').removeClass('rbroError');
            $('#rbro_parameter_panel .rbroErrorMessage').text('');
            var selectedObj = this.rb.getDataObject(this.selectedObjId);
            if (selectedObj !== null) {
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                    for (var _iterator6 = (0, _getIterator3.default)(selectedObj.getErrors()), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                        var error = _step6.value;

                        var rowId = 'rbro_parameter_' + error.field + '_row';
                        var errorId = 'rbro_parameter_' + error.field + '_error';
                        var errorMsg = this.rb.getLabel(error.msg_key);
                        if (error.info) {
                            errorMsg = errorMsg.replace('${info}', '<span class="rbroErrorMessageInfo">' + error.info + '</span>');
                        }
                        $('#' + rowId).addClass('rbroError');
                        $('#' + errorId).html(errorMsg);
                    }
                } catch (err) {
                    _didIteratorError6 = true;
                    _iteratorError6 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion6 && _iterator6.return) {
                            _iterator6.return();
                        }
                    } finally {
                        if (_didIteratorError6) {
                            throw _iteratorError6;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getSelectedObjId',
        value: function getSelectedObjId() {
            return this.selectedObjId;
        }
    }]);
    return ParameterPanel;
}();

exports.default = ParameterPanel;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _CommandGroupCmd = __webpack_require__(20);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

var _PopupWindow = __webpack_require__(10);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all table band properties.
 * @class
 */
var TableBandElementPanel = function () {
    function TableBandElementPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, TableBandElementPanel);

        this.rootElement = rootElement;
        this.rb = rb;
        this.selectedObjId = null;
    }

    (0, _createClass3.default)(TableBandElementPanel, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var panel = $('<div id="rbro_table_band_element_panel" class="rbroHidden"></div>');
            var elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_band_element_width">' + this.rb.getLabel('docElementHeight') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elHeight = $('<input id="rbro_table_band_element_height">').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_band_element_height', 'height', elHeight.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elHeight);
            elFormField.append(elHeight);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_table_band_element_repeat_header_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_band_element_repeat_header">' + this.rb.getLabel('tableElementRepeatHeader') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elRepeatHeader = $('<input id="rbro_table_band_element_repeat_header" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_band_element_repeat_header', 'repeatHeader', elRepeatHeader.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elRepeatHeader);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_band_element_background_color">' + this.rb.getLabel('styleBackgroundColor') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elBgColorContainer = $('<div class="rbroColorPickerContainer"></div>');
            var elBgColor = $('<input id="rbro_table_band_element_background_color">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_band_element_background_color', 'backgroundColor', elBgColor.val(), _SetValueCmd2.default.type.color, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBgColorContainer.append(elBgColor);
            elFormField.append(elBgColorContainer);
            elDiv.append(elFormField);
            panel.append(elDiv);
            utils.initColorPicker(elBgColor, this.rb, { allowEmpty: true });

            elDiv = $('<div id="rbro_table_band_element_alternate_background_color_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_band_element_alternate_background_color">' + this.rb.getLabel('tableElementAlternateBackgroundColor') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elAltBgColorContainer = $('<div class="rbroColorPickerContainer"></div>');
            var elAltBgColor = $('<input id="rbro_table_band_element_alternate_background_color">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_band_element_alternate_background_color', 'alternateBackgroundColor', elAltBgColor.val(), _SetValueCmd2.default.type.color, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elAltBgColorContainer.append(elAltBgColor);
            elFormField.append(elAltBgColorContainer);
            elDiv.append(elFormField);
            panel.append(elDiv);
            utils.initColorPicker(elAltBgColor, this.rb, { allowEmpty: true });

            elDiv = $('<div id="rbro_table_band_element_always_print_on_same_page_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_band_element_always_print_on_same_page">' + this.rb.getLabel('docElementAlwaysPrintOnSamePage') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elAlwaysPrintOnSamePage = $('<input id="rbro_table_band_element_always_print_on_same_page" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_band_element_always_print_on_same_page', 'alwaysPrintOnSamePage', elAlwaysPrintOnSamePage.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elAlwaysPrintOnSamePage);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_table_band_element_group_expression_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_band_element_group_expression">' + this.rb.getLabel('tableElementGroupExpression') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elGroupExpression = $('<textarea id="rbro_table_band_element_group_expression" rows="1"></textarea>').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('groupExpression') !== elGroupExpression.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_band_element_group_expression', 'groupExpression', elGroupExpression.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            }).blur(function (event) {
                _this.rb.getPopupWindow().hide();
            });
            autosize(elGroupExpression);
            elFormField.append(elGroupExpression);
            var elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj), _this.selectedObjId, 'rbro_table_band_element_group_expression', 'parameter', _PopupWindow2.default.type.parameterSet);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_text_element_group_expression_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_table_band_element_print_if_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_band_element_print_if">' + this.rb.getLabel('docElementPrintIf') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPrintIf = $('<textarea id="rbro_table_band_element_print_if" rows="1"></textarea>').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('printIf') !== elPrintIf.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_band_element_print_if', 'printIf', elPrintIf.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            }).blur(function (event) {
                _this.rb.getPopupWindow().hide();
            });
            autosize(elPrintIf);
            elFormField.append(elPrintIf);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj), _this.selectedObjId, 'rbro_table_band_element_print_if', 'parameter', _PopupWindow2.default.type.parameterAppend);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_text_element_print_if_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'show',
        value: function show(data) {
            $('#rbro_table_band_element_panel').removeClass('rbroHidden');
            this.updateData(data);
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_table_band_element_panel').addClass('rbroHidden');
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {TableBandElement} data
         */

    }, {
        key: 'updateData',
        value: function updateData(data) {
            if (data !== null) {
                $('#rbro_table_band_element_height').prop('disabled', false);
                $('#rbro_table_band_element_repeat_header').prop('disabled', false);

                $('#rbro_table_band_element_height').val(data.getValue('height'));
                $('#rbro_table_band_element_background_color').spectrum("set", data.getValue('backgroundColor'));
                if (data.getValue('tableBand') === 'header') {
                    $('#rbro_table_band_element_repeat_header').prop('checked', data.getValue('repeatHeader'));
                    $('#rbro_table_band_element_repeat_header_row').show();
                } else {
                    $('#rbro_table_band_element_repeat_header_row').hide();
                }
                if (data.getValue('tableBand') === 'content') {
                    $('#rbro_table_band_element_alternate_background_color').spectrum("set", data.getValue('alternateBackgroundColor'));
                    $('#rbro_table_band_element_always_print_on_same_page').prop('checked', data.getValue('alwaysPrintOnSamePage'));
                    $('#rbro_table_band_element_group_expression').val(data.getValue('groupExpression'));
                    $('#rbro_table_band_element_print_if').val(data.getValue('printIf'));
                    $('#rbro_table_band_element_alternate_background_color_row').show();
                    $('#rbro_table_band_element_always_print_on_same_page_row').show();
                    $('#rbro_table_band_element_group_expression_row').show();
                    $('#rbro_table_band_element_print_if_row').show();
                } else {
                    $('#rbro_table_band_element_alternate_background_color_row').hide();
                    $('#rbro_table_band_element_always_print_on_same_page_row').hide();
                    $('#rbro_table_band_element_group_expression_row').hide();
                    $('#rbro_table_band_element_print_if_row').hide();
                }
                this.selectedObjId = data.getId();
            } else {
                $('#rbro_table_band_element_height').prop('disabled', true);
                $('#rbro_table_band_element_repeat_header').prop('disabled', true);
            }
            this.updateErrors();
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation) {}

        /**
         * Updates displayed errors of currently selected data object.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#rbro_table_band_element_panel .rbroFormRow').removeClass('rbroError');
            $('#rbro_table_band_element_panel .rbroErrorMessage').text('');
            var selectedObj = this.rb.getDataObject(this.selectedObjId);
            if (selectedObj !== null) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(selectedObj.getErrors()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var error = _step.value;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getSelectedObjId',
        value: function getSelectedObjId() {
            return this.selectedObjId;
        }
    }]);
    return TableBandElementPanel;
}();

exports.default = TableBandElementPanel;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _CommandGroupCmd = __webpack_require__(20);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Parameter = __webpack_require__(16);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _TableElement = __webpack_require__(39);

var _TableElement2 = _interopRequireDefault(_TableElement);

var _PopupWindow = __webpack_require__(10);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all table properties.
 * @class
 */
var TableElementPanel = function () {
    function TableElementPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, TableElementPanel);

        this.rootElement = rootElement;
        this.rb = rb;
        this.selectedObjId = null;
    }

    (0, _createClass3.default)(TableElementPanel, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var panel = $('<div id="rbro_table_element_panel" class="rbroHidden"></div>');
            var elDiv = $('<div class="rbroFormRow" id="rbro_table_element_data_source_row"></div>');
            elDiv.append('<label for="rbro_table_element_data_source">' + this.rb.getLabel('docElementDataSource') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elDataSource = $('<textarea id="rbro_table_element_data_source" rows="1"></textarea>').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_data_source', 'dataSource', elDataSource.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            }).focus(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj, [_Parameter2.default.type.array]), _this.selectedObjId, 'rbro_table_element_data_source', 'dataSource', _PopupWindow2.default.type.parameterSet);
                }
            }).blur(function (event) {
                _this.rb.getPopupWindow().hide();
            }).mouseup(function (event) {
                event.preventDefault();
                event.stopPropagation();
            });
            autosize(elDataSource);
            elFormField.append(elDataSource);
            elFormField.append('<div id="rbro_table_element_data_source_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_table_element_position_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_element_position">' + this.rb.getLabel('docElementPosition') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPosX = $('<input id="rbro_table_element_position_x">').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_position_x', 'x', elPosX.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosX);
            elFormField.append(elPosX);
            var elPosY = $('<input id="rbro_table_element_position_y">').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_position_y', 'y', elPosY.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosY);
            elFormField.append(elPosY);
            elFormField.append('<div id="rbro_table_element_position_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_element_columns">' + this.rb.getLabel('tableElementColumns') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elColumns = $('<input id="rbro_table_element_columns">').change(function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null) {
                    var val = utils.checkInputDecimal(elColumns.val(), 1, 20);
                    if (val !== elColumns.val()) {
                        elColumns.val(val);
                    }
                    var cmdGroup = new _CommandGroupCmd2.default('Set value');
                    var columns = utils.convertInputToNumber(val);
                    var newColumns = obj.addCommandsForChangedColumns(columns, cmdGroup);
                    if (newColumns !== columns) {
                        elColumns.val(newColumns);
                    }
                    if (!cmdGroup.isEmpty()) {
                        _this.rb.executeCommand(cmdGroup);
                    }
                }
            });
            utils.setInputPositiveInteger(elColumns);
            elFormField.append(elColumns);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_element_header">' + this.rb.getLabel('header') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elHeaderLabel = $('<label class="switch-light switch-material"></label>');
            var elHeader = $('<input id="rbro_table_element_header" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_header', 'header', elHeader.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elHeaderLabel.append(elHeader);
            var elHeaderSpan = $('<span></span>');
            elHeaderSpan.append($('<span></span>'));
            elHeaderSpan.append($('<span></span>'));
            elHeaderSpan.append($('<a></a>'));
            elHeaderLabel.append(elHeaderSpan);
            elFormField.append(elHeaderLabel);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_element_content_rows">' + this.rb.getLabel('tableElementContentRows') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elContentRows = $('<input id="rbro_table_element_content_rows" maxlength="1">').change(function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null) {
                    var val = utils.checkInputDecimal(elContentRows.val(), 1, 9);
                    if (val !== elContentRows.val()) {
                        elContentRows.val(val);
                    }
                    var cmdGroup = new _CommandGroupCmd2.default('Set value');
                    var contentRows = utils.convertInputToNumber(val);
                    obj.addCommandsForChangedContentRows(contentRows, cmdGroup);
                    if (!cmdGroup.isEmpty()) {
                        _this.rb.executeCommand(cmdGroup);
                    }
                }
            });
            utils.setInputPositiveInteger(elContentRows);
            elFormField.append(elContentRows);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_element_footer">' + this.rb.getLabel('footer') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elFooterLabel = $('<label class="switch-light switch-material"></label>');
            var elFooter = $('<input id="rbro_table_element_footer" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_footer', 'footer', elFooter.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFooterLabel.append(elFooter);
            var elFooterSpan = $('<span></span>');
            elFooterSpan.append($('<span></span>'));
            elFooterSpan.append($('<span></span>'));
            elFooterSpan.append($('<a></a>'));
            elFooterLabel.append(elFooterSpan);
            elFormField.append(elFooterLabel);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label>' + this.rb.getLabel('styleBorder') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elBorder = $('<div id="rbro_table_element_border"></div>');
            var elBorderGrid = $('<button id="rbro_table_element_border_grid" class="rbroButton rbroActionButton rbroIcon-border-table-grid"\n                type="button" value="grid"\n                title="' + this.rb.getLabel('tableElementBorderGrid') + '"></button>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_border', 'border', _TableElement2.default.border.grid, _SetValueCmd2.default.type.buttonGroup, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBorder.append(elBorderGrid);
            var elBorderFrameRow = $('<button id="rbro_table_element_border_frame_row" class="rbroButton rbroActionButton rbroIcon-border-table-frame-row"\n                type="button" value="frame_row"\n                title="' + this.rb.getLabel('tableElementBorderFrameRow') + '"></button>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_border', 'border', _TableElement2.default.border.frameRow, _SetValueCmd2.default.type.buttonGroup, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBorder.append(elBorderFrameRow);
            var elBorderFrame = $('<button id="rbro_table_element_border_frame" class="rbroButton rbroActionButton rbroIcon-border-table-frame"\n                type="button" value="frame"\n                title="' + this.rb.getLabel('tableElementBorderFrame') + '"></button>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_border', 'border', _TableElement2.default.border.frame, _SetValueCmd2.default.type.buttonGroup, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBorder.append(elBorderFrame);
            var elBorderRow = $('<button id="rbro_table_element_border_row" class="rbroButton rbroActionButton rbroIcon-border-table-row"\n                type="button" value="row"\n                title="' + this.rb.getLabel('tableElementBorderRow') + '"></button>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_border', 'border', _TableElement2.default.border.row, _SetValueCmd2.default.type.buttonGroup, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBorder.append(elBorderRow);
            var elBorderNone = $('<button id="rbro_table_element_border_none" class="rbroButton rbroActionButton rbroIcon-border-table-none"\n                type="button" value="none"\n                title="' + this.rb.getLabel('tableElementBorderNone') + '"></button>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_border', 'border', _TableElement2.default.border.none, _SetValueCmd2.default.type.buttonGroup, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBorder.append(elBorderNone);
            elFormField.append(elBorder);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_table_element_border_color">' + this.rb.getLabel('styleBorderColor') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elBorderColorContainer = $('<div class="rbroColorPickerContainer"></div>');
            var elBorderColor = $('<input id="rbro_table_element_border_color">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_border_color', 'borderColor', elBorderColor.val(), _SetValueCmd2.default.type.color, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elBorderColorContainer.append(elBorderColor);
            elFormField.append(elBorderColorContainer);
            elDiv.append(elFormField);
            panel.append(elDiv);
            utils.initColorPicker(elBorderColor, this.rb);

            if (this.rb.getProperty('enableSpreadsheet')) {
                var elSpreadsheetHeader = $('<div class="rbroPanelSectionHeader"></div>');
                var elSpreadsheetHeaderIcon = $('<span id="rbro_table_element_spreadsheet_header_icon" class="rbroIcon-plus"></span>');
                elDiv = $('<div id="rbro_table_element_spreadsheet_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        $('#rbro_table_element_spreadsheet_header').toggleClass('rbroPanelSectionHeaderOpen');
                        $('#rbro_table_element_spreadsheet_section').toggleClass('rbroHidden');
                        elSpreadsheetHeaderIcon.toggleClass('rbroIcon-plus');
                        elSpreadsheetHeaderIcon.toggleClass('rbroIcon-minus');
                        if (elSpreadsheetHeaderIcon.hasClass('rbroIcon-minus')) {
                            $('#rbro_detail_panel').scrollTop($('#rbro_detail_panel').scrollTop() + elSpreadsheetHeader.position().top);
                        }
                    }
                });
                elSpreadsheetHeader.append(elSpreadsheetHeaderIcon);
                elSpreadsheetHeader.append('<span>' + this.rb.getLabel('docElementSpreadsheet') + '</span>');
                elDiv.append(elSpreadsheetHeader);
                panel.append(elDiv);

                var elSpreadsheetSectionDiv = $('<div id="rbro_table_element_spreadsheet_section" class="rbroHidden"></div>');
                elDiv = $('<div id="rbro_table_element_spreadsheet_hide_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_table_element_spreadsheet_hide">' + this.rb.getLabel('docElementSpreadsheetHide') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetHide = $('<input id="rbro_table_element_spreadsheet_hide" type="checkbox">').change(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_spreadsheet_hide', 'spreadsheet_hide', elSpreadsheetHide.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elSpreadsheetHide);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_table_element_spreadsheet_column_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_table_element_spreadsheet_column">' + this.rb.getLabel('docElementSpreadsheetColumn') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetColumn = $('<input id="rbro_table_element_spreadsheet_column">').on('input', function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_spreadsheet_column', 'spreadsheet_column', elSpreadsheetColumn.val(), _SetValueCmd2.default.type.text, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                utils.setInputPositiveInteger(elSpreadsheetColumn);
                elFormField.append(elSpreadsheetColumn);
                elFormField.append('<div id="rbro_table_element_spreadsheet_column_error" class="rbroErrorMessage"></div>');
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_table_element_spreadsheet_add_empty_row_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_table_element_spreadsheet_add_empty_row">' + this.rb.getLabel('docElementSpreadsheetAddEmptyRow') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetAddEmptyRow = $('<input id="rbro_table_element_spreadsheet_add_empty_row" type="checkbox">').change(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_table_element_spreadsheet_add_empty_row', 'spreadsheet_addEmptyRow', elSpreadsheetAddEmptyRow.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elSpreadsheetAddEmptyRow);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);
                panel.append(elSpreadsheetSectionDiv);
            }

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'updateAutosizeInputs',
        value: function updateAutosizeInputs() {
            autosize.update($('#rbro_table_element_data_source'));
        }
    }, {
        key: 'show',
        value: function show(data) {
            $('#rbro_table_element_panel').removeClass('rbroHidden');
            this.updateData(data);
            this.updateAutosizeInputs();
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_table_element_panel').addClass('rbroHidden');
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {TableElement} data
         */

    }, {
        key: 'updateData',
        value: function updateData(data) {
            if (data !== null) {
                $('#rbro_table_element_data_source').prop('disabled', false);
                $('#rbro_table_element_position_x').prop('disabled', false);
                $('#rbro_table_element_position_y').prop('disabled', false);
                $('#rbro_table_element_columns').prop('disabled', false);
                $('#rbro_table_element_header').prop('disabled', false);
                $('#rbro_table_element_footer').prop('disabled', false);
                $('#rbro_table_element_border_grid').prop('disabled', false);
                $('#rbro_table_element_border_frame_row').prop('disabled', false);
                $('#rbro_table_element_border_frame').prop('disabled', false);
                $('#rbro_table_element_border_row').prop('disabled', false);
                $('#rbro_table_element_border_none').prop('disabled', false);
                $('#rbro_table_element_border_color').spectrum('enable');
                $('#rbro_table_element_spreadsheet_hide').prop('disabled', false);
                $('#rbro_table_element_spreadsheet_column').prop('disabled', false);
                $('#rbro_table_element_spreadsheet_add_empty_row').prop('disabled', false);

                $('#rbro_table_element_data_source').val(data.getValue('dataSource'));
                $('#rbro_table_element_position_x').val(data.getValue('x'));
                $('#rbro_table_element_position_y').val(data.getValue('y'));
                $('#rbro_table_element_columns').val(data.getValue('columns'));
                $('#rbro_table_element_header').prop('checked', data.getValue('header'));
                $('#rbro_table_element_content_rows').val(data.getValue('contentRows'));
                $('#rbro_table_element_footer').prop('checked', data.getValue('footer'));

                $('#rbro_table_element_border').find('button').removeClass('rbroButtonActive');
                $('#rbro_table_element_border').find('button[value="' + data.getValue('border') + '"]').addClass('rbroButtonActive');
                $('#rbro_table_element_border_color').spectrum('set', data.getValue('borderColor'));
                $('#rbro_table_element_spreadsheet_hide').prop('checked', data.getValue('spreadsheet_hide'));
                $('#rbro_table_element_spreadsheet_column').val(data.getValue('spreadsheet_column'));
                $('#rbro_table_element_spreadsheet_add_empty_row').prop('checked', data.getValue('spreadsheet_addEmptyRow'));
                this.selectedObjId = data.getId();
            } else {
                $('#rbro_table_element_data_source').prop('disabled', true);
                $('#rbro_table_element_position_x').prop('disabled', true);
                $('#rbro_table_element_position_y').prop('disabled', true);
                $('#rbro_table_element_columns').prop('disabled', true);
                $('#rbro_table_element_header').prop('disabled', true);
                $('#rbro_table_element_content_rows').prop('disabled', true);
                $('#rbro_table_element_footer').prop('disabled', true);
                $('#rbro_table_element_border_grid').prop('disabled', true);
                $('#rbro_table_element_border_frame_row').prop('disabled', true);
                $('#rbro_table_element_border_frame').prop('disabled', true);
                $('#rbro_table_element_border_row').prop('disabled', true);
                $('#rbro_table_element_border_none').prop('disabled', true);
                $('#rbro_table_element_border_color').spectrum('disable');
                $('#rbro_table_element_spreadsheet_hide').prop('disabled', true);
                $('#rbro_table_element_spreadsheet_column').prop('disabled', true);
                $('#rbro_table_element_spreadsheet_add_empty_row').prop('disabled', true);
            }
            this.updateAutosizeInputs();
            this.updateErrors();
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation) {}

        /**
         * Updates displayed errors of currently selected data object.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#rbro_table_element_panel .rbroFormRow').removeClass('rbroError');
            $('#rbro_table_element_panel .rbroErrorMessage').text('');
            var selectedObj = this.rb.getDataObject(this.selectedObjId);
            if (selectedObj !== null) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(selectedObj.getErrors()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var error = _step.value;

                        var rowId = 'rbro_table_element_' + error.field + '_row';
                        var errorId = 'rbro_table_element_' + error.field + '_error';
                        var errorMsg = this.rb.getLabel(error.msg_key);
                        if (error.info) {
                            errorMsg = errorMsg.replace('${info}', '<span class="rbroErrorMessageInfo">' + error.info + '</span>');
                        }
                        $('#' + rowId).addClass('rbroError');
                        $('#' + errorId).html(errorMsg);
                        if (error.field === 'spreadsheet_column') {
                            $('#rbro_table_element_spreadsheet_header').addClass('rbroError');
                            if (!$('#rbro_table_element_spreadsheet_header').hasClass('rbroPanelSectionHeaderOpen')) {
                                $('#rbro_table_element_spreadsheet_header').trigger('click');
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getSelectedObjId',
        value: function getSelectedObjId() {
            return this.selectedObjId;
        }
    }]);
    return TableElementPanel;
}();

exports.default = TableElementPanel;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(5);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _StylePanel = __webpack_require__(31);

var _StylePanel2 = _interopRequireDefault(_StylePanel);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _SetValueCmd = __webpack_require__(3);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _DocElement = __webpack_require__(4);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _TableTextElement = __webpack_require__(40);

var _TableTextElement2 = _interopRequireDefault(_TableTextElement);

var _PopupWindow = __webpack_require__(10);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

var _utils = __webpack_require__(2);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all text properties.
 * @class
 */
var TextElementPanel = function () {
    function TextElementPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, TextElementPanel);

        this.rootElement = rootElement;
        this.rb = rb;
        this.elStyle = null;
        this.cs_elStyle = null;
        this.selectedObjId = null;
    }

    (0, _createClass3.default)(TextElementPanel, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var panel = $('<div id="rbro_text_element_panel" class="rbroHidden"></div>');
            var elDiv = $('<div id="rbro_text_element_content_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_text_element_content">' + this.rb.getLabel('textElementContent') + ':</label>');
            var elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elContent = $('<textarea id="rbro_text_element_content" rows="1"></textarea>').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('content') !== elContent.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_content', 'content', elContent.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            }).blur(function (event) {
                _this.rb.getPopupWindow().hide();
            });
            autosize(elContent);
            elFormField.append(elContent);
            var elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj), _this.selectedObjId, 'rbro_text_element_content', 'parameter', _PopupWindow2.default.type.parameterAppend);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_text_element_content_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow" id="rbro_text_element_eval_row"></div>');
            elDiv.append('<label for="rbro_text_element_eval">' + this.rb.getLabel('textElementEval') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elEval = $('<input id="rbro_text_element_eval" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_eval', 'eval', elEval.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elEval);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_text_element_position_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_text_element_position_x">' + this.rb.getLabel('docElementPosition') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPosX = $('<input id="rbro_text_element_position_x">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('x') !== elPosX.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_position_x', 'x', elPosX.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosX);
            elFormField.append(elPosX);
            var elPosY = $('<input id="rbro_text_element_position_y">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('y') !== elPosY.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_position_y', 'y', elPosY.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elPosY);
            elFormField.append(elPosY);
            elFormField.append('<div id="rbro_text_element_position_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_text_element_size_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_text_element_size">' + this.rb.getLabel('docElementSize') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elWidth = $('<input id="rbro_text_element_width">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('width') !== elWidth.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_width', 'width', elWidth.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elWidth);
            elFormField.append(elWidth);
            var elHeight = $('<input id="rbro_text_element_height">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('height') !== elHeight.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_height', 'height', elHeight.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            utils.setInputDecimal(elHeight);
            elFormField.append(elHeight);
            elFormField.append('<div id="rbro_text_element_size_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            var elStyleHeader = $('<div class="rbroPanelSectionHeader"></div>');
            var elStyleHeaderIcon = $('<span id="rbro_text_element_style_header_icon" class="rbroPanelSectionHeaderOpen rbroIcon-minus"></span>');
            elDiv = $('<div id="rbro_text_element_style_header" class="rbroFormRow rbroPanelSection rbroPanelSectionHeaderOpen"></div>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    $('#rbro_text_element_style_header').toggleClass('rbroPanelSectionHeaderOpen');
                    $('#rbro_text_element_style_section').toggleClass('rbroHidden');
                    elStyleHeaderIcon.toggleClass('rbroIcon-plus');
                    elStyleHeaderIcon.toggleClass('rbroIcon-minus');
                    if (elStyleHeaderIcon.hasClass('rbroIcon-minus')) {
                        $('#rbro_detail_panel').scrollTop($('#rbro_detail_panel').scrollTop() + elStyleHeader.position().top);
                    }
                }
            });
            elStyleHeader.append(elStyleHeaderIcon);
            elStyleHeader.append('<span>' + this.rb.getLabel('docElementStyle') + '</span>');
            elDiv.append(elStyleHeader);
            panel.append(elDiv);

            var elStyleSectionDiv = $('<div id="rbro_text_element_style_section"></div>');
            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_text_element_style_id">' + this.rb.getLabel('docElementStyle') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            this.elStyle = $('<select id="rbro_text_element_style_id"></select>').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_style_id', 'styleId', _this.elStyle.val(), _SetValueCmd2.default.type.select, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(this.elStyle);
            elDiv.append(elFormField);
            elStyleSectionDiv.append(elDiv);

            var elStyleDiv = $('<div id="rbro_text_element_style_settings"></div>');
            _StylePanel2.default.renderStyle(elStyleDiv, 'text_element_', '', _DocElement2.default.type.text, this, this.rb);
            elStyleSectionDiv.append(elStyleDiv);
            panel.append(elStyleSectionDiv);

            var elPrintHeader = $('<div class="rbroPanelSectionHeader"></div>');
            var elPrintHeaderIcon = $('<span id="rbro_text_element_print_header_icon" class="rbroIcon-plus"></span>');
            elDiv = $('<div id="rbro_text_element_print_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    $('#rbro_text_element_print_header').toggleClass('rbroPanelSectionHeaderOpen');
                    $('#rbro_text_element_print_section').toggleClass('rbroHidden');
                    elPrintHeaderIcon.toggleClass('rbroIcon-plus');
                    elPrintHeaderIcon.toggleClass('rbroIcon-minus');
                    if (elPrintHeaderIcon.hasClass('rbroIcon-minus')) {
                        $('#rbro_detail_panel').scrollTop($('#rbro_detail_panel').scrollTop() + elPrintHeader.position().top);
                    }
                    autosize.update($('#rbro_text_element_print_if'));
                }
            });
            elPrintHeader.append(elPrintHeaderIcon);
            elPrintHeader.append('<span>' + this.rb.getLabel('docElementPrintSettings') + '</span>');
            elDiv.append(elPrintHeader);
            panel.append(elDiv);

            var elPrintSectionDiv = $('<div id="rbro_text_element_print_section" class="rbroHidden"></div>');
            elDiv = $('<div id="rbro_text_element_print_if_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_text_element_print_if">' + this.rb.getLabel('docElementPrintIf') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPrintIf = $('<textarea id="rbro_text_element_print_if" rows="1"></textarea>').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('printIf') !== elPrintIf.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_print_if', 'printIf', elPrintIf.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            }).blur(function (event) {
                _this.rb.getPopupWindow().hide();
            });
            autosize(elPrintIf);
            elFormField.append(elPrintIf);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj), _this.selectedObjId, 'rbro_text_element_print_if', 'parameter', _PopupWindow2.default.type.parameterAppend);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_text_element_print_if_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div id="rbro_text_element_remove_empty_element_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_text_element_remove_empty_element">' + this.rb.getLabel('docElementRemoveEmptyElement') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elRemoveEmptyElement = $('<input id="rbro_text_element_remove_empty_element" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_remove_empty_element', 'removeEmptyElement', elRemoveEmptyElement.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elRemoveEmptyElement);
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);
            panel.append(elPrintSectionDiv);

            elDiv = $('<div id="rbro_text_element_always_print_on_same_page_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_text_element_always_print_on_same_page">' + this.rb.getLabel('docElementAlwaysPrintOnSamePage') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elAlwaysPrintOnSamePage = $('<input id="rbro_text_element_always_print_on_same_page" type="checkbox">').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_always_print_on_same_page', 'alwaysPrintOnSamePage', elAlwaysPrintOnSamePage.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elAlwaysPrintOnSamePage);
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);
            panel.append(elPrintSectionDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_text_element_pattern">' + this.rb.getLabel('textElementPattern') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elPattern = $('<input id="rbro_text_element_pattern">').on('input', function (event) {
                var obj = _this.rb.getDataObject(_this.selectedObjId);
                if (obj !== null && obj.getValue('pattern') !== elPattern.val()) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_pattern', 'pattern', elPattern.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            }).focus(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getPatterns(), _this.selectedObjId, 'rbro_text_element_pattern', 'pattern', _PopupWindow2.default.type.pattern);
                }
            }).blur(function (event) {
                _this.rb.getPopupWindow().hide();
            }).mouseup(function (event) {
                event.preventDefault();
                event.stopPropagation();
            });
            elFormField.append(elPattern);
            elFormField.append('<div id="rbro_text_element_pattern_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);
            panel.append(elPrintSectionDiv);

            var elConditionalStyleHeader = $('<div class="rbroPanelSectionHeader"></div>');
            var elConditionalStyleHeaderIcon = $('<span id="rbro_text_element_cs_header_icon" class="rbroIcon-plus"></span>');
            elDiv = $('<div id="rbro_text_element_cs_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    $('#rbro_text_element_cs_header').toggleClass('rbroPanelSectionHeaderOpen');
                    $('#rbro_text_element_cs_section').toggleClass('rbroHidden');
                    elConditionalStyleHeaderIcon.toggleClass('rbroIcon-plus');
                    elConditionalStyleHeaderIcon.toggleClass('rbroIcon-minus');
                    if (elConditionalStyleHeaderIcon.hasClass('rbroIcon-minus')) {
                        $('#rbro_detail_panel').scrollTop($('#rbro_detail_panel').scrollTop() + elConditionalStyleHeader.position().top);
                    }
                    autosize.update($('#rbro_text_element_cs_condition'));
                }
            });
            elConditionalStyleHeader.append(elConditionalStyleHeaderIcon);
            elConditionalStyleHeader.append('<span>' + this.rb.getLabel('docElementConditionalStyle') + '</span>');
            elDiv.append(elConditionalStyleHeader);
            panel.append(elDiv);

            var elCondStyleSectionDiv = $('<div id="rbro_text_element_cs_section" class="rbroHidden"></div>');
            elDiv = $('<div id="rbro_text_element_cs_condition_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_text_element_cs_condition">' + this.rb.getLabel('docElementConditionalStyleCondition') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elCondStyleCondition = $('<textarea id="rbro_text_element_cs_condition" rows="1"></textarea>').on('input', function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_cs_condition', 'cs_condition', elCondStyleCondition.val(), _SetValueCmd2.default.type.text, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            autosize(elCondStyleCondition);
            elFormField.append(elCondStyleCondition);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObj = _this.rb.getDataObject(_this.selectedObjId);
                if (selectedObj !== null) {
                    _this.rb.getPopupWindow().show(_this.rb.getParameterItems(selectedObj), _this.selectedObjId, 'rbro_text_element_cs_condition', 'cs_condition', _PopupWindow2.default.type.parameterAppend);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_text_element_cs_condition_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elCondStyleSectionDiv.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_text_element_cs_style_id">' + this.rb.getLabel('docElementStyle') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            this.cs_elStyle = $('<select id="rbro_text_element_cs_style_id"></select>').change(function (event) {
                if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                    var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_cs_style_id', 'cs_styleId', _this.cs_elStyle.val(), _SetValueCmd2.default.type.select, _this.rb);
                    _this.rb.executeCommand(cmd);
                }
            });
            elFormField.append(this.cs_elStyle);
            elDiv.append(elFormField);
            elCondStyleSectionDiv.append(elDiv);

            var elCondStyleDiv = $('<div id="rbro_text_element_cs_style_settings"></div>');
            _StylePanel2.default.renderStyle(elCondStyleDiv, 'text_element_cs_', 'cs_', _DocElement2.default.type.text, this, this.rb);
            elCondStyleSectionDiv.append(elCondStyleDiv);
            panel.append(elCondStyleSectionDiv);

            if (this.rb.getProperty('enableSpreadsheet')) {
                var elSpreadsheetHeader = $('<div class="rbroPanelSectionHeader"></div>');
                var elSpreadsheetHeaderIcon = $('<span id="rbro_text_element_spreadsheet_header_icon" class="rbroIcon-plus"></span>');
                elDiv = $('<div id="rbro_text_element_spreadsheet_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        $('#rbro_text_element_spreadsheet_header').toggleClass('rbroPanelSectionHeaderOpen');
                        $('#rbro_text_element_spreadsheet_section').toggleClass('rbroHidden');
                        elSpreadsheetHeaderIcon.toggleClass('rbroIcon-plus');
                        elSpreadsheetHeaderIcon.toggleClass('rbroIcon-minus');
                        if (elSpreadsheetHeaderIcon.hasClass('rbroIcon-minus')) {
                            $('#rbro_detail_panel').scrollTop($('#rbro_detail_panel').scrollTop() + elSpreadsheetHeader.position().top);
                        }
                    }
                });
                elSpreadsheetHeader.append(elSpreadsheetHeaderIcon);
                elSpreadsheetHeader.append('<span>' + this.rb.getLabel('docElementSpreadsheet') + '</span>');
                elDiv.append(elSpreadsheetHeader);
                panel.append(elDiv);

                var elSpreadsheetSectionDiv = $('<div id="rbro_text_element_spreadsheet_section" class="rbroHidden"></div>');
                elDiv = $('<div id="rbro_text_element_spreadsheet_hide_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_text_element_spreadsheet_hide">' + this.rb.getLabel('docElementSpreadsheetHide') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetHide = $('<input id="rbro_text_element_spreadsheet_hide" type="checkbox">').change(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_spreadsheet_hide', 'spreadsheet_hide', elSpreadsheetHide.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elSpreadsheetHide);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_text_element_spreadsheet_column_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_text_element_spreadsheet_column">' + this.rb.getLabel('docElementSpreadsheetColumn') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetColumn = $('<input id="rbro_text_element_spreadsheet_column">').on('input', function (event) {
                    var obj = _this.rb.getDataObject(_this.selectedObjId);
                    if (obj !== null && obj.getValue('spreadsheet_column') !== elSpreadsheetColumn.val()) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_spreadsheet_column', 'spreadsheet_column', elSpreadsheetColumn.val(), _SetValueCmd2.default.type.text, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                utils.setInputPositiveInteger(elSpreadsheetColumn);
                elFormField.append(elSpreadsheetColumn);
                elFormField.append('<div id="rbro_text_element_spreadsheet_column_error" class="rbroErrorMessage"></div>');
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_text_element_spreadsheet_add_empty_row_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_text_element_spreadsheet_add_empty_row">' + this.rb.getLabel('docElementSpreadsheetAddEmptyRow') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetAddEmptyRow = $('<input id="rbro_text_element_spreadsheet_add_empty_row" type="checkbox">').change(function (event) {
                    if (_this.rb.getDataObject(_this.selectedObjId) !== null) {
                        var cmd = new _SetValueCmd2.default(_this.selectedObjId, 'rbro_text_element_spreadsheet_add_empty_row', 'spreadsheet_addEmptyRow', elSpreadsheetAddEmptyRow.is(":checked"), _SetValueCmd2.default.type.checkbox, _this.rb);
                        _this.rb.executeCommand(cmd);
                    }
                });
                elFormField.append(elSpreadsheetAddEmptyRow);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);
                panel.append(elSpreadsheetSectionDiv);
            }

            $('#rbro_detail_panel').append(panel);
            this.renderStyleSelect();
        }
    }, {
        key: 'renderStyleSelect',
        value: function renderStyleSelect() {
            this.elStyle.empty();
            this.cs_elStyle.empty();
            this.elStyle.append('<option value="">' + this.rb.getLabel('styleNone') + '</option>');
            this.cs_elStyle.append('<option value="">' + this.rb.getLabel('styleNone') + '</option>');
            var styles = this.rb.getStyles();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(styles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var style = _step.value;

                    this.elStyle.append('<option value="' + style.getId() + '">' + style.getName() + '</option>');
                    this.cs_elStyle.append('<option value="' + style.getId() + '">' + style.getName() + '</option>');
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'updateAutosizeInputs',
        value: function updateAutosizeInputs() {
            autosize.update($('#rbro_text_element_content'));
            autosize.update($('#rbro_text_element_print_if'));
            autosize.update($('#rbro_text_element_cs_condition'));
        }
    }, {
        key: 'show',
        value: function show(data) {
            $('#rbro_text_element_panel').removeClass('rbroHidden');
            this.updateData(data);
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#rbro_text_element_panel').addClass('rbroHidden');
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {TextElement|TableTextElement} data
         */

    }, {
        key: 'updateData',
        value: function updateData(data) {
            if (data !== null) {
                $('#rbro_text_element_content').prop('disabled', false);
                $('#rbro_text_element_eval').prop('disabled', false);
                $('#rbro_text_element_position_x').prop('disabled', false);
                $('#rbro_text_element_position_y').prop('disabled', false);
                $('#rbro_text_element_width').prop('disabled', false);
                $('#rbro_text_element_height').prop('disabled', false);
                $('#rbro_text_element_print_if').prop('disabled', false);
                $('#rbro_text_element_remove_empty_element').prop('disabled', false);
                $('#rbro_text_element_always_print_on_same_page').prop('disabled', false);
                $('#rbro_text_element_pattern').prop('disabled', false);
                $('#rbro_text_element_cs_condition').prop('disabled', false);
                $('#rbro_text_element_style_id').prop('disabled', false);
                $('#rbro_text_element_spreadsheet_hide').prop('disabled', false);
                $('#rbro_text_element_spreadsheet_column').prop('disabled', false);
                $('#rbro_text_element_spreadsheet_add_empty_row').prop('disabled', false);

                $('#rbro_text_element_content').val(data.getValue('content'));
                $('#rbro_text_element_eval').prop('checked', data.getValue('eval'));
                $('#rbro_text_element_width').val(data.getValue('width'));
                $('#rbro_text_element_height').val(data.getValue('height'));
                $('#rbro_text_element_print_if').val(data.getValue('printIf'));
                $('#rbro_text_element_pattern').val(data.getValue('pattern'));
                if (!(data instanceof _TableTextElement2.default)) {
                    $('#rbro_text_element_position_x').val(data.getValue('x'));
                    $('#rbro_text_element_position_y').val(data.getValue('y'));
                    $('#rbro_text_element_remove_empty_element').prop('checked', data.getValue('removeEmptyElement'));
                    $('#rbro_text_element_always_print_on_same_page').prop('checked', data.getValue('alwaysPrintOnSamePage'));
                    $('#rbro_text_element_spreadsheet_hide').prop('checked', data.getValue('spreadsheet_hide'));
                    $('#rbro_text_element_spreadsheet_column').val(data.getValue('spreadsheet_column'));
                    $('#rbro_text_element_spreadsheet_add_empty_row').prop('checked', data.getValue('spreadsheet_addEmptyRow'));
                    $('#rbro_text_element_print_if_row').show();
                    $('#rbro_text_element_remove_empty_element_row').show();
                    $('#rbro_text_element_always_print_on_same_page_row').show();
                    $('#rbro_text_element_spreadsheet_hide').show();
                    $('#rbro_text_element_spreadsheet_column').show();
                    $('#rbro_text_element_spreadsheet_header').show();
                    $('#rbro_text_element_spreadsheet_section').show();
                } else {
                    $('#rbro_text_element_position_x').val(data.getOffsetX());
                    $('#rbro_text_element_remove_empty_element_row').hide();
                    $('#rbro_text_element_always_print_on_same_page_row').hide();
                    var tableBandObj = this.rb.getDataObject(data.parentId);
                    if (tableBandObj !== null && tableBandObj.getValue('tableBand') === 'header') {
                        $('#rbro_text_element_print_if_row').show();
                    } else {
                        $('#rbro_text_element_print_if_row').hide();
                    }
                    $('#rbro_text_element_spreadsheet_hide').hide();
                    $('#rbro_text_element_spreadsheet_column').hide();
                    $('#rbro_text_element_spreadsheet_header').hide();
                    $('#rbro_text_element_spreadsheet_section').hide();
                }
                $('#rbro_text_element_cs_condition').val(data.getValue('cs_condition'));

                $('#rbro_text_element_style_id').val(data.getValue('styleId'));
                if (data.getValue('styleId') !== '') {
                    $('#rbro_text_element_style_settings').hide();
                } else {
                    $('#rbro_text_element_style_settings').show();
                }
                $('#rbro_text_element_cs_style_id').val(data.getValue('cs_styleId'));
                if (data.getValue('cs_styleId') != '') {
                    $('#rbro_text_element_cs_style_settings').hide();
                } else {
                    $('#rbro_text_element_cs_style_settings').show();
                }
                if (data.getXTagId() !== '') {
                    $('#rbro_text_element_position_row label').text(this.rb.getLabel('docElementPosition') + ':');
                    $('#rbro_text_element_position_row label').removeClass('rbroDisabled');
                    $('#rbro_text_element_position_x').prop('disabled', false);
                } else {
                    $('#rbro_text_element_position_row label').text(this.rb.getLabel('docElementPositionX') + ':');
                    $('#rbro_text_element_position_row label').addClass('rbroDisabled');
                    $('#rbro_text_element_position_x').prop('disabled', true);
                }
                if (data.getYTagId() !== '') {
                    $('#rbro_text_element_position_y').show();
                } else {
                    $('#rbro_text_element_position_y').hide();
                }
                if (data.getHeightTagId() !== '') {
                    $('#rbro_text_element_size_row label').text(this.rb.getLabel('docElementSize') + ':');
                    $('#rbro_text_element_height').show();
                } else {
                    $('#rbro_text_element_size_row label').text(this.rb.getLabel('docElementWidth') + ':');
                    $('#rbro_text_element_height').hide();
                }
                if (data.hasBorderSettings()) {
                    $('#rbro_text_element_border_div').show();
                    $('#rbro_text_element_cs_border_div').show();
                } else {
                    $('#rbro_text_element_border_div').hide();
                    $('#rbro_text_element_cs_border_div').hide();
                }
                this.selectedObjId = data.getId();
            } else {
                $('#rbro_text_element_content').prop('disabled', true);
                $('#rbro_text_element_eval').prop('disabled', true);
                $('#rbro_text_element_position_x').prop('disabled', true);
                $('#rbro_text_element_position_y').prop('disabled', true);
                $('#rbro_text_element_width').prop('disabled', true);
                $('#rbro_text_element_height').prop('disabled', true);
                $('#rbro_text_element_print_if').prop('disabled', true);
                $('#rbro_text_element_remove_empty_element').prop('disabled', true);
                $('#rbro_text_element_always_print_on_same_page').prop('disabled', true);
                $('#rbro_text_element_pattern').prop('disabled', false);
                $('#rbro_text_element_cs_condition').prop('disabled', true);
                $('#rbro_text_element_style_id').prop('disabled', true);
                $('#rbro_text_element_spreadsheet_hide').prop('disabled', true);
                $('#rbro_text_element_spreadsheet_column').prop('disabled', true);
                $('#rbro_text_element_spreadsheet_add_empty_row').prop('disabled', true);
                this.selectedObjId = null;
            }
            _StylePanel2.default.updateStyleData(data, 'text_element_', '', _DocElement2.default.type.text);
            _StylePanel2.default.updateStyleData(data, 'text_element_cs_', 'cs_', _DocElement2.default.type.text);

            this.updateAutosizeInputs();
            this.updateErrors();
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation) {
            if (obj instanceof _Style2.default) {
                if (operation === _Command2.default.operation.add || operation === _Command2.default.operation.move) {
                    this.renderStyleSelect();
                    var selectedObj = this.rb.getDataObject(this.selectedObjId);
                    if (selectedObj !== null) {
                        $('#rbro_text_element_style_id').val(selectedObj.getValue('styleId'));
                        $('#rbro_text_element_cs_style_id').val(selectedObj.getValue('cs_styleId'));
                    }
                } else if (operation === _Command2.default.operation.remove) {
                    this.elStyle.find('option[value=\'' + obj.getId() + '\']').remove();
                    this.cs_elStyle.find('option[value=\'' + obj.getId() + '\']').remove();
                } else if (operation === _Command2.default.operation.rename) {
                    this.elStyle.find('option[value=\'' + obj.getId() + '\']').text(obj.getName());
                    this.cs_elStyle.find('option[value=\'' + obj.getId() + '\']').text(obj.getName());
                }
                if ($('#rbro_text_element_style_id').val() === '') {
                    $('#rbro_text_element_style_settings').show();
                } else {
                    $('#rbro_text_element_style_settings').hide();
                }
                if ($('#rbro_text_element_cs_style_id').val() === '') {
                    $('#rbro_text_element_cs_style_settings').show();
                } else {
                    $('#rbro_text_element_cs_style_settings').hide();
                }
            }
        }

        /**
         * Updates displayed errors of currently selected data object.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#rbro_text_element_panel .rbroFormRow').removeClass('rbroError');
            $('#rbro_text_element_panel .rbroPanelSection').removeClass('rbroError');
            $('#rbro_text_element_panel .rbroErrorMessage').text('');
            var selectedObj = this.rb.getDataObject(this.selectedObjId);
            if (selectedObj !== null) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = (0, _getIterator3.default)(selectedObj.getErrors()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var error = _step2.value;

                        var rowId = 'rbro_text_element_' + error.field + '_row';
                        var errorId = 'rbro_text_element_' + error.field + '_error';
                        var errorMsg = this.rb.getLabel(error.msg_key);
                        if (error.info) {
                            errorMsg = errorMsg.replace('${info}', '<span class="rbroErrorMessageInfo">' + error.info + '</span>');
                        }
                        $('#' + rowId).addClass('rbroError');
                        $('#' + errorId).html(errorMsg);
                        if (error.field === 'print_if' || error.field === 'pattern') {
                            $('#rbro_text_element_print_header').addClass('rbroError');
                            if (!$('#rbro_text_element_print_header').hasClass('rbroPanelSectionHeaderOpen')) {
                                $('#rbro_text_element_print_header').trigger('click');
                            }
                        } else if (error.field === 'cs_condition') {
                            $('#rbro_text_element_cs_header').addClass('rbroError');
                            if (!$('#rbro_text_element_cs_header').hasClass('rbroPanelSectionHeaderOpen')) {
                                $('#rbro_text_element_cs_header').trigger('click');
                            }
                        } else if (error.field === 'spreadsheet_column') {
                            $('#rbro_text_element_spreadsheet_header').addClass('rbroError');
                            if (!$('#rbro_text_element_spreadsheet_header').hasClass('rbroPanelSectionHeaderOpen')) {
                                $('#rbro_text_element_spreadsheet_header').trigger('click');
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getSelectedObjId',
        value: function getSelectedObjId() {
            return this.selectedObjId;
        }
    }]);
    return TextElementPanel;
}();

exports.default = TextElementPanel;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
__webpack_require__(76);
module.exports = __webpack_require__(134);

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(9)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
var $Object = __webpack_require__(9).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
var $Object = __webpack_require__(9).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
var $Object = __webpack_require__(9).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);
module.exports = __webpack_require__(9).Object.getPrototypeOf;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140);
module.exports = __webpack_require__(9).Object.setPrototypeOf;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
__webpack_require__(141);
__webpack_require__(143);
__webpack_require__(144);
module.exports = __webpack_require__(9).Symbol;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
__webpack_require__(77);
module.exports = __webpack_require__(55).f('iterator');

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(18)
  , toLength  = __webpack_require__(132)
  , toIndex   = __webpack_require__(131);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(42)
  , TAG = __webpack_require__(19)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(34)
  , gOPS    = __webpack_require__(70)
  , pIE     = __webpack_require__(48);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17).document && document.documentElement;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(42);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(42);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(46)
  , descriptor     = __webpack_require__(35)
  , setToStringTag = __webpack_require__(49)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(27)(IteratorPrototype, __webpack_require__(19)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(34)
  , toIObject = __webpack_require__(18);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(36)('meta')
  , isObject = __webpack_require__(30)
  , has      = __webpack_require__(22)
  , setDesc  = __webpack_require__(23).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(29)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(23)
  , anObject = __webpack_require__(25)
  , getKeys  = __webpack_require__(34);

module.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(18)
  , gOPN      = __webpack_require__(69).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(30)
  , anObject = __webpack_require__(25);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(65)(Function.call, __webpack_require__(47).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(52)
  , defined   = __webpack_require__(43);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(52)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(52)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(118)
  , ITERATOR  = __webpack_require__(19)('iterator')
  , Iterators = __webpack_require__(33);
module.exports = __webpack_require__(9).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(25)
  , get      = __webpack_require__(133);
module.exports = __webpack_require__(9).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(116)
  , step             = __webpack_require__(124)
  , Iterators        = __webpack_require__(33)
  , toIObject        = __webpack_require__(18);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(68)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(26)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(26);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(21), 'Object', {defineProperty: __webpack_require__(23).f});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(18)
  , $getOwnPropertyDescriptor = __webpack_require__(47).f;

__webpack_require__(73)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(75)
  , $getPrototypeOf = __webpack_require__(71);

__webpack_require__(73)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(26);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(129).set});

/***/ }),
/* 141 */
/***/ (function(module, exports) {



/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(17)
  , has            = __webpack_require__(22)
  , DESCRIPTORS    = __webpack_require__(21)
  , $export        = __webpack_require__(26)
  , redefine       = __webpack_require__(74)
  , META           = __webpack_require__(126).KEY
  , $fails         = __webpack_require__(29)
  , shared         = __webpack_require__(51)
  , setToStringTag = __webpack_require__(49)
  , uid            = __webpack_require__(36)
  , wks            = __webpack_require__(19)
  , wksExt         = __webpack_require__(55)
  , wksDefine      = __webpack_require__(54)
  , keyOf          = __webpack_require__(125)
  , enumKeys       = __webpack_require__(119)
  , isArray        = __webpack_require__(122)
  , anObject       = __webpack_require__(25)
  , toIObject      = __webpack_require__(18)
  , toPrimitive    = __webpack_require__(53)
  , createDesc     = __webpack_require__(35)
  , _create        = __webpack_require__(46)
  , gOPNExt        = __webpack_require__(128)
  , $GOPD          = __webpack_require__(47)
  , $DP            = __webpack_require__(23)
  , $keys          = __webpack_require__(34)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(69).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(48).f  = $propertyIsEnumerable;
  __webpack_require__(70).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(45)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(27)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54)('asyncIterator');

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54)('observable');

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(80);
__webpack_require__(79);
module.exports = __webpack_require__(81);


/***/ })
/******/ ]);
//# sourceMappingURL=reportbro.js.map