app.service('scenarioBoblin', function(actionService) {

  this.scenarios = [
//Scenario
    {
      text: '<em>Boblin turns to look at you, his long ears flopping about</em>',
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
      text: '<em>Boblin looks out over a ledge</em>"Long drop, skyspire goblins brave"',
      visibleWhen: "$scope.currentRegion.short === 'trm'",
      actions: [
        {
          label: '"You ok Boblin?"',
          action: actionService.abort,
          actionProps: {
            epilog: '"Boblin also brave, climbs tall trees all day"'
          }
        }
      ],
    },
    {
      text: '"Boblin hunt, find nice fether snack"',
      actions: [
        {
          label: '"Great..."',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>You look away as the goblin chomps down a dead bird in one bite</em>'
          }
        }
      ],
    },
    {
      text: '"Boblin go away, tribe need Boblin"',
      actions: [
        {
          label: '"OK, bye Boblin"',
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
