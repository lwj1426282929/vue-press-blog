<template>
    <div>
        <span :style="styles"></span>
        <copy>{{ color }}</copy>
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

    computed: {
        styles () {
            return {
                display: 'inline-block',
                width: '10px',
                height: '10px',
                border: '1px solid #ccc',
                background: this.color
            }
        }
    }
}
</script>