app.service('scenarioHenry', function(actionService) {

  this.scenarios = [
//Scenario
    {
      text: '<em>You look over to Henry</em>',
      specialIntros: [
        {
          visibleWhen: "$scope.currentRegion.short === 'hdf'",
          text: '<em>You look over to Henry, as he struggles to set up a small tent.</em>'
        },
        {
          visibleWhen: "$scope.currentRegion.short === 'trm'",
          text: '<em>You look over to Henry, he is pale and holding a pint of milk with both hands.</em>'
        },
        {
          visibleWhen: "$scope.currentRegion.short === 'grm' && $scope.followers.boblin.following",
          text: '<em>Henry is sitting beside you, looking over your shoulder at Boblin skipping among the rocks before you.</em> "Are you sure he wont just lead us into an ambush?"'
        }
      ],
      speaker: {
        char: 'henry',
        name: 'Henry',
        faction: ''
      },
      everGreen: true,
      actions: [
        {
          label: '"Im not worried about any ambush, Boblin isnt like these mountain goblins."',
          visibleWhenAND: {
            a: "currentRegion.short === 'grm'",
            b: "followers.boblin.following"
          },
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Henry mumble something under his breath and keeps walking.</em>'
          }
        },
        {
          label: '"An ambush? You might be right. I`ll keep Boblin on a short leash just in case."',
          visibleWhenAND: {
            a: "currentRegion.short === 'grm'",
            b: "followers.boblin.following"
          },
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Henry looks a bit more confident and nods.</em>'
          }
        },
        {
          label: '"You -eh- doing ok there Henry?"',
          visibleWhen: "currentRegion.short === 'trm'",
          action: actionService.abort,
          actionProps: {
            epilog: '<em>He looks at you and you notice the fear in his eyes.</em>"Frankly, no. These places gives me the willies, so many drunks and ruffians in one place at once."'
          }
        },
        {
          label: '"What do you think about Boblin?"',
          visibleWhenAND: {
            a: "currentRegion.short === 'hdf'",
            b: "followers.boblin.following"
          },
          action: actionService.abort,
          actionProps: {
            epilog: '<em>Henry looks like he ate something sour.</em>"Goblins are indeed not my prefered company, they have a habit of... making a mess"\n\n<em>Boblin tilts his head while you talk but suddenly leaps into a bush and emerge with a dead bird in his mouth that he violently shakes throwing feathers everywhere nearby.</em>'
          }
        },
        {
          label: '"So.. whats your name?"',
          action: actionService.abort,
          actionProps: {
            epilog: '"Im Henry."'
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
