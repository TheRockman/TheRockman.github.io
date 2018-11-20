var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope, $timeout) {


  function sayIt(query, language) {
    var q = new SpeechSynthesisUtterance(query);
    q.lang = language;
    q.rate = 1;
    speechSynthesis.speak(q);
  }

  $scope.overlay = true;

  $scope.conversation = [
    {
      line: "Hello! Identification and clearances required, Who are you sir?",
      replies: [
        {
          line: "Just a merchant...",
          replies: {
            line: "A merchant of what exactly?",
            replies: [
              {
                line: "Imported Grexian crystals",
                end: true,
                endLine: "The sale of this substance is prohibited. I am contacting the authorities!"
              },
              {
                line: "Neo-spinal implants and quantum heatsinks",
                end: true,
                endLine: 'Alright, you may pass. But im keeping my eyes on you.'
              }
            ]
          }
        },
        {
          line: "I am the federation ambassador",
          replies: {
            line: "Welcome ambassador, what is your business at ZF Corp?",
            replies: [
              {
                line: "I am in danger! Sound the alarm!",
                replies: {
                  line: "I will place the building on level 2 alert and gather the guards at once.",
                  replies: [
                    {
                      line: "Thats not good enough!",
                      end: true,
                      endLine: 'Any alert level over 2 needs to be issued by the director. Im afraid this is all i can do. Good luck.'
                    },
                    {
                      line: "I... was just kidding",
                      end: true,
                      endLine: 'To trigger a false level 2 alert is a crime. I am contacting the authorities!'
                    }
                  ]
                }
              },
              {
                line: "Im here to see a man about a horse.",
                end: true,
                endLine: 'I dont have anything like that in my database. For any business related to trade, try the market district'
              }
            ]
          }
        },
        {
          line: "Who are YOU?",
          replies: {
            line: "I am unit 77. At your service.",
            replies: [
              {
                line: "You toasters all look the same to me...",
                end: true,
                endLine: '[Angry droid noices]',
                lol: true
              },
              {
                line: 'No way! im an old friend of Unit 76',
                end: true,
                endLine: 'You need to leave. Dont ever talk to me again.'
              }
            ]
          }
        },
        {
          line: "No one, Bye.",
          end: true,
          endLine: 'Alright then. Have a good day.'
        }
      ]
    }
  ];


  $scope.play = function() {
    $scope.overlay = false;
    $timeout( function(){
      sayIt($scope.conversation[0].line, 'en-US');
      $scope.line = $scope.conversation[0].line;
      $scope.currentReplies = $scope.conversation[0].replies;
    }, 2000 );
  }

  $scope.advance = function (reply) {
    if (reply.end) {
      $scope.line = reply.endLine;
      if (reply.lol) {
        $scope.currentReplies = null;
        $scope.lol = true;
      } else {
        sayIt(reply.endLine, 'en-US');
        $scope.currentReplies = null;
        return;
      }
    }else{
      $scope.currentReplies = null;
      $scope.line = reply.replies.line;
      sayIt($scope.line, 'en-US');
      $timeout( function(){
        $scope.currentReplies = reply.replies.replies;
      }, 2000 );
    }
  }

  function end(line) {

  }

});
