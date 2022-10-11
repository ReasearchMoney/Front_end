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
      <v-title> 최근 올라온 공고 </v-title>
      <v-card color="elevation-0 background" class="pb-5">
        <v-card-title>
          <v-icon class="mr-2 primary--text">mdi-school</v-icon>
          대학원생 졸업시켜주실분
        </v-card-title>

        <div v-for="item in student.slice(0, 5)" v-bind:key="item.postid">
          <v-card class="mb-4 pa-3 text-sm-left">
            <span class="primary--text">{{}} </span>
            <span>{{ item.title }}</span>

            <span> <v-icon>mdi-bookmark-outline</v-icon></span>
            <button @click="bookmark(item.id)">북마크</button>
            <router-link :to="`/page/${item.id}`">자세히보기 </router-link>
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
      </v-card>
      <v-card color="elevation-0 background">
        <v-card-title>
          <v-icon class="mr-2 primary--text">mdi-domain</v-icon>기업에겐 당신의
          목소리가 필요해요</v-card-title
        >
        <div v-for="item in company.slice(0, 5)" v-bind:key="item.postid">
          <v-card class="mb-4 pa-3 text-sm-left">
            <span class="primary--text">{{ item.state }} </span>
            <span>{{ item.title }}</span>

            <span> <v-icon>mdi-bookmark-outline</v-icon></span>
            <button @click="bookmark(item.id)">북마크</button>
            <router-link :to="`/page/${item.id}`">자세히보기 </router-link>
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
      </v-card>
      <v-card color="elevation-0 background">
        <v-card-title
          ><v-icon class="mr-2 primary--text">mdi-file-question-outline</v-icon>
          지금 바로 온라인 설문 참여하고 경품 받아 가세요</v-card-title
        >
        <div v-for="item in online.slice(0, 5)" v-bind:key="item.postid">
          <v-card class="mb-4 pa-3 text-sm-left">
            <span class="primary--text">{{ item.state }} </span>
            <span>{{ item.title }}</span>

            <span> <v-icon>mdi-bookmark-outline</v-icon></span>
            <button @click="bookmark(item.id)">북마크</button>
            <router-link :to="`/page/${item.id}`">자세히보기 </router-link>

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
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  created() {
    this.$http
      .get("/api/post")
      .then((res) => {
        const user = res.data.user;
        this.post = res.data.research;
        console.log(user);
        console.log("post");
        console.log(this.post);

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
        console.log(this.student);
        console.log(this.company);
        console.log(this.online);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    bookmark(id) {
      this.$http.post(`/api/user/${id}/follow`).then((res) => {
        console.log(res);
      });
    },
  },
  data() {
    return {
      show: false,
      items: ["Foo", "Bar", "Fizz", "Buzz"],
      post: [],
      student: [],
      company: [],
      online: [],
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
