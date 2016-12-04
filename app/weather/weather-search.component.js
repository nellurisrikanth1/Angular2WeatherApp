System.register(['angular2/core', './weather.service', './weather-item', 'rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_service_1, weather_item_1, Subject_1;
    var WeatherSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            WeatherSearchComponent = (function () {
                function WeatherSearchComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.searchStream = new Subject_1.Subject();
                    this.data = {};
                }
                WeatherSearchComponent.prototype.onSubmit = function () {
                    var weatherItem = new weather_item_1.WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                };
                WeatherSearchComponent.prototype.onSearchLocation = function (cityName) {
                    this.searchStream
                        .next(cityName);
                };
                WeatherSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.searchStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (input) { return _this._weatherService.searchWeatherData(input); })
                        .subscribe(function (data) { return _this.data = data; });
                };
                WeatherSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-search',
                        template: "\n    <section class=\"weather-search\">\n        <form (ngSubmit)=\"onSubmit()\">\n            <label for=\"city\">City</label>\n            <input ngControl=\"location\" type=\"text\" id=\"city\" (input)=\"onSearchLocation(input.value)\" required #input>\n            <button type=\"submit\">Add City</button>\n        </form>\n        <div>\n            <span class=\"info\">City found:</span> {{data.name}} \n        </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherSearchComponent);
                return WeatherSearchComponent;
            }());
            exports_1("WeatherSearchComponent", WeatherSearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUlJLGdDQUFvQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUYzQyxpQkFBWSxHQUFHLElBQUksaUJBQU8sRUFBVSxDQUFDO29CQUM3QyxTQUFJLEdBQUssRUFBRSxDQUFDO2dCQUMyQyxDQUFDO2dCQUV4RCx5Q0FBUSxHQUFSO29CQUVZLElBQU0sV0FBVyxHQUFHLElBQUksMEJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO2dCQUlULGlEQUFnQixHQUFoQixVQUFpQixRQUFnQjtvQkFDN0IsSUFBSSxDQUFDLFlBQVk7eUJBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUNELHlDQUFRLEdBQVI7b0JBQUEsaUJBUUM7b0JBUEcsSUFBSSxDQUFDLFlBQVk7eUJBQ2hCLFlBQVksQ0FBQyxHQUFHLENBQUM7eUJBQ2pCLG9CQUFvQixFQUFFO3lCQUN0QixTQUFTLENBQUMsVUFBQyxLQUFZLElBQUcsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUE3QyxDQUE2QyxDQUFDO3lCQUN4RSxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUUsT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFDLElBQUksRUFBZCxDQUFjLENBQ3ZCLENBQUM7Z0JBQ04sQ0FBQztnQkF6Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsbWNBV1Q7cUJBQ0osQ0FBQzs7MENBQUE7Z0JBNEJGLDZCQUFDO1lBQUQsQ0EzQkEsQUEyQkMsSUFBQTtZQTNCRCwyREEyQkMsQ0FBQSIsImZpbGUiOiJ3ZWF0aGVyL3dlYXRoZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbEdyb3VwIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdlYXRoZXJJdGVtIH0gZnJvbSAnLi93ZWF0aGVyLWl0ZW0nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItc2VhcmNoJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cIndlYXRoZXItc2VhcmNoXCI+XHJcbiAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImxvY2F0aW9uXCIgdHlwZT1cInRleHRcIiBpZD1cImNpdHlcIiAoaW5wdXQpPVwib25TZWFyY2hMb2NhdGlvbihpbnB1dC52YWx1ZSlcIiByZXF1aXJlZCAjaW5wdXQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBDaXR5PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mb1wiPkNpdHkgZm91bmQ6PC9zcGFuPiB7e2RhdGEubmFtZX19IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2VhdGhlclNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBzZWFyY2hTdHJlYW0gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgICBkYXRhOmFueT17fTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSkgeyB9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWF0aGVySXRlbSA9IG5ldyBXZWF0aGVySXRlbSh0aGlzLmRhdGEubmFtZSwgdGhpcy5kYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIHRoaXMuZGF0YS5tYWluLnRlbXApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuYWRkV2VhdGhlckl0ZW0od2VhdGhlckl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuXHJcbiAgICBvblNlYXJjaExvY2F0aW9uKGNpdHlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaFN0cmVhbVxyXG4gICAgICAgICAgICAubmV4dChjaXR5TmFtZSk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc2VhcmNoU3RyZWFtXHJcbiAgICAgICAgLmRlYm91bmNlVGltZSgzMDApXHJcbiAgICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuICAgICAgICAuc3dpdGNoTWFwKChpbnB1dDpzdHJpbmcpPT50aGlzLl93ZWF0aGVyU2VydmljZS5zZWFyY2hXZWF0aGVyRGF0YShpbnB1dCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YT0+dGhpcy5kYXRhPWRhdGFcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il19
