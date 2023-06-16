var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {

    $scope.filter = '-gearScore';
    $scope.view = 'gear';

    $scope.setFilter = function (item) {
        $scope.filter = item;
    }
    $scope.setView = function (item) {
        $scope.view = item;
    }
    
    $scope.hovered;
    $scope.setHover = function (item) {
        $scope.hovered = item;
    }


    $scope.list = [
        {
            img: 'https://wiki.teamfortress.com/w/images/thumb/8/88/Item_icon_Original.png/100px-Item_icon_Original.png',
            name: 'Point and shooty',
            gearScore: '75',
            type: 'Weapon',
            rarity: 'Legendary',
            rarityColor: 'brown',
            equipped: false
        },
        {
            img: 'https://wiki.teamfortress.com/w/images/thumb/2/24/Item_icon_Liberty_Launcher.png/100px-Item_icon_Liberty_Launcher.png',
            name: 'Bang Bang Pew',
            gearScore: '45',
            type: 'Weapon',
            rarity: 'Rare',
            rarityColor: 'yellow',
            equipped: false
        },
        {
            img: 'https://wiki.teamfortress.com/w/images/thumb/8/88/Item_icon_Original.png/100px-Item_icon_Original.png',
            name: 'Point and shooty',
            gearScore: '35',
            type: 'Weapon',
            rarity: 'Uncommon',
            rarityColor: 'dodgerblue',
            equipped: false
        },
        {
            img: 'https://wiki.teamfortress.com/w/images/thumb/8/88/Item_icon_Original.png/100px-Item_icon_Original.png',
            name: 'Point and shooty',
            gearScore: '32',
            type: 'Weapon',
            rarity: 'Uncommon',
            rarityColor: 'dodgerblue',
            equipped: false
        },
        {
            img: 'https://wiki.teamfortress.com/w/images/thumb/f/f8/Item_icon_Air_Strike.png/100px-Item_icon_Air_Strike.png',
            name: 'Rootin tootin',
            gearScore: '25',
            type: 'Weapon',
            rarity: 'Common',
            rarityColor: '#666',
            equipped: false
        },
    ]

});
//['ngTouch', 'angular-carousel']
