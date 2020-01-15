var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  
var genId = function(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
  
$scope.deck = [
  {
    url: 'https://imgur.com/KEqmf3A.png',
    id: genId(),
  },
  {
    url: 'https://imgur.com/KEqmf3A.png',
    id: genId(),
  },
  {
    url: 'https://imgur.com/KEqmf3A.png',
    id: genId(),
  },
  {
    url: 'https://imgur.com/KEqmf3A.png',
    id: genId(),
  },
  {
    url: 'https://imgur.com/KEqmf3A.png',
    id: genId(),
  }
];

$scope.hand = [
  {
    url: 'https://imgur.com/KEqmf3A.png',
    id: genId(),
  }
];

$scope.enemyHand = [
  {
    id: genId(),
  },
  {
    id: genId(),
  },
  {
    id: genId(),
  },
  {
    id: genId(),
  }
];

$scope.myBoard = [];
$scope.enemyBoard = [
  {
    url: 'https://image.redbull.com/rbcom/052/2019-08-01/f1005421-a8e4-4b0c-b877-357bbcb340f9/0001/1/1100/1/knight-of-the-ebon-legion-mtg.png',
    id: genId(),
  }
];

$scope.draw = function(){
  $scope.moveCard($scope.deck[0], $scope.deck, $scope.hand, false)
}

$scope.play = function(card){
  $scope.moveCard(card, $scope.hand, $scope.myBoard, false)
}

//Shuffle one pile with itself, nothing enters, nothing exits
$scope.shuffle = function(array) {
  console.log('shuffle:', array);
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

//Move a card from one pile (splice) to another (add)
$scope.moveCard = function(card, from, to, thenShuffleNewPile)  {
  console.log('move:', card.name, 'from:', from, 'to:', to);
  var i = 0;
  while ( i < from.length ) {
      var item = from[i];
      if (item.id === card.id) {
          from.splice(i,1);
          to.push(item);
      }
      else i++;
  }
  if (thenShuffleNewPile) {
    to = $scope.shuffle(to);
  }
}
  
});
