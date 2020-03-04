<template>
    <div class="demo-container"
         @mouseenter="showButtonText = true"
         @mouseleave="showButtonText = false">

        <div class="demo-block">
            <slot></slot>
        </div>

        <div class="demo-block-code">
            <div class="demo-block-code-p20">
                
            </div>
        </div>

        <div class="demo-block-control"
             @click="isShowCode = !isShowCode">
            <i class="el-icon-caret-bottom"
               :class="{ 'el-icon-caret-up' : isShowCode, 'hovering': showButtonText }"></i>
            <transition name="text-slide">
                <span class="slide-button-text"
                      v-show="showButtonText">{{ isShowCode ? '隐藏代码' : '显示代码' }}</span>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isShowCode: false,
            showButtonText: false
        }
    },

    methods: {
        codeArea () {
            return this.$el.getElementsByClassName('demo-block-code')[0];
        },

        codeAreaHeight () {
            return this.$el.getElementsByClassName('demo-block-code-p20')[0].clientHeight;
        }
    },

    watch: {
        isShowCode (val) {
            this.codeArea().style.height = val ? `${this.codeAreaHeight() + 1}px` : '0';
        }
    }
}
</script>

<style lang="stylus" scoped>
.demo-container {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;

    &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }

    .demo-block {
        padding: 20px;
        border-bottom: 1px solid #ebebeb;
    }

    .demo-block-code {
        background: #fafafa;
        overflow: hidden;
        height: 0;
        transition: height 0.3s;

        .demo-block-code-p20 {
            padding: 20px;
            border-bottom: 1px solid #ebebeb;
        }
    }

    .demo-block-control {
        text-align: center;
        height: 44px;
        line-height: 44px;
        cursor: pointer;
        color: #c0c4cc;
        user-select: none;
        position: relative;

        &:hover {
            background: #f9fafc;
            color: #409eff;
        }

        .el-icon-caret-bottom {
            transition: all 0.3s;

            &.hovering {
                transform: translateX(-40px);
            }

            &.el-icon-caret-up {
                transform: rotate(-180deg);

                &.hovering {
                    transform: translateX(-40px) rotate(-180deg);
                }
            }
        }

        .slide-button-text {
            position: absolute;
            transform: translateX(-30px);
            font-size: 14px;
            line-height: 44px;
            transition: 0.3s;
            display: inline-block;

            &.text-slide-enter, &.text-slide-leave-active {
                opacity: 0;
                transform: translateX(10px);
            }
        }
    }
}
</style>