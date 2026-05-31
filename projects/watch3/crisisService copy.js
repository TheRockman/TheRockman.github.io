  // Established character:
  // AA - Abrams is always chasing profit, 
  // BB - Bella wants solid data, 
  // CC - Clocktoria thinks in human costs, 
  // DD - Dack encourages adventure and risk.
  // EE- Enoch invokes conservative traditions of the Shapers, 

app.service('crisisService', function() {
  this.crisisEvents = [
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
          passCheck: "I got the furnaces back online with minimal delay.<br/>But next time this happens, please send someone else. My waistcoat will never fit right again due to the water damage.",
          failedCheck: "The revenue lost from the production halt is staggering. This is a disaster for business.",
        },
        BB: {
          passCheck: "I used the downtime to conduct a thorough inspection. The system is safer than ever now.",
          failedCheck: "If i had only known, this would have been preventable with a proper drainage design.<br/>As it stands, the damage is extensive and the risk of future floods is still high.",
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
          passCheck: "The boys are healthy again and fit for fight.<br/>Luckily i just ordered the eggheads in the lab to start working on a new vaccine last week, so we had something to throw at it.",
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
          passCheck: "The soldiers are back on their feet and itching for action.<br/>We have our methods for dealing with sickness aborad, and they work just fine land-side too.",
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
          passCheck: "Toxic substances were neutralized and the stores are safe again.<br/>But the culprit is still out there and must be found.",
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
          passCheck: "Things are rough out there but we are providing our entire product line to help weather the storm.<br/>The city is safe and warm.",
          failedCheck: "I dont have the resources to deal with this. The winter sortiment is not set to start production for another month.",
        },
        BB: {
          passCheck: "I have gathered as many people as i can in the boilerworks.<br/>The population is warm and accounted for.",
          failedCheck: "Why wasnt this anticipated?<br/>I have been tracking weather patterns for years and this should have been on the charts.",
        },
        CC: {
          passCheck: "I have provided hot meals and blanket to everyone in need.<br/>The storm is harsh, but we are taking care of our people.",
          failedCheck: "Too many suffered in the cold. This weighs heavily on my mechanical heart.",
        },
        DD: {
          passCheck: "I rode the gale and saw every gate secured.<br/>There isnt a storm sired that can scare me. The city is safe.",
          failedCheck: "I cannot fight the wind, and i cannot shoot the snow.<br/>I think this one is a bit out of my league.",
        },
        EE: {
          passCheck: "We have endured winter upon winter and the Shapers have always seen us through.<br/>We will weather this storm as well.",
          failedCheck: "We ignored the old warnings. The storm is our reproach.<br/>I must do more to remind us of the lessons of the past.",
        },
      }
    },
  ]
});