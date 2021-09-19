<template>
  <div class="text-center">
    <h1
      class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-12"
    >
      {{ $t("Get In Touch") }}
    </h1>
    <section>
      <div
        class="mx-2 lg:mx-24 rounded p-2"
        style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
      >
        <iframe
          class="w-full h-64 lg:h-80"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?q=Jai%20Ambe%20Jewellers%20Bhatinda,%20Jodhpur,%20Rajasthan%20342005%20%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
          style=""
        ></iframe>
      </div>
    </section>
    <section class="flex flex-wrap lg:mx-6 pt-12">
      <div class="w-full md:w-1/2 text-left">
        <div
          class="mx-2 lg:m-6 rounded lg:mx-12 p-4 lg:p-8 mb-10"
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
        >
          <h1 class="font-Merriweather text-center text-3xl text-secondary">
            {{ $t("Reach Us") }}
          </h1>
          <h2
            class="text-primary text-left text-xl font-Montserrat font-bold pt-2"
          >
            {{ $t("Address") }}
          </h2>
          <a
            href="https://goo.gl/maps/1AAYysmvtQKmgZAy8"
            class="text-lg text-left lg:ml-0 underline"
          >
            {{ $t("address") }}
          </a>
          <h2
            class="text-primary text-left text-xl font-Montserrat font-bold pt-3"
          >
            {{ $t("Email") }}
          </h2>
          <a
            href="mailto:Dilipbhootra555@gmail.com"
            class="text-lg text-left underline"
            >mukeshsoni72626@gmail.com</a
          >
          <h2
            class="text-primary text-left text-xl font-Montserrat font-bold pt-5"
          >
            {{ $t("Phone") }}
          </h2>
          <a href="tel:+919829736959" class="text-lg text-left underline"
            >+917597937664</a
          >
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div
          class="mx-2 lg:m-6 rounded lg:mx-12 p-4 lg:p-8 lg:mt-6"
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
        >
          <div class="">
            <h1 class="font-Merriweather text-3xl text-secondary">
              {{ $t("Contact Us") }}
            </h1>
            <div>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                :placeholder="$t('name')"
              />
            </div>
            <div class="mt-2">
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                :placeholder="$t('email')"
              />
            </div>
            <div class="mt-2">
              <textarea
                :placeholder="$t('message')"
                class="w-full h-12 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mt-2">
              <button
              @click="send_email"
                class="uppercase h-16 text-sm font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline transition duration-300 hover:bg-red"
              >
                {{ $t("Send Message") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
  head: {
    title: "Contact Us ",
    // Meta tags
    meta: [
      { hid: "description", name: "description", content: "Contact Us" }
      // ...
    ]
  },
  components: {},
  methods: {
     send_email(){
       this.$swal({
        showConfirmButton: false,
        timer: 1500,
        icon: "success",
        title: "We will contact you soon."
      });
    }
  },
};
</script>


