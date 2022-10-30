<template>
  <v-container style="width: 100vh; max-width: 60%">
    <v-card color="elevation-0 background">
      <v-card-title class="pt-15">
        <img
          id="image"
          class="mr-2"
          src="../assets/bookmark.png"
          alt="logo"
        />내가 북마크한 연구</v-card-title
      >

      <div v-if="post[0]">
        <v-card
          v-for="item in post"
          v-bind:key="item.id"
          class="mb-4 pa-3 text-sm-left"
        >
          <v-row>
            <v-col cols="9">
              <span class="primary--text">모집중 </span>

              <span>
                <router-link id="link" :to="`/page/${item.id}`">{{
                  item.title
                }}</router-link>
              </span>
            </v-col>
            <v-col cols="3">
              <span class="d-flex justify-end">
                <button @click="deletefunc(item.id)">
                  <v-icon id="book">mdi-bookmark</v-icon>
                </button>
              </span>
            </v-col>
          </v-row>

          <div class="text--text text-caption">
            <span>
              <v-btn color="elevation-0 box" x-small>{{
                item.institution
              }}</v-btn>
            </span>
            <span> {{ item.start_date }}~{{ item.end_date }} |</span>
            <span> 약{{ item.period }}시간 소요 |</span>
            <span> {{ item.pay }}원 |</span>
            <span> {{ item.zone_1 }} {{ item.zone_2 }}</span>
          </div>
        </v-card>
      </div>

      <v-card v-else class="mb-4 pa-15 text-sm-center">
        <div class="text--text">Oops! 아직 북마크한 연구가 없습니다!(</div>
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
      // console.log("user");
      // console.log(this.$store.state.user);
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
        // console.log("bookmark", this.bookmark);
      });
  },

  methods: {
    deletefunc(id) {
      this.$http.post(`/api/user/delete/${id}`).then(() => {
        // console.log(res);
        // console.log("click");
        // console.log("delete");
      });
      this.$http
        .get(`/api/user/${this.$store.state.user.id}/follow`)
        .then((res) => {
          this.bookmark = res.data.research[0].Followers;
          this.post = res.data.research[0].Followers;
          // console.log(res.data.research);
          // console.log("bookmark", this.bookmark);
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
<style scoped>
#book {
  color: #ffd740;
}
#link {
  color: black;
}
#link:hover {
  color: #2979ff;
}
</style>
