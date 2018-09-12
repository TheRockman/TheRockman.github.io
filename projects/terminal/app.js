var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope, $timeout) {

  $scope.commands = [];
  $scope.spin = false;
  
  $scope.runComm = function (command) {
    $scope.spin = true;
    $timeout( function(){
      $scope.spin = false;
      if ($scope.availableComms[command]) {
        $scope.commands.push(
          {
            text: $scope.availableComms[command](),
            id: genId()
          }
        );
      }
      else{
        $scope.commands.push(
          {
            text: "Invalid operation... Exit.",
            id: genId()
          }
        );
      }
    }, 2000 );
  }
  
  $scope.availableComms = {
    run: function () {
      return "hej"
    }
  }
  function genId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
});
