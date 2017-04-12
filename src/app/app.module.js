"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const app_component_1 = require("./app.component");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const router_1 = require("@angular/router");
const countries_component_1 = require("./Countries/countries.component");
const app_routing_1 = require("./app.routing");
const country_service_1 = require("./Services/country.service");
const countrydetails_component_1 = require("./CountryDetails/countrydetails.component");
const home_component_1 = require("./Home/home.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            router_1.RouterModule,
            platform_browser_1.BrowserModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            countries_component_1.CountriesComponent,
            countrydetails_component_1.CountryDetailComponent,
            home_component_1.HomeComponent
        ],
        providers: [
            country_service_1.CountryService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map