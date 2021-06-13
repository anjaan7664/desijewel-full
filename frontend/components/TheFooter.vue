<template id="">
  <footer class="bg-footer-gray w-full px-6 pt-2">
    <div class="text-white container flex flex-col m-auto">
      <section class="flex flex-col md:flex-row">
        <!-- Contact Us -->
        <div class="flex-1 pt-6">
          <h2 class="text-3xl">
            Contact Us
          </h2>
          <div class="mt-6">
            <div class="flex my-2">
              <fa
                size="lg"
                :icon="['fas', 'map-marker-alt']"
                class="h-full my-auto mr-5"
              />
              <p class="md:pr-16">
                Jai Ambe Jewellers, Kheteshwar Market, Jhalamand Circle, Jodhpur
              </p>
            </div>
            <div class="flex my-2">
              <fa
                size="lg"
                :icon="['fas', 'phone-square-alt']"
                class="h-full my-auto mr-5"
              />
              <a href="tel:+917597937664">+917597937664</a>
            </div>
            <div class="flex my-2">
              <fa
                size="lg"
                :icon="['fas', 'envelope']"
                class="h-full my-auto mr-5"
              />
              <a href="mailto:Mukeshsoni72626@gmail.com"
                >Mukeshsoni72626@gmail.com</a
              >
            </div>
            <div class="flex mt-4">
              <span
                class="inline-flex mt-5 sm:mt-0 justify-center sm:justify-start"
              >
                <a
                  href="https://www.facebook.com/Anj7664"
                  class="text-white"
                  target="_blank"
                >
                  <fa size="2x" :icon="['fab', 'facebook-square']" />
                </a>
                <a
                  href="https://youtube.com/mukesh7664"
                  class="ml-3 text-white"
                  target="_blank"
                >
                  <fa size="2x" :icon="['fab', 'youtube']" />
                </a>
                <a
                  href="https://www.instagram.com/desijewel.in"
                  class="ml-3 text-white"
                  target="_blank"
                >
                  <fa size="2x" :icon="['fab', 'instagram']" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <!-- Information -->
        <div class="flex-1 pt-6">
          <h2 class="text-3xl">
            Information
          </h2>
          <div class="mt-6">
            <ul>
              <li class="my-2">
                <router-link to="/">
                  Home
                </router-link>
              </li>
              <li class="my-2">
                <router-link to="/About">
                  About Us
                </router-link>
              </li>
              <li class="my-2">
                <router-link to="/Contact">
                  Contact Us
                </router-link>
              </li>
              <li class="my-2">
                <router-link to="/">
                  Our Sources
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- Customer Service -->
        <div class="flex-1 pt-6">
          <h2 class="text-3xl">
            Customer Service
          </h2>
          <div class="mt-6">
            <ul>
              <li class="my-2">
                <router-link to="/">
                  Blogs
                </router-link>
              </li>
              <li class="my-2">
                <router-link to="/Disclaimer">
                  Disclaimer
                </router-link>
              </li>
              <li class="my-2">
                <router-link to="/TOS">
                  Terms Of Service
                </router-link>
              </li>
              <li class="my-2">
                <router-link to="/Privacy-Policy">
                  Privacy Policy
                </router-link>
              </li>
              <li class="my-2">
                <a href="http://hbjodhpur.com" target="_blank"
                  >Live Gold Rate</a
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- Download App -->
        <div class="flex-1 pt-6">
          <h2 class="text-3xl">
            Download Our App
          </h2>
          <div class="mt-6 w-3/4 md:w-3/4">
            <a
              href="https://play.google.com/store/apps/details?id=satlaa.desijewellery"
              target="_blank"
              rel="external"
            >
              <img
                src="~/assets/img/play_store.webp"
                alt="Donwnload Desi Jewellery on Play Store"
            /></a>
          </div>
        </div>
      </section>
      <section>
        <div class="flex flex-col md:flex-row my-4">
          <div class="flex flex-row lg:ml-3 mx-auto">
            <p class="m-2">Copyright © 2021</p>
            <a
              href="http://satlaa.com"
              target="_blank"
              class="mt-2 mb-2 text-red transition-colors duration-300 font-semibold hover:text-white "
              >Satlaa Tech</a
            >
          </div>
          <!-- Social Media Icon -->
          <div class="flex md:ml-auto">
            <span
              class="inline-flex mt-5 sm:ml-auto sm:mt-0 justify-center sm:justify-start"
            >
              <a
                href="https://www.facebook.com/Anj7664"
                class="text-white"
                target="_blank"
              >
                <fa size="2x" :icon="['fab', 'facebook-square']" />
              </a>
              <a
                href="https://twitter.com/mukesh7664"
                class="ml-3 text-white"
                target="_blank"
              >
                <fa size="2x" :icon="['fab', 'twitter']" />
              </a>
              <a
                href="https://www.instagram.com/desijewel.in/"
                class="ml-3 text-white"
                target="_blank"
              >
                <fa size="2x" :icon="['fab', 'instagram']" />
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "TheFooter",
  computed: mapGetters({
    locale: "lang/locale",
    locales: "lang/locales"
  }),

  methods: {
    setLocale(locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale);

        this.$store.dispatch("lang/setLocale", { locale });
      }
    }
  }
};
</script>
