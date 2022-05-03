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
      url: 'http://mario.nintendo.com/assets/img/home/char-mario.png',
      rank: 1
    },
    {
      title: 'Luigi',
      subtitle: 'Player 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://vignette.wikia.nocookie.net/pachirapong/images/6/6d/Luigi.png/revision/latest?cb=20171124211639',
      rank: 2
    },
    {
      title: 'Toad',
      subtitle: '1 in a million',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://vignette.wikia.nocookie.net/mario/images/9/94/Toad_Artwork_-_Super_Mario_3D_Land.png/revision/latest?cb=20120513165845',
      rank: 3
    },
    {
      title: 'Peach',
      subtitle: 'Princess of the mushroom kingdom',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://i.pinimg.com/originals/74/ab/58/74ab58c82e892b0a9f3efee2dcc83a05.png',
      rank: 4
    },
    {
      title: 'Waluigi',
      subtitle: 'Number one',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.pikpng.com%2Fpngl%2Fb%2F179-1799878_exemplaryrequest-i-was-bored-in-digital-art-class.png&sp=1651607935T948af2cde1ce9d9787663505ca80ad06332e45304593cd30b2f62276f42e2021',
      rank: 5
    }
  ]
});
