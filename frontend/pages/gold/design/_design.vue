<template>
  <div>
    <div v-if="$fetchState.pending">
      <HelpersSpinner />
    </div>
    <div v-else>
      <HelpersCategory catMetal="gold" />
      <PagesFullDesign
        metal="gold"
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

  computed: {
    designAlt() {
      if (this.$i18n.locale == "en") {
        return this.MainImg.alt;
      }
      return this.MainImg.alt_hn;
    }
    // ...mapGetters("design", {
    //   MainImg: ["singleDesigns"]
    // }),
    // sameImage: function() {
    //   const ar = this.MainImg;
    //   return ar.filter((_, i) => i !== 2);
    // },
  },
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
      title: this.designAlt,
      // Meta tags
      meta: [
        { name: "description", content: "", id: "desc" }
        // ...
      ]
    };
  }
};
</script>
<style>
.similar div:nth-of-type(1) p:after {
  content: "<<";
}
.similar div:nth-of-type(2) p:after {
  content: "Previous";
}
.similar div:nth-of-type(3) p:after {
  content: "Next";
}
.similar div:nth-of-type(4) p:after {
  content: ">>";
}
</style>


