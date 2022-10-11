var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {

  $scope.penMode = false;

  $scope.tokens = [];
  $scope.addToken = function(){
    $scope.tokens.push({name: $scope.tokenID});
    $scope.penMode = false;
  }

  $scope.pixelSize = window.pixelSize;
  $scope.setPixelSize = function(){
    window.pixelSize = $scope.pixelSize;
  }
  $scope.penCol = window.penCol;
  $scope.setPenCol = function(){
    window.penCol = $scope.penCol;
  }

  $scope.clearPen = function(){
    let canvas = document.querySelectorAll('.rainbow-pixel-canvas')[0];
    delete canvas.width
    delete canvas.height
    var rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height
  }
  $scope.deleteToken = function(item){
    $scope.tokens = $scope.tokens.filter(data => data.name != item);
  }

  $scope.partyMode = function(){
    $scope.tokens = [
      {name:'Uzo'},
      {name:'Heb'},
      {name:'Laf'},
      {name:'Rab'},
    ]
  }

});
