var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {

  $scope.command = null;
  $scope.inventory = {
    key: false
  }
  
  $scope.map = [
    {
      name: 'cell',
      intro: 'You are in a small room, to the north of you is a large door. what do you do?',
      north: 'hallway',
      subjects: [
        {
          //first object in subject is room trigger
          subject: 'door',
          action: 'open',
          response: 'Its locked and wont budge.',
          useResponse: 'with a click the door is unlocked.',
          doneResponse: 'the door is open.',
          use: 'key',
          done: false,
        },
        {
          subject: 'room',
          action: 'look',
          response: 'the floor and walls are made from big blocks of gray stone, upon further inspection you see a small key by your feet.',
          doneResponse: 'the floor is made from big blocks of stone.',
          done: false
        },
        {
          subject: 'key',
          action: 'take',
          response: 'you pick up the key.',
          doneResponse: 'you already have the key.',
          done: false
        },
        {
          subject: 'key',
          action: 'look',
          response: '',
          doneResponse: 'Its a small and slightly dirty brass key.',
          done: true
        },
        {
          subject: 'door',
          action: 'take',
          response: '',
          doneResponse: 'While it would be neat to take with you, you decide that the door fits best where it is.',
          done: true
        },
        {
          subject: 'door',
          action: 'look',
          response: '',
          doneResponse: 'The door is made from solid wood with a brass lock, hinges and handle.',
          done: true
        },
        {
          subject: 'nose',
          action: 'look',
          response: '',
          doneResponse: 'You insert a finger and give it a good twist.',
          done: true
        },
        {
          subject: 'stone',
          action: 'look',
          response: '',
          doneResponse: 'Its stone.',
          done: true
        }
      ]
    },
    {
      name: 'hallway',
      intro: 'You step through the door and into a long hallway decorated with thick rugs on the floor and lanterns and pictures on the walls.',
      north: 'hallway2',
      subjects: [
        {
          subject: 'pictures',
          action: 'look',
          response: '',
          doneResponse: 'faces and eyes',
          done: true
        }
      ]
    }
  ];
  
  $scope.feed = [];
  $scope.currentRoom = $scope.map[0];
  
  function init() {
    $scope.feed.push($scope.currentRoom.intro);
  };
  init();

  $scope.move = function(s) {
    if($scope.currentRoom[s] && $scope.currentRoom.subjects[0].done){
      for (var i = 0; i < $scope.map.length; i++) {
        if($scope.map[i].name === $scope.currentRoom[s]){
          $scope.currentRoom = angular.copy($scope.map[i]);
          $scope.feed.push($scope.currentRoom.intro);
          return;
        }
      }
    } else {
      $scope.feed.push('You cant move that way right now.');
    }
  }
  
  $scope.look = function(s) {
    for (var i = 0; i < $scope.currentRoom.subjects.length; i++) {
      if( $scope.currentRoom.subjects[i].subject === s){
        if($scope.currentRoom.subjects[i].action === 'look'){
          if($scope.currentRoom.subjects[i].done){
            $scope.feed.push($scope.currentRoom.subjects[i].doneResponse);
            return;
          } else {
            $scope.feed.push($scope.currentRoom.subjects[i].response);
            return;
          }
        }
      }
    }
  }
  
  $scope.open = function(s) {
    for (var i = 0; i < $scope.currentRoom.subjects.length; i++) {
      if( $scope.currentRoom.subjects[i].subject === s){
        if($scope.currentRoom.subjects[i].action === 'open'){
          if($scope.currentRoom.subjects[i].done){
            $scope.feed.push($scope.currentRoom.subjects[i].doneResponse);
            return;
          } else {
            $scope.feed.push($scope.currentRoom.subjects[i].response);
            return;
          }
        }
      }
    }
  }
  
  $scope.take = function(s) {
    for (i = 0; i < $scope.currentRoom.subjects.length; i++) {
      if( $scope.currentRoom.subjects[i].subject === s){
        if($scope.currentRoom.subjects[i].action === 'take'){
          if($scope.currentRoom.subjects[i].done){
            $scope.feed.push($scope.currentRoom.subjects[i].doneResponse);
            return;
          } else {
            $scope.feed.push($scope.currentRoom.subjects[i].response);
            $scope.inventory[s] = true;
            $scope.currentRoom.subjects[i].done = true;
            return;
          }
        }
      }
    }
  }
  
  $scope.use = function(s, s2) {
    for (i = 0; i < $scope.currentRoom.subjects.length; i++) {
      if( $scope.currentRoom.subjects[i].subject === s2 && $scope.currentRoom.subjects[i].use === s){
        if($scope.inventory[s]){
          if($scope.currentRoom.subjects[i].done){
            $scope.feed.push($scope.currentRoom.subjects[i].doneResponse);
            return;
          } else {
            $scope.feed.push($scope.currentRoom.subjects[i].useResponse);
            $scope.currentRoom.subjects[i].done = true;
            return;
          }
        } else{
          $scope.feed.push('That could work, you just need that ' + s + ' first.');
        }
      }
    }
  }
  
  $scope.callCommand = function(){
    $scope.feed.push('> '+ $scope.command);
    
    var splitCommand = angular.copy( $scope.command.split(" ") );
    $scope.command = null;
    
    if(splitCommand.length > 2){
      if(splitCommand[0] === 'use'){
        $scope.use(splitCommand[1], splitCommand[3]);
        return;
      } else{
        console.log("can you say that in a simpler way?");
        return;
      }
    }
    
    var action = splitCommand[0];
    var subject = splitCommand[1];
    
    if( action === 'move' || action === 'walk' || action === 'run' || action === 'go' ){
      console.log('move', subject);
      $scope.move(subject);
      return;
    }
    else if( action === 'take' || action === 'grab' || action === 'get' ){
      console.log('take', subject);
      $scope.take(subject);
      return;
    }
    else if( action === 'open' || action === 'smash' || action === 'break' ){
      console.log('open', subject);
      $scope.open(subject);
      return;
    }
    else if( action === 'search' || action === 'look' || action === 'pick'){
      console.log('look', subject);
      $scope.look(subject);
      return;
    }
    else{
      return;
    }
  }

});
