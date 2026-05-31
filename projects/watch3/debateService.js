  // Established characters:
  // AA - Abrams Stovevalve, CEO of Stovevale industries LLC, a ruthless businessman. Always chasing profit and upwards trending numbers. 
  // BB - Bella MacGuffin, Head scientist at the Sprocket science center, a prodigy in many fields. Always wants solid data and sound reasons. 
  // CC - Clocktoria III, Head doctor at the Gearspring hospital, a clockwork automaton designed for compassion and healing. Always wheighs in human costs and safety. 
  // DD - Dack Rowly, Honored fellow of the adventurers guild, a devil-may-care sailor. Always encourages adventure and bold actions.
  // EE - Enoch Diptych, Lord master of tradition and cermony. Always has a conservative outlook and invokes the ainchent traditions of the Shapers, 

app.service('debateService', function() {
  this.originalDebates = [
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
        desc: "My lord!<br/>We have some fantastic new weapons for our troops. I suggest we deploy them in the field at once!<br/><br/>I do admit, there are still some small issues to iron out, some eyebrows might get singed or some such.<br/>But what better way to improve other than a proper field test?",
        summary: "Should we give soldiers new powerful but potentialy volotile weapons?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "The eggheads in the lab assure me these new weapons would be aboslutely devestating on the battlefield.<br/>We just need to let our soldiers know to not touch the hot end and stay well clear before launching it.",
          modApproved: 3,
          descApproved: "Great choice my lord, i will have the arms shipped to the front on the double - lets show them who they are messing with.",
          modRejected: -4,
          descRejected: "I am dissapointed, i have to admit.<br/>Weeks of research gone to waste. Need i remind you there´s a war on out there?! Our boys need bigger guns!<br/>So what if they might explode, as long as they take some of the enemy with them thats a win in my book.",
        },
        BB: {
          faction: 'BB',
          desc: "While i do not agree with putting our troops at further risk, these are desperate times.<br/>I would be willing to at least test these new inventions under scrict supervision in non-strategic engagements.",
          modApproved: 1,
          descApproved: "I hope this does turn the tide of battle rather than showering the battlefield with what remains of our own men...",
          modRejected: -1,
          descRejected: "I hope you know what you are doing.We cant sit idle forever, sooner or later we need to act - perhaps it would have been better to do so while we had a choice?",
        },
        CC: {
          faction: 'CC',
          desc: 'Absolutely unthinkable!<br/>Our fighters are alreday risking life and limb facing the enemy.<br/>"Singed eyebrows"? Blasted apart more likely.<br/>The last thing they need is for their own weapons to jam or heaven forbid blow them into smithereens.',
          modApproved: -4,
          descApproved: "These are indeed dark times, where lives on either side of a trench are so easily gambled.",
          modRejected: 4,
          descRejected: "Empathy. Thats how we will win not only this war but rightfully earning the victory and peace that follows.",
        },
        DD: {
          faction: 'DD',
          desc: "I have no ship in this race - or rather no knife in this gunfight.<br/>While i´ll be the first to tell you that giving the barrel of monkeys explosive bananas is asking for carnage, maybe thats just the kick we need to turn the tide.<br/>I´ll let you light this fuse entirely on your own mate.",
          modApproved: 0,
          descApproved: "As i said, i trust you on this.",
          modRejected: 0,
          descRejected: "As i said, i trust you on this.",
        },
        EE: {
          faction: 'EE',
          desc: "I dont see why such newfangled arms are needed when the scriptures tell us exactly what strategem to apply to break the current situation on the front.<br/><br/>Using the munitions we already posess i have no doubt we can dislodge this particlular clog as well as your predecessors did ages ago.",
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
        desc: "Sir!<br/>I have discovered a clerical error that should be simple enough to correct.<br/>There are a number of holy days that are currently not officcially marked as rest days.<br/>Should be a simple enough problem to solve.",
        summary: "Should we add more rest days for your people, possibly lowering production.",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "Frankly i dont see the point in changing a thing.<br/>No wait!<br/>We should in fact reduce the rest days we have already to increase production!",
          modApproved: -1,
          descApproved: "If anyone comes whining to me about this when munitions run low I will just tell them im having a religious holidy.",
          modRejected: 2,
          descRejected: "Good. Im already drafting a suggestion to abolish rest days all together.",
        },
        BB: {
          faction: 'BB',
          desc: "Relaxation is an important factor for quality work.<br/>However, basing something like that on archaic theology seems suboptimal.<br/>I would rather see a scientific inquery into what days would give the greatest return as rest days.",
          modApproved: -1,
          descApproved: "There is a non-zero chance traditions are tested by reality to the point that they match up to theory - lets find out.",
          modRejected: 1,
          descRejected: "A smart decicion. Giving rights like these should not be done without evidence.",
        },
        CC: {
          faction: 'CC',
          desc: 'Obviously the working man and woman should be well rested!<br/>While i dont look to religion myself, i think its a splendid device to make sure the common man remembers to relax and unwind.',
          modApproved: 5,
          descApproved: "With the workers enjoying the holy days, we will have to re-double our efforts to keep them safe.",
          modRejected: -5,
          descRejected: "The term heartbroken doesnt sit right for someone without a real heart, but it is the closest to how i feel hearing this.",
        },
        DD: {
          faction: 'DD',
          desc: "A ship cant set sail if the crew is sleeping in, but neither if they are whipped into unconciousnes.<br/>Let the men rest a bit i say.",
          modApproved: 2,
          descApproved: "And with that on the books, i think i will go enjoy a bit of a holy day myself. In my bunkroom.",
          modRejected: -2,
          descRejected: "'And down came the whip, with a crack and a smack.<br/>Anchors away on that ship, to the horizon and back.<br/>And beyond! ... '",
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
        desc: "My lord, i must bring an urgent matter to your attention.<br/>Several cases of gear-fever have been reported among workers at the smelting districts.<br/>I am proposing mandatory health screenings for all factory workers before they are permitted on the floor.<br/><br/>Left unchecked this could spread well beyond the factory gates.",
        summary: "Should we impose mandatory health screenings on factory workers to contain a gear-fever outbreak?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "Mandatory screenings? Do you have any idea what that does to a production schedule?<br/>Every hour my workers spend standing in some queue is an hour they are not at their post.<br/>A little cough never stopped a man from pulling a lever.",
          modApproved: -3,
          descApproved: "Fine. But i am sending the bill for lost output directly to the hospital.",
          modRejected: 3,
          descRejected: "A sensible call. Factories run on sweat, not on doctor´s certificates.",
        },
        BB: {
          faction: 'BB',
          desc: "The data on gear-fever transmission is quite clear. Early screening interrupts the contagion chain before it becomes exponential.<br/>I would in fact suggest we go further and publish the findings so the science is on record.",
          modApproved: 2,
          descApproved: "Excellent. I will prepare a standardised testing protocol by end of week.",
          modRejected: -1,
          descRejected: "A missed opportunity. We will be back here in a month with far worse numbers, i assure you.",
        },
        CC: {
          faction: 'CC',
          desc: "A single sick worker can infect a floor of fifty before symptoms are even visible.<br/>These are not just employees, they are people with families who go home each evening.<br/>We have both the means and the obligation to protect them.",
          modApproved: 4,
          descApproved: "Thank you. I will have the screening stations staffed and operational within the week.",
          modRejected: -5,
          descRejected: "I see. Then i hope the cost of inaction proves lighter than i fear.",
        },
        DD: {
          faction: 'DD',
          desc: "You would not let a sailor with rot-lung board a vessel and expect a safe voyage.<br/>A sick crew is a slow crew, and a slow crew is a dead crew.<br/>Cost what it costs, i say - patch the hull before she takes on water.",
          modApproved: 1,
          descApproved: "Good. The sensible call usually is the unpopular one.",
          modRejected: -1,
          descRejected: "Your call. I just hope the ship stays afloat.",
        },
        EE: {
          faction: 'EE',
          desc: "The Shapers teach that a community which tends to its weakest members is a community that endures.<br/>I am not generally one for modern medicine, but even the oldest texts speak of isolating the afflicted.<br/>This is not innovation - it is ancient wisdom wearing a new coat.",
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
        desc: "My lord, i bring you an opportunity of historic proportions.<br/>A pressurised steam conduit running from the main boiler district straight through the Tinker´s Quarter would power the entire eastern city grid.<br/>Yes, a number of residents would need to be relocated. But the economic output would be staggering.",
        summary: "Should we demolish the Tinker's Quarter to build a steam conduit that would power the eastern city?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "The numbers are irrefutable. Within three years the conduit pays for itself, including relocation costs.<br/>The Tinker´s Quarter is a charming relic but it is sitting on top of a fortune.<br/>Progress does not wait for sentiment.",
          modApproved: 4,
          descApproved: "Magnificent. I will have my engineers break ground by the end of the month.",
          modRejected: -4,
          descRejected: "A shame. We just handed a generation of prosperity to whoever is bold enough to build it next.",
        },
        BB: {
          faction: 'BB',
          desc: "The engineering case is sound - a pressurised conduit of this scale is technically achievable.<br/>I would insist on independent stress calculations and a full evacuation model before construction begins.<br/>Done correctly, this is a genuine leap forward.",
          modApproved: 1,
          descApproved: "I will want full access to the structural data throughout the build.",
          modRejected: -1,
          descRejected: "Understandable. The risk calculus was not in its favour.",
        },
        CC: {
          faction: 'CC',
          desc: "Relocation costs. That is a very tidy phrase for tearing people´s lives apart.<br/>Many of those residents have nowhere else to go. Disruption of this scale causes illness, grief, and worse.<br/>I cannot in good conscience support this.",
          modApproved: -3,
          descApproved: "Then i ask that you at least fund a proper relocation support programme. These people deserve better than a cart and a direction.",
          modRejected: 3,
          descRejected: "Thank you. Some things are not measured in output figures.",
        },
        DD: {
          faction: 'DD',
          desc: "A new route is a new route. Whether it is a sea lane or a steam pipe, the question is the same - what do you gain and what do you lose.<br/>The Tinker´s Quarter has good bones. But so did half the ports i´ve seen paved over for a new dock.<br/>Your call, as ever.",
          modApproved: 1,
          descApproved: "Bold move. I have seen bolder ones pay off.",
          modRejected: 0,
          descRejected: "Steady as she goes, then.",
        },
        EE: {
          faction: 'EE',
          desc: "The Tinker´s Quarter has stood for two hundred years.<br/>Every cobblestone carries the history of this city and of the people who built it.<br/>No steam pipe - however impressive - is worth the erasure of that heritage. Not to me. Not to the Shapers.",
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
        desc: "My lord, i have a proposal that is equal parts audacious and overdue.<br/>Beyond the Fog Sea our charts simply end with the words 'here be dragons'.<br/>I am asking for funding and a crew to go and find out if that is actually true.<br/><br/>New trade routes, new resources, new allies. Or nothing. But we´ll know.",
        summary: "Should we fund an expedition to chart the uncharted territories beyond the Fog Sea?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "Uncharted territories mean untapped markets.<br/>If there are people beyond the Fog Sea they need goods, and if there aren´t, there are certainly resources.<br/>This is not an adventure, it is an investment.",
          modApproved: 2,
          descApproved: "I want first refusal on any trade concessions the expedition secures. In writing.",
          modRejected: -1,
          descRejected: "Short-sighted. Someone else will chart it and we will be buying their maps.",
        },
        BB: {
          faction: 'BB',
          desc: "From a scientific standpoint this is one of the most compelling proposals i have heard in years.<br/>Unknown ecosystems, geological formations, atmospheric phenomena.<br/>Whatever is out there, we will learn something extraordinary.",
          modApproved: 3,
          descApproved: "I am sending two of my researchers with the crew whether you like it or not.",
          modRejected: -2,
          descRejected: "A setback for knowledge. I will be petitioning again next year.",
        },
        CC: {
          faction: 'CC',
          desc: "I confess the prospect of new medicinal plants and untested remedies rather excites me.<br/>Though i do worry about the health risks to the crew - fog sickness is poorly understood.<br/>If you proceed, please ensure a properly stocked medical officer is aboard.",
          modApproved: 1,
          descApproved: "I will prepare a comprehensive medical kit and a list of symptoms to watch for.",
          modRejected: -1,
          descRejected: "Very well. Though i do wish we knew what was out there.",
        },
        DD: {
          faction: 'DD',
          desc: "I have been waiting twenty years for someone to say yes to this.<br/>Every sailor worth their salt has stared at the edge of a chart and felt it.<br/>The sea does not end at the edge of what we know. Neither should we.",
          modApproved: 4,
          descApproved: "I will have a crew assembled and a ship provisioned inside a fortnight. You will not regret this.",
          modRejected: -5,
          descRejected: "Aye. I´ve heard that before.<br/>I´ll be at the docks if you change your mind.",
        },
        EE: {
          faction: 'EE',
          desc: "The Shapers charted what they charted for a reason.<br/>There is a comfort and a wisdom in knowing one´s boundaries.<br/>Venturing beyond the Fog Sea is not exploration - it is hubris dressed in oilskins.",
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
        desc: "Ahem- Sir!<br/>Our engineers have developed a prototype energy core that could in a pinch keep the city lit for weeks without steam or gas.<br/>The risk is an untested reaction control valve, but the rewards could be tremendous.",
        summary: "Should we approve a potentially risky prototype energy project to power the city in case of a blackout?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "Listen, that all sounds just great, but what if it goes haywire and blows up a factory?<br/>When it comes to manufacturing, I would rather see our emergency funds invested in reliable technology.<br/>Let the tinkerers tinker, but I want the city running.",
          modApproved: -2,
          descApproved: "Oh thats just great. Well, if it burns down half the city, dont come crying to me.",
          modRejected: 2,
          descRejected: "Good. Keep pumping that steam.",
        },
        BB: {
          faction: 'BB',
          desc: "This is a chance to leap forward.<br/>Controlled risk is still risk, yes, but it could end the resource outages that choke us.",
          modApproved: 3,
          descApproved: "Excellent. We will light the streets with innovation.",
          modRejected: -1,
          descRejected: "We keep dancing around progress. The science is sound, but fine, remain in the dark.",
        },
        CC: {
          faction: 'CC',
          desc: 'Progress must not come at the cost of innocent civilians.<br/>If the core malfunctions, the casualties could be horrific.',
          modApproved: -3,
          descApproved: "My duty is to protect lives first and foremost. The least i can do is submit a petition for a safety mechanism.",
          modRejected: 2,
          descRejected: "A wise choice. Not every bright idea, no matter how kind hearted it may seem at the outset, should be pursued.",
        },
        DD: {
          faction: 'DD',
          desc: "A desperate dragon is a dangerous friend.<br/>If it works, good. If not, I do not want to clean up the firestorm.",
          modApproved: 0,
          descApproved: "Remind me to stay close to the shore, just in case i need to dip below the surface all of a sudden.",
          modRejected: 0,
          descRejected: "I think thats the right heading, maybe this can be reconfigured to be of use at sea? Or maybe we can use the tech to power a new kind of lighthouse?",
        },
        EE: {
          faction: 'EE',
          desc: "The Shapers taught us that power comes from patience and prudence, to look to alternatives, even strictly for emergencies, would be to abandon those principles.<br/>This is not the way.",
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
        desc: "Sir!<br/>The filigree workers guild wants to host a city-wide festival celebrating our corps of inventors.<br/>It may disrupt production for three days, but it would surely boost morale greatly.",
        summary: "Should we pause work for a morale-boosting festival of invention?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "A festival... sounds expensive.<br/>If we can sell special access and souvenirs maybe it could pay for itself.<br/>But i say we can find a better way to boost morale without halting production.",
          modApproved: -1,
          descApproved: "When your orders run late, i suspect you wont be in quite such a celebratory mood.",
          modRejected: 2,
          descRejected: "Excellent. Keep the wheels turning.",
        },
        BB: {
          faction: 'BB',
          desc: "A classic example of delayed output increase.<br/>I see the festival as a flywheel for innovation.<br/>Our colleagues are not merely cogs in a machine.",
          modApproved: 2,
          descApproved: "Wonderful. You will find me at the front enjoying the spectacle and networking new contacts.",
          modRejected: -1,
          descRejected: "I see that i misscalculated the value you place on the human element of our work. I hope you will reconsider when the burnout numbers start to climb.",
        },
        CC: {
          faction: 'CC',
          desc: 'My healing abilities can mend wounded bodies.<br/>But this festival could remind our people why they fight and toil, healing their spirits.',
          modApproved: 4,
          descApproved: "Hope is fundamental to healing. Let us celebrate not only our achievements but also our resilience.",
          modRejected: -2,
          descRejected: "It would have been a small price to pay for a boost to morale. Now the debt will come due in the form of a restless city.",
        },
        DD: {
          faction: 'DD',
          desc: "A good party is worth a few days lull, as long as it does not leave the rudder unattended.<br/>I say we party for three days, and once we are back on course, we can assess the impact.",
          modApproved: 1,
          descApproved: "I have a bottle of the finest greaserum reserved for the occasion. I will be toasting to our inventors and to you, my lord.",
          modRejected: -1,
          descRejected: "A crying shame. Have i not told you that keeping the crew´s spirits low on a long voyage is how mutineers gain traction.",
        },
        EE: {
          faction: 'EE',
          desc: "Tradition values celebration, yes, but a tradition has deep roots to draw from.<br/>Any new festival or ceremony must have purpose that bind us to our heritage, else it is mere indulgence.",
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
        desc: "My lord!<br/>The long neutral duke of the Northsteel mountains is now offering a secret non-aggression pact if we send envoys and give a few trade concessions.<br/><br/>It is quite elegant diplomacy with no bloodshed as long as our enemies remain in the dark about the whole affair.",
        summary: "Should we accept a quiet peace treaty?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "I would rather keep our bargaining chips close to the chest.<br/>A treaty that takes a concession sounds like we are getting the short end of the stick.",
          modApproved: -2,
          descApproved: "Peace on paper is a flimsy thing. Once steel and gunpowder are involved, it is the strongest that win, not the one dipsplaying the finest penmanship.",
          modRejected: 3,
          descRejected: "Let them come to us on our terms, we should not get tangled up in any attached strings.",
        },
        BB: {
          faction: 'BB',
          desc: "This opens up new opportunities for scientific collaboration.<br/>Science is proven to thrive when the borders are calm.",
          modApproved: 1,
          descApproved: "A wise investment in stability, if handled with care.",
          modRejected: -1,
          descRejected: "There are the undeniable risks of espionage and sabotage. I see the line of logic in refusing, but i hope for a day when we can work together without suspicion.",
        },
        CC: {
          faction: 'CC',
          desc: 'If these concessions impact our peoples access to medicine or basic needs, then i cannot support it.<br/>And what about the risks of Northsteel being dragged into the war alongside us if we sign this?',
          modApproved: -3,
          descApproved: "I would prefer to see a treaty that is more reciprocal, but if this is the best we can get, then i will put my hopes in it.",
          modRejected: 2,
          descRejected: "We have been at war for so long that the idea of peace is almost alien to us. But we must remember to look after our people first and not rush into it for the sake of it.",
        },
        DD: {
          faction: 'DD',
          desc: "A treaty is a useful shelter, but only if the other side intends to respect it.<br/>I say we agree and keep a keen eye on them.",
          modApproved: 0,
          descApproved: "I will send a scout vessel to make sure there are no knives aimed at our backs.",
          modRejected: 0,
          descRejected: "I do wish the mountain greaserum would be cheaper, if that had been the concession, i would have been more inclined to say yes.",
        },
        EE: {
          faction: 'EE',
          desc: "This is the kind of quiet power our ancestors preached.<br/>We should accept peace while it is offered, even if it costs us a little standing.",
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
        desc: "Sir!<br/>A merchant convoy is seeking to sail through our territory uninspected.<br/>I say we send the whole damn fleet to verify their intent.",
        summary: "Should we enforce a strict blockade on a suspicious convoy?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "Blocking trade is a guaranteed way to kill our own profits.<br/>Let them pass under watch instead.<br/><br/>Whats the worst they could do, smuggle a few contraband trinkets?",
          modApproved: -2,
          descApproved: "Good thing it wont be you who has to explain to the merchants why their goods are being held up. That headache is now on me.",
          modRejected: 3,
          descRejected: "Trade, shady and illicit as it may be, is the lifeblood of our economy. We should not turn away commerce without good reason.",
        },
        BB: {
          faction: 'BB',
          desc: "Safety first.<br/>If there is any chance of sabotage or smuggling, we should not gamble with the route.",
          modApproved: 2,
          descApproved: "A wise precaution. Better to be secure than sorry.",
          modRejected: -1,
          descRejected: "Are you not even a little curious about what they are trying to sneak through?",
        },
        CC: {
          faction: 'CC',
          desc: 'A blockade is a blunt instrument that hurts everyone, but the risk of toxic substances or dangerous contraband slipping through is too great to ignore.<br/>I say we block the convoy and quarantine it thoroughly.',
          modApproved: 2,
          descApproved: "Good, I will make sure the quarantine is humane. We are not trying to punish traders, just protect our people and environment.",
          modRejected: -2,
          descRejected: "If it turns out to carry a pathogen that could have been contained with a simple inspection, i hope you are ready to take that responsibility.",
        },
        DD: {
          faction: 'DD',
          desc: "The sea route is our foundation.<br/>I would rather hold the line than let a snake slip through our walls.",
          modApproved: 3,
          descApproved: "Im loading the cannons and readying the boarding parties. We will make sure they know we mean business.",
          modRejected: -2,
          descRejected: "I hope you have a sound reason for this, the damage to our reputation will be worse than any contraband they might have been trying to sneak through.",
        },
        EE: {
          faction: 'EE',
          desc: "A blockade can be righteous when it protects the people.<br/>But let it not be an excuse for cruelty or tribute.",
          modApproved: 1,
          descApproved: "So long as it is done with honor and justice, I can accept it.",
          modRejected: -1,
          descRejected: "Do not let fear make you unjust.",
        },
      }
    },
    {
      id: "The clockwork labor question",
      idShort: 'clockwork_labor',
      result: null,
      metaStats: {
        exp: 100,
        power: 150,
        popularity: -100
      },
      pitch: {
        pitched: false,
        faction: "AA",
        desc: "My lord!<br/>I have a new proposal that will revolutionise our factories.<br/>Our engineers have produced a line of clockwork automatons capable of performing the most labour-intensive tasks with tireless precision.<br/><br/>No sick days. No holidays. No wages.<br/>What could possibly be better for production?",
        summary: "Should we begin replacing human factory workers with clockwork automatons?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "The numbers simply do not lie.<br/>An automaton works twenty-four hours a day, never complains, never organises into a union.<br/>Every clockwork unit installed pays back its cost in under a year.",
          modApproved: 4,
          descApproved: "Excellent. I will have the first batch of units on the factory floor by end of month. And if you want to discuss combat applications, i have some ideas for that too.",
          modRejected: -4,
          descRejected: "Sentiment over profit.<br/>Mark my words - whoever does this first will own the market inside a decade.",
        },
        BB: {
          faction: 'BB',
          desc: "Current clockwork units require significant maintenance and calibration.<br/>We are not quite ready to deploy them at scale.<br/>I would recommend a phased pilot programme before any full rollout.",
          modApproved: -1,
          descApproved: "I will insist on a rigorous testing protocol. Surprises in a factory environment tend to be costly and ... unpleasant ones.",
          modRejected: 1,
          descRejected: "A sensible delay. The science will be there eventually - rushing it now would likely set the field back.",
        },
        CC: {
          faction: 'CC',
          desc: 'This is a difficult topic to me in particular i must admit.<br>But that aside these are people we are talking about. People with families and a sense of purpose tied to their work.',
          modApproved: -5,
          descApproved: "At the very minimum i require a support programme for every displaced worker. No exceptions.",
          modRejected: 5,
          descRejected: "Good. The measure of a civilisation is how it treats those who can no longer be of use to it.<br/>I just hope im not about to join the ranks of the unemployed myself.",
        },
        DD: {
          faction: 'DD',
          desc: "I have sailed with brass boys before - on this experimental vessel out of Port Cogsworth.<br/>Honest workers, but they foul their gears in salt air something fierce.<br/>Not sure thats a problem in a factory.<br/>So i say; your waters, your call.",
          modApproved: 0,
          descApproved: "Make sure someone oils the joints regularly.<br/>Line them up in a circle and have them oil each other. That should be fun to watch.",
          modRejected: 0,
          descRejected: "Happy to see a sweaty brow still has a place in this city.<br/>But poor Abrams there seems to have gone from sweating to steaming.",
        },
        EE: {
          faction: 'EE',
          desc: "Our craftsmen apprentice for years. They inherit the wisdom of the generations before them, passed hand to hand across the centuries.<br/>No clockwork thing, however clever, carries that.<br/>We would be trading living tradition for a ticking novelty.",
          modApproved: -3,
          descApproved: "I shall be documenting every craft tradition lost to this machine.<br/>For the record and for posterity.",
          modRejected: 3,
          descRejected: "Craft is a covenant with the past. We would do well not to break it lightly.",
        },
      }
    },
    {
      id: "The Academy of Gears",
      idShort: 'academy_of_gears',
      result: null,
      metaStats: {
        exp: 150,
        power: -50,
        popularity: 100
      },
      pitch: {
        pitched: false,
        faction: "BB",
        desc: "Sir, we are squandering a generation.<br/>The demand for trained engineers, physicians, and scientists far outstrips what private apprenticeships can produce.<br/>I am proposing a public academy - open to all citizens regardless of birth or guild - where the next generation of minds can be properly cultivated.<br/><br/>The upfront cost is significant, i will not pretend otherwise. But the return over twenty years is incalculable.",
        summary: "Should we fund a public academy open to all citizens to train engineers and scientists?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "A public academy? Open to all?<br/>So we are to educate the competition are we?<br/>Every cobbler´s son who graduates is another engineer undercutting my contracted specialists.<br/>I fail to see the appeal.",
          modApproved: -2,
          descApproved: "Fine. But i want first refusal on recruiting top graduates. A formal sponsorship arrangement. Non-negotiable.",
          modRejected: 2,
          descRejected: "Correct. Let the guilds manage their own training as they always have.",
        },
        BB: {
          faction: 'BB',
          desc: "This is perhaps the most straightforward decision before us.<br/>An educated populace produces better engineers, better doctors, better~ everything!<br/>The science on this is rock solid.",
          modApproved: 4,
          descApproved: "I will personally design the first curriculum. We begin with natural philosophy and engineering fundamentals.",
          modRejected: -3,
          descRejected: "A generation from now we will surely feel this gap. I only hope it is not too late to correct by then.",
        },
        CC: {
          faction: 'CC',
          desc: 'A healthy society requires educated citizens.<br/>I would also advocate for a dedicated medical and public health wing within the academy.<br/>Knowledge is prevention.',
          modApproved: 4,
          descApproved: "Wonderful. I will be volunteering as a guest lecturer on anatomy and field medicine.",
          modRejected: -3,
          descRejected: "Ignorance is a kind of illness too. One we could have cured.",
        },
        DD: {
          faction: 'DD',
          desc: "Talent comes from within, not from a classroom.<br/>I have seen the most brilliant sailors come from the humblest backgrounds, and the most useless ones come from the finest academies.<br/>What is needed is a chance to test oneself in the real world, not a fancy certificate.",
          modApproved: -2,
          descApproved: "Soft hands and a head full of conflicting theories do not a daring sailor make.<br/>I'll be lucky to round up a crew that isn't landlubber by the end of the year.",
          modRejected: 2,
          descRejected: "Send them out to sea, let them learn the hard way.<br/>Staring a giant squid in the eye will make your mind race faster than any textbook ever could.",
        },
        EE: {
          faction: 'EE',
          desc: "I am not opposed to education.<br/>But the guild apprenticeship system is a sacred compact between master and student, refined over generations.<br/>An open academy may produce technically capable minds and yet hollow out the character that tradition forges.<br/>Knowledge without reverence is a dangerous thing.",
          modApproved: -2,
          descApproved: "I will be submitting a proposal for a compulsory history and traditions module in the curriculum. It is the least we can do.",
          modRejected: 3,
          descRejected: "The wisdom of the Shapers was passed through discipline and devotion, not open enrolment.",
        },
      }
    },
    {
      id: "The Smog Ordinance",
      idShort: 'smog_ordinance',
      result: null,
      metaStats: {
        exp: 100,
        power: -100,
        popularity: 100
      },
      pitch: {
        pitched: false,
        faction: "CC",
        desc: "My lord, the registers at Gearspring Hospital have reached a threshold i can no longer in good conscience ignore.<br/>The particulate output from the eastern foundries has increased threefold this past year.<br/><br/>I am requesting a mandatory emissions reduction ordinance on all heavy industry - filters, stack heights, coal composition standards.<br/>I understand the cost to production. But i am seeing the cost in patients every single day.",
        summary: "Should we impose mandatory emissions controls on the foundries to address the smog?",
      },
      arguments: {
        AA: {
          faction: 'AA',
          desc: "Let me see if i have this straight.<br/>You want me to retrofit every foundry with expensive new filters, hire compliance inspectors, and slow down production - because of a bit of smog?<br/>Smog has been the smell of prosperity in this city since my grandfather´s day.",
          modApproved: -4,
          descApproved: "If i must, i must. But i want tax relief to offset every single crown this costs me. In writing.",
          modRejected: 4,
          descRejected: "Ah, do you smell that? That is the smell of progress. I will not be the one to put a hand over the city´s nose.",
        },
        BB: {
          faction: 'BB',
          desc: "The correlation between airborne particulate density and respiratory illness rates is documented and conclusive.<br/>I would add that the smog is also degrading precision instruments across the city - my own measurements are being thrown off by the interference.<br/>Clocktoria III´s ordinance is scientifically justified.",
          modApproved: 2,
          descApproved: "I will contribute a monitoring system to track compliance and publish the data quarterly.",
          modRejected: -2,
          descRejected: "I am going to keep collecting data regardless. When the case becomes impossible to ignore, i trust we will revisit this.",
        },
        CC: {
          faction: 'CC',
          desc: 'I have children in my wards who have never known a clear breath. Infants born with fouled lungs in the shadow of the foundries.<br/>I will not soften this for the sake of diplomacy: we are poisoning our own people, and we have the means to stop.',
          modApproved: 5,
          descApproved: "Thank you. I will have emission threshold protocols ready for review within the week.",
          modRejected: -6,
          descRejected: "Then i ask that you at least visit the fever ward and look them in the eye.",
        },
        DD: {
          faction: 'DD',
          desc: "Bad air is bad air whether it comes from a storm or a chimney.<br/>I have lost crew to rot-lung and it is not a good death.<br/>Aye, let the breeze blow.",
          modApproved: 2,
          descApproved: "The harbour air will thank us too. My rigging does not need a second coat of tar.",
          modRejected: -1,
          descRejected: "Your call. Though i note the wind does not stay on one side of a fence forever.",
        },
        EE: {
          faction: 'EE',
          desc: "The old city breathed clean air before the great furnaces came.<br/>There is nothing traditional about choking one´s neighbours - that is a recent innovation, and not one the Shapers would have sanctioned.<br/>I find myself compelled to follow the doctors orders.",
          modApproved: 3,
          descApproved: "Let the record show that tradition and progress can, on occasion, point in the same direction.",
          modRejected: -2,
          descRejected: "I shall have my scribes record the names of every patient affected. History will render its own verdict.",
        },
      }
    },
  ]
});