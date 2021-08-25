<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <div
      v-else
      id="app"
      ref="divImage"
      class="flex flex-wrap justify-between pt-4 overflow-hidden text-center rounded"
    >
      <div
        v-for="design in test.data"
        :key="design.id"
        class="w-full p-2 md:w-1/3 md:p-6"
      >
        <nuxt-link
          :to="
            localePath({
              path: '/design/' + design.image,
              query: { subCat: design.sub_category }
            })
          "
        >
     <h1>{{design.id}}</h1>
        </nuxt-link>
      </div>
    </div>
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
      .get("api/designs", {
        params: parameters
      })
      .then(res => res.data);
    // const { data } = await this.$axios.get("api/designs", {
    //   params: parameters
    // });
    // this.$store.commit("design/SET_DESIGNS", data);
  }
};
</script>
