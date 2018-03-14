webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/abstract-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors__ = __webpack_require__("../../../../../src/app/errors.ts");



var AbstractService = /** @class */ (function () {
    function AbstractService() {
    }
    AbstractService.prototype.handleClientError = function (err) {
        // client-side or network error
        console.error(err.error);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_2__errors__["a" /* ClientError */](err.error));
    };
    AbstractService.prototype.handleError = function (err) {
        if (err.error instanceof ErrorEvent) {
            // client-side or network error
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_2__errors__["a" /* ClientError */](err.error));
        }
        else {
            // unsuccessful response code
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_2__errors__["b" /* ValidationError */](err.error.errors));
        }
    };
    return AbstractService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main {\n  padding: 10px;\n}\n\n#sidebar {\n  background: url(data:image/png;base64,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)   bottom center no-repeat,\n              url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAF8CAYAAACNGugZAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAoySURBVHic7ZzbcxPJFYd/fZnR/WJZBizb2DIQqMqaKrJQ2Yclqdra/KfZPGafkv8geUjVsluwhAdw2NSaJVsyBNkIRtJMdx5GGo+8MsiaC4fU+aqGsqyZ6f50Tp/uHqsQn935zCJjPr/7OcqlcvT63nf3oB2Nzc1N3Lx5E7du3UK320W9XofWGkKIc7ch0+zwh4RFqMEi1Pi/EdHLlDqK5BIRIcRSc8N5yDUiQghYm838m6nIvE5n1Z6WKuXsivXdWgtrbeZpBQBaSZXqDadRsNYCAhA2lIinVRZiWsr0x7uFBWwoY4zJKSIq3YgAoYg1FsYayFhhzDIqWmud2s1mIgEDYQUCG0TjJKuKBQBa6RQjciqdgiCAEALFQjG9Ns4g3dSaiMQltKPhOA6MMem1M4d0UmuSMdaG4yL62RgUCoX5l6ScZulEZBIJCwsEgBUnc0ej2Uh+/wVYPiKnJj5jDayxsCKcP6aT4YW1C7NzS0YsH5FYOk0jEYgAEIgipLVGs9mMpKJLMxDSWp0/ItEnjHAcwJzMC9aEvzPGYHt7e+b8LDn3WstaC4HJnDARmAoZYxCYAMYYuI6LzY3NKBpZy5xv9WtPOh5FJRaBwA8QBAF838f1X18Px4qZFchsGb/wmZP2jTVRaTWBiToeP7q7XaysrMAYk0s0AEAvMlFFHbGhyLwIjP0x/LGP9fV1bHQ25qZUplVrPBovdOK0Olljw3EwicZUxBiD7k4XnY1OFLHT12eJHg6H7z0pkrAnq9q4SKVawdUrV1GtVuemUy6p5XneO0+Il1pYhGllDQQEarUaOp0OVldXoyjkNSZOo4vF+SvTsT9GEASABYIgQK1eg+u6cB0X9XodzUYTUskZAQDnjkRa+xK9t7d3rgviHT5LYN7reaS5uVqoasVZ5BNfNLWEEFBKYbrdTiJ2bpF3cZ6xoZSC1hpKqRmZZUm8GVlmYEspoZSC4zgoFApwHCe5yIeoMBCA4zgolUoolUooFApQSiVKrQ/yNF5KiWKxiGq1imq1ikKhEP3tcFmZDyKilEKtVkOz2US9XkexWPz4IuJ5HiqVClqtFtrtNur1OgqFQuIxkrvIcDREq9XCxYsXsba2hlqtFg32jyoiFhbr6+vodDpot9uoVCpI40lOriLGGKy0VnD58mVsbGyg2WymUrGAnEWkktjd3cX29jbW1tZQrVZTiQaQwoS4KEIIdK92ceXKFXQ6HTQaDbium3hsTMlN5PLOZdy4cQOXLl3CyspKKiU3Ti4iW5e3cPvObbTbbdRqNZRKpVQlgBxEurtd3P39XTSbTZRKJbium7oEkKGIlBJ3fnsHt+/cnllPpTUmTpOJyKX1S/jiyy+wtbUVLdXT2HO8i9REpJTY3tnGp7c/xfUb1yGlnPn0M//CQHe3u9SFUkqUSiXUG3V0Oh1s72yjWq3OdDjXLyMYY1LZkHzo77Twl2qowSLUYBFqsAg1WIQaLEINFqEGi1CDRajBItRgEWqwCDVYhBosQg0WoQaLUINFqMEi1GARarAINViEGixCDRahBotQg0WowSLUYBFqsAg1WIQaLEINFqEGi1CDRajBItRgEWqwCDVYhBosQg0WoQaLUINFqMEi1GARarAINViEGixCDRahBotQg0WowSLUYBFqsAg1WIQaLEINFqEGi1CDRajBItRgEWqwCDVYhBosQg0WoQaLUINFqMEi1GARarAINViEGixCDRahBotQg0WowSLUYBFqsAg1WIQaLEINFqEGi1CDRajBItRgEWqwCDVYhBosQg0WoQaLUINFqMEi1GARarAINViEGixCDRahBotQg0WowSLUYBFqsAg1WIQaLEINFqEGi1CDRajBItTQvf39pS5UjgOnVEKxVoMuFH7xvhAiad/Ohf7HV39MdAMhBMqtFlrb2+h8sofm5gaEkJBSzpyTNTrpDay1GLx4gcGLF/jx3j1U2m3s3v0dLly7BqUUpDyRylIoschpBoeHePD1n9HY2cG1L/+ASr0Ox3GgtYaUMjOZzAZ7/4cf8O2fvsLBkyfo9/vwPA++78MYA2tt6u1lWrWCN2+w/9e/4OmjRzg8PMRgMMB4PM5EJvXU+gW+j5///jcMRiN0trbQbrdRqVTgum6qqZa9CAA1HqN37xt44zF838eFCxdQr9fhui6AdIpALiIAUPE8/PjoEYIggBACUkrUarVIJim5iQghUHr1X+zv70NrHVUypRSUUomjkpsIAKw6Dh4/e4Z/F4sol8solUpwXRfFYhFAshTLVQQAKqMhDg4O0Gg00Gg0UC6XowglIfdFY7tQQK/Xw/Pnz3F4eIjXr1/D9/3E5Th3kVaxiKOjI/R6PfR6PfT7fQyHw8RzS+4iBa3hj0bo9/t4+fIljo6O4HkegiBIdN8Psh8RxmAwGODo6AjHx8cYDocIguDjiggACGsxHA4xGAzw5s2bGZFlZfSiJS/NtZExBtb3MRwO4XkeRqNR4ohoLChy1lnLNG6thTEGvu9jPFm2GGPOfZ84Wsj3ZNe0ozHheOfFnN8twlQmCIKoYiWKyNHx8Tsb88c+RqMhqtUqXNeF47pQSgHThoWAtXYpoWnn00hb/eDhw0VajBoUAiiXylhprWB1pYVGoxFGbfp+rJPvv206EgCg3TlPQH7RYNhq1PBwPMZPz/+Dg4NnKJfK6O7sYHW1BRgTnSsmkcoL7UwWbO/E2hMZY2CshQ0CBEGA4XiEh4/+iXarhV9duwalNawxuctoZ8H9QNificjkkH4AE/iQSuFlv49vvv0Oe3ufoFwshlUoRxmt9GIL4GlnrLWQExGrFAJfQvg+hBDwxz7u37+P39y6Bcdxco2MFFLifQeECH8WItzdTTZDUiko7UA500PDNwYPvv8+HPiTa/NAxkvgWce0Ks0wkRJSRLs8pTWU1njreXj85HEkHp6erZC0xuC9x0RoZuKaiIUdFNE+XE4i9XMv3GtAiFyiogN/meXzyXgJhWzUYTFJQykE/vX0KW7u7YWTJsJVQFZjRZul9wEnMvGJbZpOQki86r+C53konKqMWaSZDgI/+V2mMiY2U4vwn17vEFubG5lXLW2WSq1Z7DQ6M2MofO/wRSgyLcFZDXptEkZk5nOOF4TJO2/fvp17XdpCOuleOc508Ftjo4rnpfCEZBFSSa0pFnZmcWmtBYyBNxqhmNKj0bNIZ7DHiKISSzN/PIZN+ADufSQov2cTRWQiomK70PiaLU1SE5nXsanI5IRU2jmLzCICzG7IZn6fgZRO+vTiXZy54MwAbTMUAU7mmcxn9kxvH0+xjNF5hD0PMn/2a3MbIxwRWrAINViEGixCDRahBotQg0WowSLUYBFqsAg1WIQaLEINFqEGi1CDRajBItRgEWqwCDVYhBosQg0WoQaLUINFqMEi1GARarAINViEGixCDRahBotQg0WowSLUYBFqsAg1WIQaulyrZd7IT8fH0J4XvfaNgQBm/t+UpPwPRUQzMkoYaPAAAAAASUVORK5CYII=)  bottom right  no-repeat,\n              url(data:image/png;base64,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)   bottom left   no-repeat,\n              url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAF8CAYAAACNGugZAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAK7SURBVHic7dnBbdtAEEbhJTmWiQAuwrnrGMAFJ83kGvjoCnKLL1JsLt3EAPMweF8F/8OuJNJeXn68nKOBtXpAFkNoDKFpExLLslRvSOGJ0PQJWbcetyu2davekCLWtcuJbE1OJCKqN6SILZqciFcLxhOhaXQiW5MTafOs1eXpt8dxjDFizlm9IUV8/P+o3pAi7vd79YYUcbvdqjekiH3fqzekiOv1Wr0hRZ9vrS4hfX4Qz7PFf976nIghNIbQGEJjCI0hNIbQtAmJ5+/P1RtSLHPOFi8k/u2XxhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhAaQ2gMoTGExhCa+Pv2Vr0hRfz+9bN6Q4o2V8sQGkNoDKExhMYQGkNoDKGJZVmqN6SI0SVkWXvcrvj3/l69IUX8eX2t3pAiLo+P1RtSxMO+V29IEQ+XS/WGFLFFVG9I0efr9zzP6g0p4pyzekOKOD6P6g0pYh5NQo7js3pDiph9rlaTEzm6fEbaXK0+H/Y2V8sQlphdnrXaPDT2eIgfI0aT95Eer4ej0RtimxMxhMYQGkNoDKExhMYQGkNoDKExhMYQGkNoDKExhMYQGkNoDKExhMYQGkNoDKExhMYQGkNoDKExhMYQGkNoDKExhMYQGkNoDKExhMYQmvj29FS9IcUXITlcTdasl1AAAAAASUVORK5CYII=) bottom        repeat-x,\n              url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACZSURBVGiB7dorDsMwEADR3coFDfAJTHyBSAaVApL7s6g3all5on4GzGNG69HSzeW+POPL1m2N6Ta93/tjj3It0VqLeZ5jjBG996i1RiklMvPwjMsnP/xPhtAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMIjSE0htAYQmMITTlzG0X0k41k5qljsiNejo8Ha/fddxAAAAAASUVORK5CYII=) right repeat-y,\n              #383538;\n  min-height: 500px;\n  height: 95vh;\n  color: white;\n  padding: 10px 20px;\n}\n\n#sidebar a {\n  color: lightblue;\n}\n\n#sidebar ul {\n  padding: 5px 20px;\n  list-style-type: square;\n}\n\n#sidebar ul li {\n  padding: 5px;\n}\n\n#sidebar a.active {\n  font-weight: bold;\n}\n", ""]);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Coupler';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__client_error_client_error_component__ = __webpack_require__("../../../../../src/app/client-error/client-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__validation_error_validation_error_component__ = __webpack_require__("../../../../../src/app/validation-error/validation-error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_26__linkage_result_detail_linkage_result_detail_component__["a" /* LinkageResultDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_29__client_error_client_error_component__["a" /* ClientErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_30__validation_error_validation_error_component__["a" /* ValidationErrorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot()
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
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/client-error/client-error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.error {\n  display: inline-block;\n  background: #cc0000;\n  border: 1px solid #bb0000;\n  color: white;\n  padding: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/client-error/client-error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"error\">\n  Client error: there was an issue connecting to the server.\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/client-error/client-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__("../../../../../src/app/errors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientErrorComponent = /** @class */ (function () {
    function ClientErrorComponent() {
    }
    ClientErrorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* ClientError */])
    ], ClientErrorComponent.prototype, "error", void 0);
    ClientErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client-error',
            template: __webpack_require__("../../../../../src/app/client-error/client-error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/client-error/client-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientErrorComponent);
    return ClientErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/comparator-form/comparator-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".buttons {\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comparator-form/comparator-form.component.html":
/***/ (function(module, exports) {

module.exports = "<app-client-error *ngIf=\"clientError\" [error]=\"clientError\">\n</app-client-error>\n<ng-template [ngIf]=\"comparator\">\n  <h2>Linkage: {{linkage.name}} (Comparator)</h2>\n  <app-validation-error *ngIf=\"validationError\" [error]=\"validationError\">\n  </app-validation-error>\n  <form (ngSubmit)=\"save()\" #comparatorForm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"comparator-kind\">Kind</label>\n        <select class=\"form-control\" id=\"comparator-kind\"\n                required [(ngModel)]=\"comparator.kind\" name=\"kind\">\n          <option></option>\n          <option value=\"compare\">Generic comparison</option>\n          <option value=\"strcompare\">String comparison</option>\n          <option value=\"within\">Within range</option>\n        </select>\n      </div>\n    </div>\n    <ng-template [ngIf]=\"comparator.kind == 'compare'\">\n      <div class=\"row\">\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"comparator-operation\">Operator</label>\n          <select class=\"form-control\" id=\"comparator-operation\"\n                  required [(ngModel)]=\"comparator.options.operation\" name=\"operation\">\n            <option></option>\n            <option value=\"equal\">==</option>\n            <option value=\"not_equal\">!=</option>\n            <option value=\"greater_than\">&gt;</option>\n            <option value=\"greater_than_or_equal\">&gt;=</option>\n            <option value=\"less_than\">&lt;</option>\n            <option value=\"less_than_or_equal\">&lt;=</option>\n          </select>\n        </div>\n      </div>\n      <ng-template [ngIf]=\"comparator.options.operation\">\n        <h3>Fields</h3>\n        <div class=\"row\" *ngFor=\"let set of comparator.sets; let i = index\">\n          <div class=\"col-sm-3 form-group\">\n            <label for=\"comparator-set-{{i}}-field1\">\n              Field from Dataset 1 ({{linkage.dataset1.name}})\n            </label>\n            <select class=\"form-control\" id=\"comparator-set-{{i}}-field1\"\n              required [(ngModel)]=\"set.field1\" name=\"set-{{i}}-field1\">\n              <option></option>\n              <option *ngFor=\"let field of linkage.dataset1.fields\" [value]=\"field.name\">\n                {{field.name}} ({{field.kind}})\n              </option>\n            </select>\n          </div>\n          <div class=\"col-sm-3 form-group\">\n            <label for=\"comparator-set-{{i}}-field2\">\n              Field from Dataset 2 ({{linkage.dataset2.name}})\n            </label>\n            <select class=\"form-control\" id=\"comparator-set-{{i}}-field2\"\n              required [(ngModel)]=\"set.field2\" name=\"set-{{i}}-field2\">\n              <option></option>\n              <option *ngFor=\"let field of linkage.dataset2.fields\" [value]=\"field.name\">\n                {{field.name}} ({{field.kind}})\n              </option>\n            </select>\n          </div>\n          <div class=\"col-sm-1 form-group\" *ngIf=\"comparator.sets.length > 1\">\n            <label>&nbsp;</label>\n            <button type=\"button\" class=\"btn btn-secondary align-bottom\" (click)=\"removeRow(i)\">\n              <i class=\"fa fa-minus-circle\"></i> Remove\n            </button>\n          </div>\n        </div>\n        <div>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addRow()\"\n            [disabled]=\"!comparatorForm.form.valid\">\n            <i class=\"fa fa-plus-circle\"></i> Add comparison\n          </button>\n        </div>\n      </ng-template>\n    </ng-template>\n    <div class=\"buttons\">\n      <button type=\"submit\" class=\"btn btn-success\"\n              [disabled]=\"!comparatorForm.form.valid\">\n        Save\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">\n        Cancel\n      </button>\n    </div>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/comparator-form/comparator-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparatorFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comparator__ = __webpack_require__("../../../../../src/app/comparator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__comparator_service__ = __webpack_require__("../../../../../src/app/comparator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__errors__ = __webpack_require__("../../../../../src/app/errors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ComparatorFormComponent = /** @class */ (function () {
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
            subscribe(function (result) {
            if (result instanceof __WEBPACK_IMPORTED_MODULE_5__linkage__["a" /* Linkage */]) {
                _this.linkage = result;
                if (_this.comparatorId == 'new') {
                    _this.comparator = new __WEBPACK_IMPORTED_MODULE_6__comparator__["a" /* Comparator */]();
                    _this.comparator.linkageId = _this.linkage.id;
                    _this.addRow();
                }
                else {
                    _this.comparator = _this.linkage.findComparator(+_this.comparatorId);
                }
            }
            else {
                _this.clientError = result;
            }
        });
    };
    ComparatorFormComponent.prototype.addRow = function () {
        this.comparator.sets.push({ field1: "", field2: "" });
    };
    ComparatorFormComponent.prototype.removeRow = function (index) {
        this.comparator.sets.splice(index, 1);
    };
    ComparatorFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    ComparatorFormComponent.prototype.save = function () {
        var _this = this;
        var obs;
        if (this.comparator.id) {
            obs = this.comparatorService.update(this.comparator);
        }
        else {
            obs = this.comparatorService.create(this.comparator);
        }
        obs.subscribe(function (result) {
            if (result instanceof __WEBPACK_IMPORTED_MODULE_6__comparator__["a" /* Comparator */]) {
                _this.goBack();
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_9__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_9__errors__["b" /* ValidationError */]) {
                _this.validationError = result;
            }
        });
    };
    ComparatorFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comparator-form',
            template: __webpack_require__("../../../../../src/app/comparator-form/comparator-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comparator-form/comparator-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__linkage_service__["a" /* LinkageService */],
            __WEBPACK_IMPORTED_MODULE_8__comparator_service__["a" /* ComparatorService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], ComparatorFormComponent);
    return ComparatorFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/comparator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract_service__ = __webpack_require__("../../../../../src/app/abstract-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comparator__ = __webpack_require__("../../../../../src/app/comparator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ComparatorService = /** @class */ (function (_super) {
    __extends(ComparatorService, _super);
    function ComparatorService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.comparatorsUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + '/comparators';
        _this.attributeMap = {
            id: "id",
            kind: "kind",
            options: "options",
            order: "order",
            linkage_id: "linkageId"
        };
        return _this;
    }
    ComparatorService.prototype.getComparators = function () {
        var _this = this;
        var url = this.comparatorsUrl;
        return this.http.get(url).
            map(function (data) { return data.map(function (d) { return _this.build(d); }); }).
            catch(this.handleClientError);
    };
    ComparatorService.prototype.getComparator = function (id) {
        var _this = this;
        var url = this.comparatorsUrl + "/" + id;
        return this.http.get(url).
            map(function (data) { return _this.build(data); }).
            catch(this.handleClientError);
    };
    ComparatorService.prototype.create = function (comparator) {
        if (comparator.id) {
            throw new Error('Comparator must not already have `id` when creating.');
        }
        var url = this.comparatorsUrl;
        return this.http.post(url, this.unbuild(comparator)).
            map(function (data) {
            comparator.id = data.id;
            return comparator;
        }).
            catch(this.handleError);
    };
    ComparatorService.prototype.update = function (comparator) {
        var url = this.comparatorsUrl + "/" + comparator.id;
        var data = JSON.stringify(this.unbuild(comparator));
        return this.http.put(url, this.unbuild(comparator)).
            map(function (data) { return comparator; }).
            catch(this.handleError);
    };
    ComparatorService.prototype.build = function (attribs) {
        var result = new __WEBPACK_IMPORTED_MODULE_5__comparator__["a" /* Comparator */]();
        for (var key in attribs) {
            if (key in this.attributeMap) {
                var mappedKey = this.attributeMap[key];
                result[mappedKey] = attribs[key];
            }
        }
        if ('set_1' in attribs && 'set_2' in attribs) {
            result.sets = attribs.set_1.map(function (field1, i) {
                var value = { field1: field1, field2: attribs.set_2[i] };
                return value;
            });
        }
        return result;
    };
    ComparatorService.prototype.unbuild = function (comparator) {
        var result = {};
        for (var key in this.attributeMap) {
            var mappedKey = this.attributeMap[key];
            result[key] = comparator[mappedKey];
        }
        result.set_1 = [];
        result.set_2 = [];
        comparator.sets.forEach(function (s) {
            result.set_1.push(s.field1);
            result.set_2.push(s.field2);
        });
        return result;
    };
    ComparatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ComparatorService);
    return ComparatorService;
}(__WEBPACK_IMPORTED_MODULE_4__abstract_service__["a" /* AbstractService */]));



/***/ }),

/***/ "../../../../../src/app/comparator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ComparatorKind */
/* unused harmony export ComparatorSet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comparator; });
var ComparatorKind;
(function (ComparatorKind) {
    ComparatorKind[ComparatorKind["compare"] = 0] = "compare";
    ComparatorKind[ComparatorKind["strcompare"] = 1] = "strcompare";
    ComparatorKind[ComparatorKind["within"] = 2] = "within";
})(ComparatorKind || (ComparatorKind = {}));
var ComparatorSet = /** @class */ (function () {
    function ComparatorSet() {
    }
    return ComparatorSet;
}());

var Comparator = /** @class */ (function () {
    function Comparator() {
        this.sets = [];
        this.options = {};
    }
    return Comparator;
}());



/***/ }),

/***/ "../../../../../src/app/comparators-list/comparators-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  margin: 0 0 10px 0;\n  padding: 0;\n}\nul::after {\n  content: \"\";\n  display: block;\n  height: 0px;\n  clear: both;\n}\nli {\n  display: block;\n  float: left;\n  width: 250px;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 5px;\n  margin-right: 5px;\n  cursor: pointer;\n}\ndiv.set span:after {\n  content: \", \";\n}\ndiv.set span:last-child:after {\n  content: \"\";\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comparators-list/comparators-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let comparator of linkage.comparators\" (click)=\"gotoDetail(comparator.id)\">\n    <div><strong>Kind:</strong> {{comparator.kind}}</div>\n    <div *ngIf=\"comparator.kind == 'compare'\">\n      <strong>Operator:</strong> {{comparator.options.operation}}\n    </div>\n    <div class=\"set\">\n      <strong>Set 1:</strong>\n      <span *ngFor=\"let set of comparator.sets\">{{set.field1}}</span>\n    </div>\n    <div class=\"set\">\n      <strong>Set 2:</strong>\n      <span *ngFor=\"let set of comparator.sets\">{{set.field2}}</span>\n    </div>\n  </li>\n</ul>\n<p *ngIf=\"linkage.comparators && linkage.comparators.length == 0\">\n  There are currently no comparators.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/comparators-list/comparators-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparatorsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComparatorsListComponent = /** @class */ (function () {
    function ComparatorsListComponent(router) {
        this.router = router;
    }
    ComparatorsListComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/linkages', this.linkage.id, 'comparators', id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__linkage__["a" /* Linkage */])
    ], ComparatorsListComponent.prototype, "linkage", void 0);
    ComparatorsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comparators-list',
            template: __webpack_require__("../../../../../src/app/comparators-list/comparators-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comparators-list/comparators-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ComparatorsListComponent);
    return ComparatorsListComponent;
}());



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

module.exports = "<app-client-error *ngIf=\"clientError\" [error]=\"clientError\">\n</app-client-error>\n<div *ngIf=\"linkage\">\n  <h2>Linkage: {{linkage.name}} (Comparators)</h2>\n  <app-comparators-list [linkage]=\"linkage\"></app-comparators-list>\n\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"newComparator()\">\n    New comparator\n  </button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">\n    Back\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/comparators/comparators.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparatorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__errors__ = __webpack_require__("../../../../../src/app/errors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ComparatorsComponent = /** @class */ (function () {
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
                subscribe(function (result) {
                if (result instanceof __WEBPACK_IMPORTED_MODULE_4__linkage__["a" /* Linkage */]) {
                    _this.linkage = result;
                }
                else if (result instanceof __WEBPACK_IMPORTED_MODULE_6__errors__["a" /* ClientError */]) {
                    _this.clientError = result;
                }
            });
        }
    };
    ComparatorsComponent.prototype.goBack = function () {
        this.router.navigate(['/linkages', this.linkage.id]);
    };
    ComparatorsComponent.prototype.newComparator = function () {
        this.router.navigate(['/linkages', this.linkage.id, 'comparators', 'new']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__linkage__["a" /* Linkage */])
    ], ComparatorsComponent.prototype, "linkage", void 0);
    ComparatorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comparators',
            template: __webpack_require__("../../../../../src/app/comparators/comparators.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comparators/comparators.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__linkage_service__["a" /* LinkageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ComparatorsComponent);
    return ComparatorsComponent;
}());



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

module.exports = "<h2>Dashboard</h2>\n\n<app-client-error *ngIf=\"clientError\" [error]=\"clientError\">\n</app-client-error>\n\n<h3>Recent Jobs</h3>\n<app-jobs-list [jobs]=\"jobs\"></app-jobs-list>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__errors__ = __webpack_require__("../../../../../src/app/errors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(jobService) {
        this.jobService = jobService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobService.getJobs().subscribe(function (result) {
            if (result instanceof Array) {
                /* sort by newest */
                result.sort(function (a, b) {
                    if (a.startedAt < b.startedAt) {
                        return -1;
                    }
                    if (b.startedAt < a.startedAt) {
                        return 1;
                    }
                    return 0;
                });
                _this.jobs = result;
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_2__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__job_service__["a" /* JobService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



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

module.exports = "<app-client-error *ngIf=\"clientError\" [error]=\"clientError\">\n</app-client-error>\n<ng-template [ngIf]=\"dataset\">\n  <h2>Dataset: {{dataset.name || \"new\"}}</h2>\n  <app-validation-error *ngIf=\"validationError\" [error]=\"validationError\">\n  </app-validation-error>\n  <form (ngSubmit)=\"save()\" #datasetForm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-name\">Name</label>\n        <input class=\"form-control\" id=\"dataset-name\"\n               type=\"string\" required [(ngModel)]=\"dataset.name\" name=\"name\">\n      </div>\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-kind\">Type</label>\n        <select class=\"form-control\" id=\"dataset-kind\"\n                required [(ngModel)]=\"dataset.kind\" name=\"kind\">\n          <option></option>\n          <option value=\"mysql\">MySQL</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-host\">Host</label>\n        <input class=\"form-control\" id=\"dataset-host\"\n               required [(ngModel)]=\"dataset.host\" name=\"host\">\n      </div>\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-username\">Username</label>\n        <input class=\"form-control\" id=\"dataset-username\"\n               required [(ngModel)]=\"dataset.username\" name=\"username\">\n      </div>\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-password\">Password</label>\n        <input class=\"form-control\" id=\"dataset-password\"\n               type=\"password\" required [(ngModel)]=\"dataset.password\" name=\"password\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-database-name\">Database Name</label>\n        <input class=\"form-control\" id=\"dataset-database-name\"\n               required [(ngModel)]=\"dataset.databaseName\" name=\"databaseName\">\n      </div>\n      <div class=\"col-sm-2 form-group\">\n        <label for=\"dataset-table-name\">Table Name</label>\n        <input class=\"form-control\" id=\"dataset-table-name\"\n               required [(ngModel)]=\"dataset.tableName\" name=\"tableName\">\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\"\n            [disabled]=\"!datasetForm.form.valid\">\n      Save\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">\n      Cancel\n    </button>\n  </form>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/dataset-form/dataset-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dataset__ = __webpack_require__("../../../../../src/app/dataset.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dataset_service__ = __webpack_require__("../../../../../src/app/dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__errors__ = __webpack_require__("../../../../../src/app/errors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DatasetFormComponent = /** @class */ (function () {
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
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_6__dataset__["a" /* Dataset */]());
            }
            else {
                return _this.datasetService.getDataset(+params['id'], false);
            }
        }).
            subscribe(function (result) {
            if (result instanceof __WEBPACK_IMPORTED_MODULE_6__dataset__["a" /* Dataset */]) {
                _this.dataset = result;
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_8__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
        });
    };
    DatasetFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    DatasetFormComponent.prototype.save = function () {
        var _this = this;
        var obs;
        if (this.dataset.id) {
            obs = this.datasetService.update(this.dataset);
        }
        else {
            obs = this.datasetService.create(this.dataset);
        }
        obs.subscribe(function (result) {
            if (result instanceof __WEBPACK_IMPORTED_MODULE_6__dataset__["a" /* Dataset */]) {
                _this.goBack();
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_8__errors__["a" /* ClientError */]) {
                console.log('client error:', result);
                _this.clientError = result;
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_8__errors__["b" /* ValidationError */]) {
                console.log('validation error:', result);
                _this.validationError = result;
            }
            else {
                console.log('unknown error:', result);
            }
        });
    };
    DatasetFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dataset-form',
            template: __webpack_require__("../../../../../src/app/dataset-form/dataset-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dataset-form/dataset-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__dataset_service__["a" /* DatasetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], DatasetFormComponent);
    return DatasetFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dataset.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract_service__ = __webpack_require__("../../../../../src/app/abstract-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dataset__ = __webpack_require__("../../../../../src/app/dataset.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DatasetService = /** @class */ (function (_super) {
    __extends(DatasetService, _super);
    function DatasetService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.datasetsUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + '/datasets';
        _this.headers = new Headers({ 'Content-Type': 'application/json' });
        _this.attributeMap = {
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
        return _this;
    }
    DatasetService.prototype.getDatasets = function () {
        var _this = this;
        return this.http.get(this.datasetsUrl).
            map(function (data) { return data.map(function (d) { return _this.build(d); }); }).
            catch(this.handleClientError);
    };
    DatasetService.prototype.getDataset = function (id, includeFields) {
        var _this = this;
        if (includeFields === void 0) { includeFields = true; }
        var url = this.datasetsUrl + "/" + id;
        var options = { params: { include_fields: includeFields ? 'true' : 'false' } };
        return this.http.get(url, options).
            map(function (data) { return _this.build(data); }).
            catch(this.handleClientError);
    };
    DatasetService.prototype.create = function (dataset) {
        if (dataset.id) {
            throw new Error('Dataset must not already have `id` when creating.');
        }
        var url = this.datasetsUrl;
        return this.http.post(url, this.unbuild(dataset)).
            map(function (data) {
            dataset.id = data.id;
            return dataset;
        }).
            catch(this.handleError);
    };
    DatasetService.prototype.update = function (dataset) {
        var url = this.datasetsUrl + "/" + dataset.id;
        return this.http.put(url, this.unbuild(dataset)).
            map(function (data) { return dataset; }).
            catch(this.handleError);
    };
    DatasetService.prototype.build = function (attribs) {
        var result = new __WEBPACK_IMPORTED_MODULE_5__dataset__["a" /* Dataset */]();
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
    DatasetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DatasetService);
    return DatasetService;
}(__WEBPACK_IMPORTED_MODULE_4__abstract_service__["a" /* AbstractService */]));



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
var Dataset = /** @class */ (function () {
    function Dataset() {
    }
    return Dataset;
}());



/***/ }),

/***/ "../../../../../src/app/datasets-list/datasets-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  padding: 0;\n}\nul::after {\n  content: \"\";\n  display: block;\n  height: 0px;\n  clear: both;\n}\nli {\n  display: block;\n  float: left;\n  width: 200px;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 5px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n", ""]);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasetsListComponent = /** @class */ (function () {
    function DatasetsListComponent(router) {
        this.router = router;
        this.datasets = [];
    }
    DatasetsListComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/datasets', id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], DatasetsListComponent.prototype, "datasets", void 0);
    DatasetsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-datasets-list',
            template: __webpack_require__("../../../../../src/app/datasets-list/datasets-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/datasets-list/datasets-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DatasetsListComponent);
    return DatasetsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/datasets/datasets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  padding: 0;\n}\nul::after {\n  content: \"\";\n  display: block;\n  height: 0px;\n  clear: both;\n}\nli {\n  display: block;\n  float: left;\n  width: 200px;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 5px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n.error {\n  background-color: firebrick;\n  color: white;\n}\n.error a {\n  color: white;\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datasets/datasets.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Datasets</h2>\n<app-client-error *ngIf=\"clientError\" [error]=\"clientError\">\n</app-client-error>\n<div class=\"datasets\" *ngIf=\"datasets\">\n  <app-datasets-list [datasets]=\"datasets\"></app-datasets-list>\n\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"newDataset()\">\n    New dataset\n  </button>\n</div>\n<div class=\"error p-2\" *ngIf=\"error\">\n  <ng-template [ngIf]=\"!showError\" [ngIfElse]=\"errorTpl\">\n    There was an error communicating with the database\n    (<a href=\"#\" (click)=\"showError = true; false\">details</a>).\n  </ng-template>\n  <ng-template #errorTpl>\n    There was an error communicating with the database:\n    <div>{{ error | json }}</div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/datasets/datasets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataset_service__ = __webpack_require__("../../../../../src/app/dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors__ = __webpack_require__("../../../../../src/app/errors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatasetsComponent = /** @class */ (function () {
    function DatasetsComponent(datasetService, router) {
        this.datasetService = datasetService;
        this.router = router;
    }
    DatasetsComponent.prototype.ngOnInit = function () {
        this.getDatasets();
    };
    DatasetsComponent.prototype.getDatasets = function () {
        var _this = this;
        this.datasetService.getDatasets().subscribe(function (result) {
            if (result instanceof Array) {
                _this.datasets = result;
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_3__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
        });
    };
    DatasetsComponent.prototype.newDataset = function () {
        this.router.navigate(['/datasets', 'new']);
    };
    DatasetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-datasets',
            template: __webpack_require__("../../../../../src/app/datasets/datasets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/datasets/datasets.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dataset_service__["a" /* DatasetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DatasetsComponent);
    return DatasetsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/errors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ValidationError; });
var ClientError = /** @class */ (function () {
    function ClientError(error) {
        this.error = error;
    }
    return ClientError;
}());

var ValidationError = /** @class */ (function () {
    function ValidationError(errors) {
        this.errors = errors;
    }
    return ValidationError;
}());



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

module.exports = "<app-client-error *ngIf=\"clientError\" [error]=\"clientError\">\n</app-client-error>\n<ng-template [ngIf]=\"job\">\n  <h2>Linkage: {{linkage.name}}, Job {{job.id}}</h2>\n\n  <table>\n    <thead>\n      <tr>\n        <th>Status</th>\n        <th>Started At</th>\n        <th>Ended At</th>\n        <th *ngIf=\"job.error\">Error</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>\n          {{job.status}}\n          <i *ngIf=\"!job.isStopped()\" class=\"fa fa-cog fa-spin\" style=\"font-size: larger\"></i>\n        </td>\n        <td>\n          <ng-template [ngIf]=\"job.startedAt\" [ngIfElse]=\"jobNotStarted\">\n            {{job.startedAt | date:\"short\"}}\n          </ng-template>\n          <ng-template #jobNotStarted>\n            Not yet started\n          </ng-template>\n        </td>\n        <td>\n          <ng-template [ngIf]=\"job.endedAt\" [ngIfElse]=\"jobNotEnded\">\n            {{job.endedAt | date:\"short\"}}\n          </ng-template>\n          <ng-template #jobNotEnded>\n            Not yet ended\n          </ng-template>\n        </td>\n        <td *ngIf=\"job.error\">{{job.error}}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div *ngIf=\"job.linkageResult && job.status == 'finished'\" class=\"results\">\n    <h3>Results</h3>\n    <p>\n      <strong>Number of matches:</strong>\n      {{job.linkageResult.matchCount}}\n    </p>\n\n    <app-linkage-result-detail\n      [linkageResult]=\"job.linkageResult\"\n      [linkage]=\"linkage\">\n    </app-linkage-result-detail>\n  </div>\n\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"goBack()\">Back</button>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/job-detail/job-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__job__ = __webpack_require__("../../../../../src/app/job.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__errors__ = __webpack_require__("../../../../../src/app/errors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var JobDetailComponent = /** @class */ (function () {
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
            subscribe(function (result) {
            if (result instanceof __WEBPACK_IMPORTED_MODULE_5__linkage__["a" /* Linkage */]) {
                _this.linkage = result;
                _this.job = _this.linkage.findJob(+_this.jobId);
                if (_this.job.status == "running" || _this.job.status == "initialized") {
                    _this.refreshTimer = setTimeout(_this.refresh.bind(_this), 1000);
                }
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_9__errors__["a" /* ClientError */]) {
                _this.clientError = result;
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
    JobDetailComponent.prototype.refresh = function () {
        var _this = this;
        this.jobService.getJob(this.job.id).subscribe(function (result) {
            if (result instanceof __WEBPACK_IMPORTED_MODULE_6__job__["a" /* Job */]) {
                _this.job = result;
                if (_this.job.status == "running" || _this.job.status == "initialized") {
                    _this.refreshTimer = setTimeout(_this.refresh.bind(_this), 1000);
                }
                else {
                    _this.refreshTimer = undefined;
                }
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_9__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
        });
    };
    JobDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-job-detail',
            template: __webpack_require__("../../../../../src/app/job-detail/job-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/job-detail/job-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__linkage_service__["a" /* LinkageService */],
            __WEBPACK_IMPORTED_MODULE_8__job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], JobDetailComponent);
    return JobDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/job.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract_service__ = __webpack_require__("../../../../../src/app/abstract-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job__ = __webpack_require__("../../../../../src/app/job.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linkage_result_service__ = __webpack_require__("../../../../../src/app/linkage-result.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JobService = /** @class */ (function (_super) {
    __extends(JobService, _super);
    function JobService(http, linkageResultService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.linkageResultService = linkageResultService;
        _this.jobsUrl = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + '/jobs';
        _this.attributeMap = {
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
        return _this;
    }
    JobService.prototype.getJobs = function () {
        var _this = this;
        return this.http.get(this.jobsUrl).
            map(function (data) { return data.map(function (d) { return _this.build(d); }); }).
            catch(this.handleClientError);
    };
    JobService.prototype.getJob = function (id) {
        var _this = this;
        var url = this.jobsUrl + "/" + id;
        return this.http.get(url).
            map(function (data) { return _this.build(data); }).
            catch(this.handleClientError);
    };
    JobService.prototype.create = function (job) {
        if (job.id) {
            throw new Error('Job must not already have `id` when creating.');
        }
        var url = this.jobsUrl;
        return this.http.post(url, this.unbuild(job)).
            map(function (data) {
            job.id = data.id;
            return job;
        }).
            catch(this.handleError);
    };
    JobService.prototype.build = function (attribs) {
        var result = new __WEBPACK_IMPORTED_MODULE_5__job__["a" /* Job */]();
        for (var key in attribs) {
            var value = attribs[key];
            if (key in this.attributeMap) {
                var mappedKey = this.attributeMap[key];
                switch (mappedKey) {
                    case 'startedAt':
                    case 'endedAt':
                        if (value) {
                            value = new Date(value);
                        }
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
    JobService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__linkage_result_service__["a" /* LinkageResultService */]])
    ], JobService);
    return JobService;
}(__WEBPACK_IMPORTED_MODULE_4__abstract_service__["a" /* AbstractService */]));



/***/ }),

/***/ "../../../../../src/app/job.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
var Job = /** @class */ (function () {
    function Job() {
    }
    Job.prototype.isStopped = function () {
        return this.status === "finished" || this.status === "failed";
    };
    return Job;
}());



/***/ }),

/***/ "../../../../../src/app/jobs-list/jobs-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  margin: 0 0 10px 0;\n  padding: 0;\n}\nul::after {\n  content: \"\";\n  display: block;\n  height: 0px;\n  clear: both;\n}\nli {\n  display: block;\n  float: left;\n  width: 250px;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 5px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jobs-list/jobs-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let job of jobs\" (click)=\"gotoDetail(job)\">\n    <div><strong>ID:</strong> {{job.id}}</div>\n    <div><strong>Status:</strong> {{job.status}}</div>\n    <div><strong>Started:</strong> {{job.startedAt | date:\"short\"}}</div>\n    <div><strong>Ended:</strong> {{job.endedAt | date:\"short\"}}</div>\n  </li>\n</ul>\n<p *ngIf=\"jobs && jobs.length == 0\">\n  No jobs have been created yet.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/jobs-list/jobs-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobsListComponent = /** @class */ (function () {
    function JobsListComponent(router) {
        this.router = router;
    }
    JobsListComponent.prototype.gotoDetail = function (job) {
        this.router.navigate(['/linkages', job.linkageId, 'jobs', job.id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], JobsListComponent.prototype, "jobs", void 0);
    JobsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jobs-list',
            template: __webpack_require__("../../../../../src/app/jobs-list/jobs-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/jobs-list/jobs-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], JobsListComponent);
    return JobsListComponent;
}());



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

module.exports = "<app-client-error *ngIf=\"clientError\" [error]=\"clientError\">\n</app-client-error>\n<ng-template [ngIf]=\"linkage\">\n  <h2>\n    Linkage: {{linkage.name}}\n    <i class=\"fa fa-pencil-square-o\" (click)=\"edit()\"></i>\n    <i class=\"fa fa-trash\" (click)=\"confirmDeletion()\"></i>\n  </h2>\n  <p>{{linkage.description}}</p>\n\n  <h4>Datasets</h4>\n  <app-datasets-list [datasets]=\"[linkage.dataset1, linkage.dataset2]\"></app-datasets-list>\n\n  <h4>Comparators</h4>\n  <app-comparators-list [linkage]=\"linkage\"></app-comparators-list>\n\n  <h4>Jobs</h4>\n  <app-jobs-list [jobs]=\"linkage.jobs\"></app-jobs-list>\n\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"createJob()\">\n    Run\n  </button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">\n    Back\n  </button>\n\n  <ng-template #deleteConfirmation let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Delete Linkage: {{linkage.name}}</h4>\n      <button type=\"button\" class=\"close\" (click)=\"d()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Are you sure you want to delete this linkage?</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c()\">Yes</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"d()\">Cancel</button>\n    </div>\n  </ng-template>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/linkage-detail/linkage-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__job__ = __webpack_require__("../../../../../src/app/job.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__errors__ = __webpack_require__("../../../../../src/app/errors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LinkageDetailComponent = /** @class */ (function () {
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
            subscribe(function (result) {
            if (result instanceof __WEBPACK_IMPORTED_MODULE_5__linkage__["a" /* Linkage */]) {
                _this.linkage = result;
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_9__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
        });
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
        this.linkageService.delete(this.linkage).subscribe(function (result) {
            if (result instanceof __WEBPACK_IMPORTED_MODULE_5__linkage__["a" /* Linkage */]) {
                _this.goBack();
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_9__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
        });
    };
    LinkageDetailComponent.prototype.createJob = function () {
        var _this = this;
        var job = new __WEBPACK_IMPORTED_MODULE_6__job__["a" /* Job */]();
        job.kind = "linkage";
        job.linkageId = this.linkage.id;
        this.jobService.create(job).subscribe(function (result) {
            if (result instanceof __WEBPACK_IMPORTED_MODULE_6__job__["a" /* Job */]) {
                _this.router.navigate(['/linkages', _this.linkage.id, 'jobs', result.id]);
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_9__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('deleteConfirmation'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */])
    ], LinkageDetailComponent.prototype, "confirmDeletionContent", void 0);
    LinkageDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-linkage-detail',
            template: __webpack_require__("../../../../../src/app/linkage-detail/linkage-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/linkage-detail/linkage-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__linkage_service__["a" /* LinkageService */],
            __WEBPACK_IMPORTED_MODULE_8__job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], LinkageDetailComponent);
    return LinkageDetailComponent;
}());



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

module.exports = "<app-client-error *ngIf=\"clientError\" [error]=\"clientError\">\n</app-client-error>\n<ng-template [ngIf]=\"linkage\">\n  <h2>Linkage: {{linkage.name}}</h2>\n  <app-validation-error *ngIf=\"validationError\" [error]=\"validationError\">\n  </app-validation-error>\n  <form (ngSubmit)=\"save()\" #linkageForm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 form-group\">\n        <label for=\"linkage-name\">Name</label>\n        <input class=\"form-control\" id=\"linkage-name\"\n               type=\"string\" required [(ngModel)]=\"linkage.name\" name=\"name\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 form-group\">\n        <label for=\"linkage-description\">Description</label>\n        <input class=\"form-control\" id=\"linkage-description\"\n               type=\"string\" required [(ngModel)]=\"linkage.description\" name=\"description\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 form-group\">\n        <label for=\"linkage-dataset1-id\">Dataset 1</label>\n        <select class=\"form-control\" id=\"linkage-dataset1-id\"\n                required [(ngModel)]=\"linkage.dataset1Id\" name=\"dataset1Id\">\n          <option></option>\n          <option *ngFor=\"let dataset of datasets\" value=\"{{dataset.id}}\">{{dataset.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6 form-group\">\n        <label for=\"linkage-dataset2-id\">Dataset 2</label>\n        <select class=\"form-control\" id=\"linkage-dataset2-id\"\n                required [(ngModel)]=\"linkage.dataset2Id\" name=\"dataset2Id\">\n          <option></option>\n          <option *ngFor=\"let dataset of datasets\" value=\"{{dataset.id}}\">{{dataset.name}}</option>\n        </select>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\"\n            [disabled]=\"!linkageForm.form.valid\">\n      Continue\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"goBack()\">\n      Back\n    </button>\n  </form>\n</ng-template>\n<ng-template [ngIf]=\"error\">\n  <h2>Linkage</h2>\n  <div class=\"error p-2\" *ngIf=\"error\">\n    <ng-template [ngIf]=\"!showError\" [ngIfElse]=\"errorTpl\">\n      There was an error communicating with the database\n      (<a href=\"#\" (click)=\"showError = true; false\">details</a>).\n    </ng-template>\n    <ng-template #errorTpl>\n      There was an error communicating with the database:\n      <div>{{ error | json }}</div>\n    </ng-template>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/linkage-form/linkage-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dataset_service__ = __webpack_require__("../../../../../src/app/dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__errors__ = __webpack_require__("../../../../../src/app/errors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LinkageFormComponent = /** @class */ (function () {
    function LinkageFormComponent(linkageService, datasetService, route, location, router) {
        this.linkageService = linkageService;
        this.datasetService = datasetService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.datasets = [];
    }
    LinkageFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.datasetService.getDatasets().subscribe(function (result) {
            if (result instanceof Array) {
                _this.datasets = result;
                _this.getLinkage();
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_9__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
        });
    };
    LinkageFormComponent.prototype.getLinkage = function () {
        var _this = this;
        this.route.params.
            switchMap(function (params) {
            if (!params['id']) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_6__linkage__["a" /* Linkage */]());
            }
            else {
                return _this.linkageService.getLinkage(+params['id']);
            }
        }).
            subscribe(function (result) {
            if (result instanceof __WEBPACK_IMPORTED_MODULE_6__linkage__["a" /* Linkage */]) {
                _this.linkage = result;
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_9__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
        });
    };
    LinkageFormComponent.prototype.save = function () {
        var _this = this;
        var obs;
        if (this.linkage.id) {
            obs = this.linkageService.update(this.linkage);
        }
        else {
            obs = this.linkageService.create(this.linkage);
        }
        obs.subscribe(function (result) {
            if (result instanceof __WEBPACK_IMPORTED_MODULE_6__linkage__["a" /* Linkage */]) {
                _this.goNext();
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_9__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_9__errors__["b" /* ValidationError */]) {
                _this.validationError = result;
            }
        });
    };
    LinkageFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    LinkageFormComponent.prototype.goNext = function () {
        this.router.navigate(['/linkages', this.linkage.id, 'comparators']);
    };
    LinkageFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-linkage-form',
            template: __webpack_require__("../../../../../src/app/linkage-form/linkage-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/linkage-form/linkage-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__linkage_service__["a" /* LinkageService */],
            __WEBPACK_IMPORTED_MODULE_8__dataset_service__["a" /* DatasetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LinkageFormComponent);
    return LinkageFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/linkage-match.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageMatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract_service__ = __webpack_require__("../../../../../src/app/abstract-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linkage_match__ = __webpack_require__("../../../../../src/app/linkage-match.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LinkageMatchService = /** @class */ (function (_super) {
    __extends(LinkageMatchService, _super);
    function LinkageMatchService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.linkageResultsUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl + "/linkage_results";
        _this.attributeMap = {
            record_1: "record1",
            record_2: "record2",
            score: "score"
        };
        return _this;
    }
    LinkageMatchService.prototype.getLinkageMatch = function (linkageResultId, index) {
        var _this = this;
        var url = this.linkageResultsUrl + "/" + linkageResultId + "/matches/" + index;
        return this.http.get(url).
            map(function (data) { return _this.build(data); }).
            catch(this.handleClientError);
    };
    LinkageMatchService.prototype.build = function (attribs) {
        var result = new __WEBPACK_IMPORTED_MODULE_5__linkage_match__["a" /* LinkageMatch */]();
        for (var key in attribs) {
            var value = attribs[key];
            if (key in this.attributeMap) {
                var mappedKey = this.attributeMap[key];
                result[mappedKey] = value;
            }
        }
        return result;
    };
    LinkageMatchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LinkageMatchService);
    return LinkageMatchService;
}(__WEBPACK_IMPORTED_MODULE_4__abstract_service__["a" /* AbstractService */]));



/***/ }),

/***/ "../../../../../src/app/linkage-match.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageMatch; });
var LinkageMatch = /** @class */ (function () {
    function LinkageMatch() {
    }
    return LinkageMatch;
}());



/***/ }),

/***/ "../../../../../src/app/linkage-result-detail/linkage-result-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".match {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 10px;\n  border: 1px solid #ddd;\n  background-color: #eee;\n  border-radius: 5px;\n}\n\n.records {\n  overflow-x: auto;\n  margin-bottom: 1rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/linkage-result-detail/linkage-result-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-client-error *ngIf=\"clientError\" [error]=\"clientError\">\n</app-client-error>\n<div *ngIf=\"match\" class=\"match\">\n  <h4>Match #{{matchIndex + 1}}</h4>\n\n  <div class=\"records\">\n    <ng-template [ngIf]=\"linkage.dataset1Id == linkage.dataset2Id\" [ngIfElse]=\"elseBlock\">\n      <div class=\"d-flex flex-row\">\n        <div class=\"d-flex flex-column\" *ngFor=\"let field of linkage.dataset1.fields\">\n          <div class=\"font-weight-bold p-1\">{{field.name}}</div>\n          <div class=\"d-inline-flex p-1\">{{match.record1[field.name]}}</div>\n          <div class=\"d-inline-flex p-1\">{{match.record2[field.name]}}</div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template #elseBlock>\n      <div class=\"d-flex flex-row\">\n        <div class=\"d-flex flex-column\" *ngFor=\"let field of linkage.dataset1.fields\">\n          <div class=\"font-weight-bold p-1\">{{field.name}}</div>\n          <div class=\"d-inline-flex p-1\">{{match.record1[field.name]}}</div>\n        </div>\n      </div>\n\n      <div class=\"d-flex flex-row\">\n        <div class=\"d-flex flex-column\" *ngFor=\"let field of linkage.dataset2.fields\">\n          <div class=\"font-weight-bold p-1\">{{field.name}}</div>\n          <div class=\"d-inline-flex p-1\">{{match.record2[field.name]}}</div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n\n  <p><strong>Score:</strong> {{match.score}}</p>\n\n  <div class=\"buttons\">\n    <button type=\"button\" class=\"btn btn-secondary prev\" (click)=\"prev()\">Prev</button>\n    <button type=\"button\" class=\"btn btn-secondary next\" (click)=\"next()\">Next</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/linkage-result-detail/linkage-result-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageResultDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linkage_result__ = __webpack_require__("../../../../../src/app/linkage-result.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linkage_match__ = __webpack_require__("../../../../../src/app/linkage-match.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__linkage_match_service__ = __webpack_require__("../../../../../src/app/linkage-match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__errors__ = __webpack_require__("../../../../../src/app/errors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LinkageResultDetailComponent = /** @class */ (function () {
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
            subscribe(function (result) {
            if (result instanceof __WEBPACK_IMPORTED_MODULE_3__linkage_match__["a" /* LinkageMatch */]) {
                _this.match = result;
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_5__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__linkage__["a" /* Linkage */])
    ], LinkageResultDetailComponent.prototype, "linkage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__linkage_result__["a" /* LinkageResult */])
    ], LinkageResultDetailComponent.prototype, "linkageResult", void 0);
    LinkageResultDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-linkage-result-detail',
            template: __webpack_require__("../../../../../src/app/linkage-result-detail/linkage-result-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/linkage-result-detail/linkage-result-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__linkage_match_service__["a" /* LinkageMatchService */]])
    ], LinkageResultDetailComponent);
    return LinkageResultDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/linkage-result.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageResultService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkage_result__ = __webpack_require__("../../../../../src/app/linkage-result.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LinkageResultService = /** @class */ (function () {
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
    LinkageResultService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], LinkageResultService);
    return LinkageResultService;
}());



/***/ }),

/***/ "../../../../../src/app/linkage-result.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageResult; });
var LinkageResult = /** @class */ (function () {
    function LinkageResult() {
    }
    return LinkageResult;
}());



/***/ }),

/***/ "../../../../../src/app/linkage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abstract_service__ = __webpack_require__("../../../../../src/app/abstract-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__linkage__ = __webpack_require__("../../../../../src/app/linkage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dataset_service__ = __webpack_require__("../../../../../src/app/dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comparator_service__ = __webpack_require__("../../../../../src/app/comparator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__job_service__ = __webpack_require__("../../../../../src/app/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LinkageService = /** @class */ (function (_super) {
    __extends(LinkageService, _super);
    function LinkageService(http, datasetService, comparatorService, jobService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.datasetService = datasetService;
        _this.comparatorService = comparatorService;
        _this.jobService = jobService;
        _this.linkagesUrl = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].apiUrl + '/linkages';
        _this.attributeMap = {
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
        return _this;
    }
    LinkageService.prototype.getLinkages = function () {
        var _this = this;
        return this.http.get(this.linkagesUrl).
            map(function (data) { return data.map(function (d) { return _this.build(d); }); }).
            catch(this.handleClientError);
    };
    LinkageService.prototype.getLinkage = function (id) {
        var _this = this;
        var url = this.linkagesUrl + "/" + id;
        return this.http.get(url).
            map(function (data) { return _this.build(data); }).
            catch(this.handleClientError);
    };
    LinkageService.prototype.create = function (linkage) {
        if (linkage.id) {
            throw new Error('Linkage must not already have `id` when creating.');
        }
        var url = this.linkagesUrl;
        var data = JSON.stringify(this.unbuild(linkage));
        return this.http.post(url, this.unbuild(linkage)).
            map(function (data) {
            linkage.id = data.id;
            return linkage;
        }).
            catch(this.handleError);
    };
    LinkageService.prototype.update = function (linkage) {
        var url = this.linkagesUrl + "/" + linkage.id;
        return this.http.put(url, this.unbuild(linkage)).
            map(function (data) { return linkage; }).
            catch(this.handleError);
    };
    LinkageService.prototype.delete = function (linkage) {
        var url = this.linkagesUrl + "/" + linkage.id;
        return this.http.delete(url).
            map(function (data) { return linkage; }).
            catch(this.handleClientError);
    };
    LinkageService.prototype.build = function (attribs) {
        var _this = this;
        var result = new __WEBPACK_IMPORTED_MODULE_5__linkage__["a" /* Linkage */]();
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
    LinkageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__dataset_service__["a" /* DatasetService */],
            __WEBPACK_IMPORTED_MODULE_7__comparator_service__["a" /* ComparatorService */],
            __WEBPACK_IMPORTED_MODULE_8__job_service__["a" /* JobService */]])
    ], LinkageService);
    return LinkageService;
}(__WEBPACK_IMPORTED_MODULE_4__abstract_service__["a" /* AbstractService */]));



/***/ }),

/***/ "../../../../../src/app/linkage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Linkage; });
var Linkage = /** @class */ (function () {
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



/***/ }),

/***/ "../../../../../src/app/linkages/linkages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  margin: 0 0 10px 0;\n  padding: 0;\n}\nul::after {\n  content: \"\";\n  display: block;\n  height: 0px;\n  clear: both;\n}\nli {\n  display: block;\n  float: left;\n  width: 200px;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 5px;\n  margin-right: 5px;\n  cursor: pointer;\n}\n.error {\n  background-color: firebrick;\n  color: white;\n}\n.error a {\n  color: white;\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/linkages/linkages.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Linkages</h2>\n<app-client-error *ngIf=\"clientError\" [error]=\"clientError\">\n</app-client-error>\n<div *ngIf=\"linkages\">\n  <ul>\n    <li *ngFor=\"let linkage of linkages\" (click)=\"gotoDetail(linkage.id)\">\n      <div><strong>Name:</strong> {{linkage.name}}</div>\n      <div><strong>Description:</strong> {{linkage.description}}</div>\n    </li>\n  </ul>\n  <p *ngIf=\"linkages && linkages.length == 0\">\n    There are currently no linkages.\n  </p>\n\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"newLinkage()\">\n    New linkage\n  </button>\n</div>\n<div class=\"error p-2\" *ngIf=\"error\">\n  <ng-template [ngIf]=\"!showError\" [ngIfElse]=\"errorTpl\">\n    There was an error communicating with the database\n    (<a href=\"#\" (click)=\"showError = true; false\">details</a>).\n  </ng-template>\n  <ng-template #errorTpl>\n    There was an error communicating with the database:\n    <div>{{ error | json }}</div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/linkages/linkages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linkage_service__ = __webpack_require__("../../../../../src/app/linkage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors__ = __webpack_require__("../../../../../src/app/errors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LinkagesComponent = /** @class */ (function () {
    function LinkagesComponent(linkageService, router) {
        this.linkageService = linkageService;
        this.router = router;
    }
    LinkagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.linkageService.getLinkages().subscribe(function (result) {
            if (result instanceof Array) {
                _this.linkages = result;
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_3__errors__["a" /* ClientError */]) {
                _this.clientError = result;
            }
        });
    };
    LinkagesComponent.prototype.gotoDetail = function (id) {
        this.router.navigate(['/linkages', id]);
    };
    LinkagesComponent.prototype.newLinkage = function () {
        this.router.navigate(['/linkages', 'new']);
    };
    LinkagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-linkages',
            template: __webpack_require__("../../../../../src/app/linkages/linkages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/linkages/linkages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__linkage_service__["a" /* LinkageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LinkagesComponent);
    return LinkagesComponent;
}());



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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tutorial',
            template: __webpack_require__("../../../../../src/app/tutorial/tutorial.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tutorial/tutorial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/validation-error/validation-error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n  display: inline-block;\n  background: #ddd;\n  border: 1px solid #ccc;\n  margin-bottom: 20px;\n}\n\n.error .header {\n  background: #cc0000;\n  color: white;\n  border-bottom: #333;\n  padding: 5px 10px;\n  color: bold;\n}\n\n.error .content {\n  padding: 5px;\n}\n\n.error .content ul {\n  margin: 0;\n  list-style-type: square;\n  padding-left: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/validation-error/validation-error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"error\">\n  <div class=\"header\">\n    <ng-template [ngIf]=\"error.errors.length > 1\" [ngIfElse]=\"singular\">\n      There were {{error.errors.length}} validation errors:\n    </ng-template>\n    <ng-template #singular>\n      There was 1 validation error:\n    </ng-template>\n  </div>\n  <div class=\"content\">\n    <ul>\n      <li *ngFor=\"let msg of error.errors\">{{msg}}</li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/validation-error/validation-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__("../../../../../src/app/errors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidationErrorComponent = /** @class */ (function () {
    function ValidationErrorComponent() {
    }
    ValidationErrorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__errors__["b" /* ValidationError */])
    ], ValidationErrorComponent.prototype, "error", void 0);
    ValidationErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-validation-error',
            template: __webpack_require__("../../../../../src/app/validation-error/validation-error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/validation-error/validation-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidationErrorComponent);
    return ValidationErrorComponent;
}());



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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map