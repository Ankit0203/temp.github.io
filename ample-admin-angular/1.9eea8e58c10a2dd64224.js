(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js ***!
  \*********************************************************************************/
/*! exports provided: ClickType, ColumnChangesService, ColumnMode, ContextmenuType, DataTableBodyCellComponent, DataTableBodyComponent, DataTableBodyRowComponent, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableFooterComponent, DataTableFooterTemplateDirective, DataTableHeaderCellComponent, DataTableHeaderComponent, DataTablePagerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, DatatableComponent, DatatableFooterDirective, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DimensionsHelper, DraggableDirective, Keys, LongPressDirective, NgxDatatableModule, OrderableDirective, ProgressBarComponent, ResizeableDirective, RowHeightCache, ScrollbarHelper, ScrollerComponent, SelectionType, SortDirection, SortType, VisibilityDirective, adjustColumnWidths, camelCase, columnGroupWidths, columnTotalWidth, columnsByPin, columnsByPinArr, columnsTotalWidth, deCamelCase, deepValueGetter, elementsFromPoint, emptyStringGetter, forceFillColumnWidths, getTotalFlexGrow, getVendorPrefixedName, getterForProp, groupRowsByParents, id, isNullOrUndefined, nextSortDir, numericIndexGetter, optionalGetterForProp, orderByComparator, selectRows, selectRowsBetween, setColumnDefaults, shallowValueGetter, sortRows, throttle, throttleable, translateTemplates, translateXY, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickType", function() { return ClickType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnChangesService", function() { return ColumnChangesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnMode", function() { return ColumnMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextmenuType", function() { return ContextmenuType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyCellComponent", function() { return DataTableBodyCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyComponent", function() { return DataTableBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyRowComponent", function() { return DataTableBodyRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellDirective", function() { return DataTableColumnCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellTreeToggle", function() { return DataTableColumnCellTreeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnDirective", function() { return DataTableColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnHeaderDirective", function() { return DataTableColumnHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterComponent", function() { return DataTableFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterTemplateDirective", function() { return DataTableFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderCellComponent", function() { return DataTableHeaderCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderComponent", function() { return DataTableHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablePagerComponent", function() { return DataTablePagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRowWrapperComponent", function() { return DataTableRowWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSelectionComponent", function() { return DataTableSelectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSummaryRowComponent", function() { return DataTableSummaryRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableFooterDirective", function() { return DatatableFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderDirective", function() { return DatatableGroupHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderTemplateDirective", function() { return DatatableGroupHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailDirective", function() { return DatatableRowDetailDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailTemplateDirective", function() { return DatatableRowDetailTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DimensionsHelper", function() { return DimensionsHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPressDirective", function() { return LongPressDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDatatableModule", function() { return NgxDatatableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderableDirective", function() { return OrderableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeableDirective", function() { return ResizeableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowHeightCache", function() { return RowHeightCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarHelper", function() { return ScrollbarHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function() { return ScrollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function() { return VisibilityDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustColumnWidths", function() { return adjustColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnGroupWidths", function() { return columnGroupWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnTotalWidth", function() { return columnTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPin", function() { return columnsByPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPinArr", function() { return columnsByPinArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsTotalWidth", function() { return columnsTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deCamelCase", function() { return deCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepValueGetter", function() { return deepValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function() { return elementsFromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyStringGetter", function() { return emptyStringGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceFillColumnWidths", function() { return forceFillColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalFlexGrow", function() { return getTotalFlexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedName", function() { return getVendorPrefixedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getterForProp", function() { return getterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupRowsByParents", function() { return groupRowsByParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextSortDir", function() { return nextSortDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericIndexGetter", function() { return numericIndexGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionalGetterForProp", function() { return optionalGetterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByComparator", function() { return orderByComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRows", function() { return selectRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRowsBetween", function() { return selectRowsBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumnDefaults", function() { return setColumnDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowValueGetter", function() { return shallowValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRows", function() { return sortRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleable", function() { return throttleable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateTemplates", function() { return translateTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateXY", function() { return translateXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */



var _c0 = ["*"];

function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "datatable-progress");
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "datatable-summary-row", 9);
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "datatable-body-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r12.onTreeAction(group_r7);
    })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

      return _r1.onActivate($event, ctx_r15.indexes.first + i_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

    var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "datatable-body-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      var i_r20 = ctx.index;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);

      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

      return _r1.onActivate($event, i_r20);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var row_r19 = ctx.$implicit;
    var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

    var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
  }

  if (rf & 2) {
    var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r25.rowContextmenu.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var group_r7 = ctx.$implicit;
    var i_r8 = ctx.index;

    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
  }
}

function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "datatable-summary-row", 16);
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
  }
}

function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "datatable-scroller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r27.onBodyScroll($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
  }
}

function DataTableBodyComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 17);
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}

function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "datatable-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      var column_r3 = ctx.$implicit;
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r4.onColumnResized($event, column_r3);
    })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r6.onLongPressStart($event);
    })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r7.onLongPressEnd($event);
    })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r8.onSort($event);
    })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r9.select.emit($event);
    })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r10.columnContextmenu.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var column_r3 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("sortUnsetIcon", ctx_r2.sortUnsetIcon)("allRowsSelected", ctx_r2.allRowsSelected);
  }
}

function DataTableHeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 19, "datatable-header-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var colGroup_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
  }
}

function DatatableComponent_datatable_header_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "datatable-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r2.onColumnSort($event);
    })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r4.onColumnResize($event);
    })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r5.onColumnReorder($event);
    })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r6.onHeaderSelect($event);
    })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r7.onColumnContextmenu($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 15, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("sortUnsetIcon", ctx_r0.cssClasses.sortUnset)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
  }
}

function DatatableComponent_datatable_footer_4_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "datatable-footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r8.onFooterPage($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
  }
}

function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) {}

function DataTableHeaderCellComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
  }
}

function DataTableHeaderCellComponent_label_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r5.select.emit(!ctx_r5.allRowsSelected);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
  }
}

function DataTableHeaderCellComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r7.onSort();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}

function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) {}

function DataTableHeaderCellComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
  }
}

function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) {}

var _c1 = function _c1(a0, a1, a2, a3, a4) {
  return {
    rowCount: a0,
    pageSize: a1,
    selectedCount: a2,
    curPage: a3,
    offset: a4
  };
};

function DataTableFooterComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](2, _c1, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
  }
}

function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
  }
}

function DataTableFooterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
  }
}

function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "datatable-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r5.page.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
  }
}

var _c2 = function _c2(a0) {
  return {
    "selected-count": a0
  };
};

function DataTablePagerComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      var pg_r1 = ctx.$implicit;
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r2.selectPage(pg_r1.number);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var pg_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
  }
}

function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "datatable-body-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      var ii_r5 = ctx.index;
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r6.onActivate($event, ii_r5);
    })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r8.onTreeAction();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var column_r4 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
  }
}

function DataTableBodyRowComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var colGroup_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
  }
}

function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) {}

function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
  }
}

function DataTableRowWrapperComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
  }
}

function DataTableRowWrapperComponent_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
  }
}

function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) {}

function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
  }
}

function DataTableRowWrapperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
  }
}

var _c3 = ["cellTemplate"];

function DataTableBodyCellComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r4.onCheckboxChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r0.isSelected);
  }
}

function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 11);
  }
}

function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 12);
  }
}

function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 13);
  }
}

function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r11.onTreeAction();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
  }
}

function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

var _c4 = function _c4(a0) {
  return {
    cellContext: a0
  };
};

function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c4, ctx_r7.cellContext));
  }
}

function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
  }
}

function DataTableBodyCellComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 15);
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}

function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) {}

function DataTableBodyCellComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
  }
}

function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "datatable-body-row", 1);
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", 0 - 1);
  }
}

var ScrollbarHelper = /*@__PURE__*/function () {
  var ScrollbarHelper = /*#__PURE__*/function () {
    function ScrollbarHelper(document) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ScrollbarHelper);

      this.document = document;
      this.width = this.getWidth();
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ScrollbarHelper, [{
      key: "getWidth",
      value: function getWidth() {
        var outer = this.document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        this.document.body.appendChild(outer);
        var widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
        var inner = this.document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        var widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
      }
    }]);

    return ScrollbarHelper;
  }();

  ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) {
    return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]));
  };

  ScrollbarHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ScrollbarHelper,
    factory: function factory(t) {
      return ScrollbarHelper.ɵfac(t);
    }
  });
  return ScrollbarHelper;
}();

var DimensionsHelper = /*@__PURE__*/function () {
  /**
   * Gets the width of the scrollbar.  Nesc for windows
   * http://stackoverflow.com/a/13382873/888165
   */
  var DimensionsHelper = /*#__PURE__*/function () {
    function DimensionsHelper() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DimensionsHelper);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DimensionsHelper, [{
      key: "getDimensions",
      value: function getDimensions(element) {
        return element.getBoundingClientRect();
      }
    }]);

    return DimensionsHelper;
  }();

  DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) {
    return new (t || DimensionsHelper)();
  };

  DimensionsHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: DimensionsHelper,
    factory: function factory(t) {
      return DimensionsHelper.ɵfac(t);
    }
  });
  return DimensionsHelper;
}();

var ColumnChangesService = /*@__PURE__*/function () {
  /**
   * service to make DatatableComponent aware of changes to
   * input bindings of DataTableColumnDirective
   */
  var ColumnChangesService = /*#__PURE__*/function () {
    function ColumnChangesService() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ColumnChangesService);

      this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ColumnChangesService, [{
      key: "onInputChange",
      value: function onInputChange() {
        this.columnInputChanges.next();
      }
    }, {
      key: "columnInputChanges$",
      get: function get() {
        return this.columnInputChanges.asObservable();
      }
    }]);

    return ColumnChangesService;
  }();

  ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) {
    return new (t || ColumnChangesService)();
  };

  ColumnChangesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ColumnChangesService,
    factory: function factory(t) {
      return ColumnChangesService.ɵfac(t);
    }
  });
  return ColumnChangesService;
}();

var DataTableFooterTemplateDirective = /*@__PURE__*/function () {
  var DataTableFooterTemplateDirective = function DataTableFooterTemplateDirective(template) {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableFooterTemplateDirective);

    this.template = template;
  };

  DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) {
    return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]));
  };

  DataTableFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: DataTableFooterTemplateDirective,
    selectors: [["", "ngx-datatable-footer-template", ""]]
  });
  return DataTableFooterTemplateDirective;
}();

var VisibilityDirective = /*@__PURE__*/function () {
  /**
   * Visibility Observer Directive
   *
   * Usage:
   *
   * 		<div
   * 			visibilityObserver
   * 			(visible)="onVisible($event)">
   * 		</div>
   *
   */
  var VisibilityDirective = /*#__PURE__*/function () {
    function VisibilityDirective(element, zone) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, VisibilityDirective);

      this.element = element;
      this.zone = zone;
      this.isVisible = false;
      this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(VisibilityDirective, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        this.runCheck();
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        clearTimeout(this.timeout);
      }
    }, {
      key: "onVisibilityChange",
      value: function onVisibilityChange() {
        var _this = this;

        // trigger zone recalc for columns
        this.zone.run(function () {
          _this.isVisible = true;

          _this.visible.emit(true);
        });
      }
    }, {
      key: "runCheck",
      value: function runCheck() {
        var _this2 = this;

        var check = function check() {
          // https://davidwalsh.name/offsetheight-visibility
          var _this2$element$native = _this2.element.nativeElement,
              offsetHeight = _this2$element$native.offsetHeight,
              offsetWidth = _this2$element$native.offsetWidth;

          if (offsetHeight && offsetWidth) {
            clearTimeout(_this2.timeout);

            _this2.onVisibilityChange();
          } else {
            clearTimeout(_this2.timeout);

            _this2.zone.runOutsideAngular(function () {
              _this2.timeout = setTimeout(function () {
                return check();
              }, 50);
            });
          }
        };

        this.timeout = setTimeout(function () {
          return check();
        });
      }
    }]);

    return VisibilityDirective;
  }();

  VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) {
    return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]));
  };

  VisibilityDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: VisibilityDirective,
    selectors: [["", "visibilityObserver", ""]],
    hostVars: 2,
    hostBindings: function VisibilityDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("visible", ctx.isVisible);
      }
    },
    outputs: {
      visible: "visible"
    }
  });
  return VisibilityDirective;
}();

var DraggableDirective = /*@__PURE__*/function () {
  /**
   * Draggable Directive for Angular2
   *
   * Inspiration:
   *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
   *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
   *
   */
  var DraggableDirective = /*#__PURE__*/function () {
    function DraggableDirective(element) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DraggableDirective);

      this.dragX = true;
      this.dragY = true;
      this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.isDragging = false;
      this.element = element.nativeElement;
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DraggableDirective, [{
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
          this.onMousedown(changes['dragEventTarget'].currentValue);
        }
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._destroySubscription();
      }
    }, {
      key: "onMouseup",
      value: function onMouseup(event) {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.element.classList.remove('dragging');

        if (this.subscription) {
          this._destroySubscription();

          this.dragEnd.emit({
            event: event,
            element: this.element,
            model: this.dragModel
          });
        }
      }
    }, {
      key: "onMousedown",
      value: function onMousedown(event) {
        var _this3 = this;

        // we only want to drag the inner header text
        var isDragElm = event.target.classList.contains('draggable');

        if (isDragElm && (this.dragX || this.dragY)) {
          event.preventDefault();
          this.isDragging = true;
          var mouseDownPos = {
            x: event.clientX,
            y: event.clientY
          };
          var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'mouseup');
          this.subscription = mouseup.subscribe(function (ev) {
            return _this3.onMouseup(ev);
          });
          var mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(mouseup)).subscribe(function (ev) {
            return _this3.move(ev, mouseDownPos);
          });
          this.subscription.add(mouseMoveSub);
          this.dragStart.emit({
            event: event,
            element: this.element,
            model: this.dragModel
          });
        }
      }
    }, {
      key: "move",
      value: function move(event, mouseDownPos) {
        if (!this.isDragging) return;
        var x = event.clientX - mouseDownPos.x;
        var y = event.clientY - mouseDownPos.y;
        if (this.dragX) this.element.style.left = "".concat(x, "px");
        if (this.dragY) this.element.style.top = "".concat(y, "px");
        this.element.classList.add('dragging');
        this.dragging.emit({
          event: event,
          element: this.element,
          model: this.dragModel
        });
      }
    }, {
      key: "_destroySubscription",
      value: function _destroySubscription() {
        if (this.subscription) {
          this.subscription.unsubscribe();
          this.subscription = undefined;
        }
      }
    }]);

    return DraggableDirective;
  }();

  DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
    return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]));
  };

  DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: DraggableDirective,
    selectors: [["", "draggable", ""]],
    inputs: {
      dragX: "dragX",
      dragY: "dragY",
      dragEventTarget: "dragEventTarget",
      dragModel: "dragModel"
    },
    outputs: {
      dragStart: "dragStart",
      dragging: "dragging",
      dragEnd: "dragEnd"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]]
  });
  return DraggableDirective;
}();

var ResizeableDirective = /*@__PURE__*/function () {
  var ResizeableDirective = /*#__PURE__*/function () {
    function ResizeableDirective(element, renderer) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ResizeableDirective);

      this.renderer = renderer;
      this.resizeEnabled = true;
      this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.resizing = false;
      this.element = element.nativeElement;
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ResizeableDirective, [{
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        var renderer2 = this.renderer;
        this.resizeHandle = renderer2.createElement('span');

        if (this.resizeEnabled) {
          renderer2.addClass(this.resizeHandle, 'resize-handle');
        } else {
          renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
        }

        renderer2.appendChild(this.element, this.resizeHandle);
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._destroySubscription();

        if (this.renderer.destroyNode) {
          this.renderer.destroyNode(this.resizeHandle);
        } else if (this.resizeHandle) {
          this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
        }
      }
    }, {
      key: "onMouseup",
      value: function onMouseup() {
        this.resizing = false;

        if (this.subscription && !this.subscription.closed) {
          this._destroySubscription();

          this.resize.emit(this.element.clientWidth);
        }
      }
    }, {
      key: "onMousedown",
      value: function onMousedown(event) {
        var _this4 = this;

        var isHandle = event.target.classList.contains('resize-handle');
        var initialWidth = this.element.clientWidth;
        var mouseDownScreenX = event.screenX;

        if (isHandle) {
          event.stopPropagation();
          this.resizing = true;
          var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'mouseup');
          this.subscription = mouseup.subscribe(function (ev) {
            return _this4.onMouseup();
          });
          var mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(mouseup)).subscribe(function (e) {
            return _this4.move(e, initialWidth, mouseDownScreenX);
          });
          this.subscription.add(mouseMoveSub);
        }
      }
    }, {
      key: "move",
      value: function move(event, initialWidth, mouseDownScreenX) {
        var movementX = event.screenX - mouseDownScreenX;
        var newWidth = initialWidth + movementX;
        var overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        var underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;

        if (overMinWidth && underMaxWidth) {
          this.element.style.width = "".concat(newWidth, "px");
        }
      }
    }, {
      key: "_destroySubscription",
      value: function _destroySubscription() {
        if (this.subscription) {
          this.subscription.unsubscribe();
          this.subscription = undefined;
        }
      }
    }]);

    return ResizeableDirective;
  }();

  ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) {
    return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]));
  };

  ResizeableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: ResizeableDirective,
    selectors: [["", "resizeable", ""]],
    hostVars: 2,
    hostBindings: function ResizeableDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) {
          return ctx.onMousedown($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
      }
    },
    inputs: {
      resizeEnabled: "resizeEnabled",
      minWidth: "minWidth",
      maxWidth: "maxWidth"
    },
    outputs: {
      resize: "resize"
    }
  });
  return ResizeableDirective;
}();

var OrderableDirective = /*@__PURE__*/function () {
  var OrderableDirective = /*#__PURE__*/function () {
    function OrderableDirective(differs, document) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, OrderableDirective);

      this.document = document;
      this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.differ = differs.find({}).create();
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(OrderableDirective, [{
      key: "ngAfterContentInit",
      value: function ngAfterContentInit() {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this.draggables.forEach(function (d) {
          d.dragStart.unsubscribe();
          d.dragging.unsubscribe();
          d.dragEnd.unsubscribe();
        });
      }
    }, {
      key: "updateSubscriptions",
      value: function updateSubscriptions() {
        var _this5 = this;

        var diffs = this.differ.diff(this.createMapDiffs());

        if (diffs) {
          var subscribe = function subscribe(_ref) {
            var currentValue = _ref.currentValue,
                previousValue = _ref.previousValue;
            unsubscribe({
              previousValue: previousValue
            });

            if (currentValue) {
              currentValue.dragStart.subscribe(_this5.onDragStart.bind(_this5));
              currentValue.dragging.subscribe(_this5.onDragging.bind(_this5));
              currentValue.dragEnd.subscribe(_this5.onDragEnd.bind(_this5));
            }
          };

          var unsubscribe = function unsubscribe(_ref2) {
            var previousValue = _ref2.previousValue;

            if (previousValue) {
              previousValue.dragStart.unsubscribe();
              previousValue.dragging.unsubscribe();
              previousValue.dragEnd.unsubscribe();
            }
          };

          diffs.forEachAddedItem(subscribe); // diffs.forEachChangedItem(subscribe.bind(this));

          diffs.forEachRemovedItem(unsubscribe);
        }
      }
    }, {
      key: "onDragStart",
      value: function onDragStart() {
        this.positions = {};
        var i = 0;

        var _iterator = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.draggables.toArray()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var dragger = _step.value;
            var elm = dragger.element;
            var left = parseInt(elm.offsetLeft.toString(), 0);
            this.positions[dragger.dragModel.prop] = {
              left: left,
              right: left + parseInt(elm.offsetWidth.toString(), 0),
              index: i++,
              element: elm
            };
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "onDragging",
      value: function onDragging(_ref3) {
        var element = _ref3.element,
            model = _ref3.model,
            event = _ref3.event;
        var prevPos = this.positions[model.prop];
        var target = this.isTarget(model, event);

        if (target) {
          if (this.lastDraggingIndex !== target.i) {
            this.targetChanged.emit({
              prevIndex: this.lastDraggingIndex,
              newIndex: target.i,
              initialIndex: prevPos.index
            });
            this.lastDraggingIndex = target.i;
          }
        } else if (this.lastDraggingIndex !== prevPos.index) {
          this.targetChanged.emit({
            prevIndex: this.lastDraggingIndex,
            initialIndex: prevPos.index
          });
          this.lastDraggingIndex = prevPos.index;
        }
      }
    }, {
      key: "onDragEnd",
      value: function onDragEnd(_ref4) {
        var element = _ref4.element,
            model = _ref4.model,
            event = _ref4.event;
        var prevPos = this.positions[model.prop];
        var target = this.isTarget(model, event);

        if (target) {
          this.reorder.emit({
            prevIndex: prevPos.index,
            newIndex: target.i,
            model: model
          });
        }

        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
      }
    }, {
      key: "isTarget",
      value: function isTarget(model, event) {
        var _this6 = this;

        var i = 0;
        var x = event.x || event.clientX;
        var y = event.y || event.clientY;
        var targets = this.document.elementsFromPoint(x, y);

        var _loop = function _loop(prop) {
          // current column position which throws event.
          var pos = _this6.positions[prop]; // since we drag the inner span, we need to find it in the elements at the cursor

          if (model.prop !== prop && targets.find(function (el) {
            return el === pos.element;
          })) {
            return {
              v: {
                pos: pos,
                i: i
              }
            };
          }

          i++;
        };

        for (var prop in this.positions) {
          var _ret = _loop(prop);

          if (typeof _ret === "object") return _ret.v;
        }
      }
    }, {
      key: "createMapDiffs",
      value: function createMapDiffs() {
        return this.draggables.toArray().reduce(function (acc, curr) {
          acc[curr.dragModel.$$id] = curr;
          return acc;
        }, {});
      }
    }]);

    return OrderableDirective;
  }();

  OrderableDirective.ɵfac = function OrderableDirective_Factory(t) {
    return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]));
  };

  OrderableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: OrderableDirective,
    selectors: [["", "orderable", ""]],
    contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, DraggableDirective, true);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
      }
    },
    outputs: {
      reorder: "reorder",
      targetChanged: "targetChanged"
    }
  });
  return OrderableDirective;
}();

var LongPressDirective = /*@__PURE__*/function () {
  var LongPressDirective = /*#__PURE__*/function () {
    function LongPressDirective() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LongPressDirective);

      this.pressEnabled = true;
      this.duration = 500;
      this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.mouseX = 0;
      this.mouseY = 0;
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LongPressDirective, [{
      key: "onMouseDown",
      value: function onMouseDown(event) {
        var _this7 = this;

        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled) return; // don't start drag if its on resize handle

        var target = event.target;
        if (target.classList.contains('resize-handle')) return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'mouseup');
        this.subscription = mouseup.subscribe(function (ev) {
          return _this7.onMouseup();
        });
        this.timeout = setTimeout(function () {
          _this7.isLongPressing = true;

          _this7.longPressStart.emit({
            event: event,
            model: _this7.pressModel
          });

          _this7.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(mouseup)).subscribe(function (mouseEvent) {
            return _this7.onMouseMove(mouseEvent);
          }));

          _this7.loop(event);
        }, this.duration);
        this.loop(event);
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(event) {
        if (this.pressing && !this.isLongPressing) {
          var xThres = Math.abs(event.clientX - this.mouseX) > 10;
          var yThres = Math.abs(event.clientY - this.mouseY) > 10;

          if (xThres || yThres) {
            this.endPress();
          }
        }
      }
    }, {
      key: "loop",
      value: function loop(event) {
        var _this8 = this;

        if (this.isLongPressing) {
          this.timeout = setTimeout(function () {
            _this8.longPressing.emit({
              event: event,
              model: _this8.pressModel
            });

            _this8.loop(event);
          }, 50);
        }
      }
    }, {
      key: "endPress",
      value: function endPress() {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;

        this._destroySubscription();

        this.longPressEnd.emit({
          model: this.pressModel
        });
      }
    }, {
      key: "onMouseup",
      value: function onMouseup() {
        this.endPress();
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._destroySubscription();
      }
    }, {
      key: "_destroySubscription",
      value: function _destroySubscription() {
        if (this.subscription) {
          this.subscription.unsubscribe();
          this.subscription = undefined;
        }
      }
    }, {
      key: "press",
      get: function get() {
        return this.pressing;
      }
    }, {
      key: "isLongPress",
      get: function get() {
        return this.isLongPressing;
      }
    }]);

    return LongPressDirective;
  }();

  LongPressDirective.ɵfac = function LongPressDirective_Factory(t) {
    return new (t || LongPressDirective)();
  };

  LongPressDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: LongPressDirective,
    selectors: [["", "long-press", ""]],
    hostVars: 4,
    hostBindings: function LongPressDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) {
          return ctx.onMouseDown($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
      }
    },
    inputs: {
      pressEnabled: "pressEnabled",
      duration: "duration",
      pressModel: "pressModel"
    },
    outputs: {
      longPressStart: "longPressStart",
      longPressing: "longPressing",
      longPressEnd: "longPressEnd"
    }
  });
  return LongPressDirective;
}();

var ScrollerComponent = /*@__PURE__*/function () {
  var ScrollerComponent = /*#__PURE__*/function () {
    function ScrollerComponent(ngZone, element, renderer) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ScrollerComponent);

      this.ngZone = ngZone;
      this.renderer = renderer;
      this.scrollbarV = false;
      this.scrollbarH = false;
      this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.scrollYPos = 0;
      this.scrollXPos = 0;
      this.prevScrollYPos = 0;
      this.prevScrollXPos = 0;
      this._scrollEventListener = null;
      this.element = element.nativeElement;
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ScrollerComponent, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
          var renderer = this.renderer;
          this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
          this._scrollEventListener = this.onScrolled.bind(this);
          this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        if (this._scrollEventListener) {
          this.parentElement.removeEventListener('scroll', this._scrollEventListener);
          this._scrollEventListener = null;
        }
      }
    }, {
      key: "setOffset",
      value: function setOffset(offsetY) {
        if (this.parentElement) {
          this.parentElement.scrollTop = offsetY;
        }
      }
    }, {
      key: "onScrolled",
      value: function onScrolled(event) {
        var _this9 = this;

        var dom = event.currentTarget;
        requestAnimationFrame(function () {
          _this9.scrollYPos = dom.scrollTop;
          _this9.scrollXPos = dom.scrollLeft;

          _this9.updateOffset();
        });
      }
    }, {
      key: "updateOffset",
      value: function updateOffset() {
        var direction;

        if (this.scrollYPos < this.prevScrollYPos) {
          direction = 'down';
        } else if (this.scrollYPos > this.prevScrollYPos) {
          direction = 'up';
        }

        this.scroll.emit({
          direction: direction,
          scrollYPos: this.scrollYPos,
          scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
      }
    }]);

    return ScrollerComponent;
  }();

  ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) {
    return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]));
  };

  ScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ScrollerComponent,
    selectors: [["datatable-scroller"]],
    hostAttrs: [1, "datatable-scroll"],
    hostVars: 4,
    hostBindings: function ScrollerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
      }
    },
    inputs: {
      scrollbarV: "scrollbarV",
      scrollbarH: "scrollbarH",
      scrollHeight: "scrollHeight",
      scrollWidth: "scrollWidth"
    },
    outputs: {
      scroll: "scroll"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function ScrollerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return ScrollerComponent;
}();

var DatatableGroupHeaderTemplateDirective = /*@__PURE__*/function () {
  var DatatableGroupHeaderTemplateDirective = function DatatableGroupHeaderTemplateDirective(template) {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DatatableGroupHeaderTemplateDirective);

    this.template = template;
  };

  DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) {
    return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]));
  };

  DatatableGroupHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: DatatableGroupHeaderTemplateDirective,
    selectors: [["", "ngx-datatable-group-header-template", ""]]
  });
  return DatatableGroupHeaderTemplateDirective;
}();

var DatatableGroupHeaderDirective = /*@__PURE__*/function () {
  var DatatableGroupHeaderDirective = /*#__PURE__*/function () {
    function DatatableGroupHeaderDirective() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DatatableGroupHeaderDirective);

      /**
       * Row height is required when virtual scroll is enabled.
       */
      this.rowHeight = 0;
      /**
       * Track toggling of group visibility
       */

      this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DatatableGroupHeaderDirective, [{
      key: "toggleExpandGroup",

      /**
       * Toggle the expansion of a group
       */
      value: function toggleExpandGroup(group) {
        this.toggle.emit({
          type: 'group',
          value: group
        });
      }
      /**
       * Expand all groups
       */

    }, {
      key: "expandAllGroups",
      value: function expandAllGroups() {
        this.toggle.emit({
          type: 'all',
          value: true
        });
      }
      /**
       * Collapse all groups
       */

    }, {
      key: "collapseAllGroups",
      value: function collapseAllGroups() {
        this.toggle.emit({
          type: 'all',
          value: false
        });
      }
    }, {
      key: "template",
      get: function get() {
        return this._templateInput || this._templateQuery;
      }
    }]);

    return DatatableGroupHeaderDirective;
  }();

  DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) {
    return new (t || DatatableGroupHeaderDirective)();
  };

  DatatableGroupHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: DatatableGroupHeaderDirective,
    selectors: [["ngx-datatable-group-header"]],
    contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticContentQuery"](dirIndex, DatatableGroupHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
      }
    },
    inputs: {
      rowHeight: "rowHeight",
      _templateInput: ["template", "_templateInput"]
    },
    outputs: {
      toggle: "toggle"
    }
  });
  return DatatableGroupHeaderDirective;
}();
/**
 * Always returns the empty string ''
 */


function emptyStringGetter() {
  return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 */


function getterForProp(prop) {
  if (prop == null) {
    return emptyStringGetter;
  }

  if (typeof prop === 'number') {
    return numericIndexGetter;
  } else {
    // deep or simple
    if (prop.indexOf('.') !== -1) {
      return deepValueGetter;
    } else {
      return shallowValueGetter;
    }
  }
}
/**
 * Returns the value at this numeric index.
 * @param row array of values
 * @param index numeric index
 * @returns any or '' if invalid index
 */


function numericIndexGetter(row, index) {
  if (row == null) {
    return '';
  } // mimic behavior of deepValueGetter


  if (!row || index == null) {
    return row;
  }

  var value = row[index];

  if (value == null) {
    return '';
  }

  return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param obj object containing the field
 * @param fieldName field name string
 */


function shallowValueGetter(obj, fieldName) {
  if (obj == null) {
    return '';
  }

  if (!obj || !fieldName) {
    return obj;
  }

  var value = obj[fieldName];

  if (value == null) {
    return '';
  }

  return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 */


function deepValueGetter(obj, path) {
  if (obj == null) {
    return '';
  }

  if (!obj || !path) {
    return obj;
  } // check if path matches a root-level field
  // { "a.b.c": 123 }


  var current = obj[path];

  if (current !== undefined) {
    return current;
  }

  current = obj;
  var split = path.split('.');

  if (split.length) {
    for (var i = 0; i < split.length; i++) {
      current = current[split[i]]; // if found undefined, return empty string

      if (current === undefined || current === null) {
        return '';
      }
    }
  }

  return current;
}

function optionalGetterForProp(prop) {
  return prop && function (row) {
    return getterForProp(prop)(row, prop);
  };
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param rows
 *
 */


function groupRowsByParents(rows, from, to) {
  if (from && to) {
    var nodeById = {};
    var l = rows.length;
    var node = null;
    nodeById[0] = new TreeNode(); // that's the root node

    var uniqIDs = rows.reduce(function (arr, item) {
      var toValue = to(item);

      if (arr.indexOf(toValue) === -1) {
        arr.push(toValue);
      }

      return arr;
    }, []);

    for (var i = 0; i < l; i++) {
      // make TreeNode objects for each item
      nodeById[to(rows[i])] = new TreeNode(rows[i]);
    }

    for (var _i = 0; _i < l; _i++) {
      // link all TreeNode objects
      node = nodeById[to(rows[_i])];
      var parent = 0;
      var fromValue = from(node.row);

      if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
        parent = fromValue;
      }

      node.parent = nodeById[parent];
      node.row['level'] = node.parent.row['level'] + 1;
      node.parent.children.push(node);
    }

    var resolvedRows = [];
    nodeById[0].flatten(function () {
      resolvedRows = [].concat(Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(resolvedRows), [this.row]);
    }, true);
    return resolvedRows;
  } else {
    return rows;
  }
}

var TreeNode = /*#__PURE__*/function () {
  function TreeNode() {
    var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TreeNode);

    if (!row) {
      row = {
        level: -1,
        treeStatus: 'expanded'
      };
    }

    this.row = row;
    this.parent = null;
    this.children = [];
  }

  Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(TreeNode, [{
    key: "flatten",
    value: function flatten(f, recursive) {
      if (this.row['treeStatus'] === 'expanded') {
        for (var i = 0, l = this.children.length; i < l; i++) {
          var child = this.children[i];
          f.apply(child, Array.prototype.slice.call(arguments, 2));
          if (recursive) child.flatten.apply(child, arguments);
        }
      }
    }
  }]);

  return TreeNode;
}();
/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 */


function camelCase(str) {
  // Replace special characters with a space
  str = str.replace(/[^a-zA-Z0-9 ]/g, ' '); // put a space before an uppercase letter

  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 '); // Lower case first character and some other stuff

  str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase(); // uppercase characters preceded by a space or number

  str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
    return b.trim() + c.toUpperCase();
  });
  return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 */


function deCamelCase(str) {
  return str.replace(/([A-Z])/g, function (match) {
    return " ".concat(match);
  }).replace(/^./, function (match) {
    return match.toUpperCase();
  });
}
/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 */


function id() {
  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
}
/**
 * Sets the column defaults
 */


function setColumnDefaults(columns) {
  if (!columns) return; // Only one column should hold the tree view
  // Thus if multiple columns are provided with
  // isTreeColumn as true we take only the first one

  var treeColumnFound = false;

  var _iterator2 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columns),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var column = _step2.value;

      if (!column.$$id) {
        column.$$id = id();
      } // prop can be numeric; zero is valid not a missing prop
      // translate name => prop


      if (isNullOrUndefined(column.prop) && column.name) {
        column.prop = camelCase(column.name);
      }

      if (!column.$$valueGetter) {
        column.$$valueGetter = getterForProp(column.prop);
      } // format props if no name passed


      if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
        column.name = deCamelCase(String(column.prop));
      }

      if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
        column.name = ''; // Fixes IE and Edge displaying `null`
      }

      if (!column.hasOwnProperty('resizeable')) {
        column.resizeable = true;
      }

      if (!column.hasOwnProperty('sortable')) {
        column.sortable = true;
      }

      if (!column.hasOwnProperty('draggable')) {
        column.draggable = true;
      }

      if (!column.hasOwnProperty('canAutoResize')) {
        column.canAutoResize = true;
      }

      if (!column.hasOwnProperty('width')) {
        column.width = 150;
      }

      if (!column.hasOwnProperty('isTreeColumn')) {
        column.isTreeColumn = false;
      } else {
        if (column.isTreeColumn && !treeColumnFound) {
          // If the first column with isTreeColumn is true found
          // we mark that treeCoulmn is found
          treeColumnFound = true;
        } else {
          // After that isTreeColumn property for any other column
          // will be set as false
          column.isTreeColumn = false;
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function isNullOrUndefined(value) {
  return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 */


function translateTemplates(templates) {
  var result = [];

  var _iterator3 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(templates),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var temp = _step3.value;
      var col = {};
      var props = Object.getOwnPropertyNames(temp);

      var _iterator4 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(props),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var prop = _step4.value;
          col[prop] = temp[prop];
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (temp.headerTemplate) {
        col.headerTemplate = temp.headerTemplate;
      }

      if (temp.cellTemplate) {
        col.cellTemplate = temp.cellTemplate;
      }

      if (temp.summaryFunc) {
        col.summaryFunc = temp.summaryFunc;
      }

      if (temp.summaryTemplate) {
        col.summaryTemplate = temp.summaryTemplate;
      }

      result.push(col);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return result;
}

var ColumnMode = /*@__PURE__*/function (ColumnMode) {
  ColumnMode["standard"] = "standard";
  ColumnMode["flex"] = "flex";
  ColumnMode["force"] = "force";
  return ColumnMode;
}({});

var SelectionType = /*@__PURE__*/function (SelectionType) {
  SelectionType["single"] = "single";
  SelectionType["multi"] = "multi";
  SelectionType["multiClick"] = "multiClick";
  SelectionType["cell"] = "cell";
  SelectionType["checkbox"] = "checkbox";
  return SelectionType;
}({});

var SortType = /*@__PURE__*/function (SortType) {
  SortType["single"] = "single";
  SortType["multi"] = "multi";
  return SortType;
}({});

var ContextmenuType = /*@__PURE__*/function (ContextmenuType) {
  ContextmenuType["header"] = "header";
  ContextmenuType["body"] = "body";
  return ContextmenuType;
}({});

var DataTableColumnHeaderDirective = /*@__PURE__*/function () {
  var DataTableColumnHeaderDirective = function DataTableColumnHeaderDirective(template) {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableColumnHeaderDirective);

    this.template = template;
  };

  DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) {
    return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]));
  };

  DataTableColumnHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: DataTableColumnHeaderDirective,
    selectors: [["", "ngx-datatable-header-template", ""]]
  });
  return DataTableColumnHeaderDirective;
}();

var DataTableColumnCellDirective = /*@__PURE__*/function () {
  var DataTableColumnCellDirective = function DataTableColumnCellDirective(template) {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableColumnCellDirective);

    this.template = template;
  };

  DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) {
    return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]));
  };

  DataTableColumnCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: DataTableColumnCellDirective,
    selectors: [["", "ngx-datatable-cell-template", ""]]
  });
  return DataTableColumnCellDirective;
}();

var DataTableColumnCellTreeToggle = /*@__PURE__*/function () {
  var DataTableColumnCellTreeToggle = function DataTableColumnCellTreeToggle(template) {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableColumnCellTreeToggle);

    this.template = template;
  };

  DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) {
    return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]));
  };

  DataTableColumnCellTreeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: DataTableColumnCellTreeToggle,
    selectors: [["", "ngx-datatable-tree-toggle", ""]]
  });
  return DataTableColumnCellTreeToggle;
}();

var DataTableColumnDirective = /*@__PURE__*/function () {
  var DataTableColumnDirective = /*#__PURE__*/function () {
    function DataTableColumnDirective(columnChangesService) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableColumnDirective);

      this.columnChangesService = columnChangesService;
      this.isFirstChange = true;
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableColumnDirective, [{
      key: "ngOnChanges",
      value: function ngOnChanges() {
        if (this.isFirstChange) {
          this.isFirstChange = false;
        } else {
          this.columnChangesService.onInputChange();
        }
      }
    }, {
      key: "cellTemplate",
      get: function get() {
        return this._cellTemplateInput || this._cellTemplateQuery;
      }
    }, {
      key: "headerTemplate",
      get: function get() {
        return this._headerTemplateInput || this._headerTemplateQuery;
      }
    }, {
      key: "treeToggleTemplate",
      get: function get() {
        return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
      }
    }]);

    return DataTableColumnDirective;
  }();

  DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) {
    return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ColumnChangesService));
  };

  DataTableColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: DataTableColumnDirective,
    selectors: [["ngx-datatable-column"]],
    contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnHeaderDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellTreeToggle, true, _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
      }
    },
    inputs: {
      name: "name",
      prop: "prop",
      frozenLeft: "frozenLeft",
      frozenRight: "frozenRight",
      flexGrow: "flexGrow",
      resizeable: "resizeable",
      comparator: "comparator",
      pipe: "pipe",
      sortable: "sortable",
      draggable: "draggable",
      canAutoResize: "canAutoResize",
      minWidth: "minWidth",
      width: "width",
      maxWidth: "maxWidth",
      checkboxable: "checkboxable",
      headerCheckboxable: "headerCheckboxable",
      headerClass: "headerClass",
      cellClass: "cellClass",
      isTreeColumn: "isTreeColumn",
      treeLevelIndent: "treeLevelIndent",
      summaryFunc: "summaryFunc",
      summaryTemplate: "summaryTemplate",
      _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"],
      _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"],
      _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]]
  });
  return DataTableColumnDirective;
}();

var DatatableRowDetailTemplateDirective = /*@__PURE__*/function () {
  var DatatableRowDetailTemplateDirective = function DatatableRowDetailTemplateDirective(template) {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DatatableRowDetailTemplateDirective);

    this.template = template;
  };

  DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) {
    return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]));
  };

  DatatableRowDetailTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: DatatableRowDetailTemplateDirective,
    selectors: [["", "ngx-datatable-row-detail-template", ""]]
  });
  return DatatableRowDetailTemplateDirective;
}();

var DatatableRowDetailDirective = /*@__PURE__*/function () {
  var DatatableRowDetailDirective = /*#__PURE__*/function () {
    function DatatableRowDetailDirective() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DatatableRowDetailDirective);

      /**
       * The detail row height is required especially
       * when virtual scroll is enabled.
       */
      this.rowHeight = 0;
      /**
       * Row detail row visbility was toggled.
       */

      this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DatatableRowDetailDirective, [{
      key: "toggleExpandRow",

      /**
       * Toggle the expansion of the row
       */
      value: function toggleExpandRow(row) {
        this.toggle.emit({
          type: 'row',
          value: row
        });
      }
      /**
       * API method to expand all the rows.
       */

    }, {
      key: "expandAllRows",
      value: function expandAllRows() {
        this.toggle.emit({
          type: 'all',
          value: true
        });
      }
      /**
       * API method to collapse all the rows.
       */

    }, {
      key: "collapseAllRows",
      value: function collapseAllRows() {
        this.toggle.emit({
          type: 'all',
          value: false
        });
      }
    }, {
      key: "template",
      get: function get() {
        return this._templateInput || this._templateQuery;
      }
    }]);

    return DatatableRowDetailDirective;
  }();

  DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) {
    return new (t || DatatableRowDetailDirective)();
  };

  DatatableRowDetailDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: DatatableRowDetailDirective,
    selectors: [["ngx-datatable-row-detail"]],
    contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticContentQuery"](dirIndex, DatatableRowDetailTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
      }
    },
    inputs: {
      rowHeight: "rowHeight",
      _templateInput: ["template", "_templateInput"]
    },
    outputs: {
      toggle: "toggle"
    }
  });
  return DatatableRowDetailDirective;
}();

var DatatableFooterDirective = /*@__PURE__*/function () {
  var DatatableFooterDirective = /*#__PURE__*/function () {
    function DatatableFooterDirective() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DatatableFooterDirective);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DatatableFooterDirective, [{
      key: "template",
      get: function get() {
        return this._templateInput || this._templateQuery;
      }
    }]);

    return DatatableFooterDirective;
  }();

  DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) {
    return new (t || DatatableFooterDirective)();
  };

  DatatableFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
    type: DatatableFooterDirective,
    selectors: [["ngx-datatable-footer"]],
    contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, DataTableFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_5__["TemplateRef"]);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
      }
    },
    inputs: {
      footerHeight: "footerHeight",
      totalMessage: "totalMessage",
      selectedMessage: "selectedMessage",
      pagerLeftArrowIcon: "pagerLeftArrowIcon",
      pagerRightArrowIcon: "pagerRightArrowIcon",
      pagerPreviousIcon: "pagerPreviousIcon",
      pagerNextIcon: "pagerNextIcon",
      _templateInput: ["template", "_templateInput"]
    }
  });
  return DatatableFooterDirective;
}();
/**
 * Returns the columns by pin.
 */


function columnsByPin(cols) {
  var ret = {
    left: [],
    center: [],
    right: []
  };

  if (cols) {
    var _iterator5 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(cols),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var col = _step5.value;

        if (col.frozenLeft) {
          ret.left.push(col);
        } else if (col.frozenRight) {
          ret.right.push(col);
        } else {
          ret.center.push(col);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }

  return ret;
}
/**
 * Returns the widths of all group sets of a column
 */


function columnGroupWidths(groups, all) {
  return {
    left: columnTotalWidth(groups.left),
    center: columnTotalWidth(groups.center),
    right: columnTotalWidth(groups.right),
    total: Math.floor(columnTotalWidth(all))
  };
}
/**
 * Calculates the total width of all columns and their groups
 */


function columnTotalWidth(columns, prop) {
  var totalWidth = 0;

  if (columns) {
    var _iterator6 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columns),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var c = _step6.value;
        var has = prop && c[prop];
        var width = has ? c[prop] : c.width;
        totalWidth = totalWidth + parseFloat(width);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }

  return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 */


function columnsTotalWidth(columns, prop) {
  var totalWidth = 0;

  var _iterator7 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columns),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var column = _step7.value;
      var has = prop && column[prop];
      totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  return totalWidth;
}

function columnsByPinArr(val) {
  var colsByPinArr = [];
  var colsByPin = columnsByPin(val);
  colsByPinArr.push({
    type: 'left',
    columns: colsByPin['left']
  });
  colsByPinArr.push({
    type: 'center',
    columns: colsByPin['center']
  });
  colsByPinArr.push({
    type: 'right',
    columns: colsByPin['right']
  });
  return colsByPinArr;
}
/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */


var RowHeightCache = /*#__PURE__*/function () {
  function RowHeightCache() {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RowHeightCache);

    /**
     * Tree Array stores the cumulative information of the row heights to perform efficient
     * range queries and updates.  Currently the tree is initialized to the base row
     * height instead of the detail row height.
     */
    this.treeArray = [];
  }
  /**
   * Clear the Tree array.
   */


  Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RowHeightCache, [{
    key: "clearCache",
    value: function clearCache() {
      this.treeArray = [];
    }
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param rows The array of rows which contain the expanded status.
     * @param rowHeight The row height.
     * @param detailRowHeight The detail row height.
     */

  }, {
    key: "initCache",
    value: function initCache(details) {
      var rows = details.rows,
          rowHeight = details.rowHeight,
          detailRowHeight = details.detailRowHeight,
          externalVirtual = details.externalVirtual,
          rowCount = details.rowCount,
          rowIndexes = details.rowIndexes,
          rowExpansions = details.rowExpansions;
      var isFn = typeof rowHeight === 'function';
      var isDetailFn = typeof detailRowHeight === 'function';

      if (!isFn && isNaN(rowHeight)) {
        throw new Error("Row Height cache initialization failed. Please ensure that 'rowHeight' is a\n        valid number or function value: (".concat(rowHeight, ") when 'scrollbarV' is enabled."));
      } // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.


      if (!isDetailFn && isNaN(detailRowHeight)) {
        throw new Error("Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a\n        valid number or function value: (".concat(detailRowHeight, ") when 'scrollbarV' is enabled."));
      }

      var n = externalVirtual ? rowCount : rows.length;
      this.treeArray = new Array(n);

      for (var i = 0; i < n; ++i) {
        this.treeArray[i] = 0;
      }

      for (var _i2 = 0; _i2 < n; ++_i2) {
        var row = rows[_i2];
        var currentRowHeight = rowHeight;

        if (isFn) {
          currentRowHeight = rowHeight(row);
        } // Add the detail row height to the already expanded rows.
        // This is useful for the table that goes through a filter or sort.


        var expanded = rowExpansions.has(row);

        if (row && expanded) {
          if (isDetailFn) {
            var index = rowIndexes.get(row);
            currentRowHeight += detailRowHeight(row, index);
          } else {
            currentRowHeight += detailRowHeight;
          }
        }

        this.update(_i2, currentRowHeight);
      }
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     */

  }, {
    key: "getRowIndex",
    value: function getRowIndex(scrollY) {
      if (scrollY === 0) return 0;
      return this.calcRowIndex(scrollY);
    }
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     */

  }, {
    key: "update",
    value: function update(atRowIndex, byRowHeight) {
      if (!this.treeArray.length) {
        throw new Error("Update at index ".concat(atRowIndex, " with value ").concat(byRowHeight, " failed:\n        Row Height cache not initialized."));
      }

      var n = this.treeArray.length;
      atRowIndex |= 0;

      while (atRowIndex < n) {
        this.treeArray[atRowIndex] += byRowHeight;
        atRowIndex |= atRowIndex + 1;
      }
    }
    /**
     * Range Sum query from 1 to the rowIndex
     */

  }, {
    key: "query",
    value: function query(atIndex) {
      if (!this.treeArray.length) {
        throw new Error("query at index ".concat(atIndex, " failed: Fenwick tree array not initialized."));
      }

      var sum = 0;
      atIndex |= 0;

      while (atIndex >= 0) {
        sum += this.treeArray[atIndex];
        atIndex = (atIndex & atIndex + 1) - 1;
      }

      return sum;
    }
    /**
     * Find the total height between 2 row indexes
     */

  }, {
    key: "queryBetween",
    value: function queryBetween(atIndexA, atIndexB) {
      return this.query(atIndexB) - this.query(atIndexA - 1);
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     */

  }, {
    key: "calcRowIndex",
    value: function calcRowIndex(sum) {
      if (!this.treeArray.length) return 0;
      var pos = -1;
      var dataLength = this.treeArray.length; // Get the highest bit for the block size.

      var highestBit = Math.pow(2, dataLength.toString(2).length - 1);

      for (var blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
        var nextPos = pos + blockSize;

        if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
          sum -= this.treeArray[nextPos];
          pos = nextPos;
        }
      }

      return pos + 1;
    }
  }]);

  return RowHeightCache;
}();

var cache = {};
var testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;

var ɵ0 = function ɵ0() {
  var styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
  var match = typeof styles !== 'undefined' ? Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) : null;
  var pre = match !== null ? match[1] : undefined; // tslint:disable-next-line: tsr-detect-non-literal-regexp

  var dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
  return dom ? {
    dom: dom,
    lowercase: pre,
    css: "-".concat(pre, "-"),
    js: pre[0].toUpperCase() + pre.substr(1)
  } : undefined;
}; // Get Prefix
// http://davidwalsh.name/vendor-prefix


var prefix = ɵ0();

function getVendorPrefixedName(property) {
  var name = camelCase(property);

  if (!cache[name]) {
    if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
      cache[name] = prefix.css + property;
    } else if (testStyle[property] !== undefined) {
      cache[name] = property;
    }
  }

  return cache[name];
} // browser detection and prefixing tools


var transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
var backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
var hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
var hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
var ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);

function translateXY(styles, x, y) {
  if (typeof transform !== 'undefined' && hasCSSTransforms) {
    if (!isSafari && hasCSS3DTransforms) {
      styles[transform] = "translate3d(".concat(x, "px, ").concat(y, "px, 0)");
      styles[backfaceVisibility] = 'hidden';
    } else {
      styles[camelCase(transform)] = "translate(".concat(x, "px, ").concat(y, "px)");
    }
  } else {
    styles.top = "".concat(y, "px");
    styles.left = "".concat(x, "px");
  }
}

var DataTableBodyComponent = /*@__PURE__*/function () {
  var DataTableBodyComponent = /*#__PURE__*/function () {
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    function DataTableBodyComponent(cd) {
      var _this10 = this;

      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableBodyComponent);

      this.cd = cd;
      this.selected = [];
      this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"](false);
      this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.rowHeightsCache = new RowHeightCache();
      this.temp = [];
      this.offsetY = 0;
      this.indexes = {};
      this.rowIndexes = new WeakMap();
      this.rowExpansions = [];
      /**
       * Get the height of the detail row.
       */

      this.getDetailRowHeight = function (row, index) {
        if (!_this10.rowDetail) {
          return 0;
        }

        var rowHeight = _this10.rowDetail.rowHeight;
        return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
      }; // declare fn here so we can get access to the `this` property


      this.rowTrackingFn = function (index, row) {
        var idx = _this10.getRowIndex(row);

        if (_this10.trackByProp) {
          return row[_this10.trackByProp];
        } else {
          return idx;
        }
      };
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableBodyComponent, [{
      key: "ngOnInit",

      /**
       * Called after the constructor, initializing input properties
       */
      value: function ngOnInit() {
        var _this11 = this;

        if (this.rowDetail) {
          this.listener = this.rowDetail.toggle.subscribe(function (_ref5) {
            var type = _ref5.type,
                value = _ref5.value;

            if (type === 'row') {
              _this11.toggleRowExpansion(value);
            }

            if (type === 'all') {
              _this11.toggleAllRows(value);
            } // Refresh rows after toggle
            // Fixes #883


            _this11.updateIndexes();

            _this11.updateRows();

            _this11.cd.markForCheck();
          });
        }

        if (this.groupHeader) {
          this.listener = this.groupHeader.toggle.subscribe(function (_ref6) {
            var type = _ref6.type,
                value = _ref6.value;

            if (type === 'group') {
              _this11.toggleRowExpansion(value);
            }

            if (type === 'all') {
              _this11.toggleAllRows(value);
            } // Refresh rows after toggle
            // Fixes #883


            _this11.updateIndexes();

            _this11.updateRows();

            _this11.cd.markForCheck();
          });
        }
      }
      /**
       * Called once, before the instance is destroyed.
       */

    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        if (this.rowDetail || this.groupHeader) {
          this.listener.unsubscribe();
        }
      }
      /**
       * Updates the Y offset given a new offset.
       */

    }, {
      key: "updateOffsetY",
      value: function updateOffsetY(offset) {
        // scroller is missing on empty table
        if (!this.scroller) {
          return;
        }

        if (this.scrollbarV && this.virtualization && offset) {
          // First get the row Index that we need to move to.
          var rowIndex = this.pageSize * offset;
          offset = this.rowHeightsCache.query(rowIndex - 1);
        } else if (this.scrollbarV && !this.virtualization) {
          offset = 0;
        }

        this.scroller.setOffset(offset || 0);
      }
      /**
       * Body was scrolled, this is mainly useful for
       * when a user is server-side pagination via virtual scroll.
       */

    }, {
      key: "onBodyScroll",
      value: function onBodyScroll(event) {
        var scrollYPos = event.scrollYPos;
        var scrollXPos = event.scrollXPos; // if scroll change, trigger update
        // this is mainly used for header cell positions

        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
          this.scroll.emit({
            offsetY: scrollYPos,
            offsetX: scrollXPos
          });
        }

        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
      }
      /**
       * Updates the page given a direction.
       */

    }, {
      key: "updatePage",
      value: function updatePage(direction) {
        var offset = this.indexes.first / this.pageSize;

        if (direction === 'up') {
          offset = Math.ceil(offset);
        } else if (direction === 'down') {
          offset = Math.floor(offset);
        }

        if (direction !== undefined && !isNaN(offset)) {
          this.page.emit({
            offset: offset
          });
        }
      }
      /**
       * Updates the rows in the view port
       */

    }, {
      key: "updateRows",
      value: function updateRows() {
        var _this12 = this;

        var _this$indexes = this.indexes,
            first = _this$indexes.first,
            last = _this$indexes.last;
        var rowIndex = first;
        var idx = 0;
        var temp = []; // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows

        if (this.groupedRows) {
          var maxRowsPerGroup = 3; // if there is only one group set the maximum number of
          // rows per group the same as the total number of rows

          if (this.groupedRows.length === 1) {
            maxRowsPerGroup = this.groupedRows[0].value.length;
          }

          while (rowIndex < last && rowIndex < this.groupedRows.length) {
            // Add the groups into this page
            var group = this.groupedRows[rowIndex];
            this.rowIndexes.set(group, rowIndex);

            if (group.value) {
              // add indexes for each group item
              group.value.forEach(function (g, i) {
                var _idx = "".concat(rowIndex, "-").concat(i);

                _this12.rowIndexes.set(g, _idx);
              });
            }

            temp[idx] = group;
            idx++; // Group index in this context

            rowIndex++;
          }
        } else {
          while (rowIndex < last && rowIndex < this.rowCount) {
            var row = this.rows[rowIndex];

            if (row) {
              // add indexes for each row
              this.rowIndexes.set(row, rowIndex);
              temp[idx] = row;
            }

            idx++;
            rowIndex++;
          }
        }

        this.temp = temp;
      }
      /**
       * Get the row height
       */

    }, {
      key: "getRowHeight",
      value: function getRowHeight(row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
          return this.rowHeight(row);
        }

        return this.rowHeight;
      }
      /**
       * @param group the group with all rows
       */

    }, {
      key: "getGroupHeight",
      value: function getGroupHeight(group) {
        var rowHeight = 0;

        if (group.value) {
          for (var index = 0; index < group.value.length; index++) {
            rowHeight += this.getRowAndDetailHeight(group.value[index]);
          }
        }

        return rowHeight;
      }
      /**
       * Calculate row height based on the expanded state of the row.
       */

    }, {
      key: "getRowAndDetailHeight",
      value: function getRowAndDetailHeight(row) {
        var rowHeight = this.getRowHeight(row);
        var expanded = this.getRowExpanded(row); // Adding detail row height if its expanded.

        if (expanded) {
          rowHeight += this.getDetailRowHeight(row);
        }

        return rowHeight;
      }
      /**
       * Calculates the styles for the row so that the rows can be moved in 2D space
       * during virtual scroll inside the DOM.   In the below case the Y position is
       * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
       * 100 px then following styles are generated:
       *
       * transform: translate3d(0px, 0px, 0px);    ->  row0
       * transform: translate3d(0px, 30px, 0px);   ->  row1
       * transform: translate3d(0px, 130px, 0px);  ->  row2
       *
       * Row heights have to be calculated based on the row heights cache as we wont
       * be able to determine which row is of what height before hand.  In the above
       * case the positionY of the translate3d for row2 would be the sum of all the
       * heights of the rows before it (i.e. row0 and row1).
       *
       * @param rows the row that needs to be placed in the 2D space.
       * @returns the CSS3 style to be applied
       *
       * @memberOf DataTableBodyComponent
       */

    }, {
      key: "getRowsStyles",
      value: function getRowsStyles(rows) {
        var styles = {}; // only add styles for the group if there is a group

        if (this.groupedRows) {
          styles.width = this.columnGroupWidths.total;
        }

        if (this.scrollbarV && this.virtualization) {
          var idx = 0;

          if (this.groupedRows) {
            // Get the latest row rowindex in a group
            var row = rows[rows.length - 1];
            idx = row ? this.getRowIndex(row) : 0;
          } else {
            idx = this.getRowIndex(rows);
          } // const pos = idx * rowHeight;
          // The position of this row would be the sum of all row heights
          // until the previous row position.


          var pos = this.rowHeightsCache.query(idx - 1);
          translateXY(styles, 0, pos);
        }

        return styles;
      }
      /**
       * Calculate bottom summary row offset for scrollbar mode.
       * For more information about cache and offset calculation
       * see description for `getRowsStyles` method
       *
       * @returns the CSS3 style to be applied
       *
       * @memberOf DataTableBodyComponent
       */

    }, {
      key: "getBottomSummaryRowStyles",
      value: function getBottomSummaryRowStyles() {
        if (!this.scrollbarV || !this.rows || !this.rows.length) {
          return null;
        }

        var styles = {
          position: 'absolute'
        };
        var pos = this.rowHeightsCache.query(this.rows.length - 1);
        translateXY(styles, 0, pos);
        return styles;
      }
      /**
       * Hides the loading indicator
       */

    }, {
      key: "hideIndicator",
      value: function hideIndicator() {
        var _this13 = this;

        setTimeout(function () {
          return _this13.loadingIndicator = false;
        }, 500);
      }
      /**
       * Updates the index of the rows in the viewport
       */

    }, {
      key: "updateIndexes",
      value: function updateIndexes() {
        var first = 0;
        var last = 0;

        if (this.scrollbarV) {
          if (this.virtualization) {
            // Calculation of the first and last indexes will be based on where the
            // scrollY position would be at.  The last index would be the one
            // that shows up inside the view port the last.
            var height = parseInt(this.bodyHeight, 0);
            first = this.rowHeightsCache.getRowIndex(this.offsetY);
            last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
          } else {
            // If virtual rows are not needed
            // We render all in one go
            first = 0;
            last = this.rowCount;
          }
        } else {
          // The server is handling paging and will pass an array that begins with the
          // element at a specified offset.  first should always be 0 with external paging.
          if (!this.externalPaging) {
            first = Math.max(this.offset * this.pageSize, 0);
          }

          last = Math.min(first + this.pageSize, this.rowCount);
        }

        this.indexes = {
          first: first,
          last: last
        };
      }
      /**
       * Refreshes the full Row Height cache.  Should be used
       * when the entire row array state has changed.
       */

    }, {
      key: "refreshRowHeightCache",
      value: function refreshRowHeightCache() {
        if (!this.scrollbarV || this.scrollbarV && !this.virtualization) {
          return;
        } // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.


        this.rowHeightsCache.clearCache(); // Initialize the tree only if there are rows inside the tree.

        if (this.rows && this.rows.length) {
          var rowExpansions = new Set();

          var _iterator8 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rows),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var row = _step8.value;

              if (this.getRowExpanded(row)) {
                rowExpansions.add(row);
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          this.rowHeightsCache.initCache({
            rows: this.rows,
            rowHeight: this.rowHeight,
            detailRowHeight: this.getDetailRowHeight,
            externalVirtual: this.scrollbarV && this.externalPaging,
            rowCount: this.rowCount,
            rowIndexes: this.rowIndexes,
            rowExpansions: rowExpansions
          });
        }
      }
      /**
       * Gets the index for the view port
       */

    }, {
      key: "getAdjustedViewPortIndex",
      value: function getAdjustedViewPortIndex() {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        var viewPortFirstRowIndex = this.indexes.first;

        if (this.scrollbarV && this.virtualization) {
          var offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
          return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }

        return viewPortFirstRowIndex;
      }
      /**
       * Toggle the Expansion of the row i.e. if the row is expanded then it will
       * collapse and vice versa.   Note that the expanded status is stored as
       * a part of the row object itself as we have to preserve the expanded row
       * status in case of sorting and filtering of the row set.
       */

    }, {
      key: "toggleRowExpansion",
      value: function toggleRowExpansion(row) {
        // Capture the row index of the first row that is visible on the viewport.
        var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        var rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
        var expanded = rowExpandedIdx > -1; // If the detailRowHeight is auto --> only in case of non-virtualized scroll

        if (this.scrollbarV && this.virtualization) {
          var detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1); // const idx = this.rowIndexes.get(row) || 0;

          var idx = this.getRowIndex(row);
          this.rowHeightsCache.update(idx, detailRowHeight);
        } // Update the toggled row and update thive nevere heights in the cache.


        if (expanded) {
          this.rowExpansions.splice(rowExpandedIdx, 1);
        } else {
          this.rowExpansions.push(row);
        }

        this.detailToggle.emit({
          rows: [row],
          currentIndex: viewPortFirstRowIndex
        });
      }
      /**
       * Expand/Collapse all the rows no matter what their state is.
       */

    }, {
      key: "toggleAllRows",
      value: function toggleAllRows(expanded) {
        // clear prev expansions
        this.rowExpansions = []; // Capture the row index of the first row that is visible on the viewport.

        var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();

        if (expanded) {
          var _iterator9 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.rows),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var row = _step9.value;
              this.rowExpansions.push(row);
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }

        if (this.scrollbarV) {
          // Refresh the full row heights cache since every row was affected.
          this.recalcLayout();
        } // Emit all rows that have been expanded.


        this.detailToggle.emit({
          rows: this.rows,
          currentIndex: viewPortFirstRowIndex
        });
      }
      /**
       * Recalculates the table
       */

    }, {
      key: "recalcLayout",
      value: function recalcLayout() {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
      }
      /**
       * Tracks the column
       */

    }, {
      key: "columnTrackingFn",
      value: function columnTrackingFn(index, column) {
        return column.$$id;
      }
      /**
       * Gets the row pinning group styles
       */

    }, {
      key: "stylesByGroup",
      value: function stylesByGroup(group) {
        var widths = this.columnGroupWidths;
        var offsetX = this.offsetX;
        var styles = {
          width: "".concat(widths[group], "px")
        };

        if (group === 'left') {
          translateXY(styles, offsetX, 0);
        } else if (group === 'right') {
          var bodyWidth = parseInt(this.innerWidth + '', 0);
          var totalDiff = widths.total - bodyWidth;
          var offsetDiff = totalDiff - offsetX;
          var offset = offsetDiff * -1;
          translateXY(styles, offset, 0);
        }

        return styles;
      }
      /**
       * Returns if the row was expanded and set default row expansion when row expansion is empty
       */

    }, {
      key: "getRowExpanded",
      value: function getRowExpanded(row) {
        if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
          var _iterator10 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(this.groupedRows),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var group = _step10.value;
              this.rowExpansions.push(group);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }

        return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
      }
    }, {
      key: "getRowExpandedIdx",
      value: function getRowExpandedIdx(row, expanded) {
        var _this14 = this;

        if (!expanded || !expanded.length) return -1;
        var rowId = this.rowIdentity(row);
        return expanded.findIndex(function (r) {
          var id = _this14.rowIdentity(r);

          return id === rowId;
        });
      }
      /**
       * Gets the row index given a row
       */

    }, {
      key: "getRowIndex",
      value: function getRowIndex(row) {
        return this.rowIndexes.get(row) || 0;
      }
    }, {
      key: "onTreeAction",
      value: function onTreeAction(row) {
        this.treeAction.emit({
          row: row
        });
      }
    }, {
      key: "pageSize",
      set: function set(val) {
        this._pageSize = val;
        this.recalcLayout();
      },
      get: function get() {
        return this._pageSize;
      }
    }, {
      key: "rows",
      set: function set(val) {
        this._rows = val;
        this.recalcLayout();
      },
      get: function get() {
        return this._rows;
      }
    }, {
      key: "columns",
      set: function set(val) {
        this._columns = val;
        var colsByPin = columnsByPin(val);
        this.columnGroupWidths = columnGroupWidths(colsByPin, val);
      },
      get: function get() {
        return this._columns;
      }
    }, {
      key: "offset",
      set: function set(val) {
        this._offset = val;
        if (!this.scrollbarV || this.scrollbarV && !this.virtualization) this.recalcLayout();
      },
      get: function get() {
        return this._offset;
      }
    }, {
      key: "rowCount",
      set: function set(val) {
        this._rowCount = val;
        this.recalcLayout();
      },
      get: function get() {
        return this._rowCount;
      }
    }, {
      key: "bodyWidth",
      get: function get() {
        if (this.scrollbarH) {
          return this.innerWidth + 'px';
        } else {
          return '100%';
        }
      }
    }, {
      key: "bodyHeight",
      set: function set(val) {
        if (this.scrollbarV) {
          this._bodyHeight = val + 'px';
        } else {
          this._bodyHeight = 'auto';
        }

        this.recalcLayout();
      },
      get: function get() {
        return this._bodyHeight;
      }
      /**
       * Returns if selection is enabled.
       */

    }, {
      key: "selectEnabled",
      get: function get() {
        return !!this.selectionType;
      }
      /**
       * Property that would calculate the height of scroll bar
       * based on the row heights cache for virtual scroll and virtualization. Other scenarios
       * calculate scroll height automatically (as height will be undefined).
       */

    }, {
      key: "scrollHeight",
      get: function get() {
        if (this.scrollbarV && this.virtualization && this.rowCount) {
          return this.rowHeightsCache.query(this.rowCount - 1);
        } // avoid TS7030: Not all code paths return a value.


        return undefined;
      }
    }]);

    return DataTableBodyComponent;
  }();

  DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) {
    return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]));
  };

  DataTableBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DataTableBodyComponent,
    selectors: [["datatable-body"]],
    viewQuery: function DataTableBodyComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](ScrollerComponent, true);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
      }
    },
    hostAttrs: [1, "datatable-body"],
    hostVars: 4,
    hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
      }
    },
    inputs: {
      selected: "selected",
      pageSize: "pageSize",
      rows: "rows",
      columns: "columns",
      offset: "offset",
      rowCount: "rowCount",
      bodyHeight: "bodyHeight",
      offsetX: "offsetX",
      loadingIndicator: "loadingIndicator",
      scrollbarV: "scrollbarV",
      scrollbarH: "scrollbarH",
      externalPaging: "externalPaging",
      rowHeight: "rowHeight",
      emptyMessage: "emptyMessage",
      selectionType: "selectionType",
      rowIdentity: "rowIdentity",
      rowDetail: "rowDetail",
      groupHeader: "groupHeader",
      selectCheck: "selectCheck",
      displayCheck: "displayCheck",
      trackByProp: "trackByProp",
      rowClass: "rowClass",
      groupedRows: "groupedRows",
      groupExpansionDefault: "groupExpansionDefault",
      innerWidth: "innerWidth",
      groupRowsBy: "groupRowsBy",
      virtualization: "virtualization",
      summaryRow: "summaryRow",
      summaryPosition: "summaryPosition",
      summaryHeight: "summaryHeight"
    },
    outputs: {
      scroll: "scroll",
      page: "page",
      activate: "activate",
      select: "select",
      detailToggle: "detailToggle",
      rowContextmenu: "rowContextmenu",
      treeAction: "treeAction"
    },
    decls: 5,
    vars: 9,
    consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]],
    template: function DataTableBodyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "datatable-selection", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) {
          return ctx.select.emit($event);
        })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) {
          return ctx.activate.emit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
      }
    },
    directives: function directives() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], DataTableSelectionComponent, ProgressBarComponent, ScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], DataTableSummaryRowComponent, DataTableRowWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], DataTableBodyRowComponent];
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return DataTableBodyComponent;
}();

var DataTableHeaderComponent = /*@__PURE__*/function () {
  var DataTableHeaderComponent = /*#__PURE__*/function () {
    function DataTableHeaderComponent(cd) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableHeaderComponent);

      this.cd = cd;
      this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"](false);
      this._columnGroupWidths = {
        total: 100
      };
      this._styleByGroup = {
        left: {},
        center: {},
        right: {}
      };
      this.destroyed = false;
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableHeaderComponent, [{
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this.destroyed = true;
      }
    }, {
      key: "onLongPressStart",
      value: function onLongPressStart(_ref7) {
        var event = _ref7.event,
            model = _ref7.model;
        model.dragging = true;
        this.dragEventTarget = event;
      }
    }, {
      key: "onLongPressEnd",
      value: function onLongPressEnd(_ref8) {
        var _this15 = this;

        var event = _ref8.event,
            model = _ref8.model;
        this.dragEventTarget = event; // delay resetting so sort can be
        // prevented if we were dragging

        setTimeout(function () {
          // datatable component creates copies from columns on reorder
          // set dragging to false on new objects
          var column = _this15._columns.find(function (c) {
            return c.$$id === model.$$id;
          });

          if (column) {
            column.dragging = false;
          }
        }, 5);
      }
    }, {
      key: "trackByGroups",
      value: function trackByGroups(index, colGroup) {
        return colGroup.type;
      }
    }, {
      key: "columnTrackingFn",
      value: function columnTrackingFn(index, column) {
        return column.$$id;
      }
    }, {
      key: "onColumnResized",
      value: function onColumnResized(width, column) {
        if (width <= column.minWidth) {
          width = column.minWidth;
        } else if (width >= column.maxWidth) {
          width = column.maxWidth;
        }

        this.resize.emit({
          column: column,
          prevValue: column.width,
          newValue: width
        });
      }
    }, {
      key: "onColumnReordered",
      value: function onColumnReordered(_ref9) {
        var prevIndex = _ref9.prevIndex,
            newIndex = _ref9.newIndex,
            model = _ref9.model;
        var column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
          column: model,
          prevValue: prevIndex,
          newValue: newIndex
        });
      }
    }, {
      key: "onTargetChanged",
      value: function onTargetChanged(_ref10) {
        var prevIndex = _ref10.prevIndex,
            newIndex = _ref10.newIndex,
            initialIndex = _ref10.initialIndex;

        if (prevIndex || prevIndex === 0) {
          var oldColumn = this.getColumn(prevIndex);
          oldColumn.isTarget = false;
          oldColumn.targetMarkerContext = undefined;
        }

        if (newIndex || newIndex === 0) {
          var newColumn = this.getColumn(newIndex);
          newColumn.isTarget = true;

          if (initialIndex !== newIndex) {
            newColumn.targetMarkerContext = {
              class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
            };
          }
        }
      }
    }, {
      key: "getColumn",
      value: function getColumn(index) {
        var leftColumnCount = this._columnsByPin[0].columns.length;

        if (index < leftColumnCount) {
          return this._columnsByPin[0].columns[index];
        }

        var centerColumnCount = this._columnsByPin[1].columns.length;

        if (index < leftColumnCount + centerColumnCount) {
          return this._columnsByPin[1].columns[index - leftColumnCount];
        }

        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
      }
    }, {
      key: "onSort",
      value: function onSort(_ref11) {
        var column = _ref11.column,
            prevValue = _ref11.prevValue,
            newValue = _ref11.newValue;

        // if we are dragging don't sort!
        if (column.dragging) {
          return;
        }

        var sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
          sorts: sorts,
          column: column,
          prevValue: prevValue,
          newValue: newValue
        });
      }
    }, {
      key: "calcNewSorts",
      value: function calcNewSorts(column, prevValue, newValue) {
        var idx = 0;

        if (!this.sorts) {
          this.sorts = [];
        }

        var sorts = this.sorts.map(function (s, i) {
          s = Object.assign({}, s);

          if (s.prop === column.prop) {
            idx = i;
          }

          return s;
        });

        if (newValue === undefined) {
          sorts.splice(idx, 1);
        } else if (prevValue) {
          sorts[idx].dir = newValue;
        } else {
          if (this.sortType === SortType.single) {
            sorts.splice(0, this.sorts.length);
          }

          sorts.push({
            dir: newValue,
            prop: column.prop
          });
        }

        return sorts;
      }
    }, {
      key: "setStylesByGroup",
      value: function setStylesByGroup() {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');

        if (!this.destroyed) {
          this.cd.detectChanges();
        }
      }
    }, {
      key: "calcStylesByGroup",
      value: function calcStylesByGroup(group) {
        var widths = this._columnGroupWidths;
        var offsetX = this.offsetX;
        var styles = {
          width: "".concat(widths[group], "px")
        };

        if (group === 'center') {
          translateXY(styles, offsetX * -1, 0);
        } else if (group === 'right') {
          var totalDiff = widths.total - this.innerWidth;
          var offset = totalDiff * -1;
          translateXY(styles, offset, 0);
        }

        return styles;
      }
    }, {
      key: "innerWidth",
      set: function set(val) {
        var _this16 = this;

        this._innerWidth = val;
        setTimeout(function () {
          if (_this16._columns) {
            var colByPin = columnsByPin(_this16._columns);
            _this16._columnGroupWidths = columnGroupWidths(colByPin, _this16._columns);

            _this16.setStylesByGroup();
          }
        });
      },
      get: function get() {
        return this._innerWidth;
      }
    }, {
      key: "headerHeight",
      set: function set(val) {
        if (val !== 'auto') {
          this._headerHeight = "".concat(val, "px");
        } else {
          this._headerHeight = val;
        }
      },
      get: function get() {
        return this._headerHeight;
      }
    }, {
      key: "columns",
      set: function set(val) {
        var _this17 = this;

        this._columns = val;
        var colsByPin = columnsByPin(val);
        this._columnsByPin = columnsByPinArr(val);
        setTimeout(function () {
          _this17._columnGroupWidths = columnGroupWidths(colsByPin, val);

          _this17.setStylesByGroup();
        });
      },
      get: function get() {
        return this._columns;
      }
    }, {
      key: "offsetX",
      set: function set(val) {
        this._offsetX = val;
        this.setStylesByGroup();
      },
      get: function get() {
        return this._offsetX;
      }
    }, {
      key: "headerWidth",
      get: function get() {
        if (this.scrollbarH) {
          return this.innerWidth + 'px';
        }

        return '100%';
      }
    }]);

    return DataTableHeaderComponent;
  }();

  DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) {
    return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]));
  };

  DataTableHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DataTableHeaderComponent,
    selectors: [["datatable-header"]],
    hostAttrs: [1, "datatable-header"],
    hostVars: 4,
    hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
      }
    },
    inputs: {
      innerWidth: "innerWidth",
      headerHeight: "headerHeight",
      columns: "columns",
      offsetX: "offsetX",
      sorts: "sorts",
      sortAscendingIcon: "sortAscendingIcon",
      sortDescendingIcon: "sortDescendingIcon",
      sortUnsetIcon: "sortUnsetIcon",
      scrollbarH: "scrollbarH",
      dealsWithGroup: "dealsWithGroup",
      targetMarkerTemplate: "targetMarkerTemplate",
      sortType: "sortType",
      allRowsSelected: "allRowsSelected",
      selectionType: "selectionType",
      reorderable: "reorderable"
    },
    outputs: {
      sort: "sort",
      reorder: "reorder",
      resize: "resize",
      select: "select",
      columnContextmenu: "columnContextmenu"
    },
    decls: 2,
    vars: 4,
    consts: [["orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]],
    template: function DataTableHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) {
          return ctx.onColumnReordered($event);
        })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) {
          return ctx.onTargetChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
      }
    },
    directives: function directives() {
      return [OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], DataTableHeaderCellComponent, ResizeableDirective, LongPressDirective, DraggableDirective];
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return DataTableHeaderComponent;
}();
/**
 * Throttle a function
 */


function throttle(func, wait, options) {
  options = options || {};
  var context;
  var args;
  var result;
  var timeout = null;
  var previous = 0;

  function later() {
    previous = options.leading === false ? 0 : +new Date();
    timeout = null;
    result = func.apply(context, args);
  }

  return function () {
    var now = +new Date();

    if (!previous && options.leading === false) {
      previous = now;
    }

    var remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */


function throttleable(duration, options) {
  return function innerDecorator(target, key, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function getter() {
        Object.defineProperty(this, key, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: throttle(descriptor.value, duration, options)
        });
        return this[key];
      }
    };
  };
}
/**
 * Calculates the Total Flex Grow
 */


function getTotalFlexGrow(columns) {
  var totalFlexGrow = 0;

  var _iterator11 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columns),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var c = _step11.value;
      totalFlexGrow += c.flexGrow || 0;
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }

  return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 */


function adjustColumnWidths(allColumns, expectedWidth) {
  var columnsWidth = columnsTotalWidth(allColumns);
  var totalFlexGrow = getTotalFlexGrow(allColumns);
  var colsByGroup = columnsByPin(allColumns);

  if (columnsWidth !== expectedWidth) {
    scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
  }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 */


function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
  // calculate total width and flexgrow points for coulumns that can be resized
  for (var attr in colsByGroup) {
    var _iterator12 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(colsByGroup[attr]),
        _step12;

    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var column = _step12.value;

        if (!column.canAutoResize) {
          maxWidth -= column.width;
          totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
        } else {
          column.width = 0;
        }
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  }

  var hasMinWidth = {};
  var remainingWidth = maxWidth; // resize columns until no width is left to be distributed

  do {
    var widthPerFlexPoint = remainingWidth / totalFlexGrow;
    remainingWidth = 0;

    for (var _attr in colsByGroup) {
      var _iterator13 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(colsByGroup[_attr]),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var _column = _step13.value;

          // if the column can be resize and it hasn't reached its minimum width yet
          if (_column.canAutoResize && !hasMinWidth[_column.prop]) {
            var newWidth = _column.width + _column.flexGrow * widthPerFlexPoint;

            if (_column.minWidth !== undefined && newWidth < _column.minWidth) {
              remainingWidth += newWidth - _column.minWidth;
              _column.width = _column.minWidth;
              hasMinWidth[_column.prop] = true;
            } else {
              _column.width = newWidth;
            }
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    }
  } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 */


function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed) {
  var defaultColWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 300;
  var columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(function (c) {
    return c.canAutoResize !== false;
  });

  var _iterator14 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columnsToResize),
      _step14;

  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      var _column2 = _step14.value;

      if (!_column2.$$oldWidth) {
        _column2.$$oldWidth = _column2.width;
      }
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }

  var additionWidthPerColumn = 0;
  var exceedsWindow = false;
  var contentWidth = getContentWidth(allColumns, defaultColWidth);
  var remainingWidth = expectedWidth - contentWidth;
  var columnsProcessed = [];
  var remainingWidthLimit = 1; // when to stop
  // This loop takes care of the

  do {
    additionWidthPerColumn = remainingWidth / columnsToResize.length;
    exceedsWindow = contentWidth >= expectedWidth;

    var _iterator15 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columnsToResize),
        _step15;

    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var column = _step15.value;

        if (exceedsWindow && allowBleed) {
          column.width = column.$$oldWidth || column.width || defaultColWidth;
        } else {
          var newSize = (column.width || defaultColWidth) + additionWidthPerColumn;

          if (column.minWidth && newSize < column.minWidth) {
            column.width = column.minWidth;
            columnsProcessed.push(column);
          } else if (column.maxWidth && newSize > column.maxWidth) {
            column.width = column.maxWidth;
            columnsProcessed.push(column);
          } else {
            column.width = newSize;
          }
        }

        column.width = Math.max(0, column.width);
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }

    contentWidth = getContentWidth(allColumns);
    remainingWidth = expectedWidth - contentWidth;
    removeProcessedColumns(columnsToResize, columnsProcessed);
  } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 */


function removeProcessedColumns(columnsToResize, columnsProcessed) {
  var _iterator16 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(columnsProcessed),
      _step16;

  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      var column = _step16.value;
      var index = columnsToResize.indexOf(column);
      columnsToResize.splice(index, 1);
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }
}
/**
 * Gets the width of the columns
 */


function getContentWidth(allColumns) {
  var defaultColWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var contentWidth = 0;

  var _iterator17 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(allColumns),
      _step17;

  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var column = _step17.value;
      contentWidth += column.width || defaultColWidth;
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }

  return contentWidth;
}

var SortDirection = /*@__PURE__*/function (SortDirection) {
  SortDirection["asc"] = "asc";
  SortDirection["desc"] = "desc";
  return SortDirection;
}({});
/**
 * Gets the next sort direction
 */


function nextSortDir(sortType, current) {
  if (sortType === SortType.single) {
    if (current === SortDirection.asc) {
      return SortDirection.desc;
    } else {
      return SortDirection.asc;
    }
  } else {
    if (!current) {
      return SortDirection.asc;
    } else if (current === SortDirection.asc) {
      return SortDirection.desc;
    } else if (current === SortDirection.desc) {
      return undefined;
    } // avoid TS7030: Not all code paths return a value.


    return undefined;
  }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 */


function orderByComparator(a, b) {
  if (a === null || typeof a === 'undefined') a = 0;
  if (b === null || typeof b === 'undefined') b = 0;

  if (a instanceof Date && b instanceof Date) {
    if (a < b) return -1;
    if (a > b) return 1;
  } else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
    // Convert to string in case of a=0 or b=0
    a = String(a);
    b = String(b); // Isn't a number so lowercase the string to properly compare

    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
  } else {
    // Parse strings as numbers to compare properly
    if (parseFloat(a) < parseFloat(b)) return -1;
    if (parseFloat(a) > parseFloat(b)) return 1;
  } // equal each other


  return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 */


function sortRows(rows, columns, dirs) {
  if (!rows) return [];
  if (!dirs || !dirs.length || !columns) return Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rows);
  /**
   * record the row ordering of results from prior sort operations (if applicable)
   * this is necessary to guarantee stable sorting behavior
   */

  var rowToIndexMap = new Map();
  rows.forEach(function (row, index) {
    return rowToIndexMap.set(row, index);
  });

  var temp = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rows);

  var cols = columns.reduce(function (obj, col) {
    if (col.comparator && typeof col.comparator === 'function') {
      obj[col.prop] = col.comparator;
    }

    return obj;
  }, {}); // cache valueGetter and compareFn so that they
  // do not need to be looked-up in the sort function body

  var cachedDirs = dirs.map(function (dir) {
    var prop = dir.prop;
    return {
      prop: prop,
      dir: dir.dir,
      valueGetter: getterForProp(prop),
      compareFn: cols[prop] || orderByComparator
    };
  });
  return temp.sort(function (rowA, rowB) {
    var _iterator18 = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(cachedDirs),
        _step18;

    try {
      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
        var cachedDir = _step18.value;
        // Get property and valuegetters for column to be sorted
        var prop = cachedDir.prop,
            valueGetter = cachedDir.valueGetter; // Get A and B cell values from rows based on properties of the columns

        var propA = valueGetter(rowA, prop);
        var propB = valueGetter(rowB, prop); // Compare function gets five parameters:
        // Two cell values to be compared as propA and propB
        // Two rows corresponding to the cells as rowA and rowB
        // Direction of the sort for this column as SortDirection
        // Compare can be a standard JS comparison function (a,b) => -1|0|1
        // as additional parameters are silently ignored. The whole row and sort
        // direction enable more complex sort logic.

        var comparison = cachedDir.dir !== SortDirection.desc ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir) : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir); // Don't return 0 yet in case of needing to sort by next property

        if (comparison !== 0) return comparison;
      }
    } catch (err) {
      _iterator18.e(err);
    } finally {
      _iterator18.f();
    }

    if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB))) return 0;
    /**
     * all else being equal, preserve original order of the rows (stable sort)
     */

    return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
  });
}

var DatatableComponent = /*@__PURE__*/function () {
  var DatatableComponent = /*#__PURE__*/function () {
    function DatatableComponent(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
      var _this18 = this;

      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DatatableComponent);

      this.scrollbarHelper = scrollbarHelper;
      this.dimensionsHelper = dimensionsHelper;
      this.cd = cd;
      this.columnChangesService = columnChangesService;
      this.configuration = configuration;
      /**
       * List of row objects that should be
       * represented as selected in the grid.
       * Default value: `[]`
       */

      this.selected = [];
      /**
       * Enable vertical scrollbars
       */

      this.scrollbarV = false;
      /**
       * Enable horz scrollbars
       */

      this.scrollbarH = false;
      /**
       * The row height; which is necessary
       * to calculate the height for the lazy rendering.
       */

      this.rowHeight = 30;
      /**
       * Type of column width distribution formula.
       * Example: flex, force, standard
       */

      this.columnMode = ColumnMode.standard;
      /**
       * The minimum header height in pixels.
       * Pass a falsey for no header
       */

      this.headerHeight = 30;
      /**
       * The minimum footer height in pixels.
       * Pass falsey for no footer
       */

      this.footerHeight = 0;
      /**
       * If the table should use external paging
       * otherwise its assumed that all data is preloaded.
       */

      this.externalPaging = false;
      /**
       * If the table should use external sorting or
       * the built-in basic sorting.
       */

      this.externalSorting = false;
      /**
       * Show the linear loading bar.
       * Default value: `false`
       */

      this.loadingIndicator = false;
      /**
       * Enable/Disable ability to re-order columns
       * by dragging them.
       */

      this.reorderable = true;
      /**
       * Swap columns on re-order columns or
       * move them.
       */

      this.swapColumns = true;
      /**
       * The type of sorting
       */

      this.sortType = SortType.single;
      /**
       * Array of sorted columns by property and type.
       * Default value: `[]`
       */

      this.sorts = [];
      /**
       * Css class overrides
       */

      this.cssClasses = {
        sortAscending: 'datatable-icon-up',
        sortDescending: 'datatable-icon-down',
        sortUnset: 'datatable-icon-sort-unset',
        pagerLeftArrow: 'datatable-icon-left',
        pagerRightArrow: 'datatable-icon-right',
        pagerPrevious: 'datatable-icon-prev',
        pagerNext: 'datatable-icon-skip'
      };
      /**
       * Message overrides for localization
       *
       * emptyMessage     [default] = 'No data to display'
       * totalMessage     [default] = 'total'
       * selectedMessage  [default] = 'selected'
       */

      this.messages = {
        // Message to show when array is presented
        // but contains no values
        emptyMessage: 'No data to display',
        // Footer total message
        totalMessage: 'total',
        // Footer selected message
        selectedMessage: 'selected'
      };
      /**
       * A boolean you can use to set the detault behaviour of rows and groups
       * whether they will start expanded or not. If ommited the default is NOT expanded.
       *
       */

      this.groupExpansionDefault = false;
      /**
       * Property to which you can use for determining select all
       * rows on current page or not.
       *
       * @memberOf DatatableComponent
       */

      this.selectAllRowsOnPage = false;
      /**
       * A flag for row virtualization on / off
       */

      this.virtualization = true;
      /**
       * A flag for switching summary row on / off
       */

      this.summaryRow = false;
      /**
       * A height of summary row
       */

      this.summaryHeight = 30;
      /**
       * A property holds a summary row position: top/bottom
       */

      this.summaryPosition = 'top';
      /**
       * Body was scrolled typically in a `scrollbarV:true` scenario.
       */

      this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      /**
       * A cell or row was focused via keyboard or mouse click.
       */

      this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      /**
       * A cell or row was selected.
       */

      this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      /**
       * Column sort was invoked.
       */

      this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      /**
       * The table was paged either triggered by the pager or the body scroll.
       */

      this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      /**
       * Columns were re-ordered.
       */

      this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      /**
       * Column was resized.
       */

      this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      /**
       * The context menu was invoked on the table.
       * type indicates whether the header or the body was clicked.
       * content contains either the column or the row that was clicked.
       */

      this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"](false);
      /**
       * A row was expanded ot collapsed for tree
       */

      this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.rowCount = 0;
      this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](0);
      this._count = 0;
      this._offset = 0;
      this._subscriptions = [];
      /**
       * This will be used when displaying or selecting rows.
       * when tracking/comparing them, we'll use the value of this fn,
       *
       * (`fn(x) === fn(y)` instead of `x === y`)
       */

      this.rowIdentity = function (x) {
        if (_this18._groupRowsBy) {
          // each group in groupedRows are stored as {key, value: [rows]},
          // where key is the groupRowsBy index
          return x.key;
        } else {
          return x;
        }
      }; // get ref to elm for measuring


      this.element = element.nativeElement;
      this.rowDiffer = differs.find({}).create(); // apply global settings from Module.forRoot

      if (this.configuration && this.configuration.messages) {
        this.messages = Object.assign({}, this.configuration.messages);
      }
    }
    /**
     * Rows that are displayed in the table.
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DatatableComponent, [{
      key: "ngOnInit",

      /**
       * Lifecycle hook that is called after data-bound
       * properties of a directive are initialized.
       */
      value: function ngOnInit() {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
      }
      /**
       * Lifecycle hook that is called after a component's
       * view has been fully initialized.
       */

    }, {
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        var _this19 = this;

        if (!this.externalSorting) {
          this.sortInternalRows();
        } // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting


        if (typeof requestAnimationFrame === 'undefined') {
          return;
        }

        requestAnimationFrame(function () {
          _this19.recalculate(); // emit page for virtual server-side kickoff


          if (_this19.externalPaging && _this19.scrollbarV) {
            _this19.page.emit({
              count: _this19.count,
              pageSize: _this19.pageSize,
              limit: _this19.limit,
              offset: 0
            });
          }
        });
      }
      /**
       * Lifecycle hook that is called after a component's
       * content has been fully initialized.
       */

    }, {
      key: "ngAfterContentInit",
      value: function ngAfterContentInit() {
        var _this20 = this;

        this.columnTemplates.changes.subscribe(function (v) {
          return _this20.translateColumns(v);
        });
        this.listenForColumnInputChanges();
      }
      /**
       * Translates the templates to the column objects
       */

    }, {
      key: "translateColumns",
      value: function translateColumns(val) {
        if (val) {
          var arr = val.toArray();

          if (arr.length) {
            this._internalColumns = translateTemplates(arr);
            setColumnDefaults(this._internalColumns);
            this.recalculateColumns();
            this.sortInternalRows();
            this.cd.markForCheck();
          }
        }
      }
      /**
       * Creates a map with the data grouped by the user choice of grouping index
       *
       * @param originalArray the original array passed via parameter
       * @param groupByIndex  the index of the column to group the data by
       */

    }, {
      key: "groupArrayBy",
      value: function groupArrayBy(originalArray, groupBy) {
        // create a map to hold groups with their corresponding results
        var map = new Map();
        var i = 0;
        originalArray.forEach(function (item) {
          var key = item[groupBy];

          if (!map.has(key)) {
            map.set(key, [item]);
          } else {
            map.get(key).push(item);
          }

          i++;
        });

        var addGroup = function addGroup(key, value) {
          return {
            key: key,
            value: value
          };
        }; // convert map back to a simple array of objects


        return Array.from(map, function (x) {
          return addGroup(x[0], x[1]);
        });
      }
      /*
       * Lifecycle hook that is called when Angular dirty checks a directive.
       */

    }, {
      key: "ngDoCheck",
      value: function ngDoCheck() {
        if (this.rowDiffer.diff(this.rows)) {
          if (!this.externalSorting) {
            this.sortInternalRows();
          } else {
            this._internalRows = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.rows);
          } // auto group by parent on new update


          this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
          this.recalculatePages();
          this.cd.markForCheck();
        }
      }
      /**
       * Recalc's the sizes of the grid.
       *
       * Updated automatically on changes to:
       *
       *  - Columns
       *  - Rows
       *  - Paging related
       *
       * Also can be manually invoked or upon window resize.
       */

    }, {
      key: "recalculate",
      value: function recalculate() {
        this.recalculateDims();
        this.recalculateColumns();
        this.cd.markForCheck();
      }
      /**
       * Window resize handler to update sizes.
       */

    }, {
      key: "onWindowResize",
      value: function onWindowResize() {
        this.recalculate();
      }
      /**
       * Recalulcates the column widths based on column width
       * distribution mode and scrollbar offsets.
       */

    }, {
      key: "recalculateColumns",
      value: function recalculateColumns() {
        var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._internalColumns;
        var forceIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
        var allowBleed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.scrollbarH;
        if (!columns) return undefined;
        var width = this._innerWidth;

        if (this.scrollbarV) {
          width = width - this.scrollbarHelper.width;
        }

        if (this.columnMode === ColumnMode.force) {
          forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        } else if (this.columnMode === ColumnMode.flex) {
          adjustColumnWidths(columns, width);
        }

        return columns;
      }
      /**
       * Recalculates the dimensions of the table size.
       * Internally calls the page size and row count calcs too.
       *
       */

    }, {
      key: "recalculateDims",
      value: function recalculateDims() {
        var dims = this.dimensionsHelper.getDimensions(this.element);
        this._innerWidth = Math.floor(dims.width);

        if (this.scrollbarV) {
          var height = dims.height;
          if (this.headerHeight) height = height - this.headerHeight;
          if (this.footerHeight) height = height - this.footerHeight;
          this.bodyHeight = height;
        }

        this.recalculatePages();
      }
      /**
       * Recalculates the pages after a update.
       */

    }, {
      key: "recalculatePages",
      value: function recalculatePages() {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
      }
      /**
       * Body triggered a page event.
       */

    }, {
      key: "onBodyPage",
      value: function onBodyPage(_ref12) {
        var offset = _ref12.offset;

        // Avoid pagination caming from body events like scroll when the table
        // has no virtualization and the external paging is enable.
        // This means, let's the developer handle pagination by my him(her) self
        if (this.externalPaging && !this.virtualization) {
          return;
        }

        this.offset = offset;
        this.page.emit({
          count: this.count,
          pageSize: this.pageSize,
          limit: this.limit,
          offset: this.offset
        });
      }
      /**
       * The body triggered a scroll event.
       */

    }, {
      key: "onBodyScroll",
      value: function onBodyScroll(event) {
        this._offsetX.next(event.offsetX);

        this.scroll.emit(event);
        this.cd.detectChanges();
      }
      /**
       * The footer triggered a page event.
       */

    }, {
      key: "onFooterPage",
      value: function onFooterPage(event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
          count: this.count,
          pageSize: this.pageSize,
          limit: this.limit,
          offset: this.offset
        });

        if (this.selectAllRowsOnPage) {
          this.selected = [];
          this.select.emit({
            selected: this.selected
          });
        }
      }
      /**
       * Recalculates the sizes of the page
       */

    }, {
      key: "calcPageSize",
      value: function calcPageSize() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rows;

        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV && this.virtualization) {
          var size = Math.ceil(this.bodyHeight / this.rowHeight);
          return Math.max(size, 0);
        } // if limit is passed, we are paging


        if (this.limit !== undefined) {
          return this.limit;
        } // otherwise use row length


        if (val) {
          return val.length;
        } // other empty :(


        return 0;
      }
      /**
       * Calculates the row count.
       */

    }, {
      key: "calcRowCount",
      value: function calcRowCount() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rows;

        if (!this.externalPaging) {
          if (!val) return 0;

          if (this.groupedRows) {
            return this.groupedRows.length;
          } else if (this.treeFromRelation != null && this.treeToRelation != null) {
            return this._internalRows.length;
          } else {
            return val.length;
          }
        }

        return this.count;
      }
      /**
       * The header triggered a contextmenu event.
       */

    }, {
      key: "onColumnContextmenu",
      value: function onColumnContextmenu(_ref13) {
        var event = _ref13.event,
            column = _ref13.column;
        this.tableContextmenu.emit({
          event: event,
          type: ContextmenuType.header,
          content: column
        });
      }
      /**
       * The body triggered a contextmenu event.
       */

    }, {
      key: "onRowContextmenu",
      value: function onRowContextmenu(_ref14) {
        var event = _ref14.event,
            row = _ref14.row;
        this.tableContextmenu.emit({
          event: event,
          type: ContextmenuType.body,
          content: row
        });
      }
      /**
       * The header triggered a column resize event.
       */

    }, {
      key: "onColumnResize",
      value: function onColumnResize(_ref15) {
        var column = _ref15.column,
            newValue = _ref15.newValue;

        /* Safari/iOS 10.2 workaround */
        if (column === undefined) {
          return;
        }

        var idx;

        var cols = this._internalColumns.map(function (c, i) {
          c = Object.assign({}, c);

          if (c.$$id === column.$$id) {
            idx = i;
            c.width = newValue; // set this so we can force the column
            // width distribution to be to this value

            c.$$oldWidth = newValue;
          }

          return c;
        });

        this.recalculateColumns(cols, idx);
        this._internalColumns = cols;
        this.resize.emit({
          column: column,
          newValue: newValue
        });
      }
      /**
       * The header triggered a column re-order event.
       */

    }, {
      key: "onColumnReorder",
      value: function onColumnReorder(_ref16) {
        var column = _ref16.column,
            newValue = _ref16.newValue,
            prevValue = _ref16.prevValue;

        var cols = this._internalColumns.map(function (c) {
          return Object.assign({}, c);
        });

        if (this.swapColumns) {
          var prevCol = cols[newValue];
          cols[newValue] = column;
          cols[prevValue] = prevCol;
        } else {
          if (newValue > prevValue) {
            var movedCol = cols[prevValue];

            for (var i = prevValue; i < newValue; i++) {
              cols[i] = cols[i + 1];
            }

            cols[newValue] = movedCol;
          } else {
            var _movedCol = cols[prevValue];

            for (var _i3 = prevValue; _i3 > newValue; _i3--) {
              cols[_i3] = cols[_i3 - 1];
            }

            cols[newValue] = _movedCol;
          }
        }

        this._internalColumns = cols;
        this.reorder.emit({
          column: column,
          newValue: newValue,
          prevValue: prevValue
        });
      }
      /**
       * The header triggered a column sort event.
       */

    }, {
      key: "onColumnSort",
      value: function onColumnSort(event) {
        // clean selected rows
        if (this.selectAllRowsOnPage) {
          this.selected = [];
          this.select.emit({
            selected: this.selected
          });
        }

        this.sorts = event.sorts; // this could be optimized better since it will resort
        // the rows again on the 'push' detection...

        if (this.externalSorting === false) {
          // don't use normal setter so we don't resort
          this.sortInternalRows();
        } // auto group by parent on new update


        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation)); // Always go to first page when sorting to see the newly sorted data

        this.offset = 0;
        this.bodyComponent.updateOffsetY(this.offset);
        this.sort.emit(event);
      }
      /**
       * Toggle all row selection
       */

    }, {
      key: "onHeaderSelect",
      value: function onHeaderSelect(event) {
        if (this.bodyComponent && this.selectAllRowsOnPage) {
          // before we splice, chk if we currently have all selected
          var first = this.bodyComponent.indexes.first;
          var last = this.bodyComponent.indexes.last;
          var allSelected = this.selected.length === last - first; // remove all existing either way

          this.selected = []; // do the opposite here

          if (!allSelected) {
            var _this$selected;

            (_this$selected = this.selected).push.apply(_this$selected, Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._internalRows.slice(first, last)));
          }
        } else {
          // before we splice, chk if we currently have all selected
          var _allSelected = this.selected.length === this.rows.length; // remove all existing either way


          this.selected = []; // do the opposite here

          if (!_allSelected) {
            var _this$selected2;

            (_this$selected2 = this.selected).push.apply(_this$selected2, Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.rows));
          }
        }

        this.select.emit({
          selected: this.selected
        });
      }
      /**
       * A row was selected from body
       */

    }, {
      key: "onBodySelect",
      value: function onBodySelect(event) {
        this.select.emit(event);
      }
      /**
       * A row was expanded or collapsed for tree
       */

    }, {
      key: "onTreeAction",
      value: function onTreeAction(event) {
        var _this21 = this;

        var row = event.row; // TODO: For duplicated items this will not work

        var rowIndex = this._rows.findIndex(function (r) {
          return r[_this21.treeToRelation] === event.row[_this21.treeToRelation];
        });

        this.treeAction.emit({
          row: row,
          rowIndex: rowIndex
        });
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._subscriptions.forEach(function (subscription) {
          return subscription.unsubscribe();
        });
      }
      /**
       * listen for changes to input bindings of all DataTableColumnDirective and
       * trigger the columnTemplates.changes observable to emit
       */

    }, {
      key: "listenForColumnInputChanges",
      value: function listenForColumnInputChanges() {
        var _this22 = this;

        this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(function () {
          if (_this22.columnTemplates) {
            _this22.columnTemplates.notifyOnChanges();
          }
        }));
      }
    }, {
      key: "sortInternalRows",
      value: function sortInternalRows() {
        this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
      }
    }, {
      key: "rows",
      set: function set(val) {
        this._rows = val;

        if (val) {
          this._internalRows = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(val);
        } // auto sort on new updates


        if (!this.externalSorting) {
          this.sortInternalRows();
        } // auto group by parent on new update


        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation)); // recalculate sizes/etc

        this.recalculate();

        if (this._rows && this._groupRowsBy) {
          // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
          this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
        }

        this.cd.markForCheck();
      }
      /**
       * Gets the rows.
       */
      ,
      get: function get() {
        return this._rows;
      }
      /**
       * This attribute allows the user to set the name of the column to group the data with
       */

    }, {
      key: "groupRowsBy",
      set: function set(val) {
        if (val) {
          this._groupRowsBy = val;

          if (this._rows && this._groupRowsBy) {
            // cretes a new array with the data grouped
            this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
          }
        }
      },
      get: function get() {
        return this._groupRowsBy;
      }
      /**
       * Columns to be displayed.
       */

    }, {
      key: "columns",
      set: function set(val) {
        if (val) {
          this._internalColumns = Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(val);
          setColumnDefaults(this._internalColumns);
          this.recalculateColumns();
        }

        this._columns = val;
      }
      /**
       * Get the columns.
       */
      ,
      get: function get() {
        return this._columns;
      }
      /**
       * The page size to be shown.
       * Default value: `undefined`
       */

    }, {
      key: "limit",
      set: function set(val) {
        this._limit = val; // recalculate sizes/etc

        this.recalculate();
      }
      /**
       * Gets the limit.
       */
      ,
      get: function get() {
        return this._limit;
      }
      /**
       * The total count of all rows.
       * Default value: `0`
       */

    }, {
      key: "count",
      set: function set(val) {
        this._count = val; // recalculate sizes/etc

        this.recalculate();
      }
      /**
       * Gets the count.
       */
      ,
      get: function get() {
        return this._count;
      }
      /**
       * The current offset ( page - 1 ) shown.
       * Default value: `0`
       */

    }, {
      key: "offset",
      set: function set(val) {
        this._offset = val;
      },
      get: function get() {
        return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
      }
      /**
       * CSS class applied if the header height if fixed height.
       */

    }, {
      key: "isFixedHeader",
      get: function get() {
        var headerHeight = this.headerHeight;
        return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
      }
      /**
       * CSS class applied to the root element if
       * the row heights are fixed heights.
       */

    }, {
      key: "isFixedRow",
      get: function get() {
        return this.rowHeight !== 'auto';
      }
      /**
       * CSS class applied to root element if
       * vertical scrolling is enabled.
       */

    }, {
      key: "isVertScroll",
      get: function get() {
        return this.scrollbarV;
      }
      /**
       * CSS class applied to root element if
       * virtualization is enabled.
       */

    }, {
      key: "isVirtualized",
      get: function get() {
        return this.virtualization;
      }
      /**
       * CSS class applied to the root element
       * if the horziontal scrolling is enabled.
       */

    }, {
      key: "isHorScroll",
      get: function get() {
        return this.scrollbarH;
      }
      /**
       * CSS class applied to root element is selectable.
       */

    }, {
      key: "isSelectable",
      get: function get() {
        return this.selectionType !== undefined;
      }
      /**
       * CSS class applied to root is checkbox selection.
       */

    }, {
      key: "isCheckboxSelection",
      get: function get() {
        return this.selectionType === SelectionType.checkbox;
      }
      /**
       * CSS class applied to root if cell selection.
       */

    }, {
      key: "isCellSelection",
      get: function get() {
        return this.selectionType === SelectionType.cell;
      }
      /**
       * CSS class applied to root if single select.
       */

    }, {
      key: "isSingleSelection",
      get: function get() {
        return this.selectionType === SelectionType.single;
      }
      /**
       * CSS class added to root element if mulit select
       */

    }, {
      key: "isMultiSelection",
      get: function get() {
        return this.selectionType === SelectionType.multi;
      }
      /**
       * CSS class added to root element if mulit click select
       */

    }, {
      key: "isMultiClickSelection",
      get: function get() {
        return this.selectionType === SelectionType.multiClick;
      }
      /**
       * Column templates gathered from `ContentChildren`
       * if described in your markup.
       */

    }, {
      key: "columnTemplates",
      set: function set(val) {
        this._columnTemplates = val;
        this.translateColumns(val);
      }
      /**
       * Returns the column templates.
       */
      ,
      get: function get() {
        return this._columnTemplates;
      }
      /**
       * Returns if all rows are selected.
       */

    }, {
      key: "allRowsSelected",
      get: function get() {
        var allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;

        if (this.bodyComponent && this.selectAllRowsOnPage) {
          var indexes = this.bodyComponent.indexes;
          var rowsOnPage = indexes.last - indexes.first;
          allRowsSelected = this.selected.length === rowsOnPage;
        }

        return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
      }
    }]);

    return DatatableComponent;
  }();

  DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
    return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"]('configuration', 8));
  };

  DatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DatatableComponent,
    selectors: [["ngx-datatable"]],
    contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, DatatableFooterDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, false);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
      }
    },
    viewQuery: function DatatableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](DataTableBodyComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](DataTableHeaderComponent, true);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
      }
    },
    hostAttrs: [1, "ngx-datatable"],
    hostVars: 22,
    hostBindings: function DatatableComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() {
          return ctx.onWindowResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
      }
    },
    inputs: {
      selected: "selected",
      scrollbarV: "scrollbarV",
      scrollbarH: "scrollbarH",
      rowHeight: "rowHeight",
      columnMode: "columnMode",
      headerHeight: "headerHeight",
      footerHeight: "footerHeight",
      externalPaging: "externalPaging",
      externalSorting: "externalSorting",
      loadingIndicator: "loadingIndicator",
      reorderable: "reorderable",
      swapColumns: "swapColumns",
      sortType: "sortType",
      sorts: "sorts",
      cssClasses: "cssClasses",
      messages: "messages",
      groupExpansionDefault: "groupExpansionDefault",
      selectAllRowsOnPage: "selectAllRowsOnPage",
      virtualization: "virtualization",
      summaryRow: "summaryRow",
      summaryHeight: "summaryHeight",
      summaryPosition: "summaryPosition",
      rowIdentity: "rowIdentity",
      rows: "rows",
      groupedRows: "groupedRows",
      groupRowsBy: "groupRowsBy",
      columns: "columns",
      limit: "limit",
      count: "count",
      offset: "offset",
      targetMarkerTemplate: "targetMarkerTemplate",
      selectionType: "selectionType",
      rowClass: "rowClass",
      selectCheck: "selectCheck",
      displayCheck: "displayCheck",
      trackByProp: "trackByProp",
      treeFromRelation: "treeFromRelation",
      treeToRelation: "treeToRelation"
    },
    outputs: {
      scroll: "scroll",
      activate: "activate",
      select: "select",
      sort: "sort",
      page: "page",
      reorder: "reorder",
      resize: "resize",
      tableContextmenu: "tableContextmenu",
      treeAction: "treeAction"
    },
    decls: 5,
    vars: 34,
    consts: [["visibilityObserver", "", 3, "visible"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], [3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]],
    template: function DatatableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() {
          return ctx.recalculate();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 17, "datatable-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "datatable-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) {
          return ctx.onBodyPage($event);
        })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) {
          return ctx.activate.emit($event);
        })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) {
          return ctx.onRowContextmenu($event);
        })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) {
          return ctx.onBodySelect($event);
        })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) {
          return ctx.onBodyScroll($event);
        })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) {
          return ctx.onTreeAction($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.headerHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.footerHeight);
      }
    },
    directives: function directives() {
      return [VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], DataTableBodyComponent, DataTableHeaderComponent, DataTableFooterComponent];
    },
    pipes: function pipes() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]];
    },
    styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"],
    encapsulation: 2,
    changeDetection: 0
  });

  Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([throttleable(5)], DatatableComponent.prototype, "onWindowResize", null);

  return DatatableComponent;
}();

var DataTableHeaderCellComponent = /*@__PURE__*/function () {
  var DataTableHeaderCellComponent = /*#__PURE__*/function () {
    function DataTableHeaderCellComponent(cd) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableHeaderCellComponent);

      this.cd = cd;
      this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"](false);
      this.sortFn = this.onSort.bind(this);
      this.selectFn = this.select.emit.bind(this.select);
      this.cellContext = {
        column: this.column,
        sortDir: this.sortDir,
        sortFn: this.sortFn,
        allRowsSelected: this.allRowsSelected,
        selectFn: this.selectFn
      };
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableHeaderCellComponent, [{
      key: "onContextmenu",
      value: function onContextmenu($event) {
        this.columnContextmenu.emit({
          event: $event,
          column: this.column
        });
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        this.sortClass = this.calcSortClass(this.sortDir);
      }
    }, {
      key: "calcSortDir",
      value: function calcSortDir(sorts) {
        var _this23 = this;

        if (sorts && this.column) {
          var sort = sorts.find(function (s) {
            return s.prop === _this23.column.prop;
          });
          if (sort) return sort.dir;
        }
      }
    }, {
      key: "onSort",
      value: function onSort() {
        if (!this.column.sortable) return;
        var newValue = nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
          column: this.column,
          prevValue: this.sortDir,
          newValue: newValue
        });
      }
    }, {
      key: "calcSortClass",
      value: function calcSortClass(sortDir) {
        if (!this.cellContext.column.sortable) return;

        if (sortDir === SortDirection.asc) {
          return "sort-btn sort-asc ".concat(this.sortAscendingIcon);
        } else if (sortDir === SortDirection.desc) {
          return "sort-btn sort-desc ".concat(this.sortDescendingIcon);
        } else {
          return "sort-btn ".concat(this.sortUnsetIcon);
        }
      }
    }, {
      key: "allRowsSelected",
      set: function set(value) {
        this._allRowsSelected = value;
        this.cellContext.allRowsSelected = value;
      },
      get: function get() {
        return this._allRowsSelected;
      }
    }, {
      key: "column",
      set: function set(column) {
        this._column = column;
        this.cellContext.column = column;
        this.cd.markForCheck();
      },
      get: function get() {
        return this._column;
      }
    }, {
      key: "sorts",
      set: function set(val) {
        this._sorts = val;
        this.sortDir = this.calcSortDir(val);
        this.cellContext.sortDir = this.sortDir;
        this.sortClass = this.calcSortClass(this.sortDir);
        this.cd.markForCheck();
      },
      get: function get() {
        return this._sorts;
      }
    }, {
      key: "columnCssClasses",
      get: function get() {
        var cls = 'datatable-header-cell';
        if (this.column.sortable) cls += ' sortable';
        if (this.column.resizeable) cls += ' resizeable';

        if (this.column.headerClass) {
          if (typeof this.column.headerClass === 'string') {
            cls += ' ' + this.column.headerClass;
          } else if (typeof this.column.headerClass === 'function') {
            var res = this.column.headerClass({
              column: this.column
            });

            if (typeof res === 'string') {
              cls += res;
            } else if (typeof res === 'object') {
              var keys = Object.keys(res);

              for (var _i4 = 0, _keys = keys; _i4 < _keys.length; _i4++) {
                var k = _keys[_i4];
                if (res[k] === true) cls += " ".concat(k);
              }
            }
          }
        }

        var sortDir = this.sortDir;

        if (sortDir) {
          cls += " sort-active sort-".concat(sortDir);
        }

        return cls;
      }
    }, {
      key: "name",
      get: function get() {
        // guaranteed to have a value by setColumnDefaults() in column-helper.ts
        return this.column.headerTemplate === undefined ? this.column.name : undefined;
      }
    }, {
      key: "minWidth",
      get: function get() {
        return this.column.minWidth;
      }
    }, {
      key: "maxWidth",
      get: function get() {
        return this.column.maxWidth;
      }
    }, {
      key: "width",
      get: function get() {
        return this.column.width;
      }
    }, {
      key: "isCheckboxable",
      get: function get() {
        return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
      }
    }]);

    return DataTableHeaderCellComponent;
  }();

  DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) {
    return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]));
  };

  DataTableHeaderCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DataTableHeaderCellComponent,
    selectors: [["datatable-header-cell"]],
    hostAttrs: [1, "datatable-header-cell"],
    hostVars: 11,
    hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) {
          return ctx.onContextmenu($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.columnCssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px")("height", ctx.headerHeight, "px");
      }
    },
    inputs: {
      allRowsSelected: "allRowsSelected",
      column: "column",
      sorts: "sorts",
      sortType: "sortType",
      sortAscendingIcon: "sortAscendingIcon",
      sortDescendingIcon: "sortDescendingIcon",
      sortUnsetIcon: "sortUnsetIcon",
      isTarget: "isTarget",
      targetMarkerTemplate: "targetMarkerTemplate",
      targetMarkerContext: "targetMarkerContext",
      selectionType: "selectionType",
      headerHeight: "headerHeight"
    },
    outputs: {
      sort: "sort",
      select: "select",
      columnContextmenu: "columnContextmenu"
    },
    decls: 6,
    vars: 6,
    consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]],
    template: function DataTableHeaderCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() {
          return ctx.onSort();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isTarget);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.sortClass);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"]],
    encapsulation: 2,
    changeDetection: 0
  });
  return DataTableHeaderCellComponent;
}();

var DataTableFooterComponent = /*@__PURE__*/function () {
  var DataTableFooterComponent = /*#__PURE__*/function () {
    function DataTableFooterComponent() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableFooterComponent);

      this.selectedCount = 0;
      this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableFooterComponent, [{
      key: "isVisible",
      get: function get() {
        return this.rowCount / this.pageSize > 1;
      }
    }, {
      key: "curPage",
      get: function get() {
        return this.offset + 1;
      }
    }]);

    return DataTableFooterComponent;
  }();

  DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) {
    return new (t || DataTableFooterComponent)();
  };

  DataTableFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DataTableFooterComponent,
    selectors: [["datatable-footer"]],
    hostAttrs: [1, "datatable-footer"],
    inputs: {
      selectedCount: "selectedCount",
      footerHeight: "footerHeight",
      rowCount: "rowCount",
      pageSize: "pageSize",
      offset: "offset",
      pagerLeftArrowIcon: "pagerLeftArrowIcon",
      pagerRightArrowIcon: "pagerRightArrowIcon",
      pagerPreviousIcon: "pagerPreviousIcon",
      pagerNextIcon: "pagerNextIcon",
      totalMessage: "totalMessage",
      footerTemplate: "footerTemplate",
      selectedMessage: "selectedMessage"
    },
    outputs: {
      page: "page"
    },
    decls: 4,
    vars: 8,
    consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]],
    template: function DataTableFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c2, ctx.selectedMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
      }
    },
    directives: function directives() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], DataTablePagerComponent];
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return DataTableFooterComponent;
}();

var DataTablePagerComponent = /*@__PURE__*/function () {
  var DataTablePagerComponent = /*#__PURE__*/function () {
    function DataTablePagerComponent() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTablePagerComponent);

      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this._count = 0;
      this._page = 1;
      this._size = 0;
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTablePagerComponent, [{
      key: "canPrevious",
      value: function canPrevious() {
        return this.page > 1;
      }
    }, {
      key: "canNext",
      value: function canNext() {
        return this.page < this.totalPages;
      }
    }, {
      key: "prevPage",
      value: function prevPage() {
        this.selectPage(this.page - 1);
      }
    }, {
      key: "nextPage",
      value: function nextPage() {
        this.selectPage(this.page + 1);
      }
    }, {
      key: "selectPage",
      value: function selectPage(page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
          this.page = page;
          this.change.emit({
            page: page
          });
        }
      }
    }, {
      key: "calcPages",
      value: function calcPages(page) {
        var pages = [];
        var startPage = 1;
        var endPage = this.totalPages;
        var maxSize = 5;
        var isMaxSized = maxSize < this.totalPages;
        page = page || this.page;

        if (isMaxSized) {
          startPage = page - Math.floor(maxSize / 2);
          endPage = page + Math.floor(maxSize / 2);

          if (startPage < 1) {
            startPage = 1;
            endPage = Math.min(startPage + maxSize - 1, this.totalPages);
          } else if (endPage > this.totalPages) {
            startPage = Math.max(this.totalPages - maxSize + 1, 1);
            endPage = this.totalPages;
          }
        }

        for (var num = startPage; num <= endPage; num++) {
          pages.push({
            number: num,
            text: num
          });
        }

        return pages;
      }
    }, {
      key: "size",
      set: function set(val) {
        this._size = val;
        this.pages = this.calcPages();
      },
      get: function get() {
        return this._size;
      }
    }, {
      key: "count",
      set: function set(val) {
        this._count = val;
        this.pages = this.calcPages();
      },
      get: function get() {
        return this._count;
      }
    }, {
      key: "page",
      set: function set(val) {
        this._page = val;
        this.pages = this.calcPages();
      },
      get: function get() {
        return this._page;
      }
    }, {
      key: "totalPages",
      get: function get() {
        var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
        return Math.max(count || 0, 1);
      }
    }]);

    return DataTablePagerComponent;
  }();

  DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) {
    return new (t || DataTablePagerComponent)();
  };

  DataTablePagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DataTablePagerComponent,
    selectors: [["datatable-pager"]],
    hostAttrs: [1, "datatable-pager"],
    inputs: {
      size: "size",
      count: "count",
      page: "page",
      pagerLeftArrowIcon: "pagerLeftArrowIcon",
      pagerRightArrowIcon: "pagerRightArrowIcon",
      pagerPreviousIcon: "pagerPreviousIcon",
      pagerNextIcon: "pagerNextIcon"
    },
    outputs: {
      change: "change"
    },
    decls: 14,
    vars: 21,
    consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]],
    template: function DataTablePagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() {
          return ctx.selectPage(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() {
          return ctx.prevPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() {
          return ctx.nextPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() {
          return ctx.selectPage(ctx.totalPages);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.pagerPreviousIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", !ctx.canNext());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.pagerRightArrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("disabled", !ctx.canNext());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.pagerNextIcon);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
    encapsulation: 2,
    changeDetection: 0
  });
  return DataTablePagerComponent;
}();

var ProgressBarComponent = /*@__PURE__*/function () {
  var ProgressBarComponent = function ProgressBarComponent() {
    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ProgressBarComponent);
  };

  ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
    return new (t || ProgressBarComponent)();
  };

  ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ProgressBarComponent,
    selectors: [["datatable-progress"]],
    decls: 3,
    vars: 0,
    consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]],
    template: function ProgressBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return ProgressBarComponent;
}();

var Keys = /*@__PURE__*/function (Keys) {
  Keys[Keys["up"] = 38] = "up";
  Keys[Keys["down"] = 40] = "down";
  Keys[Keys["return"] = 13] = "return";
  Keys[Keys["escape"] = 27] = "escape";
  Keys[Keys["left"] = 37] = "left";
  Keys[Keys["right"] = 39] = "right";
  return Keys;
}({});

var DataTableBodyRowComponent = /*@__PURE__*/function () {
  var DataTableBodyRowComponent = /*#__PURE__*/function () {
    function DataTableBodyRowComponent(differs, scrollbarHelper, cd, element) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableBodyRowComponent);

      this.differs = differs;
      this.scrollbarHelper = scrollbarHelper;
      this.cd = cd;
      this.treeStatus = 'collapsed';
      this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this._groupStyles = {
        left: {},
        center: {},
        right: {}
      };
      this._element = element.nativeElement;
      this._rowDiffer = differs.find({}).create();
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableBodyRowComponent, [{
      key: "ngDoCheck",
      value: function ngDoCheck() {
        if (this._rowDiffer.diff(this.row)) {
          this.cd.markForCheck();
        }
      }
    }, {
      key: "trackByGroups",
      value: function trackByGroups(index, colGroup) {
        return colGroup.type;
      }
    }, {
      key: "columnTrackingFn",
      value: function columnTrackingFn(index, column) {
        return column.$$id;
      }
    }, {
      key: "buildStylesByGroup",
      value: function buildStylesByGroup() {
        this._groupStyles.left = this.calcStylesByGroup('left');
        this._groupStyles.center = this.calcStylesByGroup('center');
        this._groupStyles.right = this.calcStylesByGroup('right');
        this.cd.markForCheck();
      }
    }, {
      key: "calcStylesByGroup",
      value: function calcStylesByGroup(group) {
        var widths = this._columnGroupWidths;
        var offsetX = this.offsetX;
        var styles = {
          width: "".concat(widths[group], "px")
        };

        if (group === 'left') {
          translateXY(styles, offsetX, 0);
        } else if (group === 'right') {
          var bodyWidth = parseInt(this.innerWidth + '', 0);
          var totalDiff = widths.total - bodyWidth;
          var offsetDiff = totalDiff - offsetX;
          var offset = (offsetDiff + this.scrollbarHelper.width) * -1;
          translateXY(styles, offset, 0);
        }

        return styles;
      }
    }, {
      key: "onActivate",
      value: function onActivate(event, index) {
        event.cellIndex = index;
        event.rowElement = this._element;
        this.activate.emit(event);
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        var keyCode = event.keyCode;
        var isTargetRow = event.target === this._element;
        var isAction = keyCode === Keys.return || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;

        if (isAction && isTargetRow) {
          event.preventDefault();
          event.stopPropagation();
          this.activate.emit({
            type: 'keydown',
            event: event,
            row: this.row,
            rowElement: this._element
          });
        }
      }
    }, {
      key: "onMouseenter",
      value: function onMouseenter(event) {
        this.activate.emit({
          type: 'mouseenter',
          event: event,
          row: this.row,
          rowElement: this._element
        });
      }
    }, {
      key: "recalculateColumns",
      value: function recalculateColumns() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.columns;
        this._columns = val;
        var colsByPin = columnsByPin(this._columns);
        this._columnsByPin = columnsByPinArr(this._columns);
        this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
      }
    }, {
      key: "onTreeAction",
      value: function onTreeAction() {
        this.treeAction.emit();
      }
    }, {
      key: "columns",
      set: function set(val) {
        this._columns = val;
        this.recalculateColumns(val);
        this.buildStylesByGroup();
      },
      get: function get() {
        return this._columns;
      }
    }, {
      key: "innerWidth",
      set: function set(val) {
        if (this._columns) {
          var colByPin = columnsByPin(this._columns);
          this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        }

        this._innerWidth = val;
        this.recalculateColumns();
        this.buildStylesByGroup();
      },
      get: function get() {
        return this._innerWidth;
      }
    }, {
      key: "offsetX",
      set: function set(val) {
        this._offsetX = val;
        this.buildStylesByGroup();
      },
      get: function get() {
        return this._offsetX;
      }
    }, {
      key: "cssClass",
      get: function get() {
        var cls = 'datatable-body-row';

        if (this.isSelected) {
          cls += ' active';
        }

        if (this.rowIndex % 2 !== 0) {
          cls += ' datatable-row-odd';
        }

        if (this.rowIndex % 2 === 0) {
          cls += ' datatable-row-even';
        }

        if (this.rowClass) {
          var res = this.rowClass(this.row);

          if (typeof res === 'string') {
            cls += " ".concat(res);
          } else if (typeof res === 'object') {
            var keys = Object.keys(res);

            for (var _i5 = 0, _keys2 = keys; _i5 < _keys2.length; _i5++) {
              var k = _keys2[_i5];

              if (res[k] === true) {
                cls += " ".concat(k);
              }
            }
          }
        }

        return cls;
      }
    }, {
      key: "columnsTotalWidths",
      get: function get() {
        return this._columnGroupWidths.total;
      }
    }]);

    return DataTableBodyRowComponent;
  }();

  DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) {
    return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]));
  };

  DataTableBodyRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DataTableBodyRowComponent,
    selectors: [["datatable-body-row"]],
    hostVars: 6,
    hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) {
          return ctx.onMouseenter($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.cssClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx.columnsTotalWidths, "px")("height", ctx.rowHeight, "px");
      }
    },
    inputs: {
      treeStatus: "treeStatus",
      columns: "columns",
      innerWidth: "innerWidth",
      offsetX: "offsetX",
      expanded: "expanded",
      rowClass: "rowClass",
      row: "row",
      group: "group",
      isSelected: "isSelected",
      rowIndex: "rowIndex",
      displayCheck: "displayCheck",
      rowHeight: "rowHeight"
    },
    outputs: {
      activate: "activate",
      treeAction: "treeAction"
    },
    decls: 1,
    vars: 2,
    consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]],
    template: function DataTableBodyRowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
      }
    },
    directives: function directives() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], DataTableBodyCellComponent];
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return DataTableBodyRowComponent;
}();

var DataTableRowWrapperComponent = /*@__PURE__*/function () {
  var DataTableRowWrapperComponent = /*#__PURE__*/function () {
    function DataTableRowWrapperComponent(cd, differs) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableRowWrapperComponent);

      this.cd = cd;
      this.differs = differs;
      this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"](false);
      this.groupContext = {
        group: this.row,
        expanded: this.expanded,
        rowIndex: this.rowIndex
      };
      this.rowContext = {
        row: this.row,
        expanded: this.expanded,
        rowIndex: this.rowIndex
      };
      this._expanded = false;
      this.rowDiffer = differs.find({}).create();
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableRowWrapperComponent, [{
      key: "ngDoCheck",
      value: function ngDoCheck() {
        if (this.rowDiffer.diff(this.row)) {
          this.rowContext.row = this.row;
          this.groupContext.group = this.row;
          this.cd.markForCheck();
        }
      }
    }, {
      key: "onContextmenu",
      value: function onContextmenu($event) {
        this.rowContextmenu.emit({
          event: $event,
          row: this.row
        });
      }
    }, {
      key: "getGroupHeaderStyle",
      value: function getGroupHeaderStyle() {
        var styles = {};
        styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
        styles['backface-visibility'] = 'hidden';
        styles['width'] = this.innerWidth;
        return styles;
      }
    }, {
      key: "rowIndex",
      set: function set(val) {
        this._rowIndex = val;
        this.rowContext.rowIndex = val;
        this.groupContext.rowIndex = val;
        this.cd.markForCheck();
      },
      get: function get() {
        return this._rowIndex;
      }
    }, {
      key: "expanded",
      set: function set(val) {
        this._expanded = val;
        this.groupContext.expanded = val;
        this.rowContext.expanded = val;
        this.cd.markForCheck();
      },
      get: function get() {
        return this._expanded;
      }
    }]);

    return DataTableRowWrapperComponent;
  }();

  DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) {
    return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["KeyValueDiffers"]));
  };

  DataTableRowWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DataTableRowWrapperComponent,
    selectors: [["datatable-row-wrapper"]],
    hostAttrs: [1, "datatable-row-wrapper"],
    hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) {
          return ctx.onContextmenu($event);
        });
      }
    },
    inputs: {
      rowIndex: "rowIndex",
      expanded: "expanded",
      innerWidth: "innerWidth",
      rowDetail: "rowDetail",
      groupHeader: "groupHeader",
      offsetX: "offsetX",
      detailRowHeight: "detailRowHeight",
      row: "row",
      groupedRows: "groupedRows"
    },
    outputs: {
      rowContextmenu: "rowContextmenu"
    },
    ngContentSelectors: _c0,
    decls: 3,
    vars: 3,
    consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]],
    template: function DataTableRowWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableRowWrapperComponent_ng_content_1_Template, 1, 0, "ng-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"]],
    encapsulation: 2,
    changeDetection: 0
  });
  return DataTableRowWrapperComponent;
}();

var DataTableBodyCellComponent = /*@__PURE__*/function () {
  var DataTableBodyCellComponent = /*#__PURE__*/function () {
    function DataTableBodyCellComponent(element, cd) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableBodyCellComponent);

      this.cd = cd;
      this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.isFocused = false;
      this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
      this.activateFn = this.activate.emit.bind(this.activate);
      this.cellContext = {
        onCheckboxChangeFn: this.onCheckboxChangeFn,
        activateFn: this.activateFn,
        row: this.row,
        group: this.group,
        value: this.value,
        column: this.column,
        rowHeight: this.rowHeight,
        isSelected: this.isSelected,
        rowIndex: this.rowIndex,
        treeStatus: this.treeStatus,
        onTreeAction: this.onTreeAction.bind(this)
      };
      this._element = element.nativeElement;
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableBodyCellComponent, [{
      key: "ngDoCheck",
      value: function ngDoCheck() {
        this.checkValueUpdates();
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        if (this.cellTemplate) {
          this.cellTemplate.clear();
        }
      }
    }, {
      key: "checkValueUpdates",
      value: function checkValueUpdates() {
        var value = '';

        if (!this.row || !this.column) {
          value = '';
        } else {
          var val = this.column.$$valueGetter(this.row, this.column.prop);
          var userPipe = this.column.pipe;

          if (userPipe) {
            value = userPipe.transform(val);
          } else if (value !== undefined) {
            value = val;
          }
        }

        if (this.value !== value) {
          this.value = value;
          this.cellContext.value = value;
          this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
          this.cd.markForCheck();
        }
      }
    }, {
      key: "onFocus",
      value: function onFocus() {
        this.isFocused = true;
      }
    }, {
      key: "onBlur",
      value: function onBlur() {
        this.isFocused = false;
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        this.activate.emit({
          type: 'click',
          event: event,
          row: this.row,
          group: this.group,
          rowHeight: this.rowHeight,
          column: this.column,
          value: this.value,
          cellElement: this._element
        });
      }
    }, {
      key: "onDblClick",
      value: function onDblClick(event) {
        this.activate.emit({
          type: 'dblclick',
          event: event,
          row: this.row,
          group: this.group,
          rowHeight: this.rowHeight,
          column: this.column,
          value: this.value,
          cellElement: this._element
        });
      }
    }, {
      key: "onKeyDown",
      value: function onKeyDown(event) {
        var keyCode = event.keyCode;
        var isTargetCell = event.target === this._element;
        var isAction = keyCode === Keys.return || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;

        if (isAction && isTargetCell) {
          event.preventDefault();
          event.stopPropagation();
          this.activate.emit({
            type: 'keydown',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
          });
        }
      }
    }, {
      key: "onCheckboxChange",
      value: function onCheckboxChange(event) {
        this.activate.emit({
          type: 'checkbox',
          event: event,
          row: this.row,
          group: this.group,
          rowHeight: this.rowHeight,
          column: this.column,
          value: this.value,
          cellElement: this._element,
          treeStatus: 'collapsed'
        });
      }
    }, {
      key: "calcSortDir",
      value: function calcSortDir(sorts) {
        var _this24 = this;

        if (!sorts) {
          return;
        }

        var sort = sorts.find(function (s) {
          return s.prop === _this24.column.prop;
        });

        if (sort) {
          return sort.dir;
        }
      }
    }, {
      key: "stripHtml",
      value: function stripHtml(html) {
        if (!html.replace) {
          return html;
        }

        return html.replace(/<\/?[^>]+(>|$)/g, '');
      }
    }, {
      key: "onTreeAction",
      value: function onTreeAction() {
        this.treeAction.emit(this.row);
      }
    }, {
      key: "calcLeftMargin",
      value: function calcLeftMargin(column, row) {
        var levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
      }
    }, {
      key: "group",
      set: function set(group) {
        this._group = group;
        this.cellContext.group = group;
        this.checkValueUpdates();
        this.cd.markForCheck();
      },
      get: function get() {
        return this._group;
      }
    }, {
      key: "rowHeight",
      set: function set(val) {
        this._rowHeight = val;
        this.cellContext.rowHeight = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
      },
      get: function get() {
        return this._rowHeight;
      }
    }, {
      key: "isSelected",
      set: function set(val) {
        this._isSelected = val;
        this.cellContext.isSelected = val;
        this.cd.markForCheck();
      },
      get: function get() {
        return this._isSelected;
      }
    }, {
      key: "expanded",
      set: function set(val) {
        this._expanded = val;
        this.cellContext.expanded = val;
        this.cd.markForCheck();
      },
      get: function get() {
        return this._expanded;
      }
    }, {
      key: "rowIndex",
      set: function set(val) {
        this._rowIndex = val;
        this.cellContext.rowIndex = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
      },
      get: function get() {
        return this._rowIndex;
      }
    }, {
      key: "column",
      set: function set(column) {
        this._column = column;
        this.cellContext.column = column;
        this.checkValueUpdates();
        this.cd.markForCheck();
      },
      get: function get() {
        return this._column;
      }
    }, {
      key: "row",
      set: function set(row) {
        this._row = row;
        this.cellContext.row = row;
        this.checkValueUpdates();
        this.cd.markForCheck();
      },
      get: function get() {
        return this._row;
      }
    }, {
      key: "sorts",
      set: function set(val) {
        this._sorts = val;
        this.calcSortDir = this.calcSortDir(val);
      },
      get: function get() {
        return this._sorts;
      }
    }, {
      key: "treeStatus",
      set: function set(status) {
        if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
          this._treeStatus = 'collapsed';
        } else {
          this._treeStatus = status;
        }

        this.cellContext.treeStatus = this._treeStatus;
        this.checkValueUpdates();
        this.cd.markForCheck();
      },
      get: function get() {
        return this._treeStatus;
      }
    }, {
      key: "columnCssClasses",
      get: function get() {
        var cls = 'datatable-body-cell';

        if (this.column.cellClass) {
          if (typeof this.column.cellClass === 'string') {
            cls += ' ' + this.column.cellClass;
          } else if (typeof this.column.cellClass === 'function') {
            var res = this.column.cellClass({
              row: this.row,
              group: this.group,
              column: this.column,
              value: this.value,
              rowHeight: this.rowHeight
            });

            if (typeof res === 'string') {
              cls += ' ' + res;
            } else if (typeof res === 'object') {
              var keys = Object.keys(res);

              for (var _i6 = 0, _keys3 = keys; _i6 < _keys3.length; _i6++) {
                var k = _keys3[_i6];

                if (res[k] === true) {
                  cls += " ".concat(k);
                }
              }
            }
          }
        }

        if (!this.sortDir) {
          cls += ' sort-active';
        }

        if (this.isFocused) {
          cls += ' active';
        }

        if (this.sortDir === SortDirection.asc) {
          cls += ' sort-asc';
        }

        if (this.sortDir === SortDirection.desc) {
          cls += ' sort-desc';
        }

        return cls;
      }
    }, {
      key: "width",
      get: function get() {
        return this.column.width;
      }
    }, {
      key: "minWidth",
      get: function get() {
        return this.column.minWidth;
      }
    }, {
      key: "maxWidth",
      get: function get() {
        return this.column.maxWidth;
      }
    }, {
      key: "height",
      get: function get() {
        var height = this.rowHeight;

        if (isNaN(height)) {
          return height;
        }

        return height + 'px';
      }
    }]);

    return DataTableBodyCellComponent;
  }();

  DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) {
    return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]));
  };

  DataTableBodyCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DataTableBodyCellComponent,
    selectors: [["datatable-body-cell"]],
    viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
      }
    },
    hostVars: 10,
    hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() {
          return ctx.onBlur();
        })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) {
          return ctx.onDblClick($event);
        })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.columnCssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
      }
    },
    inputs: {
      group: "group",
      rowHeight: "rowHeight",
      isSelected: "isSelected",
      expanded: "expanded",
      rowIndex: "rowIndex",
      column: "column",
      row: "row",
      sorts: "sorts",
      treeStatus: "treeStatus",
      displayCheck: "displayCheck"
    },
    outputs: {
      activate: "activate",
      treeAction: "treeAction"
    },
    decls: 5,
    vars: 6,
    consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]],
    template: function DataTableBodyCellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, undefined, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"]],
    encapsulation: 2,
    changeDetection: 0
  });
  return DataTableBodyCellComponent;
}();

function selectRows(selected, row, comparefn) {
  var selectedIndex = comparefn(row, selected);

  if (selectedIndex > -1) {
    selected.splice(selectedIndex, 1);
  } else {
    selected.push(row);
  }

  return selected;
}

function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
  var reverse = index < prevIndex;

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var greater = i >= prevIndex && i <= index;
    var lesser = i <= prevIndex && i >= index;
    var range = {
      start: 0,
      end: 0
    };

    if (reverse) {
      range = {
        start: index,
        end: prevIndex
      };
    } else {
      range = {
        start: prevIndex,
        end: index + 1
      };
    }

    if (reverse && lesser || !reverse && greater) {
      // if in the positive range to be added to `selected`, and
      // not already in the selected array, add it
      if (i >= range.start && i <= range.end) {
        selected.push(row);
      }
    }
  }

  return selected;
}

var DataTableSelectionComponent = /*@__PURE__*/function () {
  var DataTableSelectionComponent = /*#__PURE__*/function () {
    function DataTableSelectionComponent() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableSelectionComponent);

      this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableSelectionComponent, [{
      key: "selectRow",
      value: function selectRow(event, index, row) {
        var _this$selected3;

        if (!this.selectEnabled) return;
        var chkbox = this.selectionType === SelectionType.checkbox;
        var multi = this.selectionType === SelectionType.multi;
        var multiClick = this.selectionType === SelectionType.multiClick;
        var selected = [];

        if (multi || chkbox || multiClick) {
          if (event.shiftKey) {
            selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
          } else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
            selected = selectRows(Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.selected), row, this.getRowSelectedIdx.bind(this));
          } else {
            selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
          }
        } else {
          selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
        }

        if (typeof this.selectCheck === 'function') {
          selected = selected.filter(this.selectCheck.bind(this));
        }

        this.selected.splice(0, this.selected.length);

        (_this$selected3 = this.selected).push.apply(_this$selected3, Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selected));

        this.prevIndex = index;
        this.select.emit({
          selected: selected
        });
      }
    }, {
      key: "onActivate",
      value: function onActivate(model, index) {
        var type = model.type,
            event = model.event,
            row = model.row;
        var chkbox = this.selectionType === SelectionType.checkbox;
        var select = !chkbox && (type === 'click' || type === 'dblclick') || chkbox && type === 'checkbox';

        if (select) {
          this.selectRow(event, index, row);
        } else if (type === 'keydown') {
          if (event.keyCode === Keys.return) {
            this.selectRow(event, index, row);
          } else {
            this.onKeyboardFocus(model);
          }
        }

        this.activate.emit(model);
      }
    }, {
      key: "onKeyboardFocus",
      value: function onKeyboardFocus(model) {
        var keyCode = model.event.keyCode;
        var shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;

        if (shouldFocus) {
          var isCellSelection = this.selectionType === SelectionType.cell;

          if (!model.cellElement || !isCellSelection) {
            this.focusRow(model.rowElement, keyCode);
          } else if (isCellSelection) {
            this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
          }
        }
      }
    }, {
      key: "focusRow",
      value: function focusRow(rowElement, keyCode) {
        var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement) nextRowElement.focus();
      }
    }, {
      key: "getPrevNextRow",
      value: function getPrevNextRow(rowElement, keyCode) {
        var parentElement = rowElement.parentElement;

        if (parentElement) {
          var focusElement;

          if (keyCode === Keys.up) {
            focusElement = parentElement.previousElementSibling;
          } else if (keyCode === Keys.down) {
            focusElement = parentElement.nextElementSibling;
          }

          if (focusElement && focusElement.children.length) {
            return focusElement.children[0];
          }
        }
      }
    }, {
      key: "focusCell",
      value: function focusCell(cellElement, rowElement, keyCode, cellIndex) {
        var nextCellElement;

        if (keyCode === Keys.left) {
          nextCellElement = cellElement.previousElementSibling;
        } else if (keyCode === Keys.right) {
          nextCellElement = cellElement.nextElementSibling;
        } else if (keyCode === Keys.up || keyCode === Keys.down) {
          var nextRowElement = this.getPrevNextRow(rowElement, keyCode);

          if (nextRowElement) {
            var children = nextRowElement.getElementsByClassName('datatable-body-cell');
            if (children.length) nextCellElement = children[cellIndex];
          }
        }

        if (nextCellElement) nextCellElement.focus();
      }
    }, {
      key: "getRowSelected",
      value: function getRowSelected(row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
      }
    }, {
      key: "getRowSelectedIdx",
      value: function getRowSelectedIdx(row, selected) {
        var _this25 = this;

        if (!selected || !selected.length) return -1;
        var rowId = this.rowIdentity(row);
        return selected.findIndex(function (r) {
          var id = _this25.rowIdentity(r);

          return id === rowId;
        });
      }
    }]);

    return DataTableSelectionComponent;
  }();

  DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) {
    return new (t || DataTableSelectionComponent)();
  };

  DataTableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DataTableSelectionComponent,
    selectors: [["datatable-selection"]],
    inputs: {
      rows: "rows",
      selected: "selected",
      selectEnabled: "selectEnabled",
      selectionType: "selectionType",
      rowIdentity: "rowIdentity",
      selectCheck: "selectCheck"
    },
    outputs: {
      activate: "activate",
      select: "select"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function DataTableSelectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return DataTableSelectionComponent;
}();

function defaultSumFunc(cells) {
  var cellsWithValues = cells.filter(function (cell) {
    return !!cell;
  });

  if (!cellsWithValues.length) {
    return null;
  }

  if (cellsWithValues.some(function (cell) {
    return typeof cell !== 'number';
  })) {
    return null;
  }

  return cellsWithValues.reduce(function (res, cell) {
    return res + cell;
  });
}

function noopSumFunc(cells) {
  return null;
}

var DataTableSummaryRowComponent = /*@__PURE__*/function () {
  var DataTableSummaryRowComponent = /*#__PURE__*/function () {
    function DataTableSummaryRowComponent() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DataTableSummaryRowComponent);

      this.summaryRow = {};
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DataTableSummaryRowComponent, [{
      key: "ngOnChanges",
      value: function ngOnChanges() {
        if (!this.columns || !this.rows) {
          return;
        }

        this.updateInternalColumns();
        this.updateValues();
      }
    }, {
      key: "updateInternalColumns",
      value: function updateInternalColumns() {
        this._internalColumns = this.columns.map(function (col) {
          return Object.assign(Object.assign({}, col), {
            cellTemplate: col.summaryTemplate
          });
        });
      }
    }, {
      key: "updateValues",
      value: function updateValues() {
        var _this26 = this;

        this.summaryRow = {};
        this.columns.filter(function (col) {
          return !col.summaryTemplate;
        }).forEach(function (col) {
          var cellsFromSingleColumn = _this26.rows.map(function (row) {
            return row[col.prop];
          });

          var sumFunc = _this26.getSummaryFunction(col);

          _this26.summaryRow[col.prop] = col.pipe ? col.pipe.transform(sumFunc(cellsFromSingleColumn)) : sumFunc(cellsFromSingleColumn);
        });
      }
    }, {
      key: "getSummaryFunction",
      value: function getSummaryFunction(column) {
        if (column.summaryFunc === undefined) {
          return defaultSumFunc;
        } else if (column.summaryFunc === null) {
          return noopSumFunc;
        } else {
          return column.summaryFunc;
        }
      }
    }]);

    return DataTableSummaryRowComponent;
  }();

  DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) {
    return new (t || DataTableSummaryRowComponent)();
  };

  DataTableSummaryRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: DataTableSummaryRowComponent,
    selectors: [["datatable-summary-row"]],
    hostAttrs: [1, "datatable-summary-row"],
    inputs: {
      rows: "rows",
      columns: "columns",
      rowHeight: "rowHeight",
      offsetX: "offsetX",
      innerWidth: "innerWidth"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]],
    template: function DataTableSummaryRowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], DataTableBodyRowComponent],
    encapsulation: 2
  });
  return DataTableSummaryRowComponent;
}();

var NgxDatatableModule_1;

var NgxDatatableModule = /*@__PURE__*/function () {
  var NgxDatatableModule = NgxDatatableModule_1 = /*#__PURE__*/function () {
    function NgxDatatableModule() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, NgxDatatableModule);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NgxDatatableModule, null, [{
      key: "forRoot",

      /**
       * Configure global configuration via INgxDatatableConfig
       * @param configuration
       */
      value: function forRoot(configuration) {
        return {
          ngModule: NgxDatatableModule_1,
          providers: [{
            provide: 'configuration',
            useValue: configuration
          }]
        };
      }
    }]);

    return NgxDatatableModule;
  }();

  NgxDatatableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: NgxDatatableModule
  });
  NgxDatatableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    factory: function NgxDatatableModule_Factory(t) {
      return new (t || NgxDatatableModule)();
    },
    providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]]
  });
  return NgxDatatableModule;
}();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NgxDatatableModule, {
    declarations: function declarations() {
      return [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]];
    },
    exports: function exports() {
      return [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective];
    }
  });
})();

var ClickType = /*@__PURE__*/function (ClickType) {
  ClickType["single"] = "single";
  ClickType["double"] = "double";
  return ClickType;
}({});

if (typeof document !== 'undefined' && !document.elementsFromPoint) {
  document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/

/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 */


function elementsFromPoint(x, y) {
  var elements = [];
  var previousPointerEvents = [];
  var current; // TODO: window.getComputedStyle should be used with inferred type (Element)

  var i;
  var d; //if (document === undefined) return elements;
  // get all elements via elementFromPoint, and remove them from hit-testing in order

  while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
    // push the element and its current style
    elements.push(current);
    previousPointerEvents.push({
      value: current.style.getPropertyValue('pointer-events'),
      priority: current.style.getPropertyPriority('pointer-events')
    }); // add "pointer-events: none", to get to the underlying element

    current.style.setProperty('pointer-events', 'none', 'important');
  } // restore the previous pointer-events values


  for (i = previousPointerEvents.length; d = previousPointerEvents[--i];) {
    elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
  } // return our results


  return elements;
}
/*tslint:enable*/

/*
 * Public API Surface of ngx-datatable
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/angular-notifier/fesm2015/angular-notifier.js":
/*!********************************************************************!*\
  !*** ./node_modules/angular-notifier/fesm2015/angular-notifier.js ***!
  \********************************************************************/
/*! exports provided: NotifierConfig, NotifierConfigToken, NotifierContainerComponent, NotifierModule, NotifierNotificationComponent, NotifierOptionsToken, NotifierService, notifierCustomConfigFactory, notifierDefaultConfigFactory, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierConfig", function() { return NotifierConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierConfigToken", function() { return NotifierConfigToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierContainerComponent", function() { return NotifierContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierModule", function() { return NotifierModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierNotificationComponent", function() { return NotifierNotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierOptionsToken", function() { return NotifierOptionsToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierService", function() { return NotifierService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifierCustomConfigFactory", function() { return notifierCustomConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifierDefaultConfigFactory", function() { return notifierDefaultConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NotifierQueueService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NotifierTimerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NotifierAnimationService; });
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Notification
 *
 * This class describes the structure of a notifiction, including all information it needs to live, and everyone else needs to work with it.
 */




function NotifierContainerComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "notifier-notification", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ready", function NotifierContainerComponent_li_1_Template_notifier_notification_ready_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r2.onNotificationReady($event);
    })("dismiss", function NotifierContainerComponent_li_1_Template_notifier_notification_dismiss_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r4.onNotificationDismiss($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var notification_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("notification", notification_r1);
  }
}

var _c0 = function _c0(a0) {
  return {
    notification: a0
  };
};

function NotifierNotificationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 2);
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.notification.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r0.notification));
  }
}

function NotifierNotificationComponent_ng_template_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotifierNotificationComponent_ng_template_1_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r4.onClickDismiss();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function NotifierNotificationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NotifierNotificationComponent_ng_template_1_button_2_Template, 3, 0, "button", 4);
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.notification.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.config.behaviour.showDismissButton);
  }
}

var NotifierNotification =
/**
 * Constructor
 *
 * @param {?} options Notifier options
 */
function NotifierNotification(options) {
  Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotifierNotification);

  /**
   * The template to customize
   * the appearance of the notification
   */
  this.template = null;
  Object.assign(this, options); // If not set manually, we have to create a unique notification ID by ourselves. The ID generation relies on the current browser
  // datetime in ms, in praticular the moment this notification gets constructed. Concurrency, and thus two IDs being the exact same,
  // is not possible due to the action queue concept.

  if (options.id === undefined) {
    this.id = "ID_".concat(new Date().getTime());
  }
};

if (false) {}
/**
 * Notifiction options
 *
 * This interface describes which information are needed to create a new notification, or in other words, which information the external API
 * call must provide.
 * @record
 */


function NotifierNotificationOptions() {}

if (false) {}

var NotifierQueueService = /*@__PURE__*/function () {
  var NotifierQueueService = /*#__PURE__*/function () {
    /**
     * Constructor
     */
    function NotifierQueueService() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotifierQueueService);

      this.actionStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      this.actionQueue = [];
      this.isActionInProgress = false;
    }
    /**
     * Push a new action to the queue, and try to run it
     *
     * @param {?} action Action object
     * @return {?}
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(NotifierQueueService, [{
      key: "push",
      value: function push(action) {
        this.actionQueue.push(action);
        this.tryToRunNextAction();
      }
      /**
       * Continue with the next action (called when the current action is finished)
       * @return {?}
       */

    }, {
      key: "continue",
      value: function _continue() {
        this.isActionInProgress = false;
        this.tryToRunNextAction();
      }
      /**
       * Try to run the next action in the queue; we skip if there already is some action in progress, or if there is no action left
       * @private
       * @return {?}
       */

    }, {
      key: "tryToRunNextAction",
      value: function tryToRunNextAction() {
        if (this.isActionInProgress || this.actionQueue.length === 0) {
          return; // Skip (the queue can now go drink a coffee as it has nothing to do anymore)
        }

        this.isActionInProgress = true;
        this.actionStream.next(this.actionQueue.shift()); // Push next action to the stream, and remove the current action from the queue
      }
    }]);

    return NotifierQueueService;
  }();

  NotifierQueueService.ɵfac = function NotifierQueueService_Factory(t) {
    return new (t || NotifierQueueService)();
  };

  NotifierQueueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NotifierQueueService,
    factory: NotifierQueueService.ɵfac
  });
  return NotifierQueueService;
}();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Notifier options
 * @record
 */


function NotifierOptions() {}

if (false) {}
/**
 * Notifier configuration
 *
 * The notifier configuration defines what notifications look like, how they behave, and how they get animated. It is a global
 * configuration, which means that it only can be set once (at the beginning), and cannot be changed afterwards. Aligning to the world of
 * Angular, this configuration can be provided in the root app module - alternatively, a meaningful default configuration will be used.
 */


var NotifierConfig =
/**
 * Constructor
 *
 * @param {?=} customOptions
 */
function NotifierConfig() {
  var customOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotifierConfig);

  // Set default values
  this.animations = {
    enabled: true,
    hide: {
      easing: 'ease',
      offset: 50,
      preset: 'fade',
      speed: 300
    },
    overlap: 150,
    shift: {
      easing: 'ease',
      speed: 300
    },
    show: {
      easing: 'ease',
      preset: 'slide',
      speed: 300
    }
  };
  this.behaviour = {
    autoHide: 7000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  };
  this.position = {
    horizontal: {
      distance: 12,
      position: 'left'
    },
    vertical: {
      distance: 12,
      gap: 10,
      position: 'bottom'
    }
  };
  this.theme = 'material'; // The following merges the custom options into the notifier config, respecting the already set default values
  // This linear, more explicit and code-sizy workflow is preferred here over a recursive one (because we know the object structure)
  // Technical sidenote: Objects are merged, other types of values simply overwritten / copied

  if (customOptions.theme !== undefined) {
    this.theme = customOptions.theme;
  }

  if (customOptions.animations !== undefined) {
    if (customOptions.animations.enabled !== undefined) {
      this.animations.enabled = customOptions.animations.enabled;
    }

    if (customOptions.animations.overlap !== undefined) {
      this.animations.overlap = customOptions.animations.overlap;
    }

    if (customOptions.animations.hide !== undefined) {
      Object.assign(this.animations.hide, customOptions.animations.hide);
    }

    if (customOptions.animations.shift !== undefined) {
      Object.assign(this.animations.shift, customOptions.animations.shift);
    }

    if (customOptions.animations.show !== undefined) {
      Object.assign(this.animations.show, customOptions.animations.show);
    }
  }

  if (customOptions.behaviour !== undefined) {
    Object.assign(this.behaviour, customOptions.behaviour);
  }

  if (customOptions.position !== undefined) {
    if (customOptions.position.horizontal !== undefined) {
      Object.assign(this.position.horizontal, customOptions.position.horizontal);
    }

    if (customOptions.position.vertical !== undefined) {
      Object.assign(this.position.vertical, customOptions.position.vertical);
    }
  }
};

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable variable-name

/**
 * Injection Token for notifier options
 * @type {?}
 */


var NotifierOptionsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('[angular-notifier] Notifier Options');
/**
 * Injection Token for notifier configuration
 * @type {?}
 */

var NotifierConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('[anuglar-notifier] Notifier Config');

var NotifierService = /*@__PURE__*/function () {
  var NotifierService = /*#__PURE__*/function () {
    /**
     * Constructor
     *
     * @param {?} notifierQueueService Notifier queue service
     * @param {?} config               Notifier configuration, optionally injected as a dependency
     */
    function NotifierService(notifierQueueService, config) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotifierService);

      this.queueService = notifierQueueService;
      this.config = config;
    }
    /**
     * Get the notifier configuration
     *
     * @return {?} Notifier configuration
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(NotifierService, [{
      key: "getConfig",
      value: function getConfig() {
        return this.config;
      }
      /**
       * API: Show a new notification
       *
       * @param {?} notificationOptions Notification options
       * @return {?}
       */

    }, {
      key: "show",
      value: function show(notificationOptions) {
        this.queueService.push({
          payload: notificationOptions,
          type: 'SHOW'
        });
      }
      /**
       * API: Hide a specific notification, given its ID
       *
       * @param {?} notificationId ID of the notification to hide
       * @return {?}
       */

    }, {
      key: "hide",
      value: function hide(notificationId) {
        this.queueService.push({
          payload: notificationId,
          type: 'HIDE'
        });
      }
      /**
       * API: Hide the newest notification
       * @return {?}
       */

    }, {
      key: "hideNewest",
      value: function hideNewest() {
        this.queueService.push({
          type: 'HIDE_NEWEST'
        });
      }
      /**
       * API: Hide the oldest notification
       * @return {?}
       */

    }, {
      key: "hideOldest",
      value: function hideOldest() {
        this.queueService.push({
          type: 'HIDE_OLDEST'
        });
      }
      /**
       * API: Hide all notifications at once
       * @return {?}
       */

    }, {
      key: "hideAll",
      value: function hideAll() {
        this.queueService.push({
          type: 'HIDE_ALL'
        });
      }
      /**
       * API: Shortcut for showing a new notification
       *
       * @param {?} type             Type of the notification
       * @param {?} message          Message of the notification
       * @param {?=} notificationId
       * @return {?}
       */

    }, {
      key: "notify",
      value: function notify(type, message, notificationId) {
        /** @type {?} */
        var notificationOptions = {
          message: message,
          type: type
        };

        if (notificationId !== undefined) {
          notificationOptions.id = notificationId;
        }

        this.show(notificationOptions);
      }
    }]);

    return NotifierService;
  }();

  NotifierService.ɵfac = function NotifierService_Factory(t) {
    return new (t || NotifierService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](NotifierQueueService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](NotifierConfigToken));
  };

  NotifierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NotifierService,
    factory: NotifierService.ɵfac
  });
  return NotifierService;
}();

if (false) {}

var NotifierContainerComponent = /*@__PURE__*/function () {
  var NotifierContainerComponent = /*#__PURE__*/function () {
    /**
     * Constructor
     *
     * @param {?} changeDetector       Change detector, used for manually triggering change detection runs
     * @param {?} notifierQueueService Notifier queue service
     * @param {?} notifierService      Notifier service
     */
    function NotifierContainerComponent(changeDetector, notifierQueueService, notifierService) {
      var _this = this;

      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotifierContainerComponent);

      this.changeDetector = changeDetector;
      this.queueService = notifierQueueService;
      this.config = notifierService.getConfig();
      this.notifications = []; // Connects this component up to the action queue, then handle incoming actions

      this.queueServiceSubscription = this.queueService.actionStream.subscribe(
      /**
      * @param {?} action
      * @return {?}
      */
      function (action) {
        _this.handleAction(action).then(
        /**
        * @return {?}
        */
        function () {
          _this.queueService.continue();
        });
      });
    }
    /**
     * Component destroyment lifecycle hook, cleans up the observable subsciption
     * @return {?}
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(NotifierContainerComponent, [{
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        if (this.queueServiceSubscription) {
          this.queueServiceSubscription.unsubscribe();
        }
      }
      /**
       * Notification identifier, used as the ngFor trackby function
       *
       * @param {?} index        Index
       * @param {?} notification Notifier notification
       * @return {?} Notification ID as the unique identnfier
       */

    }, {
      key: "identifyNotification",
      value: function identifyNotification(index, notification) {
        return notification.id;
      }
      /**
       * Event handler, handles clicks on notification dismiss buttons
       *
       * @param {?} notificationId ID of the notification to dismiss
       * @return {?}
       */

    }, {
      key: "onNotificationDismiss",
      value: function onNotificationDismiss(notificationId) {
        this.queueService.push({
          payload: notificationId,
          type: 'HIDE'
        });
      }
      /**
       * Event handler, handles notification ready events
       *
       * @param {?} notificationComponent Notification component reference
       * @return {?}
       */

    }, {
      key: "onNotificationReady",
      value: function onNotificationReady(notificationComponent) {
        /** @type {?} */
        var currentNotification = this.notifications[this.notifications.length - 1];
        currentNotification.component = notificationComponent; // Save the new omponent reference

        this.continueHandleShowAction(currentNotification); // Continue with handling the show action
      }
      /**
       * Handle incoming actions by mapping action types to methods, and then running them
       *
       * @private
       * @param {?} action Action object
       * @return {?} Promise, resolved when done
       */

    }, {
      key: "handleAction",
      value: function handleAction(action) {
        switch (action.type) {
          // TODO: Maybe a map (actionType -> class method) is a cleaner solution here?
          case 'SHOW':
            return this.handleShowAction(action);

          case 'HIDE':
            return this.handleHideAction(action);

          case 'HIDE_OLDEST':
            return this.handleHideOldestAction(action);

          case 'HIDE_NEWEST':
            return this.handleHideNewestAction(action);

          case 'HIDE_ALL':
            return this.handleHideAllAction(action);

          default:
            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              resolve(); // Ignore unknown action types
            });
        }
      }
      /**
       * Show a new notification
       *
       * We simply add the notification to the list, and then wait until its properly initialized / created / rendered.
       *
       * @private
       * @param {?} action Action object
       * @return {?} Promise, resolved when done
       */

    }, {
      key: "handleShowAction",
      value: function handleShowAction(action) {
        var _this2 = this;

        return new Promise(
        /**
        * @param {?} resolve
        * @param {?} reject
        * @return {?}
        */
        function (resolve, reject) {
          _this2.tempPromiseResolver = resolve; // Save the promise resolve function so that it can be called later on by another method

          _this2.addNotificationToList(new NotifierNotification(action.payload));
        });
      }
      /**
       * Continue to show a new notification (after the notification components is initialized / created / rendered).
       *
       * If this is the first (and thus only) notification, we can simply show it. Otherwhise, if stacking is disabled (or a low value), we
       * switch out notifications, in particular we hide the existing one, and then show our new one. Yet, if stacking is enabled, we first
       * shift all older notifications, and then show our new notification. In addition, if there are too many notification on the screen,
       * we hide the oldest one first. Furthermore, if configured, animation overlapping is applied.
       *
       * @private
       * @param {?} notification New notification to show
       * @return {?}
       */

    }, {
      key: "continueHandleShowAction",
      value: function continueHandleShowAction(notification) {
        var _this3 = this;

        // First (which means only one) notification in the list?

        /** @type {?} */
        var numberOfNotifications = this.notifications.length;

        if (numberOfNotifications === 1) {
          notification.component.show().then(this.tempPromiseResolver); // Done
        } else {
          /** @type {?} */
          var implicitStackingLimit = 2; // Stacking enabled? (stacking value below 2 means stacking is disabled)

          if (this.config.behaviour.stacking === false || this.config.behaviour.stacking < implicitStackingLimit) {
            this.notifications[0].component.hide().then(
            /**
            * @return {?}
            */
            function () {
              _this3.removeNotificationFromList(_this3.notifications[0]);

              notification.component.show().then(_this3.tempPromiseResolver); // Done
            });
          } else {
            /** @type {?} */
            var stepPromises = []; // Are there now too many notifications?

            if (numberOfNotifications > this.config.behaviour.stacking) {
              /** @type {?} */
              var oldNotifications = this.notifications.slice(1, numberOfNotifications - 1); // Are animations enabled?

              if (this.config.animations.enabled) {
                // Is animation overlap enabled?
                if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                  stepPromises.push(this.notifications[0].component.hide());
                  setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    stepPromises.push(_this3.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                  }, this.config.animations.hide.speed - this.config.animations.overlap);
                  setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    stepPromises.push(notification.component.show());
                  }, this.config.animations.hide.speed + this.config.animations.shift.speed - this.config.animations.overlap);
                } else {
                  stepPromises.push(new Promise(
                  /**
                  * @param {?} resolve
                  * @param {?} reject
                  * @return {?}
                  */
                  function (resolve, reject) {
                    _this3.notifications[0].component.hide().then(
                    /**
                    * @return {?}
                    */
                    function () {
                      _this3.shiftNotifications(oldNotifications, notification.component.getHeight(), true).then(
                      /**
                      * @return {?}
                      */
                      function () {
                        notification.component.show().then(resolve);
                      });
                    });
                  }));
                }
              } else {
                stepPromises.push(this.notifications[0].component.hide());
                stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                stepPromises.push(notification.component.show());
              }
            } else {
              /** @type {?} */
              var _oldNotifications = this.notifications.slice(0, numberOfNotifications - 1); // Are animations enabled?


              if (this.config.animations.enabled) {
                // Is animation overlap enabled?
                if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                  stepPromises.push(this.shiftNotifications(_oldNotifications, notification.component.getHeight(), true));
                  setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    stepPromises.push(notification.component.show());
                  }, this.config.animations.shift.speed - this.config.animations.overlap);
                } else {
                  stepPromises.push(new Promise(
                  /**
                  * @param {?} resolve
                  * @param {?} reject
                  * @return {?}
                  */
                  function (resolve, reject) {
                    _this3.shiftNotifications(_oldNotifications, notification.component.getHeight(), true).then(
                    /**
                    * @return {?}
                    */
                    function () {
                      notification.component.show().then(resolve);
                    });
                  }));
                }
              } else {
                stepPromises.push(this.shiftNotifications(_oldNotifications, notification.component.getHeight(), true));
                stepPromises.push(notification.component.show());
              }
            }

            Promise.all(stepPromises).then(
            /**
            * @return {?}
            */
            function () {
              if (numberOfNotifications > _this3.config.behaviour.stacking) {
                _this3.removeNotificationFromList(_this3.notifications[0]);
              }

              _this3.tempPromiseResolver();
            }); // Done
          }
        }
      }
      /**
       * Hide an existing notification
       *
       * Fist, we skip everything if there are no notifications at all, or the given notification does not exist. Then, we hide the given
       * notification. If there exist older notifications, we then shift them around to fill the gap. Once both hiding the given notification
       * and shifting the older notificaitons is done, the given notification gets finally removed (from the DOM).
       *
       * @private
       * @param {?} action Action object, payload contains the notification ID
       * @return {?} Promise, resolved when done
       */

    }, {
      key: "handleHideAction",
      value: function handleHideAction(action) {
        var _this4 = this;

        return new Promise(
        /**
        * @param {?} resolve
        * @param {?} reject
        * @return {?}
        */
        function (resolve, reject) {
          /** @type {?} */
          var stepPromises = []; // Does the notification exist / are there even any notifications? (let's prevent accidential errors)

          /** @type {?} */

          var notification = _this4.findNotificationById(action.payload);

          if (notification === undefined) {
            resolve();
            return;
          } // Get older notifications

          /** @type {?} */


          var notificationIndex = _this4.findNotificationIndexById(action.payload);

          if (notificationIndex === undefined) {
            resolve();
            return;
          }
          /** @type {?} */


          var oldNotifications = _this4.notifications.slice(0, notificationIndex); // Do older notifications exist, and thus do we need to shift other notifications as a consequence?


          if (oldNotifications.length > 0) {
            // Are animations enabled?
            if (_this4.config.animations.enabled && _this4.config.animations.hide.speed > 0) {
              // Is animation overlap enabled?
              if (_this4.config.animations.overlap !== false && _this4.config.animations.overlap > 0) {
                stepPromises.push(notification.component.hide());
                setTimeout(
                /**
                * @return {?}
                */
                function () {
                  stepPromises.push(_this4.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                }, _this4.config.animations.hide.speed - _this4.config.animations.overlap);
              } else {
                notification.component.hide().then(
                /**
                * @return {?}
                */
                function () {
                  stepPromises.push(_this4.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                });
              }
            } else {
              stepPromises.push(notification.component.hide());
              stepPromises.push(_this4.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
            }
          } else {
            stepPromises.push(notification.component.hide());
          } // Wait until both hiding and shifting is done, then remove the notification from the list


          Promise.all(stepPromises).then(
          /**
          * @return {?}
          */
          function () {
            _this4.removeNotificationFromList(notification);

            resolve(); // Done
          });
        });
      }
      /**
       * Hide the oldest notification (bridge to handleHideAction)
       *
       * @private
       * @param {?} action Action object
       * @return {?} Promise, resolved when done
       */

    }, {
      key: "handleHideOldestAction",
      value: function handleHideOldestAction(action) {
        // Are there any notifications? (prevent accidential errors)
        if (this.notifications.length === 0) {
          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            resolve();
          }); // Done
        } else {
          action.payload = this.notifications[0].id;
          return this.handleHideAction(action);
        }
      }
      /**
       * Hide the newest notification (bridge to handleHideAction)
       *
       * @private
       * @param {?} action Action object
       * @return {?} Promise, resolved when done
       */

    }, {
      key: "handleHideNewestAction",
      value: function handleHideNewestAction(action) {
        // Are there any notifications? (prevent accidential errors)
        if (this.notifications.length === 0) {
          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            resolve();
          }); // Done
        } else {
          action.payload = this.notifications[this.notifications.length - 1].id;
          return this.handleHideAction(action);
        }
      }
      /**
       * Hide all notifications at once
       *
       * @private
       * @param {?} action Action object
       * @return {?} Promise, resolved when done
       */

    }, {
      key: "handleHideAllAction",
      value: function handleHideAllAction(action) {
        var _this5 = this;

        return new Promise(
        /**
        * @param {?} resolve
        * @param {?} reject
        * @return {?}
        */
        function (resolve, reject) {
          // Are there any notifications? (prevent accidential errors)

          /** @type {?} */
          var numberOfNotifications = _this5.notifications.length;

          if (numberOfNotifications === 0) {
            resolve(); // Done

            return;
          } // Are animations enabled?


          if (_this5.config.animations.enabled && _this5.config.animations.hide.speed > 0 && _this5.config.animations.hide.offset !== false && _this5.config.animations.hide.offset > 0) {
            var _loop = function _loop(i) {
              /** @type {?} */
              var animationOffset = _this5.config.position.vertical.position === 'top' ? numberOfNotifications - 1 : i;
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this5.notifications[i].component.hide().then(
                /**
                * @return {?}
                */
                function () {
                  // Are we done here, was this the last notification to be hidden?
                  if (_this5.config.position.vertical.position === 'top' && i === 0 || _this5.config.position.vertical.position === 'bottom' && i === numberOfNotifications - 1) {
                    _this5.removeAllNotificationsFromList();

                    resolve(); // Done
                  }
                });
              }, _this5.config.animations.hide.offset * animationOffset);
            };

            for (var i = numberOfNotifications - 1; i >= 0; i--) {
              _loop(i);
            }
          } else {
            /** @type {?} */
            var stepPromises = [];

            for (var _i = numberOfNotifications - 1; _i >= 0; _i--) {
              stepPromises.push(_this5.notifications[_i].component.hide());
            }

            Promise.all(stepPromises).then(
            /**
            * @return {?}
            */
            function () {
              _this5.removeAllNotificationsFromList();

              resolve(); // Done
            });
          }
        });
      }
      /**
       * Shift multiple notifications at once
       *
       * @private
       * @param {?} notifications List containing the notifications to be shifted
       * @param {?} distance      Distance to shift (in px)
       * @param {?} toMakePlace   Flag, defining in which direciton to shift
       * @return {?} Promise, resolved when done
       */

    }, {
      key: "shiftNotifications",
      value: function shiftNotifications(notifications, distance, toMakePlace) {
        return new Promise(
        /**
        * @param {?} resolve
        * @param {?} reject
        * @return {?}
        */
        function (resolve, reject) {
          // Are there any notifications to shift?
          if (notifications.length === 0) {
            resolve();
            return;
          }
          /** @type {?} */


          var notificationPromises = [];

          for (var i = notifications.length - 1; i >= 0; i--) {
            notificationPromises.push(notifications[i].component.shift(distance, toMakePlace));
          }

          Promise.all(notificationPromises).then(resolve); // Done
        });
      }
      /**
       * Add a new notification to the list of notifications (triggers change detection)
       *
       * @private
       * @param {?} notification Notification to add to the list of notifications
       * @return {?}
       */

    }, {
      key: "addNotificationToList",
      value: function addNotificationToList(notification) {
        this.notifications.push(notification);
        this.changeDetector.markForCheck(); // Run change detection because the notification list changed
      }
      /**
       * Remove an existing notification from the list of notifications (triggers change detection)
       *
       * @private
       * @param {?} notification Notification to be removed from the list of notifications
       * @return {?}
       */

    }, {
      key: "removeNotificationFromList",
      value: function removeNotificationFromList(notification) {
        this.notifications = this.notifications.filter(
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          return item.component !== notification.component;
        });
        this.changeDetector.markForCheck(); // Run change detection because the notification list changed
      }
      /**
       * Remove all notifications from the list (triggers change detection)
       * @private
       * @return {?}
       */

    }, {
      key: "removeAllNotificationsFromList",
      value: function removeAllNotificationsFromList() {
        this.notifications = [];
        this.changeDetector.markForCheck(); // Run change detection because the notification list changed
      }
      /**
       * Helper: Find a notification in the notification list by a given notification ID
       *
       * @private
       * @param {?} notificationId Notification ID, used for finding notification
       * @return {?} Notification, undefined if not found
       */

    }, {
      key: "findNotificationById",
      value: function findNotificationById(notificationId) {
        return this.notifications.find(
        /**
        * @param {?} currentNotification
        * @return {?}
        */
        function (currentNotification) {
          return currentNotification.id === notificationId;
        });
      }
      /**
       * Helper: Find a notification's index by a given notification ID
       *
       * @private
       * @param {?} notificationId Notification ID, used for finding a notification's index
       * @return {?} Notification index, undefined if not found
       */

    }, {
      key: "findNotificationIndexById",
      value: function findNotificationIndexById(notificationId) {
        /** @type {?} */
        var notificationIndex = this.notifications.findIndex(
        /**
        * @param {?} currentNotification
        * @return {?}
        */
        function (currentNotification) {
          return currentNotification.id === notificationId;
        });
        return notificationIndex !== -1 ? notificationIndex : undefined;
      }
    }]);

    return NotifierContainerComponent;
  }();

  NotifierContainerComponent.ɵfac = function NotifierContainerComponent_Factory(t) {
    return new (t || NotifierContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NotifierQueueService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NotifierService));
  };

  NotifierContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NotifierContainerComponent,
    selectors: [["notifier-container"]],
    hostAttrs: [1, "notifier__container"],
    decls: 2,
    vars: 2,
    consts: [["class", "notifier__container-list", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "notifier__container-list"], [3, "notification", "ready", "dismiss"]],
    template: function NotifierContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NotifierContainerComponent_li_1_Template, 2, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.notifications)("ngForTrackBy", ctx.identifyNotification);
      }
    },
    directives: function directives() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], NotifierNotificationComponent];
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return NotifierContainerComponent;
}();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ɵ0 =
/**
* @return {?}
*/
function ɵ0() {
  return {
    from: {
      opacity: '1'
    },
    to: {
      opacity: '0'
    }
  };
},
    ɵ1 =
/**
* @return {?}
*/
function ɵ1() {
  return {
    from: {
      opacity: '0'
    },
    to: {
      opacity: '1'
    }
  };
};
/**
 * Fade animation preset
 * @type {?}
 */


var fade = {
  hide: ɵ0,
  show: ɵ1
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var ɵ0$1 =
/**
* @param {?} notification
* @return {?}
*/
function ɵ0$1(notification) {
  // Prepare variables

  /** @type {?} */
  var config = notification.component.getConfig();
  /** @type {?} */

  var shift = notification.component.getShift();
  /** @type {?} */

  var from;
  /** @type {?} */

  var to; // Configure variables, depending on configuration and component

  if (config.position.horizontal.position === 'left') {
    from = {
      transform: "translate3d( 0, ".concat(shift, "px, 0 )")
    };
    to = {
      transform: "translate3d( calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px ), ").concat(shift, "px, 0 )")
    };
  } else if (config.position.horizontal.position === 'right') {
    from = {
      transform: "translate3d( 0, ".concat(shift, "px, 0 )")
    };
    to = {
      transform: "translate3d( calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px ), ").concat(shift, "px, 0 )")
    };
  } else {
    /** @type {?} */
    var horizontalPosition;

    if (config.position.vertical.position === 'top') {
      horizontalPosition = "calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px )");
    } else {
      horizontalPosition = "calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px )");
    }

    from = {
      transform: "translate3d( -50%, ".concat(shift, "px, 0 )")
    };
    to = {
      transform: "translate3d( -50%, ".concat(horizontalPosition, ", 0 )")
    };
  } // Done


  return {
    from: from,
    to: to
  };
},
    ɵ1$1 =
/**
* @param {?} notification
* @return {?}
*/
function ɵ1$1(notification) {
  // Prepare variables

  /** @type {?} */
  var config = notification.component.getConfig();
  /** @type {?} */

  var from;
  /** @type {?} */

  var to; // Configure variables, depending on configuration and component

  if (config.position.horizontal.position === 'left') {
    from = {
      transform: "translate3d( calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px ), 0, 0 )")
    };
    to = {
      transform: 'translate3d( 0, 0, 0 )'
    };
  } else if (config.position.horizontal.position === 'right') {
    from = {
      transform: "translate3d( calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px ), 0, 0 )")
    };
    to = {
      transform: 'translate3d( 0, 0, 0 )'
    };
  } else {
    /** @type {?} */
    var horizontalPosition;

    if (config.position.vertical.position === 'top') {
      horizontalPosition = "calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px )");
    } else {
      horizontalPosition = "calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px )");
    }

    from = {
      transform: "translate3d( -50%, ".concat(horizontalPosition, ", 0 )")
    };
    to = {
      transform: 'translate3d( -50%, 0, 0 )'
    };
  } // Done


  return {
    from: from,
    to: to
  };
};
/**
 * Slide animation preset
 * @type {?}
 */


var slide = {
  hide: ɵ0$1,
  show: ɵ1$1
};

var NotifierAnimationService = /*@__PURE__*/function () {
  var NotifierAnimationService = /*#__PURE__*/function () {
    /**
     * Constructor
     */
    function NotifierAnimationService() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotifierAnimationService);

      this.animationPresets = {
        fade: fade,
        slide: slide
      };
    }
    /**
     * Get animation data
     *
     * This method generates all data the Web Animations API needs to animate our notification. The result depends on both the animation
     * direction (either in or out) as well as the notifications (and its attributes) itself.
     *
     * @param {?} direction    Animation direction, either in or out
     * @param {?} notification Notification the animation data should be generated for
     * @return {?} Animation information
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(NotifierAnimationService, [{
      key: "getAnimationData",
      value: function getAnimationData(direction, notification) {
        // Get all necessary animation data

        /** @type {?} */
        var keyframes;
        /** @type {?} */

        var duration;
        /** @type {?} */

        var easing;

        if (direction === 'show') {
          keyframes = this.animationPresets[notification.component.getConfig().animations.show.preset].show(notification);
          duration = notification.component.getConfig().animations.show.speed;
          easing = notification.component.getConfig().animations.show.easing;
        } else {
          keyframes = this.animationPresets[notification.component.getConfig().animations.hide.preset].hide(notification);
          duration = notification.component.getConfig().animations.hide.speed;
          easing = notification.component.getConfig().animations.hide.easing;
        } // Build and return animation data


        return {
          keyframes: [keyframes.from, keyframes.to],
          options: {
            duration: duration,
            easing: easing,
            fill: 'forwards' // Keep the newly painted state after the animation finished

          }
        };
      }
    }]);

    return NotifierAnimationService;
  }();

  NotifierAnimationService.ɵfac = function NotifierAnimationService_Factory(t) {
    return new (t || NotifierAnimationService)();
  };

  NotifierAnimationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NotifierAnimationService,
    factory: NotifierAnimationService.ɵfac
  });
  return NotifierAnimationService;
}();

if (false) {}

var NotifierTimerService = /*@__PURE__*/function () {
  var NotifierTimerService = /*#__PURE__*/function () {
    /**
     * Constructor
     */
    function NotifierTimerService() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotifierTimerService);

      this.now = 0;
      this.remaining = 0;
    }
    /**
     * Start (or resume) the timer
     *
     * @param {?} duration Timer duration, in ms
     * @return {?} Promise, resolved once the timer finishes
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(NotifierTimerService, [{
      key: "start",
      value: function start(duration) {
        var _this6 = this;

        return new Promise(
        /**
        * @param {?} resolve
        * @param {?} reject
        * @return {?}
        */
        function (resolve, reject) {
          // For the first run ...
          _this6.remaining = duration; // Setup, then start the timer

          _this6.finishPromiseResolver = resolve;

          _this6.continue();
        });
      }
      /**
       * Pause the timer
       * @return {?}
       */

    }, {
      key: "pause",
      value: function pause() {
        clearTimeout(this.timerId);
        this.remaining -= new Date().getTime() - this.now;
      }
      /**
       * Continue the timer
       * @return {?}
       */

    }, {
      key: "continue",
      value: function _continue() {
        var _this7 = this;

        this.now = new Date().getTime();
        this.timerId = window.setTimeout(
        /**
        * @return {?}
        */
        function () {
          _this7.finish();
        }, this.remaining);
      }
      /**
       * Stop the timer
       * @return {?}
       */

    }, {
      key: "stop",
      value: function stop() {
        clearTimeout(this.timerId);
        this.remaining = 0;
      }
      /**
       * Finish up the timeout by resolving the timer promise
       * @private
       * @return {?}
       */

    }, {
      key: "finish",
      value: function finish() {
        this.finishPromiseResolver();
      }
    }]);

    return NotifierTimerService;
  }();

  NotifierTimerService.ɵfac = function NotifierTimerService_Factory(t) {
    return new (t || NotifierTimerService)();
  };

  NotifierTimerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NotifierTimerService,
    factory: NotifierTimerService.ɵfac
  });
  return NotifierTimerService;
}();

if (false) {}

var NotifierNotificationComponent = /*@__PURE__*/function () {
  var NotifierNotificationComponent = /*#__PURE__*/function () {
    /**
     * Constructor
     *
     * @param {?} elementRef               Reference to the component's element
     * @param {?} renderer                 Angular renderer
     * @param {?} notifierService          Notifier service
     * @param {?} notifierTimerService     Notifier timer service
     * @param {?} notifierAnimationService Notifier animation service
     */
    function NotifierNotificationComponent(elementRef, renderer, notifierService, notifierTimerService, notifierAnimationService) {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotifierNotificationComponent);

      this.config = notifierService.getConfig();
      this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      this.timerService = notifierTimerService;
      this.animationService = notifierAnimationService;
      this.renderer = renderer;
      this.element = elementRef.nativeElement;
      this.elementShift = 0;
    }
    /**
     * Component after view init lifecycle hook, setts up the component and then emits the ready event
     * @return {?}
     */


    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(NotifierNotificationComponent, [{
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        this.setup();
        this.elementHeight = this.element.offsetHeight;
        this.elementWidth = this.element.offsetWidth;
        this.ready.emit(this);
      }
      /**
       * Get the notifier config
       *
       * @return {?} Notifier configuration
       */

    }, {
      key: "getConfig",
      value: function getConfig() {
        return this.config;
      }
      /**
       * Get notification element height (in px)
       *
       * @return {?} Notification element height (in px)
       */

    }, {
      key: "getHeight",
      value: function getHeight() {
        return this.elementHeight;
      }
      /**
       * Get notification element width (in px)
       *
       * @return {?} Notification element height (in px)
       */

    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.elementWidth;
      }
      /**
       * Get notification shift offset (in px)
       *
       * @return {?} Notification element shift offset (in px)
       */

    }, {
      key: "getShift",
      value: function getShift() {
        return this.elementShift;
      }
      /**
       * Show (animate in) this notification
       *
       * @return {?} Promise, resolved when done
       */

    }, {
      key: "show",
      value: function show() {
        var _this8 = this;

        return new Promise(
        /**
        * @param {?} resolve
        * @param {?} reject
        * @return {?}
        */
        function (resolve, reject) {
          // Are animations enabled?
          if (_this8.config.animations.enabled && _this8.config.animations.show.speed > 0) {
            // Get animation data

            /** @type {?} */
            var animationData = _this8.animationService.getAnimationData('show', _this8.notification); // Set initial styles (styles before animation), prevents quick flicker when animation starts

            /** @type {?} */


            var animatedProperties = Object.keys(animationData.keyframes[0]);

            for (var i = animatedProperties.length - 1; i >= 0; i--) {
              _this8.renderer.setStyle(_this8.element, animatedProperties[i], animationData.keyframes[0][animatedProperties[i]]);
            } // Animate notification in


            _this8.renderer.setStyle(_this8.element, 'visibility', 'visible');
            /** @type {?} */


            var animation = _this8.element.animate(animationData.keyframes, animationData.options);

            animation.onfinish =
            /**
            * @return {?}
            */
            function () {
              _this8.startAutoHideTimer();

              resolve(); // Done
            };
          } else {
            // Show notification
            _this8.renderer.setStyle(_this8.element, 'visibility', 'visible');

            _this8.startAutoHideTimer();

            resolve(); // Done
          }
        });
      }
      /**
       * Hide (animate out) this notification
       *
       * @return {?} Promise, resolved when done
       */

    }, {
      key: "hide",
      value: function hide() {
        var _this9 = this;

        return new Promise(
        /**
        * @param {?} resolve
        * @param {?} reject
        * @return {?}
        */
        function (resolve, reject) {
          _this9.stopAutoHideTimer(); // Are animations enabled?


          if (_this9.config.animations.enabled && _this9.config.animations.hide.speed > 0) {
            /** @type {?} */
            var animationData = _this9.animationService.getAnimationData('hide', _this9.notification);
            /** @type {?} */


            var animation = _this9.element.animate(animationData.keyframes, animationData.options);

            animation.onfinish =
            /**
            * @return {?}
            */
            function () {
              resolve(); // Done
            };
          } else {
            resolve(); // Done
          }
        });
      }
      /**
       * Shift (move) this notification
       *
       * @param {?} distance         Distance to shift (in px)
       * @param {?} shiftToMakePlace Flag, defining in which direction to shift
       * @return {?} Promise, resolved when done
       */

    }, {
      key: "shift",
      value: function shift(distance, shiftToMakePlace) {
        var _this10 = this;

        return new Promise(
        /**
        * @param {?} resolve
        * @param {?} reject
        * @return {?}
        */
        function (resolve, reject) {
          // Calculate new position (position after the shift)

          /** @type {?} */
          var newElementShift;

          if (_this10.config.position.vertical.position === 'top' && shiftToMakePlace || _this10.config.position.vertical.position === 'bottom' && !shiftToMakePlace) {
            newElementShift = _this10.elementShift + distance + _this10.config.position.vertical.gap;
          } else {
            newElementShift = _this10.elementShift - distance - _this10.config.position.vertical.gap;
          }
          /** @type {?} */


          var horizontalPosition = _this10.config.position.horizontal.position === 'middle' ? '-50%' : '0'; // Are animations enabled?

          if (_this10.config.animations.enabled && _this10.config.animations.shift.speed > 0) {
            /** @type {?} */
            var animationData = {
              // TODO: Extract into animation service
              keyframes: [{
                transform: "translate3d( ".concat(horizontalPosition, ", ").concat(_this10.elementShift, "px, 0 )")
              }, {
                transform: "translate3d( ".concat(horizontalPosition, ", ").concat(newElementShift, "px, 0 )")
              }],
              options: {
                duration: _this10.config.animations.shift.speed,
                easing: _this10.config.animations.shift.easing,
                fill: 'forwards'
              }
            };
            _this10.elementShift = newElementShift;
            /** @type {?} */

            var animation = _this10.element.animate(animationData.keyframes, animationData.options);

            animation.onfinish =
            /**
            * @return {?}
            */
            function () {
              resolve(); // Done
            };
          } else {
            _this10.renderer.setStyle(_this10.element, 'transform', "translate3d( ".concat(horizontalPosition, ", ").concat(newElementShift, "px, 0 )"));

            _this10.elementShift = newElementShift;
            resolve(); // Done
          }
        });
      }
      /**
       * Handle click on dismiss button
       * @return {?}
       */

    }, {
      key: "onClickDismiss",
      value: function onClickDismiss() {
        this.dismiss.emit(this.notification.id);
      }
      /**
       * Handle mouseover over notification area
       * @return {?}
       */

    }, {
      key: "onNotificationMouseover",
      value: function onNotificationMouseover() {
        if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
          this.pauseAutoHideTimer();
        } else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
          this.stopAutoHideTimer();
        }
      }
      /**
       * Handle mouseout from notification area
       * @return {?}
       */

    }, {
      key: "onNotificationMouseout",
      value: function onNotificationMouseout() {
        if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
          this.continueAutoHideTimer();
        } else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
          this.startAutoHideTimer();
        }
      }
      /**
       * Handle click on notification area
       * @return {?}
       */

    }, {
      key: "onNotificationClick",
      value: function onNotificationClick() {
        if (this.config.behaviour.onClick === 'hide') {
          this.onClickDismiss();
        }
      }
      /**
       * Start the auto hide timer (if enabled)
       * @private
       * @return {?}
       */

    }, {
      key: "startAutoHideTimer",
      value: function startAutoHideTimer() {
        var _this11 = this;

        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
          this.timerService.start(this.config.behaviour.autoHide).then(
          /**
          * @return {?}
          */
          function () {
            _this11.onClickDismiss();
          });
        }
      }
      /**
       * Pause the auto hide timer (if enabled)
       * @private
       * @return {?}
       */

    }, {
      key: "pauseAutoHideTimer",
      value: function pauseAutoHideTimer() {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
          this.timerService.pause();
        }
      }
      /**
       * Continue the auto hide timer (if enabled)
       * @private
       * @return {?}
       */

    }, {
      key: "continueAutoHideTimer",
      value: function continueAutoHideTimer() {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
          this.timerService.continue();
        }
      }
      /**
       * Stop the auto hide timer (if enabled)
       * @private
       * @return {?}
       */

    }, {
      key: "stopAutoHideTimer",
      value: function stopAutoHideTimer() {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
          this.timerService.stop();
        }
      }
      /**
       * Initial notification setup
       * @private
       * @return {?}
       */

    }, {
      key: "setup",
      value: function setup() {
        // Set start position (initially the exact same for every new notification)
        if (this.config.position.horizontal.position === 'left') {
          this.renderer.setStyle(this.element, 'left', "".concat(this.config.position.horizontal.distance, "px"));
        } else if (this.config.position.horizontal.position === 'right') {
          this.renderer.setStyle(this.element, 'right', "".concat(this.config.position.horizontal.distance, "px"));
        } else {
          this.renderer.setStyle(this.element, 'left', '50%'); // Let's get the GPU handle some work as well (#perfmatters)

          this.renderer.setStyle(this.element, 'transform', 'translate3d( -50%, 0, 0 )');
        }

        if (this.config.position.vertical.position === 'top') {
          this.renderer.setStyle(this.element, 'top', "".concat(this.config.position.vertical.distance, "px"));
        } else {
          this.renderer.setStyle(this.element, 'bottom', "".concat(this.config.position.vertical.distance, "px"));
        } // Add classes (responsible for visual design)


        this.renderer.addClass(this.element, "notifier__notification--".concat(this.notification.type));
        this.renderer.addClass(this.element, "notifier__notification--".concat(this.config.theme));
      }
    }]);

    return NotifierNotificationComponent;
  }();

  NotifierNotificationComponent.ɵfac = function NotifierNotificationComponent_Factory(t) {
    return new (t || NotifierNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NotifierTimerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NotifierAnimationService));
  };

  NotifierNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NotifierNotificationComponent,
    selectors: [["notifier-notification"]],
    hostAttrs: [1, "notifier__notification"],
    hostBindings: function NotifierNotificationComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotifierNotificationComponent_click_HostBindingHandler() {
          return ctx.onNotificationClick();
        })("mouseout", function NotifierNotificationComponent_mouseout_HostBindingHandler() {
          return ctx.onNotificationMouseout();
        })("mouseover", function NotifierNotificationComponent_mouseover_HostBindingHandler() {
          return ctx.onNotificationMouseover();
        });
      }
    },
    inputs: {
      notification: "notification"
    },
    outputs: {
      ready: "ready",
      dismiss: "dismiss"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([// We provide the timer to the component's local injector, so that every notification components gets its own
    // instance of the timer service, thus running their timers independently from each other
    NotifierTimerService])],
    decls: 3,
    vars: 2,
    consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf", "ngIfElse"], ["predefinedNotification", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "notifier__notification-message"], ["class", "notifier__notification-button", "type", "button", "title", "dismiss", 3, "click", 4, "ngIf"], ["type", "button", "title", "dismiss", 1, "notifier__notification-button", 3, "click"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", 1, "notifier__notification-button-icon"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]],
    template: function NotifierNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NotifierNotificationComponent_ng_container_0_Template, 1, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NotifierNotificationComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.notification.template)("ngIfElse", _r1);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
    encapsulation: 2,
    changeDetection: 0
  });
  return NotifierNotificationComponent;
}();

if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Factory for a notifier configuration with custom options
 *
 * Sidenote:
 * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
 *
 * @param {?} options - Custom notifier options
 * @return {?} - Notifier configuration as result
 */


function notifierCustomConfigFactory(options) {
  return new NotifierConfig(options);
}
/**
 * Factory for a notifier configuration with default options
 *
 * Sidenote:
 * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
 *
 * @return {?} - Notifier configuration as result
 */


function notifierDefaultConfigFactory() {
  return new NotifierConfig({});
}

var NotifierModule = /*@__PURE__*/function () {
  var NotifierModule = /*#__PURE__*/function () {
    function NotifierModule() {
      Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NotifierModule);
    }

    Object(C_Users_Support_Desktop_temp_github_io_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(NotifierModule, null, [{
      key: "withConfig",

      /**
       * Setup the notifier module with custom providers, in this case with a custom configuration based on the givne options
       *
       * @param {?=} options
       * @return {?} - Notifier module with custom providers
       */
      value: function withConfig() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return {
          ngModule: NotifierModule,
          providers: [// Provide the options itself upfront (as we need to inject them as dependencies -- see below)
          {
            provide: NotifierOptionsToken,
            useValue: options
          }, // Provide a custom notifier configuration, based on the given notifier options
          {
            deps: [NotifierOptionsToken],
            provide: NotifierConfigToken,
            useFactory: notifierCustomConfigFactory
          }]
        };
      }
    }]);

    return NotifierModule;
  }();

  NotifierModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: NotifierModule
  });
  NotifierModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    factory: function NotifierModule_Factory(t) {
      return new (t || NotifierModule)();
    },
    providers: [NotifierAnimationService, NotifierService, NotifierQueueService, // Provide the default notifier configuration if just the module is imported
    {
      provide: NotifierConfigToken,
      useFactory: notifierDefaultConfigFactory
    }],
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
  });
  return NotifierModule;
}();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotifierModule, {
    declarations: function declarations() {
      return [NotifierContainerComponent, NotifierNotificationComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
    },
    exports: function exports() {
      return [NotifierContainerComponent];
    }
  });
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "./src/app/component/component.module.ts":
/*!***********************************************!*\
  !*** ./src/app/component/component.module.ts ***!
  \***********************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
/* harmony import */ var _component_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component.routing */ "./src/app/component/component.routing.ts");
/* harmony import */ var _userManagement_user_master_user_master_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userManagement/user-master/user-master.component */ "./src/app/component/userManagement/user-master/user-master.component.ts");
/* harmony import */ var _userManagement_assign_agents_under_trainer_assign_agents_under_trainer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userManagement/assign-agents-under-trainer/assign-agents-under-trainer.component */ "./src/app/component/userManagement/assign-agents-under-trainer/assign-agents-under-trainer.component.ts");
/* harmony import */ var _userManagement_send_mail_to_user_send_mail_to_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userManagement/send-mail-to-user/send-mail-to-user.component */ "./src/app/component/userManagement/send-mail-to-user/send-mail-to-user.component.ts");
/* harmony import */ var _userManagement_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userManagement/delete-user/delete-user.component */ "./src/app/component/userManagement/delete-user/delete-user.component.ts");
/* harmony import */ var _userManagement_login_activity_login_activity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userManagement/login-activity/login-activity.component */ "./src/app/component/userManagement/login-activity/login-activity.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/component/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/component/pages/profile/profile.component.ts");
/* harmony import */ var _pages_company_packages_company_packages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/company-packages/company-packages.component */ "./src/app/component/pages/company-packages/company-packages.component.ts");
/* harmony import */ var _pages_default_carriers_default_carriers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/default-carriers/default-carriers.component */ "./src/app/component/pages/default-carriers/default-carriers.component.ts");
/* harmony import */ var _pages_promotion_banner_promotion_banner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/promotion-banner/promotion-banner.component */ "./src/app/component/pages/promotion-banner/promotion-banner.component.ts");
/* harmony import */ var _pages_need_analysis_script_need_analysis_script_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/need-analysis-script/need-analysis-script.component */ "./src/app/component/pages/need-analysis-script/need-analysis-script.component.ts");
/* harmony import */ var _billing_my_subscription_my_subscription_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./billing/my-subscription/my-subscription.component */ "./src/app/component/billing/my-subscription/my-subscription.component.ts");
/* harmony import */ var _billing_manager_subscription_manager_subscription_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./billing/manager-subscription/manager-subscription.component */ "./src/app/component/billing/manager-subscription/manager-subscription.component.ts");
/* harmony import */ var _video_url_settings_training_video_training_video_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./video-url-settings/training-video/training-video.component */ "./src/app/component/video-url-settings/training-video/training-video.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _pages_form_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/form/form.component */ "./src/app/component/pages/form/form.component.ts");
/* harmony import */ var _pages_company_packages_checkout_form_checkout_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/company-packages/checkout-form/checkout-form.component */ "./src/app/component/pages/company-packages/checkout-form/checkout-form.component.ts");
/* harmony import */ var _pages_company_packages_detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/company-packages/detail-form/detail-form.component */ "./src/app/component/pages/company-packages/detail-form/detail-form.component.ts");
/* harmony import */ var _userManagement_send_mail_to_user_create_email_create_email_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./userManagement/send-mail-to-user/create-email/create-email.component */ "./src/app/component/userManagement/send-mail-to-user/create-email/create-email.component.ts");
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ "./src/app/component/pages/change-password/change-password.component.ts");






























var ComponentsModule = /** @class */ /*@__PURE__*/ (function () {
    function ComponentsModule() {
    }
    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_component_routing__WEBPACK_IMPORTED_MODULE_6__["ComponentsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_21__["Ng2SearchPipeModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__["NgxDatatableModule"],
            ]] });
    return ComponentsModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_userManagement_user_master_user_master_component__WEBPACK_IMPORTED_MODULE_7__["UserMasterComponent"],
            _userManagement_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_10__["DeleteUserComponent"],
            _userManagement_send_mail_to_user_send_mail_to_user_component__WEBPACK_IMPORTED_MODULE_9__["SendMailToUserComponent"],
            _userManagement_assign_agents_under_trainer_assign_agents_under_trainer_component__WEBPACK_IMPORTED_MODULE_8__["AssignAgentsUnderTrainerComponent"],
            _userManagement_login_activity_login_activity_component__WEBPACK_IMPORTED_MODULE_11__["LoginActivityComponent"],
            _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
            _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
            _pages_company_packages_company_packages_component__WEBPACK_IMPORTED_MODULE_14__["CompanyPackagesComponent"],
            _pages_default_carriers_default_carriers_component__WEBPACK_IMPORTED_MODULE_15__["DefaultCarriersComponent"],
            _pages_promotion_banner_promotion_banner_component__WEBPACK_IMPORTED_MODULE_16__["PromotionBannerComponent"],
            _pages_need_analysis_script_need_analysis_script_component__WEBPACK_IMPORTED_MODULE_17__["NeedAnalysisScriptComponent"],
            _billing_my_subscription_my_subscription_component__WEBPACK_IMPORTED_MODULE_18__["MySubscriptionComponent"],
            _billing_manager_subscription_manager_subscription_component__WEBPACK_IMPORTED_MODULE_19__["ManagerSubscriptionComponent"],
            _video_url_settings_training_video_training_video_component__WEBPACK_IMPORTED_MODULE_20__["TrainingVideoComponent"],
            _pages_form_form_component__WEBPACK_IMPORTED_MODULE_23__["FormComponent"],
            _pages_company_packages_checkout_form_checkout_form_component__WEBPACK_IMPORTED_MODULE_24__["CheckoutFormComponent"],
            _pages_company_packages_detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_25__["DetailFormComponent"],
            _userManagement_send_mail_to_user_create_email_create_email_component__WEBPACK_IMPORTED_MODULE_26__["CreateEmailComponent"],
            _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_27__["ChangePasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_21__["Ng2SearchPipeModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__["NgxDatatableModule"]] });
})();


/***/ }),

/***/ "./src/app/component/component.routing.ts":
/*!************************************************!*\
  !*** ./src/app/component/component.routing.ts ***!
  \************************************************/
/*! exports provided: ComponentsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutes", function() { return ComponentsRoutes; });
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ "./src/app/component/pages/change-password/change-password.component.ts");
/* harmony import */ var _userManagement_send_mail_to_user_create_email_create_email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userManagement/send-mail-to-user/create-email/create-email.component */ "./src/app/component/userManagement/send-mail-to-user/create-email/create-email.component.ts");
/* harmony import */ var _pages_company_packages_detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/company-packages/detail-form/detail-form.component */ "./src/app/component/pages/company-packages/detail-form/detail-form.component.ts");
/* harmony import */ var _billing_my_subscription_my_subscription_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing/my-subscription/my-subscription.component */ "./src/app/component/billing/my-subscription/my-subscription.component.ts");
/* harmony import */ var _pages_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/form/form.component */ "./src/app/component/pages/form/form.component.ts");
/* harmony import */ var _userManagement_assign_agents_under_trainer_assign_agents_under_trainer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userManagement/assign-agents-under-trainer/assign-agents-under-trainer.component */ "./src/app/component/userManagement/assign-agents-under-trainer/assign-agents-under-trainer.component.ts");
/* harmony import */ var _userManagement_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userManagement/delete-user/delete-user.component */ "./src/app/component/userManagement/delete-user/delete-user.component.ts");
/* harmony import */ var _userManagement_login_activity_login_activity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userManagement/login-activity/login-activity.component */ "./src/app/component/userManagement/login-activity/login-activity.component.ts");
/* harmony import */ var _userManagement_send_mail_to_user_send_mail_to_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userManagement/send-mail-to-user/send-mail-to-user.component */ "./src/app/component/userManagement/send-mail-to-user/send-mail-to-user.component.ts");
/* harmony import */ var _userManagement_user_master_user_master_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userManagement/user-master/user-master.component */ "./src/app/component/userManagement/user-master/user-master.component.ts");










var ComponentsRoutes = [
    //User Management Routing Start
    {
        path: '',
        children: [
            {
                path: 'assign-agents-under-training',
                component: _userManagement_assign_agents_under_trainer_assign_agents_under_trainer_component__WEBPACK_IMPORTED_MODULE_5__["AssignAgentsUnderTrainerComponent"],
                data: {
                    title: 'Assign Agents Under Training',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Assign Agents Under Training' }
                    ]
                }
            },
            {
                path: 'delete-user',
                component: _userManagement_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUserComponent"],
                data: {
                    title: 'Delete User',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Delete User' }
                    ]
                }
            },
            {
                path: 'login-activity',
                component: _userManagement_login_activity_login_activity_component__WEBPACK_IMPORTED_MODULE_7__["LoginActivityComponent"],
                data: {
                    title: 'Login Activity',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Login Activity' }
                    ]
                }
            },
            {
                path: 'send-mail-to-user',
                component: _userManagement_send_mail_to_user_send_mail_to_user_component__WEBPACK_IMPORTED_MODULE_8__["SendMailToUserComponent"],
                data: {
                    title: 'Send Mail To User',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Send Mail To User' }
                    ]
                }
            },
            {
                path: 'user-master',
                component: _userManagement_user_master_user_master_component__WEBPACK_IMPORTED_MODULE_9__["UserMasterComponent"],
                data: {
                    title: 'User Master',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'User Master' }
                    ]
                }
            },
            {
                path: 'email',
                component: _userManagement_send_mail_to_user_create_email_create_email_component__WEBPACK_IMPORTED_MODULE_1__["CreateEmailComponent"],
                data: {
                    title: 'Create Email',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Create Email' }
                    ]
                }
            },
            {
                path: 'form',
                component: _pages_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"],
                data: {
                    title: 'Form',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Form' }
                    ]
                }
            },
            {
                path: 'subscription',
                component: _billing_my_subscription_my_subscription_component__WEBPACK_IMPORTED_MODULE_3__["MySubscriptionComponent"],
                data: {
                    title: 'Subscription Details',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Subscription Details' }
                    ]
                }
            },
            {
                path: 'subscription-details',
                component: _pages_company_packages_detail_form_detail_form_component__WEBPACK_IMPORTED_MODULE_2__["DetailFormComponent"],
                data: {
                    title: 'Subscription Details',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Subscription Details' }
                    ]
                }
            },
            //-------------------User Management Routing End--------------------------
            {
                path: 'change-password',
                component: _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__["ChangePasswordComponent"],
                data: {
                    title: 'Change Password',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'ngComponent' },
                        { title: 'Change Password' }
                    ]
                }
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/component/pages/change-password/change-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/pages/change-password/change-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



var ChangePasswordComponent = /** @class */ /*@__PURE__*/ (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(); };
    ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 27, vars: 0, consts: [[1, "card"], ["action", "#", 1, "form-horizontal"], [1, "form-body"], [1, "m-t-0", "m-b-40"], [1, "card-body"], [1, "row"], [1, "col-md-10"], [1, "form-group", "row"], ["for", "fname2", 1, "col-sm-3", "text-right", "control-label", "col-form-label"], [1, "col-md-9"], ["type", "text", "placeholder", "Enter Old Password", 1, "form-control"], ["type", "text", "placeholder", "Enter New Password", 1, "form-control"], ["type", "text", "placeholder", "Enter Confirm Password", 1, "form-control"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-info"], ["type", "button", 1, "btn", "btn-dark"]], template: function ChangePasswordComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Current Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "New Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Confirm Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Submit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cancel");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [""] });
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/component/pages/company-packages/detail-form/detail-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/component/pages/company-packages/detail-form/detail-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DetailFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFormComponent", function() { return DetailFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




var DetailFormComponent = /** @class */ /*@__PURE__*/ (function () {
    function DetailFormComponent() {
    }
    DetailFormComponent.prototype.ngOnInit = function () {
    };
    DetailFormComponent.ɵfac = function DetailFormComponent_Factory(t) { return new (t || DetailFormComponent)(); };
    DetailFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailFormComponent, selectors: [["app-detail-form"]], decls: 56, vars: 0, consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "card-title"], [1, "col-md-6", 2, "font-size", "50px"], [1, "fab", "fa-cc-visa"], [1, "fab", "fa-cc-mastercard"], [1, "fab", "fa-cc-discover", 2, "width", "10%"], [1, "fab", "fa-cc-amex"], [1, "action-form"], [1, "form-group", "m-b-0"], ["type", "submit", "routerLink", "/company-packages", 1, "btn", "btn-dark", "waves-effect", "waves-light"], ["type", "submit", 1, "btn", "btn-info", "waves-effect", "waves-light", 2, "float", "right"]], template: function DetailFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Subscription Details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0\u00A0 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Make Subscription For : 499$");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Subscription Informations");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Interval : Month");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Interval Count : 1");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Billing Informations");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "First Name : Ankit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Last Name : Mishra");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email : Ankit@visions.net.in");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact : 9464476211");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Address : 161, Gulabgarh Road");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " City : Dera Bassi");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " State : Punjab");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Country : India");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Postal Code : 140507");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Description : Buying company package of Mazuma Basic At $499 of Ankit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Back");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Pay");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [""] });
    return DetailFormComponent;
}());



/***/ }),

/***/ "./src/app/component/userManagement/assign-agents-under-trainer/assign-agents-under-trainer.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/component/userManagement/assign-agents-under-trainer/assign-agents-under-trainer.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AssignAgentsUnderTrainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignAgentsUnderTrainerComponent", function() { return AssignAgentsUnderTrainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/dashboard/ngtable.service */ "./src/app/component/pages/dashboard/ngtable.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");








function AssignAgentsUnderTrainerComponent_tr_18_Template(rf, ctx) {
    if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignAgentsUnderTrainerComponent_tr_18_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx_r4.open(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Assign Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var client_r3 = ctx.$implicit;
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r3.AgentName)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r3.Email)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r3.UserType)("term", ctx_r0.csearchTerm);
    }
}
function AssignAgentsUnderTrainerComponent_ng_template_32_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignAgentsUnderTrainerComponent_ng_template_32_Template_button_click_3_listener() { var modal_r6 = ctx.$implicit; return modal_r6.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignAgentsUnderTrainerComponent_ng_template_32_Template_button_click_8_listener() { var modal_r6 = ctx.$implicit; return modal_r6.close("Save click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
var AssignAgentsUnderTrainerComponent = /** @class */ /*@__PURE__*/ (function () {
    function AssignAgentsUnderTrainerComponent(tableService, modalService) {
        this.tableService = tableService;
        this.modalService = modalService;
        this.clientList = this.tableService.getTable();
        this.cfilterClient = null;
        this.page = 1;
        this.pageSize = 2;
        this.totalLengthOfCollection = 0;
        this.cpage = 1;
        this.cpageSize = 4;
        this.cfilterClient = this.clientList;
        this.totalLengthOfCollection = this.cfilterClient.length;
    }
    AssignAgentsUnderTrainerComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    AssignAgentsUnderTrainerComponent.ɵfac = function AssignAgentsUnderTrainerComponent_Factory(t) { return new (t || AssignAgentsUnderTrainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__["TableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
    AssignAgentsUnderTrainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignAgentsUnderTrainerComponent, selectors: [["app-assign-agents-under-trainer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__["TableService"]])], decls: 34, vars: 17, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "mt-3"], ["type", "text", "placeholder", "Search", 1, "form-control", "w-auto", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped", "border", "mt-4"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "page", "pageSize", "collectionSize", "pageChange"], [1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["content", ""], [3, "result", "term"], [1, "btn", "btn-primary", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function AssignAgentsUnderTrainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AssignAgentsUnderTrainerComponent_Template_input_ngModelChange_5_listener($event) { return ctx.csearchTerm = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Trainer Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Trainer Email");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Total Sales Agent");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Action");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AssignAgentsUnderTrainerComponent_tr_18_Template, 10, 6, "tr", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "filter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "slice");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngb-pagination", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AssignAgentsUnderTrainerComponent_Template_ngb_pagination_pageChange_24_listener($event) { return ctx.cpage = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AssignAgentsUnderTrainerComponent_Template_select_ngModelChange_25_listener($event) { return ctx.cpageSize = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "2 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "4 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "6 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AssignAgentsUnderTrainerComponent_ng_template_32_Template, 10, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.csearchTerm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](20, 13, ctx.cfilterClient, (ctx.cpage - 1) * ctx.cpageSize, (ctx.cpage - 1) * ctx.cpageSize + ctx.cpageSize), ctx.csearchTerm));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Showing 1 to ", ctx.cfilterClient.length, " entries");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.cpage)("pageSize", ctx.cpageSize)("collectionSize", ctx.totalLengthOfCollection);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cpageSize);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 6);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbHighlight"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: [".btn[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n}\r\ndiv.scroll[_ngcontent-%COMP%] {\r\n    height: 280px;\r\n    overflow-y: scroll;\r\n  }"] });
    return AssignAgentsUnderTrainerComponent;
}());



/***/ }),

/***/ "./src/app/component/userManagement/delete-user/delete-user.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/component/userManagement/delete-user/delete-user.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeleteUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserComponent", function() { return DeleteUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/dashboard/ngtable.service */ "./src/app/component/pages/dashboard/ngtable.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");








function DeleteUserComponent_tr_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Restore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var client_r1 = ctx.$implicit;
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.AgentName)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.Email)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.UserType)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.AccountCode)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.TrainerName)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.RegisteredVia)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.Status)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.LmsStatus)("term", ctx_r0.csearchTerm);
    }
}
var DeleteUserComponent = /** @class */ /*@__PURE__*/ (function () {
    function DeleteUserComponent(tableService) {
        this.tableService = tableService;
        this.clientList = this.tableService.getTable();
        this.cfilterClient = null;
        this.page = 1;
        this.pageSize = 2;
        this.totalLengthOfCollection = 0;
        this.cpage = 1;
        this.cpageSize = 4;
        this.cfilterClient = this.clientList;
        this.totalLengthOfCollection = this.cfilterClient.length;
    }
    DeleteUserComponent.prototype.ngOnInit = function () {
    };
    DeleteUserComponent.ɵfac = function DeleteUserComponent_Factory(t) { return new (t || DeleteUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__["TableService"])); };
    DeleteUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteUserComponent, selectors: [["app-delete-user"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__["TableService"]])], decls: 42, vars: 17, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "mt-3"], ["type", "text", "placeholder", "Search", 1, "form-control", "w-auto", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped", "border", "mt-4"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "page", "pageSize", "collectionSize", "pageChange"], [1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "result", "term"], [1, "btn", "btn-primary"]], template: function DeleteUserComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeleteUserComponent_Template_input_ngModelChange_5_listener($event) { return ctx.csearchTerm = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Agent Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User Type");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Account Code");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Trainer Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Registered via");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Status");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Is_Deleted");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Action");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DeleteUserComponent_tr_28_Template, 20, 16, "tr", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "filter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "slice");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ngb-pagination", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function DeleteUserComponent_Template_ngb_pagination_pageChange_34_listener($event) { return ctx.cpage = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeleteUserComponent_Template_select_ngModelChange_35_listener($event) { return ctx.cpageSize = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "2 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "4 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "6 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.csearchTerm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](30, 13, ctx.cfilterClient, (ctx.cpage - 1) * ctx.cpageSize, (ctx.cpage - 1) * ctx.cpageSize + ctx.cpageSize), ctx.csearchTerm));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Showing 1 to ", ctx.cfilterClient.length, " entries");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.cpage)("pageSize", ctx.cpageSize)("collectionSize", ctx.totalLengthOfCollection);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cpageSize);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 6);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".btn[_ngcontent-%COMP%]{\r\nfont-size: 13px;\r\n}"] });
    return DeleteUserComponent;
}());



/***/ }),

/***/ "./src/app/component/userManagement/login-activity/login-activity.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/component/userManagement/login-activity/login-activity.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LoginActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginActivityComponent", function() { return LoginActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/dashboard/ngtable.service */ "./src/app/component/pages/dashboard/ngtable.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");








function LoginActivityComponent_tr_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngb-highlight", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var client_r1 = ctx.$implicit;
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.AgentName)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.Email)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.UserType)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.AccountCode)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.TrainerName)("term", ctx_r0.csearchTerm);
    }
}
var LoginActivityComponent = /** @class */ /*@__PURE__*/ (function () {
    function LoginActivityComponent(tableService) {
        this.tableService = tableService;
        this.clientList = this.tableService.getTable();
        this.cfilterClient = null;
        this.page = 1;
        this.pageSize = 2;
        this.totalLengthOfCollection = 0;
        this.cpage = 1;
        this.cpageSize = 4;
        this.cfilterClient = this.clientList;
        this.totalLengthOfCollection = this.cfilterClient.length;
    }
    LoginActivityComponent.prototype.ngOnInit = function () {
    };
    LoginActivityComponent.ɵfac = function LoginActivityComponent_Factory(t) { return new (t || LoginActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__["TableService"])); };
    LoginActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginActivityComponent, selectors: [["app-login-activity"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__["TableService"]])], decls: 34, vars: 17, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "mt-3"], ["type", "text", "placeholder", "Search", 1, "form-control", "w-auto", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped", "border", "mt-4"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "page", "pageSize", "collectionSize", "pageChange"], [1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "result", "term"]], template: function LoginActivityComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginActivityComponent_Template_input_ngModelChange_5_listener($event) { return ctx.csearchTerm = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User Agent");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "IP Address");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login Time");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Logout Time");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginActivityComponent_tr_20_Template, 11, 10, "tr", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "filter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "slice");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngb-pagination", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function LoginActivityComponent_Template_ngb_pagination_pageChange_26_listener($event) { return ctx.cpage = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginActivityComponent_Template_select_ngModelChange_27_listener($event) { return ctx.cpageSize = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "4 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "6 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.csearchTerm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](22, 13, ctx.cfilterClient, (ctx.cpage - 1) * ctx.cpageSize, (ctx.cpage - 1) * ctx.cpageSize + ctx.cpageSize), ctx.csearchTerm));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Showing 1 to ", ctx.cfilterClient.length, " entries");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.cpage)("pageSize", ctx.cpageSize)("collectionSize", ctx.totalLengthOfCollection);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cpageSize);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 6);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [""] });
    return LoginActivityComponent;
}());



/***/ }),

/***/ "./src/app/component/userManagement/send-mail-to-user/create-email/create-email.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/component/userManagement/send-mail-to-user/create-email/create-email.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: CreateEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmailComponent", function() { return CreateEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



var CreateEmailComponent = /** @class */ /*@__PURE__*/ (function () {
    function CreateEmailComponent() {
    }
    CreateEmailComponent.prototype.ngOnInit = function () {
    };
    CreateEmailComponent.ɵfac = function CreateEmailComponent_Factory(t) { return new (t || CreateEmailComponent)(); };
    CreateEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateEmailComponent, selectors: [["app-create-email"]], decls: 59, vars: 0, consts: [[1, "card"], ["action", "#", 1, "form-horizontal"], [1, "form-body"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], ["for", "fname2", 1, "col-sm-3", "text-right", "control-label", "col-form-label"], [1, "col-md-9"], [1, "form-control", "custom-select"], ["value", ""], ["type", "password", "placeholder", "Enter Mail Subject", 1, "form-control", "form-control-danger", "mail"], ["for", "fname2", 1, "col-sm-2", "text-right", "control-label", "col-form-label"], [1, "col-md-8"], ["name", "", "id", "", "cols", "120", "rows", "10"], [1, "form-actions"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-danger"]], template: function CreateEmailComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Modules");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Male");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Female");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Username");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Male");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Female");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "User Type");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Male");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Female");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Mail Subject");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Hi Name,");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Email Body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "textarea", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Send Mail");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Save Draft");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cancel");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".mail[_ngcontent-%COMP%]{\r\n    width: 200%;\r\n}"] });
    return CreateEmailComponent;
}());



/***/ }),

/***/ "./src/app/component/userManagement/send-mail-to-user/send-mail-to-user.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/component/userManagement/send-mail-to-user/send-mail-to-user.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SendMailToUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailToUserComponent", function() { return SendMailToUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/dashboard/ngtable.service */ "./src/app/component/pages/dashboard/ngtable.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");









function SendMailToUserComponent_tr_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var client_r1 = ctx.$implicit;
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.AgentName)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.Email)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.UserType)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.AccountCode)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.TrainerName)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.RegisteredVia)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.Status)("term", ctx_r0.csearchTerm);
    }
}
var SendMailToUserComponent = /** @class */ /*@__PURE__*/ (function () {
    function SendMailToUserComponent(tableService) {
        this.tableService = tableService;
        this.clientList = this.tableService.getTable();
        this.cfilterClient = null;
        this.page = 1;
        this.pageSize = 2;
        this.totalLengthOfCollection = 0;
        this.cpage = 1;
        this.cpageSize = 4;
        this.cfilterClient = this.clientList;
        this.totalLengthOfCollection = this.cfilterClient.length;
    }
    SendMailToUserComponent.prototype.ngOnInit = function () {
    };
    SendMailToUserComponent.ɵfac = function SendMailToUserComponent_Factory(t) { return new (t || SendMailToUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__["TableService"])); };
    SendMailToUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendMailToUserComponent, selectors: [["app-send-mail-to-user"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__["TableService"]])], decls: 42, vars: 17, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "mt-3"], ["type", "text", "placeholder", "Search", 1, "form-control", "w-auto", 3, "ngModel", "ngModelChange"], ["type", "button", "routerLink", "/component/email", 1, "btn", "btn-primary", "ml-auto"], [1, "table", "table-striped", "border", "mt-4"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "page", "pageSize", "collectionSize", "pageChange"], [1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "result", "term"], [1, "btn", "btn-danger"]], template: function SendMailToUserComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SendMailToUserComponent_Template_input_ngModelChange_5_listener($event) { return ctx.csearchTerm = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "S No.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Module");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mail Subject");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mail Description");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Users");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Send/ Draft Date");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Status");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Action");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SendMailToUserComponent_tr_28_Template, 18, 14, "tr", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "filter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "slice");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ngb-pagination", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function SendMailToUserComponent_Template_ngb_pagination_pageChange_34_listener($event) { return ctx.cpage = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SendMailToUserComponent_Template_select_ngModelChange_35_listener($event) { return ctx.cpageSize = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "2 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "4 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "6 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.csearchTerm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](30, 13, ctx.cfilterClient, (ctx.cpage - 1) * ctx.cpageSize, (ctx.cpage - 1) * ctx.cpageSize + ctx.cpageSize), ctx.csearchTerm));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Showing 1 to ", ctx.cfilterClient.length, " entries");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.cpage)("pageSize", ctx.cpageSize)("collectionSize", ctx.totalLengthOfCollection);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cpageSize);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 6);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbHighlight"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: [".btn[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n}"] });
    return SendMailToUserComponent;
}());



/***/ }),

/***/ "./src/app/component/userManagement/user-master/user-master.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/component/userManagement/user-master/user-master.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMasterComponent", function() { return UserMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/dashboard/ngtable.service */ "./src/app/component/pages/dashboard/ngtable.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");








function UserMasterComponent_tr_32_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ngb-highlight", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var client_r1 = ctx.$implicit;
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.AgentName)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.Email)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.UserType)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.AccountCode)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.TrainerName)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.RegisteredVia)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.Status)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.LmsStatus)("term", ctx_r0.csearchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r1.LmsRole)("term", ctx_r0.csearchTerm);
    }
}
var UserMasterComponent = /** @class */ /*@__PURE__*/ (function () {
    function UserMasterComponent(tableService) {
        this.tableService = tableService;
        this.clientList = this.tableService.getTable();
        this.cfilterClient = null;
        this.page = 1;
        this.pageSize = 2;
        this.totalLengthOfCollection = 0;
        this.cpage = 1;
        this.cpageSize = 4;
        this.cfilterClient = this.clientList;
        this.totalLengthOfCollection = this.cfilterClient.length;
    }
    UserMasterComponent.prototype.ngOnInit = function () {
    };
    UserMasterComponent.ɵfac = function UserMasterComponent_Factory(t) { return new (t || UserMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__["TableService"])); };
    UserMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserMasterComponent, selectors: [["app-user-master"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pages_dashboard_ngtable_service__WEBPACK_IMPORTED_MODULE_1__["TableService"]])], decls: 46, vars: 17, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "mt-3"], ["type", "text", "placeholder", "Search", 1, "form-control", "w-auto", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "ml-auto"], [1, "table", "table-striped", "border", "mt-4"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "page", "pageSize", "collectionSize", "pageChange"], [1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "result", "term"], [1, "ti-pencil", "text-info", "m-r-10", "pointer"], [1, "ti-trash", "text-danger", "pointer"]], template: function UserMasterComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserMasterComponent_Template_input_ngModelChange_5_listener($event) { return ctx.csearchTerm = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "+ Add Client");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Agent Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "User Type");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Account Code");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Trainer Name");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Registered via");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Status");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "LMS Status");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "LMS Role");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Action");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UserMasterComponent_tr_32_Template, 22, 18, "tr", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "filter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "slice");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngb-pagination", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UserMasterComponent_Template_ngb_pagination_pageChange_38_listener($event) { return ctx.cpage = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserMasterComponent_Template_select_ngModelChange_39_listener($event) { return ctx.cpageSize = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "4 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "6 items per page");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.csearchTerm);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](34, 13, ctx.cfilterClient, (ctx.cpage - 1) * ctx.cpageSize, (ctx.cpage - 1) * ctx.cpageSize + ctx.cpageSize), ctx.csearchTerm));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Showing 1 to ", ctx.cfilterClient.length, " entries");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.cpage)("pageSize", ctx.cpageSize)("collectionSize", ctx.totalLengthOfCollection);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cpageSize);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 6);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [""] });
    return UserMasterComponent;
}());



/***/ })

}]);