var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function ($scope) {
  $scope.form = {};
  $scope.order = [];
  $scope.dice = 'Ready to roll';
  $scope.diceArr = [];

  $scope.addToOrder = function () {
    $scope.order.push($scope.form);
    $scope.form = {};
    document.getElementById("myTextField").focus();
  }

  $scope.parsePasteDump = function () {
    let output = [];
    for (let i = 0; i < $scope.pasteDump.split("\n").length; i++) {
      const element = $scope.pasteDump.split("\n")[i];

      if (
        (element && element !== '' && !element.includes(' PM') && !element.includes('AM')) &&
        (element === "Initiative: roll")
      ) {
        output.push({
          hp: null,
          ini: parseInt($scope.pasteDump.split("\n")[i + 1]),
          name: $scope.pasteDump.split("\n")[i-1]
        });
      }
    }


    for (let j = 0; j < output.length; j++) {
      $scope.order.push(output[j]);
    }
    $scope.pasteDump = undefined;
  }

$scope.clear = function () {
  $scope.form = {};
  $scope.order = [];
}
$scope.numDice = 1;

$scope.roll = function (sides) {
  $scope.dice = 0;
  $scope.diceArr = [];
  $scope.diceTot = 0;
  var t = 0;

  if ($scope.numDice > 1) {
    for (let index = 0; index < $scope.numDice; index++) {
      let ding = {
        val: Math.floor((Math.random() * sides) + 1),
        id: new Date(),
      };
      t = t + ding.val;
      $scope.diceTot = t;
      $scope.diceArr.push(ding);
    }
  }
  else {
    $scope.dice = Math.floor((Math.random() * sides) + 1);
  }
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

$scope.jobs = [
  'Mekaniker',
  'Uppfödare',
  'Shaman',
  'glasblsåsare',
  'Stable hand',
  'Innkeeper',
  'Blacksmith',
  'Washerwoman',
  'Town cryer',
  'Tailor',
  'Portrait painter',
  'Cobbler',
  'Lamplighter',
  'Tanner',
  'Herbalist',
  'Farmer',
  'Carpenter',
  'Stonemason',
  'Miner',
  'Fortune teller',
  'Baker',
  'Town guard',
  'Doctor',
  'Messenger',
  'Banker',
  'Animal tamer',
  'Guide',
  'Cartographer',
  'Academic',
  'Actor',
  'Apprentice',
  'Brewer',
  'Cook',
  'Fisher',
  'Gravedigger',
  'Lumberjack',
  'Sailor',
  'Scribe',
  'Servant',
  'Trader',
  'Wanderer',
  'Wizard',
  'Wrestler',
  'Author',
  'Clocksmith',
  'Alchemist',
  'Librarian',
  'Woodcarver',
  'Roofer',
  'Sculptor'
]

$scope.gen = function (gender) {
  var firstName = '';
  var lastname = '';
  $scope.work = $scope.jobs[Math.floor((Math.random() * $scope.jobs.length - 1) + 1)];
  if (gender === 'm') {
    firstName = $scope.male[Math.floor((Math.random() * $scope.male.length - 1) + 1)]
  } else if (gender === 'f') {
    firstName = $scope.female[Math.floor((Math.random() * $scope.female.length - 1) + 1)]
  }

  lastname = $scope.prefix[Math.floor((Math.random() * $scope.prefix.length - 1) + 1)] + '-' + $scope.sufix[Math.floor((Math.random() * $scope.sufix.length - 1) + 1)];

  var fullName = firstName + ' ' + lastname;
  $scope.npc = fullName;

}

});
