app.service('scenarioMug', function(actionService) {

  this.scenarios = [
//Scenario
    {
      text: 'In a quiet valley between the mountains stands the town of Grimdale. A few small houses are scattered around a larger townhouse. Above the door of the larger house hangs a crude tavern sign: "The rusty mug". You enter and take a seat by one of the tables.',
      everGreen: true,
      actions: [
        {
          label: '"[Proceed]"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>There are alot more folks here than you would have expected, to the point that the staff looks somewhat overwhelmed.</em>'
          }
        }
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
          label: '"1 Not right now"',
          action: actionService.modifySecretQuestFlags,
          visibleWhen: '!secretquestFlags.MugNoOrder',
          actionProps: {
            flag: 'MugNoOrder',
            flagMod: true,
            epilog: '<em>She lets out a frustrated sigh</em>"Thats all right for now kind sir, but dont you sit here wasting space without paying for neither food nor drink."'
          }
        },
        {
          label: '"2 Not right now"',
          action: actionService.abortEntireScenario,
          visibleWhen: 'secretquestFlags.MugNoOrder',
          actionProps: {
            epilog: '<em>She tighten her lips</em>"I did warn ya about wasting time and space good sir, now get out!"'
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
          label: '"3 Not right now"',
          action: actionService.modifySecretQuestFlags,
          visibleWhen: '!secretquestFlags.MugNoOrder',
          actionProps: {
            flag: 'MugNoOrder',
            flagMod: true,
            epilog: '<em>She lets out a frustrated sigh</em>"Thats all right for now kind sir, but dont you sit here wasting space without paying for neither food nor drink."'
          }
        },
        {
          label: '"4 Not right now"',
          action: actionService.abortEntireScenario,
          visibleWhen: 'secretquestFlags.MugNoOrder',
          actionProps: {
            epilog: '<em>She tighten her lips</em>"I did warn ya about wasting time and space good sir, now get out!"'
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
            epilog: 'TEST: no more scenarios after this one'
          }
        },
      ],
    },
  ]
});
