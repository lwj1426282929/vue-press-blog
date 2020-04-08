import Contents from '../components/Contents.vue';

export default {
    

    created() {
        console.log(this.$page)
    },

    render (createElement) {
        console.log('render')
        return createElement('div', {
            style: this.style
        }, this.$slots.default)
    },
};
