var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope, $timeout) {
  
  var bash = new Audio('bash.mp3');
  var dink = new Audio('dink.mp3');
  var lock1  = new Audio('lock.mp3');
  var lock2  = new Audio('lock.mp3');

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
  
  $scope.play = function(input){
    eval(input).play();
  }
  
  $scope.compare = function(a, b){
    var mod = 1
    $scope.result = 'n';
    if(eval(a).strong.includes(eval(b).name)){
      if($scope.globalSide === eval(a).side){
        mod = 2;
      }
      $scope.result = 'a';
      $scope.p2.hp = $scope.p2.hp -mod;
      $scope.globalSide = eval(a).side;
      $timeout( function(){$scope.play('bash');}, 650 );
    } else if(eval(b).strong.includes(eval(a).name)){
      if($scope.globalSide === eval(b).side){
        mod = 2;
      }
      $scope.result = 'b';
      $scope.p1.hp = $scope.p1.hp -mod;
      $scope.globalSide = eval(b).side;
      $timeout( function(){$scope.play('bash');}, 650 );
    } else{
      $timeout( function(){$scope.play('dink');}, 200 );
    }
    
    $timeout( function(){
      $scope.color1 = null;
      $scope.color2 = null;
      $scope.result = null;
    }, 3000 );
  }

});
