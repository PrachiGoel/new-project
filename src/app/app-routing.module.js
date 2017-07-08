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
// import {AppComponent} from "./app.component";
var header_component_1 = require("./header/header.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
// import { HomeComponent } from './header/home/home.component';
// import { AboutComponent } from './header/about/about.component';
var appRoutes = [
    { path: 'sidebar', component: sidebar_component_1.SidebarComponent },
    { path: 'header', component: header_component_1.HeaderComponent },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        declarations: [],
        imports: [
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: true
            })
        ],
        exports: [router_1.RouterModule],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
