<template>
  <div class="">
    <!-- Showing List Of Category -->
    <HelpersCategory :catMetal="catMetal" />
    <CardsMetalCard :myCategory="myCategory" :catMetal="catMetal" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  data: () => ({
    catMetal:'gold'
  }),
  computed: {
    ...mapGetters("design", {
      designCategory: ["category"]
    }),
    myCategory() {
      return this.designCategory.filter(i => i.metal === this.catMetal);
    }
  },
  created() {
  
  },
  head: {
    title: "Catalogue of New and Latest Gold Jewellery",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Presenting you our latest collection of Gold Jewellery with variety of weight and gemstones. Designing Jewel offers High Quality, Certified Hallmarked Premium Jewellery for you and your family."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "emboss,ethnic,gold price,22ct,women,buy,jewellery,kundan,emboss,design,gold,jodhpur,pali,barmer,nagaur,bikaner"
      }
    ]
  }
};
</script>
<style></style>
