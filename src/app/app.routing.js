"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const countries_component_1 = require("./Countries/countries.component");
const home_component_1 = require("./Home/home.component");
const countrydetails_component_1 = require("./CountryDetails/countrydetails.component");
const appRoutes = [
    { path: "country", component: countries_component_1.CountriesComponent },
    { path: "countrydetails/:countryCode", component: countrydetails_component_1.CountryDetailComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map