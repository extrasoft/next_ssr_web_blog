webpackHotUpdate("static/development/pages/blog/detail.js",{

/***/ "./pages/blog/detail.js":
/*!******************************!*\
  !*** ./pages/blog/detail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");







var _jsxFileName = "/home/thanapon/Desktop/learning/next_ssr_web_blog/pages/blog/detail.js";





var Detail =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Detail, _Component);

  function Detail() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Detail);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Detail).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Detail, [{
    key: "render",
    value: function render() {
      var blog = this.props.blog;
      var updated_date = new Date(blog.updated_date);
      console.log(blog);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        titile: "Detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3077854063" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3077854063" + " " + 'mt-4 mb-4 title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, blog.subject), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3077854063" + " " + 'row',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3077854063" + " " + 'col-6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: blog.thumbnail,
        className: "jsx-3077854063" + " " + 'img-fluid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3077854063" + " " + 'col-6',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3077854063" + " " + 'text-justify detail',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, blog.detail), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "jsx-3077854063",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
        className: "jsx-3077854063" + " " + 'text-success',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "\u0E40\u0E02\u0E35\u0E22\u0E19\u0E42\u0E14\u0E22 : ", blog.created_by.user.firstname, " ", blog.created_by.user.lastname), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
        className: "jsx-3077854063" + " " + 'text-muted text-right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E40\u0E21\u0E37\u0E48\u0E2D : ", updated_date.toLocaleDateString() + ' : ' + updated_date.toLocaleTimeString())))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3077854063",
        __self: this
      }, ".title.jsx-3077854063{color:darkgreen;text-align:center;}.detail.jsx-3077854063{color:black;word-spacing:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RoYW5hcG9uL0Rlc2t0b3AvbGVhcm5pbmcvbmV4dF9zc3Jfd2ViX2Jsb2cvcGFnZXMvYmxvZy9kZXRhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENVLEFBRzZCLEFBSUosWUFDSyxJQUpDLGFBS3BCLEtBSkEiLCJmaWxlIjoiL2hvbWUvdGhhbmFwb24vRGVza3RvcC9sZWFybmluZy9uZXh0X3Nzcl93ZWJfYmxvZy9wYWdlcy9ibG9nL2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcblxuY2xhc3MgRGV0YWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2Jsb2dzLyR7cXVlcnkuaWR9YCk7XG4gICAgcmV0dXJuIHsgYmxvZzogcmVzLmRhdGEgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYmxvZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB1cGRhdGVkX2RhdGUgPSBuZXcgRGF0ZShibG9nLnVwZGF0ZWRfZGF0ZSk7XG4gICAgY29uc29sZS5sb2coYmxvZyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgdGl0aWxlPSdEZXRhaWwnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdtdC00IG1iLTQgdGl0bGUnPntibG9nLnN1YmplY3R9PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtibG9nLnRodW1ibmFpbH0gY2xhc3NOYW1lPSdpbWctZmx1aWQnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWp1c3RpZnkgZGV0YWlsJz5cbiAgICAgICAgICAgICAgICB7YmxvZy5kZXRhaWx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0ndGV4dC1zdWNjZXNzJz5cbiAgICAgICAgICAgICAgICDguYDguILguLXguKLguJnguYLguJTguKIgOiB7YmxvZy5jcmVhdGVkX2J5LnVzZXIuZmlyc3RuYW1lfSB7YmxvZy5jcmVhdGVkX2J5LnVzZXIubGFzdG5hbWV9XG4gICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J3RleHQtbXV0ZWQgdGV4dC1yaWdodCc+XG4gICAgICAgICAgICAgICAg4LmB4LiB4LmJ4LmE4LiC4LmA4Lih4Li34LmI4LitIDoge3VwZGF0ZWRfZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKSArJyA6ICcrIHVwZGF0ZWRfZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIHsvKiBTdHlsZSBqc3ggZnJvbSBOZXh0SlMgKi99XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtcbiAgICAgICAgICBgXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiBkYXJrZ3JlZW47XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZXRhaWwge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgd29yZC1zcGFjaW5nOiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICBcbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsOyJdfQ== */\n/*@ sourceURL=/home/thanapon/Desktop/learning/next_ssr_web_blog/pages/blog/detail.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("http://localhost:3001/blogs/".concat(query.id));

              case 3:
                res = _context.sent;
                return _context.abrupt("return", {
                  blog: res.data
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Detail;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ })

})
//# sourceMappingURL=detail.js.88928b2d5a0f9c0bb568.hot-update.js.map