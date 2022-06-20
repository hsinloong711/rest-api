import { ref } from "vue";

const getCountry = (id) => {
  const country = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/countries/" + id);
      if (!data.ok) {
        throw Error("that product does not exist");
      }
      country.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { country, error, load };
};

export default getCountry;
