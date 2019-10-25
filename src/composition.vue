<script>
import { useProductApi } from './api'

export default {
    name: 'app',
  components: {
    PayButton
  },

  setup() {
      const state = useProductApi();

      return {
          state
      }
  }
}
  function reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
</script>>
