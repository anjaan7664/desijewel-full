<template>
  <div>
    <h1>Hello {{ $auth.user.name }}</h1>
    <div class="flex min-h-[80vh] flex-col">
      <nuxt-link
        v-if="
          $auth.user.role.includes('super') ||
          $auth.user.role.includes('upload') ||
          $auth.user.role.includes('admin')
        "
        :to="localePath('/admin/upload')"
        class="mt-3 block w-full rounded-lg bg-gray-800 px-6 py-3 text-center text-lg font-semibold text-white shadow-xl hover:bg-gray-600 hover:text-white"
        role="menuitem"
      >
        Upload File
      </nuxt-link>
      <nuxt-link
        v-if="$auth.user.role.includes('super')"
        :to="localePath('/admin/setting')"
        class="mt-3 block w-full rounded-lg bg-blue-800 px-6 py-3 text-center text-lg font-semibold text-white shadow-xl hover:bg-blue-600 hover:text-white"
        role="menuitem"
      >
        Admin Setting
      </nuxt-link>

      <nuxt-link
        :to="localePath('/admin/change-password')"
        class="mt-3 block w-full rounded-lg bg-pink-800 px-6 py-3 text-center text-lg font-semibold text-white shadow-xl hover:bg-pink-600 hover:text-white"
        role="menuitem"
      >
        Password change
      </nuxt-link>
      <nuxt-link
        v-if="$auth.user.role.includes('super')"
        :to="localePath('/admin/upld')"
        class="mt-3 block w-full rounded-lg bg-pink-800 px-6 py-3 text-center text-lg font-semibold text-white shadow-xl hover:bg-pink-600 hover:text-white"
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


export default {
  name: "admin",
  middleware: "auth",
 
  created() {},
  methods: {
    logOut() {
      this.$auth.logout();
    },
  },
  created() {
   const token = this.$auth.$storage.getCookie('login_token');
    console.log("token");
  },
};
</script>
