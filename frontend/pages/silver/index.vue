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
    title: "Design Showcase of Silver Jewellery",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Silver Jewellery design showcase"
      }
    ]
  }
};
</script>
<style></style>
