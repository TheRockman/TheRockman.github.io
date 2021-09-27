var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {
  
  $scope.currentTeam = {};
  $scope.currentPlayer = {};
  
  $scope.view = 'today';
  
  $scope.setView = function(view, team, player){
    $scope.view = view;
    $scope.currentTeam = team;
    $scope.currentPlayer = player;
  }
  
  $scope.teams = [
    {
      name: 'Shinigami',
      url: 'https://graphicsfamily.com/wp-content/uploads/edd/2020/12/Shinigami-Mascot-Logo-PNG-Transparent.png',
      players: [
        {
          name: 'Raya',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'Healer'
        },
        {
          name: 'Spartak',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'Tank'
        },
        {
          name: 'Alesya',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'DPS'
        },
        {
          name: 'Aglaya',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'Tank'
        },
      ]
    },
    {
      name: 'Iceman',
      url: 'https://graphicsfamily.com/wp-content/uploads/edd/2020/11/Iceman-Mascot-Logo-PNG-Transparent.png',
      players: [
        {
          name: 'Yong',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'Healer'
        },
        {
          name: 'Daria',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'Healer'
        },
        {
          name: 'Andrei',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'DPS'
        },
        {
          name: 'Rufina',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'Tank'
        },
      ]
    },
    {
      name: 'Guardian',
      url: 'https://media1.thehungryjpeg.com/thumbs2/ori_3677457_xap8vhq86d46ie8gzur5m7tivic9at5e55zhn40d_guardian-esports-mascot-logo-design.png',
      players: [
        {
          name: 'Maksim',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'DPS'
        },
        {
          name: 'Kostya',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'DPS'
        },
        {
          name: 'Sang-Hun',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'Healer'
        },
        {
          name: 'U-Jin',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'Tank'
        },
      ]
    },
    {
      name: 'Mello',
      url: 'https://carbonmade-media.accelerator.net/35625237;640x594.png?auto=webp',
      players: [
        {
          name: 'Mi-Gyeong',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'DPS'
        },
        {
          name: 'Jung-Hoon',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'Tank'
        },
        {
          name: 'Feodosiya',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'Healer'
        },
        {
          name: 'Zinoviya',
          url: 'https://gamersorigin.com/wp-content/uploads/2018/03/silhouette-2.png',
          role: 'Tank'
        },
      ]
    }
  ]
  
  $scope.games = [
    {
      team1: $scope.teams[0],
      team2: $scope.teams[1],
      gameType: 'Draft pick',
      score1: 2,
      score2: 0
    },
    {
      team1: $scope.teams[2],
      team2: $scope.teams[3],
      gameType: 'Deathmatch',
      score1: 1,
      score2: 1
    },
  ]
});
