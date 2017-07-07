webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutorial_tutorial_component__ = __webpack_require__("../../../../../src/app/tutorial/tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datasets_datasets_component__ = __webpack_require__("../../../../../src/app/datasets/datasets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dataset_form_dataset_form_component__ = __webpack_require__("../../../../../src/app/dataset-form/dataset-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linkages_linkages_component__ = __webpack_require__("../../../../../src/app/linkages/linkages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__linkage_detail_linkage_detail_component__ = __webpack_require__("../../../../../src/app/linkage-detail/linkage-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__linkage_form_linkage_form_component__ = __webpack_require__("../../../../../src/app/linkage-form/linkage-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comparators_comparators_component__ = __webpack_require__("../../../../../src/app/comparators/comparators.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__comparator_form_comparator_form_component__ = __webpack_require__("../../../../../src/app/comparator-form/comparator-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__job_detail_job_detail_component__ = __webpack_require__("../../../../../src/app/job-detail/job-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'tutorial', component: __WEBPACK_IMPORTED_MODULE_3__tutorial_tutorial_component__["a" /* TutorialComponent */] },
    { path: 'datasets', component: __WEBPACK_IMPORTED_MODULE_4__datasets_datasets_component__["a" /* DatasetsComponent */] },
    { path: 'datasets/:id', component: __WEBPACK_IMPORTED_MODULE_5__dataset_form_dataset_form_component__["a" /* DatasetFormComponent */] },
    { path: 'linkages', component: __WEBPACK_IMPORTED_MODULE_6__linkages_linkages_component__["a" /* LinkagesComponent */] },
    { path: 'linkages/new', component: __WEBPACK_IMPORTED_MODULE_8__linkage_form_linkage_form_component__["a" /* LinkageFormComponent */] },
    { path: 'linkages/:id', component: __WEBPACK_IMPORTED_MODULE_7__linkage_detail_linkage_detail_component__["a" /* LinkageDetailComponent */] },
    { path: 'linkages/:id/edit', component: __WEBPACK_IMPORTED_MODULE_8__linkage_form_linkage_form_component__["a" /* LinkageFormComponent */] },
    { path: 'linkages/:linkageId/comparators', component: __WEBPACK_IMPORTED_MODULE_9__comparators_comparators_component__["a" /* ComparatorsComponent */] },
    { path: 'linkages/:linkageId/comparators/:id', component: __WEBPACK_IMPORTED_MODULE_10__comparator_form_comparator_form_component__["a" /* ComparatorFormComponent */] },
    { path: 'linkages/:linkageId/jobs/:id', component: __WEBPACK_IMPORTED_MODULE_11__job_detail_job_detail_component__["a" /* JobDetailComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main {\n  padding: 10px;\n}\n\n#sidebar {\n  background: url(/assets/images/sidebar-bottom-main.png)   bottom center no-repeat,\n              url(/assets/images/sidebar-bottom-right.png)  bottom right  no-repeat,\n              url(/assets/images/sidebar-bottom-left.png)   bottom left   no-repeat,\n              url(/assets/images/sidebar-bottom-middle.png) bottom        repeat-x,\n              url(/assets/images/sidebar.png) right repeat-y,\n              #383538;\n  min-height: 500px;\n  height: 95vh;\n  color: white;\n  padding: 10px 20px;\n}\n\n#sidebar a {\n  color: lightblue;\n}\n\n#sidebar ul {\n  padding: 5px 20px;\n  list-style-type: square;\n}\n\n#sidebar ul li {\n  padding: 5px;\n}\n\n#sidebar a.active {\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div id=\"sidebar\" class=\"col-sm-2\">\n      <h1>{{title}}</h1>\n      <nav>\n        <ul>\n          <li><a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a></li>\n          <li><a routerLink=\"/datasets\" routerLinkActive=\"active\">Datasets</a></li>\n          <li><a routerLink=\"/linkages\" routerLinkActive=\"active\">Linkages</a></li>\n        </ul>\n      </nav>\n    </div>\n    <div id=\"main\" class=\"col-sm-10\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Coupler';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tutorial_tutorial_component__ = __webpack_require__("../../../../../src/app/tutorial/tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dataset_service__ = __webpack_require__("../../../../../src/app/dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__datasets_datasets_component__ = __webpack_require__("../../../../../src/app/datasets/datasets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dataset_form_dataset_form_component__ = __webpack_require__("../../../../../src/app/dataset-form/dataset-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__linkages_linkages_component__ = __webpack_require__("../../../../../src/app/linkages/linkages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__linkage_detail_linkage_detail_component__ = __webpack_require__("../../../../../src/app/linkage-detail/linkage-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__linkage_form_linkage_form_component__ = __webpack_require__("../../../../../src/app/linkage-form/linkage-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__comparator_service__ = __webpack_require__("../../../../../src/app/comparator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__comparators_list_comparators_list_component__ = __webpack_require__("../../../../../src/app/comparators-list/comparators-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__comparators_comparators_component__ = __webpack_require__("../../../../../src/app/comparators/comparators.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__comparator_form_comparator_form_component__ = __webpack_require__("../../../../../src/app/comparator-form/comparator-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__jobs_list_jobs_list_component__ = __webpack_require__("../../../../../src/app/jobs-list/jobs-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__datasets_list_datasets_list_component__ = __webpack_require__("../../../../../src/app/datasets-list/datasets-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__job_detail_job_detail_component__ = __webpack_require__("../../../../../src/app/job-detail/job-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__linkage_result_service__ = __webpack_require__("../../../../../src/app/linkage-result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__linkage_result_detail_linkage_result_detail_component__ = __webpack_require__("../../../../../src/app/linkage-result-detail/linkage-result-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__linkage_match_service__ = __webpack_require__("../../../../../src/app/linkage-match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__tutorial_tutorial_component__["a" /* TutorialComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__datasets_datasets_component__["a" /* DatasetsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dataset_form_dataset_form_component__["a" /* DatasetFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__linkages_linkages_component__["a" /* LinkagesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__linkage_detail_linkage_detail_component__["a" /* LinkageDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_16__linkage_form_linkage_form_component__["a" /* LinkageFormComponent */],
            __WEBPACK_IMPORTED_MODULE_18__comparators_list_comparators_list_component__["a" /* ComparatorsListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__comparators_comparators_component__["a" /* ComparatorsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__comparator_form_comparator_form_component__["a" /* ComparatorFormComponent */],
            __WEBPACK_IMPORTED_MODULE_22__jobs_list_jobs_list_component__["a" /* JobsListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__datasets_list_datasets_list_component__["a" /* DatasetsListComponent */],
            __WEBPACK_IMPORTED_MODULE_24__job_detail_job_detail_component__["a" /* JobDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_26__linkage_result_detail_linkage_result_detail_component__["a" /* LinkageResultDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* APP_BASE_HREF */], useValue: __WEBPACK_IMPORTED_MODULE_28__environments_environment__["a" /* environment */].baseUrl },
            __WEBPACK_IMPORTED_MODULE_10__dataset_service__["a" /* DatasetService */],
            __WEBPACK_IMPORTED_MODULE_13__linkage_service__["a" /* LinkageService */],
            __WEBPACK_IMPORTED_MODULE_17__comparator_service__["a" /* ComparatorService */],
            __WEBPACK_IMPORTED_MODULE_21__job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_25__linkage_result_service__["a" /* LinkageResultService */],
            __WEBPACK_IMPORTED_MODULE_27__linkage_match_service__["a" /* LinkageMatchService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/comparator-form/comparator-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comparator-form/comparator-form.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"comparator\">\n  <h2>Linkage: {{linkage.name}} (Comparator)</h2>\n  <form (ngSubmit)=\"save()\" #comparatorForm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"comparator-kind\">Kind</label>\n        <select class=\"form-control\" id=\"comparator-kind\"\n                required [(ngModel)]=\"comparator.kind\" name=\"kind\">\n          <option></option>\n          <option value=\"compare\">Generic comparison</option>\n          <option value=\"strcompare\">String comparison</option>\n          <option value=\"within\">Within range</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"comparator.kind == 'compare'\">\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"comparator-set1\">Field from {{linkage.dataset1.name}}</label>\n        <select class=\"form-control\" id=\"comparator-set1\"\n                required [(ngModel)]=\"comparator.set1[0]\" name=\"set1\">\n          <option></option>\n          <option *ngFor=\"let field of linkage.dataset1.fields\" [value]=\"field.name\">\n            {{field.name}} ({{field.kind}})\n          </option>\n        </select>\n      </div>\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"comparator-operation\">Operator</label>\n        <select class=\"form-control\" id=\"comparator-operation\"\n                required [(ngModel)]=\"comparator.options.operation\" name=\"operation\">\n          <option></option>\n          <option value=\"equal\">==</option>\n          <option value=\"not_equal\">!=</option>\n          <option value=\"greater_than\">&gt;</option>\n          <option value=\"greater_than_or_equal\">&gt;=</option>\n          <option value=\"less_than\">&lt;</option>\n          <option value=\"less_than_or_equal\">&lt;=</option>\n        </select>\n      </div>\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"comparator-set2\">Field from {{linkage.dataset2.name}}</label>\n        <select class=\"form-control\" id=\"comparator-set2\"\n                required [(ngModel)]=\"comparator.set2[0]\" name=\"set2\">\n          <option></option>\n          <option *ngFor=\"let field of linkage.dataset2.fields\" [value]=\"field.name\">\n            {{field.name}} ({{field.kind}})\n          </option>\n        </select>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\"\n            [disabled]=\"!comparatorForm.form.valid\">\n      Save\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">\n      Cancel\n    </button>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/comparator-form/comparator-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comparator__ = __webpack_require__("../../../../../src/app/comparator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comparator_service__ = __webpack_require__("../../../../../src/app/comparator.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparatorFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ComparatorFormComponent = (function () {
    function ComparatorFormComponent(linkageService, comparatorService, route, location) {
        this.linkageService = linkageService;
        this.comparatorService = comparatorService;
        this.route = route;
        this.location = location;
    }
    ComparatorFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            switchMap(function (params) {
            _this.comparatorId = params['id'];
            return _this.linkageService.getLinkage(+params['linkageId']);
        }).
            subscribe(function (linkage) {
            _this.linkage = linkage;
            if (_this.comparatorId == 'new') {
                _this.comparator = new __WEBPACK_IMPORTED_MODULE_5__comparator__["a" /* Comparator */]();
                _this.comparator.linkageId = _this.linkage.id;
            }
            else {
                _this.comparator = linkage.findComparator(+_this.comparatorId);
            }
        });
    };
    ComparatorFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    ComparatorFormComponent.prototype.save = function () {
        var _this = this;
        var promise;
        if (this.comparator.id) {
            promise = this.comparatorService.update(this.comparator);
        }
        else {
            promise = this.comparatorService.create(this.comparator);
        }
        promise.then(function () { return _this.goBack(); });
    };
    return ComparatorFormComponent;
}());
ComparatorFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-comparator-form',
        template: __webpack_require__("../../../../../src/app/comparator-form/comparator-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comparator-form/comparator-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__linkage_service__["a" /* LinkageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__linkage_service__["a" /* LinkageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__comparator_service__["a" /* ComparatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__comparator_service__["a" /* ComparatorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object])
], ComparatorFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=comparator-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/comparator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comparator__ = __webpack_require__("../../../../../src/app/comparator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComparatorService = (function () {
    function ComparatorService(http) {
        this.http = http;
        this.comparatorsUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + '/comparators';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.attributeMap = {
            id: "id",
            kind: "kind",
            set_1: "set1",
            set_2: "set2",
            options: "options",
            order: "order",
            linkage_id: "linkageId"
        };
    }
    ComparatorService.prototype.getComparators = function () {
        var _this = this;
        return this.http.
            get(this.comparatorsUrl).
            toPromise().
            then(function (response) {
            var data = response.json();
            return data.map(function (attribs) { return _this.build(attribs); });
        }).
            catch(this.handleError);
    };
    ComparatorService.prototype.getComparator = function (id) {
        var _this = this;
        var url = this.comparatorsUrl + "/" + id;
        return this.http.
            get(url).
            toPromise().
            then(function (response) { return _this.build(response.json()); }).
            catch(this.handleError);
    };
    ComparatorService.prototype.create = function (comparator) {
        if (comparator.id) {
            throw new Error('Comparator must not already have `id` when creating.');
        }
        var url = this.comparatorsUrl;
        var data = JSON.stringify(this.unbuild(comparator));
        return this.http.
            post(url, data, { headers: this.headers }).
            toPromise().
            then(function () { return comparator; }).
            catch(this.handleError);
    };
    ComparatorService.prototype.update = function (comparator) {
        var url = this.comparatorsUrl + "/" + comparator.id;
        var data = JSON.stringify(this.unbuild(comparator));
        return this.http.
            put(url, data, { headers: this.headers }).
            toPromise().
            then(function () { return comparator; }).
            catch(this.handleError);
    };
    ComparatorService.prototype.build = function (attribs) {
        var result = new __WEBPACK_IMPORTED_MODULE_3__comparator__["a" /* Comparator */]();
        for (var key in attribs) {
            if (key in this.attributeMap) {
                var mappedKey = this.attributeMap[key];
                result[mappedKey] = attribs[key];
            }
        }
        return result;
    };
    ComparatorService.prototype.unbuild = function (comparator) {
        var result = {};
        for (var key in this.attributeMap) {
            var mappedKey = this.attributeMap[key];
            result[key] = comparator[mappedKey];
        }
        return result;
    };
    ComparatorService.prototype.handleError = function (error) {
        console.error(error);
    };
    return ComparatorService;
}());
ComparatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ComparatorService);

var _a;
//# sourceMappingURL=comparator.service.js.map

/***/ }),

/***/ "../../../../../src/app/comparator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ComparatorKind */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comparator; });
var ComparatorKind;
(function (ComparatorKind) {
    ComparatorKind[ComparatorKind["compare"] = 0] = "compare";
    ComparatorKind[ComparatorKind["strcompare"] = 1] = "strcompare";
    ComparatorKind[ComparatorKind["within"] = 2] = "within";
})(ComparatorKind || (ComparatorKind = {}));
var Comparator = (function () {
    function Comparator() {
        this.set1 = [];
        this.set2 = [];
        this.options = {};
    }
    return Comparator;
}());

//# sourceMappingURL=comparator.js.map

/***/ }),

/***/ "../../../../../src/app/comparators-list/comparators-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  margin: 0 0 10px 0;\n  padding: 0;\n}\nul::after {\n  content: \"\";\n  display: block;\n  height: 0px;\n  clear: both;\n}\n\nli {\n  display: block;\n  float: left;\n  width: 250px;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 5px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comparators-list/comparators-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let comparator of linkage.comparators\" (click)=\"gotoDetail(comparator.id)\">\n    <div><strong>Kind:</strong> {{comparator.kind}}</div>\n    <div><strong>Set 1:</strong> {{comparator.set1.join(\", \")}}</div>\n    <div><strong>Set 2:</strong> {{comparator.set2.join(\", \")}}</div>\n    <div *ngIf=\"comparator.kind == 'compare'\">\n      <strong>Operator:</strong> {{comparator.options.operation}}\n    </div>\n  </li>\n</ul>\n<p *ngIf=\"linkage.comparators && linkage.comparators.length == 0\">\n  There are currently no comparators.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/comparators-list/comparators-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparatorsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComparatorsListComponent = (function () {
    function ComparatorsListComponent(router) {
        this.router = router;
    }
    ComparatorsListComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/linkages', this.linkage.id, 'comparators', id]);
    };
    return ComparatorsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__linkage__["a" /* Linkage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__linkage__["a" /* Linkage */]) === "function" && _a || Object)
], ComparatorsListComponent.prototype, "linkage", void 0);
ComparatorsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-comparators-list',
        template: __webpack_require__("../../../../../src/app/comparators-list/comparators-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comparators-list/comparators-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], ComparatorsListComponent);

var _a, _b;
//# sourceMappingURL=comparators-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/comparators/comparators.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comparators/comparators.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"linkage\">\n  <h2>Linkage: {{linkage.name}} (Comparators)</h2>\n  <app-comparators-list [linkage]=\"linkage\"></app-comparators-list>\n\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"newComparator()\">\n    New comparator\n  </button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">\n    Back\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/comparators/comparators.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparatorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComparatorsComponent = (function () {
    function ComparatorsComponent(linkageService, route, location, router) {
        this.linkageService = linkageService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    ComparatorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.linkage) {
            this.route.params.
                switchMap(function (params) {
                return _this.linkageService.getLinkage(+params['linkageId']);
            }).
                subscribe(function (linkage) { return _this.linkage = linkage; });
        }
    };
    ComparatorsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ComparatorsComponent.prototype.newComparator = function () {
        this.router.navigate(['/linkages', this.linkage.id, 'comparators', 'new']);
    };
    return ComparatorsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__linkage__["a" /* Linkage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__linkage__["a" /* Linkage */]) === "function" && _a || Object)
], ComparatorsComponent.prototype, "linkage", void 0);
ComparatorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-comparators',
        template: __webpack_require__("../../../../../src/app/comparators/comparators.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comparators/comparators.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__linkage_service__["a" /* LinkageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__linkage_service__["a" /* LinkageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], ComparatorsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=comparators.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  margin-bottom: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Dashboard</h2>\n\n<h3>Recent Jobs</h3>\n<app-jobs-list [jobs]=\"jobs\"></app-jobs-list>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(jobService) {
        this.jobService = jobService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobService.getJobs().
            then(function (jobs) {
            _this.jobs = jobs.sort(function (a, b) {
                if (a.startedAt < b.startedAt) {
                    return -1;
                }
                if (b.startedAt < a.startedAt) {
                    return 1;
                }
                return 0;
            });
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__job_service__["a" /* JobService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dataset-form/dataset-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.errors {\n  margin-bottom: 1em;\n}\ndiv.errors div.box {\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  float: left;\n}\ndiv.errors::after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\ndiv.errors div.box h4 {\n  font-size: larger;\n  background-color: red;\n  color: white;\n  padding: 5px;\n}\ndiv.errors div.box ul {\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dataset-form/dataset-form.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"dataset\">\n  <h2>Dataset: {{dataset.name || \"new\"}}</h2>\n  <div class=\"errors\" *ngIf=\"errors\">\n    <div class=\"box\">\n      <h4 *ngIf=\"errors.length > 1; else errorsElse\">\n        There were {{errors.length}} errors:\n      </h4>\n      <ng-template #errorsElse><h4>There was 1 error:</h4></ng-template>\n      <ul>\n        <li *ngFor=\"let error of errors\">{{error}}</li>\n      </ul>\n    </div>\n  </div>\n  <form (ngSubmit)=\"save()\" #datasetForm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-name\">Name</label>\n        <input class=\"form-control\" id=\"dataset-name\"\n               type=\"string\" required [(ngModel)]=\"dataset.name\" name=\"name\">\n      </div>\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-kind\">Type</label>\n        <select class=\"form-control\" id=\"dataset-kind\"\n                required [(ngModel)]=\"dataset.kind\" name=\"kind\">\n          <option></option>\n          <option value=\"mysql\">MySQL</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-host\">Host</label>\n        <input class=\"form-control\" id=\"dataset-host\"\n               required [(ngModel)]=\"dataset.host\" name=\"host\">\n      </div>\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-username\">Username</label>\n        <input class=\"form-control\" id=\"dataset-username\"\n               required [(ngModel)]=\"dataset.username\" name=\"username\">\n      </div>\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-password\">Password</label>\n        <input class=\"form-control\" id=\"dataset-password\"\n               type=\"password\" required [(ngModel)]=\"dataset.password\" name=\"password\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-database-name\">Database Name</label>\n        <input class=\"form-control\" id=\"dataset-database-name\"\n               required [(ngModel)]=\"dataset.databaseName\" name=\"databaseName\">\n      </div>\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-table-name\">Table Name</label>\n        <input class=\"form-control\" id=\"dataset-table-name\"\n               required [(ngModel)]=\"dataset.tableName\" name=\"tableName\">\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\"\n            [disabled]=\"!datasetForm.form.valid\">\n      Save\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">\n      Cancel\n    </button>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/dataset-form/dataset-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dataset__ = __webpack_require__("../../../../../src/app/dataset.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dataset_service__ = __webpack_require__("../../../../../src/app/dataset.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DatasetFormComponent = (function () {
    function DatasetFormComponent(datasetService, route, location) {
        this.datasetService = datasetService;
        this.route = route;
        this.location = location;
    }
    DatasetFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            switchMap(function (params) {
            if (params['id'] == 'new') {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_6__dataset__["a" /* Dataset */]());
            }
            else {
                return _this.datasetService.getDataset(+params['id'], false);
            }
        }).
            subscribe(function (dataset) { return _this.dataset = dataset; });
    };
    DatasetFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    DatasetFormComponent.prototype.save = function () {
        var _this = this;
        var promise;
        if (this.dataset.id) {
            promise = this.datasetService.update(this.dataset);
        }
        else {
            promise = this.datasetService.create(this.dataset);
        }
        promise.then(function (result) {
            _this.goBack();
        }, function (result) {
            var errors = [];
            var _loop_1 = function (key) {
                var keyErrors = result.errors[key];
                keyErrors.forEach(function (error) {
                    if (key == "base") {
                        errors.push(error);
                    }
                    else {
                        errors.push(key + " " + error);
                    }
                });
            };
            for (var key in result.errors) {
                _loop_1(key);
            }
            _this.errors = errors;
        });
    };
    return DatasetFormComponent;
}());
DatasetFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-dataset-form',
        template: __webpack_require__("../../../../../src/app/dataset-form/dataset-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dataset-form/dataset-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__dataset_service__["a" /* DatasetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__dataset_service__["a" /* DatasetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _c || Object])
], DatasetFormComponent);

var _a, _b, _c;
//# sourceMappingURL=dataset-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/dataset.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dataset__ = __webpack_require__("../../../../../src/app/dataset.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DatasetService = (function () {
    function DatasetService(http) {
        this.http = http;
        this.datasetsUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + '/datasets';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.attributeMap = {
            id: "id",
            name: "name",
            type: "kind",
            host: "host",
            username: "username",
            password: "password",
            database_name: "databaseName",
            table_name: "tableName",
            fields: "fields"
        };
    }
    DatasetService.prototype.getDatasets = function () {
        var _this = this;
        return this.http.
            get(this.datasetsUrl).
            toPromise().
            then(function (response) {
            var data = response.json();
            return data.map(function (attribs) { return _this.build(attribs); });
        });
    };
    DatasetService.prototype.getDataset = function (id, includeFields) {
        var _this = this;
        if (includeFields === void 0) { includeFields = true; }
        var url = this.datasetsUrl + "/" + id;
        return this.http.
            get(url, { params: { include_fields: includeFields } }).
            toPromise().
            then(function (response) { return _this.build(response.json()); }).
            catch(this.handleError);
    };
    DatasetService.prototype.create = function (dataset) {
        if (dataset.id) {
            throw new Error('Dataset must not already have `id` when creating.');
        }
        var url = this.datasetsUrl;
        var data = JSON.stringify(this.unbuild(dataset));
        var result = this.http.post(url, data, { headers: this.headers });
        return new Promise(function (resolve, reject) {
            var value;
            result.subscribe(function (response) {
                // success
                resolve(response.json());
            }, function (response) {
                // error
                reject(response.json());
            });
        });
    };
    DatasetService.prototype.update = function (dataset) {
        var url = this.datasetsUrl + "/" + dataset.id;
        var data = JSON.stringify(this.unbuild(dataset));
        var result = this.http.put(url, data, { headers: this.headers });
        return new Promise(function (resolve, reject) {
            var value;
            result.subscribe(function (response) {
                // success
                resolve(response.json());
            }, function (response) {
                // error
                reject(response.json());
            });
        });
    };
    DatasetService.prototype.handleError = function (error) {
        console.error(error);
    };
    DatasetService.prototype.build = function (attribs) {
        var result = new __WEBPACK_IMPORTED_MODULE_3__dataset__["a" /* Dataset */]();
        for (var key in attribs) {
            if (key in this.attributeMap) {
                var value = attribs[key];
                if (key == "fields") {
                    value = value;
                }
                var mappedKey = this.attributeMap[key];
                result[mappedKey] = value;
            }
        }
        return result;
    };
    DatasetService.prototype.unbuild = function (dataset) {
        var result = {};
        for (var key in this.attributeMap) {
            if (key == "fields") {
                continue;
            }
            var mappedKey = this.attributeMap[key];
            result[key] = dataset[mappedKey];
        }
        return result;
    };
    return DatasetService;
}());
DatasetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DatasetService);

var _a;
//# sourceMappingURL=dataset.service.js.map

/***/ }),

/***/ "../../../../../src/app/dataset.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatasetKind */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dataset; });
var DatasetKind;
(function (DatasetKind) {
    DatasetKind[DatasetKind["mysql"] = 0] = "mysql";
})(DatasetKind || (DatasetKind = {}));
var Dataset = (function () {
    function Dataset() {
    }
    return Dataset;
}());

//# sourceMappingURL=dataset.js.map

/***/ }),

/***/ "../../../../../src/app/datasets-list/datasets-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  padding: 0;\n}\nul::after {\n  content: \"\";\n  display: block;\n  height: 0px;\n  clear: both;\n}\n\nli {\n  display: block;\n  float: left;\n  width: 200px;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 5px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datasets-list/datasets-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let dataset of datasets\" (click)=\"gotoDetail(dataset.id)\">\n    <div><strong>Name:</strong> {{dataset.name}}</div>\n    <div><strong>Type:</strong> {{dataset.kind}}</div>\n    <div class=\"info\" *ngIf=\"dataset.kind.toLowerCase() == 'mysql'\">\n      <div><strong>Database:</strong> {{dataset.databaseName}}</div>\n      <div><strong>Table:</strong> {{dataset.tableName}}</div>\n    </div>\n  </li>\n</ul>\n<p *ngIf=\"datasets && datasets.length == 0\">\n  There are currently no datasets.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/datasets-list/datasets-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasetsListComponent = (function () {
    function DatasetsListComponent(router) {
        this.router = router;
        this.datasets = [];
    }
    DatasetsListComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/datasets', id]);
    };
    return DatasetsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], DatasetsListComponent.prototype, "datasets", void 0);
DatasetsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-datasets-list',
        template: __webpack_require__("../../../../../src/app/datasets-list/datasets-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/datasets-list/datasets-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], DatasetsListComponent);

var _a;
//# sourceMappingURL=datasets-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/datasets/datasets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  padding: 0;\n}\nul::after {\n  content: \"\";\n  display: block;\n  height: 0px;\n  clear: both;\n}\n\nli {\n  display: block;\n  float: left;\n  width: 200px;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 5px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n.error {\n  background-color: firebrick;\n  color: white;\n}\n.error a {\n  color: white;\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datasets/datasets.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Datasets</h2>\n<div class=\"datasets\" *ngIf=\"datasets\">\n  <app-datasets-list [datasets]=\"datasets\"></app-datasets-list>\n\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"newDataset()\">\n    New dataset\n  </button>\n</div>\n<div class=\"error p-2\" *ngIf=\"error\">\n  <ng-template [ngIf]=\"!showError\" [ngIfElse]=\"errorTpl\">\n    There was an error communicating with the database\n    (<a href=\"#\" (click)=\"showError = true; false\">details</a>).\n  </ng-template>\n  <ng-template #errorTpl>\n    There was an error communicating with the database:\n    <div>{{ error | json }}</div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/datasets/datasets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataset_service__ = __webpack_require__("../../../../../src/app/dataset.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatasetsComponent = (function () {
    function DatasetsComponent(datasetService, router) {
        this.datasetService = datasetService;
        this.router = router;
        this.showError = false;
    }
    DatasetsComponent.prototype.ngOnInit = function () {
        this.getDatasets();
    };
    DatasetsComponent.prototype.getDatasets = function () {
        var _this = this;
        this.datasetService.
            getDatasets().
            then(function (datasets) { return _this.datasets = datasets; }, function (error) { return _this.error = error; });
    };
    DatasetsComponent.prototype.newDataset = function () {
        this.router.navigate(['/datasets', 'new']);
    };
    return DatasetsComponent;
}());
DatasetsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-datasets',
        template: __webpack_require__("../../../../../src/app/datasets/datasets.component.html"),
        styles: [__webpack_require__("../../../../../src/app/datasets/datasets.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__dataset_service__["a" /* DatasetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataset_service__["a" /* DatasetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], DatasetsComponent);

var _a, _b;
//# sourceMappingURL=datasets.component.js.map

/***/ }),

/***/ "../../../../../src/app/job-detail/job-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table th {\n  border-bottom: 2px solid gray;\n  padding: 0 5px;\n}\n\ntable td {\n  padding: 5px;\n}\n\n.results {\n  margin: 20px 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/job-detail/job-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"job\">\n  <h2>Linkage: {{linkage.name}}, Job {{job.id}}</h2>\n\n  <table>\n    <thead>\n      <tr>\n        <th>Status</th>\n        <th>Started At</th>\n        <th>Ended At</th>\n        <th *ngIf=\"job.error\">Error</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>{{job.status}}</td>\n        <td>{{job.startedAt | date:\"yMdjm\"}}</td>\n        <td>{{job.endedAt | date:\"yMdjm\"}}</td>\n        <td *ngIf=\"job.error\">{{job.error}}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div *ngIf=\"job.linkageResult\" class=\"results\">\n    <h3>Results</h3>\n    <p>\n      <strong>Number of matches:</strong>\n      {{job.linkageResult.matchCount}}\n    </p>\n\n    <app-linkage-result-detail\n      [linkageResult]=\"job.linkageResult\"\n      [linkage]=\"linkage\">\n    </app-linkage-result-detail>\n  </div>\n\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Back</button>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/job-detail/job-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JobDetailComponent = (function () {
    function JobDetailComponent(linkageService, jobService, route, location) {
        this.linkageService = linkageService;
        this.jobService = jobService;
        this.route = route;
        this.location = location;
    }
    JobDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            switchMap(function (params) {
            _this.jobId = params['id'];
            return _this.linkageService.getLinkage(+params['linkageId']);
        }).
            subscribe(function (linkage) {
            _this.linkage = linkage;
            _this.job = linkage.findJob(+_this.jobId);
            if (_this.job.status == "initialized") {
                _this.refreshTimer = setTimeout(_this.refresh.bind(_this), 1000);
                _this.run();
            }
            else if (_this.job.status == "running") {
                _this.refreshTimer = setTimeout(_this.refresh.bind(_this), 1000);
            }
        });
    };
    JobDetailComponent.prototype.ngOnDestroy = function () {
        if (this.refreshTimer) {
            clearTimeout(this.refreshTimer);
        }
    };
    JobDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    JobDetailComponent.prototype.run = function () {
        return this.jobService.run(this.job.id);
    };
    JobDetailComponent.prototype.refresh = function () {
        var _this = this;
        this.jobService.getJob(this.job.id).
            then(function (updatedJob) {
            Object.assign(_this.job, updatedJob);
            if (_this.job.status == "running") {
                _this.refreshTimer = setTimeout(_this.refresh.bind(_this), 1000);
            }
            else {
                _this.refreshTimer = undefined;
            }
        });
    };
    return JobDetailComponent;
}());
JobDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-job-detail',
        template: __webpack_require__("../../../../../src/app/job-detail/job-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/job-detail/job-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__linkage_service__["a" /* LinkageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__linkage_service__["a" /* LinkageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__job_service__["a" /* JobService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object])
], JobDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=job-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/job.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job__ = __webpack_require__("../../../../../src/app/job.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__linkage_result_service__ = __webpack_require__("../../../../../src/app/linkage-result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobService = (function () {
    function JobService(http, linkageResultService) {
        this.http = http;
        this.linkageResultService = linkageResultService;
        this.jobsUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl + '/jobs';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.attributeMap = {
            id: "id",
            kind: "kind",
            status: "status",
            error: "error",
            linkage_id: "linkageId",
            linkage_result_id: "linkageResultId",
            started_at: "startedAt",
            ended_at: "endedAt",
            linkage_result: "linkageResult"
        };
    }
    JobService.prototype.getJobs = function () {
        var _this = this;
        return this.http.
            get(this.jobsUrl).
            toPromise().
            then(function (response) {
            var data = response.json();
            return data.map(function (attribs) { return _this.build(attribs); });
        }).
            catch(this.handleError);
    };
    JobService.prototype.getJob = function (id) {
        var _this = this;
        var url = this.jobsUrl + "/" + id;
        return this.http.
            get(url).
            toPromise().
            then(function (response) { return _this.build(response.json()); }).
            catch(this.handleError);
    };
    JobService.prototype.create = function (job) {
        if (job.id) {
            throw new Error('Job must not already have `id` when creating.');
        }
        var url = this.jobsUrl;
        var data = JSON.stringify(this.unbuild(job));
        return this.http.
            post(url, data, { headers: this.headers }).
            toPromise().
            then(function (response) {
            var id = response.json().id;
            job.id = id;
            return job;
        }).
            catch(this.handleError);
    };
    JobService.prototype.run = function (id) {
        if (!id) {
            throw new Error('Job must have an `id` when running.');
        }
        var url = this.jobsUrl + "/" + id + "/run";
        return this.http.
            post(url, null, { headers: this.headers }).
            toPromise().
            catch(this.handleError);
    };
    JobService.prototype.handleError = function (error) {
        console.error(error);
    };
    JobService.prototype.build = function (attribs) {
        var result = new __WEBPACK_IMPORTED_MODULE_3__job__["a" /* Job */]();
        for (var key in attribs) {
            var value = attribs[key];
            if (key in this.attributeMap) {
                var mappedKey = this.attributeMap[key];
                switch (mappedKey) {
                    case 'startedAt':
                    case 'endedAt':
                        value = new Date(value);
                        break;
                    case 'linkageResult':
                        value = this.linkageResultService.build(value);
                        break;
                }
                result[mappedKey] = value;
            }
        }
        return result;
    };
    JobService.prototype.unbuild = function (job) {
        var result = {};
        for (var key in this.attributeMap) {
            var mappedKey = this.attributeMap[key];
            var value = job[mappedKey];
            if (!value) {
                continue;
            }
            switch (mappedKey) {
                case 'startedAt':
                case 'endedAt':
                case 'status':
                    continue;
                case 'linkageId':
                    value = +value;
                    break;
            }
            result[key] = value;
        }
        return result;
    };
    return JobService;
}());
JobService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__linkage_result_service__["a" /* LinkageResultService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__linkage_result_service__["a" /* LinkageResultService */]) === "function" && _b || Object])
], JobService);

var _a, _b;
//# sourceMappingURL=job.service.js.map

/***/ }),

/***/ "../../../../../src/app/job.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
var Job = (function () {
    function Job() {
    }
    return Job;
}());

//# sourceMappingURL=job.js.map

/***/ }),

/***/ "../../../../../src/app/jobs-list/jobs-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  margin: 0 0 10px 0;\n  padding: 0;\n}\nul::after {\n  content: \"\";\n  display: block;\n  height: 0px;\n  clear: both;\n}\n\nli {\n  display: block;\n  float: left;\n  width: 250px;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 5px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jobs-list/jobs-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let job of jobs\" (click)=\"gotoDetail(job)\">\n    <div><strong>ID:</strong> {{job.id}}</div>\n    <div><strong>Status:</strong> {{job.status}}</div>\n    <div><strong>Started:</strong> {{job.startedAt | date:\"yMdjm\"}}</div>\n    <div><strong>Ended:</strong> {{job.endedAt | date:\"yMdjm\"}}</div>\n  </li>\n</ul>\n<p *ngIf=\"jobs && jobs.length == 0\">\n  No jobs have been created yet.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/jobs-list/jobs-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobsListComponent = (function () {
    function JobsListComponent(router) {
        this.router = router;
    }
    JobsListComponent.prototype.gotoDetail = function (job) {
        this.router.navigate(['/linkages', job.linkageId, 'jobs', job.id]);
    };
    return JobsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], JobsListComponent.prototype, "jobs", void 0);
JobsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-jobs-list',
        template: __webpack_require__("../../../../../src/app/jobs-list/jobs-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/jobs-list/jobs-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], JobsListComponent);

var _a;
//# sourceMappingURL=jobs-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/linkage-detail/linkage-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/linkage-detail/linkage-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"linkage\">\n  <h2>\n    Linkage: {{linkage.name}}\n    <i class=\"fa fa-pencil-square-o\" (click)=\"edit()\"></i>\n    <i class=\"fa fa-trash\" (click)=\"confirmDeletion()\"></i>\n  </h2>\n  <p>{{linkage.description}}</p>\n\n  <h4>Datasets</h4>\n  <app-datasets-list [datasets]=\"[linkage.dataset1, linkage.dataset2]\"></app-datasets-list>\n\n  <h4>Comparators</h4>\n  <app-comparators-list [linkage]=\"linkage\"></app-comparators-list>\n\n  <h4>Jobs</h4>\n  <app-jobs-list [jobs]=\"linkage.jobs\"></app-jobs-list>\n\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"createJob()\">\n    Run\n  </button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">\n    Back\n  </button>\n\n  <ng-template #deleteConfirmation let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Delete Linkage: {{linkage.name}}</h4>\n      <button type=\"button\" class=\"close\" (click)=\"d()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Are you sure you want to delete this linkage?</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c()\">Yes</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"d()\">Cancel</button>\n    </div>\n  </ng-template>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/linkage-detail/linkage-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job__ = __webpack_require__("../../../../../src/app/job.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LinkageDetailComponent = (function () {
    function LinkageDetailComponent(linkageService, jobService, route, location, router, modalService) {
        this.linkageService = linkageService;
        this.jobService = jobService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.modalService = modalService;
    }
    LinkageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            switchMap(function (params) {
            return _this.linkageService.getLinkage(+params['id']);
        }).
            subscribe(function (linkage) { return _this.linkage = linkage; });
    };
    LinkageDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    LinkageDetailComponent.prototype.edit = function () {
        this.router.navigate(['/linkages', this.linkage.id, 'edit']);
    };
    LinkageDetailComponent.prototype.confirmDeletion = function () {
        var _this = this;
        this.modalService.open(this.confirmDeletionContent).
            result.then(function (result) {
            _this.delete();
        }, function (reason) { });
    };
    LinkageDetailComponent.prototype.delete = function () {
        var _this = this;
        this.linkageService.delete(this.linkage).
            then(function () { _this.goBack(); });
    };
    LinkageDetailComponent.prototype.createJob = function () {
        var _this = this;
        var job = new __WEBPACK_IMPORTED_MODULE_5__job__["a" /* Job */]();
        job.kind = "linkage";
        job.linkageId = this.linkage.id;
        this.jobService.create(job).
            then(function (result) {
            job.id = result.id;
            _this.router.navigate(['/linkages', _this.linkage.id, 'jobs', job.id]);
        });
    };
    return LinkageDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewChild */])('deleteConfirmation'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* TemplateRef */]) === "function" && _a || Object)
], LinkageDetailComponent.prototype, "confirmDeletionContent", void 0);
LinkageDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-linkage-detail',
        template: __webpack_require__("../../../../../src/app/linkage-detail/linkage-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/linkage-detail/linkage-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__linkage_service__["a" /* LinkageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__linkage_service__["a" /* LinkageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__job_service__["a" /* JobService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _g || Object])
], LinkageDetailComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=linkage-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/linkage-form/linkage-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n  background-color: firebrick;\n  color: white;\n}\n.error a {\n  color: white;\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/linkage-form/linkage-form.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"linkage\">\n  <h2>Linkage: {{linkage.name}}</h2>\n  <form (ngSubmit)=\"save()\" #linkageForm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 form-group\">\n        <label for=\"linkage-name\">Name</label>\n        <input class=\"form-control\" id=\"linkage-name\"\n               type=\"string\" required [(ngModel)]=\"linkage.name\" name=\"name\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 form-group\">\n        <label for=\"linkage-description\">Description</label>\n        <input class=\"form-control\" id=\"linkage-description\"\n               type=\"string\" required [(ngModel)]=\"linkage.description\" name=\"description\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 form-group\">\n        <label for=\"linkage-dataset1-id\">Dataset 1</label>\n        <select class=\"form-control\" id=\"linkage-dataset1-id\"\n                required [(ngModel)]=\"linkage.dataset1Id\" name=\"dataset1Id\">\n          <option></option>\n          <option *ngFor=\"let dataset of datasets\" value=\"{{dataset.id}}\">{{dataset.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 form-group\">\n        <label for=\"linkage-dataset2-id\">Dataset 2</label>\n        <select class=\"form-control\" id=\"linkage-dataset2-id\"\n                required [(ngModel)]=\"linkage.dataset2Id\" name=\"dataset2Id\">\n          <option></option>\n          <option *ngFor=\"let dataset of datasets\" value=\"{{dataset.id}}\">{{dataset.name}}</option>\n        </select>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\"\n            [disabled]=\"!linkageForm.form.valid\">\n      Continue\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">\n      Back\n    </button>\n  </form>\n</ng-template>\n<ng-template [ngIf]=\"error\">\n  <h2>Linkage</h2>\n  <div class=\"error p-2\" *ngIf=\"error\">\n    <ng-template [ngIf]=\"!showError\" [ngIfElse]=\"errorTpl\">\n      There was an error communicating with the database\n      (<a href=\"#\" (click)=\"showError = true; false\">details</a>).\n    </ng-template>\n    <ng-template #errorTpl>\n      There was an error communicating with the database:\n      <div>{{ error | json }}</div>\n    </ng-template>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/linkage-form/linkage-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dataset_service__ = __webpack_require__("../../../../../src/app/dataset.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LinkageFormComponent = (function () {
    function LinkageFormComponent(linkageService, datasetService, route, location, router) {
        this.linkageService = linkageService;
        this.datasetService = datasetService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.datasets = [];
        this.showError = false;
    }
    LinkageFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDatasets().
            then(function () { return _this.getLinkage(); });
    };
    LinkageFormComponent.prototype.getDatasets = function () {
        var _this = this;
        return this.datasetService.getDatasets().
            then(function (datasets) { return _this.datasets = datasets; }, function (error) { return _this.error = error; });
    };
    LinkageFormComponent.prototype.getLinkage = function () {
        var _this = this;
        this.route.params.
            switchMap(function (params) {
            if (!params['id']) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_6__linkage__["a" /* Linkage */]());
            }
            else {
                return _this.linkageService.getLinkage(+params['id']);
            }
        }).
            subscribe(function (linkage) { return _this.linkage = linkage; }, function (error) { return _this.error = error; });
    };
    LinkageFormComponent.prototype.save = function () {
        var _this = this;
        var promise;
        if (this.linkage.id) {
            promise = this.linkageService.update(this.linkage);
        }
        else {
            promise = this.linkageService.create(this.linkage);
        }
        promise.then(function (result) {
            _this.linkage.id = result.id;
            _this.goNext();
        });
    };
    LinkageFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    LinkageFormComponent.prototype.goNext = function () {
        this.router.navigate(['/linkages', this.linkage.id, 'comparators']);
    };
    return LinkageFormComponent;
}());
LinkageFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-linkage-form',
        template: __webpack_require__("../../../../../src/app/linkage-form/linkage-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/linkage-form/linkage-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__linkage_service__["a" /* LinkageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__linkage_service__["a" /* LinkageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__dataset_service__["a" /* DatasetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__dataset_service__["a" /* DatasetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], LinkageFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=linkage-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/linkage-match.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linkage_match__ = __webpack_require__("../../../../../src/app/linkage-match.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageMatchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LinkageMatchService = (function () {
    function LinkageMatchService(http) {
        this.http = http;
        this.linkageResultsUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + "/linkage_results";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.attributeMap = {
            record_1: "record1",
            record_2: "record2",
            score: "score"
        };
    }
    LinkageMatchService.prototype.getLinkageMatch = function (linkageResultId, index) {
        var _this = this;
        var url = this.linkageResultsUrl + "/" + linkageResultId + "/matches/" + index;
        return this.http.
            get(url).
            toPromise().
            then(function (response) {
            var data = response.json();
            return (_this.build(data));
        });
    };
    LinkageMatchService.prototype.build = function (attribs) {
        var result = new __WEBPACK_IMPORTED_MODULE_3__linkage_match__["a" /* LinkageMatch */]();
        for (var key in attribs) {
            var value = attribs[key];
            if (key in this.attributeMap) {
                var mappedKey = this.attributeMap[key];
                result[mappedKey] = value;
            }
        }
        return result;
    };
    return LinkageMatchService;
}());
LinkageMatchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LinkageMatchService);

var _a;
//# sourceMappingURL=linkage-match.service.js.map

/***/ }),

/***/ "../../../../../src/app/linkage-match.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageMatch; });
var LinkageMatch = (function () {
    function LinkageMatch() {
    }
    return LinkageMatch;
}());

//# sourceMappingURL=linkage-match.js.map

/***/ }),

/***/ "../../../../../src/app/linkage-result-detail/linkage-result-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  margin-bottom: 10px;\n}\n\ntable th {\n  font-weight: bold;\n  border-bottom: 2px solid gray;\n  padding: 0 5px;\n}\n\ntable td {\n  padding: 5px;\n}\n\n.wrapper::after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.match {\n  padding: 10px;\n  border: 1px solid #ddd;\n  background-color: #eee;\n  border-radius: 5px;\n  float: left;\n}\n\n.records {\n  overflow-x: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/linkage-result-detail/linkage-result-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div *ngIf=\"match\" class=\"match\">\n    <h4>Match #{{matchIndex + 1}}</h4>\n\n    <div class=\"records\">\n      <table>\n        <thead>\n          <tr>\n            <th *ngFor=\"let field of linkage.dataset1.fields\">{{field.name}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td *ngFor=\"let field of linkage.dataset1.fields\">{{match.record1[field.name]}}</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <table>\n        <thead>\n          <tr>\n            <th *ngFor=\"let field of linkage.dataset2.fields\">{{field.name}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td *ngFor=\"let field of linkage.dataset2.fields\">{{match.record2[field.name]}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p><strong>Score:</strong> {{match.score}}</p>\n\n    <div class=\"buttons\">\n      <button type=\"button\" class=\"btn btn-secondary prev\" (click)=\"prev()\">Prev</button>\n      <button type=\"button\" class=\"btn btn-secondary next\" (click)=\"next()\">Next</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/linkage-result-detail/linkage-result-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linkage_result__ = __webpack_require__("../../../../../src/app/linkage-result.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linkage_match_service__ = __webpack_require__("../../../../../src/app/linkage-match.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageResultDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LinkageResultDetailComponent = (function () {
    function LinkageResultDetailComponent(linkageMatchService) {
        this.linkageMatchService = linkageMatchService;
        this.matchIndex = 0;
    }
    LinkageResultDetailComponent.prototype.ngOnInit = function () {
        this.getMatch();
    };
    LinkageResultDetailComponent.prototype.getMatch = function () {
        var _this = this;
        this.linkageMatchService.
            getLinkageMatch(this.linkageResult.id, this.matchIndex).
            then(function (result) {
            _this.match = result;
        });
    };
    LinkageResultDetailComponent.prototype.prev = function () {
        if (this.matchIndex > 0) {
            this.matchIndex--;
            this.getMatch();
        }
    };
    LinkageResultDetailComponent.prototype.next = function () {
        if (this.matchIndex < this.linkageResult.matchCount) {
            this.matchIndex++;
            this.getMatch();
        }
    };
    return LinkageResultDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__linkage__["a" /* Linkage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__linkage__["a" /* Linkage */]) === "function" && _a || Object)
], LinkageResultDetailComponent.prototype, "linkage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__linkage_result__["a" /* LinkageResult */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__linkage_result__["a" /* LinkageResult */]) === "function" && _b || Object)
], LinkageResultDetailComponent.prototype, "linkageResult", void 0);
LinkageResultDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-linkage-result-detail',
        template: __webpack_require__("../../../../../src/app/linkage-result-detail/linkage-result-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/linkage-result-detail/linkage-result-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__linkage_match_service__["a" /* LinkageMatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__linkage_match_service__["a" /* LinkageMatchService */]) === "function" && _c || Object])
], LinkageResultDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=linkage-result-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/linkage-result.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkage_result__ = __webpack_require__("../../../../../src/app/linkage-result.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageResultService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LinkageResultService = (function () {
    function LinkageResultService() {
        this.attributeMap = {
            id: "id",
            linkage_id: "linkageId",
            job_id: "jobId",
            match_count: "matchCount"
        };
    }
    LinkageResultService.prototype.build = function (attribs) {
        var result = new __WEBPACK_IMPORTED_MODULE_1__linkage_result__["a" /* LinkageResult */]();
        for (var key in attribs) {
            var value = attribs[key];
            if (key in this.attributeMap) {
                var mappedKey = this.attributeMap[key];
                result[mappedKey] = value;
            }
        }
        return result;
    };
    return LinkageResultService;
}());
LinkageResultService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], LinkageResultService);

//# sourceMappingURL=linkage-result.service.js.map

/***/ }),

/***/ "../../../../../src/app/linkage-result.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageResult; });
var LinkageResult = (function () {
    function LinkageResult() {
    }
    return LinkageResult;
}());

//# sourceMappingURL=linkage-result.js.map

/***/ }),

/***/ "../../../../../src/app/linkage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dataset_service__ = __webpack_require__("../../../../../src/app/dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comparator_service__ = __webpack_require__("../../../../../src/app/comparator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LinkageService = (function () {
    function LinkageService(http, datasetService, comparatorService, jobService) {
        this.http = http;
        this.datasetService = datasetService;
        this.comparatorService = comparatorService;
        this.jobService = jobService;
        this.linkagesUrl = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + '/linkages';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.attributeMap = {
            id: "id",
            name: "name",
            description: "description",
            dataset_1_id: "dataset1Id",
            dataset_2_id: "dataset2Id",
            dataset_1: "dataset1",
            dataset_2: "dataset2",
            comparators: "comparators",
            jobs: "jobs"
        };
    }
    LinkageService.prototype.getLinkages = function () {
        var _this = this;
        return this.http.
            get(this.linkagesUrl).
            toPromise().
            then(function (response) {
            var data = response.json();
            return data.map(function (attribs) {
                return _this.build(attribs);
            });
        });
    };
    LinkageService.prototype.getLinkage = function (id) {
        var _this = this;
        var url = this.linkagesUrl + "/" + id;
        return this.http.
            get(url).
            toPromise().
            then(function (response) {
            var data = response.json();
            return _this.build(data);
        }).
            catch(this.handleError);
    };
    LinkageService.prototype.create = function (linkage) {
        if (linkage.id) {
            throw new Error('Linkage must not already have `id` when creating.');
        }
        var url = this.linkagesUrl;
        var data = JSON.stringify(this.unbuild(linkage));
        return this.http.
            post(url, data, { headers: this.headers }).
            toPromise().
            then(function () { return linkage; }).
            catch(this.handleError);
    };
    LinkageService.prototype.update = function (linkage) {
        var url = this.linkagesUrl + "/" + linkage.id;
        var data = JSON.stringify(this.unbuild(linkage));
        return this.http.
            put(url, data, { headers: this.headers }).
            toPromise().
            then(function () { return linkage; }).
            catch(this.handleError);
    };
    LinkageService.prototype.delete = function (linkage) {
        var url = this.linkagesUrl + "/" + linkage.id;
        return this.http.
            delete(url, { headers: this.headers }).
            toPromise().
            then(function () { return linkage; }).
            catch(this.handleError);
    };
    LinkageService.prototype.build = function (attribs) {
        var _this = this;
        var result = new __WEBPACK_IMPORTED_MODULE_3__linkage__["a" /* Linkage */]();
        for (var key in attribs) {
            var value = attribs[key];
            if (key in this.attributeMap) {
                var mappedKey = this.attributeMap[key];
                switch (mappedKey) {
                    case 'dataset1':
                    case 'dataset2':
                        value = this.datasetService.build(value);
                        break;
                    case 'comparators':
                        value = value.map(function (cattribs) {
                            return _this.comparatorService.build(cattribs);
                        });
                        break;
                    case 'jobs':
                        value = value.map(function (jattribs) {
                            return _this.jobService.build(jattribs);
                        });
                        break;
                }
                result[mappedKey] = value;
            }
        }
        return result;
    };
    LinkageService.prototype.unbuild = function (linkage) {
        var result = {};
        for (var key in this.attributeMap) {
            var mappedKey = this.attributeMap[key];
            var value = linkage[mappedKey];
            if (!value) {
                continue;
            }
            switch (mappedKey) {
                case 'dataset1':
                case 'dataset2':
                case 'comparators':
                case 'jobs':
                    continue;
                case 'dataset1Id':
                case 'dataset2Id':
                    value = +value;
                    break;
            }
            result[key] = value;
        }
        return result;
    };
    LinkageService.prototype.handleError = function (error) {
        console.error(error);
    };
    return LinkageService;
}());
LinkageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__dataset_service__["a" /* DatasetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dataset_service__["a" /* DatasetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__comparator_service__["a" /* ComparatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__comparator_service__["a" /* ComparatorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__job_service__["a" /* JobService */]) === "function" && _d || Object])
], LinkageService);

var _a, _b, _c, _d;
//# sourceMappingURL=linkage.service.js.map

/***/ }),

/***/ "../../../../../src/app/linkage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Linkage; });
var Linkage = (function () {
    function Linkage() {
        this.comparators = [];
        this.jobs = [];
    }
    Linkage.prototype.findComparator = function (id) {
        return this.comparators.find(function (comparator) { return comparator.id == id; });
    };
    Linkage.prototype.findJob = function (id) {
        return this.jobs.find(function (job) { return job.id == id; });
    };
    return Linkage;
}());

//# sourceMappingURL=linkage.js.map

/***/ }),

/***/ "../../../../../src/app/linkages/linkages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  margin: 0 0 10px 0;\n  padding: 0;\n}\nul::after {\n  content: \"\";\n  display: block;\n  height: 0px;\n  clear: both;\n}\n\nli {\n  display: block;\n  float: left;\n  width: 200px;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 5px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n.error {\n  background-color: firebrick;\n  color: white;\n}\n.error a {\n  color: white;\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/linkages/linkages.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Linkages</h2>\n<ng-template [ngIf]=\"linkages\">\n  <ul>\n    <li *ngFor=\"let linkage of linkages\" (click)=\"gotoDetail(linkage.id)\">\n      <div><strong>Name:</strong> {{linkage.name}}</div>\n      <div><strong>Description:</strong> {{linkage.description}}</div>\n    </li>\n  </ul>\n  <p *ngIf=\"linkages && linkages.length == 0\">\n    There are currently no linkages.\n  </p>\n\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"newLinkage()\">\n    New linkage\n  </button>\n</ng-template>\n<div class=\"error p-2\" *ngIf=\"error\">\n  <ng-template [ngIf]=\"!showError\" [ngIfElse]=\"errorTpl\">\n    There was an error communicating with the database\n    (<a href=\"#\" (click)=\"showError = true; false\">details</a>).\n  </ng-template>\n  <ng-template #errorTpl>\n    There was an error communicating with the database:\n    <div>{{ error | json }}</div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/linkages/linkages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinkagesComponent = (function () {
    function LinkagesComponent(linkageService, router) {
        this.linkageService = linkageService;
        this.router = router;
        this.showError = false;
    }
    LinkagesComponent.prototype.ngOnInit = function () {
        this.getLinkages();
    };
    LinkagesComponent.prototype.getLinkages = function () {
        var _this = this;
        this.linkageService.
            getLinkages().
            then(function (linkages) { return _this.linkages = linkages; }, function (error) { return _this.error = error; });
    };
    LinkagesComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/linkages', id]);
    };
    LinkagesComponent.prototype.newLinkage = function () {
        this.router.navigate(['/linkages', 'new']);
    };
    return LinkagesComponent;
}());
LinkagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-linkages',
        template: __webpack_require__("../../../../../src/app/linkages/linkages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/linkages/linkages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__linkage_service__["a" /* LinkageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__linkage_service__["a" /* LinkageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LinkagesComponent);

var _a, _b;
//# sourceMappingURL=linkages.component.js.map

/***/ }),

/***/ "../../../../../src/app/tutorial/tutorial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tutorial/tutorial.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  tutorial works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/tutorial/tutorial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialComponent = (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    return TutorialComponent;
}());
TutorialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-tutorial',
        template: __webpack_require__("../../../../../src/app/tutorial/tutorial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tutorial/tutorial.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TutorialComponent);

//# sourceMappingURL=tutorial.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: '/api',
    baseUrl: '/app'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map