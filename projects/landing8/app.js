var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  $scope.index = 0;

  $scope.images = [
    'https://c1.scryfall.com/file/scryfall-cards/large/front/9/2/926b49a1-f220-41ab-8c67-8354a91a15e8.jpg?1562790454',
    'https://c1.scryfall.com/file/scryfall-cards/large/front/a/8/a8e9f4d2-bba5-4061-8ae7-a68b912f2c11.jpg?1572893504',
    'https://c1.scryfall.com/file/scryfall-cards/large/front/7/5/7593d5fb-c6b3-4d24-b9d3-97a4378161fd.jpg?1543676084'
  ]

  $scope.reviews = [
    {
      name: 'Bobbo',
      stars: '⭐ ⭐ ⭐ ⭐ ⭐',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore!',
      date: '20/12/2020'
    },
    {
      name: 'Bobbo',
      stars: '⭐ ⭐ ⭐',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore!',
      date: '20/12/2020'
    },
    {
      name: 'Bobbo',
      stars: '⭐',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore!',
      date: '20/12/2020'
    },
  ]

  $scope.applyIndex = function(i){
    $scope.index = i;
  }
});
