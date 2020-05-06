<template>
    <div>
        <input type="color"
               v-model="value">
        <copy>{{ value }}</copy>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: () => '#fff'
        }
    },

    model: {
        prop: 'color',
        event: 'change'
    },

    data () {
        return {
            value: ''
        }
    },

    watch: {
        color: {
            handler (val) {
                if (this.value !== val) this.value = val
            },
            immediate: true
        },

        value (val) {
            if (this.color !== val) this.$emit('change', val)
        }
    }
}
</script>

<style lang="stylus" scoped>
input[type='color'] {
    width: 23px;
    padding: 0;
    border: 0 none;
    -webkit-appearance: none;
    background: none;
    outline: none;
}
</style>