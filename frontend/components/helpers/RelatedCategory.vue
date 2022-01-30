<template>
  <div class="mt-6 ">
    <h2 class="my-4 text-center text-green-600 text-3xl font-semibold">Explore Similar Jewellery</h2>
    <CardsMetalCard :myCategory="myCategory" :catMetal="metal" />
  </div>
</template>
<script>
export default {
  name: "relatedCategory",
  props: ["category", "metal"],
  data() {
    return {
      myCategory: [],
    };
  },
  created() {},
  computed: {
     imageCategoryNew() {
      return this.metal == "gold"
        ? this.category
        : this.category.replace("silver_", "");
    },
  },
  async fetch() {
    var designCategory = await this.$store.getters["design/category"];
    var result = designCategory.find((i) => i.url === this.imageCategoryNew && i.metal === this.metal);
    var newRelatedArray = designCategory.filter(
      (i) =>
        i.part === result.part &&
        i.metal === result.metal &&
        i.url != result.url
    );

    this.myCategory = this.shuffle(newRelatedArray);
  },

  methods: {
    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array.splice(0, 4);
    },
  },
};
</script>
