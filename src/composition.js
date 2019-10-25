import { reactive, watch } from '@vue/composition-api';

const productKey = "778899";

export const useProductApi = () => {
  const state = reactive({
      productResponse: [],
      email: "ugwuraphael@gmail.com",
      custom: {
        title: "Retail Shop",
        logo: "We are an awesome store!"
      }
  });

  watch(() => {
    const API = `https://awesomeproductresources.com/?productkey=${productKey}`;
  
    fetch(API)
    .then(response => response.json())
    .then(jsonResponse => {
        state.productResponse = jsonResponse.data.listings;
    })
    .catch(error => {
      console.log(error);
    });
  });

  return state;
};
