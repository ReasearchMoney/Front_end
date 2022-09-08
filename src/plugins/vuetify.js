import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
     theme: {
    themes: {
      light: {
        primary: '#2979FF', // #E53935
        secondary: '#FFD740', // #FFCDD2
        accent: "#FFEFB3", // #3F51B5
            text: "#636C73",
        box: "#D4E4FF",
        button:"#7FAFFF",
        background:"#e7e7e7"
        
      },
    },
  },
});
