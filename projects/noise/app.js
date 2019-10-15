var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {

  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var volume = audioCtx.createGain();
  volume.connect(audioCtx.destination);
  
  
  $scope.type = 'sine';
  $scope.tempo = 500;
  $scope.globalVol = 0.02;
  
  $scope.tune = [
    '0',
    '0',
    '0',
    '0',
    'F1',
    '0',
    '0',
    '0',
    'C2',
    'B1',
    'C2',
    'B1',
    'C2',
    'B1',
    '0',
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
    'C2'
  ];
  
  $scope.tune2 = [
    '0',
    '0',
    '0',
    '0',
    'B1',
    '0',
    '0',
    'A1',
    '0',
    '0',
    'F1',
    '0',
    '0',
    'B1',
    '0',
    'A1',
    '0',
    'F1',
    '0',
    '0',
    'B1',
    '0',
    'A1',
    '0',
    'E1',
    '0',
    'D1',
    'E1',
    '0',
    '0',
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
    'C2'
  ]

  $scope.translate = function(input){
    switch(input) {
      case 'C1':
        return 261.63;
      break;
      case 'C#1':
        return 277.18;
      break;
      case 'D1':
        return 293.66;
      break;
      case 'D#1':
        return 311.13;
      break;
      case 'E1':
        return 329.63;
      break;
      case 'F1':
        return 349.23;
      break;
      case 'F#1':
        return 369.99;
      break;
      case 'G1':
        return 392.00;
      break;
      case 'G#1':
        return 415.30;
      break;
      case 'A1':
        return 440.00;
      break;
      case 'A#1':
        return 466.16;
      break;
      case 'B1':
        return 493.88;
      break;
      case 'C2':
        return 523.25;
      break;
      case 'C#2':
        return 554.37;
      break;
      case 'D2':
        return 587.33;
      break;
      case 'D#2':
        return 622.25;
      break;
      case 'E2':
        return 659.25;
      break;
      case 'F2':
        return 698.46;
      break;
      case 'F#2':
        return 739.99;
      break;
      case 'G2':
        return 783.99;
      break;
      case 'G#2':
        return 830.61;
      break;
      case 'A2':
        return 880.00;
      break;
      case 'A#2':
        return 932.33;
      break;
      case 'B2':
        return 987.77;
      break;
      case '0':
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
    if(rev){
      volume.gain.value = $scope.globalVol/10; 
    }else{
      volume.gain.value = $scope.globalVol;
    }
    
    $timeout( function(){
      sinec.stop();
    }, $scope.tempo );
  }
  
  $scope.sing = function(notes, tempo, type, reverb){
    $scope.type = type;
    $scope.tempo = tempo;
    if(notes.length < 1){
      return;
    }
    $scope.beep(notes[0]);
    
    if(reverb){
      $timeout( function(){
        $scope.beep(notes[0], true);
      }, reverb);
    }
    
    $timeout( function(){
      notes.shift();
      $scope.sing(notes, tempo, type, reverb)
    }, tempo );
  }
  

});
