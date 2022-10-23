<template>
  <v-container class="mb-0" style="max-width: 100%" color="white" id="top">
    <h2>새 연구 추가</h2>
    <form id="myform">
      <v-container style="max-width: 60%">
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">제목</h3>

          <v-text-field
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

          <v-text-field label="Solo" name="period" filled dense></v-text-field>
          <h3 class="pr-5 mt-2">피험자 지급비용</h3>

          <v-text-field label="Solo" name="pay" filled dense></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">추가 URL</h3>

          <v-text-field
            label="Filled"
            name="url"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
        <!-- <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">이미지</h3>
          <v-file-input
            class="input"
            type="file"
            counter
            show-size
            label="이미지 제출(여러개 가능)"
            outlined
            dense
            multiple
            prepend-icon="mdi-camera"
            style="width: 400px; margin-left: 100px"
            @change="onImageChange"
          />
          <v-img
            v-for="(item, i) in uploadimageurl"
            :key="i"
            :src="item.url"
            contain
            height="150px"
            width="200px"
            style="border: 2px solid black; margin-left: 100px"
          />
        </v-card> -->
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">기관명</h3>

          <v-text-field
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
            label="Filled"
            name="zone_1"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
          <v-text-field
            label="Filled"
            name="zone_2"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">기관종류</h3>
          <v-select
            :items="items"
            name="institution"
            filled
            label="Filled style"
          ></v-select>
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
  data() {
    return {
      uploadimageurl: [], // 업로드한 이미지의 미리보기 기능을 위해 url 저장하는 객체
      image: 0,
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
    onImageChange(file) {
      // v-file-input 변경시
      // const fs = require("fs");
      // const multer = require("multer");
      if (!file) {
        return;
      }
      const formData = new FormData(); // 파일을 전송할때는 FormData 형식으로 전송
      this.uploadimageurl = []; // uploadimageurl은 미리보기용으로 사용
      file.forEach((item) => {
        formData.append("filelist", item); // formData의 key: 'filelist', value: 이미지
        // console.log(item);
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadimageurl.push({ url: e.target.result });
          // e.target.result를 통해 이미지 url을 가져와서 uploadimageurl에 저장
        };
        reader.readAsDataURL(item);
      });
      formData.append("filelist", file[0].name);
      // console.log(formData.File);
      this.$http
        .post("/api/post/imagesave", formData)
        .then(() => {
          // console.log(res.data.message);
          this.image = file[0].name;
          // this.imagecnt = file.length; // 이미지 개수 저장
        })
        .catch((err) => {
          alert(err);
        });

      // var storage = multer.diskStorage({
      //   destination: function (req, file, cb) {
      //     // 경로 => uploads 폴더
      //     cb(null, "uploads/");
      //   },
      //   filename: function (req, file, cb) {
      //     // 파일명 => 이미지 업로드시 원본 이름 그대로
      //     cb(null, file.originalname);
      //   },
      // });
      // var upload = multer({ storage: storage });
      // upload.array("filelist");

      // console.log("이건 폼", formData);
      // console.log(file[0].path);
      // fs.renameSync(file[0].path, "uploads/" + file[0].name);
    },

    sendPost() {
      console.log("click");
      var form = document.getElementById("myform");
      var formData = new FormData(form);
      this.$http
        .post("/api/post", formData)
        .then(() => {
          console.log("send success");

          this.$router.push("/mypage");
        })
        .catch(() => {
          console.error("err");
        });
    },
    getTest() {
      // console.log(this.myText);
      // console.log(this.date);
      // console.log(this.date2);
    },
  },
};
</script>
