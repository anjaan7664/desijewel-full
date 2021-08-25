<template id="">
  <footer class="w-full px-6 pt-2 bg-footer-gray">
    <div class="container flex flex-col m-auto text-white">
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
              <a
                href="https://goo.gl/maps/H6h1RVzzA1QzxzB89"
                class="text-lg text-left lg:ml-0 underline"
                target="_blank"
                rel="noopener"
              >
                {{ $t("address") }}
              </a>
            </div>
            <div class="flex my-2">
              <fa
                size="lg"
                :icon="['fas', 'phone-square-alt']"
                class="h-full my-auto mr-5"
              />
              <template>
                <a href="tel:+917597937664">+917597937664</a>
              </template>
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
                class="inline-flex justify-center mt-5 sm:mt-0 sm:justify-start"
              >
                <a
                  href="https://www.facebook.com/Anj7664"
                  class="text-white"
                  target="_blank"
                  rel="noopener"
                >
                  <fa size="2x" :icon="['fab', 'facebook-square']" />
                </a>
                <a
                  href="https://youtube.com/mukesh7664"
                  class="ml-3 text-white"
                  target="_blank"
                  rel="noopener"
                >
                  <fa size="2x" :icon="['fab', 'youtube']" />
                </a>
                <a
                  href="https://www.instagram.com/desijewel.in"
                  class="ml-3 text-white"
                  target="_blank"
                  rel="noopener"
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
                <nuxt-link to="/">
                  Home
                </nuxt-link>
              </li>
              <li class="my-2">
                <nuxt-link to="/about">
                  About Us
                </nuxt-link>
              </li>
              <li class="my-2">
                <nuxt-link to="/contact">
                  Contact Us
                </nuxt-link>
              </li>
              <li class="my-2">
                <nuxt-link to="/">
                  Our Sources
                </nuxt-link>
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
                <nuxt-link to="/">
                  Blogs
                </nuxt-link>
              </li>
              <li class="my-2">
                <nuxt-link to="/disclaimer">
                  Disclaimer
                </nuxt-link>
              </li>
              <li class="my-2">
                <nuxt-link to="/tos">
                  Terms Of Service
                </nuxt-link>
              </li>
              <li class="my-2">
                <nuxt-link to="/privacy-policy">
                  Privacy Policy
                </nuxt-link>
              </li>
              <li class="my-2">
                <a href="http://hbjodhpur.com" target="_blank" rel="noopener"
                  >Live Gold Rate</a
                >
              </li>
              <li class="my-2">
                <nuxtLink v-if="auth.loggedIn" to="/admin">Profile</nuxtLink>
                <nuxtLink v-if="!auth.loggedIn" to="/auth/login"
                  >Login</nuxtLink
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
          <div class="w-1/4 mt-6 md:w-3/4">
            <a
              href="https://play.google.com/store/apps/details?id=satlaa.desijewellery"
              target="_blank"
              rel="noopener"
            >
              <img
                src="~/assets/img/play_store.webp"
                alt="Donwnload Desi Jewellery on Play Store"
            /></a>
          </div>
        </div>
      </section>
      <section>
        <div class="flex flex-col my-4 md:flex-row">
          <div class="flex flex-row  lg:ml-3">
            <p class="mt-2 mb-2">Copyright © 2021</p>
            <a
              href="http://satlaa.com"
              target="_blank"
              rel="noopener"
              class="mt-2 ml-1 mb-2 font-semibold transition-colors duration-300 text-red hover:text-white "
              >Satlaa Tech</a
            >
          </div>
          <!-- Social Media Icon -->
          <div class="flex md:ml-auto">
            <span
              class="inline-flex justify-center mt-5 xl:ml-auto :mt-0 sm:justify-start"
            >
              <a
                href="https://www.facebook.com/Anj7664"
                class="text-white"
                target="_blank"
                rel="noopener"
              >
                <fa size="2x" :icon="['fab', 'facebook-square']" />
              </a>
              <a
                href="https://twitter.com/mukesh7664"
                class="ml-3 text-white"
                target="_blank"
                rel="noopener"
              >
                <fa size="2x" :icon="['fab', 'twitter']" />
              </a>
              <a
                href="https://www.instagram.com/desijewel.in/"
                class="ml-3 text-white"
                target="_blank"
                rel="noopener"
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
import { mapState } from "vuex";
export default {
  name: "TheFooter",
  computed: mapGetters({
    locale: "lang/locale",
    locales: "lang/locales"
  }),
  computed: {
    ...mapState(["auth"]),
    ...mapGetters("lang", {
      locale: "locale",
      locales: "locales"
    })
  },
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
