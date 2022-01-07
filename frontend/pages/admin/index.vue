<template>
  <div class="min-h-[80vh]">
    <nuxt-link
      :to="localePath('/admin/upload')"
      href="#"
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      role="menuitem"
    >
      Upload
    </nuxt-link>
    <h1>{{ auth.user.email }}</h1>
    <button @click.prevent="logOut">Log out</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "admin",
  middleware: "auth",
  computed: {
    ...mapState(["auth"])
  },

  methods: {
    logOut() {
      this.$auth.logout();
    }
  },
  created() {}
};
</script>
