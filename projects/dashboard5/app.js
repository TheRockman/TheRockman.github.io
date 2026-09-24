var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {
  $scope.cart = {
    items: 0,
    order: [],
    total: 0
  };
  $scope.items1 = [
    {
      url: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
      name: 'Zirp Zorp Bacon',
      price: 12
    },
    {
      url: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
      name: 'Zirp Zorp Cheese',
      price: 10
    },
    {
      url: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
      name: 'Zirp Zorp X2',
      price: 10
    },
    {
      url: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
      name: 'Zirp Zorp Saucer',
      price: 7
    },
    {
      url: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
      name: 'Zirp Zorp Zpice',
      price: 7
    }
  ];
  
  $scope.items2 = [
    {
      url: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
      name: 'Zirp Zorp Ringz',
      price: 3
    },
    {
      url: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
      name: 'Zirp Zorp Wingz',
      price: 3
    },
    {
      url: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
      name: 'Zirp Zorp Zauce - dark',
      price: 1
    },
    {
      url: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
      name: 'Zirp Zorp Zauce - lighter',
      price: 1
    },
    {
      url: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
      name: 'Zirp Zorp Top',
      price: 1
    }
  ]
  
  $scope.ping = function(item){
    item.ping = true;
    if($scope.cart[item.url]){
      $scope.cart[item.url] = 0 + $scope.cart[item.url] + 1;
    } else{
      $scope.cart[item.url] = 1;
    }
     
    $scope.cart.items = $scope.cart.items + 1 ;
    if($scope.cart.order.indexOf(item) === -1){
      $scope.cart.order.push(item);
    }
    $scope.cart.total = $scope.cart.total+item.price;
    $timeout( function(){
      item.ping = false;
    }, 1500 );
  }
});
