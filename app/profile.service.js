System.register(['./profile'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var profile_1;
    var ProfileService;
    return {
        setters:[
            function (profile_1_1) {
                profile_1 = profile_1_1;
            }],
        execute: function() {
            ProfileService = (function () {
                function ProfileService() {
                    this.profiles = [
                        new profile_1.Profile('Default profile', ['Chennai', 'Hyderabad', 'Pune'])
                    ];
                }
                ProfileService.prototype.saveNewProfile = function (cities) {
                    var profileName = 'Profile ' + this.profiles.length;
                    var profile = new profile_1.Profile(profileName, cities);
                    this.profiles.push(profile);
                };
                ProfileService.prototype.getProfiles = function () {
                    return this.profiles;
                };
                ProfileService.prototype.deleteProfile = function (profile) {
                    this.profiles.splice(this.profiles.indexOf(profile), 1);
                };
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUNBO2dCQUFBO29CQUNZLGFBQVEsR0FBVzt3QkFDdkIsSUFBSSxpQkFBTyxDQUFDLGlCQUFpQixFQUFDLENBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxNQUFNLENBQUMsQ0FBQztxQkFDaEUsQ0FBQztnQkFjTixDQUFDO2dCQWJHLHVDQUFjLEdBQWQsVUFBZSxNQUFlO29CQUMxQixJQUFNLFdBQVcsR0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQ2xELElBQU0sT0FBTyxHQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELG9DQUFXLEdBQVg7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsc0NBQWEsR0FBYixVQUFjLE9BQWU7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO2dCQUNMLHFCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCwyQ0FpQkMsQ0FBQSIsImZpbGUiOiJwcm9maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9wcm9maWxlJztcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNle1xyXG4gICAgcHJpdmF0ZSBwcm9maWxlczpQcm9maWxlW109W1xyXG4gICAgICAgIG5ldyBQcm9maWxlKCdEZWZhdWx0IHByb2ZpbGUnLFsnQ2hlbm5haScsJ0h5ZGVyYWJhZCcsJ1B1bmUnXSlcclxuICAgIF07XHJcbiAgICBzYXZlTmV3UHJvZmlsZShjaXRpZXM6c3RyaW5nW10pe1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVOYW1lPSdQcm9maWxlICcrdGhpcy5wcm9maWxlcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgcHJvZmlsZT1uZXcgUHJvZmlsZShwcm9maWxlTmFtZSxjaXRpZXMpO1xyXG4gICAgICAgIHRoaXMucHJvZmlsZXMucHVzaChwcm9maWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9maWxlcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb2ZpbGUocHJvZmlsZTpQcm9maWxlKXtcclxuICAgICAgICB0aGlzLnByb2ZpbGVzLnNwbGljZSh0aGlzLnByb2ZpbGVzLmluZGV4T2YocHJvZmlsZSksMSk7XHJcbiAgICB9XHJcbn0iXX0=
