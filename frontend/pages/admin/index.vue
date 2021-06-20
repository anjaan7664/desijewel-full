<template>
  <div><h1>tyt</h1></div>
</template>

<script>
export default {
  name: "admin",
  middleware: "auth",
  computed: {},
  created() {
    console.log(this.$auth.user);
  }
};
</script>
