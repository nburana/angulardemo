mainApp.controller("mainCtrl", ["$scope", "$rootScope", "$log", function($scope, $rootScope, $log) {
  $scope.reset = function() {
    $scope.player = {};
    $scope.player.firstName = null;
    $scope.player.lastName = null;

    $log.info("Reset just happened!");
  }
}]);

mainApp.controller("LoadviewCtrl", ["$scope", "$rootScope", "$log", "$routeParams", function($scope, $rootScope, $log, $routeParams) {
  $scope.model = {
    message: "Loaded this bitch with ng-view",
    foo: $routeParams.foo
  };
}]);
