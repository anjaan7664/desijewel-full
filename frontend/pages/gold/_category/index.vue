<template>
  <div class="">
    <!-- Showing List Of Category -->
    <HelpersCategory catMetal="gold" />
    <div v-if="$fetchState.pending">
      <HelpersSpinner />
    </div>

    <div v-else class="">
      <!-- Showing Main Images -->
      <div class="w-full text-center">
        <h1 class="my-2 text-2xl md:my-6">
          Showing Image of
          <span class="font-bold capitalize">{{ Category }}</span>
        </h1>
        <div class="flex flex-row justify-center">
          <p class="mx-4 my-auto hidden h-full text-2xl font-bold md:block">
            Sort By:
          </p>
          <ul class="flex flex-row self-center">
            <li
              @click="sorting('')"
              class="mx-1 cursor-pointer rounded-md bg-green-500 px-6 py-2 text-white"
            >
              All
            </li>
            <li
              :class="
                sortingButton('desi')
                  ? 'cursor-pointer bg-purple-500'
                  : 'cursor-not-allowed bg-gray-500 '
              "
              @click="
                if (sortingButton('desi') == true) {
                  sorting('desi');
                }
              "
              class="mx-1 rounded-md px-4 py-2 text-white md:px-6"
            >
              Desi
            </li>
            <li
              :class="
                sortingButton('fancy')
                  ? 'cursor-pointer bg-yellow-500'
                  : 'cursor-not-allowed bg-gray-500 '
              "
              @click="
                if (sortingButton('fancy') == true) {
                  sorting('fancy');
                }
              "
              class="mx-1 rounded-md px-3 py-2 text-white md:px-6"
            >
              Fancy
            </li>
            <li
              :class="
                sortingButton('kundan')
                  ? 'cursor-pointer bg-blue-500'
                  : 'cursor-not-allowed bg-gray-500 '
              "
              @click="
                if (sortingButton('kundan') == true) {
                  sorting('kundan');
                }
              "
              class="mx-1 rounded-md px-3 py-2 text-white md:px-6"
            >
              Kundan
            </li>
          </ul>
        </div>
      </div>
      <div
        id="app"
        ref="divImage"
        class="flex flex-wrap justify-between overflow-hidden rounded pt-4 text-center"
      >
        <div class="relative h-full w-full p-2 md:w-1/3 md:p-6">
          <div v-if="categoryObject.silver_avail === 'yes'">
            <img
              src="/shoppers/shoppers_silver.webp"
              alt="Designing Jewel Contact Card"
              class="w-full min-w-full object-fill"
              v-preview
            />
          </div>
          <div v-else>
            <img
              src="/shoppers/shoppers1.webp"
              alt="Designing Jewel Contact Card"
              class="w-full min-w-full object-fill"
              v-preview
            />
          </div>
          <h4 class="my-2">
            Contact for more info -
            <a href="tel:+919680398417" class="text-blue-600 underline">
              +919680398417
            </a>
          </h4>
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
        <Accordion class="mt-4 flex w-full">
          <AccordionItem class="w-full text-center">
            <template slot="accordion-trigger">
              <p class="mx-auto text-2xl">Description</p>
            </template>
            <template slot="accordion-content">
              <span class="mt-2"
                >In this page we are showing Design of indian ethnic jewellery,
                Rajasthani desi {{ Category }} made in 22 carat gold for ladies,
                worn around their neck . Handcrafted by fine jewellers . Fine
                gold work with multicolored stone/diamond/nagina . Weight of
                these designs is based on it's appearance , actual weight can be
                lower and higher .
              </span>
            </template>
          </AccordionItem>
        </Accordion>
      </client-only>

      <HelpersRelatedCategory :category="Category"  metal="gold"/>
    </div>
 
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryList from "~/assets/json/category.json";
import Accordion from "~/components/helpers/Accordion.vue";
import AccordionItem from "~/components/helpers/accordion-item.vue";

export default {
  watchQuery: ["page"],
  name: "App",
  scrollToTop: true,
  components: { Accordion, AccordionItem },
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
        { icon: require("~/assets/img/svg/neck.svg"), part: "neck" },
        { icon: require("~/assets/img/svg/hand.svg"), part: "hand" },
        { icon: require("~/assets/img/svg/nose.svg"), part: "others" },
      ],
    };
  },
  computed: {
    DesignConfig() {
      const filters = {
        perPage: this.perPage,
        page: this.page,
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
        filters,
      };
    },
    categoryObject: function () {
      return CategoryList.categories.find(
        (i) => i.url === this.Category && i.metal == "gold"
      );
    },
    ...mapGetters("design", {
      // Commented when trying for ssr
      DesignsList: ["DesignsList"],
    }),
  },

  created() {},

  async fetch() {
    await this.$store
      .dispatch("design/getDesigns", this.DesignConfig)
      .catch((e) => {
        this.$error({ statusCode: 404, message: "Page not found" });
      });
  },

  methods: {
    async onPageChange() {
      window.scrollTo(0, 0);
      await this.$fetch();
      this.$router.push({ query: { ...this.$route.query, page: this.page } });
    },
    sorting(sort) {
      this.Sub_Category = sort;
      this.page = 1;
      this.onPageChange();
    },
    sortingButton: function (sort) {
      return this.categoryObject.sorting.includes(sort);
    },
  },
  head() {
    return {
      title: this.categoryObject.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.categoryObject.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.categoryObject.keywords,
        },
      ],
    };
  },
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
