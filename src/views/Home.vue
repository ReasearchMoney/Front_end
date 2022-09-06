<template>
  <div class="home">
    <v-carousel
      cycle
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="45vh"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h4 pa-10">{{ slide }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-container class="mb-0" style="width: 100vh; max-width: 60%">
      <div class="pb-5 pt-5">
        내가 참여하기 딱 좋은 연구만 간편하게 검색하기
      </div>

      <v-text-field
        @focus="show = !show"
        @click="show = !show"
        class="w-8 color-#ffd740 mb-0"
        outlined="4"
        rounded
        label="키워드, 태그 등을 입력해 보세요!"
        color="#ffd740"
      >
        <template v-slot:append>
          <v-btn class="pb-3" icon>
            <v-icon color="#ffd740">mdi-magnify</v-icon>
          </v-btn>
        </template>
      </v-text-field>
      <v-expand-transition>
        <div v-show="show">
          <v-card-title> 상세 조건 적용하기 </v-card-title>
          <v-container fluid>
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="3">
                <v-select :items="items" label="연령대" solo></v-select>
              </v-col>

              <v-col class="d-flex" cols="12" sm="3">
                <v-select :items="items" label="지역" solo></v-select>
              </v-col>

              <v-col class="d-flex" cols="12" sm="3">
                <v-select :items="items" label="지급비용" solo></v-select>
              </v-col>

              <v-col class="d-flex" cols="12" sm="3">
                <v-select :items="items" label="소요시간" solo></v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-card-title> 인기 태그</v-card-title>
          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip color="#FFEFB3">5:30PM</v-chip>

              <v-chip color="#FFEFB3">7:30PM</v-chip>

              <v-chip color="#FFEFB3">8:00PM</v-chip>

              <v-chip color="#FFEFB3">9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>
        </div>
      </v-expand-transition>
      <v-card color="elevation-0" class="pb-5">
        <v-card-title> 대학원생 졸업시켜주실분 </v-card-title>
        <v-card class="mb-4 pa-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          obcaecati, libero fuga accusamus dolore deleniti ad excepturi ea porro
          placeat tenetur ratione commodi sit, optio nam possimus natus
          cupiditate maiores!
        </v-card>
        <v-card class="mb-4 pa-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          obcaecati, libero fuga accusamus dolore deleniti ad excepturi ea porro
          placeat tenetur ratione commodi sit, optio nam possimus natus
          cupiditate maiores!
        </v-card>
      </v-card>
      <v-card color="elevation-0">
        <v-card-title> 기업에겐 당신의 목소리가 필요해요</v-card-title>
        <v-card class="mb-4 pa-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          obcaecati, libero fuga accusamus dolore deleniti ad excepturi ea porro
          placeat tenetur ratione commodi sit, optio nam possimus natus
          cupiditate maiores!
        </v-card>
        <v-card class="mb-4 pa-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          obcaecati, libero fuga accusamus dolore deleniti ad excepturi ea porro
          placeat tenetur ratione commodi sit, optio nam possimus natus
          cupiditate maiores!
        </v-card>
      </v-card>
      <v-card color="elevation-0">
        <v-card-title>
          지금 바로 온라인 설문 참여하고 경품 받아 가세요</v-card-title
        >
        <v-card class="mb-4 pa-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          obcaecati, libero fuga accusamus dolore deleniti ad excepturi ea porro
          placeat tenetur ratione commodi sit, optio nam possimus natus
          cupiditate maiores!
        </v-card>
        <v-card class="mb-4 pa-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          obcaecati, libero fuga accusamus dolore deleniti ad excepturi ea porro
          placeat tenetur ratione commodi sit, optio nam possimus natus
          cupiditate maiores!
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      colors: [
        "#F2F6FC",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1",
      ],
      cycle: false,
      slides: [
        "현재 진행중인 연구 13개를 참여하고 최대 8,9000원 받아가세요!",
        "Second",
        "Third",
        "Fourth",
        "Fifth",
      ],
    };
  },
};
</script>
<style lang="scss">
.v-text-field--outlined fieldset {
  color: #ffd740 !important;
  border-color: #ffd740;
  border-width: 4px;
}

.v-btn .v-btn__content .v-icon {
  color: black;
}
</style>
