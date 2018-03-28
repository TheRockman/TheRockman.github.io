var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {

  $scope.projects = [
    {
      Title: 'About',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      Tags: ['Blog', 'About'],
      Theme: 'dodgerblue',
      Poster: './img/profilePoster.webp',
      PosterSmall: './img/profilePoster.webp',
      Backdrop: './img/profileBack.webp'
    },
    {
      Title: 'Doodles',
      Desc: 'I draw whenever I have the time: on the train, at home or while waiting for code to compile. I use a simple ball point pen when im on the go or my wacom tablet.',
      Tags: ['Drawing', 'Making'],
      Theme: '#F53C6D',
      Poster: './img/doodlePoster.webp',
      PosterSmall: './img/doodlePoster.webp',
      Backdrop: './img/doodleBack.webp',
      Url: 'https://twitter.com/compileanddraw'
    },
    {
      Title: 'Music',
      Desc: 'If you are observant you will notice that few of my tracks are longer than one minute. I could claim that this is some artistic choice to impose limits on myself. The truth however is simply that the software im using wont allow larger files to be exported.',
      Tags: ['Music', 'Making'],
      Theme: '#6C4796',
      Poster: './img/musicPoster.webp',
      PosterSmall: './img/musicPoster.webp',
      Backdrop: './img/musicBack.webp',
      Url: 'https://soundcloud.com/user-586995580',
      Devider: true
    }
    // ,{
    //   Title: 'Boilerplate',
    //   Desc: '',
    //   Tags: ['Tag'],
    //   Theme: '',
    //   Poster: './img/boilerplatePoster.png',
    //   Backdrop: '.img/boilerplateback.png.',
    //   Url: ''
    // }
  ];

  (function generateID() {
    for (var i = 0; i < $scope.projects.length; i++) {
      $scope.projects[i].Id = i;
    }
  })();

  $scope.selectedProject = $scope.projects[0];

  $scope.setSelectedProject = function (project) {
    $scope.selectedProject = project;
    if (project.Theme) {
      $scope.updateTheme(project.Theme);
    }
  }

  $scope.isSelectedProject = function (project) {
    if (project.Id === $scope.selectedProject.Id) {
      return true;
    }
  }

  $scope.updateTheme = function (theme) {
    document.documentElement.style.setProperty('--primary', theme);
  }


});
