<template>
  <div>
    <div class="m-4">
      <form
        @submit.prevent="uploadImage"
        class="flex flex-wrap w-full shadow-lg border border-black"
        action="/upload"
        ref="form"
      >
        <div class="w-full md:w-1/2 p-2">
          <div class="relative pb-1/1">
            <img :src="imageSrc" class="w-full absolute h-full" />
          </div>
        </div>

        <div class="flex flex-col w-full md:w-1/2 p-2">
          <v-select
            placeholder="Select Category"
            class="mt-2"
            :options="category"
            v-model="designCategory"
          ></v-select>
          <v-select
            placeholder="Select Type"
            class="mt-2"
            :options="type"
            v-model="designType"
          ></v-select>
          <input
            placeholder="likes"
            class="w-full  text-black border-2 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            v-model="designLikes"
          />

          <button
            @click="removeSelf"
            class="uppercase h-12 text-lg font-bold tracking-wide bg-primary text-gray-100 mt-2 p-3 rounded-lg w-full cursor-pointer"
            type="button"
          >
            Cancel
          </button>

          <button
            ref="upload_button"
            :disabled="this.designCategory == null || submitted"
            type="submit"
            id="formButton"
            class="disabled:bg-gray-500 disabled:cursor-not-allowed uppercase mt-2 h-16 text-xl font-bold tracking-wide bg-blue-700 text-gray-100 p-3 rounded-lg w-full transition duration-300 hover:opacity-80 cursor-pointer"
          >
            Upload
          </button>
          <div class="relative pt-1">
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200"
            >
              <div
                :style="{ width: uploadPercentage + '%' }"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
              ></div>
            </div>
          </div>

          <!-- <HelpersBaseProgress :percentage="60" class=""/> -->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import "vue-select/dist/vue-select.css";
import BaseProgress from "../helpers/BaseProgress.vue";
export default {
  name: "fileUpload",
  middleware: "auth",
  props: [
    "file",
    "type",
    "category",
    "parentDesignCategory",
    "parentDesignType",
    "uniqueID"
  ],
  data() {
    return {
      designCategory: null,
      designType: null,
      designLikes: null,
      uploadPercentage: 0,
      submitted: false
    };
  },
  computed: {
    imageSrc: function() {
      return URL.createObjectURL(this.file);
    },
    isDisabled: function() {
      return !this.designCategory;
    }
  },
  created() {},
  methods: {
    setValueCat: function(value) {
      this.designCategory = value;
    },
    setValueType: function(value) {
      this.designType = value;
    },
    setAllSubmit: function() {
      if (
        (this.designCategory != null && this.designType != null) ||
        this.submitted == false
      ) {
        this.$refs.upload_button.click();
      }
    },
    async uploadImage() {
      this.submitted = true;
      let catDataFromJson = this.$store.getters["design/categoryObject"](
        this.designCategory
      );
      if (this.designType == null) {
        this.designType = "desi";
      }
      if (this.designLikes == null) {
        this.designLikes = 100;
      }
      let formData = new FormData();
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        },
        onUploadProgress: function(progressEvent) {
          this.uploadPercentage = parseInt(
            Math.round((progressEvent.loaded / progressEvent.total) * 100)
          );
        }.bind(this)
      };
      formData.append("image", this.file);
      formData.append("likes", this.designLikes);
      formData.append("category", this.designCategory);
      formData.append("type", this.designType);
      formData.append("path", catDataFromJson.path);
      formData.append("alt", catDataFromJson.alt);
      formData.append("alt_hn", catDataFromJson.alt_hn);
      formData.append("user", this.$auth.user.name);
      await this.$axios
        .post("upload", formData, config)
        .then(response => {
          this.showToast("Photo Uploaded.", "success");
          // Delete coomponent when upload complete
          this.$emit("delete-row");
        })
        .catch(error => {
          this.submitted = false;
          (this.uploadPercentage = 0),
            this.showToast("Something Went Wrong.", "error");
        });
    },
    removeSelf: function() {
      this.$swal({
        title: "Remove This Image ?",
        showCancelButton: true,
        confirmButtonText: "Remove It",
        confirmButtonColor: "#8E1600"
      }).then(result => {
        if (result.isConfirmed) {
          //    this.$destroy();
          // this.$el.parentNode.removeChild(this.$el);
          this.$emit("delete-row", this.uniqueID);
          console.log(this.uniqueID);
        }
      });
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
  components: { BaseProgress }
};
</script>
