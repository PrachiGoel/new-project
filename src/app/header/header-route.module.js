"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about/about.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var headerRoutingModule = (function () {
    function headerRoutingModule() {
    }
    return headerRoutingModule;
}());
headerRoutingModule = __decorate([
    core_1.NgModule({
        declarations: [home_component_1.HomeComponent, about_component_1.AboutComponent],
        imports: [
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: true
            })
        ],
        exports: [router_1.RouterModule],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], headerRoutingModule);
exports.headerRoutingModule = headerRoutingModule;
