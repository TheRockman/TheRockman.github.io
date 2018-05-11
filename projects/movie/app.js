var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope, $timeout) {
  $scope.selectedMovie = null;
  $scope.numberOfTickets = 0;
  $scope.checkout = null;
  $scope.booked = null;
  $scope.loading = null;
  $scope.state = 'start';

  $scope.featured = {
    name: 'Avengers: Infinity War',
    time: new Date(),
    seatsTaken: 25,
    seatsTotal: 125,
    poster: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F04%2Fmarvel_studios_avengers_infinity_war_official_trailer_7-1200x676.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
  $scope.playing = [
    {
      name: 'The shape of water',
      time: new Date(),
      seatsTaken: 25,
      seatsTotal: 125,
      poster: 'https://cdn.pastemagazine.com/www/articles/2018/04/25/best-movies-redbox-april.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Dunkirk',
      time: new Date(),
      seatsTaken: 25,
      seatsTotal: 125,
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdh6RtTvG3hndRtkgbYUtPkSKheAU4ZtbKKyCKI3yZ8UQALUO',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'name3',
      time: new Date(),
      seatsTaken: 25,
      seatsTotal: 125,
      poster: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F04%2Fmarvel_studios_avengers_infinity_war_official_trailer_7-1200x676.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'name4',
      time: new Date(),
      seatsTaken: 25,
      seatsTotal: 125,
      poster: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F04%2Fmarvel_studios_avengers_infinity_war_official_trailer_7-1200x676.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'name5',
      time: new Date(),
      seatsTaken: 25,
      seatsTotal: 125,
      poster: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F04%2Fmarvel_studios_avengers_infinity_war_official_trailer_7-1200x676.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'name6',
      time: new Date(),
      seatsTaken: 25,
      seatsTotal: 125,
      poster: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F04%2Fmarvel_studios_avengers_infinity_war_official_trailer_7-1200x676.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  $scope.setMovie = function (movie) {
    $scope.selectedMovie = movie;
  }

  $scope.getNumber = function(num) {
    $scope.seatNum = new Array(num);
  }

  $scope.calcSeats = function (seat) {
    if (seat.selected) {
      $scope.numberOfTickets = $scope.numberOfTickets + 1;
    } else {
      $scope.numberOfTickets = $scope.numberOfTickets - 1;
    }
  }

  $scope.booking = function () {
    $scope.loading = true;
    $timeout( function(){
      $scope.booked = true;
      $scope.loading = null;
    }, 4000 );
  }

  $scope.confirm = function () {
    $scope.checkout = true;
  }

  $scope.goToState = function (newStateString) {
    $scope.state = newStateString;
  }

  $scope.resetTickets = function () {
    $scope.numberOfTickets = 0;
  }

});
