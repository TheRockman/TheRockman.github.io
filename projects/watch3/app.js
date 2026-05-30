'use strict';

angular.module("myApp", ['ngTouch']).controller("mainCtrl", ["$scope", function ($scope) {

  $scope.factions = {
    AA: 5,
    BB: 5,
    CC: 5,
    DD: 5,
    EE: 5
  };

  $scope.metaStats = {
    exp: 0,
    popularity: 0, // -1000 to 1000 with 0 being the starting point
    power: 0 // -1000 to 1000 with 0 being the starting point
  };

  $scope.eventFlags = {
    argumentHistory: {}
  };

  var getSafeNumber = function (value) {
    return typeof value === 'number' ? value : 0;
  };

  var getArgumentChange = function (argument, key) {
    return getSafeNumber(argument && argument[key]);
  };

  var sumValues = function (objectToSum) {
    return Object.values(objectToSum || {}).reduce(function (sum, value) {
      return sum + getSafeNumber(value);
    }, 0);
  };

  var randomIndex = function (length) {
    return Math.floor(Math.random() * Math.max(0, length));
  };

  var CRISIS_FREQUENCY = 4;

  $scope.start = false;

  $scope.currentArgument = null;
  $scope.currentDebate = null;
  $scope.currentSpeaker = null;

  $scope.currentCrisis = null;
  $scope.crisisSolver = null;
  $scope.hints = true;

  $scope.currentConsequences = [];
  $scope.devotedFlags = {};

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

  let originalDebates = [
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
          desc: "Frankly i dont see the point in changing a thing.\nNo wait!\nWe should in fact reduce the rest days we have already to increase production!",
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
          modRejected: -2,
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
      id: "Off the charts",
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
        desc: "My lord, i have a proposal that is equal parts audacious and overdue.\nBeyond the Fog Sea our charts simply end with the words 'here be dragons'.\nI am asking for funding and a crew to go and find out if that is actually true.\n\nNew trade routes, new resources, new allies. Or nothing. But we´ll know.",
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
    {
      id: "The greenlight gambit",
      idShort: 'greenlight_gambit',
      result: null,
      metaStats: {
        exp: 100,
        power: 100,
        popularity: -100
      },
      pitch: {
        pitched: false,
        faction: "BB",
        desc: "Ahem- Sir!\nOur engineers have developed a prototype energy core that could in a pinch keep the city lit for weeks without steam or gas.\nThe risk is an untested reaction control valve, but the rewards could be tremendous.",
        summary: "Should we approve a potentially risky prototype energy project to power the city in case of a blackout?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "Listen, that all sounds just great, but what if it goes haywire and blows up a factory?\nWhen it comes to manufacturing, I would rather see our emergency funds invested in reliable technology.\nLet the tinkerers tinker, but I want the city running.",
          modApproved: -2,
          descApproved: "Oh thats just great. Well, if it burns down half the city, dont come crying to me.",
          modRejected: 2,
          descRejected: "Good. Keep pumping that steam.",
        },
        BB: {
          faction: 'BB',
          desc: "This is a chance to leap forward.\nControlled risk is still risk, yes, but it could end the resource outages that choke us.",
          modApproved: 3,
          descApproved: "Excellent. We will light the streets with innovation.",
          modRejected: -1,
          descRejected: "We keep dancing around progress. The science is sound, but fine, remain in the dark.",
        },
        CC: {
          faction: 'CC',
          desc: 'Progress must not come at the cost of innocent civilians.\nIf the core malfunctions, the casualties could be horrific.',
          modApproved: -3,
          descApproved: "My duty is to protect lives first and foremost. The least i can do is submit a petition for a safety mechanism.",
          modRejected: 2,
          descRejected: "A wise choice. Not every bright idea, no matter how kind hearted it may seem at the outset, should be pursued.",
        },
        DD: {
          faction: 'DD',
          desc: "A desperate dragon is a dangerous friend.\nIf it works, good. If not, I do not want to clean up the firestorm.",
          modApproved: 0,
          descApproved: "Remind me to stay close to the shore, just in case i need to dip below the surface all of a sudden.",
          modRejected: 0,
          descRejected: "I think thats the right heading, maybe this can be reconfigured to be of use at sea? Or maybe we can use the tech to power a new kind of lighthouse?",
        },
        EE: {
          faction: 'EE',
          desc: "The Shapers taught us that power comes from patience and prudence, to look to alternatives, even strictly for emergencies, would be to abandon those principles.\nThis is not the way.",
          modApproved: -4,
          descApproved: "We must not betray our traditions for a fleeting spark and a few fairy lights.",
          modRejected: 4,
          descRejected: "Let those who seek wonder prove it with the tools we already have been given.",
        },
      }
    },
    {
      id: "A machine festival",
      idShort: 'festival_of_machines',
      result: null,
      metaStats: {
        exp: 100,
        power: 100,
        popularity: -100
      },
      pitch: {
        pitched: false,
        faction: "CC",
        desc: "Sir!\nThe filigree workers guild wants to host a city-wide festival celebrating our corps of inventors.\nIt may disrupt production for three days, but it would surely boost morale greatly.",
        summary: "Should we pause work for a morale-boosting festival of invention?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "A festival... sounds expensive.\nIf we can sell special access and souvenirs maybe it could pay for itself.\nBut i say we can find a better way to boost morale without halting production.",
          modApproved: -1,
          descApproved: "When your orders run late, i suspect you wont be in quite such a celebratory mood.",
          modRejected: 2,
          descRejected: "Excellent. Keep the wheels turning.",
        },
        BB: {
          faction: 'BB',
          desc: "A classic example of delayed output increase.\nI see the festival as a flywheel for innovation.\nOur colleagues are not merely cogs in a machine.",
          modApproved: 2,
          descApproved: "Wonderful. You will find me at the front enjoying the spectacle and networking new contacts.",
          modRejected: -1,
          descRejected: "I see that i misscalculated the value you place on the human element of our work. I hope you will reconsider when the burnout numbers start to climb.",
        },
        CC: {
          faction: 'CC',
          desc: 'My healing abilities can mend wounded bodies.\nBut this festival could remind our people why they fight and toil, healing their spirits.',
          modApproved: 4,
          descApproved: "Hope is fundamental to healing. Let us celebrate not only our achievements but also our resilience.",
          modRejected: -2,
          descRejected: "It would have been a small price to pay for a boost to morale. Now the debt will come due in the form of a restless city.",
        },
        DD: {
          faction: 'DD',
          desc: "A good party is worth a few days lull, as long as it does not leave the rudder unattended.\nI say we party for three days, and once we are back on course, we can assess the impact.",
          modApproved: 1,
          descApproved: "I have a bottle of the finest greaserum reserved for the occasion. I will be toasting to our inventors and to you, my lord.",
          modRejected: -1,
          descRejected: "A crying shame. Have i not told you that keeping the crew´s spirits low on a long voyage is how mutineers gain traction.",
        },
        EE: {
          faction: 'EE',
          desc: "Tradition values celebration, yes, but a tradition has deep roots to draw from.\nAny new festival or ceremony must have purpose that bind us to our heritage, else it is mere indulgence.",
          modApproved: -1,
          descApproved: "I shant attend myself, but if peace is kept, then perhaps this is acceptable.",
          modRejected: 1,
          descRejected: "A firm step back from drifting into frivolity.",
        },
      }
    },
    {
      id: "The silent treaty",
      idShort: 'silent_treaty',
      result: null,
      metaStats: {
        exp: 100,
        power: 100,
        popularity: -100
      },
      pitch: {
        pitched: false,
        faction: "EE",
        desc: "My lord!\nThe long neutral duke of the Northsteel mountains is now offering a secret non-aggression pact if we send envoys and give a few trade concessions.\n\nIt is quite elegant diplomacy with no bloodshed as long as our enemies remain in the dark about the whole affair.",
        summary: "Should we accept a quiet peace treaty?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "I would rather keep our bargaining chips close to the chest.\nA treaty that takes a concession sounds like we are getting the short end of the stick.",
          modApproved: -2,
          descApproved: "Peace on paper is a flimsy thing. Once steel and gunpowder are involved, it is the strongest that win, not the one dipsplaying the finest penmanship.",
          modRejected: 3,
          descRejected: "Let them come to us on our terms, we should not get tangled up in any attached strings.",
        },
        BB: {
          faction: 'BB',
          desc: "This opens up new opportunities for scientific collaboration.\nScience is proven to thrive when the borders are calm.",
          modApproved: 1,
          descApproved: "A wise investment in stability, if handled with care.",
          modRejected: -1,
          descRejected: "There are the undeniable risks of espionage and sabotage. I see the line of logic in refusing, but i hope for a day when we can work together without suspicion.",
        },
        CC: {
          faction: 'CC',
          desc: 'If these concessions impact our peoples access to medicine or basic needs, then i cannot support it.\nAnd what about the risks of Northsteel being dragged into the war alongside us if we sign this?',
          modApproved: -3,
          descApproved: "I would prefer to see a treaty that is more reciprocal, but if this is the best we can get, then i will put my hopes in it.",
          modRejected: 2,
          descRejected: "We have been at war for so long that the idea of peace is almost alien to us. But we must remember to look after our people first and not rush into it for the sake of it.",
        },
        DD: {
          faction: 'DD',
          desc: "A treaty is a useful shelter, but only if the other side intends to respect it.\nI say we agree and keep a keen eye on them.",
          modApproved: 0,
          descApproved: "I will send a scout vessel to make sure there are no knives aimed at our backs.",
          modRejected: 0,
          descRejected: "I do wish the mountain greaserum would be cheaper, if that had been the concession, i would have been more inclined to say yes.",
        },
        EE: {
          faction: 'EE',
          desc: "This is the kind of quiet power our ancestors preached.\nWe should accept peace while it is offered, even if it costs us a little standing.",
          modApproved: 5,
          descApproved: "I am sending my most trusted envoys to Northsteel with a gift of our finest craftsmanship as a token of goodwill.",
          modRejected: -5,
          descRejected: "Turning away from peace is a grave decision. I hope we are prepared for the consequences.",
        },
      }
    },
    {
      id: "The border blockade",
      idShort: 'border_blockade',
      result: null,
      metaStats: {
        exp: 100,
        power: 100,
        popularity: -100
      },
      pitch: {
        pitched: false,
        faction: "DD",
        desc: "Sir!\nA merchant convoy is seeking to sail through our territory uninspected.\nI say we send the whole damn fleet to verify their intent.",
        summary: "Should we enforce a strict blockade on a suspicious convoy?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "Blocking trade is a guaranteed way to kill our own profits.\nLet them pass under watch instead.\n\nWhats the worst they could do, smuggle a few contraband trinkets?",
          modApproved: -2,
          descApproved: "Good thing it wont be you who has to explain to the merchants why their goods are being held up. That headache is now on me.",
          modRejected: 3,
          descRejected: "Trade, shady and illicit as it may be, is the lifeblood of our economy. We should not turn away commerce without good reason.",
        },
        BB: {
          faction: 'BB',
          desc: "Safety first.\nIf there is any chance of sabotage or smuggling, we should not gamble with the route.",
          modApproved: 2,
          descApproved: "A wise precaution. Better to be secure than sorry.",
          modRejected: -1,
          descRejected: "Are you not even a little curious about what they are trying to sneak through?",
        },
        CC: {
          faction: 'CC',
          desc: 'A blockade is a blunt instrument that hurts everyone, but the risk of toxic substances or dangerous contraband slipping through is too great to ignore.\nI say we block the convoy and quarantine it thoroughly.',
          modApproved: 2,
          descApproved: "Good, I will make sure the quarantine is humane. We are not trying to punish traders, just protect our people and environment.",
          modRejected: -2,
          descRejected: "If it turns out to carry a pathogen that could have been contained with a simple inspection, i hope you are ready to take that responsibility.",
        },
        DD: {
          faction: 'DD',
          desc: "The sea route is our foundation.\nI would rather hold the line than let a snake slip through our walls.",
          modApproved: 3,
          descApproved: "Im loading the cannons and readying the boarding parties. We will make sure they know we mean business.",
          modRejected: -2,
          descRejected: "I hope you have a sound reason for this, the damage to our reputation will be worse than any contraband they might have been trying to sneak through.",
        },
        EE: {
          faction: 'EE',
          desc: "A blockade can be righteous when it protects the people.\nBut let it not be an excuse for cruelty or tribute.",
          modApproved: 1,
          descApproved: "So long as it is done with honor and justice, I can accept it.",
          modRejected: -1,
          descRejected: "Do not let fear make you unjust.",
        },
      }
    },
  ];
  $scope.debates = JSON.parse(JSON.stringify(originalDebates));

  $scope.discussions = {
    'care_for_the_wounded': {
      id: "Clocktoria approaches you between sessions",
      idShort: 'clocktoria_discussion_1',
      result: null,
      metaStats: {},
      pitch: {
        pitched: false,
        faction: "CC",
        chain: [
          {
            desc: "My lord, i have been meaning to speak with you about something rather important.\nI know you are busy, but it has been weighing on my mind and i would be grateful for a moment of your time.",
            yes: "Of course, Clocktoria. What is it that you wanted to discuss?",
            no: "I'm sorry, Clocktoria, but I don't have time for this right now."
          },
          {
            desc: "Thank you, my lord. I have been hearing some troubling reports from the front lines.\nOur soldiers are facing not only the enemy but also harsh conditions and dwindling supplies.\nI fear that if we do not address these issues soon, we may lose the morale of our troops.",
            yes: "What do you suggest we do to improve the situation for our soldiers?",
            no: "I appreciate your concern, Clocktoria, but we have more pressing matters to attend to at the moment."
          },
          {
            desc: "I believe we should prioritize improving the living conditions for our soldiers.\nThis could include better shelter, more nutritious food, and regular rest periods.\nBy taking care of our troops, we can boost their morale and ensure they are better prepared to face the challenges ahead.",
            yes: "That sounds like a reasonable plan, I will allocate resources to improve the conditions for our soldiers.",
            no: "While I understand your intentions, we need to focus on our strategic objectives first. We will consider improving conditions for our soldiers when we have more resources available."
          }
        ]
      },
    },
    'streamline_the_factories': {
      id: "Bella requests a meeting about output",
      idShort: 'bella_discussion_1',
      result: null,
      metaStats: {},
      pitch: {
        pitched: false,
        faction: "BB",
        chain: [
          {
            desc: "My lord, our industrial output is inconsistent. I believe there are improvements we can make to increase productivity without sacrificing quality.",
            yes: "Tell me what you have in mind.",
            no: "Not now, Bella. I need to handle the current crisis first."
          },
          {
            desc: "A scientific audit of the factories would reveal bottlenecks and waste. With modest investment, we can redesign the workflow to produce more with less effort.",
            yes: "Proceed with the audit, and suggest the best improvements.",
            no: "I cannot spare the resources. We must accept the current output for now."
          },
          {
            desc: "Excellent. I will prepare a proposal for the top three interventions. They will preserve our workforce and increase efficiency, not simply push them harder.",
            yes: "Very well. I trust your judgment on this.",
            no: "I appreciate the offer, but we will not change the factories at this time."
          }
        ]
      },
    },
    'dack_discussion_x': {
      id: "Dack has a look of determination on his face as he approaches",
      idShort: 'dack_discussion_x',
      result: null,
      metaStats: {},
      pitch: {
        pitched: false,
        faction: "DD",
        chain: [
          {
            desc: "My lord, This is the last straw im sorry to say. Im setting sail, never to return. I have been asking for your support for years and you have always said no.\nI cant wait around for you to change your mind, so im going to do it myself.",
            yes: "Dack, wait! I want to hear you out before you make such a drastic decision.",
            no: "I understand your frustration, Dack, but I cannot support a decision that could endanger the fleet and our people. Please reconsider."
          },
          {
            desc: "Cleary you have no sense of adventure, or you would have said yes by now. I have a crew ready and a ship im not wasting my life waiting for you to get on board.",
            yes: "Let's work together to make this happen safely.",
            no: "I urge you to reconsider for the sake of the crew and the realm."
          },
          {
            desc: "*Dack turns to leave*",
            no: "Farewell, Dack. I hope you find what you're looking for out there.",
          }
        ]
      },
    },
    'prepare_the_expedition': {
      id: "Dack wants your blessing for the next voyage",
      idShort: 'dack_discussion_1',
      result: null,
      metaStats: {},
      pitch: {
        pitched: false,
        faction: "DD",
        chain: [
          {
            desc: "My lord, the crew is eager to set sail beyond the Fog Sea again. We need your blessing to outfit the expedition properly.",
            yes: "What do you need to make it safe?",
            no: "Not now. We have more urgent land matters to resolve."
          },
          {
            desc: "A stronger hull, more experienced sailors, and a reliable long-range chart are the difference between glory and disaster.\nIf you provide these, I will guarantee a safe return or at least a story worth remembering.",
            yes: "Allocate the resources and make the preparations.",
            no: "I cannot risk the fleet on another uncertain voyage."
          },
          {
            desc: "Excellent, my lord. With your support, the expedition will set off as soon as the wind is favorable.\nIf you would rather wait, I can keep the crew ready until the time is right.",
            yes: "Go ahead. Bring back whatever you find.",
            no: "Wait for a better moment."
          }
        ]
      },
    },
    'honor_the_ancestors': {
      id: "Enoch seeks your counsel about a new decree",
      idShort: 'enoch_discussion_1',
      result: null,
      metaStats: {},
      pitch: {
        pitched: false,
        faction: "EE",
        chain: [
          {
            desc: "My lord, the Shapers taught us to honor the past. There is a new proposal that would alter one of our oldest customs.",
            yes: "Explain the proposal and your concerns.",
            no: "I don't have time for this conversation right now."
          },
          {
            desc: "The proposal would change how we select our festival leaders. Some say it will bring efficiency, but I fear it will weaken the bond our people have with tradition.",
            yes: "We need to balance tradition with practical needs. What is your recommendation?",
            no: "We can revisit this later when I am less occupied."
          },
          {
            desc: "I advise caution. Tradition is not merely ritual; it is the framework that holds our community together.\nIf we tamper with it too quickly, we may fracture the very spirit we are trying to preserve.",
            yes: "Then maintain the tradition and look for more gradual improvements.",
            no: "If the change proves necessary, I will consider it carefully."
          }
        ]
      },
    }
  };

  $scope.consequences = [
    {
      condition: function (factions) { return factions.AA < 1; },
      title: 'Abrams Stovevalve is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.BB < 1; },
      title: 'Bella MacGuffin is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.CC < 1; },
      title: 'Clocktoria III is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.DD < 1; },
      title: 'Dack Rowley is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.EE < 1; },
      title: 'Enoch Diptych is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: ''
    },
    {
      condition: function (factions, metaStats) { return metaStats.popularity < 1; },
      title: 'Your popularity rating is dire',
      desc: 'You have completely lost the support of the people of the realm.\nYour name is now synonymous with failure and incompetence.',
      bg: ''
    },
    {
      condition: function (factions, metaStats) { return metaStats.power < 1; },
      title: 'Your military strength is abysmal',
      desc: 'Your recent decisions have left the realm vulnerable and exposed.\nOur enemies, emboldened by our weakness, are amassing their forces.',
      bg: ''
    },
    {
      condition: function (factions, metaStats) { return metaStats.power > 800; },
      title: 'Your military strength is formidable',
      desc: 'Your recent decisions have strengthened the realm and inspired confidence in our forces.\nOur enemies fear your power and respect your leadership.',
      bg: ''
    },
    {
      condition: function (factions, metaStats) { return metaStats.popularity > 800; },
      title: 'The people of the realm praise your name',
      desc: 'Your recent choices have not gone unnoticed by the people of the realm.\nThere are many who speak highly of your leadership.',
      bg: ''
    },
    {
      condition: function (factions, metaStats) { return metaStats.popularity < 100; },
      title: 'The people of the realm demand more from you',
      desc: 'Your recent choices have not gone unnoticed by the people of the realm.\nIf you fail to meet these expectations, you risk a swift fall from grace.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.AA > 8; },
      title: 'Abrams Stovevalve is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Abrams Stovevalve, a powerful figure in the industry.\nThe next time you would lose standing with him, he will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.BB > 8; },
      title: 'Bella MacGuffin is your devoted ally',
      desc: 'Your suport for her has earned you the loyalty of Bella MacGuffin, a titan of science.\nThe next time you would lose standing with her, she will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.CC > 8; },
      title: 'Clocktoria III is your devoted ally',
      desc: 'Your suport for her has earned you the loyalty of Clocktoria III, a medical marvel.\nThe next time you would lose standing with her, she will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.DD > 8; },
      title: 'Dack Rowley is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Dack Rowley, a seasoned veteran.\nThe next time you would lose standing with him, he will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.EE > 8; },
      title: 'Enoch Diptych is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Enoch Diptych, unshakable in his convictions.\nThe next time you would lose standing with him, he will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return Object.values(factions).reduce(function (sum, v) { return sum + v; }, 0) < -5; },
      title: 'The council turns against you',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.AA > 14 && !$scope.devotedFlags.AA; },
      title: 'Abrams Stovevalve is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Abrams Stovevalve, a powerful figure in the industry.\nThe next time you would lose standing with him, he will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.BB > 14 && !$scope.devotedFlags.BB; },
      title: 'Bella MacGuffin is your devoted ally',
      desc: 'Your suport for her has earned you the loyalty of Bella MacGuffin, a titan of science.\nThe next time you would lose standing with her, she will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.CC > 14 && !$scope.devotedFlags.CC; },
      title: 'Clocktoria III is your devoted ally',
      desc: 'Your suport for her has earned you the loyalty of Clocktoria III, a medical marvel.\nThe next time you would lose standing with her, she will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.DD > 14 && !$scope.devotedFlags.DD; },
      title: 'Dack Rowley is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Dack Rowley, a seasoned veteran.\nThe next time you would lose standing with him, he will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.EE > 14 && !$scope.devotedFlags.EE; },
      title: 'Enoch Diptych is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Enoch Diptych, unshakable in his convictions.\nThe next time you would lose standing with him, he will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return Object.values(factions).reduce(function (sum, v) { return sum + v; }, 0) < -5; },
      title: 'The council turns against you',
      desc: 'Your decisions have alienated the council members and eroded their trust in your leadership.\nYou will find itextremely difficult to regain their support.\n\nYour authority is severely undermined.',
      bg: ''
    },
  ];

  $scope.crisisEvents = [
    {
      id: "Crisis: Enemy at the gates!",
      idShort: 'crisis_enemy_at_the_gates',
      desc: 'The forces of the Argentum leauge is mustering at the city wall. There are several dreadnaughts and stingcrank batteries primed and ready to strike.',
      stat: "loyalty",
      dc: 8,
      resolved: null,
      rewardStat: 'power',
      rewardVal: 500,
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
    {
      id: "Crisis: Flooded Foundry",
      idShort: 'crisis_flooded_foundry',
      desc: 'Heavy rain has burst the canal walls and flooded the eastern foundry. Critical production is halted until the water is cleared and the ovens are safe.',
      stat: "power",
      dc: 300,
      resolved: null,
      rewardStat: 'popularity',
      rewardVal: 400,
      results: {
        WORLD: {
          passCheck: "NULL",
          failedCheck: "NULL"
        },
        AA: {
          passCheck: "I got the furnaces back online with minimal delay.\nBut next time this happens, please send someone else. My waistcoat will never fit right again due to the water damage.",
          failedCheck: "The revenue lost from the production halt is staggering. This is a disaster for business.",
        },
        BB: {
          passCheck: "I used the downtime to conduct a thorough inspection. The system is safer than ever now.",
          failedCheck: "If i had only known, this would have been preventable with a proper drainage design.\nAs it stands, the damage is extensive and the risk of future floods is still high.",
        },
        CC: {
          passCheck: "The workers were kept safe and the site was evacuated without further injury.",
          failedCheck: "So many good people were trapped in the flood. This should never have happened.",
        },
        DD: {
          passCheck: "I braved the river and cleared the way. That water did not know who it was dealing with.",
          failedCheck: "The flood had us beat this time, the waters is a fickle force but hopefully it will remember my name for next time.",
        },
        EE: {
          passCheck: "The Shapers favour the steady hand. And with that steady hand I turned a disaster into a lesson.",
          failedCheck: "Neglect, is not the same as reverence. Preservation of the old canal system should have included more upkeep.",
        },
      }
    },
    {
      id: "Crisis: Sickness in the Barracks",
      idShort: 'crisis_sickness_barracks',
      desc: 'A fever is spreading through the soldier barracks. If left unchecked it may decimate the garrison and leave the city walls undefended.',
      stat: "loyalty",
      dc: 9,
      resolved: null,
      rewardStat: 'power',
      rewardVal: 30,
      results: {
        WORLD: {
          passCheck: "NULL",
          failedCheck: "NULL"
        },
        AA: {
          passCheck: "The boys are healthy again and fit for fight.\nLuckily i just ordered the eggheads in the lab to start working on a new vaccine last week, so we had something to throw at it.",
          failedCheck: "We lost too many. This is a costly failure no matter how you look at it.",
        },
        BB: {
          passCheck: "The quarantine worked. The infection curve has been squashed flat.",
          failedCheck: "The outbreak was a failure of containment. We need to be better at isolating the sick in the future.",
        },
        CC: {
          passCheck: "I healed the sickness but we need keep vigilance high for new strains and mutations.",
          failedCheck: "I did all i could, but the disease was too strong and had spread too fast. All i could offer was palliative care.",
        },
        DD: {
          passCheck: "The soldiers are back on their feet and itching for action.\nWe have our methods for dealing with sickness aborad, and they work just fine land-side too.",
          failedCheck: "The sickness was a tough opponent, but we fought it with everything we had. We lost the battle, but the war is not over.",
        },
        EE: {
          passCheck: "Leaning on traditional remedies and proper care proved once again that the old ways still hold value.",
          failedCheck: "The failure weighs heavily. May the Shapers keep them.",
        },
      }
    },
    {
      id: "Crisis: Saboteur in the Stores",
      idShort: 'crisis_saboteur_stores',
      desc: 'Someone has poisoned a shipment of supplies bound for the front. The culprit must be found before more goods are ruined and trust is destroyed.',
      stat: "popularity",
      dc: 600,
      resolved: null,
      rewardStat: 'power',
      rewardVal: 400,
      results: {
        WORLD: {
          passCheck: "NULL",
          failedCheck: "NULL"
        },
        AA: {
          passCheck: "Our supply chain is intact. The traitor has been... dealt with, and the stores are safe again.",
          failedCheck: "Damn it all to hell. This is a nightmare for business and a betrayal of trust that I will not forget easily.",
        },
        BB: {
          passCheck: "I ran a toxtrace and triangulated the origin of the poison to its source and eliminated the threat.",
          failedCheck: "We failed to secure the chain. Unless we synthesize serum, the next attack will be worse.",
        },
        CC: {
          passCheck: "Toxic substances were neutralized and the stores are safe again.\nBut the culprit is still out there and must be found.",
          failedCheck: "This is a tragedy for the people who rely on those supplies. I hope we can find the saboteur and make sure this never happens again.",
        },
        DD: {
          passCheck: "A fine chase and a worthy catch. The stores are safe once more.",
          failedCheck: "Poision! A cowards weapon. We should have had better eyes in the crowsnest.",
        },
        EE: {
          passCheck: "By justice, trust is restored. The saboteur will not slip the gallows.",
          failedCheck: "I was unable to handle the assignment, but i vow to pursue retribution.",
        },
      }
    },
    {
      id: "Crisis: The Great Winter Storm",
      idShort: 'crisis_great_winter_storm',
      desc: 'A savage winter storm has descended earlier than expected. Roads are blocked, supply wagons stalled, and the city could freeze without swift action.',
      stat: "power",
      dc: 666,
      resolved: null,
      rewardStat: 'popularity',
      rewardVal: 600,
      results: {
        WORLD: {
          passCheck: "NULL",
          failedCheck: "NULL"
        },
        AA: {
          passCheck: "Things are rough out there but we are providing our entire product line to help weather the storm.\nThe city is safe and warm.",
          failedCheck: "I dont have the resources to deal with this. The winter sortiment is not set to start production for another month.",
        },
        BB: {
          passCheck: "I have gathered as many people as i can in the boilerworks.\nThe population is warm and accounted for.",
          failedCheck: "Why wasnt this anticipated?\nI have been tracking weather patterns for years and this should have been on the charts.",
        },
        CC: {
          passCheck: "I have provided hot meals and blanket to everyone in need.\nThe storm is harsh, but we are taking care of our people.",
          failedCheck: "Too many suffered in the cold. This weighs heavily on my mechanical heart.",
        },
        DD: {
          passCheck: "I rode the gale and saw every gate secured.\nThere isnt a storm sired that can scare me. The city is safe.",
          failedCheck: "I cannot fight the wind, and i cannot shoot the snow.\nI think this one is a bit out of my league.",
        },
        EE: {
          passCheck: "We have endured winter upon winter and the Shapers have always seen us through.\nWe will weather this storm as well.",
          failedCheck: "We ignored the old warnings. The storm is our reproach.\nI must do more to remind us of the lessons of the past.",
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

  //  $scope.setCurrentCrisis($scope.crisisEvents[0]);
  $scope.resolveCrisis = function () {
    if (!$scope.currentCrisis || !$scope.crisisSolver) {
      console.warn("resolveCrisis called without a selected crisis or solver");
      return false;
    }

    var solverValue = getSafeNumber($scope.factions[$scope.crisisSolver]);
    var result = "fail";

    if ($scope.currentCrisis.stat === "loyalty") {
      result = solverValue >= getSafeNumber($scope.currentCrisis.dc) ? "pass" : "fail";
    } else if ($scope.currentCrisis.stat === "power") {
      result = getSafeNumber($scope.metaStats.power) + solverValue * 10 >= getSafeNumber($scope.currentCrisis.dc) ? "pass" : "fail";
    } else if ($scope.currentCrisis.stat === "popularity") {
      result = getSafeNumber($scope.metaStats.popularity) + solverValue * 10 >= getSafeNumber($scope.currentCrisis.dc) ? "pass" : "fail";
    } else {
      console.warn("Unknown crisis stat:", $scope.currentCrisis.stat);
    }

    $scope.currentCrisis.resolved = result;
    return result;
  };

  $scope.setStart = function (value) {
    $scope.start = value;
  };

  $scope.setHints = function (value) {
    $scope.hints = value;
  };

  var scrubFactionFromDebates = function (faction) {
    for (var i = 0; i < $scope.debates.length; i++) {
      if ($scope.debates[i].pitch.faction === faction) {
        delete $scope.debates[i];
      }
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

  // Count how many times debates have advanced
  $scope.startDebateCount = 0;

  $scope.maybeTriggerCrisisEvent = function () {
    $scope.startDebateCount = ($scope.startDebateCount || 0) + 1;
    if ($scope.startDebateCount % CRISIS_FREQUENCY === 0) {
      if (!$scope.crisisEvents || $scope.crisisEvents.length === 0) return false;
      var idx = Math.floor(Math.random() * $scope.crisisEvents.length);
      var crisis = $scope.crisisEvents.splice(idx, 1)[0];
      $scope.setCurrentCrisis(crisis);
      $scope.setCrisisSolver(null);
      return true;
    }
    return false;
  };

  $scope.setCurrentArgument = function (argument) {
    if (!argument || !$scope.currentDebate || !$scope.currentDebate.arguments || !$scope.currentDebate.arguments[argument]) {
      $scope.currentSpeaker = null;
      $scope.currentArgument = null;
      return;
    }
    $scope.currentSpeaker = argument.toString();
    $scope.currentArgument = $scope.currentDebate.arguments[argument];
  };

  function mergeMeta(objA, objB) {
    var mergedObj = {};
    var allKeys = new Set(Object.keys(objA || {}).concat(Object.keys(objB || {})));
    allKeys.forEach(function (key) {
      mergedObj[key] = getSafeNumber(objA[key]) + getSafeNumber(objB[key]);
    });
    $scope.metaStats = mergedObj;
  }

  function applyDecision(modKey, result) {
    if (!$scope.currentDebate || !$scope.currentDebate.arguments) {
      console.warn("applyDecision called without an active debate");
      return;
    }

    Object.keys($scope.factions).forEach(function (faction) {
      var change = getArgumentChange($scope.currentDebate.arguments[faction], modKey);
      if ($scope.devotedFlags[faction] && change < 0) {
        console.log("Devoted flag for " + faction + " prevented a change of " + change, $scope.devotedFlags);
        delete $scope.devotedFlags[faction];
        return;
      }
      $scope.factions[faction] += change;
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
    $scope.updateDevotedFlags();
  };

  $scope.updateDevotedFlags = function () {
    $scope.currentConsequences.forEach(function (cons) {
      if (!cons.title || !/your devoted ally/i.test(cons.title)) return;
      Object.keys($scope.name).forEach(function (faction) {
        if (cons.title.indexOf($scope.name[faction]) !== -1) {
          $scope.devotedFlags[faction] = true;
        }
      });
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

    const memoId = JSON.parse(JSON.stringify($scope.currentDebate.idShort));

    $scope.debates = $scope.debates.filter(function (item) {
      return item.idShort != $scope.currentDebate.idShort;
    });

    $scope.currentDebate = {};
    $scope.currentArgument = null;
    $scope.currentSpeaker = null;

    $scope.checkForConsequences();

    // Trigger specific dialogue or event following the current debate, either based on variables, or the previous debate.
    let newDebate;

    // Direct responses
    if ($scope.factions.DD < 0 && $scope.discussions.dack_discussion_x) {
      newDebate = JSON.parse(JSON.stringify($scope.discussions.dack_discussion_x));
      delete $scope.discussions.dack_discussion_x;
      delete $scope.factions.DD;
      scrubFactionFromDebates("DD");
      $scope.setCurrentDebate(newDebate);
      return;
    }

    // Side story 
    switch (memoId) {
      case 'NULL':
        newDebate = JSON.parse(JSON.stringify($scope.discussions.care_for_the_wounded));
        $scope.setCurrentDebate(newDebate);
        return;
      case 'farewell_to_arms':
        newDebate = JSON.parse(JSON.stringify($scope.discussions.honor_the_ancestors));
        $scope.setCurrentDebate(newDebate);
        return;
      case 'greenlight_gambit':
        newDebate = JSON.parse(JSON.stringify($scope.discussions.streamline_the_factories));
        $scope.setCurrentDebate(newDebate);
        return;
      case 'hard_days_work':
        newDebate = JSON.parse(JSON.stringify($scope.discussions.honor_the_ancestors));
        $scope.setCurrentDebate(newDebate);
        return;

      default:
        break;
    }

    // Possibly trigger a crisis
    $scope.maybeTriggerCrisisEvent();

    if ($scope.debates.length > 0) {
      $scope.setCurrentDebate($scope.debates[Math.floor(Math.random() * $scope.debates.length)]);
    }
  };

  $scope.setCurrentDebate($scope.debates[Math.floor(Math.random() * $scope.debates.length)]);
}]);
