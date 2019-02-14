var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
  $scope.response = null;
  $scope.tutorial = '';
  $scope.progress = 1;

  $scope.finalCrew = [];
  $scope.availableCrew = [];
  $scope.crewComplete = false;
  $scope.crewStats = false;
  
  $scope.allCrew = [
    {
      Name: 'Abe',
      Perk: 'Doctor',
      Status: 'Healthy',
      Portrait: 'img/sailor.jpg',
      Selected: false
    },
    {
      Name: 'Dwayne',
      Perk: 'Trader',
      Status: 'Healthy',
      Portrait: 'img/sailor.jpg',
      Selected: false
    },
    {
      Name: 'Steve',
      Perk: 'Pirate',
      Status: 'Healthy',
      Portrait: 'img/sailor.jpg',
      Selected: false
    },
    {
      Name: 'Jane',
      Perk: 'Trader',
      Status: 'Sickly',
      Portrait: 'img/sailor2.jpg',
      Selected: false
    },
    {
      Name: 'Alicia',
      Perk: 'Navigator',
      Status: 'Drunk',
      Portrait: 'img/sailor2.jpg',
      Selected: false
    },
    {
      Name: 'Jack',
      Perk: 'Navigator',
      Status: 'Healthy',
      Portrait: 'img/sailor.jpg',
      Selected: false
    },
    {
      Name: 'Siv',
      Perk: 'Trader',
      Status: 'Sickly',
      Portrait: 'img/sailor2.jpg',
      Selected: false
    },
    {
      Name: 'Ana',
      Perk: 'Navigator',
      Status: 'Drunk',
      Portrait: 'img/sailor2.jpg',
      Selected: false
    },
    {
      Name: 'Boris',
      Perk: 'Navigator',
      Status: 'Healthy',
      Portrait: 'img/sailor.jpg',
      Selected: false
    }
  ];
  
  $scope.allStates = [
    {
      Name: 'Drunk'
    },
    {
      Name: 'Sickly'
    },
    {
      Name: 'Cursed'
    },
    {
      Name: 'Daring'
    },
    {
      Name: 'Insane'
    }
  ]

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
          CrewMod: 1,
          After: 'Your crew manages to patch a few holes'
        },
        {
          Name: 'discard',
          Text: 'Stay on course',
          After: 'You keep sailing',
        },
        {
          Name: 'gain',
          Type: 'spades',
          Amount: 3,
          Text: 'Anchor and get some sleep',
          CrewMod: -1,
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
          Text: 'Invite the remaining crew',
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
          Bonus: 'Pirate',
          BonusAmount: 1,
          BonusType: 'clubs',
          Text: 'Take everything you can find',
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
          Bonus: 'Doctor',
          BonusAmount: 2,
          BonusType: 'hearts',
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
          Name: 'gain',
          Type: 'hearts',
          Amount: 2,
          Text: 'Join their crew',
          Insert: 'Pirate life',
          After: 'Avast ye buccaneers! Give no quarter!'
        }
      ]
    }
  ];

  $scope.tutorialCards = [
    {
      Id: 1,
      Name: 'Step 1',
      Desc: 'Each card you draw will give you 3 options. Swipe left and right to view them and tap "choose" to select that option.',
      Abilities: [
        {
          Name: 'gain',
          Type: 'diamonds',
          Amount: 0,
          Text: 'Option 1',
          After: 'Nice choice. Tap "draw" again to get a new card.'
        },
        {
          Name: 'gain',
          Type: 'diamonds',
          Amount: 0,
          Text: 'Option 2',
          After: 'Nice choice. Tap "draw" again to get a new card.'
        },
        {
          Name: 'gain',
          Type: 'diamonds',
          Amount: 0,
          Text: 'Option 3',
          After: 'Nice choice. Tap "draw" again to get a new card.'
        }
      ]
    },
    {
      Id: 1,
      Name: 'Step 2',
      Desc: 'Options with an up arrow will increase one of your resources',
      Abilities: [
        {
          Name: 'gain',
          Type: 'diamonds',
          Amount: 1,
          Text: 'Gain one D',
          After: 'Nice, you now have one more D. If you get more than 15 of any resource you will have one turn to reduce that resource or immediately loose the game. Keep an eye out for red numbers.'
        },
        {
          Name: 'gain',
          Type: 'diamonds',
          Amount: 1,
          Text: 'Gain one D',
          After: 'Nice, you now have one more D. If you get more than 15 of any resource you will have one turn to reduce that resource or immediately loose the game. Keep an eye out for red numbers.'
        },
        {
          Name: 'gain',
          Type: 'diamonds',
          Amount: 1,
          Text: 'Gain one D',
          After: 'Nice, you now have one more D. If you get more than 15 of any resource you will have one turn to reduce that resource or immediately loose the game. Keep an eye out for red numbers.'
        }
      ]
    },
    {
      Id: 1,
      Name: 'Step 3',
      Desc: 'Options with a down arrow will decrease one of your resources',
      Abilities: [
        {
          Name: 'pay',
          Type: 'spades',
          Amount: 1,
          Text: 'Pay one S',
          After: 'Use these cards to manage resources that you have too much of. If you are unable to pay this option will be disabled.'
        },
        {
          Name: 'pay',
          Type: 'spades',
          Amount: 1,
          Text: 'Pay one S',
          After: 'Use these cards to manage resources that you have too much of. If you are unable to pay this option will be disabled.'
        },
        {
          Name: 'pay',
          Type: 'spades',
          Amount: 1,
          Text: 'Pay one S',
          After: 'Use these cards to manage resources that you have too much of. If you are unable to pay this option will be disabled.'
        }
      ]
    },
    {
      Id: 1,
      Name: 'Step 4',
      Desc: 'Options with a double arrow will exchange one resource for another',
      Abilities: [
        {
          Name: 'convert',
          Type: 'hearts',
          Amount: 1,
          ForType: 'spades',
          ForAmount: 1,
          Text: 'Swap 1 H for 1 S',
          After: 'If you dont have enough of the resource to swap, this option will be disabled.'
        },
        {
          Name: 'convert',
          Type: 'hearts',
          Amount: 1,
          ForType: 'spades',
          ForAmount: 1,
          Text: 'Swap 1 H for 1 S',
          After: 'If you dont have enough of the resource to swap, this option will be disabled.'
        },
        {
          Name: 'convert',
          Type: 'hearts',
          Amount: 1,
          ForType: 'spades',
          ForAmount: 1,
          Text: 'Swap 1 H for 1 S',
          After: 'If you dont have enough of the resource to swap, this option will be disabled.'
        }
      ]
    },
    {
      Id: 1,
      Name: 'Step 5',
      Desc: 'Options with round arrows will shuffle the card back into the deck with no other effect,',
      Abilities: [
        {
          Name: 'discard',
          Text: 'Discard this card',
          After: 'If all other options are bad, use the discard option to skip that card and hope for a better moment.'
        },
        {
          Name: 'discard',
          Text: 'Discard this card',
          After: 'If all other options are bad, use the discard option to skip that card and hope for a better moment.'
        },
        {
          Name: 'discard',
          Text: 'Discard this card',
          After: 'If all other options are bad, use the discard option to skip that card and hope for a better moment.'
        },
      ]
    },
    {
      Id: 1,
      Name: 'Step 6',
      Desc: 'Options with a question mark will insert a new card into your deck. The new card will show up after the deck has been shuffled.',
      Abilities: [
        {
          Name: 'event',
          Text: 'Insert next step',
          Insert: 'Step 7',
          After: 'Inserting new cards will allow you to change different resources and give you more chaces to insert new cards.'
        },
        {
          Name: 'event',
          Text: 'Insert next step',
          Insert: 'Step 7',
          After: 'Inserting new cards will allow you to change different resources and give you more chaces to insert new cards.'
        },
        {
          Name: 'event',
          Text: 'Insert next step',
          Insert: 'Step 7',
          After: 'Inserting new cards will allow you to change different resources and give you more chaces to insert new cards.'
        }
      ]
    },
    {
      Id: 1,
      Name: 'Step 7',
      Desc: 'Options with a skull will immediately end the game.',
      Abilities: [
        {
          Name: 'concede',
          Text: 'End tutorial',
          After: ''
        },
        {
          Name: 'concede',
          Text: 'End tutorial',
          After: ''
        },
        {
          Name: 'concede',
          Text: 'End tutorial',
          After: ''
        }
      ]
    },
    {
      Id: 1,
      Name: "[Error] Code: Swan"
    }
  ];

  $scope.sideDeck = [
    {
      Id: 0,
      Name: 'Dark times',
      Desc: '',
      Abilities: [
        {
          Name: 'concede',
          Text: 'You and your crew will be keelhauled by dawn',
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
          Text: 'Hoard some supplies for yourself',
          After: 'TEMP'
        },
        {
          Name: 'discard',
          Text: 'No prey, no pay',
          After: 'TEMP'
        },
        {
          Name: 'event',
          Text: 'Plan a mutiny!',
          Insert: 'Pirate mutiny',
          After: 'TEMP'
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
          Text: 'There is a new captain appointed',
          After: 'TEMP',
        },
        {
          Name: 'concede',
          Text: 'The mutiny failed. You and your crew will be keelhauled by dawn',
          After: 'TEMP',
        },
        {
          Name: 'pay',
          Type: 'spades',
          Amount: 1,
          Text: 'You are punished: No rum for a month!',
          After: 'TEMP',
        }
      ]
    }
  ]

  //piles
  $scope.currentDeck = [];
  $scope.discardPile = [];
  $scope.exilePile = [];

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
    } else if ($scope.finalCrew.length < 1) {
      return true;
    } else {
      $scope.doom = false;
      return false;
    }
  }
  
  $scope.toggleCrewStats = function () {
    $scope.crewStats = !$scope.crewStats;
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
    if (shouldReloadOnEmpty || $scope.currentDeck.length === 0) {
      if ($scope.tutorial !== 'run') {
        $scope.reload();
      }
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
  
  $scope.applyCrewMod = function (mod) {
    if (mod > 0) {
      for (var i = 0; i < mod; i++) {
        if ($scope.allCrew.length >= mod) {
          $scope.moveCard($scope.allCrew[i].Name, $scope.allCrew, $scope.finalCrew, false);
        } else{
          console.log('no more room');
        }
      }
    } else if (mod < 0) {
      var positive = mod * -1;
      for (var i = 0; i < positive; i++) {
        if ($scope.finalCrew.length >= positive) {
          $scope.moveCard($scope.finalCrew[i].Name, $scope.finalCrew, $scope.allCrew, false);
        } else{
          console.log('No more crew');
        }
      }
    }
  }
  
  $scope.applyBonuswMod = function (mod) {
    if (mod.BonusAmount > 0) {
      $scope[mod.BonusType] = $scope[mod.BonusType] + mod.BonusAmount;
      console.log('Bonus: you got extra', mod.BonusType, 'since you had a', mod.Bonus);
    } else if (mod.BonusAmount < 0) {
      var positive = mod.BonusAmount * -1;
      $scope[mod.BonusType] = $scope[mod.BonusType] - positive;
      console.log('Bonus: you lost an extra', mod.BonusType, 'since you had a', mod.Bonus);
    }
  }
  
  $scope.assignRandomStatusEffects = function () {
    for (var i = 0; i < $scope.finalCrew.length; i++) {
      if ($scope.finalCrew[i].Status === 'Healthy') {
        var rand1 = Math.floor(Math.random() * 6);
        var rand2 = Math.floor(Math.random() * $scope.allStates.length);
        if (rand1 === 1) {
          console.log($scope.finalCrew[i].Name, 'status was changed to ', $scope.allStates[rand2].Name);
          $scope.finalCrew[i].Status = $scope.allStates[rand2].Name;
        }
      }
    }
  }

  $scope.crewHasBonus = function (bonus) {
    var res = false;
    for (var i = 0; i < $scope.finalCrew.length; i++) {
      if ($scope.finalCrew[i].Perk === bonus) {
        res = true;
      }
    }
    return res;
  }
  
  //Activate selected ability, 0 is discard
  $scope.activate = function (card, ability) {
    console.log(ability);
    if (ability.Possible === false) {
      return;
    }
    if (ability.CrewMod) {
      $scope.applyCrewMod(ability.CrewMod);
    }
    $scope.response = ability.After;
    if (ability.Name === 'concede') {
      if ($scope.tutorial === 'run') {
        alert('well done, tutorial complete!');
      }else {
        alert('game over, items overflow');
      }
      location.reload();
    }
    if (ability.Name === 'discard') {
      $scope.discard(card.Name, $scope.activeCard);
    }
    else if (ability.Name === 'gain') {
      $scope[ability.Type] = $scope[ability.Type] + ability.Amount;
      $scope.discard(card.Name, $scope.activeCard);
    }
    else if (ability.Insert) {
      if ($scope.tutorial === 'run') {
        $scope.activeCard = [];
      } else{
        console.log(ability.Insert);
        $scope.moveCard(card.Name, $scope.activeCard, $scope.exilePile, false);
        $scope.moveCard(ability.Insert, $scope.sideDeck, $scope.discardPile, false);
      }
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
    
    if (ability.Bonus && $scope.crewHasBonus(ability.Bonus)) {  
      $scope.applyBonuswMod(ability);
    }

    $scope.assignRandomStatusEffects();
    
    if (checkValues()) {
      if ($scope.doom) {
        alert('game over, items overflow');
        location.reload();
      } else {
        $scope.doom = true;
        alert('You are carrying too much cargo, get rid of it or you will lose next turn')
      }
    };
    $scope.progress = $scope.progress + 1;
    if ($scope.progress === 30) {
      console.log('THE END');
    }
    $scope.candraw = true;
  }

  //Crew
  $scope.crewPick = function (selectedMate) {
    if (selectedMate === undefined) {
      $scope.crewComplete = !$scope.crewComplete;
      return;
    }
    selectedMate.Selected = !selectedMate.Selected;
    if (selectedMate.Selected && $scope.finalCrew.length < 3) {
      $scope.moveCard(selectedMate.Name, $scope.availableCrew, $scope.finalCrew, false);
    } else {
      $scope.moveCard(selectedMate.Name, $scope.finalCrew, $scope.availableCrew, false);
    }
  };

  var buildAvailableCrew = function () {
    for (var i = 0; i < 5; i++) {
      var randi = Math.floor(Math.random() * $scope.allCrew.length);
      $scope.moveCard($scope.allCrew[randi].Name, $scope.allCrew, $scope.availableCrew, false);
    }
    console.log($scope.availableCrew);
  }
  buildAvailableCrew();

  //Tutorial
  $scope.determineTutorial = function (tutorial) {
    $scope.tutorial = tutorial;
    if ($scope.tutorial=== 'main') {
      //standard game
      $scope.currentDeck = $scope.allCards.slice(0);
      $scope.currentDeck = $scope.shuffle($scope.currentDeck);
      $scope.currentDeck = $scope.shuffle($scope.currentDeck);
    } else if ($scope.tutorial=== 'run') {
      $scope.currentDeck = $scope.tutorialCards.slice(0);
    }
  }
});
