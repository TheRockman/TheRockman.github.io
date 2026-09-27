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
     thumb: 'https://preview.redd.it/a-fan-made-poster-for-avengers-infinity-war-by-camw1n-v0-x058xb3pkccz.png?width=640&crop=smart&auto=webp&s=45262dc21a2461e4de30be92f856d1279b08d0ff',
     name: 'Avengers - Infinity war',
     desc: 'Disney, Marvel'
   },
   {
     thumb: 'https://cdn.europosters.eu/image/350/posters/minecraft-charged-creeper-i76673.jpg',
     name: 'Changed creeper',
     desc: 'Minecraft, Creeper'
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
