<template>
  <div class="bg-primary out-of-box">
    <div
      class="container flex flex-col p-6 mx-auto text-center md:flex-row md:text-left"
    >
      <div class="flex flex-col px-3 text-white md:flex-auto">
        <p class="text-2xl font-semibold">Sign up for our offer Updates.</p>
      </div>
      <div
        class="flex flex-col flex-grow-0 my-3 md:flex-row md:my-auto md:gap-4 md:flex-auto"
      >
        <div
          class="flex p-1 text-white border-2 border-white rounded md:my-auto md:ml-auto md:w-2/4"
        >
          <fa class="h-full my-auto" size="lg" :icon="['fas', 'envelope']" />
          <input
            class="w-full pl-2 my-auto text-white placeholder-white bg-transparent outline-none"
            type="text"
            placeholder="Your Email Address"
          />
        </div>
        <div
          class="flex p-1 my-3 text-white border-2 border-white rounded md:my-auto md:ml-auto md:w-2/4"
        >
          <fa
            class="h-full my-auto"
            size="lg"
            :icon="['fas', 'phone-square-alt']"
          /><input
            class="w-full pl-2 my-auto text-white placeholder-white bg-transparent outline-none"
            type="text"
            placeholder="Your Mobile Number"
          />
        </div>
        <div class="m-auto">
          <p
            class="px-4 py-2 ml-auto text-white bg-black rounded-sm md:px-10 md:text-xl"
          >
            Subscribe
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "offerUpdate"
};
</script>
