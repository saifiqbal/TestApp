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
const router_1 = require("@angular/router");
const country_service_1 = require("../Services/country.service");
let CountryDetailComponent = class CountryDetailComponent {
    constructor(activateRoute, countryService) {
        this.activateRoute = activateRoute;
        this.countryService = countryService;
        this.neighborDetails = [];
    }
    ngOnInit() {
        debugger;
        this.activateRoute.params.subscribe(params => {
            this.countryCode = params['countryCode'];
            this.countryService.getCountryDetails(this.countryCode).subscribe((response) => {
                this.countryDetails = response.geonames[0];
                if (this.countryDetails.geonameId !== undefined)
                    this.getNeighbors(this.countryDetails.geonameId.toString());
            });
        });
    }
    getNeighbors(geonameId) {
        this.countryService.getNeighbors(geonameId).subscribe((response) => {
            this.neighborDetails = response;
        });
    }
};
CountryDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'countrydetails.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, country_service_1.CountryService])
], CountryDetailComponent);
exports.CountryDetailComponent = CountryDetailComponent;
;
//# sourceMappingURL=countrydetails.component.js.map