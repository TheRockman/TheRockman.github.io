var app = angular.module("myApp", ['ngTouch']); app.controller("mainCtrl", function($scope) {

  $scope.fulllGridlist = {
    row1: [],
    row2: [],
    row3: [],
    row4: [],
    row5: [],
    row6: [],
    row7: [],
  };
  $scope.saved = [];
  $scope.color = 'white';
  $scope.density = '0.4';

  $scope.generate = function(){
    for (var i = 0; i < 7; i++) {
      $scope.fulllGridlist.row1[i] = Math.random()+parseFloat($scope.density)|0;
      $scope.fulllGridlist.row2[i] = Math.random()+parseFloat($scope.density)|0;
      $scope.fulllGridlist.row3[i] = Math.random()+parseFloat($scope.density)|0;
      $scope.fulllGridlist.row4[i] = Math.random()+parseFloat($scope.density)|0;
      $scope.fulllGridlist.row5[i] = Math.random()+parseFloat($scope.density)|0;
      $scope.fulllGridlist.row6[i] = Math.random()+parseFloat($scope.density)|0;
      $scope.fulllGridlist.row7[i] = Math.random()+parseFloat($scope.density)|0;
    }
  }
  $scope.generate();

// ___________________________________________________
  var btn = document.querySelector('.save');
  var svg = document.querySelector('svg');
  var canvas = document.querySelector('canvas');

  function triggerDownload (imgURI) {
    var evt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });

    var a = document.createElement('a');
    a.setAttribute('download', 'crest.png');
    a.setAttribute('href', imgURI);
    a.setAttribute('target', '_blank');

    a.dispatchEvent(evt);
  }

  btn.addEventListener('click', function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var data = (new XMLSerializer()).serializeToString(svg);
    var DOMURL = window.URL || window.webkitURL || window;

    var img = new Image();
    var svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    var url = DOMURL.createObjectURL(svgBlob);

    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);

      var imgURI = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');

      triggerDownload(imgURI);
    };

    img.src = url;
  });

});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
