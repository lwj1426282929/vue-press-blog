<template>
  <div class="essay-container">
    <div class="container-bg"
         :style="{ backgroundImage: url }">
    </div>
    <component :is="title"
               style="position: relative; z-index: 1;" />

  </div>
</template>

<script>
export default {
  name: 'essayContainer',

  props: {
    title: {
      type: String
    }
  },

  computed: {
    url() {
      return 'url("/img/bg/' + this.title + '.jpg")'
    }
  },
}
</script>

<style lang="stylus">
.essay-container {
  .container-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
  }
}
</style>