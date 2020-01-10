var app = angular.module("myApp", []); app.controller("sendCtrl", function($scope, $timeout) {
  (function () {
  
      var lastPeerId = null;
      var peer = null; // own peer object
      var conn = null;
      var recvIdInput = document.getElementById("receiver-id");
      var connectButton = document.getElementById("connect-button");
  
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
          });
          peer.on('disconnected', function () {
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
       * Create the connection between the two Peers.
       *
       * Sets up callbacks that handle any events related to the
       * connection and data received on it.
       */
      function join() {
          // Close old connection
          if (conn) {
              conn.close();
          }
  
          // Create connection to destination peer specified in the input field
          conn = peer.connect(recvIdInput.value, {
              reliable: true
          });
  
          conn.on('open', function () {
              $scope.status = true;
              $scope.$apply($scope.status);
              console.log("Connected to: " + conn.peer);
  
              // Check URL params for comamnds that should be sent immediately
              var command = getUrlParam("command");
              if (command)
                  conn.send(command);
          });
          // Handle incoming data (messages only since this is the signal sender)
          conn.on('data', function (data) {
            var decoded = JSON.parse(data);
              $scope.sharedData = decoded;
              $scope.$apply($scope.sentPacket);
          });
          conn.on('close', function () {
              $scope.status = false;
              $scope.$apply($scope.status);
          });
      };
  
      /**
       * Get first "GET style" parameter from href.
       * This enables delivering an initial command upon page load.
       *
       * Would have been easier to use location.hash.
       */
      function getUrlParam(name) {
          name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
          var regexS = "[\\?&]" + name + "=([^&#]*)";
          var regex = new RegExp(regexS);
          var results = regex.exec(window.location.href);
          if (results == null)
              return null;
          else
              return results[1];
      };
  
      /**
       * Send a signal via the peer connection and add it to the log.
       * This will only occur if the connection is still alive.
       */
       function signal(sigName) {
          if (conn.open) {
              conn.send(sigName);
              console.log(sigName + " signal sent");
          }
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
      // Start peer connection on click
      connectButton.addEventListener('click', join);
  
      // Since all our callbacks are setup, start the process of obtaining an ID
      initialize();
  })();
  
  $scope.changeTile = function(tile){
    if(tile.status){
      return;
    }
    tile.status = 'senders';
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
