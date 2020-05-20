var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {
  $scope.hand = [
    {
      name: '1'
    },
    {
      name: '2'
    },
    {
      name: '3'
    },
    {
      name: '4'
    },
    {
      name: '5'
    },
    {
      name: '1'
    },
    {
      name: '2'
    },
    {
      name: '3'
    },
    {
      name: '4'
    },
    {
      name: '5'
    },
    
  ]
  
  $scope.fan = function(i){
    var offset = i;
    return  {'transform': 'translateY(-265px) translateX(-75px) rotate('+ (-i*15)+'deg)'};
  }

});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
