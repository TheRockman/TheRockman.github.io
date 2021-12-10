app.service('factionIndex', function() {

  this.factions = {
    crown: {
      rep: 0,
      icon: './img/factions/silver.png',
      desc: '<a href="#silverCourt" class="info"> [wiki] The court of silver',
      title: 'The court of silver'
    },
    mages: {
      rep: 0,
      icon: './img/factions/mages.png',
      desc: '<a href="#mageGuild" class="info"> [wiki] The mages guild',
      title: 'The mages guild'
    },
    steven: {
      rep: 0,
      icon: '',
      desc: 'Steven is talkative old man in the woods',
      title: 'Steven'
    },
    boblin: {
      rep: 0,
      icon: './img/factions/gobbo.png',
      desc: 'Inknose goblins are common and easy to spot by their long black noses.',
      title: 'Inknose tribe'
    },
    elf: {
      rep: 0,
      icon: './img/factions/gobbo.png',
      desc: 'Knifeears',
      title: 'House Glittergreen'
    },
    dwarf: {
      rep: 0,
      icon: './img/factions/gobbo.png',
      desc: 'Lumberfeet',
      title: 'Forged brotherhood'
    },
  }

});
