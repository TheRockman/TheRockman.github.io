var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope, $timeout) {
  console.log('123');

  $scope.cards = [
    {
      id: 0,
      name: 'Aagyth´mo',
      agreeAmount: null,
      agreeFrom: '',
      disAgreeAmount: -10,
      disAgreeFrom: 'population',
      desc: 'The distant prince seek his court of lost souls.',
      url:'./img/boss.png',
      epic: true
    },
    {
      id: 0,
      name: 'Manic Chanting',
      agreeAmount: 2,
      agreeFrom: 'population',
      disAgreeAmount: -2,
      disAgreeFrom: 'skull',
      desc: 'Iä! Iä! Cthulhu fhtagn!',
      url:'./img/placeholder.png'
    },
    {
      id: 0,
      name: 'Slavetrade',
      agreeAmount: 3,
      agreeFrom: 'gold',
      disAgreeAmount: 1,
      disAgreeFrom: 'population',
      desc: 'What can you give me for these?',
      url:'./img/gold.png'
    },
    {
      id: 0,
      name: 'Blood Ritual',
      agreeAmount: 2,
      agreeFrom: 'insight',
      disAgreeAmount: 2,
      disAgreeFrom: 'population',
      desc: 'We were blind but now do we see',
      url:'./img/blood.png'
    },
    {
      id: 0,
      name: 'Crisis',
      agreeAmount: 5,
      agreeFrom: 'gold',
      disAgreeAmount: -5,
      disAgreeFrom: 'skull',
      desc: 'Not even we could have forseen this',
      url:'./img/placeholder.png'
    },
    {
      id: 0,
      name: 'Dispel Miasma',
      agreeAmount: -1,
      agreeFrom: 'skull',
      disAgreeAmount: 3,
      disAgreeFrom: 'insight',
      desc: 'This place has seen much dread',
      url:'./img/placeholder.png'
    },
    {
      id: 0,
      name: 'Forbidden Knowledge',
      agreeAmount: -1,
      agreeFrom: 'skull',
      disAgreeAmount: 1,
      disAgreeFrom: 'insight',
      desc: 'It is forbidden!',
      url:'./img/placeholder.png'
    }
  ]

  $scope.init = function () {
    for (var i = 0; i < $scope.cards.length; i++) {
      $scope.cards[i].id = i;
    }
    $scope.player = {
      skull: 0,
      population: 1,
      gold: 5,
      insight: 3
    }
    $scope.activeCard = $scope.cards[0];
  }
  $scope.init();

  function evaluate() {
    if ($scope.player.skull >= 10 || $scope.player.population < 1 || $scope.player.insight < 1 || $scope.player.gold < 1) {
      window.alert("You have lost");
      $scope.init();
      return true;
    }
  }

  function add(from, amount) {
    if ($scope.player[from] + amount >= 100) {
      $scope.player[from] = 100;
    }
    if ($scope.player[from] + amount < 1) {
      $scope.player[from] = 0;
    }
    else{
      $scope.player[from] = $scope.player[from] + amount;
    }
  }

  $scope.skip = function () {
    $scope.timing = true;
    $timeout( function(){
      $scope.timing = false;
      $scope.activeCard = $scope.cards[Math.floor(Math.random() * $scope.cards.length)];
    }, 1000 );
  }

  $scope.click = function (doIAgree) {
    $scope.timing = true;
    if (doIAgree) {
      add($scope.activeCard.agreeFrom, $scope.activeCard.agreeAmount);
      add($scope.activeCard.disAgreeFrom, -$scope.activeCard.disAgreeAmount);
    }else{
      add($scope.activeCard.disAgreeFrom, $scope.activeCard.disAgreeAmount);
      add($scope.activeCard.agreeFrom, -$scope.activeCard.agreeAmount);
    }
    $timeout( function(){
      $scope.timing = false;
      if (!evaluate()) {
        if ($scope.activeCard.epic) {
          window.alert("The entity fades from this plane... for now");
          $scope.init();
        } else{
          $scope.activeCard = $scope.cards[Math.floor(Math.random() * $scope.cards.length)];
        }
      };

    }, 1000 );
  }

});
