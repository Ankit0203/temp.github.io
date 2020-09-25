(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@tweenjs/tween.js/src/Tween.js":
/*!*****************************************************!*\
  !*** ./node_modules/@tweenjs/tween.js/src/Tween.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var _Group = function _Group() {
  this._tweens = {};
  this._tweensAddedDuringUpdate = {};
};

_Group.prototype = {
  getAll: function getAll() {
    return Object.keys(this._tweens).map(function (tweenId) {
      return this._tweens[tweenId];
    }.bind(this));
  },
  removeAll: function removeAll() {
    this._tweens = {};
  },
  add: function add(tween) {
    this._tweens[tween.getId()] = tween;
    this._tweensAddedDuringUpdate[tween.getId()] = tween;
  },
  remove: function remove(tween) {
    delete this._tweens[tween.getId()];
    delete this._tweensAddedDuringUpdate[tween.getId()];
  },
  update: function update(time, preserve) {
    var tweenIds = Object.keys(this._tweens);

    if (tweenIds.length === 0) {
      return false;
    }

    time = time !== undefined ? time : TWEEN.now(); // Tweens are updated in "batches". If you add a new tween during an update, then the
    // new tween will be updated in the next batch.
    // If you remove a tween during an update, it may or may not be updated. However,
    // if the removed tween was added during the current batch, then it will not be updated.

    while (tweenIds.length > 0) {
      this._tweensAddedDuringUpdate = {};

      for (var i = 0; i < tweenIds.length; i++) {
        var tween = this._tweens[tweenIds[i]];

        if (tween && tween.update(time) === false) {
          tween._isPlaying = false;

          if (!preserve) {
            delete this._tweens[tweenIds[i]];
          }
        }
      }

      tweenIds = Object.keys(this._tweensAddedDuringUpdate);
    }

    return true;
  }
};
var TWEEN = new _Group();
TWEEN.Group = _Group;
TWEEN._nextId = 0;

TWEEN.nextId = function () {
  return TWEEN._nextId++;
}; // Include a performance.now polyfill.
// In node.js, use process.hrtime.


if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
  TWEEN.now = function () {
    var time = process.hrtime(); // Convert [seconds, nanoseconds] to milliseconds.

    return time[0] * 1000 + time[1] / 1000000;
  };
} // In a browser, use self.performance.now if it is available.
else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    TWEEN.now = self.performance.now.bind(self.performance);
  } // Use Date.now if it is available.
  else if (Date.now !== undefined) {
      TWEEN.now = Date.now;
    } // Otherwise, use 'new Date().getTime()'.
    else {
        TWEEN.now = function () {
          return new Date().getTime();
        };
      }

TWEEN.Tween = function (object, group) {
  this._object = object;
  this._valuesStart = {};
  this._valuesEnd = {};
  this._valuesStartRepeat = {};
  this._duration = 1000;
  this._repeat = 0;
  this._repeatDelayTime = undefined;
  this._yoyo = false;
  this._isPlaying = false;
  this._reversed = false;
  this._delayTime = 0;
  this._startTime = null;
  this._easingFunction = TWEEN.Easing.Linear.None;
  this._interpolationFunction = TWEEN.Interpolation.Linear;
  this._chainedTweens = [];
  this._onStartCallback = null;
  this._onStartCallbackFired = false;
  this._onUpdateCallback = null;
  this._onRepeatCallback = null;
  this._onCompleteCallback = null;
  this._onStopCallback = null;
  this._group = group || TWEEN;
  this._id = TWEEN.nextId();
};

TWEEN.Tween.prototype = {
  getId: function getId() {
    return this._id;
  },
  isPlaying: function isPlaying() {
    return this._isPlaying;
  },
  to: function to(properties, duration) {
    this._valuesEnd = Object.create(properties);

    if (duration !== undefined) {
      this._duration = duration;
    }

    return this;
  },
  duration: function duration(d) {
    this._duration = d;
    return this;
  },
  start: function start(time) {
    this._group.add(this);

    this._isPlaying = true;
    this._onStartCallbackFired = false;
    this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
    this._startTime += this._delayTime;

    for (var property in this._valuesEnd) {
      // Check if an Array was provided as property value
      if (this._valuesEnd[property] instanceof Array) {
        if (this._valuesEnd[property].length === 0) {
          continue;
        } // Create a local copy of the Array with the start value at the front


        this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
      } // If `to()` specifies a property that doesn't exist in the source object,
      // we should not set that property in the object


      if (this._object[property] === undefined) {
        continue;
      } // Save the starting value.


      this._valuesStart[property] = this._object[property];

      if (this._valuesStart[property] instanceof Array === false) {
        this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
      }

      this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
    }

    return this;
  },
  stop: function stop() {
    if (!this._isPlaying) {
      return this;
    }

    this._group.remove(this);

    this._isPlaying = false;

    if (this._onStopCallback !== null) {
      this._onStopCallback(this._object);
    }

    this.stopChainedTweens();
    return this;
  },
  end: function end() {
    this.update(Infinity);
    return this;
  },
  stopChainedTweens: function stopChainedTweens() {
    for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
      this._chainedTweens[i].stop();
    }
  },
  group: function group(_group) {
    this._group = _group;
    return this;
  },
  delay: function delay(amount) {
    this._delayTime = amount;
    return this;
  },
  repeat: function repeat(times) {
    this._repeat = times;
    return this;
  },
  repeatDelay: function repeatDelay(amount) {
    this._repeatDelayTime = amount;
    return this;
  },
  yoyo: function yoyo(_yoyo) {
    this._yoyo = _yoyo;
    return this;
  },
  easing: function easing(easingFunction) {
    this._easingFunction = easingFunction;
    return this;
  },
  interpolation: function interpolation(interpolationFunction) {
    this._interpolationFunction = interpolationFunction;
    return this;
  },
  chain: function chain() {
    this._chainedTweens = arguments;
    return this;
  },
  onStart: function onStart(callback) {
    this._onStartCallback = callback;
    return this;
  },
  onUpdate: function onUpdate(callback) {
    this._onUpdateCallback = callback;
    return this;
  },
  onRepeat: function onRepeat(callback) {
    this._onRepeatCallback = callback;
    return this;
  },
  onComplete: function onComplete(callback) {
    this._onCompleteCallback = callback;
    return this;
  },
  onStop: function onStop(callback) {
    this._onStopCallback = callback;
    return this;
  },
  update: function update(time) {
    var property;
    var elapsed;
    var value;

    if (time < this._startTime) {
      return true;
    }

    if (this._onStartCallbackFired === false) {
      if (this._onStartCallback !== null) {
        this._onStartCallback(this._object);
      }

      this._onStartCallbackFired = true;
    }

    elapsed = (time - this._startTime) / this._duration;
    elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
    value = this._easingFunction(elapsed);

    for (property in this._valuesEnd) {
      // Don't update properties that do not exist in the source object
      if (this._valuesStart[property] === undefined) {
        continue;
      }

      var start = this._valuesStart[property] || 0;
      var end = this._valuesEnd[property];

      if (end instanceof Array) {
        this._object[property] = this._interpolationFunction(end, value);
      } else {
        // Parses relative end values with start as base (e.g.: +10, -3)
        if (typeof end === 'string') {
          if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            end = start + parseFloat(end);
          } else {
            end = parseFloat(end);
          }
        } // Protect against non numeric properties.


        if (typeof end === 'number') {
          this._object[property] = start + (end - start) * value;
        }
      }
    }

    if (this._onUpdateCallback !== null) {
      this._onUpdateCallback(this._object, elapsed);
    }

    if (elapsed === 1) {
      if (this._repeat > 0) {
        if (isFinite(this._repeat)) {
          this._repeat--;
        } // Reassign starting values, restart by making startTime = now


        for (property in this._valuesStartRepeat) {
          if (typeof this._valuesEnd[property] === 'string') {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
          }

          if (this._yoyo) {
            var tmp = this._valuesStartRepeat[property];
            this._valuesStartRepeat[property] = this._valuesEnd[property];
            this._valuesEnd[property] = tmp;
          }

          this._valuesStart[property] = this._valuesStartRepeat[property];
        }

        if (this._yoyo) {
          this._reversed = !this._reversed;
        }

        if (this._repeatDelayTime !== undefined) {
          this._startTime = time + this._repeatDelayTime;
        } else {
          this._startTime = time + this._delayTime;
        }

        if (this._onRepeatCallback !== null) {
          this._onRepeatCallback(this._object);
        }

        return true;
      } else {
        if (this._onCompleteCallback !== null) {
          this._onCompleteCallback(this._object);
        }

        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
          // Make the chained tweens start exactly at the time they should,
          // even if the `update()` method was called way past the duration of the tween
          this._chainedTweens[i].start(this._startTime + this._duration);
        }

        return false;
      }
    }

    return true;
  }
};
TWEEN.Easing = {
  Linear: {
    None: function None(k) {
      return k;
    }
  },
  Quadratic: {
    In: function In(k) {
      return k * k;
    },
    Out: function Out(k) {
      return k * (2 - k);
    },
    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k;
      }

      return -0.5 * (--k * (k - 2) - 1);
    }
  },
  Cubic: {
    In: function In(k) {
      return k * k * k;
    },
    Out: function Out(k) {
      return --k * k * k + 1;
    },
    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k;
      }

      return 0.5 * ((k -= 2) * k * k + 2);
    }
  },
  Quartic: {
    In: function In(k) {
      return k * k * k * k;
    },
    Out: function Out(k) {
      return 1 - --k * k * k * k;
    },
    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k;
      }

      return -0.5 * ((k -= 2) * k * k * k - 2);
    }
  },
  Quintic: {
    In: function In(k) {
      return k * k * k * k * k;
    },
    Out: function Out(k) {
      return --k * k * k * k * k + 1;
    },
    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k * k;
      }

      return 0.5 * ((k -= 2) * k * k * k * k + 2);
    }
  },
  Sinusoidal: {
    In: function In(k) {
      return 1 - Math.cos(k * Math.PI / 2);
    },
    Out: function Out(k) {
      return Math.sin(k * Math.PI / 2);
    },
    InOut: function InOut(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }
  },
  Exponential: {
    In: function In(k) {
      return k === 0 ? 0 : Math.pow(1024, k - 1);
    },
    Out: function Out(k) {
      return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },
    InOut: function InOut(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      if ((k *= 2) < 1) {
        return 0.5 * Math.pow(1024, k - 1);
      }

      return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    }
  },
  Circular: {
    In: function In(k) {
      return 1 - Math.sqrt(1 - k * k);
    },
    Out: function Out(k) {
      return Math.sqrt(1 - --k * k);
    },
    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return -0.5 * (Math.sqrt(1 - k * k) - 1);
      }

      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    }
  },
  Elastic: {
    In: function In(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
    },
    Out: function Out(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
    },
    InOut: function InOut(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      k *= 2;

      if (k < 1) {
        return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
      }

      return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
    }
  },
  Back: {
    In: function In(k) {
      var s = 1.70158;
      return k * k * ((s + 1) * k - s);
    },
    Out: function Out(k) {
      var s = 1.70158;
      return --k * k * ((s + 1) * k + s) + 1;
    },
    InOut: function InOut(k) {
      var s = 1.70158 * 1.525;

      if ((k *= 2) < 1) {
        return 0.5 * (k * k * ((s + 1) * k - s));
      }

      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    }
  },
  Bounce: {
    In: function In(k) {
      return 1 - TWEEN.Easing.Bounce.Out(1 - k);
    },
    Out: function Out(k) {
      if (k < 1 / 2.75) {
        return 7.5625 * k * k;
      } else if (k < 2 / 2.75) {
        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
      } else if (k < 2.5 / 2.75) {
        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
      } else {
        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
      }
    },
    InOut: function InOut(k) {
      if (k < 0.5) {
        return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
      }

      return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
    }
  }
};
TWEEN.Interpolation = {
  Linear: function Linear(v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = TWEEN.Interpolation.Utils.Linear;

    if (k < 0) {
      return fn(v[0], v[1], f);
    }

    if (k > 1) {
      return fn(v[m], v[m - 1], m - f);
    }

    return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
  },
  Bezier: function Bezier(v, k) {
    var b = 0;
    var n = v.length - 1;
    var pw = Math.pow;
    var bn = TWEEN.Interpolation.Utils.Bernstein;

    for (var i = 0; i <= n; i++) {
      b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
    }

    return b;
  },
  CatmullRom: function CatmullRom(v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = TWEEN.Interpolation.Utils.CatmullRom;

    if (v[0] === v[m]) {
      if (k < 0) {
        i = Math.floor(f = m * (1 + k));
      }

      return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
    } else {
      if (k < 0) {
        return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
      }

      if (k > 1) {
        return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
      }

      return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
    }
  },
  Utils: {
    Linear: function Linear(p0, p1, t) {
      return (p1 - p0) * t + p0;
    },
    Bernstein: function Bernstein(n, i) {
      var fc = TWEEN.Interpolation.Utils.Factorial;
      return fc(n) / fc(i) / fc(n - i);
    },
    Factorial: function () {
      var a = [1];
      return function (n) {
        var s = 1;

        if (a[n]) {
          return a[n];
        }

        for (var i = n; i > 1; i--) {
          s *= i;
        }

        a[n] = s;
        return s;
      };
    }(),
    CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
      var v0 = (p2 - p0) * 0.5;
      var v1 = (p3 - p1) * 0.5;
      var t2 = t * t;
      var t3 = t * t2;
      return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
    }
  }
}; // UMD (Universal Module Definition)

(function (root) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return TWEEN;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this);

/***/ }),

/***/ "./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js ***!
  \**********************************************************************************************/
/*! exports provided: AngularMultiSelect, AngularMultiSelectModule, ClickOutsideDirective, Item, ListFilterPipe, TemplateRenderer, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMultiSelect", function() { return AngularMultiSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMultiSelectModule", function() { return AngularMultiSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilterPipe", function() { return ListFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRenderer", function() { return TemplateRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DROPDOWN_CONTROL_VALIDATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return styleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return setPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return VirtualScrollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return VirtualScrollerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return DataService; });
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/src/Tween.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





function CIcon__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function CIcon__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "g", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function CIcon__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function CIcon__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "g", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function CIcon__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

var _c0 = ["header"];
var _c1 = ["container"];
var _c2 = ["content"];
var _c3 = ["invisiblePadding"];
var _c4 = ["*"];
var _c5 = ["searchInput"];
var _c6 = ["selectedList"];
var _c7 = ["dropdownList"];

function AngularMultiSelect_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.settings.text);
  }
}

function AngularMultiSelect_span_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r25 = ctx.$implicit;
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r25[ctx_r24.settings.labelKey], " ");
  }
}

function AngularMultiSelect_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_span_5_span_1_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.selectedItems)("ngForTrackBy", ctx_r2.trackByFn.bind(ctx_r2));
  }
}

function AngularMultiSelect_span_6_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r27[ctx_r29.settings.labelKey]);
  }
}

function AngularMultiSelect_span_6_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r30.badgeTempl)("item", item_r27);
  }
}

function AngularMultiSelect_span_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_span_6_div_1_span_1_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_span_6_div_1_span_2_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_span_6_div_1_Template_span_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      var item_r27 = ctx.$implicit;
      var k_r28 = ctx.index;
      var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r33.onItemClick(item_r27, k_r28, $event);
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r26.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r26.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "remove");
  }
}

function AngularMultiSelect_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_span_6_div_1_Template, 5, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.selectedItems)("ngForTrackBy", ctx_r3.trackByFn.bind(ctx_r3));
  }
}

function AngularMultiSelect_div_7_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r36[ctx_r38.settings.labelKey]);
  }
}

function AngularMultiSelect_div_7_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r39.badgeTempl)("item", item_r36);
  }
}

function AngularMultiSelect_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_7_div_1_span_1_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_div_7_div_1_span_2_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_7_div_1_Template_span_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43);
      var item_r36 = ctx.$implicit;
      var k_r37 = ctx.index;
      var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r42.onItemClick(item_r36, k_r37, $event);
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var k_r37 = ctx.index;
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", k_r37 > ctx_r35.settings.badgeShowLimit - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r35.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r35.badgeTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "remove");
  }
}

function AngularMultiSelect_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_7_div_1_Template, 5, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.selectedItems)("ngForTrackBy", ctx_r4.trackByFn.bind(ctx_r4));
  }
}

function AngularMultiSelect_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("+", (ctx_r5.selectedItems == null ? null : ctx_r5.selectedItems.length) - ctx_r5.settings.badgeShowLimit, "");
  }
}

function AngularMultiSelect_span_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_span_9_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);
      var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      ctx_r44.clearSelection($event);
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "remove");
  }
}

function AngularMultiSelect_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "angle-down");
  }
}

function AngularMultiSelect_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "angle-up");
  }
}

function AngularMultiSelect_div_17_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r46.isSelectAll)("disabled", ctx_r46.settings.limitSelection == (ctx_r46.selectedItems == null ? null : ctx_r46.selectedItems.length));
  }
}

function AngularMultiSelect_div_17_Template(rf, ctx) {
  if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);
      var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r47.toggleSelectAll();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_17_input_1_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r10.isSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.settings.selectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r10.isSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.settings.unSelectAllText);
  }
}

function AngularMultiSelect_img_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 40);
  }
}

function AngularMultiSelect_div_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_19_span_3_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56);
      var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r55.clearSearch();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r49.filter == undefined || (ctx_r49.filter == null ? null : ctx_r49.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "clear");
  }
}

function AngularMultiSelect_div_19_span_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_19_span_4_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58);
      var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r57.resetInfiniteSearch();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r50.filter == undefined || (ctx_r50.filter == null ? null : ctx_r50.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "clear");
  }
}

function AngularMultiSelect_div_19_input_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_19_input_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);
      var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r60.filter = $event;
    })("keyup", function AngularMultiSelect_div_19_input_5_Template_input_keyup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);
      var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r62.filterGroupedList();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx_r51.settings.searchPlaceholderText)("ngModel", ctx_r51.filter);
  }
}

function AngularMultiSelect_div_19_input_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 50, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_19_input_6_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r65);
      var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r64.filter = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx_r52.settings.searchPlaceholderText)("ngModel", ctx_r52.filter);
  }
}

function AngularMultiSelect_div_19_input_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AngularMultiSelect_div_19_input_7_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r68);
      var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r67.filter = $event;
    })("keyup", function AngularMultiSelect_div_19_input_7_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r68);
      var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r69.searchTerm$.next($event.target.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx_r53.settings.searchPlaceholderText)("ngModel", ctx_r53.filter);
  }
}

function AngularMultiSelect_div_19_c_templateRenderer_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "c-templateRenderer", 29);
  }

  if (rf & 2) {
    var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r54.searchTempl)("item", ctx_r54.item);
  }
}

function AngularMultiSelect_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "c-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AngularMultiSelect_div_19_span_3_Template, 2, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AngularMultiSelect_div_19_span_4_Template, 2, 2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AngularMultiSelect_div_19_input_5_Template, 2, 2, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AngularMultiSelect_div_19_input_6_Template, 2, 2, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AngularMultiSelect_div_19_input_7_Template, 2, 2, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AngularMultiSelect_div_19_c_templateRenderer_8_Template, 1, 2, "c-templateRenderer", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r12.settings.lazyLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.settings.lazyLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.settings.groupBy && !ctx_r12.settings.lazyLoading && !ctx_r12.searchTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r12.settings.groupBy && !ctx_r12.settings.lazyLoading && !ctx_r12.searchTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.settings.lazyLoading && !ctx_r12.searchTempl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.searchTempl);
  }
}

function AngularMultiSelect_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76);
      var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r75.toggleFilterSelectAll();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r70.isFilterSelectAll)("disabled", ctx_r70.settings.limitSelection == (ctx_r70.selectedItems == null ? null : ctx_r70.selectedItems.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r70.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r70.settings.filterSelectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r70.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r70.settings.filterUnSelectAllText);
  }
}

function AngularMultiSelect_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r78);
      var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r77.toggleFilterSelectAll();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r71.isFilterSelectAll && (ctx_r71.filter == null ? null : ctx_r71.filter.length) > 0)("disabled", ctx_r71.settings.limitSelection == (ctx_r71.selectedItems == null ? null : ctx_r71.selectedItems.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r71.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r71.settings.filterSelectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r71.isFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r71.settings.filterUnSelectAllText);
  }
}

function AngularMultiSelect_div_20_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r72.filter == undefined || (ctx_r72.filter == null ? null : ctx_r72.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r72.settings.noDataLabel);
  }
}

function AngularMultiSelect_div_20_label_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r73.filter == undefined || (ctx_r73.filter == null ? null : ctx_r73.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r73.settings.noDataLabel);
  }
}

function AngularMultiSelect_div_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_20_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r80);
      var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r79.addFilterNewItem();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r74.filter == undefined || (ctx_r74.filter == null ? null : ctx_r74.filter.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r74.settings.addNewButtonText);
  }
}

function AngularMultiSelect_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_20_div_1_Template, 7, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_div_20_div_2_Template, 7, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AngularMultiSelect_div_20_label_3_Template, 2, 2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AngularMultiSelect_div_20_label_4_Template, 2, 2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AngularMultiSelect_div_20_div_5_Template, 3, 2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r13.settings.groupBy && (ctx_r13.filter == null ? null : ctx_r13.filter.length) > 0 && ctx_r13.filterLength > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.settings.groupBy && (ctx_r13.filter == null ? null : ctx_r13.filter.length) > 0 && (ctx_r13.groupedData == null ? null : ctx_r13.groupedData.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r13.settings.groupBy && ctx_r13.filterLength == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.settings.groupBy && (ctx_r13.groupedData == null ? null : ctx_r13.groupedData.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.settings.addNewItemOnFilter && ctx_r13.filterLength == 0);
  }
}

function AngularMultiSelect_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_21_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r83);
      var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r82.toggleInfiniteFilterSelectAll();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r81.isInfiniteFilterSelectAll)("disabled", ctx_r81.settings.limitSelection == (ctx_r81.selectedItems == null ? null : ctx_r81.selectedItems.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r81.isInfiniteFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r81.settings.filterSelectAllText);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r81.isInfiniteFilterSelectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r81.settings.filterUnSelectAllText);
  }
}

function AngularMultiSelect_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_21_div_1_Template, 7, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r14.filter == null ? null : ctx_r14.filter.length) > 0 && ctx_r14.infiniteFilterLength > 0);
  }
}

function AngularMultiSelect_div_22_li_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var item_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r87.isSelected(item_r85))("disabled", ctx_r87.settings.limitSelection == (ctx_r87.selectedItems == null ? null : ctx_r87.selectedItems.length) && !ctx_r87.isSelected(item_r85));
  }
}

var _c8 = function _c8(a0) {
  return {
    "selected-item": a0
  };
};

function AngularMultiSelect_div_22_li_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_22_li_2_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r90);
      var item_r85 = ctx.$implicit;
      var i_r86 = ctx.index;
      var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r89.onItemClick(item_r85, i_r86, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_22_li_2_input_1_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r85 = ctx.$implicit;
    var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c8, ctx_r84.isSelected(item_r85) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r84.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r85[ctx_r84.settings.labelKey]);
  }
}

function AngularMultiSelect_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_div_22_li_2_Template, 4, 5, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "listFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("max-height", ctx_r15.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, ctx_r15.data, ctx_r15.filter, ctx_r15.settings.searchBy));
  }
}

function AngularMultiSelect_div_23_li_3_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var item_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r95.isSelected(item_r93))("disabled", ctx_r95.settings.limitSelection == (ctx_r95.selectedItems == null ? null : ctx_r95.selectedItems.length) && !ctx_r95.isSelected(item_r93));
  }
}

function AngularMultiSelect_div_23_li_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_23_li_3_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r98);
      var item_r93 = ctx.$implicit;
      var i_r94 = ctx.index;
      var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r97.onItemClick(item_r93, i_r94, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_23_li_3_input_1_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r93 = ctx.$implicit;
    var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c8, ctx_r92.isSelected(item_r93) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r92.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r93[ctx_r92.settings.labelKey]);
  }
}

var _c9 = function _c9(a0) {
  return {
    "height": a0
  };
};

function AngularMultiSelect_div_23_Template(rf, ctx) {
  if (rf & 1) {
    var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_23_Template_ul_vsStart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r100);
      var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r99.onScrollEnd($event);
    })("vsEnd", function AngularMultiSelect_div_23_Template_ul_vsEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r100);
      var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r101.onScrollEnd($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AngularMultiSelect_div_23_li_3_Template, 4, 5, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("max-height", ctx_r16.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r16.randomSize)("items", ctx_r16.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c9, ctx_r16.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r91.viewPortItems);
  }
}

function AngularMultiSelect_div_24_li_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var item_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r105.isSelected(item_r103))("disabled", ctx_r105.settings.limitSelection == (ctx_r105.selectedItems == null ? null : ctx_r105.selectedItems.length) && !ctx_r105.isSelected(item_r103));
  }
}

function AngularMultiSelect_div_24_li_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_24_li_2_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r108);
      var item_r103 = ctx.$implicit;
      var i_r104 = ctx.index;
      var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r107.onItemClick(item_r103, i_r104, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_24_li_2_input_1_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r103 = ctx.$implicit;
    var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c8, ctx_r102.isSelected(item_r103) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r102.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r102.itemTempl)("item", item_r103);
  }
}

function AngularMultiSelect_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_div_24_li_2_Template, 4, 6, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "listFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("max-height", ctx_r17.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, ctx_r17.data, ctx_r17.filter, ctx_r17.settings.searchBy));
  }
}

function AngularMultiSelect_div_25_li_3_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var item_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r113.isSelected(item_r111))("disabled", ctx_r113.settings.limitSelection == (ctx_r113.selectedItems == null ? null : ctx_r113.selectedItems.length) && !ctx_r113.isSelected(item_r111));
  }
}

function AngularMultiSelect_div_25_li_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_25_li_3_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r116);
      var item_r111 = ctx.$implicit;
      var i_r112 = ctx.index;
      var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r115.onItemClick(item_r111, i_r112, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_25_li_3_input_1_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r111 = ctx.$implicit;
    var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c8, ctx_r110.isSelected(item_r111) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r110.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r110.itemTempl)("item", item_r111);
  }
}

function AngularMultiSelect_div_25_Template(rf, ctx) {
  if (rf & 1) {
    var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 61, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_25_Template_ul_vsStart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r118);
      var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r117.onScrollEnd($event);
    })("vsEnd", function AngularMultiSelect_div_25_Template_ul_vsEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r118);
      var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r119.onScrollEnd($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AngularMultiSelect_div_25_li_3_Template, 4, 6, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("max-height", ctx_r18.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r18.randomSize)("items", ctx_r18.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c9, ctx_r18.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r109.viewPortItems);
  }
}

function AngularMultiSelect_div_26_span_3_li_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var item_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r126.isSelected(item_r122))("disabled", ctx_r126.settings.limitSelection == (ctx_r126.selectedItems == null ? null : ctx_r126.selectedItems.length) && !ctx_r126.isSelected(item_r122));
  }
}

var _c10 = function _c10(a0, a1) {
  return {
    "grp-title": a0,
    "grp-item": a1
  };
};

function AngularMultiSelect_div_26_span_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_26_span_3_li_1_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r130);
      var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      var item_r122 = ctx_r129.$implicit;
      var i_r123 = ctx_r129.index;
      var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r128.onItemClick(item_r122, i_r123, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_26_span_3_li_1_input_1_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c10, item_r122.grpTitle, !item_r122.grpTitle && !ctx_r124.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r124.settings.showCheckbox && !ctx_r124.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r124.itemTempl)("item", item_r122);
  }
}

function AngularMultiSelect_div_26_span_3_li_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var item_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r132.isSelected(item_r122))("disabled", ctx_r132.settings.limitSelection == (ctx_r132.selectedItems == null ? null : ctx_r132.selectedItems.length) && !ctx_r132.isSelected(item_r122));
  }
}

function AngularMultiSelect_div_26_span_3_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_26_span_3_li_2_input_1_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c10, item_r122.grpTitle, !item_r122.grpTitle && !ctx_r125.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r125.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r125.itemTempl)("item", item_r122);
  }
}

function AngularMultiSelect_div_26_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_26_span_3_li_1_Template, 4, 7, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_div_26_span_3_li_2_Template, 4, 7, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r122 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r122.grpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r122.grpTitle);
  }
}

function AngularMultiSelect_div_26_Template(rf, ctx) {
  if (rf & 1) {
    var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 61, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_26_Template_ul_vsStart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r136);
      var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r135.onScrollEnd($event);
    })("vsEnd", function AngularMultiSelect_div_26_Template_ul_vsEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r136);
      var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r137.onScrollEnd($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AngularMultiSelect_div_26_span_3_Template, 3, 2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("max-height", ctx_r19.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r19.randomSize)("items", ctx_r19.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c9, ctx_r19.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r120.viewPortItems);
  }
}

function AngularMultiSelect_div_27_span_2_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var item_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", item_r139.selected)("disabled", ctx_r141.settings.limitSelection == (ctx_r141.selectedItems == null ? null : ctx_r141.selectedItems.length) && !ctx_r141.isSelected(item_r139));
  }
}

function AngularMultiSelect_div_27_span_2_span_6_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var val_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r146.isSelected(val_r144))("disabled", ctx_r146.settings.limitSelection == (ctx_r146.selectedItems == null ? null : ctx_r146.selectedItems.length) && !ctx_r146.isSelected(val_r144));
  }
}

function AngularMultiSelect_div_27_span_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_27_span_2_span_6_Template_li_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r149);
      var val_r144 = ctx.$implicit;
      var j_r145 = ctx.index;
      var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      ctx_r148.onItemClick(val_r144, j_r145, $event);
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_div_27_span_2_span_6_input_2_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "c-templateRenderer", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var val_r144 = ctx.$implicit;
    var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c10, val_r144.grpTitle, !val_r144.grpTitle && !ctx_r142.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r142.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r142.itemTempl)("item", val_r144);
  }
}

function AngularMultiSelect_div_27_span_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_27_span_2_Template_li_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r151);
      var item_r139 = ctx.$implicit;
      var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r150.selectGroup(item_r139);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_div_27_span_2_input_2_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AngularMultiSelect_div_27_span_2_span_6_Template, 5, 7, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r139 = ctx.$implicit;
    var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c10, item_r139.grpTitle, !item_r139.grpTitle && !ctx_r138.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r138.settings.showCheckbox && !ctx_r138.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r139[ctx_r138.settings.labelKey]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r139.list);
  }
}

function AngularMultiSelect_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_div_27_span_2_Template, 7, 7, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("max-height", ctx_r20.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r20.groupedData);
  }
}

function AngularMultiSelect_div_28_span_4_li_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var item_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r158.isSelected(item_r154))("disabled", ctx_r158.settings.limitSelection == (ctx_r158.selectedItems == null ? null : ctx_r158.selectedItems.length) && !ctx_r158.isSelected(item_r154));
  }
}

var _c11 = function _c11(a0, a1, a2) {
  return {
    "grp-title": a0,
    "grp-item": a1,
    "selected-item": a2
  };
};

function AngularMultiSelect_div_28_span_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_28_span_4_li_1_input_1_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](3, _c11, item_r154.grpTitle, !item_r154.grpTitle && !ctx_r156.settings.singleSelection, ctx_r156.isSelected(item_r154) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r156.settings.showCheckbox && !item_r154.grpTitle && !ctx_r156.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r154[ctx_r156.settings.labelKey]);
  }
}

function AngularMultiSelect_div_28_span_4_li_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var item_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r161.isSelected(item_r154))("disabled", ctx_r161.settings.limitSelection == (ctx_r161.selectedItems == null ? null : ctx_r161.selectedItems.length) && !ctx_r161.isSelected(item_r154));
  }
}

function AngularMultiSelect_div_28_span_4_li_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_28_span_4_li_2_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r165);
      var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      var item_r154 = ctx_r164.$implicit;
      var i_r155 = ctx_r164.index;
      var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r163.onItemClick(item_r154, i_r155, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_28_span_4_li_2_input_1_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](3, _c11, item_r154.grpTitle, !item_r154.grpTitle && !ctx_r157.settings.singleSelection, ctx_r157.isSelected(item_r154) == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r157.settings.showCheckbox && !item_r154.grpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r154[ctx_r157.settings.labelKey]);
  }
}

function AngularMultiSelect_div_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AngularMultiSelect_div_28_span_4_li_1_Template, 4, 7, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_div_28_span_4_li_2_Template, 4, 7, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r154.grpTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r154.grpTitle);
  }
}

function AngularMultiSelect_div_28_Template(rf, ctx) {
  if (rf & 1) {
    var _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "virtual-scroller", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("vsUpdate", function AngularMultiSelect_div_28_Template_virtual_scroller_vsUpdate_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r168);
      var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r167.viewPortItems = $event;
    })("vsEnd", function AngularMultiSelect_div_28_Template_virtual_scroller_vsEnd_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r168);
      var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r169.onScrollEnd($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 61, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("vsStart", function AngularMultiSelect_div_28_Template_ul_vsStart_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r168);
      var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r170.onScrollEnd($event);
    })("vsEnd", function AngularMultiSelect_div_28_Template_ul_vsEnd_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r168);
      var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r171.onScrollEnd($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AngularMultiSelect_div_28_span_4_Template, 3, 2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("max-height", ctx_r21.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx_r21.groupedData)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c9, ctx_r21.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("enableUnequalChildrenSizes", ctx_r21.randomSize)("items", ctx_r21.virtualdata)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c9, ctx_r21.settings.maxHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r152.viewPortItems);
  }
}

function AngularMultiSelect_div_29_span_2_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var item_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", item_r173.selected)("disabled", ctx_r175.settings.limitSelection == (ctx_r175.selectedItems == null ? null : ctx_r175.selectedItems.length) && !ctx_r175.isSelected(item_r173));
  }
}

function AngularMultiSelect_div_29_span_2_span_6_input_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 39);
  }

  if (rf & 2) {
    var val_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r180.isSelected(val_r178))("disabled", ctx_r180.settings.limitSelection == (ctx_r180.selectedItems == null ? null : ctx_r180.selectedItems.length) && !ctx_r180.isSelected(val_r178));
  }
}

var _c12 = function _c12(a0, a1, a2) {
  return {
    "selected-item": a0,
    "grp-title": a1,
    "grp-item": a2
  };
};

function AngularMultiSelect_div_29_span_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    var _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_29_span_2_span_6_Template_li_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r183);
      var val_r178 = ctx.$implicit;
      var j_r179 = ctx.index;
      var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      ctx_r182.onItemClick(val_r178, j_r179, $event);
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_div_29_span_2_span_6_input_2_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var val_r178 = ctx.$implicit;
    var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](3, _c12, ctx_r176.isSelected(val_r178) == true, val_r178.grpTitle, !val_r178.grpTitle && !ctx_r176.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r176.settings.showCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](val_r178[ctx_r176.settings.labelKey]);
  }
}

function AngularMultiSelect_div_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_div_29_span_2_Template_li_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r185);
      var item_r173 = ctx.$implicit;
      var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r184.selectGroup(item_r173);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_div_29_span_2_input_2_Template, 1, 2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AngularMultiSelect_div_29_span_2_span_6_Template, 5, 7, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r173 = ctx.$implicit;
    var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c10, item_r173.grpTitle, !item_r173.grpTitle && !ctx_r172.settings.singleSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r172.settings.showCheckbox && !ctx_r172.settings.singleSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r173[ctx_r172.settings.labelKey]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r173.list);
  }
}

function AngularMultiSelect_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AngularMultiSelect_div_29_span_2_Template, 7, 7, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("max-height", ctx_r22.settings.maxHeight + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r22.groupedData);
  }
}

function AngularMultiSelect_h5_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r23.settings.noDataLabel);
  }
}

var _c13 = function _c13(a0) {
  return {
    "disabled": a0
  };
};

var _c14 = function _c14(a0) {
  return {
    "dropdown-list-top": a0
  };
};

var _c15 = function _c15(a0, a1) {
  return {
    "arrow-up": a0,
    "arrow-down": a1
  };
};

var _c16 = function _c16(a0) {
  return {
    "single-select-mode": a0
  };
};

var MyException =
/**
 * @param {?} status
 * @param {?} body
 */
function MyException(status, body) {
  Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyException);

  this.status = status;
  this.body = body;
};

var ClickOutsideDirective = /*@__PURE__*/function () {
  var ClickOutsideDirective = /*#__PURE__*/function () {
    /**
     * @param {?} _elementRef
     */
    function ClickOutsideDirective(_elementRef) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClickOutsideDirective);

      this._elementRef = _elementRef;
      this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ClickOutsideDirective, [{
      key: "onClick",
      value: function onClick(event, targetElement) {
        if (!targetElement) {
          return;
        }
        /** @type {?} */


        var clickedInside = this._elementRef.nativeElement.contains(targetElement);

        if (!clickedInside) {
          this.clickOutside.emit(event);
        }
      }
    }]);

    return ClickOutsideDirective;
  }();

  ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
    return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
  };

  ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: ClickOutsideDirective,
    selectors: [["", "clickOutside", ""]],
    hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event, $event.target);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("touchstart", function ClickOutsideDirective_touchstart_HostBindingHandler($event) {
          return ctx.onClick($event, $event.target);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
      }
    },
    outputs: {
      clickOutside: "clickOutside"
    }
  });
  return ClickOutsideDirective;
}();

var ScrollDirective = /*@__PURE__*/function () {
  var ScrollDirective = /*#__PURE__*/function () {
    /**
     * @param {?} _elementRef
     */
    function ScrollDirective(_elementRef) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ScrollDirective);

      this._elementRef = _elementRef;
      this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ScrollDirective, [{
      key: "onClick",
      value: function onClick(event, targetElement) {
        this.scroll.emit(event);
      }
    }]);

    return ScrollDirective;
  }();

  ScrollDirective.ɵfac = function ScrollDirective_Factory(t) {
    return new (t || ScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
  };

  ScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: ScrollDirective,
    selectors: [["", "scroll", ""]],
    hostBindings: function ScrollDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function ScrollDirective_scroll_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    outputs: {
      scroll: "scroll"
    }
  });
  return ScrollDirective;
}();

var styleDirective = /*@__PURE__*/function () {
  var styleDirective = /*#__PURE__*/function () {
    /**
     * @param {?} el
     */
    function styleDirective(el) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, styleDirective);

      this.el = el;
    }
    /**
     * @return {?}
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(styleDirective, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.el.nativeElement.style.top = this.styleVal;
      }
      /**
       * @return {?}
       */

    }, {
      key: "ngOnChanges",
      value: function ngOnChanges() {
        this.el.nativeElement.style.top = this.styleVal;
      }
    }]);

    return styleDirective;
  }();

  styleDirective.ɵfac = function styleDirective_Factory(t) {
    return new (t || styleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
  };

  styleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: styleDirective,
    selectors: [["", "styleProp", ""]],
    inputs: {
      styleVal: ["styleProp", "styleVal"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
  });
  return styleDirective;
}();

var setPosition = /*@__PURE__*/function () {
  var setPosition = /*#__PURE__*/function () {
    /**
     * @param {?} el
     */
    function setPosition(el) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, setPosition);

      this.el = el;
    }
    /**
     * @return {?}
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(setPosition, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        if (this.height) {
          this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
      }
      /**
       * @return {?}
       */

    }, {
      key: "ngOnChanges",
      value: function ngOnChanges() {
        if (this.height) {
          this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
      }
    }]);

    return setPosition;
  }();

  setPosition.ɵfac = function setPosition_Factory(t) {
    return new (t || setPosition)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
  };

  setPosition.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: setPosition,
    selectors: [["", "setPosition", ""]],
    inputs: {
      height: ["setPosition", "height"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
  });
  return setPosition;
}();

var DataService = /*@__PURE__*/function () {
  var DataService = /*#__PURE__*/function () {
    function DataService() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DataService);

      this.filteredData = [];
      this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    /**
     * @param {?} data
     * @return {?}
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(DataService, [{
      key: "setData",
      value: function setData(data) {
        this.filteredData = data;
        this.subject.next(data);
      }
      /**
       * @return {?}
       */

    }, {
      key: "getData",
      value: function getData() {
        return this.subject.asObservable();
      }
      /**
       * @return {?}
       */

    }, {
      key: "getFilteredData",
      value: function getFilteredData() {
        if (this.filteredData && this.filteredData.length > 0) {
          return this.filteredData;
        } else {
          return [];
        }
      }
    }]);

    return DataService;
  }();

  DataService.ɵfac = function DataService_Factory(t) {
    return new (t || DataService)();
  };

  DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DataService,
    factory: DataService.ɵfac
  });
  return DataService;
}();

var ListFilterPipe = /*@__PURE__*/function () {
  var ListFilterPipe = /*#__PURE__*/function () {
    /**
     * @param {?} ds
     */
    function ListFilterPipe(ds) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ListFilterPipe);

      this.ds = ds;
      this.filteredList = [];
    }
    /**
     * @param {?} items
     * @param {?} filter
     * @param {?} searchBy
     * @return {?}
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ListFilterPipe, [{
      key: "transform",
      value: function transform(items, filter, searchBy) {
        var _this2 = this;

        if (!items || !filter) {
          this.ds.setData(items);
          return items;
        }

        this.filteredList = items.filter(
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return _this2.applyFilter(item, filter, searchBy);
        });
        this.ds.setData(this.filteredList);
        return this.filteredList;
      }
      /**
       * @param {?} item
       * @param {?} filter
       * @param {?} searchBy
       * @return {?}
       */

    }, {
      key: "applyFilter",
      value: function applyFilter(item, filter, searchBy) {
        /** @type {?} */
        var found = false;

        if (searchBy.length > 0) {
          if (item.grpTitle) {
            found = true;
          } else {
            for (var t = 0; t < searchBy.length; t++) {
              if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
                if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                  found = true;
                }
              }
            }
          }
        } else {
          if (item.grpTitle) {
            found = true;
          } else {
            for (var prop in item) {
              if (filter && item[prop]) {
                if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                  found = true;
                }
              }
            }
          }
        }

        return found;
      }
    }]);

    return ListFilterPipe;
  }();

  ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) {
    return new (t || ListFilterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DataService));
  };

  ListFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
    name: "listFilter",
    type: ListFilterPipe,
    pure: true
  });
  return ListFilterPipe;
}();

var Item = /*@__PURE__*/function () {
  var Item = function Item() {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Item);
  };

  Item.ɵfac = function Item_Factory(t) {
    return new (t || Item)();
  };

  Item.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: Item,
    selectors: [["c-item"]],
    contentQueries: function Item_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], true);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
      }
    },
    decls: 0,
    vars: 0,
    template: function Item_Template(rf, ctx) {},
    encapsulation: 2
  });
  return Item;
}();

var Badge = /*@__PURE__*/function () {
  var Badge = function Badge() {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Badge);
  };

  Badge.ɵfac = function Badge_Factory(t) {
    return new (t || Badge)();
  };

  Badge.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: Badge,
    selectors: [["c-badge"]],
    contentQueries: function Badge_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], true);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
      }
    },
    decls: 0,
    vars: 0,
    template: function Badge_Template(rf, ctx) {},
    encapsulation: 2
  });
  return Badge;
}();

var Search = /*@__PURE__*/function () {
  var Search = function Search() {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Search);
  };

  Search.ɵfac = function Search_Factory(t) {
    return new (t || Search)();
  };

  Search.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: Search,
    selectors: [["c-search"]],
    contentQueries: function Search_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], true);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
      }
    },
    decls: 0,
    vars: 0,
    template: function Search_Template(rf, ctx) {},
    encapsulation: 2
  });
  return Search;
}();

var TemplateRenderer = /*@__PURE__*/function () {
  var TemplateRenderer = /*#__PURE__*/function () {
    /**
     * @param {?} viewContainer
     */
    function TemplateRenderer(viewContainer) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TemplateRenderer);

      this.viewContainer = viewContainer;
    }
    /**
     * @return {?}
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(TemplateRenderer, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.data.template, {
          '\$implicit': this.data,
          'item': this.item
        });
      }
      /**
       * @return {?}
       */

    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this.view.destroy();
      }
    }]);

    return TemplateRenderer;
  }();

  TemplateRenderer.ɵfac = function TemplateRenderer_Factory(t) {
    return new (t || TemplateRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]));
  };

  TemplateRenderer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TemplateRenderer,
    selectors: [["c-templateRenderer"]],
    inputs: {
      data: "data",
      item: "item"
    },
    decls: 0,
    vars: 0,
    template: function TemplateRenderer_Template(rf, ctx) {},
    encapsulation: 2
  });
  return TemplateRenderer;
}();

var CIcon = /*@__PURE__*/function () {
  var CIcon = function CIcon() {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CIcon);
  };

  CIcon.ɵfac = function CIcon_Factory(t) {
    return new (t || CIcon)();
  };

  CIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CIcon,
    selectors: [["c-icon"]],
    inputs: {
      name: "name"
    },
    decls: 5,
    vars: 5,
    consts: [["width", "100%", "height", "100%", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 47.971 47.971", "style", "enable-background:new 0 0 47.971 47.971;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 612 612", "style", "enable-background:new 0 0 612 612;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 615.52 615.52", "style", "enable-background:new 0 0 615.52 615.52;", 0, "xml", "space", "preserve", 4, "ngIf"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 51.976 51.976", "style", "enable-background:new 0 0 51.976 51.976;", 0, "xml", "space", "preserve", 4, "ngIf"], ["width", "100%", "height", "100%", "version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 47.971 47.971", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 47.971 47.971"], ["d", "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88\n                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242\n                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879\n                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 612 612", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 612 612"], ["id", "_x31_0_34_"], ["d", "M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782\n\t\t\t\tc-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296\n\t\t\t\tc6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z"], ["id", "_x39__30_"], ["d", "M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27\n\t\t\t\tL7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832\n\t\t\t\tc9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "100%", "height", "100%", "viewBox", "0 0 615.52 615.52", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 615.52 615.52"], ["id", "Search__x28_and_thou_shall_find_x29_"], ["d", "M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0\n\t\t\t\t\tC104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777\n\t\t\t\t\tl184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291\n\t\t\t\t\tC617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174\n\t\t\t\t\tc-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88\n\t\t\t\t\ts152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 51.976 51.976", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 51.976 51.976"], ["d", "M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0\n\t\tC54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778\n\t\tc-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828\n\t\tc0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828\n\t\tl-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"]],
    template: function CIcon_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CIcon__svg_svg_0_Template, 3, 0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CIcon__svg_svg_1_Template, 5, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CIcon__svg_svg_2_Template, 5, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CIcon__svg_svg_3_Template, 6, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CIcon__svg_svg_4_Template, 3, 0, "svg", 3);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.name == "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.name == "angle-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.name == "angle-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.name == "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.name == "clear");
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
    encapsulation: 2
  });
  return CIcon;
}();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @return {?}
 */


function VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY() {
  return {
    scrollThrottlingTime: 0,
    scrollDebounceTime: 0,
    scrollAnimationTime: 750,
    checkResizeInterval: 1000,
    resizeBypassRefreshThreshold: 5,
    modifyOverflowStyleOfParentScroll: true,
    stripedTable: false
  };
}

var VirtualScrollerComponent = /*@__PURE__*/function () {
  var VirtualScrollerComponent = /*#__PURE__*/function () {
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} zone
     * @param {?} changeDetectorRef
     * @param {?} platformId
     * @param {?} options
     */
    function VirtualScrollerComponent(element, renderer, zone, changeDetectorRef, platformId, options) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VirtualScrollerComponent);

      this.element = element;
      this.renderer = renderer;
      this.zone = zone;
      this.changeDetectorRef = changeDetectorRef;
      this.window = window;
      this.executeRefreshOutsideAngularZone = false;
      this._enableUnequalChildrenSizes = false;
      this.useMarginInsteadOfTranslate = false;
      this.ssrViewportWidth = 1920;
      this.ssrViewportHeight = 1080;
      this._bufferAmount = 0;
      this._items = [];

      this.compareItems =
      /**
      * @param {?} item1
      * @param {?} item2
      * @return {?}
      */
      function (item1, item2) {
        return item1 === item2;
      };

      this.vsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.vsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.vsStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.vsEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.calculatedScrollbarWidth = 0;
      this.calculatedScrollbarHeight = 0;
      this.padding = 0;
      this.previousViewPort =
      /** @type {?} */
      {};
      this.cachedPageSize = 0;
      this.previousScrollNumberElements = 0;
      this.isAngularUniversalSSR = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId);
      this.scrollThrottlingTime = options.scrollThrottlingTime;
      this.scrollDebounceTime = options.scrollDebounceTime;
      this.scrollAnimationTime = options.scrollAnimationTime;
      this.scrollbarWidth = options.scrollbarWidth;
      this.scrollbarHeight = options.scrollbarHeight;
      this.checkResizeInterval = options.checkResizeInterval;
      this.resizeBypassRefreshThreshold = options.resizeBypassRefreshThreshold;
      this.modifyOverflowStyleOfParentScroll = options.modifyOverflowStyleOfParentScroll;
      this.stripedTable = options.stripedTable;
      this.horizontal = false;
      this.resetWrapGroupDimensions();
    }
    /**
     * @return {?}
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(VirtualScrollerComponent, [{
      key: "updateOnScrollFunction",

      /**
       * @protected
       * @return {?}
       */
      value: function updateOnScrollFunction() {
        var _this3 = this;

        if (this.scrollDebounceTime) {
          this.onScroll =
          /** @type {?} */
          this.debounce(
          /**
          * @return {?}
          */
          function () {
            _this3.refresh_internal(false);
          }, this.scrollDebounceTime);
        } else if (this.scrollThrottlingTime) {
          this.onScroll =
          /** @type {?} */
          this.throttleTrailing(
          /**
          * @return {?}
          */
          function () {
            _this3.refresh_internal(false);
          }, this.scrollThrottlingTime);
        } else {
          this.onScroll =
          /**
          * @return {?}
          */
          function () {
            _this3.refresh_internal(false);
          };
        }
      }
      /**
       * @return {?}
       */

    }, {
      key: "revertParentOverscroll",

      /**
       * @protected
       * @return {?}
       */
      value: function revertParentOverscroll() {
        /** @type {?} */
        var scrollElement = this.getScrollElement();

        if (scrollElement && this.oldParentScrollOverflow) {
          scrollElement.style['overflow-y'] = this.oldParentScrollOverflow.y;
          scrollElement.style['overflow-x'] = this.oldParentScrollOverflow.x;
        }

        this.oldParentScrollOverflow = undefined;
      }
      /**
       * @return {?}
       */

    }, {
      key: "ngOnInit",

      /**
       * @return {?}
       */
      value: function ngOnInit() {
        this.addScrollEventHandlers();
      }
      /**
       * @return {?}
       */

    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this.removeScrollEventHandlers();
        this.revertParentOverscroll();
      }
      /**
       * @param {?} changes
       * @return {?}
       */

    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        /** @type {?} */
        var indexLengthChanged = this.cachedItemsLength !== this.items.length;
        this.cachedItemsLength = this.items.length;
        /** @type {?} */

        var firstRun = !changes.items || !changes.items.previousValue || changes.items.previousValue.length === 0;
        this.refresh_internal(indexLengthChanged || firstRun);
      }
      /**
       * @return {?}
       */

    }, {
      key: "ngDoCheck",
      value: function ngDoCheck() {
        if (this.cachedItemsLength !== this.items.length) {
          this.cachedItemsLength = this.items.length;
          this.refresh_internal(true);
          return;
        }

        if (this.previousViewPort && this.viewPortItems && this.viewPortItems.length > 0) {
          /** @type {?} */
          var itemsArrayChanged = false;

          for (var i = 0; i < this.viewPortItems.length; ++i) {
            if (!this.compareItems(this.items[this.previousViewPort.startIndexWithBuffer + i], this.viewPortItems[i])) {
              itemsArrayChanged = true;
              break;
            }
          }

          if (itemsArrayChanged) {
            this.refresh_internal(true);
          }
        }
      }
      /**
       * @return {?}
       */

    }, {
      key: "refresh",
      value: function refresh() {
        this.refresh_internal(true);
      }
      /**
       * @return {?}
       */

    }, {
      key: "invalidateAllCachedMeasurements",
      value: function invalidateAllCachedMeasurements() {
        this.wrapGroupDimensions = {
          maxChildSizePerWrapGroup: [],
          numberOfKnownWrapGroupChildSizes: 0,
          sumOfKnownWrapGroupChildWidths: 0,
          sumOfKnownWrapGroupChildHeights: 0
        };
        this.minMeasuredChildWidth = undefined;
        this.minMeasuredChildHeight = undefined;
        this.refresh_internal(false);
      }
      /**
       * @param {?} item
       * @return {?}
       */

    }, {
      key: "invalidateCachedMeasurementForItem",
      value: function invalidateCachedMeasurementForItem(item) {
        if (this.enableUnequalChildrenSizes) {
          /** @type {?} */
          var index = this.items && this.items.indexOf(item);

          if (index >= 0) {
            this.invalidateCachedMeasurementAtIndex(index);
          }
        } else {
          this.minMeasuredChildWidth = undefined;
          this.minMeasuredChildHeight = undefined;
        }

        this.refresh_internal(false);
      }
      /**
       * @param {?} index
       * @return {?}
       */

    }, {
      key: "invalidateCachedMeasurementAtIndex",
      value: function invalidateCachedMeasurementAtIndex(index) {
        if (this.enableUnequalChildrenSizes) {
          /** @type {?} */
          var cachedMeasurement = this.wrapGroupDimensions.maxChildSizePerWrapGroup[index];

          if (cachedMeasurement) {
            this.wrapGroupDimensions.maxChildSizePerWrapGroup[index] = undefined;
            --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
            this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= cachedMeasurement.childWidth || 0;
            this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= cachedMeasurement.childHeight || 0;
          }
        } else {
          this.minMeasuredChildWidth = undefined;
          this.minMeasuredChildHeight = undefined;
        }

        this.refresh_internal(false);
      }
      /**
       * @param {?} item
       * @param {?=} alignToBeginning
       * @param {?=} additionalOffset
       * @param {?=} animationMilliseconds
       * @param {?=} animationCompletedCallback
       * @return {?}
       */

    }, {
      key: "scrollInto",
      value: function scrollInto(item) {
        var alignToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var additionalOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var animationMilliseconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
        var animationCompletedCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

        /** @type {?} */
        var index = this.items.indexOf(item);

        if (index === -1) {
          return;
        }

        this.scrollToIndex(index, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback);
      }
      /**
       * @param {?} index
       * @param {?=} alignToBeginning
       * @param {?=} additionalOffset
       * @param {?=} animationMilliseconds
       * @param {?=} animationCompletedCallback
       * @return {?}
       */

    }, {
      key: "scrollToIndex",
      value: function scrollToIndex(index) {
        var _this4 = this;

        var alignToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var additionalOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var animationMilliseconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
        var animationCompletedCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

        /** @type {?} */
        var maxRetries = 5;
        /** @type {?} */

        var retryIfNeeded =
        /**
        * @return {?}
        */
        function retryIfNeeded() {
          --maxRetries;

          if (maxRetries <= 0) {
            if (animationCompletedCallback) {
              animationCompletedCallback();
            }

            return;
          }
          /** @type {?} */


          var dimensions = _this4.calculateDimensions();
          /** @type {?} */


          var desiredStartIndex = Math.min(Math.max(index, 0), dimensions.itemCount - 1);

          if (_this4.previousViewPort.startIndex === desiredStartIndex) {
            if (animationCompletedCallback) {
              animationCompletedCallback();
            }

            return;
          }

          _this4.scrollToIndex_internal(index, alignToBeginning, additionalOffset, 0, retryIfNeeded);
        };

        this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, animationMilliseconds, retryIfNeeded);
      }
      /**
       * @protected
       * @param {?} index
       * @param {?=} alignToBeginning
       * @param {?=} additionalOffset
       * @param {?=} animationMilliseconds
       * @param {?=} animationCompletedCallback
       * @return {?}
       */

    }, {
      key: "scrollToIndex_internal",
      value: function scrollToIndex_internal(index) {
        var alignToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var additionalOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var animationMilliseconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
        var animationCompletedCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
        animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
        /** @type {?} */

        var dimensions = this.calculateDimensions();
        /** @type {?} */

        var scroll = this.calculatePadding(index, dimensions) + additionalOffset;

        if (!alignToBeginning) {
          scroll -= dimensions.wrapGroupsPerPage * dimensions[this._childScrollDim];
        }

        this.scrollToPosition(scroll, animationMilliseconds, animationCompletedCallback);
      }
      /**
       * @param {?} scrollPosition
       * @param {?=} animationMilliseconds
       * @param {?=} animationCompletedCallback
       * @return {?}
       */

    }, {
      key: "scrollToPosition",
      value: function scrollToPosition(scrollPosition) {
        var _this5 = this;

        var animationMilliseconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        var animationCompletedCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        scrollPosition += this.getElementsOffset();
        animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
        /** @type {?} */

        var scrollElement = this.getScrollElement();
        /** @type {?} */

        var animationRequest;

        if (this.currentTween) {
          this.currentTween.stop();
          this.currentTween = undefined;
        }

        if (!animationMilliseconds) {
          this.renderer.setProperty(scrollElement, this._scrollType, scrollPosition);
          this.refresh_internal(false, animationCompletedCallback);
          return;
        }
        /** @type {?} */


        var tweenConfigObj = {
          scrollPosition: scrollElement[this._scrollType]
        };
        /** @type {?} */

        var newTween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_6__["Tween"](tweenConfigObj).to({
          scrollPosition: scrollPosition
        }, animationMilliseconds).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_6__["Easing"].Quadratic.Out).onUpdate(
        /**
        * @param {?} data
        * @return {?}
        */
        function (data) {
          if (isNaN(data.scrollPosition)) {
            return;
          }

          _this5.renderer.setProperty(scrollElement, _this5._scrollType, data.scrollPosition);

          _this5.refresh_internal(false);
        }).onStop(
        /**
        * @return {?}
        */
        function () {
          cancelAnimationFrame(animationRequest);
        }).start();
        /** @type {?} */

        var animate =
        /**
        * @param {?=} time
        * @return {?}
        */
        function animate(time) {
          if (!newTween["isPlaying"]()) {
            return;
          }

          newTween.update(time);

          if (tweenConfigObj.scrollPosition === scrollPosition) {
            _this5.refresh_internal(false, animationCompletedCallback);

            return;
          }

          _this5.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            animationRequest = requestAnimationFrame(animate);
          });
        };

        animate();
        this.currentTween = newTween;
      }
      /**
       * @protected
       * @param {?} element
       * @return {?}
       */

    }, {
      key: "getElementSize",
      value: function getElementSize(element) {
        /** @type {?} */
        var result = element.getBoundingClientRect();
        /** @type {?} */

        var styles = getComputedStyle(element);
        /** @type {?} */

        var marginTop = parseInt(styles['margin-top'], 10) || 0;
        /** @type {?} */

        var marginBottom = parseInt(styles['margin-bottom'], 10) || 0;
        /** @type {?} */

        var marginLeft = parseInt(styles['margin-left'], 10) || 0;
        /** @type {?} */

        var marginRight = parseInt(styles['margin-right'], 10) || 0;
        return {
          top: result.top + marginTop,
          bottom: result.bottom + marginBottom,
          left: result.left + marginLeft,
          right: result.right + marginRight,
          width: result.width + marginLeft + marginRight,
          height: result.height + marginTop + marginBottom
        };
      }
      /**
       * @protected
       * @return {?}
       */

    }, {
      key: "checkScrollElementResized",
      value: function checkScrollElementResized() {
        /** @type {?} */
        var boundingRect = this.getElementSize(this.getScrollElement());
        /** @type {?} */

        var sizeChanged;

        if (!this.previousScrollBoundingRect) {
          sizeChanged = true;
        } else {
          /** @type {?} */
          var widthChange = Math.abs(boundingRect.width - this.previousScrollBoundingRect.width);
          /** @type {?} */

          var heightChange = Math.abs(boundingRect.height - this.previousScrollBoundingRect.height);
          sizeChanged = widthChange > this.resizeBypassRefreshThreshold || heightChange > this.resizeBypassRefreshThreshold;
        }

        if (sizeChanged) {
          this.previousScrollBoundingRect = boundingRect;

          if (boundingRect.width > 0 && boundingRect.height > 0) {
            this.refresh_internal(false);
          }
        }
      }
      /**
       * @protected
       * @return {?}
       */

    }, {
      key: "updateDirection",
      value: function updateDirection() {
        if (this.horizontal) {
          this._invisiblePaddingProperty = 'width';
          this._offsetType = 'offsetLeft';
          this._pageOffsetType = 'pageXOffset';
          this._childScrollDim = 'childWidth';
          this._marginDir = 'margin-left';
          this._translateDir = 'translateX';
          this._scrollType = 'scrollLeft';
        } else {
          this._invisiblePaddingProperty = 'height';
          this._offsetType = 'offsetTop';
          this._pageOffsetType = 'pageYOffset';
          this._childScrollDim = 'childHeight';
          this._marginDir = 'margin-top';
          this._translateDir = 'translateY';
          this._scrollType = 'scrollTop';
        }
      }
      /**
       * @protected
       * @param {?} func
       * @param {?} wait
       * @return {?}
       */

    }, {
      key: "debounce",
      value: function debounce(func, wait) {
        /** @type {?} */
        var throttled = this.throttleTrailing(func, wait);
        /** @type {?} */

        var result =
        /**
        * @return {?}
        */
        function result() {
          throttled['cancel']();
          throttled.apply(this, arguments);
        };

        result['cancel'] =
        /**
        * @return {?}
        */
        function () {
          throttled['cancel']();
        };

        return result;
      }
      /**
       * @protected
       * @param {?} func
       * @param {?} wait
       * @return {?}
       */

    }, {
      key: "throttleTrailing",
      value: function throttleTrailing(func, wait) {
        /** @type {?} */
        var timeout = undefined;
        /** @type {?} */

        var _arguments = arguments;
        /** @type {?} */

        var result =
        /**
        * @return {?}
        */
        function result() {
          /** @type {?} */
          var _this = this;

          _arguments = arguments;

          if (timeout) {
            return;
          }

          if (wait <= 0) {
            func.apply(_this, _arguments);
          } else {
            timeout = setTimeout(
            /**
            * @return {?}
            */
            function () {
              timeout = undefined;
              func.apply(_this, _arguments);
            }, wait);
          }
        };

        result['cancel'] =
        /**
        * @return {?}
        */
        function () {
          if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
          }
        };

        return result;
      }
      /**
       * @protected
       * @param {?} itemsArrayModified
       * @param {?=} refreshCompletedCallback
       * @param {?=} maxRunTimes
       * @return {?}
       */

    }, {
      key: "refresh_internal",
      value: function refresh_internal(itemsArrayModified) {
        var _this6 = this;

        var refreshCompletedCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        var maxRunTimes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

        //note: maxRunTimes is to force it to keep recalculating if the previous iteration caused a re-render (different sliced items in viewport or scrollPosition changed).
        //The default of 2x max will probably be accurate enough without causing too large a performance bottleneck
        //The code would typically quit out on the 2nd iteration anyways. The main time it'd think more than 2 runs would be necessary would be for vastly different sized child items or if this is the 1st time the items array was initialized.
        //Without maxRunTimes, If the user is actively scrolling this code would become an infinite loop until they stopped scrolling. This would be okay, except each scroll event would start an additional infinte loop. We want to short-circuit it to prevent this.
        if (itemsArrayModified && this.previousViewPort && this.previousViewPort.scrollStartPosition > 0) {
          //if items were prepended, scroll forward to keep same items visible

          /** @type {?} */
          var oldViewPort = this.previousViewPort;
          /** @type {?} */

          var oldViewPortItems = this.viewPortItems;
          /** @type {?} */

          var oldRefreshCompletedCallback = refreshCompletedCallback;

          refreshCompletedCallback =
          /**
          * @return {?}
          */
          function refreshCompletedCallback() {
            /** @type {?} */
            var scrollLengthDelta = _this6.previousViewPort.scrollLength - oldViewPort.scrollLength;

            if (scrollLengthDelta > 0 && _this6.viewPortItems) {
              /** @type {?} */
              var oldStartItem = oldViewPortItems[0];
              /** @type {?} */

              var oldStartItemIndex = _this6.items.findIndex(
              /**
              * @param {?} x
              * @return {?}
              */

              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return _this6.compareItems(oldStartItem, x);
              });

              if (oldStartItemIndex > _this6.previousViewPort.startIndexWithBuffer) {
                /** @type {?} */
                var itemOrderChanged = false;

                for (var i = 1; i < _this6.viewPortItems.length; ++i) {
                  if (!_this6.compareItems(_this6.items[oldStartItemIndex + i], oldViewPortItems[i])) {
                    itemOrderChanged = true;
                    break;
                  }
                }

                if (!itemOrderChanged) {
                  _this6.scrollToPosition(_this6.previousViewPort.scrollStartPosition + scrollLengthDelta, 0, oldRefreshCompletedCallback);

                  return;
                }
              }
            }

            if (oldRefreshCompletedCallback) {
              oldRefreshCompletedCallback();
            }
          };
        }

        this.zone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          requestAnimationFrame(
          /**
          * @return {?}
          */
          function () {
            if (itemsArrayModified) {
              _this6.resetWrapGroupDimensions();
            }
            /** @type {?} */


            var viewport = _this6.calculateViewport();
            /** @type {?} */


            var startChanged = itemsArrayModified || viewport.startIndex !== _this6.previousViewPort.startIndex;
            /** @type {?} */

            var endChanged = itemsArrayModified || viewport.endIndex !== _this6.previousViewPort.endIndex;
            /** @type {?} */

            var scrollLengthChanged = viewport.scrollLength !== _this6.previousViewPort.scrollLength;
            /** @type {?} */

            var paddingChanged = viewport.padding !== _this6.previousViewPort.padding;
            /** @type {?} */

            var scrollPositionChanged = viewport.scrollStartPosition !== _this6.previousViewPort.scrollStartPosition || viewport.scrollEndPosition !== _this6.previousViewPort.scrollEndPosition || viewport.maxScrollPosition !== _this6.previousViewPort.maxScrollPosition;
            _this6.previousViewPort = viewport;

            if (scrollLengthChanged) {
              _this6.renderer.setStyle(_this6.invisiblePaddingElementRef.nativeElement, _this6._invisiblePaddingProperty, "".concat(viewport.scrollLength, "px"));
            }

            if (paddingChanged) {
              if (_this6.useMarginInsteadOfTranslate) {
                _this6.renderer.setStyle(_this6.contentElementRef.nativeElement, _this6._marginDir, "".concat(viewport.padding, "px"));
              } else {
                _this6.renderer.setStyle(_this6.contentElementRef.nativeElement, 'transform', "".concat(_this6._translateDir, "(").concat(viewport.padding, "px)"));

                _this6.renderer.setStyle(_this6.contentElementRef.nativeElement, 'webkitTransform', "".concat(_this6._translateDir, "(").concat(viewport.padding, "px)"));
              }
            }

            if (_this6.headerElementRef) {
              /** @type {?} */
              var scrollPosition = _this6.getScrollElement()[_this6._scrollType];
              /** @type {?} */


              var containerOffset = _this6.getElementsOffset();
              /** @type {?} */


              var offset = Math.max(scrollPosition - viewport.padding - containerOffset + _this6.headerElementRef.nativeElement.clientHeight, 0);

              _this6.renderer.setStyle(_this6.headerElementRef.nativeElement, 'transform', "".concat(_this6._translateDir, "(").concat(offset, "px)"));

              _this6.renderer.setStyle(_this6.headerElementRef.nativeElement, 'webkitTransform', "".concat(_this6._translateDir, "(").concat(offset, "px)"));
            }
            /** @type {?} */


            var changeEventArg = startChanged || endChanged ? {
              startIndex: viewport.startIndex,
              endIndex: viewport.endIndex,
              scrollStartPosition: viewport.scrollStartPosition,
              scrollEndPosition: viewport.scrollEndPosition,
              startIndexWithBuffer: viewport.startIndexWithBuffer,
              endIndexWithBuffer: viewport.endIndexWithBuffer,
              maxScrollPosition: viewport.maxScrollPosition
            } : undefined;

            if (startChanged || endChanged || scrollPositionChanged) {
              /** @type {?} */
              var handleChanged =
              /**
              * @return {?}
              */
              function handleChanged() {
                // update the scroll list to trigger re-render of components in viewport
                _this6.viewPortItems = viewport.startIndexWithBuffer >= 0 && viewport.endIndexWithBuffer >= 0 ? _this6.items.slice(viewport.startIndexWithBuffer, viewport.endIndexWithBuffer + 1) : [];

                _this6.vsUpdate.emit(_this6.viewPortItems);

                if (startChanged) {
                  _this6.vsStart.emit(changeEventArg);
                }

                if (endChanged) {
                  _this6.vsEnd.emit(changeEventArg);
                }

                if (startChanged || endChanged) {
                  _this6.changeDetectorRef.markForCheck();

                  _this6.vsChange.emit(changeEventArg);
                }

                if (maxRunTimes > 0) {
                  _this6.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);

                  return;
                }

                if (refreshCompletedCallback) {
                  refreshCompletedCallback();
                }
              };

              if (_this6.executeRefreshOutsideAngularZone) {
                handleChanged();
              } else {
                _this6.zone.run(handleChanged);
              }
            } else {
              if (maxRunTimes > 0 && (scrollLengthChanged || paddingChanged)) {
                _this6.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);

                return;
              }

              if (refreshCompletedCallback) {
                refreshCompletedCallback();
              }
            }
          });
        });
      }
      /**
       * @protected
       * @return {?}
       */

    }, {
      key: "getScrollElement",
      value: function getScrollElement() {
        return this.parentScroll instanceof Window ? document.scrollingElement || document.documentElement || document.body : this.parentScroll || this.element.nativeElement;
      }
      /**
       * @protected
       * @return {?}
       */

    }, {
      key: "addScrollEventHandlers",
      value: function addScrollEventHandlers() {
        var _this7 = this;

        if (this.isAngularUniversalSSR) {
          return;
        }
        /** @type {?} */


        var scrollElement = this.getScrollElement();
        this.removeScrollEventHandlers();
        this.zone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          if (_this7.parentScroll instanceof Window) {
            _this7.disposeScrollHandler = _this7.renderer.listen('window', 'scroll', _this7.onScroll);
            _this7.disposeResizeHandler = _this7.renderer.listen('window', 'resize', _this7.onScroll);
          } else {
            _this7.disposeScrollHandler = _this7.renderer.listen(scrollElement, 'scroll', _this7.onScroll);

            if (_this7._checkResizeInterval > 0) {
              _this7.checkScrollElementResizedTimer =
              /** @type {?} */
              setInterval(
              /**
              * @return {?}
              */
              function () {
                _this7.checkScrollElementResized();
              }, _this7._checkResizeInterval);
            }
          }
        });
      }
      /**
       * @protected
       * @return {?}
       */

    }, {
      key: "removeScrollEventHandlers",
      value: function removeScrollEventHandlers() {
        if (this.checkScrollElementResizedTimer) {
          clearInterval(this.checkScrollElementResizedTimer);
        }

        if (this.disposeScrollHandler) {
          this.disposeScrollHandler();
          this.disposeScrollHandler = undefined;
        }

        if (this.disposeResizeHandler) {
          this.disposeResizeHandler();
          this.disposeResizeHandler = undefined;
        }
      }
      /**
       * @protected
       * @return {?}
       */

    }, {
      key: "getElementsOffset",
      value: function getElementsOffset() {
        if (this.isAngularUniversalSSR) {
          return 0;
        }
        /** @type {?} */


        var offset = 0;

        if (this.containerElementRef && this.containerElementRef.nativeElement) {
          offset += this.containerElementRef.nativeElement[this._offsetType];
        }

        if (this.parentScroll) {
          /** @type {?} */
          var scrollElement = this.getScrollElement();
          /** @type {?} */

          var elementClientRect = this.getElementSize(this.element.nativeElement);
          /** @type {?} */

          var scrollClientRect = this.getElementSize(scrollElement);

          if (this.horizontal) {
            offset += elementClientRect.left - scrollClientRect.left;
          } else {
            offset += elementClientRect.top - scrollClientRect.top;
          }

          if (!(this.parentScroll instanceof Window)) {
            offset += scrollElement[this._scrollType];
          }
        }

        return offset;
      }
      /**
       * @protected
       * @return {?}
       */

    }, {
      key: "countItemsPerWrapGroup",
      value: function countItemsPerWrapGroup() {
        if (this.isAngularUniversalSSR) {
          return Math.round(this.horizontal ? this.ssrViewportHeight / this.ssrChildHeight : this.ssrViewportWidth / this.ssrChildWidth);
        }
        /** @type {?} */


        var propertyName = this.horizontal ? 'offsetLeft' : 'offsetTop';
        /** @type {?} */

        var children = (this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement).children;
        /** @type {?} */

        var childrenLength = children ? children.length : 0;

        if (childrenLength === 0) {
          return 1;
        }
        /** @type {?} */


        var firstOffset = children[0][propertyName];
        /** @type {?} */

        var result = 1;

        while (result < childrenLength && firstOffset === children[result][propertyName]) {
          ++result;
        }

        return result;
      }
      /**
       * @protected
       * @return {?}
       */

    }, {
      key: "getScrollStartPosition",
      value: function getScrollStartPosition() {
        /** @type {?} */
        var windowScrollValue = undefined;

        if (this.parentScroll instanceof Window) {
          windowScrollValue = window[this._pageOffsetType];
        }

        return windowScrollValue || this.getScrollElement()[this._scrollType] || 0;
      }
      /**
       * @protected
       * @return {?}
       */

    }, {
      key: "resetWrapGroupDimensions",
      value: function resetWrapGroupDimensions() {
        /** @type {?} */
        var oldWrapGroupDimensions = this.wrapGroupDimensions;
        this.invalidateAllCachedMeasurements();

        if (!this.enableUnequalChildrenSizes || !oldWrapGroupDimensions || oldWrapGroupDimensions.numberOfKnownWrapGroupChildSizes === 0) {
          return;
        }
        /** @type {?} */


        var itemsPerWrapGroup = this.countItemsPerWrapGroup();

        for (var wrapGroupIndex = 0; wrapGroupIndex < oldWrapGroupDimensions.maxChildSizePerWrapGroup.length; ++wrapGroupIndex) {
          /** @type {?} */
          var oldWrapGroupDimension = oldWrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];

          if (!oldWrapGroupDimension || !oldWrapGroupDimension.items || !oldWrapGroupDimension.items.length) {
            continue;
          }

          if (oldWrapGroupDimension.items.length !== itemsPerWrapGroup) {
            return;
          }
          /** @type {?} */


          var itemsChanged = false;
          /** @type {?} */

          var arrayStartIndex = itemsPerWrapGroup * wrapGroupIndex;

          for (var i = 0; i < itemsPerWrapGroup; ++i) {
            if (!this.compareItems(oldWrapGroupDimension.items[i], this.items[arrayStartIndex + i])) {
              itemsChanged = true;
              break;
            }
          }

          if (!itemsChanged) {
            ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
            this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += oldWrapGroupDimension.childWidth || 0;
            this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += oldWrapGroupDimension.childHeight || 0;
            this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = oldWrapGroupDimension;
          }
        }
      }
      /**
       * @protected
       * @return {?}
       */

    }, {
      key: "calculateDimensions",
      value: function calculateDimensions() {
        /** @type {?} */
        var scrollElement = this.getScrollElement();
        /** @type {?} */

        var maxCalculatedScrollBarSize = 25;
        this.calculatedScrollbarHeight = Math.max(Math.min(scrollElement.offsetHeight - scrollElement.clientHeight, maxCalculatedScrollBarSize), this.calculatedScrollbarHeight);
        this.calculatedScrollbarWidth = Math.max(Math.min(scrollElement.offsetWidth - scrollElement.clientWidth, maxCalculatedScrollBarSize), this.calculatedScrollbarWidth);
        /** @type {?} */

        var viewportWidth = scrollElement.offsetWidth - (this.scrollbarWidth || this.calculatedScrollbarWidth || (this.horizontal ? 0 : maxCalculatedScrollBarSize));
        /** @type {?} */

        var viewportHeight = scrollElement.offsetHeight - (this.scrollbarHeight || this.calculatedScrollbarHeight || (this.horizontal ? maxCalculatedScrollBarSize : 0));
        /** @type {?} */

        var content = this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement;
        /** @type {?} */

        var itemsPerWrapGroup = this.countItemsPerWrapGroup();
        /** @type {?} */

        var wrapGroupsPerPage;
        /** @type {?} */

        var defaultChildWidth;
        /** @type {?} */

        var defaultChildHeight;

        if (this.isAngularUniversalSSR) {
          viewportWidth = this.ssrViewportWidth;
          viewportHeight = this.ssrViewportHeight;
          defaultChildWidth = this.ssrChildWidth;
          defaultChildHeight = this.ssrChildHeight;
          /** @type {?} */

          var itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
          /** @type {?} */

          var itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
          wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
        } else if (!this.enableUnequalChildrenSizes) {
          if (content.children.length > 0) {
            if (!this.childWidth || !this.childHeight) {
              if (!this.minMeasuredChildWidth && viewportWidth > 0) {
                this.minMeasuredChildWidth = viewportWidth;
              }

              if (!this.minMeasuredChildHeight && viewportHeight > 0) {
                this.minMeasuredChildHeight = viewportHeight;
              }
            }
            /** @type {?} */


            var child = content.children[0];
            /** @type {?} */

            var clientRect = this.getElementSize(child);
            this.minMeasuredChildWidth = Math.min(this.minMeasuredChildWidth, clientRect.width);
            this.minMeasuredChildHeight = Math.min(this.minMeasuredChildHeight, clientRect.height);
          }

          defaultChildWidth = this.childWidth || this.minMeasuredChildWidth || viewportWidth;
          defaultChildHeight = this.childHeight || this.minMeasuredChildHeight || viewportHeight;
          /** @type {?} */

          var _itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
          /** @type {?} */


          var _itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);

          wrapGroupsPerPage = this.horizontal ? _itemsPerRow : _itemsPerCol;
        } else {
          /** @type {?} */
          var scrollOffset = scrollElement[this._scrollType] - (this.previousViewPort ? this.previousViewPort.padding : 0);
          /** @type {?} */

          var arrayStartIndex = this.previousViewPort.startIndexWithBuffer || 0;
          /** @type {?} */

          var wrapGroupIndex = Math.ceil(arrayStartIndex / itemsPerWrapGroup);
          /** @type {?} */

          var maxWidthForWrapGroup = 0;
          /** @type {?} */

          var maxHeightForWrapGroup = 0;
          /** @type {?} */

          var sumOfVisibleMaxWidths = 0;
          /** @type {?} */

          var sumOfVisibleMaxHeights = 0;
          wrapGroupsPerPage = 0;

          for (var i = 0; i < content.children.length; ++i) {
            ++arrayStartIndex;
            /** @type {?} */

            var _child = content.children[i];
            /** @type {?} */

            var _clientRect = this.getElementSize(_child);

            maxWidthForWrapGroup = Math.max(maxWidthForWrapGroup, _clientRect.width);
            maxHeightForWrapGroup = Math.max(maxHeightForWrapGroup, _clientRect.height);

            if (arrayStartIndex % itemsPerWrapGroup === 0) {
              /** @type {?} */
              var oldValue = this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];

              if (oldValue) {
                --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= oldValue.childWidth || 0;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= oldValue.childHeight || 0;
              }

              ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
              /** @type {?} */

              var items = this.items.slice(arrayStartIndex - itemsPerWrapGroup, arrayStartIndex);
              this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = {
                childWidth: maxWidthForWrapGroup,
                childHeight: maxHeightForWrapGroup,
                items: items
              };
              this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += maxWidthForWrapGroup;
              this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += maxHeightForWrapGroup;

              if (this.horizontal) {
                /** @type {?} */
                var maxVisibleWidthForWrapGroup = Math.min(maxWidthForWrapGroup, Math.max(viewportWidth - sumOfVisibleMaxWidths, 0));

                if (scrollOffset > 0) {
                  /** @type {?} */
                  var scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleWidthForWrapGroup);
                  maxVisibleWidthForWrapGroup -= scrollOffsetToRemove;
                  scrollOffset -= scrollOffsetToRemove;
                }

                sumOfVisibleMaxWidths += maxVisibleWidthForWrapGroup;

                if (maxVisibleWidthForWrapGroup > 0 && viewportWidth >= sumOfVisibleMaxWidths) {
                  ++wrapGroupsPerPage;
                }
              } else {
                /** @type {?} */
                var maxVisibleHeightForWrapGroup = Math.min(maxHeightForWrapGroup, Math.max(viewportHeight - sumOfVisibleMaxHeights, 0));

                if (scrollOffset > 0) {
                  /** @type {?} */
                  var _scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleHeightForWrapGroup);

                  maxVisibleHeightForWrapGroup -= _scrollOffsetToRemove;
                  scrollOffset -= _scrollOffsetToRemove;
                }

                sumOfVisibleMaxHeights += maxVisibleHeightForWrapGroup;

                if (maxVisibleHeightForWrapGroup > 0 && viewportHeight >= sumOfVisibleMaxHeights) {
                  ++wrapGroupsPerPage;
                }
              }

              ++wrapGroupIndex;
              maxWidthForWrapGroup = 0;
              maxHeightForWrapGroup = 0;
            }
          }
          /** @type {?} */


          var averageChildWidth = this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
          /** @type {?} */

          var averageChildHeight = this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
          defaultChildWidth = this.childWidth || averageChildWidth || viewportWidth;
          defaultChildHeight = this.childHeight || averageChildHeight || viewportHeight;

          if (this.horizontal) {
            if (viewportWidth > sumOfVisibleMaxWidths) {
              wrapGroupsPerPage += Math.ceil((viewportWidth - sumOfVisibleMaxWidths) / defaultChildWidth);
            }
          } else {
            if (viewportHeight > sumOfVisibleMaxHeights) {
              wrapGroupsPerPage += Math.ceil((viewportHeight - sumOfVisibleMaxHeights) / defaultChildHeight);
            }
          }
        }
        /** @type {?} */


        var itemCount = this.items.length;
        /** @type {?} */

        var itemsPerPage = itemsPerWrapGroup * wrapGroupsPerPage;
        /** @type {?} */

        var pageCount_fractional = itemCount / itemsPerPage;
        /** @type {?} */

        var numberOfWrapGroups = Math.ceil(itemCount / itemsPerWrapGroup);
        /** @type {?} */

        var scrollLength = 0;
        /** @type {?} */

        var defaultScrollLengthPerWrapGroup = this.horizontal ? defaultChildWidth : defaultChildHeight;

        if (this.enableUnequalChildrenSizes) {
          /** @type {?} */
          var numUnknownChildSizes = 0;

          for (var _i = 0; _i < numberOfWrapGroups; ++_i) {
            /** @type {?} */
            var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[_i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[_i][this._childScrollDim];

            if (childSize) {
              scrollLength += childSize;
            } else {
              ++numUnknownChildSizes;
            }
          }

          scrollLength += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
        } else {
          scrollLength = numberOfWrapGroups * defaultScrollLengthPerWrapGroup;
        }

        if (this.headerElementRef) {
          scrollLength += this.headerElementRef.nativeElement.clientHeight;
        }
        /** @type {?} */


        var viewportLength = this.horizontal ? viewportWidth : viewportHeight;
        /** @type {?} */

        var maxScrollPosition = Math.max(scrollLength - viewportLength, 0);
        return {
          itemCount: itemCount,
          itemsPerWrapGroup: itemsPerWrapGroup,
          wrapGroupsPerPage: wrapGroupsPerPage,
          itemsPerPage: itemsPerPage,
          pageCount_fractional: pageCount_fractional,
          childWidth: defaultChildWidth,
          childHeight: defaultChildHeight,
          scrollLength: scrollLength,
          viewportLength: viewportLength,
          maxScrollPosition: maxScrollPosition
        };
      }
      /**
       * @protected
       * @param {?} arrayStartIndexWithBuffer
       * @param {?} dimensions
       * @return {?}
       */

    }, {
      key: "calculatePadding",
      value: function calculatePadding(arrayStartIndexWithBuffer, dimensions) {
        if (dimensions.itemCount === 0) {
          return 0;
        }
        /** @type {?} */


        var defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
        /** @type {?} */

        var startingWrapGroupIndex = Math.floor(arrayStartIndexWithBuffer / dimensions.itemsPerWrapGroup) || 0;

        if (!this.enableUnequalChildrenSizes) {
          return defaultScrollLengthPerWrapGroup * startingWrapGroupIndex;
        }
        /** @type {?} */


        var numUnknownChildSizes = 0;
        /** @type {?} */

        var result = 0;

        for (var i = 0; i < startingWrapGroupIndex; ++i) {
          /** @type {?} */
          var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];

          if (childSize) {
            result += childSize;
          } else {
            ++numUnknownChildSizes;
          }
        }

        result += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
        return result;
      }
      /**
       * @protected
       * @param {?} scrollPosition
       * @param {?} dimensions
       * @return {?}
       */

    }, {
      key: "calculatePageInfo",
      value: function calculatePageInfo(scrollPosition, dimensions) {
        /** @type {?} */
        var scrollPercentage = 0;

        if (this.enableUnequalChildrenSizes) {
          /** @type {?} */
          var numberOfWrapGroups = Math.ceil(dimensions.itemCount / dimensions.itemsPerWrapGroup);
          /** @type {?} */

          var totalScrolledLength = 0;
          /** @type {?} */

          var defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];

          for (var i = 0; i < numberOfWrapGroups; ++i) {
            /** @type {?} */
            var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];

            if (childSize) {
              totalScrolledLength += childSize;
            } else {
              totalScrolledLength += defaultScrollLengthPerWrapGroup;
            }

            if (scrollPosition < totalScrolledLength) {
              scrollPercentage = i / numberOfWrapGroups;
              break;
            }
          }
        } else {
          scrollPercentage = scrollPosition / dimensions.scrollLength;
        }
        /** @type {?} */


        var startingArrayIndex_fractional = Math.min(Math.max(scrollPercentage * dimensions.pageCount_fractional, 0), dimensions.pageCount_fractional) * dimensions.itemsPerPage;
        /** @type {?} */

        var maxStart = dimensions.itemCount - dimensions.itemsPerPage - 1;
        /** @type {?} */

        var arrayStartIndex = Math.min(Math.floor(startingArrayIndex_fractional), maxStart);
        arrayStartIndex -= arrayStartIndex % dimensions.itemsPerWrapGroup; // round down to start of wrapGroup

        if (this.stripedTable) {
          /** @type {?} */
          var bufferBoundary = 2 * dimensions.itemsPerWrapGroup;

          if (arrayStartIndex % bufferBoundary !== 0) {
            arrayStartIndex = Math.max(arrayStartIndex - arrayStartIndex % bufferBoundary, 0);
          }
        }
        /** @type {?} */


        var arrayEndIndex = Math.ceil(startingArrayIndex_fractional) + dimensions.itemsPerPage - 1;
        /** @type {?} */

        var endIndexWithinWrapGroup = (arrayEndIndex + 1) % dimensions.itemsPerWrapGroup;

        if (endIndexWithinWrapGroup > 0) {
          arrayEndIndex += dimensions.itemsPerWrapGroup - endIndexWithinWrapGroup; // round up to end of wrapGroup
        }

        if (isNaN(arrayStartIndex)) {
          arrayStartIndex = 0;
        }

        if (isNaN(arrayEndIndex)) {
          arrayEndIndex = 0;
        }

        arrayStartIndex = Math.min(Math.max(arrayStartIndex, 0), dimensions.itemCount - 1);
        arrayEndIndex = Math.min(Math.max(arrayEndIndex, 0), dimensions.itemCount - 1);
        /** @type {?} */

        var bufferSize = this.bufferAmount * dimensions.itemsPerWrapGroup;
        /** @type {?} */

        var startIndexWithBuffer = Math.min(Math.max(arrayStartIndex - bufferSize, 0), dimensions.itemCount - 1);
        /** @type {?} */

        var endIndexWithBuffer = Math.min(Math.max(arrayEndIndex + bufferSize, 0), dimensions.itemCount - 1);
        return {
          startIndex: arrayStartIndex,
          endIndex: arrayEndIndex,
          startIndexWithBuffer: startIndexWithBuffer,
          endIndexWithBuffer: endIndexWithBuffer,
          scrollStartPosition: scrollPosition,
          scrollEndPosition: scrollPosition + dimensions.viewportLength,
          maxScrollPosition: dimensions.maxScrollPosition
        };
      }
      /**
       * @protected
       * @return {?}
       */

    }, {
      key: "calculateViewport",
      value: function calculateViewport() {
        /** @type {?} */
        var dimensions = this.calculateDimensions();
        /** @type {?} */

        var offset = this.getElementsOffset();
        /** @type {?} */

        var scrollStartPosition = this.getScrollStartPosition();

        if (scrollStartPosition > dimensions.scrollLength + offset && !(this.parentScroll instanceof Window)) {
          scrollStartPosition = dimensions.scrollLength;
        } else {
          scrollStartPosition -= offset;
        }

        scrollStartPosition = Math.max(0, scrollStartPosition);
        /** @type {?} */

        var pageInfo = this.calculatePageInfo(scrollStartPosition, dimensions);
        /** @type {?} */

        var newPadding = this.calculatePadding(pageInfo.startIndexWithBuffer, dimensions);
        /** @type {?} */

        var newScrollLength = dimensions.scrollLength;
        return {
          startIndex: pageInfo.startIndex,
          endIndex: pageInfo.endIndex,
          startIndexWithBuffer: pageInfo.startIndexWithBuffer,
          endIndexWithBuffer: pageInfo.endIndexWithBuffer,
          padding: Math.round(newPadding),
          scrollLength: Math.round(newScrollLength),
          scrollStartPosition: pageInfo.scrollStartPosition,
          scrollEndPosition: pageInfo.scrollEndPosition,
          maxScrollPosition: pageInfo.maxScrollPosition
        };
      }
    }, {
      key: "viewPortInfo",
      get: function get() {
        /** @type {?} */
        var pageInfo = this.previousViewPort ||
        /** @type {?} */
        {};
        return {
          startIndex: pageInfo.startIndex || 0,
          endIndex: pageInfo.endIndex || 0,
          scrollStartPosition: pageInfo.scrollStartPosition || 0,
          scrollEndPosition: pageInfo.scrollEndPosition || 0,
          maxScrollPosition: pageInfo.maxScrollPosition || 0,
          startIndexWithBuffer: pageInfo.startIndexWithBuffer || 0,
          endIndexWithBuffer: pageInfo.endIndexWithBuffer || 0
        };
      }
      /**
       * @return {?}
       */

    }, {
      key: "enableUnequalChildrenSizes",
      get: function get() {
        return this._enableUnequalChildrenSizes;
      }
      /**
       * @param {?} value
       * @return {?}
       */
      ,
      set: function set(value) {
        if (this._enableUnequalChildrenSizes === value) {
          return;
        }

        this._enableUnequalChildrenSizes = value;
        this.minMeasuredChildWidth = undefined;
        this.minMeasuredChildHeight = undefined;
      }
      /**
       * @return {?}
       */

    }, {
      key: "bufferAmount",
      get: function get() {
        if (typeof this._bufferAmount === 'number' && this._bufferAmount >= 0) {
          return this._bufferAmount;
        } else {
          return this.enableUnequalChildrenSizes ? 5 : 0;
        }
      }
      /**
       * @param {?} value
       * @return {?}
       */
      ,
      set: function set(value) {
        this._bufferAmount = value;
      }
      /**
       * @return {?}
       */

    }, {
      key: "scrollThrottlingTime",
      get: function get() {
        return this._scrollThrottlingTime;
      }
      /**
       * @param {?} value
       * @return {?}
       */
      ,
      set: function set(value) {
        this._scrollThrottlingTime = value;
        this.updateOnScrollFunction();
      }
      /**
       * @return {?}
       */

    }, {
      key: "scrollDebounceTime",
      get: function get() {
        return this._scrollDebounceTime;
      }
      /**
       * @param {?} value
       * @return {?}
       */
      ,
      set: function set(value) {
        this._scrollDebounceTime = value;
        this.updateOnScrollFunction();
      }
    }, {
      key: "checkResizeInterval",
      get: function get() {
        return this._checkResizeInterval;
      }
      /**
       * @param {?} value
       * @return {?}
       */
      ,
      set: function set(value) {
        if (this._checkResizeInterval === value) {
          return;
        }

        this._checkResizeInterval = value;
        this.addScrollEventHandlers();
      }
      /**
       * @return {?}
       */

    }, {
      key: "items",
      get: function get() {
        return this._items;
      }
      /**
       * @param {?} value
       * @return {?}
       */
      ,
      set: function set(value) {
        if (value === this._items) {
          return;
        }

        this._items = value || [];
        this.refresh_internal(true);
      }
      /**
       * @return {?}
       */

    }, {
      key: "horizontal",
      get: function get() {
        return this._horizontal;
      }
      /**
       * @param {?} value
       * @return {?}
       */
      ,
      set: function set(value) {
        this._horizontal = value;
        this.updateDirection();
      }
    }, {
      key: "parentScroll",
      get: function get() {
        return this._parentScroll;
      }
      /**
       * @param {?} value
       * @return {?}
       */
      ,
      set: function set(value) {
        if (this._parentScroll === value) {
          return;
        }

        this.revertParentOverscroll();
        this._parentScroll = value;
        this.addScrollEventHandlers();
        /** @type {?} */

        var scrollElement = this.getScrollElement();

        if (this.modifyOverflowStyleOfParentScroll && scrollElement !== this.element.nativeElement) {
          this.oldParentScrollOverflow = {
            x: scrollElement.style['overflow-x'],
            y: scrollElement.style['overflow-y']
          };
          scrollElement.style['overflow-y'] = this.horizontal ? 'visible' : 'auto';
          scrollElement.style['overflow-x'] = this.horizontal ? 'auto' : 'visible';
        }
      }
    }]);

    return VirtualScrollerComponent;
  }();

  VirtualScrollerComponent.ɵfac = function VirtualScrollerComponent_Factory(t) {
    return new (t || VirtualScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"]('virtual-scroller-default-options', 8));
  };

  VirtualScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: VirtualScrollerComponent,
    selectors: [["virtual-scroller"], ["", "virtualScroller", ""]],
    contentQueries: function VirtualScrollerComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.headerElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.containerElementRef = _t.first);
      }
    },
    viewQuery: function VirtualScrollerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.invisiblePaddingElementRef = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function VirtualScrollerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("horizontal", ctx.horizontal)("vertical", !ctx.horizontal)("selfScroll", !ctx.parentScroll);
      }
    },
    inputs: {
      executeRefreshOutsideAngularZone: "executeRefreshOutsideAngularZone",
      useMarginInsteadOfTranslate: "useMarginInsteadOfTranslate",
      ssrViewportWidth: "ssrViewportWidth",
      ssrViewportHeight: "ssrViewportHeight",
      compareItems: "compareItems",
      scrollThrottlingTime: "scrollThrottlingTime",
      scrollDebounceTime: "scrollDebounceTime",
      scrollAnimationTime: "scrollAnimationTime",
      scrollbarWidth: "scrollbarWidth",
      scrollbarHeight: "scrollbarHeight",
      checkResizeInterval: "checkResizeInterval",
      resizeBypassRefreshThreshold: "resizeBypassRefreshThreshold",
      modifyOverflowStyleOfParentScroll: "modifyOverflowStyleOfParentScroll",
      stripedTable: "stripedTable",
      horizontal: "horizontal",
      enableUnequalChildrenSizes: "enableUnequalChildrenSizes",
      bufferAmount: "bufferAmount",
      items: "items",
      parentScroll: "parentScroll",
      childWidth: "childWidth",
      childHeight: "childHeight",
      ssrChildWidth: "ssrChildWidth",
      ssrChildHeight: "ssrChildHeight"
    },
    outputs: {
      vsUpdate: "vsUpdate",
      vsChange: "vsChange",
      vsStart: "vsStart",
      vsEnd: "vsEnd"
    },
    exportAs: ["virtualScroller"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c4,
    decls: 5,
    vars: 0,
    consts: [[1, "total-padding"], ["invisiblePadding", ""], [1, "scrollable-content"], ["content", ""]],
    template: function VirtualScrollerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    },
    styles: ["[_nghost-%COMP%] {\n      position: relative;\n\t  display: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\t\n\t.horizontal.selfScroll[_nghost-%COMP%] {\n      overflow-y: visible;\n      overflow-x: auto;\n\t}\n\t.vertical.selfScroll[_nghost-%COMP%] {\n      overflow-y: auto;\n      overflow-x: visible;\n\t}\n\t\n    .scrollable-content[_ngcontent-%COMP%] {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t.scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%] {\n\t\twhite-space: nowrap;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tflex-shrink: 0;\n\t\tflex-grow: 0;\n\t\twhite-space: initial;\n\t}\n\t\n    .total-padding[_ngcontent-%COMP%] {\n      width: 1px;\n      opacity: 0;\n    }\n    \n    .horizontal[_nghost-%COMP%]   .total-padding[_ngcontent-%COMP%] {\n      height: 100%;\n    }"]
  });
  return VirtualScrollerComponent;
}();

var VirtualScrollerModule = /*@__PURE__*/function () {
  var VirtualScrollerModule = function VirtualScrollerModule() {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VirtualScrollerModule);
  };

  VirtualScrollerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: VirtualScrollerModule
  });
  VirtualScrollerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    factory: function VirtualScrollerModule_Factory(t) {
      return new (t || VirtualScrollerModule)();
    },
    providers: [{
      provide: 'virtual-scroller-default-options',
      useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
    }],
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
  });
  return VirtualScrollerModule;
}();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VirtualScrollerModule, {
    declarations: function declarations() {
      return [VirtualScrollerComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
    },
    exports: function exports() {
      return [VirtualScrollerComponent];
    }
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */


var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return AngularMultiSelect;
  }),
  multi: true
};
/** @type {?} */

var DROPDOWN_CONTROL_VALIDATION = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
  useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(
  /**
  * @return {?}
  */
  function () {
    return AngularMultiSelect;
  }),
  multi: true
};
/** @type {?} */

var noop =
/**
* @return {?}
*/
function noop() {};

var AngularMultiSelect = /*@__PURE__*/function () {
  var AngularMultiSelect = /*#__PURE__*/function () {
    /**
     * @param {?} _elementRef
     * @param {?} cdr
     * @param {?} ds
     */
    function AngularMultiSelect(_elementRef, cdr, ds) {
      var _this8 = this;

      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AngularMultiSelect);

      this._elementRef = _elementRef;
      this.cdr = cdr;
      this.ds = ds;
      this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.onScrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.onFilterSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.onFilterDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.onAddFilterNewItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.onGroupSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.onGroupDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.virtualdata = [];
      this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      this.isActive = false;
      this.isSelectAll = false;
      this.isFilterSelectAll = false;
      this.isInfiniteFilterSelectAll = false;
      this.chunkIndex = [];
      this.cachedItems = [];
      this.groupCachedItems = [];
      this.itemHeight = 41.6;
      this.filterLength = 0;
      this.infiniteFilterLength = 0;
      this.dropdownListYOffset = 0;
      this.defaultSettings = {
        singleSelection: false,
        text: 'Select',
        enableCheckAll: true,
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        filterSelectAllText: 'Select all filtered results',
        filterUnSelectAllText: 'UnSelect all filtered results',
        enableSearchFilter: false,
        searchBy: [],
        maxHeight: 300,
        badgeShowLimit: 999999999999,
        classes: '',
        disabled: false,
        searchPlaceholderText: 'Search',
        showCheckbox: true,
        noDataLabel: 'No Data Available',
        searchAutofocus: true,
        lazyLoading: false,
        labelKey: 'itemName',
        primaryKey: 'id',
        position: 'bottom',
        autoPosition: true,
        enableFilterSelectAll: true,
        selectGroup: false,
        addNewItemOnFilter: false,
        addNewButtonText: "Add",
        escapeToClose: true,
        clearAll: true
      };
      this.randomSize = true;
      this.filteredList = [];
      this.virtualScroollInit = false;
      this.onTouchedCallback = noop;
      this.onChangeCallback = noop;
      this.searchTerm$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(
      /**
      * @param {?} term
      * @return {?}
      */

      /**
      * @param {?} term
      * @return {?}
      */
      function (term) {
        return term;
      })).subscribe(
      /**
      * @param {?} val
      * @return {?}
      */

      /**
      * @param {?} val
      * @return {?}
      */
      function (val) {
        _this8.filterInfiniteList(val);
      });
    }
    /**
     * @param {?} event
     * @return {?}
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(AngularMultiSelect, [{
      key: "onEscapeDown",
      value: function onEscapeDown(event) {
        if (this.settings.escapeToClose) {
          this.closeDropdown();
        }
      }
      /**
       * @return {?}
       */

    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        var _this9 = this;

        this.settings = Object.assign(this.defaultSettings, this.settings);
        this.cachedItems = this.cloneArray(this.data);

        if (this.settings.position == 'top') {
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this9.selectedListHeight = {
              val: 0
            };
            _this9.selectedListHeight.val = _this9.selectedListElem.nativeElement.clientHeight;
          });
        }

        this.subscription = this.ds.getData().subscribe(
        /**
        * @param {?} data
        * @return {?}
        */

        /**
        * @param {?} data
        * @return {?}
        */
        function (data) {
          if (data) {
            /** @type {?} */
            var len = 0;
            data.forEach(
            /**
            * @param {?} obj
            * @param {?} i
            * @return {?}
            */
            function (obj, i) {
              if (!obj.hasOwnProperty('grpTitle')) {
                len++;
              }
            });
            _this9.filterLength = len;

            _this9.onFilterChange(data);
          }
        });
        setTimeout(
        /**
        * @return {?}
        */
        function () {
          _this9.calculateDropdownDirection();
        });
        this.virtualScroollInit = false;
      }
      /**
       * @param {?} changes
       * @return {?}
       */

    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        if (changes.data && !changes.data.firstChange) {
          if (this.settings.groupBy) {
            this.groupedData = this.transformData(this.data, this.settings.groupBy);

            if (this.data.length == 0) {
              this.selectedItems = [];
            }

            this.groupCachedItems = this.cloneArray(this.groupedData);
          }

          this.cachedItems = this.cloneArray(this.data);
        }

        if (changes.settings && !changes.settings.firstChange) {
          this.settings = Object.assign(this.defaultSettings, this.settings);
        }

        if (changes.loading) ;

        if (this.settings.lazyLoading && this.virtualScroollInit && changes.data) {
          this.virtualdata = changes.data.currentValue;
        }
      }
      /**
       * @return {?}
       */

    }, {
      key: "ngDoCheck",
      value: function ngDoCheck() {
        if (this.selectedItems) {
          if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
            this.isSelectAll = false;
          }
        }
      }
      /**
       * @return {?}
       */

    }, {
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        if (this.settings.lazyLoading) ;
      }
      /**
       * @return {?}
       */

    }, {
      key: "ngAfterViewChecked",
      value: function ngAfterViewChecked() {
        if (this.selectedListElem.nativeElement.clientHeight && this.settings.position == 'top' && this.selectedListHeight) {
          this.selectedListHeight.val = this.selectedListElem.nativeElement.clientHeight;
          this.cdr.detectChanges();
        }
      }
      /**
       * @param {?} item
       * @param {?} index
       * @param {?} evt
       * @return {?}
       */

    }, {
      key: "onItemClick",
      value: function onItemClick(item, index, evt) {
        if (this.settings.disabled) {
          return false;
        }
        /** @type {?} */


        var found = this.isSelected(item);
        /** @type {?} */

        var limit = this.selectedItems.length < this.settings.limitSelection ? true : false;

        if (!found) {
          if (this.settings.limitSelection) {
            if (limit) {
              this.addSelected(item);
              this.onSelect.emit(item);
            }
          } else {
            this.addSelected(item);
            this.onSelect.emit(item);
          }
        } else {
          this.removeSelected(item);
          this.onDeSelect.emit(item);
        }

        if (this.isSelectAll || this.data.length > this.selectedItems.length) {
          this.isSelectAll = false;
        }

        if (this.data.length == this.selectedItems.length) {
          this.isSelectAll = true;
        }

        if (this.settings.groupBy) {
          this.updateGroupInfo(item);
        }
      }
      /**
       * @param {?} c
       * @return {?}
       */

    }, {
      key: "validate",
      value: function validate(c) {
        return null;
      }
      /**
       * @param {?} value
       * @return {?}
       */

    }, {
      key: "writeValue",
      value: function writeValue(value) {
        if (value !== undefined && value !== null && value !== '') {
          if (this.settings.singleSelection) {
            if (this.settings.groupBy) {
              this.groupedData = this.transformData(this.data, this.settings.groupBy);
              this.groupCachedItems = this.cloneArray(this.groupedData);
              this.selectedItems = [value[0]];
            } else {
              try {
                if (value.length > 1) {
                  this.selectedItems = [value[0]];
                  throw new MyException(404, {
                    "msg": "Single Selection Mode, Selected Items cannot have more than one item."
                  });
                } else {
                  this.selectedItems = value;
                }
              } catch (e) {
                console.error(e.body.msg);
              }
            }
          } else {
            if (this.settings.limitSelection) {
              this.selectedItems = value.slice(0, this.settings.limitSelection);
            } else {
              this.selectedItems = value;
            }

            if (this.selectedItems.length === this.data.length && this.data.length > 0) {
              this.isSelectAll = true;
            }

            if (this.settings.groupBy) {
              this.groupedData = this.transformData(this.data, this.settings.groupBy);
              this.groupCachedItems = this.cloneArray(this.groupedData);
            }
          }
        } else {
          this.selectedItems = [];
        }
      } //From ControlValueAccessor interface

      /**
       * @param {?} fn
       * @return {?}
       */

    }, {
      key: "registerOnChange",
      value: function registerOnChange(fn) {
        this.onChangeCallback = fn;
      } //From ControlValueAccessor interface

      /**
       * @param {?} fn
       * @return {?}
       */

    }, {
      key: "registerOnTouched",
      value: function registerOnTouched(fn) {
        this.onTouchedCallback = fn;
      }
      /**
       * @param {?} index
       * @param {?} item
       * @return {?}
       */

    }, {
      key: "trackByFn",
      value: function trackByFn(index, item) {
        return item[this.settings.primaryKey];
      }
      /**
       * @param {?} clickedItem
       * @return {?}
       */

    }, {
      key: "isSelected",
      value: function isSelected(clickedItem) {
        var _this10 = this;

        /** @type {?} */
        var found = false;
        this.selectedItems && this.selectedItems.forEach(
        /**
        * @param {?} item
        * @return {?}
        */

        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          if (clickedItem[_this10.settings.primaryKey] === item[_this10.settings.primaryKey]) {
            found = true;
          }
        });
        return found;
      }
      /**
       * @param {?} item
       * @return {?}
       */

    }, {
      key: "addSelected",
      value: function addSelected(item) {
        if (this.settings.singleSelection) {
          this.selectedItems = [];
          this.selectedItems.push(item);
          this.closeDropdown();
        } else this.selectedItems.push(item);

        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
      }
      /**
       * @param {?} clickedItem
       * @return {?}
       */

    }, {
      key: "removeSelected",
      value: function removeSelected(clickedItem) {
        var _this11 = this;

        this.selectedItems && this.selectedItems.forEach(
        /**
        * @param {?} item
        * @return {?}
        */

        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          if (clickedItem[_this11.settings.primaryKey] === item[_this11.settings.primaryKey]) {
            _this11.selectedItems.splice(_this11.selectedItems.indexOf(item), 1);
          }
        });
        this.onChangeCallback(this.selectedItems);
        this.onTouchedCallback(this.selectedItems);
      }
      /**
       * @param {?} evt
       * @return {?}
       */

    }, {
      key: "toggleDropdown",
      value: function toggleDropdown(evt) {
        var _this12 = this;

        if (this.settings.disabled) {
          return false;
        }

        this.isActive = !this.isActive;

        if (this.isActive) {
          if (this.settings.searchAutofocus && this.searchInput && this.settings.enableSearchFilter && !this.searchTempl) {
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this12.searchInput.nativeElement.focus();
            }, 0);
          }

          this.onOpen.emit(true);
        } else {
          this.onClose.emit(false);
        }

        setTimeout(
        /**
        * @return {?}
        */
        function () {
          _this12.calculateDropdownDirection();
        }, 0);

        if (this.settings.lazyLoading) {
          this.virtualdata = this.data;
          this.virtualScroollInit = true;
        }

        evt.preventDefault();
      }
      /**
       * @return {?}
       */

    }, {
      key: "openDropdown",
      value: function openDropdown() {
        var _this13 = this;

        if (this.settings.disabled) {
          return false;
        }

        this.isActive = true;

        if (this.settings.searchAutofocus && this.searchInput && this.settings.enableSearchFilter && !this.searchTempl) {
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this13.searchInput.nativeElement.focus();
          }, 0);
        }

        this.onOpen.emit(true);
      }
      /**
       * @return {?}
       */

    }, {
      key: "closeDropdown",
      value: function closeDropdown() {
        if (this.searchInput && this.settings.lazyLoading) {
          this.searchInput.nativeElement.value = "";
        }

        if (this.searchInput) {
          this.searchInput.nativeElement.value = "";
        }

        this.filter = "";
        this.isActive = false;
        this.onClose.emit(false);
      }
      /**
       * @return {?}
       */

    }, {
      key: "closeDropdownOnClickOut",
      value: function closeDropdownOnClickOut() {
        if (this.isActive) {
          if (this.searchInput && this.settings.lazyLoading) {
            this.searchInput.nativeElement.value = "";
          }

          if (this.searchInput) {
            this.searchInput.nativeElement.value = "";
          }

          this.filter = "";
          this.isActive = false;
          this.clearSearch();
          this.onClose.emit(false);
        }
      }
      /**
       * @return {?}
       */

    }, {
      key: "toggleSelectAll",
      value: function toggleSelectAll() {
        if (!this.isSelectAll) {
          this.selectedItems = [];

          if (this.settings.groupBy) {
            this.groupedData.forEach(
            /**
            * @param {?} obj
            * @return {?}
            */
            function (obj) {
              obj.selected = true;
            });
            this.groupCachedItems.forEach(
            /**
            * @param {?} obj
            * @return {?}
            */
            function (obj) {
              obj.selected = true;
            });
          }

          this.selectedItems = this.data.slice();
          this.isSelectAll = true;
          this.onChangeCallback(this.selectedItems);
          this.onTouchedCallback(this.selectedItems);
          this.onSelectAll.emit(this.selectedItems);
        } else {
          if (this.settings.groupBy) {
            this.groupedData.forEach(
            /**
            * @param {?} obj
            * @return {?}
            */
            function (obj) {
              obj.selected = false;
            });
            this.groupCachedItems.forEach(
            /**
            * @param {?} obj
            * @return {?}
            */
            function (obj) {
              obj.selected = false;
            });
          }

          this.selectedItems = [];
          this.isSelectAll = false;
          this.onChangeCallback(this.selectedItems);
          this.onTouchedCallback(this.selectedItems);
          this.onDeSelectAll.emit(this.selectedItems);
        }
      }
      /**
       * @return {?}
       */

    }, {
      key: "filterGroupedList",
      value: function filterGroupedList() {
        var _this14 = this;

        if (this.filter == "" || this.filter == null) {
          this.clearSearch();
          return;
        }

        this.groupedData = this.cloneArray(this.groupCachedItems);
        this.groupedData = this.groupedData.filter(
        /**
        * @param {?} obj
        * @return {?}
        */

        /**
        * @param {?} obj
        * @return {?}
        */
        function (obj) {
          /** @type {?} */
          var arr = [];

          if (obj[_this14.settings.labelKey].toLowerCase().indexOf(_this14.filter.toLowerCase()) > -1) {
            arr = obj.list;
          } else {
            arr = obj.list.filter(
            /**
            * @param {?} t
            * @return {?}
            */

            /**
            * @param {?} t
            * @return {?}
            */
            function (t) {
              return t[_this14.settings.labelKey].toLowerCase().indexOf(_this14.filter.toLowerCase()) > -1;
            });
          }

          obj.list = arr;

          if (obj[_this14.settings.labelKey].toLowerCase().indexOf(_this14.filter.toLowerCase()) > -1) {
            return arr;
          } else {
            return arr.some(
            /**
            * @param {?} cat
            * @return {?}
            */

            /**
            * @param {?} cat
            * @return {?}
            */
            function (cat) {
              return cat[_this14.settings.labelKey].toLowerCase().indexOf(_this14.filter.toLowerCase()) > -1;
            });
          }
        });
      }
      /**
       * @return {?}
       */

    }, {
      key: "toggleFilterSelectAll",
      value: function toggleFilterSelectAll() {
        var _this15 = this;

        if (!this.isFilterSelectAll) {
          /** @type {?} */
          var added = [];

          if (this.settings.groupBy) {
            /*                 this.groupedData.forEach((item: any) => {
                                if (item.list) {
                                    item.list.forEach((el: any) => {
                                        if (!this.isSelected(el)) {
                                            this.addSelected(el);
                                            added.push(el);
                                        }
                                    });
                                }
                                this.updateGroupInfo(item);
            
                            }); */
            this.ds.getFilteredData().forEach(
            /**
            * @param {?} el
            * @return {?}
            */
            function (el) {
              if (!_this15.isSelected(el) && !el.hasOwnProperty('grpTitle')) {
                _this15.addSelected(el);

                added.push(el);
              }
            });
          } else {
            this.ds.getFilteredData().forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (!_this15.isSelected(item)) {
                _this15.addSelected(item);

                added.push(item);
              }
            });
          }

          this.isFilterSelectAll = true;
          this.onFilterSelectAll.emit(added);
        } else {
          /** @type {?} */
          var removed = [];

          if (this.settings.groupBy) {
            /*                 this.groupedData.forEach((item: any) => {
                                if (item.list) {
                                    item.list.forEach((el: any) => {
                                        if (this.isSelected(el)) {
                                            this.removeSelected(el);
                                            removed.push(el);
                                        }
                                    });
                                }
                            }); */
            this.ds.getFilteredData().forEach(
            /**
            * @param {?} el
            * @return {?}
            */
            function (el) {
              if (_this15.isSelected(el)) {
                _this15.removeSelected(el);

                removed.push(el);
              }
            });
          } else {
            this.ds.getFilteredData().forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (_this15.isSelected(item)) {
                _this15.removeSelected(item);

                removed.push(item);
              }
            });
          }

          this.isFilterSelectAll = false;
          this.onFilterDeSelectAll.emit(removed);
        }
      }
      /**
       * @return {?}
       */

    }, {
      key: "toggleInfiniteFilterSelectAll",
      value: function toggleInfiniteFilterSelectAll() {
        var _this16 = this;

        if (!this.isInfiniteFilterSelectAll) {
          this.virtualdata.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            if (!_this16.isSelected(item)) {
              _this16.addSelected(item);
            }
          });
          this.isInfiniteFilterSelectAll = true;
        } else {
          this.virtualdata.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            if (_this16.isSelected(item)) {
              _this16.removeSelected(item);
            }
          });
          this.isInfiniteFilterSelectAll = false;
        }
      }
      /**
       * @return {?}
       */

    }, {
      key: "clearSearch",
      value: function clearSearch() {
        if (this.settings.groupBy) {
          this.groupedData = [];
          this.groupedData = this.cloneArray(this.groupCachedItems);
        }

        this.filter = "";
        this.isFilterSelectAll = false;
      }
      /**
       * @param {?} data
       * @return {?}
       */

    }, {
      key: "onFilterChange",
      value: function onFilterChange(data) {
        var _this17 = this;

        if (this.filter && this.filter == "" || data.length == 0) {
          this.isFilterSelectAll = false;
        }
        /** @type {?} */


        var cnt = 0;
        data.forEach(
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          if (!item.hasOwnProperty('grpTitle') && _this17.isSelected(item)) {
            cnt++;
          }
        });

        if (cnt > 0 && this.filterLength == cnt) {
          this.isFilterSelectAll = true;
        } else if (cnt > 0 && this.filterLength != cnt) {
          this.isFilterSelectAll = false;
        }

        this.cdr.detectChanges();
      }
      /**
       * @param {?} arr
       * @return {?}
       */

    }, {
      key: "cloneArray",
      value: function cloneArray(arr) {
        if (Array.isArray(arr)) {
          return JSON.parse(JSON.stringify(arr));
        } else if (typeof arr === 'object') {
          throw 'Cannot clone array containing an object!';
        } else {
          return arr;
        }
      }
      /**
       * @param {?} item
       * @return {?}
       */

    }, {
      key: "updateGroupInfo",
      value: function updateGroupInfo(item) {
        var _this18 = this;

        /** @type {?} */
        var key = this.settings.groupBy;
        this.groupedData.forEach(
        /**
        * @param {?} obj
        * @return {?}
        */
        function (obj) {
          /** @type {?} */
          var cnt = 0;

          if (obj.grpTitle && item[key] == obj[key]) {
            if (obj.list) {
              obj.list.forEach(
              /**
              * @param {?} el
              * @return {?}
              */
              function (el) {
                if (_this18.isSelected(el)) {
                  cnt++;
                }
              });
            }
          }

          if (obj.list && cnt === obj.list.length && item[key] == obj[key]) {
            obj.selected = true;
          } else if (obj.list && cnt != obj.list.length && item[key] == obj[key]) {
            obj.selected = false;
          }
        });
        this.groupCachedItems.forEach(
        /**
        * @param {?} obj
        * @return {?}
        */
        function (obj) {
          /** @type {?} */
          var cnt = 0;

          if (obj.grpTitle && item[key] == obj[key]) {
            if (obj.list) {
              obj.list.forEach(
              /**
              * @param {?} el
              * @return {?}
              */
              function (el) {
                if (_this18.isSelected(el)) {
                  cnt++;
                }
              });
            }
          }

          if (obj.list && cnt === obj.list.length && item[key] == obj[key]) {
            obj.selected = true;
          } else if (obj.list && cnt != obj.list.length && item[key] == obj[key]) {
            obj.selected = false;
          }
        });
      }
      /**
       * @param {?} arr
       * @param {?} field
       * @return {?}
       */

    }, {
      key: "transformData",
      value: function transformData(arr, field) {
        var _this19 = this;

        /** @type {?} */
        var groupedObj = arr.reduce(
        /**
        * @param {?} prev
        * @param {?} cur
        * @return {?}
        */
        function (prev, cur) {
          if (!prev[cur[field]]) {
            prev[cur[field]] = [cur];
          } else {
            prev[cur[field]].push(cur);
          }

          return prev;
        }, {});
        /** @type {?} */

        var tempArr = [];
        Object.keys(groupedObj).map(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          /** @type {?} */
          var obj = {};
          obj["grpTitle"] = true;
          obj[_this19.settings.labelKey] = x;
          obj[_this19.settings.groupBy] = x;
          obj['selected'] = false;
          obj['list'] = [];
          /** @type {?} */

          var cnt = 0;
          groupedObj[x].forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            item['list'] = [];
            obj.list.push(item);

            if (_this19.isSelected(item)) {
              cnt++;
            }
          });

          if (cnt == obj.list.length) {
            obj.selected = true;
          } else {
            obj.selected = false;
          }

          tempArr.push(obj); // obj.list.forEach((item: any) => {
          //     tempArr.push(item);
          // });
        });
        return tempArr;
      }
      /**
       * @param {?} evt
       * @return {?}
       */

    }, {
      key: "filterInfiniteList",
      value: function filterInfiniteList(evt) {
        var _this20 = this;

        /** @type {?} */
        var filteredElems = [];

        if (this.settings.groupBy) {
          this.groupedData = this.groupCachedItems.slice();
        } else {
          this.data = this.cachedItems.slice();
          this.virtualdata = this.cachedItems.slice();
        }

        if ((evt != null || evt != '') && !this.settings.groupBy) {
          if (this.settings.searchBy.length > 0) {
            var _loop = function _loop(t) {
              _this20.virtualdata.filter(
              /**
              * @param {?} el
              * @return {?}
              */
              function (el) {
                if (el[_this20.settings.searchBy[t].toString()].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                  filteredElems.push(el);
                }
              });
            };

            for (var t = 0; t < this.settings.searchBy.length; t++) {
              _loop(t);
            }
          } else {
            this.virtualdata.filter(
            /**
            * @param {?} el
            * @return {?}
            */
            function (el) {
              for (var prop in el) {
                if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                  filteredElems.push(el);
                  break;
                }
              }
            });
          }

          this.virtualdata = [];
          this.virtualdata = filteredElems;
          this.infiniteFilterLength = this.virtualdata.length;
        }

        if (evt.toString() != '' && this.settings.groupBy) {
          this.groupedData.filter(
          /**
          * @param {?} el
          * @return {?}
          */
          function (el) {
            if (el.hasOwnProperty('grpTitle')) {
              filteredElems.push(el);
            } else {
              for (var prop in el) {
                if (el[prop].toString().toLowerCase().indexOf(evt.toString().toLowerCase()) >= 0) {
                  filteredElems.push(el);
                  break;
                }
              }
            }
          });
          this.groupedData = [];
          this.groupedData = filteredElems;
          this.infiniteFilterLength = this.groupedData.length;
        } else if (evt.toString() == '' && this.cachedItems.length > 0) {
          this.virtualdata = [];
          this.virtualdata = this.cachedItems;
          this.infiniteFilterLength = 0;
        }

        this.virtualScroller.refresh();
      }
      /**
       * @return {?}
       */

    }, {
      key: "resetInfiniteSearch",
      value: function resetInfiniteSearch() {
        this.filter = "";
        this.isInfiniteFilterSelectAll = false;
        this.virtualdata = [];
        this.virtualdata = this.cachedItems;
        this.groupedData = this.groupCachedItems;
        this.infiniteFilterLength = 0;
      }
      /**
       * @param {?} e
       * @return {?}
       */

    }, {
      key: "onScrollEnd",
      value: function onScrollEnd(e) {
        if (e.endIndex === this.data.length - 1 || e.startIndex === 0) ;
        this.onScrollToEnd.emit(e);
      }
      /**
       * @return {?}
       */

    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        if (this.subscription) {
          this.subscription.unsubscribe();
        }
      }
      /**
       * @param {?} item
       * @return {?}
       */

    }, {
      key: "selectGroup",
      value: function selectGroup(item) {
        var _this21 = this;

        if (item.selected) {
          item.selected = false;
          item.list.forEach(
          /**
          * @param {?} obj
          * @return {?}
          */
          function (obj) {
            _this21.removeSelected(obj);
          });
          this.updateGroupInfo(item);
          this.onGroupSelect.emit(item);
        } else {
          item.selected = true;
          item.list.forEach(
          /**
          * @param {?} obj
          * @return {?}
          */
          function (obj) {
            if (!_this21.isSelected(obj)) {
              _this21.addSelected(obj);
            }
          });
          this.updateGroupInfo(item);
          this.onGroupDeSelect.emit(item);
        }
      }
      /**
       * @return {?}
       */

    }, {
      key: "addFilterNewItem",
      value: function addFilterNewItem() {
        this.onAddFilterNewItem.emit(this.filter);
        this.filterPipe = new ListFilterPipe(this.ds);
        this.filterPipe.transform(this.data, this.filter, this.settings.searchBy);
      }
      /**
       * @return {?}
       */

    }, {
      key: "calculateDropdownDirection",
      value: function calculateDropdownDirection() {
        /** @type {?} */
        var shouldOpenTowardsTop = this.settings.position == 'top';

        if (this.settings.autoPosition) {
          /** @type {?} */
          var dropdownHeight = this.dropdownListElem.nativeElement.clientHeight;
          /** @type {?} */

          var viewportHeight = document.documentElement.clientHeight;
          /** @type {?} */

          var selectedListBounds = this.selectedListElem.nativeElement.getBoundingClientRect();
          /** @type {?} */

          var spaceOnTop = selectedListBounds.top;
          /** @type {?} */

          var spaceOnBottom = viewportHeight - selectedListBounds.top;

          if (spaceOnBottom < spaceOnTop && dropdownHeight < spaceOnTop) {
            this.openTowardsTop(true);
          } else {
            this.openTowardsTop(false);
          } // Keep preference if there is not enough space on either the top or bottom

          /* 			if (spaceOnTop || spaceOnBottom) {
                          if (shouldOpenTowardsTop) {
                              shouldOpenTowardsTop = spaceOnTop;
                          } else {
                              shouldOpenTowardsTop = !spaceOnBottom;
                          }
                      } */

        }
      }
      /**
       * @param {?} value
       * @return {?}
       */

    }, {
      key: "openTowardsTop",
      value: function openTowardsTop(value) {
        if (value && this.selectedListElem.nativeElement.clientHeight) {
          this.dropdownListYOffset = 15 + this.selectedListElem.nativeElement.clientHeight;
        } else {
          this.dropdownListYOffset = 0;
        }
      }
      /**
       * @param {?} e
       * @return {?}
       */

    }, {
      key: "clearSelection",
      value: function clearSelection(e) {
        if (this.settings.groupBy) {
          this.groupCachedItems.forEach(
          /**
          * @param {?} obj
          * @return {?}
          */
          function (obj) {
            obj.selected = false;
          });
        }

        this.clearSearch();
        this.selectedItems = [];
        this.onDeSelectAll.emit(this.selectedItems);
      }
    }]);

    return AngularMultiSelect;
  }();

  AngularMultiSelect.ɵfac = function AngularMultiSelect_Factory(t) {
    return new (t || AngularMultiSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DataService));
  };

  AngularMultiSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AngularMultiSelect,
    selectors: [["angular2-multiselect"]],
    contentQueries: function AngularMultiSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, Item, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, Badge, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, Search, true);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.itemTempl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.badgeTempl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchTempl = _t.first);
      }
    },
    viewQuery: function AngularMultiSelect_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](VirtualScrollerComponent, true);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selectedListElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dropdownListElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.virtualScroller = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function AngularMultiSelect_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.escape", function AngularMultiSelect_keyup_escape_HostBindingHandler($event) {
          return ctx.onEscapeDown($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.defaultSettings.classes);
      }
    },
    inputs: {
      settings: "settings",
      data: "data",
      loading: "loading"
    },
    outputs: {
      onSelect: "onSelect",
      onDeSelect: "onDeSelect",
      onSelectAll: "onSelectAll",
      onDeSelectAll: "onDeSelectAll",
      onOpen: "onOpen",
      onClose: "onClose",
      onScrollToEnd: "onScrollToEnd",
      onFilterSelectAll: "onFilterSelectAll",
      onFilterDeSelectAll: "onFilterDeSelectAll",
      onAddFilterNewItem: "onAddFilterNewItem",
      onGroupSelect: "onGroupSelect",
      onGroupDeSelect: "onGroupDeSelect"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR, DROPDOWN_CONTROL_VALIDATION]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 31,
    vars: 43,
    consts: [[1, "cuppa-dropdown", 3, "clickOutside"], [1, "selected-list"], ["selectedList", ""], [1, "c-btn", 3, "ngClass", "click"], [4, "ngIf"], ["class", "c-list", 4, "ngIf"], ["class", "countplaceholder", 4, "ngIf"], ["class", "c-remove clear-all", 3, "click", 4, "ngIf"], ["class", "c-angle-down", 4, "ngIf"], ["class", "c-angle-up", 4, "ngIf"], [1, "dropdown-list", "animated", "fadeIn", 3, "ngClass", "hidden"], ["dropdownList", ""], [1, "arrow-2", 3, "ngClass"], [3, "ngClass"], [1, "list-area", 3, "ngClass"], ["class", "pure-checkbox select-all", 3, "click", 4, "ngIf"], ["class", "loading-icon", "src", "assets/img/loading.gif", 4, "ngIf"], ["class", "list-filter", 4, "ngIf"], ["class", "filter-select-all", 4, "ngIf"], ["style", "overflow: auto;", 3, "maxHeight", 4, "ngIf"], ["class", "list-message", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-list"], ["class", "c-token", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-token"], ["class", "c-label", 4, "ngIf"], [1, "c-remove", 3, "click"], [3, "name"], [1, "c-label"], [3, "data", "item"], ["class", "c-token", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "c-token", 3, "hidden"], [1, "countplaceholder"], [1, "c-remove", "clear-all", 3, "click"], [1, "c-angle-down"], [1, "c-angle-up"], [1, "pure-checkbox", "select-all", 3, "click"], ["type", "checkbox", 3, "checked", "disabled", 4, "ngIf"], [3, "hidden"], ["type", "checkbox", 3, "checked", "disabled"], ["src", "assets/img/loading.gif", 1, "loading-icon"], [1, "list-filter"], [1, "c-search"], ["class", "c-clear", 3, "hidden", "click", 4, "ngIf"], ["class", "c-input", "type", "text", 3, "placeholder", "ngModel", "ngModelChange", "keyup", 4, "ngIf"], ["class", "c-input", "type", "text", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], [3, "data", "item", 4, "ngIf"], [1, "c-clear", 3, "hidden", "click"], ["type", "text", 1, "c-input", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["searchInput", ""], ["type", "text", 1, "c-input", 3, "placeholder", "ngModel", "ngModelChange"], [1, "filter-select-all"], ["class", "nodata-label", 3, "hidden", 4, "ngIf"], ["class", "btn-container", 3, "hidden", 4, "ngIf"], [1, "nodata-label", 3, "hidden"], [1, "btn-container", 3, "hidden"], [1, "c-btn", "btn-iceblue", 3, "click"], [2, "overflow", "auto"], [1, "lazyContainer"], ["class", "pure-checkbox", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "pure-checkbox", 3, "ngClass", "click"], ["virtualScroller", "", 1, "lazyContainer", 3, "enableUnequalChildrenSizes", "items", "ngStyle", "vsStart", "vsEnd"], ["scroll", ""], ["scroll2", ""], ["scroll3", ""], [4, "ngFor", "ngForOf"], ["class", "pure-checkbox", 3, "ngClass", "click", 4, "ngIf"], ["class", "pure-checkbox", 3, "ngClass", 4, "ngIf"], [1, "pure-checkbox", 3, "ngClass"], [3, "items", "ngStyle", "vsUpdate", "vsEnd"], ["scroll4", ""], [1, "list-message"]],
    template: function AngularMultiSelect_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clickOutside", function AngularMultiSelect_Template_div_clickOutside_0_listener() {
          return ctx.closeDropdownOnClickOut();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AngularMultiSelect_Template_div_click_3_listener($event) {
          return ctx.toggleDropdown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AngularMultiSelect_span_4_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AngularMultiSelect_span_5_Template, 2, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AngularMultiSelect_span_6_Template, 2, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AngularMultiSelect_div_7_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AngularMultiSelect_span_8_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AngularMultiSelect_span_9_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AngularMultiSelect_span_10_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AngularMultiSelect_span_11_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AngularMultiSelect_div_17_Template, 7, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AngularMultiSelect_img_18_Template, 1, 0, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AngularMultiSelect_div_19_Template, 9, 7, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AngularMultiSelect_div_20_Template, 6, 5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AngularMultiSelect_div_21_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AngularMultiSelect_div_22_Template, 4, 7, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AngularMultiSelect_div_23_Template, 4, 8, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AngularMultiSelect_div_24_Template, 4, 7, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AngularMultiSelect_div_25_Template, 4, 8, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AngularMultiSelect_div_26_Template, 4, 8, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AngularMultiSelect_div_27_Template, 3, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AngularMultiSelect_div_28_Template, 5, 12, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, AngularMultiSelect_div_29_Template, 3, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AngularMultiSelect_h5_30_Template, 2, 1, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](31, _c13, ctx.settings.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settings.singleSelection && !ctx.badgeTempl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && ctx.settings.singleSelection && ctx.badgeTempl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && !ctx.settings.singleSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.selectedItems == null ? null : ctx.selectedItems.length) > ctx.settings.badgeShowLimit);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settings.clearAll && (ctx.selectedItems == null ? null : ctx.selectedItems.length) > 0 && !ctx.settings.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("bottom", ctx.dropdownListYOffset ? ctx.dropdownListYOffset : null, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](33, _c14, ctx.dropdownListYOffset))("hidden", !ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](35, _c15, !ctx.dropdownListYOffset, ctx.dropdownListYOffset));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](38, _c15, !ctx.dropdownListYOffset, ctx.dropdownListYOffset));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](41, _c16, ctx.settings.singleSelection));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settings.enableCheckAll && !ctx.settings.singleSelection && !ctx.settings.limitSelection && (ctx.data == null ? null : ctx.data.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settings.enableSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.settings.lazyLoading && ctx.settings.enableFilterSelectAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settings.lazyLoading && ctx.settings.enableFilterSelectAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && ctx.settings.lazyLoading && ctx.itemTempl == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settings.groupBy && !ctx.settings.lazyLoading && ctx.itemTempl == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.length) == 0);
      }
    },
    directives: [ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], CIcon, TemplateRenderer, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], VirtualScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
    pipes: [ListFilterPipe],
    styles: ["virtual-scroll{display:block;width:100%}.cuppa-dropdown{position:relative}.c-btn{display:inline-block;border-width:1px;line-height:1.25;border-radius:3px;font-size:.85rem;padding:5px 10px;cursor:pointer;align-items:center;min-height:38px}.c-btn.disabled{background:#ccc}.selected-list .c-list{float:left;padding:0;margin:0;width:calc(100% - 20px)}.selected-list .c-list .c-token{list-style:none;padding:4px 22px 4px 8px;border-radius:2px;margin-right:4px;margin-top:2px;float:left;position:relative}.selected-list .c-list .c-token .c-label{display:block;float:left}.selected-list .c-list .c-token .c-remove{position:absolute;right:8px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.selected-list .c-list .c-token .c-remove svg{fill:#fff}.selected-list .fa-angle-down,.selected-list .fa-angle-up{font-size:15pt;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-angle-down,.selected-list .c-angle-up{width:12px;height:12px;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}.selected-list .c-angle-down svg,.selected-list .c-angle-up svg{fill:#333}.selected-list .countplaceholder{position:absolute;right:45px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.selected-list .c-btn{width:100%;padding:5px 10px;cursor:pointer;display:flex;position:relative}.selected-list .c-btn .c-icon{position:absolute;right:5px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.dropdown-list{position:absolute;padding-top:14px;width:100%;z-index:99999}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list ul li{padding:10px;cursor:pointer;text-align:left}.dropdown-list ul li:first-child{padding-top:10px}.dropdown-list ul li:last-child{padding-bottom:10px}.dropdown-list ::-webkit-scrollbar{width:8px}.dropdown-list ::-webkit-scrollbar-thumb{background:#ccc;border-radius:5px}.dropdown-list ::-webkit-scrollbar-track{background:#f2f2f2}.arrow-down,.arrow-up{width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-bottom:15px solid #fff;margin-left:15px;position:absolute;top:0}.arrow-down{bottom:-14px;top:unset;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.arrow-2{border-bottom:15px solid #ccc;top:-1px}.arrow-down.arrow-2{top:unset;bottom:-16px}.list-area{border:1px solid #ccc;border-radius:3px;background:#fff;margin:0}.select-all{padding:10px;border-bottom:1px solid #ccc;text-align:left}.list-filter{border-bottom:1px solid #ccc;position:relative;padding-left:35px;height:35px}.list-filter input{border:0;width:100%;height:100%;padding:0}.list-filter input:focus{outline:0}.list-filter .c-search{position:absolute;top:9px;left:10px;width:15px;height:15px}.list-filter .c-search svg{fill:#888}.list-filter .c-clear{position:absolute;top:10px;right:10px;width:15px;height:15px}.list-filter .c-clear svg{fill:#888}.pure-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.pure-checkbox input[type=checkbox]:focus+label:before,.pure-checkbox input[type=checkbox]:hover+label:before{background-color:#f2f2f2}.pure-checkbox input[type=checkbox]:active+label:before{transition-duration:0s}.pure-checkbox input[type=checkbox]+label{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;font-weight:300}.pure-checkbox input[type=checkbox]+label:before{box-sizing:content-box;content:'';position:absolute;top:50%;left:0;width:15px;height:15px;margin-top:-9px;text-align:center;transition:.4s;border-radius:3px}.pure-checkbox input[type=checkbox]+label:after{box-sizing:content-box;content:'';position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50%;transform-origin:50%;transition:transform .2s ease-out,-webkit-transform .2s ease-out;background-color:transparent;top:50%;left:3px;width:9px;height:4px;margin-top:-5px;border-style:solid;border-width:0 0 2px 2px;-o-border-image:none;border-image:none;-webkit-transform:rotate(-45deg) scale(0);transform:rotate(-45deg) scale(0)}.pure-checkbox input[type=checkbox]:disabled+label:before{border-color:#ccc}.pure-checkbox input[type=checkbox]:disabled:focus+label:before .pure-checkbox input[type=checkbox]:disabled:hover+label:before{background-color:inherit}.pure-checkbox input[type=checkbox]:disabled:checked+label:before{background-color:#ccc}.pure-checkbox input[type=radio]:checked+label:before{background-color:#fff}.pure-checkbox input[type=radio]:checked+label:after{-webkit-transform:scale(1);transform:scale(1)}.pure-checkbox input[type=radio]+label:before{border-radius:50%}.pure-checkbox input[type=checkbox]:checked+label:after{content:'';transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform:rotate(-45deg) scale(1);transform:rotate(-45deg) scale(1)}.list-message{text-align:center;margin:0;padding:15px 0;font-size:initial}.list-grp{padding:0 15px!important}.list-grp h4{text-transform:capitalize;margin:15px 0 0;font-size:14px;font-weight:700}.list-grp>li{padding-left:15px!important}.grp-item{padding-left:30px!important}.grp-title{padding-bottom:0!important}.grp-title label{margin-bottom:0!important;font-weight:800;text-transform:capitalize}.grp-title:hover{background:0 0!important}.loading-icon{width:20px;position:absolute;right:10px;top:23px;z-index:1}.nodata-label{width:100%;text-align:center;padding:10px 0 0}.btn-container{text-align:center;padding:0 5px 10px}.clear-all{width:8px;position:absolute;top:50%;right:30px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}"],
    encapsulation: 2
  });
  return AngularMultiSelect;
}();

var AngularMultiSelectModule = /*@__PURE__*/function () {
  var AngularMultiSelectModule = function AngularMultiSelectModule() {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AngularMultiSelectModule);
  };

  AngularMultiSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AngularMultiSelectModule
  });
  AngularMultiSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    factory: function AngularMultiSelectModule_Factory(t) {
      return new (t || AngularMultiSelectModule)();
    },
    providers: [DataService],
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], VirtualScrollerModule]]
  });
  return AngularMultiSelectModule;
}();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AngularMultiSelectModule, {
    declarations: function declarations() {
      return [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], VirtualScrollerModule];
    },
    exports: function exports() {
      return [AngularMultiSelect, ClickOutsideDirective, ScrollDirective, styleDirective, ListFilterPipe, Item, TemplateRenderer, Badge, Search, setPosition, CIcon];
    }
  });
})();



/***/ }),

/***/ "./src/app/ngx-wizard/data/formData.model.ts":
/*!***************************************************!*\
  !*** ./src/app/ngx-wizard/data/formData.model.ts ***!
  \***************************************************/
/*! exports provided: FormData, Personal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return FormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personal", function() { return Personal; });
//Wizard form data class Starts
var FormData = /** @class */ /*@__PURE__*/ (function () {
    function FormData() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
    };
    return FormData;
}());

//Wizard form data class Ends
//Personal tab data class starts
var Personal = /** @class */ /*@__PURE__*/ (function () {
    function Personal() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
    }
    return Personal;
}());

//Personal tab data class ends


/***/ }),

/***/ "./src/app/ngx-wizard/data/formData.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/ngx-wizard/data/formData.service.ts ***!
  \*****************************************************/
/*! exports provided: FormDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataService", function() { return FormDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _formData_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formData.model */ "./src/app/ngx-wizard/data/formData.model.ts");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/ngx-wizard/workflow/workflow.service.ts");





var FormDataService = /** @class */ /*@__PURE__*/ (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new _formData_model__WEBPACK_IMPORTED_MODULE_1__["FormData"]();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
    }
    //Get Personal Tab Data
    FormDataService.prototype.getPersonal = function () {
        // Return the Personal data
        var personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return personal;
    };
    //Set Personal Tab Data
    FormDataService.prototype.setPersonal = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].personal);
    };
    //Get Work Tab Data
    FormDataService.prototype.getWork = function () {
        // Return the work type
        return this.formData.work;
    };
    //Set Work Tab Data
    FormDataService.prototype.setWork = function (data) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].work);
    };
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    };
    FormDataService.ɵfac = function FormDataService_Factory(t) { return new (t || FormDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowService"])); };
    FormDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormDataService, factory: FormDataService.ɵfac });
    return FormDataService;
}());



/***/ }),

/***/ "./src/app/ngx-wizard/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ngx-wizard/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




var NavbarComponent = /** @class */ /*@__PURE__*/ (function () {
    function NavbarComponent(router, route) {
        this.router = router;
        this.route = route;
        this.page = "Personal";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            //.filter(event => event instanceof NavigationEnd)
            .subscribe(function (event) {
            var currentRoute = _this.route.root;
            while (currentRoute.children[0] !== undefined) {
                currentRoute = currentRoute.children[0];
            }
            _this.page = currentRoute.snapshot.data["title"];
        });
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["msw-navbar"]], decls: 20, vars: 3, consts: [[1, "wizard-navbar"], [1, "liner"], [1, "active", "flex-fill"], ["uiSrefActive", "active", "uiSref", "personal", "data-toggle", "tab", "title", "personal", 3, "ngClass"], [1, "round-tabs", "one"], [1, "flex-fill"], ["uiSrefActive", "active", "uiSref", "work", "data-toggle", "tab", "title", "work", 3, "ngClass"], [1, "round-tabs", "two"], ["uiSrefActive", "active", "uiSref", "result", "data-toggle", "tab", "title", "completed", 3, "ngClass"], [1, "round-tabs", "four"]], template: function NavbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Client & Policy Details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 01 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Health Details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 02 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Result");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " 03 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.page === "Personal" ? "nav-link active" : "nav-link");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.page === "Work" ? "nav-link active" : "nav-link");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.page === "Result" ? "nav-link active" : "nav-link");
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [""] });
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/ngx-wizard/ngx-wizard-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ngx-wizard/ngx-wizard-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NGXWizardRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXWizardRoutingModule", function() { return NGXWizardRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-wizard.component */ "./src/app/ngx-wizard/ngx-wizard.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/ngx-wizard/personal/personal.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work/work.component */ "./src/app/ngx-wizard/work/work.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result/result.component */ "./src/app/ngx-wizard/result/result.component.ts");








var routes = [
    {
        path: '',
        component: _ngx_wizard_component__WEBPACK_IMPORTED_MODULE_2__["NGXFormWizardComponent"],
        data: {
            title: 'ngx-wizard'
        },
        children: [
            {
                path: 'wizard',
                component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_3__["PersonalComponent"],
                data: {
                    title: 'Personal'
                }
            },
            {
                path: 'work',
                component: _work_work_component__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"],
                data: {
                    title: 'Work'
                }
            },
            // {
            //   path: 'address',
            //   component: AddressComponent,
            //   data: {
            //     title: 'Address'
            //   }
            // },  
            {
                path: 'result',
                component: _result_result_component__WEBPACK_IMPORTED_MODULE_5__["ResultComponent"],
                data: {
                    title: 'Result'
                }
            }
        ]
    }
];
var NGXWizardRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function NGXWizardRoutingModule() {
    }
    NGXWizardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NGXWizardRoutingModule });
    NGXWizardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NGXWizardRoutingModule_Factory(t) { return new (t || NGXWizardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return NGXWizardRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NGXWizardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
var routedComponents = [_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_2__["NGXFormWizardComponent"]];


/***/ }),

/***/ "./src/app/ngx-wizard/ngx-wizard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ngx-wizard/ngx-wizard.component.ts ***!
  \****************************************************/
/*! exports provided: NGXFormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXFormWizardComponent", function() { return NGXFormWizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/ngx-wizard/navbar/navbar.component.ts");




var NGXFormWizardComponent = /** @class */ /*@__PURE__*/ (function () {
    function NGXFormWizardComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    NGXFormWizardComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/forms/ngx/wizard'], { skipLocationChange: true });
    };
    NGXFormWizardComponent.ɵfac = function NGXFormWizardComponent_Factory(t) { return new (t || NGXFormWizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    NGXFormWizardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NGXFormWizardComponent, selectors: [["multi-step-wizard-app"]], decls: 8, vars: 0, consts: [["id", "ngx"], [1, "card"], [1, "card-body"], [1, "card-block"], [1, "board"], [1, "tab-content"]], template: function NGXFormWizardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "msw-navbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".tab-content[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.alert[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin-bottom: 8px;\n}\n\n.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 5px solid #42A948;\n  \n}\n\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}"] });
    return NGXFormWizardComponent;
}());



/***/ }),

/***/ "./src/app/ngx-wizard/ngx-wizard.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ngx-wizard/ngx-wizard.module.ts ***!
  \*************************************************/
/*! exports provided: NGXFormWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXFormWizardModule", function() { return NGXFormWizardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-wizard-routing.module */ "./src/app/ngx-wizard/ngx-wizard-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-wizard.component */ "./src/app/ngx-wizard/ngx-wizard.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/ngx-wizard/navbar/navbar.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/ngx-wizard/personal/personal.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work.component */ "./src/app/ngx-wizard/work/work.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result/result.component */ "./src/app/ngx-wizard/result/result.component.ts");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/formData.service */ "./src/app/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workflow/workflow.service */ "./src/app/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



/* App Root */


/* Feature Components */



/* Shared Service */



// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



var NGXFormWizardModule = /** @class */ /*@__PURE__*/ (function () {
    function NGXFormWizardModule() {
    }
    NGXFormWizardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NGXFormWizardModule, bootstrap: [_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_3__["NGXFormWizardComponent"]] });
    NGXFormWizardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NGXFormWizardModule_Factory(t) { return new (t || NGXFormWizardModule)(); }, providers: [{ provide: _data_formData_service__WEBPACK_IMPORTED_MODULE_8__["FormDataService"], useClass: _data_formData_service__WEBPACK_IMPORTED_MODULE_8__["FormDataService"] },
            { provide: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_9__["WorkflowService"], useClass: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_9__["WorkflowService"] }], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_1__["NGXWizardRoutingModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["AngularMultiSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]
            ]] });
    return NGXFormWizardModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NGXFormWizardModule, { declarations: [_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_3__["NGXFormWizardComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__["PersonalComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_1__["NGXWizardRoutingModule"],
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["AngularMultiSelectModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]] });
})();


/***/ }),

/***/ "./src/app/ngx-wizard/personal/personal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ngx-wizard/personal/personal.component.ts ***!
  \***********************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








function PersonalComponent_div_7_Template(rf, ctx) {
    if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_div_7_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.personal.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_div_7_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.personal.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Choose Your Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Desiging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Videography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Feet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Tobacco Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Choose Your Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Desiging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Videography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Choose Your Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Desiging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Videography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Family Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Choose Your Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Desiging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Videography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Policy Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Choose Your Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Desiging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Videography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Riders Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Choose Your Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Desiging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Videography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Underwriting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Choose Your Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Desiging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Videography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalComponent_div_7_Template_button_click_134_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx_r7.save(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.personal.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.personal.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    }
}
var PersonalComponent = /** @class */ /*@__PURE__*/ (function () {
    function PersonalComponent(router, route, formDataService, workflowService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.workflowService = workflowService;
        this.title = 'Please tell us about yourself.';
        this.personal = null;
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.personal = this.formDataService.getPersonal();
    };
    //Save button event Starts
    PersonalComponent.prototype.save = function (form) {
        if (!form.valid)
            return;
        if (this.personal)
            this.formDataService.setPersonal(this.personal);
        var firstState = this.workflowService.getFirstInvalidStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].work);
        if (firstState.length > 0) {
        }
        ;
        this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
    };
    PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__["WorkflowService"])); };
    PersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["mt-wizard-personal"]], decls: 8, vars: 2, consts: [["novalidate", "", 1, "editForm"], ["personalForm", "ngForm"], [1, "tab-pane", "active"], [1, "font-medium-2", "text-center"], [1, "row"], ["class", "col-12", 4, "ngIf"], [1, "col-12"], [1, "col-12", "col-sm-3"], [1, "form-group"], ["for", "firstname", 1, "form-control-label"], ["id", "firstName", "name", "firstName", "type", "text", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["for", "lastname", 1, "form-control-label"], ["id", "lastname", "name", "lastname", "type", "text", 1, "form-control", "input-md", 3, "ngModel", "ngModelChange"], ["lastname", "ngModel"], ["for", "dob", 1, "form-control-label"], ["type", "date", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control"], ["for", "gender", 1, "form-control-label"], [1, "form-control"], ["for", "location", 1, "form-control-label"], ["type", "text", "id", "location", "aria-describedby", "name", "placeholder", "Location.....", 1, "form-control"], [1, "col-12", "col-sm-2"], ["for", "height", 1, "form-control-label"], ["type", "text", "id", "height", "aria-describedby", "name", "placeholder", "Inch.....", 1, "form-control"], [1, "col-12", "col-sm-1"], ["for", "feet", 1, "form-control-label"], ["type", "text", "id", "feet", "aria-describedby", "name", "placeholder", "Feet.....", 1, "form-control"], ["for", "weight", 1, "form-control-label"], ["type", "text", "id", "weight", "aria-describedby", "name", "placeholder", "Weight.....", 1, "form-control"], ["for", "tobacco", 1, "form-control-label"], ["for", "familyType", 1, "form-control-label"], ["for", "policy", 1, "form-control-label"], ["for", "riders", 1, "form-control-label"], ["for", "underwriting", 1, "form-control-label"], [1, "form-group", "text-center"], ["type", "button", "uiSref", "work", 1, "btn", "btn-success", "btn-raised", 3, "disabled", "click"]], template: function PersonalComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PersonalComponent_div_7_Template, 136, 3, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.personal);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: [""] });
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/ngx-wizard/result/result.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ngx-wizard/result/result.component.ts ***!
  \*******************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




var ResultComponent = /** @class */ /*@__PURE__*/ (function () {
    function ResultComponent(formDataService, router) {
        this.formDataService = formDataService;
        this.router = router;
        this.title = 'Thank You!';
        this.formData = Object.create(null);
        this.isFormValid = false;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
    };
    //Submit button event Starts
    ResultComponent.prototype.submit = function () {
        this.router.navigate(['/dash-board']);
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    };
    ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_formData_service__WEBPACK_IMPORTED_MODULE_1__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["mt-wizard-result"]], inputs: { formData: "formData" }, decls: 33, vars: 4, consts: [[1, "tab-pane", "active"], [1, "head", "text-center"], [1, "narrow", "text-center"], [1, "row"], [1, "col-offset-1", "col-10", "col-sm-offset-3", "col-sm-8", "col-md-offset-4", "col-md-8"], [1, "col-3", "col-sm-2"], [1, "form-group"], ["for", "name", 1, "form-control-label"], [1, "col-9", "col-sm-10"], ["for", "email", 1, "form-control-label"], ["for", "work", 1, "form-control-label"], [1, "text-center"], [1, "btn", "btn-success", "btn-raised", 3, "click"], [2, "margin-left", "10px"], [1, "ft-chevron-right"]], template: function ResultComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Here is a copy of the information you have entered: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Work: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_Template_button_click_29_listener() { return ctx.submit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Submit ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formData.firstName + " " + ctx.formData.lastName, " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formData.email, " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formData.work, " ");
            }
        }, styles: [""] });
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/ngx-wizard/work/work.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ngx-wizard/work/work.component.ts ***!
  \***************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









function WorkComponent_ng_template_9_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var item_r15 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", item_r15, " ");
    }
}
function WorkComponent_ng_template_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "When was client medically diagnosed, treated, or taken medication for cancer (other than basil cell skin cancer)? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkComponent_ng_template_9_div_2_Template, 4, 2, "div", 23);
    }
    if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cancer);
    }
}
function WorkComponent_ng_template_11_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var r_r18 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", r_r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", r_r18, "\n");
    }
}
function WorkComponent_ng_template_11_div_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var i_r19 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", i_r19, "\n");
    }
}
function WorkComponent_ng_template_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " What's the reason for the disability? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkComponent_ng_template_11_div_2_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " What is the source of disability income?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WorkComponent_ng_template_11_div_5_Template, 4, 2, "div", 23);
    }
    if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.reason);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.income);
    }
}
function WorkComponent_ng_template_13_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var dialysis_r23 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dialysis_r23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", dialysis_r23, " ");
    }
}
function WorkComponent_ng_template_13_div_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var kidney_r24 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", kidney_r24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", kidney_r24, " ");
    }
}
function WorkComponent_ng_template_13_div_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var transplant_r25 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", transplant_r25, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", transplant_r25);
    }
}
function WorkComponent_ng_template_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dialysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkComponent_ng_template_13_div_2_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Diagnosed or treated for Renal Insuficiency/Failure, Polycystic Kidney Disease, or Nephrectomy (Kidney removal) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WorkComponent_ng_template_13_div_5_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WorkComponent_ng_template_13_div_6_Template, 4, 2, "div", 23);
    }
    if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.dialysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.kidney);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.transplant);
    }
}
function WorkComponent_ng_template_15_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var asthma_r32 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", asthma_r32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", asthma_r32, " ");
    }
}
function WorkComponent_ng_template_15_div_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var copd_r33 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", copd_r33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", copd_r33, " ");
    }
}
function WorkComponent_ng_template_15_div_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var chronic_r34 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", chronic_r34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", chronic_r34, " ");
    }
}
function WorkComponent_ng_template_15_div_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var oxygen_r35 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", oxygen_r35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", oxygen_r35, " ");
    }
}
function WorkComponent_ng_template_15_div_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var sleep_r36 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sleep_r36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", sleep_r36, " ");
    }
}
function WorkComponent_ng_template_15_div_29_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var tb_r37 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tb_r37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", tb_r37, " ");
    }
}
function WorkComponent_ng_template_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Asthma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "How severe? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkComponent_ng_template_15_div_3_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "COPD / Chronic Bronchitis / Black Lung / Emphysema / Chronic Respiratory Disease ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "how sevier? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WorkComponent_ng_template_15_div_7_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "COPD / Chronic Bronchitis / Black Lung / Emphysema / Chronic Respiratory Disease ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "When was client medically diagnosed, treated for, or taken medication (including inhaler) for it? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WorkComponent_ng_template_15_div_11_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Oxygen Equipment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "When was client required to use oxygen to assist in breathing? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WorkComponent_ng_template_15_div_15_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Respiratory Failure \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sleep Apnea ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Combined with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WorkComponent_ng_template_15_div_22_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Other \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tuberculosis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "When was client diagnosed or last treated for it? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, WorkComponent_ng_template_15_div_29_Template, 4, 2, "div", 23);
    }
    if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.asthma);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.copd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.chronic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.oxygen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.Failure);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.sleep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.other);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.tb);
    }
}
function WorkComponent_ng_template_17_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var d_r42 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", d_r42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", d_r42, " ");
    }
}
function WorkComponent_ng_template_17_div_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var i_r43 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", i_r43, " ");
    }
}
function WorkComponent_ng_template_17_div_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var c_r44 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", c_r44, " ");
    }
}
function WorkComponent_ng_template_17_div_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var g_r45 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", g_r45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", g_r45, " ");
    }
}
function WorkComponent_ng_template_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "When Diagnosed ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WorkComponent_ng_template_17_div_2_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Is client taking insulin ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Yes when was insulin started ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WorkComponent_ng_template_17_div_6_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Have you been treated for insulin shock, diabetic coma, or other diabetic complications? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WorkComponent_ng_template_17_div_9_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Combined with any of the following ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WorkComponent_ng_template_17_div_12_Template, 4, 2, "div", 23);
    }
    if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.diagnosed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.insulin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.complications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.gout);
    }
}
function WorkComponent_ng_template_19_div_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var a_r63 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", a_r63, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", a_r63);
    }
}
function WorkComponent_ng_template_19_div_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var m_r64 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", m_r64, " ");
    }
}
function WorkComponent_ng_template_19_div_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var s_r65 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", s_r65, " ");
    }
}
function WorkComponent_ng_template_19_div_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var c_r66 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", c_r66, " ");
    }
}
function WorkComponent_ng_template_19_div_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var seizures_r67 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", seizures_r67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", seizures_r67, " ");
    }
}
function WorkComponent_ng_template_19_div_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var epilepsy_r68 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", epilepsy_r68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", epilepsy_r68, " ");
    }
}
function WorkComponent_ng_template_19_div_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var hodgkin_r69 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", hodgkin_r69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", hodgkin_r69, " ");
    }
}
function WorkComponent_ng_template_19_div_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var huntington_r70 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", huntington_r70, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", huntington_r70);
    }
}
function WorkComponent_ng_template_19_div_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var lou_r71 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", lou_r71, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lou_r71);
    }
}
function WorkComponent_ng_template_19_div_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var sclerosis_r72 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sclerosis_r72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", sclerosis_r72, " ");
    }
}
function WorkComponent_ng_template_19_div_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var neuropathy_r73 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", neuropathy_r73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", neuropathy_r73, " ");
    }
}
function WorkComponent_ng_template_19_div_31_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var parkinson_r74 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", parkinson_r74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", parkinson_r74, " ");
    }
}
function WorkComponent_ng_template_19_div_35_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var parkinsonSevere_r75 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", parkinsonSevere_r75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", parkinsonSevere_r75, " ");
    }
}
function WorkComponent_ng_template_19_div_36_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var anemia_r76 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", anemia_r76, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", anemia_r76);
    }
}
function WorkComponent_ng_template_19_div_40_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var lupus_r77 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lupus_r77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", lupus_r77, " ");
    }
}
function WorkComponent_ng_template_19_div_44_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var erythematosus_r78 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", erythematosus_r78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", erythematosus_r78, " ");
    }
}
function WorkComponent_ng_template_19_div_48_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var complications_r79 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", complications_r79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", complications_r79, " ");
    }
}
function WorkComponent_ng_template_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkComponent_ng_template_19_div_0_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cerebral Palsy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " when was client diagnosed, last treated for, taken medication for, or hospitalized for cerebral palsy? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkComponent_ng_template_19_div_4_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cerebral Palsy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " How severe? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WorkComponent_ng_template_19_div_8_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WorkComponent_ng_template_19_div_9_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Epilepsy / Seizures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "What kind? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WorkComponent_ng_template_19_div_13_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Epilepsy / Seizures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "When was the client medically diagnosed or treated (medication is not considered treatment), or hospitalized for Seizures last? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WorkComponent_ng_template_19_div_17_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Hodgkin's Disease ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WorkComponent_ng_template_19_div_19_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WorkComponent_ng_template_19_div_20_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WorkComponent_ng_template_19_div_21_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Multiple Sclerosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " When was the client medically diagnosed or treated, or hospitalized for MS? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WorkComponent_ng_template_19_div_25_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Neuropathy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, WorkComponent_ng_template_19_div_27_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Parkinson's Disease ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "when was the client medically diagnosed, treated, taken medication, or hospitalized for parkinson's? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, WorkComponent_ng_template_19_div_31_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Parkinson's Disease ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "how severe is the parkinson's? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, WorkComponent_ng_template_19_div_35_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, WorkComponent_ng_template_19_div_36_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lupus Erythematosus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "what kind? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, WorkComponent_ng_template_19_div_40_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lupus Erythematosus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "if systemic lupus (sle), when was diagnosis or the last treatment (medication taken)? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, WorkComponent_ng_template_19_div_44_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Lupus Erythematosus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Any complications in the past year? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, WorkComponent_ng_template_19_div_48_Template, 4, 2, "div", 23);
    }
    if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.aids);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.medication);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.severe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.crystic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.seizures);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.epilepsy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.hodgkin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.huntington);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.lou);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.sclerosis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.neuropathy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.parkinson);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.parkinsonSevere);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.anemia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.lupus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.erythematosus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.complications);
    }
}
function WorkComponent_ng_template_21_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var aneurysm_r88 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", aneurysm_r88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", aneurysm_r88, " ");
    }
}
function WorkComponent_ng_template_21_div_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var aneurysm_r89 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", aneurysm_r89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", aneurysm_r89, " ");
    }
}
function WorkComponent_ng_template_21_div_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var aneurysm_r90 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", aneurysm_r90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", aneurysm_r90, " ");
    }
}
function WorkComponent_ng_template_21_div_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var cardiomyopathy_r91 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cardiomyopathy_r91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", cardiomyopathy_r91, " ");
    }
}
function WorkComponent_ng_template_21_div_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var aneurysm_r92 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", aneurysm_r92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", aneurysm_r92, "");
    }
}
function WorkComponent_ng_template_21_div_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var aneurysm_r93 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", aneurysm_r93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", aneurysm_r93, " ");
    }
}
function WorkComponent_ng_template_21_div_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var aneurysm_r94 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", aneurysm_r94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", aneurysm_r94, " ");
    }
}
function WorkComponent_ng_template_21_div_34_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var aneurysm_r102 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", aneurysm_r102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", aneurysm_r102, " ");
    }
}
function WorkComponent_ng_template_21_div_34_div_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var aneurysm_r103 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", aneurysm_r103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", aneurysm_r103, " ");
    }
}
function WorkComponent_ng_template_21_div_34_div_9_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var bp_r104 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bp_r104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", bp_r104, " ");
    }
}
function WorkComponent_ng_template_21_div_34_div_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var aneurysm_r105 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", aneurysm_r105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", aneurysm_r105, " ");
    }
}
function WorkComponent_ng_template_21_div_34_div_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var pulmonary_r106 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pulmonary_r106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", pulmonary_r106, " ");
    }
}
function WorkComponent_ng_template_21_div_34_div_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var transient_r107 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", transient_r107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", transient_r107, " ");
    }
}
function WorkComponent_ng_template_21_div_34_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkComponent_ng_template_21_div_34_div_1_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Heart Attack, Stroke, Heart/Circulatory surgery, Stent/Bipass surgery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " When was the event? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WorkComponent_ng_template_21_div_34_div_5_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "High Blood Pressure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "How many meds? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WorkComponent_ng_template_21_div_34_div_9_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pacemaker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "When was it inserted? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WorkComponent_ng_template_21_div_34_div_13_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pulmonary Embolism ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "When did it occur? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WorkComponent_ng_template_21_div_34_div_17_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Transient Ischemic Attack (TIA) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "When did it occur? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WorkComponent_ng_template_21_div_34_div_21_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Combined with Tobacco Use -Smoker\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r87.aneurysm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r87.aneurysm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r87.bp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r87.aneurysm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r87.pulmonary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r87.transient);
    }
}
function WorkComponent_ng_template_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Aneurysm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "How long ago was client medically diagnosed or treated, or hospitolized? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkComponent_ng_template_21_div_3_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Angina (Chest Pain) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " When was client medically diagnosed or treated for angina? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WorkComponent_ng_template_21_div_7_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Atrial Fibrillation (A-fib) / Heart Arrhythmia / Heart Murmur / Irregular Heart Beat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " When were they treated (taken medication) for it last? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WorkComponent_ng_template_21_div_11_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cardiomyopathy / Heart Disease ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " When was client medically diagnosed or treated for angina? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WorkComponent_ng_template_21_div_15_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Circulatory Disease / Disorder (including Peripheral Vascular Disease) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "When was client medically diagnosed or last treated for it? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WorkComponent_ng_template_21_div_19_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Combined With diabetes \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Congestive Heart Failure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "When was client medically diagnosed or treated for heart failure? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WorkComponent_ng_template_21_div_26_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Corinary Artery Disease ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "When was it diagnosed or last treated for? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, WorkComponent_ng_template_21_div_30_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Defibrillator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "When was it inserted? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, WorkComponent_ng_template_21_div_34_Template, 25, 6, "div", 23);
    }
    if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.aneurysm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.aneurysm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.aneurysm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.cardiomyopathy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.aneurysm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.aneurysm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.aneurysm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.huntington);
    }
}
function WorkComponent_ng_template_23_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var dementia_r113 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dementia_r113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", dementia_r113, " ");
    }
}
function WorkComponent_ng_template_23_div_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var anxiety_r114 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", anxiety_r114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", anxiety_r114, " ");
    }
}
function WorkComponent_ng_template_23_div_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var dementia_r115 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", dementia_r115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", dementia_r115, " ");
    }
}
function WorkComponent_ng_template_23_div_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ptsd_r116 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ptsd_r116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", ptsd_r116, " ");
    }
}
function WorkComponent_ng_template_23_div_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var retard_r117 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", retard_r117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", retard_r117, " ");
    }
}
function WorkComponent_ng_template_23_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Alzheimer's / Dementia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "When was client medically diagnosed or last treated for it? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkComponent_ng_template_23_div_3_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Anxiety / Depression ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "How many meds? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WorkComponent_ng_template_23_div_7_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bi-Polar Disorder / Major Depression ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "When was client medically diagnosed or last treated for it? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WorkComponent_ng_template_23_div_11_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Down's Syndrome\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Schizophrenia\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "PTSD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "How severe? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WorkComponent_ng_template_23_div_22_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Retardation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "How severe? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WorkComponent_ng_template_23_div_26_Template, 4, 2, "div", 23);
    }
    if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.dementia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.anxiety);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.dementia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r9.down);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r9.Schizophrenia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.ptsd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.retard);
    }
}
function WorkComponent_ng_template_25_div_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var c_r123 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", c_r123, " ");
    }
}
function WorkComponent_ng_template_25_div_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var d_r124 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", d_r124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", d_r124, " ");
    }
}
function WorkComponent_ng_template_25_div_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var g_r125 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", g_r125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", g_r125, " ");
    }
}
function WorkComponent_ng_template_25_div_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var u_r126 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", u_r126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", u_r126, " ");
    }
}
function WorkComponent_ng_template_25_div_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var s_r127 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", s_r127, " ");
    }
}
function WorkComponent_ng_template_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crohn's Disease ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "When was it diagnosed? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkComponent_ng_template_25_div_4_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Diverticulities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " How severe? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WorkComponent_ng_template_25_div_8_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Gastric Bypass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " When was the surgery? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WorkComponent_ng_template_25_div_12_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ulcerative Colitis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "When was client diagnosed, treated for, taken medication for, or hospitalized for Ulcerative Colitis? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WorkComponent_ng_template_25_div_16_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Weight Reduction Surgery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "When was the surgery? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WorkComponent_ng_template_25_div_20_Template, 4, 2, "div", 23);
    }
    if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.crohn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.diverticulities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.gastric);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.ulcer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.surgery);
    }
}
function WorkComponent_ng_template_27_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var arthritis_r132 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", arthritis_r132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", arthritis_r132, " ");
    }
}
function WorkComponent_ng_template_27_div_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var gouts_r133 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", gouts_r133, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gouts_r133);
    }
}
function WorkComponent_ng_template_27_div_8_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var muscular_r134 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", muscular_r134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", muscular_r134, " ");
    }
}
function WorkComponent_ng_template_27_div_12_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var paralysis_r135 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", paralysis_r135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", paralysis_r135, " ");
    }
}
function WorkComponent_ng_template_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Arthritis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " What kind? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkComponent_ng_template_27_div_3_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkComponent_ng_template_27_div_4_Template, 5, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Muscular Dystrophy (Also see wheelchair) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "When was the client medically diagnosed or treated, or hospitalized for MD? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WorkComponent_ng_template_27_div_8_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Combined with any of the followingParalysis (2 or more extremities) (Also see wheelchair) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "When was the client medically diagnosed or treated, or hospitalized for paralysis? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WorkComponent_ng_template_27_div_12_Template, 4, 2, "div", 23);
    }
    if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.arithisis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.gouts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.muscular);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.paralysis);
    }
}
function WorkComponent_ng_template_29_div_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var aneurysm_r140 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", aneurysm_r140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", aneurysm_r140, " ");
    }
}
function WorkComponent_ng_template_29_div_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var aneurysm_r141 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", aneurysm_r141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", aneurysm_r141, " ");
    }
}
function WorkComponent_ng_template_29_div_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var cardiomyopathy_r142 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cardiomyopathy_r142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", cardiomyopathy_r142, " ");
    }
}
function WorkComponent_ng_template_29_div_21_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var liver_r143 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", liver_r143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", liver_r143, " ");
    }
}
function WorkComponent_ng_template_29_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0 Hepatitis A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hepatitis B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "When was the client diagnosed or treated (taken medication) for Hepatits B? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WorkComponent_ng_template_29_div_6_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hepatitis C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "When was the client diagnosed or treated (taken medication) for Hepatits C? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WorkComponent_ng_template_29_div_10_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0 stage 3/cirrhosis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cirrhosis of Liver / Liver Disease ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "When was client medically diagnosed, hospitalized, or treated for it last? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WorkComponent_ng_template_29_div_17_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Liver Failure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "When was client medically diagnosed, hospitalized, or treated for it last? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WorkComponent_ng_template_29_div_21_Template, 4, 2, "div", 23);
    }
    if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r12.Hepatitis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.aneurysm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.aneurysm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r12.stage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.cardiomyopathy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.liver);
    }
}
function WorkComponent_ng_template_31_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var alcohol_r154 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", alcohol_r154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", alcohol_r154, " ");
    }
}
function WorkComponent_ng_template_31_div_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var amput_r155 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", amput_r155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", amput_r155, " ");
    }
}
function WorkComponent_ng_template_31_div_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var blind_r156 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", blind_r156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", blind_r156, " ");
    }
}
function WorkComponent_ng_template_31_div_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var driving_r157 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", driving_r157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", driving_r157, " ");
    }
}
function WorkComponent_ng_template_31_div_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var drug_r158 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", drug_r158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", drug_r158, " years ");
    }
}
function WorkComponent_ng_template_31_div_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var drug_r159 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", drug_r159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", drug_r159, " years ");
    }
}
function WorkComponent_ng_template_31_div_30_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var home_r160 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", home_r160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", home_r160, " ");
    }
}
function WorkComponent_ng_template_31_div_33_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var hospital_r161 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", hospital_r161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", hospital_r161, " ");
    }
}
function WorkComponent_ng_template_31_div_40_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var felony_r162 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", felony_r162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", felony_r162, " years ");
    }
}
function WorkComponent_ng_template_31_div_47_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var wheelchair_r163 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", wheelchair_r163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", wheelchair_r163, " ");
    }
}
function WorkComponent_ng_template_31_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Alcoholism");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Abbused alcohol or had, or been recommended to have, treatment how long ago? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkComponent_ng_template_31_div_3_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Amputation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Amputation caused by? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WorkComponent_ng_template_31_div_7_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Blindness ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "What caused the blindness? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WorkComponent_ng_template_31_div_11_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Driving Record ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "How long ago was the DUI, DWI, 2 or more accidents, license currently suspended or revoked, or 3 or more driving violations or combinations? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WorkComponent_ng_template_31_div_15_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "currently suspended/revoked license in the past 12 months\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Drug Abuse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Marjiuana: when was it last used? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WorkComponent_ng_template_31_div_22_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Drug Abuse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Other drug types: when did client last use illegal drugs or abused drugs or been recommended to have treatment or counseling for drug use? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WorkComponent_ng_template_31_div_26_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Home Health Care / Hospice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Does client require assistance to feed, bathe, dress or take their own medications or are they confined to a hospital, nursing home, mental facility, hospice, or require home health nursing care? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, WorkComponent_ng_template_31_div_30_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Hospitalization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, WorkComponent_ng_template_31_div_33_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Organ / Bone Morrow Transplant \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Misdemeanor / Felony / Probation / Parole / Incarcerated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "When? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, WorkComponent_ng_template_31_div_40_Template, 4, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "History of criminal record \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Wheelchair ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "When was wheelchair used? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, WorkComponent_ng_template_31_div_47_Template, 4, 2, "div", 23);
    }
    if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.alcohol);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.amput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.blind);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.driving);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r13.suspended);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.drug);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.drug);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.home);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.hospital);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r13.Organ);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.felony);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r13.History);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.wheelchair);
    }
}
var WorkComponent = /** @class */ /*@__PURE__*/ (function () {
    function WorkComponent(router, route, formDataService, workflowService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.workflowService = workflowService;
        this.title = 'What do you do?';
        this.workType = '';
        this.disabled = false;
        //------------------Ng-If Starts-------------------------------------
        this.cancer = ["0-1 years", "1-2 years", "2-3 years", "3-4 years", "4-5 years", "5-7 years", "7-10 years", "10+ years", "reoccurrence"];
        // -------------------------------------Diabetes Start---------------------------------------
        this.diagnosed = ["prior to age 18 years", "age 18-35 years", "age 35-40 years", "age 40-50 years", "after age 50 years"];
        this.insulin = ["Prior to age 40 years", "Between ages 40-50 years", "After age 50 years", "No"];
        this.complication = ["0-3 years", "3+ years"];
        this.gout = ["Gout", "Peripheral vascular disease", "Retinopathy (Eye disease)", "Protein in Urine", "Neuropathu", "Smoking"];
        //-------------------------------Digestive Start-----------------------------------------------------
        this.crohn = ["Prior to age 20 or within past 12 months", "1-2 years ago", "2-3 years ago", "3-5 yrs ago", "5+ years ago"];
        this.diverticulities = ["Accute with full recovery", "Sevier or not fully recovered"];
        this.gastric = ["0-1 year", "1-2 years", "2+ year ago with no complications"];
        this.ulcer = ["Prior to age 20 or within past 12 months", "1-3 years ago", "3+ years ago"];
        this.surgery = ["Within the past year", "1+ year without complications", "History of complications such as Dumping Syndrome"];
        //-------------------------------------Disabled under age 65 starts-------------------------------------------
        this.reason = ["Maternity, fractures, spinal or back disorders or hip or knee replacements", "other"];
        this.income = ["social security disability / work disability", "military disability"];
        //---------------------------------Imune and Neurological start---------------------------------------
        this.aids = ["AIDS"];
        this.medication = ["Within the past 3 years", "3+ years ago"];
        this.severe = ["Mild-moderate", "Severe"];
        this.cystic = ["Cystic Fibrosis"];
        this.seizures = ["Petit Mal", "All others"];
        this.epilepsy = ["Within the past year with more than 12 seizures", "Within the past 2 years with more than 12 seizures",
            "Within the past 2 years with less than 12 seizures", "2-3 years with no seizures in the past 1 year",
            "2-3 years with no seizures in the past 1 year", "More than 3 years ago with no seizures in the past 3 years"];
        this.hodgkin = ["3+ years"];
        this.huntington = ["Huntington's Disease"];
        this.lou = ["Lou Gehrig's Disease (ALS)"];
        this.sclerosis = ["0-2 years", "2-3 years ago", "3-4 years ago", "4-5 years ago", "5-10 years ago", "10+ yrs ago"];
        this.neuropathy = ["Diabetic Neuropathy", "Other"];
        this.parkinson = ["Within the past 2 years", "2-3 years ago", "3-4 years ago", "4+ years ago"];
        this.parkinsonSevere = ["Mild to moderate", "Severe"];
        this.anemia = ["Sickle Cell Anemia"];
        this.lupus = ["Systemic", "Discoid"];
        this.erythematosus = ["Currently being treated (taking medication) or within the last year", "1-2 yrs ago",
            "2-4 yrs ago", "4-5 years ago", "5-10 yrs ago", "10+ yrs ago"];
        this.complications = ["Yes", "No"];
        //----------------------------------Joint and Muscle------------------------------------------
        this.arthritis = ["Osteo", "Rheumatoid - minimal, slight impairment and not disabled", "Rheumatoid - all others and/or disabled"];
        this.gouts = ["Gout"];
        this.muscular = ["Within the past 1 year", "1-2 years ago", "2-3 years ago", "3+ years ago"];
        this.paralysis = ["Within the past 3 years, been medically diagnosed or treated, or hospitalized for paralysis of two or more extremities",
            "More than 3 years, been medically diagnosed or treated, or hospitalized for paralysis of two or more extremities"];
        //-------------------------------Kidney------------------------------------------------------------------
        this.dialysis = ["currently", "Not currently, but in the past 1 year", "1-2 years ago", "2-4 years ago", "4-5 years ago",
            "5-10 yrs ago", "10+ years ago",];
        this.kidney = ["In the past 1 year", "1-2 years ago", "2-4 years ago", "4-5 yrs ago", "5-10 years ago", "10+ years ago."];
        this.transplant = ["Transplant recipient"];
        //-----------------------------HEart Circulatory----------------------------------------------------------
        this.aneurysm = ["0-1 year ago", "1-2 years ago", "2-3 years ago", "3-5 years ago", "5+ years ago"];
        this.cardiomyopathy = ["0-1 year ago", "1-2 years ago", "2-3 years ago", "3-5 years ago", "5-10 years ago", "10+ years ago"];
        this.bp = ["1-2", "3+"];
        this.pulmonary = ["Within the past 6 months", " 6 months to 1 year ago", "1-2 years ago", "2+ years ago"];
        this.transient = ["Within the past 6 months", "6-12 months ago", "1-2 years ago", "2-3 years ago", "3-5 years ago",
            "5+ years ago"];
        //----------------------------------------------------Liver-------------------------------------------------
        this.hepatitis = ["0-1 year", "1-2 years", "2-5 years ago", "5+ years ago"];
        this.liver = ["0-1 year", "1-2 years ago", "2+ years ago"];
        //-----------------------------------------Lung-----------------------------------------------------------
        this.asthma = ["Mild, occasional, brief episodes, allergic, seasonal", "Moderate, more than 1 episode a month",
            "Severe, hospitalization or ER visit in past 12 months, Maintenance steroid use", "Combined with Tobacco Use - Smoker"];
        this.copd = ["Mild and non-tobacco", "Moderate", "Severe"];
        this.chronic = ["Within the past 2 years", "2-3 years ago", "3-5 yrs-ago", "5+ yrs-ago"];
        this.oxygen = ["Currently or within the past 6 months", "6-12 months ago", "1-2 years ago", "2+ years ago"];
        this.sleep = ["Over table 2 weight limit", "High blood pressure"];
        this.tb = ["Within the past 2 years", "2+ years ago"];
        //--------------------------------Mental Nervous Disorder---------------------------------------------
        this.dementia = ["Within the past 2 years", "2-5 yrs ago", "5+ yrs ago"];
        this.anxiety = ["1-2 meds", "3+"];
        this.ptsd = ["Mild (single episode)", "Moderate", "Severe"];
        this.retard = ["Mild to moderate", "Severe"];
        //------------------------------------Other--------------------------------------------------------
        this.alcohol = ["Within the last 1 year", "1-2 years ago", "2-5 years ago", "5+ years ago"];
        this.amput = ["Injury", "Disease"];
        this.blind = ["Diabetes, circulatory disorder, or other illness", "Non-illness related"];
        this.driving = ["Within the last 1 year", "1-2 years ago", "2-3 years ago", "3-5 years ago", "5+ years ago"];
        this.drug = ["0-1", "1-2", "2-4", "4-5", "5-7", "7-10", "10+"];
        this.home = ["Currently requires assistance", "Within the last 1 year"];
        this.hospital = ["Currently hospitalized", "Hospitalized 2 or more times in the past 12 months"];
        this.felony = ["Currently or in the past 2 ", "2-7 ", "7-10 ", "10+ "];
        this.wheelchair = ["Currently or in the past 6 months due to chronic illness or disease", "Currently due to injury",
            "0-1 year", "1-2 years ago", "2+ years ago"];
    }
    WorkComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    WorkComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
    };
    //Save button event Starts
    WorkComponent.prototype.save = function (form) {
        if (!form.valid)
            return;
        this.formDataService.setWork(this.workType);
        var firstState = this.workflowService.getFirstInvalidStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].work);
        this.router.navigate(['result'], { relativeTo: this.route.parent, skipLocationChange: true });
    };
    //Save button event Ends
    //Cancel button event Starts
    WorkComponent.prototype.cancel = function () {
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    };
    WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__["WorkflowService"])); };
    WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["mt-wizard-work"]], decls: 37, vars: 0, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["workForm", "ngForm"], ["activeIds", "ngb-panel-0"], ["acc", "ngbAccordion"], ["title", "Cancer"], ["ngbPanelContent", ""], ["title", "Disabled (under age 65)"], ["title", "Kidney"], ["title", "Lung"], ["title", "Diabetes"], ["title", "Immune & Neurological"], ["title", "Heart / Circulatory"], ["title", "Mental / Nervous Disorders"], ["title", "Digestive"], ["title", "Joint & Muscle"], ["title", "Liver"], ["title", "Others"], [2, "text-align", "center"], ["uiSref", "personal", "type", "button", 1, "btn", "btn-raised", "btn-secondary", "mr-1", 3, "click"], ["uiSref", "address", "type", "button", 1, "btn", "btn-raised", "btn-info", 3, "click"], [4, "ngFor", "ngForOf"], ["for", "digestive", 1, "form-control-label"], ["id", "cancer", "name", "cancer", "type", "radio", 3, "value"], ["for", "reason", 1, "form-control-label"], ["id", "reason", "name", "reason", "type", "radio", 3, "value"], ["for", "income", 1, "form-control-label"], ["id", "income", "name", "income", "type", "radio", 3, "value"], ["for", "dialysis", 1, "form-control-label"], ["id", "dialysis", "name", "dialysis", "type", "radio", 3, "value"], ["for", "kidney", 1, "form-control-label"], ["id", "kidney", "name", "kidney", "type", "radio", 3, "value"], ["for", "transplant", 1, "form-control-label"], ["id", "transplant", "name", "transplant", "type", "radio", 3, "value"], ["for", "Failure", 1, "form-control-label"], ["id", "Failure", "name", "Failure", "type", "radio", 3, "value"], ["for", "other", 1, "form-control-label"], ["id", "other", "name", "other", "type", "radio", 3, "value"], ["for", "asthma", 1, "form-control-label"], ["id", "asthma", "name", "asthma", "type", "radio", 3, "value"], ["for", "copd", 1, "form-control-label"], ["id", "copd", "name", "copd", "type", "radio", 3, "value"], ["for", "chronic", 1, "form-control-label"], ["id", "chronic", "name", "chronic", "type", "radio", 3, "value"], ["for", "oxygen", 1, "form-control-label"], ["id", "oxygen", "name", "oxygen", "type", "radio", 3, "value"], ["for", "sleep", 1, "form-control-label"], ["id", "sleep", "name", "sleep", "type", "radio", 3, "value"], ["for", "tb", 1, "form-control-label"], ["id", "tb", "name", "tb", "type", "radio", 3, "value"], ["for", "diagnosed", 1, "form-control-label"], ["id", "diagnosed", "name", "diagnosed", "type", "radio", 3, "value"], ["for", "insulin", 1, "form-control-label"], ["id", "insulin", "name", "insulin", "type", "radio", 3, "value"], ["for", "complications", 1, "form-control-label"], ["id", "complications", "name", "complications", "type", "radio", 3, "value"], ["for", "gout", 1, "form-control-label"], ["id", "gout", "name", "gout", "type", "radio", 3, "value"], ["for", "aids", 1, "form-control-label"], ["id", "aids", "name", "aids", "type", "radio", 3, "value"], ["for", "medication", 1, "form-control-label"], ["id", "medication", "name", "medication", "type", "radio", 3, "value"], ["for", "severe", 1, "form-control-label"], ["id", "severe", "name", "severe", "type", "radio", 3, "value"], ["for", "crystic", 1, "form-control-label"], ["id", "crystic", "name", "crystic", "type", "radio", 3, "value"], ["for", "seizures", 1, "form-control-label"], ["id", "seizures", "name", "seizures", "type", "radio", 3, "value"], ["for", "epilepsy", 1, "form-control-label"], ["id", "epilepsy", "name", "epilepsy", "type", "radio", 3, "value"], ["for", "hodgkin", 1, "form-control-label"], ["id", "hodgkin", "name", "hodgkin", "type", "radio", 3, "value"], ["for", "huntington", 1, "form-control-label"], ["id", "huntington", "name", "huntington", "type", "radio", 3, "value"], ["for", "lou", 1, "form-control-label"], ["id", "lou", "name", "lou", "type", "radio", 3, "value"], ["for", "sclerosis", 1, "form-control-label"], ["id", "sclerosis", "name", "sclerosis", "type", "radio", 3, "value"], ["for", "neuropathy", 1, "form-control-label"], ["id", "neuropathy", "name", "neuropathy", "type", "radio", 3, "value"], ["for", "parkinson", 1, "form-control-label"], ["id", "parkinson", "name", "parkinson", "type", "radio", 3, "value"], ["for", "parkinsonSevere", 1, "form-control-label"], ["id", "parkinsonSevere", "name", "parkinsonSevere", "type", "radio", 3, "value"], ["for", "anemia", 1, "form-control-label"], ["id", "anemia", "name", "anemia", "type", "radio", 3, "value"], ["for", "lupus", 1, "form-control-label"], ["id", "lupus", "name", "lupus", "type", "radio", 3, "value"], ["for", "erythematosus", 1, "form-control-label"], ["id", "erythematosus", "name", "erythematosus", "type", "radio", 3, "value"], ["for", "aneurysm", 1, "form-control-label"], ["id", "aneurysm", "name", "aneurysm", "type", "radio", "value", "Combined With diabetes"], ["id", "aneurysm", "name", "aneurysm", "type", "radio", 3, "value"], ["for", "cardiomyopathy", 1, "form-control-label"], ["id", "cardiomyopathy", "name", "cardiomyopathy", "type", "radio", 3, "value"], ["for", "transient", 1, "form-control-label"], ["id", "transient", "name", "transient", "type", "radio", "value", "Combined with Tobacco Use -Smoker"], ["for", "bp", 1, "form-control-label"], ["id", "bp", "name", "bp", "type", "radio", 3, "value"], ["for", "pulmonary", 1, "form-control-label"], ["id", "pulmonary", "name", "pulmonary", "type", "radio", 3, "value"], ["id", "transient", "name", "transient", "type", "radio", 3, "value"], ["for", "down", 1, "form-control-label"], ["id", "down", "name", "down", "type", "radio", 3, "value"], ["for", "Schizophrenia", 1, "form-control-label"], ["id", "Schizophrenia", "name", "Schizophrenia", "type", "radio", 3, "value"], ["for", "dementia", 1, "form-control-label"], ["id", "dementia", "name", "dementia", "type", "radio", 3, "value"], ["for", "anxiety", 1, "form-control-label"], ["id", "anxiety", "name", "anxiety", "type", "radio", 3, "value"], ["for", "ptsd", 1, "form-control-label"], ["id", "ptsd", "name", "ptsd", "type", "radio", 3, "value"], ["for", "retard", 1, "form-control-label"], ["id", "retard", "name", "retard", "type", "radio", 3, "value"], ["for", "crohn", 1, "form-control-label"], ["id", "crohn", "name", "crohn", "type", "radio", 3, "value"], ["for", "diverticulities", 1, "form-control-label"], ["id", "diverticulities", "name", "diverticulities", "type", "radio", 3, "value"], ["for", "gastric", 1, "form-control-label"], ["id", "gastric", "name", "gastric", "type", "radio", 3, "value"], ["for", "ulcer", 1, "form-control-label"], ["id", "ulcer", "name", "ulcer", "type", "radio", 3, "value"], ["for", "surgery", 1, "form-control-label"], ["id", "surgery", "name", "surgery", "type", "radio", 3, "value"], ["for", "arthritis", 1, "form-control-label"], ["id", "arthritis", "name", "arthritis", "type", "radio", 3, "value"], ["for", "gouts", 1, "form-control-label"], ["id", "gouts", "name", "gouts", "type", "radio", 3, "value"], ["for", "muscular", 1, "form-control-label"], ["id", "muscular", "name", "muscular", "type", "radio", 3, "value"], ["for", "paralysis", 1, "form-control-label"], ["id", "paralysis", "name", "paralysis", "type", "radio", 3, "value"], ["for", "Hepatitis", 1, "form-control-label"], ["id", "Hepatitis", "name", "Hepatitis", "type", "radio", 3, "value"], ["for", "stage", 1, "form-control-label"], ["id", "stage", "name", "stage", "type", "radio", 3, "value"], ["for", "liver", 1, "form-control-label"], ["id", "liver", "name", "liver", "type", "radio", 3, "value"], ["for", "suspended", 1, "form-control-label"], ["id", "suspended", "name", "suspended", "type", "radio", 3, "value"], ["for", "Organ", 1, "form-control-label"], ["id", "Organ", "name", "Organ", "type", "radio", 3, "value"], ["for", "History", 1, "form-control-label"], ["id", "History", "name", "History", "type", "radio", 3, "value"], ["for", "alcohol", 1, "form-control-label"], ["id", "alcohol", "name", "alcohol", "type", "radio", 3, "value"], ["for", "amput", 1, "form-control-label"], ["id", "amput", "name", "amput", "type", "radio", 3, "value"], ["for", "blind", 1, "form-control-label"], ["id", "blind", "name", "blind", "type", "radio", 3, "value"], ["for", "driving", 1, "form-control-label"], ["id", "driving", "name", "driving", "type", "radio", 3, "value"], ["for", "drug", 1, "form-control-label"], ["id", "drug", "name", "drug", "type", "radio", 3, "value"], ["for", "home", 1, "form-control-label"], ["id", "home", "name", "home", "type", "radio", 3, "value"], ["for", "hospital", 1, "form-control-label"], ["id", "hospital", "name", "hospital", "type", "radio", 3, "value"], ["for", "felony", 1, "form-control-label"], ["id", "felony", "name", "felony", "type", "radio", 3, "value"], ["for", "wheelchair", 1, "form-control-label"], ["id", "wheelchair", "name", "wheelchair", "type", "radio", 3, "value"]], template: function WorkComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", null, 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-accordion", 5, 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-panel", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WorkComponent_ng_template_9_Template, 3, 1, "ng-template", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-panel", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WorkComponent_ng_template_11_Template, 6, 2, "ng-template", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngb-panel", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WorkComponent_ng_template_13_Template, 7, 3, "ng-template", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngb-panel", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WorkComponent_ng_template_15_Template, 30, 8, "ng-template", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngb-panel", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WorkComponent_ng_template_17_Template, 13, 4, "ng-template", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngb-panel", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WorkComponent_ng_template_19_Template, 49, 17, "ng-template", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngb-panel", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WorkComponent_ng_template_21_Template, 35, 8, "ng-template", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngb-panel", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, WorkComponent_ng_template_23_Template, 27, 7, "ng-template", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngb-panel", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WorkComponent_ng_template_25_Template, 21, 5, "ng-template", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngb-panel", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, WorkComponent_ng_template_27_Template, 13, 4, "ng-template", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ngb-panel", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, WorkComponent_ng_template_29_Template, 22, 6, "ng-template", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngb-panel", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, WorkComponent_ng_template_31_Template, 48, 13, "ng-template", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_33_listener() { return ctx.cancel(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Back");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r164); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.save(_r0); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Search ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPanelContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["body[_ngcontent-%COMP%] {\r\n    padding: 1em;\r\n}\r\n.fa[_ngcontent-%COMP%] {\r\n    float: right;\r\n}"] });
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/ngx-wizard/workflow/workflow.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/ngx-wizard/workflow/workflow.model.ts ***!
  \*******************************************************/
/*! exports provided: STEPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPS", function() { return STEPS; });
var STEPS = {
    personal: 'personal',
    work: 'work',
    result: 'result'
};


/***/ }),

/***/ "./src/app/ngx-wizard/workflow/workflow.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/ngx-wizard/workflow/workflow.service.ts ***!
  \*********************************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _workflow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workflow.model */ "./src/app/ngx-wizard/workflow/workflow.model.ts");



var WorkflowService = /** @class */ /*@__PURE__*/ (function () {
    function WorkflowService() {
        this.workflow = [
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].personal, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].work, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].result, valid: false }
        ];
    }
    WorkflowService.prototype.validateStep = function (step) {
        // If the state is found, set the valid field to true 
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    };
    WorkflowService.ɵfac = function WorkflowService_Factory(t) { return new (t || WorkflowService)(); };
    WorkflowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkflowService, factory: WorkflowService.ɵfac });
    return WorkflowService;
}());



/***/ })

}]);