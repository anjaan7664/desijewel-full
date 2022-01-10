<template>
  <div class="">
    <!-- Showing List Of Category -->
    <HelpersCategory catMetal="silver" />
    <CardsMetalCard catMetal="silver"  />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({

  }),
  computed: {
  },
  created() {},
  head: {
    title: "Catalogue of New and Latest Silver Jewellery",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Presenting you our latest collection of Silver Jewellery with variety of weight and gemstones. Designing Jewel offers High Quality, Certified Hallmarked Premium Jewellery for you and your family."
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
