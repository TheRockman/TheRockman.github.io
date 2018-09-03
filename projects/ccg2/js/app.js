'use strict';
angular.module('cardApp', []).controller('MainCtrl', function MainCtrl($timeout) {

  var vm = this;

  function getId() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    return s.join("");
  }

  // Haste - deals direct damage when played
  // Battleborn - available on turn 1
  // Rage - attack all enemy cards
  // Undead - heal 1 hp if health is 0 (dont combine)

  vm.allCards = [
    {
      Id: getId(),
      Available: 'sick',
      Rules: ['Haste'],
      Name: 'Bounty Hunter',
      Ap: 5,
      Hp: 2,
      Desc: 'Attacks the enemy when hired',
      Cost: 9,
      Img: '../img/card.png'
    },
    {
      Id: getId(),
      Available: 'sick',
      Rules: ['Rage'],
      Name: 'Town Drunk',
      Ap: 4,
      Hp: 2,
      Desc: 'Attacks all minions when hired',
      Cost: 6,
      Img: '../img/card.png'
    },
    {
      Id: getId(),
      Available: 'sick',
      Rules: ['Undead'],
      Name: 'Veteran',
      Ap: 2,
      Hp: 1,
      Desc: 'Regain 1 Hp when at 0 Hp',
      Cost: 3,
      Img: '../img/card.png'
    },
    {
      Id: getId(),
      Available: 'sick',
      Rules: ['Battleborn'],
      Name: 'Guttersnipe',
      Ap: 1,
      Hp: 5,
      Desc: 'Can attack immediately',
      Cost: 2,
      Img: '../img/card.png'
    },
    {
      Id: getId(),
      Available: 'sick',
      Rules: ['Holy'],
      Name: 'Cutthroat',
      Ap: 2,
      Hp: 4,
      Desc: 'Immune to wounded attackers',
      Cost: 3,
      Img: '../img/card.png'
    },
    {
      Id: getId(),
      Available: 'sick',
      Rules: [],
      Name: 'Oarssman',
      Ap: 5,
      Hp: 5,
      Desc: '',
      Cost: 4,
      Img: '../img/card.png'
    },
    {
      Id: getId(),
      Available: 'sick',
      Rules: [],
      Name: 'Angry Farmboy',
      Ap: 2,
      Hp: 1,
      Desc: '',
      Cost: 2,
      Img: '../img/card.png'
    },
    {
      Id: getId(), Available: 'sick',
      Rules: [],
      Name: 'Noble Knave',
      Ap: 3,
      Hp: 2,
      Desc:'',
      Cost: 5,
      Img: '../img/card.png'
    },
    {
      Id: getId(),
      Available: 'sick',
      Rules: ['Martyr'],
      Name: 'Mad Cultist',
      Ap: 0,
      Hp: 2,
      Desc: 'Heals all allies and is wounded',
      Cost: 7,
      Img: '../img/card.png'
    },
    {
      Id: getId(),
      Available: 'sick',
      Rules: [],
      Name: 'Meager Barkeep',
      Ap: 2,
      Hp: 5,
      Desc: '',
      Cost: 4,
      Img: '../img/card.png'
    },
    {
      Id: getId(),
      Available: 'sick',
      Rules: [],
      Name: 'Restless Coachman',
      Ap: 5,
      Hp: 2,
      Desc: '',
      Cost: 6,
      Img: '../img/card.png'
    },
    {
      Id: getId(),
      Available: 'sick',
      Rules: ['Holy'],
      Name: 'Weary Monk',
      Ap: 1,
      Hp: 6,
      Desc: 'Immune to wounded attackers',
      Cost: 4,
      Img: '../img/card.png'
    },
    {
      Id: getId(),
      Available: 'sick',
      Rules: ['Rage'],
      Name: 'Shady Sellsword',
      Ap: 2,
      Hp: 6,
      Desc: 'Attacks all minions when hired',
      Cost: 8,
      Img: '../img/card.png'
    },
    {
      Id: getId(),
      Available: 'sick',
      Rules: [],
      Name: 'Salty Captain',
      Ap: 1,
      Hp: 2,
      Desc: '',
      Cost: 1,
      Img: '../img/card.png'
    }
  ];

  vm.myDeck = [];
  vm.myBoard = [];
  vm.deckBuilt = false;
  vm.player = {
    HandCards: [],
    Mana: 1,
    Hp: 20,
    Ap: 0
  };

  vm.enemy = {
    HandCards: [],
    Mana: 1,
    Hp: 20,
    Ap: 0
  }

  vm.enemyBoard = [];
  vm.enemyDeck = [];
  vm.activeTarget = {};
  vm.isItMyTurn = true;
  vm.fakeArr = [];

  var newCard;

  vm.randomDeck = randomDeck;
  vm.confirm = confirm;
  vm.basicAtk = basicAtk;
  vm.setActiveTarget = setActiveTarget;
  vm.addCardTo = addCardTo;

  function randomDeck() {
    vm.myDeck = [];
    for (var i = 0; i < 30; i++) {
      var randomCard = vm.allCards[Math.floor(Math.random()*vm.allCards.length)];
      addCardTo(randomCard, vm.myDeck)
    }
    confirm();
  }

  function confirm() {
    if (vm.myDeck.length >= 10 && vm.myDeck.length <= 30) {
      vm.deckBuilt = true;
    }
    else {
      return;
    }
    for (var i = 0; i < vm.allCards.length; i++) {
      vm.enemyDeck.push(vm.allCards[i])
    }

    fakeEnemy();
    for (var i = 0; i < 10; i++) {
      var randomCard = vm.myDeck[Math.floor(Math.random()*vm.myDeck.length)];
      addCardTo(randomCard, vm.player.HandCards, vm.myDeck)
    }
  }

  function drawACard (deck, hand) {

    var randomCard = deck[Math.floor(Math.random()*deck.length)];
    addCardTo(randomCard, hand, deck);
  }

  function toOne(card, target) {
    target.Hp = target.Hp - card.Ap;
    card.Hp = card.Hp - target.Ap;
  }

  function toAll(card, targetArr) {
    for (var i = 0; i < targetArr.length; i++) {
      toOne(card, targetArr[i])
    }
  }

  function basicAtk(card) {
    if (vm.activeTarget.Hp && card.Available === true) {
      enforceRulesOnAttack(card, vm.activeTarget);
      toOne(card, vm.activeTarget)
      card.Available = false;
      if (vm.activeTarget.Hp<1) {
        vm.activeTarget = {};
      }
    }
  }

  function enforceRulesOnPlay(card) {
    if (card.Rules.length<1) {
      return;
    }

    for (var i = 0; i < card.Rules.length; i++) {
      if (card.Rules[i] === "Haste") {
        toOne(card, vm.enemy)
      }
      if (card.Rules[i] === "Rage") {
        toAll(card, vm.enemyBoard)
      }
      if (card.Rules[i] === "Battleborn") {
        card.Available = true;
      }
      if (card.Rules[i] === "Martyr") {
        for (var i = 0; i < vm.myBoard.length; i++) {
          vm.myBoard[i].Hp = vm.myBoard[i].Hp + card.Hp;
        }
        card.Hp = 0;
      }
    }
  }

  function enforceRulesOnDeath(card) {
    if (card.Rules.length<1)  {
      return;
    }
    if (card.Rules[0] === "Undead") {
      if (card.Hp == 0) card.Hp = 1;
    }
  }

  function enforceRulesOnAttack(card, target) {
    if (card.Rules.length<1 || !target) {
      return;
    }
    if (target.Rules && target.Rules[0] === "Holy") {
      if (card.Hp <= 0) {
        vm.activeTarget = null;
        card.Available = false;
      }
    }
  }

  function updateCardAvailability(board, status) {
    for (var i = 0; i < board.length; i++) {
      board[i].Available = status;
    }
  }

  function setActiveTarget(newTarget) {
    vm.activeTarget = newTarget;
  }

  function addCardTo(card, arr, removeFrom, mana, manaPool) {
    if ((mana && manaPool) && (mana > manaPool || arr.length >= 4)) {
      return;
    }
    if ((mana && manaPool) && (mana <= manaPool)){
      manaPool = manaPool - mana;
      enforceRulesOnPlay(card);
    }

    var newCard = angular.copy(card);
    newCard.Id = getId();

    if (arr.indexOf(newCard) == -1) {
      arr.push(newCard);
      if (removeFrom) {
        removeFrom.splice(removeFrom.indexOf(card), 1);
      }
    }
  }

  function bringOutTheDead(board) {
    for (var i = 0; i < board.length; i++) {
      var card = board[i];

      enforceRulesOnDeath(card)

      if (card.Hp < 1) {
        board.splice(board.indexOf(card), 1);
      }
    }
  }

  function endGame() {
    if (vm.enemy.Hp < 1) {
      alert('You won');
    } else if (vm.player.Hp < 1) {
      alert('You lost');
    }
  }

  function fakeEnemy() {
    if (vm.enemy.HandCards.length<1) {
      for (var i = 0; i < 10; i++) {
        drawACard(vm.enemyDeck, vm.enemy.HandCards);
      }
    }

    if (vm.enemyBoard.length>0) {
      updateCardAvailability(vm.enemyBoard, true);
    }
    for (var i = 0; i < vm.enemy.HandCards.length; i++) {
      addCardTo(vm.enemy.HandCards[i], vm.enemyBoard, vm.enemy.HandCards, vm.enemy.HandCards[i].Cost,  vm.enemy.Mana);
    }

    $timeout(function () {
      if (vm.enemyBoard.length > 0 && vm.myBoard.length && vm.enemyBoard[0].Available == true) {
        vm.activeTarget = vm.myBoard[0];
        basicAtk(vm.enemyBoard[0]);
      } else if (vm.enemyBoard.length > 0) {
        vm.activeTarget = vm.player;
        basicAtk(vm.enemyBoard[0]);
      }
      vm.activeTarget = null;
    }, 2000);

  }

  var round = 0;
  vm.newRound = function () {
    if (vm.isItMyTurn === false) {
      return;
    }
    endGame();
    if (round < 10 ) {
      round++;
    }

    vm.activeTarget = null;

    bringOutTheDead(vm.myBoard);
    bringOutTheDead(vm.myBoard);

    updateCardAvailability(vm.myBoard, false);
    vm.isItMyTurn = false;

    vm.enemy.Mana = round;

    $timeout(function () {
      fakeEnemy();
    }, 3000);

    $timeout(function () {

      bringOutTheDead(vm.enemyBoard);
      bringOutTheDead(vm.enemyBoard);
      vm.isItMyTurn = true;
      if (vm.myDeck.length > 0 && vm.player.HandCards.length < 10) {
        drawACard(vm.myDeck, vm.player.HandCards);
      }
      updateCardAvailability(vm.myBoard, true);
      vm.player.Mana = round;
    }, 6000);

  }
});
