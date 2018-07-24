var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {
  $scope.searchText;
  $scope.setSearchText = function (model) {
    $scope.searchText = model;
  }
  $scope.items = [
    {
      title: 'Mario',
      subtitle: 'Jumpman',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'http://mario.nintendo.com/assets/img/home/char-mario.png'
    },
    {
      title: 'Luigi',
      subtitle: 'Player 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://vignette.wikia.nocookie.net/pachirapong/images/6/6d/Luigi.png/revision/latest?cb=20171124211639'
    },
    {
      title: 'Toad',
      subtitle: '1 in a million',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://vignette.wikia.nocookie.net/mario/images/9/94/Toad_Artwork_-_Super_Mario_3D_Land.png/revision/latest?cb=20120513165845'
    },
    {
      title: 'Peach',
      subtitle: 'Princess of the mushroom kingdom',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://i.pinimg.com/originals/74/ab/58/74ab58c82e892b0a9f3efee2dcc83a05.png'
    },
    {
      title: 'Waluigi',
      subtitle: 'Number one',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://vignette.wikia.nocookie.net/supermarioglitchy4/images/4/46/Waluigi.png/revision/latest?cb=20140622194605'
    }
  ]
});
