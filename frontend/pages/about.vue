<template>
  <div>
    <p>Our family belong to Village Satlana, near Jodhpur City of Rajasthan. We belong to
      Soni caste that is synonymous of jewellers in india.
    </p>
  </div>
</template>

<script>
export default {
  middleware:'log',
  data() {
    return {
      test: []
    };
  },
  async fetch() {
    console.log("fetching");
    const parameters = {
      perPage: 3,
      page: 2,
      Category: "aad"
    };
    this.test = await this.$axios
      .get("designs", {
        params: parameters
      })
      .then(res => res.data);
    // const { data } = await this.$axios.get("designs", {
    //   params: parameters
    // });
    // this.$store.commit("design/SET_DESIGNS", data);
  }
};
</script>
