app.service('actionService', function() {
  
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
  
  this.progress = function(props, setScope, getScope){
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

  
  this.abort = function (props, setScope, getScope) {
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
  
  this.modifyFactionRating = function (props, setScope, getScope) {
    var current = getScope('factions');
    current[props.faction] = current[props.faction] + props.factionMod;
    setScope('factions', current);
  }
  
  
});
