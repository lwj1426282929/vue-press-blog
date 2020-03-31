<template>
    <span :style="styles">
        {{ color }}
    </span>
</template>

<script>
export default {
    props: {
        color: String
    },

    computed: {
        styles () { 
          return {
            padding: '1px 5px',
            borderRadius: '3px',
            background: '#e1f3d8',
            color: this.color
          }
        }
    }
}
</script>