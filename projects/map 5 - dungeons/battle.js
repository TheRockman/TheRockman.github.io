var app = angular.module("myApp", []); app.controller("battleCtrl", function($scope, $timeout) {
  
  $scope.feed;
  $scope.menuIndex = 0;
  $scope.myTurn = true;
  $scope.timing = 3000;
  $scope.player = {
    name: 'XXX',
    HP: 100,
    moves: [
      {
        name: 'boop',
        mod: '+2'
      },
      {
        name: 'beep',
        mod: '+1'
      },
      {
        name: 'click',
        mod: '+1'
      },
      {
        name: 'clack',
        mod: '+1'
      }
    ]
  };
  $scope.enemy = {
    
  };
  
  $scope.log = function(msg){
    $scope.feed = msg;
    $timeout( function(){$scope.feed = null;}, $scope.timing );
  }
  
  $scope.ai = function(){
    $timeout( function(){
      
      $scope.log('Wooah, its an enemy !!!');
      
      $timeout( function(){
        $scope.myTurn = true;
      }, $scope.timing );
      
    }, $scope.timing );
  }
  
  window.addEventListener('keyup', function(e){
    if(e.key === 'ArrowUp'){
      $scope.menuIndex--;
      if($scope.menuIndex < 0){
        $scope.menuIndex = $scope.player.moves.length -1;
      }
    } else if(e.key === 'ArrowDown'){
      $scope.menuIndex++;
      if($scope.menuIndex > $scope.player.moves.length -1){
        $scope.menuIndex = 0;
      }
    } else if(e.key === 'Enter'){
      if($scope.myTurn){
        var move = $scope.player.moves[$scope.menuIndex];
        $scope.log('Wooah, its a ' + move.name + '!!!');
        $scope.myTurn = false;
        $scope.menuIndex = 0;
        $scope.player.charge = true;
        $timeout( function(){
          $scope.ai();
        }, $scope.timing );
      }
    }
    
    $scope.$digest();
  });
});
