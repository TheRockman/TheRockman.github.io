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
  
  $scope.updateCSS = function (cvar, value, right) {
    $scope.msg = '';
    $scope.currentX = value;
    document.documentElement.style.setProperty(cvar, value+'px');    
    if ($scope.item) {
      if (right) {
        $scope.steps++;
        var temp = $scope.steps * 90;        
      } else{
        $scope.steps--;
        var temp = $scope.steps * 90;
      }
      
      itemLogic('--obst-pos', temp);  
    } else if(Math.floor(Math.random() * 6) <= 1) {
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
    } else if (document.documentElement.style.getPropertyValue('--obst-pos') === '720px') {
      resetItem();
    } else {
      $scope.action = null;
    }
  }
  
  function pickup() {
    $scope.msg = 'Picked up ' + $scope.item.label;
    resetItem();
  }
  
  function fight() {
    $scope.msg = 'Killed ' + $scope.item.label;
    resetItem();
  }
  
  function getRandomItem() {
    var dice = Math.floor(Math.random() * 6);
    if (dice > 3) {
      return {
        class: 'apple',
        actionLabel: 'Pick up',
        type: 'pickup',
        label: '1x apple',
      };
    } else {
      return {
        class: 'skeleton',
        actionLabel: 'Hit',
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
