var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $document) {

var genId = function(){
  return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

$scope.deck = [
  {
    url: 'https://imgur.com/KEqmf3A.png',
    owener: 'player',
    id: genId(),
  },
  {
    url: 'https://imgur.com/KEqmf3A.png',
    owener: 'player',
    id: genId(),
  },
  {
    url: 'https://imgur.com/KEqmf3A.png',
    owener: 'player',
    id: genId(),
  },
  {
    url: 'https://imgur.com/KEqmf3A.png',
    owener: 'player',
    id: genId(),
  },
  {
    url: 'https://imgur.com/KEqmf3A.png',
    owener: 'player',
    id: genId(),
  }
];

$scope.hand = [
  {
    url: 'https://imgur.com/KEqmf3A.png',
    owener: 'player',
    id: genId(),
  }
];

$scope.enemyHand = [
  {
    id: genId(),
    owener: 'enemy',
  },
  {
    id: genId(),
    owener: 'enemy',
  },
  {
    id: genId(),
    owener: 'enemy',
  },
  {
    id: genId(),
    owener: 'enemy',
  }
];

$scope.myBoard = [];
$scope.enemyBoard = [
  {
    url: 'https://image.redbull.com/rbcom/052/2019-08-01/f1005421-a8e4-4b0c-b877-357bbcb340f9/0001/1/1100/1/knight-of-the-ebon-legion-mtg.png',
    id: genId(),
    owener: 'enemy',
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

$scope.arrowStartCard = null;
$scope.arrowEndCard = null;

function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// ng-mousemove="myFunc($event)"
// $scope.mouse = {
//   x: null,
//   y: null
// };
// $scope.myFunc = function(myE){
//   $scope.mouse.x = myE.clientX;
//   $scope.mouse.y = myE.clientY;
//   console.log($scope.mouse);
// }

$scope.startArrowDiv = null;
$scope.endArrowDiv = null;

$scope.drawArrow = function(card){
  if(!$scope.startArrowDiv){
    $scope.startArrowDiv = card.target;
    console.log(card.target);
  } else if(!$scope.endArrowDiv){
    $scope.endArrowDiv = card.target;
  } else{
    $scope.startArrowDiv = null;
  }

  console.log($scope.startArrowDiv, $scope.endArrowDiv);

  if ($scope.startArrowDiv) {
    var div1Offset = offset($scope.startArrowDiv);
    $scope.x1 = div1Offset.left + ($scope.startArrowDiv.offsetWidth/2);
    $scope.y1 = div1Offset.top + ($scope.startArrowDiv.offsetHeight/2);
  } else{
    $scope.x1 = $scope.x2;
    $scope.y1 = $scope.y2;
  }

  if ($scope.endArrowDiv) {
    var div2Offset = offset($scope.endArrowDiv);
    $scope.x2 = div2Offset.left + ($scope.endArrowDiv.offsetWidth/2);
    $scope.y2 = div2Offset.top + ($scope.endArrowDiv.offsetHeight/2);
  } else{
    $scope.x2 = $scope.x1;
    $scope.y2 = $scope.y1;
  }
}

// window.addEventListener('resize', function(event){
//   console.log(event);
//   $scope.drawArrow();
// });


});
