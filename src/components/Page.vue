<template>
  <div id="contain">
    <v-container
      class="mb-0"
      style="width: 100vh; max-width: 40%"
      color="white"
      id="top"
    >
      <div>
        <h1 class="mb-15 pb-10">{{ this.post.title }}</h1>

        <v-card class="d-flex flex-row mb-4" color="elevation-0">
          <div class="mr-8" id="category">작성자</div>
          <div id="text">{{ this.post.User.nickname }}</div>
        </v-card>
        <v-card class="d-flex flex-row mb-4" color="elevation-0">
          <div class="mr-5" id="category">기관종류</div>
          <div id="text">{{ this.post.institution }}</div>
        </v-card>
        <v-card class="d-flex flex-row mb-4" color="elevation-0">
          <div class="mr-8" id="category">기관명</div>
          <div id="text">{{ this.post.institution_name }}</div>
        </v-card>
        <v-card class="d-flex flex-row mb-4" color="elevation-0">
          <div class="mr-11" id="category">지역</div>
          <div class="mr-2" id="text">{{ this.post.zone_1 }}</div>
          <div id="text">{{ this.post.zone_2 }}</div>
        </v-card>
        <v-card class="d-flex flex-row mb-4" color="elevation-0">
          <div class="mr-4" id="category">모집 기간</div>
          <div class="mr-2" id="text">{{ this.post.start_date }}</div>
          <div id="text">~</div>
          <div id="text">{{ this.post.end_date }}</div>
        </v-card>

        <v-card class="d-flex flex-row mb-4" color="elevation-0">
          <div class="mr-4" id="category">실험 기간</div>
          <div class="mr-2" id="text">{{ this.post.start_date_r }}</div>
          <div id="text">~</div>
          <div id="text">{{ this.post.end_date_r }}</div>
        </v-card>
        <v-card class="d-flex flex-row mb-4" color="elevation-0">
          <div class="mr-4" id="category">소요시간</div>
          <div id="text">{{ this.post.period }}시간</div>
        </v-card>
        <v-card class="d-flex flex-row mb-4" color="elevation-0">
          <div class="mr-4" id="category">지급 비용</div>
          <div id="text">{{ this.post.pay }}원</div>
        </v-card>
        <v-card class="d-flex flex-row mb-4" color="elevation-0">
          <div class="mr-4" id="category">연구 설명</div>
          <div id="text" class="text-sm-left">{{ this.post.post }}</div>
        </v-card>
        <v-card class="d-flex flex-row mb-4" color="elevation-0">
          <div class="mr-4" id="category">추가 URL</div>
          <div id="text">{{ this.post.url }}</div>
        </v-card>
      </div>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
#top {
  background: white;
}
#contain {
  background: white;
  height: 100vh;
}
#category {
  color: #808991;
}
#text {
  color: #40474d;
}
</style>
<script>
export default {
  created() {
    this.$http
      .get(`/api/post/${this.$route.params.id}`)
      .then((res) => {
        const user = res.data.user;
        this.post = res.data.research;
        console.log("user 상세");
        console.log(user);
        console.log("post");
        console.log(this.post);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data() {
    return {
      post: [],
    };
  },
};
</script>
