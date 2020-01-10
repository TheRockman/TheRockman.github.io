var app = angular.module("myApp", []); app.controller("receiveCtrl", function($scope, $timeout) {
  (function () {
  
      var lastPeerId = null;
      var peer = null; // Own peer object
      var peerId = null;
      var conn = null;
      var recvId = document.getElementById("receiver-id");
      var message = document.getElementById("message");
      
      //proto send obj
      $scope.sharedData = [
        {x:0,y:0},
        {x:1,y:0},
        {x:2,y:0},
        {x:0,y:1},
        {x:1,y:1},
        {x:2,y:1},
        {x:0,y:2},
        {x:1,y:2},
        {x:2,y:2},
      ];
      $scope.status = false;
  
      /**
       * Create the Peer object for our end of the connection.
       *
       * Sets up callbacks that handle any events related to our
       * peer object.
       */
       function initialize() {
          // Create own peer object with connection to shared PeerJS server
          peer = new Peer(null, {
              debug: 2
          });
  
          peer.on('open', function (id) {
              // Workaround for peer.reconnect deleting previous id
              if (peer.id === null) {
                  console.log('Received null id from peer open');
                  peer.id = lastPeerId;
              } else {
                  lastPeerId = peer.id;
              }
  
              console.log('ID: ' + peer.id);
              recvId.innerHTML = "ID: " + peer.id;
          });
          peer.on('connection', function (c) {
              // Allow only a single connection
              if (conn) {
                  c.on('open', function() {
                      c.send("Already connected to another client");
                      setTimeout(function() { c.close(); }, 500);
                  });
                  return;
              }
  
              conn = c;
              console.log("Connected to: " + conn.peer);
              $scope.status = true;
              $scope.$apply($scope.status);
              ready();
          });
          peer.on('disconnected', function () {
              $scope.status = false;
              $scope.$apply($scope.status);
              console.log('Connection lost. Please reconnect');
  
              // Workaround for peer.reconnect deleting previous id
              peer.id = lastPeerId;
              peer._lastServerId = lastPeerId;
              peer.reconnect();
          });
          peer.on('close', function() {
              conn = null;
              $scope.status = false;
              $scope.$apply($scope.status);
              console.log('Connection destroyed');
          });
          peer.on('error', function (err) {
              console.log(err);
              alert('' + err);
          });
      };
  
      /**
       * Triggered once a connection has been achieved.
       * Defines callbacks to handle incoming data and connection events.
       */
      function ready() {
          conn.on('data', function (data) {
            var decoded = JSON.parse(data);
            $scope.sharedData = decoded;
            $scope.$apply($scope.data);
            $scope.$apply($scope.sentPacket);
          });
          conn.on('close', function () {
              $scope.status = "waiting";
              conn = null;
              start(true);
          });
      }
      
      // Send message
      $scope.sendBtn = function () {
          if (conn.open) {
              var encoded = JSON.stringify($scope.sharedData);
              var msg = encoded;
              conn.send(msg);
              console.log("Sent: " + msg)
          }
      };
  
      initialize();
  })();
  
  $scope.changeTile = function(tile){
    if(tile.status){
      return;
    }
    tile.status = 'receiver';
    $scope.sendBtn();
  }
  $scope.reset = function(){
    $scope.sharedData = [
      {x:0,y:0},
      {x:1,y:0},
      {x:2,y:0},
      {x:0,y:1},
      {x:1,y:1},
      {x:2,y:1},
      {x:0,y:2},
      {x:1,y:2},
      {x:2,y:2},
    ];
    $scope.sendBtn();
  }
});
