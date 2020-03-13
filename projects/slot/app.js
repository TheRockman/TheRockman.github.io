var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope, $timeout) {

  
  $scope.shuffle = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  
  $scope.wheels = {
    one: [1,2,3,4,5,6],
    two: [6,5,4,3,2,1],
    three: [6,1,2,3,4,5]
  }
  $scope.wheels.one = $scope.shuffle($scope.wheels.one);
  $scope.wheels.two = $scope.shuffle($scope.wheels.two);
  $scope.wheels.three = $scope.shuffle($scope.wheels.three);
  
  $scope.result = {
    one: {
      locked: false,
      prevRolledIndex: 0,
      rolledIndex: 0,
      nextRolledIndex: 0
    },
    two: {
      locked: false,
      prevRolledIndex: 0,
      rolledIndex: 0,
      nextRolledIndex: 0
    },
    three: {
      locked: false,
      prevRolledIndex: 0,
      rolledIndex: 0,
      nextRolledIndex: 0
    },
  }
  
  $scope.generateResult = function(){
    var temp = {};
    
    temp.rolledIndex = Math.floor(Math.random() * 6 );
    if(temp.rolledIndex-1 === -1){
      temp.prevRolledIndex = 5;
    } else{
      temp.prevRolledIndex = temp.rolledIndex-1;
    }
    if(temp.rolledIndex+1 === 6){
      temp.nextRolledIndex = 0;
    } else{
      temp.nextRolledIndex = temp.rolledIndex+1;
    }
    
    return temp;
  }
  
  $scope.score = 1000;
  
  $scope.win = function(multiplier){
    console.log(multiplier);
    $scope.winScreen = true;
    
    $timeout( function(){
      $scope.winScreen = false;
      $scope.score = $scope.score + ($scope.bet * multiplier);
    }, 1190 );
    
  }
  
  $scope.checkWin = function(){
    if(
      $scope.wheels.one[$scope.result.one.rolledIndex] === $scope.wheels.two[$scope.result.two.rolledIndex] &&
      $scope.wheels.two[$scope.result.two.rolledIndex] === $scope.wheels.three[$scope.result.three.rolledIndex]
    ){
      console.log('mid row win');
      $scope.win($scope.wheels.two[$scope.result.two.rolledIndex]);
    }
    if(
      $scope.wheels.one[$scope.result.one.prevRolledIndex] === $scope.wheels.two[$scope.result.two.prevRolledIndex] &&
      $scope.wheels.two[$scope.result.two.prevRolledIndex] === $scope.wheels.three[$scope.result.three.prevRolledIndex]
    ){
      console.log('top row win');
      $scope.win($scope.wheels.two[$scope.result.two.prevRolledIndex]);
    }
    if(
      $scope.wheels.one[$scope.result.one.nextRolledIndex] === $scope.wheels.two[$scope.result.two.nextRolledIndex] &&
      $scope.wheels.two[$scope.result.two.nextRolledIndex] === $scope.wheels.three[$scope.result.three.nextRolledIndex]
    ){
      console.log('bottom row win');
      $scope.win($scope.wheels.two[$scope.result.two.nextRolledIndex]);
    }
    if(
      $scope.wheels.one[$scope.result.one.prevRolledIndex] === $scope.wheels.two[$scope.result.two.rolledIndex] &&
      $scope.wheels.two[$scope.result.two.rolledIndex] === $scope.wheels.three[$scope.result.three.nextRolledIndex]
    ){
      console.log('diagonal top win');
      $scope.win($scope.wheels.two[$scope.result.two.rolledIndex]);
    }
    if(
      $scope.wheels.one[$scope.result.one.nextRolledIndex] === $scope.wheels.two[$scope.result.two.rolledIndex] &&
      $scope.wheels.two[$scope.result.two.rolledIndex] === $scope.wheels.three[$scope.result.three.prevRolledIndex]
    ){
      console.log('diagonal bottom win');
      $scope.win($scope.wheels.two[$scope.result.two.rolledIndex]);
    }
  }
  
  $scope.spin = function(){
    if(
      ($scope.bet > $scope.score || !$scope.bet) ||
      ($scope.wheels.one.spinning || $scope.wheels.two.spinning || $scope.wheels.three.spinning)
    ){
      return;
    }else{
      $scope.score = $scope.score - $scope.bet;
    }
    
    
    if(!$scope.wheels.one.locked){
      $scope.wheels.one.spinning = true;
      $timeout( function(){
        $scope.result.one = $scope.generateResult();
        $scope.wheels.one.spinning = false;
      }, 1000 );
    }
    
    if(!$scope.wheels.two.locked){
      $scope.wheels.two.spinning = true;
      $timeout( function(){
        $scope.result.two = $scope.generateResult();
        $scope.wheels.two.spinning = false;
      }, 2000 );
    }

    if(!$scope.wheels.three.locked){
      $scope.wheels.three.spinning = true;
      $timeout( function(){
        $scope.result.three = $scope.generateResult();
        $scope.wheels.three.spinning = false;
      }, 3000 );
    }
    
    $timeout( function(){
      $scope.checkWin();
    }, 3100 );
    
  }
  
});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
