
import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";

@Component({
  selector: 'app‑weather',
  templateUrl: './weather.component.html',
  styles: []
})

export class WeatherComponent implements OnInit {
  cityName: string = "";
  op_city: string = "";
  op_humidity: string = "";
  op_country: string = "";
  op_text: string = "";
  op_temp: string = "";
  
  constructor(private _sharedService: SharedService) {
    console.log(_sharedService);
  }

  ngOnInit() {
  }

  callWeatherService() { 
    this._sharedService.findWeather(this.cityName)
      .subscribe(
      data => { 
        this.op_city = data.name;
        // this.op_region = lstresult["query"]["results"]["channel"]["location"]["region"];
        // this.op_country = lstresult["query"]["results"]["channel"]["location"]["country"];
        // this.op_date = lstresult["query"]["results"]["channel"]["item"]["condition"]["date"];
        this.op_text = data.weather[0].description;
        this.op_temp = data.main.temp;
        this.op_humidity=data.main.humidity;
        this.op_country=data.sys.country;
      },
      error => {
        console.log("Error. The findWeather result JSON value is as follows:");
        console.log(error);
      });
  }
}