var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {

  $scope.command = null;
  $scope.inventory = {
    key: false,
    knife: false

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
          response: 'Its locked.',
          useResponse: 'with a click the door is unlocked.',
          doneResponse: 'the door is open.',
          use: 'key',
          done: false,
        },
        {
          subject: 'room',
          action: 'look',
          response: 'the floor and walls are made from big blocks of dull stone. Somewhere above you is a light but you cant make out what kind. As you whip around to look at rocks and dust you see a small glare. A key lies by your feet',
          doneResponse: 'the floor is made from big blocks of stone. Wonder if they were put ther by the rockman?',
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
          response: 'Its a small and slightly dirty brass key.',
          doneResponse: 'The brass key is still has a smudge of dirt on it.',
          done: false
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
          doneResponse: 'You insert a finger and give it a good twist. Nothing happens.',
          done: true
        },
        {
          subject: 'stone',
          action: 'look',
          response: '',
          doneResponse: 'Its stone.',
          done: true
        },
        {
          subject: 'self',
          action: 'look',
          response: '',
          doneResponse: 'Still the same you.',
          done: true
        }
      ]
    },
    {
      name: 'hallway',
      intro: 'You step into the highly decorated hallway. A great marble staircase goes up to the west.',
      west: 'secondFloor',
      subjects: [
        {
          subject: 'room',
          action: 'look',
          response: '',
          doneResponse: 'The walls of the room are covered by portraits in fancy frames. On the floor is a thick red rug and on a small table sits a silver urn.',
          done: true
        },
        {
          subject: 'urn',
          action: 'look',
          response: '',
          doneResponse: 'It looks like a burial urn. As you pick it up to examine it a knife falls out of it and onto the floor.',
          done: true
        },
        {
          subject: 'urn',
          action: 'take',
          response: '',
          doneResponse: 'It looks like a burial urn. As you pick it up to examine it a knife falls out of it and onto the floor.',
          done: true
        },
        {
          subject: 'knife',
          action: 'take',
          response: 'You pick up the knife.',
          doneResponse: 'You already have the knife with you.',
          done: false
        },
        {
          subject: 'knife',
          action: 'look',
          response: 'It looks like some kind of steak knife, the tip is sharp and narrow.',
          doneResponse: 'Just a knife. On the floor. Being pointy.',
          done: false
        },
        {
          subject: 'portraits',
          action: 'look',
          response: '',
          doneResponse: 'One of the portraits is of a heavy set man with a mustache and a top hat. Another portrait is of a skinny young woman.',
          done: true
        },
        {
          subject: 'portrait',
          action: 'look',
          response: '',
          doneResponse: 'One of the portraits is of a heavy set man with a mustache and a top hat. Another portrait is of a skinny young woman.',
          done: true
        },
        {
          subject: 'woman',
          action: 'look',
          response: '',
          doneResponse: 'As you look closer at the picture of the woman, you notice that the proportions of her face somehow seems off. Her eyes are too big and too far apart.',
          done: true
        },
        {
          subject: 'man',
          action: 'look',
          response: '',
          doneResponse: 'The man has a look on his face as if he is smelling something foul. His eyes seem to follow you as you move around the room.',
          done: true
        },
        {
          subject: 'rug',
          action: 'look',
          response: '',
          doneResponse: 'Its just a normal rug, but does look pretty old.',
          done: true
        },
        {
          subject: 'portrait',
          action: 'take',
          response: 'You try to remove it from the wall but its not hanged like a normal painting, its fused to the wall with some kind of paste.',
          useResponse: 'Using the knife to carve around the edge of the frame you manage to free it from the sticky wall.',
          doneResponse: 'You carefully lift the painting of the wall and behind it you see that someone has written something using red paint, it says: "Thank you for playing, have a nice day." ',
          use: 'knife',
          done: false,
        },
      ]
    },
    {
      name: 'secondFloor',
      intro: 'Your steps echo as you walk up the steps. At the top of the stairs you see the shape of something monsterous looming over you! After the initial shock you realise that its just a taxidermy bear.',
      east: 'hallway',
      subjects: [
        {
          subject: 'room',
          action: 'look',
          response: '',
          doneResponse: 'From the second floor you can see down over a guard rail down to he hallway you just came from. There isnt much here, just a stuffed bear.',
          done: true
        },
        {
          subject: 'sign',
          action: 'look',
          response: '',
          doneResponse: 'it says: "Dont open this bear!"',
          done: true
        },
        {
          subject: 'bear',
          action: 'open',
          response: '',
          doneResponse: 'Who know why, but you try to open the dead bear. its hide is too tough to open with your BEAR hands.',
          done: true
        },
        {
          subject: 'bear',
          action: 'look',
          response: 'The bear is standing on its hind legs with its front pawn outstretched above you. On the base under it there is an engraved metal sign.',
          useResponse: 'You stick the knife into the bears chest and pull down as hard as you can. A rift opens up and from inside the bear comes horrible purple tentacles that snare you and pull you inside.',
          doneResponse: 'You stick the knife into the bears chest and pull down as hard as you can. A rift opens up and from inside the bear comes horrible purple tentacles that snare you and pull you inside.',
          use: 'knife',
          done: false,
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
        console.log($scope.map[i].name, $scope.currentRoom[s]);
        if($scope.map[i].name === $scope.currentRoom[s]){
          $scope.currentRoom = angular.copy($scope.map[i]);
          $scope.feed.push($scope.currentRoom.intro);
          return;
        }
      }
    } else {
      $scope.feed.push('You cant go that way right now.');
    }
  }

  $scope.look = function(s) {
    if (!s) {
      s = 'room';
    }
    if (s === 'x') {
      $scope.feed.push('[Hint: Try something like "look room" instead]');
      return;
    }
    for (var i = 0; i < $scope.currentRoom.subjects.length; i++) {
      if( $scope.currentRoom.subjects[i].subject === s){
        if($scope.currentRoom.subjects[i].action === 'look'){
          if($scope.currentRoom.subjects[i].done){
            $scope.feed.push($scope.currentRoom.subjects[i].doneResponse);
            return;
          } else {
            $scope.feed.push($scope.currentRoom.subjects[i].response);
            $scope.currentRoom.subjects[i].done = true;
            return;
          }
        }
      }
    }
    $scope.feed.push('You dont see anything out of the ordinary.');
    return;
  }

  $scope.open = function(s) {
    if (!s) {
      $scope.feed.push('Open what?');
      return;
    }
    if (s === 'x') {
      $scope.feed.push('[Hint: Try "open door" instead]');
      return;
    }
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
    $scope.feed.push('It doesnt look possible to open.');
    return;
  }

  $scope.take = function(s) {
    if (!s) {
      $scope.feed.push('Take what?');
      return;
    }
    if (s === 'x') {
      $scope.feed.push('[Hint: Try "take thing" instead]');
      return;
    }
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
    $scope.feed.push('After thinking for a moment you decide not to pick up the ' + s + '.');
    return;
  }

  $scope.use = function(s, s2) {
    if (!s || !s2) {
      $scope.feed.push('Use what on what?');
      return;
    }
    if (s === 'x') {
      $scope.feed.push('[Hint: Try "Use ball on hoop" instead]');
      return;
    }
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
    $scope.feed.push('- "'+ $scope.command + '"');

    var splitCommand = angular.copy( $scope.command.split(" ") );
    $scope.command = null;

    if(splitCommand.length > 2){
      if(splitCommand[0] === 'use'){
        $scope.use(splitCommand[1], splitCommand[3]);
        return;
      } else{
        $scope.feed.push('');
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
    else if( action === 'search' || action === 'look' || action === 'pick' || action === 'examine'){
      console.log('look', subject);
      $scope.look(subject);
      return;
    }
    else{
      return;
    }
  }

});
