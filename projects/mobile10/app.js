var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {
  $scope.showCart = false;
  $scope.list = [
    {
      id: 1,
      name: 'Thing 1',
      price: 100,
      amount: 1,
      url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png'
    },
    {
      id: 2,
      name: 'Thing 2',
      price: 100,
      amount: 1,
      url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png'
    },
    {
      id: 3,
      name: 'Thing 3',
      price: 100,
      amount: 1,
      url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png'
    },
    {
      id: 4,
      name: 'Thing 4',
      price: 100,
      amount: 1,
      url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png'
    },
    {
      id: 5,
      name: 'Thing 5',
      price: 100,
      amount: 1,
      url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png'
    },
    {
      id: 6,
      name: 'Thing 6',
      price: 100,
      amount: 1,
      url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png'
    },
    {
      id: 7,
      name: 'Thing 7',
      price: 100,
      amount: 1,
      url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png'
    }
  ];

  $scope.cartList = [];

  $scope.minus = function(item){
    if(item.amount -1 > 0){
      item.amount = item.amount -1;
    }
  }

  $scope.plus = function(item){
    if(item.amount +1 < 100){
      item.amount = item.amount +1;
    }
  }

  $scope.add = function(item){
    $scope.cartList.push(item);
  }

});
