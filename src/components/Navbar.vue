<template>
  <!-- Navigation bar -->
  <header class="py-10 md:py-5">
    <div
      v-show="!mobile"
      class="container flex justify-between items-center mx-auto w-11/12"
    >
      <div>
        <router-link class="" :to="{ name: 'home' }">
          <img
            class="w-10 md:w-12 lg:w-20"
            src="/src/assets/restapi.png"
            alt="Logo icon"
          />
        </router-link>
      </div>
      <!-- <a href="" class="text-xl text-red">Gary Tsai</a> -->

      <div class="hidden md:flex space-x-12 items-center text-base">
        <router-link class="" :to="{ name: 'home' }">Home </router-link>
        <router-link class="" :to="{ name: 'countries' }">JSON </router-link>
        <router-link class="" :to="{ name: 'about' }">CRUD</router-link>
      </div>

      <!-- Mobile menu button -->
      <router-link class="md:hidden" :to="{ name: 'menu' }">
        <button class="outline-none mobile-menu-button">
          <svg
            class="w-6 h-6 text-gray-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg></button
      ></router-link>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
// import gsap from "gsap";
export default {
  setup() {
    let mobile = ref(false);
    let openMenu = ref(false);

    return { mobile, openMenu };
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
</style>
