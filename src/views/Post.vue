<template>
  <v-container class="mb-0" style="max-width: 100%" color="white" id="top">
    <h2>새 연구 추가</h2>
    <v-form>
      <v-container style="max-width: 60%">
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">제목</h3>

          <v-text-field
            label="Filled"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">설명</h3>

          <v-textarea
            label="Filled"
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
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date2"
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
          <h3 class="pr-5 mt-2">소요시간</h3>

          <v-text-field label="Solo" filled dense></v-text-field>
          <h3 class="pr-5 mt-2">피험자 지급비용</h3>

          <v-text-field label="Solo" filled dense></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">추가 URL</h3>

          <v-text-field
            label="Filled"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">이미지</h3>

          <v-text-field
            label="Filled"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">기관명</h3>

          <v-text-field
            label="Filled"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">지역</h3>

          <v-text-field
            label="Filled"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
          <v-text-field
            label="Filled"
            placeholder="Dense & Rounded"
            filled
            dense
          ></v-text-field>
        </v-card>
        <v-card class="d-flex flex-row mb-6 elevation-0">
          <h3 class="pr-5 mt-2">기관종류</h3>

          <v-text-field
            label="Filled"
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
    </v-form>
    <v-btn @click="getTest()">누르시오</v-btn>
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
      menu: false,
      modal: false,
      menu2: false,
    };
  },
  methods: {
    getTest() {
      console.log(this.myText);
    },
  },
};
</script>
