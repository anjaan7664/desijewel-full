<template>
  <div class="">
    <!-- Showing List Of Category -->
    <HelpersCategory catMetal="gold" />
    <CardsMetalCard catMetal="gold"/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
  }),
  created() {},
  head: {
    title: "Gold Jewellery",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Jewellery Design in Gold"
      }
    ]
  }
};
</script>
<style></style>
