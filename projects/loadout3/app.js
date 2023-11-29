var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope, $window, $timeout) {
    const drop = new Audio('audio/drop.mp3');
    const add = new Audio('audio/add.mp3');
    const add2 = new Audio('audio/add2.mp3');
    const grab = new Audio('audio/grab.mp3');
    const grab2 = new Audio('audio/grab2.mp3');

    $scope.grab = function () {
        if ((Math.floor(Math.random() * 2) == 0)) {
            grab.play();
        } else {
            grab2.play();
        }
    }
    $scope.bin = function () {
        grab2.play();
    }
    $scope.pileDrop = function () {
        drop.play();
    }
    $scope.pieceDrop = function () {
        if ((Math.floor(Math.random() * 2) == 0)) {
            add.play();
        } else {
            add2.play();
        }
    }

    $scope.view = 'yard';
    $scope.buildStats;
    $scope.originalBuildStats = {
        beauty: 0,
        speed: 0,
        strength: 0,
        specialKeys: {

        }
    }

    $scope.gatherStats = function () {
        $scope.buildStats = JSON.parse(JSON.stringify($scope.originalBuildStats));

        var children = document.getElementById("build").children;
        for (var i = 0; i < children.length; i++) {
            
            for (var j = 0; j < children[i].children.length; j++) {
                var item = $scope.pile.find(item => item.name === children[i].children[j].id);
                
                $scope.buildStats.beauty = $scope.buildStats.beauty + (item.stats?.beauty || 0);
                $scope.buildStats.speed = $scope.buildStats.speed + (item.stats?.speed || 0);
                $scope.buildStats.strength = $scope.buildStats.strength + (item.stats?.strength || 0);
            }

        }
    }

    $scope.setView = function (destination, resetPosition) {
        if (resetPosition){
            $scope.mapX = 0;
            $scope.mapY = 0;
        }
        $scope.view = destination;

        console.log($scope.buildSummary);
    }

    $scope.findablePieces = [
        {
            name: 'Flair2',
            slot: 'flair',
            sprite: 'sprites/flair_1.png'
        },
        {
            name: 'Back3',
            slot: 'back',
            sprite: 'sprites/back_2.png'
        },
    ];
    $scope.randomPiecesPOIs = [
        {
            id: 'POI_1',
            destination: 'screen2',
            style: {
                "top": "30rem",
                "left": "30rem"
            },
            unlooted: true
        },
        {
            id: 'POI_2',
            destination: 'screen2',
            style: {
                "top": "30rem",
                "left": "50rem"
            },
            unlooted: true
        }
    ]

    $scope.randomPiece;
    $scope.setRandomPiece = function() {
        //let index = Math.floor(Math.random() * ());
        let index = $scope.findablePieces.length - 1;
        $scope.randomPiece = $scope.findablePieces[index];
        $scope.pile.push($scope.findablePieces[index]);
        $scope.findablePieces.splice(index, 1);
    }

    $scope.buildSummary;
    $scope.getSnap = function () {
        let element = document.getElementById("buildCopy");
        element.replaceChildren(...$scope.buildSummary.childNodes);
    }
    $scope.setSnap = function () {
        let p = document.getElementById("build");
        let p_prime = p.cloneNode(true);
        $scope.buildSummary = p_prime;
    }

    $scope.scaling = {
        "transform": "scale(1)"
    }
    if ($window.innerWidth < 1280) {
        $scope.scaling = {
            "transform": "scale(" + (1 / Math.min(1280 / $window.innerWidth)) + ")"
        }
    }
    angular.element($window).bind('resize', function () {
        if ($window.innerWidth < 1280){
            $scope.scaling = {
                "transform": "scale(" + (1 / Math.min(1280 / $window.innerWidth)) + ")"
            }
        }
        $scope.$apply();
    });

    $scope.walkerStyle = {
        "background": "url('sprites/mech.png') 0 0"
    }

    $scope.mapX = 0;
    $scope.mapY = 0;
    $scope.mapStyle = {
        "left": $scope.mapX + "px",
        "top": $scope.mapY + "px"
    }

    window.addEventListener('keydown', function (e) {
        if (e.key === "ArrowRight") {
            $scope.walkerStyle = {
                "background": "url('sprites/mech.png') 0 -128px"
            }
            $scope.mapX = $scope.mapX - $scope.buildStats.speed;
        }
        if (e.key === "ArrowLeft") {
            $scope.walkerStyle = {
                "background": "url('sprites/mech.png') 0 134px"
            }
            $scope.mapX = $scope.mapX + $scope.buildStats.speed;
        }
        if (e.key === "ArrowUp") {
            $scope.walkerStyle = {
                "background": "url('sprites/mech.png') 0 259px"
            }
            $scope.mapY = $scope.mapY + $scope.buildStats.speed;
        }
        if (e.key === "ArrowDown") {
            $scope.walkerStyle = {
                "background": "url('sprites/mech.png') 0 0"
            }
            $scope.mapY = $scope.mapY - $scope.buildStats.speed;
        }
        
        $scope.mapStyle = {
            "left": $scope.mapX + "px",
            "top": $scope.mapY + "px"
        }

        $scope.$apply();
    });

    $scope.elementsOverlap = function (elID, destination, poiID) {
        const player = document.getElementById('player');
        const item = document.getElementById(elID);

        const domRect1 = item.getBoundingClientRect();
        const domRect2 = player.getBoundingClientRect();

        const outside = domRect1.top > domRect2.bottom ||
            domRect1.right < domRect2.left ||
            domRect1.bottom < domRect2.top ||
            domRect1.left > domRect2.right;

        if (!outside) {
            if (poiID !== undefined) {
                $scope.randomPiecesPOIs[poiID].unlooted = false;
            }
            $scope.setView(destination, false);
        }
    }

    $scope.pile = [
        // {
        //     name: 'Body0',
        //     slot: 'body',
        //     sprite: 'sprites/tml_body.png'
        // },
        //{
        //    name: 'Legs0',
        //    slot: 'legs',
        //    sprite: 'sprites/tml_legs.png'
        //},
        //{
        //    name: 'Head0',
        //    slot: 'head',
        //    sprite: 'sprites/tml_head.png'
        //},
        {
            name: 'Flair',
            slot: 'flair',
            sprite: 'sprites/flair_1.png'
        },
        {
            name: 'Back1',
            slot: 'back',
            sprite: 'sprites/back_1.png'
        },
        {
            name: 'Back2',
            slot: 'back',
            sprite: 'sprites/back_2.png'
        },

        {
            name: 'Head1',
            slot: 'head',
            sprite: 'sprites/head_1.png',
        },
        {
            name: 'Head2',
            slot: 'head',
            sprite: 'sprites/head_2.png',
            style: {
                "transform": "translateY(-5px)",
            }
        },
        {
            name: 'Head3',
            slot: 'head',
            sprite: 'sprites/head_3.png'
        },
        {
            name: 'LeftArm1',
            slot: 'leftArm',
            sprite: 'sprites/leftArm_1.png'
        },
        {
            name: 'LeftArm2',
            slot: 'leftArm',
            sprite: 'sprites/leftArm_2.png'
        },
        {
            name: 'RightArm1',
            slot: 'rightArm',
            sprite: 'sprites/rightArm_1.png'
        },
        {
            name: 'RightArm2',
            slot: 'rightArm',
            sprite: 'sprites/rightArm_2.png'
        },
        {
            name: 'Body1',
            slot: 'body',
            sprite: 'sprites/body_1.png',
            style: {
                "transform": "scale(1.5)",
                "transform-origin": "center top",
            }
        },
        {
            name: 'Body2',
            slot: 'body',
            sprite: 'sprites/body_2.png'
        },
        {
            name: 'Legs1',
            slot: 'legs',
            sprite: 'sprites/legs_1.png',
            stats: {
                speed: 3,
                beauty: -1,
                strength: 4
            }
        },
        {
            name: 'Legs2',
            slot: 'legs',
            sprite: 'sprites/legs_2.png',
            style: {
                "transform": "translate(-8.5rem, 0rem)",
                "width":"26rem",
                "transform-origin": "center top",
            },
            stats: {
                speed: 6,
                beauty: 2,
                strength: 3
            }
        },
        {
            name: 'Legs3',
            slot: 'legs',
            sprite: 'sprites/legs_3.png',
            stats: {
                speed: 1,
                beauty: 3,
                strength: 2
            }
        }
    ]
});
