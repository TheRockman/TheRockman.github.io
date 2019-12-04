var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {
  $scope.cart = {
    items: 0,
    order: [],
    total: 0
  };
  $scope.items1 = [
    {
      url: 'https://www.burgerking.se/011_se/Product%20images/Burgers/image-thumb__7650__modMenuProductTile/BACON%20KING%201500x1500~-~640w@2x.png',
      name: 'Zirp Zorp Bacon',
      price: 12
    },
    {
      url: 'https://www.burgerking.se/011_se/Product%20images/Burgers/image-thumb__7668__modMenuProductTile/WHOPPER%20CHEESE%201500x1500~-~640w@2x.png',
      name: 'Zirp Zorp Cheese',
      price: 10
    },
    {
      url: 'https://www.burgerking.se/011_se/Product%20images/Burgers/image-thumb__7662__modMenuProductTile/DBL%20WHOPPER%201500x1500~-~640w@2x.png',
      name: 'Zirp Zorp X2',
      price: 10
    },
    {
      url: 'https://www.burgerking.se/011_se/Product%20images/Burgers/image-thumb__13426__modMenuProductTile/Tryffel_Double_Hemsida_App~-~640w@2x.png',
      name: 'Zirp Zorp Saucer',
      price: 7
    },
    {
      url: 'https://www.burgerking.se/011_se/Product%20images/Burgers/image-thumb__7657__modMenuProductTile/CHILI%20CHEESE%20BURGER%201500x1500~-~640w@2x.png',
      name: 'Zirp Zorp Zpice',
      price: 7
    }
  ];
  
  $scope.items2 = [
    {
      url: 'https://www.burgerking.se/011_se/Product%20images/Snacks/image-thumb__7680__modMenuProductTile/ONION%20RINGS%201500x1500~-~640w@2x.png',
      name: 'Zirp Zorp Ringz',
      price: 3
    },
    {
      url: 'https://www.burgerking.se/011_se/Product%20images/Snacks/image-thumb__7681__modMenuProductTile/KING%20WINGS%201500x1500~-~640w@2x.png',
      name: 'Zirp Zorp Wingz',
      price: 3
    },
    {
      url: 'https://www.burgerking.se/011_se/Product%20images/Dips/image-thumb__7684__modMenuProductTile/BBQ%201500x1500~-~640w@2x.png',
      name: 'Zirp Zorp Zauce - dark',
      price: 1
    },
    {
      url: 'https://www.burgerking.se/011_se/Product%20images/Dips/image-thumb__7693__modMenuProductTile/SWEET%26SOUR%20DIP%201500x1500~-~640w@2x.png',
      name: 'Zirp Zorp Zauce - lighter',
      price: 1
    },
    {
      url: 'https://www.burgerking.se/011_se/Product%20images/Desserts/image-thumb__7711__modMenuProductTile/GLASSCHOCOLATE%201500x1500~-~640w@2x.png',
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
