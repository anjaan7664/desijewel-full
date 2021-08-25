<template>
  <div>
    <form
      id="form- array_field + '"
      class="upload_form col-md-6 col-xs-12"
      action="/upload"
    >
      <img
        style="min-width: 150px;height: 130px;padding-left:0px;margin-left:-10px;padding-right:5px"
        class="col-md-4 col-xs-5"
      />
      <input
        placeholder="table"
        class=""
        type="number"
        name="table"
        id="table"
      />

      <input
        placeholder="likes"
        class=""
        type="number"
        name="likes"
        id="likes"
      />
      <input type="hidden" class="image_loc" value=" array_field + '" />
      <input type="button" value="Cancel" class="" />
      <input
        placeholder="SubC"
        style=""
        class=""
        type="text"
        name="sub_cat"
        id="sub_cat"
      />
    </form>
  </div>
</template>
<script>
export default {
  name: "fileUpload",
  middleware: "auth",
  props: ["files"],
  data() {
    return {};
  }
};
</script>
