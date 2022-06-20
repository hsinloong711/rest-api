import { ref } from "vue";

const getCountries = () => {
  const countries = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // Time delay
      await new Promise((resolve) => {
        setTimeout(resolve, 3000);
      });

      let data = await fetch("http://localhost:3000/countries");
      if (!data.ok) {
        throw Error("no data available");
      }
      countries.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { countries, error, load };
};

export default getCountries;
