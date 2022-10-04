<template>
  <v-container style="width: 100vh; max-width: 60%">
    <v-card color="elevation-0 background">
      <v-card-title class="pt-15">
        <v-icon class="mr-2 primary--text">mdi-domain</v-icon>내가 북마크한
        연구</v-card-title
      >

      <div v-if="post[0]">
        <v-card
          v-for="item in post"
          v-bind:key="item.id"
          class="mb-4 pa-2 text-sm-left"
        >
          <span class="primary--text">모집중 </span>
          <span>{{ item.title }}</span>

          <span> <v-icon>mdi-bookmark-outline</v-icon></span>
          <span>
            <router-link :to="`/page/${item.id}`">자세히보기 </router-link>
          </span>
          <button @click="deletefunc(item.id)">북마크삭제</button>
          <div class="text--text text-caption">
            <span>
              <v-btn color="elevation-0 box" x-small>{{
                item.institution_name
              }}</v-btn>
            </span>
            <span> {{ item.start_date }}~{{ item.end_date }} |</span>
            <span> {{ item.period }} |</span>
            <span> {{ item.zone_1 }}</span>
            <span> {{ item.zone_2 }}</span>
          </div>
        </v-card>
      </div>

      <v-card v-else class="mb-4 pa-15 text-sm-center">
        <div class="text--text">Oops! 아직 진행중인 연구가 없네요....:(</div>
        <div class="text--text">아래 버튼을 눌러 첫 연구를 생성해 보세요!</div>
      </v-card>
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
  computed: {
    user() {
      console.log("user");
      console.log(this.$store.state.user);
      return this.$store.getters.user;
    },
  },
  created() {
    this.$http
      .get(`/api/user/${this.$store.state.user.id}/follow`)
      .then((res) => {
        this.bookmark = res.data.research[0].Followers;
        this.post = res.data.research[0].Followers;
        // console.log(res.data.research);
        console.log("bookmark", this.bookmark);
      });
  },

  methods: {
    deletefunc(id) {
      this.$http.post(`/api/user/delete/${id}`).then((res) => {
        console.log(res);
        console.log("click");
        console.log("delete");
      });
      this.$http
        .get(`/api/user/${this.$store.state.user.id}/follow`)
        .then((res) => {
          this.bookmark = res.data.research[0].Followers;
          this.post = res.data.research[0].Followers;
          // console.log(res.data.research);
          console.log("bookmark", this.bookmark);
        });
    },
  },

  data() {
    return {
      post: [],
      bookmark: [],
    };
  },
};
</script>
