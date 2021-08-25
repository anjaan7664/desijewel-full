<template>
  <div>
    <section class="w-full text-center my-4">
      <h1 class="px-1 my-4 hmain ">Download Our App</h1>
      <div class="flex flex-col w-full md:flex-row">
        <div class="text-center md:w-1/2">
          <div class="px-3 mt-8 text-center">
            <img
              src="~/assets/img/app_ss.jpg"
              alt=""
              class="mx-auto rounded shadow-lg2 md:w-3/4"
            />
          </div>
        </div>
        <div class="text-center md:w-1/2 md:text-left">
          <div class="mx-8 mt-6">
            <p class="text-lg text-left md:text-2xl ">
              We have made an android app for user to easily access our design.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=satlaa.desijewellery"
              target="_blank"
              rel="external"
            >
              <img
                src="~/assets/img/play_store.webp"
                class="w-1/2 md:w-1/3"
                alt="Donwnload Desi Jewellery on Play Store"
            /></a>
          </div>
        </div>
      </div>
    </section>
    <!-- About Us  -->
    <!-- <section class="flex flex-col my-6 md:flex-row">
      <div class="text-left text-center md:full">
        <h1 class="mt-12 hmain md:mt-auto md:my-4">About Us</h1>
        <div class="mt-6">
          <p class="mx-8 text-lg text-left md:text-2xl">
            We are making gold jewellery for past many generations.
          </p>
        </div>
      </div>
    </section> -->
  </div>
</template>
<script>
export default {
  name: "extras"
};
</script>
