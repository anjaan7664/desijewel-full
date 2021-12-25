<template>
  <div class="min-h-[80vh]">
    <div class="w-full text-center">
      <label
        class="w-64 flex flex-row items-center px-4 py-4 bg-accent mt-2 
        rounded-md tracking-wide cursor-pointer 
        hover:bg-purple-600 text-3xl text-center
        duration-150 mx-auto"
      >
        <span class="mt-2 text-2xl leading-normal text-white"
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
          placeholder="Select Category"
          class="mt-2 md:w-1/2"
          :options="category"
          v-model="parentDesignCategory"
        ></v-select>
        <v-select
          placeholder="Select Type"
          class="mt-2 md:w-1/2"
          :options="type"
          v-model="parentDesignType"
        ></v-select>
      </div>
      <div class="flex flex-wrap">
        <div class="md:w-1/2" v-for="file in files" :key="file.id">
          <transition name="fade">
            <AdminFileUpload
              :uniqueID="file.id"
              :file="file.image"
              :type="type"
              :category="category"
              :parentDesignType="parentDesignType"
              :parentDesignCategory="parentDesignCategory"
              @delete-row="deleteThisRow(file)"
            />
          </transition>
        </div>
      </div>
    </client-only>
  </div>
</template>
<script>
export default {
  name: "admin",
  // middleware: "auth",
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
  created() {

  },
  methods: {
    uploadImage(event) {
      let file = event.target.files;
      for (let i = 0; i < file.length; i++) {
        this.files.push({ image: file[i], id: i }); //here you set your id to an unique number! (could be this.id you have to try)
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
