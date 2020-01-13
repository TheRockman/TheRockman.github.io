var app = angular.module("myApp", []);
app.controller("sendCtrl", function($scope, $timeout) {

    var lastPeerId = null;
    var peer = null; // own peer object
    var conn = null;
    var recvIdInput = document.getElementById("receiver-id");
    var connectButton = document.getElementById("connect-button");

    var originalGrid = [{
        x: 0,
        y: 0
      },
      {
        x: 1,
        y: 0
      },
      {
        x: 2,
        y: 0
      },
      {
        x: 0,
        y: 1
      },
      {
        x: 1,
        y: 1
      },
      {
        x: 2,
        y: 1
      },
      {
        x: 0,
        y: 2
      },
      {
        x: 1,
        y: 2
      },
      {
        x: 2,
        y: 2
      },
    ]

    $scope.sharedData = {
      grid: angular.copy(originalGrid)
    };
    $scope.playerData = {
      name: '123'
    };
    $scope.status = false;

    function initialize() {
      peer = new Peer(null, {
        debug: 2
      });

      peer.on('open', function(id) {
        if (peer.id === null) {
          peer.id = lastPeerId;
        } else {
          lastPeerId = peer.id;
        }

        console.log('ID: ' + peer.id);
      });
      peer.on('disconnected', function() {
        peer.id = lastPeerId;
        peer._lastServerId = lastPeerId;
        peer.reconnect();
      });
      peer.on('close', function() {
        conn = null;
        $scope.status = false;
        $scope.$apply($scope.status);
      });
      peer.on('error', function(err) {
        console.log(err);
        alert('' + err);
      });
    };

    function join() {
      // Close old connection
      if (conn) {
        conn.close();
      }

      conn = peer.connect(recvIdInput.value, {
        reliable: true
      });

      conn.on('open', function() {
        $scope.status = true;
        $scope.$apply($scope.status);

        var command = getUrlParam("command");
        if (command)
          conn.send(command);
      });
      conn.on('data', function(data) {
        var decoded = JSON.parse(data);
        $scope.sharedData = decoded;
        $scope.$apply($scope.sentPacket);
      });
      conn.on('close', function() {
        $scope.status = false;
        $scope.$apply($scope.status);
      });
    };

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

    function signal(sigName) {
      if (conn.open) {
        conn.send(sigName);
      }
    }


    connectButton.addEventListener('click', join);

    initialize();

  $scope.changeTile = function(tile) {
    if (tile.status) {
      return;
    }
    tile.status = 'senders';
  }
  $scope.reset = function() {
    $scope.sharedData.grid = angular.copy(originalGrid);
  }
  
  $scope.$watch('sharedData', function(newValue, oldValue, scope) {
    if (conn.open) {
      var encoded = JSON.stringify($scope.sharedData);
      var msg = encoded;
      conn.send(msg);
    }
  }, true);

});
