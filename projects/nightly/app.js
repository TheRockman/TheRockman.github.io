var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {
  $scope.number = 45;
  $scope.getNumber = function(num) {
    return new Array(num);
  }

  $scope.quotes = [
    {
      quote: 'All that we see or seem is but a dream within a dream.',
      author: 'Edgar Allan Poe'
    },
    {
      quote: 'There is only one corner of the universe you can be certain of improving, and thats your own self.',
      author: 'Aldous Huxley'
    },
    {
      quote: 'The journey of a thousand miles begins with one step.',
      author: 'Lao Tzu'
    },
    {
      quote: 'I have not failed. Ive just found 10,000 ways that wont work.',
      author: 'Thomas A. Edison'
    },
    {
      quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
      author: 'Benjamin Franklin'
    },
    {
      quote: 'The secret of getting ahead is getting started.',
      author: 'Mark Twain'
    },
    {
      quote: 'Today you are you! That is truer than true! There is no one alive who is you-er than you!',
      author: 'Dr. Seuss'
    }
  ];

  $scope.pickQuote = function () {
    $scope.selectedQuote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
  };
  $scope.pickQuote();
});
