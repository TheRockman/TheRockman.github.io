app.service('scenarioMountain', function(actionService, itemIndex) {
let item = itemIndex.items;

  this.scenarios = [
//Scenario
    {
      text: '<em>In front of you the peaks of the Gorillion mountains tower towards the shredded skies.</em>',
      everGreen: true,
      actions: [
        {
          label: '[Proceed]',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Each solid foothold and each sturdy grip you get is a victory hard won.</em>'
          }
        }
      ],
    },
//scenario
    {
      text: '<em>You notice some wagon tracks in the gravel road ahead of you. I looks like an accident happend.</em>',
      actions: [
        {
          label: '[Investigate]',
          action: actionService.progress,
          actionProps: {
            epilog: '<em>You walk closer, finding the wagon and the remains of its driver in a ravine.</em>'
          }
        },
        {
          label: '"Not my problem."',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>END</em>'
          }
        },
      ],
      path: [
        {
          text: '<em>Was this an accident?</em>',
          actions: [
            {
              label: '[Investigate the ground]',
              action: actionService.smallTalk,
              actionProps: {
                smallTalkActionTaken: false,
                epilog: '<em>The road is covered in blood and splinters.</em>'
              }
            },
            {
              label: '[Investigate the wheels]',
              action: actionService.smallTalk,
              actionProps: {
                smallTalkActionTaken: false,
                epilog: '<em>The axel is broken and the left wheel is covered in blood.</em>'
              }
            },
            {
              label: '[Investigate the drivers body]',
              action: actionService.smallTalk,
              actionProps: {
                smallTalkActionTaken: false,
                epilog: '<em>The driver has a deep gash over his face and rope burns on his hands.</em>'
              }
            },
            {
              label: '[Investigate the cargo]',
              action: actionService.smallTalk,
              actionProps: {
                smallTalkActionTaken: false,
                epilog: '<em>The cargo is unharmed and consists of empty bottles and vials.</em>'
              }
            },
            {
              label: '"I know what happend"',
              action: actionService.progress,
              actionProps: {
                epilog: 'PROGRESS'
              }
            },
            {
              label: '"I have no idea"',
              action: actionService.abort,
              actionProps: {
                epilog: 'END'
              }
            },
          ],
        },
        {
          text: 'CONCLUTION',
          actions: [
            {
              label: 'The driver was ambushed',
              action: actionService.abort,
              actionProps: {
                epilog: '<em>END</em>'
              }
            },
            {
              label: 'The cargo caused the crash',
              action: actionService.modifySecretQuestFlags,
              actionProps: {
                flag: 'WagonInvestigation',
                flagMod: true,
                epilog: '<em>END</em>'
              }
            },
            {
              label: 'The wagon breaking caused the crash',
              action: actionService.abort,
              actionProps: {
                epilog: '<em>END</em>'
              }
            },
            {
              label: 'The driver caused the crash',
              action: actionService.abort,
              actionProps: {
                epilog: '<em>END</em>'
              }
            }
          ],
        },
      ]
    },
//Scenario
    {
      text: '<em>From a crevice in the rock wall a mountain goblin shouts at you</em> "Hey there man-thing, watch out for falling rocks, yes!" ',
      speaker: {
        char: 'goblin',
        mood: 'mad',
        name: '',
        faction: ''
      },
      language: 'goblinSpeak',
      actions: [
        {
          label: '[Speak Goblin] "Sure thing, thanks little friend".',
          visibleWhen: 'questFlags.goblinSpeak.active',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'boblin',
            factionMod: 1,
            epilog: '<em>The goblin nods and smiles.</em>'
          }
        },
        {
          label: '"I. Dont. Under-stand. You."',
          visibleWhen: '!questFlags.goblinSpeak.active',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>You mouth each word slowly and point to your own mouth and ears. The goblin tilts it head from side to side and then scoff at you.</em>'
          }
        },
      ],
    },
//Scenario
    {
      text: '<em>Two dwarves are shouting at each other, one screams;</em> "My axes are the best!" <em>The other snorts;</em> "Nah my swords are better!"',
      actions: [
        {
          label: '"Hello master dwarves, what seems to be the issue?"',
          action: actionService.smallTalk,
          actionProps: {
            epilog: '<em>They both turn to look at you.</em>"Well my rotworm of a brother here claims he can make swords that are better than my axes, can you belive it?"<em>The other dwarf snorts</em>"Better? I dont see how anyone could make anything worse than those blunt lumps of bronze"\n<em>They lock eyes again and start shouting.</em>'
          }
        },
        {
          label: '[Pay 20 Gold] "Sell me the axe" ',
          visibleWhen: 'inventory.gold >= 20',
          action: actionService.exchange,
          actionProps: {
            exchangeCatergoryA: 'inventory',
            exchangeKeyA: 'gold',
            exchangeAmountA: 20,
            exchangeCatergoryB: 'inventory',
            exchangeKeyB: '123',
            exchangeAmountB: 1,
            epilog: '<em>You buy a heavy bronze axe. The dwarf with the swords glares at you.</em>'
          }
        },
        {
          label: '[Pay 20 Gold] "Sell me the sword" ',
          visibleWhen: 'inventory.gold >= 20',
          action: actionService.exchange,
          actionProps: {
            exchangeCatergoryA: 'inventory',
            exchangeKeyA: 'gold',
            exchangeAmountA: 20,
            exchangeCatergoryB: 'inventory',
            exchangeKeyB: '123',
            exchangeAmountB: 1,
            epilog: '<em>You buy a bright silver sword. The dwarf with the axes glares at you.</em>'
          }
        },
        {
          label: 'Best not to get involved',
          action: actionService.abort,
          actionProps: {
            epilog: 'You quickly move on before you get mixed up in the fight.'
          }
        },
      ],
    },
  ]
});
