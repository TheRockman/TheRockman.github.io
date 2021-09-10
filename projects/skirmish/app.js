var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {

  $scope.log = [];

  $scope.unitTemplate = {
    name: '',
    qua: 0,
    def: 0,
    tou: 0,
    size: 1,
    weapons: [],
    tags: [],
  };

  $scope.items = {
    handWeapon: {
      name: 'hand weapon',
      r: null,
      a: 1,
      tags: ['furious']
    },
    shortBow: {
      name: 'short bow',
      r: 12,
      a: 2,
      tags: ['rend']
    }
  }
  $scope.units = [];

  $scope.buildUnit = function(n, q, d, t, w, tag){
    let unit = { ...$scope.unitTemplate };

    unit.name = n;
    unit.qua = q;
    unit.def = d;
    unit.tou = t;
    unit.atk = 0;
    unit.weapons = w;
    unit.tags = tag;

    for (var i = 0; i < w.length; i++) {
      //multiple weapons?
      unit.atk = w[i].a;

      for (var j = 0; j < w[i].tags.length; j++) {
        unit.tags.push(w[i].tags[j]);
      }
    }

    unit.tags = unit.tags.filter(function (value, index, array) {
      return array.indexOf(value) === index;
    });

    $scope.units.push(unit);
  }

  $scope.buildUnit(
    'troll',
    3,
    3,
    3,
    [$scope.items.handWeapon],
    ['strider', 'furious']
  );
  $scope.buildUnit(
    'archer',
    3,
    6,
    1,
    [$scope.items.shortBow],
    []
  );
  $scope.buildUnit(
    'archer',
    3,
    6,
    1,
    [$scope.items.shortBow],
    []
  );
  $scope.buildUnit(
    'archer',
    3,
    6,
    1,
    [$scope.items.shortBow],
    []
  );

  $scope.targeting = {
    active: null,
    target: null
  }

  $scope.roll = function(){
    return 1 + Math.floor(Math.random() * (6-1 + 1))
  }

  $scope.qCheck = function(q){
    let roll = $scope.roll();
    $scope.log.push('Hit roll: '+ roll);
    if(roll === 6){
      //poision
      //deadly
      //rend
    }
    return roll >= q;
  }

  $scope.dCheck = function(d){
    let roll = $scope.roll();
    $scope.log.push('Defend roll: '+ roll);
    if(roll === 5){
      //regenerate
    }
    return roll >= d;
  }

  $scope.combat = function(){
    if($scope.targeting.target.tou === 0){
      return;
    }

    if($scope.qCheck($scope.targeting.active.qua)){
      //hit
      if($scope.dCheck($scope.targeting.target.def)){

        $scope.log.push('Targed defended.');
      } else {
        $scope.log.push('Hit!');
        $scope.targeting.target.tou = $scope.targeting.target.tou - 1;
        if($scope.targeting.target.tou < 1){
          $scope.log.push('Target Knocked out!');
          $scope.targeting.target.status = 'K.O';
        }
      }
    } else{
      // miss
      $scope.log.push('Missed!');
    }
  }

  $scope.executeNumberOfAttacks = function() {

    $scope.log.push('-------------');
    $scope.log.push($scope.targeting.active.name + ' makes ' + $scope.targeting.active.atk + ' attack(s)');

    for(var i=0; i < $scope.targeting.active.atk; i++){
      $scope.combat();
    }
    $scope.targeting = {
      active: null,
      target: null
    }
  }


});
