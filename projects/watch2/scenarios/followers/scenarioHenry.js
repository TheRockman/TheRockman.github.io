app.service('scenarioHenry', function(actionService) {

  this.scenarios = [
//Scenario
    {
      text: '<em>You look over to Henry</em>',
      speaker: {
        char: 'henry',
        name: 'Henry',
        faction: ''
      },
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
          label: '"What do you think about Boblin?"',
          visibleWhen: "followers.boblin.following",
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Henry looks like he ate something sour.</em>"Goblins are indeed not my prefered company, they have a habit of... making a mess"\n\n<em>Boblin tilts his head while you talk but suddenly leaps into a bush and emerge with a dead bird in his mouth that he violently shakes throwing feathers everywhere nearby.</em>'
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
