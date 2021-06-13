<template>
  <div class="relative">
    <div
      class="relative flex flex-col overflow-hidden transition duration-150
       bg-white rounded rounded-t rounded-b-none shadow-neumorph group"
    >
      <div class="relative md:pb-1/1">
        <img
          :src="
            `../designs/images/` +
              [designData.path + designData.image + '.' + designData.img_type]
          "
          alt
          class="md:absolute h-full w-full object-cover rounded
           transition duration-300 ease-in-out transform
   "
        />
      </div>
    </div>
    <div
      class="relative py-2 mt-auto text-2xl font-semibold text-black md:text-xl lg:text-2xl"
    >
      <ul class="inline-block mb-4 text-xl text-left">
        <li v-if="designData.weight" class="">
          <span class="font-bold">Price - </span><span>150000</span>
        </li>
      </ul>
      <p class="absolute top-0 text-xl">
        <nuxt-link
          :to="
            localePath({
              path: '/gold/' + designData.category,
              query: { subCat: designData.sub_category }
            })
          "
          class="text-blue-400 underline capitalize"
        >
          <span>{{ designData.sub_category }}</span>
        </nuxt-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "DesignCard",
  props: ["designData"]
};
</script>
<style lang="scss">
.group:hover div img {
  @apply scale-110 -translate-y-1;
}
.group:hover div div {
  @apply opacity-100;
}
</style>

