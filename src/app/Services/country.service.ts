import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers, RequestMethod, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';
import {Country} from "../Countries/country.model";


@Injectable()
export class CountryService{
   public cacheObservable:Observable<any>=null;
    geoApiUrl:string='http://api.geonames.org/countryInfo?username=saifiqbal10p&type=json';
    countryDetailsUrl:string='http://api.geonames.org/countryInfo?username=saifiqbal10p&type=json&country=';
    neighborsUrl:string='http://api.geonames.org/neighbours?username=saifiqbal10p&type=json&geonameId=';
   
    constructor(private _http:Http){
    }

    getCountries(){        
        if(!this.cacheObservable)
        {
          var options = new RequestOptions({
           method: RequestMethod.Get,
           responseType:ResponseContentType.Json
          });
          this.cacheObservable=this._http.get(this.geoApiUrl,options).map((response:Response)=>response.json())
          .publishReplay(1).refCount();
        }    
        return this.cacheObservable;    
    }
    getCountryDetails(countryCode:string){
            let url=this.countryDetailsUrl+countryCode;
                var options = new RequestOptions({
                method: RequestMethod.Get,
                responseType:ResponseContentType.Json
            });
        return this._http.get(url,options).map((response:Response)=>response.json());
    }
    getNeighbors(geonameId:string){
                let url= this.neighborsUrl+geonameId;
                var options = new RequestOptions({
                method: RequestMethod.Get,
                responseType:ResponseContentType.Json
            });
        return this._http.get(url,options).map((response:Response)=>response.json());
                
    }
}