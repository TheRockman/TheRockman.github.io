// Established characters:
// AA - Abrams Stovevalve, CEO of Stovevale industries LLC, a ruthless businessman. Always chasing profit and upwards trending numbers. 
// BB - Bella MacGuffin, Head scientist at the Sprocket science center, a prodigy in many fields. Always wants solid data and sound reasons. 
// CC - Clocktoria III, Head doctor at the Gearspring hospital, a clockwork automaton designed for compassion and healing. Always wheighs in human costs and safety. 
// DD - Dack Rowly, Honored fellow of the adventurers guild, a devil-may-care sailor. Always encourages adventure and bold actions.
// EE- Enoch Diptych, Lord master of tradition and cermony. Always has a conservative outlook and invokes the ainchent traditions of the Shapers, 

app.service('consequencesService', function () {
  this.consequences = [
    {
      condition: function (factions) { return factions.AA < -400; },
      title: 'Abrams Stovevalve is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      headline: "Stovevalce blows his lid!",
      article: "Abrams Stovevalve, influential entrepenour and business mogul was seen stomping out of the council hall this evening, seemingly steaming over the lord regents latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.BB < -400; },
      title: 'Bella MacGuffin is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      headline: "Sprockets grind!",
      article: "Bella MacGuffin, lauded scientist and philanthrope was seen hurrying out of the council hall this evening, seemingly steaming over the lord regents latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.CC < -400; },
      title: 'Clocktoria III is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      headline: "Stop the clocks!",
      article: "Clocktoria III, medicinal mechanical marvel, was seen exiting out of the council hall this evening, seemingly steaming over the lord regents latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.DD < -400; },
      title: 'Dack Rowley is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      headline: "A storm in the council!",
      article: "Dack Rowly, intrepid adventurer and notorious seadog, was seen storming out of the council hall this evening, seemingly steaming over the lord regents latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.EE < -400; },
      title: 'Enoch Diptych is outraged',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      headline: "Bent out of Shape(rs)",
      article: "Enoch Diptych, the very model of cermony and etiquette, was seen bolting out of the council hall this evening, seemingly steaming over the lord regents latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions, metaStats) { return metaStats.popularity < -400; },
      title: 'Your popularity rating is dire',
      desc: 'You have completely lost the support of the people of the realm.<br/>Your name is now synonymous with failure and incompetence.',
      headline: "Riots - they are more likely than you think!",
      article: "Following a series of extremely unpopular decrees, a large crowd gathered outside the council house this morning.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions, metaStats) { return metaStats.funds < 400; },
      title: 'Your economy is trending towards collapse',
      desc: 'Your recent decisions have taken a toll on the realm\'s finances.<br/>If this spending continues, the realm may soon find itself in dire straits.',
      headline: "Investment, or divestment?",
      article: "With the treasury taking a hit from the council\'s recent spending spree, we may be looking at a financial crisis within the year.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
        {
      condition: function (factions, metaStats) { return metaStats.funds < -400; },
      title: 'Your economy is crippled',
      desc: 'Your recent decisions have left the realms coffers close to empty.<br/>Your forces are underfunded and the people are restless.',
      headline: "Run on the bank!",
      article: "The treasury is nearly empty and the realm is on the brink of bankruptcy. If this continues, expect widespread unrest.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions, metaStats) { return metaStats.funds > 800; },
      title: 'Your economy is booming',
      desc: 'Your recent decisions have strengthened the realm and inspired confidence in our forces.<br/>Our enemies fear your power and respect your leadership.',
      headline: "Economic surges to prosperity!",
      article: "Our economy, bolstered by the councils dedication to development and investment, claims another milestone today.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions, metaStats) { return metaStats.power < -400; },
      title: 'Your military strength is abysmal',
      desc: 'Your recent decisions have left the realm vulnerable and exposed.<br/>Our enemies, emboldened by our weakness, are amassing their forces.',
      headline: "General: 'We need more men.' ",
      article: "Military brass all agree that the might of our forces are severely lacking. if nothing is done, invasions are expected.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions, metaStats) { return metaStats.power > 800; },
      title: 'Your military strength is formidable',
      desc: 'Your recent decisions have strengthened the realm and inspired confidence in our forces.<br/>Our enemies fear your power and respect your leadership.',
      headline: "Military surges to victory!",
      article: "Our armed forces, bolstered by the councils dedication to upkeep and funding claim another victory today.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions, metaStats) { return metaStats.popularity > 800; },
      title: 'The people of the realm praise your name',
      desc: 'Your recent choices have not gone unnoticed by the people of the realm.<br/>There are many who speak highly of your leadership.',
      headline: "Lord regent more popular than ever!",
      article: "After a series of thougtful and wise decrees, the ratings are through the roof!",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions, metaStats) { return metaStats.popularity > 100 && metaStats.popularity < 200 },
      title: 'The people of the realm demand more from you',
      desc: 'Your recent choices have not gone unnoticed by the people of the realm.<br/>If you fail to meet these expectations, you risk a swift fall from grace.',
      headline: "Lord regent sleeping on the job?",
      article: "A series of lackluster decrees have the people asking themselves: 'Is the lord regent actually working or on vacation?'. ",
      bg: 'https://placehold.in/600x800@2x.png/dark',
    },
    {
      condition: function (factions) { return factions.AA > 8; },
      title: 'Abrams Stovevalve is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Abrams Stovevalve, a powerful figure in the industry.<br/>The next time you would lose standing with him, he will let it slide.',
      headline: "Stovevalve: 'The lord regent has profits in mind'. ",
      article: "Abrams Stovevalve, influential entrepenour and business mogul, was seen walking out of the council hall this evening, seemingly elated with the lord regemts latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.BB > 8; },
      title: 'Bella MacGuffin is your devoted ally',
      desc: 'Your suport for her has earned you the loyalty of Bella MacGuffin, a titan of science.<br/>The next time you would lose standing with her, she will let it slide.',
      headline: "MacGuffin: 'The lord regent is doing the utmost for science'. ",
      article: "Bella MacGuffin, lauded scientist and philanthrope, was seen outside council hall this evening, seemingly elated with the lord regemts latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.CC > 8; },
      title: 'Clocktoria III is your devoted ally',
      desc: 'Your suport for her has earned you the loyalty of Clocktoria III, a medical marvel.<br/>The next time you would lose standing with her, she will let it slide.',
      headline: "Clocktoria III: 'Lord regent doubles down on medical care'. ",
      article: "Clocktoria III, medicinal mechanical marvel, was seen outside council hall this evening, seemingly elated with the lord regemts latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.DD > 8; },
      title: 'Dack Rowley is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Dack Rowley, a seasoned veteran.<br/>The next time you would lose standing with him, he will let it slide.',
      headline: "Rowly: 'Lord regent has wind in the sails'. ",
      article: "Dack Rowly, intrepid adventurer and notorious seadog, was seen outside council hall this evening, seemingly elated with the lord regemts latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.EE > 8; },
      title: 'Enoch Diptych is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Enoch Diptych, unshakable in his convictions.<br/>The next time you would lose standing with him, he will let it slide.',
      headline: "Diptych: 'Im most pleased with the outcome' ",
      article: "Enoch Diptych, the very model of cermony and etiquette, was spotted outside council hall this evening, seemingly elated over the lord regents latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return Object.values(factions).reduce(function (sum, v) { return sum + v; }, 0) < -5; },
      title: 'The council turns against you',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      headline: "Council comes apart at the seems!",
      article: "The lord regents council seems to have turned away. Favourability is at an all time low!",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.AA > 14; },
      title: 'Abrams Stovevalve is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Abrams Stovevalve, a powerful figure in the industry.<br/>The next time you would lose standing with him, he will let it slide.',
      headline: "Stovevalve: 'The lord regent has profits in mind'. ",
      article: "Abrams Stovevalve, influential entrepenour and business mogul, was seen walking out of the council hall this evening, seemingly elated with the lord regemts latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.BB > 14; },
      title: 'Bella MacGuffin is your devoted ally',
      desc: 'Your suport for her has earned you the loyalty of Bella MacGuffin, a titan of science.<br/>The next time you would lose standing with her, she will let it slide.',
      headline: "MacGuffin: 'The lord regent is doing the utmost for science'. ",
      article: "Bella MacGuffin, lauded scientist and philanthrope, was seen outside council hall this evening, seemingly elated with the lord regemts latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.CC > 14; },
      title: 'Clocktoria III is your devoted ally',
      desc: 'Your suport for her has earned you the loyalty of Clocktoria III, a medical marvel.<br/>The next time you would lose standing with her, she will let it slide.',
      headline: "Clocktoria III: 'Lord regent doubles down on medical care'. ",
      article: "Clocktoria III, medicinal mechanical marvel, was seen outside council hall this evening, seemingly elated with the lord regemts latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.DD > 14; },
      title: 'Dack Rowley is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Dack Rowley, a seasoned veteran.<br/>The next time you would lose standing with him, he will let it slide.',
      headline: "Rowly: 'Lord regent has wind in the sails'. ",
      article: "Dack Rowly, intrepid adventurer and notorious seadog, was seen outside council hall this evening, seemingly elated with the lord regemts latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
    {
      condition: function (factions) { return factions.EE > 14; },
      title: 'Enoch Diptych is your devoted ally',
      desc: 'Your suport for him has earned you the loyalty of Enoch Diptych, unshakable in his convictions.<br/>The next time you would lose standing with him, he will let it slide.',
      headline: "Diptych: 'Im most pleased with the outcome' ",
      article: "Enoch Diptych, the very model of cermony and etiquette, was spotted outside council hall this evening, seemingly elated over the lord regents latest decree.",
      bg: 'https://placehold.in/600x800@2x.png/dark'
    },
  ];
});