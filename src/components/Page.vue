<template>
  <v-container class="mb-0" style="max-width: 100%" color="white" id="top">
    <div>
      <h1>[실험 신청서] {{ this.post.title }}</h1>
      {{ this.$route.params.id }}
      <v-card class="d-flex flex-row mb-2" color="elevation-0">
        <div class="mr-2">작성자</div>
        <div>{{ this.post.User.nickname }}</div>
      </v-card>
      <v-card class="d-flex flex-row mb-2" color="elevation-0">
        <div class="mr-2">기관종류</div>
        <div>{{ this.post.institution }}</div>
      </v-card>
      <v-card class="d-flex flex-row mb-2" color="elevation-0">
        <div class="mr-2">기관명</div>
        <div>{{ this.post.institution_name }}</div>
      </v-card>
      <v-card class="d-flex flex-row mb-2" color="elevation-0">
        <div class="mr-2">지역</div>
        <div class="mr-2">{{ this.post.zone_1 }}</div>
        <div>{{ this.post.zone_2 }}</div>
      </v-card>
      <v-card class="d-flex flex-row mb-2" color="elevation-0">
        <div class="mr-2">모집 기간</div>
        <div class="mr-2">{{ this.post.start_date }}</div>
        <div>~</div>
        <div>{{ this.post.end_date }}</div>
      </v-card>

      <v-card class="d-flex flex-row mb-2" color="elevation-0">
        <div class="mr-2">실험 기간</div>
        <div class="mr-2">{{ this.post.start_date_r }}</div>
        <div>~</div>
        <div>{{ this.post.end_date_r }}</div>
      </v-card>
      <v-card class="d-flex flex-row mb-2" color="elevation-0">
        <div class="mr-2">소요시간</div>
        <div>{{ this.post.period }}분</div>
      </v-card>
      <v-card class="d-flex flex-row mb-2" color="elevation-0">
        <div class="mr-2">지급 비용</div>
        <div>{{ this.post.pay }}원</div>
      </v-card>
      <v-card class="d-flex flex-row mb-2" color="elevation-0">
        <div class="mr-2">연구 설명</div>
        <div>{{ this.post.post }}</div>
      </v-card>
      <v-card class="d-flex flex-row mb-2" color="elevation-0">
        <div class="mr-2">추가 URL</div>
        <div>{{ this.post.url }}</div>
      </v-card>
    </div>
  </v-container>
</template>
<style lang="scss" scoped>
#top {
  background: white;
  height: 95vh;
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
