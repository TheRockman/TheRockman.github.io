app.service('scenarioBasic', function(actionService) {
  var ratcatchers = "A derogatory term for adventurers";

  this.scenarios = [
//Scenario
    {
      text: 'The sound of plate against plate pierce the silence. From around the bend in the path a knight emerge.',
      speaker: {
        avatar: 'https://neverwintervault.org/sites/neverwintervault.org/files/project/23755/images/1171124639fullres.jpg',
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
            region: 'Gorillion mountains',
            epilog: '<em>You start climbing the Gorillion mountains.</em>'
          }
        }
      ],
      path: [
        {
          text: '"Hello there yourself, I am Syr Gwendolin of the kingsguard"<em>She puts her hand on her chest and bows before quickly moving along.</em>',
          speaker: {
            avatar: 'https://neverwintervault.org/sites/neverwintervault.org/files/project/23755/images/1171124639fullres.jpg',
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
        avatar: 'https://i.imgur.com/dSiTCwG.png',
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
            avatar: 'https://i.imgur.com/dSiTCwG.png',
            name: '',
            faction: 'mages'
          },
          actions: [
            {
              label: '[Listen silently]',
              action: actionService.progress
            },
            {
              label: '[Know Gwendolin] "Do you know Syr Gwendolin? She is a good friend of mine."',
              visibleWhen: 'questFlags.knowGwen',
              action: actionService.modifyQuestFlags,
              actionProps: {
                faction: 'crown',
                factionMod: 1,
                epilog: 'Even if you cant really see his face you feel the cold look he is giving you.<em>"No, im afraid i dont..."</em>The embers from his pipe flair up and illuminate his milky white eyes.\nAfter you look away for a moment he is gone.'
              }
            },
          ],
        },
        {
          text: '<em>The stranger tells you about far off lands where wild men fight dragons.</em>',
          speaker: {
            avatar: 'https://i.imgur.com/dSiTCwG.png',
            name: '',
            faction: 'mages'
          },
          actions: [
            {
              label: '[Listen silently]',
              action: actionService.progress
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
  ]
});
