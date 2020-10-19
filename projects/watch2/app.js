var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope, scenarioBasic) {

  $scope.scenarios = scenarioBasic.scenarios;
  $scope.currentScenario = $scope.scenarios[0];
  $scope.eventText;
  $scope.nextEvent;
  $scope.actionIndex;
  $scope.adventureIndex = 0;
  $scope.adventureDepth = -1;
  $scope.toast = null;
  
  $scope.factions = {
    crown: 0,
    mages: 0,
  }
  
  
  $scope.stats = {
    dex: 0,
    str: 0,
    int: 0,
    wis: 0,
    con: 0,
    cha: 0
  }

  $scope.setScope = function(key, val){
    $scope[key] = val;
  }
  $scope.getScope = function(key){
    return $scope[key];
  }
  
  $scope.wrapUpAndPickNext = function(){
    $scope.eventText = null;
    $scope.scenarios = $scope.scenarios.filter(function (el) {
      return !el.done;
    });
  
    var roll = 0 + Math.floor(Math.random()*$scope.scenarios.length);
    $scope.adventureIndex = roll;
    $scope.currentScenario = $scope.scenarios[roll];
  }
  

});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
