
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class SharedService {
    openweatherURL = "http://api.openweathermap.org/data/2.5/weather?q=";
    openweatherApiKey = "ff30a44ea9ad311a3dfd413b9bc35038";
    findMovieURL1 = "http://www.omdbapi.com/?t=";
    findMovieURL2 = "&y=&plot=short&r=json"; 
    currencyURL = "http://api.fixer.io/latest?symbols="; 
    totReqsMade: number = 0;
    constructor(private _http: Http) { }

    findWeather(city) { 
        this.totReqsMade = this.totReqsMade + 1; 
        return this._http.get(this.openweatherURL + city + "&APPID="+this.openweatherApiKey)
        .pipe(map(response => {
            return response.json();
        }))
    }

    findMovie(movie) { 
        this.totReqsMade = this.totReqsMade + 1; 
        return this._http.get(this.findMovieURL1 + movie + this.findMovieURL2)
            .pipe(map(response => {
                { return response.json() };
            }))

        // return this._http.get(this.findMovieURL1 + movie + this.findMovieURL2)
        //     .map(response => {
        //         { return response.json() };
        //     })
        //     .catch(error => Observable.throw(error.json().error));
    }

    getCurrencyExchRate(currency) { 
        this.totReqsMade = this.totReqsMade + 1; 
        return this._http.get(this.currencyURL + currency)
            .pipe(map(response => {
                { return response.json() };
            }))
    }
}