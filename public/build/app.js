(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/images sync recursive \\.(png%7Cjpg%7Cjpeg%7Cgif%7Cico%7Csvg%7Cwebp)$":
/*!****************************************************************************!*\
  !*** ./assets/images/ sync \.(png%7Cjpg%7Cjpeg%7Cgif%7Cico%7Csvg%7Cwebp)$ ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./banniere.jpg": "./assets/images/banniere.jpg",
	"./fanion.png": "./assets/images/fanion.png",
	"./favicon.png": "./assets/images/favicon.png",
	"./logo.png": "./assets/images/logo.png",
	"./logo.svg": "./assets/images/logo.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/images sync recursive \\.(png%7Cjpg%7Cjpeg%7Cgif%7Cico%7Csvg%7Cwebp)$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/_images.js */ "./assets/js/_images.js");
/* harmony import */ var _js_images_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_images_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_delete_image_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/_delete_image.js */ "./assets/js/_delete_image.js");
/* harmony import */ var _js_delete_image_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_delete_image_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_delete_section_image_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/_delete_section_image.js */ "./assets/js/_delete_section_image.js");
/* harmony import */ var _js_delete_section_image_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_delete_section_image_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_add_section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/_add_section.js */ "./assets/js/_add_section.js");
/* harmony import */ var _js_add_section_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_add_section_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_delete_section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/_delete_section.js */ "./assets/js/_delete_section.js");
/* harmony import */ var _js_delete_section_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_delete_section_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var bs_custom_file_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bs-custom-file-input */ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js");
/* harmony import */ var bs_custom_file_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bs_custom_file_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var add_to_calendar_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! add-to-calendar-button */ "./node_modules/add-to-calendar-button/dist/module/index.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)










// start the Stimulus application

bs_custom_file_input__WEBPACK_IMPORTED_MODULE_7___default().init();

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/_add_section.js":
/*!***********************************!*\
  !*** ./assets/js/_add_section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
var addSection = document.querySelector("[data-section-add]");
if (addSection != null) {
  addSection.addEventListener("click", function (e) {
    e.preventDefault();
    if (confirm("Êtes-vous sûr de vouloir ajouter une section ?")) {
      // On envoie la requête ajax
      fetch(this.getAttribute("href"), {
        method: "ADD",
        body: JSON.stringify({
          "_token": this.dataset.token
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          document.location.reload(true);
        } else {
          alert(data.error);
        }
      });
    }
  });
}

/***/ }),

/***/ "./assets/js/_delete_image.js":
/*!************************************!*\
  !*** ./assets/js/_delete_image.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var links = document.querySelectorAll("[data-delete]");

// On boucle sur les liens
var _iterator = _createForOfIteratorHelper(links),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var link = _step.value;
    // On met un écouteur d'évènements
    link.addEventListener("click", function (e) {
      var _this = this;
      // On empêche la navigation
      e.preventDefault();

      // On demande confirmation
      if (confirm("Êtes-vous sûr de vouloir supprimer cette image ?")) {
        // On envoie la requête ajax
        fetch(this.getAttribute("href"), {
          method: "DELETE",
          body: JSON.stringify({
            "_token": this.dataset.token
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data.success) {
            _this.parentElement.remove();
          } else {
            alert(data.error);
          }
        });
      }
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./assets/js/_delete_section.js":
/*!**************************************!*\
  !*** ./assets/js/_delete_section.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var links = document.querySelectorAll("[data-section-delete]");

// On boucle sur les liens
var _iterator = _createForOfIteratorHelper(links),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var link = _step.value;
    // On met un écouteur d'évènements
    link.addEventListener("click", function (e) {
      var _this = this;
      // On empêche la navigation
      e.preventDefault();

      // On demande confirmation
      if (confirm("Êtes-vous sûr de vouloir supprimer cette section ?")) {
        // On envoie la requête ajax
        fetch(this.getAttribute("href"), {
          method: "DELETE",
          body: JSON.stringify({
            "_token": this.dataset.token
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data.success) {
            _this.parentElement.remove();
          } else {
            alert(data.error);
          }
        });
      }
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./assets/js/_delete_section_image.js":
/*!********************************************!*\
  !*** ./assets/js/_delete_section_image.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var links = document.querySelectorAll("[data-image-delete]");

// On boucle sur les liens
var _iterator = _createForOfIteratorHelper(links),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var link = _step.value;
    // On met un écouteur d'évènements
    link.addEventListener("click", function (e) {
      var _this = this;
      // On empêche la navigation
      e.preventDefault();

      // On demande confirmation
      if (confirm("Êtes-vous sûr de vouloir supprimer cette image ?")) {
        // On envoie la requête ajax
        fetch(this.getAttribute("href"), {
          method: "DELETE",
          body: JSON.stringify({
            "_token": this.dataset.token
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data.success) {
            _this.parentElement.remove();
          } else {
            alert(data.error);
          }
        });
      }
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./assets/js/_images.js":
/*!******************************!*\
  !*** ./assets/js/_images.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
var imagesContext = __webpack_require__("./assets/images sync recursive \\.(png%7Cjpg%7Cjpeg%7Cgif%7Cico%7Csvg%7Cwebp)$");
imagesContext.keys().forEach(imagesContext);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/images/banniere.jpg":
/*!************************************!*\
  !*** ./assets/images/banniere.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/banniere.3de98715.jpg";

/***/ }),

/***/ "./assets/images/fanion.png":
/*!**********************************!*\
  !*** ./assets/images/fanion.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fanion.ebf18ed6.png";

/***/ }),

/***/ "./assets/images/favicon.png":
/*!***********************************!*\
  !*** ./assets/images/favicon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/favicon.f6132f15.png";

/***/ }),

/***/ "./assets/images/logo.png":
/*!********************************!*\
  !*** ./assets/images/logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo.96c14c1c.png";

/***/ }),

/***/ "./assets/images/logo.svg":
/*!********************************!*\
  !*** ./assets/images/logo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo.f5ee91ad.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-84e02d"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFBRTtRQUFBLEVBQUMsQ0FDbkNGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7VUFDVixJQUFHQSxJQUFJLENBQUNDLE9BQU8sRUFBQztZQUNaLEtBQUksQ0FBQ1EsYUFBYSxDQUFDQyxNQUFNLEVBQUU7VUFDL0IsQ0FBQyxNQUFJO1lBQ0ROLEtBQUssQ0FBQ0osSUFBSSxDQUFDSyxLQUFLLENBQUM7VUFDckI7UUFDSixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOO0FBQUM7RUFBQTtBQUFBO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJELElBQU1NLGFBQWEsR0FBRy9CLHFHQUF3RTtBQUM5RitCLGFBQWEsQ0FBQ0MsSUFBSSxFQUFFLENBQUNDLE9BQU8sQ0FBQ0YsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7QUNEM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzLyBzeW5jIFxcLihwbmclN0NqcGclN0NqcGVnJTdDZ2lmJTdDaWNvJTdDc3ZnJTdDd2VicCkkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX2FkZF9zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fZGVsZXRlX2ltYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9fZGVsZXRlX3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL19kZWxldGVfc2VjdGlvbl9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvX2ltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYW5uaWVyZS5qcGdcIjogXCIuL2Fzc2V0cy9pbWFnZXMvYmFubmllcmUuanBnXCIsXG5cdFwiLi9mYW5pb24ucG5nXCI6IFwiLi9hc3NldHMvaW1hZ2VzL2Zhbmlvbi5wbmdcIixcblx0XCIuL2Zhdmljb24ucG5nXCI6IFwiLi9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nXCIsXG5cdFwiLi9sb2dvLnBuZ1wiOiBcIi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiLFxuXHRcIi4vbG9nby5zdmdcIjogXCIuL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHBuZyU3Q2pwZyU3Q2pwZWclN0NnaWYlN0NpY28lN0NzdmclN0N3ZWJwKSRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnLi9qcy9faW1hZ2VzLmpzJztcbmltcG9ydCAnLi9qcy9fZGVsZXRlX2ltYWdlLmpzJztcbmltcG9ydCAnLi9qcy9fZGVsZXRlX3NlY3Rpb25faW1hZ2UuanMnO1xuaW1wb3J0ICcuL2pzL19hZGRfc2VjdGlvbi5qcyc7XG5pbXBvcnQgJy4vanMvX2RlbGV0ZV9zZWN0aW9uLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCBic0N1c3RvbUZpbGVJbnB1dCBmcm9tICdicy1jdXN0b20tZmlsZS1pbnB1dCc7XG5pbXBvcnQgJ2FkZC10by1jYWxlbmRhci1idXR0b24nO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5ic0N1c3RvbUZpbGVJbnB1dC5pbml0KCk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJsZXQgYWRkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zZWN0aW9uLWFkZF1cIik7XG5cbmlmKGFkZFNlY3Rpb24gIT0gbnVsbCkge1xuICAgIGFkZFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYoY29uZmlybShcIsOKdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIGFqb3V0ZXIgdW5lIHNlY3Rpb24gP1wiKSl7XG4gICAgICAgICAgICAvLyBPbiBlbnZvaWUgbGEgcmVxdcOqdGUgYWpheFxuICAgICAgICAgICAgZmV0Y2godGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkFERFwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcIl90b2tlblwiOiB0aGlzLmRhdGFzZXQudG9rZW59KVxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZihkYXRhLnN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZGVsZXRlXVwiKTtcblxuIC8vIE9uIGJvdWNsZSBzdXIgbGVzIGxpZW5zXG5mb3IobGV0IGxpbmsgb2YgbGlua3Mpe1xuICAgIC8vIE9uIG1ldCB1biDDqWNvdXRldXIgZCfDqXbDqG5lbWVudHNcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbiAgICAgICAgLy8gT24gZW1ww6pjaGUgbGEgbmF2aWdhdGlvblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gT24gZGVtYW5kZSBjb25maXJtYXRpb25cbiAgICAgICAgaWYoY29uZmlybShcIsOKdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIHN1cHByaW1lciBjZXR0ZSBpbWFnZSA/XCIpKXtcbiAgICAgICAgICAgIC8vIE9uIGVudm9pZSBsYSByZXF1w6p0ZSBhamF4XG4gICAgICAgICAgICBmZXRjaCh0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIiksIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1wiX3Rva2VuXCI6IHRoaXMuZGF0YXNldC50b2tlbn0pXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGRhdGEuc3VjY2Vzcyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pO1xufSAiLCJsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc2VjdGlvbi1kZWxldGVdXCIpO1xuXG4gLy8gT24gYm91Y2xlIHN1ciBsZXMgbGllbnNcbmZvcihsZXQgbGluayBvZiBsaW5rcyl7XG4gICAgLy8gT24gbWV0IHVuIMOpY291dGV1ciBkJ8OpdsOobmVtZW50c1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAvLyBPbiBlbXDDqmNoZSBsYSBuYXZpZ2F0aW9uXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBPbiBkZW1hbmRlIGNvbmZpcm1hdGlvblxuICAgICAgICBpZihjb25maXJtKFwiw4p0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgc3VwcHJpbWVyIGNldHRlIHNlY3Rpb24gP1wiKSl7XG4gICAgICAgICAgICAvLyBPbiBlbnZvaWUgbGEgcmVxdcOqdGUgYWpheFxuICAgICAgICAgICAgZmV0Y2godGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcIl90b2tlblwiOiB0aGlzLmRhdGFzZXQudG9rZW59KVxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZihkYXRhLnN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KTtcbn0gIiwibGV0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWltYWdlLWRlbGV0ZV1cIik7XG5cbiAvLyBPbiBib3VjbGUgc3VyIGxlcyBsaWVuc1xuZm9yKGxldCBsaW5rIG9mIGxpbmtzKXtcbiAgICAvLyBPbiBtZXQgdW4gw6ljb3V0ZXVyIGQnw6l2w6huZW1lbnRzXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICAgICAgIC8vIE9uIGVtcMOqY2hlIGxhIG5hdmlnYXRpb25cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIE9uIGRlbWFuZGUgY29uZmlybWF0aW9uXG4gICAgICAgIGlmKGNvbmZpcm0oXCLDinRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBzdXBwcmltZXIgY2V0dGUgaW1hZ2UgP1wiKSl7XG4gICAgICAgICAgICAvLyBPbiBlbnZvaWUgbGEgcmVxdcOqdGUgYWpheFxuICAgICAgICAgICAgZmV0Y2godGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcIl90b2tlblwiOiB0aGlzLmRhdGFzZXQudG9rZW59KVxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZihkYXRhLnN1Y2Nlc3Mpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KTtcbn0gIiwiY29uc3QgaW1hZ2VzQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzJywgdHJ1ZSwgL1xcLihwbmd8anBnfGpwZWd8Z2lmfGljb3xzdmd8d2VicCkkLyk7XG5pbWFnZXNDb250ZXh0LmtleXMoKS5mb3JFYWNoKGltYWdlc0NvbnRleHQpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiYnNDdXN0b21GaWxlSW5wdXQiLCJpbml0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiYWRkU2VjdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25maXJtIiwiZmV0Y2giLCJnZXRBdHRyaWJ1dGUiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGFzZXQiLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWxlcnQiLCJlcnJvciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwiaW1hZ2VzQ29udGV4dCIsImtleXMiLCJmb3JFYWNoIl0sInNvdXJjZVJvb3QiOiIifQ==