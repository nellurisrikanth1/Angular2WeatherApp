System.register(['angular2/core', './profile.service', './weather/weather.service', './weather/weather-item'], function(exports_1, context_1) {
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
    var core_1, profile_service_1, weather_service_1, weather_item_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(_profileService, _weatherService) {
                    this._profileService = _profileService;
                    this._weatherService = _weatherService;
                }
                SidebarComponent.prototype.onSaveNew = function () {
                    var cities = this._weatherService.getWeatherItems().map(function (element) {
                        return element.cityName;
                    });
                    this._profileService.saveNewProfile(cities);
                };
                SidebarComponent.prototype.onLoadProfile = function (profile) {
                    var _this = this;
                    this._weatherService.clearWeatherItems();
                    for (var i = 0; i < profile.cities.length; i++) {
                        this._weatherService.searchWeatherData(profile.cities[i])
                            .retry()
                            .subscribe(function (data) {
                            var weatherItem = new weather_item_1.WeatherItem(data.name, data.weather[0].description, data.main.temp);
                            _this._weatherService.addWeatherItem(weatherItem);
                        });
                    }
                };
                SidebarComponent.prototype.onDeleteProfile = function (event, profile) {
                    event.stopPropagation();
                    this._profileService.deleteProfile(profile);
                };
                SidebarComponent.prototype.ngOnInit = function () {
                    this.profiles = this._profileService.getProfiles();
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sidebar',
                        template: "\n    <h3>Saved Profiles</h3>\n    <button (click)=\"onSaveNew()\">Save List to Profile</button>\n    <article class=\"profile\" *ngFor=\"#profile of profiles\" (click)=\"onLoadProfile(profile)\">\n        <h4>{{profile.profileName}} </h4>\n        <p>Cities:{{profile.cities.join(', ')}}</p>\n        <span class=\"delete\" (click)=\"onDeleteProfile($event,profile)\" >X</span>\n    </article>\n    ",
                        styleUrls: ['src/css/sidebar.css'],
                        providers: [profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, weather_service_1.WeatherService])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUVJLDBCQUFvQixlQUE4QixFQUFTLGVBQThCO29CQUFyRSxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtvQkFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtnQkFBRSxDQUFDO2dCQUU1RixvQ0FBUyxHQUFUO29CQUNJLElBQU0sTUFBTSxHQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsR0FBRyxDQUNuRCxVQUFTLE9BQW1CO3dCQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDNUIsQ0FBQyxDQUNKLENBQUM7b0JBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBRUQsd0NBQWEsR0FBYixVQUFjLE9BQWU7b0JBQTdCLGlCQVlDO29CQVhHLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQ3hELEtBQUssRUFBRTs2QkFDUCxTQUFTLENBQ04sVUFBQSxJQUFJOzRCQUNBLElBQU0sV0FBVyxHQUFDLElBQUksMEJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3hGLEtBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNyRCxDQUFDLENBQ0osQ0FBQztvQkFDTixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsMENBQWUsR0FBZixVQUFnQixLQUFXLEVBQUMsT0FBZTtvQkFDdkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFDRCxtQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckQsQ0FBQztnQkEvQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsWUFBWTt3QkFDckIsUUFBUSxFQUFDLGtaQVFSO3dCQUNELFNBQVMsRUFBQyxDQUFDLHFCQUFxQixDQUFDO3dCQUNqQyxTQUFTLEVBQUMsQ0FBQyxnQ0FBYyxDQUFDO3FCQUM3QixDQUFDOztvQ0FBQTtnQkFtQ0YsdUJBQUM7WUFBRCxDQWxDQSxBQWtDQyxJQUFBO1lBbENELCtDQWtDQyxDQUFBIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9wcm9maWxlJztcclxuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdlYXRoZXJJdGVtIH0gZnJvbSAnLi93ZWF0aGVyL3dlYXRoZXItaXRlbSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J215LXNpZGViYXInLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPGgzPlNhdmVkIFByb2ZpbGVzPC9oMz5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uU2F2ZU5ldygpXCI+U2F2ZSBMaXN0IHRvIFByb2ZpbGU8L2J1dHRvbj5cclxuICAgIDxhcnRpY2xlIGNsYXNzPVwicHJvZmlsZVwiICpuZ0Zvcj1cIiNwcm9maWxlIG9mIHByb2ZpbGVzXCIgKGNsaWNrKT1cIm9uTG9hZFByb2ZpbGUocHJvZmlsZSlcIj5cclxuICAgICAgICA8aDQ+e3twcm9maWxlLnByb2ZpbGVOYW1lfX0gPC9oND5cclxuICAgICAgICA8cD5DaXRpZXM6e3twcm9maWxlLmNpdGllcy5qb2luKCcsICcpfX08L3A+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWxldGVcIiAoY2xpY2spPVwib25EZWxldGVQcm9maWxlKCRldmVudCxwcm9maWxlKVwiID5YPC9zcGFuPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICAgYCxcclxuICAgIHN0eWxlVXJsczpbJ3NyYy9jc3Mvc2lkZWJhci5jc3MnXSxcclxuICAgIHByb3ZpZGVyczpbUHJvZmlsZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgcHJvZmlsZXM6UHJvZmlsZVtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6UHJvZmlsZVNlcnZpY2UscHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6V2VhdGhlclNlcnZpY2Upe31cclxuXHJcbiAgICBvblNhdmVOZXcoKXtcclxuICAgICAgICBjb25zdCBjaXRpZXM9dGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlckl0ZW1zKCkubWFwKFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlbGVtZW50OldlYXRoZXJJdGVtKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNpdHlOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLl9wcm9maWxlU2VydmljZS5zYXZlTmV3UHJvZmlsZShjaXRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZFByb2ZpbGUocHJvZmlsZTpQcm9maWxlKXtcclxuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5jbGVhcldlYXRoZXJJdGVtcygpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8cHJvZmlsZS5jaXRpZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXJEYXRhKHByb2ZpbGUuY2l0aWVzW2ldKVxyXG4gICAgICAgICAgICAucmV0cnkoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJdGVtPW5ldyBXZWF0aGVySXRlbShkYXRhLm5hbWUsZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLGRhdGEubWFpbi50ZW1wKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5hZGRXZWF0aGVySXRlbSh3ZWF0aGVySXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVsZXRlUHJvZmlsZShldmVudDpFdmVudCxwcm9maWxlOlByb2ZpbGUpe1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLmRlbGV0ZVByb2ZpbGUocHJvZmlsZSk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucHJvZmlsZXM9dGhpcy5fcHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZXMoKTtcclxuICAgIH1cclxufSJdfQ==
