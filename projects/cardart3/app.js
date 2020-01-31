var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $document, $timeout) {

var genId = function(){
  return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

$scope.phases = [
  {
    name: 'start',
    index: 0
  },
  {
    name: 'main',
    index: 1
  },
  {
    name: 'combat',
    index: 2
  },
  {
    name: 'main',
    index: 3
  },
  {
    name: 'end',
    index: 4
  }
];
$scope.currentPhase = $scope.phases[0];

$scope.deck = [
  {
    url: 'https://mtgcardsmith.com/view/complete/full/2017/7/18/1500347605692014.png',
    owener: 'player',
    cost: 1,
    dmg: 2,
    hp: 2,
    id: genId(),
  },
  {
    url: 'https://mtgcardsmith.com/view/complete/full/2019/1/15/1547584954972957.png',
    owener: 'player',
    cost: 1,
    dmg: 2,
    hp: 2,
    id: genId(),
  },
  {
    url: 'https://mtgcardsmith.com/view/complete/full/2019/1/15/1547584954972957.png',
    owener: 'player',
    cost: 1,
    dmg: 2,
    hp: 2,
    id: genId(),
  },
  {
    url: 'https://img.scryfall.com/cards/large/front/c/0/c046dfb0-9ca3-4219-a6b0-d7503bc2fbd0.jpg?1562202020',
    owener: 'player',
    cost: 1,
    dmg: 2,
    hp: 2,
    id: genId(),
  },
  {
    url: 'https://imgur.com/KEqmf3A.png',
    owener: 'player',
    cost: 1,
    dmg: 2,
    hp: 2,
    id: genId(),
  },
  {
    url: 'https://mtgcardsmith.com/view/complete/full/2017/7/18/1500347605692014.png',
    owener: 'player',
    cost: 1,
    dmg: 2,
    hp: 2,
    id: genId(),
  },
  {
    url: 'https://mtgcardsmith.com/view/complete/full/2019/1/15/1547584954972957.png',
    owener: 'player',
    cost: 1,
    dmg: 2,
    hp: 2,
    id: genId(),
  },
  {
    url: 'https://mtgcardsmith.com/view/complete/full/2019/1/15/1547584954972957.png',
    owener: 'player',
    cost: 1,
    dmg: 2,
    hp: 2,
    id: genId(),
  },
  {
    url: 'https://img.scryfall.com/cards/large/front/c/0/c046dfb0-9ca3-4219-a6b0-d7503bc2fbd0.jpg?1562202020',
    owener: 'player',
    cost: 1,
    dmg: 1,
    hp: 2,
    id: genId(),
  },
  {
    url: 'https://imgur.com/KEqmf3A.png',
    owener: 'player',
    cost: 1,
    dmg: 2,
    hp: 3,
    id: genId(),
  }
];

$scope.hand = [];

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
    cost: 1,
    dmg: 2,
    hp: 2,
    owener: 'enemy',
  }
];

$scope.myGrave = [];
$scope.enemyGrave = [];

$scope.playerData = {
  life: 20,
  mana: 0,
  name: 'Sven'
}

$scope.enemyData = {
  life: 20,
  mana: 0,
  name: 'Eric'
}

$scope.mullDisplay = [];
$scope.mullAmount = 3;

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

$scope.attackAnimationPath = function(){
  document.documentElement.style.setProperty('--attackPath', "path('M" + $scope.x1 +" "+ $scope.y1 +" Q "+ $scope.x2 +" "+ $scope.y2 + " " + $scope.x2 +" "+ $scope.y2 +", T "+ $scope.x2 +" "+ $scope.y2 +"')" )
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

$scope.lookAtCard = function(evt, card) {
  switch(evt.which) {
      case 1:
          // this is left click
          
          break;
      case 2:
          // in case you need some middle click things
          break;
      case 3:
          // this is right click
          $scope.lookingCard = card;
          break;
      default:
          break;
  }
}

$scope.stopLookingAtCard = function(){
  $scope.lookingCard = null;
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
    $scope.attackAnimationPath();
    var div2Offset = offset($scope.endArrowDiv);
    $scope.x2 = div2Offset.left + ($scope.endArrowDiv.offsetWidth/2);
    $scope.y2 = div2Offset.top + ($scope.endArrowDiv.offsetHeight/2);
    $scope.curve = $scope.mouse.x;
    
    $scope.fight($scope.startArrowDiv.id, $scope.endArrowDiv.id);
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

$scope.fight = function(givenAttacker, givenDefender){
  var foundAttacker;
  var foundDefender;
  
  //look in my board
  console.log($scope.myBoard[0].id, givenAttacker);
  for (i = 0; i < $scope.myBoard.length; i++) {
    if($scope.myBoard[i].id === givenAttacker){
      foundAttacker = $scope.myBoard[i];
    } else if($scope.myBoard[i].id = givenDefender){
      foundDefender = $scope.myBoard[i];
    }
  }

  //look in enemy board
  for (i = 0; i < $scope.enemyBoard.length; i++) {
    if($scope.enemyBoard[i].id === givenAttacker){
      foundAttacker = $scope.enemyBoard[i];
    } else if($scope.enemyBoard[i].id = givenDefender){
      foundDefender = $scope.enemyBoard[i];
    }
  }
  
  if(foundAttacker && foundDefender){
    foundAttacker.hp = foundAttacker.hp - foundDefender.dmg;
    foundDefender.hp = foundDefender.hp - foundAttacker.dmg;
    console.log('fight!', foundAttacker, foundDefender);
    foundDefender.attacking = true;
    foundAttacker.attacking = true;
  
    $timeout( function(){
      foundDefender.attacking = false;
      foundAttacker.attacking = false;
      
      if(foundDefender.hp < 1 && foundDefender.owener === "player"){
        $scope.moveCard(foundDefender, $scope.myBoard, $scope.myGrave, false);
      }
      if(foundAttacker.hp < 1 && foundAttacker.owener === "player"){
        $scope.moveCard(foundAttacker, $scope.myBoard, $scope.myGrave, false);
      }
      if(foundDefender.hp < 1 && foundDefender.owener === "enemy"){
        $scope.moveCard(foundDefender, $scope.enemyBoard, $scope.enemyGrave, false);
      }
      if(foundAttacker.hp < 1 && foundAttacker.owener === "enemy"){
        $scope.moveCard(foundAttacker, $scope.enemyBoard, $scope.enemyGrave, false);
      }
    
      $scope.x1 = undefined;
      $scope.x2 = undefined;
      $scope.y1 = undefined;
      $scope.y2 = undefined;
      $scope.startArrowDiv = undefined;
      $scope.endArrowDiv = undefined;
    }, 2000 );
  }
  
}

//phases
$scope.mull = function(){
  for (i = 0; i < 5; i++) {
    $scope.moveCard($scope.deck[0], $scope.deck, $scope.mullDisplay, false);
  }
}

$scope.mullConfirm = function(){
  $scope.mullMode = false;
  $scope.hand = angular.copy($scope.mullDisplay);
  $scope.mullDisplay = [];
}

$scope.mullDeny = function(){
  $scope.mullAmount = $scope.mullAmount -1;
  for (i = 0; i < 5; i++) {
    $scope.moveCard($scope.mullDisplay[0], $scope.mullDisplay, $scope.deck, true);
  }
  
  $scope.mull();
}

$scope.mullMode = true;
$scope.mull();


$scope.phaseStep = function(){
  var index = $scope.currentPhase.index;
  if($scope.currentPhase.name === 'end'){
    //reset turn phase
    $scope.currentPhase = $scope.phases[0];
  } else{
    $scope.currentPhase = $scope.phases[index+1];
  }
}

});
