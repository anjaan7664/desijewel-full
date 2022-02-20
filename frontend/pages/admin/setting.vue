<template>
  <div class="container-2">
    <form
      style="padding: 10px; margin: 0px auto 0px auto; max-width: 350px"
      enctype="multipart/form-data"
      method="post"
    >
      <h1 class="text-3xl">Account Activation</h1>
      <h3>Enter Email/Username</h3>
      <input
        v-model="username"
        class="text-md block w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
        type="text"
        name="username"
      />
      <button
        class="mt-3 block w-full rounded-lg bg-gray-800 px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
      >
        Activate
      </button>

      <h2 id="acc_act" style="margin-left: 15px"></h2>
    </form>
    <br />
    <form
      style="padding: 10px; margin: 0px auto 0px auto; max-width: 350px"
      enctype="multipart/form-data"
      method="post"
    >
      <h1 class="text-3xl">Make Admin</h1>
      <h3>Enter Email/Username</h3>
      <input
        v-model="username"
        class="text-md block w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
        type="text"
        name="username"
      />
      <img
        id="cc_load"
        src="/logos/loader.gif"
        style="display: none"
        class="btn_setting"
        alt="Loading"
        title="Loading"
      />
      <button
        class="mt-3 block w-full rounded-lg bg-gray-800 px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
      >
        Make Admin
      </button>
      <h2 id="make_adm" style="margin-left: 15px"></h2>
    </form>
    <br />
    <form
      style="padding: 10px; margin: 0px auto 0px auto; max-width: 350px"
      enctype="multipart/form-data"
      method="post"
    >
      <h1 class="text-3xl">Set Password</h1>
      <input
        v-model="username"
        class="text-md block w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
        type="text"
        name="username"
        placeholder="Username"
      />
      <input
        v-model="password"
        class="text-md block w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 placeholder-gray-600 shadow-md focus:border-gray-600 focus:bg-white focus:placeholder-gray-500 focus:outline-none"
        type="text"
        name="password"
        placeholder="Password"
      />

      <button
        class="mt-3 block w-full rounded-lg bg-gray-800 px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-black hover:text-white"
      >
        Set Password
      </button>
      <h2 id="set_pass" style="margin-left: 15px"></h2>
    </form>
    <br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  name: "setting",
  middleware: "auth",
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style></style>
