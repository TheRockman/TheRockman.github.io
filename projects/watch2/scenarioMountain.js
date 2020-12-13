app.service('scenarioMountain', function(actionService) {

  this.scenarios = [
//Scenario
    {
      text: 'In front of you the peaks of the Gorillion mountains tower towards the shredded skies.',
      everGreen: true,
      actions: [
        {
          label: '"[Proceed]"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Each solid foothold and each sturdy grip you get is a victory hard won.</em>'
          }
        },
        {
          label: '[Turn back to the forest]',
          action: actionService.modifyRegion,
          actionProps: {
            region: 'hdf',
            epilog: '<em>If there is anything mountains can it wait for another day.</em>'
          }
        }
      ],
    },
//Scenario
    {
      text: '<em>From a crevice in the rock wall a mountain goblin shouts at you</em> "Hey there man-thing, watch out for falling rocks, yes!" ',
      speaker: {
        avatar: 'https://wiki.dfo.world/images/e/e2/Portrait-Goblin_Thrower.png',
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
          label: '[Pay 20 Gold] "Sell me the axe" ',
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
