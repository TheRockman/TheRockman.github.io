var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  $scope.response = null;
  $scope.allCards = [
    {
      Id: 1,
      Name: 'Smooth sailing',
      Desc: 'The sea is calm. For now...',
      Abilities: [
        {
          Name: 'gain',
          Type: 'diamonds',
          Amount: 2,
          Text: 'Do some repairs',
          After: 'Your crew manages to patch a few holes'
        },
        {
          Name: 'discard',
          Text: 'Stay on course',
          After: 'You keep sailing'
        },
        {
          Name: 'gain',
          Type: 'spades',
          Amount: 3,
          Text: 'Anchor and get some sleep',
          After: 'The rocking of the waves lul you to sleep. But you wake from briney dreams.'
        }
      ]
    },
    {
      Id: 2,
      Name: 'Drifting derelict',
      Desc: 'You spot a damaged ship with tattered sails drifting towards you',
      Abilities: [
        {
          Name: 'gain',
          Type: 'hearts',
          Amount: 2,
          Text: 'Invite the remaining crewmen onboard',
          After: 'The crewmen tell of seamonsters and ghost ships, clearly they are in shock.'
        },
        {
          Name: 'discard',
          Text: 'Let it pass by',
          After: 'You have enough mouths to feed already and out here its every man for himself.'
        },
        {
          Name: 'convert',
          Type: 'clubs',
          Amount: 1,
          ForType: 'hearts',
          ForAmount: 3,
          Text: 'Board it and take everything you can find',
          After: 'You send over a rading party, the drifting ships crew cower and hands you their valuables.'
        }
      ]
    },
    {
      Id: 3,
      Name: 'Seasickness',
      Desc: 'A large part of the crew is feeling ill',
      Abilities: [
        {
          Name: 'pay',
          Type: 'hearts',
          Amount: 2,
          Text: 'Quarantine them',
          After: 'You manage to stop it from spreading but two of your men perish.'
        },
        {
          Name: 'pay',
          Type: 'spades',
          Amount: 5,
          Text: 'Do nothing',
          After: 'Your crew is in agony. Boils, rashes, vomit and pus as far as the eye can see. We will just have to ride it out.'
        },
        {
          Name: 'concede',
          Text: 'Throw them overboard',
          After: 'A grim end indeed, but better to end the suffering.'
        }
      ]
    },
    {
      Id: 4,
      Name: 'Pirates!',
      Desc: 'On the horizon you spot black sails, the air smells like gunpowder and rum',
      Abilities: [
        {
          Name: 'convert',
          Type: 'clubs',
          Amount: 4,
          ForType: 'joker',
          ForAmount: 2,
          Text: 'Give them what they want',
          After: 'The pirate captain laugh and his crew join in as you are tied to the mast and robbed for all they can find.'
        },
        {
          Name: 'convert',
          Type: 'hearts',
          Amount: 2,
          ForType: 'spades',
          ForAmount: 3,
          Text: 'Steal their rum',
          After: 'You send out two men to sneak aboard the pirate ship and steal their rum while you distract them with fancy talk and flattery. As soon as you spot your men returning you quickly order a retreat.'
        },
        {
          Name: 'event',
          Text: 'Join their crew',
          Insert: 'Pirate life',
          After: 'Avast ye buccaneers! Give no quarter!'
        }
      ]
    }
  ];

  //piles
  $scope.currentDeck = [];
  $scope.discardPile = [];
  $scope.exilePile = [];

  $scope.sideDeck = [
    {
      Id: 0,
      Name: 'Dark times',
      Desc: '',
      Abilities: [
        {
          Name: 'concede',
          Text: 'You and your crew will be keelhauled by dawn'
        },
        {
          Name: 'concede',
          Text: 'You and your crew will be keelhauled by dawn'
        },
        {
          Name: 'concede',
          Text: 'You and your crew will be keelhauled by dawn'
        }
      ]
    },
    {
      Id: 1,
      Name: 'Pirate life',
      Desc: 'Not a plunder in sight, on the salty seas',
      Abilities: [
        {
          Name: 'convert',
          Type: 'diamonds',
          Amount: 2,
          ForType: 'joker',
          ForAmount: 1,
          Text: 'Hoard some supplies for yourself'
        },
        {
          Name: 'discard',
          Text: 'No prey, no pay'
        },
        {
          Name: 'event',
          Text: 'Plan a mutiny!',
          Insert: 'Pirate mutiny'
        }
      ]
    },
    {
      Id: 1,
      Name: 'Pirate mutiny',
      Desc: 'Kill the captain, long live the new captain!',
      Abilities: [
        {
          Name: 'convert',
          Type: 'joker',
          Amount: 3,
          ForType: 'hearts',
          ForAmount: 3,
          Text: 'There is a new captain appointed'
        },
        {
          Name: 'concede',
          Text: 'The mutiny failed. You and your crew will be keelhauled by dawn'
        },
        {
          Name: 'pay',
          Type: 'spades',
          Amount: 1,
          Text: 'You are punished: No rum for a month!'
        }
      ]
    }
  ]

  $scope.activeCard = [];

  //resources
  $scope.hearts = 5;
  $scope.clubs = 3;
  $scope.diamonds = 3;
  $scope.spades = 7;
  $scope.joker = 0;

  $scope.candraw = true;

  //check values for exess
  var checkValues = function () {
    var max = 15;
    if ($scope.hearts >= max) {
      return true;
    } else if ($scope.clubs >= max) {
      return true;
    } else if ($scope.diamonds >= max) {
      return true;
    } else if ($scope.diamonds >= max) {
      return true;
    } else if ($scope.spades >= max) {
      return true;
    } else if ($scope.joker >= max) {
      return true;
    } else {
      $scope.doom = false;
      return false;
    }
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
  $scope.moveCard = function(cardName, from, to, thenShuffleNewPile)  {
    console.log('move:', cardName, 'from:', from, 'to:', to);
    var i = 0;
    while ( i < from.length ) {
        var item = from[i];
        if (item.Name === cardName) {
            from.splice(i,1);
            to.push(item);
        }
        else i++;
    }
    if (thenShuffleNewPile) {
      to = $scope.shuffle(to);
    }
  }

  //Pick the top card in a pile and move it
  $scope.pickTopCard = function (shouldReloadOnEmpty) {
    if (shouldReloadOnEmpty && $scope.currentDeck.length === 0) {
      $scope.reload();
    }

    var topCard = $scope.currentDeck[0];
    $scope.candraw = false;
    if ($scope.activeCard.length === 0 && topCard) {
      for (var i = 0; i < topCard.Abilities.length; i++) {
        if (topCard.Abilities[i].Name === 'pay' || topCard.Abilities[i].Name === 'convert') {
          topCard.Abilities[i].Possible = $scope[topCard.Abilities[i].Type] >= topCard.Abilities[i].Amount;
        }
      }
      $scope.moveCard(topCard.Name, $scope.currentDeck, $scope.activeCard)
    }
  }

  //Shorthand for just discarding a card
  $scope.discard = function (cardName, from) {
    console.log('discard:', cardName, 'from:', from);
    $scope.moveCard(cardName, from, $scope.discardPile, false);
  }

  $scope.reload = function () {
    var size = $scope.discardPile.length;
    if (size > 0) {
      console.log('Shuffle discard into hand');
      for (var i = 0; i < size; i++) {
        $scope.currentDeck.push($scope.discardPile[i])
      }
      $scope.currentDeck = $scope.shuffle($scope.currentDeck);
      $scope.discardPile = [];
    }
  }

  //Activate selected ability, 0 is discard
  $scope.activate = function (card, ability) {
    console.log(ability);
    $scope.response = ability.After;
    if (ability.Name === 'concede') {
      alert('Game over')
    }
    if (ability.Name === 'discard') {
      $scope.discard(card.Name, $scope.activeCard);
    }
    else if (ability.Name === 'gain') {
      $scope[ability.Type] = $scope[ability.Type] + ability.Amount;
      $scope.discard(card.Name, $scope.activeCard);
    }
    else if (ability.Insert) {
      console.log(ability.Insert);
      $scope.moveCard(card.Name, $scope.activeCard, $scope.exilePile, false);
      $scope.moveCard(ability.Insert, $scope.sideDeck, $scope.discardPile, false);
    }
    else if (ability.Name === 'pay') {
      ability.Possible = $scope[ability.Type] >= ability.Amount;
      if (ability.Possible) {
        $scope[ability.Type] = $scope[ability.Type] - ability.Amount;
        $scope.discard(card.Name, $scope.activeCard);
      }
    }
    else if (ability.Name === 'convert') {
      ability.Possible = $scope[ability.Type] >= ability.Amount;
      if (ability.Possible) {
        $scope[ability.Type] = $scope[ability.Type] - ability.Amount;
        $scope[ability.ForType] = $scope[ability.ForType] + ability.ForAmount;
        $scope.discard(card.Name, $scope.activeCard);
      }
    }
    if (checkValues()) {
      if ($scope.doom) {
        alert('game over, items overflow');
        $scope.currentDeck = null;
        $scope.activeCard = null;
        $scope.discardPile = null;
      } else {
        $scope.doom = true;
        alert('You are carrying too much cargo, get rid of it or you will lose next turn')
      }
    };
    $scope.candraw = true;
  }

  //Dummy deck
  $scope.basicSetup = function () {
    $scope.currentDeck = $scope.allCards.slice(0);
    $scope.currentDeck = $scope.shuffle($scope.currentDeck);
    $scope.currentDeck = $scope.shuffle($scope.currentDeck);
  }
  $scope.basicSetup();

});
