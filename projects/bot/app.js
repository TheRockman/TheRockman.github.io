var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope, $timeout) {
  $scope.convoProgress = 0;
  $scope.messages = [
    {
      id: guid(),
      botMsg: 'Hi, im Bot',
      myMsg: '',
      replies: [
        {
          replyMsg: 'Hello Bot'
        }
      ]
    }
  ];

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  $scope.sendReply = function (reply, source, text) {
    if (reply.endThread) {
      return;
    }
    source = null;
    $scope.messages.push({
      id: guid(),
      botMsg: '',
      meMsg: (text) ? text : reply.replyMsg,
      replies: null
    })
    if (reply.forkIndex) {
      $scope.convoProgress = reply.forkIndex;
    } else {
      $scope.convoProgress = $scope.convoProgress + 1;
    }
    prepBotReply();
  }

  function prepBotReply() {
    var reply = {};
    switch ($scope.convoProgress) {
      case 1:
      reply = {
        botMsg: 'How are you doing?',
        replies: [
          {
            replyMsg: 'Pretty good',
          },
          {
            replyMsg: 'Not so good',
            forkIndex: 1000
          }
        ]
      };
      break;
      case 2:
      reply = {
        botMsg: 'Awesome m8 😂. So, what can i do for you?',
        replies: [
          {
            replyMsg: 'Complaints',
            forkIndex: 2000
          },
          {
            replyMsg: 'Service',
            forkIndex: 3000
          },
          {
            replyMsg: 'My orders',
            forkIndex: 4000
          }
        ]
      };

      break;
      case 1000:
      reply = {
        botMsg: 'That sucks bro 😔, anything i can do to help?',
        replies: [
          {
            replyMsg: 'Complaints',
            forkIndex: 2000
          },
          {
            replyMsg: 'Service',
            forkIndex: 3000
          },
          {
            replyMsg: 'My orders',
            forkIndex: 4000
          }
        ]
      };

      break;
      case 2000:
      reply = {
        botMsg: 'Sorry to hear you are not satisfied. Tell me a little about it and we will get back to you ASAP',
        replies: [
          {
            replyMsg: '',
            freeTextAllowed: true
          }
        ]
      };
      break;
      case 2001:
      reply = {
        botMsg: 'Got it',
        replies: null,
        forkIndex: 10000
      };
      break;
      case 3000:
      reply = {
        botMsg: 'Sure thing, we have open slots at 3pm and 5pm today',
        replies: [
          {
            replyMsg: '3pm, please',
            replies: 3001
          },
          {
            replyMsg: '5pm please',
            replies: null,
            forkIndex: 3002
          },
          {
            replyMsg: 'Neither',
            replies: null,
            forkIndex: 3003
          }
        ]
      };
      break;
      case 3001:
      reply = {
        botMsg: 'Then i will put you up for 3pm, let me know if you want to change or cancel',
        replies: null,
        forkIndex: 10000
      };
      break;
      case 3002:
      reply = {
        botMsg: 'Then i will put you up for 5pm, let me know if you want to change or cancel',
        replies: null,
        forkIndex: 10000
      };
      break;
      case 3003:
      reply = {
        botMsg: 'Ok, then check in tomorrow again',
        replies: null,
        forkIndex: 10000
      };

      break;
      case 4000:
      reply = {
        botMsg: 'Hmmm looks like you dont have any orders',
        replies: [
          {
            replyMsg: 'Yes i do',
            replies: null
          },
          {
            replyMsg: 'Ok, cool',
            replies: null,
            forkIndex: 10000
          }
        ]
      };
      break;
      case 4001:
      reply = {
        botMsg: 'ok... I will let my buddy Dave look at it, hold on, he´ll call you soon 👍',
        replies: null,
        forkIndex: 10000
      };

      break;
      case 10000:
      reply = {
        botMsg: 'Alright, bye for now 👋 👋 👋',
        replies: null,
        endThread: true
      };
    }
    $scope.sendBotReply(reply)
  }

  $scope.sendBotReply = function (reply) {
    $scope.botTyping = true;
    $timeout( function(){
      $scope.botTyping = false;
      $scope.messages.push({
        id: guid(),
        botMsg: reply.botMsg,
        meMsg: '',
        replies: reply.replies
      })
    }, 2000 );
  }

});
