var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {
  $scope.speed = 2000;
  $scope.beatCounter = function(str){
    var words = str.split(' ').length;
    if(words > 1){
      return words/2;
    } else{
      return 1;
    }
    
  }
  
  $scope.script = [
    {
      camera: 'left',
      face: 'img/talking.gif',
      text: 'You want the truth?',
      quake: false,
      typeText: ''
    },
    {
      camera: 'left',
      face: 'img/thinking.gif',
      text: '(Should I really...?)',
      quake: false,
      typeText: ''
    },
    {
      camera: 'left',
      face: 'img/talking.gif',
      text: 'Well, w-what will it be?',
      quake: false,
      typeText: ''
    },
    {
      camera: 'right',
      face: 'img/npc1_shrug.gif',
      text: 'Its probably something stupid, but lets hear it',
      quake: false,
      typeText: ''
    },
    {
      camera: 'left',
      face: 'img/cringe.gif',
      text: '(Hes right)',
      quake: false,
      typeText: ''
    },
    {
      camera: 'left',
      face: 'img/pointing.gif',
      text: 'Alright! Write this down! Here it is:',
      quake: true,
      typeText: ''
    },
    {
      camera: 'center',
      face: 'img/npc2_talking.gif',
      text: '...',
      quake: false,
      typeText: ''
    },
    {
      camera: 'overlay',
      face: 'https://img98.xooimage.com/files/5/1/8/animation1-40b4e33.gif',
      text: 'My dream as a child has always been to break the Guinness World Record title for the longest wedding veil!',
      quake: false,
      typeText: ''
    },
  ]
  
  for (i = 0; i < $scope.script.length; i++) {
    $scope.script[i].beat = $scope.beatCounter($scope.script[i].text);
  }
  
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
$scope.current;

$scope.typing = function(){
  var content = $scope.current.text;
	var i=0;
  var timer = setInterval(function(){
	    if(i<content.length)
		  	$scope.current.typeText += content[i];
	     i++;
		 $scope.$apply();
	}, 50);
}

$scope.init = function(index){
  if(index === $scope.script.length){return;}
  $scope.current = $scope.script[index];
  
  $scope.typing();
  
  $timeout( function(){
    $scope.init(index+1);
  }, $scope.speed*$scope.current.beat );
}
$scope.init(0);
  
});
