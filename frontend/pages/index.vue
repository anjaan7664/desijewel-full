<template>
  <div>
  
    <!-- Hero Image  -->
    <section style="max-height: 90vh">
      <div
        class=""
        style="
          width: 100vw;
          position: relative;
          left: calc(-50vw + 50%);
          max-height: 70vh;
        "
      >
        <!-- <carousel
          :per-page="1"
          :autoplay="true"
          :pagination-enabled="false"
          :loop="true"
          class=""
        >
          <slide v-for="img in heroImages" :key="img.name">
            <div class="text-center">
              <img
                class="shadow-md object-cover object-cover w-full"
                :src="img.url"
                alt
              />
            </div>
          </slide>
        </carousel> -->
      </div>
      <div class="container mx-3 block text-center my-4 md:mt-16">
        <h1 class="text-4xl md:text-5xl font-Cormorant">
          Welcome to Designing Jewel
        </h1>
        <p class="text-xl text-gray-600 font-light mt-2">
          We make Indian Ethnic and Rajasthani Jewellery in Gold & Silver.
        </p>
      </div>
    </section>
    <!-- Why we best  -->
    <section class="my-8 w-full text-center h-full md:mt-16">
      <h1 class="hmain my-2">Why We Are Best</h1>
      <div class="">
        <div class="flex flex-wrap">
          <div
            v-for="index in showOff"
            :key="index.name"
            class="md:w-1/2 flex flex-row p-4"
          >
            <div class="w-1/5 flex-grow-0">
              <img :src="index.image" alt="" class="" />
            </div>
            <div class="flex flex-col text-left px-4 w-4/5">
              <h2 class="text-2xl">
                {{ index.name }}
              </h2>
              <p class="text-lg">
                {{ index.para }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Popular Design  -->
    <section class="md:my-16 w-full text-center">
      <h1 class="hmain my-4 px-1">Check Out Our Designs</h1>
      <!-- Gold Design  -->
      <div
        class="my-8 mx-auto relative flex flex-col md:flex-row md:flex-wrap items-center"
      >
        <h1 class="jewellery_design_tagline font-Samarkan relative w-full">
          Gold Jewellery Design
        </h1>
        <div class="flex flex-col md:flex-row w-11/12">
          <div
            v-for="index in catDataGold"
          :key="index.image"
            class="flex-1 flex "
          >
            <router-link
              to="/Gold"
              class="hover:shadow-none shadow-neumorph border relative flex flex-row bg-gray-100 rounded-md m-6 p-4 transition-shadow duration-300"
            >
              <p
                class="text-lg md:2xl lg:text-xl font-semibold absolute top-4 left-4"
              >
                {{ index.name }}
              </p>
              <p class="bottom-5 left-5 absolute underline">View All</p>
              <img
                :src="index.image"
                alt=""
                class="w-3/5 ml-auto object-contain"
              />
            </router-link>
          </div>
        </div>
        <router-link to="/Gold" class="text-5xl w-1/12 text-gray-600">
          <fa class="my-auto" :icon="['fas', 'arrow-right']" />
        </router-link>
      </div>
      <!-- Silver Design  -->
      <div
        class="my-8 mx-auto relative flex flex-col md:flex-row md:flex-wrap items-center"
      >
        <h1 class="jewellery_design_tagline font-Samarkan relative w-full">
          Silver Jewellery Design
        </h1>
        <div class="flex flex-col md:flex-row w-11/12">
          <div
            v-for="index in catDataSilver"
            :key="index.image"
            class="flex-1 flex"
          >
            <router-link
              to="/Silver"
              class="hover:shadow-lg2 border relative flex flex-row bg-gray-100 rounded-md m-6 p-4 transition-shadow duration-300"
            >
              <p
                class="text-lg md:2xl lg:text-xl font-semibold absolute top-4 left-4"
              >
                {{ index.name }}
              </p>
              <p class="bottom-5 left-5 absolute underline">View All</p>
              <img
                :src="index.image"
                alt=""
                class="w-3/5 ml-auto object-contain"
              />
            </router-link>
          </div>
        </div>
        <router-link to="/Gold" class="text-5xl w-1/12 text-gray-600">
          <fa class="my-auto" :icon="['fas', 'arrow-right']" />
        </router-link>
      </div>
    </section>
    <section class="w-full text-center">
      <h1 class="hmain my-4 px-1 ">Download Our App</h1>
      <div class="w-full flex flex-col md:flex-row">
        <div class="md:w-1/2 text-center">
          <div class="text-center px-3 mt-8">
            <img
              src="~/assets/img/app_ss.jpg"
              alt=""
              class="mx-auto shadow-lg2 rounded md:w-3/4"
            />
          </div>
        </div>
        <div class="md:w-1/2 text-center text-left">
          <div class="mt-6">
            <p class="text-lg md:text-2xl text-left mx-8">
              You can download our app on play store.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=satlaa.desijewellery"
              target="_blank"
              rel="external"
            >
              <img
                src="~/assets/img/play_store.webp"
                alt="Donwnload Desi Jewellery on Play Store"
            /></a>
          </div>
        </div>
      </div>
    </section>
    <!-- About Us  -->
    <section class="flex flex-col md:flex-row my-6">
      <!-- Follow Us  -->
      <div class="md:full text-center text-left">
        <h1 class="hmain mt-12 md:mt-auto md:my-4">About Us</h1>
        <div class="mt-6">
          <p class="text-lg md:text-2xl text-left mx-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo
            deserunt repellendus nam! Quaerat ducimus in vel alias neque hic
            autem rerum nostrum debitis eum! Eum natus doloribus fugit optio
            delectus voluptas at assumenda excepturi eaque cumqdue minima, odio
            nihil sapiente aut aliquam velit ipsam eveniet laboriosam blanditiis
            facilis omnis labore repellat quaerat laborum. In deserunt
            repudiandae minima cumque velit suscipit a delectus amet. Voluptates
          </p>
        </div>
      </div>
    </section>
    <!-- Section for Sign Up  -->

    <section class="bg-primary out-of-box">
      <div
        class="container flex flex-col md:flex-row p-6 text-center md:text-left mx-auto"
      >
        <div class="flex flex-col text-white px-3 md:flex-auto">
          <p class="text-2xl font-semibold">Sign up for our offer Updates.</p>
        </div>
        <div
          class="flex flex-col md:flex-row my-3 md:my-auto md:gap-4 md:flex-auto flex-grow-0"
        >
          <div
            class="border-2 border-white p-1 text-white md:my-3 md:my-auto md:ml-auto flex md:w-2/4 rounded"
          >
            <fa class="h-full my-auto" size="lg" :icon="['fas', 'envelope']" />
            <input
              class="my-auto w-full outline-none pl-2 text-white bg-transparent placeholder-white"
              type="text"
              placeholder="Your Email Address"
            />
          </div>
          <div
            class="border-2 border-white p-1 text-white my-3 md:my-auto md:ml-auto flex md:w-2/4 rounded"
          >
            <fa
              class="h-full my-auto"
              size="lg"
              :icon="['fas', 'phone-square-alt']"
            /><input
              class="my-auto w-full outline-none pl-2 text-white bg-transparent placeholder-white"
              type="text"
              placeholder="Your Mobile Number"
            />
          </div>
          <div class="m-auto">
            <p
              class="bg-black text-white px-4 md:px-10 py-2 rounded-sm ml-auto md:text-xl"
            >
              Subscribe
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data: () => ({
    title: "DesiJewel",

    heroImages: [
      { url: require("~/assets/img/test.jpg"), alt: "", name: "a" },
      { url: require("~/assets/img/test2.jpg"), alt: "", name: "b" },
      { url: require("~/assets/img/test3.jpg"), alt: "", name: "c" }
    ],
    catDataGold: [
      { image: require("~/assets/img/icons/aad.png"), name: "Aad" },
      { image: require("~/assets/img/icons/bala.png"), name: "Jhoomariya" },
      { image: require("~/assets/img/icons/bhujbandh.png"), name: "Bhujbandh" }
    ],
    catDataSilver: [
      { image: require("~/assets/img/icons/aad.png"), name: "Aad" },
      { image: require("~/assets/img/icons/bala.png"), name: "Jhoomariya" },
      { image: require("~/assets/img/icons/baajubandh.png"), name: "Bhujbandh" }
    ],
    showOff: [
      {
        name: "BIS 22k Hallmarked Gold",
        image: require("~/assets/img/bis.webp"),
        para:
          "All our Gold Jewellery is made with 91.6% purity of Gold. Bis hallmark."
      },
      {
        name: "Custom Stone in every Design",
        image: require("~/assets/img/diamond.webp"),
        para: "You can set your own type of color of stone in jewellery."
      },
      {
        name: "Gold Design Lookalike in Silver",
        image: require("~/assets/img/silver.webp"),
        para:
          "We offer every Gold design made in silver with 24k Gold Polish. They look very Similar to gold "
      },
      {
        name: "Always On Time Delievery of Product",
        image: require("~/assets/img/delivery.webp"),
        para: "We commit to our word and deliever the product at time."
      }
    ]
  }),
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      authenticated: "auth/check",
      role: "auth/role"
    })
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
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");
</style>
