var app = angular.module("myApp", []);
app.controller("receiveCtrl", function($scope, $timeout) {

    var lastPeerId = null;
    var peer = null; // Own peer object
    var peerId = null;
    var conn = null;
    var recvId = document.getElementById("receiver-id");
    var message = document.getElementById("message");

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
        recvId.innerHTML = "ID: " + peer.id;
      });
      peer.on('connection', function(c) {
        if (conn) {
          c.on('open', function() {
            c.send("Already connected to another client");
            setTimeout(function() {
              c.close();
            }, 500);
          });
          return;
        }

        conn = c;
        $scope.status = true;
        $scope.$apply($scope.status);
        ready();
      });
      peer.on('disconnected', function() {
        $scope.status = false;
        $scope.$apply($scope.status);
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
        alert('' + err);
      });
    };

    function ready() {
      conn.on('data', function(data) {
        var decoded = JSON.parse(data);
        $scope.sharedData = decoded;
        $scope.$apply($scope.sentPacket);
      });
      conn.on('close', function() {
        $scope.status = "waiting";
        conn = null;
        start(true);
      });
    }

    initialize();

  $scope.changeTile = function(tile) {
    if (tile.status) {
      return;
    }
    tile.status = 'receiver';
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
