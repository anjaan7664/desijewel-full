<template>
  <div class="container max-w-full mx-auto py-24 px-6">
    <div class="font-sans">
      <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
          <div class="w-full relative">
            <div class="mt-6">
              <div
                class="mb-5 pb-1border-b-2 text-center font-base text-gray-700"
              ></div>
              <div class="text-center font-semibold text-black">
                {{ $t("login") }}
              </div>

              <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                <div class="mx-auto max-w-lg">
                  <div class="py-2">
                    <span class="px-1 text-sm text-gray-600">{{
                      $t("username")
                    }}</span>
                    <input
                      v-model="form.username"
                      :class="{
                        'is-invalid': form.errors.has('username')
                      }"
                      class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      type="text"
                      name="username"
                    />
                    <div
                      v-if="errors.username"
                      class="text-red-400 text-xs mb-4 mt-2"
                    >
                      {{ errors.username[0] }}
                    </div>

                    <!-- <has-error :form="form" field="username" /> -->
                  </div>
                  <div class="py-2">
                    <span class="px-1 text-sm text-gray-600">{{
                      $t("password")
                    }}</span>
                    <div class="relative">
                      <input
                        v-model="form.password"
                        :class="{
                          'is-invalid': form.errors.has('bg-red')
                        }"
                        placeholder
                        class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                        type="password"
                        name="password"
                      />
                      <div
                        v-if="errors.password"
                        class="text-red-400 text-xs mb-4 mt-2"
                      >
                        {{ errors.password[0] }}
                      </div>

                      <!-- <has-error :form="form" field="password" /> -->
                    </div>
                  </div>
                  <div class="flex justify-between">
                    <label class="block text-gray-500 font-bold my-4">
                      <input
                        v-model="remember"
                        checked
                        type="checkbox"
                        class="leading-loose text-pink-600"
                      />
                      <span class="py-2 text-sm text-gray-600 leading-snug">{{
                        $t("remember_me")
                      }}</span>
                    </label>
                    <label class="text-gray-500 font-bold my-4">
                      <router-link
                        :to="{
                          name: 'password.request'
                        }"
                        class="px-1 text-sm text-gray-600"
                        >{{ $t("forgot_password") }}</router-link
                      >
                    </label>
                  </div>
                  <button
                    :loading="form.busy"
                    class="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                  >
                    Login
                  </button>
                  <!-- <button
                    class="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                  >
                    <nuxtLink :to="localePath('/auth/register')">
                      {{ $t("register") }}
                    </nuxtLink>
                  </button> -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";

export default {
  components: {},

  metaInfo() {
    return { title: this.$t("login") };
  },

  data: () => ({
    form: new Form({
      username: "",
      password: ""
    }),
    errors: {},
    remember: false
  }),
  mounted() {},

  methods: {
    async login() {
      let data;
      try {
        const response = await this.$auth.loginWith("laravelSanctum", {
          data: this.form
        });
        data = response.data;
        this.$store.dispatch("auth/saveToken", {
          token: data.token,
          remember: this.remember
        });
        this.$router.push(`/`);
      } catch (err) {
        this.$swal("Something Went Wrong.", "Try Again", "error");
      }
    }
  },
  head: {
    title: "Home page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  }
};
</script>
