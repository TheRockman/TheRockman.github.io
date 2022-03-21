app.service('playerService', function() {

  refreshHP = function(setScope, getScope){
    let gMaxHp = getScope('maxHP');
    let gstats = getScope('stats');


    gMaxHp = Math.round( gstats.con / 2);
    gstats.hp = JSON.parse(JSON.stringify(gMaxHp));
    setScope('maxHP', gMaxHp);
    setScope('stats', gstats);
  }

  this.improveStat = function(stat, setScope, getScope) {
    let allStats = getScope('stats');
    let globalXP = getScope('exp');

    if(allStats[stat]+1 < 21 && globalXP >= 10){
      setScope('exp', globalXP - 10);
      allStats[stat] = allStats[stat]+1;
      setScope('stats', allStats);

      if(stat === 'con'){
        refreshHP(setScope, getScope)
      }
    }
  }

  this.reduceStat = function(stat, setScope, getScope) {
    let allStats = getScope('stats');
    let globalXP = getScope('exp');

    if(allStats[stat]-1 > 0){
      setScope('exp', globalXP + 5 );
      allStats[stat] = allStats[stat]-1;
      setScope('stats', allStats);

      if(stat === 'con'){
        refreshHP(setScope, getScope)
      }
    }
  }

});
