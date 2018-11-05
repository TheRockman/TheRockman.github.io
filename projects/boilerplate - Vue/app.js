new Vue({
  el: '#app',
  data: {
    message: '',
    done: false,
    arrLeng: 3,
    error: null,
    items: [
    	{
    		name: 'A. Aronsson'
    	},
      {
    		name: 'A. Arvidsson'
    	},
      {
    		name: 'A. Adamssen'
    	},
      {
    		name: 'B. Burt'
    	},
      {
    		name: 'B. Boris'
    	},
      {
    		name: 'C. Clive'
    	},
      {
    		name: 'C. Craven'
    	},
      {
    		name: 'D. Dennis'
    	}
    ],
    selectedItem: null,
    selectedSlide: 1
  },
  methods: {
    setSelectedItem: function (item) {
      this.selectedItem = item;
    },
    setSlide: function (i) {
      if (this.selectedSlide < i) {
        return;
      }
      this.selectedSlide = i;
    },
    incSlide: function (condition1) {
      this.error = null;
      if (condition1 !== null && condition1 !== '') {
        this.selectedSlide = this.selectedSlide + 1;  
      } else {
        this.error = "You have to do the thing!";
      }
    }
  }
})
