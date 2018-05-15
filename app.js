var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {

  $scope.projects = [
    {
      Title: 'About',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      Tags: ['Blog', 'About'],
      Theme: 'dodgerblue',
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg'
    },
    {
      Title: 'Doodles',
      Desc: 'I draw whenever I have the time: on the train, at home or while waiting for code to compile. I use a simple ball point pen when im on the go or my wacom tablet.',
      Tags: ['Drawing', 'Making'],
      Theme: '#F53C6D',
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: 'https://twitter.com/compileanddraw'
    },
    {
      Title: 'Music',
      Desc: 'If you are observant you will notice that few of my tracks are longer than one minute. I could claim that this is some artistic choice to impose limits on myself. The truth however is simply that the software im using wont allow larger files to be exported.',
      Tags: ['Music', 'Making'],
      Theme: '#6C4796',
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: 'https://soundcloud.com/user-586995580',
      Devider: true
    },
    {
      Title: 'Cards',
      Desc: 'I like card games. So i tried to make a simple one that can be played on the bus.',
      Tags: ['Code', 'Making'],
      Theme: '#6C4796',
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/cards/index.html',
      Devider: false
    },
    {
      Title: 'Feed',
      Desc: 'A mobile sandbox.',
      Tags: ['Code', 'Making'],
      Theme: '#ff6347',
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/mobile/index.html',
      Devider: false
    },
    {
      Title: 'Tickets',
      Desc: 'Movie ticket booking flow',
      Tags: ['Code', 'Making'],
      Theme: '#ff6347',
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/movie/index.html',
      Devider: false
    },
    {
      Title: 'Nightly',
      Desc: 'Movie ticket booking flow',
      Tags: ['Code', 'Making'],
      Theme: '#6C4796',
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/nightly/index.html',
      Devider: false
    },
    {
      Title: 'Conversation',
      Desc: 'Just someone to talk to',
      Tags: ['Code', 'Making'],
      Theme: 'dodgerblue',
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/bot/index.html',
      Devider: false
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

  $scope.filteredList = [];
  $scope.activeTag = null;

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

  $scope.clearFilter = function () {
    $scope.filteredList = [];
    $scope.activeTag = null;
  }

  $scope.updateTheme = function (theme) {
    document.documentElement.style.setProperty('--primary', theme);
  }

  $scope.filterByTag = function (tag) {
    $scope.clearFilter();
    $scope.activeTag = tag;
    for (var i = 0; i < $scope.projects.length; i++) {
      if($scope.projects[i].Tags.indexOf(tag) !== -1) {
        $scope.filteredList.push($scope.projects[i]);
      }
    }
  }

  $scope.pickFilteredItem =function (project) {
    $scope.setSelectedProject(project);
    $scope.clearFilter();
  }

});
