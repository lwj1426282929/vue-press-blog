<template>
    <ul>
        <template v-for="(item, index) in data">
            {{ item }}
            <!-- <li v-if="typeof item == 'string'">
                <a :href="item">{{ item }}</a>
            </li>
            <li v-else
                :key="index">
                {{ item.title }}
                <Contents :contents="item.children" />
            </li> -->
        </template>
    </ul>
</template>

<script>
export default {
    name: 'Contents',

    props: {
        contents: {
            type: Array
        }
    },

    data () {
        return {
            data: []
        }
    },

    created () {
        this.data = this.contents ? this.contents : this.$page.contents

        console.log(this.data)

        // console.log(this.$page)
    },

    methods: {
        genarateItem (item) {
            return {
                title: item.match(/\/([^/]*)$/)[1].replace('.md', ''),
                path: item.replace('.md', '.html').replace('..' + this.$page.path, '')
            }
        }
    }
}
</script>
