var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {
  $scope.selectedDot;
  
  $scope.reveal = false;
  $scope.attempts = 0;
  $scope.guesses = [
    {
      correctColor: 0,
      perfectMatch: 0,
      dots: [0,0,0,0]
    },
    {
      correctColor: 0,
      perfectMatch: 0,
      dots: [0,0,0,0]
    },
    {
      correctColor: 0,
      perfectMatch: 0,
      dots: [0,0,0,0]
    },
    {
      correctColor: 0,
      perfectMatch: 0,
      dots: [0,0,0,0]
    },
    {
      correctColor: 0,
      perfectMatch: 0,
      dots: [0,0,0,0]
    },
    {
      correctColor: 0,
      perfectMatch: 0,
      dots: [0,0,0,0]
    },
    {
      correctColor: 0,
      perfectMatch: 0,
      dots: [0,0,0,0]
    },
    {
      correctColor: 0,
      perfectMatch: 0,
      dots: [0,0,0,0]
    }
  ]
  
  $scope.options = [
    1,2,3,4,5,6
  ];
  
  $scope.roll = function() {
    return 1 + Math.floor(Math.random()*6)
  }
  $scope.master = [$scope.roll(), $scope.roll(), $scope.roll(), $scope.roll()]
  
  $scope.setActive = function(pick){
    $scope.selectedDot = pick;
    console.log('selectedDot', $scope.selectedDot);
  }
  
  $scope.makeGuess = function(choice){
    $scope.guesses[$scope.attempts].dots[$scope.selectedDot] = choice;
  }
  
  $scope.check = function(){
    var currentGuess = $scope.guesses[$scope.attempts];

    if(currentGuess.dots[0] === 0 ||
      currentGuess.dots[1] === 0 ||
      currentGuess.dots[2] === 0 ||
      currentGuess.dots[3] === 0){
      console.log('empty spot');
      return;
    }

    //Win
    if(currentGuess.dots[0] === $scope.master[0] &&
      currentGuess.dots[1] === $scope.master[1] &&
      currentGuess.dots[2] === $scope.master[2] &&
      currentGuess.dots[3] === $scope.master[3] ){
      console.log('you won');
      currentGuess.perfectMatch = 4;
      currentGuess.correctColor = 0;
      $scope.reveal = true;
      return;
    }

    currentGuess.correctColor = 0;
    currentGuess.perfectMatch = 0;

    var masterRemaining = {};
    var guessRemaining = {};

    for (var i = 0; i < currentGuess.dots.length; i++) {
      if (currentGuess.dots[i] === $scope.master[i]) {
        console.log('a position is correct');
        currentGuess.perfectMatch++;
      } else {
        masterRemaining[$scope.master[i]] = (masterRemaining[$scope.master[i]] || 0) + 1;
        guessRemaining[currentGuess.dots[i]] = (guessRemaining[currentGuess.dots[i]] || 0) + 1;
      }
    }

    Object.keys(guessRemaining).forEach(function(color) {
      if (masterRemaining[color]) {
        var matches = Math.min(guessRemaining[color], masterRemaining[color]);
        currentGuess.correctColor += matches;
      }
    });

    $scope.attempts++;

    if($scope.attempts >= $scope.guesses.length){
      $scope.reveal = true;
    }
  }

});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
