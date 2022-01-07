<template id="app">
  <header
    class="bg-primary top-0 w-full py-1 md:py-auto lg:px-6 md:mb-0"
    style="z-index: 100; width:100%;"
  >
    <div
      class="md:py-2 font-sans antialiased container mx-auto text-white my-1 md:my-0 md:mx-auto relative h-full md:mb-auto flex justify-between flex-wrap items-center"
    >
      <nuxt-link :to="localePath('/')" class="" @click="toggle">
        <img
          src="~/assets/img/svg/logo_new.svg"
          class="w-28 md:w-32 ml-2 lg:ml-auto"
          alt="Desijewel logo"
        />
      </nuxt-link>
      <div class="gap-3 text-3xl md:hidden flex items-center">
     
        <div class="flex gap-2">
          <div
            v-if="$auth.loggedIn"
            class="h-full my-auto lg:p-2 text-3xl flex gap-2"
          >
            <AuthAccountDropdown />
          </div>
          <button
            class="flex items-center px-3 py-2 border-2 rounded text-white border-teal-light  mr-1 sm:mr-3"
            @click="toggle"
          >
            <svg
              class="fill-current w-6 h-6 "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="font-semibold w-full block flex-grow md:flex md:flex-initial md:w-auto items-center mt-8 md:mt-0 h-full ml-2 lg:ml-auto"
      >
        <div class="h-full my-auto">
          <ul class="flex flex-col md:flex-row">
            <li class="mx-2 py-2 lg:py-auto lg:mx-4">
              <nuxt-link :to="localePath('/')">
                {{ $t('home') }}
              </nuxt-link>
            </li>
            <li class="mx-2 py-2 lg:py-auto lg:mx-4">
              <nuxt-link :to="localePath('/gold')">
                {{ $t('gold') }}
                 <fa class="" :icon="['fas', 'caret-down']" />
              </nuxt-link>
            </li>
            <li class="mx-2 py-2 lg:py-auto lg:mx-4 h-full">
              <nuxt-link :to="localePath('/silver')">
                {{$t('silver')}}
                <fa class="" :icon="['fas', 'caret-down']" />
              </nuxt-link>
            </li>
            <li class="mx-2 py-2 lg:py-auto lg:mx-4">
              <nuxt-link :to="localePath('/contact')">
                {{ $t('contact') }}
              </nuxt-link>
            </li>
            <li class="mx-2 py-2 lg:py-auto lg:mx-4 hidden lg:block">
              <nuxt-link :to="localePath('/about')">
                {{$t('about')}}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="h-full flex flex-col md:flex-row">
          <!-- Search Bar  -->
          <!-- <div
            class="bg-white h-full p-2 text-primary rounded-full my-3 md:my-auto"
          >
            <input
              class="my-auto outline-none pl-2 text-black w-32 lg:w-36"
              type="text"
              placeholder="Search Design"
            />
            <fa class="h-full my-auto" size="lg" :icon="['fas', 'search']" />
          </div> -->
          
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TheHeader",

  data() {
    return {
      open: false
    };
  },
  watch: {
    $route() {
      this.open = false;
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");

      // Redirect to login.
      this.$nuxt.push({ name: "login" });
    }
  },
  computed: mapGetters({
    authenticated: "auth/check",
    user: "auth/user"
  })
};
</script>
