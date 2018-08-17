var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {
  
  $scope.cards = [
    {
      name: "Noot of the forest",
      cost: 9,
      dmg: 3,
      hp: 5,
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a4767e40652419.57878400a8538.jpg",
      text: "",
      abilities: ['charge','taunt'],
    },
    {
      name: "bi bi",
      cost: 5,
      dmg: 3,
      hp: 5,
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/81669b40652419.57878318c95d1.jpg",
      text: '"Run! Run! Run!"',
      abilities: []
    },
    {
      name: "bla bla",
      cost: 1,
      dmg: 3,
      hp: 5,
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e47b4540652419.57878318c8a80.jpg",
      text: "",
      abilities: ['flying']
    },
    {
      name: "herp derp",
      cost: 3,
      dmg: 3,
      hp: 5,
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/03813e40652419.57878318c912b.jpg",
      text: "",
      abilities: []
    },
    {
      name: "reset reset",
      cost: 8,
      dmg: 3,
      hp: 5,
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/26e5b114174559.5627ed8685179.jpg",
      text: "",
      abilities: []
    }
  ];
  (function () {
    for (var i = 0; i < $scope.cards.length; i++) {
      $scope.cards[i].id = i + 1;
      
      for (var j = 0; j < $scope.cards[i].abilities.length; j++) {
        console.log($scope.cards[i].abilities[j]);
        if ($scope.cards[i].abilities[j] === "charge") {
          $scope.cards[i].text = $scope.cards[i].text + "When this card enters the field it may attack directly. "
        }
        if ($scope.cards[i].abilities[j] === "taunt") {
          $scope.cards[i].text = $scope.cards[i].text + "No attacks against you can be made while this card is in play. "
        }
        if ($scope.cards[i].abilities[j] === "flying") {
          $scope.cards[i].text = $scope.cards[i].text + "This card can not be blocked by cards without flying. "
        }
        $scope.cards[i].desc
      }
    }
  })();
  $scope.selectedCard = $scope.cards[0];
  $scope.next = function (id) {
    if (id !== $scope.cards.length) {
      $scope.selectedCard = $scope.cards[id];  
    } else {
      $scope.selectedCard = $scope.cards[0];
    }
  }
});
