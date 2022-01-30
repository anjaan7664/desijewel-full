<template>
  <div class="neumorph container my-6 w-full text-center">
    <!-- Gold Design  -->
    <div class="mx-auto md:my-6">
      <div class="flex flex-wrap justify-center md:flex-row md:flex-wrap">
        <div
          v-for="(index, b) in myCategory"
          :key="b"
          class="w-1/2 md:w-1/4 lg:w-1/5"
        >
          <nuxt-link
            :to="localePath({ path: '/' + catMetal + '/' + index.url })"
          >
            <CardsCatCard :cat-data="index" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MetalCard",
  props: ["myCategory", "catMetal"],
};
</script>
