app.service('questToggles', function() {
  this.all = {
    test: {
      active: false,
      title: 'TEST',
      desc: 'This shouldnt be seen'
    },
    goblinSpeak: {
      active: false,
      title: 'Language: Goblin',
      desc: 'You understand goblins'
    },
    elfSpeak: {
      active: false,
      title: 'Language: Elvish',
      desc: 'You understand elves'
    },
    abyssal: {
      active: false,
      title: 'Language: Abyssal',
      desc: 'You understand the dark tongue'
    },
    knowGwen: {
      active: false,
      title: 'Friend: Syr Gwendolin',
      desc: 'You are friends with Syr Gwendolin of the kingsguard'
    },
  }

  this.all.keyList = Object.keys(this.all);

  this.secret = {
    MugNoOrder: false,
  }
});
