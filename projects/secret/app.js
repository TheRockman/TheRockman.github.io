var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {
  $scope.finalRoles = [];
  $scope.menuOpt = 'enter';
  $scope.roleIds = {
    liberals: [
      "4238825",
      "3090034",
      "3948894",
      "8542934",
      "6276713",
      "7610761",
      "7910328",
      "7930747",
      "2998010",
      "8546079"
    ],
    hitler: [
      "5719580",
      "1616329",
      "5753856",
      "1187724",
      "6142031",
      "7600425",
      "5058660",
      "0579331",
      "4424376",
      "1910895"
    ],
    fascists: [
      "2180364",
      "5487293",
      "7657221",
      "8810412",
      "3043382",
      "2506128",
      "7095106",
      "2687793",
      "1158858",
      "3051364"
    ]
  };
  function random() {
    return Math.floor(Math.random() * (9 - 0 + 1));
  }

  $scope.buildRoles = function (noPlayers) {
    $scope.finalRoles = [];
    switch(noPlayers) {
      case 5:
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.hitler[random()]);
      $scope.finalRoles.push($scope.roleIds.fascists[random()]);
      break;
      case 6:
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.hitler[random()]);
      $scope.finalRoles.push($scope.roleIds.fascists[random()]);
      break;
      case 7:
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.hitler[random()]);
      $scope.finalRoles.push($scope.roleIds.fascists[random()]);
      $scope.finalRoles.push($scope.roleIds.fascists[random()]);
      break;
      case 8:
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.hitler[random()]);
      $scope.finalRoles.push($scope.roleIds.fascists[random()]);
      $scope.finalRoles.push($scope.roleIds.fascists[random()]);
      break;
      case 9:
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.hitler[random()]);
      $scope.finalRoles.push($scope.roleIds.fascists[random()]);
      $scope.finalRoles.push($scope.roleIds.fascists[random()]);
      $scope.finalRoles.push($scope.roleIds.fascists[random()]);
      break;
      case 10:
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.liberals[random()]);
      $scope.finalRoles.push($scope.roleIds.hitler[random()]);
      $scope.finalRoles.push($scope.roleIds.fascists[random()]);
      $scope.finalRoles.push($scope.roleIds.fascists[random()]);
      break;
    }
    if (hasDuplicates($scope.finalRoles)) {
      $scope.buildRoles(noPlayers);
    } else {
      shuffleArray($scope.finalRoles);
    }
  }

  function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  $scope.assignRole = function (id) {
    if ($scope.roleIds.liberals.includes(id)) {
      $scope.yourRole = "liberal";
    } else if ($scope.roleIds.fascists.includes(id)) {
      $scope.yourRole = "fascist";
    } else if ($scope.roleIds.hitler.includes(id)) {
      $scope.yourRole = "hitler";
    } else {
      console.log('wrong');
    }
  }

});
