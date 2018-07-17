var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {
  $scope.selected = null;
  $scope.items = [
    {
      title: 'a1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.1/?random"
    },
    {
      title: 'b1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.11/?random"
    },
    {
      title: 'c1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.12/?random"
    },
    {
      title: 'd1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.13/?random"
    },
    {
      title: 'e1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.14/?random"
    },
    {
      title: 'f1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.15/?random"
    },
    {
      title: 'g1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.16/?random"
    },
    {
      title: 'h1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.17/?random"
    },
    {
      title: 'i1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.18/?random"
    },
    {
      title: 'j1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.19/?random"
    },
    {
      title: 'k1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.20/?random"
    },
    {
      title: 'l1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.21/?random"
    },
    {
      title: 'm1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.22/?random"
    },
    {
      title: 'n1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.22/?random"
    },
    {
      title: 'o1234',
      desc:'321',
      cover:"https://picsum.photos/500/500.23/?random"
    }
  ];
  
  $scope.setSelected = function (item) {
    $scope.selected = item;
  }
});
