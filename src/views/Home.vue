<template>
  <div class="home">
    <div id="top">
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
      <v-container
        class="mb-0"
        style="width: 100vh; max-width: 60%"
        color="white"
        id="top"
      >
        <div class="pb-5 pt-5">
          내가 참여하기 딱 좋은 연구만 간편하게 검색하기
        </div>

        <v-text-field
          @click="show = !show"
          class="w-8 color-#ffd740 pb-0"
          outlined
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
        <v-expand-transition color="elevation-2">
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
                active-class="primary accent-4 white--text"
                column
              >
                <v-chip color="#FFEFB3">#해시태그1</v-chip>

                <v-chip color="#FFEFB3">#해시태그2</v-chip>

                <v-chip color="#FFEFB3">#해시태그3</v-chip>

                <v-chip color="#FFEFB3">#해시태그4</v-chip>
              </v-chip-group>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-container>
    </div>

    <v-container class="mb-0" style="width: 100vh; max-width: 60%">
      <v-card color="elevation-0 background"
        ><v-card-title>최근 올라온 공고</v-card-title></v-card
      >
      <v-card color="elevation-0 background" class="pb-5">
        <v-card-title>
          <img
            id="image"
            class="mr-2"
            src="../assets/graduate.png"
            alt="logo"
          />
          대학원생 졸업시켜주실분
        </v-card-title>

        <div v-for="item in student.slice(0, 5)" v-bind:key="item.postid">
          <v-card class="pa-3 text-sm-left">
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
      </v-card>
      <router-link to="/category">모든 연구 보러가기</router-link>
      <v-card color="elevation-0 background">
        <v-card-title>
          <img
            id="image"
            class="mr-2"
            src="../assets/loudIcon.png"
            alt="logo"
          />퇴근길에 딱! 기업에겐 당신의 목소리가 필요해요</v-card-title
        >
        <div v-for="item in company.slice(0, 5)" v-bind:key="item.postid">
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
      </v-card>
      <router-link to="/category">모든 연구 보러가기</router-link>
      <v-card color="elevation-0 background">
        <v-card-title
          ><img
            id="image"
            class="mr-2"
            src="../assets/giftIcon.png"
            alt="logo"
          />
          지금 바로 온라인 설문 참여하고 경품 받아 가세요</v-card-title
        >
        <div v-for="item in online.slice(0, 5)" v-bind:key="item.postid">
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
      </v-card>
      <router-link to="/category">모든 연구 보러가기</router-link>
    </v-container>
  </div>
</template>

<script>
export default {
  created() {
    this.$http
      .get("/api/post")
      .then((res) => {
        // const user = res.data.user;
        this.post = res.data.research;
        // console.log(user);
        // console.log("post");
        // console.log(this.post);

        let i;
        for (i = 0; i < this.post.length; i++) {
          if (this.post[i].institution === "대학") {
            const x = new Date(this.post[i].start_date_r);
            const y = new Date(this.post[i].end_date_r);
            const z = new Date().toISOString().slice(0, 10);
            if (z < x) {
              this.s_state.push("모집전");
            } else if (x <= z || z <= y) {
              this.s_state.push("모집중");
            } else {
              this.s_state.push("모집종료");
            }
            this.student.push(this.post[i]);
          } else if (this.post[i].institution === "기업") {
            this.company.push(this.post[i]);
          } else {
            this.online.push(this.post[i]);
          }
        }
        for (i = 0; i < this.post.length; i++) {
          this.total = this.total + this.post[i].pay;
        }
        this.slides[0] =
          "현재 진행중인 연구 " +
          this.post.length +
          "개를 참여하고 최대 " +
          this.total +
          "원 받아가세요!";
        // console.log(this.student);
        // console.log(this.company);
        // console.log(this.online);
      })
      .catch((err) => {
        console.error(err);
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
      show: false,
      total: 0,
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      bookmarks: [],
      book_check: [],
      post: [],
      student: [],
      student_book: [],
      company: [],
      company_book: [],
      online: [],
      online_book: [],
      s_state: [],
      c_state: [],
      o_state: [],
      colors: ["#F2F6FC"],
      cycle: false,
      slides: ["현재 진행중인 연구 13개를 참여하고 최대 8,9000원 받아가세요!"],
    };
  },
};
</script>
<style lang="scss">
#image {
  width: 1.5em;
}
.v-text-field--outlined fieldset {
  color: #ffd740 !important;
  border-color: #ffd740;
  border-width: 4px;
}
#top {
  background: white;
}
#link {
  color: black;
}
#link:hover {
  color: #2979ff;
}
.v-btn .v-btn__content .v-icon {
  color: black;
}
#book {
  text-align: left;
}
#book:hover {
  color: #ffd740;
}
#checked {
  color: #ffd740;
}
</style>
