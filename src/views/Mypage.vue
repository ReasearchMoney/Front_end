<template>
  <v-container style="width: 100vh; max-width: 60%">
    <v-card color="elevation-0 background">
      <v-card-title>
        <v-icon class="mr-2 primary--text">mdi-domain</v-icon>내가 업로드한
        연구</v-card-title
      >
      <v-card class="mb-4 pa-2 text-sm-center">
        <div>Oops! 아직 진행중인 연구가 없네요....:(</div>
        <div>아래 버튼을 눌러 첫 연구를 생성해 보세요!</div>
      </v-card>
      <v-btn color="button" class="white--text" elevation="2" large
        >+ 새 연구 생성하기</v-btn
      >
    </v-card>
  </v-container>
</template>
<style scoped>
.v-btn {
  width: 100%;
}
</style>
