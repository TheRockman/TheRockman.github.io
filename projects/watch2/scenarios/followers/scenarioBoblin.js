app.service('scenarioBoblin', function(actionService) {

  this.scenarios = [
//Scenario
    {
      text: '<em>Boblin turns to look at you, his long ears flopping about</em>',
      speaker: {
        char: 'goblin',
        name: 'Boblin the goblin',
        faction: ''
      },
      everGreen: true,
      actions: [
        {
          label: '[Pat Boblins head]',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'boblin',
            factionMod: 1,
            epilog: '<em>Goblins are indeed strage creatures.</em>'
          }
        },
        {
          label: '"Do you know these mountain goblins?"',
          visibleWhen: 'currentRegion.short === "grm"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Boblin nods</em>"Big-rock goblins and tree-goblins had big fight long-long ago. Careful."'
          }
        },
        {
          label: '"Had any good hunts lately?"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Boblin nods</em>"Big bundle of yummy eggs in tree. Boblin throw spear. Hit fether-snacks, then climb quickly up tree. Good."'
          }
        },
        {
          label: '"I think its time we part ways"',
          action: actionService.toggleFollower,
          actionProps: {
            follower: 'boblin',
            epilog: '<em>Boblin nods slowly and scurries away</em>'
          }
        },
        {
          label: '"Let get going"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Boblin nods, yawns and crawls into your backpack. A few moments later you hear him snoring.</em>'
          }
        },
      ],
    },

  ]
});
