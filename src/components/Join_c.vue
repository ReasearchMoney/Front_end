<template>
  <div id="contain">
    <v-container style="width: 100vh; max-width: 60%">
      <div class="pt-15 mt-15">
        <h1>회원가입이 완료되었습니다.</h1>
        <h1>이제 언제든지 편하게 연구원을 모집하고 참여할 수 있어요.</h1>

        <router-link to="/login">
          <v-btn
            style="width: 40%"
            color="button"
            class="white--text mb-4"
            elevation="2"
            large
            >지금 바로 로그인하러 가기</v-btn
          ></router-link
        >
      </div>
    </v-container>
  </div>
</template>
<style land="scss" scoped>
#contain {
  background: white;
  height: 100vh;
}
</style>
