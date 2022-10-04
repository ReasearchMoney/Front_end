<template>
  <v-app id="app">
    <v-app-bar app color="elevation-0 white" white>
      <v-toolbar-title class="pl-2" id="title">
        <a href="/">리서치머니</a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <div v-if="$store.state.user" class="text-right pr-2" id="nav">
        <router-link to="/mypage">내연구</router-link> |
        <router-link to="/bookmark">스크랩</router-link> |
        <a href="/" v-on:click="handleLogout()">로그아웃</a>
      </div>
      <div v-else class="text-right pr-2" id="nav">
        <router-link to="/login">로그인</router-link> |
        <router-link to="/join">회원가입</router-link>
      </div>
    </v-app-bar>
    <v-main>
      <!--body-->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style lang="scss">
* {
  text-decoration: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.v-main {
  background: #e7e7e7;
}
#title {
  color: #2979ff;
}
#app {
  background-color: white;
  font-weight: bold;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3se50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #2979ff;
    }
  }
}
</style>
<script>
export default {
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
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    handleLogout() {
      console.log("it works1");
      this.$store.commit("setUser", null);
      console.log("it works2");

      this.$http.get("/api/auth/logout").then(() => {
        console.log("this is front");
        console.log(this.$store.state);
        //  console.log(this.$store.state.user)
        console.log("this os end");
      });
    },
  },
};
</script>
