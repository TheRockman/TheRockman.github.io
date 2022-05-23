var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {

  $scope.connected = false;
  $scope.sharedState = {
    test: []
  };

//Server Setup
  // server.on('error', err => console.log('error', err))
  const server = new SimplePeer({
    initiator: location.hash === '#1',
    trickle: false
  })

//Handshake
  server.on('signal', data => {
    //Generate handshake key
    console.log(JSON.stringify(data))
    $scope.outgoing = JSON.stringify(data);
    $scope.$apply();
  });

  $scope.signal = function(incoming){
    //Accept handshake key
    if(incoming){
      server.signal(JSON.parse(incoming));
    } else {
      console.log('No key provided');
    }
  };

  server.on('connect', () => {
    //handshake complete, connected
    $scope.connected = true;
    $scope.$apply();
    console.log('CONNECTED');
  })
//Handshake end

//Server IO
  $scope.pushSharedState = function(){
    //Send my shared state
    server.send(JSON.stringify($scope.sharedState));
  }

  server.on('data', data => {
    //Receive shared state
    var received = JSON.parse(data);
    $scope.sharedState = received;
    $scope.$digest();
  })
//Server IO end

  $scope.sendChat = function(chat){
    $scope.sharedState.test.push(chat);
    $scope.pushSharedState();
  }
});
