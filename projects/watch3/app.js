var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function ($scope) {

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

  $scope.currentCrisis = null;
  $scope.crisisSolver = null;

  $scope.currentConsequences = [];

  $scope.name = {
    AA: "Abrams Stovevalve",
    BB: "Bella MacGuffin",
    CC: "Clocktoria III",
    DD: "Dack Rowley",
    EE: "Enoch Diptych"
  };

// Established character:
// AA - Abrams is always chasing profit, 
// BB - Bella wants solid data, 
// CC - Clocktoria thinks in human costs, 
// DD - Dack encourages adventure and risk.
// EE- Enoch invokes the traditions of the Shapers, 

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
    {
      id: "The Fever Ward Mandate",
      idShort: 'fever_ward_mandate',
      result: null,
      metaStats: {
        exp: 100,
        power: -50,
        popularity: 50
      },
      pitch: {
        pitched: false,
        faction: "CC",
        desc: "My lord, i must bring an urgent matter to your attention.\nSeveral cases of gear-fever have been reported among workers at the smelting districts.\nI am proposing mandatory health screenings for all factory workers before they are permitted on the floor.\n\nLeft unchecked this could spread well beyond the factory gates.",
        summary: "Should we impose mandatory health screenings on factory workers to contain a gear-fever outbreak?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "Mandatory screenings? Do you have any idea what that does to a production schedule?\nEvery hour my workers spend standing in some queue is an hour they are not at their post.\nA little cough never stopped a man from pulling a lever.",
          modApproved: -3,
          descApproved: "Fine. But i am sending the bill for lost output directly to the hospital.",
          modRejected: 3,
          descRejected: "A sensible call. Factories run on sweat, not on doctor´s certificates.",
        },
        BB: {
          faction: 'BB',
          desc: "The data on gear-fever transmission is quite clear. Early screening interrupts the contagion chain before it becomes exponential.\nI would in fact suggest we go further and publish the findings so the science is on record.",
          modApproved: 2,
          descApproved: "Excellent. I will prepare a standardised testing protocol by end of week.",
          modRejected: -1,
          descRejected: "A missed opportunity. We will be back here in a month with far worse numbers, i assure you.",
        },
        CC: {
          faction: 'CC',
          desc: "A single sick worker can infect a floor of fifty before symptoms are even visible.\nThese are not just employees, they are people with families who go home each evening.\nWe have both the means and the obligation to protect them.",
          modApproved: 4,
          descApproved: "Thank you. I will have the screening stations staffed and operational within the week.",
          modRejected: -5,
          descRejected: "I see. Then i hope the cost of inaction proves lighter than i fear.",
        },
        DD: {
          faction: 'DD',
          desc: "You would not let a sailor with rot-lung board a vessel and expect a safe voyage.\nA sick crew is a slow crew, and a slow crew is a dead crew.\nCost what it costs, i say - patch the hull before she takes on water.",
          modApproved: 1,
          descApproved: "Good. The sensible call usually is the unpopular one.",
          modRejected: -1,
          descRejected: "Your call. I just hope the ship stays afloat.",
        },
        EE: {
          faction: 'EE',
          desc: "The Shapers teach that a community which tends to its weakest members is a community that endures.\nI am not generally one for modern medicine, but even the oldest texts speak of isolating the afflicted.\nThis is not innovation - it is ancient wisdom wearing a new coat.",
          modApproved: 2,
          descApproved: "Let it be noted that tradition and compassion are not so different after all.",
          modRejected: -3,
          descRejected: "I shall be praying for those the illness takes. I hope you will find it in yourself to do the same.",
        },
      }
    },
    {
      id: "The Grand Conduit Project",
      idShort: 'grand_conduit',
      result: null,
      metaStats: {
        exp: 100,
        power: 150,
        popularity: -50
      },
      pitch: {
        pitched: false,
        faction: "AA",
        desc: "My lord, i bring you an opportunity of historic proportions.\nA pressurised steam conduit running from the main boiler district straight through the Tinker´s Quarter would power the entire eastern city grid.\nYes, a number of residents would need to be relocated. But the economic output would be staggering.",
        summary: "Should we demolish the Tinker's Quarter to build a steam conduit that would power the eastern city?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "The numbers are irrefutable. Within three years the conduit pays for itself, including relocation costs.\nThe Tinker´s Quarter is a charming relic but it is sitting on top of a fortune.\nProgress does not wait for sentiment.",
          modApproved: 4,
          descApproved: "Magnificent. I will have my engineers break ground by the end of the month.",
          modRejected: -4,
          descRejected: "A shame. We just handed a generation of prosperity to whoever is bold enough to build it next.",
        },
        BB: {
          faction: 'BB',
          desc: "The engineering case is sound - a pressurised conduit of this scale is technically achievable.\nI would insist on independent stress calculations and a full evacuation model before construction begins.\nDone correctly, this is a genuine leap forward.",
          modApproved: 1,
          descApproved: "I will want full access to the structural data throughout the build.",
          modRejected: -1,
          descRejected: "Understandable. The risk calculus was not in its favour.",
        },
        CC: {
          faction: 'CC',
          desc: "Relocation costs. That is a very tidy phrase for tearing people´s lives apart.\nMany of those residents have nowhere else to go. Disruption of this scale causes illness, grief, and worse.\nI cannot in good conscience support this.",
          modApproved: -3,
          descApproved: "Then i ask that you at least fund a proper relocation support programme. These people deserve better than a cart and a direction.",
          modRejected: 3,
          descRejected: "Thank you. Some things are not measured in output figures.",
        },
        DD: {
          faction: 'DD',
          desc: "A new route is a new route. Whether it is a sea lane or a steam pipe, the question is the same - what do you gain and what do you lose.\nThe Tinker´s Quarter has good bones. But so did half the ports i´ve seen paved over for a new dock.\nYour call, as ever.",
          modApproved: 1,
          descApproved: "Bold move. I have seen bolder ones pay off.",
          modRejected: 0,
          descRejected: "Steady as she goes, then.",
        },
        EE: {
          faction: 'EE',
          desc: "The Tinker´s Quarter has stood for two hundred years.\nEvery cobblestone carries the history of this city and of the people who built it.\nNo steam pipe - however impressive - is worth the erasure of that heritage. Not to me. Not to the Shapers.",
          modApproved: -4,
          descApproved: "I register my objection formally and for the record. This will not be forgotten.",
          modRejected: 4,
          descRejected: "A relief. Some things ought to be permanent.",
        },
      }
    },
    {
      id: "Beyond the Fog Chart",
      idShort: 'fog_chart_expedition',
      result: null,
      metaStats: {
        exp: 150,
        power: 50,
        popularity: 50
      },
      pitch: {
        pitched: false,
        faction: "DD",
        desc: "My lord, i have a proposal that is equal parts audacious and overdue.\nBeyond the Fog Sea our charts simply end with the words 'here be nothing known'.\nI am asking for funding and a crew to go and find out if that is actually true.\n\nNew trade routes, new resources, new allies. Or nothing. But we´ll know.",
        summary: "Should we fund an expedition to chart the uncharted territories beyond the Fog Sea?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "Uncharted territories mean untapped markets.\nIf there are people beyond the Fog Sea they need goods, and if there aren´t, there are certainly resources.\nThis is not an adventure, it is an investment.",
          modApproved: 2,
          descApproved: "I want first refusal on any trade concessions the expedition secures. In writing.",
          modRejected: -1,
          descRejected: "Short-sighted. Someone else will chart it and we will be buying their maps.",
        },
        BB: {
          faction: 'BB',
          desc: "From a scientific standpoint this is one of the most compelling proposals i have heard in years.\nUnknown ecosystems, geological formations, atmospheric phenomena.\nWhatever is out there, we will learn something extraordinary.",
          modApproved: 3,
          descApproved: "I am sending two of my researchers with the crew whether you like it or not.",
          modRejected: -2,
          descRejected: "A setback for knowledge. I will be petitioning again next year.",
        },
        CC: {
          faction: 'CC',
          desc: "I confess the prospect of new medicinal plants and untested remedies rather excites me.\nThough i do worry about the health risks to the crew - fog sickness is poorly understood.\nIf you proceed, please ensure a properly stocked medical officer is aboard.",
          modApproved: 1,
          descApproved: "I will prepare a comprehensive medical kit and a list of symptoms to watch for.",
          modRejected: -1,
          descRejected: "Very well. Though i do wish we knew what was out there.",
        },
        DD: {
          faction: 'DD',
          desc: "I have been waiting twenty years for someone to say yes to this.\nEvery sailor worth their salt has stared at the edge of a chart and felt it.\nThe sea does not end at the edge of what we know. Neither should we.",
          modApproved: 4,
          descApproved: "I will have a crew assembled and a ship provisioned inside a fortnight. You will not regret this.",
          modRejected: -5,
          descRejected: "Aye. I´ve heard that before.\nI´ll be at the docks if you change your mind.",
        },
        EE: {
          faction: 'EE',
          desc: "The Shapers charted what they charted for a reason.\nThere is a comfort and a wisdom in knowing one´s boundaries.\nVenturing beyond the Fog Sea is not exploration - it is hubris dressed in oilskins.",
          modApproved: -3,
          descApproved: "I shall pray the Shapers extend their protection beyond the edges of the known world. We may need it.",
          modRejected: 3,
          descRejected: "Wisdom. There is more than enough uncharted territory in the lands we already hold.",
        },
      }
    },
  ];
  $scope.debates = JSON.parse(JSON.stringify(originalDebates));

  $scope.consequences = [
    {
      condition: function (factions) { return factions.AA < 1; },
      title: 'Abrams Stovevalve is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: 'https://i.pinimg.com/736x/1f/35/68/1f3568375ecbd3b79093dda5776ec307.jpg'
    },
    {
      condition: function (factions) { return factions.BB < 1; },
      title: 'Bella MacGuffin is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: 'https://i.pinimg.com/736x/1f/35/68/1f3568375ecbd3b79093dda5776ec307.jpg'
    },
    {
      condition: function (factions) { return factions.CC < 1; },
      title: 'Clocktoria III is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: 'https://i.pinimg.com/736x/1f/35/68/1f3568375ecbd3b79093dda5776ec307.jpg'
    },
    {
      condition: function (factions) { return factions.DD < 1; },
      title: 'Dack Rowley is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: 'https://i.pinimg.com/736x/1f/35/68/1f3568375ecbd3b79093dda5776ec307.jpg'
    },
    {
      condition: function (factions) { return factions.EE < 1; },
      title: 'Enoch Diptych is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: 'https://i.pinimg.com/736x/1f/35/68/1f3568375ecbd3b79093dda5776ec307.jpg'
    },
    {
      condition: function (factions, metaStats) { return metaStats.popularity < 1; },
      title: 'Your popularity rating is dire',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: 'https://assets.moxfield.net/cards/card-kydJr-art_crop.jpg'
    },
    {
      condition: function (factions, metaStats) { return metaStats.popularity > 9; },
      title: 'The people demand more from you',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: 'https://assets.moxfield.net/cards/card-kydJr-art_crop.jpg'
    },
    {
      condition: function (factions) { return factions.AA > 7; },
      title: 'Abrams Stovevalve is your devoted ally',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: 'https://i.pinimg.com/736x/1f/35/68/1f3568375ecbd3b79093dda5776ec307.jpg'
    },
    {
      condition: function (factions) { return factions.BB > 7; },
      title: 'Bella MacGuffin sings your praises',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: 'https://i.pinimg.com/736x/1f/35/68/1f3568375ecbd3b79093dda5776ec307.jpg'
    },
    {
      condition: function (factions) { return Object.values(factions).reduce(function (sum, v) { return sum + v; }, 0) < -5; },
      title: 'The council turns against you',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: 'https://i.pinimg.com/736x/1f/35/68/1f3568375ecbd3b79093dda5776ec307.jpg'
    },
  ];

  $scope.crisisEvents = [
    {
      id: "Crisis: Enemy at the gates!",
      idShort: 'crisis_enemy_at_the_gates',
      desc: 'The forces of the Argentum leauge is mustering at the city wall. There are several dreadnaughts and stingcrank batteries primed and ready to strike.',
      stat: "loyalty",
      dc: 10,
      resolved: null,
      rewardStat: 'power',
      rewardVal: 5,
      results: {
        WORLD: {
          passCheck: "NULL",
          failedCheck: "NULL"
        },
        AA: {
          passCheck: "I was able send a helfy shipment of guns to the walls just in time for things to turn ugly. For the enemy that is.",
          failedCheck: "The walls are a mess, fixing this wont come cheap."
        },
        BB: {
          passCheck: "With a considerable effort in strategic deliberation, the enemy has been neutrolized for the time being. The combat data will be incorporated and applied to future models.",
          failedCheck: "I did all i could, but there were several factors that were out of my control. Losses are substantial, but focus can now shift to rebuilding."
        },
        CC: {
          passCheck: "I sent as many as i could to treat injured combatants on both sides. The enemys weapons are horriffic, but our capacity for healing greater still - and that will proove the deciding factor im sure.",
          failedCheck: "We arrived too late to do anything other than end suffering. We need to be better prepared in the future."
        },
        DD: {
          passCheck: "There is no army that can stand against me, my blade, and a fully armed crew. Nothing left but splinters at the bottom of the sea.",
          failedCheck: "If im supposed to fight of entire armies on my own, i would expect not to have to do so with a skeleton crew and my hand tied behind my back"
        },
        EE: {
          passCheck: "Patience, it is said, is a weapon all its own. I think today speaks for itself in that regard.",
          failedCheck: "The failure is mine alone, but please allow me to tend to the cermonies now to atone."
        },
      }
    },
  ]

  $scope.setCrisisSolver = function (solver) {
    $scope.crisisSolver = solver || null;
  };  
  
  $scope.setCurrentCrisis = function (crisis) {
    $scope.currentCrisis = crisis || null;
  };

  // $scope.setCurrentCrisis($scope.crisisEvents[0]);
  $scope.resolveCrisis = function(){
    if ($scope.currentCrisis.stat === "loyalty") {
      return $scope.factions[$scope.crisisSolver] >= $scope.currentCrisis.dc ? $scope.currentCrisis.resolved = "pass" : $scope.currentCrisis.resolved = "fail";
    }
  }

  $scope.setCurrentDebate = function (debate) {
    $scope.currentDebate = debate || null;
  };

  $scope.resetCurrentSpeaker = function () {
    $scope.currentSpeaker = null;
    $scope.currentArgument = null;
  };

  $scope.dismissCrisis = function () {
    $scope.crisisSolver = null;
    $scope.currentCrisis = null;
  };

  $scope.setCurrentArgument = function (argument) {
    if (!argument) {
      $scope.currentArgument = null;
      return;
    }
    $scope.currentSpeaker = argument.toString();
    $scope.currentArgument = $scope.currentDebate.arguments[argument];
  };

  function mergeMeta(objA, objB) {
    var mergedObj = {};
    var allKeys = new Set(Object.keys(objA).concat(Object.keys(objB)));
    allKeys.forEach(function (key) {
      mergedObj[key] = (objA[key] !== undefined ? objA[key] : 0) + (objB[key] !== undefined ? objB[key] : 0);
    });
    $scope.metaStats = mergedObj;
  }

  function applyDecision(modKey, result) {
    Object.keys($scope.factions).forEach(function (faction) {
      $scope.factions[faction] += $scope.currentDebate.arguments[faction][modKey];
    });
    $scope.currentDebate.result = result;
    $scope.eventFlags.argumentHistory[$scope.currentDebate.idShort] = result;
    mergeMeta($scope.currentDebate.metaStats, $scope.metaStats);
    $scope.setCurrentArgument($scope.currentDebate.pitch.faction);
  }

  $scope.approve = function () {
    applyDecision('modApproved', true);
  };

  $scope.reject = function () {
    applyDecision('modRejected', false);
  };

  $scope.checkForConsequences = function () {
    $scope.currentConsequences = $scope.consequences.filter(function (cons) {
      return cons.condition($scope.factions, $scope.metaStats);
    });
  };

  $scope.acknowledgeConsequence = function (con) {
    $scope.currentConsequences = $scope.currentConsequences.filter(function (item) {
      return item != con;
    });
    $scope.consequences = $scope.consequences.filter(function (item) {
      return item != con;
    });
  }

  $scope.startNextDebate = function () {
    $scope.debates = $scope.debates.filter(function (item) {
      return item.idShort != $scope.currentDebate.idShort;
    });

    $scope.currentDebate = {};
    $scope.currentArgument = null;
    $scope.currentSpeaker = null;

    $scope.checkForConsequences();

    if ($scope.debates.length > 0) {
      $scope.setCurrentDebate($scope.debates[Math.floor(Math.random() * $scope.debates.length)]);
    }
  };

  $scope.setCurrentDebate($scope.debates[Math.floor(Math.random() * $scope.debates.length)]);
});
