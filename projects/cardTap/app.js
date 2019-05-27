var app = angular.module("myApp", ['ngTouch', 'angular-carousel', 'ngAnimate']); app.controller("mainCtrl", function($scope) {

  $scope.turnPhases = ['upkeep', 'main1', 'combat', 'main2', 'turn'];
  $scope.currentPhase = 'upkeep';
  $scope.pool = {
    red: 0,
    blue: 0,
    white: 0,
    green: 0,
    black: 0,
    gray: 0
  };
  $scope.player = {
    hp: 20
  }
  $scope.opponent = {
    hp: 20
  }
  $scope.genId = function(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  $scope.tollTheDead = function(arr){
    for (var i = -1, len = arr.length; ++i < len;) {
      if(arr[i].toughness < 1){
        if(arr[i].deathAction){
          arr[i].deathAction(arr[i], arr[i].deathActionParams);
        }
        $scope.moveCard(arr[i], arr, $scope.stuffInGrave, false);
      };
    }
  };
  
  $scope.sortArr = function(arr){
    arr.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
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
      console.log('addMana');
      $scope.pool[params.type] = $scope.pool[params.type] + params.amount;
    }
  }
  $scope.attack = function(card, params){
    if(card.tapped === false && card.sick === false || card.effect == 'haste'){
      card.tapped = true;
      console.log('attack');
      $scope.opponent.hp = $scope.opponent.hp - card.power;
    }
  }
  $scope.harm = function(card, params){
    if(card.tapped === false && card.sick === false || card.effect == 'haste'){
      card.tapped = true;
      console.log('harm');
      $scope[params.target].hp = $scope[params.target].hp - params.amount;
    }
  }
  $scope.summon = function(card, params){
    if(card.tapped === false && card.sick === false || card.effect == 'haste'){
      card.tapped = true;
      for (var j = -1, x = params.amount; ++j < x;) {
        for (var i = -1, len = $scope.tokens.length; ++i < len;) {
          if ($scope.tokens[i].name === params.type) {
            $scope.tokens[i].id = $scope.genId();
            var clone = {};
            angular.copy($scope.tokens[i], clone);
            $scope.stuffOnBoard.push(clone);
          }
        };
      };
      $scope.sortArr($scope.stuffOnBoard);
    }
  }
  $scope.draw = function(card, params){
    console.log(params);
    if(card.tapped === false && card.sick === false || card.effect == 'haste'){
      card.tapped = true;
      
      params.times.forEach(i => Array(i).fill(i).forEach(_ => {
        console.log(i, 'draw effect');
        $scope.drawFromDeck(false);
      }))
      
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
      if(card.toughness < 1){
        $scope.tollTheDead($scope.stuffOnBoard);
      }
    } else{
      console.log('not enough');
    }
    $scope.sortArr($scope.stuffOnBoard);
  }
  
  $scope.stuffInDeck = [
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
      tapAction: $scope.harm,
      tapActionParams: {
        amount: 2,
        target: 'opponent'
      }
    },
    {
      id: $scope.genId(),
      type: 'creature',
      name: 'Guardian of derp',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      effect: 'haste',
      cost: {
        amount: 1,
        type: 'black'
      },
      power: 1,
      toughness: 5,
      art: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/49d5e343121071.57e3e8d209c2c.jpg',
      fullArt: false,
      desc: 'When this creature dies, you take 3 damage',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      deathAction: $scope.harm,
      deathActionParams: {
        amount: 3,
        target: 'player'
      }
    },
    {
      id: $scope.genId(),
      type: 'spell',
      name: 'Lost soul (OK)',
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
      desc: 'Draw 2 cards',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      deathAction: $scope.draw,
      deathActionParams: {
        times: [0,2]
      }
    },
    {
      id: $scope.genId(),
      type: 'spell',
      name: 'Beep boop',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      effect: 'haste',
      cost: {
        amount: 1,
        type: 'blue'
      },
      power: 0,
      toughness: 0,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/1868886/bemocs_fox_sports_dribbble.jpg',
      fullArt: false,
      desc: 'Summon two 1/1 Bot token',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      deathAction: $scope.summon,
      deathActionParams: {
        amount: 2,
        type: 'Bot'
      }
    },
    {
      id: $scope.genId(),
      type: 'spell',
      name: 'Lost soul (OK)',
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
      desc: 'Draw 2 cards',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      deathAction: $scope.draw,
      deathActionParams: {
        times: [0,2]
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
      tapAction: $scope.harm,
      tapActionParams: {
        amount: 2,
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
      tapAction: $scope.harm,
      tapActionParams: {
        amount: 2,
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
      name: 'Bot horn',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      cost: {
        amount: 1,
        type: 'red'
      },
      power: 1,
      toughness: 3,
      art: 'https://cdn.dribbble.com/users/329207/screenshots/1726399/bemocs_dribble.jpg',
      fullArt: false,
      desc: 'Tap this card: create a 1/1 Bot token',
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack,
      tapAction: $scope.summon,
      tapActionParams: {
        amount: 1,
        type: 'Bot'
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
  
  $scope.tokens = [
    {
      id: $scope.genId(),
      type: 'creature',
      name: 'Bot',
      originalUntapIn: 0,
      untapIn: 0,
      sick: false,
      power: 1,
      toughness: 1,
      art: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/78a1c18341199.560bb835772de.jpg',
      fullArt: true,
      tapped: false,
      handAction: $scope.playCard,
      attackAction: $scope.attack
    }
  ];
  
  $scope.startDiscardFromHandState = function(){
    $scope.discardState = true;
  }
  $scope.endDiscardFromHandState = function(card){
    $scope.moveCard(card, $scope.stuffInHand, $scope.stuffInGrave, false);
    $scope.discardState = false;
  }
  
  $scope.drawFromDeck = function(random){
    if (random){
      var x = Math.floor(Math.random() * $scope.stuffInDeck.length - 1) + 1;
      if(x < 1 || x > $scope.stuffInDeck.length){
        x = 0;
      }
    } else {
      var x = 0;
    }
    if($scope.stuffInHand.length < 6){
      $scope.moveCard($scope.stuffInDeck[x], $scope.stuffInDeck, $scope.stuffInHand, false);
    } else {
      $scope.startDiscardFromHandState();
    }
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
        $scope.drawFromDeck(false);
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
  $scope.drawFromDeck(true);
  $scope.drawFromDeck(true);
  $scope.drawFromDeck(true);
  $scope.drawFromDeck(true);
  $scope.drawFromDeck(true);
  
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
