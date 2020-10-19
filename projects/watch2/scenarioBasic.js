app.service('scenarioBasic', function(actionService) {
  this.scenarios = [
//Scenario
    {
      text: 'A knight appear',
      actions: [
        {
          label: 'Bow',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'crown',
            factionMod: 1,
            epilog: 'She returns the bow with a smile and rides away.'
          }
        },
        {
          label: 'Scoff',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'crown',
            factionMod: -1,
            epilog: 'She rides away in a huff.'
          }
        },
        {
          label: 'Say nothing',
          action: actionService.abort,
          actionProps: {
            epilog: 'She rides away.'
          }
        }
      ],
    },
//Scenario
    {
      text: 'Around midnight a mysterious robed stranger comes to the camp and asks to stay the night.',
      actions: [
        {
          label: '"Take a seat by the fire"',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'mages',
            factionMod: 1,
          }
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
            },
            {
              label: 'Thats just skyrim',
              action: actionService.modifyStat,
              actionProps: {
                stat: 'wis',
                statMod: 1,
                epilog: '"Thats right..." he says.\nThe stranger shifts and shakes before running back into the woods.\nYou notice him dropping a pice of paper with the name "Bodd Howrad" on it.'
              }
            },
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
    },
//Scenario
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      actions: [
        {
          label: 'Ignore it',
          action: actionService.abort,
          actionProps: {
            epilog: '"Its probably just a goblin" you think to yourself.'
          }
        },
        {
          label: '[Mages loyalty] It could be a dragon, better stay away.',
          visibleWhen: 'factions.mages > 0',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'mages',
            factionMod: 1,
            epilog: '"better safe than sorry"'
          }
        },
        {
          label: '[Dex] Catch it',
          visibleWhen: 'stats.dex > 5',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'mages',
            factionMod: 1,
            epilog: '"You jump into the grass but dont catch anything."'
          }
        },
      ],
    },
  ]
});
