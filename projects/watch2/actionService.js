app.service('actionService', function($timeout, wikiSercive) {

  var dice = function(diceSize){
    return 1 + Math.floor(Math.random()*diceSize)
  }

  var displayToast = function(toast, setScope, getScope, diceroll){
    if(diceroll){
      setScope('diceRollToast', toast);
      setScope('diceRollResult', diceroll);
      var dice = $timeout( function(){
        setScope('diceRollToast', null);
        setScope('diceRollResult', null);
      }, 4000 );
    }else{
      setScope('toast', toast);
      var toast = $timeout( function(){
        setScope('toast', null);
      }, 3500 );
    }
  }
  this.displayToast = displayToast;

  var progress = function(props, setScope, getScope){
    var eventText = getScope('eventText')
    var adventureDepth = getScope('adventureDepth')
    var currentScenario = getScope('currentScenario')
    var scenarios = getScope('scenarios')
    var adventureIndex = getScope('adventureIndex')
    var fakeCurrentScenario = {};

    if(props.epilog){
      fakeCurrentScenario = {
        text: props.epilog,
        actions: [
          {
            label: '[Proceed]',
            action: progress,
            actionProps: {}
          },
        ],
      }

      setScope('currentScenario', fakeCurrentScenario);
    }
    else{
      eventText = null;
      adventureDepth++;
      currentScenario = scenarios[adventureIndex].path[adventureDepth];

      setScope('eventText', eventText);
      setScope('adventureDepth', adventureDepth);
      setScope('currentScenario', currentScenario);
    }
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

    if(!scenarios[adventureIndex].everGreen){
      scenarios[adventureIndex].done = true;
    }
    setScope('scenarios', scenarios);

    setScope('eventText', props.epilog);
    setScope('adventureDepth', -1);
  }
  this.abort = abort;

  this.modifyFactionRating = function (props, setScope, getScope) {
    var current = getScope('factions');
    current[props.faction].rep = current[props.faction].rep + props.factionMod;
    setScope('factions', current);

    if(!props.smallTalkAction){
      if(props.epilog){
        abort(props, setScope, getScope)
      }else{
        progress(props, setScope, getScope)
      }
    }

    if(props.factionMod>0){
      displayToast('You gained influence with '+current[props.faction].title+'.', setScope, getScope)
    }else{
      displayToast('You lost influence with '+current[props.faction].title+'.', setScope, getScope)
    }
  }

  this.modifyRegion = function (props, setScope, getScope) {
    var regions = getScope('regions');
    for (var i = 0; i < regions.length; i++) {
      if(regions[i].short === props.region){
        setScope('currentRegion', regions[i]);
        setScope('scenarios', regions[i].scenarios);
        setScope('currentScenario', regions[i].scenarios[0]);
      }
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
    current[props.flag].active = props.flagMod;

    setScope('questFlags', current);
    if(props.epilog){
      abort(props, setScope, getScope)
    }else{
      progress(props, setScope, getScope)
    }
  }

  this.modifySecretQuestFlags = function (props, setScope, getScope) {
    var current = getScope('secretquestFlags');
    current[props.flag] = props.flagMod;

    setScope('secretquestFlags', current);
    if(props.epilog){
      abort(props, setScope, getScope)
    }else{
      progress(props, setScope, getScope)
    }
  }

  this.abortEntireScenario = function (props, setScope, getScope) {
    var currentRegion = getScope('currentRegion');
    console.log(currentRegion);
    for (var i = 0; i < currentRegion.scenarios.length; i++) {
      if(!currentRegion.scenarios[i].everGreen){
        currentRegion.scenarios[i].done = true;
      }
    }

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
      displayToast(roll, setScope, getScope, 'crit')
      props.epilog = props.critEpilog || props.passEpilog;
      props.passCheckAction(props, setScope, getScope);
    }
    else if(current[props.skill] + roll >= props.dc ){
      displayToast(roll, setScope, getScope, 'pass')
      props.epilog = props.passEpilog;
      props.passCheckAction(props, setScope, getScope);
    }
    else{
      displayToast(roll, setScope, getScope, 'fail')
      props.epilog = props.failEpilog;
      props.failCheckAction(props, setScope, getScope);
    }
  }

});
