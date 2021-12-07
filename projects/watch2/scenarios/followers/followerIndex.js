app.service('followerIndex', function(scenarioHenry, scenarioBoblin) {

  this.all = {
    henry: {
      following: false,
      canSpeak: true,
      name: 'Henry Slingerman',
      scenarios: scenarioHenry.scenarios,
      portrait: 'https://uninvisitedisle.files.wordpress.com/2018/01/2018-01-31.png?w=1200',
    },
    boblin: {
      following: false,
      canSpeak: true,
      name: 'Boblin',
      scenarios: scenarioBoblin.scenarios,
      portrait: 'https://styles.redditmedia.com/t5_10kt1w/styles/communityIcon_8fpdzqdg49v21.png?width=256&s=5c0fc4ce8a09c0d74da267582bde592611edbd89',
    }
  }
});
