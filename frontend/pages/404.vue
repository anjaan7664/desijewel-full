<template>
  <div>
    <div class="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
      <p class="font-sans text-white error-text">404</p>
    </div>

    <div class="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
      <span class="opacity-50">Take me back to</span>
      <router-link to="/" class="border-b">Desijewel.in</router-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'basic',
  name: "NotFound",
};
</script>
<style>
.error-text {
  font-size: 130px;
}

@media (min-width: 768px) {
  .error-text {
    font-size: 220px;
  }
}
</style>