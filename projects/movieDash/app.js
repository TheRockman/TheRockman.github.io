var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {
  $scope.extreme = false;
  $scope.items = [
    {
      Name: 'Title A',
      Rating: 5,
      Img: 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      Name: 'Title B',
      Rating: 5,
      Img: 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      Name: 'Title C',
      Rating: 4,
      Img: 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      Name: 'Title D',
      Rating: 3,
      Img: 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      Name: 'Title E',
      Rating: 2,
      Img: 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];
  
  $scope.setSelected = function (i) {
    if (!$scope.extreme) {
      $scope.selected = i;  
    }
  }
  
  $scope.getNumber = function(num) {
    var temp = [];
    for (var i = 0; i < num; i++) {
      temp.push(i)
    }
    return temp;   
  }
  
  $scope.toggleUmbr = function () {
    $scope.umbr = !$scope.umbr;
  }
  
  $scope.goExtreme = function (i) {
    $scope.selected = i;
    $scope.extreme = true;
  }
  
  $scope.umbr = false;
  $scope.selected = $scope.items[0];
  
});
