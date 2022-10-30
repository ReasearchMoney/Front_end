<template>
  <div id="contain">
    <v-container
      class="mb-0"
      style="width: 100vh; max-width: 60%"
      color="white"
      id="top"
    >
      <h2 class="pb-10 mb-10 text-sm-left">
        <img id="image" class="mr-2" src="../assets/edit.png" alt="logo" />연구
        수정
      </h2>
      <form id="myform">
        <v-container>
          <v-card class="d-flex flex-row mb-6 elevation-0">
            <h3 class="pr-5 mt-2">제목</h3>

            <v-text-field
              name="title"
              v-model="this.post.title"
              placeholder="40자 이내로 적어주세요"
              filled
              dense
            ></v-text-field>
          </v-card>
          <v-card class="d-flex flex-row mb-6 elevation-0">
            <h3 class="pr-5 mt-2">기관종류</h3>
            <v-select
              :items="items"
              v-model="this.post.institution"
              name="institution"
              filled
              dense
              placeholder="대학 | 기업 | 개인"
            ></v-select>
            <h3 class="pr-5 mt-2 ml-3">기관명</h3>

            <v-text-field
              name="institution_name"
              v-model="this.post.institution_name"
              placeholder="기관명 작성"
              filled
              dense
            ></v-text-field>
          </v-card>
          <v-card class="d-flex flex-row mb-6 elevation-0">
            <h3 class="pr-5 mt-2">지역</h3>

            <v-text-field
              name="zone_1"
              v-model="this.post.zone_1"
              placeholder="시"
              filled
              dense
            ></v-text-field>
            <v-text-field
              class="ml-3"
              v-model="this.post.zone_2"
              name="zone_2"
              placeholder="군/구"
              filled
              dense
            ></v-text-field>
          </v-card>

          <v-card class="d-flex flex-row mb-6 elevation-0">
            <h3 class="pr-5 mt-2">모집기간</h3>

            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  name="start_date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  filled
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
            <div>~</div>
            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              :return-value.sync="date2"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date2"
                  name="end_date"
                  label="Picker in menu2"
                  prepend-icon="mdi-calendar"
                  readonly
                  filled
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date2" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu2 = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu2.save(date2)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-card>
          <v-card class="d-flex flex-row mb-6 elevation-0">
            <h3 class="pr-5 mt-2">실험기간</h3>

            <v-menu
              ref="menu3"
              v-model="menu3"
              :close-on-content-click="false"
              :return-value.sync="date3"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date3"
                  name="start_date_r"
                  label="Picker in menu3"
                  prepend-icon="mdi-calendar"
                  readonly
                  filled
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date3" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu3 = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu3.save(date3)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
            <div>~</div>
            <v-menu
              ref="menu4"
              v-model="menu4"
              :close-on-content-click="false"
              :return-value.sync="date4"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date4"
                  name="end_date_r"
                  label="Picker in menu4"
                  prepend-icon="mdi-calendar"
                  readonly
                  filled
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date4" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu4 = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu4.save(date4)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-card>
          <v-card class="d-flex flex-row mb-6 elevation-0">
            <h3 class="pr-5 mt-2">소요시간</h3>

            <v-text-field
              v-model="this.post.period"
              name="period"
              filled
              dense
              placeholder="시간 단위로 작성"
            ></v-text-field>
            <h3 class="pr-5 mt-2 ml-3">피험자 지급비용</h3>

            <v-text-field
              name="pay"
              v-model="this.post.pay"
              filled
              dense
              placeholder="숫자만 입력"
            ></v-text-field>
          </v-card>
          <v-card class="d-flex flex-row mb-6 elevation-0">
            <h3 name="post" class="pr-5 mt-2">설명</h3>

            <v-textarea
              name="post"
              v-model="this.post.post"
              placeholder="연구 내용 설명"
              filled
              dense
            ></v-textarea>
          </v-card>
          <v-card class="d-flex flex-row mb-6 elevation-0">
            <h3 class="pr-5 mt-2">추가 URL</h3>

            <v-text-field
              name="url"
              v-model="this.post.url"
              placeholder="첨부할 URL 입력"
              filled
              dense
            ></v-text-field>
          </v-card>

          <!-- <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">태그</h3>

          <v-text-field
            label="Filled"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card> -->
        </v-container>

        <v-btn
          @click="sendPost()"
          style="width: 100%"
          color="button"
          class="white--text mb-4"
          elevation="2"
          large
          >수정 완료하기</v-btn
        >
      </form>
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
#image {
  width: 1em;
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
        console.log(this.post.start_date);
        this.date = this.post.start_date;
        this.date2 = this.post.end_date;
        this.date3 = this.post.start_date_r;
        this.date4 = this.post.end_date_r;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data() {
    return {
      post: [],
      items: ["대학", "기업", "개인"],
      myText: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date3: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date4: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      menu3: false,
      menu4: false,
    };
  },
  methods: {
    getTest() {
      console.log(this.myText);
      console.log(this.date);
      console.log(this.date2);
    },
    sendPost() {
      console.log("click");
      var form = document.getElementById("myform");
      var formData = new FormData(form);
      this.$http
        .post(`/api/post/update/${this.$route.params.id}`, formData)
        .then(() => {
          console.log("send success");

          this.$router.push("/mypage");
        })
        .catch(() => {
          console.error("err");
        });
    },
  },
};
</script>
