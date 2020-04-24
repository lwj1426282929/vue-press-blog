<template>
    <ul>
        <template v-for="(item, index) in data">
            <li v-if="typeof item == 'string'"
                :key="index">
                <a :href="_path(item)">{{ _title(item) }}</a>
            </li>
            <li v-else
                :key="index">
                {{ item.title }}
                <Contents :contents="item.children" />
            </li>
        </template>
    </ul>
</template>

<script>
export default {
    name: 'Contents',

    props: {
        contents: Array
    },

    data () {
        return {
            data: []
        }
    },

    created () {
        this.data = this.contents ? this.contents : this.$page.contents
    },

    methods: {
        _title (item) {
            let title = item.match(/\/([^/]*)$/)[1].replace('.md', '')
            let names = title.split('_')
            return names[1] ? names[1] : names[0]
        },

        _path (item) {
            return item.replace('.md', '.html').replace('..' + this.$page.path, '')
        }
    }
}
</script>
