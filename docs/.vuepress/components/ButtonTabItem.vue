<template>
    <div class="button-tab-item"
         :class="classes"
         :style="styles"
         @click="itemClick">
        <div class="button-tab-item-bg"
             :style="bgStyles"></div>
        <div class="button-tab-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ButtonTabItem',

    props: {
        value: {
            type: [String, Number],
            default: () => ''
        },

        width: {
            type: [String, Number]
        }
    },

    data () {
        return {
            selected: false
        };
    },

    computed: {
        classes () {
            return {
                selected: this.selected,
                'no-gutter': !+this.$parent.gutter,
                ['gutter-' + this.$parent.gutter]: +this.$parent.gutter
            };
        },

        styles () {
            let style = {};
            if (!this.width) {
                style.flex = 1;
            } else if (this.width.match(/\%$/)) {
                style.width = this.width;
            } else {
                style.width = this.width + 'px';
            }
            return {
                height: this.$parent.height + 'px',
                lineHeight: this.$parent.height + 'px',
                marginRight: this.$parent.gutter + 'px',
                color: this.selected ? this.$parent.activeColor : this.$parent.defaultColor,
                ...style
            };
        },

        bgStyles () {
            return {
                background: this.selected ? this.$parent.activeBgColor : this.$parent.defaultBgColor,
                borderColor: this.selected ? this.$parent.activeBorderColor : this.$parent.defaultBorderColor
            };
        }
    },

    methods: {
        itemClick () {
            // 如果是单选模式并且已经选中则不触发任何操作
            if (!this.$parent.multiple && this.selected) return;

            if (this.$parent.multiple) {
                this.selected = !this.selected;
            } else {
                this.selected = true;
            }
            this.$parent.$emit('item-click', this.value);
        }
    },

    watch: {
        '$parent.value': {
            handler () {
                if (this.$parent.multiple) {
                    let value = this.$parent.value instanceof Array ? this.$parent.value : this.$parent.value.split(',');
                    this.selected = value.find(item => item === this.value);
                } else {
                    this.selected = this.$parent.value == this.value;
                }
            },
            immediate: true,
            deep: true
        }
    }
};
</script>

<style scoped>
.button-tab-item {
    text-align: center;
    position: relative;
    cursor: pointer;
}

.button-tab-item:last-child {
    margin-right: 0 !important;
}

.button-tab-body {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
}

.button-tab-item .button-tab-item-bg {
    position: absolute;
    width: 200%;
    height: 200%;
    border: 1px solid;
    box-sizing: border-box;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    z-index: 2;
}

.button-tab-item:not(.no-gutter) .button-tab-item-bg {
    border-radius: 8px;
}

.button-tab-item.no-gutter:first-child .button-tab-item-bg {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.button-tab-item.no-gutter:last-child .button-tab-item-bg {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

.button-tab-item.no-gutter:not(:last-child) .button-tab-item-bg {
    border-right: 0 none;
}
</style>
