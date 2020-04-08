<template>
    <ul v-if="$page.contents">
        <li v-for="(item, index) in contents_"
            :key="index">
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Contents',

    props: {
        contents: Array
    },

    render (createElement) {
        console.log('render')
        return createElement('div', {
            style: this.style
        }, this.$slots.default)
    },

    data () {
        return {
            contents_: []
        }
    },

    created () {
        if (this.contents) {
            this.contents_ = this.contents
        } else {
            this.contents_ = this.$page.contents
        }
        console.log(this.contents_)
        console.log(this.$page.frontmatter.layout)
    }
}
</script>
