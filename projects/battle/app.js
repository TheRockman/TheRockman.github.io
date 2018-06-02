var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope, $timeout) {

  $scope.monsters = [
    {
      Name: 'Haunter',
      Level: 10,
      Sprite: 'img/a2.png',
      OwnedSprite: 'img/a1.png',
      Hp: 40,
      CurrentHp: 40,
      Speed: 60,
      Def: 10,
      Moves: [
        {
          Name: 'Night shade',
          Dmg: 30,
          Acc: 50
        },
        {
          Name: 'Shadow claw',
          Dmg: 10,
          Acc: 100
        }
      ]
    },
    {
      Name: 'Vulpix',
      Level: 26,
      Sprite: 'img/b2.png',
      OwnedSprite: 'img/b1.png',
      Hp: 50,
      CurrentHp: 50,
      Speed: 10,
      Def: 40,
      Moves: [
        {
          Name: 'Ember',
          Dmg: 70,
          Acc: 40
        },
        {
          Name: 'Flame spin',
          Dmg: 30,
          Acc: 60
        }
      ]
    },
    {
      Name: 'Kabutops',
      Level: 22,
      Sprite: 'img/c2.png',
      OwnedSprite: 'img/c1.png',
      Hp: 100,
      CurrentHp: 100,
      Speed: 10,
      Def: 40,
      Moves: [
        {
          Name: 'Recover',
          Heal: 40,
          Acc: 90
        },
        {
          Name: 'Fury cutter',
          Dmg: 80,
          Acc: 20
        },
        {
          Name: 'Tackle',
          Dmg: 10,
          Acc: 90
        },
        {
          Name: 'Slash',
          Dmg: 20,
          Acc: 100
        }
      ]
    }
  ]

  $scope.myTurn = null;

  $scope.setFighter = function (monsters) {
    return JSON.parse(JSON.stringify(monsters[Math.floor(Math.random() * monsters.length)]));
  }

  $scope.enemy = $scope.setFighter($scope.monsters);
  $scope.player = $scope.setFighter($scope.monsters);

  $scope.battle = function (user, move, target) {
    checkDeath(user, target);
    $scope.showMenu = false;
    if (willMoveHit(move)) {
      //damage dealing move
      if (move.Dmg) {
        $scope.message = user.Name + ' used ' + move.Name + ' on ' + target.Name;
        target.CurrentHp = target.CurrentHp - (move.Dmg + user.Level);
      }

      //healing move
      if (move.Heal) {
        $scope.message = user.Name + ' used ' + move.Name;
        if (user.CurrentHp + move.Heal > user.Hp) {
          user.CurrentHp = user.Hp;
        } else {
          user.CurrentHp = user.CurrentHp + move.Heal;
        }
      }

      user.Animation = 'attack-animation';
      target.Animation = 'hit-animation';
      checkDeath(user, target);
    } else {
      $scope.message = user.Name + ' used ' + move.Name + ' but it missed!';
    }
    $scope.myTurn = !$scope.myTurn;
    $timeout( function(){
      if ($scope.enemy.CurrentHp > 0) {
        $scope.prepareToBattle();
      }
    }, 2000 );
  }

  function checkDeath(user, target) {
    if (user.CurrentHp <= 0 ) {
      $scope.showMenu = false;
      user.Animation = 'dead-animation';
      $scope.message = user.Name + ' fainted! ';
      return;
    }
    if (target.CurrentHp <= 0 ) {
      $scope.showMenu = false;
      target.Animation = 'dead-animation';
      $scope.message = target.Name + ' fainted!';
      return;
    }
  }

  $scope.prepareToBattle = function() {
    if (!$scope.enemy || !$scope.player) {
      prepareToBattle();
      return;
    }
    if ($scope.myTurn === null) {
      $scope.myTurn = speedCheck();
    }
    if ($scope.myTurn === false) {
      enemyTakeTurn($scope.enemy);
    } else if($scope.myTurn === true){
      if ($scope.player.CurrentHp <= 0 ) {
        $scope.showMenu = false;
      } else{
        $scope.message = 'what should ' +  $scope.player.Name + ' do?';
        $scope.showMenu = true;
      }
    }
  };
  $timeout( function(){
    $scope.prepareToBattle();
  }, 2000 );


  function speedCheck() {
    if ($scope.player.Speed >= $scope.enemy.Speed) {
      return true;
    }
    else {
      return false;
    }
  }

  function enemyTakeTurn(enemy) {
    var selectedMove = pickRandomMove(enemy.Moves)
    $scope.battle(enemy, selectedMove, $scope.player);
  }

  function pickRandomMove(moves) {
    return moves[Math.floor(Math.random() * moves.length)]
  }

  function willMoveHit(move) {
    var accTarget = Math.floor(Math.random() * 100) + 1
    if (move.Acc > accTarget) {
      return true;
    }
    else {
      return false;
    }
  }

});
