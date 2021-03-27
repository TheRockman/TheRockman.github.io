app.service('scenarioHenry', function(actionService) {

  this.scenarios = [
//Scenario
    {
      text: '<em>You look over to Henry</em>',
      everGreen: true,
      actions: [
        {
          label: '"[Proceed]"',
          action: actionService.abort,
          actionProps: {
            epilog: '<em></em>'
          }
        }
      ],
    },
    {
      text: '<em>Henry holds a mug of ale and looks nervous</em>',
      visibleWhen: "$scope.currentRegion.short === 'trm'",
      actions: [
        {
          label: '"You ok Henry?"',
          action: actionService.abort,
          actionProps: {
            epilog: '"Frankly, no. These places gives me the willies, all these drunks and ruffians."'
          }
        }
      ],
    },
    {
      text: '"I think its time i left"',
      actions: [
        {
          label: '"OK, bye Henry"',
          action: actionService.toggleFollower,
          actionProps: {
            follower: 'henry',
            epilog: '<em>Henry left your party.</em>'
          }
        },
      ],
    },

  ]
});
