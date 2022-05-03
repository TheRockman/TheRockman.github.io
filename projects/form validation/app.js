var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {

  $scope.output = [];
  $scope.workObj = {};

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  $scope.add = function(){
    if($scope.workObj !== null){
      $scope.workObj.id = uuidv4();

      $scope.output.push($scope.workObj);
      $scope.workObj = {};
    }
  }

  $scope.remove = function(value){
    var r = confirm("Remove?");
    if (r) {
      $scope.output = $scope.output.filter(function(item) {
        return item !== value
      })
    }
  }

});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
