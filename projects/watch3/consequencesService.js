  // Established character:
  // AA - Abrams is always chasing profit, 
  // BB - Bella wants solid data, 
  // CC - Clocktoria thinks in human costs, 
  // DD - Dack encourages adventure and risk.
  // EE- Enoch invokes conservative traditions of the Shapers, 

app.service('consequencesService', function() {
  this.consequences = [
    {
      condition: function (factions) { return factions.AA < 1; },
      title: 'Abrams Stovevalve is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.BB < 1; },
      title: 'Bella MacGuffin is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.CC < 1; },
      title: 'Clocktoria III is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.DD < 1; },
      title: 'Dack Rowley is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.EE < 1; },
      title: 'Enoch Diptych is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: ''
    },
    {
      condition: function (factions, metaStats) { return metaStats.popularity < 1; },
      title: 'Your popularity rating is dire',
      desc: 'You have completely lost the support of the people of the realm.<br/>Your name is now synonymous with failure and incompetence.',
      bg: ''
    },
    {
      condition: function (factions, metaStats) { return metaStats.power < 1; },
      title: 'Your military strength is abysmal',
      desc: 'Your recent decisions have left the realm vulnerable and exposed.<br/>Our enemies, emboldened by our weakness, are amassing their forces.',
      bg: ''
    },
    {
      condition: function (factions, metaStats) { return metaStats.power > 800; },
      title: 'Your military strength is formidable',
      desc: 'Your recent decisions have strengthened the realm and inspired confidence in our forces.<br/>Our enemies fear your power and respect your leadership.',
      bg: ''
    },
    {
      condition: function (factions, metaStats) { return metaStats.popularity > 800; },
      title: 'The people of the realm praise your name',
      desc: 'Your recent choices have not gone unnoticed by the people of the realm.<br/>There are many who speak highly of your leadership.',
      bg: ''
    },
    {
      condition: function (factions, metaStats) { return metaStats.popularity < 100; },
      title: 'The people of the realm demand more from you',
      desc: 'Your recent choices have not gone unnoticed by the people of the realm.<br/>If you fail to meet these expectations, you risk a swift fall from grace.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.AA > 8; },
      title: 'Abrams Stovevalve is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Abrams Stovevalve, a powerful figure in the industry.<br/>The next time you would lose standing with him, he will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.BB > 8; },
      title: 'Bella MacGuffin is your devoted ally',
      desc: 'Your suport for her has earned you the loyalty of Bella MacGuffin, a titan of science.<br/>The next time you would lose standing with her, she will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.CC > 8; },
      title: 'Clocktoria III is your devoted ally',
      desc: 'Your suport for her has earned you the loyalty of Clocktoria III, a medical marvel.<br/>The next time you would lose standing with her, she will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.DD > 8; },
      title: 'Dack Rowley is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Dack Rowley, a seasoned veteran.<br/>The next time you would lose standing with him, he will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.EE > 8; },
      title: 'Enoch Diptych is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Enoch Diptych, unshakable in his convictions.<br/>The next time you would lose standing with him, he will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return Object.values(factions).reduce(function (sum, v) { return sum + v; }, 0) < -5; },
      title: 'The council turns against you',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.AA > 14 && !$scope.devotedFlags.AA; },
      title: 'Abrams Stovevalve is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Abrams Stovevalve, a powerful figure in the industry.<br/>The next time you would lose standing with him, he will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.BB > 14 && !$scope.devotedFlags.BB; },
      title: 'Bella MacGuffin is your devoted ally',
      desc: 'Your suport for her has earned you the loyalty of Bella MacGuffin, a titan of science.<br/>The next time you would lose standing with her, she will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.CC > 14 && !$scope.devotedFlags.CC; },
      title: 'Clocktoria III is your devoted ally',
      desc: 'Your suport for her has earned you the loyalty of Clocktoria III, a medical marvel.<br/>The next time you would lose standing with her, she will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.DD > 14 && !$scope.devotedFlags.DD; },
      title: 'Dack Rowley is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Dack Rowley, a seasoned veteran.<br/>The next time you would lose standing with him, he will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return factions.EE > 14 && !$scope.devotedFlags.EE; },
      title: 'Enoch Diptych is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Enoch Diptych, unshakable in his convictions.<br/>The next time you would lose standing with him, he will let it slide.',
      bg: ''
    },
    {
      condition: function (factions) { return Object.values(factions).reduce(function (sum, v) { return sum + v; }, 0) < -5; },
      title: 'The council turns against you',
      desc: 'Your decisions have alienated the council members and eroded their trust in your leadership.<br/>You will find itextremely difficult to regain their support.<br/><br/>Your authority is severely undermined.',
      bg: ''
    },
  ];
});