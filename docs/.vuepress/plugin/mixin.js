import Contents from '../components/Contents.vue';

export default {
    

    created() {
        console.log('created mixin')
    },

    data(){
        console.log('test')
        return {
            test: 'test'
        }
    },

    render (createElement) {
        console.log('render')
        return createElement('div', {
            style: this.style
        }, this.$slots.default)
    },
};
