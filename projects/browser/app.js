var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope,  $sce) {
  $scope.term = 'home'
  var json = window.localStorage.getItem('marks');
  $scope.bookmarks = JSON.parse(json);
  $scope.setProject = function (url) {
    $scope.term = url;
    $scope.currentProject = 'https://' + url;
    $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.currentProject);
  }
  
  $scope.addBookmark = function () {
    if ($scope.term) {
      $scope.bookmarks.push($scope.term);
      window.localStorage.setItem('marks', JSON.stringify($scope.bookmarks));
    }
  }
  
  $scope.remove = function (item) {
    for (var i = 0; i < $scope.bookmarks.length; i++) {
      if ($scope.bookmarks[i] === item) {
        $scope.bookmarks.splice(1, i);
        window.localStorage.setItem('marks', JSON.stringify($scope.bookmarks));
      }
    }
  }
});
