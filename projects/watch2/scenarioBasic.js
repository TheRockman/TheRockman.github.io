app.service('scenarioBasic', function(actionService) {
  var ratcatchers = "A derogatory term for adventurers";
  
  this.scenarios = [
//Scenario
    {
      text: 'The sound of plate against plate pierce the silence. From around the bend in the path a knight emerge.',
      actions: [
        {
          label: '[Stand up and bow]',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'crown',
            factionMod: 1,
            epilog: '"Greetings adventurer"<em>She nods back at you but doesnt stop walking.</em>'
          }
        },
        {
          label: '[Glare silently]',
          action: actionService.modifyFactionRating,
          actionProps: {
            faction: 'crown',
            factionMod: -1,
            epilog: '"Where are your manners <aside>ratcatcher<i>'+ratcatchers+'</i></aside>?"<em>She sneer at you and puts her hand on the hilt of her sword, but then relaxes.</em>"Forget it, but my lord will know what lowlife his subjects are, be sure of that"<em>She keeps walking and evenentually even the shimmer of her armour cant be seen between the trees anymore.</em>'
          }
        },
        {
          label: '"Hello"',
          action: actionService.modifyQuestFlags,
          actionProps: {
            flag: 'knowGwen',
            flagMod: true,
            epilog: '<em>She looks at you with a confused look but then smiles.</em>"Hello there yourself, I am Syr Gwendolin"<em>She puts her hand on her chest and bows before quickly moving along.</em>'
          }
        },
        {
          label: '[Climb a mointain]',
          action: actionService.modifyRegion,
          actionProps: {
            region: 'Gorillion mountains',
            epilog: '<em>You start climbing the Gorillion mountains.</em>'
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
          text: '<em>The stranger sits down and lights a pipe and the the two of you share stories of adventures you both have had.',
          actions: [
            {
              label: '[Listen silently]',
              action: actionService.progress
            },
            {
              label: '[Know Gwendolin] "Do you know Syr Gwendolin? She is a good friend of mine."',
              visibleWhen: 'questFlags.knowGwen',
              action: actionService.modifyQuestFlags,
              actionProps: {
                faction: 'crown',
                factionMod: 1,
                epilog: 'Even if you cant really see his face you feel the cold look he is giving you.<em>"No, im afraid i dont..."</em>The embers from his pipe flair up and illuminate his milky white eyes.\nAfter you look away for a moment he is gone.'
              }
            },
          ],
        },
        {
          text: '<em>The stranger tells you about far off lands where wild men fight dragons.</em>',
          actions: [
            {
              label: '[Listen silently]',
              action: actionService.progress
            },
            {
              label: '"Thats just skyrim"',
              action: actionService.modifyStat,
              actionProps: {
                stat: 'wis',
                statMod: 1,
                epilog: '"Thats right..." he says.<em>The stranger shifts and shakes before running back into the woods.\nYou notice him dropping a pice of paper with the name "Bodd Howrad" on it.</em>'
              }
            },
          ],
        },
        {
          text: '<em>You listen to the strangers story but you must have fallen asleep at some point since you awake at dawn.</em>',
          actions: [
            {
              label: 'OK',
              action: actionService.abort,
              actionProps: {
                epilog: '<em>You look around but there is no trace of the stranger other than a faint smell of tobacco.</em>'
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
          label: '[Ignore it]',
          action: actionService.abort,
          actionProps: {
            epilog: '"Its probably just a <aside>gropper <i>A small furry creature with long tusks and wings</i></aside>" <em>you think to yourself.</em>'
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
