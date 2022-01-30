<template>
  <div>
    <div v-if="$fetchState.pending">
      <HelpersSpinner />
    </div>
    <div v-else>
      <HelpersCategory catMetal="silver" />

      <PagesFullDesign
        metal="silver"
        :MainImg="MainImg"
        :imageQuery="imageQuery"
      />
    </div>
  </div>
</template>
<script>
import FullDesign from "~/components/pages/fullDesign.vue";

export default {
  name: "App",
  components: { FullDesign },

  data() {
    return {
      MainImg: {},
      imageQuery: this.$route.params.design
    };
  },

  computed: {},
  async fetch() {
    this.MainImg = await this.$axios
      .get("DisplayDesign", {
        params: {
          image: this.$route.params.design
        }
      })
      .then(res => res.data);
  },


  created() {},

  head() {
    return {
      title: this.MainImg.alt,
      // Meta tags
      meta: [
        { name: "description", content: "", id: "desc" }
        // ...
      ]
    };
  }
};
</script>
