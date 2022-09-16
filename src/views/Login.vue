<template>
  <div id="contain">
    <v-container style="width: 100vh max-width:100%">
      <form action="api/auth/login" method="post">
        <h1>리서치머니 로그인</h1>
        <div>아이디</div>
        <v-text-field
          label="Filled"
          type="email"
          name="email"
          filled
          dense
        ></v-text-field>
        <div>비밀번호</div>
        <v-text-field
          label="Filled"
          type="password"
          name="password"
          filled
          dense
        ></v-text-field>
        <v-btn type="submit">로그인</v-btn>
      </form>
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
</style>
