import { Component, OnInit } from "angular2/core";
import { WeatherItemComponent } from "./weather-item.component";
import { WEATHER_ITEMS } from './weather.data';
import { WeatherItem } from './weather-item';
import { WeatherService } from './weather.service';
@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
            <weather-item *ngFor="#weatherItem of weatherItems" [weatherItem]="weatherItem"></weather-item>
        </section>
    `,
    directives: [WeatherItemComponent]
})
export class WeatherListComponent implements OnInit {
    weatherItems: WeatherItem[];
    constructor(private _weatherService: WeatherService) { }

    ngOnInit(): any {
        this.weatherItems = this._weatherService.getWeatherItems();
    }

}