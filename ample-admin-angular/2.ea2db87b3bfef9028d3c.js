(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!********************************************************!*\
  !*** C:/Users/Support/node_modules/tslib/tslib.es6.js ***!
  \********************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js ***!
  \**********************************************************************************/
/*! exports provided: MultiSelectComponent, NgMultiSelectDropDownModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function() { return MultiSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMultiSelectDropDownModule", function() { return NgMultiSelectDropDownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ListFilterPipe; });
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");










function MultiSelectComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0._placeholder);
  }
}

function MultiSelectComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MultiSelectComponent_span_4_Template_a_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      var item_r7 = ctx.$implicit;
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r9.onItemClick($event, item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r7 = ctx.$implicit;
    var k_r8 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", k_r8 > ctx_r1._settings.itemsShowLimit - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r7.text, " ");
  }
}

function MultiSelectComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+", ctx_r2.itemShowRemaining(), "");
  }
}

function MultiSelectComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MultiSelectComponent_li_10_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r11.toggleSelectAll();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r3.isAllItemsSelected())("disabled", ctx_r3.disabled || ctx_r3.isLimitSelectionReached());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](!ctx_r3.isAllItemsSelected() ? ctx_r3._settings.selectAllText : ctx_r3._settings.unSelectAllText);
  }
}

function MultiSelectComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r13.filter.text = $event;
    })("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r15.onFilterTextChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readOnly", ctx_r4.disabled)("placeholder", ctx_r4._settings.searchPlaceholderText)("ngModel", ctx_r4.filter.text);
  }
}

function MultiSelectComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MultiSelectComponent_li_13_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      var item_r16 = ctx.$implicit;
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r18.onItemClick($event, item_r16);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r16 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r5.isSelected(item_r16))("disabled", ctx_r5.disabled || ctx_r5.isLimitSelectionReached() && !ctx_r5.isSelected(item_r16) || item_r16.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r16.text);
  }
}

function MultiSelectComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6._settings.noDataAvailablePlaceholderText);
  }
}

var ListItem = function ListItem(source) {
  Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ListItem);

  if (typeof source === 'string' || typeof source === 'number') {
    this.id = this.text = source;
    this.isDisabled = false;
  }

  if (typeof source === 'object') {
    this.id = source.id;
    this.text = source.text;
    this.isDisabled = source.isDisabled;
  }
};

var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () {
    return MultiSelectComponent;
  }),
  multi: true
};

var noop = function noop() {};

var ɵ0 = noop;

var MultiSelectComponent = /*@__PURE__*/function () {
  var MultiSelectComponent = /*#__PURE__*/function () {
    function MultiSelectComponent(cdr) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MultiSelectComponent);

      this.cdr = cdr;
      this._data = [];
      this.selectedItems = [];
      this.isDropdownOpen = true;
      this._placeholder = "Select";
      this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object

      this._sourceDataFields = []; // store source data fields names

      this.filter = new ListItem(this.data);
      this.defaultSettings = {
        singleSelection: false,
        idField: "id",
        textField: "text",
        disabledField: "isDisabled",
        enableCheckAll: true,
        selectAllText: "Select All",
        unSelectAllText: "UnSelect All",
        allowSearchFilter: false,
        limitSelection: -1,
        clearSearchFilter: true,
        maxHeight: 197,
        itemsShowLimit: 999999999999,
        searchPlaceholderText: "Search",
        noDataAvailablePlaceholderText: "No data available",
        closeDropDownOnSelection: false,
        showSelectedItemsAtTop: false,
        defaultOpen: false,
        allowRemoteDataSearch: false
      };
      this.disabled = false;
      this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      this.onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      this.onTouchedCallback = noop;
      this.onChangeCallback = noop;
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MultiSelectComponent, [{
      key: "onFilterTextChange",
      value: function onFilterTextChange($event) {
        this.onFilterChange.emit($event);
      }
    }, {
      key: "onItemClick",
      value: function onItemClick($event, item) {
        if (this.disabled || item.isDisabled) {
          return false;
        }

        var found = this.isSelected(item);
        var allowAdd = this._settings.limitSelection === -1 || this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection;

        if (!found) {
          if (allowAdd) {
            this.addSelected(item);
          }
        } else {
          this.removeSelected(item);
        }

        if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
          this.closeDropdown();
        }
      }
    }, {
      key: "writeValue",
      value: function writeValue(value) {
        var _this = this;

        if (value !== undefined && value !== null && value.length > 0) {
          if (this._settings.singleSelection) {
            try {
              if (value.length >= 1) {
                var firstItem = value[0];
                this.selectedItems = [typeof firstItem === "string" || typeof firstItem === "number" ? new ListItem(firstItem) : new ListItem({
                  id: firstItem[this._settings.idField],
                  text: firstItem[this._settings.textField],
                  isDisabled: firstItem[this._settings.disabledField]
                })];
              }
            } catch (e) {// console.error(e.body.msg);
            }
          } else {
            var _data = value.map(function (item) {
              return typeof item === "string" || typeof item === "number" ? new ListItem(item) : new ListItem({
                id: item[_this._settings.idField],
                text: item[_this._settings.textField],
                isDisabled: item[_this._settings.disabledField]
              });
            });

            if (this._settings.limitSelection > 0) {
              this.selectedItems = _data.splice(0, this._settings.limitSelection);
            } else {
              this.selectedItems = _data;
            }
          }
        } else {
          this.selectedItems = [];
        }

        this.onChangeCallback(value);
      } // From ControlValueAccessor interface

    }, {
      key: "registerOnChange",
      value: function registerOnChange(fn) {
        this.onChangeCallback = fn;
      } // From ControlValueAccessor interface

    }, {
      key: "registerOnTouched",
      value: function registerOnTouched(fn) {
        this.onTouchedCallback = fn;
      } // Set touched on blur

    }, {
      key: "onTouched",
      value: function onTouched() {
        this.closeDropdown();
        this.onTouchedCallback();
      }
    }, {
      key: "trackByFn",
      value: function trackByFn(index, item) {
        return item.id;
      }
    }, {
      key: "isSelected",
      value: function isSelected(clickedItem) {
        var found = false;
        this.selectedItems.forEach(function (item) {
          if (clickedItem.id === item.id) {
            found = true;
          }
        });
        return found;
      }
    }, {
      key: "isLimitSelectionReached",
      value: function isLimitSelectionReached() {
        return this._settings.limitSelection === this.selectedItems.length;
      }
    }, {
      key: "isAllItemsSelected",
      value: function isAllItemsSelected() {
        // get disabld item count
        var itemDisabledCount = this._data.filter(function (item) {
          return item.isDisabled;
        }).length; // take disabled items into consideration when checking


        if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
          return false;
        }

        return this._data.length === this.selectedItems.length + itemDisabledCount;
      }
    }, {
      key: "showButton",
      value: function showButton() {
        if (!this._settings.singleSelection) {
          if (this._settings.limitSelection > 0) {
            return false;
          } // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;


          return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        } else {
          // should be disabled in single selection mode
          return false;
        }
      }
    }, {
      key: "itemShowRemaining",
      value: function itemShowRemaining() {
        return this.selectedItems.length - this._settings.itemsShowLimit;
      }
    }, {
      key: "addSelected",
      value: function addSelected(item) {
        if (this._settings.singleSelection) {
          this.selectedItems = [];
          this.selectedItems.push(item);
        } else {
          this.selectedItems.push(item);
        }

        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(item));
      }
    }, {
      key: "removeSelected",
      value: function removeSelected(itemSel) {
        var _this2 = this;

        this.selectedItems.forEach(function (item) {
          if (itemSel.id === item.id) {
            _this2.selectedItems.splice(_this2.selectedItems.indexOf(item), 1);
          }
        });
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(itemSel));
      }
    }, {
      key: "emittedValue",
      value: function emittedValue(val) {
        var _this3 = this;

        var selected = [];

        if (Array.isArray(val)) {
          val.map(function (item) {
            selected.push(_this3.objectify(item));
          });
        } else {
          if (val) {
            return this.objectify(val);
          }
        }

        return selected;
      }
    }, {
      key: "objectify",
      value: function objectify(val) {
        if (this._sourceDataType === 'object') {
          var obj = {};
          obj[this._settings.idField] = val.id;
          obj[this._settings.textField] = val.text;

          if (this._sourceDataFields.includes(this._settings.disabledField)) {
            obj[this._settings.disabledField] = val.isDisabled;
          }

          return obj;
        }

        if (this._sourceDataType === 'number') {
          return Number(val.id);
        } else {
          return val.text;
        }
      }
    }, {
      key: "toggleDropdown",
      value: function toggleDropdown(evt) {
        evt.preventDefault();

        if (this.disabled && this._settings.singleSelection) {
          return;
        }

        this._settings.defaultOpen = !this._settings.defaultOpen;

        if (!this._settings.defaultOpen) {
          this.onDropDownClose.emit();
        }
      }
    }, {
      key: "closeDropdown",
      value: function closeDropdown() {
        this._settings.defaultOpen = false; // clear search text

        if (this._settings.clearSearchFilter) {
          this.filter.text = "";
        }

        this.onDropDownClose.emit();
      }
    }, {
      key: "toggleSelectAll",
      value: function toggleSelectAll() {
        if (this.disabled) {
          return false;
        }

        if (!this.isAllItemsSelected()) {
          // filter out disabled item first before slicing
          this.selectedItems = this._data.filter(function (item) {
            return !item.isDisabled;
          }).slice();
          this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        } else {
          this.selectedItems = [];
          this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
        }

        this.onChangeCallback(this.emittedValue(this.selectedItems));
      }
    }, {
      key: "getFields",
      value: function getFields(inputData) {
        var fields = [];

        if (typeof inputData !== "object") {
          return fields;
        } // tslint:disable-next-line:forin


        for (var prop in inputData) {
          fields.push(prop);
        }

        return fields;
      }
    }, {
      key: "placeholder",
      set: function set(value) {
        if (value) {
          this._placeholder = value;
        } else {
          this._placeholder = "Select";
        }
      }
    }, {
      key: "settings",
      set: function set(value) {
        if (value) {
          this._settings = Object.assign(this.defaultSettings, value);
        } else {
          this._settings = Object.assign(this.defaultSettings);
        }
      }
    }, {
      key: "data",
      set: function set(value) {
        var _this4 = this;

        if (!value) {
          this._data = [];
        } else {
          var firstItem = value[0];
          this._sourceDataType = typeof firstItem;
          this._sourceDataFields = this.getFields(firstItem);
          this._data = value.map(function (item) {
            return typeof item === "string" || typeof item === "number" ? new ListItem(item) : new ListItem({
              id: item[_this4._settings.idField],
              text: item[_this4._settings.textField],
              isDisabled: item[_this4._settings.disabledField]
            });
          });
        }
      }
    }]);

    return MultiSelectComponent;
  }();

  MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) {
    return new (t || MultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]));
  };

  MultiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MultiSelectComponent,
    selectors: [["ng-multiselect-dropdown"]],
    hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function MultiSelectComponent_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      disabled: "disabled",
      placeholder: "placeholder",
      settings: "settings",
      data: "data"
    },
    outputs: {
      onFilterChange: "onFilterChange",
      onDropDownClose: "onDropDownClose",
      onSelect: "onSelect",
      onDeSelect: "onDeSelect",
      onSelectAll: "onSelectAll",
      onDeSelectAll: "onDeSelectAll"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR])],
    decls: 16,
    vars: 17,
    consts: [["tabindex", "=0", 1, "multiselect-dropdown", 3, "blur", "clickOutside"], ["tabindex", "-1", 1, "dropdown-btn", 3, "click"], [4, "ngIf"], ["class", "selected-item", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "float", "right !important", "padding-right", "4px"], ["style", "padding-right: 6px;", 4, "ngIf"], [3, "ngClass"], [1, "dropdown-list", 3, "hidden"], [1, "item1"], ["class", "multiselect-item-checkbox", "style", "border-bottom: 1px solid #ccc;padding:10px", 3, "click", 4, "ngIf"], ["class", "filter-textbox", 4, "ngIf"], [1, "item2"], ["class", "multiselect-item-checkbox", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-data", 4, "ngIf"], [1, "selected-item", 3, "hidden"], [2, "padding-top", "2px", "padding-left", "2px", "color", "white", 3, "click"], [2, "padding-right", "6px"], [1, "multiselect-item-checkbox", 2, "border-bottom", "1px solid #ccc", "padding", "10px", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-select-all", 3, "checked", "disabled"], [1, "filter-textbox"], ["type", "text", "aria-label", "multiselect-search", 3, "readOnly", "placeholder", "ngModel", "ngModelChange"], [1, "multiselect-item-checkbox", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-item", 3, "checked", "disabled"], [1, "no-data"]],
    template: function MultiSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function MultiSelectComponent_Template_div_blur_0_listener() {
          return ctx.onTouched();
        })("clickOutside", function MultiSelectComponent_Template_div_clickOutside_0_listener() {
          return ctx.closeDropdown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MultiSelectComponent_Template_span_click_2_listener($event) {
          return ctx.toggleDropdown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MultiSelectComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MultiSelectComponent_span_4_Template, 4, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MultiSelectComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MultiSelectComponent_li_10_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MultiSelectComponent_li_11_Template, 2, 3, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, MultiSelectComponent_li_13_Template, 4, 3, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "multiSelectFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, MultiSelectComponent_li_15_Template, 3, 1, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedItems.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selectedItems)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.itemShowRemaining() > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx._settings.defaultOpen ? "dropdown-up" : "dropdown-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx._settings.defaultOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && !ctx._settings.singleSelection && ctx._settings.enableCheckAll && ctx._settings.limitSelection === 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && ctx._settings.allowSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("max-height", ctx._settings.maxHeight + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 14, ctx._data, ctx.filter));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._data.length == 0 && !ctx._settings.allowRemoteDataSearch);
      }
    },
    directives: function directives() {
      return [ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]];
    },
    pipes: function pipes() {
      return [ListFilterPipe];
    },
    styles: [".multiselect-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px #959595}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%]{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#eceeef}.dropdown-list[_ngcontent-%COMP%]{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0;width:100%;padding:0 0 0 26px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus + div[_ngcontent-%COMP%]:before, .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active + div[_ngcontent-%COMP%]:before{transition-duration:0s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled + div[_ngcontent-%COMP%]:before{border-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover + div[_ngcontent-%COMP%]:before{background-color:inherit}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked + div[_ngcontent-%COMP%]:before{background-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"],
    changeDetection: 0
  });
  return MultiSelectComponent;
}();

var ClickOutsideDirective = /*@__PURE__*/function () {
  var ClickOutsideDirective = /*#__PURE__*/function () {
    function ClickOutsideDirective(_elementRef) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClickOutsideDirective);

      this._elementRef = _elementRef;
      this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ClickOutsideDirective, [{
      key: "onClick",
      value: function onClick(event, targetElement) {
        if (!targetElement) {
          return;
        }

        var clickedInside = this._elementRef.nativeElement.contains(targetElement);

        if (!clickedInside) {
          this.clickOutside.emit(event);
        }
      }
    }]);

    return ClickOutsideDirective;
  }();

  ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
    return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
  };

  ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: ClickOutsideDirective,
    selectors: [["", "clickOutside", ""]],
    hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event, $event.target);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
      }
    },
    outputs: {
      clickOutside: "clickOutside"
    }
  });
  return ClickOutsideDirective;
}();

var ListFilterPipe = /*@__PURE__*/function () {
  var ListFilterPipe = /*#__PURE__*/function () {
    function ListFilterPipe() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ListFilterPipe);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ListFilterPipe, [{
      key: "transform",
      value: function transform(items, filter) {
        var _this5 = this;

        if (!items || !filter) {
          return items;
        }

        return items.filter(function (item) {
          return _this5.applyFilter(item, filter);
        });
      }
    }, {
      key: "applyFilter",
      value: function applyFilter(item, filter) {
        if (typeof item.text === 'string' && typeof filter.text === 'string') {
          return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
        } else {
          return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
        }
      }
    }]);

    return ListFilterPipe;
  }();

  ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) {
    return new (t || ListFilterPipe)();
  };

  ListFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({
    name: "multiSelectFilter",
    type: ListFilterPipe,
    pure: false
  });
  return ListFilterPipe;
}();

var NgMultiSelectDropDownModule_1;

var NgMultiSelectDropDownModule = /*@__PURE__*/function () {
  var NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = /*#__PURE__*/function () {
    function NgMultiSelectDropDownModule() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgMultiSelectDropDownModule);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(NgMultiSelectDropDownModule, null, [{
      key: "forRoot",
      value: function forRoot() {
        return {
          ngModule: NgMultiSelectDropDownModule_1
        };
      }
    }]);

    return NgMultiSelectDropDownModule;
  }();

  NgMultiSelectDropDownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: NgMultiSelectDropDownModule
  });
  NgMultiSelectDropDownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    factory: function NgMultiSelectDropDownModule_Factory(t) {
      return new (t || NgMultiSelectDropDownModule)();
    },
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
  });
  return NgMultiSelectDropDownModule;
}();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NgMultiSelectDropDownModule, {
    declarations: function declarations() {
      return [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]];
    },
    exports: function exports() {
      return [MultiSelectComponent];
    }
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/ngx-custom-validators/fesm2015/ngx-custom-validators.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-custom-validators/fesm2015/ngx-custom-validators.js ***!
  \******************************************************************************/
/*! exports provided: CustomFormsModule, CustomValidators, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵbn, ɵbo, ɵbp, ɵbq, ɵbr, ɵbs, ɵbt, ɵbu, ɵbv, ɵbw, ɵbx, ɵby, ɵbz, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormsModule", function() { return CustomFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return arrayLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return base64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return ArrayLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return Base64Validator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return CreditCardValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return DateValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return DateISOValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return DigitsValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return EqualValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return EqualToValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return GreaterThanValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbk", function() { return GreaterThanEqualValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbl", function() { return JSONValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbm", function() { return LessThanValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbn", function() { return LessThanEqualValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbo", function() { return MaxValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbp", function() { return MaxDateValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbq", function() { return MinValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbr", function() { return MinDateValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbs", function() { return NotEqualValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbt", function() { return NotEqualToValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbu", function() { return NumberValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbv", function() { return PropertyValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbw", function() { return RangeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbx", function() { return RangeLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵby", function() { return UrlValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbz", function() { return UUIDValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return creditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return dateISO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return digits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return equalTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return gte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return json; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return lte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return maxDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return minDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return notEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return notEqualTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return rangeLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return uuid; });
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








function isPresent(obj) {
  return obj !== undefined && obj !== null;
}

function isDate(obj) {
  try {
    var _date = new Date(obj);

    return !isNaN(_date.getTime());
  } catch (e) {
    return false;
  }
}

function parseDate(obj) {
  try {
    // Moment.js
    if (obj._d instanceof Date) {
      var d = obj._d;
      var month = +d.getMonth() + 1;
      var day = +d.getDate();
      return "".concat(d.getFullYear(), "-").concat(formatDayOrMonth(month), "-").concat(formatDayOrMonth(day));
    } // NgbDateStruct


    if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
      var _month = +obj.month;

      var _day = +obj.day;

      return "".concat(obj.year, "-").concat(formatDayOrMonth(_month), "-").concat(formatDayOrMonth(_day));
    }
  } catch (e) {}

  return obj;
}

function formatDayOrMonth(month) {
  return month < 10 ? "0".concat(month) : month;
}

var arrayLength = function arrayLength(value) {
  return function (control) {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var obj = control.value;
    return Array.isArray(obj) && obj.length >= +value ? null : {
      arrayLength: {
        minLength: value
      }
    };
  };
};

var base64 = function base64(control) {
  if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
    return null;
  }

  var v = control.value;
  return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : {
    base64: true
  };
};

var creditCard = function creditCard(control) {
  if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
    return null;
  }

  var v = control.value;
  var sanitized = v.replace(/[^0-9]+/g, ''); // problem with chrome

  /* tslint:disable */

  if (!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(sanitized)) {
    return {
      creditCard: true
    };
  }
  /* tslint:enable */


  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble;

  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);

    if (shouldDouble) {
      tmpNum *= 2;

      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }

    shouldDouble = !shouldDouble;
  }

  if (Boolean(sum % 10 === 0 ? sanitized : false)) {
    return null;
  }

  return {
    creditCard: true
  };
};

var date = function date(control) {
  if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
    return null;
  }

  var v = control.value;
  v = parseDate(v);
  return isDate(v) ? null : {
    date: true
  };
};

var dateISO = function dateISO(control) {
  if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
    return null;
  }

  var v = control.value;
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : {
    dateISO: true
  };
};

var digits = function digits(control) {
  if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
    return null;
  }

  var v = control.value;
  return /^\d+$/.test(v) ? null : {
    digits: true
  };
};

var email = function email(control) {
  if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
    return null;
  }

  var v = control.value;
  /* tslint:disable */

  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : {
    'email': true
  };
  /* tslint:enable */
};

var equal = function equal(val) {
  return function (control) {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var v = control.value;
    return val === v ? null : {
      equal: {
        value: val
      }
    };
  };
};

var equalTo = function equalTo(equalControl) {
  var subscribe = false;
  return function (control) {
    if (!subscribe) {
      subscribe = true;
      equalControl.valueChanges.subscribe(function () {
        control.updateValueAndValidity();
      });
    }

    var v = control.value;
    return equalControl.value === v ? null : {
      equalTo: {
        control: equalControl,
        value: equalControl.value
      }
    };
  };
};

var gt = function gt(value) {
  return function (control) {
    if (!isPresent(value)) {
      return null;
    }

    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var v = +control.value;
    return v > +value ? null : {
      gt: {
        value: value
      }
    };
  };
};

var gte = function gte(value) {
  return function (control) {
    if (!isPresent(value)) {
      return null;
    }

    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var v = +control.value;
    return v >= +value ? null : {
      gte: {
        value: value
      }
    };
  };
};

var json = function json(control) {
  if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
    return null;
  }

  var v = control.value;

  try {
    var obj = JSON.parse(v);

    if (Boolean(obj) && typeof obj === 'object') {
      return null;
    }
  } catch (e) {}

  return {
    json: true
  };
};

var lt = function lt(value) {
  return function (control) {
    if (!isPresent(value)) {
      return null;
    }

    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var v = +control.value;
    return v < +value ? null : {
      lt: {
        value: value
      }
    };
  };
};

var lte = function lte(value) {
  return function (control) {
    if (!isPresent(value)) {
      return null;
    }

    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var v = +control.value;
    return v <= +value ? null : {
      lte: {
        value: value
      }
    };
  };
};

var max = function max(value) {
  return function (control) {
    if (!isPresent(value)) {
      return null;
    }

    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var v = +control.value;
    return v <= +value ? null : {
      max: {
        value: value
      }
    };
  };
};

var maxDate = function maxDate(maxInput) {
  var value;
  var subscribe = false;
  var maxValue = maxInput;
  var isForm = maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"] || maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"];
  return function (control) {
    if (!subscribe && isForm) {
      subscribe = true;
      maxInput.valueChanges.subscribe(function () {
        control.updateValueAndValidity();
      });
    }

    if (isForm) {
      maxValue = maxInput.value;
    }

    value = parseDate(maxValue);

    if (!isDate(value) && !(value instanceof Function)) {
      if (value == null) {
        return null;
      } else if (isForm) {
        return {
          maxDate: {
            error: 'maxDate is invalid'
          }
        };
      } else {
        throw Error('maxDate value must be or return a formatted date');
      }
    }

    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var d = new Date(parseDate(control.value)).getTime();

    if (!isDate(d)) {
      return {
        value: true
      };
    }

    if (value instanceof Function) {
      value = value();
    }

    return d <= new Date(value).getTime() ? null : isForm ? {
      maxDate: {
        control: maxInput,
        value: maxInput.value
      }
    } : {
      maxDate: {
        value: maxValue,
        control: undefined
      }
    };
  };
};

var min = function min(value) {
  return function (control) {
    if (!isPresent(value)) {
      return null;
    }

    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var v = +control.value;
    return v >= +value ? null : {
      min: {
        value: value
      }
    };
  };
};

var minDate = function minDate(minInput) {
  var value;
  var subscribe = false;
  var minValue = minInput;
  var isForm = minInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"] || minInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"];
  return function (control) {
    if (!subscribe && isForm) {
      subscribe = true;
      minInput.valueChanges.subscribe(function () {
        control.updateValueAndValidity();
      });
    }

    if (isForm) {
      minValue = minInput.value;
    }

    value = parseDate(minValue);

    if (!isDate(value) && !(value instanceof Function)) {
      if (value == null) {
        return null;
      } else if (isForm) {
        return {
          minDate: {
            error: 'minDate is invalid'
          }
        };
      } else {
        throw Error('minDate value must be or return a formatted date');
      }
    }

    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var d = new Date(parseDate(control.value)).getTime();

    if (!isDate(d)) {
      return {
        value: true
      };
    }

    if (value instanceof Function) {
      value = value();
    }

    return d >= new Date(value).getTime() ? null : isForm ? {
      minDate: {
        control: minInput,
        value: minInput.value
      }
    } : {
      minDate: {
        value: minValue,
        control: undefined
      }
    };
  };
};

var notEqual = function notEqual(val) {
  return function (control) {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var v = control.value;
    return val !== v ? null : {
      notEqual: {
        value: val
      }
    };
  };
};

var notEqualTo = function notEqualTo(notEqualControl) {
  var subscribe = false;
  return function (control) {
    if (!subscribe) {
      subscribe = true;
      notEqualControl.valueChanges.subscribe(function () {
        control.updateValueAndValidity();
      });
    }

    var v = control.value;

    if (notEqualControl.value == null && v == null) {
      return null;
    }

    return notEqualControl.value !== v ? null : {
      notEqualTo: {
        control: notEqualControl,
        value: notEqualControl.value
      }
    };
  };
};

var number = function number(control) {
  if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
    return null;
  }

  var v = control.value;
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : {
    'number': true
  };
};

var property = function property(value) {
  return function (control) {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var properties = value.split(',');
    var obj = control.value;
    var isValid = true;

    var _iterator = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(properties),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var prop = _step.value;

        if (obj[prop] == null) {
          isValid = false;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return isValid ? null : {
      hasProperty: {
        value: value
      }
    };
  };
};

var range = function range(value) {
  return function (control) {
    if (!isPresent(value)) {
      return null;
    }

    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var v = +control.value;
    return v >= value[0] && v <= value[1] ? null : {
      range: {
        value: value
      }
    };
  };
};

var rangeLength = function rangeLength(value) {
  return function (control) {
    if (!isPresent(value)) {
      return null;
    }

    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var v = control.value;
    return v.length >= value[0] && v.length <= value[1] ? null : {
      rangeLength: {
        value: value
      }
    };
  };
};

var uuids = {
  '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

var uuid = function uuid(version) {
  return function (control) {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
      return null;
    }

    var v = control.value;
    var pattern = uuids[version] || uuids.all;
    return new RegExp(pattern).test(v) ? null : {
      uuid: true
    };
  };
};

var url = function url(control) {
  if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required(control))) {
    return null;
  }

  var v = control.value;
  /* tslint:disable */

  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : {
    'url': true
  };
  /* tslint:enable */
};

var ARRAY_LENGTH_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return ArrayLengthValidator;
  }),
  multi: true
};

var ArrayLengthValidator = /*@__PURE__*/function () {
  var ArrayLengthValidator = /*#__PURE__*/function () {
    function ArrayLengthValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ArrayLengthValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ArrayLengthValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = arrayLength(this.arrayLength);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'arrayLength') {
            this.validator = arrayLength(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return ArrayLengthValidator;
  }();

  ArrayLengthValidator.ɵfac = function ArrayLengthValidator_Factory(t) {
    return new (t || ArrayLengthValidator)();
  };

  ArrayLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: ArrayLengthValidator,
    selectors: [["", "arrayLength", "", "formControlName", ""], ["", "arrayLength", "", "formControl", ""], ["", "arrayLength", "", "ngModel", ""]],
    inputs: {
      arrayLength: "arrayLength"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([ARRAY_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return ArrayLengthValidator;
}();

var BASE64_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return Base64Validator;
  }),
  multi: true
};

var Base64Validator = /*@__PURE__*/function () {
  var Base64Validator = /*#__PURE__*/function () {
    function Base64Validator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Base64Validator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Base64Validator, [{
      key: "validate",
      value: function validate(c) {
        return base64(c);
      }
    }]);

    return Base64Validator;
  }();

  Base64Validator.ɵfac = function Base64Validator_Factory(t) {
    return new (t || Base64Validator)();
  };

  Base64Validator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: Base64Validator,
    selectors: [["", "base64", "", "formControlName", ""], ["", "base64", "", "formControl", ""], ["", "base64", "", "ngModel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([BASE64_VALIDATOR])]
  });
  return Base64Validator;
}();

var CREDIT_CARD_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return CreditCardValidator;
  }),
  multi: true
};

var CreditCardValidator = /*@__PURE__*/function () {
  var CreditCardValidator = /*#__PURE__*/function () {
    function CreditCardValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CreditCardValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CreditCardValidator, [{
      key: "validate",
      value: function validate(c) {
        return creditCard(c);
      }
    }]);

    return CreditCardValidator;
  }();

  CreditCardValidator.ɵfac = function CreditCardValidator_Factory(t) {
    return new (t || CreditCardValidator)();
  };

  CreditCardValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: CreditCardValidator,
    selectors: [["", "creditCard", "", "formControlName", ""], ["", "creditCard", "", "formControl", ""], ["", "creditCard", "", "ngModel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([CREDIT_CARD_VALIDATOR])]
  });
  return CreditCardValidator;
}();

var DATE_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return DateValidator;
  }),
  multi: true
};

var DateValidator = /*@__PURE__*/function () {
  var DateValidator = /*#__PURE__*/function () {
    function DateValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DateValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DateValidator, [{
      key: "validate",
      value: function validate(c) {
        return date(c);
      }
    }]);

    return DateValidator;
  }();

  DateValidator.ɵfac = function DateValidator_Factory(t) {
    return new (t || DateValidator)();
  };

  DateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: DateValidator,
    selectors: [["", "date", "", "formControlName", ""], ["", "date", "", "formControl", ""], ["", "date", "", "ngModel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([DATE_VALIDATOR])]
  });
  return DateValidator;
}();

var DATE_ISO_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return DateISOValidator;
  }),
  multi: true
};

var DateISOValidator = /*@__PURE__*/function () {
  var DateISOValidator = /*#__PURE__*/function () {
    function DateISOValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DateISOValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DateISOValidator, [{
      key: "validate",
      value: function validate(c) {
        return dateISO(c);
      }
    }]);

    return DateISOValidator;
  }();

  DateISOValidator.ɵfac = function DateISOValidator_Factory(t) {
    return new (t || DateISOValidator)();
  };

  DateISOValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: DateISOValidator,
    selectors: [["", "dateISO", "", "formControlName", ""], ["", "dateISO", "", "formControl", ""], ["", "dateISO", "", "ngModel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([DATE_ISO_VALIDATOR])]
  });
  return DateISOValidator;
}();

var DIGITS_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return DigitsValidator;
  }),
  multi: true
};

var DigitsValidator = /*@__PURE__*/function () {
  var DigitsValidator = /*#__PURE__*/function () {
    function DigitsValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DigitsValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DigitsValidator, [{
      key: "validate",
      value: function validate(c) {
        return digits(c);
      }
    }]);

    return DigitsValidator;
  }();

  DigitsValidator.ɵfac = function DigitsValidator_Factory(t) {
    return new (t || DigitsValidator)();
  };

  DigitsValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: DigitsValidator,
    selectors: [["", "digits", "", "formControlName", ""], ["", "digits", "", "formControl", ""], ["", "digits", "", "ngModel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([DIGITS_VALIDATOR])]
  });
  return DigitsValidator;
}();

var EMAIL_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return EmailValidator;
  }),
  multi: true
};

var EmailValidator = /*@__PURE__*/function () {
  var EmailValidator = /*#__PURE__*/function () {
    function EmailValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmailValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmailValidator, [{
      key: "validate",
      value: function validate(c) {
        return email(c);
      }
    }]);

    return EmailValidator;
  }();

  EmailValidator.ɵfac = function EmailValidator_Factory(t) {
    return new (t || EmailValidator)();
  };

  EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: EmailValidator,
    selectors: [["", "ngvemail", "", "formControlName", ""], ["", "ngvemail", "", "formControl", ""], ["", "ngvemail", "", "ngModel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
  });
  return EmailValidator;
}();

var EQUAL_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return EqualValidator;
  }),
  multi: true
};

var EqualValidator = /*@__PURE__*/function () {
  var EqualValidator = /*#__PURE__*/function () {
    function EqualValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EqualValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EqualValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = equal(this.equal);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'equal') {
            this.validator = equal(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return EqualValidator;
  }();

  EqualValidator.ɵfac = function EqualValidator_Factory(t) {
    return new (t || EqualValidator)();
  };

  EqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: EqualValidator,
    selectors: [["", "equal", "", "formControlName", ""], ["", "equal", "", "formControl", ""], ["", "equal", "", "ngModel", ""]],
    inputs: {
      equal: "equal"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return EqualValidator;
}();

var EQUAL_TO_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return EqualToValidator;
  }),
  multi: true
};

var EqualToValidator = /*@__PURE__*/function () {
  var EqualToValidator = /*#__PURE__*/function () {
    function EqualToValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EqualToValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EqualToValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = equalTo(this.equalTo);
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }]);

    return EqualToValidator;
  }();

  EqualToValidator.ɵfac = function EqualToValidator_Factory(t) {
    return new (t || EqualToValidator)();
  };

  EqualToValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: EqualToValidator,
    selectors: [["", "equalTo", "", "formControlName", ""], ["", "equalTo", "", "formControl", ""], ["", "equalTo", "", "ngModel", ""]],
    inputs: {
      equalTo: "equalTo"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([EQUAL_TO_VALIDATOR])]
  });
  return EqualToValidator;
}();

var GREATER_THAN_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return GreaterThanValidator;
  }),
  multi: true
};

var GreaterThanValidator = /*@__PURE__*/function () {
  var GreaterThanValidator = /*#__PURE__*/function () {
    function GreaterThanValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GreaterThanValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GreaterThanValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = gt(this.gt);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'gt') {
            this.validator = gt(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return GreaterThanValidator;
  }();

  GreaterThanValidator.ɵfac = function GreaterThanValidator_Factory(t) {
    return new (t || GreaterThanValidator)();
  };

  GreaterThanValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: GreaterThanValidator,
    selectors: [["", "gt", "", "formControlName", ""], ["", "gt", "", "formControl", ""], ["", "gt", "", "ngModel", ""]],
    inputs: {
      gt: "gt"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([GREATER_THAN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return GreaterThanValidator;
}();

var GREATER_THAN_EQUAL_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return GreaterThanEqualValidator;
  }),
  multi: true
};

var GreaterThanEqualValidator = /*@__PURE__*/function () {
  var GreaterThanEqualValidator = /*#__PURE__*/function () {
    function GreaterThanEqualValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GreaterThanEqualValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GreaterThanEqualValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = gte(this.gte);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'gte') {
            this.validator = gte(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return GreaterThanEqualValidator;
  }();

  GreaterThanEqualValidator.ɵfac = function GreaterThanEqualValidator_Factory(t) {
    return new (t || GreaterThanEqualValidator)();
  };

  GreaterThanEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: GreaterThanEqualValidator,
    selectors: [["", "gte", "", "formControlName", ""], ["", "gte", "", "formControl", ""], ["", "gte", "", "ngModel", ""]],
    inputs: {
      gte: "gte"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([GREATER_THAN_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return GreaterThanEqualValidator;
}();

var JSON_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return JSONValidator;
  }),
  multi: true
};

var JSONValidator = /*@__PURE__*/function () {
  var JSONValidator = /*#__PURE__*/function () {
    function JSONValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, JSONValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(JSONValidator, [{
      key: "validate",
      value: function validate(c) {
        return json(c);
      }
    }]);

    return JSONValidator;
  }();

  JSONValidator.ɵfac = function JSONValidator_Factory(t) {
    return new (t || JSONValidator)();
  };

  JSONValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: JSONValidator,
    selectors: [["", "json", "", "formControlName", ""], ["", "json", "", "formControl", ""], ["", "json", "", "ngModel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([JSON_VALIDATOR])]
  });
  return JSONValidator;
}();

var LESS_THAN_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return LessThanValidator;
  }),
  multi: true
};

var LessThanValidator = /*@__PURE__*/function () {
  var LessThanValidator = /*#__PURE__*/function () {
    function LessThanValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LessThanValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LessThanValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = lt(this.lt);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'lt') {
            this.validator = lt(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return LessThanValidator;
  }();

  LessThanValidator.ɵfac = function LessThanValidator_Factory(t) {
    return new (t || LessThanValidator)();
  };

  LessThanValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: LessThanValidator,
    selectors: [["", "lt", "", "formControlName", ""], ["", "lt", "", "formControl", ""], ["", "lt", "", "ngModel", ""]],
    inputs: {
      lt: "lt"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([LESS_THAN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return LessThanValidator;
}();

var LESS_THAN_EQUAL_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return LessThanEqualValidator;
  }),
  multi: true
};

var LessThanEqualValidator = /*@__PURE__*/function () {
  var LessThanEqualValidator = /*#__PURE__*/function () {
    function LessThanEqualValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LessThanEqualValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LessThanEqualValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = lte(this.lte);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'lte') {
            this.validator = lte(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return LessThanEqualValidator;
  }();

  LessThanEqualValidator.ɵfac = function LessThanEqualValidator_Factory(t) {
    return new (t || LessThanEqualValidator)();
  };

  LessThanEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: LessThanEqualValidator,
    selectors: [["", "lte", "", "formControlName", ""], ["", "lte", "", "formControl", ""], ["", "lte", "", "ngModel", ""]],
    inputs: {
      lte: "lte"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([LESS_THAN_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return LessThanEqualValidator;
}();

var MAX_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return MaxValidator;
  }),
  multi: true
};

var MaxValidator = /*@__PURE__*/function () {
  var MaxValidator = /*#__PURE__*/function () {
    function MaxValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MaxValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MaxValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = max(this.max);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'max') {
            this.validator = max(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return MaxValidator;
  }();

  MaxValidator.ɵfac = function MaxValidator_Factory(t) {
    return new (t || MaxValidator)();
  };

  MaxValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MaxValidator,
    selectors: [["", "max", "", "formControlName", ""], ["", "max", "", "formControl", ""], ["", "max", "", "ngModel", ""]],
    inputs: {
      max: "max"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAX_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return MaxValidator;
}();

var MAX_DATE_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return MaxDateValidator;
  }),
  multi: true
};

var MaxDateValidator = /*@__PURE__*/function () {
  var MaxDateValidator = /*#__PURE__*/function () {
    function MaxDateValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MaxDateValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MaxDateValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = maxDate(this.maxDate);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'maxDate') {
            this.validator = maxDate(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return MaxDateValidator;
  }();

  MaxDateValidator.ɵfac = function MaxDateValidator_Factory(t) {
    return new (t || MaxDateValidator)();
  };

  MaxDateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MaxDateValidator,
    selectors: [["", "maxDate", "", "formControlName", ""], ["", "maxDate", "", "formControl", ""], ["", "maxDate", "", "ngModel", ""]],
    inputs: {
      maxDate: "maxDate"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAX_DATE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return MaxDateValidator;
}();

var MIN_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return MinValidator;
  }),
  multi: true
};

var MinValidator = /*@__PURE__*/function () {
  var MinValidator = /*#__PURE__*/function () {
    function MinValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MinValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MinValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = min(this.min);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'min') {
            this.validator = min(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return MinValidator;
  }();

  MinValidator.ɵfac = function MinValidator_Factory(t) {
    return new (t || MinValidator)();
  };

  MinValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MinValidator,
    selectors: [["", "min", "", "formControlName", ""], ["", "min", "", "formControl", ""], ["", "min", "", "ngModel", ""]],
    inputs: {
      min: "min"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MIN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return MinValidator;
}();

var MIN_DATE_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return MinDateValidator;
  }),
  multi: true
};

var MinDateValidator = /*@__PURE__*/function () {
  var MinDateValidator = /*#__PURE__*/function () {
    function MinDateValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MinDateValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MinDateValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = minDate(this.minDate);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'minDate') {
            this.validator = minDate(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return MinDateValidator;
  }();

  MinDateValidator.ɵfac = function MinDateValidator_Factory(t) {
    return new (t || MinDateValidator)();
  };

  MinDateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MinDateValidator,
    selectors: [["", "minDate", "", "formControlName", ""], ["", "minDate", "", "formControl", ""], ["", "minDate", "", "ngModel", ""]],
    inputs: {
      minDate: "minDate"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MIN_DATE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return MinDateValidator;
}();

var NOT_EQUAL_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return NotEqualValidator;
  }),
  multi: true
};

var NotEqualValidator = /*@__PURE__*/function () {
  var NotEqualValidator = /*#__PURE__*/function () {
    function NotEqualValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotEqualValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotEqualValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = notEqual(this.notEqual);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'notEqual') {
            this.validator = notEqual(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return NotEqualValidator;
  }();

  NotEqualValidator.ɵfac = function NotEqualValidator_Factory(t) {
    return new (t || NotEqualValidator)();
  };

  NotEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: NotEqualValidator,
    selectors: [["", "notEqual", "", "formControlName", ""], ["", "notEqual", "", "formControl", ""], ["", "notEqual", "", "ngModel", ""]],
    inputs: {
      notEqual: "notEqual"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([NOT_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return NotEqualValidator;
}();

var NOT_EQUAL_TO_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return NotEqualToValidator;
  }),
  multi: true
};

var NotEqualToValidator = /*@__PURE__*/function () {
  var NotEqualToValidator = /*#__PURE__*/function () {
    function NotEqualToValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotEqualToValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotEqualToValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = notEqualTo(this.notEqualTo);
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }]);

    return NotEqualToValidator;
  }();

  NotEqualToValidator.ɵfac = function NotEqualToValidator_Factory(t) {
    return new (t || NotEqualToValidator)();
  };

  NotEqualToValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: NotEqualToValidator,
    selectors: [["", "notEqualTo", "", "formControlName", ""], ["", "notEqualTo", "", "formControl", ""], ["", "notEqualTo", "", "ngModel", ""]],
    inputs: {
      notEqualTo: "notEqualTo"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([NOT_EQUAL_TO_VALIDATOR])]
  });
  return NotEqualToValidator;
}();

var NUMBER_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return NumberValidator;
  }),
  multi: true
};

var NumberValidator = /*@__PURE__*/function () {
  var NumberValidator = /*#__PURE__*/function () {
    function NumberValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NumberValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NumberValidator, [{
      key: "validate",
      value: function validate(c) {
        return number(c);
      }
    }]);

    return NumberValidator;
  }();

  NumberValidator.ɵfac = function NumberValidator_Factory(t) {
    return new (t || NumberValidator)();
  };

  NumberValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: NumberValidator,
    selectors: [["", "number", "", "formControlName", ""], ["", "number", "", "formControl", ""], ["", "number", "", "ngModel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([NUMBER_VALIDATOR])]
  });
  return NumberValidator;
}();

var PROPERTY_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return PropertyValidator;
  }),
  multi: true
};

var PropertyValidator = /*@__PURE__*/function () {
  var PropertyValidator = /*#__PURE__*/function () {
    function PropertyValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PropertyValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PropertyValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = property(this.property);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'property') {
            this.validator = property(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return PropertyValidator;
  }();

  PropertyValidator.ɵfac = function PropertyValidator_Factory(t) {
    return new (t || PropertyValidator)();
  };

  PropertyValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: PropertyValidator,
    selectors: [["", "property", "", "formControlName", ""], ["", "property", "", "formControl", ""], ["", "property", "", "ngModel", ""]],
    inputs: {
      property: "property"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([PROPERTY_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return PropertyValidator;
}();

var RANGE_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return RangeValidator;
  }),
  multi: true
};

var RangeValidator = /*@__PURE__*/function () {
  var RangeValidator = /*#__PURE__*/function () {
    function RangeValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RangeValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RangeValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = range(this.range);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'range') {
            this.validator = range(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return RangeValidator;
  }();

  RangeValidator.ɵfac = function RangeValidator_Factory(t) {
    return new (t || RangeValidator)();
  };

  RangeValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: RangeValidator,
    selectors: [["", "range", "", "formControlName", ""], ["", "range", "", "formControl", ""], ["", "range", "", "ngModel", ""]],
    inputs: {
      range: "range"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([RANGE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return RangeValidator;
}();

var RANGE_LENGTH_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return RangeLengthValidator;
  }),
  multi: true
};

var RangeLengthValidator = /*@__PURE__*/function () {
  var RangeLengthValidator = /*#__PURE__*/function () {
    function RangeLengthValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RangeLengthValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RangeLengthValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = rangeLength(this.rangeLength);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'rangeLength') {
            this.validator = rangeLength(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return RangeLengthValidator;
  }();

  RangeLengthValidator.ɵfac = function RangeLengthValidator_Factory(t) {
    return new (t || RangeLengthValidator)();
  };

  RangeLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: RangeLengthValidator,
    selectors: [["", "rangeLength", "", "formControlName", ""], ["", "rangeLength", "", "formControl", ""], ["", "rangeLength", "", "ngModel", ""]],
    inputs: {
      rangeLength: "rangeLength"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([RANGE_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return RangeLengthValidator;
}();

var URL_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return UrlValidator;
  }),
  multi: true
};

var UrlValidator = /*@__PURE__*/function () {
  var UrlValidator = /*#__PURE__*/function () {
    function UrlValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UrlValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UrlValidator, [{
      key: "validate",
      value: function validate(c) {
        return url(c);
      }
    }]);

    return UrlValidator;
  }();

  UrlValidator.ɵfac = function UrlValidator_Factory(t) {
    return new (t || UrlValidator)();
  };

  UrlValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: UrlValidator,
    selectors: [["", "url", "", "formControlName", ""], ["", "url", "", "formControl", ""], ["", "url", "", "ngModel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([URL_VALIDATOR])]
  });
  return UrlValidator;
}();

var UUID_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
    return UUIDValidator;
  }),
  multi: true
};

var UUIDValidator = /*@__PURE__*/function () {
  var UUIDValidator = /*#__PURE__*/function () {
    function UUIDValidator() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UUIDValidator);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UUIDValidator, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.validator = uuid(this.uuid);
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        for (var key in changes) {
          if (key === 'uuid') {
            this.validator = uuid(changes[key].currentValue);

            if (this.onChange) {
              this.onChange();
            }
          }
        }
      }
    }, {
      key: "validate",
      value: function validate(c) {
        return this.validator(c);
      }
    }, {
      key: "registerOnValidatorChange",
      value: function registerOnValidatorChange(fn) {
        this.onChange = fn;
      }
    }]);

    return UUIDValidator;
  }();

  UUIDValidator.ɵfac = function UUIDValidator_Factory(t) {
    return new (t || UUIDValidator)();
  };

  UUIDValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: UUIDValidator,
    selectors: [["", "uuid", "", "formControlName", ""], ["", "uuid", "", "formControl", ""], ["", "uuid", "", "ngModel", ""]],
    inputs: {
      uuid: "uuid"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([UUID_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
  return UUIDValidator;
}();

var CustomValidators = {
  arrayLength: arrayLength,
  base64: base64,
  creditCard: creditCard,
  date: date,
  dateISO: dateISO,
  digits: digits,
  email: email,
  equal: equal,
  equalTo: equalTo,
  gt: gt,
  gte: gte,
  json: json,
  lt: lt,
  lte: lte,
  max: max,
  maxDate: maxDate,
  min: min,
  minDate: minDate,
  notEqual: notEqual,
  notEqualTo: notEqualTo,
  number: number,
  property: property,
  range: range,
  rangeLength: rangeLength,
  url: url,
  uuid: uuid
};
var CustomDirectives = [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator];

var CustomFormsModule = /*@__PURE__*/function () {
  var CustomFormsModule = function CustomFormsModule() {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomFormsModule);
  };

  CustomFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: CustomFormsModule
  });
  CustomFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    factory: function CustomFormsModule_Factory(t) {
      return new (t || CustomFormsModule)();
    }
  });
  return CustomFormsModule;
}();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CustomFormsModule, {
    declarations: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator],
    exports: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./src/app/ngx-wizard/forms.module.ts":
/*!********************************************!*\
  !*** ./src/app/ngx-wizard/forms.module.ts ***!
  \********************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms.routing */ "./src/app/ngx-wizard/forms.routing.ts");
/* harmony import */ var _ngx_wizard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngx-wizard.module */ "./src/app/ngx-wizard/ngx-wizard.module.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-custom-validators */ "./node_modules/ngx-custom-validators/fesm2015/ngx-custom-validators.js");











var FormModule = /** @class */ /*@__PURE__*/ (function () {
    function FormModule() {
    }
    FormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormModule });
    FormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormModule_Factory(t) { return new (t || FormModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_forms_routing__WEBPACK_IMPORTED_MODULE_5__["FormsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ngx_wizard_module__WEBPACK_IMPORTED_MODULE_6__["NGXFormWizardModule"],
                ngx_custom_validators__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]] });
    return FormModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ngx_wizard_module__WEBPACK_IMPORTED_MODULE_6__["NGXFormWizardModule"],
            ngx_custom_validators__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] });
})();


/***/ }),

/***/ "./src/app/ngx-wizard/forms.routing.ts":
/*!*********************************************!*\
  !*** ./src/app/ngx-wizard/forms.routing.ts ***!
  \*********************************************/
/*! exports provided: FormsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutes", function() { return FormsRoutes; });
var FormsRoutes = [
    {
        path: '',
        children: [
            // {
            //   path: 'ngx',
            //   loadChildren: () => import('./ngx-wizard.module').then(m => m.NGXFormWizardModule)
            // }
            { path: 'ngx', loadChildren: './ngx-wizard.module#NGXFormWizardModule' },
        ]
    }
];


/***/ })

}]);