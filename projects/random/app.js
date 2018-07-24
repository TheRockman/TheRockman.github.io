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
      title: 'Link',
      subtitle: 'Hero of Time, reborn',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://vignette.wikia.nocookie.net/vsbattles/images/f/f6/Link_breath_of_the_wild_render_by_jrrenders-dad872p.png/revision/latest?cb=20170717130012'
    },
    {
      title: 'Toon Link',
      subtitle: 'Hero of Time',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'http://www.pngmart.com/files/2/Zelda-Link-PNG-Picture.png'
    },
    {
      title: 'Waluigi',
      subtitle: 'Number one',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      url: 'https://vignette.wikia.nocookie.net/supermarioglitchy4/images/4/46/Waluigi.png/revision/latest?cb=20140622194605'
    }
  ]
});
