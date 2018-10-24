var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {

  function getAColor() {
    return 'dodgerblue';
  } 

  $scope.projects = [
    {
      Title: 'About',
      Desc: 'Somewhere out there there is a place where UI and UX sometimes meet for a slice of pizza and a pint. Thats also when really awesome stuff gets made. What i do is the equivalent of pulling up a chair and letting them know the next round is on me.',
      Tags: ['Blog', 'About'],
      Theme: 'dodgerblue',
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg'
    },
    {
      Title: 'Doodles',
      Desc: 'I draw whenever I have the time: on the train, at home or while waiting for code to compile. I use a simple ball point pen when im on the go or my wacom tablet.',
      Tags: ['Drawing', 'Making', 'Twitter'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: 'https://twitter.com/compileanddraw'
    },
    {
      Title: 'Music',
      Desc: 'If you are observant you will notice that few of my tracks are longer than one minute. I could claim that this is some artistic choice to impose limits on myself. The truth however is simply that the software im using wont allow larger files to be exported.',
      Tags: ['Music', 'Making', 'Soundcloud'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: 'https://soundcloud.com/user-586995580',
      Devider: true
    },
    {
      Title: 'UI kit',
      Desc: 'A no-js ui kit for basic html elements that can be used in any project.',
      Tags: ['Code', 'Making', 'UI'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/uikit/index.html',
      Devider: false
    },
    {
      Title: 'Cards',
      Desc: 'I like card games. So i tried to make a simple one that can be played on the bus.',
      Tags: ['Code', 'Making', 'Game'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/cards/index.html',
      Devider: false
    },
    {
      Title: 'Feed',
      Desc: 'A mobile app sandbox.',
      Tags: ['Code', 'Making', 'Mobile'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/mobile/index.html',
      Devider: false
    },
    {
      Title: 'Dashboard',
      Desc: 'Trying out a dashboard design with a persistent sidebar. Exploring alternatives to the standard mobile top navigation bar in general.',
      Tags: ['Code', 'Making', 'Mobile'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/random/index.html',
      Devider: false
    },
    {
      Title: 'Landing page',
      Desc: 'Whats trendy and hip with the suits? Purple lading pages with svg illustrations thats what!',
      Tags: ['Code', 'Making', 'Mobile'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/landing/index.html',
      Devider: false
    },
    {
      Title: 'Another landing page',
      Desc: 'Playing around with dynamic languages and themes',
      Tags: ['Code', 'Mobile'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/landing2/index.html',
      Devider: false
    },
    {
      Title: 'Tickets',
      Desc: 'Movie ticket booking flow',
      Tags: ['Code', 'Making', 'Mobile'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/movie/index.html',
      Devider: false
    },
    {
      Title: 'Nightly',
      Desc: 'Playing around with SVG backgrounds',
      Tags: ['Code', 'Making', 'SVG'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/nightly/index.html',
      Devider: false
    },
    {
      Title: 'Conversation',
      Desc: 'Just someone to talk to',
      Tags: ['Code', 'Making', 'Mobile'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/bot/index.html',
      Devider: false
    },
    {
      Title: 'Inventory',
      Desc: 'A drag and drop inventory loadout',
      Tags: ['Code', 'game'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/loadout/index.html',
      Devider: false
    },
    {
      Title: 'Scifi',
      Desc: 'A non-responsive future telephone',
      Tags: ['Code', 'UI'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/scifiui/index.html',
      Devider: false
    },
    {
      Title: 'Turn based',
      Desc: 'Example of turned based combat logic',
      Tags: ['Code', 'Making'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/battle/index.html',
      Devider: false
    },
    {
      Title: 'Matching',
      Desc: 'Example of matching game',
      Tags: ['Code', 'Game'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/match/index.html',
      Devider: false
    },
    {
      Title: 'Dashboard',
      Desc: 'experimental dashboard layout',
      Tags: ['Code', 'Game'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/musicDash/index.html',
      Devider: false
    },
    {
      Title: 'Walking simulator',
      Desc: 'Small idea i had about a sidescroller game. Still using placeholder art thats not mine!',
      Tags: ['Code', 'Game'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/gates/index.html',
      Devider: false
    },
    {
      Title: 'FizzBuzz',
      Desc: 'FizzBuzz example in CSS',
      Tags: ['Code'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/fb/index.html',
      Devider: false
    },
    {
      Title: 'Shuffle cards',
      Desc: 'Trying out some animation and more fancy css',
      Tags: ['Code', 'Game'],
      Theme: getAColor(),
      Poster: '',
      PosterSmall: '',
      Backdrop: './img/bg1.jpg',
      Url: './projects/cardart/index.html',
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
