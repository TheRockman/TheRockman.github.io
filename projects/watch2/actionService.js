app.service('actionService', function($timeout) {
  var dice = function(diceSize){
    return 1 + Math.floor(Math.random()*diceSize)
  }

  var displayToast = function(toast, setScope, getScope){
    setScope('toast', toast);
    $timeout( function(){
      setScope('toast', null);
    }, 3500 );
  }
  this.displayToast = displayToast;

  var progress = function(props, setScope, getScope){
    var eventText = getScope('eventText')
    var adventureDepth = getScope('adventureDepth')
    var currentScenario = getScope('currentScenario')
    var scenarios = getScope('scenarios')
    var adventureIndex = getScope('adventureIndex')

    eventText = null;
    adventureDepth++;
    currentScenario = scenarios[adventureIndex].path[adventureDepth];

    setScope('eventText', eventText);
    setScope('adventureDepth', adventureDepth);
    setScope('currentScenario', currentScenario);
  }
  this.progress = progress;

  var smallTalk = function(props, setScope, getScope){
    var currentScenario = getScope('currentScenario');
    currentScenario.text = props.epilog;

    if(!props.smallTalkAction){
      props.smallTalkActionTaken = true;
    }
    if(props.smallTalkAction && !props.smallTalkActionTaken){
      props.smallTalkActionTaken = true;
      props.smallTalkAction(props, setScope, getScope);
    }

    setScope('currentScenario', currentScenario);
  }
  this.smallTalk = smallTalk;

  var abort = function (props, setScope, getScope) {
    var scenarios = getScope('scenarios');
    var adventureIndex = getScope('adventureIndex');
    var currentScenario = getScope('currentScenario');

    setScope('eventText', null);
    setScope('nextEvent', null);

    scenarios[adventureIndex].done = true;
    setScope('scenarios', scenarios);

    setScope('eventText', props.epilog);
    setScope('adventureDepth', -1);
  }
  this.abort = abort;

  this.modifyFactionRating = function (props, setScope, getScope) {
    var current = getScope('factions');
    current[props.faction] = current[props.faction] + props.factionMod;
    setScope('factions', current);

    if(!props.smallTalkAction){
      if(props.epilog){
        abort(props, setScope, getScope)
      }else{
        progress(props, setScope, getScope)
      }
    }

    if(props.factionMod>0){
      displayToast('You gained influence with the '+props.faction+'.', setScope, getScope)
    }else{
      displayToast('You lost influence with the '+props.faction+'.', setScope, getScope)
    }
  }

  this.modifyRegion = function (props, setScope, getScope) {
    setScope('currentRegion', props.region);
    if(props.epilog){
      abort(props, setScope, getScope)
    }else{
      progress(props, setScope, getScope)
    }
  }

  this.exchange = function (props, setScope, getScope) {
    //exchange X of A for Y of B
    var catergoryA = getScope(props.exchangeCatergoryA);
    var catergoryB = getScope(props.exchangeCatergoryB);
    
    if(catergoryA[props.exchangeKeyA] >= props.exchangeAmountA){
      
      catergoryA[props.exchangeKeyA] = catergoryA[props.exchangeKeyA] - props.exchangeAmountA;
      catergoryB[props.exchangeKeyB] = catergoryB[props.exchangeKeyB] + props.exchangeAmountB;
      
      setScope(props.exchangeCatergoryA, catergoryA);
      setScope(props.exchangeCatergoryB, catergoryB);
      
    } else{
      //you dont have enough
    }
    
    if(props.epilog){
      abort(props, setScope, getScope)
    }else{
      progress(props, setScope, getScope)
    }
  }

  this.modifyQuestFlags = function (props, setScope, getScope) {
    var current = getScope('questFlags');
    current[props.flag] = props.flagMod;

    setScope('questFlags', current);
    if(props.epilog){
      abort(props, setScope, getScope)
    }else{
      progress(props, setScope, getScope)
    }
  }

  this.modifyStat = function (props, setScope, getScope) {
    var current = getScope('stats');
    var invertedStatMod = Math.abs(props.statMod);

    current[props.stat] = current[props.stat] + props.statMod;
    setScope('stats', current);

    if(props.epilog){
      abort(props, setScope, getScope)
    }else{
      progress(props, setScope, getScope)
    }

    if(props.stat === 'hp'){
      if(props.statMod>0){
        displayToast('You regain ' +props.stat+' points of damage.', setScope, getScope)
      }
      else{
        displayToast('You take '+invertedStatMod+' points of damage.', setScope, getScope)
      }
    }
    else{
      if(props.statMod>0){
        displayToast('You gained '+ props.statMod + ' ' +props.stat+'.', setScope, getScope)
      }
      else{
        displayToast('Your '+props.stat+' decreased.', setScope, getScope)
      }
    }
  }

  this.skillCheck = function (props, setScope, getScope) {
    var current = getScope('stats');
    var roll = dice(20);

    if(roll === 20){
      displayToast('Roll: '+roll, setScope, getScope)
      props.epilog = props.critEpilog || props.passEpilog;
      props.passCheckAction(props, setScope, getScope);
    }
    else if(current[props.skill] + roll >= props.dc ){
      displayToast('Roll: '+roll, setScope, getScope)
      props.epilog = props.passEpilog;
      props.passCheckAction(props, setScope, getScope);
    }
    else{
      displayToast('Roll: '+roll, setScope, getScope)
      props.epilog = props.failEpilog;
      props.failCheckAction(props, setScope, getScope);
    }
  }

});
