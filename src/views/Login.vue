<template>
  <div id="contain">
    <v-container style="width: 100vh; max-width: 40%">
      <v-card color="elevation-0">
        <v-card-title> </v-card-title>
        <h1 class="text-md-center pt-15 pb-15">리서치머니 로그인</h1>
        <form action="api/auth/login" method="post">
          <div class="pb-3 text-sm-left">아이디</div>
          <v-text-field
            label="Filled"
            type="email"
            name="email"
            filled
            dense
          ></v-text-field>
          <div class="pb-3 text-sm-left">비밀번호</div>
          <v-text-field
            label="Filled"
            type="password"
            name="password"
            filled
            dense
          ></v-text-field>

          <v-btn
            type="submit"
            style="width: 100%"
            color="button"
            class="white--text mb-4"
            elevation="2"
            large
            >로그인</v-btn
          >
        </form>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return { data: [], UserId: 0 };
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  created() {
    this.$http
      .get("/api/auth/login")
      .then((res) => {
        const user = res.data.user;
        const post = res;
        console.log(user);
        console.log("post");
        console.log(post);
        if (user) {
          this.$store.commit("setUser", user);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
<style land="scss" scoped>
#contain {
  background: white;
  height: 100vh;
}
h1 {
  text-align: center;
}
</style>
