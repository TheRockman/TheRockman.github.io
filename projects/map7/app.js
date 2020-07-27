var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope, $window) {
  $scope.Zcam = 50;
  $scope.Xcam = 0;
  $scope.charSize = 110;
  $scope.charDir = 0;
  $scope.vertSwivel = 0;
  $scope.charPosDepth = -120;
  $scope.moving = false;

  $scope.applyStyle = function(){
    $scope.char = {
      'height': $scope.charSize+"px",
      'z-index': $scope.Zcam,
      'transform': "translateY("+$scope.charPosDepth+"px) rotateY("+$scope.charDir+"deg) skewY("+$scope.vertSwivel+"deg)"
    };
    $scope.camera = {
      'transform': "translateX("+$scope.Xcam+"px)"
    }
    console.log($scope.char, $scope.camera);
  }
  $scope.applyStyle();

  window.addEventListener('keyup', function(e){
    if(e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight"){
      $scope.moving = false;
      $scope.vertSwivel = 0;
      $scope.applyStyle();
    }
    $scope.$digest();
  });

  window.addEventListener('keydown', function(e){
    if (e.key === "ArrowRight") {
      console.log('right');
      // right limit
      if($scope.Xcam<-1050){
        return;
      }
      $scope.Xcam = $scope.Xcam - 10;
      $scope.charDir = 180;
      $scope.moving = true;
      $scope.applyStyle();
    }

    if (e.key === "ArrowLeft") {
      console.log('left');
      // left limit
      if($scope.Xcam>130){
        return;
      }
      $scope.Xcam = $scope.Xcam + 10;
      $scope.charDir = 0;
      $scope.moving = true;
      $scope.applyStyle();
    }

    if (e.key === "ArrowUp") {
      console.log('up');
      //top bounds
      if($scope.charPosDepth<-150){
        return;
      }

      $scope.vertSwivel = 15;
      $scope.Zcam = $scope.Zcam - 10;
      $scope.charSize = $scope.charSize - 3;
      $scope.charPosDepth = $scope.charPosDepth - 10;
      $scope.moving = true;

      $scope.applyStyle();
    }

    if (e.key === "ArrowDown") {
      console.log('down');
      //bottom bounds
      if($scope.charPosDepth>0){
        return;
      }

      $scope.vertSwivel = -15;
      $scope.Zcam = $scope.Zcam + 10;
      $scope.charSize = $scope.charSize + 3;
      $scope.charPosDepth = $scope.charPosDepth + 10;
      $scope.moving = true;

      $scope.applyStyle();
    }

    if (e.key === "Enter") {
      console.log('enter');
    }

    $scope.$digest();
  });

});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
