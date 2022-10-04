<template>
  <v-container class="mb-0" style="max-width: 100%" color="white" id="top">
    <h2>연구 수정</h2>
    <form id="myform">
      <v-container style="max-width: 60%">
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">제목</h3>

          <v-text-field
            v-model="this.post.title"
            name="title"
            label="Filled"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 name="post" class="pr-5 mt-2">설명</h3>

          <v-textarea
            v-model="this.post.post"
            label="Filled"
            name="post"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-textarea>
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
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
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
            label="Solo"
            name="period"
            filled
            dense
          ></v-text-field>
          <h3 class="pr-5 mt-2">피험자 지급비용</h3>

          <v-text-field
            v-model="this.post.pay"
            label="Solo"
            name="pay"
            filled
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">추가 URL</h3>

          <v-text-field
            v-model="this.post.url"
            label="Filled"
            name="url"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">이미지</h3>

          <v-text-field
            v-model="this.post.image"
            label="Filled"
            name="image"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">기관명</h3>

          <v-text-field
            v-model="this.post.institution_name"
            label="Filled"
            name="institution_name"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">지역</h3>

          <v-text-field
            v-model="this.post.zone_1"
            label="Filled"
            name="zone_1"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
          <v-text-field
            v-model="this.post.zone_2"
            label="Filled"
            name="zone_2"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">기관종류</h3>

          <!-- <v-text-field
            label="Filled"
           
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field> -->
          <v-select
            v-model="this.post.institution"
            :items="items"
            name="institution"
            filled
            label="Filled style"
          ></v-select>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">태그</h3>

          <v-text-field
            label="Filled"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
      </v-container>
      <v-btn @click="sendPost()">누르시오</v-btn>
    </form>
  </v-container>
</template>
<style lang="scss" scoped>
#top {
  background: white;
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
