<template>
  <img :src="baseSrc" alt>
</template>

<script>
export default {
  name: "BaseImg",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    baseSrc() {
      return this.$withBase(`/${this.url}`);
    }
  }
};
</script>

<style scoped>
img {
  display: block;
  margin: 0 auto;
  border: 1px solid #b7afa3;
  max-width: 100%;
  height: auto;
}
</style>


