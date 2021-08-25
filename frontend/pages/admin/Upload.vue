<template>
  <div>
    <div>
      <AdminFileUpload :files="files"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "admin",
  middleware: "auth",
  data: function() {
    return {
      files: [],
      options: {
        // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
        target: "//localhost:3000/upload",
        testChunks: false
      },
      attrs: {
        accept: "image/*"
      }
    };
  },
  components: {},
  methods: {}
};
</script>
<style>
.uploader-example {
  width: 880px;
  padding: 15px;
  margin: 40px auto 0;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.uploader-example .uploader-btn {
  margin-right: 4px;
}
.uploader-example .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
