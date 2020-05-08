<template>
    <div class="custom-block"
         :style="styles">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Block',

    props: {
        color: String
    },

    computed: {
        styles () {
            return {
                borderColor: this.color,
                background: this.rgba(this.color)
            }
        }
    },

    methods: {
        rgba (color, alpha = .05) {
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
            /* 16进制颜色转为RGB格式 */
            let sColor = color.toLowerCase()
            if (sColor && reg.test(sColor)) {
                if (sColor.length === 4) {
                    var sColorNew = '#'
                    for (let i = 1; i < 4; i += 1) {
                        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
                    }
                    sColor = sColorNew
                }
                //  处理六位的颜色值
                let sColorChange = []
                for (let i = 1; i < 7; i += 2) {
                    sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
                }
                return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')'
            } else {
                return sColor
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.custom-block {
    padding: 0.1rem 1.5rem;
    border-left-width: 0.5rem;
    border-left-style: solid;
    margin: 1rem 0;
}
</style>