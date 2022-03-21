app.service('playerService', function() {

  this.improveStat = function(stat, setScope, getScope) {
    let allStats = getScope('stats');
    let globalXP = getScope('exp');

    if(allStats[stat]+1 < 21 && globalXP >= 10){
      setScope('exp', globalXP - 10);
      allStats[stat] = allStats[stat]+1;
      setScope('stats', allStats);
    }
  }

  this.reduceStat = function(stat, setScope, getScope) {
    let allStats = getScope('stats');
    let globalXP = getScope('exp');

    if(allStats[stat]-1 > 0){
      setScope('exp', globalXP + 5 );
      allStats[stat] = allStats[stat]-1;
      setScope('stats', allStats);
    }
  }

});
