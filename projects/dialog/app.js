var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope, $timeout) {

  
  function sayIt(query, language) {
    var q = new SpeechSynthesisUtterance(query);
    q.lang = language;
    q.rate = 1.2;
    speechSynthesis.speak(q);
  }
  
  $scope.overlay = true;
  
  $scope.conversation = [
    {
      line: "Halt! Identification and clearence requierd, who are you?",
      replies: [
        {
          line: "Just a merchant...",
          replies: {
            line: "A merchant of what exactly?",
            replies: [
              {
                line: "Imported Grexian crystals",
                end: true,
                endLine: "The sale of this substance is prohibited, you are under arrest"
              },
              {
                line: "Neo-spinal implants and quantum heatsinks",
                end: true,
                endLine: 'Alright, you may pass. But im keeping my eye on you stranger.'
              }
            ]
          }
        },
        {
          line: "I am the federation ambassador",
          replies: {
            line: "Welcome ambassador, what is your business here?",
            replies: [
              {
                line: "We are at war!",
                end: true,
                endLine: 'I will place the station on level 2 alert and gather the guards at once.'
              },
              {
                line: "Im here to see a man about a horse.",
                end: true,
                endLine: 'I dont have anything like that in my database. For any business related to trade, please enter the market district'
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
                endLine: 'Please step aside'
              },
              {
                line: 'No way! im a friend of Unit 76',
                end: true,
                endLine: 'Dont ever talk to me again. Please step aside'
              }
            ]
          }
        },
        {
          line: "No one, Bye.",
          end: true,
          endLine: 'Please move along. Have a good day.'
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
    }, 1500 );
  }

  $scope.advance = function (reply) {

    
    if (reply.end) {
      $scope.line = reply.endLine;
      sayIt(reply.endLine, 'en-US');
      $scope.currentReplies = null;
      return;
    }else{
      $scope.currentReplies = null;
      $scope.line = reply.replies.line;
      sayIt($scope.line, 'en-US');
      $timeout( function(){
        $scope.currentReplies = reply.replies.replies;
      }, 1500 );
    }
  }

  function end(line) {
    
  }

});
