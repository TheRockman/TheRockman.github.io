// Establish  eed characters:
// AA - Abrams Stovevalve, CEO of Stovevale industries LLC, a ruthless businessman. Always chasing profit and upwards trending numbers.
// BB - Bella MacGuffin, Head scientist at the Sprocket science center, a prodigy in many fields. Always wants solid data and sound reasons.
// CC - Clocktoria III, Head doctor at the Gearspring hospital, a clockwork automaton designed for compassion and healing. Always wheighs in human costs and safety.
// DD - Dack Rowly, Honored fellow of the adventurers guild, a devil-may-care sailor. Always encourages adventure and bold actions.
// EE- Enoch Diptych, Lord master of tradition and cermony. Always has a conservative outlook and invokes the ainchent traditions of the Shapers,

app.service("intermissionsService", function () {
  //Chained items
  const intermission_dack_leaves_0_1 = {
    id: "Clocktoria approaches you between sessions",
    idShort: "intermission_dack_leaves_0_1",
    result: null,
    metaStats: {},
    pitch: {
      pitched: false,
      faction: "CC",
      chain: [
        {
          desc: "I just met Dack stomping down the hallway. Did he just leave the council?",
          yes: "So it seems.",
        },
        {
          desc: "... I did not factor that as a possibility, but I suppose it is not entirely surprising. He has always been a bit reckless.",
          yes: "True, but I hope he is safe out there.",
          no: "I understand your concern, but we must focus on the matters at hand.",
        },
      ],
    },
  };

  this.intermissions = {
    intermission_the_great_gala: {
      id: "Bella nervously approaches",
      idShort: "intermission_the_great_gala",
      result: null,
      metaStats: {},
      pitch: {
        pitched: false,
        faction: "BB",
        chain: [
          {
            desc: "My Lord, There is a upcoming gala at the sprocket science center. One of the organizers have requested council representation at the opening cermony. ",
            yes: "And you want me to send someone?",
          },
          {
            desc: "Correct. I obviously put myself forward as a candidate, but it would only be fair for you to pick who is best suited for the task.",
            special: {
              text: "Very well.",
              actionParams: {
                type: "crisis",
                crisis: {
                  id: "The gala representative",
                  idShort: "the_gala",
                  desc: "Who should be sent to represent the council at the Sprocket science center gala",
                  stat: "loyalty",
                  dc: 8,
                  resolved: null,
                  rewardStat: "popularity",
                  rewardVal: 500,
                  results: {
                    AA: {
                      passCheck:
                        "It might suprise you, but I have been moving in these circles for decades. This is my natural habitat.",
                      failedCheck:
                        "A bunch of eggheads the lot of them, wouldnt know culture if it beat their face in with a wrench. That reminds me, i have somewhere to be.",
                    },
                    BB: {
                      passCheck:
                        "I was worried I would be overlooked for this, but I see that my nerves were getting the better of me.",
                      failedCheck:
                        "I should have kept my mouth shut. How did i ever think i was cut out for public appearances?!",
                    },
                    CC: {
                      passCheck:
                        "I am not designed for social functions, but my compassion cogs were used to deliver a heartfelt speach.",
                      failedCheck:
                        "I am sorry, I was unable to put the sick and wounded out of my mind enough to fully focus on the event.",
                    },
                    DD: {
                      passCheck:
                        "These things tend to be a bit stuffy, I want to belive i livened up the place enough to make it unforgettable.",
                      failedCheck:
                        "You didnt tell me there was an open bar, and since i dont remember what happend im blaming you for this, sir.",
                    },
                    EE: {
                      passCheck:
                        "I am sure any of us would have done a fine job, but none other could have done it better than I.",
                      failedCheck:
                        "I can not be held responsible for what happend, the animal cages were clearly of poor quality and a disaster waiting to happen regardless.",
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
    intermission_a_moment_of_your_time: {
      id: "Abrams nods towards you",
      idShort: "intermission_a_moment_of_your_time",
      result: null,
      metaStats: {},
      pitch: {
        pitched: false,
        faction: "AA",
        chain: [
          {
            desc: "I didnt want to make a scene in the coucil room, but i need to make it clear that i am not pleased with you shooting down my weapons suggestion yesterday.<br/>I spent good money on those weapons, only to be told to sit down like a dog.<br/>Say i find another buyer to recoupe some of the losses, how'd that sound?",
            yes: "Are you threatening me?",
            no: "We handled this yesterday Abrams, i will not discuss it further.",
          },
          {
            desc: "Say i was, you couldnt do a thing about it. Without my gear you have no army.<br/><br/>But im not, just a friendly reminder.",
            no: "Reminder taken, i suppose.",
          },
        ],
      },
    },
    intermission_streamline_the_factories: {
      id: "Bella requests a meeting about output",
      idShort: "intermission_streamline_the_factories",
      result: null,
      metaStats: {},
      pitch: {
        pitched: false,
        faction: "BB",
        chain: [
          {
            desc: "My lord, our industrial output is inconsistent. I believe there are improvements we can make to increase productivity without sacrificing quality.",
            yes: "Tell me what you have in mind.",
            no: "Not now, Bella. I need to handle the current crisis first.",
          },
          {
            desc: "A scientific audit of the factories would reveal bottlenecks and waste. With modest investment, we can redesign the workflow to produce more with less effort.",
            yes: "Proceed with the audit, and suggest the best improvements.",
            no: "I cannot spare the resources. We must accept the current output for now.",
          },
          {
            desc: "Excellent. I will prepare a proposal for the top three interventions. They will preserve our workforce and increase efficiency, not simply push them harder.",
            yes: "Very well. I trust your judgment on this.",
            no: "I appreciate the offer, but we will not change the factories at this time.",
          },
        ],
      },
    },
    intermission_dack_leaves_0: {
      id: "Dack has a look of determination on his face as he approaches",
      idShort: "intermission_dack_leaves_0",
      result: null,
      metaStats: {},
      pitch: {
        pitched: false,
        faction: "DD",
        chain: [
          {
            desc: "My lord, This is the last straw im sorry to say. Im setting sail, never to return. I have been asking for your support for years and you have always said no.<br/>I cant wait around for you to change your mind, so im going to do it myself.",
            yes: "Dack, wait! I want to hear you out before you make such a drastic decision.",
            special: {
              text: "I understand your frustration, Dack, but I cannot support a decision that could endanger the fleet and our people. Please reconsider.",
              actionParams: {
                type: "intermission",
                intermission: intermission_dack_leaves_0_1,
              },
            },
          },
          {
            desc: "Cleary you have no sense of adventure, or you would have said yes by now. I have a crew ready and a ship im not wasting my life waiting for you to get on board.",
            yes: "Let's work together to make this happen safely.",
            special: {
              text: "I urge you to reconsider for the sake of the crew and the realm.",
              actionParams: {
                type: "intermission",
                intermission: intermission_dack_leaves_0_1,
              },
            },
          },
          {
            desc: "*Dack turns to leave*",
            special: {
              text: "Farewell, Dack. I hope you find what you're looking for out there.",
              actionParams: {
                type: "intermission",
                intermission: intermission_dack_leaves_0_1,
              },
            },
          },
        ],
      },
    },
    intermission_prepare_the_expedition: {
      id: "Dack wants your blessing for the next voyage",
      idShort: "intermission_prepare_the_expedition",
      result: null,
      metaStats: {},
      pitch: {
        pitched: false,
        faction: "DD",
        chain: [
          {
            desc: "My lord, the crew is eager to set sail beyond the Fog Sea again. We need your blessing to outfit the expedition properly.",
            yes: "What do you need to make it safe?",
            no: "Not now. We have more urgent land matters to resolve.",
          },
          {
            desc: "A stronger hull, more experienced sailors, and a reliable long-range chart are the difference between glory and disaster.<br/>If you provide these, I will guarantee a safe return or at least a story worth remembering.",
            yes: "Allocate the resources and make the preparations.",
            no: "I cannot risk the fleet on another uncertain voyage.",
          },
          {
            desc: "Excellent, my lord. With your support, the expedition will set off as soon as the wind is favorable.<br/>If you would rather wait, I can keep the crew ready until the time is right.",
            yes: "Go ahead. Bring back whatever you find.",
            no: "Wait for a better moment.",
          },
        ],
      },
    },
    intermission_honor_the_ancestors: {
      id: "Enoch seeks your counsel about a new decree",
      idShort: "intermission_honor_the_ancestors",
      result: null,
      metaStats: {},
      pitch: {
        pitched: false,
        faction: "EE",
        chain: [
          {
            desc: "My lord, the Shapers taught us to honor the past. There is a new proposal that would alter one of our oldest customs.",
            yes: "Explain the proposal and your concerns.",
            no: "I don't have time for this conversation right now.",
          },
          {
            desc: "The proposal would change how we select our festival leaders. Some say it will bring efficiency, but I fear it will weaken the bond our people have with tradition.",
            yes: "We need to balance tradition with practical needs. What is your recommendation?",
            no: "We can revisit this later when I am less occupied.",
          },
          {
            desc: "I advise caution. Tradition is not merely ritual; it is the framework that holds our community together.<br/>If we tamper with it too quickly, we may fracture the very spirit we are trying to preserve.",
            yes: "Then maintain the tradition and look for more gradual improvements.",
            no: "If the change proves necessary, I will consider it carefully.",
          },
        ],
      },
    },
  };
});
