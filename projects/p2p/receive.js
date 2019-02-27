var app = angular.module("myApp", []); app.controller("receiveCtrl", function($scope, $timeout) {
  (function () {
  
      var lastPeerId = null;
      var peer = null; // Own peer object
      var peerId = null;
      var conn = null;
      var recvId = document.getElementById("receiver-id");
      var status = document.getElementById("status");
      var message = document.getElementById("message");
      
      //proto send obj
      $scope.sendPacket = {}
      
      //recived data
      $scope.data = [];
  
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
              status.innerHTML = "Awaiting connection...";
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
              status.innerHTML = "Connected"
              ready();
          });
          peer.on('disconnected', function () {
              status.innerHTML = "Connection lost. Please reconnect";
              console.log('Connection lost. Please reconnect');
  
              // Workaround for peer.reconnect deleting previous id
              peer.id = lastPeerId;
              peer._lastServerId = lastPeerId;
              peer.reconnect();
          });
          peer.on('close', function() {
              conn = null;
              status.innerHTML = "Connection destroyed. Please refresh";
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
            $scope.data.push(data);
            console.log($scope.data);
            $scope.$apply($scope.data);
          });
          conn.on('close', function () {
              status.innerHTML = "Connection reset<br>Awaiting connection...";
              conn = null;
              start(true);
          });
      }
      
      // Send message
      $scope.sendBtn = function () {
          if (conn.open) {
              var msg = $scope.sendPacket;
              $scope.sendPacket = {};
              conn.send(msg);
              console.log("Sent: " + msg)
          }
      };
  
      initialize();
  })();
});
