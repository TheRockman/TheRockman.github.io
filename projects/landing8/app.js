var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  $scope.index = 0;

  $scope.images = [
    'https://m.media-amazon.com/images/I/61clQxmEl7L._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/61e5LNdIbFL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/51u6XVF6W2L._AC_SX679_.jpg'
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
