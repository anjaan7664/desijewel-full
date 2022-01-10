<template>
  <div>
    <!-- Hero Image  -->
    <section>
      <div class="container block mx-3 md:my-auto text-center">
        <h1
          class="text-[1.5rem] md:text-4xl lg:text-5xl 
          text-center font-bold md:my-6 md:mb-2 font-Teko tracking-wider md:tracking-widest pt-1"
        >
          WELCOME TO DESIGNING JEWEL
        </h1>
      </div>
    </section>
    <section
      class="md:max-h-[90vh] flex flex-row flex-wrap w-full md:mt-4 text-center lg:flex-row-reverse lg:text-left "
    >
      <div class="w-full lg:w-1/2">
        <div class="w-full">
          <img
            src="~/assets/img/icons/jodha-haar.webp"
            alt="Designing Jewel"
            title="Designing Jewel"
            class="h-auto max-w-full px-3 md:p-4 md:px-16 mx-auto rounded-md shadowed min-h-[16rem]"
          />
        </div>
      </div>

      <div class="w-full my-2 lg:w-1/2 lg:pl-4">
        <h1
          class="text-3xl md:text-4xl main-heading lg:text-5xl font-Playfair font-bold tracking-wider"
        >
          The Showcase of Indian and Rajasthani Jewellery
        </h1>
        <p
          class="my-2 md:my-8 text-lg lg:pr-24 lg:pt-3 font-Montserrat lg:mb-12"
        >
          We are commited to serve you with our best service. Our all jewellery
          is manufactured in 22k gold with BIS hallmark. We belong to oldest
          community of jewellers, SONI. We have generations experience in
          Jewellery making.
        </p>
        <div class="my-3 mt-4">
          <nuxt-link
            :to="localePath('/About')"
            class="text-center text-white text-2xl font-semibold animate-pulse cursor-pointer bg-pink-600 px-8 py-4 rounded-2xl
            hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
            >Know More</nuxt-link
          >
        </div>
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

  },
  created() {
    console.log();
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Ledger&family=Playfair+Display:ital,wght@0,500;1,400&display=swap");
</style>
