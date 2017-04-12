import { RouterModule, Routes, Router } from "@angular/router";
import { CountriesComponent} from "./Countries/countries.component";
import { HomeComponent} from "./Home/home.component";
import { CountryDetailComponent } from './CountryDetails/countrydetails.component';
import { AppComponent } from './app.component';

const appRoutes:Routes= [
   {path:"country",component:CountriesComponent},
   {path:"countrydetails/:countryCode",component:CountryDetailComponent},
   { path: '**', component: HomeComponent}
];
export const routing=RouterModule.forRoot(appRoutes);

