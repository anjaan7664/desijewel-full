<template>
  <div>
    <h2 class="text-center text-4xl my-4">
      Explore Similar Jewellery
    </h2>
    <div class="flex flex-col md:flex-row">
      <div v-for="(index, i) in relatedPicker" :key="i" class="m-3 flex-1">
        <nuxt-link :to="localePath({ path: '/Gold/' + index.url })">
          <img
            class="object-cover h-full w-full"
            :src="index.image"
            style="aspect-ratio:1/1"
          />
          <p class="text-center text-xl font-semibold">
            {{ $t(index.name) }}
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import related from "~/assets/json/related.json";
export default {
  name: "relatedCategory",
  props: ["category"],
  data() {
    return {
      catImage: related.aad
    };
  },
  created() {
    // this.randomize();
  },
  computed: {
    relatedPicker() {
      return this.catImage.splice(0, 4);
    }
  },
  methods: {
    randomize() {
      for (let i = this.catImage.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let temp = this.catImage[i];
        this.$set(this.catImage, i, this.catImage[randomIndex]);
        this.$set(this.catImage, randomIndex, temp);
      }
    }
  }
};
</script>
