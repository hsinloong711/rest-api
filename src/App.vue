<template>
  <div class="min-h-screen bg-orange text-black pb-12">
    <Navbar />
    <router-view> </router-view>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
/* @import url(//db.onlinewebfonts.com/c/c8e8fcd5d85d9b587022fe0a79809b73?family=Friz+Quadrata);
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@400;700&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Mukta:wght@400;700&display=swap");
* {
  /* font-family: "Friz Quadrata"; */
  /* font-family: "Mukta", sans-serif; */
  font-weight: 700;
  font-family: "Ma Shan Zheng", cursive;
  font-family: "Mukta", sans-serif;
}
</style>
