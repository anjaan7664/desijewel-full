<template>
  <div>
    <div v-if="$fetchState.pending">
      <HelpersSpinner />
    </div>
    <div v-else>
      <HelpersCategory catMetal="gold" />
      <!-- Showing image location  -->

      <div>
        <div class="container mx-auto flex flex-row text-lg px-2 py-1">
          <router-link :to="localePath('/gold')" class="text-gray-500">
            Gold
          </router-link>
          <fa
            class="h-full mx-1 my-auto text-gray-400"
            :icon="['fas', 'angle-right']"
          />
          <router-link
            :to="'/gold/' + MainImg.category"
            class="text-gray-900 font-semibold capitalize "
          >
            {{ MainImg.category }}
          </router-link>
          <fa
            class="h-full mx-1 my-auto text-gray-400"
            :icon="['fas', 'angle-right']"
          />
          <p class="">
            {{ MainImg.image }}
          </p>
        </div>
      </div>

      <!-- Main Designs  -->
      <section
        :v-show="MainImg != ''"
        id="app"
        class="flex flex-wrap md:px-2 overflow-hidden text-center bg-white rounded"
      >
        <div class="flex flex-col w-full md:p-2 my-2 md:flex-row md:p-0">
          <!-- Hero Design  -->
          <div class="rounded-t rounded-b-none bg-violet md:w-3/5">
            <div
              class="flex flex-col my-2 md:my-auto md:m-3 rounded-t rounded-b-none min-w-[8]"
            >
              <div class="relative">
                <img
                  data-not-lazy
                  :src="
                    '/designs/images/' +
                      [MainImg.path + MainImg.image + '.' + MainImg.img_type]
                  "
                  :alt="MainImg.alt"
                  :title="MainImg.alt"
                  class="inline-block object-contain rounded shadow-lg2 min-h-[16rem] relative"
                  style="max-height: 75vh;max-width:100%"
                  v-preview
                />
                <div class="absolute right-1 bottom-1c text-white">
                  <p class="text-xs">touch to zoom</p>
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
            </div> -->
            </div>
          </div>
          <!-- Product Detail  -->
          <div class="text-left md:w-2/5">
            <h1 class="text-3xl font-semibold text-primary">Product Detail</h1>
            <ul class="mt-6 space-y-4">
              <li class="border-b border-gray-200">
                <span>
                  <accordion>
                    <accordion-item class="border-b border-gray-200">
                      <!-- Price Breakup -->
                      <template slot="accordion-trigger">
                        <span class="font-bold">Price - </span>
                        <span v-if="MainImg.weight">N/A</span
                        ><span v-else>N/A</span>
                      </template>
                      <template slot="accordion-content">
                        <span>N/A</span>
                      </template>
                    </accordion-item>
                  </accordion>
                </span>
              </li>
              <li class="border-b border-gray-200">
                <span class="font-bold">Weight - </span>
                <span v-if="MainImg.weight" class="text-right">
                  {{ MainImg.weight }}</span
                ><span v-else>N/A</span>
              </li>
              <li class="w-full border-b border-gray-200">
                <span class="font-bold">Purity - </span
                ><span class="mr-auto">22K(91.6)</span>
              </li>
              <!-- <li class="border-b border-gray-200">
                <span class="font-bold">Design No. -</span> <span>434344</span>
              </li> -->
              <li class="capitalize border-b border-gray-200">
                <span class="font-bold">Category -</span>
                <nuxt-link
                  :to="localePath('/Gold/' + MainImg.category)"
                  class="text-xl font-medium underline text-primary"
                >
                  <span>{{ MainImg.category }}</span>
                </nuxt-link>
              </li>
              <li class="capitalize border-b border-gray-200">
                <span class="font-bold">Type -</span>
                <nuxt-link
                  :to="
                    localePath({
                      path: '/gold/' + MainImg.category,
                      query: { subCat: MainImg.sub_category }
                    })
                  "
                  class="text-xl font-medium underline text-primary"
                >
                  <span>{{ MainImg.sub_category }}</span>
                </nuxt-link>
              </li>

              <accordion>
                <accordion-item class="border-b border-gray-200">
                  <template slot="accordion-trigger">
                    <h3>View Product Description</h3>
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
                    <span>N/A </span>
                  </template>
                </accordion-item>
              </accordion>
            </ul>
          </div>
        </div>
      </section>
      <!-- More Designs  -->
      <!-- <section class="out-of-box">
      <div class="container py-2 mx-auto">
        <h2 class="my-4 text-4xl font-bold text-center text-primary">
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
    </section> -->
      <!-- Related Category  -->
      <section class="w-full mx-auto mb-5">
        <!-- <related-category :category="MainImg[2].category" /> -->
      </section>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import AccordionItem from "~/components/helpers/accordion-item.vue";
import Accordion from "~/components/helpers/Accordion.vue";
export default {
  name: "App",
  components: { Accordion, AccordionItem },

  data() {
    return {
      MainImg: {},
      imageQuery: this.$route.params.design
    };
  },

  computed: {
    // ...mapGetters("design", {
    //   MainImg: ["singleDesigns"]
    // }),
    // sameImage: function() {
    //   const ar = this.MainImg;
    //   return ar.filter((_, i) => i !== 2);
    // },
  },
  async fetch() {
    this.MainImg = await this.$axios
      .get("DisplayDesign", {
        params: {
          image: this.$route.params.design
        }
      })
      .then(res => res.data);
  },
  // async asyncData({ params, $axios }) {
  //     const MainImg = await
  //      await $axios.get("DisplayDesign", {
  //     params: {
  //       image: params.design
  //     }
  //   }).then(res => res.data);
  //     return { MainImg }
  //   },

  created() {},

  head() {
    return {
      title: this.MainImg.alt,
      // Meta tags
      meta: [
        { name: "description", content: "", id: "desc" }
        // ...
      ]
    };
  }
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
