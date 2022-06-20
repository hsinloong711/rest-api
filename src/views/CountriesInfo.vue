<template>
  <div
    class="container flex justify-start md:justify-center mx-auto w-11/12 md:mt-10 mt-5"
  >
    <div v-if="country">{{ country.id }}) {{ country.name }}</div>
  </div>

  <div
    class="container flex justify-start md:justify-center mx-auto w-11/12 md:mt-10 mt-5"
  >
    <div v-if="country">
      Refresh after performing action to see your changes.
    </div>
  </div>

  <div
    class="container flex justify-start md:justify-center mx-auto w-11/12 md:mt-10 mt-5"
  >
    <button
      @click="deletePost(id)"
      class="bg-orange1 hover:orange1 active:orange1 focus:outline-none focus:ring focus:orange1"
    >
      Delete place
    </button>
  </div>

  <div
    class="container flex justify-start md:justify-center mx-auto w-11/12 md:mt-10 mt-5"
  >
    <form @submit.prevent="updatePost(id)">
      <input type="text" v-model="input" />
      <button
        class="bg-orange1 hover:orange1 active:orange1 focus:outline-none focus:ring focus:orange1"
      >
        Change place name
      </button>
    </form>
  </div>
</template>

<script>
import getCountry from "@/composables/getCountry";
import { ref } from "vue";

export default {
  props: ["id"],
  setup(props) {
    const { country, error, load } = getCountry(props.id);

    const input = ref("");

    // Delete
    const deletePost = (id) => {
      fetch("http://localhost:3000/countries/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    };

    // Put
    const updatePost = (id) => {
      fetch("http://localhost:3000/countries/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: input.value,
        }),
      });
    };

    load();
    return { country, error, load, deletePost, updatePost, input };
  },
};
</script>

<style></style>
