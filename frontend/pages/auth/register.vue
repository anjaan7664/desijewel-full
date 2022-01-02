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

              <form
                @submit.prevent="register"
                @keydown="form.onKeydown($event)"
              >
                <div class="mx-auto max-w-lg">
                  <div class="py-2">
                    <span class="px-1 text-sm text-gray-600">{{
                      $t("username")
                    }}</span>
                    <input
                      v-model="form.username"
                      :class="{ 'is-invalid': form.errors.has('username') }"
                      class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      type="text"
                      name="username"
                    />
                    <has-error :form="form" field="username" />
                  </div>
                  <div class="py-2">
                    <span class="px-1 text-sm text-gray-600">{{
                      $t("name")
                    }}</span>
                    <input
                      v-model="form.name"
                      :class="{ 'is-invalid': form.errors.has('name') }"
                      class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      type="text"
                      name="name"
                    />
                    <has-error :form="form" field="name" />
                  </div>
                  <div class="py-2">
                    <span class="px-1 text-sm text-gray-600">{{
                      $t("email")
                    }}</span>
                    <input
                      v-model="form.email"
                      :class="{ 'is-invalid': form.errors.has('email') }"
                      class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      type="email"
                      name="email"
                    />
                    <has-error :form="form" field="email" />
                  </div>

                  <div class="py-2">
                    <span class="px-1 text-sm text-gray-600">{{
                      $t("password")
                    }}</span>
                    <div class="relative">
                      <input
                        v-model="form.password"
                        :class="{ 'is-invalid': form.errors.has('password') }"
                        placeholder
                        class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                        type="password"
                        name="password"
                      />

                      <has-error :form="form" field="password" />
                    </div>
                  </div>
                  <div class="py-2">
                    <span class="px-1 text-sm text-gray-600">{{
                      $t("password")
                    }}</span>
                    <div class="relative">
                      <input
                        v-model="form.password_confirmation"
                        :class="{
                          'is-invalid': form.errors.has('password_confirmation')
                        }"
                        class="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                        type="password"
                        name="password_confirmation"
                      />

                      <has-error :form="form" field="password_confirmation" />
                    </div>
                  </div>

                  <button
                    :loading="form.busy"
                    class="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                  >
                    {{ $t("register") }}
                  </button>
                  <button
                    class="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                  >
                    <nuxtLink :to="localePath('/auth/login')">
                      {{ $t("login") }}
                    </nuxtLink>
                  </button>
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
  middleware: ["guest"],
  metaInfo() {
    return { title: this.$t("register") };
  },

  data: () => ({
    form: new Form({
      name: "",
      username: "",
      email: null,
      password: "",
      password_confirmation: ""
    }),
    mustVerifyEmail: false
  }),

  methods: {
    async register() {
      let data;
      // Register the user.
      await this.$axios.$get("sanctum/csrf-cookie");

      try {
        const response = await await this.$axios.post("register", this.form);
        data = response.data;
        console.log(data);
        this.$store.dispatch("auth/saveToken", {
          token: data.token,
          remember: this.remember
        });

        this.$router.push(`/`);
      } catch (err) {
        this.$swal("Something Went Wrong.", "Try Again", "error");
      }
    }
  }
};
</script>
