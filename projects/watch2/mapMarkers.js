app.service('mapMarkers', function(scenarioBasic, scenarioMountain) {
  this.markers = [
    {
      name: 'HerpDerp forest',
      short: 'hdf',
      desc: 'yada ydaddda 1',
      position: "{'top':'20rem','left':'10rem'}",
      mapNodes: [
        'hdf',
        'grm'
      ],
      background: 'https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/2/2c/The_Great_Forest.jpg/revision/latest?cb=20090902120435',
      scenarios: scenarioBasic.scenarios
    },
    {
      name: 'Gorillion mountains',
      short: 'grm',
      desc: 'yada ydaddda 2',
      position: "{'top':'16rem','left':'13rem'}",
      mapNodes: [
        'grm',
        'hdf',
        'trm'
      ],
      background: 'https://cdna.artstation.com/p/assets/images/images/018/870/270/large/piotr-dura-mountain.jpg?1561042583',
      scenarios: scenarioMountain.scenarios
    },
    {
      name: 'The rusty mug',
      short: 'trm',
      desc: 'yada ydaddda 3',
      position: "{'top':'18rem','left':'15rem'}",
      mapNodes: [
        'trm'
      ],
      background: 'https://cdna.artstation.com/p/assets/images/images/018/870/270/large/piotr-dura-mountain.jpg?1561042583',
      scenarios: scenarioMountain.scenarios
    }
  ]
});
