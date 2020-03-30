<template>
  <ul>
    <li v-for="(item, index) in contents">
      <Contents v-if="item.children && item.children.length" :contents="item.children"></Contents>
      <a :href="item.path"> {{ item.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Contents',

  props: {
    contents: {
      type: Array,
      default: () => []
    }
  }
}
</script>
