import Contents from '../components/Contents.vue';

export default {
    render (createElement) {
        return createElement('div', {
            style: this.style
        }, this.$slots.default)
    },
};
