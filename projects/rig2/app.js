var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  $scope.llr = 0;
  $scope.llp = 0;
  $scope.lur = 0;
  $scope.lup = 0;
  
  $scope.rlr = 0;
  $scope.rlp = 0;
  $scope.rur = 0;
  $scope.rup = 0;
  
  $scope.frx = 0;
  $scope.fry = 0;
  $scope.frz = 0;
  $scope.fpy = 0;
  
  $scope.mpy = 180;
  $scope.mwx = 1;
  
  $scope.symetry = false;
  
  
  $scope.updateCssVar = function(){
    if(!$scope.symetry){
      document.documentElement.style.setProperty('--right-lower-rotation', $scope.rlr + "deg")
      document.documentElement.style.setProperty('--right-lower-position', $scope.rlp + "%")
      document.documentElement.style.setProperty('--right-upper-rotation', $scope.rur + "deg")
      document.documentElement.style.setProperty('--right-upper-position', $scope.rup + "%")
    }
    else{
      document.documentElement.style.setProperty('--right-lower-rotation', $scope.llr - ($scope.llr * 2) + "deg")
      document.documentElement.style.setProperty('--right-lower-position', $scope.llp + "%")
      document.documentElement.style.setProperty('--right-upper-rotation', $scope.lur - ($scope.lur * 2) + "deg")
      document.documentElement.style.setProperty('--right-upper-position', $scope.lup + "%")
    }
    
    document.documentElement.style.setProperty('--left-lower-rotation', $scope.llr + "deg")
    document.documentElement.style.setProperty('--left-lower-position', $scope.llp + "%")
    document.documentElement.style.setProperty('--left-upper-rotation', $scope.lur + "deg")
    document.documentElement.style.setProperty('--left-upper-position', $scope.lup + "%")
    
    
    document.documentElement.style.setProperty('--face-rotation-x', $scope.frx + "deg")
    document.documentElement.style.setProperty('--face-rotation-y', $scope.fry + "deg")
    document.documentElement.style.setProperty('--face-rotation-z', $scope.frz + "deg")
    document.documentElement.style.setProperty('--face-position-y', $scope.fpy + "px")
    
    document.documentElement.style.setProperty('--mouth-position-y', $scope.mpy + "px")
    document.documentElement.style.setProperty('--mouth-width-x', $scope.mwx)
  }
  
  $scope.mad = function(){
    $scope.llr = 0;
    $scope.llp = 0;
    $scope.lur = 20;
    $scope.lup = 40;
    $scope.rlr = 0;
    $scope.rlp = 0;
    $scope.rur = -20;
    $scope.rup = 40;
    $scope.frx = -10;
    $scope.fry = 0;
    $scope.frz = 0;
    $scope.updateCssVar();
  }
  
  $scope.squint = function(){
    $scope.llr = 0;
    $scope.llp = 45;
    $scope.lur = 0;
    $scope.lup = 45;
    $scope.rlr = 0;
    $scope.rlp = 45;
    $scope.rur = 0;
    $scope.rup = 45;
    $scope.frx = -20;
    $scope.fry = 0;
    $scope.frz = 0;
    $scope.updateCssVar();
  }
  
  $scope.sad = function(){
    $scope.llr = 10;
    $scope.llp = 20;
    $scope.lur = -10;
    $scope.lup = 20;
    $scope.rlr = -10;
    $scope.rlp = 20;
    $scope.rur = 10;
    $scope.rup = 20;
    $scope.frx = 0;
    $scope.fry = 0;
    $scope.frz = 0;
    $scope.updateCssVar();
  }
  
  $scope.huh = function(){
    $scope.llr = 10;
    $scope.llp = 20;
    $scope.lur = -10;
    $scope.lup = 20;
    $scope.rlr = 0;
    $scope.rlp = 0;
    $scope.rur = 0;
    $scope.rup = 0;
    $scope.frx = 0;
    $scope.fry = 0;
    $scope.frz = 7;
    $scope.updateCssVar();
  }
  
});
