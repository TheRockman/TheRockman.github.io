new Vue({
  el: '#app',
  data: {
    message: '',
    order: 'released',
    movies: [
      {
        title: 'Episode I: The Phantom Menace',
        poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg',
        released: '1999',
        director: 'George Lucas',
        cast: [
          {
            name: 'Liam Neeson',
            url: 'https://m.media-amazon.com/images/M/MV5BMjA1MTQ3NzU1MV5BMl5BanBnXkFtZTgwMDE3Mjg0MzE@._V1_UY317_CR52,0,214,317_AL_.jpg'
          },
          {
            name:'Ewan McGregor',
            url: 'http://www.gstatic.com/tv/thumb/persons/20565/20565_v9_bc.jpg'
          },
          {
            name: 'Natalie Portman',
            url: 'http://www.gstatic.com/tv/thumb/persons/71364/71364_v9_ba.jpg'
          }
        ]
      },
      {
        title: 'Episode II: Attack of the Clones',
        poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg',
        released: '2002',
        director: 'George Lucas',
        cast: [
          {
            name: 'Hayden Christensen',
            url: 'https://m.media-amazon.com/images/M/MV5BY2Y2NTE4YzYtMTA4OS00NzNmLWIxNzctMDEyMjE2NWU3YWNmXkEyXkFqcGdeQXVyODMwMzI4MTg@._V1_UY317_CR21,0,214,317_AL_.jpg'
          },
          {
            name:'Ewan McGregor',
            url: 'http://www.gstatic.com/tv/thumb/persons/20565/20565_v9_bc.jpg'
          },
          {
            name: 'Natalie Portman',
            url: 'http://www.gstatic.com/tv/thumb/persons/71364/71364_v9_ba.jpg'
          }
        ]
      },
      {
        title: 'Episode III: Revenge of the Sith',
        poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg',
        released: '2005',
        director: 'George Lucas',
        cast: [
          {
            name: 'Hayden Christensen',
            url: 'https://m.media-amazon.com/images/M/MV5BY2Y2NTE4YzYtMTA4OS00NzNmLWIxNzctMDEyMjE2NWU3YWNmXkEyXkFqcGdeQXVyODMwMzI4MTg@._V1_UY317_CR21,0,214,317_AL_.jpg'
          },
          {
            name:'Ewan McGregor',
            url: 'http://www.gstatic.com/tv/thumb/persons/20565/20565_v9_bc.jpg'
          },
          {
            name: 'Natalie Portman',
            url: 'http://www.gstatic.com/tv/thumb/persons/71364/71364_v9_ba.jpg'
          }
        ]
      },
      {
        title: 'Episode IV: A new hope',
        poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
        released: '1977',
        director: 'George Lucas',
        cast: [
          {
            name: 'Mark Hamill',
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Mark_Hamill_%281978%29.jpg'
          },
          {
            name:'Harrison Ford',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Harrison_Ford_by_Gage_Skidmore_3.jpg/638px-Harrison_Ford_by_Gage_Skidmore_3.jpg'
          },
          {
            name: 'Carrie Fisher',
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Carrie_Fisher.jpg'
          }
        ]
      },
      {
        title: 'Episode V: The Empire Strikes Back',
        poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg',
        released: '1980',
        director: 'Irvin Kershner',
        cast: [
          {
            name: 'Mark Hamill',
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Mark_Hamill_%281978%29.jpg'
          },
          {
            name:'Harrison Ford',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Harrison_Ford_by_Gage_Skidmore_3.jpg/638px-Harrison_Ford_by_Gage_Skidmore_3.jpg'
          },
          {
            name: 'Carrie Fisher',
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Carrie_Fisher.jpg'
          }
        ]
      },
      {
        title: 'Episode VI: Return of the Jedi',
        poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg',
        released: '1983',
        director: 'Irvin Kershner',
        cast: [
          {
            name: 'Mark Hamill',
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Mark_Hamill_%281978%29.jpg'
          },
          {
            name:'Harrison Ford',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Harrison_Ford_by_Gage_Skidmore_3.jpg/638px-Harrison_Ford_by_Gage_Skidmore_3.jpg'
          },
          {
            name: 'Carrie Fisher',
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Carrie_Fisher.jpg'
          }
        ]
      }
    ],
    selectedItem: null,
    swap: false
  },
  methods: {
    setSelectedMovie: function (item) {
      this.swap = true;
      setTimeout(() => {
        this.selectedItem = item;
        this.swap = false;
      }, 700);
    }
  }
})
