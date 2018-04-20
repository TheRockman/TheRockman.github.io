var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope, $sce, $window) {

  $scope.selected = null;
  $scope.mini = false;

  $scope.searchy = function(query) {
    var myUrl = 'https://www.youtube.com/embed?listType=search&list=' + query;
    $scope.url = $sce.trustAsResourceUrl(myUrl) ;
    $scope.query = query;
  }

  function getId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  $scope.records = storageGet('records', []);
  $scope.add = function() {
    if ($scope.query === null) {
      return;
    }
    var record = {
      name: $scope.query
    };
    $scope.records.push(record);
  };

  $scope.clear = function() {
    $scope.records = [];
  };

  $scope.remove = function (item) {
    var index = $scope.records.indexOf(item);
    $scope.records.splice(index, 1);
  }

  $scope.$watchCollection('records', function() {
    storageSet('records', $scope.records);
  }, true);

  function storageSet(key, value) {
    $window.localStorage[key] = angular.toJson(value);
  }

  function storageGet(key, defaultValue) {
    var value = $window.localStorage[key];
    if (value === undefined) {
      return defaultValue;
    }
    return angular.fromJson(value);
  }
  if ($scope.records.length > 0) {
    $scope.query = $scope.records[0].name;
  }else{
    $scope.query = 'search here';
  }


});
