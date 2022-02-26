<template>
  <div>
    <div>
      <form @submit.prevent="register" @keydown="form.onKeydown($event)">
        <div class="mx-auto max-w-lg">
          <div class="py-2">
            <span class="px-1 text-sm text-gray-600">{{ $t("password") }}</span>
            <div class="relative">
              <input
                v-model="form.password"
                :class="{ 'is-invalid': form.errors.has('password') }"
                placeholder
                class="text-md block w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
                type="password"
                name="password"
              />

              <has-error :form="form" field="password" />
            </div>
          </div>
          <div class="py-2">
            <span class="px-1 text-sm text-gray-600">{{ $t("password") }}</span>
            <div class="relative">
              <input
                v-model="form.password_confirmation"
                :class="{
                  'is-invalid': form.errors.has('password_confirmation'),
                }"
                class="text-md block w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
                type="password"
                name="password_confirmation"
              />

              <has-error :form="form" field="password_confirmation" />
            </div>
          </div>

          <button
            :loading="form.busy"
            class="mt-3 block w-full rounded-lg bg-gray-800 px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
          >
            {{ $t("register") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Form from "vform";

export default {
  data: () => ({
    form: new Form({
      password: "",
      password_confirmation: "",
    }),
    mustVerifyEmail: false,
  }),
  methods: {
    async changePassword() {
      this.$axios
        .post("", { data: this.form })
        .then((response) => {
          this.$swal("Password Change Successfully", "Okay", "success");
        })
        .catch(({ response }) => {
          this.$swal("Something Went Wrong.", "Try Again", "error");
        });
    },
  },
};
</script>
