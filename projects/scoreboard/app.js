var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {
  $scope.setTheme = function (theme) {
    document.documentElement.setAttribute('data-theme', theme)
  }
  $scope.theme = 'spring';
  
  $scope.data = [
    {
      Name: 'Bruce Wayne',
      Rank: 1,
      NrOfApps: 102,
      ArrivalH: 0,
      ArrivalM: 10,
      Amount: 1000,
      Url: 'images.png'
    },
    {
      Name: 'Peter Parker',
      Rank: 2,
      NrOfApps: 99,
      ArrivalH: 1,
      ArrivalM: 12,
      Amount: 999,
      Url: 'images.png'
    },
    {
      Name: 'Steve Rogers',
      Rank: 3,
      NrOfApps: 102,
      ArrivalH: 0,
      ArrivalM: 10,
      Amount: 1000,
      Url: 'images.png'
    },
    {
      Name: 'Donald Blake',
      Rank: 4,
      NrOfApps: 102,
      ArrivalH: 0,
      ArrivalM: 10,
      Amount: 1000,
      Url: 'images.png'
    },
    {
      Name: 'Tony Stark',
      Rank: 5,
      NrOfApps: 102,
      ArrivalH: 0,
      ArrivalM: 10,
      Amount: 1000,
      Url: 'images.png'
    },
    {
      Name: 'Tony Stark',
      Rank: 6,
      NrOfApps: 102,
      ArrivalH: 0,
      ArrivalM: 10,
      Amount: 1000,
      Url: 'images.png'
    },
    {
      Name: 'Tony Stark',
      Rank: 7,
      NrOfApps: 102,
      ArrivalH: 0,
      ArrivalM: 10,
      Amount: 1000,
      Url: 'images.png'
    },
    {
      Name: 'Tony Stark',
      Rank: 8,
      NrOfApps: 102,
      ArrivalH: 0,
      ArrivalM: 10,
      Amount: 1000,
      Url: 'images.png'
    },
    {
      Name: 'Tony Stark',
      Rank: 9,
      NrOfApps: 102,
      ArrivalH: 0,
      ArrivalM: 10,
      Amount: 1000,
      Url: 'images.png'
    }
  ];
});
