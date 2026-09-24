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
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'Healer'
        },
        {
          name: 'Spartak',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'Tank'
        },
        {
          name: 'Alesya',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'DPS'
        },
        {
          name: 'Aglaya',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
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
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'Healer'
        },
        {
          name: 'Daria',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'Healer'
        },
        {
          name: 'Andrei',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'DPS'
        },
        {
          name: 'Rufina',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'Tank'
        },
      ]
    },
    {
      name: 'Guardian',
      url: 'https://graphicsfamily.com/wp-content/uploads/edd/2023/12/Alien-Head-Mascot-Esport-Game-Logo-Vector-Template-PNG-Transparent.png',
      players: [
        {
          name: 'Maksim',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'DPS'
        },
        {
          name: 'Kostya',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'DPS'
        },
        {
          name: 'Sang-Hun',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'Healer'
        },
        {
          name: 'U-Jin',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'Tank'
        },
      ]
    },
    {
      name: 'Mello',
      url: 'https://images.seeklogo.com/logo-png/66/2/ac-esport-logo-png_seeklogo-668411.png',
      players: [
        {
          name: 'Mi-Gyeong',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'DPS'
        },
        {
          name: 'Jung-Hoon',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'Tank'
        },
        {
          name: 'Feodosiya',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
          role: 'Healer'
        },
        {
          name: 'Zinoviya',
          url: 'https://www.pngmart.com/files/22/Fortnite-Skins-PNG-Isolated-Pic.png',
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
