<template>
  <div class="my-6 w-full text-center container neumorph">
    <!-- Gold Design  -->
    <div class="mx-auto md:my-6">
      <div class="flex flex-wrap md:flex-row md:flex-wrap">
        <div
          v-for="(index, b) in myCategory"
          :key="b"
          class="w-1/2 md:w-1/4 lg:w-1/5"
        >
          <nuxt-link :to="localePath({ path: '/' + catMetal + '/' + index.url })">
            <CardsCatCard :cat-data="index" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "MetalCard",
  props: ["catMetal"],
  computed: {
    ...mapGetters("design", {
      // Commented when trying for ssr
      designCategory: ["category"]
    }),
    myCategory() {
      return this.designCategory.filter(i => i.metal === this.catMetal);
    }
  }
};
</script>
