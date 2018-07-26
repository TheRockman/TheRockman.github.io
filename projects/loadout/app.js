var app = angular.module('dragDrop', []);

app.directive('draggable', function() {
  return function(scope, element) {
    var el = element[0];
    
    el.draggable = true;
    
    el.addEventListener(
      'dragstart',
      function(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('Text', this.id);
        this.classList.add('drag');
        return false;
      },
      false
    );
    
    el.addEventListener(
      'dragend',
      function(e) {
        this.classList.remove('drag');
        return false;
      },
      false
    );
  }
});

app.directive('droppable', function() {
  return {
    scope: {
      drop: '&'
    },
    link: function(scope, element) {
      var el = element[0];
      
      el.addEventListener(
        'dragover',
        function(e) {
          e.dataTransfer.dropEffect = 'move';
          if (e.preventDefault) e.preventDefault();
          this.classList.add('over');
          return false;
        },
        false
      );
      
      el.addEventListener(
        'dragenter',
        function(e) {
          this.classList.add('over');
          return false;
        },
        false
      );
      
      el.addEventListener(
        'dragleave',
        function(e) {
          this.classList.remove('over');
          return false;
        },
        false
      );
      
      el.addEventListener(
        'drop',
        function(e) {
          if (e.stopPropagation) e.stopPropagation();

          this.classList.remove('over');
          
          var item = document.getElementById(e.dataTransfer.getData('Text'));
          
          this.appendChild(item);
          var childLimit = 2;
          if (this.children.length > childLimit) {

            if (item.title === this.children[1].title) {
              var prevItem  = this.children[1];
              console.log('replace', prevItem, 'with', item);
              itemlist.appendChild(prevItem);
              this.removeChild(prevItem)
              return false;
            }
              itemlist.appendChild(item);
              this.removeChild(item)
              return false;
          }
          
          var itemList = document.getElementById('itemlist');
          var allowedItemitemType = this.title;
          if (e.srcElement.children.length < 3 && e.srcElement.children[1] !== undefined) {
            var atemptedItemitemType = e.srcElement.children[1].title;
          }
          else {
            var atemptedItemitemType = 'nada';
          }

          console.log('i want to put a', atemptedItemitemType, ' in the ', allowedItemitemType, ' slot');
          if (atemptedItemitemType !== allowedItemitemType) {
            console.log('you cant do that');
            itemlist.appendChild(item);
          }
          scope.$apply('drop()');          
          return false;
        },
        false
      );
    }
  }
});

app.controller('DragDropCtrl', function($scope) {
  $scope.handleDrop = function() {
    console.log('Go ahead');
  }
  
  $scope.inventory = [
    {
      displayname: "Swordy1",
      itemType:"weapon",
      class: "sword",
      rarity: 'legendary'
    },
    {
      displayname: "Swordy2",
      itemType:"weapon",
      class: "sword",
      rarity: 'rare'
    },
    {
      displayname: "Potion of herp",
      itemType:"potion",
      class: "flask",
      rarity: 'uncommon'
    },
    {
      displayname: "Potion of herp",
      itemType:"potion",
      class: "flask",
      rarity: 'uncommon'
    },
    {
      displayname: "Potion of derp",
      itemType:"potion",
      class: "flask",
      rarity:  'common'
    },
    {
      displayname: "Helmet x",
      itemType:"face",
      class: "tiara",
      rarity:  'common'
    },
    {
      displayname: "Armory",
      itemType:"armor",
      class: "cloak",
      rarity:  'common'
    },
    {
      displayname: "Shield of blocking",
      itemType:"shield",
      class: "gem-blue",
      rarity:  'common'
    },
    {
      displayname: "Blood vial",
      itemType:"potion",
      class: "flask-small",
      rarity:  'common'
    },
    {
      displayname: "Booty boots",
      itemType:"boots",
      class: "boot",
      rarity:  'common'
    },
    {
      displayname: "Mana potion",
      itemType:"potion",
      class: "flask-blue",
      rarity:  'common'
    },
    {
      displayname: "mace",
      itemType:"weapon",
      class: "mace",
      rarity:  'common'
    },
    {
      displayname: "Skull",
      itemType:"face",
      class: "skull",
      rarity:  'common'
    },
    {
      displayname: "Some green",
      itemType:"trinket",
      class: "green-gem",
      rarity:  'common'
    },
    {
      displayname: "Pot lid",
      itemType:"shield",
      class: "lid",
      rarity:  'common'
    },
    {
      displayname: "Pure green",
      itemType:"trinket",
      class: "green-gem",
      rarity:  'legendary'
    },
    {
      displayname: "Amulutt",
      itemType:"trinket",
      class: "garnet-blue",
      rarity:  'common'
    },
    {
      displayname: "Fragments of Epicblade",
      itemType:"weapon",
      class: "broken-sword",
      rarity:  'common'
    },
    {
      displayname: "Bone splinter",
      itemType:"weapon",
      class: "bone",
      rarity:  'rare'
    },
    {
      displayname: "Sorting hat",
      itemType:"face",
      class: "wh",
      rarity:  'legendary'
    },
    {
      displayname: "Herb",
      itemType:"potion",
      class: "herb",
      rarity:  'common'
    },
    {
      displayname: "Steel boot",
      itemType:"boots",
      class: "armor-boot",
      rarity:  'common'
    },
    {
      displayname: "Sack cloth rags",
      itemType:"armor",
      class: "cloth",
      rarity:  'rare'
    }
  ];
  (function () {
    for (var i = 0; i < $scope.inventory.length; i++) {
      $scope.inventory[i].id = i;
    }
  })();
  
});
