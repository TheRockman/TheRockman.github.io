var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope, $timeout) {

  $scope.users = [
    {
      url: 'https://picsum.photos/50/50/?random',
      name: '1',
      score: '1000'
    },
    {
      url: 'https://picsum.photos/50/49/?random',
      name: '2',
      score: '1000'
    },
    {
      url: 'https://picsum.photos/50/48/?random',
      name: '3',
      score: '1000'
    },
    {
      url: 'https://picsum.photos/50/47/?random',
      name: '4',
      score: '1000'
    }
  ]
  
  $scope.log = [
    {
      title: '321',
      text: '312'
    },
    {
      title: '321',
      text: '312'
    },
    {
      title: '321',
      text: '312'
    }
  ]
  
  $scope.send = function(post){
    $scope.log.push({
      title: 'Anon',
      text: post
    })
    $scope.log.push({
      title: 'Annoyatron',
      emote: new Array(2),
      text: 'https://i.redd.it/p400a95xzvz01.png'
    });
    $scope.chatMSG = null;
  }
  
  $scope.annoy = function(){
    $scope.log.push({
      title: 'Annoyatron',
      emote: new Array(10),
      text: 'https://external-preview.redd.it/iWv2MMbzyb4MZeockwRWs9N_pcJOhWfVcvsDN4k2cO0.png?auto=webp&s=01c20827b1dd17e9370b972c848ad94927917ee6'
    });
    $timeout( function(){
      console.log('push');
      $scope.annoy();
    }, 5000 );
  }
  $scope.annoy();
  

});
