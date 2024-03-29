var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl",
function($scope, $timeout, $sce, questToggles, wikiSercive, mapMarkers, followerIndex, factionIndex, itemIndex, playerService) {

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
  $scope.currentShop = null;
  $scope.currentNote = null;

  $scope.exp = 10;
  $scope.improveStat = playerService.improveStat;
  $scope.reduceStat = playerService.reduceStat;

  $scope.currentRegion = $scope.regions[0];
  $scope.currentRegionBackup = $scope.currentRegion;
  $scope.visitedRegions = [$scope.regions[0].short];
  $scope.scenarios = $scope.currentRegion.scenarios;
  $scope.currentScenario = $scope.scenarios[0];
  $scope.factions = factionIndex.factions;
  $scope.quests = [];

  let rollForStat = function(){
    let roll1 = 1 + Math.floor(Math.random()*6);
    let roll2 = 1 + Math.floor(Math.random()*6);
    let roll3 = 1 + Math.floor(Math.random()*6);

    if(roll1 + roll2 + roll3 > 8){
      return roll1 + roll2 + roll3;
    }else{
      return 8;
    }
  }
  // Math.round(0.8);
  $scope.stats = {
    dex: rollForStat(),
    str: rollForStat(),
    int: rollForStat(),
    wis: rollForStat(),
    con: rollForStat(),
    cha: rollForStat()
  }
  $scope.maxHP = Math.round( $scope.stats.con / 2);
  $scope.stats.hp = JSON.parse(JSON.stringify($scope.maxHP));

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
    gold: 1000,
    apple: {
      item: itemIndex.items['apple'],
      quantity: 1
    },
  }
  $scope.useInventoryItem = function(use){
    eval(use);
    itemIndex.setInventoryService($scope.inventory);
  }

  $scope.getInventoryKeys = function(){
    return Object.keys($scope.inventory);
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

  $scope.showDungeonWarning = null;
  $scope.dungeonFailureRestorePoint = null;

  $scope.pickRegionFromMap = function(item, warningConfirmed){
    //confirm enter the dungeon
    if(item.linear && !warningConfirmed){
      $scope.dungeonFailureRestorePoint = JSON.parse(JSON.stringify($scope.currentScenario));
      $scope.showDungeonWarning = item.name +`
      ----------------
      Hold on! This is a dungeon!

      Once entered you wont be able to leave using the map screen.
      The only way out it by failing or succeding in the dungeons challanges.
      Are you ready to enter?

      `;
      return;
    }
    //cant leave a dungeon
    if($scope.currentRegion.linear && !$scope.currentScenario.mapHint){
      return;
    }

    item.showIntro = false;
    if($scope.visitedRegions.includes(item.short) ){
      item.showIntro = false;
    } else{
      item.showIntro = true;
      $scope.visitedRegions.push(item.short);
      $scope.resetFollowerCanSpeak();

      $timeout(function () {
        $scope.currentRegion.showIntro = false;
      }, 6000)
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
    $scope.currentNote = null;
    $scope.currentShop = null;
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
    let roll = 0 + Math.floor(Math.random()*$scope.scenarios.length);
    $scope.adventureIndex = roll;

    if($scope.currentRegion.linear){
      $scope.adventureIndex = 0;
    }

    $scope.currentScenario = $scope.scenarios[$scope.adventureIndex];

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
    } else if(newView === 'mapView' && $scope.currentRegion.linear && !$scope.currentScenario.mapHint ) {
      //cant open map if in a dungeon
      return;
    }{
      $scope.view = newView;
      $scope.showDungeonWarning = null;
    }
  }

  $scope.validateVisibleWhen = function(option) {
    if(!option.visibleWhen && !option.visibleWhenAND){
      return true;
    } else if(option.visibleWhen && $scope.$eval(option.visibleWhen)){
      return true;
    } else if (option.visibleWhenOR) {
      let condA = $scope.$eval(option.visibleWhenAND.a);
      let condB = $scope.$eval(option.visibleWhenAND.b);
      if(condA || condB){
        return true;
      } else {
        return false;
      }
    } else if (option.visibleWhenAND) {
      let condA = $scope.$eval(option.visibleWhenAND.a);
      let condB = $scope.$eval(option.visibleWhenAND.b);
      if(condA && condB){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
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

  let shuffle = function(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]
      ];
    }
    return array;
  }

//Lockpicking
  $scope.generateLockPickingPuzzle = function(level){
    $scope.lockpickSuccess = false;
    let outputPuzzle = [1,2,3];

    return shuffle(outputPuzzle);
  }

  $scope.lockPickingAtempt = function(lock){
    $scope.lockpickSuccess = lock;
    $scope.currentLockpickPuzzle = [];
  }

//buy shop item
$scope.buyItem = function(product){
  if($scope.inventory.gold >= product.price){
    $scope.inventory.gold = $scope.inventory.gold - product.price;

    if(!$scope.inventory[product.item.id]){
      $scope.inventory[product.item.id] = {
        quantity: 0,
      };
    }

    $scope.inventory[product.item.id].quantity = $scope.inventory[product.item.id].quantity+1;
    $scope.inventory[product.item.id].item = product.item;
    itemIndex.setInventoryService($scope.inventory);

    product.quantity--;
  }
}

//parallax
  // var root = document.documentElement;
  // root.addEventListener("mousemove", e => {
  //   var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  //   var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  //   if(vw>768){
  //     var mx = e.clientX;
  //     var my = e.clientY;
  //     root.style.setProperty('--x', mx/180 + "deg");
  //     root.style.setProperty('--y', my/180 + "deg");
  //   }
  // });

});



// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
