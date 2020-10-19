app.service('actionService', function($timeout) {
  
  var dice = function(diceSize){
    return 0 + Math.floor(Math.random()*diceSize)
  }
  
  // var pickNext = function(setScope, getScope){
  //   var eventText = getScope('eventText');
  //   var scenarios = getScope('scenarios');
  //   var adventureIndex = getScope('adventureIndex');
  //   var currentScenario = getScope('currentScenario');
  // 
  //   eventText = null;
  //   scenarios = scenarios.filter(function (el) {
  //     return !el.done;
  //   });
  // 
  //   if(scenarios.length === 0){
  //     adventureIndex = 0;
  //     currentScenario = {};
  //   }else{
  //     var roll = dice(scenarios.length);
  //     adventureIndex = roll;
  //     currentScenario = scenarios[roll];
  //   }
  // 
  //   setScope('eventText', eventText);
  //   setScope('scenarios', scenarios);
  //   setScope('adventureIndex', adventureIndex);
  //   setScope('currentScenario', currentScenario);
  // }
  
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
    
    
    if(props.epilog){
      abort(props, setScope, getScope)
    }else{
      progress(props, setScope, getScope)
    }
    
    if(props.factionMod>0){
      displayToast('You gained influence with the '+props.faction+'.', setScope, getScope)
    }else{
      displayToast('You lost influence with the '+props.faction+'.', setScope, getScope)
    }
  }
  
  this.modifyStat = function (props, setScope, getScope) {
    var current = getScope('stats');
    current[props.stat] = current[props.stat] + props.statMod;
    setScope('stats', current);
    
    if(props.epilog){
      abort(props, setScope, getScope)
    }else{
      progress(props, setScope, getScope)
    }
    
    if(props.statMod>0){
      displayToast('You gained '+ props.statMod + ' ' +props.stat+'.', setScope, getScope)
    }else{
      displayToast('Your '+props.stat+' decreased.', setScope, getScope)
    }
  }
  
});
