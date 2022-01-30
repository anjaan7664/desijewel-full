<template>
  <div class="w-full h-full my-2 md:my-8 text-center md:mt-16">
    <h1 class="my-2 hmain">Why We Are Best</h1>
    <div class="">
      <div class="flex flex-wrap">
        <div
          v-for="index in showOff"
          :key="index.name"
          class="flex flex-row p-4 md:w-1/2"
        >
          <div class="flex-grow-0 w-3/12 md:w-1/5">
            <img :src="require('/assets/img/' + index.image)" :alt="index.alt" class="" />
          </div>
          <div class="flex flex-col w-9/12 md:w-4/5 px-4 text-left">
            <h2 class="text-xl md:text-2xl font-Ledger leading-6">
              {{ index.name }}
            </h2>
            <p class="text-base text-gray-600 md:text-lg">
              {{ index.para }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div></template
>
<script>
export default {
  name: "whyBest",
  props: ["showOff"]
};
</script>
