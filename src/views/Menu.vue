<template>
  <!-- Mobile menu -->
  <div
    class="container md:flex md:justify-between h-screen items-start mx-auto w-12/12"
  >
    <div class="md:hidden flex flex-col mx-auto w-11/12 overflow-x-hidden">
      <div class="" @click="openMenu = !openMenu">
        <div class="flex pt-2 border-b-4 border-yellow1 py-4">
          <div class="w-5 h-5 flex">
            <!-- <img class="" src="/src/assets/home.png" alt="Home icon" /> -->

            <router-link
              class="w-fit lg:max-w-xl text-base flex items-center pl-3 md:pl-5 lg:pl-3 block"
              :to="{ name: 'home' }"
              >Home
            </router-link>
          </div>
        </div>

        <div class="flex pt-2 border-b-4 border-yellow1 py-4">
          <router-link
            class="w-fit lg:max-w-xl text-base flex items-center pl-3 md:pl-5 lg:pl-3 block"
            :to="{ name: 'about' }"
            >About
          </router-link>
        </div>
      </div>
    </div>
  </div>
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

<style></style>
