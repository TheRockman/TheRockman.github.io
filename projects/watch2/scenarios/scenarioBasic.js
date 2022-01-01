app.service('scenarioBasic', function(actionService) {

  this.scenarios = [
    {
      text: '<em>The <a href="#forest" title="Open wiki" class="info">forest</a> is silent.</em>',
      everGreen: true,
      // speaker: {
      //   char: 'mage',
      //   name: '',
      //   faction: ''
      // },
      actions: [
        {
          label: '[Proceed]',
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
        char: 'gwen',
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
          label: '[Wave] "Hello there!"',
          action: actionService.modifyQuestFlags,
          actionProps: {
            flag: 'knowGwen',
            flagMod: true
          }
        },
        {
          label: '[Say nothing]',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'crown',
            factionMod: -1,
            epilog: '"Where are your manners <a href="#ratcatcher" title="Open wiki" class="info">ratcatcher</a>!"<em>The knight sneer at you and puts her hand on the hilt of her sword, but then relaxes.</em>"Forget it, but my lord will know what lowlife his subjects are, be sure of that"<em>She keeps walking and evenentually even the shimmer of her armour cant be seen between the trees anymore.</em>'
          }
        },
      ],
      path: [
        {
          text: '"Hello there yourself, I am Syr Gwendolin of the kingsguard"<em>She puts her hand on her chest and bows before quickly moving along.</em>',
          speaker: {
            char: 'gwen',
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
      text: '<em>An old man taps you on the shoulder</em> "Stay a while and listen" <em>He smiles a toothless smile</em>',
      actions: [
        {
          label: '"Sure"',
          action: actionService.progress,
          actionProps: {
            epilog: '"Exelent"<em>He looks at you expectantly.</em>'
          }
        },
        {
          label: '"Dont bother me old man!"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>He give you a sad look and slowly walks away.</em>'
          }
        },
      ],
      path: [
        {
          text: '<em>The silence is deafening.</em>',
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
      text: '<em>After a long days journey you make camp a few yards off the road. Just as you get your fire started a robed stranger appear at the edge of the clearing.</em>',
      speaker: {
        char: 'mage',
        name: '',
        faction: ''
      },
      actions: [
        {
          label: '"Well met, take a seat by the fire friend"',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'mages',
            factionMod: 1,
          }
        },
        {
          label: '"Leave this place"',
          action: actionService.abort,
          actionProps: {
            epilog: 'he walks away.'
          }
        }
      ],
      path: [
        {
          text: '<em>The stranger sits down and lights a pipe and the the two of you share stories of adventures you both have had. You understand from the way he speaks that he works for the <a title="Open wiki" href="#mageGuild" class="info">mages guild</a>.',
          speaker: {
            char: 'mage',
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
                epilog: '<em>Even if you cant really see his face you feel the cold look he is giving you.</em>"No, im afraid i dont..."<em>The embers from his pipe flair up and illuminate his milky white eyes.\nAfter you look away for a moment he is gone.</em>'
              }
            },
          ],
        },
        {
          text: '<em>The stranger tells you about far off lands where wild men fight dragons.</em>',
          speaker: {
            char: 'mage',
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
                epilog: '<em>He nods and give you a smooth rock with a crude rune on it.</em>"I found this stone in a goblin lair, i belive it will allow whoever holds it to speak as they do. But I dont think goblins have anything useful to say, so you can have it"'
              }
            },
            {
              label: '[INT Check] "Did you say dragons? That sounds implausible"',
              action: actionService.skillCheck,
              actionProps: {
                skill: 'int',
                dc: 12,
                passCheckAction: actionService.abort,
                failCheckAction: actionService.abort,
                critEpilog: '"Alright, you got me - thats just Skyrim"<em>The stranger says.</em>"I´ll get out of here now, sorry."<em>He gets up and walks away into the bushes.</em>',
                passEpilog: '<em>You glare at him and without a word he dissapear in a puff of smoke.</em>',
                failEpilog: '"Oh i assure you, its true. Huge dragons fighting with half-human half-dragon warrios using their voices to rip time and space apart"<em>You are enchanted by his tale but you must have fallen asleep at some point since you awake at dawn and the stranger i nowhere to be seen.</em>'
              }
            },
          ],
        },
        {
          text: '<em>You listen to the strangers story but you must have fallen asleep at some point since you awake at dawn.</em>',
          actions: [
            {
              label: '[Proceed]',
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
            epilog: '"Its probably just a cat" <em>you think to yourself.</em>'
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
          actions: [
            {
              label: '[Stay and fight]',
              action: actionService.skillCheck,
                actionProps: {
                skill: 'str',
                dc: 12,
                stat: 'hp',
                statMod: -5,
                passCheckAction: actionService.progress,
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
          text: '{TO BE CONTINUED}',
          actions: [
            {
              label: '[Proceed]',
              action: actionService.abort,
              actionProps: {
                epilog: '{TO BE CONTINUED}'
              }
            }
          ],
        },
      ]
    },
//Scenario
    {
      text: '<em>A goblin starts shouting at you</em> "Pat Boblins head?" ',
      speaker: {
        char: 'goblin',
        name: '',
        faction: ''
      },
      language: 'goblinSpeak',
      actions: [
        {
          label: '[Speak Goblin] "Sure thing, little friend" .',
          visibleWhen: 'questFlags.goblinSpeak.active',
          action: actionService.progress,
          actionProps: {
            epilog: '<em>You pat his green rubbery head.</em>'
          }
        },
        {
          label: '"Ok, whatever you say buddy."',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Goblins are indeed strage creatures.</em>'
          }
        },
      ],
      path: [
        {
          text: '<em>The goblin looks at you, jumps with joy.</em>',
          speaker: {
            char: 'goblin',
            name: '',
            faction: ''
          },
          actions: [
            {
              label: '"How would you like to come with me?"',
              action: actionService.toggleFollower,
              actionProps: {
                follower: 'boblin',
                epilog: '<em>The goblin does a little dance around your feet.</em>'
              }
            },
            {
              label: '[Proceed]',
              action: actionService.modifyFactionRating,
              actionProps: {
                faction: 'boblin',
                factionMod: 1,
                epilog: '<em>Goblins are indeed strage creatures.</em>'
              }
            },
          ],
        },
      ]
    },
//Scenario
    {
      text: '<em>You hear a womans voice whisper in your ear, or maybe its in your mind: </em> "Dont trust the squid, his venom is slow but deadly" ',
      language: 'abyssal',
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
      text: '"Hello Im Henry."',
      speaker: {
        char: 'henry',
        name: '',
        faction: ''
      },
      actions: [
        {
          label: '"Hi Henry, join me"',
          action: actionService.toggleFollower,
          actionProps: {
            follower: 'henry',
            epilog: '<em>Henry joined your party.</em>'
          }
        },
      ],
    },
//Scenario
    {
      text: '<em>A small crowd of folk are gathered around a cart. A ragged man wearing a tophat and a bright red coat shouts at you.</em> "You there! May i perhaps interest you this miracle potion? Guaranteed to make you the strongest fighter in the land! only 999 gold coins." ',
      speaker: {
        char: 'merchant',
        name: '',
        faction: ''
      },
      actions: [
        {
          label: '"Let me see what you got" ',
          action: actionService.shop,
          actionProps: {
            forSale: [
              {
                name: 'potion_of_unlimited_might',
                img: 'img/items/pot.png',
                desc: 'A dubious potion that supposedly grants strength.',
                use: function(){console.log('do the thing');},
                price: '999',
                quantity: 1,
              },
              {
                name: 'lether_boots',
                img: 'img/items/boot.png',
                desc: 'An old boot not fit to use.',
                use: '',
                price: '5',
                quantity: 12,
              },
              {
                name: 'small_shield',
                img: 'img/items/shield.png',
                desc: 'A small wooden shield.',
                use: '',
                price: '10',
                quantity: 2,
              }
            ],
            epilog: '<em>He flings open the door to the cart and shows you the inside with a bow and a flourish.</em>'
          }
        },
        {
          label: '"No way, thats some snakeoil if i ever saw it."',
          visibleWhen: '!currentShop',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>The crowd nods and disperse. The man gives you a wink and shuts the door to his cart.</em>'
          }
        },
        {
          label: '"Thanks, that will be all."',
          visibleWhen: 'currentShop',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>The man gives you a wink and shuts the door to his cart.</em>'
          }
        },
      ],
    },
//Scenario
    {
      text: 'LOCKPICK TEST',
      actions: [
        {
          label: 'START',
          action: actionService.lockpick,
          actionProps: {
            level: 2
          }
        },
        {
          label: 'ABORT',
          action: actionService.abort,
          actionProps: {
            epilog: 'END'
          }
        },
      ],
      path: [
        {
          text: '<em>Picking instructions...</em>',
          actions: [
            {
              label: '[Open lock]',
              visibleWhen: 'lockpickSuccess',
              action: actionService.abort,
              actionProps: {
                epilog: '"Sweet, a bun!"'
              }
            },
            {
              label: '[Give up]',
              action: actionService.abort,
              actionProps: {
                epilog: '"Im Steven."'
              }
            },
          ],
        },
      ]
    },
  ]
});
