var mainApp = angular.module("mainApp", ["ngRoute"]);

mainApp.config(["$routeProvider", function($routeProvider) {
    //routes
    $routeProvider.when("/loadview", {
        templateUrl: "js/templates/loadview.html",
        controller: "LoadviewCtrl"
     }).
     when("/loadview/:foo", {
        templateUrl: "js/templates/loadview.html",
        controller: "LoadviewCtrl"
     }).
     otherwise({
        template: "Route not found"
     });
}]);

mainApp.run(["$rootScope", "$http", "$log", function($rootScope, $http, $log) {
    //TODO
}]);

