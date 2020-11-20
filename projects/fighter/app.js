var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope,  $timeout, $document) {
    $scope.p1 = {
      up: true,
      act: false,
      blk: false,
      hp: 10,
      inv: false
    };
    $scope.p2 = {
      up: true,
      act: false,
      blk: false,
      hp: 10,
      inv: false
    };
    
    var wiff = new Audio('wiff.mp3');
    var tink = new Audio('tink.mp3');
    var hit = new Audio('hit.mp3');
    var hit2 = new Audio('hit2.mp3');
    
    $scope.delay = 300;

  // p1
  // top: 87
  // bott: 83
  // action 68
  
  // p2
  // top: 38
  // bot: 40
  // action: 37
  
  // $timeout( function(){
  //   $scope.p2.vert = 'up';
  // }, $scope.delay );
  
  $scope.evaluate = function(){
    $timeout( function(){
      var p1 = $scope.p1;
      var p2 = $scope.p2;
      if(p1.hp < 1 || p2.hp < 1){
        return;
      }
      if(
        (p1.act && !p1.up && !p2.up && !p2.act && !p2.blk) ||
        (p2.act && !p2.up && !p1.up && !p1.act && !p1.blk) ||
        (p1.act && !p1.up && p2.up) ||
        (p2.act && !p2.up && p1.up) ||
        (p1.act && p1.up && p2.up && !p2.act && !p2.blk) ||
        (p2.act && p2.up && p1.up && !p1.act && !p1.blk)
      ){
        if(p1.act && p2.act){
          tink.play();
          return;
        }
        else{
          if(p1.act && !p2.act){
            if(p2.inv){
              return;
            }
            p2.hp = p2.hp-1;
            p2.inv = true;
            hit.play();
            console.log('p2 got hit');
            $timeout( function(){
              p2.inv = false;
            }, $scope.delay );
            return;
          }
          if(p2.act && !p1.act){
            if(p1.inv){
              return;
            }
            $scope.p1.hp = $scope.p1.hp-1;
            p1.inv = true;
            hit2.play();
            console.log('p1 got hit');
            $timeout( function(){
              p1.inv = false;
            }, $scope.delay );
            return;
          }
        }
      }
      else if(
        //wiffs
        (p1.act && p1.up && !p2.up) ||
        (p2.act && p2.up && !p1.up)
      ){
        console.log('*wiff*');
        wiff.play();
      }
      else if(
        //blocks
        (p1.act && !p1.up && !p2.up && p2.blk) ||
        (p2.act && !p2.up && !p1.up && p1.blk) ||
        (p1.act && p1.up && p2.up && p2.blk) ||
        (p2.act && p2.up && p1.up && p1.blk) ||
        //stales
        (p2.act && p2.up && p1.act && p1.up) ||
        (p2.act && !p2.up && p1.act && !p1.up)
      ){
        console.log('tink*');
        tink.play();
      }
    }, $scope.delay/2 );
  }

  $document.bind('keydown', function (e) {
    if(e.keyCode === 83 || e.keyCode === 68 || e.keyCode === 65){
      if($scope.p1.act || $scope.p2.inv){
        return;
      }
    }
    if(e.keyCode === 83){
      if($scope.p1.up){
        console.log('p1 down');
        $scope.p1.up = false;
      }
    }
    if(e.keyCode === 68){
      console.log('p1 atk');
      $scope.p1.act = true;
      $scope.p1.blk = false;
      $timeout( function(){
        $scope.p1.act = false;
      }, $scope.delay );
    }
    if(e.keyCode === 65){
      if(!$scope.p1.blk){
        console.log('p1 blk');
        $scope.p1.blk = true;
      }
    }
    
    // P2
    if(e.keyCode === 40 || e.keyCode === 37 || e.keyCode === 39){
      if($scope.p2.act){
        return;
      }
    }
    
    if(e.keyCode === 40){
      if($scope.p2.up){
        console.log('p2 down');
        $scope.p2.up = false;
      }
    }
    if(e.keyCode === 37){
      console.log('p2 atk');
      $scope.p2.act = true;
      $scope.p2.blk = false;
      $timeout( function(){
        $scope.p2.act = false;
      }, $scope.delay );
    }
    if(e.keyCode === 39){
      if(!$scope.p2.blk){
        console.log('p2 blk');
        $scope.p2.blk = true;
      }
    }
    
    $scope.$apply();
    $scope.evaluate();
    
  });
  
  $document.bind('keyup', function (e) {
    // P1
    if(e.keyCode === 65){
      console.log('p1 blk');
      $scope.p1.blk = false;
    }
    if(e.keyCode === 83){
      console.log('p1 blk');
      $scope.p1.up = true;
    }
    
    // P2
    if(e.keyCode === 39){
      console.log('p2 blk');
      $scope.p2.blk = false;
    }
    if(e.keyCode === 40){
      console.log('p2 blk');
      $scope.p2.up = true;
    }

    $scope.$apply();
    $scope.evaluate();
    
  });

});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
