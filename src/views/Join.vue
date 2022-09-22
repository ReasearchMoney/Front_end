<template>
  <div id="contain">
    <v-container>
      <form action="api/auth/join" method="post">
        <h1>리서치머니 회원가입</h1>
        <div>이메일</div>
        <v-text-field
          type="emai"
          name="email"
          label="Filled"
          filled
          dense
        ></v-text-field>
        <div>닉네임</div>
        <v-text-field
          tyoe="text"
          name="nickname"
          label="Filled"
          filled
          dense
        ></v-text-field>
        <div>비밀번호</div>
        <v-text-field
          type="password"
          name="password"
          label="Filled"
          filled
          dense
        ></v-text-field>
        <div>비밀번호 확인</div>
        <v-text-field
          type="password"
          label="Filled"
          filled
          dense
        ></v-text-field>
        <v-btn type="submit">동의하고 가입 완료하기</v-btn>
      </form>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
<style land="scss" scoped>
#contain {
  background: white;
  height: 100vh;
}
</style>
