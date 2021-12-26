<template>
  <div class="min-h-[80vh]">
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
  created() {
  }
};
</script>
