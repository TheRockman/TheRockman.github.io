var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope, $timeout) {

  $scope.p1 = {
    hp: 5
  }
  $scope.p2 = {
    hp: 5
  }
  $scope.result = null;
  $scope.globalSide = 'neutral';

  var red = {
    name: 'red',
    side: 'dark',
    strong: ['purple', 'green'],
    weak: ['blue', 'yellow']
  }
  var green = {
    name: 'green',
    side: 'dark',
    strong: ['blue', 'yellow'],
    weak: ['purple', 'red']
  }
  var blue = {
    name: 'blue',
    side: 'light',
    strong: ['purple', 'red'],
    weak: ['yellow', 'green']
  }
  var purple = {
    name: 'purple',
    side: 'neutral',
    strong: ['yellow', 'green'],
    weak: ['blue', 'red']
  }
  var yellow = {
    name: 'yellow',
    side: 'light',
    strong: ['red', 'blue'],
    weak: ['purple', 'green']
  }
  
  $scope.compare = function(a, b){
    var mod = 1
    if(eval(a).strong.includes(eval(b).name)){
      if($scope.globalSide === eval(a).side){
        mod = 2;
      }
      $scope.result = eval(a);
      $scope.p2.hp = $scope.p2.hp -mod;
      $scope.globalSide = eval(a).side;
    } else if(eval(b).strong.includes(eval(a).name)){
      if($scope.globalSide === eval(b).side){
        mod = 2;
      }
      $scope.result = eval(b);
      $scope.p1.hp = $scope.p1.hp -mod;
      $scope.globalSide = eval(b).side;
    }
    
    $timeout( function(){
      $scope.color1 = null;
      $scope.color2 = null;
      $scope.result = null;
    }, 3000 );
  }

});
