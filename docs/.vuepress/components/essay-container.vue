<template>
  <div class="container">
    <div class="container-bg" :style="{ backgroundImage: url }" />
    <div style="position: relative; z-index: 1;">
      <component :is="title" />
    </div>

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
    url(){
      return 'url("/img/bg/' + this.title + '.jpg")'
    }
  }

}
</script>

<style>
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
</style>