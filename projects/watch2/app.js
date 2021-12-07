var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl",
function($scope, $sce, questToggles, wikiSercive, mapMarkers, followerIndex) {

  $scope.questFlags = questToggles.all;
  $scope.secretquestFlags = questToggles.secret;
  $scope.wiki = wikiSercive.wiki;
  $scope.eventText;
  $scope.nextEvent;
  $scope.actionIndex;
  $scope.adventureIndex = 0;
  $scope.adventureDepth = -1;
  $scope.toast = null;
  $scope.optionLock = false;
  $scope.diceRollToast = null;
  $scope.diceRollResult = null;
  $scope.view = null;
  $scope.regions = mapMarkers.markers;
  $scope.currentLockpickPuzzle = [];
  $scope.lockpickSuccess = false;

  $scope.currentRegion = $scope.regions[0];
  $scope.currentRegionBackup = $scope.currentRegion;
  $scope.visitedRegions = [$scope.regions[0].short];
  $scope.scenarios = $scope.currentRegion.scenarios;
  $scope.currentScenario = $scope.scenarios[0];

  $scope.factions = {
    crown: {
      rep: 0,
      icon: './img/factions/silver.png',
      desc: '<a href="#silverCourt" class="info"> [wiki] The court of silver',
      title: 'The court of silver'
    },
    mages: {
      rep: 0,
      icon: './img/factions/mages.png',
      desc: '<a href="#mageGuild" class="info"> [wiki] The mages guild',
      title: 'The mages guild'
    },
    steven: {
      rep: 0,
      icon: '',
      desc: 'Steven is talkative old man in the woods',
      title: 'Steven'
    },
    boblin: {
      rep: 0,
      icon: './img/factions/gobbo.png',
      desc: 'Inknose goblins are common and easy to spot by their long black noses.',
      title: 'Inknose tribe'
    },
    elf: {
      rep: 0,
      icon: './img/factions/gobbo.png',
      desc: 'Knifeears',
      title: 'House Glittergreen'
    },
    dwarf: {
      rep: 0,
      icon: './img/factions/gobbo.png',
      desc: 'Lumberfeet',
      title: 'Forged brotherhood'
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

  $scope.followers = followerIndex.all;

  $scope.customScenarioIntro = function(scenario){
    if(scenario.specialIntros){
      for (var i = 0; i < scenario.specialIntros.length; i++) {;
        if(eval(scenario.specialIntros[i].visibleWhen)) {
          return scenario.specialIntros[i].text;
        }
      }
      return false;
    } else{
      return false;
    }

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

  $scope.resetFollowerCanSpeak = function(){
    var keys = Object.keys($scope.followers);
    for (var i = 0; i < keys.length; i++) {
      $scope.followers[keys[i]].canSpeak = true;
    }
  }

  $scope.pickRegionFromMap = function(item){
    console.log($scope.visitedRegions, item);

    if(!$scope.visitedRegions.includes(item.short) ){
      $scope.resetFollowerCanSpeak();
    } else{
      $scope.visitedRegions.push(item.short);
    }

    $scope.currentRegion = item;
    $scope.currentRegionBackup = $scope.currentRegion;
    $scope.view = null;
    $scope.scenarios = item.scenarios;
    $scope.adventureIndex = 0;
    $scope.adventureDepth = -1;
    $scope.currentScenario = item.scenarios[0];
    $scope.lockpickSuccess = false;
    $scope.currentLockpickPuzzle = [];
  }

  var languageGenerator = function(lang){
    var languages = {
      goblinSpeak: ["zak`pleenk", "xoggoirt", "aark", "waaggusia", "nin", "og", "zotrert", "dract"],
      elfSpeak: ["ala", "lordaa", "do", "sindram", "di´", "meliral", "uriam", "dract"],
      abyssal: ["g̷̮̘o̥̰̠̹̩͕k̸̛͕͔̜̤̲̩͡a̷̷̻̭̯ͅ ̤͖̩̤̯̩̜͉͠ạ̷̮̪̠̥̺̭͈h̢̗̠͚̖̭͈͍̕ ͏͔̬͕̬","̞̩̼g̶̗̣̹͇̗̬̜͘o̶̧̬̲̺ͅf̨̬'̧͎͔̹͉͈̰̝͙ͅn̪̙̭̺͜ņ́","̜̦̻͖͈͖ ̷͏͔a͏̸͔̳͔̺̗̗̼͍h̳̭̩̣̬̦̯͢ͅ ̪͈̫n̸̸̷̰i̛̫͢l̴̨̙g̵̮͈̯h̶̠̱̥̞̼̫̯̞'͡͏̗͍̫̖̘r͎̠̠̞̙̺̰͔i͇͉","̳,̪͖͕͚̝a̸͖̫̯f̷̠͚̯͘l̡̨̨̤͔͈̞̟͍̻̭s҉̛͓̠̮͙͢l̫̺͎̕l̨͉͎͇͍̣͞'͏͍̞͓͖͈̼̬͍͈͡h̡̜̺̬͖̕a̦̫͉̟̯̦̜,̬̞̕͠ ̡̫̳̗̟̤̣̞̩͡͡n҉͚̫̫͉̙̮n̫͎͕̝̗̹͜͜ͅn̻̩y͏̞","̙͔̰͕͈̰̩̞̩ḩ̻̤a̸̪͖̺͢͞h͇̗̭̝͓͇"],
    }

    var text = [];
    var x = 10;
    while(--x) text.push(languages[lang][Math.floor(Math.random() * languages[lang].length)]);
    return text.join(" ");
  }

  //pupeteer avatar
  $scope.pos = {
    baseActions: null,
    additiveActions: null
  }
  $scope.setPupeteerAttrb = function(pos){
    var myEl = angular.element(document.querySelector('#pupeteer'));
    myEl.attr('baseActions', pos.baseActions);
    myEl.attr('additiveActions', pos.additiveActions);
  }

  $scope.wrapUpAndPickNext = function(){
    $scope.eventText = null;
    $scope.scenarios = $scope.scenarios.filter(function (el) {
      var passesCondition = true;
      if(el.visibleWhen){
        passesCondition = eval(el.visibleWhen)
      }
      return !el.done && !el.everGreen && passesCondition;
    });

    if ($scope.scenarios.length<1) {
      //region depleted
      $scope.currentScenario = {
        text: '<em>This area holds no more adventures, open the map and explore somewhere else.</em>',
        everGreen: true,
        mapHint: true,
      };
      $scope.currentRegion.background = './img/places/resting.jpeg';
      return;
    }

    $scope.toast = null;
    $scope.diceRollToast = null;
    $scope.diceRollResult = null;

    var roll = 0 + Math.floor(Math.random()*$scope.scenarios.length);
    $scope.adventureIndex = roll;
    $scope.currentScenario = $scope.scenarios[roll];

    if($scope.currentScenario && $scope.currentScenario.speaker){
      $scope.pos.baseActions = $scope.currentScenario.speaker.baseActions;
      $scope.pos.additiveActions = $scope.currentScenario.speaker.additiveActions;
    } else{
      $scope.pos = {
        baseActions: null,
        additiveActions: null
      }
    }
    $scope.setPupeteerAttrb($scope.pos)
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

  $scope.talkToFollower = function(follower){
      follower.canSpeak = false;
      $scope.currentRegionBackup = $scope.currentRegion;
      $scope.view = null;
      $scope.scenarios = follower.scenarios;
      $scope.adventureIndex = 0;
      $scope.adventureDepth = -1;
      $scope.currentScenario = follower.scenarios[0];
  }

  $scope.generateLockPickingPuzzle = function(level){
    $scope.lockpickSuccess = false;
    var outputPuzzle = [];
    var lpLevel = 3 + level;
    for (var i = 0; i < lpLevel; i++) {
      if(Math.random() < 0.5){
        outputPuzzle.push({a:true, guess: false});
      }else{
        outputPuzzle.push({a:false, guess: false});
      }
    }
    return outputPuzzle;
  }
  $scope.evaluateLockPicking = function(){
    for (var i = 0; i < $scope.currentLockpickPuzzle.length; i++) {
      if($scope.currentLockpickPuzzle[i].a !== $scope.currentLockpickPuzzle[i].guess){
        return;
      }
    }
    $scope.lockpickSuccess = true;
    $scope.currentLockpickPuzzle = [];
    // $scope.scenarios[$scope.adventureIndex].done = true;
    // $scope.wrapUpAndPickNext();
  }

//parallax
  var root = document.documentElement;
  root.addEventListener("mousemove", e => {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    if(vw>768){
      var mx = e.clientX;
      var my = e.clientY;
      root.style.setProperty('--x', mx/180 + "deg");
      root.style.setProperty('--y', my/180 + "deg");
    }
  });

});



// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
