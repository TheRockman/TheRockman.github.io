var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope, $http) {
  $scope.cards = [];
  $scope.picked = [];
  $scope.hand = [];
  $scope.selected = null;

  $scope.reloadHand = function(){
    $scope.hand = [];
    while($scope.hand.length < 7){
      var r = Math.floor(Math.random() * (300 - 100 + 1) + 100);
      if($scope.hand.indexOf(r) === -1) $scope.hand.push(r);
    }
  }
  
  $scope.buildDeck = function(){
    for (i = 0; i < 300; i++) {
      $scope.cards.push('https://playingcardsio.s3.amazonaws.com/games/joking-hazard/'+i+'.png');
    }
    $scope.reloadHand();
  }

  $scope.fan = function(i){
    var offset = i;
    return  {'transform': 'rotate('+ (45-i*15)+'deg)'};
  }
  
  $scope.select = function(card){
    $scope.selected = card;
  }
  
  $scope.generate = function(){
    $scope.selected = null;
    $scope.picked = [];
    while($scope.picked.length < 3){
      var r = Math.floor(Math.random() * (300 - 100 + 1) + 100);
      if($scope.picked.indexOf(r) === -1) $scope.picked.push(r);
    }
  }
  
  $scope.buildDeck();
  $scope.generate();
});

// https://playingcardsio.s3.amazonaws.com/games/joking-hazard/308.png

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
