app.service('mapMarkers', function(scenarioBasic, scenarioMountain, scenarioMug, dungeonSwamp) {
  this.markers = [
    {
      name: 'HerpDerp forest',
      short: 'hdf',
      desc: 'yada ydaddda 1',
      mapIcon: './img/places/map-cave.png',
      position: "{'top':'20rem','left':'10rem'}",
      mapNodes: [
        'hdf',
        'grm'
      ],
      background: './img/places/template.jpg',
      scenarios: scenarioBasic.scenarios
    },
    {
      name: 'Gorillion mountains',
      short: 'grm',
      desc: 'yada ydaddda 2',
      mapIcon: './img/places/map-cave.png',
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
      mapIcon: './img/places/map-shack.png',
      position: "{'top':'18rem','left':'15rem'}",
      mapNodes: [
        'trm',
        'ddsw'
      ],
      background: './img/places/mug.jpg',
      scenarios: scenarioMug.scenarios
    },
    {
      name: 'The sunken forest',
      short: 'ddsw',
      desc: 'yada ydaddda 3',
      linear: true,
      mapIcon: './img/places/map-dungeon.png',
      position: "{'top':'20rem','left':'14rem'}",
      mapNodes: [
        'trm'
      ],
      background: './img/places/swamp.jpg',
      scenarios: dungeonSwamp.scenarios
    }
  ]
});
