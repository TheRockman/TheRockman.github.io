var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {
  $scope.pace = 1000;
  $scope.state = {
    text: null,
    desc: null
  }

  $scope.myParty = [];
  $scope.enemyParty = [];
  
  $scope.char4 = ['x', 'y', 'z', 3];
  $scope.char3 = ['x', 'y', 2, 'z'];
  $scope.char2 = ['x', 1, 'y', 'z'];
  $scope.char1 = [0, 'x', 'y', 'z'];
  $scope.backLine = ['x', 'y', 2, 3];
  $scope.frontLine = [0, 1, 'x', 'y'];
  $scope.midLine = ['x', 1, 2, 'y'];
  $scope.any = [0, 1, 2, 3];
  
  $scope.chars = [
    {
      ID: 'id-' + Math.random().toString(36).substr(2, 16),
      Name: 'Bob',
      Class: 'ranger',
      URL: 'https://d1m0snbrxrb9db.cloudfront.net/uploads%2F20170720T0742Z_e9202a1c753c43c5e4d416d143448c67%2Fhellion-sprite-attack_buff.png',
      Dead: false,
      Team: 'char',
      BUFF: null,
      BUFFTICK: -1,
      BASDMG: 20,
      BASSPD: 10,
      BASACC: 80,
      BASHP: 50,
      MAXHP: 50,
      Moves: [
        {
          Name: 'Shot',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: 0,
          TARGETPOSMOD: null,
          CRIT: 40,
          AvailableWhenMyTargetIs: $scope.char4,
          AvailableWhenMyPositionIs: $scope.char1
        },
        {
          Name: 'Retreat',
          ACCMOD: 0,
          DMGMOD: 'none',
          POSMOD: null,
          TARGETPOSMOD: null,
          CRIT: 0,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: 3,
          TARGETPOSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.frontLine
        }
      ]
    },
    {
      ID: 'id-' + Math.random().toString(36).substr(2, 16),
      Name: 'Jane',
      Class: 'fighter',
      URL: 'https://staticdelivery.nexusmods.com/mods/804/images/195-0-1462634330.png',
      Dead: false,
      Team: 'char',
      BUFF: null,
      BUFFTICK: -1,
      BASDMG: 20,
      BASSPD: 80,
      BASACC: 80,
      BASHP: 50,
      MAXHP: 50,
      Moves: [
        {
          Name: 'slice',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          TARGETPOSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.frontLine,
          AvailableWhenMyPositionIs: $scope.backLine
        },
        {
          Name: 'Drag',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          CRIT: 10,
          TARGETPOSMOD: 0,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'Carve',
          ACCMOD: 10,
          DMGMOD: 'none',
          POSMOD: null,
          TARGETPOSMOD: null,
          CRIT: 1,
          BUFF: 'bleed',
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          TARGETPOSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.frontLine
        }
      ]
    },
    {
      ID: 'id-' + Math.random().toString(36).substr(2, 16),
      Name: 'Simon',
      Class: 'fighter',
      URL: 'https://unwrittengeek.files.wordpress.com/2015/09/arbalest-sprite-attack_bandage.png?w=768',
      Dead: false,
      Team: 'char',
      BUFF: null,
      BUFFTICK: -1,
      BASDMG: 20,
      BASSPD: 30,
      BASACC: 80,
      BASHP: 50,
      MAXHP: 50,
      Moves: [
        {
          Name: 'slice',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          TARGETPOSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.frontLine,
          AvailableWhenMyPositionIs: $scope.backLine
        },
        {
          Name: 'debuff',
          ACCMOD: -10,
          DMGMOD: 'none',
          POSMOD: null,
          TARGETPOSMOD: null,
          CRIT: 10,
          BUFF: 'accDebuff',
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'buff',
          ACCMOD: -10,
          DMGMOD: 'none',
          POSMOD: null,
          TARGETPOSMOD: null,
          CRIT: 10,
          BUFF: 'accBuff',
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: 3,
          TARGETPOSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.frontLine
        }
      ]
    },
    {
      ID: 'id-' + Math.random().toString(36).substr(2, 16),
      Name: 'John',
      Class: 'ranger',
      URL: 'https://i.ya-webdesign.com/images/stress-sprite-darkest-dungeon-png-7.png',
      Dead: false,
      Team: 'char',
      BUFF: null,
      BUFFTICK: -1,
      BASDMG: 20,
      BASSPD: 40,
      BASACC: 80,
      BASHP: 50,
      MAXHP: 50,
      Moves: [
        {
          Name: 'Shot',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          TARGETPOSMOD: null,
          CRIT: 40,
          AvailableWhenMyTargetIs: $scope.char4,
          AvailableWhenMyPositionIs: $scope.char1
        },
        {
          Name: 'Heal',
          ACCMOD: 100,
          DMGMOD: -50,
          POSMOD: null,
          TARGETPOSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'Retreat',
          ACCMOD: 0,
          DMGMOD: 'none',
          POSMOD: 0,
          TARGETPOSMOD: null,
          CRIT: 0,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.any
        },
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: 3,
          TARGETPOSMOD: null,
          CRIT: 10,
          AvailableWhenMyTargetIs: $scope.any,
          AvailableWhenMyPositionIs: $scope.frontLine
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
      BUFF: null,
      BUFFTICK: -1,
      BASSPD: 20,
      BASDMG: 5,
      BASACC: 80,
      BASHP: 50,
      MAXHP: 50,
      Moves: [
        {
          Name: 'Sneak attack',
          ACCMOD: 0,
          DMGMOD: 20,
          POSMOD: 3,
          TARGETPOSMOD: null,
          CRIT: 20,
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
      BUFF: null,
      BUFFTICK: -1,
      BASSPD: 20,
      BASDMG: 10,
      BASACC: 80,
      BASHP: 50,
      MAXHP: 50,
      Moves: [
        {
          Name: 'charge',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: 0,
          TARGETPOSMOD: null,
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
      BUFF: null,
      BUFFTICK: -1,
      BASSPD: 20,
      BASDMG: 1,
      BASACC: 80,
      BASHP: 50,
      MAXHP: 50,
      Moves: [
        {
          Name: 'slice',
          ACCMOD: -10,
          DMGMOD: 10,
          POSMOD: null,
          TARGETPOSMOD: null,
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
      BUFF: null,
      BUFFTICK: -1,
      BASSPD: 20,
      BASDMG: 20,
      BASACC: 1,
      BASHP: 50,
      MAXHP: 50,
      Moves: [
        {
          Name: 'Carve',
          ACCMOD: 10,
          DMGMOD: 'none',
          POSMOD: null,
          TARGETPOSMOD: null,
          CRIT: 1,
          BUFF: 'bleed',
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
  
  $scope.checkStatus = function(){
    if($scope.currentChar.BUFF !== null){
      if($scope.currentChar.BUFFTICK === -1){
        $scope.currentChar.BUFF = null;
      } else{
        $scope.currentChar.BUFFTICK = $scope.currentChar.BUFFTICK - 1;
        if($scope.currentChar.BUFF === 'bleed'){
          $scope.currentChar.BASHP = $scope.currentChar.BASHP - 10;
          if($scope.currentChar.BASHP < 1){
            $scope.turnController();
            return;
          }
        }
      }
    }
  }
  
  $scope.turnController = function(){
    $timeout( function(){
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
      $scope.checkStatus();
      
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
    }, $scope.pace );
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
        
        //acc buffs/debuffs
        if($scope.currentChar.BUFF !== null){
          if($scope.currentChar.BUFF === 'accBuff'){
            hitCheck = hitCheck - 10;
          } else if($scope.currentChar.BUFF === 'accDebuff'){
            hitCheck = hitCheck + 10;
          }
        }
        
        $scope.attacking = true;
        
        $timeout( function(){
          if($scope.currentChar.BASACC + thing.ACCMOD > hitCheck){
            //The attack hit
            var critBonus = 0;
            if( Math.random() > 0.7){
              //CRIT
              console.log('Crit!');
              var critBonus = thing.CRIT;
            }
            
            console.log('hit');
            $scope.attacking = false;
            
            if(thing.BUFF){
              $scope.currentTarget.BUFF = thing.BUFF;
              if($scope.currentTarget.BUFFTICK < 0){
                $scope.currentTarget.BUFFTICK = 2;
              }
            }
            
            if(thing.POSMOD !== null){
              if($scope.currentChar.Team === 'enemy'){
                $scope.move($scope.enemyParty, $scope.enemyParty.indexOf($scope.currentChar), thing.POSMOD);
              } else{
                $scope.move($scope.myParty, $scope.myParty.indexOf($scope.currentChar), thing.POSMOD);
              }
            }
            if(thing.TARGETPOSMOD !== null){
              if($scope.currentTarget.Team === 'enemy'){
                $scope.move($scope.enemyParty, $scope.enemyParty.indexOf($scope.currentTarget), thing.TARGETPOSMOD);
              } else{
                $scope.move($scope.myParty, $scope.myParty.indexOf($scope.currentTarget), thing.TARGETPOSMOD);
              }
            }
            var combinedDMG = $scope.currentChar.BASDMG + thing.DMGMOD + critBonus;
            var heal = false;
            if(thing.DMGMOD === 'none'){
              combinedDMG = 0;
            } else if(thing.DMGMOD < 0){
              heal = true;
            }
            
            if($scope.currentTarget.BASHP - combinedDMG > $scope.currentTarget.MAXHP){
              $scope.currentTarget.BASHP = $scope.currentTarget.MAXHP;
            } else {
              $scope.currentTarget.BASHP = $scope.currentTarget.BASHP - combinedDMG;
            }
            
            if(critBonus > 0 && !heal){
              $scope.state.text = 'Critical! ' + combinedDMG + 'DMG';
              $scope.state.desc = 'crit';
            } else if(critBonus > 0 && heal){
              $scope.state.text = 'Critical! ' + combinedDMG + 'Healed';
              $scope.state.desc = 'critHeal';
            } else if(critBonus === 0 && heal){
              $scope.state.text = combinedDMG + 'Healed';
              $scope.state.desc = 'heal';
            } else{
              $scope.state.text = combinedDMG + 'DMG';
              $scope.state.desc = 'dmg';
            }
            $timeout( function(){
              $scope.state.text = null;
              $scope.state.desc = null;
            }, 1000 );
            
            $scope.turnController();
            return;
            
          } else{
            //The attack missed
            console.log('miss');
            $scope.state.text = 'MISS!';
            $scope.state.desc = 'miss';
            $timeout( function(){
              $scope.state.text = null;
              $scope.state.desc = null;
            }, 1000 );
            $scope.attacking = false;
            $scope.turnController();
            return;
          }
        }, $scope.pace );
        
      }, $scope.pace );
      
    } else{
      return;
    }
  }

});
