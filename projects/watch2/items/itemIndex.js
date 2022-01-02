app.service('itemIndex', function() {

  let dynamicJS = "console.log(inventory, $scope); ";

  this.items = {
    potionOfMight: {
      name: 'Potion of unlimited might',
      img: 'img/items/pot.png',
      desc: 'A dubious potion that supposedly grants strength.',
      use: '$scope.inventory.potionOfMight.quantity--; $scope.stats.str = 100;',
    },
    oldBoot: {
      name: 'Lether_boots',
      img: 'img/items/boot.png',
      desc: 'An old boot not fit to use.',
      use: '',
    },
    smallShield: {
      name: 'small_shield',
      img: 'img/items/shield.png',
      desc: 'A small wooden shield.',
      use: '',
    },
    apple: {
      name: 'Apple',
      img: 'img/items/pot.png',
      desc: 'A red apple.\n\nRestores 1 HP on use.',
      use: '$scope.inventory.apple.quantity--; $scope.stats.hp = 100;',
    }
  }
});



// use: function(){
//   if($scope.stats.hp+1 < $scope.maxHP){
//     this.quantity--;
//     $scope.stats.hp = $scope.stats.hp +1;
//   }
// },
