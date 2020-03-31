<template>
    <div :class="['button-tab', flex ? 'flex' : '']">
        <slot></slot>
    </div>
</template>

<script>
import ButtonTabItem from './ButtonTabItem';

export default {
    name: 'ButtonTab',

    components: { ButtonTabItem },

    model: {
        prop: 'value',
        event: 'change'
    },

    props: {
        // 绑定的值（多选模式下为数组）
        value: {
            type: [Number, String, Array],
            default: () => ''
        },

        // 多选模式
        multiple: {
            type: Boolean,
            default: () => false
        },

        // 单行模式
        flex: {
            type: Boolean,
            default: () => true
        },

        // 高度
        height: {
            type: [Number, String],
            default: () => 34
        },

        // 子元素间距
        gutter: {
            type: [Number, String],
            default: () => 0
        },

        // 默认字体颜色
        defaultColor: {
            type: String,
            default: () => '#999999'
        },

        // 选中字体颜色
        activeColor: {
            type: String,
            default: () => '#FFFFFF'
        },

        // 默认背景颜色
        defaultBgColor: {
            type: String,
            default: () => '#FFFFFF'
        },

        // 选中背景颜色
        activeBgColor: {
            type: String,
            default: () => '#2482FC'
        },

        // 默认边框颜色
        defaultBorderColor: {
            type: String,
            default: () => '#2482FC'
        },

        // 选中边框颜色
        activeBorderColor: {
            type: String,
            default: () => '#2482FC'
        }
    },

    mounted () {
        this.$on('item-click', this.toggleSelected);
    },

    methods: {
        toggleSelected (val) {
            let children = this.$children;
            // 多选模式
            if (this.multiple) {
                let value = [];
                for (let child of children) {
                    if (child.selected) value.push(child.value);
                }
                this.$emit('change', value);
                this.$emit('on-item-click', value);
            } else { // 单选模式
                for (let child of children) {
                    child.selected = child.value === val;
                }
                this.$emit('change', val);
                this.$emit('on-item-click', val);
            }
        }
    }
};
</script>
<style scoped>
.button-tab.flex {
    display: flex;
    flex-wrap: nowrap;
}
</style>
