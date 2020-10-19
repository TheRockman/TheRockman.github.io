app.service('scenarioBasic', function(actionService) {
  this.scenarios = [
    {
      text: 'A knight appear',
      actions: [
        {
          label: 'Bow',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'king',
            factionMod: 1
          }
        },
        {
          label: 'Scoff',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'king',
            factionMod: -1
          }
        },
        {
          label: 'say nothing',
          action: actionService.abort,
          actionProps: {
            epilog: 'he rides away.'
          }
        }
      ],
    },
    {
      text: 'Around midnight a mysterious robed stranger comes to the camp and asks to stay the night.',
      actions: [
        {
          label: '"Take a seat by the fire"',
          action: actionService.progress
        },
        {
          label: '"Leave"',
          action: actionService.abort,
          actionProps: {
            epilog: 'he walks away.'
          }
        }
      ],
      path: [
        {
          text: 'The stranger sits down and lights a pipe. The the two of you share stories of adventures you both have had.',
          actions: [
            {
              label: 'Ask more about the stranger',
              action: actionService.progress
            }
          ],
        },
        {
          text: 'The stranger tells you about far off lands where wild men fight dragons.',
          actions: [
            {
              label: 'Listen',
              action: actionService.progress
            }
          ],
        },
        {
          text: 'You listen to the strangers story but you must have fallen asleep at some point since you awake at dawn.',
          ending: 'You look around but there is no trace of the stranger other than a faint smell of tobacco.',
          actions: [
            {
              label: 'OK',
              action: actionService.abort,
              actionProps: {
                epilog: 'the stranger is gone.'
              }
            }
          ],
        }
      ]
    }
  ]
});
