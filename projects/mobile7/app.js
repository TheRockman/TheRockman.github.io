var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {

$scope.anySelected = false;
$scope.list = [
  {
    defaultIndex: 1,
    locked: false,
    open: false,
    title: 'Dramatically synthesize integrated schemas',
    name: 'Rumena Mozhgan',
    initial: 'R',
    selected: false,
    read: false,
    content: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    date: new Date()
  },
  {
    defaultIndex: 1,
    locked: false,
    title: 'Objectively seize scalable metrics',
    name: 'Arseniy Kristiyan',
    initial: 'A',
    open: false,
    read: false,
    selected: false,
    content: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
    date: new Date()
  },
  {
    defaultIndex: 1,
    locked: false,
    title: 'Engage worldwide methodologies',
    name: 'Godeliva Avraham',
    initial: 'G',
    open: false,
    read: false,
    selected: false,
    content: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
    date: new Date()
  }
];
$scope.unread = $scope.list.length;

$scope.openOne = function(theOne) {
  if(theOne.open){
    theOne.open = false;
    return;
  } else{
    for (i = 0; i < $scope.list.length; i++) {
      if($scope.list[i] === theOne){
        $scope.list[i].open = true;
      } else{
        $scope.list[i].open = false;
      }
    }
  }
}

$scope.select = function(item){
  item.selected = !item.selected;
  for (i = 0; i < $scope.list.length; i++) {
    if($scope.list[i].selected === true){
      $scope.anySelected = true;
      return;
    }
  }
  $scope.anySelected = false;
}

$scope.deleteAll = function(){
  var marked = 0;
  for (i = 0; i < $scope.list.length; i++) {
    if($scope.list[i].selected){
      $scope.list[i].defaultIndex = 0;
      $scope.list[i].selected = false;
      marked++;
    }
  }
  $scope.unread = $scope.unread - marked;
  $scope.anySelected = false;
}

$scope.markReadAll = function(){
  var marked = 0;
  for (i = 0; i < $scope.list.length; i++) {
    if($scope.list[i].selected){
      $scope.list[i].defaultIndex = 2;
      $scope.list[i].selected = false;
      marked++;
    }
  }
  $scope.unread = $scope.unread - marked;
  $scope.anySelected = false;
}

});
