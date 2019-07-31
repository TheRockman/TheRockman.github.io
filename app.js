var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope, $http, $sce) {
  function getAColor() {
    return 'dodgerblue';
  }
  $http({
  method: 'GET',
  url: 'https://api.github.com/repos/TheRockman/TheRockman.github.io/git/trees/598de0031990cf2802549e87eb4a79170466bee2'
  }).then(function successCallback(response) {
    $scope.projects = response.data.tree;
    console.log(response.data.tree);
    for (var i = 0; i < $scope.projects.length; i++) {
      $scope.projects[i].Id = i;
    }
  })
    
  $scope.preview = function(item){
    $scope.currentProjectUrl = $sce.trustAsResourceUrl('projects/' +   item.path + '/index.html' );  
  }
  
});
