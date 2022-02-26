<template>
  <div class="w-full text-center md:my-16">
    <h1 class="hmain my-4 px-1">Check Our Designs</h1>
    <!-- Gold Design  -->
    <div
      v-for="(cData, i) in catData"
      :key="i"
      class="relative mx-auto my-3 flex flex-col items-center md:my-8 md:flex-row md:flex-wrap"
    >
      <h1 class="jewellery_design_tagline font-Samarkan relative md:w-full">
        {{ cData.title }}
      </h1>
      <div class="flex w-11/12 flex-col md:flex-row">
        <div
          v-for="index in cData.catDataMetal"
          :key="index.image"
          class="flex flex-1"
        >
          <nuxt-link
            :to="localePath(cData.url)"
            class="relative w-full h-full p-4"
          >
            <div
              class="shadow-neumorph relative m-2 flex transform flex-col rounded-2xl bg-gray-100 transition-all duration-300 md:m-4 md:hover:-translate-y-3"
            >
              <div class="pb-1/1 relative">
                <img
                  loading="lazy"
                  :src="require('/assets/img/icons/' + index.image)"
                  :alt="index.name"
                  class="shadowed absolute mx-auto h-full w-full object-contain p-2"
                />
              </div>
              <div
                class="mt-auto py-2 text-2xl font-semibold text-black md:text-xl lg:text-2xl"
              >
                <h2>{{ index.name }}</h2>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <router-link
        :to="localePath(cData.url)"
        class="w-1/12 text-5xl text-gray-600"
      >
        <fa class="my-auto" :icon="['fas', 'arrow-right']" />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "checkDesigns",
  props: ["catData"],
};
</script>
