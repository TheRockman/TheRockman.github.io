app.service('itemIndex', function() {
  this.getInventoryService;
  this.setInventoryService = function(item){
    this.getInventoryService = item;
  }

  this.items = {
    potionOfMight: {
      id: 'potionOfMight',
      name: 'Potion of unlimited might',
      img: 'img/items/pot.png',
      desc: 'A dubious potion that supposedly grants strength.',
      use: '$scope.inventory.potionOfMight.quantity--; $scope.stats.str = 20;',
    },
    oldBoot: {
      id: 'oldBoot',
      name: 'Lether boot',
      img: 'img/items/boot.png',
      desc: 'An old boot not fit to use.',
      use: '',
    },
    crowbar: {
      id: 'crowbar',
      name: 'Crowbar',
      img: 'img/items/shield.png',
      desc: 'A metal rod used to force stuff open.',
      use: '',
    },
    apple: {
      id: 'apple',
      name: 'Apple',
      img: 'img/items/pot.png',
      desc: 'A fresh red apple.\n\nRestores 1 HP on use.',
      use: '$scope.inventory.apple.quantity--; $scope.stats.hp = $scope.stats.hp + 1;',
    },
    stew: {
      id: 'stew',
      name: 'Stew',
      img: 'img/items/pot.png',
      desc: 'A hot meat stew.\n\nRestores 10 HP on use.',
      use: '$scope.inventory.stew.quantity--; $scope.stats.hp = $scope.stats.hp + 10;',
    },
    ale: {
      id: 'ale',
      name: 'Ale',
      img: 'img/items/pot.png',
      desc: 'A frothy ale.\n\nRestores 5 HP on use.',
      use: '$scope.inventory.ale.quantity--; $scope.stats.hp = $scope.stats.hp + 5;',
    },
    wine: {
      id: 'wine',
      name: 'Wine',
      img: 'img/items/pot.png',
      desc: 'A deep red wine.\n\nRestores 5 HP on use.',
      use: '$scope.inventory.wine.quantity--; $scope.stats.hp = $scope.stats.hp + 5;',
    }
  }
});
