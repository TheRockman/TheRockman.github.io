var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $document, $timeout) {

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

window.addEventListener('resize', function(event){
  $scope.refreshCurrentArrow();
});

$scope.draw = function(){
  $scope.moveCard($scope.deck[0], $scope.deck, $scope.hand, false)
}

$scope.play = function(card){
  $scope.moveCard(card, $scope.hand, $scope.myBoard, false);
  $scope.refreshCurrentArrow();
}

$scope.refreshCurrentArrow = function(){
  $timeout( function(){
    var div1Offset = offset($scope.startArrowDiv);
    var div2Offset = offset($scope.endArrowDiv);
    $scope.x1 = div1Offset.left + ($scope.startArrowDiv.offsetWidth/2);
    $scope.y1 = div1Offset.top + ($scope.startArrowDiv.offsetHeight/2);
    $scope.x2 = div2Offset.left + ($scope.endArrowDiv.offsetWidth/2);
    $scope.y2 = div2Offset.top + ($scope.endArrowDiv.offsetHeight/2);
  }, 10 );
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
$scope.curve = 0;

function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

$scope.mouse = {
  x: null,
  y: null
};
$scope.mousePos = function(myE){
  $scope.mouse.x = myE.clientX;
  $scope.mouse.y = myE.clientY;
  
  if($scope.x1 && $scope.endArrowDiv === null){
    $scope.x2 = $scope.mouse.x;
    $scope.y2 = $scope.mouse.y;
    $scope.curve = $scope.mouse.x;
  }
}

$scope.handleClick = function(evt) {
  switch(evt.which) {
      case 1:
          // this is left click
          console.log('123');
          break;
      case 2:
          // in case you need some middle click things
          break;
      case 3:
          // this is right click
          if(!$scope.endArrowDiv){
            $scope.x1 = undefined;
            $scope.x2 = undefined;
            $scope.y1 = undefined;
            $scope.y2 = undefined;
          }
          break;
      default:
          break;
  }
}

$scope.startArrowDiv = null;
$scope.endArrowDiv = null;

$scope.drawArrow = function(card){
  if(!$scope.startArrowDiv && !$scope.endArrowDiv){
    //No points set - etstablish start point and follow mouse
    $scope.startArrowDiv = card.target;
    var div1Offset = offset($scope.startArrowDiv);
    $scope.x1 = div1Offset.left + ($scope.startArrowDiv.offsetWidth/2);
    $scope.y1 = div1Offset.top + ($scope.startArrowDiv.offsetHeight/2);
    $scope.x2 = $scope.mouse.x;
    $scope.y2 = $scope.mouse.y;
    return;
  }

  if(!$scope.startArrowDiv && $scope.endArrowDiv) {
    //Endpoint with no start, reset state
    $scope.startArrowDiv = null;
    $scope.endArrowDiv = null;
    $scope.x1 = null;
    $scope.y1 = null;
    $scope.x2 = null;
    $scope.y2 = null;
    return;
  }
  
  if($scope.startArrowDiv && !$scope.endArrowDiv) {
    //Startpoint is set, so set endpoint
    $scope.endArrowDiv = card.target;
    var div2Offset = offset($scope.endArrowDiv);
    $scope.x2 = div2Offset.left + ($scope.endArrowDiv.offsetWidth/2);
    $scope.y2 = div2Offset.top + ($scope.endArrowDiv.offsetHeight/2);
    $scope.curve = $scope.mouse.x;
    return;
  }
  
  if($scope.startArrowDiv && $scope.endArrowDiv){
    //Have start and end, etstablish new start and follow mouse
    $scope.endArrowDiv = null;
    $scope.startArrowDiv = card.target;
    var div1Offset = offset($scope.startArrowDiv);
    $scope.x1 = div1Offset.left + ($scope.startArrowDiv.offsetWidth/2);
    $scope.y1 = div1Offset.top + ($scope.startArrowDiv.offsetHeight/2);
    
    $scope.x2 = $scope.mouse.x;
    $scope.y2 = $scope.mouse.y;
    return;
  }
}

});
