var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {

// $scope.updateTheme = function (prop, val) {
//   document.documentElement.style.setProperty(prop, val);
// }

//TWO
$scope.einput = '';
var base = 8;
$scope.updatedEyesX = 0;
$scope.updatedEyesY = 0;

$scope.updateEyes = function(x) {
  var leng = -base + x.length;
  if (leng > base) {
    leng = base;
  }
  console.log(leng);
  if (leng > -4 && leng < 4) {
    $scope.updatedEyesY = 2;
  }
  else{
    $scope.updatedEyesY = 0;
  }
  $scope.updatedEyesX = leng;
}

//FOUR
$scope.myVar = 1;

//FIVE
$scope.keyVal = '';
$scope.lastVal = '';
$scope.updateKeyVal = function (uc, lc) {
  if ($scope.shift) {
    $scope.keyVal = $scope.keyVal+lc;
  } else {
    $scope.keyVal = $scope.keyVal+uc;
  }
}
$scope.eraseKeyVal = function () {
  $scope.keyVal = $scope.keyVal.slice(0, -1);
}

$scope.slide = 'one';

});
