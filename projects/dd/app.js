var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {

  $scope.myParty = [];
  $scope.enemyParty = [];
  
  $scope.char4 = ['x', 'y', 'z', 3];
  $scope.char3 = ['x', 'y', 2, 'z'];
  $scope.char2 = ['x', 1, 'y', 'z'];
  $scope.char1 = [0, 'x', 'y', 'z'];
  $scope.backLine = ['x', 3, 2, 'y'];
  $scope.frontLine = ['x', 1, 0, 'y'];
  $scope.midLine = ['x', 1, 2, 'y'];
  $scope.any = [0, 1, 2, 3];
  
  $scope.chars = [
    {
      ID: 'id-' + Math.random().toString(36).substr(2, 16),
      Name: 'Bob',
      Class: 'ranger',
      URL: 'https://gamepedia.cursecdn.com/darkestdungeon_gamepedia/d/d4/Brigand_Fusilier.png',
      Dead: false,
      Team: 'char',
      BASDMG: 20,
      BASSPD: 10,
      BASACC: 80,
      BASHP: 50,
      Moves: [
        {
          Name: 'Shot',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: 0,
          CRIT: 40,
          AvailableWhenMyTargetIs: $scope.char4,
          AvailableWhenMyPositionIs: $scope.char1
        },
        {
          Name: 'Retreat',
          ACCMOD: 0,
          DMGMOD: -20,
          POSMOD: null,
          CRIT: 0,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: 3,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        }
      ]
    },
    {
      ID: 'id-' + Math.random().toString(36).substr(2, 16),
      Name: 'Jane',
      Class: 'fighter',
      URL: 'https://www.pinclipart.com/picdir/big/254-2548584_brigand-matchman-official-darkest-dungeon-wiki-png-clipart.png',
      Dead: false,
      Team: 'char',
      BASDMG: 20,
      BASSPD: 80,
      BASACC: 80,
      BASHP: 50,
      Moves: [
        {
          Name: 'slice',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        }
      ]
    },
    {
      ID: 'id-' + Math.random().toString(36).substr(2, 16),
      Name: 'Simon',
      Class: 'fighter',
      URL: 'https://www.pinclipart.com/picdir/big/254-2548584_brigand-matchman-official-darkest-dungeon-wiki-png-clipart.png',
      Dead: false,
      Team: 'char',
      BASDMG: 20,
      BASSPD: 30,
      BASACC: 80,
      BASHP: 50,
      Moves: [
        {
          Name: 'slice',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: 3,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        }
      ]
    },
    {
      ID: 'id-' + Math.random().toString(36).substr(2, 16),
      Name: 'John',
      Class: 'ranger',
      URL: 'https://gamepedia.cursecdn.com/darkestdungeon_gamepedia/d/d4/Brigand_Fusilier.png',
      Dead: false,
      Team: 'char',
      BASDMG: 20,
      BASSPD: 40,
      BASACC: 80,
      BASHP: 50,
      Moves: [
        {
          Name: 'Shot',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 40,
          AvailableWhenMyTargetIs: $scope.char4,
          AvailableWhenMyPositionIs: $scope.char1
        },
        {
          Name: 'Retreat',
          ACCMOD: 0,
          DMGMOD: -20,
          POSMOD: 0,
          CRIT: 0,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: 3,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        }
      ]
    }
  ];
  
  $scope.enemies = [
    {
      ID: 'id-' + Math.random().toString(36).substr(2, 16),
      Name: 'Migo',
      Team: 'enemy',
      URL: 'http://www.sclance.com/pngs/darkest-dungeon-png/darkest_dungeon_png_369475.png',
      Dead: false,
      Class: 'fighter',
      BASSPD: 20,
      BASDMG: 5,
      BASACC: 80,
      BASHP: 50,
      Moves: [
        {
          Name: 'slice',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        }
      ]
    },
    {
      ID: 'id-' + Math.random().toString(36).substr(2, 16),
      Name: 'Hound',
      Team: 'enemy',
      URL: 'http://www.sclance.com/pngs/darkest-dungeon-png/darkest_dungeon_png_369475.png',
      Dead: false,
      Class: 'fighter',
      BASSPD: 20,
      BASDMG: 10,
      BASACC: 80,
      BASHP: 50,
      Moves: [
        {
          Name: 'slice',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        }
      ]
    },
    {
      ID: 'id-' + Math.random().toString(36).substr(2, 16),
      Name: 'Deep one',
      Team: 'enemy',
      URL: 'http://www.sclance.com/pngs/darkest-dungeon-png/darkest_dungeon_png_369475.png',
      Dead: false,
      Class: 'fighter',
      BASSPD: 20,
      BASDMG: 1,
      BASACC: 80,
      BASHP: 50,
      Moves: [
        {
          Name: 'slice',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        }
      ]
    },
    {
      ID: 'id-' + Math.random().toString(36).substr(2, 16),
      Name: 'Old one',
      Team: 'enemy',
      URL: 'http://www.sclance.com/pngs/darkest-dungeon-png/darkest_dungeon_png_369475.png',
      Dead: false,
      Class: 'fighter',
      BASSPD: 20,
      BASDMG: 20,
      BASACC: 80,
      BASHP: 50,
      Moves: [
        {
          Name: 'slice',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        }
      ]
    }
  ];
  
  // MOCKUP
  for (let i = -1, len = 4; ++i < len;) {
    $scope.myParty.push($scope.chars[i]);
    $scope.enemyParty.push($scope.enemies[i]);
  };
  
  $scope.currentChar = {};
  $scope.currentTarget = {};
  $scope.turnIndex = -1;
  
  $scope.ai = function(){
    $scope.currentTarget = $scope.myParty[0];
    $scope.doTheThing($scope.currentChar.Moves[0]);
  }
  
  $scope.tollTheDead = function(){
    for (let i = -1, len = $scope.myParty.length; ++i < len;) {
      if($scope.myParty[i].BASHP <= 0){
        $scope.myParty[i].Dead = true;
      }
    };
    for (let i = -1, len = $scope.enemyParty.length; ++i < len;) {
      if($scope.enemyParty[i].BASHP <= 0){
        $scope.enemyParty[i].Dead = true;
      }
    };
  }
  
  $scope.turnController = function(){
    $scope.currentTarget = null;
    $scope.currentChar = null;
    $scope.charIndex = -1;
    $scope.turnOrder = $scope.myParty.concat($scope.enemyParty);
    $scope.turnOrder.sort(function(a, b) {
        return parseFloat(a.BASSPD) - parseFloat(b.BASSPD);
    });
    $scope.tollTheDead();
    $scope.turnIndex = $scope.turnIndex + 1;
    if($scope.turnIndex >= $scope.turnOrder.length){
      $scope.turnIndex = 0;
    }
    
    $scope.currentChar = $scope.turnOrder[$scope.turnIndex];
    if($scope.currentChar.Dead){
      $scope.currentChar = null;
      $scope.turnController();
      return;
    }
    
    if($scope.currentChar.Team === 'enemy'){
      $scope.ai();
    }
    else if($scope.currentChar.Team === 'none'){
      $scope.turnController();
      return;
    } else{
      $scope.charIndex = $scope.myParty.indexOf($scope.currentChar);
      console.log('ci', $scope.charIndex);
      return;
    }
  }
  $scope.turnController();

  $scope.target = function(newTarget, index){
    if(!newTarget.Dead){
      console.log(index);
      $scope.currentTarget = newTarget;
      $scope.currentTarget.targetIndex = index;
    }
  }
  
  $scope.move = function(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }
  
  $scope.doTheThing = function(thing){
    if($scope.currentTarget.Name && $scope.currentChar.Name){
      
      $timeout( function(){
        var hitCheck = Math.floor(Math.random() * 101);
        $scope.attacking = true;
        
        $timeout( function(){
          if($scope.currentChar.BASACC + thing.ACCMOD > hitCheck){
            //The attack hit
            var critBonus = 0;
            if( Math.random() > 0.7){
              //CRIT
              console.log('Crit!');
              $scope.cirt = true;
              $timeout( function(){$scope.cirt = null}, 1000 );
              var critBonus = thing.CRIT;
            }
            
            console.log('hit');
            $scope.attacking = false;
            
            if(thing.POSMOD !== null){
              if($scope.currentChar.Team === 'enemy'){
                $scope.move($scope.enemyParty, $scope.enemyParty.indexOf($scope.currentChar), thing.POSMOD);
              } else{
                $scope.move($scope.myParty, $scope.myParty.indexOf($scope.currentChar), thing.POSMOD);
              }
            }
            
            $scope.currentTarget.BASHP = $scope.currentTarget.BASHP - ($scope.currentChar.BASDMG + thing.DMGMOD + critBonus);
            $scope.turnController();
            return;
            
          } else{
            //The attack missed
            console.log('miss');
            $scope.attacking = false;
            $scope.turnController();
            return;
          }
        }, 1000 );
        
      }, 500 );
      
    } else{
      return;
    }
  }

});
