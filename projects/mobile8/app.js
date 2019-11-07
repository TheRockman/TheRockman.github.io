var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope, $timeout) {
  
  $scope.state = 1;
  
  $scope.feedList = [
    {
      swipe: null,
      unswiped: true,
      url: 'https://media.gettyimages.com/photos/real-young-woman-profile-studio-portrait-picture-id693273734?s=612x612',
      name: 'Kurt-gunnar',
      age: '29',
      distance: 25,
      open: false,
      bioShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      swipe: null,
      unswiped: true,
      url: 'https://media.gettyimages.com/photos/real-young-woman-profile-studio-portrait-picture-id693273734?s=612x612',
      name: 'Kurt-svenn',
      age: '29',
      distance: 4,
      open: false,
      bioShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      swipe: null,
      unswiped: true,
      url: 'https://media.gettyimages.com/photos/real-young-woman-profile-studio-portrait-picture-id693273734?s=612x612',
      name: 'Hjärt-olof',
      age: '29',
      distance: 10,
      open: false,
      bioShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      swipe: null,
      unswiped: true,
      url: 'https://media.gettyimages.com/photos/real-young-woman-profile-studio-portrait-picture-id693273734?s=612x612',
      name: 'Hjärt-olof',
      age: '29',
      distance: 4,
      open: false,
      bioShort: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
  ]
  
  $scope.profile = {
    name: 'Liam Abcdsson',
    url: 'https://i2.wp.com/metro.co.uk/wp-content/uploads/2015/11/twitter.png?quality=90&strip=all&zoom=1&resize=644%2C637&ssl=1',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  }
  
  $scope.nope = function(item){
    item.swipe = false;
    $timeout( function(){
      item.unswiped = false;
    }, 1100 );
  }
  $scope.yep = function(item){
    item.swipe = true;
    $timeout( function(){
      item.unswiped = false;
    }, 1100 );
  }
  
  $scope.openItem = function(item) {
    for (i = 0; i < $scope.feedList.length; i++) {
      $scope.feedList[i].open = false;
    }
    item.open = true;
  }
  
});
