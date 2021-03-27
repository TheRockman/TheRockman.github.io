app.service('scenarioHenry', function(actionService) {

  this.scenarios = [
//Scenario
    {
      text: '<em>You look over to Henry</em>',
      everGreen: true,
      actions: [
        {
          label: '"You -eh- doing ok there Henry?"',
          visibleWhen: "currentRegion.short === 'trm'",
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Henry is looking pale and holding his pint of milk with both hands</em>"Frankly, no. These places gives me the willies, so many drunks and ruffians in one place at once."'
          }
        },
        {
          label: '"Who are you again?"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Henry looks sad and annoyed at the same time.</em>"Im Henry"'
          }
        },
        {
          label: '"I think its time we part ways"',
          action: actionService.toggleFollower,
          actionProps: {
            follower: 'henry',
            epilog: '<em>Henry leaves</em>'
          }
        },
        {
          label: '"Let get going"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Henry nods and grabs his backpack.</em>'
          }
        },
      ],
    },

  ]
});
