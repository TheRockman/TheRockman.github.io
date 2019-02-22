var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {

  $scope.destinations = [
    {
      Url: 'img/London.jpg',
      Title: 'London',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      Flights: [
        {
          Airport: 'Gotham Airport',
          Departute: '12:45',
          Arrival: '15:00',
          Price: 800
        },
        {
          Airport: 'Gotham Airport',
          Departute: '14:45',
          Arrival: '17:00',
          Price: 1000
        },
        {
          Airport: 'Gotham Airport',
          Departute: '16:45',
          Arrival: '19:00',
          Price: 1000
        }
      ],
      Gallery: [
        {
          Url: 'https://picsum.photos/400/400.001/?random'
        },
        {
          Url: 'https://picsum.photos/400/400.002/?random'
        },
        {
          Url: 'https://picsum.photos/400/400.003/?random'
        }
      ]
    },
    {
      Url: 'img/Seattle.png',
      Title: 'Seattle',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      Flights: [
        {
          Airport: 'Metropolis Airport',
          Departute: '12:45',
          Arrival: '15:00',
          Price: 800
        },
        {
          Airport: 'Metropolis Airport',
          Departute: '14:45',
          Arrival: '17:00',
          Price: 1000
        },
        {
          Airport: 'Metropolis Airport',
          Departute: '16:45',
          Arrival: '19:00',
          Price: 1000
        }
      ],
      Gallery: [
        {
          Url: 'https://picsum.photos/400/400.004/?random'
        },
        {
          Url: 'https://picsum.photos/400/400.005/?random'
        },
        {
          Url: 'https://picsum.photos/400/400.006/?random'
        }
      ]
    },
    {
      Url: 'img/Tahoe.jpg',
      Title: 'Lake Tahoe',
      Desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      Flights: [
        {
          Airport: 'Star Airport',
          Departute: '12:45',
          Arrival: '15:00',
          Price: 800
        },
        {
          Airport: 'Star Airport',
          Departute: '14:45',
          Arrival: '17:00',
          Price: 1000
        },
        {
          Airport: 'Star Airport',
          Departute: '16:45',
          Arrival: '19:00',
          Price: 1000
        }
      ],
      Gallery: [
        {
          Url: 'https://picsum.photos/400/400.007/?random'
        },
        {
          Url: 'https://picsum.photos/400/400.008/?random'
        },
        {
          Url: 'https://picsum.photos/400/400.009/?random'
        }
      ]
    }
  ];
  
  $scope.active = null;
  
  $scope.checkActive = function (place) {
    return $scope.active == place;
  }
  
  $scope.setActive = function (place) {
    if ($scope.checkActive(place)) {
      $scope.active = null;
      $scope.flight = null;
    } else {
      $scope.active = place;
    }
  }
  
  $scope.flight = null;
  $scope.checkFlight = function (flight) {
    return $scope.flight == flight;
  }
  
  $scope.setFlight = function (flight) {
    if ($scope.checkFlight(flight)) {
      $scope.flight = null;
      
    } else {
      $scope.flight = flight;
    }
  }


});
