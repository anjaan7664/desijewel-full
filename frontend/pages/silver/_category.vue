<template>
  <div class="">

    <!-- Showing List Of Category -->
    <Category catMetal="gold"  />

    <div v-if="isLoading">
      <spinner />
    </div>

    <div v-else class="">
      <!-- Showing Main Images -->
      <div class="w-full text-center">
        <h1
          class="my-2
                 md:my-6 text-2xl"
        >
          Showing Image of
          <span class="font-bold capitalize">{{ Category }}</span>
        </h1>
        <div class="flex-row justify-center hidden md:flex">
          <p class="h-full my-auto text-2xl font-bold mx-4">
            Sort By:
          </p>
          <ul class="flex flex-row">
            <li
              @click="sorting('')"
              class="rounded-md px-6 py-2 mx-1 text-white bg-green-500 cursor-pointer"
            >
              All
            </li>
            <li
              @click="sorting('desi')"
              class="rounded-md px-6 py-2 mx-1 text-white bg-purple-500 cursor-pointer"
            >
              Desi
            </li>
            <li
              @click="sorting('kundan')"
              class="rounded-md px-6 py-2 mx-1 text-white bg-pink-500 cursor-pointer"
            >
              Kundan
            </li>
            <li
              @click="sorting('fancy')"
              class="rounded-md px-6 py-2 mx-1 text-white bg-blue-500 cursor-pointer"
            >
              Fancy
            </li>
          </ul>
        </div>
      </div>
      <div
        id="app"
        ref="divImage"
        class="flex flex-wrap justify-between pt-4 rounded overflow-hidden text-center"
      >
        <div
          v-for="design in DesignsList.data"
          :key="design.id"
          class="w-full md:w-1/3 p-2 md:p-6"
        >
          <nuxt-link
            :to="
              localePath({
                path: '/design/' + design.image,
                query: { subCat: design.sub_category }
              })
            "
          >
            <designCard :design-data="design" />
          </nuxt-link>
        </div>
      </div>
      <div class="w-full text-center">
        <t-pagination
          :total-items="DesignsList.total"
          :per-page="this.perPage"
          :limit="9"
          :hide-prev-next-controls="false"
          @change="onPageChange"
          v-model.number="page"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Category from "~/assets/json/category.json";

export default {
  scrollToTop: true,
  components: {},
  name: "App",
  data: () => ({
 designCategory: Category.categories,
      Category: this.$route.params.category,
      Sub_Category: "",
      Type: "",
      Sort: "",
      Tag: "",
      id: "",
      page: 1,
      perPage: 12

  }),
  computed: {
    DesignConfig() {
      const filters = {
        perPage: this.perPage,
        page: this.page
      };
      if (this.Category) {
        filters.Category = this.$route.params.category;
      }
      if (this.Sub_Category) {
        filters.Sub_Category = this.Sub_Category;
      }
      if (this.Type) {
        filters.Type = this.Type;
      }
      if (this.Sort) {
        filters.Sort = this.Sort;
      }
      if (this.Tag) {
        filters.Tag = this.Tag;
      }
      return {
        filters
      };
    },
    ...mapGetters("design", {
      DesignsList: ["DesignsList"],
      isLoading: "isLoading"
    }),
    relatedPicker() {
      this.randomize();
      return this.catImage.splice(0, 4);
    },
    sorting(){
      return this.designCategory.filter(i=> i.url === this.Category)
    }
  },
  watch: {
    $route() {
      this.fetchDesigns();
    }
  },

  created() {
    this.page = parseInt(this.$route.query.page) || 1;
    this.Sub_Category = this.$route.query.subCat || "";
    this.fetchDesigns();
  },

  mounted() {},

  methods: {
    fetchDesigns() {
      this.$store.dispatch("design/getDesigns", this.DesignConfig);

      // if (this.$store.getters.ComingFromDirect === false) {
      //   this.$store.commit('SET_COMING_DIRECT', true)
      // }
    },
    onPageChange() {
      // this.loading1 = true;
      this.$router.push({ query: { ...this.$route.query, page: this.page } });
      this.fetchDesigns();
      window.scrollTo(0, 0);
    },
    sorting: function(sort) {
      this.$router.push({ query: { ...this.$route.query, subCat: sort } });
      this.Sub_Category = sort;
      this.page = 1;
    }
  }
};
</script>
<style>
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
</style>
