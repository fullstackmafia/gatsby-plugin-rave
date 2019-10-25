<script>
import axios from "axios";
import PayButton from "./components/PayButton.vue";

const discount = "50% OFF!";
const productKey = "778899";
const API = `https://awesomeproductresources.com/?productkey=${productKey}`;

export default {
  name: "app",
  components: {
    PayButton
  },

   mounted() {
    axios
      .get(API)
      .then(response => {
        this.productResponse = response.data.listings;
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return {
      discount: discount,
      productResponse: [],
      email: "ugwuraphael@gmail.com",
      custom: {
        title: "Retail Shop",
        logo: "We are an awesome store!"
      }
    };
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  }
};
</script>
