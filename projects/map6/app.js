var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope, $window, $timeout) {

    const tz = 16;
    const gridSize = 30*tz;
    $scope.gridStyle= {
        'width': gridSize+'px',
        'height': gridSize+'px'
    }
    $scope.char = {
        facing: 'down',
        x: 0,
        y: 0
    }

    $scope.mapTiles = [
        {
            tile: 'block',
            solid: true,
            x: 2*tz,
            y: 2*tz
        },
        {
            tile: 'block',
            solid: true,
            x: 2*tz,
            y: 3*tz
        },
        {
            tile: 'block',
            solid: true,
            x: 6*tz,
            y: 5*tz
        },
        {
            tile: 'block',
            solid: true,
            x: 6*tz,
            y: 6*tz
        },
        {
            tile: 'block',
            solid: true,
            x: 6*tz,
            y: 7*tz
        },
        {
            tile: 'block',
            solid: true,
            x: 6*tz,
            y: 8*tz
        },
        {
            tile: 'block',
            solid: true,
            x: 6*tz,
            y: 9*tz
        },
        {
            tile: 'ai-bug',
            ai: true,
            solid: true,
            x: 5*tz,
            y: 5*tz
        }
    ]

    $scope.applyStyle = function(){
        $scope.cameraStyle = {
            'width': gridSize/2+"px",
            'height': gridSize/2.5+"px",
        };
        $scope.charStyle = {
            'top': $scope.char.y+"px",
            'left': $scope.char.x+"px"
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
            'left': x+"px"
        };
    }

    $scope.targetTile = function(x, y){
        let obj = $scope.mapTiles.filter(function(item) { return item.x == x && item.y == y; });
        return obj[0];
    }

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

    document.body.addEventListener("keypress", throttle(function(e){
        if (e.key === "ArrowRight" || e.key === "d") {
            $scope.char.facing = 'right';
            let moveTry = $scope.char.x+16;
            let targetTile = $scope.targetTile(moveTry, $scope.char.y);
            if(moveTry > gridSize-tz || (targetTile && targetTile.solid) ){$scope.$digest();return;}
            $scope.char.x = moveTry;
        }
        if (e.key === "ArrowLeft" || e.key === "a") {
            $scope.char.facing = 'left';
            let moveTry = $scope.char.x-16;
            let targetTile = $scope.targetTile(moveTry, $scope.char.y);
            if(moveTry < 0 || (targetTile && targetTile.solid) ){$scope.$digest();return;}
            $scope.char.x = moveTry;
        }
        if (e.key === "ArrowUp" || e.key === "w") {
            $scope.char.facing = 'up';
            let moveTry = $scope.char.y-16;
            let targetTile = $scope.targetTile($scope.char.x, moveTry);
            if(moveTry < 0 || (targetTile && targetTile.solid) ){$scope.$digest();return;}
            $scope.char.y = moveTry;
        }
        if (e.key === "ArrowDown" || e.key === "s") {
            $scope.char.facing = 'down';
            let moveTry = $scope.char.y+16;
            let targetTile = $scope.targetTile($scope.char.x, moveTry);
            if(moveTry > gridSize-tz || (targetTile && targetTile.solid) ){$scope.$digest();return;}
            $scope.char.y = moveTry;
        }

        // console.log('new pos', $scope.char);
        $scope.applyStyle();
        $scope.$digest();
    },150));

});
