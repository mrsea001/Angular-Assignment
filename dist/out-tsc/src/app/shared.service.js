import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
let SharedService = class SharedService {
    constructor(_http) {
        this._http = _http;
        this.openweatherURL = "http://api.openweathermap.org/data/2.5/weather?";
        this.openweatherApiKey = "ff30a44ea9ad311a3dfd413b9bc35038";
        this.findMovieURL1 = "http://www.omdbapi.com/?t=";
        this.findMovieURL2 = "&y=&plot=short&r=json";
        this.currencyURL = "http://api.fixer.io/latest?symbols=";
        this.totReqsMade = 0;
    }
    findWeather(city) {
        this.totReqsMade = this.totReqsMade + 1;
        return this._http.get(this.openweatherURL + city + "&APPID=" + this.openweatherApiKey)
            .pipe(map(response => {
            return response.json();
        }));
    }
    findMovie(movie) {
        this.totReqsMade = this.totReqsMade + 1;
        return this._http.get(this.findMovieURL1 + movie + this.findMovieURL2)
            .pipe(map(response => {
            {
                return response.json();
            }
            ;
        }));
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
            {
                return response.json();
            }
            ;
        }));
    }
};
SharedService = tslib_1.__decorate([
    Injectable()
], SharedService);
export { SharedService };
//# sourceMappingURL=shared.service.js.map