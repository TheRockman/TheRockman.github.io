var app = angular.module("myApp", []); app.controller("mainCtrl", function ($scope) {

    $scope.current;
    $scope.view = 0;
    $scope.seats = [];

    for (let i = 0; i < 45; i++) {
        $scope.seats.push(
            { state: false, id: i }
        )
    }

    $scope.receipt = {};

    $scope.movies = [
        {
            name: 'Avengers: Endgame',
            desc: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
            poster: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
            screenX: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBbQVsnyG79AWad_qgjqojgEtRspwmCMJoQ&usqp=CAU',
            rating: 'PG-13',
            price: 110,
            playtime: '123 min',
            shows: [
                {
                    time: '12:00',
                    threeD: false
                },
                {
                    time: '13:00',
                    threeD: true
                },
                {
                    time: '14:00',
                    threeD: false
                },
                {
                    time: '15:00',
                    threeD: true
                },
            ],
            threeD: false,
            basePrice: 123,
            seats: []
        },
        {
            name: 'abc',
            desc: 'lorem',
            poster: 'https://www.mockofun.com/wp-content/uploads/2019/10/movie-poster-credits-178.jpg',
            screenX: 'https://img.freepik.com/free-vector/theater-cinema-curtains-with-focus-light-vector-illustration_1017-38346.jpg',
            rating: 'PG-13',
            price: 110,
            playtime: '123 min',
            shows: [
                {
                    time: '12:00',
                    threeD: false
                },
                {
                    time: '13:00',
                    threeD: true
                },
                {
                    time: '14:00',
                    threeD: false
                },
                {
                    time: '15:00',
                    threeD: false
                },
            ],
            threeD: false,
            basePrice: 123,
            seats: []
        },
        {
            name: '1',
            desc: 'lorem',
            poster: 'https://www.mockofun.com/wp-content/uploads/2019/10/movie-poster-credits-178.jpg',
            screenX: 'https://img.freepik.com/free-vector/theater-cinema-curtains-with-focus-light-vector-illustration_1017-38346.jpg',
            rating: 'PG-13',
            price: 110,
            playtime: '123 min',
            shows: [
                {
                    time: '12:00',
                    threeD: false
                },
                {
                    time: '13:00',
                    threeD: true
                },
                {
                    time: '14:00',
                    threeD: false
                },
                {
                    time: '15:00',
                    threeD: false
                },
            ],
            threeD: false,
            basePrice: 123,
        },
        {
            name: '2',
            desc: 'lorem',
            poster: 'https://www.mockofun.com/wp-content/uploads/2019/10/movie-poster-credits-178.jpg',
            screenX: 'https://img.freepik.com/free-vector/theater-cinema-curtains-with-focus-light-vector-illustration_1017-38346.jpg',
            rating: 'PG-13',
            price: 110,
            playtime: '123 min',
            shows: [
                {
                    time: '12:00',
                    threeD: false
                },
                {
                    time: '13:00',
                    threeD: true
                },
                {
                    time: '14:00',
                    threeD: false
                },
                {
                    time: '15:00',
                    threeD: false
                },
            ],
            threeD: false,
            basePrice: 123,
        },
        {
            name: 'xyz',
            desc: 'lorem',
            poster: 'https://www.mockofun.com/wp-content/uploads/2019/10/movie-poster-credits-178.jpg',
            screenX: 'https://img.freepik.com/free-vector/theater-cinema-curtains-with-focus-light-vector-illustration_1017-38346.jpg',
            rating: 'PG-13',
            price: 110,
            playtime: '123 min',
            shows: [
                {
                    time: '12:00',
                    threeD: false
                },
                {
                    time: '13:00',
                    threeD: true
                },
                {
                    time: '14:00',
                    threeD: false
                },
                {
                    time: '15:00',
                    threeD: false
                },
            ],
            threeD: false,
            basePrice: 123,
        }
    ];
    $scope.back = function() {
        $scope.view = $scope.view-1;
    }
    $scope.setCurrent = function (m) {
        $scope.current = m;
        $scope.view = 1;
    }
    $scope.setShowing = function (s) {
        $scope.receipt.showing = s;
        $scope.view = 2;
    }
    $scope.setSeats = function (c) {
        c.state = !c.state;
        $scope.receipt.seats = [];
        for (let i = 0; i < $scope.seats.length; i++) {
            if ($scope.seats[i].state) {
                $scope.receipt.seats.push($scope.seats[i])
            }
        }
        $scope.receipt.totalPrice = $scope.current.price * $scope.receipt.seats.length;
    }
    $scope.confirm = function () {
        if ($scope.receipt.seats.length > 0) {
            $scope.view = 3;
        }
    }

});

// {{}}