<template>
  <div>
    <!-- Hero Image  -->
    <section>
      <div class="container block mx-3 my-4 text-center">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl 
          text-center font-bold md:my-8 font-Teko tracking-widest pt-3"
        >
          WELCOME TO DESIGNING JEWEL
        </h1>
      </div>
    </section>
    <section
      class="flex flex-row flex-wrap w-full mt-4 text-center  lg:flex-row-reverse lg:text-left "
      tyle="max-height: 90vh"
    >
      <div class="w-full lg:w-1/2">
        <div class="w-full">
          <img
            src="~/assets/img/icons/jodha-haar.webp"
            alt="Designing Jewel"
            class="h-auto max-w-full p-4 md:px-16 mx-auto rounded-md shadowed"
          />
        </div>
      </div>

      <div class="w-full my-2 lg:w-1/2 lg:pl-4">
        <h1 class="text-4xl leading-tight main-heading lg:text-5xl">
          The Showcase of Indian Ethnic and Rajasthani Jewellery
        </h1>
        <p class="mt-8 mb-10 text-lg lg:pr-24 lg:pt-3 font-Montserrat lg:mb-12">
          We are commited to serve you good. Our all jewellery is manufactured
          in 22k gold with BIS hallmark. We belong to oldest community of
          jewellers, SONI. We have generations of experience in Jewellery
          making.
        </p>
        <NuxtLink
          :to="localePath('/About')"
          class="px-5 py-3 mt-12 text-2xl font-normal text-white transition duration-500 ease-in-out transform rounded  font-Libre secondary-gradient hover:bg-red-500 hover:-translate-y-1 hover:scale-110 "
        >
          {{ $t("know_more") }}
        </NuxtLink>
      </div>
    </section>
    <!-- Why we best  -->
    <HomepageWhyBest :showOff="showOff" />
    <!-- Popular Design  -->
    <HomepageCheckDesigns :catData="catData" />
    <HomepageExtras />
    <!-- Section for Sign Up  -->
    <HomepageOfferUpdate />
  </div>
</template>
<script>
import main_page from "~/assets/json/main_page.json";
export default {
  components: {},
  data: () => ({
    title: "DesiJewel",
    catData: main_page.catData,
    showOff: main_page.showOff
  }),
  computed: {
    // mix the getters into computed with object spread operator
    // ...mapGetters({
    //   authenticated: "auth/check",
    //   role: "auth/role"
    // })
    // admin() {
    //   if (this.role >= 4) {
    //     return true;
    //   }
    // },
    // contentCreator() {
    //   if (this.role == 2) {
    //     return true;
    //   }
    // },
  }
};
</script>
<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");
//
</style>
