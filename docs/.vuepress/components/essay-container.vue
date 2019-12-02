<template>
  <component :is="title" />
</template>

<script>
export default {
  name: 'essayContainer',

  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="stylus">
.essay-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  background-position: bottom right;
}

.essay-container {
  position: relative;
  z-index: 1;
}
</style>