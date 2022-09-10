<template>
  <v-container class="mb-0" style="max-width: 100%" color="white" id="top">
    <h2>새 연구 추가</h2>
    <v-form>
      <v-container style="max-width: 60%">
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">제목</h3>

          <v-text-field
            v-model="myText"
            label="Solo"
            solo
            accent
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">설명</h3>

          <v-text-field label="Solo" solo dense></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">제목</h3>

          <v-text-field label="Solo" solo dense></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">제목</h3>

          <v-text-field
            label="Solo"
            solo
            filled
            color="accent"
            dense
          ></v-text-field>
        </v-card>
      </v-container>
    </v-form>
    <v-btn @click="getTest()">누르시오</v-btn>
  </v-container>
</template>
<style lang="scss" scoped>
#top {
  background: white;
}
</style>
<script>
export default {
  data() {
    return {
      myText: "",
    };
  },
  methods: {
    getTest() {
      console.log(this.myText);
    },
  },
};
</script>
