var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function ($scope, $timeout) {

    $scope.targets = [
        {
            img: 'https://www.pngplay.com/wp-content/uploads/3/Canard-Transparentes-Gratuit-PNG.png',
            xPath: ["0rem ", "0rem ", "22rem", "_____", "10rem", "_____"],
            yPath: ["0rem ", "0rem ", "_____", "20rem ", "_____", "0rem "],
            style: {
                "transform": "rotateX(-80deg)",
            }
        },
        {
            img: 'https://www.pngplay.com/wp-content/uploads/3/Canard-Transparentes-Gratuit-PNG.png',
            xPath: ["44rem", "44rem", "0rem ", "_____", "44rem", "_____"],
            yPath: ["20rem", "20rem", "_____", "0rem ", "_____", "20rem"],
            style: {
                "transform": "rotateX(-80deg)",
            }
        },
        {
            img: 'https://www.pngplay.com/wp-content/uploads/3/Canard-Transparentes-Gratuit-PNG.png',
            xPath: ["22rem", "22rem", "_____", "0rem ", "_____", "22rem"],
            yPath: ["10rem", "10rem", "20rem", "_____", "10rem", "_____"],
            style: {
                "transform": "rotateX(-80deg)",
            }
        }
    ]
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    $scope.ammo = 5;

    $scope.reload = function (crank) {
        $timeout(function () {
            $scope.ammo = 5;
        }, 500);
    }
    $scope.shot = function (target) {
        $scope.ammo--;
        if ($scope.ammo < 1) {
            // $scope.reload
        } else {
            target.shot = true;
        }
    }

    $scope.crankIt = function (crank) {
        for (let i = 0; i < $scope.targets.length; i++) {
            let el = $scope.targets[i];
            if (crank > 100) {
                console.log('loooong');
                return;
            }
            if (el.xPath.length !== el.yPath.length) {
                console.log('borked target path');
                return;
            }

            let xx = el.xPath[crank] === "_____" ? el.xPath[crank - 1] : el.xPath[crank];
            let yy = el.yPath[crank] === "_____" ? el.yPath[crank - 1] : el.yPath[crank];
            const time = 100 + crank * 2000;

            if (el.shot) {
                el.style = {
                    "transition": "unset",
                    "visibility": "hidden",
                    "transform": "rotateX(10deg)",
                    "left": xx,
                    "bottom": yy,
                }
                break;
            }

            if (crank === 0 ) {
                el.style = {
                    "transition": "unset",
                    "visibility": "hidden",
                    "transform": "rotateX(10deg)",
                    "left": xx,
                    "bottom": yy,
                }
            }
            if (crank >= el.xPath.length || crank >= el.yPath.length) {
                $timeout(function () {
                    el.style = {
                        "visibility": "visible",
                        "transform": "rotateX(10deg)",
                        "left": xx,
                        "bottom": yy,
                    }
                }, time);

                console.log('thats yer lot');
                return;
            }

            $timeout(function () {
                el.style = {
                    "visibility": "visible",
                    "transform": "rotateX(-80deg)",
                    "left": xx,
                    "bottom": yy,
                }
            }, time);



        }
        $scope.crankIt(crank + 1)
    }


});
//['ngTouch', 'angular-carousel']
