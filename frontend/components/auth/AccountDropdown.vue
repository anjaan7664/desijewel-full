<template>
  <div class="relative z-50">
    <div>
      <button
        @click="isOpen = !isOpen"
        class="text-center hidden md:block"
        id="user-menu"
        aria-label="User menu"
        aria-haspopup="true"
      >
        <fa class="mx-1" size="lg" :icon="['fas', 'user-circle']" />
      </button>
    </div>

    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
    >
      <div
        class="py-1 rounded-md bg-white shadow-xs"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <nuxt-link 
         :to="localePath('/admin')"
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Your Profile
        </nuxt-link>
        <nuxt-link 
         :to="localePath('/admin/upload')"
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Upload
        </nuxt-link>
        <button
          @click="logout"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          Sign out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      errors: {}
    };
  },

  methods: {
    async logout() {
      this.$auth
        .logout("laravelSanctum", { data: this.form })
        .then(response => {
          this.$router.push(`auth/login`);
        })
        .catch(({ response }) => {
          this.errors = response.data.errors;
        });
    }
  }
};
</script>
