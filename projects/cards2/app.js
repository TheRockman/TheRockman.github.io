var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {
  $scope.allCards = [
    {
      Id: 1,
      Name: 'Smooth sailing',
      Desc: 'Steady as she goes cap´tn',
      Abilities: [
        {
          Name: 'gain',
          Type: 'diamonds',
          Amount: 3,
          Text: ''
        },
        {
          Name: 'discard',
          Text: 'Maybe later'
        },
        {
          Name: 'gain',
          Type: 'spades',
          Amount: 3,
          Text: ''
        }
      ]
    },
    {
      Id: 2,
      Name: 'Red Death',
      Desc: 'This is good..',
      Abilities: [
        {
          Name: 'gain',
          Type: 'clubs',
          Amount: 3,
          Text: 'Thank you'
        },
        {
          Name: 'discard',
          Text: 'Maybe later'
        },
        {
          Name: 'convert',
          Type: 'diamonds',
          Amount: 1,
          ForType: 'hearts',
          ForAmount: 3,
          Text: ''
        }
      ]
    },
    {
      Id: 3,
      Name: 'Green Death',
      Desc: 'Is this good..',
      Abilities: [
        {
          Name: 'pay',
          Type: 'hearts',
          Amount: 2,
          Text: 'Thanks'
        },
        {
          Name: 'pay',
          Type: 'spades',
          Amount: 5,
          Text: 'Thanks'
        },
        {
          Name: 'concede',
          Text: 'I cant pay that'
        }
      ]
    }
  ];

  //piles
  $scope.currentDeck = [];
  $scope.discardPile = [];

  $scope.activeCard = [];

  //resources
  $scope.hearts = 5;
  $scope.clubs = 5;
  $scope.diamonds = 5;
  $scope.spades = 5;
  $scope.joker = 5;

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
        alert('game over, items overflow')
      } else {
        $scope.doom = true;
        alert('You are carrying too much, get rid of it or you will lose next turn')
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
