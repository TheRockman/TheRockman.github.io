var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope, $sce, questToggles, wikiSercive, mapMarkers) {

  $scope.questFlags = questToggles.all;
  $scope.wiki = wikiSercive.wiki;
  $scope.eventText;
  $scope.nextEvent;
  $scope.actionIndex;
  $scope.adventureIndex = 0;
  $scope.adventureDepth = -1;
  $scope.toast = null;
  $scope.view = null;

  $scope.regions = mapMarkers.markers;

  $scope.currentRegion = $scope.regions[0];
  $scope.scenarios = $scope.currentRegion.scenarios;
  $scope.currentScenario = $scope.scenarios[0];

  $scope.pickRegionFromMap = function(item){
    $scope.currentRegion = item;
    $scope.view = null;
    $scope.scenarios = item.scenarios;
    $scope.currentScenario = item.scenarios[0];
  }

  $scope.factions = {
    crown: {
      rep: 0,
      icon: 'https://1d4chan.org/images/3/37/Azorius_Logo.png',
      desc: '<a href="#silverCourt" class="info"> [wiki] The court of silver',
      title: 'The court of silver'
    },
    mages: {
      rep: 0,
      icon: 'https://i.pinimg.com/originals/68/d2/bc/68d2bc7141af65942600d4390c10060e.png',
      desc: '<a href="#mageGuild" class="info"> [wiki] The mages guild',
      title: 'The mages guild'
    },
    steven: {
      rep: 0,
      icon: 'https://1d4chan.org/images/3/37/Azorius_Logo.png',
      desc: 'Steven is talkative old man in the woods',
      title: 'Steven'
    },
    boblin: {
      rep: 0,
      icon: '',
      desc: 'Inknose goblins are common and easy to spot by their long black noses.',
      title: 'Inknose tribe'
    },
  }

  $scope.stats = {
    hp: 10,
    dex: 5,
    str: 10,
    int: 5,
    wis: 4,
    con: 3,
    cha: 2
  }

  $scope.inventory = {
    gold: 1000
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

  $scope.wikiModal = '';
  window.addEventListener("hashchange", function(){
    var term = window.location.hash.replace('#', '');
    $scope.wikiModal = $scope.wiki[term];

    // cleanup
    history.replaceState(null, null, ' ');
    $scope.$apply();
  }, false);


  var languageGenerator = function(lang){
    var languages = {
      goblinSpeak: ["zak`pleenk", "xoggoirt", "aark", "waaggusia", "nin", "og", "zotrert", "dract"],
      elfSpeak: ["ala", "lordaa", "do", "sindram", "di´", "meliral", "uriam", "dract"],
    }

    var text = [];
    var x = 10;
    while(--x) text.push(languages[lang][Math.floor(Math.random() * languages[lang].length)]);
    return text.join(" ");
  }

  $scope.wrapUpAndPickNext = function(){
    $scope.eventText = null;
    $scope.scenarios = $scope.scenarios.filter(function (el) {
      return !el.done && !el.everGreen;
    });

    if ($scope.scenarios.length<1) {
      //region depleted
      $scope.currentScenario = {
        text: '<em>This area holds no more adventures, open the map and explore somewhere else.</em>',
        everGreen: true,
        mapHint: true
      };
      return;
    }

    var roll = 0 + Math.floor(Math.random()*$scope.scenarios.length);
    $scope.adventureIndex = roll;
    $scope.currentScenario = $scope.scenarios[roll];

    // handle translation
    if($scope.currentScenario && $scope.currentScenario.language) {
      if(!$scope.questFlags[$scope.currentScenario.language].active){
        var str = $scope.currentScenario.text;
        var regex = /"([^"]*)"/g;
        var match = str.match(regex);
        var gibberish = languageGenerator($scope.currentScenario.language);

        $scope.currentScenario.text = str.replace(regex, '"'+gibberish+'"' );
      }
    }
  }

  $scope.viewManager = function(newView){
    if ($scope.view === newView) {
      $scope.view = null
    } else{
      $scope.view = newView;
    }
  }

});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
