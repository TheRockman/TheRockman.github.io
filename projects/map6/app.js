var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope, $window, $timeout) {

    const tz = 16;
    const gridSize = 30*tz;
    $scope.gridStyle= {
        'width': gridSize+'px',
        'height': gridSize+'px'
    }
    $scope.char = {
        facing: 'down',
        solid: true,
        walking: 'idle',
        x: 0,
        y: 0,
    }
    var gp = function(n){
        return n*tz;
    }

    $scope.mapTiles = [
        {
            tile: 'block',
            solid: true,
            x: gp(2),
            y: gp(2)
        },
        {
            tile: 'block',
            solid: true,
            x: gp(2),
            y: gp(3)
        },
        {
            tile: 'block',
            solid: true,
            x: gp(6),
            y: gp(5)
        },
        {
            tile: 'block',
            solid: true,
            x: gp(6),
            y: gp(6)
        },
        {
            tile: 'block',
            solid: true,
            x: gp(6),
            y: gp(7)
        },
        {
            tile: 'block',
            solid: true,
            x: gp(6),
            y: gp(8)
        },
        {
            tile: 'block',
            solid: true,
            x: gp(6),
            y: gp(9)
        },
        {
            tile: 'ai-bug',
            id: 'idleAi',
            ai: true,
            solid: true,
            x: gp(5),
            y: gp(5)
        },
        {
            tile: 'ai-bug',
            id: 'hostileAI',
            ai: true,
            shoots: true,
            solid: true,
            x: gp(10),
            y: gp(10)
        }
    ]

    $scope.applyStyle = function(){
        $scope.cameraStyle = {
            'width': gridSize/2+"px",
            'height': gridSize/2.5+"px",
        };
        $scope.charStyle = {
            'top': $scope.char.y+"px",
            'left': $scope.char.x+"px",
            'z-index': $scope.char.y
        };
        $scope.gridStyle = {
            'width': gridSize+'px',
            'height': gridSize+'px',
            'top': -$scope.char.y+"px",
            'left': -$scope.char.x+"px",
            'margin-left': (gridSize/4)-8+"px",
            'margin-right': (gridSize/4)-8+"px",
            'margin-top': (gridSize/5)-8+"px",
            'margin-bottom': (gridSize/5)-8+"px",
        }
    }
    $scope.applyStyle();

    $scope.tileStyle = function(x, y){
        return {
            'top': y+"px",
            'left': x+"px",
            'z-index': y
        };
    }

    $scope.targetTile = function(x, y){
        let obj = $scope.mapTiles.filter(function(item) { return item.x == x && item.y == y; });
        return obj[0];
    }
    $scope.targetTileID = function(id){
        let obj = $scope.mapTiles.filter(function(item) { return item.id == id; });
        return obj[0];
    }
    $scope.tileIsPlayer = function(tile){
        return (tile.x == $scope.char.x && tile.y == $scope.char.y);
    }

    $scope.ai = function(id){
        let timing = Math.floor(Math.random() * (1000 - 2000 + 1)) + 1000;
        $timeout( function(){
            let aiItem = $scope.targetTileID(id);
            let action = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
            if(action === 1){
                let moveTry = aiItem.x+gp(1);
                let targetTile = $scope.targetTile(moveTry, aiItem.y);
                if(
                    (!targetTile && moveTry < gridSize && !$scope.tileIsPlayer({x: aiItem.x+gp(1), y:aiItem.y})) ||
                    (targetTile && !targetTile.solid && !$scope.tileIsPlayer(targetTile) )
                ){
                    aiItem.x = moveTry;
                }
            } else if(action === 2){
                let moveTry = aiItem.x-gp(1);
                let targetTile = $scope.targetTile(moveTry, aiItem.y);
                if(
                    (!targetTile && moveTry > 0 && !$scope.tileIsPlayer({x: aiItem.x-gp(1), y:aiItem.y})) ||
                    (targetTile && !targetTile.solid && !$scope.tileIsPlayer(targetTile))
                ){
                    aiItem.x = moveTry;
                }
            } else if(action === 3){
                let moveTry = aiItem.y+gp(1);
                let targetTile = $scope.targetTile(aiItem.x, moveTry);
                if(
                    (!targetTile && moveTry < gridSize && !$scope.tileIsPlayer({x: aiItem.x, y:aiItem.y+gp(1)})) ||
                    (targetTile && !targetTile.solid && !$scope.tileIsPlayer(targetTile))
                ){
                    aiItem.y = moveTry;
                }
            } else if(action === 4){
                let moveTry = aiItem.y-gp(1);
                let targetTile = $scope.targetTile(aiItem.x, moveTry);
                if(
                    (!targetTile && moveTry > 0 && !$scope.tileIsPlayer({x: aiItem.x, y:aiItem.y-gp(1)})) ||
                    (targetTile && !targetTile.solid && !$scope.tileIsPlayer(targetTile))
                ){
                    aiItem.y = moveTry;
                }
            }
            $scope.ai(id);
        }, timing );
    }

    $scope.ai('idleAi');
    $scope.ai('hostileAI');

    function throttle(func, delay=500) {
      let timeout = null
      return function(...args) {
        if (!timeout) {
          timeout = setTimeout(() => {
            func.call(this, ...args)
            timeout = null
          }, delay)
        }
      }
    }

    var debounce = 120;
    document.body.addEventListener("keypress", throttle(function(e){
        $scope.char.walking = 'walking';
        if (e.key === "d") {
            $scope.char.facing = 'right';
            let moveTry = $scope.char.x+gp(1);
            let targetTile = $scope.targetTile(moveTry, $scope.char.y);
            if(moveTry > gridSize-tz || (targetTile && targetTile.solid) ){$scope.$digest();return;}
            $scope.char.x = moveTry;
        }
        if (e.key === "a") {
            $scope.char.facing = 'left';
            let moveTry = $scope.char.x-gp(1);
            let targetTile = $scope.targetTile(moveTry, $scope.char.y);
            if(moveTry < 0 || (targetTile && targetTile.solid) ){$scope.$digest();return;}
            $scope.char.x = moveTry;
        }
        if (e.key === "w") {
            $scope.char.facing = 'up';
            let moveTry = $scope.char.y-gp(1);
            let targetTile = $scope.targetTile($scope.char.x, moveTry);
            if(moveTry < 0 || (targetTile && targetTile.solid) ){$scope.$digest();return;}
            $scope.char.y = moveTry;
        }
        if (e.key === "s") {
            $scope.char.facing = 'down';
            let moveTry = $scope.char.y+gp(1);
            let targetTile = $scope.targetTile($scope.char.x, moveTry);
            if(moveTry > gridSize-tz || (targetTile && targetTile.solid) ){$scope.$digest();return;}
            $scope.char.y = moveTry;
        }

        $scope.applyStyle();
        $scope.$digest();
    }, debounce));

    document.body.addEventListener("keyup", function(e){
        $timeout( function(){
            $scope.char.walking = 'idle';
            $scope.applyStyle();
            $scope.$digest();
        }, 200 );
    });
});
