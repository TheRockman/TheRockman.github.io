var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope, $http) {
$scope.cards = [];

function getRandomNr(min, max) {
    return Math.random() * (max - min) + min;
}

  (function () {
    var randomNr = getRandomNr(1, 23);
    $http({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character/?page=' + randomNr.toString()
    }).then(function successCallback(response) {
      console.log(response);
      $scope.cards = response.data.results;
    });
  })();

});
