var app = angular.module("myApp", []); app.controller("mainCtrl", function($scope) {
  $scope.games = [
    {
      title: 'Biomutant',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/0/0f/Biomutant_Logo.png',
      banner: 'https://gamingbolt.com/wp-content/uploads/2019/05/biomutant.jpg',
      data: {
        reviews: 'No reviews yet',
        developer: 'Experiment 101',
        publisher: 'THQ Nordic',
        release: '2020'
      },
      tags: [
        'Action',
        'Open world',
        'RPG'
      ],
      price: null,
      gameplay: [
        {
          url: 'https://techraptor.net/sites/default/files/styles/image_header/public/imports/2019/08/biomutant-banner.jpg?itok=gfuGFPJp'
        },
        {
          url: 'https://static2.gamerantimages.com/wordpress/wp-content/uploads/2020/02/biomutant-gameplay.jpg'
        },
        {
          url: 'https://steamcdn-a.akamaihd.net/steam/apps/597820/ss_aa7b05c9c251918ce61b820912f8acf4b1d10cc3.1920x1080.jpg?t=1577986514'
        },
        {
          url: 'https://www.gamersdecide.com/sites/default/files/styles/news_images/public/biomutant_reslease_date-winged_panda-1.jpg'
        }
      ],
      desc: {
        title: 'About',
        text: 'BIOMUTANT® is an open-world, post-apocalyptic Kung-Fu fable RPG, with a unique martial arts styled combat system allowing you to mix melee, shooting and mutant ability action. A plague is ruining the land and the Tree-of-Life is bleeding death from its roots. The Tribes stand divided. Explore a world in turmoil and define its fate – will you be its saviour or lead it to an even darker destiny?'
      }
    },
    {
      title: 'The Elder Scrolls V - Skyrim',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_Elder_Scrolls_V_-_Skyrim_logo.png/1024px-The_Elder_Scrolls_V_-_Skyrim_logo.png',
      banner: 'https://res.cloudinary.com/cook-becker/image/fetch/q_auto:best,f_auto,w_1920,e_sharpen/https://candb.com/site/candb/images/artwork/realm-of-the-dragonborn_skyrim_bethesda.jpg',
      data: {
        reviews: 'Very Positive',
        developer: 'Bethesda Game Studios',
        publisher: 'Bethesda Softworks',
        release: '28 Oct, 2016'
      },
      tags: [
        'Open world',
        'Action',
        'RPG'
      ],
      price: 59.99,
      gameplay: [
        {
          url: 'https://gpstatic.com/acache/10/57/1/uk/s1-8e43b6ff42d81eb12527c80230548f8d.jpg'
        },
        {
          url: 'https://i.ytimg.com/vi/-nxtG_fMQKw/maxresdefault.jpg'
        },
        {
          url: 'https://cdn.mos.cms.futurecdn.net/8iMv2e8PRUj2YKpd8gbc4d.jpg'
        },
        {
          url: 'https://d2skuhm0vrry40.cloudfront.net/2015/articles/1/8/6/4/9/7/4/skyrim-thief-skills-how-to-max-sneak-speech-lockpicking-and-pickpocketing-147765267301.jpg/EG11/resize/690x-1/quality/75/format/jpg'
        }
      ],
      desc: {
        title: 'About',
        text: 'Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC and consoles. New quests, environments, characters, dialogue, armor, weapons and more – with Mods, there are no limits to what you can experience.'
      }
    },
    {
      title: 'Pokémon Sword',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png',
      banner: 'https://i1.wp.com/www.nintendo-insider.com/wp-content/uploads/2019/07/zacian_zamazenta_pokemon_sword_and_shield_screenshot.jpg?fit=1280%2C720&ssl=1',
      data: {
        reviews: 'Positive',
        developer: 'GAME FREAK Inc',
        publisher: 'Nintendo',
        release: '15 Nov, 2019'
      },
      tags: [
        'Action',
        'Open world',
        'No controller support',
      ],
      price: 89.98,
      gameplay: [
        {
          url: 'https://cdn.mos.cms.futurecdn.net/SHBEdjBMrpUggstZJDws4n.jpg'
        },
        {
          url: 'https://cnet4.cbsistatic.com/img/t-hcMsTr_hxh-38o0ljxPNLWOJM=/1092x0/2019/05/10/6299aac2-cc2b-4c95-98f0-8064f3266e8f/screen-shot-2019-05-10-at-5-22-47-pm.png'
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsg0k0TXjQlFw8vc0CYIxKmf-KPR46jY8sctQh1oPYV4Zm6ewy'
        },
        {
          url: 'https://www.siliconera.com/wp-content/uploads/2019/11/pokemon-sword-and-shield-rivals-hop.jpg'
        }
      ],
      desc: {
        title: 'About',
        text: 'A new generation of Pokémon is coming to the Nintendo Switch™ system. Begin your adventure as a Pokémon Trainer by choosing one of three new partner Pokémon: Grookey, Scorbunny, or Sobble. Then embark on a journey in the new Galar region, where you’ll challenge the troublemakers of Team Yell, while unraveling the mystery behind the Legendary Pokémon Zacian and Zamazenta! Explore the Wild Area, a vast expanse of land where the player can freely control the camera. Team up with three other players locally or online in the new multiplayer co-op Max Raid Battles* in which players will face off against gigantic and super-strong Pokémon known as Dynamax Pokémon. '
      }
    }
  ];
  
  $scope.current = $scope.games[0];
  
  $scope.setCurrent = function(game){
    $scope.current = game;
    window.scrollTo(0, 0);
  }
});

// Extra modules
// var app = angular.module("myApp", ['ngTouch', 'angular-carousel']); app.controller("mainCtrl", function($scope) {
//
// });
