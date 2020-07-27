var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope, $window) {
  $scope.Zcam = 50;
  $scope.Xcam = 0;
  $scope.charSize = 76;
  $scope.charDir = 0;
  $scope.charPosDepth = -120;
  
  $scope.applyStyle = function(){
    $scope.char = {
      'height': $scope.charSize+"px",
      'z-index': $scope.Zcam,
      'transform': "translateY("+$scope.charPosDepth+"px) rotateY("+$scope.charDir+"deg)"
    };
    $scope.camera = {
      'transform': "translateX("+$scope.Xcam+"px)"
    }
    console.log($scope.char, $scope.camera);
  }
  $scope.applyStyle();
  
  window.addEventListener('keydown', function(e){
    if (e.key === "ArrowRight") {
      console.log('right');
      // right limit
      if($scope.Xcam<-200){
        return;
      }
      $scope.Xcam = $scope.Xcam - 10;
      $scope.charDir = 180;
      $scope.applyStyle();
    }
    
    if (e.key === "ArrowLeft") {
      console.log('left');
      // left limit
      if($scope.Xcam>390){
        return;
      }
      $scope.Xcam = $scope.Xcam + 10;
      $scope.charDir = 0;
      $scope.applyStyle();
    }
    
    if (e.key === "ArrowUp") {
      console.log('up');
      //top bounds
      if($scope.charPosDepth<-150){
        return;
      }
      
      $scope.Zcam = $scope.Zcam - 10;
      $scope.charSize = $scope.charSize - 2;
      $scope.charPosDepth = $scope.charPosDepth - 10;
      
      $scope.applyStyle();
    }
    
    if (e.key === "ArrowDown") {
      console.log('down');
      //bottom bounds
      if($scope.charPosDepth>0){
        return;
      }
      $scope.Zcam = $scope.Zcam + 10;
      $scope.charSize = $scope.charSize + 2;
      $scope.charPosDepth = $scope.charPosDepth + 10;
      
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
