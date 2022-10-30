<template>
  <v-container class="mb-0" style="width: 100vh; max-width: 60%">
    <v-card color="elevation-0 background" class="pb-5">
      <v-card class="d-flex flex-row mb-6 elevation-0 background">
        <v-row>
          <v-col cols="9">
            <v-card-title>
              <v-icon class="mr-2 primary--text">mdi-school</v-icon>
              연구 전체 보기
            </v-card-title>
          </v-col>
          <v-col cols="3">
            <v-select
              v-model="select"
              :items="items"
              name="timeline"
              filled
              placeholder="오래된 순"
              dense
            ></v-select
          ></v-col>
        </v-row>
      </v-card>
      <div v-if="select == items[0]">
        <div v-for="item in post" v-bind:key="item.postid">
          <v-card class="mb-4 pa-3 text-sm-left">
            <v-row>
              <v-col cols="9">
                <span class="primary--text">모집중 </span>
                <span :style="{ color: hover ? 'red' : 'black' }"
                  ><router-link id="link" :to="`/page/${item.id}`"
                    >{{ item.title }}
                  </router-link></span
                >
              </v-col>

              <v-col cols="3">
                <span class="d-flex justify-end" v-if="book_check[item.id]">
                  <button @click="deletefunc(item.id)">
                    <v-icon id="checked">mdi-bookmark</v-icon>
                  </button>
                </span>
                <span class="d-flex justify-end" v-else>
                  <button @click="bookmark(item.id)">
                    <v-icon id="book">mdi-bookmark-outline</v-icon>
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
      </div>
      <div v-else>
        <div v-for="item in post_reverse" v-bind:key="item.postid">
          <v-card class="mb-4 pa-3 text-sm-left">
            <v-row>
              <v-col cols="9">
                <span class="primary--text">모집중 </span>
                <span :style="{ color: hover ? 'red' : 'black' }"
                  ><router-link id="link" :to="`/page/${item.id}`"
                    >{{ item.title }}
                  </router-link></span
                >
              </v-col>

              <v-col cols="3">
                <span class="d-flex justify-end" v-if="book_check[item.id]">
                  <button @click="deletefunc(item.id)">
                    <v-icon id="checked">mdi-bookmark</v-icon>
                  </button>
                </span>
                <span class="d-flex justify-end" v-else>
                  <button @click="bookmark(item.id)">
                    <v-icon id="book">mdi-bookmark-outline</v-icon>
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
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$http
      .get("/api/post")
      .then((res) => {
        const user = res.data.user;
        this.post = res.data.research;
        this.post_reverse = JSON.parse(JSON.stringify(this.post));
        this.post_reverse.reverse();
        console.log(user);
        console.log("post");
        console.log(this.post);
        this.book_check = [];
        this.bookmarks = [];
      })
      .then(() => {
        this.$http
          .get(`/api/user/${this.$store.state.user.id}/follow`)
          .then((res) => {
            console.log("working");
            let i;

            for (i = 0; i < res.data.research[0].Followers.length; i++) {
              this.bookmarks.push(res.data.research[0].Followers[i].id);
            }
            console.log("이건 먼저 동작", this.bookmarks);
          })
          .then(() => {
            let i;
            let j;
            this.book_check = [];
            for (j = 0; j < this.bookmarks.length; j++) {
              for (i = 0; i < this.post.length; i++) {
                if (this.bookmarks[j] === this.post[i].id) {
                  this.book_check[this.post[i].id] = true;
                }
              }
            }
            console.log("이게 동작해야 함", this.book_check);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    bookmark(id) {
      this.$http.post(`/api/user/${id}/follow`).then(() => {
        // console.log(res);
      });
      this.$http
        .get(`/api/user/${this.$store.state.user.id}/follow`)
        .then((res) => {
          let i;
          let j;
          this.book_check = [];
          this.bookmarks = [];
          for (i = 0; i < res.data.research[0].Followers.length; i++) {
            this.bookmarks.push(res.data.research[0].Followers[i].id);
          }

          // console.log(this.bookmarks);

          for (j = 0; j < this.bookmarks.length; j++) {
            for (i = 0; i < this.post.length; i++) {
              if (this.bookmarks[j] === this.post[i].id) {
                this.book_check[this.post[i].id] = true;
              }
            }
          }
          // console.log(this.book_check);
        });
    },
    deletefunc(id) {
      this.$http.post(`/api/user/delete/${id}`).then(() => {
        // console.log(res);
        // console.log("click");
        // console.log("delete");
      });
      this.$http
        .get(`/api/user/${this.$store.state.user.id}/follow`)
        .then((res) => {
          let i;
          let j;
          this.bookmarks = [];
          this.book_check = [];
          for (i = 0; i < res.data.research[0].Followers.length; i++) {
            this.bookmarks.push(res.data.research[0].Followers[i].id);
          }

          // console.log(this.bookmarks);

          for (j = 0; j < this.bookmarks.length; j++) {
            for (i = 0; i < this.post.length; i++) {
              if (this.bookmarks[j] === this.post[i].id) {
                this.book_check[this.post[i].id] = true;
              }
            }
          }
          // console.log(this.book_check);
        });
    },
  },
  data() {
    return {
      items: ["최근", "오래된순"],
      post: [],
      post_reverse: [],
      select: "",
      bookmarks: [],
      book_check: [],
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
#top {
  background: white;
}

.v-btn .v-btn__content .v-icon {
  color: black;
}
</style>
