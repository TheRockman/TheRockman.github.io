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
      url: 'https://pngimg.com/uploads/mario/mario_PNG54.png',
      rank: 1
    },
    {
      title: 'Luigi',
      subtitle: 'Player 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://www.pngmart.com/files/2/Luigi-PNG-HD.png',
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
      url: 'https://static.wikia.nocookie.net/mario/images/2/27/SuperMarioParty_Waluigi.png/revision/latest?cb=20260110155652',
      rank: 5
    }
  ]
});
