var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope, $http, $sce) {
  function getAColor() {
    return 'dodgerblue';
  }
  // https://api.github.com/repos/:owner/:repo/branches/master

  $http({
  method: 'GET',
  url: 'https://api.github.com/repos/TheRockman/TheRockman.github.io/branches/master'
  }).then(function successCallback(response) {
    // console.log(response.data);

    $http({
    method: 'GET',
    url: 'https://api.github.com/repos/TheRockman/TheRockman.github.io/git/trees/' + response.data.commit.sha
    }).then(function successCallback(response) {

      $http({
      method: 'GET',
      url: 'https://api.github.com/repos/TheRockman/TheRockman.github.io/git/trees/' + response.data.tree[11].sha
      }).then(function successCallback(response) {

        $scope.projects = response.data.tree;
        console.log(response.data.tree);
        for (var i = 0; i < $scope.projects.length; i++) {
          $scope.projects[i].Id = i;
        }
      })

    })
  })



  $scope.preview = function(item){
    if(window.innerWidth>768){
      console.log(window.innerWidth);
      $scope.currentProjectUrl = $sce.trustAsResourceUrl('https://therockman.github.io/projects/'+item.path+'/index.html');
    }
  }

});
