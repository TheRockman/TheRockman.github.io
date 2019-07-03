var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {
  $scope.dosh = 0;

  $scope.oneTick = 0;
  $scope.twoTick = 0;
  $scope.threTick = 0;

  $scope.oneMulti = 1;
  $scope.twoMulti = 1;
  $scope.threMulti = 1;

  $scope.timeBonus = 1;
  $scope.chests = 0;

  $scope.baseTime = 1001 - $scope.timeBonus;
  $scope.price = 100;

  $scope.buy = function(type){
    if(type === 0 && $scope.dosh >= $scope.price*$scope.timeBonus){
      $scope.dosh = $scope.dosh - $scope.price*$scope.timeBonus;
      $scope.timeBonus = $scope.timeBonus + 1;
      $scope.baseTime = 1001 - $scope.timeBonus;
    }

    if(type === 1 && $scope.dosh >= $scope.price){
      $scope.dosh = $scope.dosh - $scope.price;
      $scope.oneMulti = $scope.oneMulti + 1;
    }

    if(type === 2 && $scope.dosh >= $scope.price*10){
      $scope.dosh = $scope.dosh - $scope.price*10;
      $scope.twoMulti = $scope.twoMulti + 1;
    }

    if(type === 3 && $scope.dosh >= $scope.price*100){
      $scope.dosh = $scope.dosh - $scope.price*100;
      $scope.threMulti = $scope.threMulti + 1;
    }

    if(type === 4 && $scope.dosh >=  1000000 ){
      $scope.dosh = $scope.dosh - 1000000;
      $scope.chests = $scope.chests + 1;
    }

  }

  $scope.wheelOne = function(){
    $timeout( function(){
      $scope.dosh = $scope.dosh + 1 * $scope.oneMulti;
      $scope.oneTick = $scope.oneTick + 1;
      if($scope.oneTick > 9){
        $scope.wheelTwo();
        $scope.oneTick = 0;
      }
      $scope.wheelOne();
    }, $scope.baseTime );
  }


  $scope.wheelTwo = function(){
    $scope.dosh = $scope.dosh + 10 * $scope.twoMulti;
    $scope.twoTick = $scope.twoTick + 1;
    if($scope.twoTick > 9){
      $scope.wheelThree();
      $scope.twoTick = 0;
    }
  }


  $scope.wheelThree = function(){
    $scope.dosh = $scope.dosh + 100 * $scope.threMulti;
    $scope.threTick = $scope.threTick + 1;
    if($scope.threTick > 9){
      $scope.threTick = 0;
    }
  }

  $scope.timewarp = function(){
    var original = angular.copy($scope.baseTime);
    $scope.baseTime = 10;
    $timeout( function(){
      $scope.baseTime = original;
    }, 5000);
  }

  $scope.pop = function(){
    $scope.dosh = $scope.dosh + 1;
    $scope.popFX = true;
    $timeout( function(){
      $scope.popFX = false;
    }, 100);
  }

  $scope.wheelOne();

});
