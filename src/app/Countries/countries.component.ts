import { Component, OnInit } from '@angular/core';
import {CountryService} from '../Services/country.service'
import{Router}from'@angular/router'
import {Country } from "./country.model";
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';


@Component({
    moduleId: module.id,
    templateUrl: 'countries.component.html'
})

export class CountriesComponent implements OnInit {
   
    countriesList:Country[]=[];
    countries:any;
    constructor(private _countryService:CountryService,private _router:Router) { }

    ngOnInit(): void {
        
        if(this.countriesList)
        {
            
            this._countryService.getCountries().subscribe((response) => {
            
               this.countriesList=response.geonames;

               this.countries= this.countriesList.map(function(country) {
                    return{
                        countryName:country.countryName,
                        countryCode:country.countryCode,
                        areaInSqKm:parseInt(country.areaInSqKm).toLocaleString('en-US'),
                        continent:country.continent,
                        population:parseInt(country.population).toLocaleString('en-US'),
                        capital:country.capital
                    };
                });
            });
        }
    }
    countryDetails(countryCode:any){
       this._router.navigate(['countrydetails',countryCode]);
    }
    goHome(){
        this._router.navigate(['/']);
    }
}