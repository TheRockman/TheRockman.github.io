var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function ($scope, $timeout) {

  $scope.factions = {
    AA: 5,
    BB: 5,
    CC: 5,
    DD: 5,
    EE: 5
  }

  $scope.metaStats = {
    exp: 10,
    popularity: 10,
    power: 10
  }

  $scope.eventFlags = {
    argumentHistory: {}
  }

  $scope.currentArgument = null;
  $scope.currentDebate = null;
  $scope.currentSpeaker = null;

  const originalDebates = [
    {
      id: "A farewell to arms",
      idShort: 'farewell_to_arms',
      result: null,
      metaStats: {
        exp: 100,
        power: 100,
        popularity: -100
      },
      pitch: {
        pitched: false,
        faction: "AA",
        desc: "My lord!\nWe have some fantastic new weapons for our troops. I suggest we deploy them in the field at once! \n\nI do admit, there are still some small issues to iron out, some eyebrows might get singed or some such.\nBut what better way to improve other than a proper field test?",
        summary: "Should we give soldiers new powerful but potentialy volotile weapons?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "The eggheads in the lab assure me these new weapons would be aboslutely devestating on the battlefield.\nWe just need to let our soldiers know to not touch the hot end and stay well clear before launching it.",
          modApproved: 3,
          descApproved: "Great choice my lord, i will have the arms shipped to the front on the double - lets show them who they are messing with.",
          modRejected: -4,
          descRejected: "I am dissapointed, i have to admit.\nWeeks of research gone to waste. Need i remind you there´s a war on out there?! Our boys need bigger guns!\nSo what if they might explode, as long as they take some of the enemy with them thats a win in my book.",
        },
        BB: {
          faction: 'BB',
          desc: "While i do not agree with putting our troops at further risk, these are desperate times.\nI would be willing to at least test these new inventions under scrict supervision in non-strategic engagements.",
          modApproved: 1,
          descApproved: "I hope this does turn the tide of battle rather than showering the battlefield with what remains of our own men...",
          modRejected: -1,
          descRejected: "I hope you know what you are doing.We cant sit idle forever, sooner or later we need to act - perhaps it would have been better to do so while we had a choice?",
        },
        CC: {
          faction: 'CC',
          desc: 'Absolutely unthinkable!\nOur fighters are alreday risking life and limb facing the enemy.\n"Singed eyebrows"? Blasted apart more likely.\nThe last thing they need is for their own weapons to jam or heaven forbid blow them into smithereens.',
          modApproved: -4,
          descApproved: "These are indeed dark times, where lives on either side of a trench are so easily gambled.",
          modRejected: 4,
          descRejected: "Empathy. Thats how we will win not only this war but rightfully earning the victory and peace that follows.",
        },
        DD: {
          faction: 'DD',
          desc: "I have no ship in this race - or rather no knife in this gunfight.\nWhile i´ll be the first to tell you that giving the barrel of monkeys explosive bananas is asking for carnage, maybe thats just the kick we need to turn the tide.\nI´ll let you light this fuse entirely on your own mate.",
          modApproved: 0,
          descApproved: "As i said, i trust you on this.",
          modRejected: 0,
          descRejected: "As i said, i trust you on this.",
        },
        EE: {
          faction: 'EE',
          desc: "I dont see why such newfangled arms are needed when the scriptures tell us exactly what strategem to apply to break the current situation on the front.\n\nUsing the munitions we already posess i have no doubt we can dislodge this particlular clog as well as your predecessors did ages ago.",
          modApproved: -2,
          descApproved: "Forgive me but i must invoke the right to vent my frustration Sir. Breaking with well tested, and moreover significant tradtion, is nothing short of heresey if you ask me.",
          modRejected: 2,
          descRejected: "Splendid Sir! We´ll show them a proper old fashioned thrashing they´ll soon forget.All done right and by the book.",
        },
      }
    },
    {
      id: "A hard days work",
      idShort: 'hard_days_work',
      result: null,
      metaStats: {
        exp: 100,
        power: 100,
        popularity: -100
      },
      pitch: {
        pitched: false,
        faction: "EE",
        desc: "Sir!\nI have discovered a clerical error that should be simple enough to correct.\nThere are a number of holy days that are currently not officcially marked as rest days.\nShould be a simple enough problem to solve.",
        summary: "Should we add more rest days for your people, possibly lowering production.",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "Frankly i dont see the point in change a thing.\nNo wait!\nWe should reduce the rest days we have already to increase production!",
          modApproved: -1,
          descApproved: "If anyone comes whining to me about this when munitions run low I will just tell them im having a religious holidy.",
          modRejected: 2,
          descRejected: "Good. Im already drafting a suggestion to abolish rest days all together.",
        },
        BB: {
          faction: 'BB',
          desc: "Relaxation is an important factor for quality work.\nHowever, basing something like that on archaic theology seems suboptimal.\nI would rather see a scientific inquery into what days would give the greatest return as rest days.",
          modApproved: -1,
          descApproved: "There is a non-zero chance traditions are tested by reality to the point that they match up to theory - lets find out.",
          modRejected: 1,
          descRejected: "A smart decicion. Giving rights like these should not be done without evidence.",
        },
        CC: {
          faction: 'CC',
          desc: 'Obviously the working man and woman should be well rested!\nWhile i dont look to religion myself, i think its a splendid device to make sure the common man remembers to relax and unwind.',
          modApproved: 5,
          descApproved: "With the workers enjoying the holy days, we will have to re-double our efforts to keep them safe.",
          modRejected: -5,
          descRejected: "The term heartbroken doesnt sit right for someone without a real heart, but it is the closest to how i feel hearing this.",
        },
        DD: {
          faction: 'DD',
          desc: "A ship cant set sail if the crew is sleeping in, but neither if they are whipped into unconciousnes.\nLet the men rest a bit i say.",
          modApproved: 2,
          descApproved: "And with that on the books, i think i will go enjoy a bit of a holy day myself. In my bunkroom.",
          modRejected: -1,
          descRejected: "'And down came the whip, with a crack and a smack.\nAnchors away on that ship, to the horizon and back.\nAnd beyond! ... '",
        },
        EE: {
          faction: 'EE',
          desc: "As i said, a simple correction sir, barely worth thinking about.",
          modApproved: 4,
          descApproved: "Praise be the shapers.",
          modRejected: -7,
          descRejected: "This is akin to heresy, i say. Inconceivable!",
        },
      }
    },
  ];

  $scope.debates = JSON.parse(JSON.stringify(originalDebates));

  $scope.setCurrentDebate = function (debate) {
    if (!debate) {
      $scope.currentDebate = null;
    }
    $scope.currentDebate = debate;
  };

  $scope.resetCurrentSpeaker = function () {
    $scope.currentSpeaker = null;
    $scope.currentArgument = null;
  };

  $scope.setCurrentArgument = function (argument) {
    if (!argument) {
      $scope.currentArgument = null;
    }
    $scope.currentSpeaker = argument.toString();
    $scope.currentArgument = $scope.currentDebate.arguments[argument];
  };

  function mergeMeta(objA, objB) {
    let mergedObj = {};
    Object.keys(objA).forEach(key => {
      mergedObj[key] = objA[key] + (objB[key] || 0);
    });

    Object.keys(objB).filter(key => mergedObj[key] === undefined).forEach(key => (
      mergedObj[key] = objB[key]
    ));

    $scope.metaStats = mergedObj;
    console.log($scope.metaStats);
    console.log($scope.eventFlags.argumentHistory);
  }

  $scope.approve = function () {
    $scope.factions.AA = $scope.factions.AA + $scope.currentDebate.arguments.AA.modApproved;
    $scope.factions.BB = $scope.factions.BB + $scope.currentDebate.arguments.BB.modApproved;
    $scope.factions.CC = $scope.factions.CC + $scope.currentDebate.arguments.CC.modApproved;
    $scope.factions.DD = $scope.factions.DD + $scope.currentDebate.arguments.DD.modApproved;
    $scope.factions.EE = $scope.factions.EE + $scope.currentDebate.arguments.EE.modApproved;

    $scope.currentDebate.result = true;
    $scope.eventFlags.argumentHistory[$scope.currentDebate.idShort] = true;
    mergeMeta($scope.currentDebate.metaStats, $scope.metaStats);
    $scope.setCurrentArgument($scope.currentDebate.pitch.faction);
  };

  $scope.reject = function () {
    $scope.factions.AA = $scope.factions.AA + $scope.currentDebate.arguments.AA.modRejected;
    $scope.factions.BB = $scope.factions.BB + $scope.currentDebate.arguments.BB.modRejected;
    $scope.factions.CC = $scope.factions.CC + $scope.currentDebate.arguments.CC.modRejected;
    $scope.factions.DD = $scope.factions.DD + $scope.currentDebate.arguments.DD.modRejected;
    $scope.factions.EE = $scope.factions.EE + $scope.currentDebate.arguments.EE.modRejected;

    $scope.currentDebate.result = false;
    $scope.eventFlags.argumentHistory[$scope.currentDebate.idShort] = false;
    mergeMeta($scope.currentDebate.metaStats, $scope.metaStats);
    $scope.setCurrentArgument($scope.currentDebate.pitch.faction);
  }


  $scope.startNextDebate = function() {
    //Filter out current debate
    $scope.debates = $scope.debates.filter(function (item) {
      return item.idShort != $scope.currentDebate.idShort;
    });

    //reset
    $scope.currentDebate = {};
    $scope.currentArgument = null;
    $scope.currentSpeaker = null;

    // pick next random debate
    $scope.setCurrentDebate($scope.debates[Math.floor(Math.random() * $scope.debates.length) + 0]);
  }

  $scope.setCurrentDebate($scope.debates[Math.floor(Math.random() * $scope.debates.length) + 0 ]);
});
//['ngTouch', 'angular-carousel']
