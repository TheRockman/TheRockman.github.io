var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
$scope.form = {};
$scope.order = [];
$scope.dice = 'Ready to roll';

$scope.addToOrder = function () {
  $scope.order.push($scope.form);
  $scope.form = {};
}

$scope.clear = function () {
  $scope.form = {};
  $scope.order = [];
}

$scope.roll = function (sides) {
  $scope.dice = 0;
  $scope.dice = Math.floor((Math.random() * sides) + 1);
}

$scope.male = [
  'ADRIAN',
  'ABBE',
  'TIG',
  'ISS',
  'TIMOTHY',
  'MELWIN',
  'JIM',
  'SILAS',
  'HANS',
  'ZAC',
  'EMAD',
  'JON',
  'ALEC',
  'AXEL',
  'JOB',
  'FINGAL',
  'JOACIM',
  'ISMAEL',
  'FILIP',
  'GöSTA',
  'MIO',
  'UNO',
  'TOKE',
  'LIAS',
  'HUGO',
  'PÅL',
]

$scope.female = [
  'ASMA',
  'IRMA',
  'FREIJA',
  'IZABELL',
  'ALVA',
  'KENZA',
  'GERD',
  'MEDINA',
  'STELLA',
  'EMY',
  'NINA',
  'MERVI',
  'TYRA',
  'TOKA',
  'ANN',
  'SUND',
  'ANJA',
  'ELLEN',
  'MADELEINE',
  'SIV',
  'LIN',
  'ISABELLE',
  'LEE',
  'AMALIA'
]

$scope.prefix = [
  'TRÅD',
  'ULF',
  'HAND',
  'NÄBB',
  'FLYKT',
  'IS',
  'SNÖ',
  'EK',
  'MARMOR',
  'KOPPAR',
  'KLO',
  'STORM',
  'BJÖRN',
  'MALM',
  'SVÄLT',
  'SILVER',
  'ÄNG'
]
$scope.sufix = [
  'STJÄRNA',
  'STRÅLE',
  'STÅL',
  'LJUS',
  'NÄVE',
  'SKÖLD',
  'SVÄRD',
  'BANE',
  'SPJUT',
  'TASS',
  'FAST (e)',
  'HALT (e)',
  'VIG (e)',
  'BLOM',
  'MYR',
  'BLIND (e)',
  'HÄNT (e)',
  'SON',
  'UGGLA',
  'FALK',
  'ÖRN',
  'DRAKE',
  'VAN (e)',
]

$scope.gen = function (gender) {
  var firstName = '';
  var lastname = '';
  if (gender === 'm') {
    firstName = $scope.male[Math.floor((Math.random() * $scope.male.length-1) + 1)]
  } else if (gender === 'f'){
    firstName = $scope.female[Math.floor((Math.random() * $scope.female.length-1) + 1)]
  }

  lastname = $scope.prefix[Math.floor((Math.random() * $scope.prefix.length-1) + 1)] + '-' + $scope.sufix[Math.floor((Math.random() * $scope.sufix.length-1) + 1)];
  
  var fullName = firstName + ' ' + lastname;
  $scope.npc = fullName;
}

});
