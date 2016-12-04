System.register(["angular2/core", "./weather-item.component", './weather.service'], function(exports_1, context_1) {
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
    var core_1, weather_item_component_1, weather_service_1;
    var WeatherListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_component_1_1) {
                weather_item_component_1 = weather_item_component_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            WeatherListComponent = (function () {
                function WeatherListComponent(_weatherService) {
                    this._weatherService = _weatherService;
                }
                WeatherListComponent.prototype.ngOnInit = function () {
                    this.weatherItems = this._weatherService.getWeatherItems();
                };
                WeatherListComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-list',
                        template: "\n        <section class=\"weather-list\">\n            <weather-item *ngFor=\"#weatherItem of weatherItems\" [weatherItem]=\"weatherItem\"></weather-item>\n        </section>\n    ",
                        directives: [weather_item_component_1.WeatherItemComponent]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherListComponent);
                return WeatherListComponent;
            }());
            exports_1("WeatherListComponent", WeatherListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUVJLDhCQUFvQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUFJLENBQUM7Z0JBRXhELHVDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMvRCxDQUFDO2dCQWZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSx1TEFJVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztxQkFDckMsQ0FBQzs7d0NBQUE7Z0JBU0YsMkJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHVEQVFDLENBQUEiLCJmaWxlIjoid2VhdGhlci93ZWF0aGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHsgV2VhdGhlckl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi93ZWF0aGVyLWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBXRUFUSEVSX0lURU1TIH0gZnJvbSAnLi93ZWF0aGVyLmRhdGEnO1xuaW1wb3J0IHsgV2VhdGhlckl0ZW0gfSBmcm9tICcuL3dlYXRoZXItaXRlbSc7XG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vd2VhdGhlci5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIndlYXRoZXItbGlzdFwiPlxuICAgICAgICAgICAgPHdlYXRoZXItaXRlbSAqbmdGb3I9XCIjd2VhdGhlckl0ZW0gb2Ygd2VhdGhlckl0ZW1zXCIgW3dlYXRoZXJJdGVtXT1cIndlYXRoZXJJdGVtXCI+PC93ZWF0aGVyLWl0ZW0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtXZWF0aGVySXRlbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgV2VhdGhlckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHdlYXRoZXJJdGVtczogV2VhdGhlckl0ZW1bXTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogYW55IHtcbiAgICAgICAgdGhpcy53ZWF0aGVySXRlbXMgPSB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVySXRlbXMoKTtcbiAgICB9XG5cbn0iXX0=
