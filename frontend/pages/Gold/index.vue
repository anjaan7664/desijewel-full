<template>
  <div class="">
    <!-- Showing List Of Category -->
    <Category catMetal="gold"  :body_part="body_part"/>
    <section class="my-6 w-full text-center container neumorph">
      <!-- Gold Design  -->
      <div class="mx-auto md:my-6">
        <div class="flex flex-wrap md:flex-row md:flex-wrap">
          <div
            v-for="(index, b) in myCategory"
            :key="b"
            class="w-1/2 md:w-1/4 lg:w-1/5"
          >
            <nuxt-link :to="localePath({ path: '/Gold/' + index.url })">
              <catCard :cat-data="index" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Category from "~/assets/json/category.json";
export default {
  name: "App",
  components: {},
  data: () => ({
    designCategory: Category.categories,
    body_part: [
        { icon: require("~/assets/img/svg/head.svg"), part: "head" },
        { icon: require("~/assets/img/svg/ear.svg"), part: "ear" },
        { icon: require("~/assets/img/svg/nose.svg"), part: "nose" },
        { icon: require("~/assets/img/svg/neck.svg"), part: "neck" },
        { icon: require("~/assets/img/svg/hand.svg"), part: "hand" }
      ]
  }),
  computed: {
    myCategory() {
      return this.designCategory.filter(i => i.metal === "gold");
    }
  },
  created() {}
};
</script>
<style></style>
