var app = angular.module("myApp", ['ngAnimate']); app.controller("mainCtrl", function($scope) {
  $scope.screen = false;
  
  $scope.leftMenu = [
    {
      picked: 0,
      options: [
        {text: '1', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '2', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '3', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '4', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"}
      ]
    },
    {
      picked: 0,
      options: [
        {text: '1', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '2', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '3', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '4', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"}
      ]
    },
    {
      picked: 0,
      options: [
        {text: '1', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '2', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '3', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '4', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"}
      ]
    },
    {
      picked: 0,
      options: [
        {text: '1', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '2', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '3', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '4', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"}
      ]
    },
    {
      picked: 0,
      options: [
        {text: '1', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '2', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '3', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '4', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"}
      ]
    },
    {
      picked: 0,
      options: [
        {text: '1', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '2', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '3', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '4', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"}
      ]
    }
  ];
  
  $scope.rightMenu = [
    {
      picked: 0,
      options: [
        {text: '1', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '2', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '3', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '4', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"}
      ]
    },
    {
      picked: 0,
      options: [
        {text: '1', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '2', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '3', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '4', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"}
      ]
    },
    {
      picked: 0,
      options: [
        {text: '1', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '2', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '3', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '4', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"}
      ]
    },
    {
      picked: 0,
      options: [
        {text: '1', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '2', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '3', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '4', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"}
      ]
    },
    {
      picked: 0,
      options: [
        {text: '1', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '2', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '3', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '4', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"}
      ]
    },
    {
      picked: 0,
      options: [
        {text: '1', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '2', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '3', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"},
        {text: '4', url: "https://4vector.com/iraw/free-vector-icon-cube-green-clip-art_117088_Icon_Cube_Green_clip_art_medium.png"}
      ]
    }
  ]
});
