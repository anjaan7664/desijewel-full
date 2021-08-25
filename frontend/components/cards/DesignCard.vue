<template>
  <div class="relative designComponent">
    <div
      class="relative flex flex-col overflow-hidden transition duration-150
       bg-white rounded rounded-t rounded-b-none shadn group"
      style="box-shadow:8px 12px 16px 0 rgba(0, 0, 0, 0.25),-6px -6px 25px 0 rgba(222, 47, 69, 0.1)"
    >
      <div class="relative md:pb-4/6">
        <nuxt-link
          :to="
            localePath({
              path: '/design/' + designData.image,
              query: { subCat: designData.sub_category }
            })
          "
        >
          <img
            :src="
              `../designs/images/` +
                [designData.path + designData.image + '.' + designData.img_type]
            "
            :alt="designData.alt"
            class="lazy-img-fadein md:absolute h-full w-full object-cover rounded
           transition duration-300 ease-in-out transform
   "
          />
        </nuxt-link>
      </div>
    </div>
    <div
      class="relative py-2 mt-auto text-2xl font-semibold text-black md:text-xl lg:text-2xl"
    >
      <ul class="inline-block mb-4 text-xl text-left">
        <li v-show="designData.weight" class="">
          <!-- <span class="font-bold">Price - </span><span>150000</span> -->
          <span class="font-bold">Weight </span
          ><span>{{ designData.weight }}</span>
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
      <p v-if="$auth.loggedIn" class="absolute top-0 right-0 text-xl">
        <span>{{ designData.hit }}</span>
      </p>
    </div>
    <AdminEdit
      v-if="$auth.loggedIn"
      :designData="designData"
      @updateWeight="updateWeight"
      @updateHit="updateHit"
      @removeDesign="removeDesign"
    />
  </div>
</template>
<script>
export default {
  name: "DesignCard",
  props: ["designData"],
  methods: {
    updateWeight: function(e) {
      this.designData.weight = e;
    },
    updateHit: function(e) {
      this.designData.hit = e;
    },
    removeDesign: function(e) {
      if (e == true) {
        document.getElementsByClassName('designComponent').classList.add('hidden')
      }
    }
  }
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
