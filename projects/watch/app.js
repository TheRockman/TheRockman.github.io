var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope, $http) {
  $scope.eventText;
  $scope.nextEvent;
  $scope.actionIndex;
  
  $http.get('phones.json').then(function(data) {
   console.log(data);
  });
  
  $scope.progress = function(){
    $scope.eventText = null;
    $scope.adventureDepth++;
    $scope.currentScenario = $scope.scenarios[$scope.adventureIndex].path[$scope.adventureDepth];
  }
  
  $scope.levelUp = function(props){
    $scope.eventText = null;
    $scope.nextEvent = null;
    
    console.log('+1', $scope);
    $scope.watcher.stats[props.attribute] = $scope.watcher.stats[props.attribute] + props.value;
    if($scope.watcher.stats[props.attribute]>18){
      $scope.watcher.stats[props.attribute] = 18;
    }
    $scope.eventText = props.levelUpText;
    $scope.nextEvent = $scope.abort;
  }
  
  $scope.levelDown = function(props){
    $scope.eventText = null;
    $scope.nextEvent = null;
    
    console.log('-1');
    $scope.watcher.stats[props.attribute] = $scope.watcher.stats[props.attribute] - props.value;
    if($scope.watcher.stats[props.attribute]<0){
      $scope.watcher.stats[props.attribute] = 0;
    }
    $scope.eventText = props.levelDownText;
    $scope.nextEvent = $scope.abort;
  }
  
  $scope.upSupplies = function(props){
    $scope.eventText = null;
    $scope.nextEvent = null;
    
    console.log('supplies +1', $scope);
    $scope.inventory[props.attribute] = $scope.inventory[props.attribute] + props.value;

    $scope.eventText = props.successText;
    $scope.nextEvent = $scope.abort;
  }
  
  $scope.takeDamage = function(props){
    $scope.eventText = null;
    $scope.nextEvent = null;
    
    console.log('oof');
    $scope.watcher.stats.HP = $scope.watcher.stats.HP - props.damage;
    if($scope.watcher.stats.HP <= 0){
      console.log('dead');
    }
    
    $scope.eventText = props.damageText;
    $scope.nextEvent = $scope.abort;
  }
  
  $scope.dice = function(diceSize) {
    return 0 + Math.floor(Math.random()*diceSize)
  }
  
  $scope.pickNewScenario = function(){
    $scope.eventText = null;
    console.log('11');
      $scope.scenarios = $scope.scenarios.filter(function (el) {
      return !el.done;
    });
    
    if(  $scope.scenarios.length === 0){
      $scope.adventureIndex = 0;
      $scope.currentScenario = $scope.boss;
    }else{
      var roll = $scope.dice(  $scope.scenarios.length);
      $scope.adventureIndex = roll;
      
      $scope.currentScenario = $scope.scenarios[roll];
    }
  }
  
  $scope.skillCheck = function(props){
    $scope.eventText = null;
    $scope.nextEvent = null;
    var roll = $scope.dice(20);
    
    if(roll === 20){
      $scope.eventText = props.successText;
      console.log('CRIT success', roll + $scope.watcher.stats[props.test], props.dc);
      $scope.nextEvent = props.success;
    }
    else if(roll + $scope.watcher.stats[props.test] >= props.dc){
      $scope.eventText = props.successText;
      console.log('success', roll + $scope.watcher.stats[props.test], props.dc);
      $scope.nextEvent = props.success;
    }
    else{
      console.log('failure', roll + $scope.watcher.stats[props.test], props.dc);
      $scope.eventText = props.failureText;
      $scope.nextEvent = props.failure;
    }
  }
  
  $scope.buy = function(props){
    $scope.eventText = null;
    $scope.nextEvent = null;
    
    if($scope.inventory.gold >= props.price){
      $scope.inventory.gold = $scope.inventory.gold - props.price;
      $scope.eventText = props.successText;
      $scope.nextEvent = props.success;
    } else{
      $scope.eventText = props.failureText;
      $scope.nextEvent = props.failure;
    }
  }
  
  $scope.abort = function(){
    $scope.eventText = null;
    $scope.nextEvent = null;
    
    console.log('aborted');
    //mark scenario as done
    $scope.scenarios[$scope.adventureIndex].done = true;
    $scope.eventText = $scope.currentScenario.ending;
    
    $scope.adventureDepth = -1;
    
    $scope.nextEvent = $scope.pickNewScenario;
  }
  
  $scope.setActionIndex = function(i){
    $scope.actionIndex = i;
  }

  $scope.party = [];
  $scope.generateParty = function(){
    for (i = 0; i < 4; i++) {
      var char =     {
        name: 'dirk',
        stats: {
          HP: 12,
          STR: $scope.dice(12),
          DEX: $scope.dice(12),
          INT: $scope.dice(12),
          WIS: $scope.dice(12),
          CON: $scope.dice(12),
          CHAR: $scope.dice(12)
        },
      }
      if(char.STR + char.DEX + char.INT + char.WIS + char.CON + char.CHAR > 64 || char.STR + char.DEX + char.INT + char.WIS + char.CON + char.CHAR < 50){
        char.stats = {
          HP: 12,
          STR: 8,
          DEX: 8,
          INT: 8,
          WIS: 8,
          CON: 8,
          CHAR: 8
        }
      }
      $scope.party.push(char);
    }
  }
  
  $scope.inventory = {
    gold: 100,
    food: 10,
    artifacts: []
  }
  
  $scope.boss = {
    desc: 'BOSS',
    ending: 'Wah wah',
    actions: [
      {
        desc: 'Pray',
        action: $scope.takeDamage,
        actionProps: {
          damageText: 'Oof',
          damage: 2,
        }
      },
    ],
  }

  $scope.scenarios = [
    {
      desc: 'A troll appears and tries to sell you a potion.',
      ending: '321',
      actions: [
        {
          desc: 'Buy it for 100 gold',
          action: $scope.buy,
          actionProps: {
            price: 100,
            success: $scope.progress,
            successText: 'You pay and get the poton.',
            failure: $scope.takeDamage,
            failureText: 'You cant afford it.',
          }
        },
        {
          desc: 'Decline',
          action: $scope.abort
        }
      ],
      path: [
        {
          desc: 'Should you drink it?',
          ending: 'The troll grins at you and wander of.',
          actions: [
            {
              desc: 'Yes',
              action: $scope.skillCheck,
              actionProps: {
                test: 'CON',
                attribute: 'CON',
                dc: 18,
                failure: $scope.takeDamage,
                damage: 5,
                failureText: 'It taste horrible and you puke',
                damageText: 'You take 5 DMG!',
                success: $scope.levelUp,
                successText: 'It taste horrible but you can keep it down and you feel stronger somehow.',
                levelUpText: 'You gain 5 CON!',
                value: 5,
              }
            },
            {
              desc: 'No',
              action: $scope.abort
            }
          ],
        },
      ]
    },
    {
      desc: 'The night has been particularly cold. There is a small, sleeping creature wrapped up under one of the logs around the fire in order to stay warm and dry.',
      ending: 'You sit down and start to wonder what other creatures might be sleeping in and around the camp...',
      actions: [
        {
          desc: 'Try to catch it for food.',
          action: $scope.skillCheck,
          actionProps: {
            test: 'DEX',
            dc: 12,
            failure: $scope.takeDamage,
            failureText: 'You sneak up above it and prepare to lunge at it. But at the last second you notice a round yellow eye opening!',
            damageText: 'Tiny but sharp fangs bite your finger and with a hiss it quickly slithers away into the bushes. [You take 2 damage] ',
            damage: 2,
            success: $scope.upSupplies,
            successText: 'You sneak up above it and lunge at it. You feel your hands grasp around its back and you stuff it in a sack.',
            attribute: 'food',
            value: 1,
          }
        },
        {
          desc: 'Try to identify it.',
          action: $scope.skillCheck,
          actionProps: {
            test: 'INT',
            attribute: 'INT',
            dc: 8,
            failure: $scope.abort,
            failureText: 'You have no idea what it is. Best not disturb it.',
            success: $scope.levelUp,
            successText: 'Its a drake, a small dragon-like reptile. They can be fierce so better to let it sleep until morning.',
            levelUpText: 'You gain 1 INT!',
            value: 1,
          }
        },
        {
          desc: 'Stay away.',
          action: $scope.abort
        }
      ],
    },
    {
      desc: 'Around midnight a mysterious robed stranger comes to the camp and asks to stay the night.',
      ending: 'The stranger quietly dissapear back into the forest.',
      actions: [
        {
          desc: '"Take a seat by the fire"',
          action: $scope.progress
        },
        {
          desc: '"Leave"',
          action: $scope.abort
        }
      ],
      path: [
        {
          desc: 'The stranger sits down and lights a pipe. The the two of you share stories of adventures you both have had.',
          ending: 'In the morning the stranger quietly gets up and thank you for the hospitality',
          actions: [
            {
              desc: 'Tell a tall tale.',
              action: $scope.skillCheck,
              actionProps: {
                test: 'CHAR',
                attribute: 'gold',
                dc: 12,
                failure: $scope.abort,
                failureText: 'The stranger seems offended by such a ridiculous story but stay silent.',
                success: $scope.upSupplies,
                successText: 'The stranger is impressed by your story and give you a ring worth 100 gold and then seems to fall asleep.',
                value: 100,
              }
            },
            {
              desc: 'Ask more about the stranger',
              action: $scope.progress
            }
          ],
        },
        {
          desc: 'The stranger tells you about far off lands where wild men fight dragons.',
          actions: [
            {
              desc: 'Listen',
              action: $scope.progress
            }
          ],
        },
        {
          desc: 'You listen to the strangers story but you must have fallen asleep at some point since you awake at dawn.',
          ending: 'You look around but there is no trace of the stranger other than a faint smell of tobacco.',
          actions: [
            {
              desc: 'OK',
              action: $scope.abort
            }
          ],
        }
      ]
    }
  ]

  $scope.generateParty();
  $scope.watcher = $scope.party[0];
  
  $scope.adventureIndex = 0;
  $scope.adventureDepth = -1;
  $scope.pickNewScenario();

});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
