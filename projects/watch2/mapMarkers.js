app.service('mapMarkers', function(scenarioBasic, scenarioMountain, scenarioMug) {
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
      background: './img/places/forest.webp',
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
      background: './img/places/mountain.jpg',
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
      background: './img/places/mug.jpg',
      scenarios: scenarioMug.scenarios
    }
  ]
});
