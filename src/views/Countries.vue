<template>
  <!-- Container -->
  <div
    class="container flex justify-between md:justify-center items-center mx-auto w-11/12"
  >
    <h3 class="w-fit 3xl:text-3xl 2xl:text-xl text-base text-black">
      Rest API
    </h3>
  </div>

  <div
    class="container flex justify-start md:justify-center mx-auto w-11/12 md:mt-10 mt-5"
  >
    <!-- Project container -->
    <div
      v-if="countries.length"
      class="rounded overflow-hidden lg:w-4/12 md:w-6/12"
    >
      <!-- Title container -->
      <div class="w-full flex justify-between p-2 md:p-3">
        <div class="flex">
          <div
            class="rounded-full h-6 w-6 md:h-8 md:w-8 flex items-center justify-center overflow-hidden"
          >
            <img src="/src/assets/country.png" alt="Country icon" />
          </div>
          <p class="pt-1 ml-2 lg:text-base text-base">
            Countries that I would like to travel
          </p>
        </div>
      </div>

      <div class="px-3 pb-2">
        <div class="pt-2">
          <p class="text-base">Recommend me good tourist spots</p>
        </div>
        <form @submit.prevent="handlePost">
          <input type="text" v-model="name" />
          <button
            @click="success = !success"
            :disabled="name == ''"
            class="bg-orange1 hover:orange1 active:orange1 focus:outline-none focus:ring focus:orange1"
          >
            Add
          </button>
          <p v-show="!success">
            Your input has been added. Please refresh to see it.
          </p>
        </form>
        <div class="pt-1">
          <div class="mb-2 text-sm">
            <div v-for="country in countries" :key="country.id">
              <router-link
                :to="{ name: 'countriesinfo', params: { id: country.id } }"
              >
                {{ country.id }}) {{ country.name }}</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Loader -->
    <div v-else>
      <div class="container w-12/12">
        <div class="flex animate-pulse space-x-5">
          <div class="w-8 h-8 md:w-12 md:h-12 bg-orange1 rounded-full"></div>
          <div class="flex flex-col space-y-3">
            <div class="w-64 md:w-96 bg-orange1 h-4 rounded-md"></div>

            <br />

            <div class="w-64 md:w-96 bg-orange1 h-4 rounded-md"></div>
            <div class="w-56 md:w-80 bg-orange1 h-4 rounded-md"></div>
            <div class="w-64 md:w-96 bg-orange1 h-4 rounded-md"></div>
            <br />

            <div class="w-64 md:w-96 bg-orange1 h-4 rounded-md"></div>
            <div class="w-56 md:w-80 bg-orange1 h-4 rounded-md"></div>
            <div class="w-64 md:w-96 bg-orange1 h-4 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCountries from "@/composables/getCountries";
import { ref } from "vue";
export default {
  setup() {
    // Fetch
    const name = ref("");
    const success = ref("false");

    const { countries, error, load } = getCountries();

    load();

    // POST
    const handlePost = async () => {
      const recommendation = {
        name: name.value,
      };
      await fetch("http://localhost:3000/countries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recommendation),
      });
    };

    return { countries, error, load, name, handlePost, success };
  },
};
</script>

<style></style>
