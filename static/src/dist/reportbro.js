/*!
 * Copyright (C) 2020 jobsta
 * 
 * This file is part of ReportBro, a library to generate PDF and Excel reports.
 * Demos can be found at https://www.reportbro.com
 * 
 * Dual licensed under AGPLv3 and ReportBro commercial license:
 * https://www.reportbro.com/license
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see https://www.gnu.org/licenses/
 * 
 * Details for ReportBro commercial license can be found at
 * https://www.reportbro.com/license/agreement
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

var _defineProperty = __webpack_require__(100);

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

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(102);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(99);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(47);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(47);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _MovePanelItemCmd = __webpack_require__(61);

var _MovePanelItemCmd2 = _interopRequireDefault(_MovePanelItemCmd);

var _AddDeleteDocElementCmd = __webpack_require__(19);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Band = __webpack_require__(20);

var _Band2 = _interopRequireDefault(_Band);

var _Parameter = __webpack_require__(13);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _utils = __webpack_require__(6);

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
        value: function setup(openPanelItem) {
            var container = this.getContainer();
            if (container !== null) {
                // adapt position if new element is outside container
                var containerSize = container.getContentSize();
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
         * Register event handler for a container element so it can be dragged and
         * allow selection on double click.
         */

    }, {
        key: 'registerContainerEventHandlers',
        value: function registerContainerEventHandlers() {
            var _this = this;

            this.el.dblclick(function (event) {
                if (!_this.rb.isSelectedObject(_this.id)) {
                    _this.rb.selectObject(_this.id, true);
                    event.stopPropagation();
                }
            }).mousedown(function (event) {
                if (event.shiftKey) {
                    _this.rb.deselectObject(_this.id);
                    event.stopPropagation();
                } else {
                    if (_this.rb.isSelectedObject(_this.id)) {
                        _this.rb.getDocument().startDrag(event.originalEvent.pageX, event.originalEvent.pageY, _this.id, _this.containerId, _this.linkedContainerId, _this.getElementType(), DocElement.dragType.element);
                        event.stopPropagation();
                    } else {
                        _this.rb.deselectAll(true);
                    }
                }
            }).on('touchstart', function (event) {
                if (_this.rb.isSelectedObject(_this.id)) {
                    var absPos = (0, _utils.getEventAbsPos)(event);
                    _this.rb.getDocument().startDrag(absPos.x, absPos.y, _this.id, _this.containerId, _this.linkedContainerId, _this.getElementType(), DocElement.dragType.element);
                }
                event.preventDefault();
            }).on('touchmove', function (event) {
                _this.rb.getDocument().processDrag(event);
            }).on('touchend', function (event) {
                _this.rb.getDocument().stopDrag();
            });
        }

        /**
         * Register event handlers so element can be selected, dragged and resized.
         */

    }, {
        key: 'registerEventHandlers',
        value: function registerEventHandlers() {
            var _this2 = this;

            this.el.dblclick(function (event) {
                _this2.handleDoubleClick(event);
            }).mousedown(function (event) {
                _this2.handleClick(event, false);
            }).on('touchstart', function (event) {
                if (!_this2.rb.isSelectedObject(_this2.id)) {
                    _this2.handleClick(event, true);
                } else {
                    var absPos = (0, _utils.getEventAbsPos)(event);
                    _this2.rb.getDocument().startDrag(absPos.x, absPos.y, _this2.id, _this2.containerId, _this2.linkedContainerId, _this2.getElementType(), DocElement.dragType.element);
                    event.preventDefault();
                }
            }).on('touchmove', function (event) {
                if (_this2.rb.isSelectedObject(_this2.id)) {
                    _this2.rb.getDocument().processDrag(event);
                }
            }).on('touchend', function (event) {
                if (_this2.rb.isSelectedObject(_this2.id)) {
                    _this2.rb.getDocument().stopDrag();
                }
            });
        }
    }, {
        key: 'handleDoubleClick',
        value: function handleDoubleClick(event) {
            this.handleClick(event, true);
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
                    var allowSelection = true;
                    if (event.shiftKey) {
                        // do not allow selecting element if one of its children is already selected
                        var children = [];
                        this.appendContainerChildren(children);
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = (0, _getIterator3.default)(children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var child = _step.value;

                                if (this.rb.isSelectedObject(child.getId())) {
                                    allowSelection = false;
                                    break;
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
                    if (allowSelection) {
                        this.rb.selectObject(this.id, !event.shiftKey);
                    }
                    event.stopPropagation();
                }
            } else {
                if (event.shiftKey) {
                    this.rb.deselectObject(this.id);
                } else if (!ignoreSelectedContainer) {
                    this.rb.getDocument().startDrag(event.originalEvent.pageX, event.originalEvent.pageY, this.id, this.containerId, this.linkedContainerId, this.getElementType(), DocElement.dragType.element);
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
        key: 'getContainerContentSize',
        value: function getContainerContentSize() {
            var container = this.getContainer();
            return container !== null ? container.getContentSize() : { width: 0, height: 0 };
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
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = (0, _getIterator3.default)(children), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var child = _step2.value;

                            if (child.getData() instanceof DocElement) {
                                elements.push(child.getData());
                                child.getData().appendContainerChildren(elements);
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
        }

        /**
         * Returns absolute position inside document.
         * @returns {Object} x and y coordinates.
         */

    }, {
        key: 'getAbsolutePosition',
        value: function getAbsolutePosition() {
            var pos = { x: this.xVal, y: this.yVal };
            var container = this.getContainer();
            if (container !== null) {
                var offset = container.getOffset();
                pos.x += offset.x;
                pos.y += offset.y;
            }
            return pos;
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

            if (x !== this.xVal && this.hasProperty('x')) {
                var cmd = new _SetValueCmd2.default(this.id, 'x', '' + x, _SetValueCmd2.default.type.text, this.rb);
                cmd.disableSelect();
                cmdGroup.addCommand(cmd);
            }
            if (y !== this.yVal && this.hasProperty('y')) {
                var _cmd = new _SetValueCmd2.default(this.id, 'y', '' + y, _SetValueCmd2.default.type.text, this.rb);
                _cmd.disableSelect();
                cmdGroup.addCommand(_cmd);
            }
            if (width !== this.getDisplayWidth() && this.hasProperty('width')) {
                this.addCommandsForChangedWidth(width, true, cmdGroup);
            }
            if (height !== this.getDisplayHeight() && this.hasProperty('height')) {
                var _cmd2 = new _SetValueCmd2.default(this.id, 'height', '' + height, _SetValueCmd2.default.type.text, this.rb);
                _cmd2.disableSelect();
                cmdGroup.addCommand(_cmd2);
            }

            var linkedContainer = this.getLinkedContainer();
            if (linkedContainer !== null && linkedContainer.getPanelItem() !== null) {
                var linkedContainerSize = { width: width, height: height };
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = (0, _getIterator3.default)(linkedContainer.getPanelItem().getChildren()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var child = _step3.value;

                        if (child.getData() instanceof DocElement) {
                            var docElement = child.getData();
                            docElement.checkBounds(docElement.getValue('xVal'), docElement.getValue('yVal'), docElement.getDisplayWidth(), docElement.getDisplayHeight(), linkedContainerSize, cmdGroup);
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
            }
        }
    }, {
        key: 'getValue',
        value: function getValue(field) {
            return this[field];
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value) {
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
                if (this.linkedContainerId !== null) {
                    var linkedContainer = this.getLinkedContainer();
                    if (linkedContainer !== null) {
                        linkedContainer.setParent(this.getContainer());
                    }
                }
            } else if (['styleId', 'bold', 'italic', 'underline', 'strikethrough', 'horizontalAlignment', 'verticalAlignment', 'textColor', 'backgroundColor', 'font', 'fontSize', 'lineSpacing', 'borderColor', 'borderWidth', 'borderAll', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom'].indexOf(field) !== -1) {

                this.updateStyle();

                if (['borderWidth', 'borderAll', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom'].indexOf(field) !== -1) {
                    this.updateDisplay();
                }
            }
        }

        /**
         * Returns value to use for updating input control.
         * Can be overridden in case update value can be different from internal value, e.g.
         * width for table cells with colspan > 1.
         * @param {Number} field - field name.
         * @param {Number} value - value for update.
         */

    }, {
        key: 'getUpdateValue',
        value: function getUpdateValue(field, value) {
            return value;
        }
    }, {
        key: 'getDisplayWidth',
        value: function getDisplayWidth() {
            return this.widthVal;
        }
    }, {
        key: 'getDisplayHeight',
        value: function getDisplayHeight() {
            return this.heightVal;
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            var fields = this.getProperties();
            fields.splice(0, 0, 'id', 'containerId');
            return fields;
        }

        /**
         * Returns all fields of this object that can be modified in the properties panel.
         * @returns {String[]}
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            return [];
        }

        /**
         * Returns true if the given property is available for this object.
         * @param {String} property - property name.
         * @returns {Boolean}
         */

    }, {
        key: 'hasProperty',
        value: function hasProperty(property) {
            return this.getProperties().indexOf(property) !== -1;
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return DocElement.type.none;
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
            if (utils.convertInputToNumber(this.styleId) === styleId) {
                this.updateStyle();
            }
        }
    }, {
        key: 'getDragDiff',
        value: function getDragDiff(diffX, diffY, dragType, gridSize) {
            var rv = { x: 0, y: 0 };
            var dragX = void 0,
                dragY = void 0;
            var posX1 = this.xVal;
            var posY1 = this.yVal;
            var posX2 = posX1 + this.getDisplayWidth();
            var posY2 = posY1 + this.getDisplayHeight();
            var minWidth = this.getMinWidth();
            var maxWidth = this.getMaxWidth();
            var minHeight = this.getMinHeight();
            if (dragType === DocElement.dragType.element) {
                dragX = posX1 + diffX;
                if (gridSize !== 0) {
                    dragX = utils.roundValueToInterval(dragX, gridSize);
                }
                dragY = posY1 + diffY;
                if (gridSize !== 0) {
                    dragY = utils.roundValueToInterval(dragY, gridSize);
                }
                rv.x = dragX - posX1;
                rv.y = dragY - posY1;
            } else {
                var containerSize = this.getContainerContentSize();
                if (dragType === DocElement.dragType.sizerNW || dragType === DocElement.dragType.sizerN || dragType === DocElement.dragType.sizerNE) {
                    dragY = posY1 + diffY;
                    if (gridSize !== 0) {
                        dragY = utils.roundValueToInterval(dragY, gridSize);
                    }
                    if (dragY > posY2 - minHeight) {
                        if (gridSize !== 0) {
                            dragY = utils.roundValueToLowerInterval(posY2 - minHeight, gridSize);
                        } else {
                            dragY = posY2 - minHeight;
                        }
                    } else if (dragY < 0) {
                        dragY = 0;
                    }
                    rv.y = dragY - posY1;
                }
                if (dragType === DocElement.dragType.sizerNE || dragType === DocElement.dragType.sizerE || dragType === DocElement.dragType.sizerSE) {
                    dragX = posX2 + diffX;
                    if (gridSize !== 0) {
                        dragX = utils.roundValueToInterval(dragX, gridSize);
                    }
                    if (dragX < posX1 + minWidth) {
                        if (gridSize !== 0) {
                            dragX = utils.roundValueToUpperInterval(posX1 + minWidth, gridSize);
                        } else {
                            dragX = posX1 + minWidth;
                        }
                    } else if (dragX > maxWidth) {
                        dragX = maxWidth;
                    }
                    rv.x = dragX - posX2;
                }
                if (dragType === DocElement.dragType.sizerSE || dragType === DocElement.dragType.sizerS || dragType === DocElement.dragType.sizerSW) {
                    dragY = posY2 + diffY;
                    if (gridSize !== 0) {
                        dragY = utils.roundValueToInterval(dragY, gridSize);
                    }
                    if (dragY < posY1 + minHeight) {
                        if (gridSize !== 0) {
                            dragY = utils.roundValueToUpperInterval(posY1 + minHeight, gridSize);
                        } else {
                            dragY = posY1 + minHeight;
                        }
                    } else if (dragY > containerSize.height) {
                        dragY = containerSize.height;
                    }
                    rv.y = dragY - posY2;
                }
                if (dragType === DocElement.dragType.sizerSW || dragType === DocElement.dragType.sizerW || dragType === DocElement.dragType.sizerNW) {
                    dragX = posX1 + diffX;
                    if (gridSize !== 0) {
                        dragX = utils.roundValueToInterval(dragX, gridSize);
                    }
                    if (dragX > posX2 - minWidth) {
                        if (gridSize !== 0) {
                            dragX = utils.roundValueToLowerInterval(posX2 - minWidth, gridSize);
                        } else {
                            dragX = posX2 - minWidth;
                        }
                    } else if (dragX < 0) {
                        dragX = 0;
                    }
                    rv.x = dragX - posX1;
                }
            }
            return rv;
        }
    }, {
        key: 'updateDrag',
        value: function updateDrag(diffX, diffY, dragType, dragContainer, cmdGroup) {
            var posX1 = this.xVal;
            var posY1 = this.yVal;
            var posX2 = posX1 + this.getDisplayWidth();
            var posY2 = posY1 + this.getDisplayHeight();
            var maxWidth = this.getMaxWidth();
            var containerSize = this.getContainerContentSize();
            if (dragType === DocElement.dragType.element) {
                posX1 += diffX;
                posX2 = posX1 + this.getDisplayWidth();
                posY1 += diffY;
                posY2 = posY1 + this.getDisplayHeight();
            } else {
                if (dragType === DocElement.dragType.sizerNW || dragType === DocElement.dragType.sizerN || dragType === DocElement.dragType.sizerNE) {
                    posY1 += diffY;
                }
                if (dragType === DocElement.dragType.sizerNE || dragType === DocElement.dragType.sizerE || dragType === DocElement.dragType.sizerSE) {
                    posX2 += diffX;
                }
                if (dragType === DocElement.dragType.sizerSE || dragType === DocElement.dragType.sizerS || dragType === DocElement.dragType.sizerSW) {
                    posY2 += diffY;
                }
                if (dragType === DocElement.dragType.sizerSW || dragType === DocElement.dragType.sizerW || dragType === DocElement.dragType.sizerNW) {
                    posX1 += diffX;
                }
                if (posX1 < 0) {
                    posX1 = 0;
                }
                if (posX2 < posX1) {
                    posX2 = posX1;
                }
                if (posY1 < 0) {
                    posY1 = 0;
                }
                if (posY2 < posY1) {
                    posY2 = posY1;
                }
                if (posX2 > maxWidth) {
                    posX2 = maxWidth;
                }
                if (posY2 > containerSize.height) {
                    posY2 = containerSize.height;
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
                    _containerSize = dragContainer.getContentSize();
                    if (container !== null) {
                        var relativeOffset = dragContainer.getOffsetTo(container);
                        posX1 -= relativeOffset.x;
                        posY1 -= relativeOffset.y;
                    }
                } else {
                    _containerSize = container.getContentSize();
                }
                if (!containerChanged || dragContainer.isElementAllowed(this.getElementType())) {
                    this.checkBounds(posX1, posY1, width, height, _containerSize, cmdGroup);

                    if (containerChanged) {
                        var cmd = new _SetValueCmd2.default(this.id, 'containerId', dragContainer.getId(), _SetValueCmd2.default.type.internal, this.rb);
                        cmdGroup.addCommand(cmd);
                        cmd = new _MovePanelItemCmd2.default(this.getPanelItem(), dragContainer.getPanelItem(), dragContainer.getPanelItem().getChildren().length, this.rb);
                        cmdGroup.addCommand(cmd);
                    }

                    if (cmdGroup.isEmpty()) {
                        // nothing was changed, make sure displayed element is updated to saved position/size after drag
                        this.updateDisplay();
                    }
                } else {
                    this.updateDisplay();
                }
            } else {
                this.updateDisplayInternal(posX1, posY1, width, height);
            }
        }
    }, {
        key: 'select',
        value: function select() {
            var _this3 = this;

            if (this.el !== null) {
                var elSizerContainer = this.getSizerContainerElement();
                var sizers = this.getSizers();
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                    var _loop = function _loop() {
                        var sizer = _step4.value;

                        var sizerVal = sizer;
                        var elSizer = $('<div class="rbroSizer rbroSizer' + sizer + '"></div>').mousedown(function (event) {
                            _this3.rb.getDocument().startDrag(event.pageX, event.pageY, _this3.id, _this3.containerId, _this3.linkedContainerId, _this3.getElementType(), DocElement.dragType['sizer' + sizerVal]);
                            event.stopPropagation();
                        }).on('touchstart', function (event) {
                            if (_this3.rb.isSelectedObject(_this3.id)) {
                                var absPos = (0, _utils.getEventAbsPos)(event);
                                _this3.rb.getDocument().startDrag(absPos.x, absPos.y, _this3.id, _this3.containerId, _this3.linkedContainerId, _this3.getElementType(), DocElement.dragType['sizer' + sizerVal]);
                            }
                            event.preventDefault();
                            event.stopPropagation();
                        }).on('touchmove', function (event) {
                            _this3.rb.getDocument().processDrag(event);
                        }).on('touchend', function (event) {
                            _this3.rb.getDocument().stopDrag();
                        });

                        elSizerContainer.append(elSizer);
                    };

                    for (var _iterator4 = (0, _getIterator3.default)(sizers), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                        _loop();
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

                this.el.addClass('rbroSelected');
                this.el.css('z-index', '10');
            }
            this.selected = true;
        }
    }, {
        key: 'deselect',
        value: function deselect() {
            if (this.el !== null) {
                var elSizerContainer = this.getSizerContainerElement();
                elSizerContainer.find('.rbroSizer').remove();
                this.el.css('z-index', '');
                this.el.removeClass('rbroSelected');
            }
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
    }, {
        key: 'hasBorderSettings',
        value: function hasBorderSettings() {
            return false;
        }

        /**
         * Returns true if the element can be selected when it is inside a
         * selection area (rectangle specified with pressed mouse button).
         */

    }, {
        key: 'isAreaSelectionAllowed',
        value: function isAreaSelectionAllowed() {
            return true;
        }
    }, {
        key: 'isDraggingAllowed',
        value: function isDraggingAllowed() {
            return true;
        }

        /**
         * Returns true if another element can be dropped into this element (or its corresponding panel item).
         */

    }, {
        key: 'isDroppingAllowed',
        value: function isDroppingAllowed() {
            return true;
        }

        /**
         * Returns minimum allowed width of element.
         * @returns {Number}.
         */

    }, {
        key: 'getMinWidth',
        value: function getMinWidth() {
            return 20;
        }

        /**
         * Returns maximum allowed width of element.
         * This is needed when the element is resized by dragging so the resized element does not overflow its container.
         * @returns {Number}.
         */

    }, {
        key: 'getMaxWidth',
        value: function getMaxWidth() {
            var containerSize = this.getContainerContentSize();
            return containerSize.width;
        }

        /**
         * Returns minimum allowed height of element.
         * @returns {Number}.
         */

    }, {
        key: 'getMinHeight',
        value: function getMinHeight() {
            return 20;
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
         * Returns all parameters of the data source (which must be an array parameter).
         * Must be overridden when the element has a data source.
         * @returns {[Object]} contains the data source name and all parameters of the data source.
         * Is null in case element does not have a data source.
         */

    }, {
        key: 'getDataSource',
        value: function getDataSource() {
            return null;
        }

        /**
         * Returns all data source parameters of this element and any possible parent elements.
         * @param {Parameter[]} dataSources - array where the data sources will be appended to.
         * @param {DocElement} child - optional child element where the method was called from.
         */

    }, {
        key: 'getAllDataSources',
        value: function getAllDataSources(dataSources, child) {
            if (this.getElementType() === DocElement.type.table || this.getElementType() == DocElement.type.section) {
                if (child && child.getValue('bandType') === _Band2.default.bandType.content) {
                    var dataSource = this.getDataSource();
                    if (dataSource !== null) {
                        dataSources.push(dataSource);
                    }
                }
            }
            var panelItem = this.getPanelItem();
            if (panelItem !== null) {
                var parentPanelItem = panelItem.getParent();
                if (parentPanelItem !== null && parentPanelItem.getData() instanceof DocElement) {
                    parentPanelItem.getData().getAllDataSources(dataSources, this);
                }
            }
        }

        /**
         * Adds SetValue commands to command group parameter in case the specified parameter is used in any of
         * the object fields.
         * @param {Parameter} parameter - parameter which will be renamed.
         * @param {String} newParameterName - new name of the parameter.
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameterName',
        value: function addCommandsForChangedParameterName(parameter, newParameterName, cmdGroup) {}

        /**
         * Adds SetValue command to command group parameter in case the specified parameter is used in the
         * specified object field.
         * @param {Parameter} parameter - parameter which will be renamed.
         * @param {String} newParameterName - new name of the parameter.
         * @param {String} field
         * @param {CommandGroupCmd} cmdGroup - possible SetValue command will be added to this command group.
         */

    }, {
        key: 'addCommandForChangedParameterName',
        value: function addCommandForChangedParameterName(parameter, newParameterName, field, cmdGroup) {
            var paramParent = parameter.getParent();
            var dataSources = [];
            var paramRef = null;
            var newParamRef = null;

            this.getAllDataSources(dataSources, null);

            if (paramParent !== null && paramParent.getValue('type') === _Parameter2.default.type.array) {
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = (0, _getIterator3.default)(dataSources), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var dataSource = _step5.value;

                        if (dataSource.parameters.indexOf(parameter) !== -1) {
                            paramRef = '${' + parameter.getName() + '}';
                            newParamRef = '${' + newParameterName + '}';
                            break;
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
            } else {
                if (paramParent !== null && paramParent.getValue('type') === _Parameter2.default.type.map) {
                    paramRef = '${' + paramParent.getName() + '.' + parameter.getName() + '}';
                    newParamRef = '${' + paramParent.getName() + '.' + newParameterName + '}';
                } else if (parameter.getValue('type') === _Parameter2.default.type.map) {
                    paramRef = '${' + parameter.getName() + '.';
                    newParamRef = '${' + newParameterName + '.';
                } else {
                    var isDataSourceParam = false;
                    var _iteratorNormalCompletion6 = true;
                    var _didIteratorError6 = false;
                    var _iteratorError6 = undefined;

                    try {
                        for (var _iterator6 = (0, _getIterator3.default)(dataSources), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                            var _dataSource = _step6.value;
                            var _iteratorNormalCompletion7 = true;
                            var _didIteratorError7 = false;
                            var _iteratorError7 = undefined;

                            try {
                                for (var _iterator7 = (0, _getIterator3.default)(_dataSource.parameters), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                    var dataSourceParam = _step7.value;

                                    if (dataSourceParam.getName() === parameter.getName()) {
                                        // the changed parameter has the same name as a used data source parameter, therefor
                                        // we are not going to change the parameter reference because it references the data source parameter
                                        isDataSourceParam = true;
                                        break;
                                    }
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

                    if (!isDataSourceParam) {
                        paramRef = '${' + parameter.getName() + '}';
                        newParamRef = '${' + newParameterName + '}';
                    }
                }
            }

            if (paramRef !== null && newParamRef !== null && this.getValue(field).indexOf(paramRef) !== -1) {
                var cmd = new _SetValueCmd2.default(this.id, field, utils.replaceAll(this.getValue(field), paramRef, newParamRef), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(cmd);
            }
        }

        /**
         * Adds AddDeleteDocElementCmd commands to command group parameter to delete this element and
         * any possible existing children.
         * @param {CommandGroupCmd} cmdGroup - AddDeleteDocElementCmd commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForDelete',
        value: function addCommandsForDelete(cmdGroup) {
            var elements = [];
            this.appendContainerChildren(elements);
            elements.push(this);
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = (0, _getIterator3.default)(elements), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var element = _step8.value;

                    var cmd = new _AddDeleteDocElementCmd2.default(false, element.getPanelItem().getPanelName(), element.toJS(), element.getId(), element.getContainerId(), element.getPanelItem().getSiblingPosition(), this.rb);
                    cmdGroup.addCommand(cmd);
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
    }, {
        key: 'addCommandsForChangedWidth',
        value: function addCommandsForChangedWidth(newWidth, disableSelect, cmdGroup) {
            var cmd = new _SetValueCmd2.default(this.id, 'width', '' + newWidth, _SetValueCmd2.default.type.text, this.rb);
            if (disableSelect) {
                cmd.disableSelect();
            }
            cmdGroup.addCommand(cmd);
        }
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
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = (0, _getIterator3.default)(this.getFields()), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var field = _step9.value;

                    if (['x', 'y', 'width', 'height'].indexOf(field) === -1) {
                        ret[field] = this.getValue(field);
                    } else {
                        ret[field] = this.getValue(field + 'Val');
                    }
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

            return ret;
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
    frame: 'frame',
    section: 'section'
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setInputPositiveInteger = setInputPositiveInteger;
exports.setInputDecimal = setInputDecimal;
exports.checkInputDecimal = checkInputDecimal;
exports.convertInputToNumber = convertInputToNumber;
exports.roundValueToInterval = roundValueToInterval;
exports.roundValueToLowerInterval = roundValueToLowerInterval;
exports.roundValueToUpperInterval = roundValueToUpperInterval;
exports.replaceAll = replaceAll;
exports.initColorPicker = initColorPicker;
exports.isValidColor = isValidColor;
exports.insertAtCaret = insertAtCaret;
exports.getDataTransferType = getDataTransferType;
exports.getEventAbsPos = getEventAbsPos;
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

function setInputPositiveInteger(el) {
    el.on('keyup', function () {
        var nvalue = this.value.replace(/[^0-9]/g, '');
        if (this.value !== nvalue) this.value = nvalue;
    });
}

function setInputDecimal(el) {
    el.on('keyup', function () {
        var nvalue = this.value.reverse().replace(/[^0-9\-\.,]|[\-](?=.)|[\.,](?=[0-9]*[\.,])/g, '').reverse();
        var className = this.className;
        var pos = className.indexOf('decimalPlaces');
        if (pos !== -1) {
            pos += 13;
            var pos2 = className.indexOf(' ', pos);
            var places;
            if (pos2 !== -1) {
                places = parseInt(className.substring(pos, pos2), 10);
            } else {
                places = parseInt(className.substr(pos), 10);
            }
            if (!isNaN(places)) {
                pos = nvalue.indexOf('.');
                if (pos === -1) {
                    pos = nvalue.indexOf(',');
                }
                if (pos !== -1 && nvalue.length - 1 - pos > places) {
                    nvalue = nvalue.substring(0, pos + places + 1);
                }
            }
        }
        if (this.value !== nvalue) this.value = nvalue;
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
    if (typeof val === 'number') {
        return val;
    }
    if (typeof val === 'string' && val !== '') {
        var rv = parseFloat(val.replace(',', '.'));
        if (!isNaN(rv)) {
            return rv;
        }
    }
    return 0;
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
    var rv = str;
    if (oldVal !== newVal) {
        while (rv.indexOf(oldVal) !== -1) {
            rv = rv.replace(oldVal, newVal);
        }
    }
    return rv;
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

function isValidColor(color) {
    // test for empty value (transparent) or # and 6 hex digits
    return !color || /^#[0-9A-F]{6}$/i.test(color);
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
    if (parts.length >= 2 && parts[0] === prefix) {
        return parts[1];
    }
    return null;
}

function getEventAbsPos(event) {
    if (window.TouchEvent && event.originalEvent instanceof TouchEvent) {
        if (event.touches.length > 0) {
            var lastTouch = event.touches[event.touches.length - 1];
            return { x: lastTouch.pageX, y: lastTouch.pageY };
        }
    } else {
        return { x: event.originalEvent.pageX, y: event.originalEvent.pageY };
    }
    return null;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Command2 = __webpack_require__(11);

var _Command3 = _interopRequireDefault(_Command2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Command to set a single value of a data object.
 * @class
 */
var SetValueCmd = function (_Command) {
    (0, _inherits3.default)(SetValueCmd, _Command);

    function SetValueCmd(objId, field, value, type, rb) {
        (0, _classCallCheck3.default)(this, SetValueCmd);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SetValueCmd.__proto__ || (0, _getPrototypeOf2.default)(SetValueCmd)).call(this));

        _this.objId = objId;
        _this.field = field;
        _this.value = value;
        _this.type = type;
        _this.rb = rb;

        var obj = rb.getDataObject(objId);
        _this.oldValue = obj.getValue(field);
        _this.firstExecution = true;
        _this.select = true;
        _this.notifyChange = true;
        return _this;
    }

    (0, _createClass3.default)(SetValueCmd, [{
        key: 'getName',
        value: function getName() {
            return 'Set value';
        }
    }, {
        key: 'getObjId',
        value: function getObjId() {
            return this.objId;
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
            obj.setValue(this.field, value);

            if (this.field === 'name') {
                $('#rbro_menu_item_name' + this.objId).text(value);
                $('#rbro_menu_item_name' + this.objId).attr('title', value);
                this.rb.notifyEvent(obj, _Command3.default.operation.rename);
            }
            if (this.notifyChange) {
                this.rb.notifyEvent(obj, _Command3.default.operation.change, this.field);
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
    }, {
        key: 'setNotifyChange',
        value: function setNotifyChange(notify) {
            this.notifyChange = notify;
        }

        /**
         * Returns true if the command can replace the given other command because they target the same field.
         *
         * This information can be useful to avoid separate commands for every keystroke
         * in a text field and generate just one command for the whole changed text instead.
         * @param {Command} otherCmd
         * @returns {boolean}
         */

    }, {
        key: 'allowReplace',
        value: function allowReplace(otherCmd) {
            return otherCmd instanceof SetValueCmd && this.type === SetValueCmd.type.text && this.objId === otherCmd.objId && this.field === otherCmd.field;
        }

        /**
         * Must be called when the command replaces the other command.
          * This must only be called if allowReplace for the same command returned true.
         * @param {Command} otherCmd
         */

    }, {
        key: 'replace',
        value: function replace(otherCmd) {
            this.oldValue = otherCmd.oldValue;
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'SetValueCmd';
        }
    }]);
    return SetValueCmd;
}(_Command3.default);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(101);

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
/* 10 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


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
 * Base class for all commands.
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

        /**
         * Returns true if the command can replace the given other command.
         * @param {Command} otherCmd
         * @returns {boolean}
         */

    }, {
        key: 'allowReplace',
        value: function allowReplace(otherCmd) {
            return false;
        }

        /**
         * Must be called when the command replaces the other command.
          * This must only be called if allowReplace for the same command returned true.
         * @param {Command} otherCmd
         */

    }, {
        key: 'replace',
        value: function replace(otherCmd) {}
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

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _AddDeleteParameterCmd = __webpack_require__(41);

var _AddDeleteParameterCmd2 = _interopRequireDefault(_AddDeleteParameterCmd);

var _AddDeleteStyleCmd = __webpack_require__(42);

var _AddDeleteStyleCmd2 = _interopRequireDefault(_AddDeleteStyleCmd);

var _CommandGroupCmd = __webpack_require__(15);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _MovePanelItemCmd = __webpack_require__(61);

var _MovePanelItemCmd2 = _interopRequireDefault(_MovePanelItemCmd);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Parameter = __webpack_require__(13);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _DocElement = __webpack_require__(5);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _Document = __webpack_require__(25);

var _Document2 = _interopRequireDefault(_Document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A main panel item either represents a data object (doc element, parameter, etc.) or a container (e.g. page header) for
 * other panel items.
 * @class
 */
var MainPanelItem = function () {
    function MainPanelItem(panelName, parent, data, properties, rb) {
        var _this = this;

        (0, _classCallCheck3.default)(this, MainPanelItem);

        this.properties = { hasChildren: false, showAdd: false, showDelete: true, hasDetails: true, visible: true, draggable: false };
        $.extend(this.properties, properties);
        this.panelName = panelName;
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
                _this.rb.startBrowserDrag('panelItem', null, _this.id);
                // avoid calling dragstart handler for main div which disables dragging for all other elements
                event.stopPropagation();
            });
        }
        itemDiv.on('dragover', function (event) {
            if (_this.rb.isBrowserDragActive('panelItem') && _this.rb.getBrowserDragId() !== _this.id) {
                var dropInfo = _this.getDropObjectInfo();
                if (dropInfo.allowDrop) {
                    // without preventDefault for dragover event, the drop event is not fired
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        }).on('dragenter', function (event) {
            if (_this.rb.isBrowserDragActive('panelItem') && _this.rb.getBrowserDragId() !== _this.id) {
                var dropInfo = _this.getDropObjectInfo();
                if (dropInfo.allowDrop) {
                    itemDiv.addClass('rbroMenuItemDragOver');
                    _this.dragEnterCount++;
                    event.preventDefault(); // needed for IE
                }
            }
        }).on('dragleave', function (event) {
            if (_this.rb.isBrowserDragActive('panelItem') && _this.rb.getBrowserDragId() !== _this.id) {
                var dropInfo = _this.getDropObjectInfo();
                if (dropInfo.allowDrop) {
                    _this.dragEnterCount--;
                    if (_this.dragEnterCount === 0) {
                        itemDiv.removeClass('rbroMenuItemDragOver');
                    }
                }
            }
        }).on('drop', function (event) {
            if (_this.rb.isBrowserDragActive('panelItem') && _this.rb.getBrowserDragId() !== _this.id) {
                var dropInfo = _this.getDropObjectInfo();
                if (dropInfo.allowDrop) {
                    _this.dragEnterCount--;
                    itemDiv.removeClass('rbroMenuItemDragOver');

                    var cmdGroup = new _CommandGroupCmd2.default('Move panel item', _this.rb);

                    var draggedObj = _this.rb.getDataObject(_this.rb.getBrowserDragId());
                    if (draggedObj instanceof _DocElement2.default && draggedObj.getValue('containerId') !== dropInfo.container.getId()) {
                        draggedObj.checkBounds(draggedObj.getValue('xVal'), draggedObj.getValue('yVal'), draggedObj.getValue('widthVal'), draggedObj.getValue('heightVal'), dropInfo.container.getSize(), cmdGroup);

                        var _cmd = new _SetValueCmd2.default(draggedObj.getId(), 'containerId', dropInfo.container.getId(), _SetValueCmd2.default.type.internal, _this.rb);
                        cmdGroup.addCommand(_cmd);
                    }
                    var cmd = new _MovePanelItemCmd2.default(draggedObj.getPanelItem(), dropInfo.panel, dropInfo.position, _this.rb);
                    cmdGroup.addCommand(cmd);
                    _this.rb.executeCommand(cmdGroup);
                    event.preventDefault();
                    return false;
                }
            }
        });

        var nameDiv = $('<div class="rbroMenuItemText"><span id="rbro_menu_item_name' + this.id + '">' + name + '</span></div>');
        if (this.properties.showAdd) {
            itemDiv.append($('<div id="rbro_menu_item_add' + this.id + '" class="rbroButton rbroRoundButton rbroIcon-plus"></div>').click(function (event) {
                if (panelName === 'parameter') {
                    var cmd = new _AddDeleteParameterCmd2.default(true, {}, _this.rb.getUniqueId(), _this.getId(), -1, _this.rb);
                    _this.rb.executeCommand(cmd);
                } else if (panelName === 'style') {
                    var _cmd2 = new _AddDeleteStyleCmd2.default(true, {}, _this.rb.getUniqueId(), _this.getId(), -1, _this.rb);
                    _this.rb.executeCommand(_cmd2);
                }
                var newItem = _this.children[_this.children.length - 1];
                _this.rb.selectObject(newItem.getId(), true);
                event.stopPropagation();
            }));
        }
        if (this.properties.showDelete) {
            itemDiv.append($('<div class="rbroButton rbroDeleteButton rbroIcon-cancel"></div>').click(function (event) {
                var cmd = null;
                if (panelName === 'parameter') {
                    cmd = new _AddDeleteParameterCmd2.default(false, _this.getData().toJS(), _this.getId(), _this.parent.getId(), _this.getSiblingPosition(), _this.rb);
                } else if (panelName === 'style') {
                    cmd = new _CommandGroupCmd2.default('Delete', _this);
                    _this.getData().addCommandsForDelete(cmd);
                } else if (_this.isDocElementPanel()) {
                    if (_this.getData() instanceof _DocElement2.default) {
                        cmd = new _CommandGroupCmd2.default('Delete', _this);
                        _this.getData().addCommandsForDelete(cmd);
                    }
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
                if (!_this.rb.isSelectedObject(_this.id)) {
                    var clearSelection = true;
                    if (_this.isDocElementPanel()) {
                        clearSelection = !event.shiftKey;
                    }
                    _this.rb.selectObject(_this.id, clearSelection);
                } else {
                    if (event.shiftKey) {
                        _this.rb.deselectObject(_this.id);
                    }
                }
            }
        });
        if (this.properties.hasChildren) {
            itemDiv.addClass('rbroMenuItemNoChildren');
            nameDiv.append('<div id="rbro_menu_item_children_toggle' + this.id + '" class="rbroMenuArrow rbroIcon-arrow-right"></div>');
            this.element.append($('<ul id="rbro_menu_item_children' + this.id + '" class="rbroHidden"></ul>'));
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
            $('#rbro_menu_item' + this.id).addClass('rbroMenuItemActive');
        }
    }, {
        key: 'setInactive',
        value: function setInactive() {
            $('#rbro_menu_item' + this.id).removeClass('rbroMenuItemActive');
        }
    }, {
        key: 'getParentIds',
        value: function getParentIds() {
            var ids = [];
            var parent = this.getParent();
            while (parent !== null) {
                ids.push(parent.id);
                parent = parent.getParent();
            }
            return ids;
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

        /**
         * Returns child where its data object matches the given name.
         *
         * If multiple children have the same name the first child is returned.
         *
         * @param {string} name - name of child to search for.
         * @returns {[MainPanelItem]} child panel or null if no child with given name exists.
         */

    }, {
        key: 'getChildByName',
        value: function getChildByName(name) {
            return this.getChildByNameExclude(name, null);
        }

        /**
         * Returns child where its data object matches the given name but only if not explicitly excluded.
         *
         * If multiple children have the same name the first child is returned.
         *
         * @param {string} name - name of child to search for.
         * @param {[Object]} excludeChild - data object which will be excluded from search.
         * @returns {[MainPanelItem]} child panel or null if no child with given name exists.
         */

    }, {
        key: 'getChildByNameExclude',
        value: function getChildByNameExclude(name, excludeChild) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var child = _step.value;

                    if (child.getData() !== null && child.getData() !== excludeChild && child.getData().getName() === name) {
                        return child;
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

            return null;
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
    }, {
        key: 'getDropObjectInfo',
        value: function getDropObjectInfo() {
            var rv = { allowDrop: false, panel: null, position: -1, container: null };
            var draggedObj = this.rb.getDataObject(this.rb.getBrowserDragId());
            if (draggedObj !== null) {
                var dropIntoParent = false;
                if (draggedObj instanceof _DocElement2.default) {
                    if (this.data instanceof _DocElement2.default && this.data.isDroppingAllowed()) {
                        // get linked container if available (e.g. container of frame element),
                        // otherwise use the parent container
                        rv.container = this.data.getLinkedContainer();
                        if (rv.container === null) {
                            rv.container = this.data.getContainer();
                            dropIntoParent = true;
                        }
                    } else if (this.panelName === 'band') {
                        rv.container = this.data;
                    }
                    if (rv.container !== null && rv.container.isElementAllowed(draggedObj.getElementType())) {
                        rv.allowDrop = true;
                    }
                } else if (draggedObj instanceof _Parameter2.default) {
                    if (this.data instanceof _Parameter2.default) {
                        var parent = this.data.getParent();
                        if (parent !== null) {
                            if (parent.getValue('type') === _Parameter2.default.type.array) {
                                if (draggedObj.getValue('type') !== _Parameter2.default.type.array && draggedObj.getValue('type') !== _Parameter2.default.type.map && draggedObj.getValue('type') !== _Parameter2.default.type.sum && draggedObj.getValue('type') !== _Parameter2.default.type.average) {
                                    rv.allowDrop = true;
                                    dropIntoParent = true;
                                }
                            } else if (parent.getValue('type') === _Parameter2.default.type.map) {
                                if (draggedObj.getValue('type') !== _Parameter2.default.type.array && draggedObj.getValue('type') !== _Parameter2.default.type.map) {
                                    rv.allowDrop = true;
                                    dropIntoParent = true;
                                }
                            }
                        } else {
                            rv.allowDrop = true;
                            dropIntoParent = true;
                        }
                    } else if (this.panelName === 'parameter') {
                        rv.allowDrop = true;
                    }
                } else if (draggedObj instanceof _Style2.default) {
                    if (this.data instanceof _Style2.default) {
                        rv.allowDrop = true;
                        dropIntoParent = true;
                    } else if (this.panelName === 'style') {
                        rv.allowDrop = true;
                    }
                }

                if (rv.allowDrop) {
                    if (dropIntoParent) {
                        rv.panel = this.getParent();
                        rv.position = this.getSiblingPosition() + 1;
                    } else {
                        rv.panel = this;
                        rv.position = 0;
                    }
                    if (rv.panel === null || rv.panel === draggedObj.getPanelItem().getParent() && rv.position === draggedObj.getPanelItem().getSiblingPosition()) {
                        // do not allow drop if object is not moved (same parent and position)
                        rv.allowDrop = false;
                    }
                }
            }
            return rv;
        }
    }, {
        key: 'isDocElementPanel',
        value: function isDocElementPanel() {
            return this.panelName === _DocElement2.default.type.text || this.panelName === _DocElement2.default.type.image || this.panelName === _DocElement2.default.type.line || this.panelName === _DocElement2.default.type.table || this.panelName === _DocElement2.default.type.pageBreak || this.panelName === _DocElement2.default.type.barCode || this.panelName === _DocElement2.default.type.frame || this.panelName === _DocElement2.default.type.section;
        }
    }]);
    return MainPanelItem;
}();

exports.default = MainPanelItem;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(32);

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _AddDeleteParameterCmd = __webpack_require__(41);

var _AddDeleteParameterCmd2 = _interopRequireDefault(_AddDeleteParameterCmd);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _CommandGroupCmd = __webpack_require__(15);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _utils = __webpack_require__(6);

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
    }, {
        key: 'setHighlightUnused',
        value: function setHighlightUnused(highlightUnused) {
            if (highlightUnused) {
                $('#rbro_menu_item' + this.panelItem.getId()).addClass('rbroUnusedParameter');
            } else {
                $('#rbro_menu_item' + this.panelItem.getId()).removeClass('rbroUnusedParameter');
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
                        var panelItem = new _MainPanelItem2.default('parameter', this.panelItem, parameter, { hasChildren: true, showAdd: parameter.editable, showDelete: parameter.editable, draggable: true }, this.rb);
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
            this.updateMenuItemDisplay();
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
        value: function setValue(field, value) {
            this[field] = value;
            if (field === 'type') {
                this.updateMenuItemDisplay();
            }
        }

        /**
         * Updates visibility of menu panel item (buttons, children) for this parameter.
         *
         * Must be called initially and when parameter type changes.
         */

    }, {
        key: 'updateMenuItemDisplay',
        value: function updateMenuItemDisplay() {
            if (this.type === Parameter.type.array || this.type === Parameter.type.map) {
                $('#rbro_menu_item_add' + this.getId()).show();
                $('#rbro_menu_item_children' + this.getId()).show();
                $('#rbro_menu_item_children_toggle' + this.getId()).show();
            } else {
                $('#rbro_menu_item_add' + this.getId()).hide();
                $('#rbro_menu_item_children' + this.getId()).hide();
                $('#rbro_menu_item_children_toggle' + this.getId()).hide();
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
         * @param {Parameter} parameter - parameter which will be renamed.
         * @param {String} newParameterName - new name of the parameter.
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameterName',
        value: function addCommandsForChangedParameterName(parameter, newParameterName, cmdGroup) {
            this.addCommandForChangedParameterName(parameter, newParameterName, 'expression', cmdGroup);
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = (0, _getIterator3.default)(this.getChildren()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var child = _step3.value;

                    child.addCommandsForChangedParameterName(parameter, newParameterName, cmdGroup);
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
         * Adds SetValue command to command group parameter in case the specified parameter is used in the
         * specified object field.
         * @param {Parameter} parameter - parameter which will be renamed.
         * @param {String} newParameterName - new name of the parameter.
         * @param {String} field
         * @param {CommandGroupCmd} cmdGroup - possible SetValue command will be added to this command group.
         */

    }, {
        key: 'addCommandForChangedParameterName',
        value: function addCommandForChangedParameterName(parameter, newParameterName, field, cmdGroup) {
            var paramParent = parameter.getParent();
            var paramRef = null;
            var newParamRef = null;
            if (paramParent !== null && paramParent.getValue('type') === Parameter.type.map) {
                paramRef = '${' + paramParent.getName() + '.' + parameter.getName() + '}';
                newParamRef = '${' + paramParent.getName() + '.' + newParameterName + '}';
            } else if (parameter.getValue('type') === Parameter.type.map) {
                paramRef = '${' + parameter.getName() + '.';
                newParamRef = '${' + newParameterName + '.';
            } else {
                paramRef = '${' + parameter.getName() + '}';
                newParamRef = '${' + newParameterName + '}';
            }

            if (paramRef !== null && newParamRef !== null && this.getValue(field).indexOf(paramRef) !== -1) {
                var cmd = new _SetValueCmd2.default(this.id, field, utils.replaceAll(this.getValue(field), paramRef, newParamRef), _SetValueCmd2.default.type.text, this.rb);
                cmdGroup.addCommand(cmd);
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
        value: function addUpdateTestDataCmdForChangedParameter(oldParameterName, newParameterName, cmdGroup) {
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
                                        if (val === oldParameterName) {
                                            itemRow[newParameterName] = row[val];
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
                        var cmd = new _SetValueCmd2.default(this.id, 'testData', testDataStr, _SetValueCmd2.default.type.text, this.rb);
                        cmdGroup.addCommand(cmd);
                    }
                } catch (e) {}
            }
        }

        /**
         * Adds AddDeleteParameterCmd to command group parameter in case the
         * parameter type was changed from/to array. The command will add/delete the internal
         * 'row_number' parameter which is available for array parameters.
         * @param {String} newParameterType - new type of the parameter.
         * @param {CommandGroupCmd} cmdGroup - possible AddDeleteParameterCmd command will
         * be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameterType',
        value: function addCommandsForChangedParameterType(newParameterType, cmdGroup) {
            if (this.type !== Parameter.type.array && newParameterType === Parameter.type.array) {
                var initialData = {
                    name: 'row_number', type: Parameter.type.number, eval: false, editable: false,
                    showOnlyNameType: true
                };
                var cmd = new _AddDeleteParameterCmd2.default(true, initialData, this.rb.getUniqueId(), this.getId(), 0, this.rb);
                cmd.setShowDelete(false);
                cmdGroup.addCommand(cmd);
            } else if (this.type === Parameter.type.array && newParameterType !== Parameter.type.array) {
                var children = this.getChildren();
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                    for (var _iterator5 = (0, _getIterator3.default)(children), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                        var child = _step5.value;

                        if (child.getValue('name') === 'row_number' && !child.getValue('editable')) {
                            var _cmd = new _AddDeleteParameterCmd2.default(false, child.toJS(), child.getId(), this.getId(), child.getPanelItem().getSiblingPosition(), this.rb);
                            cmdGroup.addCommand(_cmd);
                            break;
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
            }
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            var ret = {};
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = (0, _getIterator3.default)(this.getFields()), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var field = _step6.value;

                    ret[field] = this.getValue(field);
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

            if (this.type === Parameter.type.array || this.type === Parameter.type.map) {
                var children = [];
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = (0, _getIterator3.default)(this.panelItem.getChildren()), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var child = _step7.value;

                        children.push(child.getData().toJS());
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

                ret.children = children;
            }
            return ret;
        }
    }, {
        key: 'getChildren',
        value: function getChildren() {
            var children = [];
            if (this.type === Parameter.type.array || this.type === Parameter.type.map) {
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                    for (var _iterator8 = (0, _getIterator3.default)(this.panelItem.getChildren()), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                        var child = _step8.value;

                        children.push(child.getData());
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
            return children;
        }

        /**
         * In case of map parameter all child parameters are appended,
         * for other parameter types the parameter itself is appended.
         * Parameters with type array are only added if explicitly specified
         * in allowedTypes parameter. Used for parameter popup window.
          * @param {Object[]} parameters - list where parameter items will be appended to.
         * @param {String[]} allowedTypes - specify allowed parameter types which will be
         * added to the parameter list. If not set all parameter types are allowed.
         */

    }, {
        key: 'appendParameterItems',
        value: function appendParameterItems(parameters, allowedTypes) {
            if (this.type === Parameter.type.map) {
                var parametersToAppend = [];
                if (Array.isArray(allowedTypes)) {
                    var _iteratorNormalCompletion9 = true;
                    var _didIteratorError9 = false;
                    var _iteratorError9 = undefined;

                    try {
                        for (var _iterator9 = (0, _getIterator3.default)(this.getChildren()), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                            var child = _step9.value;

                            if (allowedTypes.indexOf(child.type) !== -1) {
                                parametersToAppend.push(child);
                            }
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
                } else {
                    parametersToAppend = this.getChildren();
                }
                if (parametersToAppend.length > 0) {
                    parameters.push({
                        separator: true, id: this.id,
                        separatorClass: 'rbroParameterGroup', name: this.name });
                }
                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                    for (var _iterator10 = (0, _getIterator3.default)(parametersToAppend), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                        var parameter = _step10.value;

                        var paramName = this.name + '.' + parameter.getName();
                        parameters.push({
                            name: paramName, nameLowerCase: paramName.toLowerCase(),
                            id: parameter.getId(), description: '' });
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
            } else if (this.type !== Parameter.type.array) {
                if (!Array.isArray(allowedTypes) || allowedTypes.indexOf(this.type) !== -1) {
                    parameters.push({
                        name: this.name, nameLowerCase: this.name.toLowerCase(),
                        id: this.id, description: '' });
                }
            } else if (Array.isArray(allowedTypes) && allowedTypes.indexOf(this.type) !== -1) {
                // add array parameter only if explicitly specified in allowedTypes
                parameters.push({
                    name: this.name, nameLowerCase: this.name.toLowerCase(),
                    id: this.id, description: '' });
            }
        }

        /**
         * Appends field parameters of array parameter.
         *
         * Used in parameter popup window for parameter expression.
         *
         * @param {Object[]} parameters - list where parameter items will be appended to.
         * @param {String[]} allowedTypes - specify allowed parameter types which will be
         * added to the parameter list. If not set all parameter types are allowed.
         * @param {Boolean} relative - if true then added parameters are relative
         * to this one. This means that only the parameter name itself will
         * be set for the added parameters and parent parameters will also be searched.
         * If false then the full name including name of parent parameter will be set.
         * This is used when a parameter is selected for a function, e.g. sum or average
         * of a list field.
         */

    }, {
        key: 'appendFieldParameterItems',
        value: function appendFieldParameterItems(parameters, allowedTypes, relative) {
            if (this.type === Parameter.type.array) {
                var firstRowParam = true;
                var _iteratorNormalCompletion11 = true;
                var _didIteratorError11 = false;
                var _iteratorError11 = undefined;

                try {
                    for (var _iterator11 = (0, _getIterator3.default)(this.panelItem.getChildren()), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                        var child = _step11.value;

                        var parameter = child.getData();
                        if (!Array.isArray(allowedTypes) || allowedTypes.indexOf(parameter.getValue('type')) !== -1) {
                            if (relative) {
                                if (firstRowParam) {
                                    parameters.push({
                                        separator: true, id: this.id,
                                        separatorClass: 'rbroParameterRowGroup',
                                        name: this.rb.getLabel('parameterRowParams')
                                    });
                                }
                                var paramName = parameter.getName();
                                parameters.push({
                                    name: paramName, nameLowerCase: paramName.toLowerCase(),
                                    id: parameter.getId(), description: ''
                                });
                            } else {
                                var _paramName = this.name + '.' + parameter.getName();
                                parameters.push({
                                    name: _paramName, nameLowerCase: _paramName.toLowerCase(),
                                    id: parameter.getId(), description: ''
                                });
                            }
                            firstRowParam = false;
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
            }
            if (relative) {
                var parent = this.getParent();
                if (parent !== null) {
                    parent.appendFieldParameterItems(parameters, allowedTypes, relative);
                }
            }
        }

        /**
         * Returns test data of array parameter as array.
         * @param {Boolean} includeFieldInfo - if true a row containing info about the fields will be inserted
         * in the returned rows (first row).
         * @returns {[Object[]]} rows of test data. Null in case parameter is not an array.
         */

    }, {
        key: 'getTestDataRows',
        value: function getTestDataRows(includeFieldInfo) {
            if (this.type !== Parameter.type.array && this.type !== Parameter.type.simpleArray) {
                return null;
            }
            var fields = [];
            if (this.type === Parameter.type.simpleArray) {
                var fieldInfo = { name: 'data', type: this.arrayItemType, allowMultiple: false };
                fields.push(fieldInfo);
            } else {
                var _iteratorNormalCompletion12 = true;
                var _didIteratorError12 = false;
                var _iteratorError12 = undefined;

                try {
                    for (var _iterator12 = (0, _getIterator3.default)(this.getChildren()), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                        var child = _step12.value;

                        if (!child.showOnlyNameType) {
                            var _fieldInfo = { name: child.getName() };
                            if (child.getValue('type') === Parameter.type.simpleArray) {
                                _fieldInfo.type = child.getValue('arrayItemType');
                                _fieldInfo.allowMultiple = true;
                                _fieldInfo.arraySize = 1;
                            } else {
                                _fieldInfo.type = child.getValue('type');
                                _fieldInfo.allowMultiple = false;
                            }
                            fields.push(_fieldInfo);
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
            var rows = [];
            if (fields.length > 0) {
                if (includeFieldInfo) {
                    rows.push(fields);
                }
                try {
                    var testData = JSON.parse(this.testData);
                    if (Array.isArray(testData)) {
                        var _iteratorNormalCompletion13 = true;
                        var _didIteratorError13 = false;
                        var _iteratorError13 = undefined;

                        try {
                            for (var _iterator13 = (0, _getIterator3.default)(testData), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                                var row = _step13.value;

                                var itemRow = {};
                                var hasData = false;
                                var _iteratorNormalCompletion14 = true;
                                var _didIteratorError14 = false;
                                var _iteratorError14 = undefined;

                                try {
                                    for (var _iterator14 = (0, _getIterator3.default)(fields), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                                        var field = _step14.value;

                                        if (field.name in row) {
                                            var fieldData = row[field.name];
                                            if (field.allowMultiple && Array.isArray(fieldData) || !field.allowMultiple && !Array.isArray(fieldData)) {
                                                hasData = true;
                                                itemRow[field.name] = fieldData;
                                                if (field.allowMultiple && fieldData.length > 0) {
                                                    field.arraySize = fieldData.length;
                                                }
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

                                if (hasData) {
                                    rows.push(itemRow);
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
                    }
                } catch (e) {}
            }
            return rows;
        }

        /**
         * Removes ids of possible child elements.
         * @param {Object} data - map containing parameter data.
         */

    }, {
        key: 'getClassName',


        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */
        value: function getClassName() {
            return 'Parameter';
        }
    }], [{
        key: 'removeIds',
        value: function removeIds(data) {
            if (data.children) {
                var _iteratorNormalCompletion15 = true;
                var _didIteratorError15 = false;
                var _iteratorError15 = undefined;

                try {
                    for (var _iterator15 = (0, _getIterator3.default)(data.children), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                        var child = _step15.value;

                        if ('id' in child) {
                            delete child.id;
                        }
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
    'simpleArray': 'simple_array',
    'map': 'map',
    'sum': 'sum',
    'average': 'average'
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _AddDeleteStyleCmd = __webpack_require__(42);

var _AddDeleteStyleCmd2 = _interopRequireDefault(_AddDeleteStyleCmd);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _DocElement = __webpack_require__(5);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _utils = __webpack_require__(6);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
        this.strikethrough = false;
        this.horizontalAlignment = Style.alignment.left;
        this.verticalAlignment = Style.alignment.top;
        this.textColor = '#000000';
        this.backgroundColor = '';
        this.font = rb.getProperty('defaultFont');
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

        this.borderWidthVal = 0;

        this.setInitialData(initialData);
    }

    (0, _createClass3.default)(Style, [{
        key: "setInitialData",
        value: function setInitialData(initialData) {
            for (var key in initialData) {
                if (initialData.hasOwnProperty(key) && this.hasOwnProperty(key)) {
                    this[key] = initialData[key];
                }
            }
            this.borderWidthVal = utils.convertInputToNumber(this.borderWidth);
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: "getFields",
        value: function getFields() {
            return ['id', 'name', 'bold', 'italic', 'underline', 'strikethrough', 'horizontalAlignment', 'verticalAlignment', 'textColor', 'backgroundColor', 'font', 'fontSize', 'lineSpacing', 'borderColor', 'borderWidth', 'borderAll', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom'];
        }
    }, {
        key: "getId",
        value: function getId() {
            return this.id;
        }
    }, {
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "getPanelItem",
        value: function getPanelItem() {
            return this.panelItem;
        }
    }, {
        key: "setPanelItem",
        value: function setPanelItem(panelItem) {
            this.panelItem = panelItem;
        }
    }, {
        key: "getValue",
        value: function getValue(field) {
            return this[field];
        }
    }, {
        key: "setValue",
        value: function setValue(field, value) {
            this[field] = value;

            if (field.indexOf('border') !== -1) {
                if (field === 'borderWidth') {
                    this.borderWidthVal = utils.convertInputToNumber(value);
                }
                Style.setBorderValue(this, field, '', value, this.rb);
            }

            if (field !== 'name') {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(this.rb.getDocElements(true)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var docElement = _step.value;

                        docElement.updateChangedStyle(this.getId());
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
         * Adds commands to command group parameter to set changed property value
         * for all document elements using this style.
         *
         * This should be called when a property of this style was changed so the property
         * will be updated for all document elements as well.
         *
         * @param {String} field - changed field of this style.
         * @param {Object} value - new value for given field.
         * @param {String} type - property type for SetValueCmd.
         * @param {CommandGroupCmd} cmdGroup - commands will be added to this command group.
         */

    }, {
        key: "addCommandsForChangedProperty",
        value: function addCommandsForChangedProperty(field, value, type, cmdGroup) {
            var strId = '' + this.getId();
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = (0, _getIterator3.default)(this.rb.getDocElements(true)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var docElement = _step2.value;

                    if (docElement.hasProperty('styleId')) {
                        if (docElement.getValue('styleId') === strId && docElement.getValue(field) !== value) {
                            var cmd = new _SetValueCmd2.default(docElement.getId(), field, value, type, this.rb);
                            cmd.disableSelect();
                            cmdGroup.addCommand(cmd);
                        }
                        if (docElement.getValue('cs_styleId') === strId && docElement.getValue('cs_' + field) !== value) {
                            var _cmd = new _SetValueCmd2.default(docElement.getId(), 'cs_' + field, value, type, this.rb);
                            _cmd.disableSelect();
                            cmdGroup.addCommand(_cmd);
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

        /**
         * Adds commands to command group parameter to delete this style and reset any references to it.
         * @param {CommandGroupCmd} cmdGroup - commands for deletion of style will be added to this command group.
         */

    }, {
        key: "addCommandsForDelete",
        value: function addCommandsForDelete(cmdGroup) {
            var cmd = void 0;
            var elements = this.rb.getDocElements(true);
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = (0, _getIterator3.default)(elements), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var element = _step3.value;

                    if ((element.getElementType() === _DocElement2.default.type.text || element.getElementType() === _DocElement2.default.type.tableText) && element.getValue('styleId') && utils.convertInputToNumber(element.getValue('styleId')) === this.id) {
                        cmd = new _SetValueCmd2.default(element.getId(), 'styleId', '', _SetValueCmd2.default.type.text, this.rb);
                        cmdGroup.addCommand(cmd);
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

            cmd = new _AddDeleteStyleCmd2.default(false, this.toJS(), this.getId(), this.getPanelItem().getParent().getId(), this.getPanelItem().getSiblingPosition(), this.rb);
            cmdGroup.addCommand(cmd);
        }
    }, {
        key: "addError",
        value: function addError(error) {
            this.errors.push(error);
        }
    }, {
        key: "clearErrors",
        value: function clearErrors() {
            this.errors = [];
        }
    }, {
        key: "getErrors",
        value: function getErrors() {
            return this.errors;
        }
    }, {
        key: "remove",
        value: function remove() {}
    }, {
        key: "select",
        value: function select() {}
    }, {
        key: "deselect",
        value: function deselect() {}
    }, {
        key: "toJS",
        value: function toJS() {
            var ret = {};
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = (0, _getIterator3.default)(this.getFields()), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var field = _step4.value;

                    ret[field] = this.getValue(field);
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

        /**
         * Updates GUI for border settings and borderAll setting of object.
         * @param {Object} obj - document element of which the border settings will be updated.
         * @param {String} field - border field which was modified.
         * @param {String} fieldPrefix - prefix of field to reuse style settings for different
         * sections (e.g. for conditional style).
         * @param {Boolean} value - new value for specified field.
         * @param {ReportBro} rb - ReportBro instance.
         */

    }, {
        key: "getClassName",


        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */
        value: function getClassName() {
            return 'Style';
        }
    }], [{
        key: "setBorderValue",
        value: function setBorderValue(obj, field, fieldPrefix, value, rb) {
            var fieldWithoutPrefix = field;
            if (fieldPrefix.length > 0) {
                fieldWithoutPrefix = fieldWithoutPrefix.substr(fieldPrefix.length);
            }
            if (fieldWithoutPrefix === 'borderLeft' || fieldWithoutPrefix === 'borderTop' || fieldWithoutPrefix === 'borderRight' || fieldWithoutPrefix === 'borderBottom') {
                var borderAll = obj.getValue(fieldPrefix + "borderLeft") && obj.getValue(fieldPrefix + "borderTop") && obj.getValue(fieldPrefix + "borderRight") && obj.getValue(fieldPrefix + "borderBottom");
                var borderAllField = fieldPrefix + "borderAll";
                if (borderAll !== obj[borderAllField]) {
                    obj[borderAllField] = borderAll;
                    rb.notifyEvent(obj, _Command2.default.operation.change, borderAllField);
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
    times: 'times'
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

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Command2 = __webpack_require__(11);

var _Command3 = _interopRequireDefault(_Command2);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Command container for multiple commands. All commands of this container will be executed in a single do/undo operation.
 * @class
 */
var CommandGroupCmd = function (_Command) {
    (0, _inherits3.default)(CommandGroupCmd, _Command);

    function CommandGroupCmd(name, rb) {
        (0, _classCallCheck3.default)(this, CommandGroupCmd);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CommandGroupCmd.__proto__ || (0, _getPrototypeOf2.default)(CommandGroupCmd)).call(this));

        _this.name = name;
        _this.rb = rb;
        _this.commands = [];
        _this.selectObjectIds = [];
        // command index in commands list for each entry in selectObjectIds
        _this.selectionCmdIndex = [];
        return _this;
    }

    (0, _createClass3.default)(CommandGroupCmd, [{
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'do',
        value: function _do() {
            if (this.selectionCmdIndex.length > 0) {
                // enable notifyEvent only for SetValue commands of last selected object.
                // the change event may only be fired for the last object because in between command execution
                // the objects contain different values (although they will be changed to the same value
                // with the last command) and this can lead to reseting the cursor caret in an input field
                // if the cursor is not at the end of the input text.
                var lastSelectionCmdIndex = this.selectionCmdIndex[this.selectionCmdIndex.length - 1];
                for (var i = 0; i < this.commands.length; i++) {
                    var cmd = this.commands[i];
                    if (cmd instanceof _SetValueCmd2.default) {
                        cmd.setNotifyChange(i >= lastSelectionCmdIndex);
                    }
                }
            }

            for (var _i = 0; _i < this.commands.length; _i++) {
                this.commands[_i].do();
            }
            this.selectObjects();
        }
    }, {
        key: 'undo',
        value: function undo() {
            if (this.selectionCmdIndex.length > 0) {
                // enable notifyEvent only for SetValue commands of last selected object.
                // the change event may only be fired for the last object because in between command execution
                // the objects contain different values (although they will be changed to the same value
                // with the last command) and this can lead to reseting the cursor caret in an input field
                // if the cursor is not at the end of the input text.
                var secondSelectionCmdIndex = this.selectionCmdIndex.length > 1 ? this.selectionCmdIndex[1] : this.commands.length;
                for (var i = this.commands.length - 1; i >= 0; i--) {
                    var cmd = this.commands[i];
                    if (cmd instanceof _SetValueCmd2.default) {
                        cmd.setNotifyChange(i < secondSelectionCmdIndex);
                    }
                }
            }

            for (var _i2 = this.commands.length - 1; _i2 >= 0; _i2--) {
                this.commands[_i2].undo();
            }
            this.selectObjects();
        }
    }, {
        key: 'addCommand',
        value: function addCommand(cmd) {
            if (cmd instanceof _SetValueCmd2.default) {
                // disable select for specific command, selection is handled in command group
                // when the commands are executed
                cmd.disableSelect();
            }
            this.commands.push(cmd);
        }

        /**
         * Add id of object which should be selected when this command group is executed.
         * @param {Number} objId - object id
         */

    }, {
        key: 'addSelection',
        value: function addSelection(objId) {
            if (this.selectObjectIds.indexOf(objId) === -1) {
                this.selectObjectIds.push(objId);
            }
            // notification of change event will only be enabled for commands after
            // the last selection
            this.selectionCmdIndex.push(this.commands.length);
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return this.commands.length === 0;
        }
    }, {
        key: 'getCommands',
        value: function getCommands() {
            return this.commands;
        }
    }, {
        key: 'selectObjects',
        value: function selectObjects() {
            var allObjectsSelected = true;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.selectObjectIds), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _objId = _step.value;

                    if (!this.rb.isSelectedObject(_objId)) {
                        allObjectsSelected = false;
                        break;
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

            if (!allObjectsSelected) {
                // only select objects if at least one object is not already selected
                var firstSelection = true;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = (0, _getIterator3.default)(this.selectObjectIds), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var objId = _step2.value;

                        this.rb.selectObject(objId, firstSelection);
                        firstSelection = false;
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

        /**
         * Returns true if the command can replace the given other command.
         *
         * This information can be useful to avoid separate commands for every keystroke
         * in a text field and generate just one command for the whole changed text instead.
         * @param {Command} otherCmd
         * @returns {boolean}
         */

    }, {
        key: 'allowReplace',
        value: function allowReplace(otherCmd) {
            if (otherCmd instanceof CommandGroupCmd) {
                var otherCommands = otherCmd.getCommands();
                if (this.commands.length === otherCommands.length) {
                    for (var i = 0; i < this.commands.length; i++) {
                        if (!this.commands[i].allowReplace(otherCommands[i])) {
                            return false;
                        }
                    }
                    // we are allowed to replace all commands of the command group
                    return true;
                }
            }
            return false;
        }

        /**
         * Must be called when the command replaces the other command.
          * This must only be called if allowReplace for the same command returned true.
         * @param {Command} otherCmd
         */

    }, {
        key: 'replace',
        value: function replace(otherCmd) {
            var otherCommands = otherCmd.getCommands();
            for (var i = 0; i < this.commands.length; i++) {
                this.commands[i].replace(otherCommands[i]);
            }
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'CommandGroupCmd';
        }
    }]);
    return CommandGroupCmd;
}(_Command3.default);

exports.default = CommandGroupCmd;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(27)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(56)('wks');
var uid = __webpack_require__(39);
var Symbol = __webpack_require__(17).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Command2 = __webpack_require__(11);

var _Command3 = _interopRequireDefault(_Command2);

var _BarCodeElement = __webpack_require__(84);

var _BarCodeElement2 = _interopRequireDefault(_BarCodeElement);

var _DocElement = __webpack_require__(5);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _FrameElement = __webpack_require__(62);

var _FrameElement2 = _interopRequireDefault(_FrameElement);

var _ImageElement = __webpack_require__(85);

var _ImageElement2 = _interopRequireDefault(_ImageElement);

var _LineElement = __webpack_require__(86);

var _LineElement2 = _interopRequireDefault(_LineElement);

var _PageBreakElement = __webpack_require__(63);

var _PageBreakElement2 = _interopRequireDefault(_PageBreakElement);

var _SectionElement = __webpack_require__(44);

var _SectionElement2 = _interopRequireDefault(_SectionElement);

var _TableElement = __webpack_require__(45);

var _TableElement2 = _interopRequireDefault(_TableElement);

var _TextElement = __webpack_require__(64);

var _TextElement2 = _interopRequireDefault(_TextElement);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Command to add and delete a doc element.
 * @class
 */
var AddDeleteDocElementCmd = function (_Command) {
    (0, _inherits3.default)(AddDeleteDocElementCmd, _Command);

    function AddDeleteDocElementCmd(add, elementType, initialData, id, parentId, position, rb) {
        (0, _classCallCheck3.default)(this, AddDeleteDocElementCmd);

        var _this = (0, _possibleConstructorReturn3.default)(this, (AddDeleteDocElementCmd.__proto__ || (0, _getPrototypeOf2.default)(AddDeleteDocElementCmd)).call(this));

        _this.add = add;
        _this.elementType = elementType;
        _this.initialData = initialData;
        _this.parentId = parentId;
        _this.position = position;
        _this.rb = rb;
        _this.id = id;
        _this.firstExecution = true;
        return _this;
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
                var element = AddDeleteDocElementCmd.createElement(this.id, this.initialData, this.elementType, this.position, true, this.rb);

                this.rb.notifyEvent(element, _Command3.default.operation.add);
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
                this.rb.deleteDocElement(element);
            }
        }
    }, {
        key: 'getClassName',


        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */
        value: function getClassName() {
            return 'AddDeleteDocElementCmd';
        }
    }], [{
        key: 'createElement',
        value: function createElement(id, data, elementType, panelPos, openPanelItem, rb) {
            var element = void 0;
            var properties = { draggable: true };
            if (elementType === _DocElement2.default.type.text) {
                element = new _TextElement2.default(id, data, rb);
            } else if (elementType === _DocElement2.default.type.line) {
                element = new _LineElement2.default(id, data, rb);
            } else if (elementType === _DocElement2.default.type.image) {
                element = new _ImageElement2.default(id, data, rb);
            } else if (elementType === _DocElement2.default.type.pageBreak) {
                element = new _PageBreakElement2.default(id, data, rb);
            } else if (elementType === _DocElement2.default.type.table) {
                element = new _TableElement2.default(id, data, rb);
                properties.hasChildren = true;
            } else if (elementType === _DocElement2.default.type.frame) {
                element = new _FrameElement2.default(id, data, rb);
                properties.hasChildren = true;
            } else if (elementType === _DocElement2.default.type.section) {
                element = new _SectionElement2.default(id, data, rb);
                properties.hasChildren = true;
            } else if (elementType === _DocElement2.default.type.barCode) {
                element = new _BarCodeElement2.default(id, data, rb);
            }
            rb.addDocElement(element);
            var parentPanel = element.getContainer().getPanelItem();
            var panelItem = new _MainPanelItem2.default(elementType, parentPanel, element, properties, rb);
            element.setPanelItem(panelItem);
            parentPanel.insertChild(panelPos, panelItem);
            element.setup(openPanelItem);
            return element;
        }
    }]);
    return AddDeleteDocElementCmd;
}(_Command3.default);

exports.default = AddDeleteDocElementCmd;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Container2 = __webpack_require__(30);

var _Container3 = _interopRequireDefault(_Container2);

var _DocElement = __webpack_require__(5);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _utils = __webpack_require__(6);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Standard band container for header, content and footer band.
 * @class
 */
var Band = function (_Container) {
    (0, _inherits3.default)(Band, _Container);

    function Band(bandType, section, id, name, rb) {
        (0, _classCallCheck3.default)(this, Band);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Band.__proto__ || (0, _getPrototypeOf2.default)(Band)).call(this, id, name, rb));

        _this.panelItem = null;
        _this.bandType = bandType;
        _this.section = section;
        if (!section) {
            if (bandType === Band.bandType.header) {
                _this.id = '0_header';
                _this.name = rb.getLabel('bandHeader');
            } else if (bandType === Band.bandType.content) {
                _this.id = '0_content';
                _this.name = rb.getLabel('bandContent');
                _this.allowAllElements = true;
            } else if (bandType === Band.bandType.footer) {
                _this.id = '0_footer';
                _this.name = rb.getLabel('bandFooter');
            }
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
            if (!this.section) {
                this.el = this.rb.getDocument().getElement(this.bandType);
                this.elContent = this.el;
            }
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
            return (this.bandType === Band.bandType.content || elementType !== _DocElement2.default.type.pageBreak && elementType !== _DocElement2.default.type.table && elementType !== _DocElement2.default.type.section) && (!this.section || elementType !== _DocElement2.default.type.section);
        }

        /**
         * Returns absolute container offset.
         * @returns {Object} x and y offset coordinates.
         */

    }, {
        key: 'getOffset',
        value: function getOffset() {
            var y = 0;
            if (this.section) {
                if (this.owner !== null) {
                    var absPos = this.owner.getAbsolutePosition();
                    y = absPos.y;
                }
            } else {
                var docProperties = this.rb.getDocumentProperties();
                if (this.bandType === Band.bandType.content && docProperties.getValue('header')) {
                    y = utils.convertInputToNumber(docProperties.getValue('headerSize'));
                } else if (this.bandType === Band.bandType.footer) {
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
            if (this.section) {
                if (this.owner !== null) {
                    height = this.owner.getValue('heightVal');
                }
            } else if (this.bandType === Band.bandType.header) {
                height = documentProperties.getValue('headerSizeVal');
            } else if (this.bandType === Band.bandType.content) {
                height = documentProperties.getValue('height') - documentProperties.getValue('headerSizeVal') - documentProperties.getValue('footerSizeVal') - documentProperties.getValue('marginTopVal') - documentProperties.getValue('marginBottomVal');
            } else if (this.bandType === Band.bandType.footer) {
                height = documentProperties.getValue('footerSizeVal');
            }
            return { width: width, height: height };
        }

        /**
         * Returns container content size. Same as container size.
         * @returns {Object} width and height of container.
         */

    }, {
        key: 'getContentSize',
        value: function getContentSize() {
            return this.getSize();
        }
    }, {
        key: 'isInside',
        value: function isInside(posX, posY) {
            if (this.section && this.owner !== null && this.owner && !this.owner.isVisible()) {
                return false;
            }
            return (0, _get3.default)(Band.prototype.__proto__ || (0, _getPrototypeOf2.default)(Band.prototype), 'isInside', this).call(this, posX, posY);
        }
    }]);
    return Band;
}(_Container3.default);

exports.default = Band;


Band.bandType = {
    header: 'header',
    content: 'content',
    footer: 'footer'
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(10);
var ctx = __webpack_require__(66);
var hide = __webpack_require__(28);
var has = __webpack_require__(22);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
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
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
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
/* 22 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(26);
var IE8_DOM_DEFINE = __webpack_require__(68);
var toPrimitive = __webpack_require__(58);
var dP = Object.defineProperty;

exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(69);
var defined = __webpack_require__(49);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _AddDeleteDocElementCmd = __webpack_require__(19);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _Band = __webpack_require__(20);

var _Band2 = _interopRequireDefault(_Band);

var _DocumentProperties = __webpack_require__(43);

var _DocumentProperties2 = _interopRequireDefault(_DocumentProperties);

var _DocElement = __webpack_require__(5);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _utils = __webpack_require__(6);

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
        this.elDoc = null;
        this.elDocContent = null;
        this.elHeader = null;
        this.elContent = null;
        this.elFooter = null;
        this.elSelectionArea = null;
        this.gridVisible = showGrid;
        this.gridSize = 10;
        this.zoom = 100; // zoom level in percent
        this.zoomLevels = [25, 50, 75, 100, 150, 200, 400];
        this.pdfPreviewExists = false;

        // moving/resizing of element
        this.dragging = false;
        this.dragElementType = null;
        this.dragType = _DocElement2.default.dragType.none;
        this.dragObjectId = null;
        this.dragContainerId = null;
        this.dragLinkedContainerId = null;
        this.dragCurrentContainerId = null;
        this.dragStartX = 0;
        this.dragStartY = 0;
        this.dragCurrentX = 0;
        this.dragCurrentY = 0;
        this.dragSnapToGrid = false;
        this.dragEnterCount = 0;

        // drawing rectangle to select multiple elements
        this.selectionAreaStarted = false;
        this.selectionAreaStartX = 0;
        this.selectionAreaStartY = 0;
    }

    (0, _createClass3.default)(Document, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var panel = $('#rbro_document_panel').mousedown(function (event) {
                if (_this.rb.isDocElementSelected() && !event.shiftKey) {
                    _this.rb.deselectAll(true);
                }
                var offset = _this.elDocContent.offset();
                _this.startSelectionArea(_this.getCoordWithoutZoom(event.originalEvent.pageX - offset.left), _this.getCoordWithoutZoom(event.originalEvent.pageY - offset.top));
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

            var docProperties = this.rb.getDocumentProperties();
            this.elDoc = $('<div id="rbro_document_pdf" class="rbroDocument rbroDragTarget rbroHidden"></div>');
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
            this.elDoc.append(this.elDocContent);

            this.elSelectionArea = $('<div id="rbro_selection_area" class="rbroHidden rbroSelectionArea"></div>');
            this.elDocContent.append(this.elSelectionArea);

            this.initializeEventHandlers();

            this.elDoc.append('<div id="rbro_divider_margin_left" class="rbroDivider rbroDividerMarginLeft"></div>');
            this.elDoc.append('<div id="rbro_divider_margin_top" class="rbroDivider rbroDividerMarginTop"></div>');
            this.elDoc.append('<div id="rbro_divider_margin_right" class="rbroDivider rbroDividerMarginRight"></div>');
            this.elDoc.append('<div id="rbro_divider_margin_bottom" class="rbroDivider rbroDividerMarginBottom"></div>');
            this.elDoc.append('<div id="rbro_divider_header" class="rbroDivider rbroDividerHeader"></div>');
            this.elDoc.append('<div id="rbro_divider_footer" class="rbroDivider rbroDividerFooter"></div>');
            panel.append(this.elDoc);

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

            this.elDocContent.on('dragover', function (event) {
                _this2.processDragover(event);
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
                _this2.processDrop(event);
                return false;
            });
        }
    }, {
        key: 'processMouseMove',
        value: function processMouseMove(event) {
            if (this.dragging) {
                this.processDrag(event);
            } else if (this.selectionAreaStarted) {
                var offset = this.elDocContent.offset();
                var area = this.getSelectionArea(this.getCoordWithoutZoom(event.originalEvent.pageX - offset.left), this.getCoordWithoutZoom(event.originalEvent.pageY - offset.top));
                var props = {
                    left: this.rb.toPixel(area.left), top: this.rb.toPixel(area.top),
                    width: this.rb.toPixel(area.width), height: this.rb.toPixel(area.height) };
                this.elSelectionArea.css(props);
                if (this.elSelectionArea.hasClass('rbroHidden')) {
                    // show element after css properties are set
                    this.elSelectionArea.removeClass('rbroHidden');
                }
            }
        }
    }, {
        key: 'processDragover',
        value: function processDragover(event) {
            if (this.rb.isBrowserDragActive('docElement')) {
                var absPos = (0, _utils.getEventAbsPos)(event);
                var container = null;
                if (absPos !== null) {
                    container = this.getContainer(absPos.x, absPos.y, this.dragElementType);
                    this.dragCurrentX = absPos.x;
                    this.dragCurrentY = absPos.y;
                }
                var containerId = container !== null ? container.getId() : null;
                if (containerId !== this.dragContainerId) {
                    $('.rbroElementContainer').removeClass('rbroElementDragOver');
                    if (container !== null) {
                        container.dragOver();
                    }
                    this.dragContainerId = containerId;
                }
                // without preventDefault for dragover event, the drop event is not fired
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }, {
        key: 'processDrop',
        value: function processDrop(event) {
            if (this.rb.isBrowserDragActive('docElement')) {
                var absPos = (0, _utils.getEventAbsPos)(event);
                if (absPos !== null) {
                    this.dragCurrentX = absPos.x;
                    this.dragCurrentY = absPos.y;
                }
                $('.rbroElementContainer').removeClass('rbroElementDragOver');
                var container = this.getContainer(this.dragCurrentX, this.dragCurrentY, this.dragElementType);
                while (container !== null && !container.isElementAllowed(this.dragElementType)) {
                    container = container.getParent();
                }
                if (container !== null && container.isElementAllowed(this.dragElementType)) {
                    var offset = this.elDocContent.offset();
                    var x = this.getCoordWithoutZoom(this.dragCurrentX - offset.left);
                    var y = this.getCoordWithoutZoom(this.dragCurrentY - offset.top);
                    var containerOffset = container.getOffset();
                    x -= containerOffset.x;
                    y -= containerOffset.y;
                    if (!event.ctrlKey && this.rb.getDocument().isGridVisible()) {
                        var gridSize = this.rb.getDocument().getGridSize();
                        x = utils.roundValueToInterval(x, gridSize);
                        y = utils.roundValueToInterval(y, gridSize);
                    }
                    var initialData = { x: '' + x, y: '' + y, containerId: container.getId() };
                    var cmd = new _AddDeleteDocElementCmd2.default(true, this.dragElementType, initialData, this.rb.getUniqueId(), container.getId(), -1, this.rb);
                    this.rb.executeCommand(cmd);
                }
                event.preventDefault();
                $('#rbro_menu_element_drag_item').addClass('rbroHidden');
            }
        }
    }, {
        key: 'processDrag',
        value: function processDrag(event) {
            var absPos = (0, _utils.getEventAbsPos)(event);
            if (this.dragType === _DocElement2.default.dragType.element) {
                var container = this.getContainer(absPos.x, absPos.y, this.dragElementType);
                var containerId = null;
                if (container !== null) {
                    containerId = container.getId();
                    if (containerId === this.dragLinkedContainerId) {
                        // container is the same as the linked container of dragged element, this is
                        // the case when dragging container elements like frames
                        container = container.getParent();
                        containerId = container !== null ? container.getId() : null;
                    }
                }
                if (containerId !== this.dragCurrentContainerId) {
                    $('.rbroElementContainer').removeClass('rbroElementDragOver');
                    if (container !== null && containerId !== this.dragContainerId) {
                        container.dragOver();
                    }
                }
                this.dragCurrentContainerId = containerId;
            }
            this.dragCurrentX = absPos.x;
            this.dragCurrentY = absPos.y;
            this.dragSnapToGrid = !event.ctrlKey;

            var dragObject = this.rb.getDataObject(this.dragObjectId);
            if (dragObject !== null) {
                var dragDiff = dragObject.getDragDiff(this.getCoordWithoutZoom(absPos.x - this.dragStartX), this.getCoordWithoutZoom(absPos.y - this.dragStartY), this.dragType, this.dragSnapToGrid && this.isGridVisible() ? this.getGridSize() : 0);
                this.rb.updateSelectionDrag(dragDiff.x, dragDiff.y, this.dragType, null, false);
            }
        }
    }, {
        key: 'updatePageSize',
        value: function updatePageSize(width, height) {
            this.elDoc.css({ width: this.rb.toPixel(width), height: this.rb.toPixel(height) });
        }
    }, {
        key: 'updatePageMargins',
        value: function updatePageMargins() {
            var docProperties = this.rb.getDocumentProperties();
            var marginLeft = utils.convertInputToNumber(docProperties.getValue('marginLeft'));
            var marginTop = utils.convertInputToNumber(docProperties.getValue('marginTop'));
            var marginRight = utils.convertInputToNumber(docProperties.getValue('marginRight'));
            var marginBottom = utils.convertInputToNumber(docProperties.getValue('marginBottom'));
            var left = this.rb.toPixel(marginLeft);
            var top = this.rb.toPixel(marginTop - 1);
            var right = this.rb.toPixel(marginRight);
            var bottom = this.rb.toPixel(marginBottom);
            $('#rbro_divider_margin_left').css('left', left);
            $('#rbro_divider_margin_top').css('top', top);
            // hide divider in case margin is 0, otherwise divider is still visible
            if (marginLeft !== 0) {
                $('#rbro_divider_margin_left').css('left', left).show();
            } else {
                $('#rbro_divider_margin_left').hide();
            }
            if (marginTop !== 0) {
                $('#rbro_divider_margin_top').css('top', top).show();
            } else {
                $('#rbro_divider_margin_top').hide();
            }
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
                this.elDoc.removeClass('rbroHidden');
                $('#rbro_document_pdf_preview').css({ 'z-index': '', 'height': '0' });
                $('.rbroElementButtons .rbroMenuButton').removeClass('rbroDisabled').prop('draggable', true);
                $('.rbroActionButtons .rbroActionButton').prop('disabled', false);
            } else if (this.pdfPreviewExists && tab === Document.tab.pdfPreview) {
                $('#rbro_document_tab_pdf_preview').addClass('rbroActive');
                this.elDoc.addClass('rbroHidden');
                $('#rbro_document_pdf_preview').css({ 'z-index': '1', 'height': '' });
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
            return this.rb.getContainer(this.getCoordWithoutZoom(absPosX - offset.left), this.getCoordWithoutZoom(absPosY - offset.top), elementType);
        }

        /**
         * Returns scroll y position of document content.
         * @returns {Number} scroll y position.
         */

    }, {
        key: 'getContentScrollPosY',
        value: function getContentScrollPosY() {
            var contentOffset = this.elDocContent.offset();
            var panelOffset = $('#rbro_document_panel').offset();
            return panelOffset.top - contentOffset.top;
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
        key: 'zoomIn',
        value: function zoomIn() {
            for (var i = 0; i < this.zoomLevels.length - 1; i++) {
                if (this.zoom === this.zoomLevels[i]) {
                    this.updateZoomLevel(this.zoomLevels[i + 1]);
                    break;
                }
            }
        }
    }, {
        key: 'zoomOut',
        value: function zoomOut() {
            for (var i = 1; i < this.zoomLevels.length; i++) {
                if (this.zoom === this.zoomLevels[i]) {
                    this.updateZoomLevel(this.zoomLevels[i - 1]);
                    break;
                }
            }
        }
    }, {
        key: 'isZoomInPossible',
        value: function isZoomInPossible() {
            return this.zoom < this.zoomLevels[this.zoomLevels.length - 1];
        }
    }, {
        key: 'isZoomOutPossible',
        value: function isZoomOutPossible() {
            return this.zoom > this.zoomLevels[0];
        }

        /**
         * Is called when the page size was changed.
         * Updates document style properties and is necessary in case the document is zoomed.
         */

    }, {
        key: 'pageSizeChanged',
        value: function pageSizeChanged() {
            this.updateZoomLevel(this.zoom);
        }
    }, {
        key: 'updateZoomLevel',
        value: function updateZoomLevel(zoom) {
            this.zoom = zoom;
            var panel = $('#rbro_document_panel');
            var size = this.rb.getDocumentProperties().getPageSize();
            var scaledWidth = size.width * (zoom / 100);
            var scaledHeight = size.height * (zoom / 100);
            var rbWidth = this.rb.getWidth();
            var docPanelWidth = rbWidth - this.rb.getMainPanel().getTotalPanelWidth();
            var docPanelHeight = panel.height();
            var translateX = 0;
            if (zoom !== 100) {
                if (size.width > docPanelWidth) {
                    // if there is not enough space in the document panel initially and we zoom out we keep the content
                    // in default (top left) position and move it to the center manually
                    this.elDoc.css('transform-origin', '');
                    if (zoom < 100 && scaledWidth < docPanelWidth) {
                        translateX = Math.round((docPanelWidth - scaledWidth) / 2);
                    }
                } else if (scaledWidth > docPanelWidth) {
                    // if there is not enough space in the document panel with zoom level applied
                    // we remove any margin and apply the default transformation (top left)
                    this.elDoc.css('margin', '0');
                    this.elDoc.css('transform-origin', '');
                } else {
                    // if there is enough space in the document panel we use the default margin (auto)
                    // and apply the transformation from top center
                    // so the content is automatically centered in the available horizontal space
                    this.elDoc.css('margin', '');
                    this.elDoc.css('transform-origin', 'top center');
                }
                this.elDoc.css('transform', 'translateX(' + translateX + 'px) scale(' + this.zoom / 100 + ')');
            } else {
                // use default values if no zoom is applied
                this.elDoc.css('margin', '');
                this.elDoc.css('transform', '');
                this.elDoc.css('transform-origin', '');
            }
            $('#rbro_menu_zoom_level').text(zoom + ' %');
            this.rb.getMenuPanel().updateZoomButtons(this.isZoomInPossible(), this.isZoomOutPossible());

            // if there is enough space in the document panel don't show scrollbar
            if (scaledWidth < docPanelWidth) {
                panel.css('overflow-x', 'hidden');
            } else {
                panel.css('overflow-x', '');
            }
            if (scaledHeight < docPanelHeight) {
                panel.css('overflow-y', 'hidden');
            } else {
                panel.css('overflow-y', '');
            }
        }
    }, {
        key: 'getCoordWithoutZoom',
        value: function getCoordWithoutZoom(coord) {
            return Math.round(coord * (100 / this.zoom));
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
            if (band === _Band2.default.bandType.header) {
                return this.elHeader;
            } else if (band === _Band2.default.bandType.content) {
                return this.elContent;
            } else if (band === _Band2.default.bandType.footer) {
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
        value: function startDrag(x, y, objectId, containerId, linkedContainerId, elementType, dragType) {
            this.dragging = true;
            this.dragStartX = this.dragCurrentX = x;
            this.dragStartY = this.dragCurrentY = y;
            this.dragElementType = elementType;
            this.dragType = dragType;
            this.dragObjectId = objectId;
            this.dragContainerId = containerId;
            this.dragLinkedContainerId = linkedContainerId;
            this.dragCurrentContainerId = null;
            this.dragSnapToGrid = false;
        }
    }, {
        key: 'stopDrag',
        value: function stopDrag() {
            var diffX = this.getCoordWithoutZoom(this.dragCurrentX - this.dragStartX);
            var diffY = this.getCoordWithoutZoom(this.dragCurrentY - this.dragStartY);
            var dragObject = this.rb.getDataObject(this.dragObjectId);
            if (dragObject !== null && (diffX !== 0 || diffY !== 0)) {
                var container = null;
                if (this.dragType === _DocElement2.default.dragType.element) {
                    container = this.rb.getDataObject(this.dragCurrentContainerId);
                }

                // do not allow to change container of elements when multiple elements are
                // dragged together as this could lead to unexpected results for the user
                var selectedObjects = this.rb.getSelectedObjects();
                if (selectedObjects.length > 1 && container !== null) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = (0, _getIterator3.default)(selectedObjects), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var selectedObj = _step.value;

                            if (selectedObj.getContainerId() !== container.getId()) {
                                container = null;
                                break;
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

                var dragDiff = dragObject.getDragDiff(diffX, diffY, this.dragType, this.dragSnapToGrid && this.isGridVisible() ? this.getGridSize() : 0);
                this.rb.updateSelectionDrag(dragDiff.x, dragDiff.y, this.dragType, container, true);
            } else {
                this.rb.updateSelectionDrag(0, 0, this.dragType, null, false);
            }
            this.dragging = false;
            this.dragType = _DocElement2.default.dragType.none;
            this.dragObjectId = null;
            this.dragContainerId = null;
            this.dragCurrentContainerId = null;
            $('.rbroElementContainer').removeClass('rbroElementDragOver');
        }
    }, {
        key: 'startBrowserDrag',
        value: function startBrowserDrag(dragElementType) {
            this.dragEnterCount = 0;
            this.dragObjectId = null;
            this.dragContainerId = null;
            this.dragLinkedContainerId = null;
            this.dragElementType = dragElementType;
            this.dragStartX = 0;
            this.dragStartY = 0;
            this.dragCurrentX = 0;
            this.dragCurrentY = 0;
        }
    }, {
        key: 'startSelectionArea',
        value: function startSelectionArea(x, y) {
            this.selectionAreaStarted = true;
            this.selectionAreaStartX = x;
            this.selectionAreaStartY = y;
        }
    }, {
        key: 'stopSelectionArea',
        value: function stopSelectionArea(x, y, clearSelection) {
            var area = this.getSelectionArea(x, y);
            if (area.width > 10 && area.height > 10) {
                var docElements = this.rb.getDocElements(true);
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = (0, _getIterator3.default)(docElements), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var docElement = _step2.value;

                        // do not select table text, band elements and containers
                        if (docElement.isAreaSelectionAllowed()) {
                            var pos = docElement.getAbsolutePosition();
                            if (area.left < pos.x + docElement.getValue('widthVal') && area.left + area.width >= pos.x && area.top < pos.y + docElement.getValue('heightVal') && area.top + area.height >= pos.y) {
                                var allowSelect = true;
                                // do not allow selection of element if its container is already selected,
                                // e.g. text inside selected frame element
                                if (docElement.getContainerId()) {
                                    var container = docElement.getContainer();
                                    if (container !== null && container.isSelected()) {
                                        allowSelect = false;
                                    }
                                }
                                if (allowSelect) {
                                    this.rb.selectObject(docElement.getId(), clearSelection);
                                    clearSelection = false;
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
            }

            this.selectionAreaStarted = false;
            this.selectionAreaStartX = 0;
            this.selectionAreaStartY = 0;
            this.elSelectionArea.addClass('rbroHidden');
        }
    }, {
        key: 'getSelectionArea',
        value: function getSelectionArea(x, y) {
            var area = {};
            if (x > this.selectionAreaStartX) {
                area.left = this.selectionAreaStartX;
                area.width = x - this.selectionAreaStartX;
            } else {
                area.left = x;
                area.width = this.selectionAreaStartX - x;
            }
            if (y > this.selectionAreaStartY) {
                area.top = this.selectionAreaStartY;
                area.height = y - this.selectionAreaStartY;
            } else {
                area.top = y;
                area.height = this.selectionAreaStartY - y;
            }
            return area;
        }
    }, {
        key: 'mouseUp',
        value: function mouseUp(event) {
            if (this.isDragging()) {
                this.stopDrag();
            }
            if (this.selectionAreaStarted) {
                var offset = this.elDocContent.offset();
                this.stopSelectionArea(this.getCoordWithoutZoom(event.originalEvent.pageX - offset.left), this.getCoordWithoutZoom(event.originalEvent.pageY - offset.top), !event.shiftKey);
            }
        }
    }, {
        key: 'windowResized',
        value: function windowResized() {
            // the document content position must be updated in case the available space changed
            this.updateZoomLevel(this.zoom);
        }
    }]);
    return Document;
}();

exports.default = Document;


Document.tab = {
    pdfLayout: 'pdfLayout',
    pdfPreview: 'pdfPreview'
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(29);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(23);
var createDesc = __webpack_require__(37);
module.exports = __webpack_require__(16) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 30 */
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
        key: 'setParent',
        value: function setParent(parent) {
            this.parent = parent;
            this.level = 0;
            while (parent !== null) {
                this.level++;
                parent = parent.getParent();
            }
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
         * Returns container content size.
         * @returns {Object} width and height of container content area.
         */

    }, {
        key: 'getContentSize',
        value: function getContentSize() {
            return { width: 0, height: 0 };
        }

        /**
         * Returns true if given absolute position is inside container.
         * @param {Number} posX - absolute x coordinate.
         * @param {Number} posY - absolute y coordinate.
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base class for all panels. Contains shared functionality.
 * @class
 */
var PanelBase = function () {
    function PanelBase(idPrefix, dataBaseClass, rootElement, rb) {
        (0, _classCallCheck3.default)(this, PanelBase);

        this.idPrefix = idPrefix;
        this.dataBaseClass = dataBaseClass;
        this.panelId = idPrefix + '_panel';
        this.rootElement = rootElement;
        this.rb = rb;

        this.propertyDescriptors = {}; // is overriden in derived class

        this.differentValuesLabel = this.rb.getLabel('differentValues');
        this.differentFilesLabel = this.rb.getLabel('differentFiles');
    }

    (0, _createClass3.default)(PanelBase, [{
        key: 'render',
        value: function render(data) {}

        /**
         * Is called when the ReportBro instance is deleted and should be used
         * to cleanup elements and event handlers.
         */

    }, {
        key: 'destroy',
        value: function destroy() {}
    }, {
        key: 'setValue',
        value: function setValue(propertyDescriptor, value, differentValues) {
            var propertyId = '#' + this.idPrefix + '_' + propertyDescriptor['fieldId'];

            if (differentValues) {
                $(propertyId).addClass('rbroDifferentValues');
            } else {
                $(propertyId).removeClass('rbroDifferentValues');
            }

            // set value for current property
            if (propertyDescriptor['type'] === _SetValueCmd2.default.type.text) {
                if (differentValues) {
                    $(propertyId).val('');
                    $(propertyId).attr('placeholder', this.differentValuesLabel);
                } else {
                    $(propertyId).val(value);
                    $(propertyId).attr('placeholder', '');
                }
            } else if (propertyDescriptor['type'] === _SetValueCmd2.default.type.select) {
                $(propertyId).val(value);
            } else if (propertyDescriptor['type'] === _SetValueCmd2.default.type.checkbox) {
                if (differentValues) {
                    $(propertyId).prop('checked', false);
                } else {
                    $(propertyId).prop('checked', value);
                }
            } else if (propertyDescriptor['type'] === _SetValueCmd2.default.type.button) {
                if (differentValues) {
                    $(propertyId).removeClass('rbroButtonActive');
                } else {
                    if (value) {
                        $(propertyId).addClass('rbroButtonActive');
                    } else {
                        $(propertyId).removeClass('rbroButtonActive');
                    }
                }
            } else if (propertyDescriptor['type'] === _SetValueCmd2.default.type.buttonGroup) {
                $(propertyId).find('button').removeClass('rbroButtonActive');
                if (!differentValues) {
                    $(propertyId).find('button[value="' + value + '"]').addClass('rbroButtonActive');
                }
            } else if (propertyDescriptor['type'] === _SetValueCmd2.default.type.color) {
                if (differentValues) {
                    if (propertyDescriptor['allowEmpty']) {
                        $(propertyId).spectrum("set", '');
                    } else {
                        $(propertyId).spectrum("set", '#000000');
                    }
                } else {
                    $(propertyId).spectrum("set", value);
                }
            } else if (propertyDescriptor['type'] === _SetValueCmd2.default.type.filename) {
                if (differentValues) {
                    $(propertyId).text(this.differentFilesLabel);
                    $(propertyId + '_container').removeClass('rbroHidden');
                } else {
                    $(propertyId).text(value);
                    if (value === '') {
                        $(propertyId + '_container').addClass('rbroHidden');
                    } else {
                        $(propertyId + '_container').removeClass('rbroHidden');
                    }
                }
            }
        }

        /**
         * Is called when the selection is changed or the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {String} [field] - affected field in case of change operation.
         */

    }, {
        key: 'updateDisplay',
        value: function updateDisplay(field) {}
    }, {
        key: 'show',
        value: function show() {
            $('#' + this.panelId).removeClass('rbroHidden');
        }
    }, {
        key: 'hide',
        value: function hide() {
            $('#' + this.panelId).addClass('rbroHidden');
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         * @param {String} [field] - affected field in case of change operation.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation, field) {
            if (obj instanceof this.dataBaseClass && this.rb.isSelectedObject(obj.id) && operation === _Command2.default.operation.change) {
                this.updateDisplay(field);
            }
        }

        /**
         * Updates displayed errors of currently selected data objects.
         */

    }, {
        key: 'updateErrors',
        value: function updateErrors() {
            $('#' + this.panelId + ' .rbroFormRow').removeClass('rbroError');
            $('#' + this.panelId + ' .rbroErrorMessage').text('');

            var obj = this.rb.getSelectedObject();
            if (obj !== null) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = (0, _getIterator3.default)(obj.getErrors()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var error = _step.value;

                        var propertyDescriptor = this.propertyDescriptors[error.field];
                        if (propertyDescriptor) {
                            if ('section' in propertyDescriptor) {
                                var sectionName = propertyDescriptor['section'];
                                $('#' + this.idPrefix + '_' + sectionName + '_header').addClass('rbroError');
                            }

                            var errorMsg = this.rb.getLabel(error.msg_key);
                            if (error.info) {
                                errorMsg = errorMsg.replace('${info}', '<span class="rbroErrorMessageInfo">' + error.info.replace('<', '&lt;').replace('>', '&gt;') + '</span>');
                            }

                            // highlight row containing error
                            var rowId = this.getRowId(propertyDescriptor);
                            $('#' + rowId).addClass('rbroError');
                            // show error message
                            var errorMsgId = void 0;
                            if ('errorMsgId' in propertyDescriptor) {
                                errorMsgId = propertyDescriptor['errorMsgId'];
                            } else {
                                errorMsgId = this.idPrefix + '_' + propertyDescriptor['fieldId'] + '_error';
                            }
                            $('#' + errorMsgId).html(errorMsg);
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

        /**
         * Is called when the selected element was changed.
         */

    }, {
        key: 'selectionChanged',
        value: function selectionChanged() {
            this.updateDisplay(null);
            this.updateErrors();
        }

        /**
         * Expands all sections in case there is an error for a field inside a section and
         * scrolls to the uppermost error.
         */

    }, {
        key: 'scrollToFirstError',
        value: function scrollToFirstError() {
            var obj = this.rb.getSelectedObject();
            if (obj !== null) {
                // open all sections containing errors
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = (0, _getIterator3.default)(obj.getErrors()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var error = _step2.value;

                        var propertyDescriptor = this.propertyDescriptors[error.field];
                        if (propertyDescriptor) {
                            if ('section' in propertyDescriptor) {
                                var sectionName = propertyDescriptor['section'];
                                if (!$('#' + this.idPrefix + '_' + sectionName + '_header').hasClass('rbroPanelSectionHeaderOpen')) {
                                    $('#' + this.idPrefix + '_' + sectionName + '_header').trigger('click');
                                }
                            }
                        }
                    }

                    // scroll to first visible error
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

                var firstErrorRowId = '';
                var firstErrorRowOffset = -1;
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = (0, _getIterator3.default)(obj.getErrors()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var _error = _step3.value;

                        var _propertyDescriptor = this.propertyDescriptors[_error.field];
                        if (_propertyDescriptor) {
                            var rowId = this.getRowId(_propertyDescriptor);
                            var elRow = document.getElementById(rowId);
                            var rowOffset = elRow.offsetTop;
                            if (firstErrorRowId === '' || rowOffset < firstErrorRowOffset) {
                                firstErrorRowId = rowId;
                                firstErrorRowOffset = rowOffset;
                            }
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

                if (firstErrorRowId !== '') {
                    $('#rbro_detail_panel').scrollTop(firstErrorRowOffset);
                }
            }
        }

        /**
         * Returns row id of html element for given property.
         * @param {String} propertyDescriptor - object containing all information about a property.
         * @returns {String}
         */

    }, {
        key: 'getRowId',
        value: function getRowId(propertyDescriptor) {
            var rowId = void 0;
            if ('rowId' in propertyDescriptor) {
                rowId = propertyDescriptor['rowId'];
            } else {
                rowId = this.idPrefix + '_' + propertyDescriptor['fieldId'] + '_row';
            }
            return rowId;
        }
    }]);
    return PanelBase;
}();

exports.default = PanelBase;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(73);
var enumBugKeys = __webpack_require__(50);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(49);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(32);

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Parameter = __webpack_require__(13);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _utils = __webpack_require__(6);

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
        this.items = null;
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
         * Is called when the ReportBro instance is deleted and should be used
         * to cleanup elements and event handlers.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.elWindow.remove();
        }

        /**
         * Shows a popup window for the given items.
         * @param {Object[]} items - items to display in the popup window. Each item must contain a name (String), and
         * optional a description (String) and separator (Boolean). If separator is true the item is not selectable.
         * @param {String} objId - id of data object where the field belongs to, used to set the test data value
         * when popup is closed. If this is no testData popup then the objId is not used.
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
            var elSearch = null;
            this.input = tagId !== '' ? $('#' + tagId) : null;
            this.objId = objId;
            this.type = type;
            this.items = items;
            this.elContent.empty();
            $('#rbro_background_overlay').remove();
            if (type === PopupWindow.type.testData) {
                this.parameters = items[0];
                items.splice(0, 1);
                this.createTestDataTable(items);
                var width = Math.round(winWidth * 0.8);
                var height = Math.round(winHeight * 0.8);
                this.elWindow.css({ left: Math.round((winWidth - width) / 2) + 'px', top: Math.round((winHeight - height) / 2) + $(window).scrollTop() + 'px',
                    width: width + 'px', height: height + 'px' });
                $('body').append($('<div id="rbro_background_overlay" class="rbroBackgroundOverlay"></div>'));
                $('body').addClass('rbroFixedBackground'); // no scroll bars for background while popup is shown
            } else {
                if (type === PopupWindow.type.parameterSet || type === PopupWindow.type.parameterAppend) {
                    elSearch = $('<input class="rbroPopupSearch" placeholder="' + this.rb.getLabel('parameterSearchPlaceholder') + '">').on('input', function (event) {
                        _this2.filterParameters(elSearch.val());
                    });
                    this.elContent.append(elSearch);
                }
                var ul = $('<ul></ul>').mousedown(function (event) {
                    // prevent default so blur event of input is not triggered,
                    // otherwise popup window would be closed before click event handler of selected
                    // item is triggered
                    event.preventDefault();
                });
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    var _loop = function _loop() {
                        var item = _step.value;

                        var li = $('<li></li>');
                        if (item.separator) {
                            if ((type === PopupWindow.type.parameterSet || type === PopupWindow.type.parameterAppend) && item.id) {
                                li.attr('id', 'parameter_group_' + item.id);
                            }
                            var separatorClass = 'rbroPopupItemSeparator';
                            if (item.separatorClass) {
                                separatorClass += ' ' + item.separatorClass;
                            }
                            li.attr('class', separatorClass);
                        } else {
                            if ((type === PopupWindow.type.parameterSet || type === PopupWindow.type.parameterAppend) && item.id) {
                                li.attr('id', 'parameter_' + item.id);
                            }
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

                    for (var _iterator = (0, _getIterator3.default)(items), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        _loop();
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

                this.elContent.append(ul);
                var offset = this.input.offset();
                var top = offset.top;
                // test if popup window should be shown above or below input field
                if (top < winHeight / 2 || top < 300) {
                    // make sure there is enough space for popup below input, otherwise just show it over input field
                    if (top + this.input.height() + 300 < winHeight) {
                        top += this.input.height();
                    }
                } else {
                    top -= 300;
                }
                this.elWindow.css({ left: offset.left + 'px', top: top + 'px', width: '400px', height: '300px' });
            }

            this.elWindow.removeClass('rbroHidden');
            this.visible = true;
            if (elSearch !== null) {
                elSearch.focus();
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            if (this.visible) {
                if (this.input !== null) {
                    this.input.focus();
                }
                if (this.type === PopupWindow.type.testData) {
                    var testData = this.getTestData(null, -1);
                    var obj = this.rb.getDataObject(this.objId);
                    var testDataStr = (0, _stringify2.default)(testData);
                    if (obj !== null && obj.getValue('testData') !== testDataStr) {
                        var cmd = new _SetValueCmd2.default(this.objId, 'testData', testDataStr, _SetValueCmd2.default.type.text, this.rb);
                        this.rb.executeCommand(cmd);
                    }
                    $('#rbro_background_overlay').remove();
                }
                this.elWindow.addClass('rbroHidden');
                this.elContent.empty();
                $('body').removeClass('rbroFixedBackground');
                this.visible = false;
                this.items = null;
            }
        }
    }, {
        key: 'addTestDataRow',
        value: function addTestDataRow(tableBody, parameters, testData) {
            var newRow = $('<tr></tr>');
            newRow.append($('<td></td>').append($('<div class="rbroButton rbroDeleteButton rbroIcon-cancel"></div>').click(function (event) {
                $(event.target).parent().parent().remove();
            })));
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = (0, _getIterator3.default)(parameters), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var parameter = _step2.value;

                    if (parameter.allowMultiple && parameter.arraySize > 0) {
                        var values = null;
                        if (testData !== null && parameter.name in testData) {
                            values = testData[parameter.name];
                        }
                        for (var i = 0; i < parameter.arraySize; i++) {
                            var data = '';
                            if (Array.isArray(values) && i < values.length) {
                                data = values[i];
                            }
                            this.appendColumn(newRow, parameter, data);
                        }
                    } else {
                        var _data = '';
                        if (testData !== null && parameter.name in testData) {
                            _data = testData[parameter.name];
                        }
                        if (parameter.allowMultiple && parameter.arraySize > 0 && Array.isArray(_data)) {
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;

                            try {
                                for (var _iterator3 = (0, _getIterator3.default)(_data), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var arrayItem = _step3.value;

                                    this.appendColumn(newRow, parameter, arrayItem);
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
                        } else {
                            this.appendColumn(newRow, parameter, _data);
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

            tableBody.append(newRow);
        }
    }, {
        key: 'appendColumn',
        value: function appendColumn(row, parameter, data) {
            var input = $('<input type="text" value="' + data + '">').focus(function (event) {
                input.parent().addClass('rbroHasFocus');
            }).blur(function (event) {
                input.parent().removeClass('rbroHasFocus');
            });

            if (parameter.type === _Parameter2.default.type.number) {
                utils.setInputDecimal(input);
            } else if (parameter.type === _Parameter2.default.type.date) {
                input.attr('placeholder', this.rb.getLabel('parameterTestDataDatePattern'));
            }
            row.append($('<td></td>').append(input));
        }
    }, {
        key: 'getTestData',
        value: function getTestData(excludeParameter, excludeParameterArrayItemIndex) {
            var testData = [];
            var rows = this.elContent.find('tbody').find('tr');
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = (0, _getIterator3.default)(rows), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var row = _step4.value;

                    var inputs = $(row).find('input');
                    var rowData = {};
                    var i = 0;
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = (0, _getIterator3.default)(this.parameters), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var parameter = _step5.value;

                            if (parameter.allowMultiple && parameter.arraySize > 0) {
                                var fieldData = [];
                                for (var j = 0; j < parameter.arraySize; j++) {
                                    var input = inputs.eq(i);
                                    if (parameter !== excludeParameter || j !== excludeParameterArrayItemIndex) {
                                        fieldData.push(input.val().trim());
                                    }
                                    i++;
                                }
                                rowData[parameter.name] = fieldData;
                            } else {
                                var _input = inputs.eq(i);
                                rowData[parameter.name] = _input.val().trim();
                                i++;
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

                    testData.push(rowData);
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

            return testData;
        }
    }, {
        key: 'createTestDataTable',
        value: function createTestDataTable(items) {
            var _this3 = this;

            var div = $('<div></div>');
            var table = $('<table></table>');
            var tableHeaderRow = $('<tr></tr>');
            var tableBody = $('<tbody></tbody>');
            var i = void 0;
            tableHeaderRow.append('<th></th>');
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                var _loop2 = function _loop2() {
                    var parameter = _step6.value;

                    if (parameter.allowMultiple) {
                        var _loop3 = function _loop3(arrayIndex) {
                            var th = $('<th></th>');
                            th.append($('<span>' + parameter.name + ' ' + (arrayIndex + 1) + '</span>'));
                            if (arrayIndex === 0) {
                                th.append($('<div class="rbroButton rbroRoundButton rbroIcon-plus"></div>').click(function (event) {
                                    var testData = _this3.getTestData(null, -1);
                                    parameter.arraySize++;
                                    _this3.createTestDataTable(testData);
                                }));
                            } else {
                                th.append($('<div class="rbroButton rbroRoundButton rbroIcon-minus"></div>').click(function (event) {
                                    var testData = _this3.getTestData(parameter, arrayIndex);
                                    parameter.arraySize--;
                                    _this3.createTestDataTable(testData);
                                }));
                            }
                            tableHeaderRow.append(th);
                        };

                        for (var arrayIndex = 0; arrayIndex < parameter.arraySize; arrayIndex++) {
                            _loop3(arrayIndex);
                        }
                    } else {
                        tableHeaderRow.append('<th>' + parameter.name + '</th>');
                    }
                };

                for (var _iterator6 = (0, _getIterator3.default)(this.parameters), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    _loop2();
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

            table.append($('<thead></thead>').append(tableHeaderRow));
            if (items.length === 0) {
                this.addTestDataRow(tableBody, this.parameters, null);
            }
            for (i = 0; i < items.length; i++) {
                this.addTestDataRow(tableBody, this.parameters, items[i]);
            }
            table.append(tableBody);
            div.append(table);
            div.append($('<div class="rbroFullWidthButton"><div class="rbroButton rbroPopupWindowButton">' + this.rb.getLabel('parameterAddTestData') + '</div></div>').click(function (event) {
                _this3.addTestDataRow(tableBody, _this3.parameters, null);
            }));
            this.elContent.empty().append(div);
        }

        /**
         * Filters list of displayed parameter items. Only parameters containing given search value are
         * shown.
         * @param {String} searchVal - search value.
         */

    }, {
        key: 'filterParameters',
        value: function filterParameters(searchVal) {
            var currentGroupId = null;
            var groupCount = 0;
            if (this.items !== null) {
                searchVal = searchVal.toLowerCase();
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = (0, _getIterator3.default)(this.items), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var _item = _step7.value;

                        if (_item.separator) {
                            if (currentGroupId !== null) {
                                // hide groups (data source parameters and parameter maps) if they do not contain any visible items
                                if (groupCount > 0) {
                                    $('#parameter_group_' + currentGroupId).show();
                                } else {
                                    $('#parameter_group_' + currentGroupId).hide();
                                }
                            }
                            currentGroupId = _item.id ? _item.id : null;
                            groupCount = 0;
                        } else {
                            if (_item.nameLowerCase.indexOf(searchVal) !== -1) {
                                $('#parameter_' + _item.id).show();
                                if (currentGroupId !== -1) {
                                    groupCount++;
                                }
                            } else {
                                $('#parameter_' + _item.id).hide();
                            }
                        }
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

                if (currentGroupId !== null) {
                    if (groupCount > 0) {
                        $('#parameter_group_' + currentGroupId).show();
                    } else {
                        $('#parameter_group_' + currentGroupId).hide();
                    }
                }
            }
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Command2 = __webpack_require__(11);

var _Command3 = _interopRequireDefault(_Command2);

var _Parameter = __webpack_require__(13);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Command to add and delete a parameter.
 * @class
 */
var AddDeleteParameterCmd = function (_Command) {
    (0, _inherits3.default)(AddDeleteParameterCmd, _Command);

    function AddDeleteParameterCmd(add, initialData, id, parentId, position, rb) {
        (0, _classCallCheck3.default)(this, AddDeleteParameterCmd);

        var _this = (0, _possibleConstructorReturn3.default)(this, (AddDeleteParameterCmd.__proto__ || (0, _getPrototypeOf2.default)(AddDeleteParameterCmd)).call(this));

        _this.add = add;
        _this.initialData = initialData;
        _this.parentId = parentId;
        _this.position = position;
        _this.rb = rb;
        _this.id = id;
        _this.showDelete = true;
        return _this;
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
        key: 'setShowDelete',
        value: function setShowDelete(showDelete) {
            this.showDelete = showDelete;
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
                var panelItem = new _MainPanelItem2.default('parameter', parent.getPanelItem(), parameter, { hasChildren: true, showAdd: true, showDelete: this.showDelete, draggable: true }, this.rb);
                panelItem.openParentItems();
                parameter.setPanelItem(panelItem);
                parent.getPanelItem().insertChild(this.position, panelItem);
                parameter.setup();
                this.rb.notifyEvent(parameter, _Command3.default.operation.add);
            }
        }
    }, {
        key: 'deleteParameter',
        value: function deleteParameter() {
            var parameter = this.rb.getDataObject(this.id);
            if (parameter !== null) {
                this.initialData = parameter.toJS();
                this.rb.deleteParameter(parameter);
            }
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'AddDeleteParameterCmd';
        }
    }]);
    return AddDeleteParameterCmd;
}(_Command3.default);

exports.default = AddDeleteParameterCmd;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Command2 = __webpack_require__(11);

var _Command3 = _interopRequireDefault(_Command2);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Command to add and delete a style.
 * @class
 */
var AddDeleteStyleCmd = function (_Command) {
    (0, _inherits3.default)(AddDeleteStyleCmd, _Command);

    function AddDeleteStyleCmd(add, initialData, id, parentId, position, rb) {
        (0, _classCallCheck3.default)(this, AddDeleteStyleCmd);

        var _this = (0, _possibleConstructorReturn3.default)(this, (AddDeleteStyleCmd.__proto__ || (0, _getPrototypeOf2.default)(AddDeleteStyleCmd)).call(this));

        _this.add = add;
        _this.initialData = initialData;
        _this.parentId = parentId;
        _this.position = position;
        _this.rb = rb;
        _this.id = id;
        return _this;
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
                var panelItem = new _MainPanelItem2.default('style', parent.getPanelItem(), style, { draggable: true }, this.rb);
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
            }
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'AddDeleteStyleCmd';
        }
    }]);
    return AddDeleteStyleCmd;
}(_Command3.default);

exports.default = AddDeleteStyleCmd;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SectionElement = __webpack_require__(44);

var _SectionElement2 = _interopRequireDefault(_SectionElement);

var _utils = __webpack_require__(6);

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
        value: function setValue(field, value) {
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

            // update width of all elements which cover full width
            var docElements = this.rb.getDocElements(true);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(docElements), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var docElement = _step.value;

                    if (docElement instanceof _SectionElement2.default) {
                        docElement.setWidth(size.width);
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

            this.rb.getDocument().pageSizeChanged();
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
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = (0, _getIterator3.default)(this.getFields()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var field = _step2.value;

                    ret[field] = this.getValue(field);
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

            return ret;
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'DocumentProperties';
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(5);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _SectionBandElement = __webpack_require__(87);

var _SectionBandElement2 = _interopRequireDefault(_SectionBandElement);

var _Band = __webpack_require__(20);

var _Band2 = _interopRequireDefault(_Band);

var _Parameter = __webpack_require__(13);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Section element. Sections can be added to the content band and contain a content band and optional
 * header/footer bands.
 * @class
 */
var SectionElement = function (_DocElement) {
    (0, _inherits3.default)(SectionElement, _DocElement);

    function SectionElement(id, initialData, rb) {
        (0, _classCallCheck3.default)(this, SectionElement);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SectionElement.__proto__ || (0, _getPrototypeOf2.default)(SectionElement)).call(this, rb.getLabel('docElementSection'), id, -1, 60, rb));

        _this.setupComplete = false;
        _this.dataSource = '';
        _this.label = '';
        _this.header = false;
        _this.footer = false;
        _this.headerData = null;
        _this.contentData = null;
        _this.footerData = null;

        _this.setInitialData(initialData);
        return _this;
    }

    (0, _createClass3.default)(SectionElement, [{
        key: 'setup',
        value: function setup(openPanelItem) {
            (0, _get3.default)(SectionElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(SectionElement.prototype), 'setup', this).call(this, openPanelItem);
            this.createElement();
            this.updateDisplay();

            this.headerData = this.createBand(_Band2.default.bandType.header, null);
            this.contentData = this.createBand(_Band2.default.bandType.content, null);
            this.footerData = this.createBand(_Band2.default.bandType.footer, null);
            this.updateHeight(null, -1);

            this.setWidth(this.getContainerContentSize().width);

            this.setupComplete = true;
            this.updateName();
            if (openPanelItem) {
                this.panelItem.open();
            }
        }
    }, {
        key: 'createBand',
        value: function createBand(bandType, dataValues) {
            var data = void 0;
            var dataKey = bandType + 'Data';
            var dataId = void 0;
            var panelItemProperties = { hasChildren: true, showDelete: false };
            if (dataValues) {
                data = dataValues;
            } else if (this[dataKey]) {
                data = this[dataKey];
                dataId = data.id;
            } else {
                data = {};
            }
            data.parentId = this.id;
            data.containerId = this.containerId;
            if (!dataId) {
                dataId = this.rb.getUniqueId();
            }
            var y = 0;
            if (bandType === _Band2.default.bandType.header) {
                data.y = '' + y;
            } else if (bandType === _Band2.default.bandType.content) {
                if (this.header && this.headerData !== null) {
                    y += this.headerData.getValue('heightVal');
                }
                data.y = '' + y;
            } else if (bandType === _Band2.default.bandType.footer) {
                if (this.header && this.headerData !== null) {
                    y += this.headerData.getValue('heightVal');
                }
                if (this.contentData !== null) {
                    y += this.contentData.getValue('heightVal');
                }
                data.y = '' + y;
            }
            if (bandType === _Band2.default.bandType.header && !this.header || bandType === _Band2.default.bandType.footer && !this.footer) {
                panelItemProperties.visible = false;
            }
            var bandElement = new _SectionBandElement2.default(dataId, data, bandType, this.rb);
            this.rb.addDataObject(bandElement);
            var panelItemBand = new _MainPanelItem2.default('section_band', this.panelItem, bandElement, panelItemProperties, this.rb);
            bandElement.setPanelItem(panelItemBand);
            this.panelItem.appendChild(panelItemBand);
            bandElement.setup();

            if (bandType === _Band2.default.bandType.header) {
                bandElement.show(this.header);
            } else if (bandType === _Band2.default.bandType.footer) {
                bandElement.show(this.footer);
            }
            return bandElement;
        }

        /**
         * Register event handler for a container element so it can be dragged and
         * allow selection on double click.
         */

    }, {
        key: 'registerEventHandlers',
        value: function registerEventHandlers() {
            (0, _get3.default)(SectionElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(SectionElement.prototype), 'registerContainerEventHandlers', this).call(this);
        }

        /**
         * Returns highest id of this component, this is the max id of the footer band because it is created last.
         * @returns {Number}
         */

    }, {
        key: 'getMaxId',
        value: function getMaxId() {
            var id = this.id;
            if (this.footerData !== null) {
                id = this.footerData.getMaxId();
            }
            return id;
        }
    }, {
        key: 'appendContainerChildren',
        value: function appendContainerChildren(elements) {
            if (this.headerData !== null) {
                this.headerData.appendContainerChildren(elements);
            }
            if (this.contentData !== null) {
                this.contentData.appendContainerChildren(elements);
            }
            if (this.footerData !== null) {
                this.footerData.appendContainerChildren(elements);
            }
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value) {
            (0, _get3.default)(SectionElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(SectionElement.prototype), 'setValue', this).call(this, field, value);

            if (field === 'label' || field === 'dataSource') {
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
            } else if (field === 'containerId') {
                this.headerData.containerId = value;
                this.contentData.containerId = value;
                this.footerData.containerId = value;
            }
            if (field === 'header' || field === 'footer') {
                this.updateBands(null);
            }
        }
    }, {
        key: 'updateDisplayInternal',
        value: function updateDisplayInternal(x, y, width, height) {
            if (this.el !== null) {
                var props = { top: this.rb.toPixel(y), width: '100%', height: this.rb.toPixel(height) };
                this.el.css(props);
            }
        }

        /**
         * Returns all fields of this object that can be modified in the properties panel.
         * @returns {String[]}
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            return ['y', 'label', 'dataSource', 'header', 'footer', 'printIf'];
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return _DocElement3.default.type.section;
        }
    }, {
        key: 'select',
        value: function select() {
            (0, _get3.default)(SectionElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(SectionElement.prototype), 'select', this).call(this);
            var elSizerContainer = this.getSizerContainerElement();
            // create sizers (to indicate selection) which do not support resizing
            var _arr = ['N', 'S'];
            for (var _i = 0; _i < _arr.length; _i++) {
                var sizer = _arr[_i];
                elSizerContainer.append($('<div class="rbroSizer rbroSizer' + sizer + ' rbroSizerMove"></div>'));
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
        key: 'isAreaSelectionAllowed',
        value: function isAreaSelectionAllowed() {
            return false;
        }
    }, {
        key: 'isDroppingAllowed',
        value: function isDroppingAllowed() {
            return false;
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<div id="rbro_el' + this.id + '" class="rbroDocElement rbroSectionElement"></div>');
            this.el.append($('<div id="rbro_divider_section_top' + this.id + '" class="rbroDivider rbroDividerSection" style="top: 0px"></div>'));
            this.el.append($('<div id="rbro_divider_section_header' + this.id + '" class="rbroDivider rbroDividerSectionBand rbroHidden"></div>'));
            this.el.append($('<div id="rbro_divider_section_footer' + this.id + '" class="rbroDivider rbroDividerSectionBand rbroHidden"></div>'));
            this.el.append($('<div id="rbro_divider_section_bottom' + this.id + '" class="rbroDivider rbroDividerSection"></div>'));
            this.appendToContainer();
            this.registerEventHandlers();
        }
    }, {
        key: 'remove',
        value: function remove() {
            (0, _get3.default)(SectionElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(SectionElement.prototype), 'remove', this).call(this);
            // delete containers of section bands
            if (this.headerData !== null) {
                this.rb.deleteContainer(this.headerData.getLinkedContainer());
            }
            if (this.contentData !== null) {
                this.rb.deleteContainer(this.contentData.getLinkedContainer());
            }
            if (this.footerData !== null) {
                this.rb.deleteContainer(this.footerData.getLinkedContainer());
            }
        }
    }, {
        key: 'updateName',
        value: function updateName() {
            if (this.label.trim() !== '') {
                this.name = this.label;
            } else {
                this.name = this.rb.getLabel('docElementSection');
                if (this.dataSource.trim() !== '') {
                    this.name += ' ' + this.dataSource;
                }
            }
            $('#rbro_menu_item_name' + this.id).text(this.name);
        }

        /**
         * Set internal width and width of all bands. Should be called whenever the document size changes.
         * @param {Number} width - total band width.
         */

    }, {
        key: 'setWidth',
        value: function setWidth(width) {
            this.widthVal = width;
            this.width = '' + width;
            if (this.headerData !== null) {
                this.headerData.widthVal = width;
                this.headerData.width = '' + width;
            }
            if (this.contentData !== null) {
                this.contentData.widthVal = width;
                this.contentData.width = '' + width;
            }
            if (this.footerData !== null) {
                this.footerData.widthVal = width;
                this.footerData.width = '' + width;
            }
        }

        /**
         * Update section element height and position, visibility of dividers for header/footer bands.
         * @param {SectionBandElement} band - if not null the bandHeight parameter will be used for band height
         * instead of the actual stored height value. This is needed to update the divider display during drag
         * of section band height.
         * @param {Number} bandHeight - used band height for given band parameter instead of stored height value.
        */

    }, {
        key: 'updateHeight',
        value: function updateHeight(band, bandHeight) {
            var height = 0;
            if (this.header && this.headerData !== null) {
                if (band === this.headerData) {
                    height += bandHeight;
                } else {
                    height += this.headerData.getValue('heightVal');
                }
                $('#rbro_divider_section_header' + this.id).css({ top: this.rb.toPixel(height) }).removeClass('rbroHidden');
            } else {
                $('#rbro_divider_section_header' + this.id).addClass('rbroHidden');
            }
            if (this.contentData !== null) {
                if (band === this.contentData) {
                    height += bandHeight;
                } else {
                    height += this.contentData.getValue('heightVal');
                }
            }
            if (this.footer && this.footerData !== null) {
                $('#rbro_divider_section_footer' + this.id).css({ top: this.rb.toPixel(height) }).removeClass('rbroHidden');
                if (band === this.footerData) {
                    height += bandHeight;
                } else {
                    height += this.footerData.getValue('heightVal');
                }
            } else {
                $('#rbro_divider_section_footer' + this.id).addClass('rbroHidden');
            }
            $('#rbro_divider_section_bottom' + this.id).css({ top: this.rb.toPixel(height) });
            this.height = '' + height;
            this.heightVal = height;
            this.updateDisplay();
        }

        /**
         * Update height and y-coordinate of all sub-bands (header, content, footer).
         */

    }, {
        key: 'updateBands',
        value: function updateBands(ignoreBandData) {
            if (this.setupComplete) {
                var y = 0;
                if (this.header) {
                    if (this.headerData !== ignoreBandData) {
                        this.headerData.setValue('y', '' + y);
                    }
                    y += this.headerData.getValue('heightVal');
                }
                if (this.contentData !== ignoreBandData) {
                    this.contentData.setValue('y', '' + y);
                }
                y += this.contentData.getValue('heightVal');
                if (this.footer && this.footerData !== ignoreBandData) {
                    this.footerData.setValue('y', '' + y);
                }
            }
            this.updateHeight(null, -1);
        }

        /**
         * Get linked containers of all bands.
         * @returns {Container[]} array with all linked containers of header/content/footer section bands.
         */

    }, {
        key: 'getLinkedContainers',
        value: function getLinkedContainers() {
            var containers = [];
            var container = void 0;
            var _arr2 = ['headerData', 'contentData', 'footerData'];
            for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
                var band = _arr2[_i2];
                if (this[band] !== null) {
                    container = this[band].getLinkedContainer();
                    if (container !== null) {
                        containers.push(container);
                    }
                }
            }
            return containers;
        }

        /**
         * Returns all parameters of the data source (which must be an array parameter).
         * @returns {[Object]} contains the data source name and all parameters of the data source.
         */

    }, {
        key: 'getDataSource',
        value: function getDataSource() {
            var parameters = [];
            var dataSource = this.dataSource.trim();
            var dataSourceParameter = '';
            if (dataSource.length >= 3 && dataSource.substr(0, 2) === '${' && dataSource.charAt(dataSource.length - 1) === '}') {
                dataSourceParameter = dataSource.substring(2, dataSource.length - 1);
                var param = this.rb.getParameterByName(dataSourceParameter);
                if (param !== null && param.getValue('type') === _Parameter2.default.type.array) {
                    parameters = param.getChildren();
                }
            }
            return { name: dataSourceParameter, parameters: parameters };
        }

        /**
         * Adds SetValue commands to command group parameter in case the specified parameter is used in any of
         * the object fields.
         * @param {Parameter} parameter - parameter which will be renamed.
         * @param {String} newParameterName - new name of the parameter.
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameterName',
        value: function addCommandsForChangedParameterName(parameter, newParameterName, cmdGroup) {
            this.addCommandForChangedParameterName(parameter, newParameterName, 'dataSource', cmdGroup);
            this.addCommandForChangedParameterName(parameter, newParameterName, 'printIf', cmdGroup);
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            var ret = (0, _get3.default)(SectionElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(SectionElement.prototype), 'toJS', this).call(this);
            ret['headerData'] = this.headerData.toJS();
            ret['contentData'] = this.contentData.toJS();
            ret['footerData'] = this.footerData.toJS();
            return ret;
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'SectionElement';
        }
    }]);
    return SectionElement;
}(_DocElement3.default);

exports.default = SectionElement;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(5);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _TableBandElement = __webpack_require__(88);

var _TableBandElement2 = _interopRequireDefault(_TableBandElement);

var _AddDeleteDocElementCmd = __webpack_require__(19);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _Parameter = __webpack_require__(13);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _utils = __webpack_require__(6);

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
        _this.borderWidth = '1';
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

        _this.borderWidthVal = utils.convertInputToNumber(_this.borderWidth);
        return _this;
    }

    (0, _createClass3.default)(TableElement, [{
        key: 'setup',
        value: function setup(openPanelItem) {
            (0, _get3.default)(TableElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableElement.prototype), 'setup', this).call(this, openPanelItem);
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
            this.updateHeight();
            this.updateStyle();
            this.updateName();
            if (openPanelItem) {
                this.panelItem.open();
            }
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
            } else if (this[dataKey] && (band !== 'content' || index !== -1 && index < this[dataKey].length)) {
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
            var panelItemBand = new _MainPanelItem2.default('table_band', this.panelItem, bandElement, panelItemProperties, this.rb);
            bandElement.setPanelItem(panelItemBand);
            this.panelItem.appendChild(panelItemBand);
            bandElement.setup();
            var columns = utils.convertInputToNumber(this.columns);
            bandElement.createColumns(columns, false, -1, false);
            panelItemBand.open();

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
        value: function setValue(field, value) {
            (0, _get3.default)(TableElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableElement.prototype), 'setValue', this).call(this, field, value);
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
                if (field === 'borderWidth') {
                    this.borderWidthVal = utils.convertInputToNumber(value);
                }
                this.updateStyle();
            }

            if (field === 'header' || field === 'footer' || field === 'contentRows') {
                this.updateHeight();
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
                elTable.css({
                    'border-style': 'solid',
                    'border-width': this.borderWidthVal + 'px',
                    'border-color': this.borderColor
                });
            } else {
                elTable.css({ 'border-style': 'none' });
            }
            var styleProperties = void 0;
            if (this.border === TableElement.border.grid || this.border === TableElement.border.frameRow || this.border === TableElement.border.row) {
                styleProperties = {
                    'border-style': 'solid none solid none',
                    'border-width': this.borderWidthVal + 'px',
                    'border-color': this.borderColor
                };
            } else {
                styleProperties = { 'border-style': 'none' };
            }
            this.headerData.getElement().css(styleProperties);
            for (i = 0; i < this.contentDataRows.length; i++) {
                this.contentDataRows[i].getElement().css(styleProperties);
            }
            this.footerData.getElement().css(styleProperties);

            if (this.border === TableElement.border.grid) {
                styleProperties = {
                    'border-style': 'none solid none solid',
                    'border-width': this.borderWidthVal + 'px',
                    'border-color': this.borderColor
                };
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
            var fields = this.getProperties();
            fields.splice(0, 0, 'id', 'containerId', 'width');
            return fields;
        }

        /**
         * Returns all fields of this object that can be modified in the properties panel.
         * @returns {String[]}
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            return ['x', 'y', 'dataSource', 'columns', 'header', 'contentRows', 'footer', 'border', 'borderColor', 'borderWidth', 'printIf', 'removeEmptyElement', 'spreadsheet_hide', 'spreadsheet_column', 'spreadsheet_addEmptyRow'];
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
            // create sizers (to indicate selection) which do not support resizing
            var _arr = ['NE', 'SE', 'SW', 'NW'];
            for (var _i = 0; _i < _arr.length; _i++) {
                var sizer = _arr[_i];
                elSizerContainer.append($('<div class="rbroSizer rbroSizer' + sizer + ' rbroSizerMove"></div>'));
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
        key: 'isDroppingAllowed',
        value: function isDroppingAllowed() {
            return false;
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<div class="rbroDocElement rbroTableElement">\n                <table id="rbro_el_table' + this.id + '">\n                    <thead id="rbro_el_table_header' + this.id + '">\n                    </thead>\n                    <tbody id="rbro_el_table_content' + this.id + '">\n                    </tbody>\n                    <tfoot id="rbro_el_table_footer' + this.id + '">\n                    </tfoot>\n                </table>\n            </div>');
            this.appendToContainer();
            this.registerEventHandlers();
            $('#rbro_el_table' + this.id).css('width', this.widthVal + 1 + 'px');
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
         * Is called when number of columns was changed to update the column width of all table bands.
         * @param {Number} columnIndex - index of changed column.
         * @param {Number} width - new column width.
         */

    }, {
        key: 'updateColumnWidth',
        value: function updateColumnWidth(columnIndex, width) {
            if (this.setupComplete) {
                this.headerData.updateColumnWidth(columnIndex, width);
                for (var i = 0; i < this.contentDataRows.length; i++) {
                    this.contentDataRows[i].updateColumnWidth(columnIndex, width);
                }
                this.footerData.updateColumnWidth(columnIndex, width);
            }
        }

        /**
         * Update display of columns of all bands depending on column span value of preceding columns.
         * e.g. if a column has column span value of 3 then the next two columns will be hidden.
         */

    }, {
        key: 'updateColumnDisplay',
        value: function updateColumnDisplay() {
            if (this.setupComplete) {
                this.headerData.updateColumnDisplay();
                for (var i = 0; i < this.contentDataRows.length; i++) {
                    this.contentDataRows[i].updateColumnDisplay();
                }
                this.footerData.updateColumnDisplay();
            }
        }

        /**
         * Update table height based on height of available bands.
         */

    }, {
        key: 'updateHeight',
        value: function updateHeight() {
            if (this.setupComplete) {
                var height = 0;
                if (this.header) {
                    height += this.headerData.getHeight();
                }
                for (var i = 0; i < this.contentDataRows.length; i++) {
                    height += this.contentDataRows[i].getHeight();
                }
                if (this.footer) {
                    height += this.footerData.getHeight();
                }
                this.height = '' + height;
                this.heightVal = height;
            }
        }

        /**
         * Is called when column width of a cell was changed to update all DOM elements accordingly.
         * @param {TableBandElement} tableBand - band containing the changed cell.
         * @param {Number} columnIndex - column index of changed cell.
         * @param {Number} newColumnWidth
         * @param {Number} newTableWidth
         */

    }, {
        key: 'notifyColumnWidthResized',
        value: function notifyColumnWidthResized(tableBand, columnIndex, newColumnWidth, newTableWidth) {
            if (!this.setupComplete) return;

            if (tableBand !== this.headerData) {
                this.headerData.notifyColumnWidthResized(columnIndex, newColumnWidth);
            }
            for (var i = 0; i < this.contentDataRows.length; i++) {
                if (tableBand !== this.contentDataRows[i]) {
                    this.contentDataRows[i].notifyColumnWidthResized(columnIndex, newColumnWidth);
                }
            }
            if (tableBand !== this.footerData) {
                this.footerData.notifyColumnWidthResized(columnIndex, newColumnWidth);
            }
            this.width = '' + newTableWidth;
            this.widthVal = newTableWidth;
            $('#rbro_el_table' + this.id).css('width', newTableWidth + 1 + 'px');
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
         * Returns all parameters of the data source (which must be an array parameter).
         * @returns {[Object]} contains the data source name and all parameters of the data source.
         */

    }, {
        key: 'getDataSource',
        value: function getDataSource() {
            var parameters = [];
            var dataSource = this.dataSource.trim();
            var dataSourceParameter = '';
            if (dataSource.length >= 3 && dataSource.substr(0, 2) === '${' && dataSource.charAt(dataSource.length - 1) === '}') {
                dataSourceParameter = dataSource.substring(2, dataSource.length - 1);
                var param = this.rb.getParameterByName(dataSourceParameter);
                if (param !== null && param.getValue('type') === _Parameter2.default.type.array) {
                    parameters = param.getChildren();
                }
            }
            return { name: dataSourceParameter, parameters: parameters };
        }

        /**
         * Returns index of given content row.
         * @param {DocElement} row - row element to get index for.
         * @returns {Number} Index of row, -1 if row is not a content row in this table.
         */

    }, {
        key: 'getContentRowIndex',
        value: function getContentRowIndex(row) {
            for (var i = 0; i < this.contentDataRows.length; i++) {
                if (row === this.contentDataRows[i]) {
                    return i;
                }
            }
            return -1;
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
         * @param {Parameter} parameter - parameter which will be renamed.
         * @param {String} newParameterName - new name of the parameter.
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameterName',
        value: function addCommandsForChangedParameterName(parameter, newParameterName, cmdGroup) {
            this.addCommandForChangedParameterName(parameter, newParameterName, 'dataSource', cmdGroup);
        }

        /**
         * Reduce space of existing columns so there is enough space for new columns.
         * @param {Number} columns - new column count.
         * @param {Number} colIndex - columns left of this index will be shrinked (if necessary).
         */

    }, {
        key: 'createSpaceForNewColumns',
        value: function createSpaceForNewColumns(columns, colIndex) {
            var columnMinWidth = TableElement.getColumnMinWidth();
            var spaceNeeded = columns * columnMinWidth;
            var i = colIndex - 1;
            // reduce width of all existing columns until there is enough space
            while (i >= 0) {
                var column = this.headerData.getColumn(i);
                var freeSpace = column.getValue('widthVal') - columnMinWidth;
                var newWidth = columnMinWidth;
                if (freeSpace > spaceNeeded) {
                    newWidth = column.getValue('widthVal') - spaceNeeded;
                }
                this.updateColumnWidth(i, newWidth);
                spaceNeeded -= freeSpace;
                if (spaceNeeded <= 0) break;
                i--;
            }
        }

        /**
         * Returns true if there is enough space for the given column count, false otherwise.
         * @param {Number} columns - column count to test for available space.
         * @returns {Boolean}
         */

    }, {
        key: 'hasEnoughAvailableSpace',
        value: function hasEnoughAvailableSpace(columns) {
            var existingColumns = utils.convertInputToNumber(this.columns);
            var maxColumns = Math.floor(this.widthVal / TableElement.getColumnMinWidth());
            if (columns > existingColumns && columns > maxColumns) {
                // not enough space for all columns
                return false;
            }
            return true;
        }
        /**
         * Adds commands to command group parameter to recreate table with new column count.
         *
         * The commands are only added if there is enough space available for the new columns.
         * This should be checked beforehand by calling hasEnoughAvailableSpace.
         *
         * @param {Number} columns - requested new column count.
         * @param {CommandGroupCmd} cmdGroup - possible commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedColumns',
        value: function addCommandsForChangedColumns(columns, cmdGroup) {
            if (!this.hasEnoughAvailableSpace(columns)) {
                return;
            }

            var existingColumns = utils.convertInputToNumber(this.columns);

            // delete table with current settings and restore below with new columns, necessary for undo/redo
            var cmd = new _AddDeleteDocElementCmd2.default(false, this.getPanelItem().getPanelName(), this.toJS(), this.id, this.getContainerId(), -1, this.rb);
            cmdGroup.addCommand(cmd);

            if (columns > existingColumns) {
                this.createSpaceForNewColumns(columns - existingColumns, existingColumns);
            } else if (columns < existingColumns) {
                var usedWidth = 0;
                for (var i = 0; i < columns; i++) {
                    usedWidth += this.headerData.getColumn(i).getValue('widthVal');
                }
                // add remaining space to last column
                var column = this.headerData.getColumn(columns - 1);
                if (this.widthVal - usedWidth > 0) {
                    this.updateColumnWidth(columns - 1, column.getValue('widthVal') + (this.widthVal - usedWidth));
                }
            }

            this.columns = columns;
            this.headerData.createColumns(columns, true, -1, false);
            for (var _i2 = 0; _i2 < this.contentDataRows.length; _i2++) {
                this.contentDataRows[_i2].createColumns(columns, true, -1, false);
            }
            this.footerData.createColumns(columns, true, -1, false);

            // restore table with new column count and updated settings
            cmd = new _AddDeleteDocElementCmd2.default(true, this.getPanelItem().getPanelName(), this.toJS(), this.id, this.getContainerId(), -1, this.rb);
            cmdGroup.addCommand(cmd);
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
                    data = { height: this.contentDataRows[this.contentDataRows.length - 1].height, columnData: [] };
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
    }, {
        key: 'getClassName',


        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */
        value: function getClassName() {
            return 'TableElement';
        }
    }], [{
        key: 'removeIds',
        value: function removeIds(data) {
            var _arr2 = ['headerData', 'footerData'];

            for (var _i3 = 0; _i3 < _arr2.length; _i3++) {
                var bandKey = _arr2[_i3];
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
    }, {
        key: 'getColumnMinWidth',
        value: function getColumnMinWidth() {
            return 20;
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement = __webpack_require__(5);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _TextElement2 = __webpack_require__(64);

var _TextElement3 = _interopRequireDefault(_TextElement2);

var _AddDeleteDocElementCmd = __webpack_require__(19);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _CommandGroupCmd = __webpack_require__(15);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Band = __webpack_require__(20);

var _Band2 = _interopRequireDefault(_Band);

var _utils = __webpack_require__(6);

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

        _this.colspan = initialData.colspan || '';
        _this.colspanVal = 1;
        _this.columnIndex = initialData.columnIndex;
        _this.parentId = initialData.parentId;
        _this.tableId = initialData.tableId;
        _this.displayWidth = _this.widthVal;
        _this.lastTouchStartTime = 0;
        _this.updateColspanVal();
        return _this;
    }

    (0, _createClass3.default)(TableTextElement, [{
        key: 'setInitialData',
        value: function setInitialData(initialData) {
            this.growWeight = 0;
            (0, _get3.default)(TableTextElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableTextElement.prototype), 'setInitialData', this).call(this, initialData);
        }
    }, {
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
            }).on('touchstart', function (event) {
                if (!_this2.rb.isSelectedObject(_this2.id)) {
                    var timeSinceLastTouch = new Date().getTime() - _this2.lastTouchStartTime;
                    // if last touch event was just recently ("double click") we allow
                    // selection of this table text element. Otherwise element can only be
                    // selected if another table text is already selected.
                    if (timeSinceLastTouch < 1000) {
                        if (_this2.rb.isSelectedObject(_this2.tableId)) {
                            _this2.rb.selectObject(_this2.id, true);
                            event.stopPropagation();
                        }
                    } else {
                        if (_this2.rb.isTableElementSelected(_this2.tableId)) {
                            _this2.rb.selectObject(_this2.id, true);
                            event.stopPropagation();
                        }
                    }
                }
                _this2.lastTouchStartTime = new Date().getTime();
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
        key: 'getValue',
        value: function getValue(field) {
            if (field === 'xReadOnly') {
                // offset of this cell relative to table, needed for display in read-only field
                return this.getOffsetX();
            }
            return (0, _get3.default)(TableTextElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableTextElement.prototype), 'getValue', this).call(this, field);
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value) {
            (0, _get3.default)(TableTextElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableTextElement.prototype), 'setValue', this).call(this, field, value);

            if (field === 'width') {
                var table = this.getTable();
                if (table !== null) {
                    table.updateColumnWidth(this.columnIndex, value);
                    table.updateColumnDisplay();
                }
            } else if (field === 'height') {
                this.updateDisplayInternalNotify(0, 0, this.displayWidth, this.heightVal, false);
            } else if (field === 'colspan') {
                this.updateColspanVal();
                var tableObj = this.rb.getDataObject(this.tableId);
                if (tableObj !== null) {
                    tableObj.updateColumnDisplay();
                }
            }
        }

        /**
         * Returns value to use for updating input control.
         *
         * Needed for cells with colspan > 1 because internal width is only for 1 cell but
         * displayed width in input field is total width for all cells included in colspan.
         *
         * @param {Number} field - field name.
         * @param {Number} value - value for update.
         */

    }, {
        key: 'getUpdateValue',
        value: function getUpdateValue(field, value) {
            if (field === 'width') {
                var updateValue = utils.convertInputToNumber(value);
                if (this.colspanVal > 1) {
                    var tableBandObj = this.rb.getDataObject(this.parentId);
                    if (tableBandObj !== null) {
                        var nextCellIndex = this.getNextCellIndex();
                        var cellWidths = tableBandObj.getSingleCellWidths();
                        if (nextCellIndex > cellWidths.length) {
                            nextCellIndex = cellWidths.length;
                        }
                        for (var i = this.columnIndex + 1; i < nextCellIndex; i++) {
                            updateValue += cellWidths[i];
                        }
                    }
                }
                if (value === '' && updateValue === 0) {
                    // empty input value
                    return '';
                }
                return '' + updateValue;
            }
            return value;
        }
    }, {
        key: 'setWidth',
        value: function setWidth(width) {
            this.width = width;
            this.widthVal = utils.convertInputToNumber(width);
        }
    }, {
        key: 'getDisplayWidth',
        value: function getDisplayWidth() {
            return this.displayWidth;
        }
    }, {
        key: 'setDisplayWidth',
        value: function setDisplayWidth(width) {
            this.displayWidth = width;
        }

        /**
         * Returns display width split into width for all cells contained in colspan.
         * @param {Number} displayWidth - new display width.
         * @returns {[Number]} array of width values for each cell contained in colspan.
         */

    }, {
        key: 'getDisplayWidthSplit',
        value: function getDisplayWidthSplit(displayWidth) {
            if (this.colspanVal === 1) {
                return [displayWidth];
            }
            var minWidth = 20;
            var rv = [minWidth];
            var width2 = minWidth;
            var tableBandObj = this.rb.getDataObject(this.parentId);
            if (tableBandObj !== null) {
                var nextCellIndex = this.getNextCellIndex();
                var cellWidths = tableBandObj.getSingleCellWidths();
                if (nextCellIndex > cellWidths.length) {
                    nextCellIndex = cellWidths.length;
                }
                for (var i = this.columnIndex + 1; i < nextCellIndex; i++) {
                    rv.push(cellWidths[i]);
                    width2 += cellWidths[i];
                }
                var diff = displayWidth - width2;
                if (diff > 0) {
                    rv[0] += diff;
                } else if (diff < 0) {
                    var _i = 1;
                    diff = -diff;
                    while (_i < rv.length) {
                        if (rv[_i] - minWidth > diff) {
                            rv[_i] -= diff;
                            break;
                        }
                        diff -= rv[_i] - minWidth;
                        rv[_i] = minWidth;
                        _i++;
                    }
                }
            }
            return rv;
        }
    }, {
        key: 'updateColspanVal',
        value: function updateColspanVal() {
            this.colspanVal = utils.convertInputToNumber(this.colspan);
            if (this.colspanVal <= 0) {
                this.colspanVal = 1;
            }
            if (this.el !== null) {
                this.el.attr('colspan', this.colspanVal);
            }
        }

        /**
         * Returns all data fields of this object. The fields are used when serializing the object.
         * @returns {String[]}
         */

    }, {
        key: 'getFields',
        value: function getFields() {
            var fields = this.getProperties();
            // remove 'xReadOnly' field and add 'id'
            fields.splice(0, 1, 'id');
            return fields;
        }

        /**
         * Returns all fields of this object that can be modified in the properties panel.
         * @returns {String[]}
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            var fields = ['xReadOnly', 'width', 'content', 'eval', 'colspan', 'styleId', 'bold', 'italic', 'underline', 'strikethrough', 'horizontalAlignment', 'verticalAlignment', 'textColor', 'backgroundColor', 'font', 'fontSize', 'lineSpacing', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'pattern', 'link', 'cs_condition', 'cs_styleId', 'cs_bold', 'cs_italic', 'cs_underline', 'cs_strikethrough', 'cs_horizontalAlignment', 'cs_verticalAlignment', 'cs_textColor', 'cs_backgroundColor', 'cs_font', 'cs_fontSize', 'cs_lineSpacing', 'cs_paddingLeft', 'cs_paddingTop', 'cs_paddingRight', 'cs_paddingBottom', 'spreadsheet_textWrap'];
            var tableBandObj = this.rb.getDataObject(this.parentId);
            if (tableBandObj !== null && tableBandObj.getValue('bandType') === _Band2.default.bandType.header) {
                fields.push('printIf');
                fields.push('growWeight');
            }
            return fields;
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return _DocElement2.default.type.tableText;
        }
    }, {
        key: 'updateDisplay',
        value: function updateDisplay() {
            this.updateDisplayInternal(this.xVal, this.yVal, this.displayWidth, this.heightVal);
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
                    // calculate table width
                    var newTableWidth = width;
                    var cellWidths = tableBandObj.getSingleCellWidths();
                    for (var i = 0; i < cellWidths.length; i++) {
                        if (i < this.columnIndex || i >= this.columnIndex + this.colspanVal) {
                            newTableWidth += cellWidths[i];
                        }
                    }

                    var widths = this.getDisplayWidthSplit(width);
                    for (var _i2 = 0; _i2 < widths.length; _i2++) {
                        tableObj.notifyColumnWidthResized(tableBandObj, this.columnIndex + _i2, widths[_i2], newTableWidth);
                    }
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
        key: 'hasBorderSettings',
        value: function hasBorderSettings() {
            return false;
        }
    }, {
        key: 'isAreaSelectionAllowed',
        value: function isAreaSelectionAllowed() {
            return false;
        }
    }, {
        key: 'isDraggingAllowed',
        value: function isDraggingAllowed() {
            return false;
        }
    }, {
        key: 'isDroppingAllowed',
        value: function isDroppingAllowed() {
            return false;
        }

        /**
         * Returns minimum allowed width of element.
         * @returns {Number}.
         */

    }, {
        key: 'getMinWidth',
        value: function getMinWidth() {
            return 20 * this.colspanVal;
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
                var widths = tableBandObj.getSingleCellWidths();
                var widthOther = 0; // width of other cells
                for (var i = 0; i < widths.length; i++) {
                    if (i < this.columnIndex || i >= this.columnIndex + this.colspanVal) {
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
                var widths = tableBandObj.getSingleCellWidths();
                var offsetX = 0;
                for (var i = 0; i < this.columnIndex; i++) {
                    offsetX += widths[i];
                }
                return offsetX;
            }
            return 0;
        }
    }, {
        key: 'getCellIndex',
        value: function getCellIndex() {
            return this.columnIndex;
        }

        /**
         * Returns index of next cell by taking column span into account.
         * @returns {Number}.
         */

    }, {
        key: 'getNextCellIndex',
        value: function getNextCellIndex() {
            return this.columnIndex + this.colspanVal;
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<td id="rbro_el' + this.id + '" class="rbroTableTextElement"></td>').append($('<div id="rbro_el_content' + this.id + '" class="rbroContentContainerHelper"></div>').append($('<div id="rbro_el_content_text' + this.id + '" class="rbroDocElementContentText"></div>').append($('<span id="rbro_el_content_text_data' + this.id + '"></span>'))));
            if (this.colspanVal > 1) {
                this.el.attr('colspan', this.colspanVal);
            }
            $('#rbro_el_table_band' + this.parentId).append(this.el);
            $('#rbro_el_content_text_data' + this.id).text(this.content);
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
    }, {
        key: 'addCommandsForChangedWidth',
        value: function addCommandsForChangedWidth(newWidth, disableSelect, cmdGroup) {
            var widths = this.getDisplayWidthSplit(newWidth);
            var tableBand = this.getParent();
            if (tableBand !== null) {
                for (var i = widths.length - 1; i >= 0; i--) {
                    var cmd = new _SetValueCmd2.default(tableBand.getColumn(this.columnIndex + i).getId(), 'width', '' + widths[i], _SetValueCmd2.default.type.text, this.rb);
                    if (disableSelect || i > 0) {
                        cmd.disableSelect();
                    }
                    cmdGroup.addCommand(cmd);
                }
            }
        }

        /**
         * Adds a table column to the left or right of this cell.
         * @param {Boolean} left - if true then column will be added to the left, otherwise to the right.
         */

    }, {
        key: 'insertColumn',
        value: function insertColumn(left) {
            var tableBand = this.getParent();
            var table = this.getTable();
            if (tableBand !== null && table !== null) {
                var colIndex = tableBand.getColumnIndex(this);
                if (colIndex !== -1) {
                    var cmdGroup = new _CommandGroupCmd2.default('Insert column');
                    // delete table with current settings and restore below with new columns, necessary for undo/redo
                    var cmd = new _AddDeleteDocElementCmd2.default(false, table.getPanelItem().getPanelName(), table.toJS(), table.getId(), table.getContainerId(), -1, this.rb);
                    cmdGroup.addCommand(cmd);

                    // increase column count of table
                    var columns = utils.convertInputToNumber(table.getValue('columns')) + 1;
                    table.setValue('columns', columns);

                    // add a column to each table band
                    table.getValue('headerData').createColumns(columns, true, colIndex, left);
                    for (var i = 0; i < table.getValue('contentDataRows').length; i++) {
                        table.getValue('contentDataRows')[i].createColumns(columns, true, colIndex, left);
                    }
                    table.getValue('footerData').createColumns(columns, true, colIndex, left);

                    // restore table with new column count and updated settings
                    cmd = new _AddDeleteDocElementCmd2.default(true, table.getPanelItem().getPanelName(), table.toJS(), table.getId(), table.getContainerId(), -1, this.rb);
                    cmdGroup.addCommand(cmd);

                    this.rb.executeCommand(cmdGroup);
                    // select new column
                    this.rb.selectObject(this.getParent().getValue('columnData')[left ? colIndex : colIndex + 1].getId(), true);
                }
            }
        }

        /**
         * Delete column where this cell belongs to.
         */

    }, {
        key: 'deleteColumn',
        value: function deleteColumn() {
            var tableBand = this.getParent();
            var table = this.getTable();
            if (tableBand !== null && table !== null) {
                var colIndex = tableBand.getColumnIndex(this);
                if (colIndex !== -1) {
                    var cmdGroup = new _CommandGroupCmd2.default('Delete column');
                    // delete table with current settings and restore below with new columns, necessary for undo/redo
                    var cmd = new _AddDeleteDocElementCmd2.default(false, table.getPanelItem().getPanelName(), table.toJS(), table.getId(), table.getContainerId(), -1, this.rb);
                    cmdGroup.addCommand(cmd);

                    // decrease column count of table
                    var columns = utils.convertInputToNumber(table.getValue('columns')) - 1;
                    table.setValue('columns', columns);

                    // subtract column width from table width
                    var tableWidth = table.getValue('widthVal');
                    table.setValue('width', tableWidth - this.widthVal);

                    // remove column from each table band
                    table.getValue('headerData').deleteColumn(colIndex);
                    for (var i = 0; i < table.getValue('contentDataRows').length; i++) {
                        table.getValue('contentDataRows')[i].deleteColumn(colIndex);
                    }
                    table.getValue('footerData').deleteColumn(colIndex);

                    // restore table with new column count and updated settings
                    cmd = new _AddDeleteDocElementCmd2.default(true, table.getPanelItem().getPanelName(), table.toJS(), table.getId(), table.getContainerId(), -1, this.rb);
                    cmdGroup.addCommand(cmd);

                    this.rb.executeCommand(cmdGroup);
                }
            }
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            var rv = (0, _get3.default)(TableTextElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableTextElement.prototype), 'toJS', this).call(this);
            rv['growWeight'] = utils.convertInputToNumber(rv['growWeight']);
            return rv;
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'TableTextElement';
        }
    }]);
    return TableTextElement;
}(_TextElement3.default);

exports.default = TableTextElement;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(104);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(103);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(26);
var dPs = __webpack_require__(126);
var enumBugKeys = __webpack_require__(50);
var IE_PROTO = __webpack_require__(55)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(67)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
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
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(36);
var createDesc = __webpack_require__(37);
var toIObject = __webpack_require__(24);
var toPrimitive = __webpack_require__(58);
var has = __webpack_require__(22);
var IE8_DOM_DEFINE = __webpack_require__(68);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(23).f;
var has = __webpack_require__(22);
var TAG = __webpack_require__(18)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(56)('keys');
var uid = __webpack_require__(39);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(10);
var global = __webpack_require__(17);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(34) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 57 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(29);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(10);
var LIBRARY = __webpack_require__(34);
var wksExt = __webpack_require__(60);
var defineProperty = __webpack_require__(23).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(18);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Command2 = __webpack_require__(11);

var _Command3 = _interopRequireDefault(_Command2);

var _DocElement = __webpack_require__(5);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _Document = __webpack_require__(25);

var _Document2 = _interopRequireDefault(_Document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Command to move a menu panel item. In case the item is moved to a different container (e.g. from content to header band)
 * the corresponding doc element is moved to the new container as well.
 * @class
 */
var MovePanelItemCmd = function (_Command) {
    (0, _inherits3.default)(MovePanelItemCmd, _Command);

    function MovePanelItemCmd(panelItem, moveToParentPanel, moveToPosition, rb) {
        (0, _classCallCheck3.default)(this, MovePanelItemCmd);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MovePanelItemCmd.__proto__ || (0, _getPrototypeOf2.default)(MovePanelItemCmd)).call(this));

        _this.objId = panelItem.getId();
        _this.moveToParentId = moveToParentPanel.getId();
        _this.moveToPosition = moveToPosition;
        _this.oldParentId = panelItem.getParent().getId();
        _this.oldPosition = panelItem.getSiblingPosition();
        _this.oldContainerId = null;
        _this.moveToContainerId = null;
        if (panelItem.getData() instanceof _DocElement2.default) {
            var docElement = panelItem.getData();
            _this.oldContainerId = docElement.getValue('containerId');
            var moveToContainer = rb.getMainPanel().getContainerByItem(moveToParentPanel);
            if (moveToContainer !== null) {
                _this.moveToContainerId = moveToContainer.getId();
            }
        }
        _this.rb = rb;
        return _this;
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
                this.rb.notifyEvent(obj, _Command3.default.operation.move);
            }
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'MovePanelItemCmd';
        }
    }]);
    return MovePanelItemCmd;
}(_Command3.default);

exports.default = MovePanelItemCmd;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(5);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _AddDeleteDocElementCmd = __webpack_require__(19);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _Frame = __webpack_require__(83);

var _Frame2 = _interopRequireDefault(_Frame);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _utils = __webpack_require__(6);

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
        value: function setup(openPanelItem) {
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
            if (openPanelItem) {
                this.panelItem.open();
            }
        }

        /**
         * Register event handler for a container element so it can be dragged and
         * allow selection on double click.
         */

    }, {
        key: 'registerEventHandlers',
        value: function registerEventHandlers() {
            (0, _get3.default)(FrameElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(FrameElement.prototype), 'registerContainerEventHandlers', this).call(this);
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
        value: function setValue(field, value) {
            if (field.indexOf('border') !== -1) {
                // Style.setBorderValue needs to be called before super.setValue
                // because it calls updateStyle() which expects the correct border settings
                this[field] = value;
                if (field === 'borderWidth') {
                    this.borderWidthVal = utils.convertInputToNumber(value);
                }
                _Style2.default.setBorderValue(this, field, '', value, this.rb);
            }

            (0, _get3.default)(FrameElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(FrameElement.prototype), 'setValue', this).call(this, field, value);

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
                borderStyleProperties['border-width'] = this.getValue('borderWidthVal') + 'px';
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
            var fields = this.getProperties();
            fields.splice(0, 0, 'id', 'containerId', 'linkedContainerId');
            return fields;
        }

        /**
         * Returns all fields of this object that can be modified in the properties panel.
         * @returns {String[]}
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            return ['label', 'x', 'y', 'width', 'height', 'backgroundColor', 'borderAll', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom', 'borderColor', 'borderWidth', 'printIf', 'removeEmptyElement', 'shrinkToContentHeight', 'spreadsheet_hide', 'spreadsheet_column', 'spreadsheet_addEmptyRow'];
        }
    }, {
        key: 'getElementType',
        value: function getElementType() {
            return _DocElement3.default.type.frame;
        }
    }, {
        key: 'isAreaSelectionAllowed',
        value: function isAreaSelectionAllowed() {
            return false;
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
         * @param {Parameter} parameter - parameter which will be renamed.
         * @param {String} newParameterName - new name of the parameter.
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameterName',
        value: function addCommandsForChangedParameterName(parameter, newParameterName, cmdGroup) {
            this.addCommandForChangedParameterName(parameter, newParameterName, 'printIf', cmdGroup);
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'FrameElement';
        }
    }]);
    return FrameElement;
}(_DocElement3.default);

exports.default = FrameElement;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(5);

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
        value: function setup(openPanelItem) {
            (0, _get3.default)(PageBreakElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(PageBreakElement.prototype), 'setup', this).call(this, openPanelItem);
            this.createElement();
            this.updateDisplay();
            this.updateStyle();
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value) {
            (0, _get3.default)(PageBreakElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(PageBreakElement.prototype), 'setValue', this).call(this, field, value);
        }

        /**
         * Returns all fields of this object that can be modified in the properties panel.
         * @returns {String[]}
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            return ['y'];
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
        key: 'createElement',
        value: function createElement() {
            this.el = $('<div id="rbro_el' + this.id + '" class="rbroDocElement rbroPageBreakElement"></div>');
            this.appendToContainer();
            (0, _get3.default)(PageBreakElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(PageBreakElement.prototype), 'registerEventHandlers', this).call(this);
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'PageBreakElement';
        }
    }]);
    return PageBreakElement;
}(_DocElement3.default);

exports.default = PageBreakElement;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(5);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _utils = __webpack_require__(6);

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
        _this.strikethrough = false;
        _this.horizontalAlignment = _Style2.default.alignment.left;
        _this.verticalAlignment = _Style2.default.alignment.top;
        _this.textColor = '#000000';
        _this.backgroundColor = '';
        _this.font = rb.getProperty('defaultFont');
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
        _this.cs_strikethrough = false;
        _this.cs_horizontalAlignment = _Style2.default.alignment.left;
        _this.cs_verticalAlignment = _Style2.default.alignment.top;
        _this.cs_textColor = '#000000';
        _this.cs_backgroundColor = '';
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
        _this.link = '';

        _this.spreadsheet_hide = false;
        _this.spreadsheet_column = '';
        _this.spreadsheet_colspan = '';
        _this.spreadsheet_addEmptyRow = false;
        _this.spreadsheet_textWrap = false;

        _this.setInitialData(initialData);

        _this.borderWidthVal = utils.convertInputToNumber(_this.borderWidth);
        return _this;
    }

    (0, _createClass3.default)(TextElement, [{
        key: 'setup',
        value: function setup(openPanelItem) {
            (0, _get3.default)(TextElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TextElement.prototype), 'setup', this).call(this, openPanelItem);
            this.createElement();
            this.updateDisplay();
            this.updateStyle();
            this.updateContent(this.content);
        }
    }, {
        key: 'handleDoubleClick',
        value: function handleDoubleClick(event) {
            (0, _get3.default)(TextElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TextElement.prototype), 'handleDoubleClick', this).call(this, event);
            // focus text content input element and set caret at end of content
            var el = $('#rbro_doc_element_content').get(0);
            el.focus();
            if (typeof el.selectionStart === 'number') {
                el.selectionStart = el.selectionEnd = el.value.length;
            }
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value) {
            if (field.indexOf('border') !== -1) {
                // Style.setBorderValue needs to be called before super.setValue
                // because it calls updateStyle() which expects the correct border settings
                this[field] = value;
                if (field.substr(0, 3) === 'cs_') {
                    if (field === 'cs_borderWidth') {
                        this.borderWidthVal = utils.convertInputToNumber(value);
                    }
                    _Style2.default.setBorderValue(this, field, 'cs_', value, this.rb);
                } else {
                    if (field === 'borderWidth') {
                        this.borderWidthVal = utils.convertInputToNumber(value);
                    }
                    _Style2.default.setBorderValue(this, field, '', value, this.rb);
                }
            }

            (0, _get3.default)(TextElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TextElement.prototype), 'setValue', this).call(this, field, value);

            if (field === 'content') {
                this.updateContent(value);
            } else if (field === 'width' || field === 'height') {
                this.updateDisplay();
            }
        }

        /**
         * Returns all fields of this object that can be modified in the properties panel.
         * @returns {String[]}
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            return ['x', 'y', 'width', 'height', 'content', 'eval', 'styleId', 'bold', 'italic', 'underline', 'strikethrough', 'horizontalAlignment', 'verticalAlignment', 'textColor', 'backgroundColor', 'font', 'fontSize', 'lineSpacing', 'borderColor', 'borderWidth', 'borderAll', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom', 'paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'printIf', 'removeEmptyElement', 'alwaysPrintOnSamePage', 'pattern', 'link', 'cs_condition', 'cs_styleId', 'cs_bold', 'cs_italic', 'cs_underline', 'cs_strikethrough', 'cs_horizontalAlignment', 'cs_verticalAlignment', 'cs_textColor', 'cs_backgroundColor', 'cs_font', 'cs_fontSize', 'cs_lineSpacing', 'cs_borderColor', 'cs_borderWidth', 'cs_borderAll', 'cs_borderLeft', 'cs_borderTop', 'cs_borderRight', 'cs_borderBottom', 'cs_paddingLeft', 'cs_paddingTop', 'cs_paddingRight', 'cs_paddingBottom', 'spreadsheet_hide', 'spreadsheet_column', 'spreadsheet_colspan', 'spreadsheet_addEmptyRow', 'spreadsheet_textWrap'];
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

        /**
         * Adds commands to command group parameter to set style properties of given style.
         *
         * This should be called when the style was changed so all style properties
         * will be updated as well.
         *
         * @param {String} styleId - id of new style or empty string if no style was selected.
         * @param {String} fieldPrefix - field prefix when accessing properties.
         * @param {Object[]} propertyDescriptors - list of all property descriptors to get
         * property type for SetValueCmd.
         * @param {CommandGroupCmd} cmdGroup - commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedStyle',
        value: function addCommandsForChangedStyle(styleId, fieldPrefix, propertyDescriptors, cmdGroup) {
            if (styleId !== '') {
                var style = this.rb.getStyleById(styleId);
                if (style !== null) {
                    var fields = style.getFields().slice(2); // get all fields except id and name
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = (0, _getIterator3.default)(fields), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var field = _step.value;

                            var objField = fieldPrefix + field;
                            var value = style.getValue(field);
                            if (value !== this.getValue(objField)) {
                                var propertyDescriptor = propertyDescriptors[objField];
                                var cmd = new _SetValueCmd2.default(this.getId(), objField, value, propertyDescriptor['type'], this.rb);
                                cmd.disableSelect();
                                cmdGroup.addCommand(cmd);
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
            cmdGroup.addCommand(new _SetValueCmd2.default(this.getId(), fieldPrefix + 'styleId', styleId, _SetValueCmd2.default.type.select, this.rb));
        }
    }, {
        key: 'getContentSize',
        value: function getContentSize(width, height, style) {
            var borderWidth = style.getValue('borderWidthVal');
            width -= utils.convertInputToNumber(style.getValue('paddingLeft')) + utils.convertInputToNumber(style.getValue('paddingRight'));
            if (style.getValue('borderLeft')) {
                width -= borderWidth;
            }
            if (style.getValue('borderRight')) {
                width -= borderWidth;
            }
            height -= utils.convertInputToNumber(style.getValue('paddingTop')) + utils.convertInputToNumber(style.getValue('paddingBottom'));
            if (style.getValue('borderTop')) {
                height -= borderWidth;
            }
            if (style.getValue('borderBottom')) {
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
            var contentSize = this.getContentSize(this.getDisplayWidth(), this.getDisplayHeight(), style);
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
            if (style.getValue('underline') && style.getValue('strikethrough')) {
                styleProperties['text-decoration'] = 'underline line-through';
            } else if (style.getValue('underline')) {
                styleProperties['text-decoration'] = 'underline';
            } else if (style.getValue('strikethrough')) {
                styleProperties['text-decoration'] = 'line-through';
            } else {
                styleProperties['text-decoration'] = 'none';
            }
            styleProperties['color'] = style.getValue('textColor');
            styleProperties['font-family'] = style.getValue('font');
            styleProperties['font-size'] = style.getValue('fontSize') + 'px';
            styleProperties['line-height'] = style.getValue('lineSpacing') * 100.0 + '%';
            if (style.getValue('borderLeft') || style.getValue('borderTop') || style.getValue('borderRight') || style.getValue('borderBottom')) {
                borderStyleProperties['border-style'] = style.getValue('borderTop') ? 'solid' : 'none';
                borderStyleProperties['border-style'] += style.getValue('borderRight') ? ' solid' : ' none';
                borderStyleProperties['border-style'] += style.getValue('borderBottom') ? ' solid' : ' none';
                borderStyleProperties['border-style'] += style.getValue('borderLeft') ? ' solid' : ' none';
                borderStyleProperties['border-width'] = style.getValue('borderWidthVal') + 'px';
                borderStyleProperties['border-color'] = style.getValue('borderColor');
            } else {
                borderStyleProperties['border-style'] = 'none';
            }
            if (style.getValue('paddingLeft') !== '' || style.getValue('paddingTop') !== '' || style.getValue('paddingRight') !== '' || style.getValue('paddingBottom') !== '') {
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
            // span is needed to preserve whitespaces and word-wrap of actual text content
            this.el.append($('<div id="rbro_el_content' + this.id + '" class="rbroContentContainerHelper"></div>').append($('<div id="rbro_el_content_text' + this.id + '" class="rbroDocElementContentText"></div>').append($('<span id="rbro_el_content_text_data' + this.id + '"></span>'))));
            this.appendToContainer();
            $('#rbro_el_content_text_data' + this.id).text(this.content);
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
            $('#rbro_el_content_text_data' + this.id).text(value);
        }

        /**
         * Adds SetValue commands to command group parameter in case the specified parameter is used in any of
         * the object fields.
         * @param {Parameter} parameter - parameter which will be renamed.
         * @param {String} newParameterName - new name of the parameter.
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameterName',
        value: function addCommandsForChangedParameterName(parameter, newParameterName, cmdGroup) {
            this.addCommandForChangedParameterName(parameter, newParameterName, 'content', cmdGroup);
            this.addCommandForChangedParameterName(parameter, newParameterName, 'printIf', cmdGroup);
            this.addCommandForChangedParameterName(parameter, newParameterName, 'cs_condition', cmdGroup);
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

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'TextElement';
        }
    }]);
    return TextElement;
}(_DocElement3.default);

exports.default = TextElement;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _PanelBase2 = __webpack_require__(31);

var _PanelBase3 = _interopRequireDefault(_PanelBase2);

var _CommandGroupCmd = __webpack_require__(15);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _DocElement = __webpack_require__(5);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _TableElement = __webpack_require__(45);

var _TableElement2 = _interopRequireDefault(_TableElement);

var _utils = __webpack_require__(6);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all style properties.
 * @class
 */
var StylePanel = function (_PanelBase) {
    (0, _inherits3.default)(StylePanel, _PanelBase);

    function StylePanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, StylePanel);

        var _this = (0, _possibleConstructorReturn3.default)(this, (StylePanel.__proto__ || (0, _getPrototypeOf2.default)(StylePanel)).call(this, 'rbro_style', _Style2.default, rootElement, rb));

        _this.propertyDescriptors = {
            'name': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'name'
            },
            'bold': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'bold',
                'rowId': 'rbro_style_textstyle_row',
                'singleRowProperty': false,
                'rowProperties': ['bold', 'italic', 'underline', 'strikethrough']
            },
            'italic': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'italic',
                'rowId': 'rbro_style_textstyle_row',
                'singleRowProperty': false,
                'rowProperties': ['bold', 'italic', 'underline', 'strikethrough']
            },
            'underline': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'underline',
                'rowId': 'rbro_style_textstyle_row',
                'singleRowProperty': false,
                'rowProperties': ['bold', 'italic', 'underline', 'strikethrough']
            },
            'strikethrough': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'strikethrough',
                'rowId': 'rbro_style_textstyle_row',
                'singleRowProperty': false,
                'rowProperties': ['bold', 'italic', 'underline', 'strikethrough']
            },
            'horizontalAlignment': {
                'type': _SetValueCmd2.default.type.buttonGroup,
                'fieldId': 'halignment',
                'rowId': 'rbro_style_alignment_row',
                'singleRowProperty': false,
                'rowProperties': ['horizontalAlignment', 'verticalAlignment']
            },
            'verticalAlignment': {
                'type': _SetValueCmd2.default.type.buttonGroup,
                'fieldId': 'valignment',
                'rowId': 'rbro_style_alignment_row',
                'singleRowProperty': false
            },
            'textColor': {
                'type': _SetValueCmd2.default.type.color,
                'allowEmpty': false,
                'fieldId': 'text_color'
            },
            'backgroundColor': {
                'type': _SetValueCmd2.default.type.color,
                'allowEmpty': true,
                'fieldId': 'background_color'
            },
            'font': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'font',
                'rowId': 'rbro_style_font_row',
                'singleRowProperty': false,
                'rowProperties': ['font', 'fontSize']
            },
            'fontSize': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'font_size',
                'rowId': 'rbro_style_font_row',
                'singleRowProperty': false
            },
            'lineSpacing': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'line_spacing'
            },
            'borderAll': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'border_all',
                'rowId': 'rbro_style_border_row',
                'singleRowProperty': false,
                'rowProperties': ['borderAll', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom']
            },
            'borderLeft': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'border_left',
                'rowId': 'rbro_style_border_row',
                'singleRowProperty': false
            },
            'borderTop': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'border_top',
                'rowId': 'rbro_style_border_row',
                'singleRowProperty': false
            },
            'borderRight': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'border_right',
                'rowId': 'rbro_style_border_row',
                'singleRowProperty': false
            },
            'borderBottom': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'border_bottom',
                'rowId': 'rbro_style_border_row',
                'singleRowProperty': false
            },
            'borderColor': {
                'type': _SetValueCmd2.default.type.color,
                'allowEmpty': false,
                'fieldId': 'border_color'
            },
            'borderWidth': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'border_width'
            },
            'paddingLeft': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'padding_left',
                'rowId': 'rbro_style_padding_row',
                'singleRowProperty': false,
                'rowProperties': ['paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom']
            },
            'paddingTop': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'padding_top',
                'rowId': 'rbro_style_padding_row',
                'singleRowProperty': false
            },
            'paddingRight': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'padding_right',
                'rowId': 'rbro_style_padding_row',
                'singleRowProperty': false
            },
            'paddingBottom': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'padding_bottom',
                'rowId': 'rbro_style_padding_row',
                'singleRowProperty': false
            }
        };
        return _this;
    }

    (0, _createClass3.default)(StylePanel, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var panel = $('<div id="rbro_style_panel" class="rbroHidden"></div>');
            var elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_style_name">' + this.rb.getLabel('styleName') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elStyleName = $('<input id="rbro_style_name">').on('input', function (event) {
                var obj = _this2.rb.getSelectedObject();
                if (obj !== null) {
                    if (elStyleName.val().trim() !== '') {
                        _this2.rb.executeCommand(new _SetValueCmd2.default(obj.getId(), 'name', elStyleName.val(), _SetValueCmd2.default.type.text, _this2.rb));
                    } else {
                        elStyleName.val(style.getName());
                    }
                }
            });
            elFormField.append(elStyleName);
            elDiv.append(elFormField);
            panel.append(elDiv);

            StylePanel.renderStyle(panel, 'style_', '', false, this.rb);

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            StylePanel.destroyStyle('style_');
        }
    }, {
        key: 'updateDisplay',


        /**
         * Is called when the selection is changed or the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {String} [field] - affected field in case of change operation.
         */
        value: function updateDisplay(field) {
            var selectedObject = this.rb.getSelectedObject();

            if (selectedObject !== null && selectedObject instanceof _Style2.default) {
                for (var property in this.propertyDescriptors) {
                    if (this.propertyDescriptors.hasOwnProperty(property) && (field === null || property === field)) {
                        var propertyDescriptor = this.propertyDescriptors[property];
                        var value = selectedObject.getValue(property);
                        (0, _get3.default)(StylePanel.prototype.__proto__ || (0, _getPrototypeOf2.default)(StylePanel.prototype), 'setValue', this).call(this, propertyDescriptor, value, false);
                    }
                }
            }
        }
    }], [{
        key: 'renderStyle',
        value: function renderStyle(elPanel, idPrefix, fieldPrefix, renderDocElementMainStyle, rb) {
            var elDiv = void 0,
                elFormField = void 0;
            elDiv = $('<div id="rbro_' + idPrefix + 'textstyle_row" class="rbroFormRow"></div>');
            elDiv.append('<label>' + rb.getLabel('styleTextStyle') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elTextStyle = $('<div id="rbro_' + idPrefix + 'textstyle"></div>');
            var elBold = $('<button id="rbro_' + idPrefix + 'bold" name="style_bold"\n             class="rbroButton rbroActionButton rbroIcon-bold" type="button"\n             title="' + rb.getLabel('styleBold') + '"></button>').click(function (event) {
                var val = !elBold.hasClass('rbroButtonActive');
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'bold', val, _SetValueCmd2.default.type.button, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'bold') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('bold', val, _SetValueCmd2.default.type.button, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elTextStyle.append(elBold);
            var elItalic = $('<button id="rbro_' + idPrefix + 'italic"\n             class="rbroButton rbroActionButton rbroIcon-italic" type="button"\n             title="' + rb.getLabel('styleItalic') + '"></button>').click(function (event) {
                var val = !elItalic.hasClass('rbroButtonActive');
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'italic', val, _SetValueCmd2.default.type.button, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'italic') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('italic', val, _SetValueCmd2.default.type.button, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elTextStyle.append(elItalic);
            var elUnderline = $('<button id="rbro_' + idPrefix + 'underline"\n             class="rbroButton rbroActionButton rbroIcon-underline" type="button"\n             title="' + rb.getLabel('styleUnderline') + '"></button>').click(function (event) {
                var val = !elUnderline.hasClass('rbroButtonActive');
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'underline', val, _SetValueCmd2.default.type.button, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'underline') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('underline', val, _SetValueCmd2.default.type.button, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elTextStyle.append(elUnderline);
            var elStrikethrough = $('<button id="rbro_' + idPrefix + 'strikethrough"\n             class="rbroButton rbroActionButton rbroIcon-strikethrough" type="button"\n             title="' + rb.getLabel('styleStrikethrough') + '"></button>').click(function (event) {
                var val = !elStrikethrough.hasClass('rbroButtonActive');
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'strikethrough', val, _SetValueCmd2.default.type.button, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'strikethrough') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('strikethrough', val, _SetValueCmd2.default.type.button, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elTextStyle.append(elStrikethrough);
            elFormField.append(elTextStyle);
            elDiv.append(elFormField);
            elPanel.append(elDiv);

            elDiv = $('<div id="rbro_' + idPrefix + 'alignment_row" class="rbroFormRow"></div>');
            elDiv.append('<label>' + rb.getLabel('styleAlignment') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elHAlignment = $('<div id="rbro_' + idPrefix + 'halignment"></div>');
            var elHAlignmentLeft = $('<button id="rbro_' + idPrefix + 'halignment_left"\n             class="rbroButton rbroActionButton rbroIcon-text-align-left" type="button" value="left"\n             title="' + rb.getLabel('styleHAlignmentLeft') + '"></button>').click(function (event) {
                var val = _Style2.default.alignment.left;
                var selectedObjects = rb.getSelectedObjects();
                var valueChanged = false;
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    if (selectedObjects[i].getValue(fieldPrefix + 'horizontalAlignment') !== val) {
                        valueChanged = true;
                        break;
                    }
                }

                if (valueChanged) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                    for (var _i = selectedObjects.length - 1; _i >= 0; _i--) {
                        var obj = selectedObjects[_i];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'horizontalAlignment', val, _SetValueCmd2.default.type.buttonGroup, rb));

                        if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                            if (obj.getValue(fieldPrefix + 'horizontalAlignment') !== val) {
                                cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                            }
                        } else if (obj instanceof _Style2.default) {
                            obj.addCommandsForChangedProperty('horizontalAlignment', val, _SetValueCmd2.default.type.buttonGroup, cmdGroup);
                        }
                    }
                    if (!cmdGroup.isEmpty()) {
                        rb.executeCommand(cmdGroup);
                    }
                }
            });
            elHAlignment.append(elHAlignmentLeft);
            var elHAlignmentCenter = $('<button id="rbro_' + idPrefix + 'halignment_center"\n             class="rbroButton rbroActionButton rbroIcon-text-align-center" type="button" value="center"\n             title="' + rb.getLabel('styleHAlignmentCenter') + '"></button>').click(function (event) {
                var val = _Style2.default.alignment.center;
                var selectedObjects = rb.getSelectedObjects();
                var valueChanged = false;
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    if (selectedObjects[i].getValue(fieldPrefix + 'horizontalAlignment') !== val) {
                        valueChanged = true;
                        break;
                    }
                }

                if (valueChanged) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                    for (var _i2 = selectedObjects.length - 1; _i2 >= 0; _i2--) {
                        var obj = selectedObjects[_i2];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'horizontalAlignment', val, _SetValueCmd2.default.type.buttonGroup, rb));

                        if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                            if (obj.getValue(fieldPrefix + 'horizontalAlignment') !== val) {
                                cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                            }
                        } else if (obj instanceof _Style2.default) {
                            obj.addCommandsForChangedProperty('horizontalAlignment', val, _SetValueCmd2.default.type.buttonGroup, cmdGroup);
                        }
                    }
                    if (!cmdGroup.isEmpty()) {
                        rb.executeCommand(cmdGroup);
                    }
                }
            });
            elHAlignment.append(elHAlignmentCenter);
            var elHAlignmentRight = $('<button id="rbro_' + idPrefix + 'halignment_right"\n             class="rbroButton rbroActionButton rbroIcon-text-align-right" type="button" value="right"\n             title="' + rb.getLabel('styleHAlignmentRight') + '"></button>').click(function (event) {
                var val = _Style2.default.alignment.right;
                var selectedObjects = rb.getSelectedObjects();
                var valueChanged = false;
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    if (selectedObjects[i].getValue(fieldPrefix + 'horizontalAlignment') !== val) {
                        valueChanged = true;
                        break;
                    }
                }

                if (valueChanged) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                    for (var _i3 = selectedObjects.length - 1; _i3 >= 0; _i3--) {
                        var obj = selectedObjects[_i3];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'horizontalAlignment', val, _SetValueCmd2.default.type.buttonGroup, rb));

                        if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                            if (obj.getValue(fieldPrefix + 'horizontalAlignment') !== val) {
                                cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                            }
                        } else if (obj instanceof _Style2.default) {
                            obj.addCommandsForChangedProperty('horizontalAlignment', val, _SetValueCmd2.default.type.buttonGroup, cmdGroup);
                        }
                    }
                    if (!cmdGroup.isEmpty()) {
                        rb.executeCommand(cmdGroup);
                    }
                }
            });
            elHAlignment.append(elHAlignmentRight);
            var elHAlignmentJustify = $('<button id="rbro_' + idPrefix + 'halignment_justify"\n             class="rbroButton rbroActionButton rbroIcon-text-align-justify" type="button" value="justify"\n             title="' + rb.getLabel('styleHAlignmentJustify') + '"></button>').click(function (event) {
                var val = _Style2.default.alignment.justify;
                var selectedObjects = rb.getSelectedObjects();
                var valueChanged = false;
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    if (selectedObjects[i].getValue(fieldPrefix + 'horizontalAlignment') !== val) {
                        valueChanged = true;
                        break;
                    }
                }

                if (valueChanged) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                    for (var _i4 = selectedObjects.length - 1; _i4 >= 0; _i4--) {
                        var obj = selectedObjects[_i4];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'horizontalAlignment', val, _SetValueCmd2.default.type.buttonGroup, rb));

                        if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                            if (obj.getValue(fieldPrefix + 'horizontalAlignment') !== val) {
                                cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                            }
                        } else if (obj instanceof _Style2.default) {
                            obj.addCommandsForChangedProperty('horizontalAlignment', val, _SetValueCmd2.default.type.buttonGroup, cmdGroup);
                        }
                    }
                    if (!cmdGroup.isEmpty()) {
                        rb.executeCommand(cmdGroup);
                    }
                }
            });
            elHAlignment.append(elHAlignmentJustify);
            elFormField.append(elHAlignment);

            var elVAlignment = $('<div id="rbro_' + idPrefix + 'valignment"></div>');
            var elVAlignmentTop = $('<button id="rbro_' + idPrefix + 'valignment_top"\n             class="rbroButton rbroActionButton rbroIcon-align-top" type="button" value="top"\n             title="' + rb.getLabel('styleVAlignmentTop') + '"></button>').click(function (event) {
                var val = _Style2.default.alignment.top;
                var selectedObjects = rb.getSelectedObjects();
                var valueChanged = false;
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    if (selectedObjects[i].getValue(fieldPrefix + 'verticalAlignment') !== val) {
                        valueChanged = true;
                        break;
                    }
                }

                if (valueChanged) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                    for (var _i5 = selectedObjects.length - 1; _i5 >= 0; _i5--) {
                        var obj = selectedObjects[_i5];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'verticalAlignment', val, _SetValueCmd2.default.type.buttonGroup, rb));

                        if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                            if (obj.getValue(fieldPrefix + 'verticalAlignment') !== val) {
                                cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                            }
                        } else if (obj instanceof _Style2.default) {
                            obj.addCommandsForChangedProperty('verticalAlignment', val, _SetValueCmd2.default.type.buttonGroup, cmdGroup);
                        }
                    }
                    if (!cmdGroup.isEmpty()) {
                        rb.executeCommand(cmdGroup);
                    }
                }
            });
            elVAlignment.append(elVAlignmentTop);
            var elVAlignmentMiddle = $('<button id="rbro_' + idPrefix + 'valignment_middle"\n             class="rbroButton rbroActionButton rbroIcon-align-middle" type="button" value="middle"\n             title="' + rb.getLabel('styleVAlignmentMiddle') + '"></button>').click(function (event) {
                var val = _Style2.default.alignment.middle;
                var selectedObjects = rb.getSelectedObjects();
                var valueChanged = false;
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    if (selectedObjects[i].getValue(fieldPrefix + 'verticalAlignment') !== val) {
                        valueChanged = true;
                        break;
                    }
                }

                if (valueChanged) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                    for (var _i6 = selectedObjects.length - 1; _i6 >= 0; _i6--) {
                        var obj = selectedObjects[_i6];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'verticalAlignment', val, _SetValueCmd2.default.type.buttonGroup, rb));

                        if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                            if (obj.getValue(fieldPrefix + 'verticalAlignment') !== val) {
                                cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                            }
                        } else if (obj instanceof _Style2.default) {
                            obj.addCommandsForChangedProperty('verticalAlignment', val, _SetValueCmd2.default.type.buttonGroup, cmdGroup);
                        }
                    }
                    if (!cmdGroup.isEmpty()) {
                        rb.executeCommand(cmdGroup);
                    }
                }
            });
            elVAlignment.append(elVAlignmentMiddle);
            var elVAlignmentBottom = $('<button id="rbro_' + idPrefix + 'valignment_bottom"\n             class="rbroButton rbroActionButton rbroIcon-align-bottom" type="button" value="bottom"\n             title="' + rb.getLabel('styleVAlignmentBottom') + '"></button>').click(function (event) {
                var val = _Style2.default.alignment.bottom;
                var selectedObjects = rb.getSelectedObjects();
                var valueChanged = false;
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    if (selectedObjects[i].getValue(fieldPrefix + 'verticalAlignment') !== val) {
                        valueChanged = true;
                        break;
                    }
                }

                if (valueChanged) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                    for (var _i7 = selectedObjects.length - 1; _i7 >= 0; _i7--) {
                        var obj = selectedObjects[_i7];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'verticalAlignment', val, _SetValueCmd2.default.type.buttonGroup, rb));

                        if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                            if (obj.getValue(fieldPrefix + 'verticalAlignment') !== val) {
                                cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                            }
                        } else if (obj instanceof _Style2.default) {
                            obj.addCommandsForChangedProperty('verticalAlignment', val, _SetValueCmd2.default.type.buttonGroup, cmdGroup);
                        }
                    }
                    if (!cmdGroup.isEmpty()) {
                        rb.executeCommand(cmdGroup);
                    }
                }
            });
            elVAlignment.append(elVAlignmentBottom);
            elFormField.append(elVAlignment);
            elDiv.append(elFormField);
            elPanel.append(elDiv);

            elDiv = $('<div id="rbro_' + idPrefix + 'text_color_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_' + idPrefix + 'text_color">' + rb.getLabel('styleTextColor') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elTextColorContainer = $('<div class="rbroColorPickerContainer"></div>');
            var elTextColor = $('<input id="rbro_' + idPrefix + 'text_color">').change(function (event) {
                var val = elTextColor.val();
                if (utils.isValidColor(val)) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                    var selectedObjects = rb.getSelectedObjects();
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        var obj = selectedObjects[i];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'textColor', val, _SetValueCmd2.default.type.color, rb));

                        if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                            if (obj.getValue(fieldPrefix + 'textColor') !== val) {
                                cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                            }
                        } else if (obj instanceof _Style2.default) {
                            obj.addCommandsForChangedProperty('textColor', val, _SetValueCmd2.default.type.color, cmdGroup);
                        }
                    }
                    if (!cmdGroup.isEmpty()) {
                        rb.executeCommand(cmdGroup);
                    }
                }
            });
            elTextColorContainer.append(elTextColor);
            elFormField.append(elTextColorContainer);
            elDiv.append(elFormField);
            elPanel.append(elDiv);
            utils.initColorPicker(elTextColor, rb);

            elDiv = $('<div id="rbro_' + idPrefix + 'background_color_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_' + idPrefix + 'background_color">\n                      ' + rb.getLabel('styleBackgroundColor') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elBgColorContainer = $('<div class="rbroColorPickerContainer"></div>');
            var elBgColor = $('<input id="rbro_' + idPrefix + 'background_color">').change(function (event) {
                var val = elBgColor.val();
                if (utils.isValidColor(val)) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                    var selectedObjects = rb.getSelectedObjects();
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        var obj = selectedObjects[i];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'backgroundColor', val, _SetValueCmd2.default.type.color, rb));

                        if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                            if (obj.getValue(fieldPrefix + 'backgroundColor') !== val) {
                                cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                            }
                        } else if (obj instanceof _Style2.default) {
                            obj.addCommandsForChangedProperty('backgroundColor', val, _SetValueCmd2.default.type.color, cmdGroup);
                        }
                    }
                    if (!cmdGroup.isEmpty()) {
                        rb.executeCommand(cmdGroup);
                    }
                }
            });
            elBgColorContainer.append(elBgColor);
            elFormField.append(elBgColorContainer);
            elDiv.append(elFormField);
            elPanel.append(elDiv);
            utils.initColorPicker(elBgColor, rb, { allowEmpty: true });

            if (renderDocElementMainStyle) {
                elDiv = $('<div id="rbro_' + idPrefix + 'alternate_background_color_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_' + idPrefix + 'alternate_background_color">\n                          ' + rb.getLabel('docElementAlternateBackgroundColor') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elAlternateBgColorContainer = $('<div class="rbroColorPickerContainer"></div>');
                var elAlternateBgColor = $('<input id="rbro_' + idPrefix + 'alternate_background_color">').change(function (event) {
                    var val = elAlternateBgColor.val();
                    if (utils.isValidColor(val)) {
                        var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                        var selectedObjects = rb.getSelectedObjects();
                        for (var i = selectedObjects.length - 1; i >= 0; i--) {
                            var obj = selectedObjects[i];
                            cmdGroup.addSelection(obj.getId());
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'alternateBackgroundColor', val, _SetValueCmd2.default.type.color, rb));

                            if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                                if (obj.getValue(fieldPrefix + 'alternateBackgroundColor') !== val) {
                                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                                }
                            } else if (obj instanceof _Style2.default) {
                                obj.addCommandsForChangedProperty('alternateBackgroundColor', val, _SetValueCmd2.default.type.color, cmdGroup);
                            }
                        }
                        if (!cmdGroup.isEmpty()) {
                            rb.executeCommand(cmdGroup);
                        }
                    }
                });
                elAlternateBgColorContainer.append(elAlternateBgColor);
                elFormField.append(elAlternateBgColorContainer);
                elDiv.append(elFormField);
                elPanel.append(elDiv);
                utils.initColorPicker(elAlternateBgColor, rb, { allowEmpty: true });
            }

            elDiv = $('<div id="rbro_' + idPrefix + 'font_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_' + idPrefix + 'font">' + rb.getLabel('styleFont') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit rbroSelectFont"></div>');
            var strFont = '<select id="rbro_' + idPrefix + 'font">';
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(rb.getFonts()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var font = _step.value;

                    strFont += '<option value="' + font.value + '">' + font.name + '</option>';
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

            strFont += '</select>';
            var elFont = $(strFont).change(function (event) {
                var val = elFont.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'font', val, _SetValueCmd2.default.type.select, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'font') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('font', val, _SetValueCmd2.default.type.select, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elFont);
            var strFontSize = '<select id="rbro_' + idPrefix + 'font_size">';
            var _arr = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 44, 48, 54, 60, 66, 72, 80];
            for (var _i8 = 0; _i8 < _arr.length; _i8++) {
                var size = _arr[_i8];
                strFontSize += '<option value="' + size + '">' + size + '</option>';
            }
            strFontSize += '</select>';
            var elFontSize = $(strFontSize).change(function (event) {
                var val = elFontSize.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'fontSize', val, _SetValueCmd2.default.type.select, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'fontSize') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('fontSize', val, _SetValueCmd2.default.type.select, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elFontSize);
            elFormField.append('<span>' + rb.getLabel('styleFontSizeUnit') + '</span>');
            elFormField.append('<div id="rbro_' + idPrefix + 'font_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elPanel.append(elDiv);

            elDiv = $('<div id="rbro_' + idPrefix + 'line_spacing_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_' + idPrefix + 'line_spacing">\n                      ' + rb.getLabel('styleLineSpacing') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elLineSpacing = $('<select id="rbro_' + idPrefix + 'line_spacing">\n                <option value="1">1</option>\n                <option value="1.1">1.1</option>\n                <option value="1.2">1.2</option>\n                <option value="1.3">1.3</option>\n                <option value="1.4">1.4</option>\n                <option value="1.5">1.5</option>\n                <option value="1.6">1.6</option>\n                <option value="1.7">1.7</option>\n                <option value="1.8">1.8</option>\n                <option value="1.9">1.9</option>\n                <option value="2">2</option>\n            </select>').change(function (event) {
                var val = elLineSpacing.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'lineSpacing', val, _SetValueCmd2.default.type.select, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'lineSpacing') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('lineSpacing', val, _SetValueCmd2.default.type.select, cmdGroup);
                    }
                    if (!cmdGroup.isEmpty()) {
                        rb.executeCommand(cmdGroup);
                    }
                }
            });
            elFormField.append(elLineSpacing);
            elDiv.append(elFormField);
            elPanel.append(elDiv);

            var elBorderDiv = $('<div id="rbro_' + idPrefix + 'border_div"></div>');
            elDiv = $('<div id="rbro_' + idPrefix + 'border_row" class="rbroFormRow"></div>');
            elDiv.append('<label>' + rb.getLabel('styleBorder') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elBorderStyle = $('<div id="rbro_' + idPrefix + 'border"></div>');
            var elBorderAll = $('<button id="rbro_' + idPrefix + 'border_all"\n             class="rbroButton rbroActionButton rbroIcon-border-all"\n             type="button" value="' + fieldPrefix + 'borderAll" title="' + rb.getLabel('styleBorderAll') + '"></button>').click(function (event) {
                var val = !elBorderAll.hasClass('rbroButtonActive');
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'borderLeft', val, _SetValueCmd2.default.type.button, rb));
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'borderTop', val, _SetValueCmd2.default.type.button, rb));
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'borderRight', val, _SetValueCmd2.default.type.button, rb));
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'borderBottom', val, _SetValueCmd2.default.type.button, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'borderLeft') !== val || obj.getValue(fieldPrefix + 'borderTop') !== val || obj.getValue(fieldPrefix + 'borderRight') !== val || obj.getValue(fieldPrefix + 'borderBottom') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('borderLeft', val, _SetValueCmd2.default.type.button, cmdGroup);
                        obj.addCommandsForChangedProperty('borderTop', val, _SetValueCmd2.default.type.button, cmdGroup);
                        obj.addCommandsForChangedProperty('borderRight', val, _SetValueCmd2.default.type.button, cmdGroup);
                        obj.addCommandsForChangedProperty('borderBottom', val, _SetValueCmd2.default.type.button, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elBorderStyle.append(elBorderAll);
            var elBorderLeft = $('<button id="rbro_' + idPrefix + 'border_left"\n             class="rbroButton rbroActionButton rbroIcon-border-left"\n             type="button" value="' + fieldPrefix + 'borderLeft" title="' + rb.getLabel('orientationLeft') + '"></button>').click(function (event) {
                var val = !elBorderLeft.hasClass('rbroButtonActive');
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'borderLeft', val, _SetValueCmd2.default.type.button, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'borderLeft') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('borderLeft', val, _SetValueCmd2.default.type.button, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elBorderStyle.append(elBorderLeft);
            var elBorderTop = $('<button id="rbro_' + idPrefix + 'border_top"\n             class="rbroButton rbroActionButton rbroIcon-border-top"\n             type="button" value="' + fieldPrefix + 'borderTop" title="' + rb.getLabel('orientationTop') + '"></button>').click(function (event) {
                var val = !elBorderTop.hasClass('rbroButtonActive');
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'borderTop', val, _SetValueCmd2.default.type.button, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'borderTop') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('borderTop', val, _SetValueCmd2.default.type.button, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elBorderStyle.append(elBorderTop);
            var elBorderRight = $('<button id="rbro_' + idPrefix + 'border_right"\n             class="rbroButton rbroActionButton rbroIcon-border-right"\n             type="button" value="' + fieldPrefix + 'borderRight" title="' + rb.getLabel('orientationRight') + '"></button>').click(function (event) {
                var val = !elBorderRight.hasClass('rbroButtonActive');
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'borderRight', val, _SetValueCmd2.default.type.button, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'borderRight') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('borderRight', val, _SetValueCmd2.default.type.button, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elBorderStyle.append(elBorderRight);
            var elBorderBottom = $('<button id="rbro_' + idPrefix + 'border_bottom"\n             class="rbroButton rbroActionButton rbroIcon-border-bottom"\n             type="button" value="' + fieldPrefix + 'borderBottom"\n             title="' + rb.getLabel('orientationBottom') + '"></button>').click(function (event) {
                var val = !elBorderBottom.hasClass('rbroButtonActive');
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'borderBottom', val, _SetValueCmd2.default.type.button, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'borderBottom') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('borderBottom', val, _SetValueCmd2.default.type.button, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elBorderStyle.append(elBorderBottom);
            elFormField.append(elBorderStyle);
            elDiv.append(elFormField);
            elBorderDiv.append(elDiv);

            if (renderDocElementMainStyle) {
                elDiv = $('<div id="rbro_' + idPrefix + 'table_border_row" class="rbroFormRow"></div>');
                elDiv.append('<label>' + rb.getLabel('styleBorder') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elBorder = $('<div id="rbro_' + idPrefix + 'table_border"></div>');
                var elBorderGrid = $('<button id="rbro_' + idPrefix + 'table_border_grid"\n                 class="rbroButton rbroActionButton rbroIcon-border-table-grid"\n                 type="button" value="' + fieldPrefix + 'grid"\n                 title="' + rb.getLabel('docElementBorderGrid') + '"></button>').click(function (event) {
                    var val = _TableElement2.default.border.grid;
                    var selectedObjects = rb.getSelectedObjects();
                    var valueChanged = false;
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        if (selectedObjects[i].getValue(fieldPrefix + 'border') !== val) {
                            valueChanged = true;
                            break;
                        }
                    }

                    if (valueChanged) {
                        var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                        for (var _i9 = selectedObjects.length - 1; _i9 >= 0; _i9--) {
                            var obj = selectedObjects[_i9];
                            cmdGroup.addSelection(obj.getId());
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'border', val, _SetValueCmd2.default.type.buttonGroup, rb));
                        }
                        if (!cmdGroup.isEmpty()) {
                            rb.executeCommand(cmdGroup);
                        }
                    }
                });
                elBorder.append(elBorderGrid);
                var elBorderFrameRow = $('<button id="rbro_' + idPrefix + 'table_border_frame_row"\n                 class="rbroButton rbroActionButton rbroIcon-border-table-frame-row"\n                 type="button" value="' + fieldPrefix + 'frame_row"\n                 title="' + rb.getLabel('docElementBorderFrameRow') + '"></button>').click(function (event) {
                    var val = _TableElement2.default.border.frameRow;
                    var selectedObjects = rb.getSelectedObjects();
                    var valueChanged = false;
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        if (selectedObjects[i].getValue(fieldPrefix + 'border') !== val) {
                            valueChanged = true;
                            break;
                        }
                    }

                    if (valueChanged) {
                        var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                        for (var _i10 = selectedObjects.length - 1; _i10 >= 0; _i10--) {
                            var obj = selectedObjects[_i10];
                            cmdGroup.addSelection(obj.getId());
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'border', val, _SetValueCmd2.default.type.buttonGroup, rb));
                        }
                        if (!cmdGroup.isEmpty()) {
                            rb.executeCommand(cmdGroup);
                        }
                    }
                });
                elBorder.append(elBorderFrameRow);
                var elBorderFrame = $('<button id="rbro_' + idPrefix + 'table_border_frame"\n                 class="rbroButton rbroActionButton rbroIcon-border-table-frame"\n                 type="button" value="' + fieldPrefix + 'frame"\n                 title="' + rb.getLabel('docElementBorderFrame') + '"></button>').click(function (event) {
                    var val = _TableElement2.default.border.frame;
                    var selectedObjects = rb.getSelectedObjects();
                    var valueChanged = false;
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        if (selectedObjects[i].getValue(fieldPrefix + 'border') !== val) {
                            valueChanged = true;
                            break;
                        }
                    }

                    if (valueChanged) {
                        var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                        for (var _i11 = selectedObjects.length - 1; _i11 >= 0; _i11--) {
                            var obj = selectedObjects[_i11];
                            cmdGroup.addSelection(obj.getId());
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'border', val, _SetValueCmd2.default.type.buttonGroup, rb));
                        }
                        if (!cmdGroup.isEmpty()) {
                            rb.executeCommand(cmdGroup);
                        }
                    }
                });
                elBorder.append(elBorderFrame);
                var elBorderRow = $('<button id="rbro_' + idPrefix + 'table_border_row"\n                 class="rbroButton rbroActionButton rbroIcon-border-table-row"\n                 type="button" value="' + fieldPrefix + 'row"\n                 title="' + rb.getLabel('docElementBorderRow') + '"></button>').click(function (event) {
                    var val = _TableElement2.default.border.row;
                    var selectedObjects = rb.getSelectedObjects();
                    var valueChanged = false;
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        if (selectedObjects[i].getValue(fieldPrefix + 'border') !== val) {
                            valueChanged = true;
                            break;
                        }
                    }

                    if (valueChanged) {
                        var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                        for (var _i12 = selectedObjects.length - 1; _i12 >= 0; _i12--) {
                            var obj = selectedObjects[_i12];
                            cmdGroup.addSelection(obj.getId());
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'border', val, _SetValueCmd2.default.type.buttonGroup, rb));
                        }
                        if (!cmdGroup.isEmpty()) {
                            rb.executeCommand(cmdGroup);
                        }
                    }
                });
                elBorder.append(elBorderRow);
                var elBorderNone = $('<button id="rbro_' + idPrefix + 'table_border_none"\n                 class="rbroButton rbroActionButton rbroIcon-border-table-none"\n                 type="button" value="' + fieldPrefix + 'none"\n                 title="' + rb.getLabel('docElementBorderNone') + '"></button>').click(function (event) {
                    var val = _TableElement2.default.border.none;
                    var selectedObjects = rb.getSelectedObjects();
                    var valueChanged = false;
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        if (selectedObjects[i].getValue(fieldPrefix + 'border') !== val) {
                            valueChanged = true;
                            break;
                        }
                    }

                    if (valueChanged) {
                        var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                        for (var _i13 = selectedObjects.length - 1; _i13 >= 0; _i13--) {
                            var obj = selectedObjects[_i13];
                            cmdGroup.addSelection(obj.getId());
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'border', val, _SetValueCmd2.default.type.buttonGroup, rb));
                        }
                        if (!cmdGroup.isEmpty()) {
                            rb.executeCommand(cmdGroup);
                        }
                    }
                });
                elBorder.append(elBorderNone);
                elFormField.append(elBorder);
                elDiv.append(elFormField);
                elBorderDiv.append(elDiv);
            }

            elDiv = $('<div id="rbro_' + idPrefix + 'border_color_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_' + idPrefix + 'border_color">\n                      ' + rb.getLabel('styleBorderColor') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elBorderColorContainer = $('<div class="rbroColorPickerContainer"></div>');
            var elBorderColor = $('<input id="rbro_' + idPrefix + 'border_color">').change(function (event) {
                var val = elBorderColor.val();
                if (utils.isValidColor(val)) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                    var selectedObjects = rb.getSelectedObjects();
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        var obj = selectedObjects[i];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'borderColor', val, _SetValueCmd2.default.type.color, rb));

                        if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                            if (obj.getValue(fieldPrefix + 'borderColor') !== val) {
                                cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                            }
                        } else if (obj instanceof _Style2.default) {
                            obj.addCommandsForChangedProperty('borderColor', val, _SetValueCmd2.default.type.color, cmdGroup);
                        }
                    }
                    if (!cmdGroup.isEmpty()) {
                        rb.executeCommand(cmdGroup);
                    }
                }
            });
            elBorderColorContainer.append(elBorderColor);
            elFormField.append(elBorderColorContainer);
            elDiv.append(elFormField);
            elBorderDiv.append(elDiv);
            utils.initColorPicker(elBorderColor, rb);

            elDiv = $('<div id="rbro_' + idPrefix + 'border_width_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_' + idPrefix + 'border_width">' + rb.getLabel('styleBorderWidth') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elBorderWidth = $('<input id="rbro_' + idPrefix + 'border_width" type="number" step="0.5">').on('input', function (event) {
                var val = elBorderWidth.val();
                if (val !== '') {
                    val = utils.checkInputDecimal(val, 0.5, 99);
                }
                if (val !== elBorderWidth.val()) {
                    elBorderWidth.val(val);
                }
                var selectedObjects = rb.getSelectedObjects();
                var valueChanged = false;
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    if (selectedObjects[i].getValue(fieldPrefix + 'borderWidth') !== val) {
                        valueChanged = true;
                        break;
                    }
                }

                if (valueChanged) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                    for (var _i14 = selectedObjects.length - 1; _i14 >= 0; _i14--) {
                        var obj = selectedObjects[_i14];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'borderWidth', val, _SetValueCmd2.default.type.text, rb));

                        if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                            if (obj.getValue(fieldPrefix + 'borderWidth') !== val) {
                                cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                            }
                        } else if (obj instanceof _Style2.default) {
                            obj.addCommandsForChangedProperty('borderWidth', val, _SetValueCmd2.default.type.text, cmdGroup);
                        }
                    }
                    if (!cmdGroup.isEmpty()) {
                        rb.executeCommand(cmdGroup);
                    }
                }
            });
            elFormField.append(elBorderWidth);
            elDiv.append(elFormField);
            elBorderDiv.append(elDiv);
            elPanel.append(elBorderDiv);

            elDiv = $('<div id="rbro_' + idPrefix + 'padding_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_' + idPrefix + 'padding">' + rb.getLabel('stylePadding') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSmallInput"></div>');

            var elPaddingTopDiv = $('<div class="rbroColumnCenter"></div>');
            var elPaddingTop = $('<input id="rbro_' + idPrefix + 'padding_top"\n             placeholder="' + rb.getLabel('orientationTop') + '" type="number">').on('input', function (event) {
                var val = elPaddingTop.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'paddingTop', val, _SetValueCmd2.default.type.text, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'paddingTop') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('paddingTop', val, _SetValueCmd2.default.type.text, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elPaddingTopDiv.append(elPaddingTop);
            elFormField.append(elPaddingTopDiv);

            var elDiv2 = $('<div class="rbroSplit"></div>');
            var elPaddingLeft = $('<input id="rbro_' + idPrefix + 'padding_left"\n             placeholder="' + rb.getLabel('orientationLeft') + '" type="number">').on('input', function (event) {
                var val = elPaddingLeft.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'paddingLeft', val, _SetValueCmd2.default.type.text, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'paddingLeft') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('paddingLeft', val, _SetValueCmd2.default.type.text, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elDiv2.append(elPaddingLeft);
            var elPaddingRight = $('<input id="rbro_' + idPrefix + 'padding_right"\n             placeholder="' + rb.getLabel('orientationRight') + '" type="number">').on('input', function (event) {
                var val = elPaddingRight.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'paddingRight', val, _SetValueCmd2.default.type.text, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'paddingRight') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('paddingRight', val, _SetValueCmd2.default.type.text, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elDiv2.append(elPaddingRight);
            elFormField.append(elDiv2);

            var elPaddingBottomDiv = $('<div class="rbroColumnCenter"></div>');
            var elPaddingBottom = $('<input id="rbro_' + idPrefix + 'padding_bottom"\n             placeholder="' + rb.getLabel('orientationBottom') + '" type="number">').on('input', function (event) {
                var val = elPaddingBottom.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', rb);
                var selectedObjects = rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'paddingBottom', val, _SetValueCmd2.default.type.text, rb));

                    if (obj instanceof _DocElement2.default && obj.getValue(fieldPrefix + 'styleId') !== '') {
                        if (obj.getValue(fieldPrefix + 'paddingBottom') !== val) {
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), fieldPrefix + 'styleId', '', _SetValueCmd2.default.type.select, rb));
                        }
                    } else if (obj instanceof _Style2.default) {
                        obj.addCommandsForChangedProperty('paddingBottom', val, _SetValueCmd2.default.type.text, cmdGroup);
                    }
                }
                if (!cmdGroup.isEmpty()) {
                    rb.executeCommand(cmdGroup);
                }
            });
            elPaddingBottomDiv.append(elPaddingBottom);
            elFormField.append(elPaddingBottomDiv);
            elDiv.append(elFormField);
            elPanel.append(elDiv);
        }
    }, {
        key: 'destroyStyle',
        value: function destroyStyle(idPrefix) {
            $('#rbro_' + idPrefix + 'text_color').spectrum('destroy');
            $('#rbro_' + idPrefix + 'background_color').spectrum('destroy');
            $('#rbro_' + idPrefix + 'alternate_background_color').spectrum('destroy');
            $('#rbro_' + idPrefix + 'border_color').spectrum('destroy');
        }
    }]);
    return StylePanel;
}(_PanelBase3.default);

exports.default = StylePanel;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(115);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(29);
var document = __webpack_require__(17).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(16) && !__webpack_require__(27)(function () {
  return Object.defineProperty(__webpack_require__(67)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(48);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(34);
var $export = __webpack_require__(21);
var redefine = __webpack_require__(75);
var hide = __webpack_require__(28);
var Iterators = __webpack_require__(33);
var $iterCreate = __webpack_require__(122);
var setToStringTag = __webpack_require__(54);
var getPrototypeOf = __webpack_require__(72);
var ITERATOR = __webpack_require__(18)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(73);
var hiddenKeys = __webpack_require__(50).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(22);
var toObject = __webpack_require__(38);
var IE_PROTO = __webpack_require__(55)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(22);
var toIObject = __webpack_require__(24);
var arrayIndexOf = __webpack_require__(117)(false);
var IE_PROTO = __webpack_require__(55)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(21);
var core = __webpack_require__(10);
var fails = __webpack_require__(27);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(129)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(70)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
var global = __webpack_require__(17);
var hide = __webpack_require__(28);
var Iterators = __webpack_require__(33);
var TO_STRING_TAG = __webpack_require__(18)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
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
    var rv = null;

    this.each(function (i, _element) {
        var element = $(_element);
        var reportBro = element.data('reportBro');
        var currentResult;

        // method call
        if (typeof options === 'string') {
            if (reportBro && $.isFunction(reportBro[options])) {
                currentResult = reportBro[options].apply(reportBro, args);
                if (i === 0) {
                    rv = currentResult;
                }
                if (options === 'destroy') {
                    element.removeData('reportBro');
                }
            }
        } else {
            // new ReportBro instance
            if (!reportBro) {
                reportBro = new _ReportBro2.default(element, options);
                element.data('reportBro', reportBro);
                reportBro.render();
                reportBro.setup();
            }
            // return ReportBro instance
            rv = reportBro;
        }
    });

    return rv;
}; //
// Copyright (C) 2018 jobsta
//
// This file is part of ReportBro, a library to generate PDF and Excel reports.
// Demos can be found at https://www.reportbro.com
//
// Dual licensed under AGPLv3 and ReportBro commercial license:
// https://www.reportbro.com/license
//
// You should have received a copy of the GNU Affero General Public License
// along with this program. If not, see https://www.gnu.org/licenses/
//
// Details for ReportBro commercial license can be found at
// https://www.reportbro.com/license/agreement
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

var _assign = __webpack_require__(98);

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Document = __webpack_require__(25);

var _Document2 = _interopRequireDefault(_Document);

var _PopupWindow = __webpack_require__(40);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

var _AddDeleteDocElementCmd = __webpack_require__(19);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _AddDeleteParameterCmd = __webpack_require__(41);

var _AddDeleteParameterCmd2 = _interopRequireDefault(_AddDeleteParameterCmd);

var _AddDeleteStyleCmd = __webpack_require__(42);

var _AddDeleteStyleCmd2 = _interopRequireDefault(_AddDeleteStyleCmd);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _CommandGroupCmd = __webpack_require__(15);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Band = __webpack_require__(20);

var _Band2 = _interopRequireDefault(_Band);

var _Container = __webpack_require__(30);

var _Container2 = _interopRequireDefault(_Container);

var _DocumentProperties = __webpack_require__(43);

var _DocumentProperties2 = _interopRequireDefault(_DocumentProperties);

var _Parameter = __webpack_require__(13);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _DocElement = __webpack_require__(5);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _FrameElement = __webpack_require__(62);

var _FrameElement2 = _interopRequireDefault(_FrameElement);

var _PageBreakElement = __webpack_require__(63);

var _PageBreakElement2 = _interopRequireDefault(_PageBreakElement);

var _SectionElement = __webpack_require__(44);

var _SectionElement2 = _interopRequireDefault(_SectionElement);

var _TableElement = __webpack_require__(45);

var _TableElement2 = _interopRequireDefault(_TableElement);

var _TableTextElement = __webpack_require__(46);

var _TableTextElement2 = _interopRequireDefault(_TableTextElement);

var _locales = __webpack_require__(91);

var _locales2 = _interopRequireDefault(_locales);

var _DocElementPanel = __webpack_require__(94);

var _DocElementPanel2 = _interopRequireDefault(_DocElementPanel);

var _DocumentPropertiesPanel = __webpack_require__(95);

var _DocumentPropertiesPanel2 = _interopRequireDefault(_DocumentPropertiesPanel);

var _EmptyDetailPanel = __webpack_require__(96);

var _EmptyDetailPanel2 = _interopRequireDefault(_EmptyDetailPanel);

var _ParameterPanel = __webpack_require__(97);

var _ParameterPanel2 = _interopRequireDefault(_ParameterPanel);

var _StylePanel = __webpack_require__(65);

var _StylePanel2 = _interopRequireDefault(_StylePanel);

var _MainPanel = __webpack_require__(92);

var _MainPanel2 = _interopRequireDefault(_MainPanel);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _MenuPanel = __webpack_require__(93);

var _MenuPanel2 = _interopRequireDefault(_MenuPanel);

var _utils = __webpack_require__(6);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
        this.locale = _locales2.default[properties && properties.localeKey || 'en_us'];

        this.properties = {
            additionalFonts: [],
            adminMode: true,
            cmdExecutedCallback: null,
            defaultFont: _Style2.default.font.helvetica,
            enableSpreadsheet: true,
            fonts: [{ name: 'Courier', value: _Style2.default.font.courier }, { name: 'Helvetica', value: _Style2.default.font.helvetica }, { name: 'Times New Roman', value: _Style2.default.font.times }],
            highlightUnusedParameters: false,
            localStorageReportKey: null,
            menuShowButtonLabels: false,
            menuShowDebug: false,
            menuSidebar: false,
            saveCallback: null,
            selectCallback: null,
            showGrid: true,
            patternAdditionalDates: [],
            patternAdditionalNumbers: [],
            patternCurrencySymbol: '$',
            patternDates: [{ name: 'd.M.yyyy', description: this.locale['patternDate1'] }, { name: 'd.M.yy, H:mm', description: this.locale['patternDate2'] }, { name: 'd/MMM/yyyy', description: this.locale['patternDate3'] }, { name: 'MM/dd/yyyy', description: this.locale['patternDate4'] }],
            patternLocale: 'en',
            patternNumbers: [{ name: '#,##0', description: this.locale['patternNumber1'] }, { name: '0.000', description: this.locale['patternNumber2'] }, { name: '0.00##', description: this.locale['patternNumber3'] }, { name: '#,##0.00', description: this.locale['patternNumber4'] }, { name: '$ #,##0.00', description: this.locale['patternNumber5'] }],
            reportServerTimeout: 20000,
            reportServerUrl: 'https://www.reportbro.com/report/run',
            reportServerUrlCrossDomain: false,
            theme: ''
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
        // make sure defaultFont is available, otherwise use first entry of font list
        var defaultFontExists = false;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = (0, _getIterator3.default)(this.properties.fonts), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var font = _step.value;

                if (this.properties.defaultFont === font.value) {
                    defaultFontExists = true;
                    break;
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

        if (!defaultFontExists) {
            if (this.properties.fonts.length > 0) {
                this.properties.defaultFont = this.properties.fonts[0].value;
            } else {
                this.properties.defaultFont = '';
            }
        }

        if (this.properties.patternAdditionalDates.length > 0) {
            this.properties.patternDates = this.properties.patternDates.concat(this.properties.patternAdditionalDates);
        }
        if (this.properties.patternAdditionalNumbers.length > 0) {
            this.properties.patternNumbers = this.properties.patternNumbers.concat(this.properties.patternAdditionalNumbers);
        }

        this.document = new _Document2.default(element, this.properties.showGrid, this);
        this.popupWindow = new _PopupWindow2.default(element, this);
        this.docElements = [];
        this.headerBand = new _Band2.default(_Band2.default.bandType.header, false, '', '', this);
        this.contentBand = new _Band2.default(_Band2.default.bandType.content, false, '', '', this);
        this.footerBand = new _Band2.default(_Band2.default.bandType.footer, false, '', '', this);
        this.parameterContainer = new _Container2.default('0_parameters', this.getLabel('parameters'), this);
        this.styleContainer = new _Container2.default('0_styles', this.getLabel('styles'), this);
        this.documentProperties = new _DocumentProperties2.default(this);
        this.clipboardElements = [];

        this.mainPanel = new _MainPanel2.default(element, this.headerBand, this.contentBand, this.footerBand, this.parameterContainer, this.styleContainer, this);
        this.menuPanel = new _MenuPanel2.default(element, this);
        this.activeDetailPanel = 'none';
        this.detailPanels = {
            'none': new _EmptyDetailPanel2.default(element, this),
            'docElement': new _DocElementPanel2.default(element, this),
            'parameter': new _ParameterPanel2.default(element, this),
            'style': new _StylePanel2.default(element, this),
            'documentProperties': new _DocumentPropertiesPanel2.default(element, this)
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
                                var serializedObj = void 0;
                                var i = void 0;
                                var _iteratorNormalCompletion2 = true;
                                var _didIteratorError2 = false;
                                var _iteratorError2 = undefined;

                                try {
                                    for (var _iterator2 = (0, _getIterator3.default)(_this.selections), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                        var selectionId = _step2.value;

                                        var obj = _this.getDataObject(selectionId);
                                        if (obj instanceof _DocElement2.default && !(obj instanceof _TableTextElement2.default) || obj instanceof _Parameter2.default && !obj.showOnlyNameType || obj instanceof _Style2.default) {
                                            if (!cleared) {
                                                _this.clipboardElements = [];
                                                cleared = true;
                                            }
                                            if (!(obj.getId() in idMap)) {
                                                idMap[obj.getId()] = true;
                                                serializedObj = obj.toJS();
                                                _this.clipboardElements.push(serializedObj);
                                                if (obj instanceof _DocElement2.default) {
                                                    serializedObj.baseClass = 'DocElement';
                                                    if (obj instanceof _FrameElement2.default) {
                                                        var nestedElements = [];
                                                        obj.appendContainerChildren(nestedElements);
                                                        var _iteratorNormalCompletion3 = true;
                                                        var _didIteratorError3 = false;
                                                        var _iteratorError3 = undefined;

                                                        try {
                                                            for (var _iterator3 = (0, _getIterator3.default)(nestedElements), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                                                var nestedElement = _step3.value;

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
                                                                serializedObj = nestedElement.toJS();
                                                                serializedObj.baseClass = 'DocElement';
                                                                _this.clipboardElements.push(serializedObj);
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
                                                } else if (obj instanceof _Parameter2.default) {
                                                    serializedObj.baseClass = 'Parameter';
                                                } else if (obj instanceof _Style2.default) {
                                                    serializedObj.baseClass = 'Style';
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

                                event.preventDefault();
                            }
                            break;
                        }
                    case 86:
                        {
                            // Ctrl + V: paste
                            if (!(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) {
                                var cmd = void 0;
                                var cmdGroup = new _CommandGroupCmd2.default('Paste from clipboard', _this);
                                var mappedContainerIds = {};
                                var pastedElements = [];
                                var _iteratorNormalCompletion4 = true;
                                var _didIteratorError4 = false;
                                var _iteratorError4 = undefined;

                                try {
                                    for (var _iterator4 = (0, _getIterator3.default)(_this.clipboardElements), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                        var clipboardElement = _step4.value;

                                        // create new pasted element to change properties (id, name, etc.) and
                                        // leave clipboard elements unchanged
                                        var _pastedElement = (0, _assign2.default)({}, clipboardElement);
                                        _pastedElement.id = _this.getUniqueId();
                                        pastedElements.push(_pastedElement);

                                        if (_pastedElement.baseClass === 'DocElement') {
                                            if (_pastedElement.linkedContainerId) {
                                                var linkedContainerId = _this.getUniqueId();
                                                mappedContainerIds[_pastedElement.linkedContainerId] = linkedContainerId;
                                                _pastedElement.linkedContainerId = linkedContainerId;
                                            }
                                            if (_pastedElement.elementType === _DocElement2.default.type.table) {
                                                _TableElement2.default.removeIds(_pastedElement);
                                            }
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

                                var _iteratorNormalCompletion5 = true;
                                var _didIteratorError5 = false;
                                var _iteratorError5 = undefined;

                                try {
                                    for (var _iterator5 = (0, _getIterator3.default)(pastedElements), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                        var _pastedElement2 = _step5.value;

                                        if (_pastedElement2.baseClass === 'DocElement') {
                                            // map id of container in case element is inside other pasted container (frame/band)
                                            if (_pastedElement2.containerId in mappedContainerIds) {
                                                _pastedElement2.containerId = mappedContainerIds[_pastedElement2.containerId];
                                                // since element is inside pasted container we can keep x/y coordinates
                                            } else {
                                                var pasteToY = 0;
                                                var container = _this.getDataObject(_pastedElement2.containerId);
                                                if (container !== null) {
                                                    // determine new y-coord so pasted element is in
                                                    // visible area of scrollable document
                                                    var containerOffset = container.getOffset();
                                                    var containerSize = container.getContentSize();
                                                    var contentScrollY = _this.getDocument().getContentScrollPosY();
                                                    if (contentScrollY > containerOffset.y && contentScrollY + _pastedElement2.height < containerOffset.y + containerSize.height) {
                                                        pasteToY = contentScrollY - containerOffset.y;
                                                    }
                                                }
                                                _pastedElement2.x = 0;
                                                _pastedElement2.y = pasteToY;
                                            }
                                            cmd = new _AddDeleteDocElementCmd2.default(true, _pastedElement2.elementType, _pastedElement2, _pastedElement2.id, _pastedElement2.containerId, -1, _this);
                                            cmdGroup.addCommand(cmd);
                                        } else if (_pastedElement2.baseClass === 'Parameter' || _pastedElement2.baseClass === 'Style') {
                                            // try to find unique name for pasted element by using a suffix
                                            var copySuffix = _this.getLabel('nameCopySuffix');
                                            var pastedElementName = _pastedElement2.name + (' (' + copySuffix + ')');
                                            var panelItem = _pastedElement2.baseClass === 'Parameter' ? _this.parameterContainer.getPanelItem() : _this.styleContainer.getPanelItem();
                                            if (panelItem !== null) {
                                                if (panelItem.getChildByName(pastedElementName)) {
                                                    for (var paramNr = 2; paramNr <= 99; paramNr++) {
                                                        pastedElementName = _pastedElement2.name + (' (' + copySuffix + ' ' + paramNr + ')');
                                                        if (panelItem.getChildByName(pastedElementName) === null) {
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                            _pastedElement2.name = pastedElementName;

                                            if (_pastedElement2.baseClass === 'Parameter') {
                                                _Parameter2.default.removeIds(_pastedElement2);
                                                cmd = new _AddDeleteParameterCmd2.default(true, _pastedElement2, _pastedElement2.id, _this.parameterContainer.getId(), -1, _this);
                                                cmdGroup.addCommand(cmd);
                                            } else if (_pastedElement2.baseClass === 'Style') {
                                                cmd = new _AddDeleteStyleCmd2.default(true, _pastedElement2, _pastedElement2.id, _this.styleContainer.getId(), -1, _this);
                                                cmdGroup.addCommand(cmd);
                                            }
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
                                    var clearSelection = true;
                                    var _iteratorNormalCompletion6 = true;
                                    var _didIteratorError6 = false;
                                    var _iteratorError6 = undefined;

                                    try {
                                        for (var _iterator6 = (0, _getIterator3.default)(pastedElements), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                            var pastedElement = _step6.value;

                                            _this.selectObject(pastedElement.id, clearSelection);
                                            clearSelection = false;
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
                                var _cmdGroup = new _CommandGroupCmd2.default('Delete', _this);
                                var _iteratorNormalCompletion7 = true;
                                var _didIteratorError7 = false;
                                var _iteratorError7 = undefined;

                                try {
                                    for (var _iterator7 = (0, _getIterator3.default)(_this.selections), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                        var _selectionId = _step7.value;

                                        var _obj = _this.getDataObject(_selectionId);
                                        if (_obj instanceof _DocElement2.default) {
                                            _obj.addCommandsForDelete(_cmdGroup);
                                        }
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

                                if (!_cmdGroup.isEmpty()) {
                                    _this.executeCommand(_cmdGroup);
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
                                var _cmdGroup2 = new _CommandGroupCmd2.default('Move element', _this);
                                var field = event.which === 37 || event.which === 39 ? 'x' : 'y';
                                var bandWidth = _this.getDocumentProperties().getContentSize().width;
                                var _iteratorNormalCompletion8 = true;
                                var _didIteratorError8 = false;
                                var _iteratorError8 = undefined;

                                try {
                                    for (var _iterator8 = (0, _getIterator3.default)(_this.selections), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                        var _selectionId2 = _step8.value;

                                        var _obj2 = _this.getDataObject(_selectionId2);
                                        if (_obj2 instanceof _DocElement2.default) {
                                            if (_obj2.hasProperty(field)) {
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
                                                    var _containerSize = _obj2.getContainerContentSize();
                                                    if (_obj2.getValue('xVal') + _obj2.getValue('widthVal') < _containerSize.width) {
                                                        val = _obj2.getValue('xVal') + 1;
                                                    }
                                                } else if (event.which === 40) {
                                                    var _containerSize2 = _obj2.getContainerContentSize();
                                                    if (_obj2.getValue('yVal') + _obj2.getValue('heightVal') < _containerSize2.height) {
                                                        val = _obj2.getValue('yVal') + 1;
                                                    }
                                                }
                                                if (val !== null) {
                                                    var _cmd = new _SetValueCmd2.default(_selectionId2, field, val, _SetValueCmd2.default.type.text, _this);
                                                    _cmdGroup2.addCommand(_cmd);
                                                }
                                            }
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

                                if (!_cmdGroup2.isEmpty()) {
                                    _this.executeCommand(_cmdGroup2);
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


    (0, _createClass3.default)(ReportBro, [{
        key: 'addDefaultParameters',
        value: function addDefaultParameters() {
            var _arr = [{ name: 'page_count', type: _Parameter2.default.type.number, eval: false, editable: false, showOnlyNameType: true }, { name: 'page_number', type: _Parameter2.default.type.number, eval: false, editable: false, showOnlyNameType: true }];

            for (var _i = 0; _i < _arr.length; _i++) {
                var parameterData = _arr[_i];
                var parameter = new _Parameter2.default(this.getUniqueId(), parameterData, this);
                var parentPanel = this.mainPanel.getParametersItem();
                var panelItem = new _MainPanelItem2.default('parameter', parentPanel, parameter, { hasChildren: false, showAdd: false, showDelete: false, draggable: false }, this);
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
            if (this.getProperty('theme') === 'classic') {
                $('body').addClass('rbroClassicTheme');
            } else {
                $('body').addClass('rbroDefaultTheme');
            }
            this.element.append('<div class="rbroLogo"></div>');
            this.element.append('<div class="rbroMenuPanel" id="rbro_menu_panel"></div>');
            this.element.append('<div class="rbroContainer">\n                <div class="rbroMainPanel" id="rbro_main_panel"><ul id="rbro_main_panel_list"></ul></div>\n                <div class="rbroMainPanelSizer" id="rbro_main_panel_sizer"></div>\n                <div class="rbroDetailPanel" id="rbro_detail_panel"></div>\n                <div class="rbroDocumentPanel" id="rbro_document_panel"></div>\n            </div>');
            this.mainPanel.render();
            this.menuPanel.render();
            for (var panelName in this.detailPanels) {
                this.detailPanels[panelName].render();
            }
            this.detailPanels[this.activeDetailPanel].show();
            this.document.render();
            this.popupWindow.render();
            this.updateMenuButtons();

            $(document).mouseup(function (event) {
                _this2.mainPanel.mouseUp(event);
                _this2.document.mouseUp(event);
                _this2.popupWindow.hide();
            });

            $(window).resize(function (event) {
                _this2.document.windowResized();
            });

            this.element.on('dragstart', function (event) {
                // disable dragging per default, otherwise e.g. a text selection can be dragged in Chrome
                event.preventDefault();
            }).mousemove(function (event) {
                if (!_this2.mainPanel.processMouseMove(event)) {
                    _this2.document.processMouseMove(event);
                }
            });
        }

        /**
         * Returns total width of element containing ReportBro Designer.
         * @returns {Number}
         */

    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this.element.width();
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
    }, {
        key: 'getMainPanel',
        value: function getMainPanel() {
            return this.mainPanel;
        }
    }, {
        key: 'getMenuPanel',
        value: function getMenuPanel() {
            return this.menuPanel;
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
                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = undefined;

                try {
                    for (var _iterator9 = (0, _getIterator3.default)(this.properties.patternNumbers), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                        var pattern = _step9.value;

                        patterns.push(pattern);
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
            if (this.properties.patternDates.length > 0) {
                patterns.push({ separator: true, name: this.getLabel('patternSeparatorDates') });
                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                    for (var _iterator10 = (0, _getIterator3.default)(this.properties.patternDates), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                        var _pattern = _step10.value;

                        patterns.push(_pattern);
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
            return patterns;
        }

        /**
         * Returns a list of parameter items.
         * Used for parameter popup window.
         * @param {DocElement|Parameter} obj - adds all parameters available for
         * this object (which is either a doc element or a parameter).
         * For doc elements the parameters from the data source
         * are included (e.g. array field parameters of a table data source).
         * @param {String[]} allowedTypes - specify allowed parameter types which will be added to the
         * parameters list. If not set all parameter types are allowed.
         * @returns {Object[]} Each item contains name (String), optional description (String) and
         * optional separator (Boolean).
         */

    }, {
        key: 'getParameterItems',
        value: function getParameterItems(obj, allowedTypes) {
            var parameters = [];
            var parameterItems = this.getMainPanel().getParametersItem().getChildren();
            // dataSourceIndex is only needed for separator id which is used to hide the separator
            // when there are no data source parameters available (due to search filter)
            var dataSourceIndex = 0;
            var dataSources = [];
            if (obj instanceof _DocElement2.default) {
                obj.getAllDataSources(dataSources, null);
                var _iteratorNormalCompletion11 = true;
                var _didIteratorError11 = false;
                var _iteratorError11 = undefined;

                try {
                    for (var _iterator11 = (0, _getIterator3.default)(dataSources), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                        var dataSource = _step11.value;

                        if (dataSource.parameters.length > 0) {
                            parameters.push({
                                separator: true, separatorClass: 'rbroParameterDataSourceGroup', id: 'ds' + dataSourceIndex,
                                name: this.getLabel('parametersDataSource')
                            });
                            dataSourceIndex++;
                            var _iteratorNormalCompletion12 = true;
                            var _didIteratorError12 = false;
                            var _iteratorError12 = undefined;

                            try {
                                for (var _iterator12 = (0, _getIterator3.default)(dataSource.parameters), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                                    var dataSourceParameter = _step12.value;

                                    dataSourceParameter.appendParameterItems(parameters, allowedTypes);
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
            } else if (obj instanceof _Parameter2.default) {
                obj.appendFieldParameterItems(parameters, allowedTypes, true);
            }

            parameters.push({ separator: true, name: this.getLabel('parameters') });
            // add all parameters of collections at end of list with a header containing the collection name
            var mapParameters = [];
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
                for (var _iterator13 = (0, _getIterator3.default)(parameterItems), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                    var parameterItem = _step13.value;

                    var parameter = parameterItem.getData();
                    if (parameter.getValue('type') === _Parameter2.default.type.map) {
                        parameter.appendParameterItems(mapParameters, allowedTypes);
                    } else {
                        parameter.appendParameterItems(parameters, allowedTypes);
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

            return parameters.concat(mapParameters);
        }

        /**
         * Returns a list of all array field parameter items.
         * Used for parameter popup window.
         * @param {String[]} allowedTypes - specify allowed parameter types which will
         * be added to the parameters list. If not set all parameter types are allowed.
         * @returns {Object[]} Each item contains name (String), optional description (String) and
         * optional separator (Boolean).
         */

    }, {
        key: 'getArrayFieldParameterItems',
        value: function getArrayFieldParameterItems(allowedTypes) {
            var parameters = [];
            var parameterItems = this.getMainPanel().getParametersItem().getChildren();
            parameters.push({ separator: true, name: this.getLabel('parameters') });
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
                for (var _iterator14 = (0, _getIterator3.default)(parameterItems), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                    var parameterItem = _step14.value;

                    var parameter = parameterItem.getData();
                    if (parameter.getValue('type') === _Parameter2.default.type.array) {
                        parameter.appendFieldParameterItems(parameters, allowedTypes, false);
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

            return parameters;
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
            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
                for (var _iterator15 = (0, _getIterator3.default)(children), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                    var child = _step15.value;

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
                        var containers = [];
                        if (docElement instanceof _SectionElement2.default) {
                            containers = docElement.getLinkedContainers();
                        } else {
                            var linkedContainer = docElement.getLinkedContainer();
                            if (linkedContainer !== null) {
                                containers.push(linkedContainer);
                            }
                        }
                        // add children of doc elements which represent containers, e.g. frames or section bands
                        var _iteratorNormalCompletion16 = true;
                        var _didIteratorError16 = false;
                        var _iteratorError16 = undefined;

                        try {
                            for (var _iterator16 = (0, _getIterator3.default)(containers), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                                var _container = _step16.value;

                                this.appendContainerDocElements(_container, asObjects, docElements);
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
                    }
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
        value: function setDetailPanel(panelName) {
            if (panelName !== this.activeDetailPanel) {
                this.detailPanels[this.activeDetailPanel].hide();
                this.activeDetailPanel = panelName;
                this.detailPanels[panelName].show();
            }
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
            this.detailPanels[this.activeDetailPanel].notifyEvent(obj, operation, field);
        }
    }, {
        key: 'addParameter',
        value: function addParameter(parameter) {
            this.addDataObject(parameter);
        }
    }, {
        key: 'addStyle',
        value: function addStyle(style) {
            this.addDataObject(style);
            this.notifyEvent(style, _Command2.default.operation.add);
        }
    }, {
        key: 'getStyles',
        value: function getStyles() {
            var styles = [];
            var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
                for (var _iterator17 = (0, _getIterator3.default)(this.getMainPanel().getStylesItem().getChildren()), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                    var styleItem = _step17.value;

                    styles.push(styleItem.getData());
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

            return styles;
        }
    }, {
        key: 'getParameters',
        value: function getParameters() {
            var parameters = [];
            var _iteratorNormalCompletion18 = true;
            var _didIteratorError18 = false;
            var _iteratorError18 = undefined;

            try {
                for (var _iterator18 = (0, _getIterator3.default)(this.getMainPanel().getParametersItem().getChildren()), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                    var parameterItem = _step18.value;

                    parameters.push(parameterItem.getData());
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

            return parameters;
        }
    }, {
        key: 'addDocElement',
        value: function addDocElement(element) {
            this.docElements.push(element);
            this.addDataObject(element);
        }
    }, {
        key: 'deleteDocElements',
        value: function deleteDocElements() {
            for (var i = 0; i < this.docElements.length; i++) {
                this.deleteDataObject(this.docElements[i]);
            }
            this.docElements = [];
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
            if (!this.selectionSinceLastCommand && this.commandStack.length > 0) {
                // if previous command can be replaced by current command
                // we can discard the previous command and only keep the latest update
                var prevCmd = this.commandStack[this.commandStack.length - 1];
                if (cmd.allowReplace(prevCmd)) {
                    cmd.replace(prevCmd);
                    this.commandStack = this.commandStack.slice(0, this.commandStack.length - 1);
                    this.lastCommandIndex--;
                }
            }
            this.commandStack.push(cmd);
            this.lastCommandIndex++;
            this.modified = true;
            this.selectionSinceLastCommand = false;
            this.updateMenuButtons();
            if (this.properties.cmdExecutedCallback) {
                this.properties.cmdExecutedCallback(cmd, true);
            }
        }
    }, {
        key: 'undoCommand',
        value: function undoCommand() {
            if (this.lastCommandIndex >= 0) {
                var cmd = this.commandStack[this.lastCommandIndex];
                cmd.undo();
                this.lastCommandIndex--;
                this.modified = this.lastCommandIndex >= 0;
                this.updateMenuButtons();
                if (this.properties.cmdExecutedCallback) {
                    this.properties.cmdExecutedCallback(cmd, false);
                }
            }
        }
    }, {
        key: 'redoCommand',
        value: function redoCommand() {
            if (this.lastCommandIndex < this.commandStack.length - 1) {
                this.lastCommandIndex++;
                var cmd = this.commandStack[this.lastCommandIndex];
                cmd.do();
                this.modified = true;
                this.updateMenuButtons();
                if (this.properties.cmdExecutedCallback) {
                    this.properties.cmdExecutedCallback(cmd, false);
                }
            }
        }
    }, {
        key: 'updateMenuButtons',
        value: function updateMenuButtons() {
            $('#rbro_menu_save').prop('disabled', !this.modified);
            $('#rbro_menu_undo').prop('disabled', this.lastCommandIndex < 0);
            $('#rbro_menu_redo').prop('disabled', this.lastCommandIndex >= this.commandStack.length - 1);
        }
    }, {
        key: 'updateMenuActionButtons',
        value: function updateMenuActionButtons() {
            var elementCount = 0;
            var previousContainerOffset = { x: 0, y: 0 };
            var elementSameContainerOffsetX = true;
            var elementSameContainerOffsetY = true;
            var _iteratorNormalCompletion19 = true;
            var _didIteratorError19 = false;
            var _iteratorError19 = undefined;

            try {
                for (var _iterator19 = (0, _getIterator3.default)(this.selections), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                    var selectionId = _step19.value;

                    var _obj3 = this.getDataObject(selectionId);
                    if (_obj3 instanceof _DocElement2.default && _obj3.hasProperty('x')) {
                        elementCount++;
                        var container = _obj3.getContainer();
                        var offset = container.getOffset();
                        if (elementCount === 1) {
                            previousContainerOffset = offset;
                        } else {
                            if (offset.x !== previousContainerOffset.x) {
                                elementSameContainerOffsetX = false;
                            }
                            if (offset.y !== previousContainerOffset.y) {
                                elementSameContainerOffsetY = false;
                            }
                        }
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

            if (elementCount > 1) {
                // allow alignment of elements if their parent container has the same x/y offset
                if (elementSameContainerOffsetX) {
                    $('#rbro_menu_align').show();
                } else {
                    $('#rbro_menu_align').hide();
                }
                if (elementSameContainerOffsetY) {
                    $('#rbro_menu_valign').show();
                } else {
                    $('#rbro_menu_valign').hide();
                }
                $('#rbo_menu_elements .rbroMenuButton').hide();
                $('#rbro_menu_column_actions').hide();
                $('#rbro_menu_row_actions').hide();
            } else {
                var obj = null;
                if (this.selections.length === 1) {
                    obj = this.getDataObject(this.selections[0]);
                }
                $('#rbro_menu_align').hide();
                $('#rbro_menu_valign').hide();
                if (obj instanceof _TableTextElement2.default) {
                    $('#rbo_menu_elements .rbroMenuButton').hide();
                    var table = obj.getTable();
                    var parent = obj.getParent();
                    if (table !== null && utils.convertInputToNumber(table.getValue('columns')) !== 1) {
                        $('#rbro_menu_column_delete').show();
                    } else {
                        $('#rbro_menu_column_delete').hide();
                    }
                    $('#rbro_menu_column_actions').show();
                    if (table !== null && parent !== null && parent.getValue('bandType') === _Band2.default.bandType.content) {
                        if (utils.convertInputToNumber(table.getValue('contentRows')) !== 1) {
                            $('#rbro_menu_row_delete').show();
                        } else {
                            $('#rbro_menu_row_delete').hide();
                        }
                        $('#rbro_menu_row_actions').show();
                    } else {
                        $('#rbro_menu_row_actions').hide();
                    }
                } else {
                    $('#rbo_menu_elements .rbroMenuButton').show();
                    $('#rbro_menu_column_actions').hide();
                    $('#rbro_menu_row_actions').hide();
                }
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
        key: 'getSelectedObjects',
        value: function getSelectedObjects() {
            var rv = [];
            var _iteratorNormalCompletion20 = true;
            var _didIteratorError20 = false;
            var _iteratorError20 = undefined;

            try {
                for (var _iterator20 = (0, _getIterator3.default)(this.selections), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                    var selectionId = _step20.value;

                    var obj = this.getDataObject(selectionId);
                    if (obj !== null) {
                        rv.push(obj);
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

            return rv;
        }
    }, {
        key: 'getSelectedObject',
        value: function getSelectedObject() {
            if (this.selections.length === 1) {
                return this.getDataObject(this.selections[0]);
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
            var _iteratorNormalCompletion21 = true;
            var _didIteratorError21 = false;
            var _iteratorError21 = undefined;

            try {
                for (var _iterator21 = (0, _getIterator3.default)(this.selections), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                    var selectionId = _step21.value;

                    var obj = this.getDataObject(selectionId);
                    if (obj instanceof _DocElement2.default) {
                        return true;
                    }
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

            return false;
        }
    }, {
        key: 'isTableElementSelected',
        value: function isTableElementSelected(tableId) {
            var _iteratorNormalCompletion22 = true;
            var _didIteratorError22 = false;
            var _iteratorError22 = undefined;

            try {
                for (var _iterator22 = (0, _getIterator3.default)(this.selections), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                    var selectionId = _step22.value;

                    var obj = this.getDataObject(selectionId);
                    if (obj instanceof _TableTextElement2.default) {
                        if (obj.getValue('tableId') === tableId) {
                            return true;
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

            return false;
        }
    }, {
        key: 'selectObject',
        value: function selectObject(id, clearSelection) {
            var detailPanel = 'none';
            var obj = this.getDataObject(id);
            if (clearSelection) {
                if (obj !== null && this.selections.length === 1 && this.selections[0] === id) {
                    // nothing to do, selection did not change
                    return;
                }
                this.deselectAll(true);
            }
            if (obj !== null) {
                if (obj instanceof _DocElement2.default) {
                    detailPanel = 'docElement';
                } else if (obj instanceof _Parameter2.default) {
                    detailPanel = 'parameter';
                } else if (obj instanceof _Style2.default) {
                    detailPanel = 'style';
                } else if (obj instanceof _DocumentProperties2.default) {
                    detailPanel = 'documentProperties';
                }

                this.selections.push(id);
                obj.select();
                if (obj.getPanelItem() !== null) {
                    obj.getPanelItem().openParentItems();
                    obj.getPanelItem().setActive();
                }
                if (detailPanel !== this.activeDetailPanel) {
                    this.setDetailPanel(detailPanel);
                }
                this.detailPanels[this.activeDetailPanel].selectionChanged();

                if (this.properties.selectCallback) {
                    this.properties.selectCallback(obj, true);
                }
            }

            this.selectionSinceLastCommand = true;
            this.updateMenuActionButtons();
        }
    }, {
        key: 'deselectObject',
        value: function deselectObject(id) {
            this.deselectObjectInternal(id, true);
            this.updateMenuActionButtons();
        }
    }, {
        key: 'deselectObjectInternal',
        value: function deselectObjectInternal(id, updateSelections) {
            var obj = this.getDataObject(id);
            if (obj !== null) {
                obj.deselect();
                if (obj.getPanelItem() !== null) {
                    obj.getPanelItem().setInactive();
                }
            }

            if (updateSelections) {
                var selectionIndex = this.selections.indexOf(id);
                if (selectionIndex !== -1) {
                    this.selections.splice(selectionIndex, 1);
                }
                if (this.selections.length > 0) {
                    this.detailPanels[this.activeDetailPanel].selectionChanged();
                } else {
                    this.setDetailPanel('none');
                }
            }

            if (obj !== null && this.properties.selectCallback) {
                this.properties.selectCallback(obj, false);
            }
        }
    }, {
        key: 'deselectAll',
        value: function deselectAll(notifyPanel) {
            var _iteratorNormalCompletion23 = true;
            var _didIteratorError23 = false;
            var _iteratorError23 = undefined;

            try {
                for (var _iterator23 = (0, _getIterator3.default)(this.selections), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                    var selectionId = _step23.value;

                    this.deselectObjectInternal(selectionId, false);
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

            this.selections = [];
            if (notifyPanel) {
                this.setDetailPanel('none');
            }
            this.updateMenuActionButtons();
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
        value: function startBrowserDrag(browserDragType, browserDragElementType, browserDragId) {
            this.browserDragType = browserDragType;
            this.browserDragId = browserDragId;
            this.getDocument().startBrowserDrag(browserDragElementType);
        }
    }, {
        key: 'isBrowserDragActive',
        value: function isBrowserDragActive(browserDragType) {
            return this.browserDragType === browserDragType;
        }
    }, {
        key: 'getBrowserDragId',
        value: function getBrowserDragId() {
            return this.browserDragId;
        }
    }, {
        key: 'updateSelectionDrag',
        value: function updateSelectionDrag(diffX, diffY, dragType, dragContainer, store) {
            var cmdGroup = void 0;
            if (store) {
                cmdGroup = new _CommandGroupCmd2.default(dragType === _DocElement2.default.dragType.element ? 'Update position' : 'Resize', this);
            }
            var _iteratorNormalCompletion24 = true;
            var _didIteratorError24 = false;
            var _iteratorError24 = undefined;

            try {
                for (var _iterator24 = (0, _getIterator3.default)(this.selections), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                    var selectionId = _step24.value;

                    var obj = this.getDataObject(selectionId);
                    if (obj !== null) {
                        if (dragType !== _DocElement2.default.dragType.element || obj.isDraggingAllowed()) {
                            obj.updateDrag(diffX, diffY, dragType, dragContainer, store ? cmdGroup : null);
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
            var _iteratorNormalCompletion25 = true;
            var _didIteratorError25 = false;
            var _iteratorError25 = undefined;

            try {
                for (var _iterator25 = (0, _getIterator3.default)(this.selections), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                    var _selectionId3 = _step25.value;

                    var _obj4 = this.getDataObject(_selectionId3);
                    if (_obj4 instanceof _DocElement2.default && _obj4.hasProperty('x')) {
                        elementCount++;
                        x = _obj4.getValue('xVal');
                        y = _obj4.getValue('yVal');
                        width = _obj4.getValue('widthVal');
                        height = _obj4.getValue('heightVal');
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

            var center = minX + (maxX - minX) / 2;
            var vcenter = minY + (maxY - minY) / 2;
            if (elementCount > 1) {
                var cmdGroup = new _CommandGroupCmd2.default('Align elements', this);
                var _iteratorNormalCompletion26 = true;
                var _didIteratorError26 = false;
                var _iteratorError26 = undefined;

                try {
                    for (var _iterator26 = (0, _getIterator3.default)(this.selections), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
                        var selectionId = _step26.value;

                        var obj = this.getDataObject(selectionId);
                        if (obj instanceof _DocElement2.default && !(obj instanceof _PageBreakElement2.default)) {
                            switch (alignment) {
                                case _Style2.default.alignment.left:
                                    {
                                        var cmd = new _SetValueCmd2.default(obj.getId(), 'x', '' + minX, _SetValueCmd2.default.type.text, this);
                                        cmdGroup.addCommand(cmd);
                                    }
                                    break;
                                case _Style2.default.alignment.center:
                                    {
                                        var _cmd2 = new _SetValueCmd2.default(obj.getId(), 'x', '' + (center - obj.getValue('widthVal') / 2), _SetValueCmd2.default.type.text, this);
                                        cmdGroup.addCommand(_cmd2);
                                    }
                                    break;
                                case _Style2.default.alignment.right:
                                    {
                                        var _cmd3 = new _SetValueCmd2.default(obj.getId(), 'x', '' + (maxX - obj.getValue('widthVal')), _SetValueCmd2.default.type.text, this);
                                        cmdGroup.addCommand(_cmd3);
                                    }
                                    break;
                                case _Style2.default.alignment.top:
                                    {
                                        var _cmd4 = new _SetValueCmd2.default(obj.getId(), 'y', '' + minY, _SetValueCmd2.default.type.text, this);
                                        cmdGroup.addCommand(_cmd4);
                                    }
                                    break;
                                case _Style2.default.alignment.middle:
                                    {
                                        var _cmd5 = new _SetValueCmd2.default(obj.getId(), 'y', '' + (vcenter - obj.getValue('heightVal') / 2), _SetValueCmd2.default.type.text, this);
                                        cmdGroup.addCommand(_cmd5);
                                    }
                                    break;
                                case _Style2.default.alignment.bottom:
                                    {
                                        var _cmd6 = new _SetValueCmd2.default(obj.getId(), 'y', '' + (maxY - obj.getValue('heightVal')), _SetValueCmd2.default.type.text, this);
                                        cmdGroup.addCommand(_cmd6);
                                    }
                                    break;
                            }
                        }
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
                if (isNaN(val)) {
                    return '0px';
                }
            }
            return val + 'px';
        }

        /**
         * Shows a global loading image which disables all controls.
         */

    }, {
        key: 'showLoading',
        value: function showLoading() {
            if ($('#rbro_loading_div').length === 0) {
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
            var _iteratorNormalCompletion27 = true;
            var _didIteratorError27 = false;
            var _iteratorError27 = undefined;

            try {
                for (var _iterator27 = (0, _getIterator3.default)(this.getParameters()), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
                    var parameter = _step27.value;

                    if (!parameter.getValue('showOnlyNameType')) {
                        var type = parameter.getValue('type');
                        if (type === _Parameter2.default.type.map) {
                            var testData = {};
                            var _iteratorNormalCompletion28 = true;
                            var _didIteratorError28 = false;
                            var _iteratorError28 = undefined;

                            try {
                                for (var _iterator28 = (0, _getIterator3.default)(parameter.getChildren()), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
                                    var child = _step28.value;

                                    testData[child.getName()] = child.getValue('testData');
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

                            ret[parameter.getName()] = testData;
                        } else if (type === _Parameter2.default.type.array) {
                            ret[parameter.getName()] = parameter.getTestDataRows(false);
                        } else if (type === _Parameter2.default.type.simpleArray) {
                            var testDataRows = [];
                            // because test data rows are stored as map items we convert the list to a list of simple values
                            var _iteratorNormalCompletion29 = true;
                            var _didIteratorError29 = false;
                            var _iteratorError29 = undefined;

                            try {
                                for (var _iterator29 = (0, _getIterator3.default)(parameter.getTestDataRows(false)), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
                                    var testDataRow = _step29.value;

                                    if ('data' in testDataRow) {
                                        testDataRows.push(testDataRow['data']);
                                    }
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

                            ret[parameter.getName()] = testDataRows;
                        } else if (type === _Parameter2.default.type.string || type === _Parameter2.default.type.number || type === _Parameter2.default.type.boolean || type === _Parameter2.default.type.date) {
                            ret[parameter.getName()] = parameter.getValue('testData');
                        }
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

            return ret;
        }
    }, {
        key: 'processErrors',
        value: function processErrors(errors) {
            var _iteratorNormalCompletion30 = true;
            var _didIteratorError30 = false;
            var _iteratorError30 = undefined;

            try {
                for (var _iterator30 = (0, _getIterator3.default)(errors), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
                    var error = _step30.value;

                    if (error.object_id) {
                        $('#rbro_menu_item' + error.object_id).addClass('rbroError');
                        var obj = this.getDataObject(error.object_id);
                        if (obj !== null) {
                            obj.addError(error);
                        }
                    }
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

            if (errors.length > 0) {
                this.deselectAll(false);
                this.selectObject(errors[0].object_id, false);
                this.detailPanels[this.activeDetailPanel].scrollToFirstError();
            }
        }

        /**
         * Performs ajax request to upload the report and either update displayed errors or
         * display report pdf in case report is valid.
         * @param {Object} data - report data.
         * @param {Boolean} isTestData - true if data contains test data from parameters.
         */

    }, {
        key: 'previewInternal',
        value: function previewInternal(data, isTestData) {
            var self = this;
            // clear all error classes and texts
            $('.rbroMenuItem').removeClass('rbroError');
            $('.rbroFormRow').removeClass('rbroError');
            $('.rbroErrorMessage').text('');
            for (var objId in this.objectMap) {
                this.objectMap[objId].clearErrors();
            }

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
         * Sets the internal modified flag.
         *
         * If true the save button is enabled, otherwise the save button is disabled.
         * @param {Boolean} modified
         */

    }, {
        key: 'setModified',
        value: function setModified(modified) {
            this.modified = modified;
            this.updateMenuButtons();
        }

        /**
         * Returns the internal modified flag.
         *
         * If the flag is true the save button is enabled, otherwise the save button is disabled and
         * there was no change to the report since the flag was last set to false (this happens
         * after save or by calling the setModified API method).
         * @returns {Boolean}
         */

    }, {
        key: 'isModified',
        value: function isModified() {
            return this.modified;
        }

        /**
         * Returns report object containing everything needed for the report.
         * @returns {Object}
         */

    }, {
        key: 'getReport',
        value: function getReport() {
            var ret = { docElements: [], parameters: [], styles: [], version: 3 };
            var i = void 0;
            ret.docElements = this.getDocElements(false);
            var _iteratorNormalCompletion31 = true;
            var _didIteratorError31 = false;
            var _iteratorError31 = undefined;

            try {
                for (var _iterator31 = (0, _getIterator3.default)(this.getParameters()), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
                    var parameter = _step31.value;

                    ret.parameters.push(parameter.toJS());
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

                    ret.styles.push(style.toJS());
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

            if (this.getProperty('highlightUnusedParameters')) {
                // if unused parameters are highlighted the marker is removed on save
                var _iteratorNormalCompletion33 = true;
                var _didIteratorError33 = false;
                var _iteratorError33 = undefined;

                try {
                    for (var _iterator33 = (0, _getIterator3.default)(this.getParameters()), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
                        var parameter = _step33.value;

                        if (parameter.editable) {
                            parameter.setHighlightUnused(false);
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

            this.updateMenuButtons();
        }

        /**
         * Loads report object into ReportBro Designer.
         * @param {Object} report - the report object.
         */

    }, {
        key: 'load',
        value: function load(report) {
            var _iteratorNormalCompletion34 = true;
            var _didIteratorError34 = false;
            var _iteratorError34 = undefined;

            try {
                for (var _iterator34 = (0, _getIterator3.default)(this.getParameters()), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
                    var _parameter = _step34.value;

                    this.deleteDataObject(_parameter);
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
                for (var _iterator35 = (0, _getIterator3.default)(this.getStyles()), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
                    var style = _step35.value;

                    this.deleteDataObject(style);
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

            this.deleteDocElements();

            this.nextId = 1;
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
                var _iteratorNormalCompletion36 = true;
                var _didIteratorError36 = false;
                var _iteratorError36 = undefined;

                try {
                    for (var _iterator36 = (0, _getIterator3.default)(report.docElements), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
                        var docElementData = _step36.value;

                        if (docElementData.elementType === _DocElement2.default.type.table) {
                            docElementData.contentDataRows = [docElementData.contentData];
                            docElementData.contentRows = '1';
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
            }
            if (report.version < 3) {
                var _iteratorNormalCompletion37 = true;
                var _didIteratorError37 = false;
                var _iteratorError37 = undefined;

                try {
                    for (var _iterator37 = (0, _getIterator3.default)(report.docElements), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
                        var _docElementData = _step37.value;

                        if (_docElementData.elementType === _DocElement2.default.type.table) {
                            var width = 0;
                            for (var i = 0; i < _docElementData.headerData.columnData.length; i++) {
                                width += _docElementData.headerData.columnData[i].width;
                            }
                            _docElementData.width = width;
                        }
                    }
                } catch (err) {
                    _didIteratorError37 = true;
                    _iteratorError37 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion37 && _iterator37.return) {
                            _iterator37.return();
                        }
                    } finally {
                        if (_didIteratorError37) {
                            throw _iteratorError37;
                        }
                    }
                }
            }

            this.documentProperties.setInitialData(report.documentProperties);
            this.documentProperties.setup();

            var _iteratorNormalCompletion38 = true;
            var _didIteratorError38 = false;
            var _iteratorError38 = undefined;

            try {
                for (var _iterator38 = (0, _getIterator3.default)(report.styles), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
                    var styleData = _step38.value;

                    this.createStyle(styleData);
                }
            } catch (err) {
                _didIteratorError38 = true;
                _iteratorError38 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion38 && _iterator38.return) {
                        _iterator38.return();
                    }
                } finally {
                    if (_didIteratorError38) {
                        throw _iteratorError38;
                    }
                }
            }

            var _iteratorNormalCompletion39 = true;
            var _didIteratorError39 = false;
            var _iteratorError39 = undefined;

            try {
                for (var _iterator39 = (0, _getIterator3.default)(report.parameters), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
                    var parameterData = _step39.value;

                    this.createParameter(parameterData);
                }
            } catch (err) {
                _didIteratorError39 = true;
                _iteratorError39 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion39 && _iterator39.return) {
                        _iterator39.return();
                    }
                } finally {
                    if (_didIteratorError39) {
                        throw _iteratorError39;
                    }
                }
            }

            var _iteratorNormalCompletion40 = true;
            var _didIteratorError40 = false;
            var _iteratorError40 = undefined;

            try {
                for (var _iterator40 = (0, _getIterator3.default)(report.docElements), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
                    var _docElementData2 = _step40.value;

                    this.createDocElement(_docElementData2);
                }
            } catch (err) {
                _didIteratorError40 = true;
                _iteratorError40 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion40 && _iterator40.return) {
                        _iterator40.return();
                    }
                } finally {
                    if (_didIteratorError40) {
                        throw _iteratorError40;
                    }
                }
            }

            if (this.getProperty('highlightUnusedParameters')) {
                // highlight unused parameters when report is loaded

                // to determine if a parameter is used we query the commands
                // which would be necessary in case the parameter name is changed.
                // if no commands are returned then the parameter is not used
                var docElements = this.getDocElements(true);
                var _iteratorNormalCompletion41 = true;
                var _didIteratorError41 = false;
                var _iteratorError41 = undefined;

                try {
                    for (var _iterator41 = (0, _getIterator3.default)(this.getParameters()), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
                        var parameter = _step41.value;

                        if (parameter.editable) {
                            var cmdGroup = new _CommandGroupCmd2.default('Temp group');
                            var _iteratorNormalCompletion42 = true;
                            var _didIteratorError42 = false;
                            var _iteratorError42 = undefined;

                            try {
                                for (var _iterator42 = (0, _getIterator3.default)(docElements), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
                                    var docElement = _step42.value;

                                    docElement.addCommandsForChangedParameterName(parameter, parameter.getName(), cmdGroup);
                                }
                            } catch (err) {
                                _didIteratorError42 = true;
                                _iteratorError42 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion42 && _iterator42.return) {
                                        _iterator42.return();
                                    }
                                } finally {
                                    if (_didIteratorError42) {
                                        throw _iteratorError42;
                                    }
                                }
                            }

                            var _iteratorNormalCompletion43 = true;
                            var _didIteratorError43 = false;
                            var _iteratorError43 = undefined;

                            try {
                                for (var _iterator43 = (0, _getIterator3.default)(this.getParameters()), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
                                    var otherParam = _step43.value;

                                    if (otherParam.getId() !== parameter.getId()) {
                                        otherParam.addCommandsForChangedParameterName(parameter, parameter.getName(), cmdGroup);
                                    }
                                }
                            } catch (err) {
                                _didIteratorError43 = true;
                                _iteratorError43 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion43 && _iterator43.return) {
                                        _iterator43.return();
                                    }
                                } finally {
                                    if (_didIteratorError43) {
                                        throw _iteratorError43;
                                    }
                                }
                            }

                            if (cmdGroup.isEmpty()) {
                                parameter.setHighlightUnused(true);
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError41 = true;
                    _iteratorError41 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion41 && _iterator41.return) {
                            _iterator41.return();
                        }
                    } finally {
                        if (_didIteratorError41) {
                            throw _iteratorError41;
                        }
                    }
                }
            }

            this.browserDragType = '';
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

        /**
         * Delete ReportBro Instance including all dom nodes and all registered event handlers.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.popupWindow.destroy();
            for (var panelName in this.detailPanels) {
                this.detailPanels[panelName].destroy();
            }
            this.element.remove();
            $(document).off('keydown');
            $(document).off('mouseup');
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

        /**
         * Returns document element for the given id, or null if document element does not exist.
         * @param {Number} id - Id of document element to search for.
         * @returns {[DocElement]}
         */

    }, {
        key: 'getDocElementById',
        value: function getDocElementById(id) {
            var obj = this.getDataObject(id);
            if (obj instanceof _DocElement2.default) {
                return obj;
            }
            return null;
        }

        /**
         * Returns parameter for the given id, or null if parameter does not exist.
         * @param {Number} id - Id of parameter to search for.
         * @returns {[Parameter]}
         */

    }, {
        key: 'getParameterById',
        value: function getParameterById(id) {
            var obj = this.getDataObject(id);
            if (obj instanceof _Parameter2.default) {
                return obj;
            }
            return null;
        }

        /**
         * Returns parameter for the given name, or null if parameter does not exist.
         * @param {String} parameterName - Name of parameter to search for.
         * @returns {[Parameter]}
         */

    }, {
        key: 'getParameterByName',
        value: function getParameterByName(parameterName) {
            var parameters = this.getParameters();
            var _iteratorNormalCompletion44 = true;
            var _didIteratorError44 = false;
            var _iteratorError44 = undefined;

            try {
                for (var _iterator44 = (0, _getIterator3.default)(parameters), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
                    var parameter = _step44.value;

                    if (parameter.getValue('name') === parameterName) {
                        return parameter;
                    }
                }
            } catch (err) {
                _didIteratorError44 = true;
                _iteratorError44 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion44 && _iterator44.return) {
                        _iterator44.return();
                    }
                } finally {
                    if (_didIteratorError44) {
                        throw _iteratorError44;
                    }
                }
            }

            return null;
        }

        /**
         * Returns style for the given id, or null if style does not exist.
         * @param {Number} id - Id of style to search for.
         * @returns {[Style]}
         */

    }, {
        key: 'getStyleById',
        value: function getStyleById(id) {
            var obj = this.getDataObject(id);
            if (obj instanceof _Style2.default) {
                return obj;
            }
            return null;
        }

        /**
         * Creates a doc element with given data.
         * @param {Object} docElementData - Map containing all data for new doc element, must
         * also contain a unique id.
         * @returns {DocElement} the created doc element.
         */

    }, {
        key: 'createDocElement',
        value: function createDocElement(docElementData) {
            var element = _AddDeleteDocElementCmd2.default.createElement(docElementData.id, docElementData, docElementData.elementType, -1, false, this);
            var maxId = element.getMaxId();
            if (maxId >= this.nextId) {
                this.nextId = maxId + 1;
            }
            return element;
        }

        /**
         * Creates a parameter with given data.
         * @param {Object} parameterData - Map containing all data for new parameter, must
         * also contain an unique id.
         * @returns {Parameter} the created parameter.
         */

    }, {
        key: 'createParameter',
        value: function createParameter(parameterData) {
            var parameter = new _Parameter2.default(parameterData.id, parameterData, this);
            var parentPanel = this.mainPanel.getParametersItem();
            var panelItem = new _MainPanelItem2.default('parameter', parentPanel, parameter, { hasChildren: true, showAdd: parameter.getValue('editable'), showDelete: parameter.getValue('editable'), draggable: true }, this);
            parameter.setPanelItem(panelItem);
            parentPanel.appendChild(panelItem);
            parameter.setup();
            if (parameter.getValue('type') !== _Parameter2.default.type.array && parameter.getValue('type') !== _Parameter2.default.type.map) {
                $('#rbro_menu_item_add' + parameter.getId()).hide();
                $('#rbro_menu_item_children' + parameter.getId()).hide();
                $('#rbro_menu_item_children_toggle' + parameter.getId()).hide();
            }
            this.addParameter(parameter);
            var maxId = parameter.getMaxId();
            if (maxId >= this.nextId) {
                this.nextId = maxId + 1;
            }
            return parameter;
        }

        /**
         * Creates a style with given data.
         * @param {Object} styleData - Map containing all data for new style, must
         * also contain an unique id.
         * @returns {Style} the created style.
         */

    }, {
        key: 'createStyle',
        value: function createStyle(styleData) {
            var style = new _Style2.default(styleData.id, styleData, this);
            var parentPanel = this.mainPanel.getStylesItem();
            var panelItem = new _MainPanelItem2.default('style', parentPanel, style, { draggable: true }, this);
            style.setPanelItem(panelItem);
            parentPanel.appendChild(panelItem);
            this.addStyle(style);
            if (styleData.id >= this.nextId) {
                this.nextId = styleData.id + 1;
            }
            return style;
        }

        /**
         * Deletes given doc element. Deletes internal object and all
         * related GUI elements (panel item, layout element).
         * @param {DocElement} element - doc element to delete.
         */

    }, {
        key: 'deleteDocElement',
        value: function deleteDocElement(element) {
            for (var i = 0; i < this.docElements.length; i++) {
                if (this.docElements[i].getId() === element.getId()) {
                    this.docElements.splice(i, 1);
                    this.deleteDataObject(element);
                    this.notifyEvent(element, _Command2.default.operation.remove);
                    break;
                }
            }
        }

        /**
         * Deletes given parameter. Deletes internal object and all
         * related GUI elements (panel item, layout element).
         * @param {Parameter} parameter - parameter to delete.
         */

    }, {
        key: 'deleteParameter',
        value: function deleteParameter(parameter) {
            this.deleteDataObject(parameter);
            parameter.getPanelItem().getParent().removeChild(parameter.getPanelItem());
            this.notifyEvent(parameter, _Command2.default.operation.remove);
        }

        /**
         * Deletes given style. Deletes internal object and all
         * related GUI elements (panel item, layout element).
         * @param {Style} style - style to delete.
         */

    }, {
        key: 'deleteStyle',
        value: function deleteStyle(style) {
            this.deleteDataObject(style);
            style.getPanelItem().getParent().removeChild(style.getPanelItem());
            this.notifyEvent(style, _Command2.default.operation.remove);
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

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Container2 = __webpack_require__(30);

var _Container3 = _interopRequireDefault(_Container2);

var _DocElement = __webpack_require__(5);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _Document = __webpack_require__(25);

var _Document2 = _interopRequireDefault(_Document);

var _utils = __webpack_require__(6);

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
            return elementType !== _DocElement2.default.type.pageBreak && elementType !== _DocElement2.default.type.frame && elementType !== _DocElement2.default.type.section;
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
            }
            return { width: width, height: height };
        }

        /**
         * Returns container content size.
         * This is the container minus optional borders, thus the available area for
         * elements inside the frame.
         * @returns {Object} width and height of container content area.
         */

    }, {
        key: 'getContentSize',
        value: function getContentSize() {
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(5);

var _DocElement3 = _interopRequireDefault(_DocElement2);

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
        _this.spreadsheet_colspan = '';
        _this.spreadsheet_addEmptyRow = false;
        _this.setInitialData(initialData);
        _this.name = _this.rb.getLabel('docElementBarCode');
        $('#rbro_menu_item_name' + _this.id).text(_this.name);
        return _this;
    }

    (0, _createClass3.default)(BarCodeElement, [{
        key: 'setup',
        value: function setup(openPanelItem) {
            (0, _get3.default)(BarCodeElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(BarCodeElement.prototype), 'setup', this).call(this, openPanelItem);
            this.createElement();
            if (this.content !== '') {
                this.updateBarCode();
            }
            this.updateDisplay();
            this.updateStyle();
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value) {
            (0, _get3.default)(BarCodeElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(BarCodeElement.prototype), 'setValue', this).call(this, field, value);
            if (field === 'content' || field === 'format' || field === 'displayValue' || field === 'height') {
                this.updateBarCode();
                this.updateDisplay();
            }
        }

        /**
         * Returns all fields of this object that can be modified in the properties panel.
         * @returns {String[]}
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            return ['x', 'y', 'height', 'content', 'format', 'displayValue', 'printIf', 'removeEmptyElement', 'spreadsheet_hide', 'spreadsheet_column', 'spreadsheet_colspan', 'spreadsheet_addEmptyRow'];
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
         * @param {Parameter} parameter - parameter which will be renamed.
         * @param {String} newParameterName - new name of the parameter.
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameterName',
        value: function addCommandsForChangedParameterName(parameter, newParameterName, cmdGroup) {
            this.addCommandForChangedParameterName(parameter, newParameterName, 'content', cmdGroup);
            this.addCommandForChangedParameterName(parameter, newParameterName, 'printIf', cmdGroup);
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'BarCodeElement';
        }
    }]);
    return BarCodeElement;
}(_DocElement3.default);

exports.default = BarCodeElement;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(5);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _utils = __webpack_require__(6);

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
        _this.link = '';
        _this.spreadsheet_hide = false;
        _this.spreadsheet_column = '';
        _this.spreadsheet_addEmptyRow = false;
        _this.setInitialData(initialData);
        return _this;
    }

    (0, _createClass3.default)(ImageElement, [{
        key: 'setup',
        value: function setup(openPanelItem) {
            (0, _get3.default)(ImageElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(ImageElement.prototype), 'setup', this).call(this, openPanelItem);
            this.createElement();
            // setImage must be called after createElement so load event handler of image element is triggered
            this.setImage();
            this.updateDisplay();
            this.updateStyle();
            this.updateName();
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value) {
            (0, _get3.default)(ImageElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(ImageElement.prototype), 'setValue', this).call(this, field, value);
            if (field === 'source' || field === 'imageFilename') {
                this.updateName();
            }
            if (field === 'source' || field === 'image') {
                this.setImage();
            }
        }

        /**
         * Returns all fields of this object that can be modified in the properties panel.
         * @returns {String[]}
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            return ['x', 'y', 'width', 'height', 'source', 'image', 'imageFilename', 'horizontalAlignment', 'verticalAlignment', 'backgroundColor', 'printIf', 'removeEmptyElement', 'link', 'spreadsheet_hide', 'spreadsheet_column', 'spreadsheet_addEmptyRow'];
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
        value: function setImage() {
            this.elImg.attr('src', '');
            if (this.source.startsWith('https://') || this.source.startsWith('http://')) {
                // image specified by url
                this.elImg.attr('src', this.source);
            } else if (this.image !== '') {
                // image base64 encoded
                this.elImg.attr('src', this.image);
            } else {
                // no image preview
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
         * @param {Parameter} parameter - parameter which will be renamed.
         * @param {String} newParameterName - new name of the parameter.
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameterName',
        value: function addCommandsForChangedParameterName(parameter, newParameterName, cmdGroup) {
            this.addCommandForChangedParameterName(parameter, newParameterName, 'source', cmdGroup);
            this.addCommandForChangedParameterName(parameter, newParameterName, 'printIf', cmdGroup);
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'ImageElement';
        }
    }]);
    return ImageElement;
}(_DocElement3.default);

exports.default = ImageElement;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(5);

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
        value: function setup(openPanelItem) {
            (0, _get3.default)(LineElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(LineElement.prototype), 'setup', this).call(this, openPanelItem);
            this.createElement();
            this.updateDisplay();
            this.updateStyle();
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value) {
            (0, _get3.default)(LineElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(LineElement.prototype), 'setValue', this).call(this, field, value);
            if (field === 'color') {
                this.updateStyle();
            }
        }

        /**
         * Returns all fields of this object that can be modified in the properties panel.
         * @returns {String[]}
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            return ['x', 'y', 'width', 'height', 'color', 'printIf'];
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
        key: 'createElement',
        value: function createElement() {
            this.el = $('<div id="rbro_el' + this.id + '" class="rbroDocElement rbroLineElement"></div>');
            this.appendToContainer();
            (0, _get3.default)(LineElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(LineElement.prototype), 'registerEventHandlers', this).call(this);
        }

        /**
         * Adds SetValue commands to command group parameter in case the specified parameter is used in any of
         * the object fields.
         * @param {Parameter} parameter - parameter which will be renamed.
         * @param {String} newParameterName - new name of the parameter.
         * @param {CommandGroupCmd} cmdGroup - possible SetValue commands will be added to this command group.
         */

    }, {
        key: 'addCommandsForChangedParameterName',
        value: function addCommandsForChangedParameterName(parameter, newParameterName, cmdGroup) {
            this.addCommandForChangedParameterName(parameter, newParameterName, 'printIf', cmdGroup);
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'LineElement';
        }
    }]);
    return LineElement;
}(_DocElement3.default);

exports.default = LineElement;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(5);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _Band = __webpack_require__(20);

var _Band2 = _interopRequireDefault(_Band);

var _Document = __webpack_require__(25);

var _Document2 = _interopRequireDefault(_Document);

var _utils = __webpack_require__(6);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Section band doc element. This is the header, content or footer of a custom section.
 *  All Elements inside the band are positioned relative.
 * @class
 */
var SectionBandElement = function (_DocElement) {
    (0, _inherits3.default)(SectionBandElement, _DocElement);

    function SectionBandElement(id, initialData, bandType, rb) {
        (0, _classCallCheck3.default)(this, SectionBandElement);

        var name = bandType === _Band2.default.bandType.header ? rb.getLabel('bandHeader') : bandType === _Band2.default.bandType.footer ? rb.getLabel('bandFooter') : rb.getLabel('bandContent');

        var _this = (0, _possibleConstructorReturn3.default)(this, (SectionBandElement.__proto__ || (0, _getPrototypeOf2.default)(SectionBandElement)).call(this, name, id, 0, 100, rb));

        _this.setupComplete = false;
        _this.band = null;
        _this.bandType = bandType;
        _this.repeatHeader = false;
        _this.alwaysPrintOnSamePage = true;
        _this.shrinkToContentHeight = false;
        _this.parentId = initialData.parentId;

        _this.heightVal = 0;
        _this.visible = bandType === _Band2.default.bandType.content;

        _this.setInitialData(initialData);
        return _this;
    }

    (0, _createClass3.default)(SectionBandElement, [{
        key: 'setup',
        value: function setup() {
            this.createElement();
            this.updateDisplay();
            this.updateStyle();

            if (this.linkedContainerId === null) {
                this.linkedContainerId = this.rb.getUniqueId();
            }
            this.band = new _Band2.default(this.bandType, true, this.linkedContainerId, 'section_' + this.bandType + '_' + this.linkedContainerId, this.rb);
            this.band.init(this);
            this.rb.addContainer(this.band);
            this.setupComplete = true;
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

        /**
         * Returns absolute position inside document.
         * @returns {Object} x and y coordinates.
         */

    }, {
        key: 'getAbsolutePosition',
        value: function getAbsolutePosition() {
            var pos = { x: 0, y: 0 };
            var parent = this.getParent();
            if (parent !== null) {
                pos = parent.getAbsolutePosition();
            }
            pos.y += this.yVal;
            return pos;
        }
    }, {
        key: 'setValue',
        value: function setValue(field, value) {
            (0, _get3.default)(SectionBandElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(SectionBandElement.prototype), 'setValue', this).call(this, field, value);

            if (field === 'height') {
                this[field + 'Val'] = utils.convertInputToNumber(value);
                var parent = this.getParent();
                if (parent !== null) {
                    parent.updateBands(this);
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
            var fields = this.getProperties();
            fields.splice(0, 0, 'id', 'containerId', 'linkedContainerId');
            return fields;
        }

        /**
         * Returns all fields of this object that can be modified in the properties panel.
         * @returns {String[]}
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            var fields = void 0;
            if (this.bandType === _Band2.default.bandType.header) {
                fields = ['height', 'repeatHeader', 'shrinkToContentHeight'];
            } else {
                fields = ['height', 'alwaysPrintOnSamePage', 'shrinkToContentHeight'];
            }
            return fields;
        }
    }, {
        key: 'updateDisplayInternal',
        value: function updateDisplayInternal(x, y, width, height) {
            if (this.el !== null) {
                var props = { top: this.rb.toPixel(y), width: '100%', height: this.rb.toPixel(height) };
                this.el.css(props);
                if (this.setupComplete) {
                    // update section element because section band dividers are contained in section
                    var parent = this.getParent();
                    if (parent !== null) {
                        parent.updateHeight(this, height);
                    }
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
            return ['S'];
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this.heightVal;
        }
    }, {
        key: 'isAreaSelectionAllowed',
        value: function isAreaSelectionAllowed() {
            return false;
        }
    }, {
        key: 'isDraggingAllowed',
        value: function isDraggingAllowed() {
            return false;
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<div id="rbro_el' + this.id + '" class="rbroSectionBandElement rbroElementContainer"></div>');
            this.el.append($('<div class="rbroDocumentBandDescription">' + this.rb.getLabel('docElementSection') + ' ' + this.name + '</div>'));
            $('#rbro_el' + this.parentId).append(this.el);
        }
    }, {
        key: 'getContentElement',
        value: function getContentElement() {
            return this.el;
        }
    }, {
        key: 'getParent',
        value: function getParent() {
            return this.rb.getDataObject(this.parentId);
        }
    }, {
        key: 'show',
        value: function show(visible) {
            this.visible = visible;
            if (visible) {
                $('#rbro_el' + this.id).removeClass('rbroHidden');
            } else {
                $('#rbro_el' + this.id).addClass('rbroHidden');
            }
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            return this.visible;
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'SectionBandElement';
        }
    }]);
    return SectionBandElement;
}(_DocElement3.default);

exports.default = SectionBandElement;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DocElement2 = __webpack_require__(5);

var _DocElement3 = _interopRequireDefault(_DocElement2);

var _TableTextElement = __webpack_require__(46);

var _TableTextElement2 = _interopRequireDefault(_TableTextElement);

var _AddDeleteDocElementCmd = __webpack_require__(19);

var _AddDeleteDocElementCmd2 = _interopRequireDefault(_AddDeleteDocElementCmd);

var _CommandGroupCmd = __webpack_require__(15);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Band = __webpack_require__(20);

var _Band2 = _interopRequireDefault(_Band);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _utils = __webpack_require__(6);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Table band doc element. This is the header, content or footer of a table.
 * @class
 */
var TableBandElement = function (_DocElement) {
    (0, _inherits3.default)(TableBandElement, _DocElement);

    function TableBandElement(id, initialData, bandType, rb) {
        (0, _classCallCheck3.default)(this, TableBandElement);

        var name = bandType === 'header' ? rb.getLabel('bandHeader') : bandType === 'footer' ? rb.getLabel('bandFooter') : rb.getLabel('bandContent');

        var _this = (0, _possibleConstructorReturn3.default)(this, (TableBandElement.__proto__ || (0, _getPrototypeOf2.default)(TableBandElement)).call(this, name, id, 0, 20, rb));

        _this.bandType = bandType;
        _this.repeatHeader = false;
        _this.alwaysPrintOnSamePage = true;
        _this.pageBreak = false;
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
        value: function setValue(field, value) {
            this[field] = value;
            if (field === 'height') {
                var height = utils.convertInputToNumber(value);
                this[field + 'Val'] = height;
                this.getElement().find('td').css({ height: this.rb.toPixel(height) });
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = (0, _getIterator3.default)(this.columnData), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var col = _step2.value;

                        col.setValue(field, value);
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

                var table = this.getParent();
                if (table !== null) {
                    table.updateHeight();
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
            var fields = this.getProperties();
            fields.splice(0, 0, 'id');
            return fields;
        }

        /**
         * Returns all fields of this object that can be modified in the properties panel.
         * @returns {String[]}
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            var fields = ['height', 'backgroundColor'];
            if (this.bandType === _Band2.default.bandType.header) {
                fields.push('repeatHeader');
            } else if (this.bandType === _Band2.default.bandType.content) {
                fields.push('alternateBackgroundColor');
                fields.push('groupExpression');
                fields.push('printIf');
                fields.push('alwaysPrintOnSamePage');
                fields.push('pageBreak');
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
        key: 'getHeight',
        value: function getHeight() {
            return this.heightVal;
        }
    }, {
        key: 'isAreaSelectionAllowed',
        value: function isAreaSelectionAllowed() {
            return false;
        }
    }, {
        key: 'isDraggingAllowed',
        value: function isDraggingAllowed() {
            return false;
        }
    }, {
        key: 'isDroppingAllowed',
        value: function isDroppingAllowed() {
            return false;
        }
    }, {
        key: 'createElement',
        value: function createElement() {
            this.el = $('<tr id="rbro_el_table_band' + this.id + '" class="rbroTableBandElement"></tr>');
            $('#rbro_el_table_' + this.bandType + this.parentId).append(this.el);
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

        /**
         * Create given number of columns for this band.
         * @param {Number} columns - column count, this can be more or less than current number of columns.
         * @param {Boolean} isUpdate - true if this is triggered by a changed value, false if called during initalization.
         * @param {Number} insertColIndex - column index where a new column will be inserted, either left or right to this index.
         * If -1 then no column is inserted at a certain index.
         * @param {Boolean} insertLeft - if true then the new column is inserted left to param insertColIndex, otherwise it is inserted right to it.
         * Only used if param insertColIndex is not -1.
         */

    }, {
        key: 'createColumns',
        value: function createColumns(columns, isUpdate, insertColIndex, insertLeft) {
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
                var colWidth = isUpdate ? 20 : 100;
                var useColDataIndex = _i;
                if (insertColIndex !== -1) {
                    if (insertLeft) {
                        if (_i === insertColIndex) {
                            colWidth = this.columnData[insertColIndex].getValue('widthVal');
                            useColDataIndex = -1;
                        } else if (_i >= insertColIndex) {
                            useColDataIndex--;
                        }
                    } else {
                        if (_i === insertColIndex + 1) {
                            colWidth = this.columnData[insertColIndex].getValue('widthVal');
                            useColDataIndex = -1;
                        } else if (_i > insertColIndex) {
                            useColDataIndex--;
                        }
                    }
                }
                if (useColDataIndex !== -1 && useColDataIndex < this.columnData.length) {
                    data = this.columnData[useColDataIndex];
                    data.columnIndex = _i;
                    dataId = data.id;
                    if (!isUpdate) {
                        data.band = this.band;
                        data.parentId = this.id;
                        data.tableId = this.parentId;
                        data.height = this.height;
                    }
                } else {
                    data = { band: this.band, columnIndex: _i, parentId: this.id, tableId: this.parentId,
                        width: colWidth, height: this.height };
                }
                if (!dataId) {
                    dataId = this.rb.getUniqueId();
                }

                var textElement = new _TableTextElement2.default(dataId, data, this.rb);
                newColumnData.push(textElement);
                this.rb.addDataObject(textElement);
                var panelItemText = new _MainPanelItem2.default(_DocElement3.default.type.text, this.panelItem, textElement, { showDelete: false }, this.rb);
                textElement.setPanelItem(panelItemText);
                this.panelItem.appendChild(panelItemText);
            }
            this.columnData = newColumnData;
            // call setup of table text elements after columnData of table band has been set
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = (0, _getIterator3.default)(newColumnData), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var col = _step3.value;

                    col.setup(true);
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

            this.updateColumnDisplay();
            this.getElement().find('td').css({ height: this.rb.toPixel(this.heightVal) });
        }
    }, {
        key: 'deleteColumn',
        value: function deleteColumn(colIndex) {
            if (colIndex < this.columnData.length) {
                this.columnData[colIndex].remove();
                this.rb.deleteDataObject(this.columnData[colIndex]);
                this.columnData.splice(colIndex, 1);
            }
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
            var i = 0;
            if (columnIndex < this.columnData.length) {
                this.columnData[columnIndex].setWidth(width);
            }
        }

        /**
         * Update display of columns depending on column span value of preceding columns.
         * e.g. if a column has column span value of 3 then the next two columns will be hidden.
         */

    }, {
        key: 'updateColumnDisplay',
        value: function updateColumnDisplay() {
            var i = 0;
            while (i < this.columnData.length) {
                var colData = this.columnData[i];
                var colWidth = colData.getValue('widthVal');
                var colSpan = colData.getValue('colspanVal');
                colData.getElement().show();
                if (colSpan > 1) {
                    var colspanEndIndex = i + colSpan < this.columnData.length ? i + colSpan : this.columnData.length;
                    i++;
                    // hide columns within colspan
                    while (i < colspanEndIndex) {
                        colWidth += this.columnData[i].getValue('widthVal');
                        this.columnData[i].getElement().hide();
                        i++;
                    }
                } else {
                    i++;
                }
                colData.setDisplayWidth(colWidth);
                colData.updateDisplay();
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
        key: 'getColumns',
        value: function getColumns() {
            return this.columnData;
        }

        /**
         * Is called when column width of a cell was changed to update all DOM elements accordingly.
         * @param {Number} columnIndex - column index of changed cell.
         * @param {Number} newColumnWidth
         */

    }, {
        key: 'notifyColumnWidthResized',
        value: function notifyColumnWidthResized(columnIndex, newColumnWidth) {
            var i = 0;
            while (i < this.columnData.length) {
                var column = this.columnData[i];
                var nextCellIndex = column.getNextCellIndex();
                if (nextCellIndex > columnIndex) {
                    if (nextCellIndex > i + 1) {
                        for (var j = i; j < nextCellIndex && j < this.columnData.length; j++) {
                            if (j !== columnIndex) {
                                newColumnWidth += this.columnData[j].getValue('widthVal');
                            }
                        }
                    }
                    column.updateDisplayInternalNotify(0, 0, newColumnWidth, column.getValue('heightVal'), false);
                    break;
                }
                i = nextCellIndex;
            }
        }

        /**
         * Returns index of given column.
         * @param {DocElement} column - column element to get index for.
         * @returns {Number} Index of column, -1 if column is not contained in this band.
         */

    }, {
        key: 'getColumnIndex',
        value: function getColumnIndex(column) {
            for (var i = 0; i < this.columnData.length; i++) {
                if (column === this.columnData[i]) {
                    return i;
                }
            }
            return -1;
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            var width = 0;
            var i = 0;
            while (i < this.columnData.length) {
                var col = this.columnData[i];
                width += col.getDisplayWidth();
                var colspan = col.getValue('colspanVal');
                if (colspan > 1) {
                    i += colspan;
                } else {
                    i++;
                }
            }
            return width;
        }

        /**
         * Returns array of all cell widths of this row.
         * @returns {Number[]} array of cell widths.
         */

    }, {
        key: 'getSingleCellWidths',
        value: function getSingleCellWidths() {
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

        /**
         * Adds a table content row above or below this row.
         * @param {Boolean} above - if true then row will be added above, otherwise below.
         */

    }, {
        key: 'insertRow',
        value: function insertRow(above) {
            var table = this.getParent();
            if (table !== null) {
                var rowIndex = table.getContentRowIndex(this);
                if (rowIndex !== -1) {
                    var cmdGroup = new _CommandGroupCmd2.default('Insert row');
                    // delete table with current settings and restore below with new columns, necessary for undo/redo
                    var cmd = new _AddDeleteDocElementCmd2.default(false, table.getPanelItem().getPanelName(), table.toJS(), table.getId(), table.getContainerId(), -1, this.rb);
                    cmdGroup.addCommand(cmd);

                    // increase content row count of table
                    var contentRows = utils.convertInputToNumber(table.getValue('contentRows')) + 1;
                    table.setValue('contentRows', contentRows);

                    var contentRow = table.getValue('contentDataRows')[rowIndex];
                    var data = { height: contentRow.height, columnData: [] };
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = (0, _getIterator3.default)(contentRow.columnData), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var columnData = _step5.value;

                            data.columnData.push({ width: columnData.width });
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

                    var band = table.createBand('content', -1, data);
                    table.getValue('contentDataRows').splice(above ? rowIndex : rowIndex + 1, 0, band);

                    // restore table with new content row count and updated settings
                    cmd = new _AddDeleteDocElementCmd2.default(true, table.getPanelItem().getPanelName(), table.toJS(), table.getId(), table.getContainerId(), -1, this.rb);
                    cmdGroup.addCommand(cmd);

                    this.rb.executeCommand(cmdGroup);
                    // select first cell of new band
                    this.rb.selectObject(band.getValue('columnData')[0].getId(), true);
                }
            }
        }

        /**
         * Delete content row of this band.
         */

    }, {
        key: 'deleteRow',
        value: function deleteRow() {
            var table = this.getParent();
            if (table !== null) {
                var rowIndex = table.getContentRowIndex(this);
                var contentRows = utils.convertInputToNumber(table.getValue('contentRows'));
                if (rowIndex !== -1 && contentRows > 1) {
                    var cmdGroup = new _CommandGroupCmd2.default('Delete row');
                    // delete table with current settings and restore below with new rows, necessary for undo/redo
                    var cmd = new _AddDeleteDocElementCmd2.default(false, table.getPanelItem().getPanelName(), table.toJS(), table.getId(), table.getContainerId(), -1, this.rb);
                    cmdGroup.addCommand(cmd);

                    // decrease content row count of table
                    table.setValue('contentRows', contentRows - 1);

                    // remove content row
                    table.getValue('contentDataRows').splice(rowIndex, 1);

                    // restore table with new content row count and updated settings
                    cmd = new _AddDeleteDocElementCmd2.default(true, table.getPanelItem().getPanelName(), table.toJS(), table.getId(), table.getContainerId(), -1, this.rb);
                    cmdGroup.addCommand(cmd);

                    this.rb.executeCommand(cmdGroup);
                }
            }
        }
    }, {
        key: 'addChildren',
        value: function addChildren(docElements) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = (0, _getIterator3.default)(this.columnData), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var column = _step6.value;

                    docElements.push(column);
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
    }, {
        key: 'toJS',
        value: function toJS() {
            var ret = (0, _get3.default)(TableBandElement.prototype.__proto__ || (0, _getPrototypeOf2.default)(TableBandElement.prototype), 'toJS', this).call(this);
            ret['columnData'] = [];
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = (0, _getIterator3.default)(this.columnData), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var column = _step7.value;

                    ret['columnData'].push(column.toJS());
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

            return ret;
        }

        /**
         * Returns class name.
         * This can be useful for introspection when the class names are mangled
         * due to the webpack uglification process.
         * @returns {string}
         */

    }, {
        key: 'getClassName',
        value: function getClassName() {
            return 'TableBandElement';
        }
    }]);
    return TableBandElement;
}(_DocElement3.default);

exports.default = TableBandElement;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var locale_de = {
    bandContent: 'Inhalt',
    bandFooter: 'Fußzeile',
    bandHeader: 'Kopfzeile',
    contentHeight: 'Inhaltshöhe',
    contentHeightInfo: 'Höhe des Inhaltsbereichs, um Elemente zu platzieren (betrifft nicht die tatsächliche Seitengröße)',
    differentFiles: 'versch. Dateien...',
    differentValues: 'versch. Werte...',
    docElementAlternateBackgroundColor: 'Abwechselnde Hintergrundfarbe',
    docElementAlwaysPrintOnSamePage: 'Immer zusammen auf einer Seite',
    docElementBarCode: 'Barcode',
    docElementBorderFrame: 'außen',
    docElementBorderFrameRow: 'Rahmen und Zeile',
    docElementBorderGrid: 'Alle Rahmenlinien',
    docElementBorderNone: 'Keiner',
    docElementBorderRow: 'Zeilen',
    docElementColor: 'Farbe',
    docElementColspan: 'Anz. verbundene Zellen',
    docElementColumns: 'Spalten',
    docElementConditionalStyle: 'Bedingte Formatierung',
    docElementConditionalStyleCondition: 'Bedingung',
    docElementContent: 'Text',
    docElementContentRows: 'Inhaltszeilen',
    docElementDataSource: 'Datenquelle',
    docElementDisplayValue: 'Wert anzeigen',
    docElementEval: 'Auswerten',
    docElementFormat: 'Format',
    docElementFrame: 'Rahmen',
    docElementGroupExpression: 'Gruppen Ausdruck',
    docElementGrowWeight: 'Wachstums-Gewicht',
    docElementGrowWeightInfo: 'Wachstumsfaktor zur Verwendung des Platzes von ausgeblendeten Spalten',
    docElementGrowWeightHigh: 'hoch',
    docElementGrowWeightLow: 'niedrig',
    docElementHeight: 'Höhe',
    docElementImage: 'Bild',
    docElementImageFile: 'Bilddatei',
    docElementLabel: 'Bezeichnung',
    docElementLine: 'Linie',
    docElementLink: 'Link',
    docElementLoadImageErrorMsg: 'Bild laden fehlgeschlagen',
    docElementPageBreak: 'Seitenumbruch',
    docElementPattern: 'Pattern',
    docElementPosition: 'Position (x, y)',
    docElementPositionX: 'Position (x)',
    docElementPositionY: 'Position (y)',
    docElementPrintIf: 'Anzeigen wenn',
    docElementPrintSettings: 'Anzeige',
    docElementRemoveEmptyElement: 'Entfernen wenn nicht vorhanden',
    docElementRepeatHeader: 'Auf jeder Seite wiederholen',
    docElementRoot: 'Dokument',
    docElementSection: 'Sektion',
    docElementShrinkToContentHeight: 'Auf Inhaltshöhe reduzieren',
    docElementSize: 'Größe (Breite, Höhe)',
    docElementSource: 'Bildquelle',
    docElementSpreadsheet: 'Tabellenkalkulation',
    docElementSpreadsheetAddEmptyRow: 'Leere Zeile unterhalb einfügen',
    docElementSpreadsheetColspan: 'Anz. verbundene Zellen',
    docElementSpreadsheetColumn: 'Fixe Spalte',
    docElementSpreadsheetHide: 'Ausblenden',
    docElementSpreadsheetTextWrap: 'Zeilenumbruch',
    docElementStyle: 'Formatvorlage',
    docElementTable: 'Tabelle',
    docElementTableBandPageBreak: 'Seitenumbruch mit jeder neuen Gruppe',
    docElementText: 'Text',
    docElementWidth: 'Breite',
    documentProperties: 'Dokumenteinstellungen',
    documentTabClose: 'Schließen',
    documentTabPdfLayout: 'PDF Layout',
    documentTabPdfPreview: 'PDF Vorschau',
    documentTabXlsxDownload: 'XLSX Download',
    emptyPanel: 'Leer',
    errorMsgDuplicateParameter: 'Parameter existiert bereits',
    errorMsgDuplicateParameterField: 'Feld existiert bereits',
    errorMsgFontNotAvailable: 'Schrift ist am Server nicht vorhanden',
    errorMsgLoadingImageFailed: 'Bild laden fehlgeschlagen: ${info}',
    errorMsgInvalidArray: 'Ungültige Liste',
    errorMsgInvalidAvgSumExpression: 'Ausdruck muss ein Zahl-Feld einer Liste enthalten',
    errorMsgInvalidBarCode: 'Ungültiger Barcode Inhalt',
    errorMsgInvalidDataSource: 'Ungültige Datenquelle',
    errorMsgInvalidDataSourceParameter: 'Parameter muss eine Liste sein',
    errorMsgInvalidDate: 'Ungültiges Datum, erwartetes Format ist JJJJ-MM-TT (bzw. JJJJ-MM-TT hh:mm für Datum mit Uhrzeit)',
    errorMsgInvalidExpression: 'Ungültiger Ausdruck: ${info}',
    errorMsgInvalidExpressionFuncNotDefined: 'Funktion ${info} ist nicht definiert',
    errorMsgInvalidExpressionNameNotDefined: 'Name ${info} ist nicht definiert',
    errorMsgInvalidExpressionType: 'Ausdruck liefert ungültigen Typ',
    errorMsgInvalidLink: 'Link muss mit http:// oder https:// beginnen',
    errorMsgInvalidImage: 'Ungültige Bilddaten, Bild muss base64 kodiert sein',
    errorMsgInvalidImageSource: 'Ungültige Bildquelle, Url beginnend mit http:// bzw. https:// erwartet',
    errorMsgInvalidImageSourceParameter: 'Parameter vom Typ Bild oder String (mit einer Url) notwendig',
    errorMsgInvalidMap: 'Ungültige Auflistung',
    errorMsgInvalidNumber: 'Ungültige Zahl',
    errorMsgInvalidPageSize: 'Ungültige Seitengröße',
    errorMsgInvalidParameterData: 'Daten stimmen nicht mit Parameter überein',
    errorMsgInvalidParameterName: 'Name muss mit einem Zeichen oder Unterstrich beginnen und darf nur Zeichen, Ziffern und Unterstriche enthalten',
    errorMsgInvalidPattern: 'Ungültiges Pattern',
    errorMsgInvalidPosition: 'Die Position ist außerhalb des Bereichs',
    errorMsgInvalidSize: 'Das Element ist außerhalb des Bereichs',
    errorMsgInvalidTestData: 'Ungültige Testdaten',
    errorMsgMissingData: 'Fehlende Daten',
    errorMsgMissingDataSourceParameter: 'Datenquelle Parameter nicht gefunden',
    errorMsgMissingExpression: 'Ausdruck muss gesetzt sein',
    errorMsgMissingImage: 'Fehlendes Bild: Keine Bildquelle oder -datei angegeben',
    errorMsgMissingParameter: 'Parameter nicht gefunden',
    errorMsgMissingParameterData: 'Daten für Parameter {info} nicht gefunden',
    errorMsgSectionBandNotOnSamePage: 'Abschnittsbereich passt nicht auf eine Seite',
    errorMsgSectionBandPageBreakNotAllowed: 'Manueller Seitenumbruch ist nicht erlaubt',
    errorMsgUnicodeEncodeError: 'Text enthält nicht druckbare Zeichen',
    errorMsgUnsupportedImageType: 'Bildtyp wird nicht unterstützt (nur .jpg und .png erlaubt)',
    footer: 'Fußzeile',
    footerDisplay: 'Anzeige',
    footerSize: 'Höhe Fußzeile',
    header: 'Kopfzeile',
    headerDisplay: 'Anzeige',
    headerFooterDisplayAlways: 'Immer',
    headerFooterDisplayNotOnFirstPage: 'Nicht auf erster Seite',
    headerSize: 'Höhe Kopfzeile',
    menuColumnAddLeft: 'Spalte links hinzufügen',
    menuColumnAddRight: 'Spalte rechts hinzufügen',
    menuColumnDelete: 'Spalte löschen',
    menuAlignBottom: 'Unten ausrichten',
    menuAlignCenter: 'Zentriert ausrichten',
    menuAlignLeft: 'Links ausrichten',
    menuAlignMiddle: 'Mittig ausrichten',
    menuAlignRight: 'Rechts ausrichten',
    menuAlignTop: 'Oben ausrichten',
    menuInsertReport: 'EINF.',
    menuInsertReportTip: 'Report-Vorlage einfügen',
    menuLogReport: 'LOG',
    menuLogReportTip: 'Report-Vorlage in Konsole ausgeben',
    menuPreview: 'VORSCHAU',
    menuPreviewTip: 'Report-Vorschau',
    menuRedo: 'WIEDERH.',
    menuRedoTip: 'Letzten rückgängig gemachten Befehl wiederholen',
    menuRowAddAbove: 'Zeile oberhalb hinzufügen',
    menuRowAddBelow: 'Zeile unterhalb hinzufügen',
    menuRowDelete: 'Zeile löschen',
    menuSave: 'SPEICHERN',
    menuSaveTip: 'Report speichern',
    menuToggleGrid: 'Raster ein-/ausblenden',
    menuUndo: 'RÜCKG.',
    menuUndoTip: 'Letzten Befehl rückgängig machen',
    menuZoomIn: 'Vergrößern',
    menuZoomOut: 'Verkleinern',
    nameCopySuffix: 'Kopie',
    orientation: 'Ausrichtung',
    orientationBottom: 'unten',
    orientationLandscape: 'Querformat',
    orientationLeft: 'links',
    orientationPortrait: 'Hochformat',
    orientationRight: 'rechts',
    orientationTop: 'oben',
    pageFormat: 'Seitenformat',
    pageFormatA4: 'DIN A4 (210 x 297 mm)',
    pageFormatA5: 'DIN A5 (148 x 210 mm)',
    pageFormatLetter: 'Brief (216 x 279 mm)',
    pageFormatUserDefined: 'Eigene Einstellung',
    pageHeight: 'Höhe',
    pageMargins: 'Seitenränder',
    pageWidth: 'Breite',
    parameter: 'Parameter',
    parameterAddTestData: 'Zeile hinzufügen',
    parameterArrayItemType: 'Listenelement-Typ',
    parameterEditTestData: 'Bearbeiten',
    parameterEditTestDataNoFields: 'Keine Felder für diese Liste definiert',
    parameterEval: 'Text auswerten',
    parameterExpression: 'Ausdruck',
    parameterListType: 'Listen-Typ',
    parameterName: 'Name',
    parameterNullable: 'NULL-Wert erlaubt',
    parameterPattern: 'Pattern',
    parameterRowParams: 'Parameter in Zeile',
    parameterSearchPlaceholder: 'Parameter durchsuchen...',
    parameterTestData: 'Testdaten',
    parameterTestDataDatePattern: 'JJJJ-MM-TT',
    parameterType: 'Typ',
    parameterTypeArray: 'Liste',
    parameterTypeAverage: 'Durchschnitt',
    parameterTypeBoolean: 'Boolean',
    parameterTypeDate: 'Datum',
    parameterTypeImage: 'Bild',
    parameterTypeMap: 'Gruppierung',
    parameterTypeNumber: 'Zahl',
    parameterTypeSimpleArray: 'Einfache Liste',
    parameterTypeString: 'String',
    parameterTypeSum: 'Summe',
    parameters: 'Parameter',
    parametersDataSource: 'Datenquelle Parameter',
    patternCurrencySymbol: 'Währungssymbol',
    patternDate1: 'Tag.Monat.Jahr, z.B. 1.6.1980',
    patternDate2: 'Tag.Monat.Jahr (2-stellig), Stunde(24h):Minute, z.B. 1.6.80, 14:30',
    patternDate3: 'Tag/Monat/Jahr (Monat abgekürzt), z.B. 1/Jun/1980',
    patternDate4: 'Monat/Tag/Jahr (Tag und Monat mit führender Null, falls einstellig), z.B. 06/01/1980',
    patternLocale: 'Pattern Locale',
    patternNumber1: 'Tausender-Trennzeichen',
    patternNumber2: 'Dezimalpunkt gefolgt von 3 Dezimalstellen',
    patternNumber3: 'Dezimalpunkt gefolgt von mind. 2 und max. 4 Dezimalstellen',
    patternNumber4: 'Tausender-Trennzeichen und Dezimalpunkt gefolgt von 2 Dezimalstellen',
    patternNumber5: 'Währungssymbol vor Zahl',
    patternSeparatorDates: '--- Datum Pattern ---',
    patternSeparatorNumbers: '--- Zahlen Pattern ---',
    select: 'auswählen...',
    style: 'Formatvorlage',
    styleAlignment: 'Ausrichtung',
    styleBackgroundColor: 'Hintergrundfarbe',
    styleBold: 'Fett',
    styleBorder: 'Rahmen',
    styleBorderAll: 'vollständig',
    styleBorderColor: 'Rahmenfarbe',
    styleBorderWidth: 'Rahmenbreite',
    styleFont: 'Schrift',
    styleFontSizeUnit: 'pt',
    styleHAlignmentCenter: 'Zentriert',
    styleHAlignmentLeft: 'Links',
    styleHAlignmentJustify: 'Blocksatz',
    styleHAlignmentRight: 'Rechts',
    styleItalic: 'Kursiv',
    styleLineSpacing: 'Linienabstand',
    styleName: 'Name',
    styleNone: 'Keine',
    stylePadding: 'Innenabstand',
    styleStrikethrough: 'Durchgestrichen',
    styleTextColor: 'Textfarbe',
    styleTextStyle: 'Formatierung',
    styleUnderline: 'Unterstreichen',
    styleVAlignmentBottom: 'Unten',
    styleVAlignmentMiddle: 'Mittig',
    styleVAlignmentTop: 'Oben',
    styles: 'Formatvorlagen'
};

exports.default = locale_de;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var locale_en = {
    bandContent: 'Content',
    bandFooter: 'Footer',
    bandHeader: 'Header',
    contentHeight: 'Content height',
    contentHeightInfo: 'affects only GUI size to place elements and not the real page size',
    differentFiles: 'different files...',
    differentValues: 'different values...',
    docElementAlternateBackgroundColor: 'Alternate background color',
    docElementAlwaysPrintOnSamePage: 'Always on same page',
    docElementBarCode: 'Bar code',
    docElementBorderFrame: 'Frame',
    docElementBorderFrameRow: 'Frame and row',
    docElementBorderGrid: 'Grid',
    docElementBorderNone: 'None',
    docElementBorderRow: 'Row',
    docElementColor: 'Color',
    docElementColspan: 'Colspan',
    docElementColumns: 'Columns',
    docElementConditionalStyle: 'Conditional style',
    docElementConditionalStyleCondition: 'Condition',
    docElementContent: 'Text',
    docElementContentRows: 'Content rows',
    docElementDataSource: 'Data source',
    docElementDisplayValue: 'Display value',
    docElementEval: 'Evaluate',
    docElementFormat: 'Format',
    docElementFrame: 'Frame',
    docElementGroupExpression: 'Group expression',
    docElementGrowWeight: 'Grow weight',
    docElementGrowWeightInfo: 'Grow factor to take space of hidden columns',
    docElementGrowWeightHigh: 'high',
    docElementGrowWeightLow: 'low',
    docElementHeight: 'Height',
    docElementImage: 'Image',
    docElementImageFile: 'Image file',
    docElementLabel: 'Label',
    docElementLine: 'Line',
    docElementLink: 'Link',
    docElementLoadImageErrorMsg: 'Loading image failed',
    docElementPageBreak: 'Page break',
    docElementPattern: 'Pattern',
    docElementPosition: 'Position (x, y)',
    docElementPositionX: 'Position (x)',
    docElementPositionY: 'Position (y)',
    docElementPrintIf: 'Print if',
    docElementPrintSettings: 'Print settings',
    docElementRemoveEmptyElement: 'Remove when empty',
    docElementRepeatHeader: 'Repeat header',
    docElementRoot: 'Document',
    docElementSection: 'Section',
    docElementShrinkToContentHeight: 'Shrink to content height',
    docElementSize: 'Size (width, height)',
    docElementSource: 'Source',
    docElementSpreadsheet: 'Spreadsheet',
    docElementSpreadsheetAddEmptyRow: 'Add empty row below',
    docElementSpreadsheetColspan: 'Colspan',
    docElementSpreadsheetColumn: 'Fixed column',
    docElementSpreadsheetHide: 'Hide',
    docElementSpreadsheetTextWrap: 'Text wrap',
    docElementStyle: 'Style',
    docElementTable: 'Table',
    docElementTableBandPageBreak: 'Page break with each new group',
    docElementText: 'Text',
    docElementWidth: 'Width',
    documentProperties: 'Document properties',
    documentTabClose: 'Close',
    documentTabPdfLayout: 'PDF Layout',
    documentTabPdfPreview: 'PDF Preview',
    documentTabXlsxDownload: 'XLSX Download',
    emptyPanel: 'Empty panel',
    errorMsgDuplicateParameter: 'Parameter already exists',
    errorMsgDuplicateParameterField: 'Field already exists',
    errorMsgFontNotAvailable: 'Font not available on server',
    errorMsgLoadingImageFailed: 'Loading image failed: ${info}',
    errorMsgInvalidArray: 'Invalid list',
    errorMsgInvalidAvgSumExpression: 'Expression must contain number field of a list parameter',
    errorMsgInvalidBarCode: 'Invalid bar code content',
    errorMsgInvalidDataSource: 'Invalid data source',
    errorMsgInvalidDataSourceParameter: 'Parameter must be a list',
    errorMsgInvalidDate: 'Invalid date, expected format is YYYY-MM-DD ( or YYYY-MM-DD hh:mm for date with time)',
    errorMsgInvalidExpression: 'Invalid expression: ${info}',
    errorMsgInvalidExpressionFuncNotDefined: 'Function ${info} not defined',
    errorMsgInvalidExpressionNameNotDefined: 'Name ${info} not defined',
    errorMsgInvalidExpressionType: 'Expression returns invalid type',
    errorMsgInvalidLink: 'Link must start with http:// or https://',
    errorMsgInvalidImage: 'Invalid image data, image must be base64 encoded',
    errorMsgInvalidImageSource: 'Invalid source, expected url starting with http:// or https:// respectively',
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
    errorMsgSectionBandNotOnSamePage: 'Section band does not fit on same page',
    errorMsgSectionBandPageBreakNotAllowed: 'Manual page break not allowed',
    errorMsgUnicodeEncodeError: 'Text contains non printable character',
    errorMsgUnsupportedImageType: 'Image does not have supported image type (.jpg, .png)',
    footer: 'Footer',
    footerDisplay: 'Display',
    footerSize: 'Footer size',
    header: 'Header',
    headerDisplay: 'Display',
    headerFooterDisplayAlways: 'Always',
    headerFooterDisplayNotOnFirstPage: 'Do not show on first page',
    headerSize: 'Header size',
    menuColumnAddLeft: 'Add column to the left',
    menuColumnAddRight: 'Add column to the right',
    menuColumnDelete: 'Delete column',
    menuAlignBottom: 'Align bottom',
    menuAlignCenter: 'Align center',
    menuAlignLeft: 'Align left',
    menuAlignMiddle: 'Align middle',
    menuAlignRight: 'Align right',
    menuAlignTop: 'Align top',
    menuInsertReport: 'INSERT',
    menuInsertReportTip: 'Insert report template',
    menuLogReport: 'LOG',
    menuLogReportTip: 'Log report template to console',
    menuPreview: 'PREVIEW',
    menuPreviewTip: 'Preview report',
    menuRedo: 'REDO',
    menuRedoTip: 'Repeat last undone command',
    menuRowAddAbove: 'Add row above',
    menuRowAddBelow: 'Add row below',
    menuRowDelete: 'Delete row',
    menuSave: 'SAVE',
    menuSaveTip: 'Save report',
    menuToggleGrid: 'Show/Hide grid',
    menuUndo: 'UNDO',
    menuUndoTip: 'Undo last command',
    menuZoomIn: 'Zoom in',
    menuZoomOut: 'Zoom out',
    nameCopySuffix: 'copy',
    orientation: 'Orientation',
    orientationBottom: 'bottom',
    orientationLandscape: 'Landscape',
    orientationLeft: 'left',
    orientationPortrait: 'Portrait',
    orientationRight: 'right',
    orientationTop: 'top',
    pageFormat: 'Page format',
    pageFormatA4: 'DIN A4 (210 x 297 mm)',
    pageFormatA5: 'DIN A5 (148 x 210 mm)',
    pageFormatLetter: 'Letter (8.5 x 11.0 inches)',
    pageFormatUserDefined: 'Own dimensions',
    pageHeight: 'height',
    pageMargins: 'Page margins',
    pageWidth: 'width',
    parameter: 'Parameter',
    parameterAddTestData: 'Add row',
    parameterArrayItemType: 'List item type',
    parameterEditTestData: 'Edit',
    parameterEditTestDataNoFields: 'No fields defined for this list',
    parameterEval: 'Evaluate text',
    parameterExpression: 'Expression',
    parameterListType: 'List type',
    parameterName: 'Name',
    parameterNullable: 'Nullable',
    parameterPattern: 'Pattern',
    parameterRowParams: 'Row parameters',
    parameterSearchPlaceholder: 'Search parameters...',
    parameterTestData: 'Test data',
    parameterTestDataDatePattern: 'YYYY-MM-DD',
    parameterType: 'Type',
    parameterTypeArray: 'List',
    parameterTypeAverage: 'Average',
    parameterTypeBoolean: 'Boolean',
    parameterTypeDate: 'Date',
    parameterTypeImage: 'Image',
    parameterTypeMap: 'Collection',
    parameterTypeNumber: 'Number',
    parameterTypeSimpleArray: 'Simple List',
    parameterTypeString: 'Text',
    parameterTypeSum: 'Sum',
    parameters: 'Parameters',
    parametersDataSource: 'Data source parameters',
    patternCurrencySymbol: 'Pattern currency symbol',
    patternDate1: 'day.month.year, e.g. 1.6.1980',
    patternDate2: 'day.month.year (2-digit), hour(24h):minute, e.g. 1.6.80, 14:30',
    patternDate3: 'day/month/year (month abbreviation), e.g. 1/Jun/1980',
    patternDate4: 'month/day/year (day and month with leading zero if single digit), e.g. 06/01/1980',
    patternLocale: 'Pattern locale',
    patternNumber1: 'Show thousand separator',
    patternNumber2: 'Show decimal point followed by 3 decimal places',
    patternNumber3: 'Show decimal point followed by minimum of 2 and maximum of 4 decimal places',
    patternNumber4: 'Show thousand separator and decimal point followed by 2 decimal places',
    patternNumber5: 'Show currency symbol in front of number',
    patternSeparatorDates: '--- Date patterns ---',
    patternSeparatorNumbers: '--- Number patterns ---',
    select: 'select...',
    style: 'Style',
    styleAlignment: 'Alignment',
    styleBackgroundColor: 'Background color',
    styleBold: 'Bold',
    styleBorder: 'Border',
    styleBorderAll: 'borders',
    styleBorderColor: 'Border color',
    styleBorderWidth: 'Border width',
    styleFont: 'Font',
    styleFontSizeUnit: 'pt',
    styleHAlignmentCenter: 'Center',
    styleHAlignmentLeft: 'Left',
    styleHAlignmentJustify: 'Justify',
    styleHAlignmentRight: 'Right',
    styleItalic: 'Italic',
    styleLineSpacing: 'Line spacing',
    styleName: 'Name',
    styleNone: 'None',
    stylePadding: 'Padding',
    styleStrikethrough: 'Strikethrough',
    styleTextColor: 'Text color',
    styleTextStyle: 'Text style',
    styleUnderline: 'Underline',
    styleVAlignmentBottom: 'Bottom',
    styleVAlignmentMiddle: 'Middle',
    styleVAlignmentTop: 'Top',
    styles: 'Styles'
};

exports.default = locale_en;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _locale_de_de = __webpack_require__(89);

var _locale_de_de2 = _interopRequireDefault(_locale_de_de);

var _locale_en_us = __webpack_require__(90);

var _locale_en_us2 = _interopRequireDefault(_locale_en_us);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locales = {
    de_de: _locale_de_de2.default,
    en_us: _locale_en_us2.default
};

exports.default = locales;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _MainPanelItem = __webpack_require__(12);

var _MainPanelItem2 = _interopRequireDefault(_MainPanelItem);

var _Container = __webpack_require__(30);

var _Container2 = _interopRequireDefault(_Container);

var _Document = __webpack_require__(25);

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
        this.headerItem = new _MainPanelItem2.default('band', null, headerBand, { hasChildren: true, showAdd: false, showDelete: false, hasDetails: false, visible: this.rb.getDocumentProperties().getValue('header') }, rb);

        this.documentItem = new _MainPanelItem2.default('band', null, contentBand, { hasChildren: true, showAdd: false, showDelete: false, hasDetails: false }, rb);

        this.footerItem = new _MainPanelItem2.default('band', null, footerBand, { hasChildren: true, showAdd: false, showDelete: false, hasDetails: false, visible: this.rb.getDocumentProperties().getValue('footer') }, rb);

        this.parametersItem = new _MainPanelItem2.default('parameter', null, parameterContainer, { hasChildren: true, showAdd: rb.getProperty('adminMode'), showDelete: false, hasDetails: false }, rb);

        this.stylesItem = new _MainPanelItem2.default('style', null, styleContainer, { hasChildren: true, showAdd: true, showDelete: false, hasDetails: false }, rb);

        this.documentPropertiesItem = new _MainPanelItem2.default('documentProperties', null, rb.getDocumentProperties(), { showDelete: false, hasDetails: true }, rb);

        this.items = [this.headerItem, this.documentItem, this.footerItem, this.parametersItem, this.stylesItem, this.documentPropertiesItem];

        this.dragMainPanelSizer = false;
        this.dragMainPanelSizerStartX = 0;
        this.mainPanelWidth = 230;
        this.mainPanelSizerWidth = 3;

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
            var _this = this;

            var panel = $('#rbro_main_panel_list');
            this.appendChildren(panel, this.items);

            $('#rbro_main_panel_sizer').mousedown(function (event) {
                _this.dragMainPanelSizer = true;
                _this.dragMainPanelSizerStartX = event.pageX;
            });

            this.updateMainPanelWidth(this.mainPanelWidth);
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
        key: 'processMouseMove',
        value: function processMouseMove(event) {
            if (this.dragMainPanelSizer) {
                var mainPanelWidth = this.mainPanelWidth + (event.pageX - this.dragMainPanelSizerStartX);
                mainPanelWidth = this.checkMainPanelWidth(mainPanelWidth);
                this.updateMainPanelWidth(mainPanelWidth);
                return true;
            }
            return false;
        }
    }, {
        key: 'mouseUp',
        value: function mouseUp(event) {
            if (this.dragMainPanelSizer) {
                this.dragMainPanelSizer = false;
                this.mainPanelWidth = this.mainPanelWidth + (event.pageX - this.dragMainPanelSizerStartX);
                this.mainPanelWidth = this.checkMainPanelWidth(this.mainPanelWidth);
                this.updateMainPanelWidth(this.mainPanelWidth);
            }
        }

        /**
         * Returns total panel width. This is the width of the main panel (containing the elements),
         * the property panel and an optional menu sidebar.
         * @returns {Number}
         */

    }, {
        key: 'getTotalPanelWidth',
        value: function getTotalPanelWidth() {
            var totalPanelWidth = this.mainPanelWidth + this.mainPanelSizerWidth + 390;
            if (this.rb.getProperty('menuSidebar')) {
                totalPanelWidth += 92;
            }
            return totalPanelWidth;
        }
    }, {
        key: 'updateMainPanelWidth',
        value: function updateMainPanelWidth(mainPanelWidth) {
            $('#rbro_main_panel').css({ width: mainPanelWidth });
            $('#rbro_main_panel_sizer').css({ left: mainPanelWidth });
            $('#rbro_detail_panel').css({ left: mainPanelWidth + this.mainPanelSizerWidth });
            // calculate width of main panel, detail panel and sidebar (if available)
            var totalPanelWidth = mainPanelWidth + this.mainPanelSizerWidth + 390;
            if (this.rb.getProperty('menuSidebar')) {
                totalPanelWidth += 92;
                $('#reportbro .rbroLogo').css({ width: mainPanelWidth });
            }
            $('#rbro_document_panel').css({ width: 'calc(100% - ' + totalPanelWidth + 'px)' });
        }
    }, {
        key: 'checkMainPanelWidth',
        value: function checkMainPanelWidth(mainPanelWidth) {
            if (mainPanelWidth < 150) {
                return 150;
            } else if (mainPanelWidth > 500) {
                return 500;
            }
            return mainPanelWidth;
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(47);

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__(32);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _DocElement = __webpack_require__(5);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _TableTextElement = __webpack_require__(46);

var _TableTextElement2 = _interopRequireDefault(_TableTextElement);

var _utils = __webpack_require__(6);

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
            if (this.rb.getProperty('menuShowDebug')) {
                panelLeft.append($('<button id="rbro_menu_log_report" class="rbroButton rbroMenuButton" title="' + this.rb.getLabel('menuLogReportTip') + '">\n                    <span class="rbroIcon-console"></span><span class="rbroHidden">' + this.rb.getLabel('menuLogReport') + '</span></button>').click(function (event) {
                    console.log((0, _stringify2.default)(_this.rb.getReport()));
                }));
                panelLeft.append($('<button id="rbro_menu_insert_report" class="rbroButton rbroMenuButton" title="' + this.rb.getLabel('menuInsertReportTip') + '">\n                    <span class="rbroIcon-insert-report"></span><span class="rbroHidden">' + this.rb.getLabel('menuInsertReport') + '</span></button>').click(function (event) {
                    var strReport = prompt('Paste report template here to load report');
                    if (strReport) {
                        try {
                            var report = JSON.parse(strReport);
                            if ((0, _typeof3.default)(report.docElements) === "object" && (0, _typeof3.default)(report.parameters) === "object" && (0, _typeof3.default)(report.styles) === "object" && (0, _typeof3.default)(report.documentProperties) === "object") {
                                _this.rb.load(report);
                                _this.rb.setModified(true);
                            } else {
                                alert('Invalid report template data');
                            }
                        } catch (e) {
                            alert('Invalid report template data');
                        }
                    }
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
            var elElementsDiv = $('<div id="rbo_menu_elements" class="rbroElementButtons"></div>');

            elElementsDiv.append($('<div id="rbro_menu_element_text" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementText') + '">\n                    <span class="rbroIcon-text"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', ''); // without setData dragging does not work in FF
                event.originalEvent.dataTransfer.effectAllowed = 'copy';

                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.text, '');

                // avoid calling dragstart handler for main div which disables dragging for all other elements
                event.stopPropagation();
            }).on('touchstart', function (event) {
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.text, '');

                // keep the browser from continuing to process the touch event
                // (this also prevents a mouse event from being delivered).
                event.preventDefault();
            }).on('touchmove', function (event) {
                _this.rb.getDocument().processDragover(event);
            }).on('touchend', function (event) {
                _this.rb.getDocument().processDrop(event);
            }));

            elElementsDiv.append($('<div id="rbro_menu_element_line" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementLine') + '">\n                    <span class="rbroIcon-line"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.line, '');
                event.stopPropagation();
            }).on('touchstart', function (event) {
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.line, '');
                event.preventDefault();
            }).on('touchmove', function (event) {
                _this.rb.getDocument().processDragover(event);
            }).on('touchend', function (event) {
                _this.rb.getDocument().processDrop(event);
            }));

            elElementsDiv.append($('<div id="rbro_menu_element_image" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementImage') + '">\n                    <span class="rbroIcon-image"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.image, '');
                event.stopPropagation();
            }).on('touchstart', function (event) {
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.image, '');
                event.preventDefault();
            }).on('touchmove', function (event) {
                _this.rb.getDocument().processDragover(event);
            }).on('touchend', function (event) {
                _this.rb.getDocument().processDrop(event);
            }));

            elElementsDiv.append($('<div id="rbro_menu_element_bar_code" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementBarCode') + '">\n                    <span class="rbroIcon-barcode"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.barCode, '');
                event.stopPropagation();
            }).on('touchstart', function (event) {
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.barCode, '');
                event.preventDefault();
            }).on('touchmove', function (event) {
                _this.rb.getDocument().processDragover(event);
            }).on('touchend', function (event) {
                _this.rb.getDocument().processDrop(event);
            }));
            elElementsDiv.append($('<div id="rbro_menu_element_table" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementTable') + '">\n                    <span class="rbroIcon-table"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.table, '');
                event.stopPropagation();
            }).on('touchstart', function (event) {
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.table, '');
                event.preventDefault();
            }).on('touchmove', function (event) {
                _this.rb.getDocument().processDragover(event);
            }).on('touchend', function (event) {
                _this.rb.getDocument().processDrop(event);
            }));

            elElementsDiv.append($('<div id="rbro_menu_element_frame" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementFrame') + '">\n                    <span class="rbroIcon-frame"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.frame, '');
                event.stopPropagation();
            }).on('touchstart', function (event) {
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.frame, '');
                event.preventDefault();
            }).on('touchmove', function (event) {
                _this.rb.getDocument().processDragover(event);
            }).on('touchend', function (event) {
                _this.rb.getDocument().processDrop(event);
            }));

            elElementsDiv.append($('<div id="rbro_menu_element_section" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementSection') + '">\n                    <span class="rbroIcon-section"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.section, '');
                event.stopPropagation();
            }).on('touchstart', function (event) {
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.section, '');
                event.preventDefault();
            }).on('touchmove', function (event) {
                _this.rb.getDocument().processDragover(event);
            }).on('touchend', function (event) {
                _this.rb.getDocument().processDrop(event);
            }));

            elElementsDiv.append($('<div id="rbro_menu_element_page_break" class="rbroButton rbroMenuButton" draggable="true"\n                title="' + this.rb.getLabel('docElementPageBreak') + '">\n                    <span class="rbroIcon-page-break"></span>\n                </div>').on('dragstart', function (event) {
                event.originalEvent.dataTransfer.setData('text/plain', '');
                event.originalEvent.dataTransfer.effectAllowed = 'copy';
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.pageBreak, '');
                event.stopPropagation();
            }).on('touchstart', function (event) {
                _this.rb.startBrowserDrag('docElement', _DocElement2.default.type.pageBreak, '');
                event.preventDefault();
            }).on('touchmove', function (event) {
                _this.rb.getDocument().processDragover(event);
            }).on('touchend', function (event) {
                _this.rb.getDocument().processDrop(event);
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

            var elColumnActionsDiv = $('<div id="rbro_menu_column_actions" style="display: none;"></div>');
            var elColumnAddLeft = $('<button id="rbro_menu_column_add_left"\n                class="rbroButton rbroActionButton rbroIcon-column-add-left" type="button"\n                title="' + this.rb.getLabel('menuColumnAddLeft') + '"></button>').click(function (event) {
                var obj = _this.rb.getSelectedObject();
                if (obj instanceof _TableTextElement2.default) {
                    obj.insertColumn(true);
                }
            });
            elColumnActionsDiv.append(elColumnAddLeft);
            var elColumnAddRight = $('<button id="rbro_menu_column_add_right"\n                class="rbroButton rbroActionButton rbroIcon-column-add-right" type="button"\n                title="' + this.rb.getLabel('menuColumnAddRight') + '"></button>').click(function (event) {
                var obj = _this.rb.getSelectedObject();
                if (obj instanceof _TableTextElement2.default) {
                    obj.insertColumn(false);
                }
            });
            elColumnActionsDiv.append(elColumnAddRight);
            var elColumnDelete = $('<button id="rbro_menu_column_delete"\n                class="rbroButton rbroActionButton rbroIcon-column-delete" type="button"\n                title="' + this.rb.getLabel('menuColumnDelete') + '"></button>').click(function (event) {
                var obj = _this.rb.getSelectedObject();
                if (obj instanceof _TableTextElement2.default) {
                    obj.deleteColumn();
                }
            });
            elColumnActionsDiv.append(elColumnDelete);
            elActionsDiv.append(elColumnActionsDiv);

            var elRowActionsDiv = $('<div id="rbro_menu_row_actions" style="display: none;"></div>');
            var elRowAddAbove = $('<button id="rbro_menu_row_add_above"\n                class="rbroButton rbroActionButton rbroIcon-row-add-above" type="button"\n                title="' + this.rb.getLabel('menuRowAddAbove') + '"></button>').click(function (event) {
                var obj = _this.rb.getSelectedObject();
                if (obj instanceof _TableTextElement2.default && obj.getParent() !== null) {
                    obj.getParent().insertRow(true);
                }
            });
            elRowActionsDiv.append(elRowAddAbove);
            var elRowAddBelow = $('<button id="rbro_menu_row_add_below"\n                class="rbroButton rbroActionButton rbroIcon-row-add-below" type="button"\n                title="' + this.rb.getLabel('menuRowAddBelow') + '"></button>').click(function (event) {
                var obj = _this.rb.getSelectedObject();
                if (obj instanceof _TableTextElement2.default && obj.getParent() !== null) {
                    obj.getParent().insertRow(false);
                }
            });
            elRowActionsDiv.append(elRowAddBelow);
            var elRowDelete = $('<button id="rbro_menu_row_delete"\n                class="rbroButton rbroActionButton rbroIcon-row-delete" type="button"\n                title="' + this.rb.getLabel('menuRowDelete') + '"></button>').click(function (event) {
                var obj = _this.rb.getSelectedObject();
                if (obj instanceof _TableTextElement2.default && obj.getParent() !== null) {
                    obj.getParent().deleteRow();
                }
            });
            elRowActionsDiv.append(elRowDelete);
            elActionsDiv.append(elRowActionsDiv);

            var elZoomDiv = $('<div id="rbro_menu_zoom" class="rbroZoom"></div>');
            elZoomDiv.append($('<span id="rbro_menu_zoom_level" class="rbroZoomLevel"></span>'));
            var elMenuZoomIn = $('<button id="rbro_menu_zoom_in"\n                class="rbroButton rbroRoundButton rbroZoomButton rbroIcon-plus\n                ' + (!this.rb.getDocument().isZoomInPossible() ? 'rbroButtonInactive' : '') + '" type="button"\n                title="' + this.rb.getLabel('menuZoomIn') + '"></button>').click(function (event) {
                _this.rb.getDocument().zoomIn();
            });
            elZoomDiv.append(elMenuZoomIn);
            var elMenuZoomOut = $('<button id="rbro_menu_zoom_out"\n                class="rbroButton rbroRoundButton rbroZoomButton rbroIcon-minus\n                ' + (!this.rb.getDocument().isZoomOutPossible() ? 'rbroButtonInactive' : '') + '" type="button"\n                title="' + this.rb.getLabel('menuZoomOut') + '"></button>').click(function (event) {
                _this.rb.getDocument().zoomOut();
            });
            elZoomDiv.append(elMenuZoomOut);
            elActionsDiv.append(elZoomDiv);

            var elMenuToggleGrid = $('<button id="rbro_menu_toggle_grid"\n                class="rbroButton rbroGridButton rbroActionButton rbroIcon-grid ' + (this.rb.getProperty('showGrid') ? 'rbroButtonActive' : '') + '" type="button"\n                title="' + this.rb.getLabel('menuToggleGrid') + '"></button>').click(function (event) {
                elMenuToggleGrid.toggleClass('rbroButtonActive');
                _this.rb.getDocument().toggleGrid();
            });
            elActionsDiv.append(elMenuToggleGrid);

            panelRight.append(elActionsDiv);
            panel.append(panelRight);
        }
    }, {
        key: 'updateZoomButtons',
        value: function updateZoomButtons(zoomInPossible, zoomOutPossible) {
            if (zoomInPossible) {
                $('#rbro_menu_zoom_in').removeAttr('disabled');
            } else {
                $('#rbro_menu_zoom_in').attr('disabled', 'disabled');
            }
            if (zoomOutPossible) {
                $('#rbro_menu_zoom_out').removeAttr('disabled');
            } else {
                $('#rbro_menu_zoom_out').attr('disabled', 'disabled');
            }
        }
    }]);
    return MenuPanel;
}();

exports.default = MenuPanel;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _PanelBase2 = __webpack_require__(31);

var _PanelBase3 = _interopRequireDefault(_PanelBase2);

var _StylePanel = __webpack_require__(65);

var _StylePanel2 = _interopRequireDefault(_StylePanel);

var _Command = __webpack_require__(11);

var _Command2 = _interopRequireDefault(_Command);

var _CommandGroupCmd = __webpack_require__(15);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Parameter = __webpack_require__(13);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _Style = __webpack_require__(14);

var _Style2 = _interopRequireDefault(_Style);

var _DocElement = __webpack_require__(5);

var _DocElement2 = _interopRequireDefault(_DocElement);

var _PopupWindow = __webpack_require__(40);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

var _utils = __webpack_require__(6);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generic panel to edit all shared properties of selected document elements.
 * @class
 */
var DocElementPanel = function (_PanelBase) {
    (0, _inherits3.default)(DocElementPanel, _PanelBase);

    function DocElementPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, DocElementPanel);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DocElementPanel.__proto__ || (0, _getPrototypeOf2.default)(DocElementPanel)).call(this, 'rbro_doc_element', _DocElement2.default, rootElement, rb));

        _this.propertyDescriptors = {
            'label': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'label'
            },
            'content': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'content'
            },
            'eval': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'eval'
            },
            'dataSource': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'data_source'
            },
            'xReadOnly': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'x_read_only'
            },
            'x': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'x',
                'rowId': 'rbro_doc_element_position_row',
                'errorMsgId': 'rbro_doc_element_position_error',
                'singleRowProperty': false,
                'rowProperties': ['x', 'y'],
                'labelId': 'rbro_doc_element_position_label',
                'defaultLabel': 'docElementPosition',
                'singlePropertyLabel': 'docElementPositionX'
            },
            'y': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'y',
                'rowId': 'rbro_doc_element_position_row',
                'errorMsgId': 'rbro_doc_element_position_error',
                'singleRowProperty': false,
                'labelId': 'rbro_doc_element_position_label',
                'defaultLabel': 'docElementPosition',
                'singlePropertyLabel': 'docElementPositionY'
            },
            'width': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'width',
                'rowId': 'rbro_doc_element_size_row',
                'errorMsgId': 'rbro_doc_element_size_error',
                'singleRowProperty': false,
                'rowProperties': ['width', 'height'],
                'labelId': 'rbro_doc_element_size_label',
                'defaultLabel': 'docElementSize',
                'singlePropertyLabel': 'docElementWidth'
            },
            'height': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'height',
                'rowId': 'rbro_doc_element_size_row',
                'errorMsgId': 'rbro_doc_element_size_error',
                'singleRowProperty': false,
                'labelId': 'rbro_doc_element_size_label',
                'defaultLabel': 'docElementSize',
                'singlePropertyLabel': 'docElementHeight'
            },
            'colspan': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'colspan'
            },
            'format': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'format',
                'allowEmpty': false
            },
            'displayValue': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'display_value'
            },
            'source': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'source'
            },
            'image': {
                'type': _SetValueCmd2.default.type.file,
                'fieldId': 'image',
                'rowId': 'rbro_doc_element_image_row',
                'singleRowProperty': false,
                'rowProperties': ['image', 'imageFilename']
            },
            'imageFilename': {
                'type': _SetValueCmd2.default.type.filename,
                'fieldId': 'image_filename',
                'rowId': 'rbro_doc_element_image_row',
                'singleRowProperty': false
            },
            'columns': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'columns'
            },
            'header': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'header'
            },
            'contentRows': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'content_rows'
            },
            'footer': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'footer'
            },
            'color': {
                'type': _SetValueCmd2.default.type.color,
                'allowEmpty': false,
                'fieldId': 'color',
                'section': 'style'
            },
            'styleId': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'style_id',
                'section': 'style',
                'allowEmpty': true
            },
            'bold': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'bold',
                'rowId': 'rbro_doc_element_textstyle_row',
                'singleRowProperty': false,
                'rowProperties': ['bold', 'italic', 'underline', 'strikethrough'],
                'section': 'style'
            },
            'italic': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'italic',
                'rowId': 'rbro_doc_element_textstyle_row',
                'singleRowProperty': false,
                'section': 'style'
            },
            'underline': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'underline',
                'rowId': 'rbro_doc_element_textstyle_row',
                'singleRowProperty': false,
                'section': 'style'
            },
            'strikethrough': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'strikethrough',
                'rowId': 'rbro_doc_element_textstyle_row',
                'singleRowProperty': false,
                'section': 'style'
            },
            'horizontalAlignment': {
                'type': _SetValueCmd2.default.type.buttonGroup,
                'fieldId': 'halignment',
                'rowId': 'rbro_doc_element_alignment_row',
                'singleRowProperty': false,
                'rowProperties': ['horizontalAlignment', 'verticalAlignment'],
                'section': 'style'
            },
            'verticalAlignment': {
                'type': _SetValueCmd2.default.type.buttonGroup,
                'fieldId': 'valignment',
                'rowId': 'rbro_doc_element_alignment_row',
                'singleRowProperty': false,
                'section': 'style'
            },
            'textColor': {
                'type': _SetValueCmd2.default.type.color,
                'allowEmpty': false,
                'fieldId': 'text_color',
                'section': 'style'
            },
            'backgroundColor': {
                'type': _SetValueCmd2.default.type.color,
                'allowEmpty': true,
                'fieldId': 'background_color',
                'section': 'style'
            },
            'alternateBackgroundColor': {
                'type': _SetValueCmd2.default.type.color,
                'allowEmpty': true,
                'fieldId': 'alternate_background_color',
                'section': 'style'
            },
            'font': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'font',
                'rowId': 'rbro_doc_element_font_row',
                'singleRowProperty': false,
                'rowProperties': ['font', 'fontSize'],
                'section': 'style',
                'allowEmpty': false
            },
            'fontSize': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'font_size',
                'rowId': 'rbro_doc_element_font_row',
                'singleRowProperty': false,
                'section': 'style',
                'allowEmpty': false
            },
            'lineSpacing': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'line_spacing',
                'section': 'style',
                'allowEmpty': false
            },
            'borderAll': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'border_all',
                'rowId': 'rbro_doc_element_border_row',
                'singleRowProperty': false,
                'rowProperties': ['borderAll', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom'],
                'section': 'style'
            },
            'borderLeft': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'border_left',
                'rowId': 'rbro_doc_element_border_row',
                'singleRowProperty': false,
                'section': 'style'
            },
            'borderTop': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'border_top',
                'rowId': 'rbro_doc_element_border_row',
                'singleRowProperty': false,
                'section': 'style'
            },
            'borderRight': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'border_right',
                'rowId': 'rbro_doc_element_border_row',
                'singleRowProperty': false,
                'section': 'style'
            },
            'borderBottom': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'border_bottom',
                'rowId': 'rbro_doc_element_border_row',
                'singleRowProperty': false,
                'section': 'style'
            },
            'border': {
                'type': _SetValueCmd2.default.type.buttonGroup,
                'fieldId': 'table_border',
                'rowId': 'rbro_doc_element_table_border_row',
                'section': 'style'
            },
            'borderColor': {
                'type': _SetValueCmd2.default.type.color,
                'allowEmpty': false,
                'fieldId': 'border_color',
                'section': 'style'
            },
            'borderWidth': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'border_width',
                'section': 'style'
            },
            'paddingLeft': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'padding_left',
                'rowId': 'rbro_doc_element_padding_row',
                'singleRowProperty': false,
                'rowProperties': ['paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom'],
                'section': 'style'
            },
            'paddingTop': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'padding_top',
                'rowId': 'rbro_doc_element_padding_row',
                'singleRowProperty': false,
                'section': 'style'
            },
            'paddingRight': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'padding_right',
                'rowId': 'rbro_doc_element_padding_row',
                'singleRowProperty': false,
                'section': 'style'
            },
            'paddingBottom': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'padding_bottom',
                'rowId': 'rbro_doc_element_padding_row',
                'singleRowProperty': false,
                'section': 'style'
            },
            'groupExpression': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'group_expression',
                'section': 'print'
            },
            'pageBreak': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'page_break',
                'visibleIf': 'groupExpression',
                'section': 'print'
            },
            'printIf': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'print_if',
                'section': 'print'
            },
            'repeatHeader': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'repeat_header',
                'section': 'print'
            },
            'removeEmptyElement': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'remove_empty_element',
                'section': 'print'
            },
            'alwaysPrintOnSamePage': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'always_print_on_same_page',
                'section': 'print'
            },
            'shrinkToContentHeight': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'shrink_to_content_height',
                'section': 'print'
            },
            'growWeight': {
                'type': _SetValueCmd2.default.type.select,
                'allowEmpty': false,
                'fieldId': 'grow_weight',
                'section': 'print'
            },
            'pattern': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'pattern',
                'section': 'print'
            },
            'link': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'link',
                'section': 'print'
            },
            'cs_condition': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'cs_condition',
                'section': 'cs_style'
            },
            'cs_styleId': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'cs_style_id',
                'section': 'cs_style',
                'allowEmpty': true
            },
            'cs_bold': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'cs_bold',
                'rowId': 'rbro_doc_element_cs_textstyle_row',
                'singleRowProperty': false,
                'rowProperties': ['cs_bold', 'cs_italic', 'cs_underline', 'cs_strikethrough'],
                'section': 'cs_style'
            },
            'cs_italic': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'cs_italic',
                'rowId': 'rbro_doc_element_cs_textstyle_row',
                'singleRowProperty': false,
                'section': 'cs_style'
            },
            'cs_underline': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'cs_underline',
                'rowId': 'rbro_doc_element_cs_textstyle_row',
                'singleRowProperty': false,
                'section': 'cs_style'
            },
            'cs_strikethrough': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'cs_strikethrough',
                'rowId': 'rbro_doc_element_cs_textstyle_row',
                'singleRowProperty': false,
                'section': 'cs_style'
            },
            'cs_horizontalAlignment': {
                'type': _SetValueCmd2.default.type.buttonGroup,
                'fieldId': 'cs_halignment',
                'rowId': 'rbro_doc_element_cs_alignment_row',
                'singleRowProperty': false,
                'rowProperties': ['cs_horizontalAlignment', 'cs_verticalAlignment'],
                'section': 'cs_style'
            },
            'cs_verticalAlignment': {
                'type': _SetValueCmd2.default.type.buttonGroup,
                'fieldId': 'cs_valignment',
                'rowId': 'rbro_doc_element_cs_alignment_row',
                'singleRowProperty': false,
                'section': 'cs_style'
            },
            'cs_textColor': {
                'type': _SetValueCmd2.default.type.color,
                'allowEmpty': false,
                'fieldId': 'cs_text_color',
                'section': 'cs_style'
            },
            'cs_backgroundColor': {
                'type': _SetValueCmd2.default.type.color,
                'allowEmpty': true,
                'fieldId': 'cs_background_color',
                'section': 'cs_style'
            },
            'cs_font': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'cs_font',
                'rowId': 'rbro_doc_element_cs_font_row',
                'singleRowProperty': false,
                'rowProperties': ['cs_font', 'cs_fontSize'],
                'section': 'cs_style',
                'allowEmpty': false
            },
            'cs_fontSize': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'cs_font_size',
                'rowId': 'rbro_doc_element_cs_font_row',
                'singleRowProperty': false,
                'section': 'cs_style',
                'allowEmpty': false
            },
            'cs_lineSpacing': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'cs_line_spacing',
                'section': 'cs_style',
                'allowEmpty': false
            },
            'cs_borderAll': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'cs_border_all',
                'rowId': 'rbro_doc_element_cs_border_row',
                'singleRowProperty': false,
                'rowProperties': ['cs_borderAll', 'cs_borderLeft', 'cs_borderTop', 'cs_borderRight', 'cs_borderBottom'],
                'section': 'cs_style'
            },
            'cs_borderLeft': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'cs_border_left',
                'rowId': 'rbro_doc_element_cs_border_row',
                'singleRowProperty': false,
                'section': 'cs_style'
            },
            'cs_borderTop': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'cs_border_top',
                'rowId': 'rbro_doc_element_cs_border_row',
                'singleRowProperty': false,
                'section': 'cs_style'
            },
            'cs_borderRight': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'cs_border_right',
                'rowId': 'rbro_doc_element_cs_border_row',
                'singleRowProperty': false,
                'section': 'cs_style'
            },
            'cs_borderBottom': {
                'type': _SetValueCmd2.default.type.button,
                'fieldId': 'cs_border_bottom',
                'rowId': 'rbro_doc_element_cs_border_row',
                'singleRowProperty': false,
                'section': 'cs_style'
            },
            'cs_borderColor': {
                'type': _SetValueCmd2.default.type.color,
                'allowEmpty': false,
                'fieldId': 'cs_border_color',
                'section': 'cs_style'
            },
            'cs_borderWidth': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'cs_border_width',
                'section': 'cs_style'
            },
            'cs_paddingLeft': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'cs_padding_left',
                'rowId': 'rbro_doc_element_cs_padding_row',
                'singleRowProperty': false,
                'rowProperties': ['paddingLeft', 'paddingTop', 'paddingRight', 'paddingBottom'],
                'section': 'cs_style'
            },
            'cs_paddingTop': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'cs_padding_top',
                'rowId': 'rbro_doc_element_cs_padding_row',
                'singleRowProperty': false,
                'section': 'cs_style'
            },
            'cs_paddingRight': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'cs_padding_right',
                'rowId': 'rbro_doc_element_cs_padding_row',
                'singleRowProperty': false,
                'section': 'cs_style'
            },
            'cs_paddingBottom': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'cs_padding_bottom',
                'rowId': 'rbro_doc_element_cs_padding_row',
                'singleRowProperty': false,
                'section': 'cs_style'
            },
            'spreadsheet_hide': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'spreadsheet_hide',
                'section': 'spreadsheet'
            },
            'spreadsheet_column': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'spreadsheet_column',
                'section': 'spreadsheet'
            },
            'spreadsheet_colspan': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'spreadsheet_colspan',
                'section': 'spreadsheet'
            },
            'spreadsheet_addEmptyRow': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'spreadsheet_add_empty_row',
                'section': 'spreadsheet'
            },
            'spreadsheet_textWrap': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'spreadsheet_text_wrap',
                'section': 'spreadsheet'
            }
        };
        return _this;
    }

    (0, _createClass3.default)(DocElementPanel, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var elDiv = void 0,
                elFormField = void 0,
                elParameterButton = void 0;
            var panel = $('<div id="rbro_doc_element_panel" class="rbroHidden"></div>');

            elDiv = $('<div id="rbro_doc_element_label_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_label">' + this.rb.getLabel('docElementLabel') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elLabel = $('<input id="rbro_doc_element_label">').on('input', function (event) {
                var val = elLabel.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'label', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elLabel);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_data_source_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_data_source">\n                      ' + this.rb.getLabel('docElementDataSource') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit rbroSelector"></div>');
            var elDataSource = $('<textarea id="rbro_doc_element_data_source" rows="1"></textarea>').on('input', function (event) {
                var val = elDataSource.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'dataSource', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            autosize(elDataSource);
            elFormField.append(elDataSource);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObjects = _this2.rb.getSelectedObjects();
                // data source parameters are not shown in case multiple objects are selected
                var selectedObject = selectedObjects.length === 1 ? selectedObjects[0] : null;

                _this2.rb.getPopupWindow().show(_this2.rb.getParameterItems(selectedObject, [_Parameter2.default.type.array]), null, 'rbro_doc_element_data_source', 'dataSource', _PopupWindow2.default.type.parameterSet);
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_doc_element_data_source_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_content_row" class="rbroFormRow rbroHidden"></div>');
            elDiv.append('<label for="rbro_doc_element_content">' + this.rb.getLabel('docElementContent') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit rbroSelector"></div>');
            var elContent = $('<textarea id="rbro_doc_element_content" rows="1"></textarea>').on('input', function (event) {
                var val = elContent.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'content', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            }).blur(function (event) {
                _this2.rb.getPopupWindow().hide();
            });
            autosize(elContent);
            elFormField.append(elContent);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObjects = _this2.rb.getSelectedObjects();
                // data source parameters are not shown in case multiple objects are selected
                var selectedObject = selectedObjects.length === 1 ? selectedObjects[0] : null;

                _this2.rb.getPopupWindow().show(_this2.rb.getParameterItems(selectedObject), null, 'rbro_doc_element_content', 'content', _PopupWindow2.default.type.parameterAppend);
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_doc_element_content_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_eval_row" class="rbroFormRow rbroHidden"></div>');
            elDiv.append('<label for="rbro_doc_element_eval">' + this.rb.getLabel('docElementEval') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elEval = $('<input id="rbro_doc_element_eval" type="checkbox">').change(function (event) {
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                var evalChecked = elEval.is(":checked");
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'eval', evalChecked, _SetValueCmd2.default.type.checkbox, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elEval);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_format_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_format">' + this.rb.getLabel('docElementFormat') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elFormat = $('<select id="rbro_doc_element_format" disabled="disabled">\n                <option value="CODE128">CODE128</option>\n            </select>').change(function (event) {
                var val = elFormat.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'format', val, _SetValueCmd2.default.type.select, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elFormat);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_display_value_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_display_value">' + this.rb.getLabel('docElementDisplayValue') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elDisplayValue = $('<input id="rbro_doc_element_display_value" type="checkbox">').change(function (event) {
                var displayValueChecked = elDisplayValue.is(":checked");
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'displayValue', displayValueChecked, _SetValueCmd2.default.type.checkbox, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elDisplayValue);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_source_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_source">' + this.rb.getLabel('docElementSource') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit rbroSelector"></div>');
            var elSource = $('<textarea id="rbro_doc_element_source" rows="1"></textarea>').on('input', function (event) {
                var val = elSource.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'source', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            autosize(elSource);
            elFormField.append(elSource);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObjects = _this2.rb.getSelectedObjects();
                // data source parameters are not shown in case multiple objects are selected
                var selectedObject = selectedObjects.length === 1 ? selectedObjects[0] : null;

                _this2.rb.getPopupWindow().show(_this2.rb.getParameterItems(selectedObject, [_Parameter2.default.type.image, _Parameter2.default.type.string]), null, 'rbro_doc_element_source', 'source', _PopupWindow2.default.type.parameterSet);
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_doc_element_source_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_image_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_image">' + this.rb.getLabel('docElementImageFile') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elImage = $('<input id="rbro_doc_element_image" type="file">').change(function (event) {
                var files = event.target.files;
                if (files && files[0]) {
                    var fileReader = new FileReader();
                    var rb = _this2.rb;
                    var fileName = files[0].name;
                    fileReader.onload = function (e) {
                        var cmdGroup = new _CommandGroupCmd2.default('Load image', rb);
                        var selectedObjects = rb.getSelectedObjects();
                        for (var i = selectedObjects.length - 1; i >= 0; i--) {
                            var obj = selectedObjects[i];
                            cmdGroup.addSelection(obj.getId());
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'image', e.target.result, _SetValueCmd2.default.type.file, rb));
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'imageFilename', fileName, _SetValueCmd2.default.type.filename, rb));
                        }
                        if (!cmdGroup.isEmpty()) {
                            rb.executeCommand(cmdGroup);
                        }
                    };
                    fileReader.onerror = function (e) {
                        alert(rb.getLabel('docElementLoadImageErrorMsg'));
                    };
                    fileReader.readAsDataURL(files[0]);
                }
            });
            elFormField.append(elImage);
            var elFilenameDiv = $('<div id="rbro_doc_element_image_filename_container" class="rbroSplit rbroHidden"></div>');
            elFilenameDiv.append($('<div id="rbro_doc_element_image_filename"></div>'));
            elFilenameDiv.append($('<div id="rbro_doc_element_image_filename_clear"' + '                   class="rbroIcon-cancel rbroButton rbroDeleteButton rbroRoundButton"></div>').click(function (event) {
                elImage.val('');
                var cmdGroup = new _CommandGroupCmd2.default('Clear image', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'image', '', _SetValueCmd2.default.type.file, _this2.rb));
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'imageFilename', '', _SetValueCmd2.default.type.filename, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            }));
            elFormField.append(elFilenameDiv);
            elFormField.append('<div id="rbro_doc_element_image_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_x_read_only_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_x_read_only" class="rbroDisabled">\n                      ' + this.rb.getLabel('docElementPositionX') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elXReadOnly = $('<input id="rbro_doc_element_x_read_only" disabled="true">');
            elFormField.append(elXReadOnly);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_position_row" class="rbroFormRow rbroHidden"></div>');
            elDiv.append('<label id="rbro_doc_element_position_label" for="rbro_doc_element_x">\n                      ' + this.rb.getLabel('docElementPosition') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elPosX = $('<input id="rbro_doc_element_x" type="number">').on('input', function (event) {
                var val = elPosX.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'x', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elPosX);
            var elPosY = $('<input id="rbro_doc_element_y" type="number">').on('input', function (event) {
                var val = elPosY.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'y', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elPosY);
            elFormField.append('<div id="rbro_doc_element_position_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_size_row" class="rbroFormRow rbroHidden"></div>');
            elDiv.append('<label id="rbro_doc_element_size_label" for="rbro_doc_element_size">\n                      ' + this.rb.getLabel('docElementSize') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit"></div>');
            var elWidth = $('<input id="rbro_doc_element_width" type="number">').on('input', function (event) {
                var val = elWidth.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'width', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elWidth);
            var elHeight = $('<input id="rbro_doc_element_height" type="number">').on('input', function (event) {
                var val = elHeight.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'height', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elHeight);
            elFormField.append('<div id="rbro_doc_element_size_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_colspan_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_colspan">' + this.rb.getLabel('docElementColspan') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elColspan = $('<input id="rbro_doc_element_colspan" type="number">').change(function (event) {
                var val = elColspan.val().trim();
                if (val !== '') {
                    val = utils.checkInputDecimal(val, 1, 9);
                }
                if (val !== elColspan.val()) {
                    elColspan.val(val);
                }
                var selectedObjects = _this2.rb.getSelectedObjects();
                var valueChanged = false;
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    if (selectedObjects[i].getValue('colspan') !== val) {
                        valueChanged = true;
                        break;
                    }
                }

                if (valueChanged) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                    for (var _i = selectedObjects.length - 1; _i >= 0; _i--) {
                        var obj = selectedObjects[_i];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'colspan', val, _SetValueCmd2.default.type.text, _this2.rb));
                    }
                    if (!cmdGroup.isEmpty()) {
                        _this2.rb.executeCommand(cmdGroup);
                    }
                }
            });
            elFormField.append(elColspan);
            elFormField.append('<div id="rbro_doc_element_colspan_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_columns_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_columns">' + this.rb.getLabel('docElementColumns') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elColumns = $('<input id="rbro_doc_element_columns" type="number">').change(function (event) {
                var val = utils.checkInputDecimal(elColumns.val(), 1, 99);
                if (val !== elColumns.val()) {
                    elColumns.val(val);
                }
                var columns = utils.convertInputToNumber(val);
                var selectedObjects = _this2.rb.getSelectedObjects();
                var valueChanged = false;
                var enoughSpaceAvailable = true;
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    if (obj.getValue('columns') !== val) {
                        valueChanged = true;
                    }
                    if (!obj.hasEnoughAvailableSpace(columns)) {
                        enoughSpaceAvailable = false;
                    }
                }

                if (!enoughSpaceAvailable && selectedObjects.length === 1) {
                    // reset input to current column count
                    elColumns.val(selectedObjects[0].getValue('columns'));
                }

                if (valueChanged && enoughSpaceAvailable) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                    for (var _i2 = selectedObjects.length - 1; _i2 >= 0; _i2--) {
                        var _obj = selectedObjects[_i2];
                        cmdGroup.addSelection(_obj.getId());
                        _obj.addCommandsForChangedColumns(columns, cmdGroup);
                    }
                    if (!cmdGroup.isEmpty()) {
                        _this2.rb.executeCommand(cmdGroup);
                    }
                }
            });
            elFormField.append(elColumns);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_header_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_header">' + this.rb.getLabel('header') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elHeaderLabel = $('<label class="switch-light switch-material"></label>');
            var elHeader = $('<input id="rbro_doc_element_header" type="checkbox">').change(function (event) {
                var headerChecked = elHeader.is(":checked");
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'header', headerChecked, _SetValueCmd2.default.type.checkbox, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
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

            elDiv = $('<div id="rbro_doc_element_content_rows_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_content_rows">\n                      ' + this.rb.getLabel('docElementContentRows') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elContentRows = $('<input id="rbro_doc_element_content_rows" type="number">').change(function (event) {
                var val = utils.checkInputDecimal(elContentRows.val(), 1, 99);
                var contentRows = utils.convertInputToNumber(val);
                if (val !== elContentRows.val()) {
                    elContentRows.val(val);
                }
                var selectedObjects = _this2.rb.getSelectedObjects();
                var valueChanged = false;
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    if (selectedObjects[i].getValue('contentRows') !== val) {
                        valueChanged = true;
                        break;
                    }
                }

                if (valueChanged) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                    for (var _i3 = selectedObjects.length - 1; _i3 >= 0; _i3--) {
                        var obj = selectedObjects[_i3];
                        cmdGroup.addSelection(obj.getId());
                        obj.addCommandsForChangedContentRows(contentRows, cmdGroup);
                    }
                    if (!cmdGroup.isEmpty()) {
                        _this2.rb.executeCommand(cmdGroup);
                    }
                }
            });
            elFormField.append(elContentRows);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_footer_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_footer">' + this.rb.getLabel('footer') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elFooterLabel = $('<label class="switch-light switch-material"></label>');
            var elFooter = $('<input id="rbro_doc_element_footer" type="checkbox">').change(function (event) {
                var footerChecked = elFooter.is(":checked");
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'footer', footerChecked, _SetValueCmd2.default.type.checkbox, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
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

            // ---------------------------
            // --- Style Section Begin ---
            // ---------------------------
            var elStyleSectionContainer = $('<div id="rbro_doc_element_style_section_container"></div>');
            var elStyleHeader = $('<div class="rbroPanelSectionHeader"></div>');
            var elStyleHeaderIcon = $('<span id="rbro_doc_element_style_header_icon" class="rbroIcon-minus"></span>');
            elDiv = $('<div id="rbro_doc_element_style_header"\n             class="rbroFormRow rbroPanelSection rbroPanelSectionHeaderOpen"></div>').click(function (event) {
                $('#rbro_doc_element_style_header').toggleClass('rbroPanelSectionHeaderOpen');
                $('#rbro_doc_element_style_section').toggleClass('rbroHidden');
                elStyleHeaderIcon.toggleClass('rbroIcon-plus');
                elStyleHeaderIcon.toggleClass('rbroIcon-minus');
                if (elStyleHeaderIcon.hasClass('rbroIcon-minus')) {
                    var sectionOffset = document.getElementById('rbro_doc_element_style_section_container').offsetTop;
                    $('#rbro_detail_panel').scrollTop(sectionOffset);
                }
            });
            elStyleHeader.append(elStyleHeaderIcon);
            elStyleHeader.append('<span>' + this.rb.getLabel('docElementStyle') + '</span>');
            elDiv.append(elStyleHeader);
            elStyleSectionContainer.append(elDiv);

            var elStyleSectionDiv = $('<div id="rbro_doc_element_style_section"></div>');

            elDiv = $('<div id="rbro_doc_element_color_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_color">' + this.rb.getLabel('docElementColor') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elColorContainer = $('<div class="rbroColorPickerContainer"></div>');
            var elColor = $('<input id="rbro_doc_element_color">').change(function (event) {
                var val = elColor.val();
                if (utils.isValidColor(val)) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                    var selectedObjects = _this2.rb.getSelectedObjects();
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        var obj = selectedObjects[i];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'color', val, _SetValueCmd2.default.type.color, _this2.rb));
                    }
                    if (!cmdGroup.isEmpty()) {
                        _this2.rb.executeCommand(cmdGroup);
                    }
                }
            });
            elColorContainer.append(elColor);
            elFormField.append(elColorContainer);
            elDiv.append(elFormField);
            elStyleSectionDiv.append(elDiv);
            utils.initColorPicker(elColor, this.rb);

            elDiv = $('<div id="rbro_doc_element_style_id_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_style_id">' + this.rb.getLabel('docElementStyle') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            this.elStyle = $('<select id="rbro_doc_element_style_id"></select>').change(function (event) {
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    obj.addCommandsForChangedStyle(_this2.elStyle.val(), '', _this2.propertyDescriptors, cmdGroup);
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(this.elStyle);
            elDiv.append(elFormField);
            elStyleSectionDiv.append(elDiv);

            var elStyleDiv = $('<div id="rbro_doc_element_style_settings"></div>');
            _StylePanel2.default.renderStyle(elStyleDiv, 'doc_element_', '', true, this.rb);
            elStyleSectionDiv.append(elStyleDiv);
            elStyleSectionContainer.append(elStyleSectionDiv);
            panel.append(elStyleSectionContainer);
            // -------------------------
            // --- Style Section End ---
            // -------------------------

            // ---------------------------
            // --- Print Section Begin ---
            // ---------------------------
            var elPrintSectionContainer = $('<div id="rbro_doc_element_print_section_container"></div>');
            var elPrintHeader = $('<div class="rbroPanelSectionHeader"></div>');
            var elPrintHeaderIcon = $('<span id="rbro_doc_element_print_header_icon" class="rbroIcon-plus"></span>');
            elDiv = $('<div id="rbro_doc_element_print_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                $('#rbro_doc_element_print_header').toggleClass('rbroPanelSectionHeaderOpen');
                $('#rbro_doc_element_print_section').toggleClass('rbroHidden');
                elPrintHeaderIcon.toggleClass('rbroIcon-plus');
                elPrintHeaderIcon.toggleClass('rbroIcon-minus');
                if (elPrintHeaderIcon.hasClass('rbroIcon-minus')) {
                    var sectionOffset = document.getElementById('rbro_doc_element_print_section_container').offsetTop;
                    $('#rbro_detail_panel').scrollTop(sectionOffset);
                }
                autosize.update($('#rbro_doc_element_print_if'));
            });
            elPrintHeader.append(elPrintHeaderIcon);
            elPrintHeader.append('<span>' + this.rb.getLabel('docElementPrintSettings') + '</span>');
            elDiv.append(elPrintHeader);
            elPrintSectionContainer.append(elDiv);

            var elPrintSectionDiv = $('<div id="rbro_doc_element_print_section" class="rbroHidden"></div>');

            elDiv = $('<div id="rbro_doc_element_group_expression_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_group_expression">\n                      ' + this.rb.getLabel('docElementGroupExpression') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit rbroSelector"></div>');
            var elGroupExpression = $('<textarea id="rbro_doc_element_group_expression" rows="1"></textarea>').on('input', function (event) {
                var val = elGroupExpression.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'groupExpression', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            }).blur(function (event) {
                _this2.rb.getPopupWindow().hide();
            });
            autosize(elGroupExpression);
            elFormField.append(elGroupExpression);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObjects = _this2.rb.getSelectedObjects();
                // data source parameters are not shown in case multiple objects are selected
                var selectedObject = selectedObjects.length === 1 ? selectedObjects[0] : null;

                _this2.rb.getPopupWindow().show(_this2.rb.getParameterItems(selectedObject), null, 'rbro_doc_element_group_expression', 'groupExpression', _PopupWindow2.default.type.parameterSet);
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_doc_element_group_expression_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_page_break_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_page_break">\n                      ' + this.rb.getLabel('docElementTableBandPageBreak') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elPageBreak = $('<input id="rbro_doc_element_page_break" type="checkbox">').change(function (event) {
                var pageBreakChecked = elPageBreak.is(":checked");
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'pageBreak', pageBreakChecked, _SetValueCmd2.default.type.checkbox, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elPageBreak);
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_print_if_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_print_if">' + this.rb.getLabel('docElementPrintIf') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit rbroSelector"></div>');
            var elPrintIf = $('<textarea id="rbro_doc_element_print_if" rows="1"></textarea>').on('input', function (event) {
                var val = elPrintIf.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'printIf', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            autosize(elPrintIf);
            elFormField.append(elPrintIf);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObjects = _this2.rb.getSelectedObjects();
                // data source parameters are not shown in case multiple objects are selected
                var selectedObject = selectedObjects.length === 1 ? selectedObjects[0] : null;

                _this2.rb.getPopupWindow().show(_this2.rb.getParameterItems(selectedObject), null, 'rbro_doc_element_print_if', 'printIf', _PopupWindow2.default.type.parameterAppend);
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_doc_element_print_if_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_repeat_header_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_repeat_header">\n                      ' + this.rb.getLabel('docElementRepeatHeader') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elRepeatHeader = $('<input id="rbro_doc_element_repeat_header" type="checkbox">').change(function (event) {
                var repeatHeaderChecked = elRepeatHeader.is(":checked");
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'repeatHeader', repeatHeaderChecked, _SetValueCmd2.default.type.checkbox, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elRepeatHeader);
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_remove_empty_element_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_remove_empty_element">\n                      ' + this.rb.getLabel('docElementRemoveEmptyElement') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elRemoveEmptyElement = $('<input id="rbro_doc_element_remove_empty_element" type="checkbox">').change(function (event) {
                var removeEmptyElementChecked = elRemoveEmptyElement.is(":checked");
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'removeEmptyElement', removeEmptyElementChecked, _SetValueCmd2.default.type.checkbox, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elRemoveEmptyElement);
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_always_print_on_same_page_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_always_print_on_same_page">\n                      ' + this.rb.getLabel('docElementAlwaysPrintOnSamePage') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elAlwaysPrintOnSamePage = $('<input id="rbro_doc_element_always_print_on_same_page" type="checkbox">').change(function (event) {
                var alwaysPrintOnSamePageChecked = elAlwaysPrintOnSamePage.is(":checked");
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'alwaysPrintOnSamePage', alwaysPrintOnSamePageChecked, _SetValueCmd2.default.type.checkbox, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elAlwaysPrintOnSamePage);
            elFormField.append('<div id="rbro_doc_element_always_print_on_same_page_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_shrink_to_content_height_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_shrink_to_content_height">\n                      ' + this.rb.getLabel('docElementShrinkToContentHeight') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elShrinkToContentHeight = $('<input id="rbro_doc_element_shrink_to_content_height" type="checkbox">').change(function (event) {
                var shrinkToContentHeightChecked = elShrinkToContentHeight.is(":checked");
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'shrinkToContentHeight', shrinkToContentHeightChecked, _SetValueCmd2.default.type.checkbox, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elShrinkToContentHeight);
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_pattern_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_pattern">' + this.rb.getLabel('docElementPattern') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit rbroSelector"></div>');
            var elPattern = $('<input id="rbro_doc_element_pattern">').on('input', function (event) {
                var val = elPattern.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'pattern', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elPattern);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                _this2.rb.getPopupWindow().show(_this2.rb.getPatterns(), null, 'rbro_doc_element_pattern', 'pattern', _PopupWindow2.default.type.pattern);
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_doc_element_pattern_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_link_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_link">' + this.rb.getLabel('docElementLink') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit rbroSelector"></div>');
            var elLink = $('<input id="rbro_doc_element_link">').on('input', function (event) {
                var val = elLink.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'link', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elLink);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObjects = _this2.rb.getSelectedObjects();
                // data source parameters are not shown in case multiple objects are selected
                var selectedObject = selectedObjects.length === 1 ? selectedObjects[0] : null;

                _this2.rb.getPopupWindow().show(_this2.rb.getParameterItems(selectedObject), null, 'rbro_doc_element_link', 'link', _PopupWindow2.default.type.parameterSet);
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_doc_element_link_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_grow_weight_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_grow_weight">\n                      ' + this.rb.getLabel('docElementGrowWeight') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elGrowWeight = $('<select id="rbro_doc_element_grow_weight">\n                <option value="0">-</option>\n                <option value="1">1 (' + this.rb.getLabel('docElementGrowWeightLow') + ')</option>\n                <option value="2">2</option>\n                <option value="3">3 (' + this.rb.getLabel('docElementGrowWeightHigh') + ')</option>\n            </select>').change(function (event) {
                var val = elGrowWeight.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'growWeight', val, _SetValueCmd2.default.type.select, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elGrowWeight);
            elFormField.append('<div class="rbroInfo">' + this.rb.getLabel('docElementGrowWeightInfo') + '</div>');
            elDiv.append(elFormField);
            elPrintSectionDiv.append(elDiv);

            elPrintSectionContainer.append(elPrintSectionDiv);
            panel.append(elPrintSectionContainer);
            // -------------------------
            // --- Print Section End ---
            // -------------------------

            // ---------------------------------------
            // --- Conditional Style Section Begin ---
            // ---------------------------------------
            var elCsStyleSectionContainer = $('<div id="rbro_doc_element_cs_style_section_container"></div>');
            var elCsStyleHeader = $('<div class="rbroPanelSectionHeader"></div>');
            var elCsStyleHeaderIcon = $('<span id="rbro_doc_element_cs_style_header_icon" class="rbroIcon-plus"></span>');
            elDiv = $('<div id="rbro_doc_element_cs_style_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                $('#rbro_doc_element_cs_style_header').toggleClass('rbroPanelSectionHeaderOpen');
                $('#rbro_doc_element_cs_style_section').toggleClass('rbroHidden');
                elCsStyleHeaderIcon.toggleClass('rbroIcon-plus');
                elCsStyleHeaderIcon.toggleClass('rbroIcon-minus');
                if (elCsStyleHeaderIcon.hasClass('rbroIcon-minus')) {
                    var sectionOffset = document.getElementById('rbro_doc_element_cs_style_section_container').offsetTop;
                    $('#rbro_detail_panel').scrollTop(sectionOffset);
                }
            });
            elCsStyleHeader.append(elCsStyleHeaderIcon);
            elCsStyleHeader.append('<span>' + this.rb.getLabel('docElementConditionalStyle') + '</span>');
            elDiv.append(elCsStyleHeader);
            elCsStyleSectionContainer.append(elDiv);

            var elCsStyleSectionDiv = $('<div id="rbro_doc_element_cs_style_section" class="rbroHidden"></div>');

            elDiv = $('<div id="rbro_doc_element_cs_condition_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_cs_condition">\n                      ' + this.rb.getLabel('docElementConditionalStyleCondition') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit rbroSelector"></div>');
            var elCondStyleCondition = $('<textarea id="rbro_doc_element_cs_condition" rows="1"></textarea>').on('input', function (event) {
                var val = elCondStyleCondition.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'cs_condition', val, _SetValueCmd2.default.type.text, _this2.rb));
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            autosize(elCondStyleCondition);
            elFormField.append(elCondStyleCondition);
            elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObjects = _this2.rb.getSelectedObjects();
                // data source parameters are not shown in case multiple objects are selected
                var selectedObject = selectedObjects.length === 1 ? selectedObjects[0] : null;

                _this2.rb.getPopupWindow().show(_this2.rb.getParameterItems(selectedObject), null, 'rbro_doc_element_cs_condition', 'cs_condition', _PopupWindow2.default.type.parameterAppend);
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_doc_element_cs_condition_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            elCsStyleSectionDiv.append(elDiv);

            elDiv = $('<div id="rbro_doc_element_cs_style_id_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_doc_element_cs_style_id">' + this.rb.getLabel('docElementStyle') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            this.elCsStyle = $('<select id="rbro_doc_element_cs_style_id"></select>').change(function (event) {
                var val = _this2.elCsStyle.val();
                var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                var selectedObjects = _this2.rb.getSelectedObjects();
                for (var i = selectedObjects.length - 1; i >= 0; i--) {
                    var obj = selectedObjects[i];
                    cmdGroup.addSelection(obj.getId());
                    obj.addCommandsForChangedStyle(val, 'cs_', _this2.propertyDescriptors, cmdGroup);
                }
                if (!cmdGroup.isEmpty()) {
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(this.elCsStyle);
            elDiv.append(elFormField);
            elCsStyleSectionDiv.append(elDiv);

            var elCsStyleDiv = $('<div id="rbro_doc_element_cs_style_settings"></div>');
            _StylePanel2.default.renderStyle(elCsStyleDiv, 'doc_element_cs_', 'cs_', false, this.rb);
            elCsStyleSectionDiv.append(elCsStyleDiv);
            elCsStyleSectionContainer.append(elCsStyleSectionDiv);
            panel.append(elCsStyleSectionContainer);
            // -------------------------------------
            // --- Conditional Style Section End ---
            // -------------------------------------

            if (this.rb.getProperty('enableSpreadsheet')) {
                // ---------------------------------
                // --- Spreadsheet Section Begin ---
                // ---------------------------------
                var elSpreadsheetSectionContainer = $('<div id="rbro_doc_element_spreadsheet_section_container"></div>');
                var elSpreadsheetHeader = $('<div class="rbroPanelSectionHeader"></div>');
                var elSpreadsheetHeaderIcon = $('<span id="rbro_doc_element_spreadsheet_header_icon" class="rbroIcon-plus"></span>');
                elDiv = $('<div id="rbro_doc_element_spreadsheet_header" class="rbroFormRow rbroPanelSection"></div>').click(function (event) {
                    $('#rbro_doc_element_spreadsheet_header').toggleClass('rbroPanelSectionHeaderOpen');
                    $('#rbro_doc_element_spreadsheet_section').toggleClass('rbroHidden');
                    elSpreadsheetHeaderIcon.toggleClass('rbroIcon-plus');
                    elSpreadsheetHeaderIcon.toggleClass('rbroIcon-minus');
                    if (elSpreadsheetHeaderIcon.hasClass('rbroIcon-minus')) {
                        var sectionOffset = document.getElementById('rbro_doc_element_spreadsheet_section_container').offsetTop;
                        $('#rbro_detail_panel').scrollTop(sectionOffset);
                    }
                });
                elSpreadsheetHeader.append(elSpreadsheetHeaderIcon);
                elSpreadsheetHeader.append('<span>' + this.rb.getLabel('docElementSpreadsheet') + '</span>');
                elDiv.append(elSpreadsheetHeader);
                elSpreadsheetSectionContainer.append(elDiv);

                var elSpreadsheetSectionDiv = $('<div id="rbro_doc_element_spreadsheet_section" class="rbroHidden"></div>');
                elDiv = $('<div id="rbro_doc_element_spreadsheet_hide_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_doc_element_spreadsheet_hide">\n                          ' + this.rb.getLabel('docElementSpreadsheetHide') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetHide = $('<input id="rbro_doc_element_spreadsheet_hide" type="checkbox">').change(function (event) {
                    var spreadsheetHideChecked = elSpreadsheetHide.is(":checked");
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                    var selectedObjects = _this2.rb.getSelectedObjects();
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        var obj = selectedObjects[i];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'spreadsheet_hide', spreadsheetHideChecked, _SetValueCmd2.default.type.checkbox, _this2.rb));
                    }
                    if (!cmdGroup.isEmpty()) {
                        _this2.rb.executeCommand(cmdGroup);
                    }
                });
                elFormField.append(elSpreadsheetHide);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_doc_element_spreadsheet_column_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_doc_element_spreadsheet_column">\n                          ' + this.rb.getLabel('docElementSpreadsheetColumn') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetColumn = $('<input id="rbro_doc_element_spreadsheet_column" type="number">').on('input', function (event) {
                    var val = elSpreadsheetColumn.val();
                    if (val !== '') {
                        val = utils.checkInputDecimal(val, 1, 99);
                    }
                    if (val !== elSpreadsheetColumn.val()) {
                        elSpreadsheetColumn.val(val);
                    }
                    var selectedObjects = _this2.rb.getSelectedObjects();
                    var valueChanged = false;
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        if (selectedObjects[i].getValue('spreadsheet_column') !== val) {
                            valueChanged = true;
                            break;
                        }
                    }

                    if (valueChanged) {
                        var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                        for (var _i4 = selectedObjects.length - 1; _i4 >= 0; _i4--) {
                            var obj = selectedObjects[_i4];
                            cmdGroup.addSelection(obj.getId());
                            cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'spreadsheet_column', val, _SetValueCmd2.default.type.text, _this2.rb));
                        }
                        if (!cmdGroup.isEmpty()) {
                            _this2.rb.executeCommand(cmdGroup);
                        }
                    }
                });
                elFormField.append(elSpreadsheetColumn);
                elFormField.append('<div id="rbro_doc_element_spreadsheet_column_error" class="rbroErrorMessage"></div>');
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_doc_element_spreadsheet_colspan_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_doc_element_spreadsheet_colspan">\n                          ' + this.rb.getLabel('docElementSpreadsheetColspan') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetColspan = $('<input id="rbro_doc_element_spreadsheet_colspan" type="number">').on('input', function (event) {
                    var val = elSpreadsheetColspan.val();
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                    var selectedObjects = _this2.rb.getSelectedObjects();
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        var obj = selectedObjects[i];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'spreadsheet_colspan', val, _SetValueCmd2.default.type.text, _this2.rb));
                    }
                    if (!cmdGroup.isEmpty()) {
                        _this2.rb.executeCommand(cmdGroup);
                    }
                });
                elFormField.append(elSpreadsheetColspan);
                elFormField.append('<div id="rbro_doc_element_spreadsheet_colspan_error" class="rbroErrorMessage"></div>');
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_doc_element_spreadsheet_add_empty_row_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_doc_element_spreadsheet_add_empty_row">\n                          ' + this.rb.getLabel('docElementSpreadsheetAddEmptyRow') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetAddEmptyRow = $('<input id="rbro_doc_element_spreadsheet_add_empty_row" type="checkbox">').change(function (event) {
                    var spreadsheetAddEmptyRowChecked = elSpreadsheetAddEmptyRow.is(":checked");
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                    var selectedObjects = _this2.rb.getSelectedObjects();
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        var obj = selectedObjects[i];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'spreadsheet_addEmptyRow', spreadsheetAddEmptyRowChecked, _SetValueCmd2.default.type.checkbox, _this2.rb));
                    }
                    if (!cmdGroup.isEmpty()) {
                        _this2.rb.executeCommand(cmdGroup);
                    }
                });
                elFormField.append(elSpreadsheetAddEmptyRow);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elDiv = $('<div id="rbro_doc_element_spreadsheet_text_wrap_row" class="rbroFormRow"></div>');
                elDiv.append('<label for="rbro_doc_element_spreadsheet_text_wrap">\n                          ' + this.rb.getLabel('docElementSpreadsheetTextWrap') + ':</label>');
                elFormField = $('<div class="rbroFormField"></div>');
                var elSpreadsheetTextWrap = $('<input id="rbro_doc_element_spreadsheet_text_wrap" type="checkbox">').change(function (event) {
                    var spreadsheetTextWrapChecked = elSpreadsheetTextWrap.is(":checked");
                    var cmdGroup = new _CommandGroupCmd2.default('Set value', _this2.rb);
                    var selectedObjects = _this2.rb.getSelectedObjects();
                    for (var i = selectedObjects.length - 1; i >= 0; i--) {
                        var obj = selectedObjects[i];
                        cmdGroup.addSelection(obj.getId());
                        cmdGroup.addCommand(new _SetValueCmd2.default(obj.getId(), 'spreadsheet_textWrap', spreadsheetTextWrapChecked, _SetValueCmd2.default.type.checkbox, _this2.rb));
                    }
                    if (!cmdGroup.isEmpty()) {
                        _this2.rb.executeCommand(cmdGroup);
                    }
                });
                elFormField.append(elSpreadsheetTextWrap);
                elDiv.append(elFormField);
                elSpreadsheetSectionDiv.append(elDiv);

                elSpreadsheetSectionContainer.append(elSpreadsheetSectionDiv);
                panel.append(elSpreadsheetSectionContainer);
                // -------------------------------
                // --- Spreadsheet Section End ---
                // -------------------------------
            }

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'renderStyleSelect',
        value: function renderStyleSelect() {
            this.elStyle.empty();
            this.elCsStyle.empty();
            this.elStyle.append('<option value="">' + this.rb.getLabel('styleNone') + '</option>');
            this.elCsStyle.append('<option value="">' + this.rb.getLabel('styleNone') + '</option>');
            var styles = this.rb.getStyles();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(styles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var style = _step.value;

                    this.elStyle.append('<option value="' + style.getId() + '">' + style.getName() + '</option>');
                    this.elCsStyle.append('<option value="' + style.getId() + '">' + style.getName() + '</option>');
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

        /**
         * Is called when the ReportBro instance is deleted and should be used
         * to cleanup elements and event handlers.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            $('#rbro_doc_element_color').spectrum('destroy');
            _StylePanel2.default.destroyStyle('doc_element_');
            _StylePanel2.default.destroyStyle('doc_element_cs_');
        }

        /**
         * Is called when the selection is changed or the selected element was changed.
         * The panel is updated to show the values of the selected data objects.
         * @param {String} [field] - affected field in case of change operation.
         */

    }, {
        key: 'updateDisplay',
        value: function updateDisplay(field) {
            var selectedObjects = this.rb.getSelectedObjects();

            var sectionPropertyCount = {};
            var sharedProperties = {};
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = (0, _getIterator3.default)(selectedObjects), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _obj3 = _step2.value;

                    var properties = _obj3.getProperties();
                    var _iteratorNormalCompletion7 = true;
                    var _didIteratorError7 = false;
                    var _iteratorError7 = undefined;

                    try {
                        for (var _iterator7 = (0, _getIterator3.default)(properties), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                            var _property2 = _step7.value;

                            if (_property2 in sharedProperties) {
                                sharedProperties[_property2] += 1;
                            } else {
                                sharedProperties[_property2] = 1;
                            }
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

                // show/hide property depending if it is available in all selected objects
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

            for (var property in this.propertyDescriptors) {
                if (this.propertyDescriptors.hasOwnProperty(property)) {
                    var propertyDescriptor = this.propertyDescriptors[property];
                    if (field === null || property === field || 'visibleIf' in propertyDescriptor && propertyDescriptor['visibleIf'] === field) {
                        var show = false;
                        if (property in sharedProperties) {
                            if (sharedProperties[property] === selectedObjects.length) {
                                var value = null;
                                var differentValues = false;
                                var _iteratorNormalCompletion3 = true;
                                var _didIteratorError3 = false;
                                var _iteratorError3 = undefined;

                                try {
                                    for (var _iterator3 = (0, _getIterator3.default)(selectedObjects), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                        var obj = _step3.value;

                                        var objValue = obj.getUpdateValue(property, obj.getValue(property));
                                        if (value === null) {
                                            value = objValue;
                                        } else if (objValue !== value) {
                                            differentValues = true;
                                            break;
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

                                if (differentValues && propertyDescriptor['type'] === _SetValueCmd2.default.type.select && propertyDescriptor['allowEmpty']) {
                                    // if values are different and dropdown has empty option then select
                                    // empty dropdown option
                                    value = '';
                                }
                                (0, _get3.default)(DocElementPanel.prototype.__proto__ || (0, _getPrototypeOf2.default)(DocElementPanel.prototype), 'setValue', this).call(this, propertyDescriptor, value, differentValues);

                                if ('section' in propertyDescriptor) {
                                    var sectionName = propertyDescriptor['section'];
                                    if (sectionName in sectionPropertyCount) {
                                        sectionPropertyCount[sectionName] += 1;
                                    } else {
                                        sectionPropertyCount[sectionName] = 1;
                                    }
                                }
                                show = true;
                            } else {
                                delete sharedProperties[property];
                            }
                        }

                        if (show && 'visibleIf' in propertyDescriptor) {
                            var visibleIfField = propertyDescriptor['visibleIf'];
                            var _iteratorNormalCompletion4 = true;
                            var _didIteratorError4 = false;
                            var _iteratorError4 = undefined;

                            try {
                                for (var _iterator4 = (0, _getIterator3.default)(selectedObjects), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                    var _obj2 = _step4.value;

                                    if (!_obj2.getValue(visibleIfField)) {
                                        show = false;
                                        break;
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
                        }

                        if ('singleRowProperty' in propertyDescriptor && !propertyDescriptor['singleRowProperty']) {
                            // only handle visibility of control and not of whole row.
                            // row visibility will be handled below, e.g. for button groups
                            var propertyId = '#rbro_doc_element_' + propertyDescriptor['fieldId'];
                            if (show) {
                                $(propertyId).removeClass('rbroHidden');
                            } else {
                                $(propertyId).addClass('rbroHidden');
                            }
                        } else {
                            var rowId = this.getRowId(propertyDescriptor);
                            if (show) {
                                $('#' + rowId).removeClass('rbroHidden');
                            } else {
                                $('#' + rowId).addClass('rbroHidden');
                            }
                        }
                    }
                }
            }

            if (field === null) {
                // only update labels, visible rows and sections if selection was changed (no specific field update)

                // sharedProperties now only contains properties shared by all objects

                for (var _property in this.propertyDescriptors) {
                    if (this.propertyDescriptors.hasOwnProperty(_property)) {
                        var _propertyDescriptor = this.propertyDescriptors[_property];
                        if ('rowId' in _propertyDescriptor && 'rowProperties' in _propertyDescriptor) {
                            var shownPropertyCount = 0;
                            var _iteratorNormalCompletion5 = true;
                            var _didIteratorError5 = false;
                            var _iteratorError5 = undefined;

                            try {
                                for (var _iterator5 = (0, _getIterator3.default)(_propertyDescriptor['rowProperties']), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                    var _rowProperty = _step5.value;

                                    if (_rowProperty in sharedProperties) {
                                        shownPropertyCount++;
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

                            if ('labelId' in _propertyDescriptor) {
                                var label = _propertyDescriptor['defaultLabel'];
                                if (shownPropertyCount === 1) {
                                    // get label of single property shown in this property group, e.g. label
                                    // is changed to "Width" instead of "Size (Width, Height)" if only width property
                                    // is shown and not both width and height.
                                    var _iteratorNormalCompletion6 = true;
                                    var _didIteratorError6 = false;
                                    var _iteratorError6 = undefined;

                                    try {
                                        for (var _iterator6 = (0, _getIterator3.default)(_propertyDescriptor['rowProperties']), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                            var rowProperty = _step6.value;

                                            if (rowProperty in sharedProperties) {
                                                label = this.propertyDescriptors[rowProperty]['singlePropertyLabel'];
                                                break;
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
                                }
                                $('#' + _propertyDescriptor['labelId']).text(this.rb.getLabel(label) + ':');
                            }
                            if (shownPropertyCount > 0) {
                                $('#' + _propertyDescriptor['rowId']).removeClass('rbroHidden');
                            } else {
                                $('#' + _propertyDescriptor['rowId']).addClass('rbroHidden');
                            }
                        }
                    }
                }

                // show section if there is at least one property shown in section
                var _arr = ['style', 'print', 'cs_style', 'spreadsheet'];
                for (var _i5 = 0; _i5 < _arr.length; _i5++) {
                    var section = _arr[_i5];
                    if (section in sectionPropertyCount) {
                        $('#rbro_doc_element_' + section + '_section_container').removeClass('rbroHidden');
                    } else {
                        $('#rbro_doc_element_' + section + '_section_container').addClass('rbroHidden');
                    }
                }
            }

            DocElementPanel.updateAutosizeInputs(field);
        }
    }, {
        key: 'show',
        value: function show() {
            this.renderStyleSelect();
            (0, _get3.default)(DocElementPanel.prototype.__proto__ || (0, _getPrototypeOf2.default)(DocElementPanel.prototype), 'show', this).call(this);
        }

        /**
         * Is called when a data object was modified (including new and deleted data objects).
         * @param {*} obj - new/deleted/modified data object.
         * @param {String} operation - operation which caused the notification.
         * @param {String} [field] - affected field in case of change operation.
         */

    }, {
        key: 'notifyEvent',
        value: function notifyEvent(obj, operation, field) {
            if (obj instanceof _Style2.default) {
                if (operation === _Command2.default.operation.add || operation === _Command2.default.operation.remove || operation === _Command2.default.operation.move || operation === _Command2.default.operation.change && field === 'name') {
                    this.renderStyleSelect();
                }
            } else {
                (0, _get3.default)(DocElementPanel.prototype.__proto__ || (0, _getPrototypeOf2.default)(DocElementPanel.prototype), 'notifyEvent', this).call(this, obj, operation, field);
            }
        }
    }], [{
        key: 'updateAutosizeInputs',
        value: function updateAutosizeInputs(field) {
            if (field === null || field === 'dataSource') {
                autosize.update($('#rbro_doc_element_data_source'));
            }
            if (field === null || field === 'content') {
                autosize.update($('#rbro_doc_element_content'));
            }
            if (field === null || field === 'source') {
                autosize.update($('#rbro_doc_element_source'));
            }
            if (field === null || field === 'expression') {
                autosize.update($('#rbro_doc_element_group_expression'));
            }
            if (field === null || field === 'printIf') {
                autosize.update($('#rbro_doc_element_print_if'));
            }
        }
    }]);
    return DocElementPanel;
}(_PanelBase3.default);

exports.default = DocElementPanel;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _PanelBase2 = __webpack_require__(31);

var _PanelBase3 = _interopRequireDefault(_PanelBase2);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _DocumentProperties = __webpack_require__(43);

var _DocumentProperties2 = _interopRequireDefault(_DocumentProperties);

var _utils = __webpack_require__(6);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all document properties.
 * @class
 */
var DocumentPropertiesPanel = function (_PanelBase) {
    (0, _inherits3.default)(DocumentPropertiesPanel, _PanelBase);

    function DocumentPropertiesPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, DocumentPropertiesPanel);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DocumentPropertiesPanel.__proto__ || (0, _getPrototypeOf2.default)(DocumentPropertiesPanel)).call(this, 'rbro_document_properties', _DocumentProperties2.default, rootElement, rb));

        _this.propertyDescriptors = {
            'pageFormat': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'page_format'
            },
            'pageWidth': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'page_width'
            },
            'pageHeight': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'page_height'
            },
            'unit': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'unit'
            },
            'orientation': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'orientation'
            },
            'contentHeight': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'content_height'
            },
            'marginLeft': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'page_margin_left'
            },
            'marginTop': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'page_margin_top'
            },
            'marginRight': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'page_margin_right'
            },
            'marginBottom': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'page_margin_bottom'
            },
            'header': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'header'
            },
            'headerSize': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'header_size'
            },
            'headerDisplay': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'header_display'
            },
            'footer': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'footer'
            },
            'footerSize': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'footer_size'
            },
            'footerDisplay': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'footer_display'
            },
            'patternLocale': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'pattern_locale'
            },
            'patternCurrencySymbol': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'pattern_currency_symbol'
            }
        };
        return _this;
    }

    (0, _createClass3.default)(DocumentPropertiesPanel, [{
        key: 'render',
        value: function render(data) {
            var _this2 = this;

            var panel = $('<div id="rbro_document_properties_panel" class="rbroHidden"></div>');
            var elDiv = $('<div id="rbro_document_properties_page_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_page_format">' + this.rb.getLabel('pageFormat') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elPageFormat = $('<select id="rbro_document_properties_page_format">\n                <option value="A4">' + this.rb.getLabel('pageFormatA4') + '</option>\n                <option value="A5">' + this.rb.getLabel('pageFormatA5') + '</option>\n                <option value="letter">' + this.rb.getLabel('pageFormatLetter') + '</option>\n                <option value="user_defined">' + this.rb.getLabel('pageFormatUserDefined') + '</option>\n            </select>').change(function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'pageFormat', elPageFormat.val(), _SetValueCmd2.default.type.select, _this2.rb);
                    _this2.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elPageFormat);

            var elPageSizeDiv = $('<div id="rbro_document_properties_page_size_row" class="rbroTripleSplit"></div>');
            var elPageWidth = $('<input id="rbro_document_properties_page_width" maxlength="5">').change(function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'pageWidth', elPageWidth.val(), _SetValueCmd2.default.type.select, _this2.rb);
                    _this2.rb.executeCommand(cmd);
                }
            });
            utils.setInputPositiveInteger(elPageWidth);
            elPageSizeDiv.append(elPageWidth);
            var elPageHeight = $('<input id="rbro_document_properties_page_height" maxlength="5">').change(function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'pageHeight', elPageHeight.val(), _SetValueCmd2.default.type.text, _this2.rb);
                    _this2.rb.executeCommand(cmd);
                }
            });
            utils.setInputPositiveInteger(elPageHeight);
            elPageSizeDiv.append(elPageHeight);
            var elUnit = $('<select id="rbro_document_properties_unit">\n            <option value="mm">mm</option>\n            <option value="inch">inch</option>\n        </select>').change(function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'unit', elUnit.val(), _SetValueCmd2.default.type.select, _this2.rb);
                    _this2.rb.executeCommand(cmd);
                }
            });
            elPageSizeDiv.append(elUnit);
            elFormField.append(elPageSizeDiv);
            elFormField.append('<div id="rbro_document_properties_page_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_orientation">' + this.rb.getLabel('orientation') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elOrientation = $('<select id="rbro_document_properties_orientation">\n                <option value="portrait">' + this.rb.getLabel('orientationPortrait') + '</option>\n                <option value="landscape">' + this.rb.getLabel('orientationLandscape') + '</option>\n            </select>').change(function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'orientation', elOrientation.val(), _SetValueCmd2.default.type.select, _this2.rb);
                    _this2.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elOrientation);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_content_height">' + this.rb.getLabel('contentHeight') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elContentHeight = $('<input id="rbro_document_properties_content_height">').change(function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'contentHeight', elContentHeight.val(), _SetValueCmd2.default.type.text, _this2.rb);
                    _this2.rb.executeCommand(cmd);
                }
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
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'patternLocale', elPatternLocale.val(), _SetValueCmd2.default.type.select, _this2.rb);
                    _this2.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elPatternLocale);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_pattern_currency_symbol">' + this.rb.getLabel('patternCurrencySymbol') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elPatternCurrencySymbol = $('<input id="rbro_document_properties_pattern_currency_symbol">').change(function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'patternCurrencySymbol', elPatternCurrencySymbol.val(), _SetValueCmd2.default.type.text, _this2.rb);
                    _this2.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elPatternCurrencySymbol);
            elDiv.append(elFormField);
            panel.append(elDiv);

            $('#rbro_detail_panel').append(panel);
        }
    }, {
        key: 'renderMarginControls',
        value: function renderMarginControls(panel) {
            var _this3 = this;

            var elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_page_margin_top">' + this.rb.getLabel('pageMargins') + ':</label>');
            var elFormField = $('<div class="rbroFormField rbroSmallInput"></div>');

            var elMarginTopDiv = $('<div class="rbroColumnCenter"></div>');
            var elMarginTop = $('<input id="rbro_document_properties_page_margin_top" placeholder="' + this.rb.getLabel('orientationTop') + '">').change(function (event) {
                var selectedObject = _this3.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'marginTop', elMarginTop.val(), _SetValueCmd2.default.type.text, _this3.rb);
                    _this3.rb.executeCommand(cmd);
                }
            });
            utils.setInputPositiveInteger(elMarginTop);
            elMarginTopDiv.append(elMarginTop);
            elFormField.append(elMarginTopDiv);

            var elDiv2 = $('<div class="rbroSplit"></div>');
            var elMarginLeft = $('<input id="rbro_document_properties_page_margin_left" placeholder="' + this.rb.getLabel('orientationLeft') + '">').change(function (event) {
                var selectedObject = _this3.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'marginLeft', elMarginLeft.val(), _SetValueCmd2.default.type.text, _this3.rb);
                    _this3.rb.executeCommand(cmd);
                }
            });
            utils.setInputPositiveInteger(elMarginLeft);
            elDiv2.append(elMarginLeft);
            var elMarginRight = $('<input id="rbro_document_properties_page_margin_right" placeholder="' + this.rb.getLabel('orientationRight') + '">').change(function (event) {
                var selectedObject = _this3.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'marginRight', elMarginRight.val(), _SetValueCmd2.default.type.text, _this3.rb);
                    _this3.rb.executeCommand(cmd);
                }
            });
            utils.setInputPositiveInteger(elMarginRight);
            elDiv2.append(elMarginRight);
            elFormField.append(elDiv2);

            var elMarginBottomDiv = $('<div class="rbroColumnCenter"></div>');
            var elMarginBottom = $('<input id="rbro_document_properties_page_margin_bottom" placeholder="' + this.rb.getLabel('orientationBottom') + '">').change(function (event) {
                var selectedObject = _this3.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'marginBottom', elMarginBottom.val(), _SetValueCmd2.default.type.text, _this3.rb);
                    _this3.rb.executeCommand(cmd);
                }
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
            var _this4 = this;

            var elHeaderDiv = $('<div class="rbroFormRowContainer"></div>');
            var elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_header">' + this.rb.getLabel('header') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elHeaderLabel = $('<label class="switch-light switch-material"></label>');
            var elHeader = $('<input id="rbro_document_properties_header" type="checkbox">').change(function (event) {
                var selectedObject = _this4.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'header', elHeader.is(":checked"), _SetValueCmd2.default.type.checkbox, _this4.rb);
                    _this4.rb.executeCommand(cmd);
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
            elHeaderDiv.append(elDiv);
            var elHeaderSettings = $('<div id="rbro_document_properties_header_settings"></div>');
            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_header_size">' + this.rb.getLabel('headerSize') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elHeaderSize = $('<input id="rbro_document_properties_header_size">').change(function (event) {
                var selectedObject = _this4.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'headerSize', elHeaderSize.val(), _SetValueCmd2.default.type.text, _this4.rb);
                    _this4.rb.executeCommand(cmd);
                }
            });
            utils.setInputPositiveInteger(elHeaderSize);
            elFormField.append(elHeaderSize);
            elDiv.append(elFormField);
            elHeaderSettings.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_header_display">' + this.rb.getLabel('headerDisplay') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elHeaderDisplay = $('<select id="rbro_document_properties_header_display">\n                <option value="always">' + this.rb.getLabel('headerFooterDisplayAlways') + '</option>\n                <option value="not_on_first_page">' + this.rb.getLabel('headerFooterDisplayNotOnFirstPage') + '</option>\n            </select>').change(function (event) {
                var selectedObject = _this4.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'headerDisplay', elHeaderDisplay.val(), _SetValueCmd2.default.type.select, _this4.rb);
                    _this4.rb.executeCommand(cmd);
                }
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
                var selectedObject = _this4.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'footer', elFooter.is(":checked"), _SetValueCmd2.default.type.checkbox, _this4.rb);
                    _this4.rb.executeCommand(cmd);
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
            elFooterDiv.append(elDiv);
            var elFooterSettings = $('<div id="rbro_document_properties_footer_settings"></div>');
            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_footer_size">' + this.rb.getLabel('footerSize') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elFooterSize = $('<input id="rbro_document_properties_footer_size">').change(function (event) {
                var selectedObject = _this4.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'footerSize', elFooterSize.val(), _SetValueCmd2.default.type.text, _this4.rb);
                    _this4.rb.executeCommand(cmd);
                }
            });
            utils.setInputPositiveInteger(elFooterSize);
            elFormField.append(elFooterSize);
            elDiv.append(elFormField);
            elFooterSettings.append(elDiv);

            elDiv = $('<div class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_document_properties_footer_display">' + this.rb.getLabel('footerDisplay') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elFooterDisplay = $('<select id="rbro_document_properties_footer_display">\n                <option value="always">' + this.rb.getLabel('headerFooterDisplayAlways') + '</option>\n                <option value="not_on_first_page">' + this.rb.getLabel('headerFooterDisplayNotOnFirstPage') + '</option>\n            </select>').change(function (event) {
                var selectedObject = _this4.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'footerDisplay', elFooterDisplay.val(), _SetValueCmd2.default.type.select, _this4.rb);
                    _this4.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elFooterDisplay);
            elDiv.append(elFormField);
            elFooterSettings.append(elDiv);
            elFooterDiv.append(elFooterSettings);
            panel.append(elFooterDiv);
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {DocumentProperties} obj - currently selected object.
         * @param {String} [field] - affected field in case of change operation.
         */

    }, {
        key: 'updateDisplay',


        /**
         * Is called when the selection is changed or the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {[String]} field - affected field in case of change operation.
         */
        value: function updateDisplay(field) {
            var selectedObject = this.rb.getSelectedObject();

            if (selectedObject !== null && selectedObject instanceof _DocumentProperties2.default) {
                for (var property in this.propertyDescriptors) {
                    if (this.propertyDescriptors.hasOwnProperty(property) && (field === null || property === field)) {
                        var propertyDescriptor = this.propertyDescriptors[property];
                        var value = selectedObject.getValue(property);
                        (0, _get3.default)(DocumentPropertiesPanel.prototype.__proto__ || (0, _getPrototypeOf2.default)(DocumentPropertiesPanel.prototype), 'setValue', this).call(this, propertyDescriptor, value, false);
                    }
                }

                DocumentPropertiesPanel.updateVisibileRows(selectedObject, field);
            }
        }
    }], [{
        key: 'updateVisibileRows',
        value: function updateVisibileRows(obj, field) {
            if (field === null || field === 'pageFormat') {
                if (obj.getValue('pageFormat') === _DocumentProperties2.default.pageFormat.userDefined) {
                    $('#rbro_document_properties_page_size_row').show();
                } else {
                    $('#rbro_document_properties_page_size_row').hide();
                }
            }
            if (field === null || field === 'header') {
                if (obj.getValue('header')) {
                    $('#rbro_document_properties_header_settings').show();
                } else {
                    $('#rbro_document_properties_header_settings').hide();
                }
            }
            if (field === null || field === 'footer') {
                if (obj.getValue('footer')) {
                    $('#rbro_document_properties_footer_settings').show();
                } else {
                    $('#rbro_document_properties_footer_settings').hide();
                }
            }
        }
    }]);
    return DocumentPropertiesPanel;
}(_PanelBase3.default);

exports.default = DocumentPropertiesPanel;

/***/ }),
/* 96 */
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
        key: 'destroy',
        value: function destroy() {}
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(8);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(9);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(3);

var _inherits3 = _interopRequireDefault(_inherits2);

var _PanelBase2 = __webpack_require__(31);

var _PanelBase3 = _interopRequireDefault(_PanelBase2);

var _CommandGroupCmd = __webpack_require__(15);

var _CommandGroupCmd2 = _interopRequireDefault(_CommandGroupCmd);

var _SetValueCmd = __webpack_require__(7);

var _SetValueCmd2 = _interopRequireDefault(_SetValueCmd);

var _Parameter = __webpack_require__(13);

var _Parameter2 = _interopRequireDefault(_Parameter);

var _PopupWindow = __webpack_require__(40);

var _PopupWindow2 = _interopRequireDefault(_PopupWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel to edit all parameter properties.
 * @class
 */
var ParameterPanel = function (_PanelBase) {
    (0, _inherits3.default)(ParameterPanel, _PanelBase);

    function ParameterPanel(rootElement, rb) {
        (0, _classCallCheck3.default)(this, ParameterPanel);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ParameterPanel.__proto__ || (0, _getPrototypeOf2.default)(ParameterPanel)).call(this, 'rbro_parameter', _Parameter2.default, rootElement, rb));

        _this.propertyDescriptors = {
            'name': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'name'
            },
            'type': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'type'
            },
            'arrayItemType': {
                'type': _SetValueCmd2.default.type.select,
                'fieldId': 'array_item_type'
            },
            'eval': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'eval'
            },
            'nullable': {
                'type': _SetValueCmd2.default.type.checkbox,
                'fieldId': 'nullable'
            },
            'pattern': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'pattern'
            },
            'expression': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'expression'
            },
            'testData': {
                'type': _SetValueCmd2.default.type.text,
                'fieldId': 'test_data'
            }
        };
        _this.parameterTypeOptions = [];
        return _this;
    }

    (0, _createClass3.default)(ParameterPanel, [{
        key: 'render',
        value: function render(data) {
            var _this2 = this;

            var panel = $('<div id="rbro_parameter_panel" class="rbroHidden"></div>');
            var elDiv = $('<div id="rbro_parameter_name_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_parameter_name">' + this.rb.getLabel('parameterName') + ':</label>');
            var elFormField = $('<div class="rbroFormField"></div>');
            var elParameterName = $('<input id="rbro_parameter_name">').on('input', function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var newParameterName = elParameterName.val();
                    var cmdGroup = new _CommandGroupCmd2.default('Rename parameter');
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'name', newParameterName, _SetValueCmd2.default.type.text, _this2.rb);
                    cmdGroup.addCommand(cmd);
                    var parent = selectedObject.getParent();
                    if (parent !== null) {
                        parent.addUpdateTestDataCmdForChangedParameter(selectedObject.getName(), newParameterName, cmdGroup);
                    }

                    var parentPanelItem = null;
                    if (parent !== null) {
                        parentPanelItem = parent.getPanelItem();
                    } else {
                        parentPanelItem = _this2.rb.getMainPanel().getParametersItem();
                    }

                    // only update parameter references on name change if the parameter name is unique
                    if (parentPanelItem !== null && parentPanelItem.getChildByNameExclude(selectedObject.getName(), selectedObject) === null && parentPanelItem.getChildByNameExclude(newParameterName, selectedObject) === null) {
                        // add commands to convert all values containing the currently changed parameter
                        var docElements = _this2.rb.getDocElements(true);
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = (0, _getIterator3.default)(docElements), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var docElement = _step.value;

                                docElement.addCommandsForChangedParameterName(selectedObject, newParameterName, cmdGroup);
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

                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = (0, _getIterator3.default)(_this2.rb.getParameters()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var parameter = _step2.value;

                                parameter.addCommandsForChangedParameterName(selectedObject, newParameterName, cmdGroup);
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
                    _this2.rb.executeCommand(cmdGroup);
                }
            });
            elFormField.append(elParameterName);
            elFormField.append('<div id="rbro_parameter_name_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div id="rbro_parameter_type_row" class="rbroFormRow"></div>');
            elDiv.append('<label for="rbro_parameter_type">' + this.rb.getLabel('parameterType') + ':</label>');
            elFormField = $('<div class="rbroFormField"></div>');
            var elType = $('<select id="rbro_parameter_type"></select>').change(function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmdGroup = new _CommandGroupCmd2.default('Set parameter type');
                    var parameterType = elType.val();
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'type', parameterType, _SetValueCmd2.default.type.select, _this2.rb);
                    cmdGroup.addCommand(cmd);
                    selectedObject.addCommandsForChangedParameterType(parameterType, cmdGroup);
                    _this2.rb.executeCommand(cmdGroup);
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
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'arrayItemType', elArrayItemType.val(), _SetValueCmd2.default.type.select, _this2.rb);
                    _this2.rb.executeCommand(cmd);
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
                    var selectedObject = _this2.rb.getSelectedObject();
                    if (selectedObject !== null) {
                        var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'eval', elEval.is(":checked"), _SetValueCmd2.default.type.checkbox, _this2.rb);
                        _this2.rb.executeCommand(cmd);
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
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'nullable', elNullable.is(":checked"), _SetValueCmd2.default.type.checkbox, _this2.rb);
                    _this2.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elNullable);
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow" id="rbro_parameter_pattern_row"></div>');
            elDiv.append('<label for="rbro_parameter_pattern">' + this.rb.getLabel('parameterPattern') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit rbroSelector"></div>');
            var elPattern = $('<input id="rbro_parameter_pattern">').on('input', function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'pattern', elPattern.val(), _SetValueCmd2.default.type.text, _this2.rb);
                    _this2.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elPattern);
            var elParameterButton = $('<div class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var patterns = void 0;
                    var type = selectedObject.getValue('type');
                    var valueType = type === _Parameter2.default.type.simpleArray ? selectedObject.getValue('arrayItemType') : type;
                    if (valueType === _Parameter2.default.type.date) {
                        patterns = _this2.rb.getProperty('patternDates');
                    } else {
                        patterns = _this2.rb.getProperty('patternNumbers');
                    }
                    _this2.rb.getPopupWindow().show(patterns, selectedObject.getId(), 'rbro_parameter_pattern', 'pattern', _PopupWindow2.default.type.pattern);
                }
            });
            elFormField.append(elParameterButton);
            elFormField.append('<div id="rbro_parameter_pattern_error" class="rbroErrorMessage"></div>');
            elDiv.append(elFormField);
            panel.append(elDiv);

            elDiv = $('<div class="rbroFormRow" id="rbro_parameter_expression_row"></div>');
            elDiv.append('<label for="rbro_parameter_expression">' + this.rb.getLabel('parameterExpression') + ':</label>');
            elFormField = $('<div class="rbroFormField rbroSplit rbroSelector"></div>');
            var elExpression = $('<textarea id="rbro_parameter_expression" rows="1"></textarea>').on('input', function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'expression', elExpression.val(), _SetValueCmd2.default.type.text, _this2.rb);
                    _this2.rb.executeCommand(cmd);
                }
            });
            autosize(elExpression);
            elFormField.append(elExpression);
            elParameterButton = $('<div id="rbro_parameter_expression_param_button"\n        class="rbroButton rbroRoundButton rbroIcon-select"></div>').click(function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var items = void 0,
                        popupType = void 0;
                    if (selectedObject.getValue('type') === _Parameter2.default.type.sum || selectedObject.getValue('type') === _Parameter2.default.type.average) {
                        items = _this2.rb.getArrayFieldParameterItems([_Parameter2.default.type.number]);
                        popupType = _PopupWindow2.default.type.parameterSet;
                    } else {
                        items = _this2.rb.getParameterItems(selectedObject);
                        popupType = _PopupWindow2.default.type.parameterAppend;
                    }
                    _this2.rb.getPopupWindow().show(items, selectedObject.getId(), 'rbro_parameter_expression', 'expression', popupType);
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
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var cmd = new _SetValueCmd2.default(selectedObject.getId(), 'testData', elTestData.val(), _SetValueCmd2.default.type.text, _this2.rb);
                    _this2.rb.executeCommand(cmd);
                }
            });
            elFormField.append(elTestData);
            var elEditTestDataButton = $('<button id="rbro_parameter_edit_test_data"\n        class="rbroButton rbroActionButton" style="display: none;">\n                    <span>' + this.rb.getLabel('parameterEditTestData') + '</span>\n                    <span class="rbroIcon-edit"></span>\n                </button>').click(function (event) {
                var selectedObject = _this2.rb.getSelectedObject();
                if (selectedObject !== null) {
                    var rows = selectedObject.getTestDataRows(true);
                    if (rows.length > 0) {
                        _this2.rb.getPopupWindow().show(rows, selectedObject.getId(), '', 'testData', _PopupWindow2.default.type.testData);
                    } else {
                        alert(_this2.rb.getLabel('parameterEditTestDataNoFields'));
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
        key: 'updateVisibileRows',
        value: function updateVisibileRows(obj, field) {
            var type = obj.getValue('type');
            var valueType = type === _Parameter2.default.type.simpleArray ? obj.getValue('arrayItemType') : type;
            var showOnlyNameType = obj.getValue('showOnlyNameType');
            var parentParameter = null;
            if (obj.getPanelItem() !== null && obj.getPanelItem().getParent().getData() instanceof _Parameter2.default) {
                parentParameter = obj.getPanelItem().getParent().getData();
            }

            if (field === null) {
                var editable = obj.getValue('editable');
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
            }

            if (field === null || field === 'type') {
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
            }
            if (field === null || field === 'type' || field === 'arrayItemType') {
                if ((valueType === _Parameter2.default.type.number || valueType === _Parameter2.default.type.date || valueType === _Parameter2.default.type.sum || valueType === _Parameter2.default.type.average) && !showOnlyNameType) {
                    $('#rbro_parameter_pattern_row').show();
                } else {
                    $('#rbro_parameter_pattern_row').hide();
                }
            }
            if (field === null || field === 'type' || field === 'eval') {
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
            }

            if (field === null) {
                var parameterTypeOptions = [];
                // do not allow nested array/map (only for top-level parameters)
                var topLevelParameter = obj.getPanelItem() !== null && obj.getPanelItem().getParent() === this.rb.getMainPanel().getParametersItem();
                // do not allow sum/average parameter in list
                var listFieldParameter = parentParameter !== null && parentParameter.getValue('type') === _Parameter2.default.type.array;

                parameterTypeOptions.push({ value: 'string', label: this.rb.getLabel('parameterTypeString') });
                parameterTypeOptions.push({ value: 'number', label: this.rb.getLabel('parameterTypeNumber') });
                parameterTypeOptions.push({ value: 'boolean', label: this.rb.getLabel('parameterTypeBoolean') });
                parameterTypeOptions.push({ value: 'date', label: this.rb.getLabel('parameterTypeDate') });
                parameterTypeOptions.push({ value: 'image', label: this.rb.getLabel('parameterTypeImage') });
                if (topLevelParameter) {
                    parameterTypeOptions.push({ value: 'array', label: this.rb.getLabel('parameterTypeArray') });
                }
                parameterTypeOptions.push({ value: 'simple_array', label: this.rb.getLabel('parameterTypeSimpleArray') });
                if (topLevelParameter) {
                    parameterTypeOptions.push({ value: 'map', label: this.rb.getLabel('parameterTypeMap') });
                }
                if (!listFieldParameter) {
                    parameterTypeOptions.push({ value: 'sum', label: this.rb.getLabel('parameterTypeSum') });
                    parameterTypeOptions.push({ value: 'average', label: this.rb.getLabel('parameterTypeAverage') });
                }

                var parameterTypeOptionsChanged = false;
                if (parameterTypeOptions.length !== this.parameterTypeOptions.length) {
                    parameterTypeOptionsChanged = true;
                } else {
                    for (var i = 0; i < parameterTypeOptions.length; i++) {
                        if (parameterTypeOptions[i].value !== this.parameterTypeOptions[i].value) {
                            parameterTypeOptionsChanged = true;
                            break;
                        }
                    }
                }
                if (parameterTypeOptionsChanged) {
                    // add dom elements for changed options
                    var elParameterType = $('#rbro_parameter_type');
                    elParameterType.empty();
                    for (var _i = 0; _i < parameterTypeOptions.length; _i++) {
                        var parameterTypeOption = parameterTypeOptions[_i];
                        elParameterType.append('<option value="' + parameterTypeOption.value + '">' + parameterTypeOption.label + '</option>');
                    }
                    this.parameterTypeOptions = parameterTypeOptions;
                }
            }
        }

        /**
         * Is called when the selection is changed or the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {String} [field] - affected field in case of change operation.
         */

    }, {
        key: 'updateDisplay',
        value: function updateDisplay(field) {
            var selectedObject = this.rb.getSelectedObject();

            if (selectedObject !== null && selectedObject instanceof _Parameter2.default) {
                // must be called before setValue so all parameter type options are available
                this.updateVisibileRows(selectedObject, field);

                for (var property in this.propertyDescriptors) {
                    if (this.propertyDescriptors.hasOwnProperty(property) && (field === null || property === field)) {
                        var propertyDescriptor = this.propertyDescriptors[property];
                        var value = selectedObject.getValue(property);
                        (0, _get3.default)(ParameterPanel.prototype.__proto__ || (0, _getPrototypeOf2.default)(ParameterPanel.prototype), 'setValue', this).call(this, propertyDescriptor, value, false);
                    }
                }

                if (field === null || field === 'type') {
                    if (selectedObject.getValue('type') === _Parameter2.default.type.date) {
                        $('#rbro_parameter_test_data').attr('placeholder', this.rb.getLabel('parameterTestDataDatePattern'));
                    } else {
                        $('#rbro_parameter_test_data').attr('placeholder', '');
                    }
                }

                ParameterPanel.updateAutosizeInputs(field);
            }
        }

        /**
         * Is called when the selected element was changed.
         * The panel is updated to show the values of the selected data object.
         * @param {String} [field] - affected field in case of change operation.
         */

    }], [{
        key: 'updateAutosizeInputs',
        value: function updateAutosizeInputs(field) {
            if (field === null || field === 'expression') {
                autosize.update($('#rbro_parameter_expression'));
            }
        }
    }]);
    return ParameterPanel;
}(_PanelBase3.default);

exports.default = ParameterPanel;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
__webpack_require__(76);
module.exports = __webpack_require__(133);


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(10);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
module.exports = __webpack_require__(10).Object.assign;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
var $Object = __webpack_require__(10).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
var $Object = __webpack_require__(10).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
var $Object = __webpack_require__(10).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);
module.exports = __webpack_require__(10).Object.getPrototypeOf;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140);
module.exports = __webpack_require__(10).Object.setPrototypeOf;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
__webpack_require__(141);
__webpack_require__(143);
__webpack_require__(144);
module.exports = __webpack_require__(10).Symbol;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
__webpack_require__(77);
module.exports = __webpack_require__(60).f('iterator');


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(24);
var toLength = __webpack_require__(131);
var toAbsoluteIndex = __webpack_require__(130);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(48);
var TAG = __webpack_require__(18)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
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
var getKeys = __webpack_require__(35);
var gOPS = __webpack_require__(53);
var pIE = __webpack_require__(36);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(17).document;
module.exports = document && document.documentElement;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(48);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(51);
var descriptor = __webpack_require__(37);
var setToStringTag = __webpack_require__(54);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(28)(IteratorPrototype, __webpack_require__(18)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(39)('meta');
var isObject = __webpack_require__(29);
var has = __webpack_require__(22);
var setDesc = __webpack_require__(23).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(27)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(16);
var getKeys = __webpack_require__(35);
var gOPS = __webpack_require__(53);
var pIE = __webpack_require__(36);
var toObject = __webpack_require__(38);
var IObject = __webpack_require__(69);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(27)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(23);
var anObject = __webpack_require__(26);
var getKeys = __webpack_require__(35);

module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(24);
var gOPN = __webpack_require__(71).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(29);
var anObject = __webpack_require__(26);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(66)(Function.call, __webpack_require__(52).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(57);
var defined = __webpack_require__(49);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(57);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(57);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(118);
var ITERATOR = __webpack_require__(18)('iterator');
var Iterators = __webpack_require__(33);
module.exports = __webpack_require__(10).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(26);
var get = __webpack_require__(132);
module.exports = __webpack_require__(10).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(116);
var step = __webpack_require__(123);
var Iterators = __webpack_require__(33);
var toIObject = __webpack_require__(24);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(70)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(21);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(125) });


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(21);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(51) });


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(21);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(16), 'Object', { defineProperty: __webpack_require__(23).f });


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(24);
var $getOwnPropertyDescriptor = __webpack_require__(52).f;

__webpack_require__(74)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(38);
var $getPrototypeOf = __webpack_require__(72);

__webpack_require__(74)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(21);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(128).set });


/***/ }),
/* 141 */
/***/ (function(module, exports) {



/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(17);
var has = __webpack_require__(22);
var DESCRIPTORS = __webpack_require__(16);
var $export = __webpack_require__(21);
var redefine = __webpack_require__(75);
var META = __webpack_require__(124).KEY;
var $fails = __webpack_require__(27);
var shared = __webpack_require__(56);
var setToStringTag = __webpack_require__(54);
var uid = __webpack_require__(39);
var wks = __webpack_require__(18);
var wksExt = __webpack_require__(60);
var wksDefine = __webpack_require__(59);
var enumKeys = __webpack_require__(119);
var isArray = __webpack_require__(121);
var anObject = __webpack_require__(26);
var isObject = __webpack_require__(29);
var toObject = __webpack_require__(38);
var toIObject = __webpack_require__(24);
var toPrimitive = __webpack_require__(58);
var createDesc = __webpack_require__(37);
var _create = __webpack_require__(51);
var gOPNExt = __webpack_require__(127);
var $GOPD = __webpack_require__(52);
var $GOPS = __webpack_require__(53);
var $DP = __webpack_require__(23);
var $keys = __webpack_require__(35);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(71).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(36).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(34)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
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

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(28)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59)('asyncIterator');


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59)('observable');


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