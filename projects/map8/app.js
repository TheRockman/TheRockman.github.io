var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope,  $timeout, $document) {

  $scope.cameraPos = {
    x: 0,
    y: 0,
    maskRadius: 16,
  }
  $scope.viewport = {
    x: 0,
    y: 0,
    maskRadius: 200,
  }
  $scope.mapsize = {
    x: 2000,
    y: 2000
  }
  $scope.screenSize = {
    x: 800,
    y: 600
  }
  $scope.playerPos = {
    x:  282,
    y:  382,
    blocked: false
  }

  $scope.wall = {
    x: $scope.playerPos.x,
    y: $scope.playerPos.y,
    maskRadius: 64,
    appear: false
  }

  var collision = function(itemA, itemB){
    var dx = itemA.x - itemB.x;
    var dy = itemA.y+100 - itemB.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < itemA.maskRadius + itemB.maskRadius) {
      return true;
    } else{
      return false;
    }
  }

  $scope.fixCamera = function(){
    $scope.camera = {
      'top': $scope.cameraPos.y-382+"px",
      'left': $scope.cameraPos.x-182+"px"
    }
    $scope.viewport = {
      x: $scope.cameraPos.x,
      y: $scope.cameraPos.y,
      maskRadius: 200,
    }
  }
  $scope.fixCamera();

  $document.bind('keydown', function (e) {
    var key = e.keyCode;
    $scope.playerPos.blocked = collision($scope.cameraPos, $scope.wall);
    $scope.wall.appear = collision($scope.viewport, $scope.wall);

    if(key === 40){
      //down
      $scope.cameraPos.y = $scope.cameraPos.y-30;
    }
    if(key === 38){
      //up
      $scope.cameraPos.y = $scope.cameraPos.y+30;
    }
    if(key === 39){
      //right
      $scope.cameraPos.x = $scope.cameraPos.x-30;
    }
    if(key === 37){
      //left
      $scope.cameraPos.x = $scope.cameraPos.x+30;
    }

    $scope.fixCamera();

    $scope.$apply();
  });

});
