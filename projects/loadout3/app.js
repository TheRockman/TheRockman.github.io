var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope, $window) {
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

    $scope.setView = function (destination) {
        if (document.getElementById("legs").childNodes.length > 0) {
            $scope.view = destination;
        }
    }

    $scope.snapshot = function () {
        let p = document.getElementById("build");
        let p_prime = p.cloneNode(true);
        document.getElementById("buildCopy").replaceChildren(...p_prime.childNodes);
    }

    $scope.scaling = {
        "transform": "scale(" + (1 / Math.min(1280 / $window.innerWidth)) + ")"
    }
    angular.element($window).bind('resize', function () {
        $scope.scaling = {
            "transform": "scale(" + (1 / Math.min(1280 / $window.innerWidth)) + ")"
        }
        $scope.$apply();
    });

    $scope.walkerStyle = {
        "background": "url('sprites/mech.png') 0 0"
    }

    window.addEventListener('keydown', function (e) {
        if (e.key === "ArrowRight") {
            $scope.walkerStyle = {
                "background": "url('sprites/mech.png') 0 -128px"
            }
        }
        if (e.key === "ArrowLeft") {
            $scope.walkerStyle = {
                "background": "url('sprites/mech.png') 0 134px"
            }
        }
        if (e.key === "ArrowUp") {
            $scope.walkerStyle = {
                "background": "url('sprites/mech.png') 0 259px"
            }
        }
        if (e.key === "ArrowDown") {
            $scope.walkerStyle = {
                "background": "url('sprites/mech.png') 0 0"
            }
        }

        $scope.$apply();
    });


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
            sprite: 'sprites/legs_1.png'
        },
        {
            name: 'Legs2',
            slot: 'legs',
            sprite: 'sprites/legs_2.png',
            style: {
                "transform": "translate(-8.5rem, 0rem)",
                "width":"26rem",
                "transform-origin": "center top",
            }
        },
        {
            name: 'Legs3',
            slot: 'legs',
            sprite: 'sprites/legs_3.png'
        }
    ]
});
