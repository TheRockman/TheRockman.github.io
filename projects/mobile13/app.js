var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope, $timeout) {

 // $scope.view = 'splash';
 // $timeout( function(){
 //    $scope.view = "home";
 // }, 3000 );
 $scope.view = 'home';
 
 $scope.items = [
   {
     thumb: 'https://cdn.europosters.eu/image/350/posters/star-wars-the-mandalorian-nightfall-i103406.jpg',
     name: 'The mandalorian',
     desc: 'Disney, Star wars'
   },
   {
     thumb: 'https://cdn.europosters.eu/image/350/posters/avengers-infinity-war-one-sheet-i58560.jpg',
     name: 'Avengers - Infinity war',
     desc: 'Disney, Marvel'
   },
   {
     thumb: 'https://cdn.europosters.eu/image/350/posters/minecraft-charged-creeper-i76673.jpg',
     name: 'Changed creeper',
     desc: 'Minecraft, Cringe'
   }
 ];
 
 $scope.item = {};
 $scope.setItem = function(item){
   $scope.item = item;
   $scope.view = 'item'
 }
 $scope.back = function(){
   $scope.item = {};
   $scope.view = 'home'
 }


});
