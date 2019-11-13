var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {
  $scope.speed = 2000;
  $scope.script = [
    {
      face: 'img/talking.gif',
      text: 'test',
      quake: false,
      beat: 1,
    },
    {
      face: 'img/thinking.gif',
      text: 'test...',
      quake: false,
      beat: 2,
    },
    {
      face: 'img/talking.gif',
      text: 'test',
      quake: false,
      beat: 1,
    },
    {
      face: 'img/cringe.gif',
      text: '(test...)',
      quake: false,
      beat: 2,
    },
    {
      face: 'img/pointing.gif',
      text: 'test!!',
      quake: true,
      beat: 1,
    }
  ]
  
$scope.current;

$scope.init = function(index){
  if(index === $scope.script.length){return;}
  $scope.current = $scope.script[index];
  $timeout( function(){
    $scope.init(index+1);
  }, $scope.speed*$scope.current.beat );
}
$scope.init(0);
  
});
