<template id="app">
  <div class="">
    <div class="border border-accent hidden mx-auto md:block mt-4">
      <div class="flex flex-row p-2 px-6 border-black">
        <h2 class="w-1/6 h-full my-auto text-xl font-semibold text-black">
          Sort By Body Part
        </h2>

        <!-- component -->
        <template class="w-5/6 flex">
          <div
            v-for="index in body_part"
            :key="index.part"
            class="z-50 mx-2 flex-1"
          >
            <div
              class="relative inline-block w-full m-1 text-black group z-400"
            >
              <button
                class="flex items-center w-full h-full px-3 py-2 border-2
               bg-white border-secondary rounded-sm outline-none focus:outline-none"
              >
                <img :src="index.icon" alt="" class="w-6" />
                <span
                  class="flex-1 pr-1 text-lg font-semibold capitalize text-black"
                  >{{ $t(index.part) }}</span
                >
                <span>
                  <svg
                    class="w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </span>
              </button>
              <ul
                class="absolute w-full transition duration-150 ease-in-out origin-top transform scale-0 bg-white border rounded-sm shadow-card group-hover:scale-100"
              >
                <li
                  v-for="(design, i) in showByBodyPart(index.part)"
                  :key="i"
                  class="w-full px-3 py-2 rounded-sm hover:bg-gray-100 text-black"
                >
                  <router-link
                    :to="localePath('/Gold/' + design.url)"
                    class="inline-block w-full"
                  >
                    {{ $t(design.name) }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- For mobile version-->
    <div
      class="block w-full bg-white text-accent group md:hidden border my-1 border-black"
    >
      <div class="">
        <accordion>
          <accordion-item>
            <template slot="accordion-trigger">
              <button
                class="flex items-center px-3 py-1 mx-auto bg-white rounded-sm 
              outline-none focus:outline-none min-w-32 text-xl md:text-lg"
              >
                Jewellery By Body Part
              </button>
            </template>
            <template slot="accordion-content">
              <accordion>
                <div
                  v-for="index in body_part"
                  :key="index.part"
                  class="z-50 mx-2"
                >
                  <div
                    class="relative inline-block w-full m-1 text-black z-400"
                  >
                    <accordion-item>
                      <template slot="accordion-trigger">
                        <button
                          class="flex items-center w-full h-full px-3 py-2 border-2
               bg-white border-secondary rounded-sm outline-none focus:outline-none"
                        >
                          <img :src="index.icon" alt="" class="w-6" />
                          <span
                            class="flex-1 pr-1 text-lg font-semibold capitalize text-black"
                          >
                            {{ $t(index.part) }}
                          </span>
                          <span>
                            <svg
                              class="w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                              />
                            </svg>
                          </span>
                        </button>
                      </template>
                      <template slot="accordion-content">
                        <ul
                          class=" w-full transition 
                          duration-150 ease-in-out origin-top
                           bg-white border rounded-sm"
                        >
                          <li
                            v-for="(design, i) in showByBodyPart(index.part)"
                            :key="i"
                            class="w-full px-3 py-2 rounded-sm  text-black border"
                          >
                            <router-link
                              :to="localePath('/Gold/' + design.url)"
                              class="inline-block w-full"
                            >
                              {{ $t(design.name) }}
                            </router-link>
                          </li>
                        </ul>
                      </template>
                    </accordion-item>
                  </div>
                </div>
              </accordion>
            </template>
          </accordion-item>
        </accordion>
      </div>
    </div>
  </div>
</template>
<script>
import Category from "~/assets/json/category.json";
import AccordionItem from "~/components/helpers/accordion-item.vue";
import Accordion from "./helpers/Accordion.vue";
export default {
  components: { Accordion, AccordionItem },
  name: "Category",
  props: ["catMetal", "body_part"],
  data() {
    return {
      designCategory: Category.categories
    };
  },
  created() {},
  computed: {
    myCategory() {
      return this.designCategory.filter(i => i.metal === this.catMetal);
    }
  },
  mounted() {},
  methods: {
    showByBodyPart: function(part) {
      return this.myCategory.filter(i => i.part === part);
    }
  }
};
</script>
<style>
/* since nested groupes are not supported we have to use
     regular css for the nested dropdowns
  */
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

/* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>
