<template>
  <div class="home">
    <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="300"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-container class="pa-10">
      <div class="pb-5">내가 참여하기 딱 좋은 연구만 간편하게 검색하기</div>

      <v-text-field
        class="w-8"
        outlined
        rounded
        label="Search"
        append-icon="mdi-map-marker"
      ></v-text-field>
      <v-toolbar-title>Title</v-toolbar-title>

      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "green",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1",
      ],
      cycle: false,
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>
<style scoped>
/* .v-text-field {
  
} */
</style>
