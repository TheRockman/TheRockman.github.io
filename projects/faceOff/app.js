var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {

  $scope.matches = [
    {
      team1: 'Raptors',
      team2: 'Ravens',
      matches: 10,
      time: '4 days'
    },
    {
      team1: 'Raptors',
      team2: 'Ravens',
      matches: 20,
      time: '4 days'
    },
    {
      team1: 'Raptors',
      team2: 'Ravens',
      matches: 30,
      time: '4 days'
    },
    {
      team1: 'Raptors',
      team2: 'Ravens',
      matches: 40,
      time: '4 days'
    },
    {
      team1: 'Raptors',
      team2: 'Ravens',
      matches: 50,
      time: '4 days'
    },
    {
      team1: 'Raptors',
      team2: 'Ravens',
      matches: 60,
      time: '4 days'
    }
  ]

});
