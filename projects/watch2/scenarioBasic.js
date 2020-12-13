app.service('scenarioBasic', function(actionService) {
  var ratcatchers = "A derogatory term for adventurers";

  this.scenarios = [
    {
      text: 'The forest is silent.',
      everGreen: true,
      actions: [
        {
          label: '"[Proceed]"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>You follow the path before you</em>'
          }
        }
      ],
    },
//Scenario
    {
      text: 'The sound of plate against plate pierce the silence. From around the bend in the path a knight emerge.',
      speaker: {
        avatar: 'https://static.wikia.nocookie.net/fireemblem/images/4/4e/Shamir_Portrait.png/revision/latest/scale-to-width-down/340?cb=20190705082422',
        name: '',
        faction: ''
      },
      actions: [
        {
          label: '[Stand up and bow]',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'crown',
            factionMod: 1,
            epilog: '"Greetings adventurer"<em>She nods back at you but doesnt stop walking.</em>'
          }
        },
        {
          label: '[Glare silently]',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'crown',
            factionMod: -1,
            epilog: '"Where are your manners <aside>ratcatcher<i>'+ratcatchers+'</i></aside>?"<em>She sneer at you and puts her hand on the hilt of her sword, but then relaxes.</em>"Forget it, but my lord will know what lowlife his subjects are, be sure of that"<em>She keeps walking and evenentually even the shimmer of her armour cant be seen between the trees anymore.</em>'
          }
        },
        {
          label: '"Hello"',
          action: actionService.modifyQuestFlags,
          actionProps: {
            flag: 'knowGwen',
            flagMod: true
          }
        },
        {
          label: '[Climb a mointain]',
          action: actionService.modifyRegion,
          actionProps: {
            region: 'grm',
            epilog: '<em>You start climbing the Gorillion mountains.</em>'
          }
        }
      ],
      path: [
        {
          text: '"Hello there yourself, I am Syr Gwendolin of the kingsguard"<em>She puts her hand on her chest and bows before quickly moving along.</em>',
          speaker: {
            avatar: 'https://static.wikia.nocookie.net/fireemblem/images/4/4e/Shamir_Portrait.png/revision/latest/scale-to-width-down/340?cb=20190705082422',
            name: 'Syr Gwendolin',
            faction: 'crown'
          },
          actions: [
            {
              label: '[Proceed]',
              action: actionService.abort,
              actionProps: {
                epilog: '<em>You sit back down, happy to have made a new friend.</em>'
              }
            }
          ],
        }
      ]
    },
//scenario
    {
      text: '<em>A old man taps you on the shoulder</em> "Stay a while and listen" <em>He smiles a toothless smile</em>',
      actions: [
        {
          label: '"Sure"',
          action: actionService.progress,
          actionProps: {
            epilog: '"Exelent"'
          }
        },
        {
          label: '"Dont bother me with your sass old man!"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>He give you a sad look and slowly walks away.</em>'
          }
        },
      ],
      path: [
        {
          text: '<em>The old man look at you expectantly.</em>',
          actions: [
            {
              label: '"So.. whats your name?"',
              action: actionService.smallTalk,
              actionProps: {
                smallTalkActionTaken: false,
                smallTalkAction: actionService.modifyFactionRating,
                faction: 'steven',
                factionMod: 1,
                epilog: '"Im Steven."'
              }
            },
            {
              label: '"Are you married?"',
              action: actionService.smallTalk,
              actionProps: {
                smallTalkActionTaken: false,
                epilog: '"No.. no."'
              }
            },
            {
              label: '"So.. what do you do for a living?"',
              action: actionService.smallTalk,
              actionProps: {
                smallTalkActionTaken: false,
                smallTalkAction: actionService.modifyStat,
                stat: 'hp',
                statMod: -5,
                epilog: '<em>The old man suddenly become defensive.</em>"Now thats non of ya business, you hear me?!"<em>He smacks his walking stick over your head.</em>'
              }
            },
            {
              label: '"Nevermind, i have to go."',
              action: actionService.abort,
              actionProps: {
                epilog: '<em>You sit back down.</em>'
              }
            }
          ],
        },
      ]
    },
//Scenario
    {
      text: 'Around midnight a mysterious robed stranger comes to the camp and asks to stay the night.',
      speaker: {
        avatar: 'https://static.wikia.nocookie.net/fireemblem/images/c/c6/Tomas_Portrait.png/revision/latest?cb=20190703070028',
        name: '',
        faction: ''
      },
      actions: [
        {
          label: '"Take a seat by the fire"',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'mages',
            factionMod: 1,
          }
        },
        {
          label: '"Leave"',
          action: actionService.abort,
          actionProps: {
            epilog: 'he walks away.'
          }
        }
      ],
      path: [
        {
          text: '<em>The stranger sits down and lights a pipe and the the two of you share stories of adventures you both have had. You understand from the way he speaks that he works for the <aside>mages guild<i>The mages were recently ousted from the capital city and driven underground for researching illegal magic.</i></aside>.',
          speaker: {
            avatar: 'https://static.wikia.nocookie.net/fireemblem/images/c/c6/Tomas_Portrait.png/revision/latest?cb=20190703070028',
            name: '',
            faction: 'mages'
          },
          actions: [
            {
              label: '[Listen silently]',
              action: actionService.progress,
              actionProps: {
                epilog: '<em>You gesture for him to keep talking</em>'
              }
            },
            {
              label: '[Know Gwendolin] "Do you know Syr Gwendolin? She is a good friend of mine."',
              visibleWhen: 'questFlags.knowGwen.active',
              action: actionService.abort,
              actionProps: {
                epilog: 'Even if you cant really see his face you feel the cold look he is giving you.<em>"No, im afraid i dont..."</em>The embers from his pipe flair up and illuminate his milky white eyes.\nAfter you look away for a moment he is gone.'
              }
            },
          ],
        },
        {
          text: '<em>The stranger tells you about far off lands where wild men fight dragons.</em>',
          speaker: {
            avatar: 'https://static.wikia.nocookie.net/fireemblem/images/c/c6/Tomas_Portrait.png/revision/latest?cb=20190703070028',
            name: '',
            faction: 'mages'
          },
          actions: [
            {
              label: '[Listen silently]',
              action: actionService.progress,
              actionProps: {
                epilog: '<em>You gesture for him to keep talking</em>'
              }
            },
            {
              label: '"Hey, can you teach me goblinspeak?"',
              action: actionService.smallTalk,
              actionProps: {
                smallTalkActionTaken: false,
                smallTalkAction: actionService.modifyQuestFlags,
                flag: 'goblinSpeak',
                flagMod: true,
                epilog: '<em>He nods and give you a smooth rock with a crude rune on it.</em>'
              }
            },
            {
              label: '"Thats just skyrim"',
              action: actionService.modifyStat,
              actionProps: {
                stat: 'wis',
                statMod: 1,
                epilog: '"Thats right..." he says.<em>The stranger shifts and shakes before running back into the woods.\nYou notice him dropping a pice of paper with the name "Bodd Howrad" on it.</em>'
              }
            },
          ],
        },
        {
          text: '<em>You listen to the strangers story but you must have fallen asleep at some point since you awake at dawn.</em>',
          actions: [
            {
              label: 'OK',
              action: actionService.abort,
              actionProps: {
                epilog: '<em>You look around but there is no trace of the stranger other than a faint smell of tobacco.</em>'
              }
            }
          ],
        }
      ]
    },
//Scenario
    {
      text: '<em>A bush behind you suddenly shakes and you hear a low growling sound from behind it. It seem some kind of creature is hiding in it.</em>',
      actions: [
        {
          label: '[Ignore it]',
          action: actionService.abort,
          actionProps: {
            epilog: '"Its probably just a <aside>bear<i>A large furry creature with long claws</i></aside>" <em>you think to yourself.</em>'
          }
        },
        {
          label: '[Mages loyalty] Its most likely a drake, better move if you dont want to get singed.',
          visibleWhen: 'factions.mages > 0',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'mages',
            factionMod: 1,
            epilog: '"better safe than sorry"'
          }
        },
        {
          label: '[Dex check] [Try to catch it]',
          action: actionService.skillCheck,
          actionProps: {
            skill: 'dex',
            dc: 12,
            passCheckAction: actionService.abort,
            failCheckAction: actionService.abort,
            critEpilog: '<em>You stand still for a moment before quickly reaching out. Your hand grasp around a scaley neck and you pull out a small drake.</em>',
            passEpilog: '<em>You lunge headfirst into the bush and see a small drake coiled around a branch. You catch it in a sack.</em>',
            failEpilog: '<em>You lunge headfirst into the bush and see a small drake coiled around a branch. Before you can do anything your vision is filled with blue fire and the head flash across your face.</em>'
          }
        },
      ],
      path: [
        {
          text: '"Hello there yourself, I am Syr Gwendolin of the kingsguard"<em>She puts her hand on her chest and bows before quickly moving along.</em>',
          actions: [
            {
              label: '"[Proceed]"',
              action: actionService.abort,
              actionProps: {
                epilog: '<em>You sit back down, happy to have made a new friend.</em>'
              }
            }
          ],
        }
      ]
    },
//Scenario
    {
      text: '<em>You hear the sound of a ringing bell from beyond a hill.</em>',
      actions: [
        {
          label: '[Ignore it]',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>The bell rings out 13 times and the fall silent.</em>'
          }
        },
        {
          label: '[Investigate]',
          action: actionService.progress,
          actionProps: {
            epilog: '<em>You carefully climb the hill. On the other side you see a town half sunk into a swamp. In the middle of what used to be the town square is a decrepit belltower.</em>'
          }
        },
      ],
      path: [
        {
          text: '<em>You spot a man at the top of the tower, striking the bell with a mace.</em>',
          actions: [
            {
              label: '[Silently watch]',
              action: actionService.abort,
              actionProps: {
                epilog: '<em>You stay hidden as the man slam the bell over and over. After 13 strikes he stops and the ringing of the bell dies down.\nBut another sound fills the air. From the black water of the swamp screaming figures emerge. Dark creatures covered in vines and mud shamble around the base of the belltower. You decide to get out of ther before they spot you.</em>'
              }
            },
            {
              label: '"Hello there bell-ringer!"',
              action: actionService.progress,
              actionProps: {
                epilog: '<em>The man pauses and turns to look at you, his eyes are wide and a look of panic flash across his face.</em>'
              }
            }
          ],
        },
        {
          text: '"GET OUT OF HERE YOU FOOL! THE BELL HAVE BEEN RUNG, IT WONT TAKE LONG UNTIL -"\n<em>Before he can finish a sloshing sound interrupt him and he just points toward you.</em>',
          speaker: {
            avatar: 'https://static.wikia.nocookie.net/fireemblem/images/b/b3/Gunther_portrait.png/revision/latest?cb=20170120221619',
            name: '',
            faction: ''
          },
          actions: [
            {
              label: '[Proceed]',
              action: actionService.progress,
              actionProps: {
                epilog: '<em>You turn around and come face-to-face with a mud-dripping corpse. Behind it you manage to spot several more making their way out of the swamp.</em>'
              }
            }
          ],
        },
        {
          text: '"GET UP HERE, QUICK! -"\n<em>The man calls to you.</em>',
          speaker: {
            avatar: 'https://static.wikia.nocookie.net/fireemblem/images/b/b3/Gunther_portrait.png/revision/latest?cb=20170120221619',
            name: '',
            faction: ''
          },
          actions: [
            {
              label: '[Stay and fight]',
              action: actionService.skillCheck,
                actionProps: {
                skill: 'str',
                dc: 12,
                stat: 'hp',
                statMod: -5,
                passCheckAction: actionService.proceed,
                failCheckAction: actionService.modifyStat,
                critEpilog: '<em>You act quickly and shove the closest shambler so hard that it falls over backwards and knock the others down. You wait a moment to see if they return but the surface of the swamp remain unbroken. You turn and walk over to the belltower.</em>',
                passEpilog: '<em>Using your main weapon to keep them all at a fair distance, you use a small dagger to slice at their gripping hands and biting jaws. Like this you back up towards the belltower while picking the ghouls of one by one until when your back hits the belltower base they are all cut to pieces.</em>',
                failEpilog: '<em>You Try to fend them off but one slimey but strong hand gets a hold of your boot and the ghoul starts crawling closer. You kick it with your other foot but before you can get if of you it takes a bite of your leg.\nYou get up and hobble over to the belltower for help.</em>',
              }
            },
            {
              label: '[Run to the tower]',
              action: actionService.progress,
              actionProps: {
                epilog: '<em>You turn around and run as fast as you can towards the belltower. Your boots sinking into the mud and ponds around it slow you down but you make it.</em>'
              }
            }
          ],
        },
        {
          text: '"<em>TO BE CONTINUED</em>',
          speaker: {
            avatar: 'https://static.wikia.nocookie.net/fireemblem/images/b/b3/Gunther_portrait.png/revision/latest?cb=20170120221619',
            name: '',
            faction: ''
          },
          actions: [
            {
              label: '[Proceed]',
              action: actionService.abort,
              actionProps: {
                epilog: '<em>TO BE CONTINUED</em>'
              }
            }
          ],
        },
      ]
    },
//Scenario
    {
      text: '<em>A goblin starts shouting at you</em> "Give Boblin a shiny coin?" ',
      speaker: {
        avatar: 'https://wiki.dfo.world/images/e/e2/Portrait-Goblin_Thrower.png',
        name: '',
        faction: ''
      },
      language: 'goblinSpeak',
      actions: [
        {
          label: '[Speak Goblin] "Sure thing, little friend" .',
          visibleWhen: 'questFlags.goblinSpeak.active',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'boblin',
            factionMod: 1,
            epilog: '<em>The goblin jumps with joy and skips away.</em>'
          }
        },
        {
          label: '"Ok, whatever you say buddy."',
          action: actionService.abort,
          actionProps: {
            epilog: 'Goblins are indeed strage creatures.'
          }
        },
      ],
    },
//Scenario
    {
      text: '<em>You hear a womans voice whisper in your ear, or maybe its in your mind: </em> "Dont trust the squid, his venom is slow but deadly" ',
      language: 'elfSpeak',
      actions: [
        {
          label: '"What?"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>You turn around, but nobody is there.</em>'
          }
        },
      ],
    },
//Scenario
    {
      text: '<em>A man shouts at you:</em> "Step right up, and i will teach you to be the strongest fighter in the land! only 999 gold coins." ',
      actions: [
        {
          label: '[Pay 999 Gold] "Alright, show me what you got!" ',
          action: actionService.exchange,
          actionProps: {
            exchangeCatergoryA: 'inventory',
            exchangeKeyA: 'gold',
            exchangeAmountA: 999,
            exchangeCatergoryB: 'stats',
            exchangeKeyB: 'str',
            exchangeAmountB: 20,
            epilog: '<em>You feel amazing!</em>'
          }
        },
        {
          label: '"No way"',
          action: actionService.abort,
          actionProps: {
            epilog: 'Thats some snakeoil if ever i saw it'
          }
        },
      ],
    },
  ]
});
