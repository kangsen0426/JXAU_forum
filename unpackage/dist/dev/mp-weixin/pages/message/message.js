(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/message/message"],{

/***/ 67:
/*!********************************************************************************!*\
  !*** D:/QT/qt-program/jxau_forum/main.js?{"page":"pages%2Fmessage%2Fmessage"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _message = _interopRequireDefault(__webpack_require__(/*! ./pages/message/message.vue */ 68));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_message.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 68:
/*!*************************************************************!*\
  !*** D:/QT/qt-program/jxau_forum/pages/message/message.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_vue_vue_type_template_id_a91f51d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.vue?vue&type=template&id=a91f51d4&scoped=true& */ 69);
/* harmony import */ var _message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.vue?vue&type=script&lang=js& */ 71);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _message_vue_vue_type_style_index_0_id_a91f51d4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.vue?vue&type=style&index=0&id=a91f51d4&lang=less&scoped=true& */ 73);
/* harmony import */ var _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _message_vue_vue_type_template_id_a91f51d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _message_vue_vue_type_template_id_a91f51d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a91f51d4",
  null,
  false,
  _message_vue_vue_type_template_id_a91f51d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/message/message.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/*!********************************************************************************************************!*\
  !*** D:/QT/qt-program/jxau_forum/pages/message/message.vue?vue&type=template&id=a91f51d4&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_template_id_a91f51d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./message.vue?vue&type=template&id=a91f51d4&scoped=true& */ 70);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_template_id_a91f51d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_template_id_a91f51d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_template_id_a91f51d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_template_id_a91f51d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 70:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/QT/qt-program/jxau_forum/pages/message/message.vue?vue&type=template&id=a91f51d4&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uTabbar: function() {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-tabbar/u-tabbar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-tabbar/u-tabbar")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-tabbar/u-tabbar.vue */ 104))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 71:
/*!**************************************************************************************!*\
  !*** D:/QT/qt-program/jxau_forum/pages/message/message.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./message.vue?vue&type=script&lang=js& */ 72);
/* harmony import */ var _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 72:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/QT/qt-program/jxau_forum/pages/message/message.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;















var _vuex = __webpack_require__(/*! vuex */ 13);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =




{
  data: function data() {
    return {};


  },
  onLoad: function onLoad() {

  },
  methods: _objectSpread({},
  (0, _vuex.mapMutations)([])),

  computed: _objectSpread({},
  (0, _vuex.mapGetters)(['getTabBar'])) };exports.default = _default;

/***/ }),

/***/ 73:
/*!***********************************************************************************************************************!*\
  !*** D:/QT/qt-program/jxau_forum/pages/message/message.vue?vue&type=style&index=0&id=a91f51d4&lang=less&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_style_index_0_id_a91f51d4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../tools/HBuilderX.3.2.9.20210927/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./message.vue?vue&type=style&index=0&id=a91f51d4&lang=less&scoped=true& */ 74);
/* harmony import */ var _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_style_index_0_id_a91f51d4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_style_index_0_id_a91f51d4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_style_index_0_id_a91f51d4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_style_index_0_id_a91f51d4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_3_2_9_20210927_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_message_vue_vue_type_style_index_0_id_a91f51d4_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/QT/qt-program/jxau_forum/pages/message/message.vue?vue&type=style&index=0&id=a91f51d4&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/less-loader/dist/cjs.js):\nError: Cannot find module 'D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\compile-less\\node_modules\\less'\nRequire stack:\n- D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\less-loader\\dist\\index.js\n- D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\less-loader\\dist\\cjs.js\n- D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\loadLoader.js\n- D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js\n- D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\webpack\\lib\\NormalModule.js\n- D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\webpack\\lib\\NormalModuleFactory.js\n- D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\webpack\\lib\\Compiler.js\n- D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\webpack\\lib\\webpack.js\n- D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@dcloudio\\vue-cli-plugin-uni-optimize\\index.js\n- D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\@vue\\cli-service\\lib\\Service.js\n- D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\bin\\uniapp-cli.js\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)\n    at Function.Module._resolveFilename (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\module-alias\\index.js:49:29)\n    at Function.Module._load (internal/modules/cjs/loader.js:667:27)\n    at Module.require (internal/modules/cjs/loader.js:887:19)\n    at require (internal/modules/cjs/helpers.js:74:18)\n    at Object.<anonymous> (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\less-loader\\dist\\index.js:7:13)\n    at Module._compile (internal/modules/cjs/loader.js:999:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)\n    at Module.load (internal/modules/cjs/loader.js:863:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:708:14)\n    at Module.require (internal/modules/cjs/loader.js:887:19)\n    at require (internal/modules/cjs/helpers.js:74:18)\n    at Object.<anonymous> (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\less-loader\\dist\\cjs.js:3:18)\n    at Module._compile (internal/modules/cjs/loader.js:999:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)\n    at Module.load (internal/modules/cjs/loader.js:863:32)\n    at D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:172:11\n    at loadLoader (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\loadLoader.js:32:11)\n    at iteratePitchingLoaders (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:176:18\n    at loadLoader (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\loadLoader.js:47:3)\n    at iteratePitchingLoaders (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:176:18\n    at loadLoader (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\loadLoader.js:47:3)\n    at iteratePitchingLoaders (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\LoaderRunner.js:176:18\n    at loadLoader (D:\\tools\\HBuilderX.3.2.9.20210927\\HBuilderX\\plugins\\uniapp-cli\\node_modules\\loader-runner\\lib\\loadLoader.js:47:3)");

/***/ })

},[[67,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/message/message.js.map