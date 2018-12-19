var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {

  $scope.slides = [
    {
      Url:'https://www.injustice.com/storage/characters/batman/portrait.png',
      Name: 'Batman',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      Alignment: 'good',
      Atk: 7,
      Def: 5,
      Wins: 10,
      Losses: 1
    },
    {
      Url:'https://www.injustice.com/storage/characters/robin/portrait.png',
      Name: 'Robin',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      Alignment: 'good',
      Atk: 5,
      Def: 3,
      Wins: 3,
      Losses: 0
    },
    {
      Url:'https://img.rankedboost.com/wp-content/uploads/2017/05/Joker-Injustice-2.png',
      Name: 'Joker',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      Alignment: 'evil',
      Atk: 9,
      Def: 2,
      Wins: 0,
      Losses: 22
    },
    {
      Url:'https://www.gamecrate.com/sites/default/files/Catwoman_Injustice2.png',
      Name: 'Catwoman',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      Alignment: 'neutral',
      Atk: 4,
      Def: 4,
      Wins: 3,
      Losses: 15
    }
  ]
  
  $scope.active = $scope.slides[0];
  $scope.index = 0;
  
  $scope.prev = function () {
    if ($scope.index - 1 >= 0) {
      $scope.index = $scope.index - 1;  
      $scope.active = $scope.slides[$scope.index];
    } else {
      $scope.index = $scope.slides.length -1;  
      $scope.active = $scope.slides[$scope.index];
    }
  }
  
  $scope.next = function () {
    if ($scope.index + 1 < $scope.slides.length) {
      $scope.index = $scope.index + 1;  
      $scope.active = $scope.slides[$scope.index];
    } else {
      $scope.index = 0;  
      $scope.active = $scope.slides[$scope.index];
    }
  }

});
