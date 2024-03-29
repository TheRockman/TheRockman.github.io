app.service('scenarioMug', function(actionService, itemIndex) {
let item = itemIndex.items;

  this.scenarios = [
//Scenario
    {
      text: '<em>In a quiet valley between the mountains stands the town of Grimdale. A few small houses are scattered around a larger townhouse. Above the door of the larger house hangs a crude tavern sign: "The rusty mug". You enter and take a seat by one of the tables.</em>',
      everGreen: true,
      actions: [
        {
          label: '[Proceed]',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>There are alot more folks here than you would have expected, to the point that the staff looks somewhat overwhelmed.</em>'
          }
        }
      ],
    },
//Scenario
    {
      text: '<em>In a booth in a darker corner of the tavern you spot the glint of yellow lidless eyes fixed on you.</em>',
      speaker: {
        char: 'zix',
        name: '',
        faction: ''
      },
      actions: [
        {
          label: '"Hello there"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>The dragon lizard twitches a bit but you cant tell if its natural or because you called out to them.</em>'
          }
        },
        {
          label: '"I have this boot for you"',
          action: actionService.multiAction,
          visibleWhen: 'inventory.oldBoot.quantity',
          actionProps: {
            multiActionChain: [
              {
                action: actionService.modifyQuestList,
                actionProps:{
                  quest: {
                    title: 'Das boot',
                    clear: true
                  }
                }
              },
              {
                action: actionService.awardExp,
                actionProps:{
                  expMod: 5
                }
              },
              {
                action: actionService.takeItemFromInventory,
                actionProps: {
                  item: {
                    id: 'oldBoot',
                    name: 'Lether boot',
                    img: 'img/items/boot.png',
                    desc: 'An old boot not fit to use.',
                    use: '',
                  },
                  quantity: 1,
                  epilog: '<em>She takes the boot</em>'
                }
              },
            ],
          }
        },
        {
          label: '[ignore her]',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Best to avoid getting mixed up in anything here.</em>'
          }
        },
      ],
    },
//Scenario
    {
      text: '<em>You overhear a heated discussion between a drunken elf and a furious dwarf at the bar</em> "You and your kin are the reason im drinking yá know, im out of a job because of that cursed forest you all call a home".<em>The elf looks up from his drink.</em>"Well if you greedy mayflies didnt cut it down in the first place it wouldnt fight back, hows that?"',
      actions: [
        {
          label: '"By Tyr, the dwarf is right. People are suffering because of the cursed woods and the elves do nothing to stop it."',
          action: actionService.multiAction,
          actionProps: {
            multiActionChain: [
              {
                action: actionService.modifyFactionRating,
                actionProps:{
                  faction: 'dwarf',
                  factionMod: 5,
                }
              },
              {
                action: actionService.modifyFactionRating,
                actionProps:{
                  faction: 'elf',
                  factionMod: -5,
                }
              },
              {
                action: actionService.progress,
                actionProps:{},
              },
            ],
          }
        },
        {
          label: '"Well spoken master elf, the woods have done nothing wrong in protecting itself. We should help it drive the dwarves out."',
          action: actionService.multiAction,
          actionProps: {
            multiActionChain: [
              {
                action: actionService.modifyFactionRating,
                actionProps:{
                  faction: 'dwarf',
                  factionMod: -5,
                }
              },
              {
                action: actionService.modifyFactionRating,
                actionProps:{
                  faction: 'elf',
                  factionMod: 5,
                }
              },
              {
                action: actionService.progress,
                actionProps:{},
              },
            ],
          }
        },
        {
          label: '[Look around]',
          action: actionService.smallTalk,
          actionProps: {
            smallTalkActionTaken: false,
            epilog: 'You dont see any other elves or dwarves around.'
          }
        },
        {
          label: '[Dont get involved]',
          action: actionService.abort,
          actionProps: {
            epilog: '"Better not pick a fight in a place like this" <em>you think to yourself.</em>'
          }
        },
      ],
      path: [
        {
          text: '<em>They both look at you, and then at eachother</em>',
          actions: [
            {
              label: '[Cha check] "Now sirs, calm down, i didnt mean to butt in, the ale must be getting to me"',
              action: actionService.skillCheck,
              actionProps: {
                skill: 'cha',
                dc: 12,
                passCheckAction: actionService.abort,
                failCheckAction: actionService.abort,
                critEpilog: '<em>They both start laughing and slap your shoulders before returning to their drinks</em>',
                passEpilog: '<em>They both just shade their heads before silently raising their glasses again</em>',
                failEpilog: '<em>They both look ready to fight, but luckily the barkeeper appear behind them.</em>"Hey! If you dont simmer down i´ll have you thrown out. That goes for all three of you. Now go back to your drinks."'
              }
            },
            {
              label: '[Str check] "What? You want a go?"',
              action: actionService.skillCheck,
              actionProps: {
                skill: 'str',
                dc: 12,
                passCheckAction: actionService.abort,
                failCheckAction: actionService.abort,
                critEpilog: '<em>You quickly knock them both out with their own tankards.</em>',
                passEpilog: '<em>The three of you fly into a pile on the sticky tavern floor, fists and kicks fly but after a moment you emerge victorious</em>',
                failEpilog: '<em>You barely utter question before two fists plant themselves in you face and everything goes black. When you come to they are both gone.'
              }
            },
          ],
        }
      ]
    },
//Scenario
    {
      text: '<em>A young dragonborn waitress hurries to your table.</em>"Welcome to The rusty mug, can i get you anything?"',
      speaker: {
        char: 'dragonLizard',
        name: '',
        faction: ''
      },
      actions: [
        {
          label: '"Let me see the menu." ',
          action: actionService.shop,
          actionProps: {
            forSale: [
              {
                item: item['ale'],
                price: '5',
                quantity: 5,
              },
              {
                item: item['wine'],
                price: '5',
                quantity: 5,
              },
              {
                item: item['stew'],
                price: '8',
                quantity: 2,
              }
            ],
            epilog: '<em>She points to a sign above the bar.</em>'
          }
        },
        {
          label: '"Nothing right now"',
          action: actionService.modifySecretQuestFlags,
          visibleWhenAND: {
            a: '!secretquestFlags.MugNoOrder',
            b: '!currentShop'
          },
          actionProps: {
            flag: 'MugNoOrder',
            flagMod: true,
            epilog: '<em>She lets out a frustrated sigh</em>"Thats all right for now kind sir, but dont you sit here wasting space without paying for neither food nor drink."'
          }
        },
        {
          label: '"Nothing right now"',
          action: actionService.abortEntireScenario,
          visibleWhenAND: {
            a: 'secretquestFlags.MugNoOrder',
            b: '!currentShop'
          },
          actionProps: {
            epilog: '<em>She tighten her lips</em>"I did warn ya about wasting time and space good sir, now get out!"'
          }
        },
        {
          label: '"No but tell me; how does a mighty dragonborn like you end up in a place like this?"',
          action: actionService.smallTalk,
          actionProps: {
            smallTalkActionTaken: false,
            epilog: '<em>If scales could blush you are sure hers would right now</em>"Well, hording gold isnt viable in this day and age, so even we have to work for our daily meat"'
          }
        },
        {
          label: '"Thanks, that will be all."',
          action: actionService.abort,
          visibleWhen: 'currentShop',
          actionProps: {
            epilog: '<em>She tends to the other tables."'
          }
        },
      ],
    },
//Scenario
    {
      text: '<em>A young dragonborn waitress hurries to your table.</em>"Welcome to The rusty mug, can i get you anything?"',
      speaker: {
        char: 'dragonLizard',
        name: '',
        faction: ''
      },
      actions: [
        {
          label: '"Let me see the menu." ',
          action: actionService.shop,
          actionProps: {
            forSale: [
              {
                item: item['ale'],
                price: '5',
                quantity: 5,
              },
              {
                item: item['wine'],
                price: '5',
                quantity: 5,
              },
              {
                item: item['stew'],
                price: '8',
                quantity: 2,
              }
            ],
            epilog: '<em>She points to a sign above the bar.</em>'
          }
        },
        {
          label: '"Nothing right now"',
          action: actionService.modifySecretQuestFlags,
          visibleWhenAND: {
            a: '!secretquestFlags.MugNoOrder',
            b: '!currentShop'
          },
          actionProps: {
            flag: 'MugNoOrder',
            flagMod: true,
            epilog: '<em>She lets out a frustrated sigh</em>"Thats all right for now kind sir, but dont you sit here wasting space without paying for neither food nor drink."'
          }
        },
        {
          label: '"Nothing right now"',
          action: actionService.abortEntireScenario,
          visibleWhenAND: {
            a: 'secretquestFlags.MugNoOrder',
            b: '!currentShop'
          },
          actionProps: {
            epilog: '<em>She tighten her lips</em>"I did warn ya about wasting time and space good sir, now get out!"'
          }
        },
        {
          label: '"No but tell me; how does a mighty dragonborn like you end up in a place like this?"',
          action: actionService.smallTalk,
          actionProps: {
            smallTalkActionTaken: false,
            epilog: '<em>If scales could blush you are sure hers would right now</em>"Well, hording gold isnt viable in this day and age, so even we have to work for our daily meat"'
          }
        },
        {
          label: '"Thanks, that will be all."',
          action: actionService.abort,
          visibleWhen: 'currentShop',
          actionProps: {
            epilog: '<em>She tends to the other tables."'
          }
        },
      ],
    },
  ]
});
