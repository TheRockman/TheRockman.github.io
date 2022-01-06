app.service('dungeonSwamp', function(actionService, itemIndex) {
let item = itemIndex.items;

  this.scenarios = [
//Scenario
    {
      text: '<em>0 test</em>',
      everGreen: true,
      actions: [
        {
          label: '[Proceed]',
          action: actionService.abort,
          actionProps: {
            epilog: '<em>0 --> 1</em>'
          }
        }
      ],
    },
//Scenario
    {
      text: '<em>1 test - rubble block the way</em>',
      actions: [
        {
          label: '1 test',
          action: actionService.abort,
          actionProps: {
            epilog: '1 --> 2'
          }
        },
        {
          label: '1 test',
          visibleWhen: 'inventory.crowbar.quantity > 0',
          action: actionService.abort,
          actionProps: {
            epilog: '1 --> 2'
          }
        },
      ],
    },
//Scenario
    {
      text: '<em>2 test</em>',
      actions: [
        {
          label: '2 test',
          action: actionService.abort,
          actionProps: {
            epilog: '2 --> 3'
          }
        },
      ],
    },

  ]
});
