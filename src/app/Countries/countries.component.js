"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const country_service_1 = require("../Services/country.service");
const router_1 = require("@angular/router");
require("rxjs/add/operator/map");
let CountriesComponent = class CountriesComponent {
    constructor(_countryService, _router) {
        this._countryService = _countryService;
        this._router = _router;
        this.countriesList = [];
    }
    ngOnInit() {
        if (this.countriesList) {
            this._countryService.getCountries().subscribe((response) => {
                this.countriesList = response.geonames;
                this.countries = this.countriesList.map(function (country) {
                    return {
                        countryName: country.countryName,
                        countryCode: country.countryCode,
                        areaInSqKm: parseInt(country.areaInSqKm).toLocaleString('en-US'),
                        continent: country.continent,
                        population: parseInt(country.population).toLocaleString('en-US'),
                        capital: country.capital
                    };
                });
            });
        }
    }
    countryDetails(countryCode) {
        this._router.navigate(['countrydetails', countryCode]);
    }
    goHome() {
        this._router.navigate(['/']);
    }
};
CountriesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'countries.component.html'
    }),
    __metadata("design:paramtypes", [country_service_1.CountryService, router_1.Router])
], CountriesComponent);
exports.CountriesComponent = CountriesComponent;
//# sourceMappingURL=countries.component.js.map