var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $window) {
  // $window.localStorage.setItem(key,value)
  
  $scope.party = JSON.parse($window.localStorage.getItem('party'));
  $scope.form = {};
  
  $scope.addForm = false;
  
  $scope.addMember = function () {
    var found = false;
    for(var i = 0; i < $scope.party.length; i++) {
      if ($scope.party[i].name == $scope.form.name) {
        found = $scope.party[i];
        break;
      }
    }
    
    if (found) {
      // update
      fonud = $scope.form;
    } else{
      // add
      $scope.party.push($scope.form);
    }
    
    $scope.form = {}
    $scope.addForm = false;
    $window.localStorage.setItem('party', JSON.stringify($scope.party));
  }
  
  $scope.add = function () {
    $scope.addForm = !$scope.addForm;
  }
  
  $scope.editMember = function (member) {
    $scope.addForm = true;
    $scope.form = member;
  }
  
  $scope.deleteMember = function (member) {
    for (var i = 0; i < $scope.party.length; i++) {
      if ($scope.party[i].name == member.name) {
        $scope.party[i] = null;
        $window.localStorage.setItem('party', JSON.stringify($scope.party));
      }
    }
  }
});
