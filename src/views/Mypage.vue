<template>
  <v-container style="width: 100vh; max-width: 60%">
    <v-card color="elevation-0 background">
      <v-card-title class="pt-15">
        <v-icon class="mr-2 primary--text">mdi-domain</v-icon>내가 업로드한
        연구</v-card-title
      >
      <div v-if="post">
        <v-card
          v-for="item in post"
          v-bind:key="item.postid"
          class="mb-4 pa-2 text-sm-left"
        >
          <span class="primary--text">{{ item.state }} </span>
          <span>{{ item.title }}</span>

          <span> <v-icon>mdi-bookmark-outline</v-icon></span>
          <div class="text--text text-caption">
            <span>
              <v-btn color="elevation-0 box" x-small>{{
                item.institution
              }}</v-btn>
            </span>
            <span> {{ item.start_date }}~{{ item.end_date }} |</span>
            <span> {{ item.period }} |</span>
            <span> {{ item.location }}</span>
          </div>
        </v-card>
      </div>

      <v-card v-else class="mb-4 pa-15 text-sm-center">
        <div class="text--text">Oops! 아직 진행중인 연구가 없네요....:(</div>
        <div class="text--text">아래 버튼을 눌러 첫 연구를 생성해 보세요!</div>
      </v-card>
      <router-link to="/post">
        <v-btn
          style="width: 100%"
          color="button"
          class="white--text"
          elevation="2"
          large
          >+ 새 연구 생성하기</v-btn
        >
      </router-link>
    </v-card>
  </v-container>
</template>
<style scoped>
/* .v-btn {
  width: 100%;
} */
</style>
<script>
export default {
  data() {
    return {
      post: [
        {
          postid: 0,
          state: "모집중",
          title:
            "웹 페이지 스크랩 툴의 사용 패턴 및 사용자 멘탈 모델에 관한 정성적 연구 (인터뷰)",
          institution: "성균관대",
          start_date: "22.09.01",
          end_date: "22.09.23",
          period: "1",
          cost: "2만원",
          location: "서울시 종로구",
        },
        {
          postid: 1,
          state: "모집중",
          title:
            "웹 페이지 스크랩 툴의 사용 패턴 및 사용자 멘탈 모델에 관한 정성적 연구 (인터뷰)",
          institution: "성균관대",
          start_date: "22.09.01",
          end_date: "22.09.23",
          period: "1",
          cost: "2만원",
          location: "서울시 종로구",
        },
      ],
    };
  },
};
</script>
