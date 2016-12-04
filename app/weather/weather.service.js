System.register(['angular2/core', './weather.data', 'rxjs/Observable', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, weather_data_1, Observable_1, http_1;
    var WeatherService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_data_1_1) {
                weather_data_1 = weather_data_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            WeatherService = (function () {
                function WeatherService(_http) {
                    this._http = _http;
                }
                WeatherService.prototype.getWeatherItems = function () {
                    return weather_data_1.WEATHER_ITEMS;
                };
                WeatherService.prototype.addWeatherItem = function (weatherItem) {
                    weather_data_1.WEATHER_ITEMS.push(weatherItem);
                };
                WeatherService.prototype.clearWeatherItems = function () {
                    weather_data_1.WEATHER_ITEMS.splice(0);
                };
                WeatherService.prototype.searchWeatherData = function (cityName) {
                    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' +
                        cityName + '&APPID=ab47e976f639db0c9b97231d6dde6c2f&units=metric').
                        map(function (response) { return response.json(); })
                        .catch(function (error) {
                        console.error(error);
                        return Observable_1.Observable.throw(error.json());
                    });
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WeatherService);
                return WeatherService;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUNJLHdCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07Z0JBQUksQ0FBQztnQkFDcEMsd0NBQWUsR0FBZjtvQkFDSSxNQUFNLENBQUMsNEJBQWEsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCx1Q0FBYyxHQUFkLFVBQWUsV0FBd0I7b0JBQ25DLDRCQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELDBDQUFpQixHQUFqQjtvQkFDSSw0QkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCwwQ0FBaUIsR0FBakIsVUFBa0IsUUFBZ0I7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQ7d0JBQ3JFLFFBQVEsR0FBRyxzREFBc0QsQ0FBQzt3QkFDbEUsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDL0IsS0FBSyxDQUFDLFVBQUEsS0FBSzt3QkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7b0JBQ3pDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBckJMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQXNCYixxQkFBQztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQkQsMkNBcUJDLENBQUEiLCJmaWxlIjoid2VhdGhlci93ZWF0aGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFdFQVRIRVJfSVRFTVMgfSBmcm9tICcuL3dlYXRoZXIuZGF0YSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IFdlYXRoZXJJdGVtIH0gZnJvbSAnLi93ZWF0aGVyLWl0ZW0nO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cclxuICAgIGdldFdlYXRoZXJJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gV0VBVEhFUl9JVEVNUztcclxuICAgIH1cclxuICAgIGFkZFdlYXRoZXJJdGVtKHdlYXRoZXJJdGVtOiBXZWF0aGVySXRlbSkge1xyXG4gICAgICAgIFdFQVRIRVJfSVRFTVMucHVzaCh3ZWF0aGVySXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJXZWF0aGVySXRlbXMoKXtcclxuICAgICAgICBXRUFUSEVSX0lURU1TLnNwbGljZSgwKTtcclxuICAgIH1cclxuICAgIHNlYXJjaFdlYXRoZXJEYXRhKGNpdHlOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPScgK1xyXG4gICAgICAgICAgICBjaXR5TmFtZSArICcmQVBQSUQ9YWI0N2U5NzZmNjM5ZGIwYzliOTcyMzFkNmRkZTZjMmYmdW5pdHM9bWV0cmljJykuXHJcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
