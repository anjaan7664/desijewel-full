<template>
  <div>
    <div class="flex min-h-[80vh] flex-col">
      <nuxt-link
        :to="localePath('/admin/upload')"
        class="text-center mt-3 block w-full rounded-lg bg-gray-800 px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-gray-600 hover:text-white"
        role="menuitem"
      >
        Upload File
      </nuxt-link>
      <nuxt-link
        :to="localePath('/admin/setting')"
        class="text-center mt-3 block w-full rounded-lg bg-blue-800 px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-blue-600 hover:text-white"
        role="menuitem"
      >
       Admin Setting
      </nuxt-link>
     
 <nuxt-link
        :to="localePath('/admin/upld')"
        class="text-center mt-3 block w-full rounded-lg bg-pink-800 px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-pink-600 hover:text-white"
        role="menuitem"
      >
       Admin Uploaded
      </nuxt-link>
   

      <button
         @click="logOut"
        class="mt-3 block w-full rounded-lg bg-green-800 px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-green-600 hover:text-white"
      >
        Log out
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "admin",
  middleware: "auth",
  computed: {
    ...mapState(["auth"]),
  },
created() {
  
  console.log(this.$store.getters['auth/token']);
},
  methods: {
    logOut() {
      this.$auth.logout();
    }
  },
  created() {},
};
</script>
