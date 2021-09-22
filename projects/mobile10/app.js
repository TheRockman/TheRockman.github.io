var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {
  $scope.showCart = false;
  $scope.list = [
    {
      id: 1,
      name: 'Thing 1',
      price: 100,
      amount: 1,
      desc: 'lorem ipsum dolort, sit ament',
      url: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=484713&type=card'
    },
    {
      id: 2,
      name: 'Thing 2',
      price: 100,
      amount: 1,
      desc: 'lorem ipsum dolort, sit ament',
      url: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=202651&type=card'
    },
    {
      id: 3,
      name: 'Thing 3',
      price: 100,
      amount: 1,
      desc: 'lorem ipsum dolort, sit ament',
      url: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=435330&type=card'
    },
    {
      id: 4,
      name: 'Thing 4',
      price: 100,
      amount: 1,
      desc: 'lorem ipsum dolort, sit ament',
      url: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=497736&type=card'
    },
    {
      id: 5,
      name: 'Thing 5',
      price: 100,
      amount: 1,
      desc: 'lorem ipsum dolort, sit ament',
      url: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=435374&type=card'
    },
    {
      id: 6,
      name: 'Thing 6',
      price: 100,
      amount: 1,
      desc: 'lorem ipsum dolort, sit ament',
      url: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=435155&type=card'
    },
    {
      id: 7,
      name: 'Thing 7',
      price: 100,
      amount: 1,
      desc: 'lorem ipsum dolort, sit ament',
      url: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=435287&type=card'
    }
  ];

  $scope.cartList = [];
  $scope.listClone = JSON.parse(JSON.stringify($scope.list));

  $scope.minus = function(item){
    if(item.amount -1 > 0){
      item.amount = item.amount -1;
    } else if(item.amount >= 1){
      $scope.listClone.push(item);
      $scope.cartList = $scope.cartList.filter(function(el) { return el.id != item.id; });
    }
  }

  $scope.plus = function(item){
    if(item.amount +1 < 100){
      item.amount = item.amount +1;
    }
  }

  $scope.add = function(item){
    $scope.cartList.push(item);
    $scope.listClone = $scope.listClone.filter(function(el) { return el.id != item.id; });
  }

});
