var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  $scope.index = 0;

  $scope.images = [
    'https://i0.wp.com/www.solopress.com/blog/wp-content/uploads/2014/10/halo-video-game-poster-by-dylan-west.jpg?resize=388%2C600&ssl=1',
    'https://i2.wp.com/www.solopress.com/blog/wp-content/uploads/2014/10/zelda-video-game-poster-by-dylan-west.jpg?resize=388%2C600&ssl=1',
    'https://i2.wp.com/www.solopress.com/blog/wp-content/uploads/2014/10/titanfall-video-game-poster-by-dylan-west.jpg?resize=388%2C600&ssl=1'
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
