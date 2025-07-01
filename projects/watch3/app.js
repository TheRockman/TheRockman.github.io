var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope, $timeout) {

  $scope.factions = {
    AA: 5,
    BB: 5,
    CC: 5,
    DD: 5,
    EE: 5
  }

  $scope.speed = 8;
  $scope.currentArgument = null;
  $scope.currentDebate = null;

  $scope.debates = [
    {
      id: "A farewell to arms",
      result: null,
      pitch: {
        pitched: false,
        faction: "AA",
        desc: "My lord! We have some fantastic new weapons for our troops. I suggest we deploy them in the field at once.I do admit, there are still some small issues to iron out, some eyebrows might get singed or some such. But what better way to improve other than a proper field test?",
        summary: "Should we give soldiers new powerful but potentialy volotile weapons?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "The eggheads in the lab assure me these new weapons would be aboslutely devestating on the battlefield.We just need to let our soldiers know to not touch the hot end and stay well clear before launching it.",
          modApproved: 3,
          descApproved: "Great choice my lord, i will have the arms shipped to the front on the double - lets show them who they are messing with.",
          modRejected: -4,
          descRejected: "I am dissapointed, i have to admit.Weeks of research gone to waste. Need i remind you there´s a war on out there?! Our boys need bigger guns!So what if they might explode, as long as they take some of the enemy with them thats a win in my book.",
        },
        BB: {
          faction: 'BB',
          desc: "While i do not agree with putting our troops at further risk, these are desperate times.I would be willing to at least test these new inventions under scrict supervision in non-strategic engagements.",
          modApproved: 1,
          descApproved: "I hope this does turn the tide of battle rather than showering the battlefield with what remains of our own men...",
          modRejected: -1,
          descRejected: "I hope you know what you are doing.We cant sit idle forever, sooner or later we need to act - perhaps it would have been better to do so while we had a choice?",
        },
        CC: {
          faction: 'CC',
          desc: 'Absolutely unthinkable! Our fighters are alreday risking life and limb facing the enemy."Singed eyebrows?" Blasted apart more likely. The last thing they need is for their own weapons to jam or heaven forbid blow them into smithereens.',
          modApproved: -5,
          descApproved: "These are indeed dark times, where lives on either side of a trench are so easily gambled.",
          modRejected: 5,
          descRejected: "Empathy. Thats how we will win not only this war but rightfully earning the victory and peace that follows.",
        },
        DD: {
          faction: 'DD',
          desc: "I have no ship in this race.Or rather no knife in this gunfight.While i´ll be the first to tell you that giving the barrel of monkeys explosive bananas is asking for carnage, maybe thats just kick we need.I´ll let you light this fuse entirely on your own mate.",
          modApproved: 0,
          descApproved: "As i said, i trust you on this.",
          modRejected: 0,
          descRejected: "As i said, i trust you on this.",
        },
        EE: {
          faction: 'EE',
          desc: "I dont see why such newfangled arms are needed when the scriptures tell us exactly what strategem to apply to break the current situation on the front.Using the munitions we already posess i have no doubt we can dislodge this particlular clog as well as your predecessors did ages ago.",
          modApproved: -2,
          descApproved: "Forgive me but i must invoke the right to vent my frustration Sir. Breaking with well tested, and moreover significant tradtion, is nothing short of heresey if you ask me.",
          modRejected: 2,
          descRejected: "Splendid Sir! We´ll show them a proper old fashioned thrashing they´ll soon forget.All done right and by the book.",
        },
      }
    }
  ];

  $scope.setCurrentDebate = function(debate) {
    if (!debate) {
      $scope.currentDebate = null;
    }
    $scope.currentDebate = debate;
  };

  $scope.resetCurrentSpeaker = function() {
    $scope.currentSpeaker = null;
    $scope.currentArgument = null;
  };
  
  $scope.setCurrentArgument = function(argument) {
    if (!argument) {
      $scope.currentArgument = null;
    }
    $scope.currentArgument = $scope.currentDebate.arguments[argument];
  };
  
  $scope.approve = function(){
    $scope.factions.AA = $scope.factions.AA + $scope.currentDebate.arguments.AA.modApproved;
    $scope.factions.BB = $scope.factions.BB + $scope.currentDebate.arguments.BB.modApproved;
    $scope.factions.CC = $scope.factions.CC + $scope.currentDebate.arguments.CC.modApproved;
    $scope.factions.DD = $scope.factions.DD + $scope.currentDebate.arguments.DD.modApproved;
    $scope.factions.EE = $scope.factions.EE + $scope.currentDebate.arguments.EE.modApproved;
    $scope.currentDebate.result = true;
  };
  
  $scope.reject = function(){
    $scope.factions.AA = $scope.factions.AA + $scope.currentDebate.arguments.AA.modRejected;
    $scope.factions.BB = $scope.factions.BB + $scope.currentDebate.arguments.BB.modRejected;
    $scope.factions.CC = $scope.factions.CC + $scope.currentDebate.arguments.CC.modRejected;
    $scope.factions.DD = $scope.factions.DD + $scope.currentDebate.arguments.DD.modRejected;
    $scope.factions.EE = $scope.factions.EE + $scope.currentDebate.arguments.EE.modRejected;
    $scope.currentDebate.result = false;
  }
  
  $scope.setCurrentDebate($scope.debates[0]);
});
//['ngTouch', 'angular-carousel']
