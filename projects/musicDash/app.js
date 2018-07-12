var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {
  $scope.items = [
    {
      title: 'a1234',
      desc:'321'
    },
    {
      title: 'b1234',
      desc:'321'
    },
    {
      title: 'c1234',
      desc:'321'
    },
    {
      title: 'd1234',
      desc:'321'
    }
  ]
});
