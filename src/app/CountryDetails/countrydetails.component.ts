import { Component,OnInit } from '@angular/core';
import { Router,Params,ActivatedRoute } from '@angular/router';
import {CountryService} from '../Services/country.service'

@Component({
    moduleId: module.id,
    templateUrl: 'countrydetails.component.html'
})

export class CountryDetailComponent implements OnInit {
     countryCode:string;
     public countryDetails:any;
     neighborDetails:any[]=[];
     constructor(private activateRoute:ActivatedRoute, private countryService:CountryService) { 
     }   
     ngOnInit(): void {   
         debugger;
            this.activateRoute.params.subscribe(params=>{
                  this.countryCode=params['countryCode'];

              this.countryService.getCountryDetails(this.countryCode).subscribe((response)=>{
                this.countryDetails=response.geonames[0];
                if(this.countryDetails.geonameId!==undefined)
                    this.getNeighbors(this.countryDetails.geonameId.toString());
             });
        });
      
     }

    getNeighbors(geonameId:string){
        this.countryService.getNeighbors(geonameId).subscribe((response)=>{
                this.neighborDetails=response;
       });
    }
};