var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope, $http, $sce) {
$scope.videos = [];
$scope.picked = '';
$scope.videoUrl = '';
$scope.channel = {
  desc: '',
  title: '',
  banner: ''
}

$scope.pickVideo = function(id){
  $scope.picked = id;
  $scope.videoUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/'+id);
}

$scope.getPlaylist = function(playlistID) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/playlistItems?playlistId='+playlistID+'&key=AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE&part=snippet&maxResults=5'
    }).then(function successCallback(response) {
      console.log(response);
      $scope.videos = response.data.items;
      $scope.pickVideo($scope.videos[0].snippet.resourceId.videoId);
      $scope.getChannel(response.data.items[0].snippet.channelId);
    });
  };
  
  $scope.getChannel = function(id) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id='+id+'&key=AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE'
      }).then(function successCallback(response) {
        console.log(response);
        $scope.channel.desc = response.data.items[0].brandingSettings.channel.description;
        $scope.channel.title = response.data.items[0].brandingSettings.channel.title;
        $scope.channel.banner = response.data.items[0].brandingSettings.image.bannerTvImageUrl;
      });
    };

$scope.getPlaylist('PLaWLiMKNuKMnw85R489EQSB7jMNXhbfhZ');

});
