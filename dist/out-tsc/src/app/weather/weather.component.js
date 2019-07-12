import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let WeatherComponent = class WeatherComponent {
    constructor(_sharedService) {
        this._sharedService = _sharedService;
        this.id_city = "";
        this.id_state = "";
        this.op_city = "";
        this.op_region = "";
        this.op_country = "";
        this.op_date = "";
        this.op_text = "";
        this.op_temp = "";
        console.log(_sharedService);
    }
    ngOnInit() {
    }
    callWeatherService() {
        this._sharedService.findWeather(this.id_city)
            .subscribe(data => {
            this.op_city = data.name;
            // this.op_region = lstresult["query"]["results"]["channel"]["location"]["region"];
            // this.op_country = lstresult["query"]["results"]["channel"]["location"]["country"];
            // this.op_date = lstresult["query"]["results"]["channel"]["item"]["condition"]["date"];
            this.op_text = data.weather[0].description;
            this.op_temp = data.main.temp;
        }, error => {
            console.log("Error. The findWeather result JSON value is as follows:");
            console.log(error);
        });
    }
};
WeatherComponent = tslib_1.__decorate([
    Component({
        selector: 'app‑weather',
        templateUrl: './weather.component.html',
        styles: []
    })
], WeatherComponent);
export { WeatherComponent };
//# sourceMappingURL=weather.component.js.map