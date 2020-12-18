app.service('questToggles', function() {
  this.all = {
    keyList: ['goblinSpeak','elfSpeak','knowGwen'],
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
    knowGwen: {
      active: false,
      title: 'Friend: Syr Gwendolin',
      desc: 'You are friends with Syr Gwendolin of the kingsguard'
    }
  }

  this.secret = {
    MugNoOrder: false,
  }
});
