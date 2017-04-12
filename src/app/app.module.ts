import { Component, OnInit,NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { Http,HttpModule } from "@angular/http";
import{RouterModule}from '@angular/router';
import {CountriesComponent} from './Countries/countries.component';
import {routing} from './app.routing';
import { CountryService } from "./Services/country.service";
import { CountryDetailComponent } from "./CountryDetails/countrydetails.component";
import { HomeComponent } from "./Home/home.component";

@NgModule({
    imports:[
     HttpModule,
     RouterModule,
     BrowserModule,
     routing
    ],
    declarations:[
        AppComponent,
        CountriesComponent,
        CountryDetailComponent,
        HomeComponent
    ],
    providers:[
        CountryService
    ],
   bootstrap:[AppComponent]
})
export class AppModule {
}