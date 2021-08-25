<template>
  <div class="relative w-full">
    <div class="w-full text-right">
      <button
        v-if="
          !open.setting &&
            !open.weight &&
            !open.alt &&
            !open.hit &&
            !open.rename
        "
        @click="open.setting = !open.setting"
        class="ml-auto btn bg-accent"
      >
        Edit Image
      </button>
    </div>
    <div v-if="open.setting" class="flex flex-wrap">
      <button
        @click="(open.weight = !open.weight), (open.setting = !open.setting)"
        class="btn-m btn bg-blue-500"
      >
        Weight
      </button>
      <button @click="moveDesign" class="btn-m btn bg-pink-500">
        Move
      </button>
      <button @click="deleteDesign" class="btn-m btn bg-yellow-500">
        Delete
      </button>
      <button
        @click="(open.hit = !open.hit), (open.setting = !open.setting)"
        class="btn-m btn bg-green-500"
      >
        Likes
      </button>
      <button @click="updateSubCat" class="btn-m btn bg-purple-500">
        Type
      </button>
      <button
        @click="(open.alt = !open.alt), (open.setting = !open.setting)"
        class="btn-m btn bg-indigo-500"
      >
        Alt
      </button>
      <button @click="swipeDesign" class="btn-m btn bg-gray-500">
        Swipe
      </button>
      <button
        @click="(open.rename = !open.rename), (open.setting = !open.setting)"
        class="btn-m btn bg-yellow-500"
      >
        Rename
      </button>
      <button @click="open.setting = !open.setting" class="btn-m btn bg-red">
        Cancel
      </button>
    </div>
    <!-- Likes  -->
    <div :class="open.hit ? 'block' : 'hidden'" class="flex flex-wrap">
      <form @submit.prevent="updateHit" class="flex-wrap flex w-2/3">
        <input
          v-model="hit"
          placeholder="Hit"
          class="shadow appearance-none border rounded  py-2 px-3
   text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2"
          type="number"
        />
        <button type="submit" class="w-1/2 btn bg-green-700">
          Set
        </button>
      </form>
      <button
        @click="(open.setting = !open.setting), (open.hit = !open.hit)"
        class="w-1/3 btn bg-red"
      >
        Cancel
      </button>
    </div>
    <!-- Alt  -->
    <div :class="open.alt ? 'block' : 'hidden'" class="flex flex-wrap">
      <form @submit.prevent="updateAlt" class="flex-wrap flex w-full">
        <input
          v-model="alt"
          name="altInput"
          class="shadow appearance-none border rounded  py-2 px-3
   text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full "
          type="text"
        />
        <input
          v-model="alt_hn"
          name="altInputHn"
          class="shadow appearance-none border rounded  py-2 px-3
   text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full "
          type="text"
        />
        <button type="submit" value="Submit" class="w-full btn bg-green-700">
          Save
        </button>
      </form>
      <button
        @click="(open.setting = !open.setting), (open.alt = !open.alt)"
        class="w-full btn bg-red"
      >
        Cancel
      </button>
    </div>

    <!-- Rename  -->
    <div :class="open.rename ? 'block' : 'hidden'" class="flex flex-wrap">
      <form @submit.prevent="renameDesign" class="flex-wrap flex w-full">
        <input
          v-model="title"
          name=""
          class="shadow appearance-none border rounded  py-2 px-3 my-1
   text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
          type="text"
        />
        <button type="submit" value="Submit" class="w-full btn bg-green-700">
          Save
        </button>
      </form>
      <button
        @click="(open.setting = !open.setting), (open.rename = !open.rename)"
        class="w-full btn bg-red"
      >
        Cancel
      </button>
    </div>
    <!-- Weight  -->
    <div :class="open.weight ? 'block' : 'hidden'" class="flex flex-wrap">
      <form @submit.prevent="updateWeight" class="flex-wrap flex w-2/3">
        <input
          v-model="weight"
          placeholder="Weight"
          class="shadow appearance-none border rounded  py-2 px-3
   text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2 "
          type="text"
        />
        <button type="submit" class="w-1/2 btn bg-green-700">Save</button>
      </form>
      <button
        @click="(open.setting = !open.setting), (open.weight = !open.weight)"
        class="w-1/3 btn bg-red"
      >
        Cancel
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "edit",
  middleware: "auth",
  props: ["designData"],
  data() {
    return {
      open: {
        setting: false,
        weight: false,
        alt: false,
        hit: false,
        rename: false
      },
      weight: "",
      alt: this.designData.alt,
      alt_hn: this.designData.alt_hn,
      hit: "",
      category: "",
      sub_category: "",
      id: "",
      title: "",
      categories: {
        aad: "aad",
        aawla: "aawla",
        bhujbandh: "bhujbandh",
        baajubandh: "baajubandh",
        bangles: "bangles",
        bala: "bala",
        bracelet: "bracelet",
        baali: "baali",
        chain: "chain",
        chikset: "chik-set",
        "desi-aad": "desi-aad",
        hathphool: "hathphool",
        jhoomariya: "jhoomariya",
        "jodha-haar": "jodha-haar",
        kandora: "kandora",
        kanti: "kanti",
        mangalsutra: "mangalsutra",
        "mohan-mala": "mohan-mala",
        nath: "nath",
        necklace: "necklace",
        nogariya: "nogariya",
        punach: "punach",
        pendal: "pendal",
        "rakhdi-set": "rakhdi-set",
        "gents-ring": "gents-ring",
        "ladies-ring": "ladies-ring",
        "ram-navmi": "ram-navmi",
        "sohan-kanthi": "sohan-kanthi",
        sheeshphool: "sheeshphool",
        thusi: "thusi",
        timaniya: "timaniya",
        teeka: "teeka",
        tops: "tops"
      }
    };
  },

  computed: {
    ...mapGetters("design", {
      // Commented when trying for ssr
      designCategory: ["category"]
    })
  },
  created() {},
  methods: {
    // Updating the weight of design.
    async updateWeight() {
      let formData = new FormData();
      formData.append("weight", this.weight);
      formData.append("image", this.designData.image);
      formData.append("editWhat", "weight");
      await this.$axios
        .$post("http://localhost:8000/api/edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.open.weight = false;
          this.showToast("Weight Set Successfully.", "success");
          this.$emit("updateWeight", this.weight);
        })
        .catch(error => {
          this.$swal("Something Went Wrong.", "Try Again", "error");
        });
    },
    // Deleting the design.
    async deleteDesign() {
      await this.$swal({
        title: "Delete This Image ?",
        showCancelButton: true,
        confirmButtonText: "Delete This Design",
        confirmButtonColor: "#8E1600"
      }).then(result => {
        if (result.isConfirmed) {
          let formData = new FormData();
          formData.append("image", this.designData.image);
          formData.append("editWhat", "delete");
          this.$axios
            .$post("http://localhost:8000/api/edit", formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            })
            .then(response => {
              this.open.setting = false;
              // this.$emit("removeDesign", true);
              this.showToast("This Image has Deleted", "success");
            })
            .catch(error => {
              this.$swal("Something Went Wrong.", "Try Again", "error");
            });
        }
      });
    },
    // Moving The Design to another category.

    async moveDesign() {
      const { value: category } = await this.$swal({
        title: "Select field validation",
        input: "select",
        inputOptions: this.categories,
        inputPlaceholder: "Select a Category",
        showCancelButton: true,
        inputValidator: value => {
          return new Promise(resolve => {
            if (value !== "") {
              resolve();
            } else {
              resolve("You need to select");
            }
          });
        }
      });

      if (category) {
        let formData = new FormData();
            this.showToast("You selected: " + category, "success");

        formData.append("category", category);
        formData.append("image", this.designData.image);
        formData.append("editWhat", "move");
        this.$axios
          .$post("http://localhost:8000/api/edit", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {
            this.open.setting = false;
            // this.$emit("removeDesign", true);
            this.showToast("You selected: " + category, "success");
          })
          .catch(error => {
            this.$swal("Something Went Wrong.", "Try Again", "error");
          });
      }
    },
    // Updating Alt Text of image.
    async updateAlt() {
      let formData = new FormData();
      formData.append("alt", this.alt);
      formData.append("alt_hn", this.alt_hn);
      formData.append("image", this.designData.image);
      formData.append("editWhat", "alt");

      await this.$axios
        .$post("http://localhost:8000/api/edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.showToast("Alt Set Success", "success");
          this.open.alt = false;
        })
        .catch(error => {
          this.$swal("Something Went Wrong.", "Try Again", "error");
        });
    },
    // Changing the title of design
    async renameDesign() {
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("image", this.designData.image);
      formData.append("editWhat", "rename");

      await this.$axios
        .$post("http://localhost:8000/api/edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.open.rename = false;
          this.showToast("Weight Set Successfully.", "success");
          this.$emit("updateHit", this.hit);
        })
        .catch(error => {
          this.$swal("Something Went Wrong.", "Try Again", "error");
        });
    },
    // Updating the hit of design
    async updateHit() {
      let formData = new FormData();
      formData.append("hit", this.hit);
      formData.append("image", this.designData.image);
      formData.append("editWhat", "hit");

      await this.$axios
        .$post("http://localhost:8000/api/edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.open.hit = false;
          this.showToast("Likes Set Successfully.", "success");
          this.$emit("updateHit", this.hit);
        })
        .catch(error => {
          this.$swal("Something Went Wrong.", "Try Again", "error");
        });
    },
    // Updating the Sub Category
    async updateSubCat() {
      const { value: subCat } = await this.$swal({
        title: "Select field validation",
        input: "select",
        inputOptions: {
          desi: "Desi",
          fancy: "Fancy",
          kundan: "Kundan"
        },
        inputPlaceholder: "Select a Type",
        showCancelButton: true,
        inputValidator: value => {
          return new Promise(resolve => {
            if (value !== "") {
              resolve();
            } else {
              resolve("You need to select");
            }
          });
        }
      });

      if (subCat) {
        let formData = new FormData();

        formData.append("type", subCat);
        formData.append("image", this.designData.image);
        formData.append("editWhat", "type");
          await this.$axios
          .$post("http://localhost:8000/api/edit", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {
            this.open.setting = false;
            this.showToast("You selected: " + subCat, "success");
          })
          .catch(error => {
            this.$swal("Something Went Wrong.", "Try Again", "error");
          });
      }
    },
    // Adding new image in place of this design.
    async swipeDesign() {
      this.showToast("We will add this feature later.", "warning");
    },

    showToast: function(msg, icon) {
      // I could use these as Vue-Mixins
      this.$swal({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 1000,
        icon: icon,
        title: msg
      });
    }
  },
  mounted() {}
};
</script>
<style scoped>
.btn-m {
  @apply m-1;
  width: calc(33.333333% - 0.5rem);
}
</style>
