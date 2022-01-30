<template>
  <div>
    <!-- Showing image location  -->

    <div>
      <div class="container mx-auto flex flex-col py-1 text-lg">
        <div class="flex flex-row border-l-4 border-[#ae1dd2] bg-gray-100 p-1">
          <router-link
            :to="localePath('/' + metal)"
            class="capitalize text-black"
            >{{ metal }}</router-link
          >
          <fa
            class="mx-1 my-auto h-full font-semibold text-gray-600"
            :icon="['fas', 'angle-right']"
          />
          <router-link
            :to="'/' + metal + '/' + imageCategoryNew"
            class="capitalize text-blue-600"
            >{{ translate(imageCategoryNew) }}</router-link
          >
        </div>
        <div class="my-2 border-l-4 border-[#1D9DD2] text-lg">
          <h1 class="font-sm md:font-2xl ml-1 font-bold capitalize leading-5">
            {{
              MainImg.title == ""
                ? MainImg.image
                : MainImg.title.replace(/-|\s/g, " ")
            }}
          </h1>
        </div>
      </div>
    </div>

    <!-- Main Designs  -->
    <section
      :v-show="MainImg != ''"
      id="app"
      class="flex flex-wrap overflow-hidden rounded bg-white text-center md:px-2"
    >
      <div class="my-2 flex w-full flex-col md:flex-row md:p-0">
        <!-- Hero Design  -->
        <div class="bg-violet rounded-t rounded-b-none md:w-3/5">
          <div
            class="my-2 flex min-w-[8] flex-col rounded-t rounded-b-none md:m-3 md:my-auto"
          >
            <div class>
              <img
                data-not-lazy
                :src="
                  '/designs/images/' +
                  [MainImg.path + MainImg.image + '.' + MainImg.img_type]
                "
                :alt="designAlt"
                :title="designAlt"
                class="shadow-lg2 relative inline-block rounded object-contain md:max-h-[75vh] md:min-h-[15rem] md:max-w-[100%]"
                v-preview
              />
              <div class="mt-2 flex flex-row">
                <p class="text-sm md:text-base">Touch to zoom</p>
                <a
                  class="text-grey-darkest ml-auto inline-flex items-center rounded bg-gray-300 py-1 px-2 text-base font-bold hover:bg-gray-400 md:text-lg"
                  :href="
                    '/designs/images/' +
                    [MainImg.path + MainImg.image + '.' + MainImg.img_type]
                  "
                  target="_blank"
                  download
                >
                  <svg
                    class="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span class="text-gray-800">Download</span>
                </a>
              </div>
            </div>

            <!-- <div class="flex w-3/5 mx-auto">
              <div
                v-for="index in sameDesign"
                :key="index.image"
                class="flex-1 p-2"
              >
                <img
                  class="object-cover w-full h-full"
                  :src="'/designs/images/' + index.image"
                  alt
                >
              </div>
            </div>-->
          </div>
        </div>
        <!-- Product Detail  -->
        <div class="text-left md:w-2/5 md:px-6 lg:px-4">
          <h1 class="text-primary text-3xl font-semibold">Product Detail</h1>
          <ul class="mt-6 space-y-2 md:space-y-4">
            <li class="border-b border-gray-200">
              <span>
                <accordion>
                  <accordion-item class="border-b border-gray-200">
                    <!-- Price Breakup -->
                    <template slot="accordion-trigger">
                      <span class="font-bold">Price -</span>
                      <span v-if="MainImg.weight">N/A</span>
                      <span v-else>N/A</span>
                    </template>
                    <template slot="accordion-content">
                      <span>N/A</span>
                    </template>
                  </accordion-item>
                </accordion>
              </span>
            </li>
            <li class="flex border-b border-gray-200">
              <span class="font-bold">Weight -</span>
              <div class="ml-auto">
                <span v-if="MainImg.weight" class="text-right"
                  >{{ MainImg.weight }} gm</span
                >
                <span v-else>N/A</span>
              </div>
            </li>
            <li class="flex w-full border-b border-gray-200">
              <span class="font-bold">Purity -</span>

              <span class="ml-auto">{{
                metal == "gold" ? "22K(91.6)" : "92.5"
              }}</span>
            </li>
            <!-- <li class="border-b border-gray-200">
                <span class="font-bold">Design No. -</span> <span>434344</span>
            </li>-->
            <li class="flex border-b border-gray-200 capitalize">
              <span class="font-bold">Category -</span>
              <nuxt-link
                :to="localePath('/' + metal + '/' + imageCategoryNew)"
                class="ml-auto text-xl font-normal text-blue-600 underline"
              >
                <span>{{ translate(imageCategoryNew) }}</span>
              </nuxt-link>
            </li>
            <li
              :class="metal == 'gold' ? 'block' : 'hidden'"
              class="flex border-b border-gray-200 capitalize"
            >
              <span class="font-bold">Type -</span>
              <nuxt-link
                :to="
                  localePath({
                    path: '/' + metal + '/' + imageCategoryNew,
                    query: { subCat: MainImg.sub_category },
                  })
                "
                class="ml-auto text-xl font-normal text-blue-600 underline"
              >
                <span>{{ MainImg.sub_category }}</span>
              </nuxt-link>
            </li>

            <accordion>
              <accordion-item class="border-b border-gray-200">
                <template slot="accordion-trigger">
                  <h3 class="text-lg">Product Description</h3>
                </template>
                <template slot="accordion-content">
                  <span>{{ MainImg.alt }}</span>
                </template>
              </accordion-item>

              <accordion-item class="border-b border-gray-200">
                <template slot="accordion-trigger">
                  <h3 class="hidden">Tags</h3>
                </template>
                <template slot="accordion-content">
                  <span>N/A</span>
                </template>
              </accordion-item>
            </accordion>
          </ul>
          <div
            class="mt-8 border p-2 border-gray-300 rounded shadow-lg bg-gray-100"
          >
            <div v-if="designObject && designObject.silver_avail === 'yes'">
              <p class="text-lg md:text-xl border-l-4 border-[#8a1dd2] pl-2">
                This design is also availale in silver with   <span
                  class="text-[#FFD900] font-bold"
                  style="-webkit-text-stroke: 0.3px black"
                  >Gold</span
                > plated.
                You can get this design at low price.
              </p>
            </div>
            <div
              class="flex flex-row border-l-4 border-[#32d21d] pl-2 mt-1 text-gray-700"
            >
              <p class=" ">For More Info & to Buy Call :-</p>
              &nbsp;
              <a href="tel:+919680398417" class="text-blue-600 underline">
                +919680398417
              </a>
              &nbsp;
            </div>
          </div>
          <!-- <nuxt-link
              :to="localePath('/' + metal + '/' + imageCategoryNew)"
              class="ml-auto text-xl font-normal text-blue-600 underline"
            >
              <span>Explore all design similar to this</span>
            </nuxt-link>-->
        </div>
      </div>
    </section>
    <!-- More Designs  -->
    <!-- <section class="out-of-box">
      <div class="container py-2 mx-auto">
        <h2 class="my-4 text-4x<Nl font-bold text-center text-primary">
          More Designs
        </h2>
        <div
          class="flex flex-wrap md:flex-row similar"
          v-if="sameImage && sameImage.length >= 2"
        >
          <div
            v-for="(index, i) in sameImage"
            :key="i"
            class="w-1/2 md:m-3 md:flex-1"
          >
            <nuxt-link
              :to="localePath('/gold/design/' + index.image)"
              class="relative"
            >
              <div
                class="relative m-2 border border-black shadow-lg2 pb-1/1 shine-effect"
              >
                <img
                  class="absolute object-cover w-full h-full"
                  :src="
                    '/designs/images/' +
                      [index.path + index.image + '.' + index.img_type]
                  "
                />
              </div>
              <p class="font-medium text-center similar-p"></p>
            </nuxt-link>
          </div>
        </div>
        <div class="w-full my-6 text-center">
          <router-link
            :to="localePath('/gold/' + MainImg[2].category)"
            class="px-6 py-3 mx-auto text-xl font-semibold text-center text-white capitalize transition duration-500 ease-in-out rounded-md bg-gradient-to-r from-pink-600 to-purple-500 hover:from-purple-500 hover:to-pink-500"
          >
            View All Designs
          </router-link>
        </div>
      </div>
    </section>-->
    <!-- Related Category  -->
    <section v-if="metal === 'gold' " class="mx-auto mb-5 w-full">
      <HelpersRelatedCategory :category="MainImg.category" :metal="metal" />
    </section>
  </div>
</template>
<script>
import AccordionItem from "~/components/helpers/accordion-item.vue";
import Accordion from "~/components/helpers/Accordion.vue";
export default {
  name: "App",
  components: { Accordion, AccordionItem },
  props: ["metal", "MainImg", "imagtranslateeQuery"],
  data() {
    return {};
  },
  created() {

  },

  computed: {
    designAlt() {
      if (this.$i18n.locale == "en") {
        return this.MainImg.alt;
      }
      return this.MainImg.alt_hn;
    },

    imageCategoryNew() {
      return this.metal == "gold"
        ? this.MainImg.category
        : this.MainImg.category.replace("silver_", "");
    },
    designObject() {
      return this.$store.getters["design/categoryObject"](
        this.imageCategoryNew
      );
    },
  },
  methods: {
    translate(word) {
      let newWord = 'category.' + word;
      return this.$t(newWord);
    },
  },
};
</script>
<style>
.similar div:nth-of-type(1) p:after {
  content: "<<";
}
.similar div:nth-of-type(2) p:after {
  content: "Previous";
}
.similar div:nth-of-type(3) p:after {
  content: "Next";
}
.similar div:nth-of-type(4) p:after {
  content: ">>";
}
</style>
