
angular.module('cardApp').component('card', {
  templateUrl: 'card.html',
  bindings: {
    cardInfo: '=',
    playerMana: '=',
    target: '='
  }
});
