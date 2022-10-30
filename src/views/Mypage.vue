<template>
  <v-container style="width: 100vh; max-width: 60%">
    <v-card color="elevation-0 background">
      <v-card-title class="pt-15">
        <img
          id="image"
          class="mr-2"
          src="../assets/upload.png"
          alt="logo"
        />내가 업로드한 연구</v-card-title
      >
      <router-link to="/post">
        <v-btn
          style="width: 100%"
          color="button"
          class="white--text mb-4"
          elevation="2"
          large
          >+ 새 연구 생성하기</v-btn
        >
      </router-link>
      <div v-if="post[0]">
        <v-card
          v-for="item in post"
          v-bind:key="item.id"
          class="mb-4 pa-3 text-sm-left"
        >
          <v-row>
            <v-col cols="9">
              <router-link :to="`/edit/${item.id}`">
                <img id="icon" class="mr-2" src="../assets/edit.png" alt="logo"
              /></router-link>
              <span class="primary--text">모집중 </span>
              <span :style="{ color: hover ? 'red' : 'black' }"
                ><router-link id="link" :to="`/page/${item.id}`"
                  >{{ item.title }}
                </router-link></span
              >
            </v-col>
            <v-col cols="3">
              <span class="d-flex justify-end">
                <button
                  @click="deletefunc(item.id)"
                  id="twit-btn"
                  type="submit"
                  class="btn"
                >
                  <v-icon id="book" color="red">mdi-delete-outline</v-icon>
                </button>
                <!-- <router-link :to="`/page/${item.id}`">자세히보기 </router-link> -->
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
#link {
  color: black;
}
#link:hover {
  color: #2979ff;
}
#image {
  width: 1.5em;
}
#icon {
  width: 1em;
}
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
      .get(`/api/post/mypage/${this.$store.state.user.id}`)
      .then((res) => {
        const user = res.data.user;
        this.post = res.data.research;
        // console.log(user);
        // console.log("post");
        // console.log(this.post);
        if (user) {
          this.$store.commit("setUser", user);
          // console.log(this.$store.state);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },

  methods: {
    deletefunc(id) {
      this.$http.post(`/api/post/delete/${id}`).then(() => {
        // console.log(res);
      });
      this.$http
        .get(`/api/post/mypage/${this.$store.state.user.id}`)
        .then((res) => {
          // const user = res.data.user;
          this.post = res.data.research;
          // console.log(user);
          // console.log("post");
          // console.log(this.post);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },

  data() {
    return {
      post: [],
    };
  },
};
</script>
