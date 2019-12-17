var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {

  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var volume = audioCtx.createGain();
  volume.connect(audioCtx.destination);


  $scope.type = 'sine';
  $scope.tempo = 500;
  $scope.globalVol = 0.02;
  $scope.playing = '';

  $scope.tune = [
    '0',
    '0',
    '0',
    '0',
    'F1',
    '0',
    '0',
    'C2',
    'B1',
    'C2',
    'B1',
    'C2',
    'B1',
    'C2',
    'G#2',
    '0',
    'F1',
    '0',
    '0',
    'F1',
    'G#2',
    'C2',
    'C#2',
    '0',
    'G#2',
    '0',
    'C#2',
    '0',
    'D#2',
    '0',
    'C2',
    'C#2',
    'C2',
    'C#2',
    'C2',
    '0'
  ];

  $scope.tune2 = [
    '0',
    '0',
    '0',
    '0',
    'D1',
    'F1',
    'D2',
    '0',
    'D1',
    'F1',
    'D2',
    '0',
    'E2',
    '0',
    'F2',
    'E2',
    'F2',
    'E2',
    'C2',
    'A1',
    '0',
    'A1',
    'D1',
    '0',
    'F1',
    'G1',
    'A1',
    '0',
    'A1',
    'D1',
    'F1',
    'G1',
    'E1',
    '0',
    '0',
    '0'
  ]

  $scope.tune3 = [
    '0',
    '0',
    '0',
    '0',
    'C2',
    'D2',
    'C2',
    'G2',
    '0',
    'G2',
    '0',
    'C2',
    'D2',
    'C2',
    'G2',
    '0',
    'G2',
    'F#2',
    '0',
    'D2',
    'D2',
    'A1',
    'D2',
    '0',
    '0',
    '0',
    'C2',
    'D2',
    'C2',
    'F2',
    '0',
    'F2',
    '0',
    'C2',
    'D2',
    'C2',
    'F2',
    '0',
    'F2',
    'E2',
    '0',
    'C2',
    'C2',
    '0',
    'G1',
    'C2',
    '0'
  ]

  $scope.layer1 = [
    '0',
    '0',
    '0',
    '0',
    'D2',
    '0',
    'A2',
    '0',
    '0',
    'D2',
    '0',
    'A2',
    '0',
    'D2',
    'A2',
    '0',
    'D2',
    '0',
    'C#2',
    '0',
    'A2',
    '0',
    '0',
    'C#2',
    '0',
    'A2',
    '0',
    'C#2',
    'A2',
    '0',
    'D2',
    '0',
    'A2',
  ];

  $scope.translate = function(input){
    switch(input) {
      case 'C1':
        $scope.playing = 'C1';
        return 261.63;
      break;
      case 'C#1':
        $scope.playing = 'C#1';
        return 277.18;
      break;
      case 'D1':
        $scope.playing = 'D1';
        return 293.66;
      break;
      case 'D#1':
        $scope.playing = 'D#1';
        return 311.13;
      break;
      case 'E1':
        $scope.playing = 'E1';
        return 329.63;
      break;
      case 'F1':
        $scope.playing = 'F1';
        return 349.23;
      break;
      case 'F#1':
        $scope.playing = 'F#1';
        return 369.99;
      break;
      case 'G1':
        $scope.playing = 'G1';
        return 392.00;
      break;
      case 'G#1':
        $scope.playing = 'G#1';
        return 415.30;
      break;
      case 'A1':
        $scope.playing = 'A1';
        return 440.00;
      break;
      case 'A#1':
        $scope.playing = 'A#1';
        return 466.16;
      break;
      case 'B1':
        $scope.playing = 'B1';
        return 493.88;
      break;
      case 'C2':
        $scope.playing = 'C2';
        return 523.25;
      break;
      case 'C#2':
        $scope.playing = 'C#2';
        return 554.37;
      break;
      case 'D2':
        $scope.playing = 'D2';
        return 587.33;
      break;
      case 'D#2':
        $scope.playing = 'D#2';
        return 622.25;
      break;
      case 'E2':
        $scope.playing = 'E2';
        return 659.25;
      break;
      case 'F2':
        $scope.playing = 'F2';
        return 698.46;
      break;
      case 'F#2':
        $scope.playing = 'F#2';
        return 739.99;
      break;
      case 'G2':
        $scope.playing = 'G2';
        return 783.99;
      break;
      case 'G#2':
        $scope.playing = 'G#2';
        return 830.61;
      break;
      case 'A2':
        $scope.playing = 'A2';
        return 880.00;
      break;
      case 'A#2':
        $scope.playing = 'A#2';
        return 932.33;
      break;
      case 'B2':
        $scope.playing = 'B2';
        return 987.77;
      break;
      case '0':
        $scope.playing = '';
        return 0;
      break;
    }
  }

  $scope.beep = function(note, rev){
    var sinec = audioCtx.createOscillator();
    sinec.frequency.value = $scope.translate(note), audioCtx.currentTime;
    sinec.type = $scope.type;
    sinec.start();
    sinec.connect(volume);
    volume.gain.value = $scope.globalVol;

    $timeout( function(){
      sinec.stop();
    }, rev || $scope.tempo );
  }

  $scope.sing = function(notes, tempo, type, reverb){
    // notes = angular.copy(notes);
    $scope.type = type;
    $scope.tempo = tempo;
    if(notes.length < 1){
      return;
    }

    if(reverb){
      $timeout( function(){
        $scope.beep(notes[0], reverb);
      }, reverb);
    } else {
      $scope.beep(notes[0]);
    }

    $timeout( function(){
      notes.shift();
      $scope.sing(notes, tempo, type, reverb)
    }, tempo );
  }


});
