var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {
  $scope.currentX = 0;
  $scope.item = {
    class: 'apple',
    actionLabel: 'Pick up',
    type: 'pickup',
    label: '1x apple',
  };
  $scope.steps = 0;
  $scope.action = null;
  $scope.msg = '';
  $scope.life = 3;
  
  $scope.updateCSS = function (cvar, value, right) {
    if ($scope.action === fight || $scope.action === force) {
      return;
    }
    $scope.msg = '';
    $scope.currentX = value;
    document.documentElement.style.setProperty(cvar, value+'px');    
    if ($scope.steps > 5) {
      exausted();
    }
    if ($scope.item) {
      if (right) {
        $scope.steps++;
        var temp = $scope.steps * 90;        
      } else{
        $scope.steps--;
        var temp = $scope.steps * 90;
      }
      
      itemLogic('--obst-pos', temp);  
    } else if(dice() <= 1) {
      document.documentElement.style.setProperty('--obst-pos', '-90px');
      $scope.item = getRandomItem();
    }
  }
  
  function itemLogic(cvar, value) {
    document.documentElement.style.setProperty(cvar, value+'px');
    if (document.documentElement.style.getPropertyValue('--obst-pos') === '360px') {
      if ($scope.item.type === 'pickup') {
        $scope.action = pickup;
      }
      if ($scope.item.type === 'enemy') {
        $scope.action = fight;
      }
      if ($scope.item.type === 'block') {
        $scope.action = force;
      }
    } else if (document.documentElement.style.getPropertyValue('--obst-pos') === '720px') {
      resetItem();
    } else {
      $scope.action = null;
    }
  }
  
  function pickup() {
    $scope.msg = 'Ate ' + $scope.item.label;
    $scope.life = $scope.life + 1;
    resetItem();
  }
  
  function fight() {
    if (dice() > 2) {
      $scope.msg = 'Killed ' + $scope.item.label;
      resetItem();    
    } else {
      $scope.msg = 'Got hit by ' + $scope.item.label;
      $scope.life = $scope.life - 1;
    }
    if ($scope.life < 1) {
      $scope.life = 1;
      $scope.msg = "Died"
    }
  }
  
  function force() {
    $scope.msg = 'Broke ' + $scope.item.label;
    resetItem();
  }
  
  function exausted() {
    $scope.msg = 'Took damage due to hunger';
    $scope.life = $scope.life - 1;
    if ($scope.life < 1) {
      $scope.life = 1;
      $scope.msg = "Died"
    }
  }
  
  $scope.getNumber = function(num) {
    return new Array(num);   
}
  
  function dice() {
    return Math.floor(Math.random() * 7);
  }
  
  function getRandomItem() { 
    var ra = dice();
    if (ra === 1) {
      return {
        class: 'skeleton',
        actionLabel: 'Punch',
        type: 'enemy',
        label: 'the skeleton',
      }
    } else if (ra === 2) {
      return {
        class: 'apple',
        actionLabel: 'Pick up',
        type: 'pickup',
        label: '1x apple',
      }
    } else if (ra === 3) {
      return {
        class: 'block',
        actionLabel: 'Break',
        type: 'block',
        label: 'crate',
      }
    } else {
      return {
        class: 'skeleton',
        actionLabel: 'Punch',
        type: 'enemy',
        label: 'the skeleton',
      };
    }
  }
  
  function resetItem() {
    $scope.steps = 0;
    $scope.item = false;
    $scope.action = null;
    document.documentElement.style.setProperty('--obst-pos', '-90px');
  }
});
