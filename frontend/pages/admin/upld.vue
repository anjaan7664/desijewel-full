<template>
  <div class="">
    <input
      aria-label="perPage"
      name="perPage"
      v-model="DesignConfig.perPage"
      type="perPage"
      class="focus:shadow-outline-blue relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
      placeholder="perPage"
    />
    <input
      aria-label="admin"
      name="admin"
      v-model="DesignConfig.admin"
      type="admin"
      class="focus:shadow-outline-blue relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
      placeholder="admin"
    />
    <t-select
      v-model="DesignConfig.selectedInput"
      placeholder="Select an option"
      :options="[
        { value: 'upload', text: 'Upload' },
        { value: 'delete', text: 'Deleted' },
        { value: 'likes', text: 'likes' },
        { value: 'weight', text: 'Weight' },
      ]"
      variant="demo"
    ></t-select>
    <button
      @click="getAdminUpload"
      class="mt-3 block w-full rounded-lg bg-green-800 px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-green-600 hover:text-white"
    >
      Get Design
    </button>
    <div class="flex flex-wrap justify-between overflow-hidden rounded pt-4 text-center">
      <div
        v-for="design in DesignsList.data"
        :key="design.id"
        class="w-full p-2 md:w-1/3 md:p-6"
      >
        <CardsDesignCard
          :design-data="design"
          cat-metal="gold"
          adminAccess="true"
        />
      </div>
      <client-only>
        <div class="w-full text-center">
          <t-pagination
            :total-items="DesignsList.total"
            :per-page="this.DesignConfig.perPage"
            :limit="9"
            :hide-prev-next-controls="false"
            @change="onPageChange"
            v-model.number="DesignConfig.page"
          />
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "upld",
  middleware: "auth",
  computed: {
    ...mapGetters("admin", { DesignsList: ["DesignsList"] }),
  },
  data() {
    return {
      DesignConfig: {
        perPage: 21,
        page: parseInt(this.$route.query.page) || 1,
        admin: "kishor",
        selectedInput: "",
      },
    };
  },
  methods: {

    async getAdminUpload() {
      await this.$store
        .dispatch("admin/getDesigns", this.DesignConfig)
        .then(() => {
          this.$router.push({
            query: {
              page: this.DesignConfig.page,
            },
          });
        })
        .catch((e) => {
          console.log(e);
        });
      // this.$axios
      //   .get("adminUploaded", {
      //     params: this.DesignConfig,
      //   })
      //   .then((response) => {
      //       this.Designslist = response;
      //   console.log(this.Designslist);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
    async onPageChange() {
      window.scrollTo(0, 0);
      // await this.$fetch();
      this.$router.push({ query: { ...this.$route.query, page: this.page } });
    },
  },
};
</script>
