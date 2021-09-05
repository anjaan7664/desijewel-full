<template>
  <div class="w-full text-center md:my-16">
    <h1 class="px-1 my-4 hmain">Check Our Designs</h1>
    <!-- Gold Design  -->
    <div
      v-for="(cData, i) in catData"
      :key="i"
      class="relative flex flex-col items-center mx-auto my-3 md:my-8 md:flex-row md:flex-wrap"
    >
      <h1 class="relative md:w-full jewellery_design_tagline font-Samarkan">
        {{ cData.title }}
      </h1>
      <div class="flex flex-col w-11/12 md:flex-row">
        <div
          v-for="index in cData.catDataMetal"
          :key="index.image"
          class="flex flex-1 "
        >
          <nuxt-link
            :to="localePath(cData.url)"
            class="w-full relative flex flex-row p-4 my-6 transition-shadow duration-300 bg-gray-100 border rounded-md hover:shadow-lg2 md:m-4 "
          >
            <p
              class="absolute text-xl font-semibold md:2xl lg:text-xl top-4 left-4"
            >
              {{ index.name }}
            </p>
            <p class="absolute underline bottom-5 left-5">View All</p>
            <img
              :src="require('/assets/img/icons/' + index.image)"
              alt=""
              class="object-contain w-3/5 ml-auto min-h-[8rem]"
            />
          </nuxt-link>
        </div>
      </div>
      <router-link
        :to="localePath(cData.url)"
        class="w-1/12 text-5xl text-gray-600"
      >
        <fa class="my-auto" :icon="['fas', 'arrow-right']" />
      </router-link>
    </div></div
></template>
<script>
export default {
  name: "checkDesigns",
  props: ["catData"]
};
</script>
