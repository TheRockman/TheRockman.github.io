var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function ($scope, $http, $sce) {
  function getAColor() {
    return 'dodgerblue';
  }

  function naturalCompare(a, b) {
    var aParts = String(a).split(/(\d+)/).filter(Boolean);
    var bParts = String(b).split(/(\d+)/).filter(Boolean);

    for (var i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      if (aParts[i] === undefined) return -1;
      if (bParts[i] === undefined) return 1;

      var aIsNumber = /^\d+$/.test(aParts[i]);
      var bIsNumber = /^\d+$/.test(bParts[i]);

      if (aIsNumber && bIsNumber) {
        var numberDiff = Number(aParts[i]) - Number(bParts[i]);
        if (numberDiff !== 0) return numberDiff;
      } else {
        var stringDiff = aParts[i].localeCompare(bParts[i], undefined, {
          numeric: true,
          sensitivity: 'base'
        });

        if (stringDiff !== 0) return stringDiff;
      }
    }

    return 0;
  }

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

        $scope.sortedProjects = $scope.projects.sort(function (a, b) {
          return naturalCompare(a.path, b.path);
        });

        $scope.mobiles = $scope.projects.filter(function (project) {
          return project.path.includes('mobile') && !project.path.includes('boilerplate');
        });
        $scope.landings = $scope.projects.filter(function (project) {
          return project.path.includes('landing') && !project.path.includes('boilerplate');
        });
        $scope.dashboards = $scope.projects.filter(function (project) {
          return project.path.includes('dashboard') && !project.path.includes('boilerplate');
        });
      })

    })
  })



  $scope.preview = function (item) {
    if (window.innerWidth > 768) {
      console.log(window.innerWidth);
      $scope.currentProjectUrl = $sce.trustAsResourceUrl('https://therockman.github.io/projects/' + item.path + '/index.html');
    }
  }

});
