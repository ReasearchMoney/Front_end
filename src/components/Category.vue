<template>
  <v-container class="mb-0" style="width: 100vh; max-width: 60%">
    <v-card color="elevation-0 background" class="pb-5">
      <v-card class="d-flex flex-row mb-6 elevation-0 background">
        <v-card-title>
          <v-icon class="mr-2 primary--text">mdi-school</v-icon>
          대학원생 졸업시켜주실분
        </v-card-title>
        <v-select
          v-model="select"
          :items="items"
          name="institution"
          filled
          dense
        ></v-select>
      </v-card>
      <div v-for="item in post" v-bind:key="item.postid">
        <v-card
          class="mb-4 pa-2 text-sm-left"
          v-if="item.institution === select"
        >
          <span class="primary--text">{{ item.state }} </span>
          <span>{{ item.title }}</span>

          <span> <v-icon>mdi-bookmark-outline</v-icon></span>
          <button @click="bookmark(item.id)">북마크</button>
          <router-link :to="`/page/${item.id}`">자세히보기 </router-link>
          <div class="text--text text-caption">
            <span>
              <v-btn color="elevation-0 box" x-small>{{
                item.institution
              }}</v-btn>
            </span>
            <span> {{ item.start_date }}~{{ item.end_date }} |</span>
            <span> {{ item.period }} |</span>
            <span> {{ item.location }}</span>
          </div>
        </v-card>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$http
      .get("/api/post")
      .then((res) => {
        const user = res.data.user;
        this.post = res.data.research;
        console.log(user);
        console.log("post");
        console.log(this.post);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  data() {
    return {
      items: ["대학", "기업", "개인"],
      post: [],
      select: "",
    };
  },
};
</script>
<style lang="scss">
.v-text-field--outlined fieldset {
  color: #ffd740 !important;
  border-color: #ffd740;
  border-width: 4px;
}
#top {
  background: white;
}

.v-btn .v-btn__content .v-icon {
  color: black;
}
</style>
