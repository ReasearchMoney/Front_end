<template>
  <v-container class="mb-0" style="max-width: 100%" color="white" id="top">
    <h2>새 연구 추가</h2>
    <form id="myform" action="api/post" method="post">
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
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">이미지</h3>

          <v-text-field
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

          <v-text-field
            label="Filled"
            name="institution"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
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
      <v-btn type="submit">누르시오</v-btn>
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
  },
};
</script>
