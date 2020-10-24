var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope, $sce, scenarioBasic) {

  $scope.scenarios = scenarioBasic.scenarios;
  $scope.currentScenario = $scope.scenarios[0];
  $scope.eventText;
  $scope.nextEvent;
  $scope.actionIndex;
  $scope.adventureIndex = 0;
  $scope.adventureDepth = -1;
  $scope.toast = null;

  $scope.questFlags = {
    goblinSpeak: false
  };

  $scope.regions = [
    'HerpDerp forest',
    'Gorillion mountains'
  ]

  $scope.currentRegion = $scope.regions[0];

  $scope.factions = {
    crown: 0,
    mages: 0,
    steven: 0
  }

  $scope.stats = {
    hp: 10,
    dex: 0,
    str: 0,
    int: 0,
    wis: 0,
    con: 0,
    cha: 0
  }

  $scope.toTrustedHTML = function( html ){
    return $sce.trustAsHtml( html );
  }

  $scope.setScope = function(key, val){
    $scope[key] = val;
  }
  $scope.getScope = function(key){
    return $scope[key];
  }

  var languageGenerator = function(lang){
    var languages = {
      goblinSpeak: ["zak`pleenk", "xoggoirt", "aark", "waaggusia", "nin", "og", "zotrert", "dract"],
    }

    var text = [];
    var x = 10;
    while(--x) text.push(languages[lang][Math.floor(Math.random() * languages[lang].length)]);
    return text.join(" ");
  }

  $scope.wrapUpAndPickNext = function(){
    $scope.eventText = null;
    $scope.scenarios = $scope.scenarios.filter(function (el) {
      return !el.done;
    });

    var roll = 0 + Math.floor(Math.random()*$scope.scenarios.length);
    $scope.adventureIndex = roll;
    $scope.currentScenario = $scope.scenarios[roll];

    // handle translation
    if($scope.currentScenario && $scope.currentScenario.language) {
      if(!$scope.questFlags[$scope.currentScenario.language]){
        var str = $scope.currentScenario.text;
        var regex = /"([^"]*)"/g;
        var match = str.match(regex);
        var gibberish = languageGenerator($scope.currentScenario.language);

        $scope.currentScenario.text = str.replace(regex, '"'+gibberish+'"' );
      }
    }
  }

});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
