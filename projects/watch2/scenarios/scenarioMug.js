app.service('scenarioMug', function(actionService) {

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
      actions: [
        {
          label: '[Pay 1 Gold] "Ale please." ',
          action: actionService.exchange,
          actionProps: {
            exchangeCatergoryA: 'inventory',
            exchangeKeyA: 'gold',
            exchangeAmountA: 1,
            exchangeCatergoryB: 'inventory',
            exchangeKeyB: '123',
            exchangeAmountB: 1,
            epilog: '<em>She winks and disappear for a moment before returning with a flagon.</em>"There ya go, enjoy!"'
          }
        },
        {
          label: '[Pay 1 Gold] "Got anything to eat?" ',
          action: actionService.exchange,
          actionProps: {
            exchangeCatergoryA: 'inventory',
            exchangeKeyA: 'gold',
            exchangeAmountA: 1,
            exchangeCatergoryB: 'inventory',
            exchangeKeyB: '123',
            exchangeAmountB: 1,
            epilog: '<em>She nods</em>"Hold on just a moment, i´ll be back with todays special"<em>She disappear for a moment before returning with a bowl of stew.</em> "There ya go, enjoy!"'
          }
        },
        {
          label: '"Nothing right now"',
          action: actionService.modifySecretQuestFlags,
          visibleWhen: '!secretquestFlags.MugNoOrder',
          actionProps: {
            flag: 'MugNoOrder',
            flagMod: true,
            epilog: '<em>She lets out a frustrated sigh</em>"Thats all right for now kind sir, but dont you sit here wasting space without paying for neither food nor drink."'
          }
        },
        {
          label: '"Nothing right now"',
          action: actionService.abortEntireScenario,
          visibleWhen: 'secretquestFlags.MugNoOrder',
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
      ],
    },
//Scenario
    {
      text: '<em>A young dragonborn waitress hurries to your table.</em>"Welcome to The rusty mug, can i get you anything?"',
      actions: [
        {
          label: '[Pay 1 Gold] "Ale please." ',
          action: actionService.exchange,
          actionProps: {
            exchangeCatergoryA: 'inventory',
            exchangeKeyA: 'gold',
            exchangeAmountA: 1,
            exchangeCatergoryB: 'inventory',
            exchangeKeyB: '123',
            exchangeAmountB: 1,
            epilog: '<em>She winks and disappear for a moment before returning with a flagon.</em>"There ya go, enjoy!"'
          }
        },
        {
          label: '[Pay 1 Gold] "Got anything to eat?" ',
          action: actionService.exchange,
          actionProps: {
            exchangeCatergoryA: 'inventory',
            exchangeKeyA: 'gold',
            exchangeAmountA: 1,
            exchangeCatergoryB: 'inventory',
            exchangeKeyB: '123',
            exchangeAmountB: 1,
            epilog: '<em>She nods</em>"Hold on just a moment, i´ll be back with todays special"<em>She disappear for a moment before returning with a bowl of stew.</em> "There ya go, enjoy!"'
          }
        },
        {
          label: '"Nothing right now"',
          action: actionService.modifySecretQuestFlags,
          visibleWhen: '!secretquestFlags.MugNoOrder',
          actionProps: {
            flag: 'MugNoOrder',
            flagMod: true,
            epilog: '<em>She lets out a frustrated sigh</em>"Thats all right for now kind sir, but dont you sit here wasting space without paying for neither food nor drink."'
          }
        },
        {
          label: '"Nothing right now"',
          action: actionService.abortEntireScenario,
          visibleWhen: 'secretquestFlags.MugNoOrder',
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
      ],
    },
//Scenario
    {
      text: '<em>At the table next to yours two orks are playing poker</em>',
      actions: [
        {
          label: '"How nice for them"',
          action: actionService.abortEntireScenario,
          actionProps: {
            epilog: '{TEST: no more scenarios after this one}'
          }
        },
      ],
    },
  ]
});
