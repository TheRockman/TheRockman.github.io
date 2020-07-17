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
    if($scope.guesses[$scope.attempts].dots[0] === 0 ||
      $scope.guesses[$scope.attempts].dots[1] === 0 ||
      $scope.guesses[$scope.attempts].dots[2] === 0 ||
      $scope.guesses[$scope.attempts].dots[3] === 0){
      console.log('empty spot');
      return
    }
      
    //Win
    if($scope.guesses[$scope.attempts].dots[0] === $scope.master[0] &&
      $scope.guesses[$scope.attempts].dots[1] === $scope.master[1] &&
      $scope.guesses[$scope.attempts].dots[2] === $scope.master[2] &&
      $scope.guesses[$scope.attempts].dots[3] === $scope.master[3] ){
      console.log('you won');
      $scope.reveal = true;
      return
    }

    for (i = 0; i < $scope.guesses[$scope.attempts].dots.length; i++) {
      if($scope.master.includes($scope.guesses[$scope.attempts].dots[i])){
        console.log('a color is correct');
        $scope.guesses[$scope.attempts].correctColor++;
      }
      if($scope.guesses[$scope.attempts].dots[i] === $scope.master[i]){
        console.log('a position is correct');
        $scope.guesses[$scope.attempts].perfectMatch++;
      }
    }
    $scope.guesses[$scope.attempts].correctColor = $scope.guesses[$scope.attempts].correctColor - $scope.guesses[$scope.attempts].perfectMatch
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
