<template>
  <v-app id="app">
    <v-app-bar app color="elevation-0 white" white>
      <v-toolbar-title>리서치머니</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-right" id="nav">
        <router-link to="/">로그인</router-link> |
        <router-link to="/about">회원가입</router-link>
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
}
#app {
  background-color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3se50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
