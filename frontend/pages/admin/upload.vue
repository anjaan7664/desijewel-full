<template>
  <div class="min-h-[80vh]">
    <div class="w-full text-center">
      <label
        class="w-full flex flex-row items-center px-4 py-4 bg-purple-600 mt-2 
        rounded-md cursor-pointer 
        hover:bg-purple-400 text-3xl text-center
        duration-150 mx-auto "
      >
        <span class="mt-2 text-3xl text-white mx-auto my-auto"
          >Select Files</span
        >
        <input
          type="file"
          accept="image/*"
          name="images"
          @change="uploadImage"
          id="images"
          multiple
          class="hidden"
        />
      </label>
    </div>

    <client-only>
      <div class="flex flex-col md:flex-row gap-x-3">
        <v-select
          placeholder="Select Category For All"
          class="mt-2 md:w-1/2 text-xl bg-green-200 text-black"
          :options="category"
          v-model="parentDesignCategory"
          @input="updateCategory"
        ></v-select>
        <v-select
          placeholder="Select Type For All"
          class="mt-2 w-full md:w-1/2 text-xl bg-green-200 text-black"
          :options="type"
          v-model="parentDesignType"
          @input="updateType"
        ></v-select>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2" v-for="file in files" :key="file.id">
        
            <AdminFileUpload
              :uniqueID="file.id"
              :file="file.image"
              :type="type"
              :category="category"
              @delete-row="deleteThisRow(file)"
              ref="files"
            />
        
        </div>
      </div>

      <button
        @click="submitAllForm"
        class="mb-6 uppercase mt-2 h-16 text-xl font-bold tracking-wide bg-accent text-gray-100 p-3 rounded-lg w-full transition duration-300 hover:opacity-80 cursor-pointer"
      >
        Submit All
      </button>
    </client-only>
  </div>
</template>
<script>
export default {
  name: "admin",
  middleware: "admin",
  data: function() {
    return {
      id: null,
      files: [],
      parentDesignType: null,
      parentDesignCategory: null,
      type: ["desi", "fancy", "kundan"],
      category: [
        "aad",
        "aawla",
        "bhujbandh",
        "baajubandh",
        "bangles",
        "bala",
        "bracelet",
        "baali",
        "chain",
        "chik-set",
        "desi-aad",
        "hathphool",
        "jhoomariya",
        "jodha-haar",
        "kandora",
        "kanti",
        "mangalsutra",
        "nath",
        "necklace",
        "nogariya",
        "punach",
        "pendal",
        "rakhdi-set",
        "gents-ring",
        "ladies-ring",
        "ram-navmi",
        "sohan-kanthi",
        "sheeshphool",
        "thusi",
        "timaniya",
        "teeka"
      ]
    };
  },
  components: {},
  created() {},
  methods: {
    uploadImage(event) {
      let file = event.target.files;
      for (let i = 0; i < file.length; i++) {
        this.files.push({ image: file[i], id: i }); //here you set your id to an unique number! (could be this.id you have to try)
      }
    },
    updateCategory: function(category) {
      for (let i = 0; i < this.files.length; i++) {
        this.$refs.files[i].setValueCat(category);
      }
    },
    updateType: function(type) {
      for (let i = 0; i < this.files.length; i++) {
        this.$refs.files[i].setValueType(type);
      }
    },
    submitAllForm: function(){
 for (let i = 0; i < this.files.length; i++) {
        this.$refs.files[i].setAllSubmit();
      }
    },
    deleteThisRow: function(file) {
      var indexDelete = this.files
        .map(x => {
          return x.id;
        })
        .indexOf(file.id);

      this.files.splice(indexDelete, 1);
    }
  }
};
</script>
<style scoped>
.fade-enter-active {
  transition: opacity 1.5s;
}

.fade-leave-active {
  opacity: 0;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
