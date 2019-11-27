var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  $scope.items = [
    {
      title: 'French toast',
      cover: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
      dec: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      open: false,
      size: 2,
      time: 15,
      stuff: [
        {
          name: '4 slices of bread',
          check: false
        },
        {
          name: '1 tab of butter',
          check: false
        },
        {
          name: '1 banana',
          check: false
        },
        {
          name: '1 cup of berries',
          check: false
        }
      ]
    },
    {
      title: 'Egg toast',
      cover: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80',
      dec: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      open: false,
      size: 1,
      time: 30,
      stuff: [
        {
          name: '2 eggs',
          check: false
        },
        {
          name: '1 slice of bread',
          check: false
        },
        {
          name: '1 avocado',
          check: false
        }
      ]
    }
  ]
});
