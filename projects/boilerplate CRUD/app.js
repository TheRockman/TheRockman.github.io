var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $window) {

  // JSON.parse($window.localStorage.getItem('itemList'));
  // $window.localStorage.setItem('party', JSON.stringify($scope.party));

  $scope.formItem = {};
  $scope.formIsVisible = true;
  $scope.items = [];
  $scope.view = '';

  // CED
  $scope.create = function () {
    var found = false;
    if ($scope.items.length > 0) {
      for(var i = 0; i < $scope.items.length; i++) {
        if ($scope.items[i].id == $scope.formItem.id) {
          found = $scope.items[i];
          break;
        }
      }
    }
    
    if (found) {
      // update
      fonud = $scope.formItem;
    } else{
      // add
      $scope.formItem.id = $scope.genID();
      $scope.items.push($scope.formItem);
    }
    
    $scope.formItem = {};
    $scope.formIsVisible = false;
    
    $window.localStorage.setItem('itemList', JSON.stringify($scope.party));
  }
  
  $scope.edit = function (item) {
    $scope.formItem = item;
    $scope.formIsVisible = true;
  }
  
  $scope.delete = function (item) {
    if ($scope.items.length > 0) {
      for(var i = 0; i < $scope.items.length; i++) {
        if ($scope.items[i].id == item.id) {
          $scope.items.splice(i, 1)
          break;
        }
      }
    }
  }
  
  $scope.toggleForm = function () {
    $scope.formIsVisible = !$scope.formIsVisible;
  }
  
  $scope.cancelForm = function () {
    $scope.formItem = {};
    $scope.formIsVisible = false;
  }
  
  $scope.setView = function (val) {
    $scope.view = val;
  }
  
  $scope.genID = function () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < 5; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  

});
