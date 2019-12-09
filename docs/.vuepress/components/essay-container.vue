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
  top: 57px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.essay-container {
  position: relative;
  z-index: 1;
}
</style>