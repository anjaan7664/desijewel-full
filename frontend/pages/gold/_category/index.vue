<template>
  <div class="">
    <!-- Showing List Of Category -->
    <HelpersCategory catMetal="gold" />
    <div v-if="$fetchState.pending">
      <HelpersSpinner />
    </div>

    <div v-else class="">
      <!-- Showing Main Images -->
      <div class="w-full text-center ">
        <h1 class="my-2 text-2xl md:my-6">
          Showing Image of
          <span class="font-bold capitalize">{{ Category }}</span>
        </h1>
        <div class="flex-row justify-center flex">
          <p class="h-full mx-4 my-auto text-2xl font-bold hidden md:block">
            Sort By:
          </p>
          <ul class="flex flex-row self-center">
            <li
              @click="sorting('')"
              class="px-6 py-2 mx-1 text-white bg-green-500 rounded-md cursor-pointer"
            >
              All
            </li>
            <li
              :class="
                sortingButton('desi')
                  ? 'bg-purple-500 cursor-pointer'
                  : 'bg-gray-500 cursor-not-allowed '
              "
              @click="
                if (sortingButton('desi') == true) {
                  sorting('desi');
                }
              "
              class="px-4 md:px-6 py-2 mx-1 text-white rounded-md "
            >
              Desi
            </li>
            <li
              :class="
                sortingButton('fancy')
                  ? 'bg-yellow-500 cursor-pointer'
                  : 'bg-gray-500 cursor-not-allowed '
              "
              @click="
                if (sortingButton('fancy') == true) {
                  sorting('fancy');
                }
              "
              class="px-3 md:px-6 py-2 mx-1 text-white rounded-md"
            >
              Fancy
            </li>
            <li
              :class="
                sortingButton('kundan')
                  ? 'bg-blue-500 cursor-pointer'
                  : 'bg-gray-500 cursor-not-allowed '
              "
              @click="
                if (sortingButton('kundan') == true) {
                  sorting('kundan');
                }
              "
              class="px-3 md:px-6 py-2 mx-1 text-white rounded-md"
            >
              Kundan
            </li>
          </ul>
        </div>
      </div>
      <div
        id="app"
        ref="divImage"
        class="flex flex-wrap justify-between pt-4 overflow-hidden text-center rounded"
      >
        <div class="w-full h-full p-2 md:w-1/3 md:p-6 relative">
          <div v-if="categoryObject.silver_avail === 'yes'">
            <img
              src="/shoppers/shoppers_silver.webp"
              alt="Designing Jewel Contact Card"
              class="w-full object-fill min-w-full"
            />
          </div>
          <div v-else>
            <img
              src="/shoppers/shoppers1.webp"
              alt="Designing Jewel Contact Card"
              class="w-full object-fill min-w-full"
            />
          </div>
          <h1>Contact for more info - "7597937664"</h1>
        </div>
        <div
          v-for="design in DesignsList.data"
          :key="design.id"
          class="w-full p-2 md:w-1/3 md:p-6"
        >
          <CardsDesignCard :design-data="design" cat-metal="gold" />
        </div>
      </div>

      <client-only>
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
      </client-only>
    </div>
    <section class="w-full mx-auto mb-8">
      <!-- <related-category :category="Category" /> -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryList from "~/assets/json/category.json";

export default {
  watchQuery: ["page"],
  name: "App",
  scrollToTop: true,
  components: {},
  data() {
    return {
      Category: this.$route.params.category,
      Sub_Category: this.$route.query.subCat || "",
      page: parseInt(this.$route.query.page) || 1,
      Type: "",
      Sort: "",
      Tag: "",
      id: "",
      perPage: 20,
      body_part: [
        { icon: require("~/assets/img/svg/head.svg"), part: "head" },
        { icon: require("~/assets/img/svg/ear.svg"), part: "ear" },
        { icon: require("~/assets/img/svg/nose.svg"), part: "nose" },
        { icon: require("~/assets/img/svg/neck.svg"), part: "neck" },
        { icon: require("~/assets/img/svg/hand.svg"), part: "hand" }
      ]
    };
  },
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
    categoryObject: function() {
      return CategoryList.categories.find(i => i.url === this.Category);
    },
    ...mapGetters("design", {
      // Commented when trying for ssr
      DesignsList: ["DesignsList"]
    }),
    
  },

  created() {},

  async fetch() {
    await this.$store.dispatch("design/getDesigns", this.DesignConfig);
  },

  methods: {
    async onPageChange() {
      window.scrollTo(0, 0);
      await this.$fetch();
      this.$router.push({ query: { ...this.$route.query, page: this.page } });
    },
    async sorting(sort) {
      this.Sub_Category = sort;
      this.page = 1;
      this.onPageChange();
    },
    sortingButton: function(sort) {
      return this.categoryObject.sorting.includes(sort);
    }
  },
  head() {
    return {
      title:this.categoryObject.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.categoryObject.description,
        }
      ]
    };
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
