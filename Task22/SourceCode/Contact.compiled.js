"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Contact = /*#__PURE__*/function (_React$Component) {
  function Contact(props) {
    var _this;
    _classCallCheck(this, Contact);
    _this = _callSuper(this, Contact, [props]);
    _this.state = {
      password: 'swordfish',
      authorized: false,
      error: false
    };
    _this.authorize = _this.authorize.bind(_this);
    return _this;
  }
  _inherits(Contact, _React$Component);
  return _createClass(Contact, [{
    key: "authorize",
    value: function authorize(e) {
      e.preventDefault();
      var enteredPassword = e.target.querySelector('input[type="password"]').value;
      var isAuthorized = enteredPassword === this.state.password;
      this.setState({
        authorized: isAuthorized,
        error: !isAuthorized
      });
    }
  }, {
    key: "render",
    value: function render() {
      var login = /*#__PURE__*/React.createElement("form", {
        action: "#",
        onSubmit: this.authorize
      }, /*#__PURE__*/React.createElement("input", {
        type: "password",
        placeholder: "Password"
      }), /*#__PURE__*/React.createElement("input", {
        type: "submit"
      }), this.state.error && /*#__PURE__*/React.createElement("p", {
        style: {
          color: 'red',
          marginTop: '10px'
        }
      }, "Incorrect password, please try again."));
      var contactInfo = /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Email: example@example.com"), /*#__PURE__*/React.createElement("li", null, "Phone: 123-456-7890"));
      return /*#__PURE__*/React.createElement("div", {
        id: "authorization"
      }, /*#__PURE__*/React.createElement("h1", null, this.state.authorized ? 'Contact' : 'Enter the Password'), this.state.authorized ? contactInfo : login);
    }
  }]);
}(React.Component);
ReactDOM.render(/*#__PURE__*/React.createElement(Contact, null), document.getElementById("app"));
