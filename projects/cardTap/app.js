var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {

  $scope.turnPhases = ['upkeep', 'main1', 'combat', 'main2', 'turn'];
  $scope.currentPhase = 'upkeep';
  $scope.pool = {
    red: 0,
    blue: 0,
    white: 0,
    green: 0,
    black: 0,
    gray: 0
  }
  
  $scope.genId = function(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  //Move a card from one pile (splice) to another (add)
  $scope.moveCard = function(card, from, to, thenShuffleNewPile)  {
    console.log('move:', card.name, 'from:', from, 'to:', to);
    if(to === $scope.stuffOnBoard){
      card.sick = true;
    }
    if(card.effect === 'haste'){
      card.sick = false;
    }
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
  
  $scope.addMana = function(card, params){
    if(card.tapped === false && card.sick === false || card.effect == 'haste'){
      card.tapped = true;
      console.log('ping');
      $scope.pool[params.type] = $scope.pool[params.type] + params.amount;
    }
  }
  $scope.attack = function(card, params){
    if(card.tapped === false && card.sick === false || card.effect == 'haste'){
      card.tapped = true;
      console.log('bang');
      // $scope.pool[params.type] = $scope.pool[params.type] + params.amount;
    }
  }
  $scope.draw = function(card, params){
    console.log(params);
    if(card.tapped === false && card.sick === false || card.effect == 'haste'){
      card.tapped = true;
      for (var i = -1, len = params.amount; ++i < len;) {
        $scope.drawFromDeck();
      };
    }
  }
  
  var playedLandThisTurn = false;
  
  $scope.playCard = function(card){
    if(card.type === 'land' && !playedLandThisTurn){
      playedLandThisTurn = true;
      $scope.moveCard(card, $scope.stuffInHand, $scope.landsOnBoard, false);
    } else if ($scope.pool[card.cost.type] >= card.cost.amount){
      $scope.pool[card.cost.type] = $scope.pool[card.cost.type] - card.cost.amount;
      $scope.moveCard(card, $scope.stuffInHand, $scope.stuffOnBoard, false);
      console.log('played', card.name);
    } else{
      console.log('not enough');
    }
  }
  
  $scope.stuffInDeck = [
    {
      id: $scope.genId(),
      type: 'creature',
      name: 'Lost soul',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      effect: 'haste',
      cost: {
        amount: 1,
        type: 'black'
      },
      power: 0,
      toughness: 0,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/1868886/bemocs_fox_sports_dribbble.jpg',
      fullArt: false,
      desc: 'Tap this creature: draw 3 cards. This card dies at the start of next phase',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      tapAction: $scope.draw,
      tapActionParams: {
        amount: 3
      }
    },
    {
      id: $scope.genId(),
      type: 'creature',
      name: 'Mr boom',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      cost: {
        amount: 2,
        type: 'red'
      },
      power: 1,
      toughness: 1,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/1407172/hemispheres_war_inc_1.jpg',
      fullArt: false,
      desc: 'Tap this card: deal 2 damage to each opponent',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      tapAction: $scope.attack,
      tapActionParams: {
        amount: 1,
        target: 'opponent'
      }
    },
    {
      id: $scope.genId(),
      type: 'creature',
      name: 'Lost soul',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      effect: 'haste',
      cost: {
        amount: 1,
        type: 'black'
      },
      power: 0,
      toughness: 0,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/1868886/bemocs_fox_sports_dribbble.jpg',
      fullArt: false,
      desc: 'Tap this creature: draw 3 cards. This card dies at the start of next phase',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      tapAction: $scope.draw,
      tapActionParams: {
        amount: 3
      }
    },
    {
      id: $scope.genId(),
      type: 'creature',
      name: 'Lost soul',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      effect: 'haste',
      cost: {
        amount: 1,
        type: 'black'
      },
      power: 0,
      toughness: 0,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/1868886/bemocs_fox_sports_dribbble.jpg',
      fullArt: false,
      desc: 'Tap this creature: draw 3 cards. This card dies at the start of next phase',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      tapAction: $scope.draw,
      tapActionParams: {
        amount: 3
      }
    },
    {
      id: $scope.genId(),
      type: 'creature',
      name: 'Lost soul',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      effect: 'haste',
      cost: {
        amount: 1,
        type: 'black'
      },
      power: 0,
      toughness: 0,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/1868886/bemocs_fox_sports_dribbble.jpg',
      fullArt: false,
      desc: 'Tap this creature: draw 3 cards. This card dies at the start of next phase',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      tapAction: $scope.draw,
      tapActionParams: {
        amount: 3
      }
    },
    {
      id: $scope.genId(),
      type: 'creature',
      name: 'Lost soul',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      effect: 'haste',
      cost: {
        amount: 1,
        type: 'black'
      },
      power: 0,
      toughness: 0,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/1868886/bemocs_fox_sports_dribbble.jpg',
      fullArt: false,
      desc: 'Tap this creature: draw 3 cards. This card dies at the start of next phase',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      tapAction: $scope.draw,
      tapActionParams: {
        amount: 3,
        target: 'opponent'
      }
    },
    {
      id: $scope.genId(),
      type: 'creature',
      name: 'Mr boom',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      cost: {
        amount: 2,
        type: 'red'
      },
      power: 1,
      toughness: 1,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/1407172/hemispheres_war_inc_1.jpg',
      fullArt: false,
      desc: 'Tap this card: deal 2 damage to each opponent',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      tapAction: $scope.attack,
      tapActionParams: {
        amount: 1,
        target: 'opponent'
      }
    },
    {
      id: $scope.genId(),
      type: 'creature',
      name: 'Mr boom',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      cost: {
        amount: 2,
        type: 'red'
      },
      power: 1,
      toughness: 1,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/1407172/hemispheres_war_inc_1.jpg',
      fullArt: false,
      desc: 'Tap this card: deal 2 damage to each opponent',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      tapAction: $scope.attack,
      tapActionParams: {
        amount: 1,
        target: 'opponent'
      }
    },
    {
      id: $scope.genId(),
      type: 'creature',
      name: 'Splash gang',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      cost: {
        amount: 2,
        type: 'blue'
      },
      power: 1,
      toughness: 3,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/1726399/bemocs_dribble.jpg',
      fullArt: false,
      desc: 'Tap this card: add 1 blue mana',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      tapAction: $scope.addMana,
      tapActionParams: {
        amount: 1,
        type: 'blue'
      }
    },
    {
      id: $scope.genId(),
      type: 'creature',
      name: 'The deep deep',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      cost: {
        amount: 3,
        type: 'blue'
      },
      power: 4,
      toughness: 1,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/1617059/2.jpg',
      fullArt: false,
      desc: '',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack
    },
    {
      id: $scope.genId(),
      type: 'land',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/6220354/bemocs_geneseo_sailing.jpg',
      fullArt: true,
      tapped: false,
      handAction: $scope.playCard,
      tapAction: $scope.addMana,
      tapActionParams: {
        amount: 1,
        type: 'blue'
      }
    },
    {
      id: $scope.genId(),
      type: 'land',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/6220354/bemocs_geneseo_sailing.jpg',
      fullArt: true,
      tapped: false,
      handAction: $scope.playCard,
      tapAction: $scope.addMana,
      tapActionParams: {
        amount: 1,
        type: 'blue'
      }
    },
    {
      id: $scope.genId(),
      type: 'land',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/2432173/dribbble.jpg',
      fullArt: true,
      tapped: false,
      handAction: $scope.playCard,
      tapAction: $scope.addMana,
      tapActionParams: {
        amount: 1,
        type: 'black'
      }
    },
    {
      id: $scope.genId(),
      type: 'land',
      name: 'Flash fire',
      originalUntapIn: 1,
      untapIn: 1,
      sick: false,
      cost: {
        amount: 2,
        type: 'red'
      },
      art: 'https://cdn.dribbble.com/users/329207/screenshots/5305832/bemocs_db_dribbble_05_schwartz_bier.jpg',
      fullArt: false,
      desc: 'Tap this card: add 2 mana. this card dont untap during your next turn',
      tapped: false,
      handAction: $scope.playCard,
      tapAction: $scope.addMana,
      tapActionParams: {
        amount: 2,
        type: 'red'
      }
    }
  ];
  
  $scope.landsOnBoard = [];
  
  $scope.stuffOnBoard = [];
  
  $scope.stuffInHand = [];
  
  $scope.stuffInGrave = [];
  
  $scope.drawFromDeck = function(){
    var x = Math.floor(Math.random() * $scope.stuffInDeck.length - 1) + 1;
    if(x < 1 || x > $scope.stuffInDeck.length){
      x = 0;
    }
    $scope.moveCard($scope.stuffInDeck[x], $scope.stuffInDeck, $scope.stuffInHand, false);
  }
  
  $scope.untapAll = function(arr){
    for (var i = -1, len = arr.length; ++i < len;) {
      if(arr[i].untapIn === 0){
        arr[i].tapped = false;
        arr[i].sick = false;
        arr[i].untapIn = arr[i].originalUntapIn;
      } else {
        arr[i].untapIn = arr[i].untapIn - 1;
      }
    };
  }
  
  $scope.tollTheDead = function(arr){
    for (var i = -1, len = arr.length; ++i < len;) {
      if(arr[i].toughness < 1){
        $scope.moveCard(arr[i], arr, $scope.stuffInGrave, false);
      };
    }
  };
  
  $scope.emptyPool = function(){
    $scope.pool = {
      red: 0,
      blue: 0,
      white: 0,
      green: 0,
      black: 0,
      gray: 0
    }
  }
  
  $scope.beginningOfPhase = function(){
    $scope.tollTheDead($scope.stuffOnBoard);
    switch($scope.currentPhase) {
      case 'upkeep':
        // code block
        $scope.untapAll($scope.landsOnBoard);
        $scope.untapAll($scope.stuffOnBoard);
        $scope.drawFromDeck();
        playedLandThisTurn = false;
      break;
      case 'main1':
      // code block
      break;
      case 'combat':
      // code block
      break;
      case 'main2':
      // code block
      break;
      case 'turn':
      // code block
        $scope.emptyPool();
      break;
    }
  }
  
  ///start of game
  $scope.drawFromDeck();
  $scope.drawFromDeck();
  $scope.drawFromDeck();
  $scope.drawFromDeck();
  $scope.drawFromDeck();
                                          
  
  $scope.nextPhase = function(){
    var index = $scope.turnPhases.indexOf($scope.currentPhase);
    if(index + 1 < $scope.turnPhases.length){
      $scope.currentPhase = $scope.turnPhases[index + 1];
    } else {
      $scope.currentPhase = $scope.turnPhases[0];
    }
    
    $scope.beginningOfPhase();
  }
  
});
