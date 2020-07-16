<template>
    <div class="code-block"
         :class="[isHover ? 'hover' : '']"
         @mouseenter="isHover = true"
         @mouseleave="isHover = false">
        <div class="code-block__source">
            <slot></slot>
        </div>

        <div class="code-block__meta">
            <div class="code-block__description"
                 v-if="description.trim()">
                <slot name="description"></slot>
            </div>
            <div class="code-block__inner-code highlight">
                <slot name="code"></slot>
            </div>
        </div>

        <div class="code-block__control"
             :class="[isFixContorl ? 'is-fixed' : '']"
             ref="control"
             @click="isExpanded = !isExpanded">
            <i class="element-iconfont el-icon-down"
               :class="{ 'is-hover': isHover, 'is-flip': isExpanded }"></i>
            <transition name="text-slide"
                        appear>
                <span v-if="isHover"
                      :class="{ 'is-hover': isHover }">
                    {{ controlText }}
                </span>
            </transition>
        </div>
    </div>
</template>

<script>
import 'highlight.js/styles/color-brewer.css'

export default {
    data () {
        return {
            isHover: false,
            isExpanded: false,
            scrollView: null,
            isFixContorl: false
        }
    },

    props: {
        description: {
            type: String,
            default: () => ''
        },
        scrollViewSelector: {
            type: String,
            default: () => 'html'
        }
    },

    computed: {
        langConfig () {
            return {
                hideText: '隐藏代码',
                showText: '显示代码'
            }
        },

        controlText () {
            return this.isExpanded ? this.langConfig.hideText : this.langConfig.showText
        },

        codeArea () {
            return this.$el.getElementsByClassName('code-block__meta')[0]
        },

        codeAreaHeight () {
            const foundDescs = this.$el.getElementsByClassName('code-block__description')
            const foundCodes = this.$el.getElementsByClassName('code-block__inner-code')

            if (foundDescs.length) return foundDescs[0].clientHeight + foundCodes[0].clientHeight + 20

            return foundCodes[0].clientHeight + 20
        }
    },

    watch: {
        isExpanded (val) {
            this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'

            this.$nextTick(() => {
                setTimeout(() => this.handleScroll(), 300)
            })
        }
    },

    mounted () {
        this.scrollView = document.querySelector(this.scrollViewSelector)
        if (this.scrollView && this.scrollView === document.firstElementChild) this.scrollView = window
        if (this.scrollView) {
            this.scrollView.addEventListener('scroll', this.handleScroll)
            window.addEventListener('resize', this.handleScroll)
        }
    },

    beforeDestroy () {
        this.scrollView && this.scrollView.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleScroll)
    },

    methods: {
        handleScroll () {
            const rect = this.codeArea ? this.codeArea.getBoundingClientRect() : {}
            const { top, bottom, left, width } = rect

            this.isFixContorl = bottom + 44 > document.documentElement.clientHeight && top <= document.documentElement.clientHeight
            this.$refs.control.style.left = this.isFixContorl ? `${left}px` : '0'
            this.$refs.control.style.width = this.isFixContorl ? `${width}px` : ''
        }
    }
}
</script>

<style lang="stylus" scoped>
.code-block {
    border: 1px solid #ebebeb;
    position: relative;
    border-radius: 3px;
    padding-bottom: 44px;
    transition: all 0.2s;
    margin-top: 1.5rem;

    &.hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }

    .code-block__source {
        padding: 24px;
    }

    .code-block__meta {
        background: #fafafa;
        border-top: 1px solid #eaeefb;
        overflow: hidden;
        height: 0;
        transition: height 0.2s;

        .code-block__description {
            padding: 20px;
            box-sizing: border-box;
            border: 1px solid #ebebeb;
            font-size: 14px;
            line-height: 22px;
            color: #666;
            word-break: break-word;
            margin: 10px;
            background: #ffffff;

            p {
                margin: 0;
                line-height: 26px;
            }

            code {
                color: #5e6d82;
                background-color: #e6efeb;
                margin: 0 4px;
                display: inline-block;
                padding: 1px 5px;
                font-size: 12px;
                border-radius: 3px;
                height: 18px;
                line-height: 18px;
            }
        }

        .code-block__inner-code {
            position: relative;

            &:before {
                content: 'vue';
                color: #ccc;
                position: absolute;
                z-index: 3;
                top: 0.8em;
                right: 1em;
                font-size: 0.75rem;
            }

            &:hover {
                /deep/ .code-copy {
                    display: inline-block;
                }
            }

            /deep/ .code-copy {
                display: none;
                position: absolute;
                right: 2.1rem;
                top: 0.5rem;
            }
        }
    }

    .code-block__control {
        border-top: 1px solid #eaeefb;
        height: 44px;
        box-sizing: border-box;
        background-color: #ffffff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;
        margin-top: -1px;
        color: #d3dce6;
        cursor: pointer;
        position: absolute;
        width: 100%;
        user-select: none;

        &.is-fixed {
            position: fixed;
            bottom: 0;
        }

        &:hover {
            color: #409eff;
            background-color: #f9fafc;
        }

        > i {
            line-height: 44px;
            font-size: 16px;
            display: inline-block;
            transition: all 0.3s;

            &.is-hover {
                transform: translateX(-40px);
            }

            &.is-flip:before {
                display: inline-block;
                transform: rotate(180deg);
            }
        }

        > span {
            position: absolute;
            transform: translateX(-30px);
            font-size: 14px;
            line-height: 44px;
            transition: 0.3s;
            display: inline-block;
        }

        & .text-slide-enter, & .text-slide-leave-active {
            opacity: 0;
            transform: translateX(10px);
        }
    }

    /deep/ {
        pre {
            background: transparent;
        }

        code {
            color: #606266;
            font-family: Menlo, Monaco, Consolas, Courier, monospace;
        }
    }
}

@font-face {
    font-family: 'element-iconfont';
    src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKkAAsAAAAABowAAAJXAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAo4UQE2AiQDCAsGAAQgBYVNBy4b1QUR1Yshsj9gDMYwrUcCnI7GvSOWlTdfpn93ziBgOHgAFaiABAAAAAAIqhrLnrsNASgGySRZmAiJWD5KRUVFAylgoVLv+8xlejcCOxlhivLUiBTrwk/L6UszEtIseeYq2yeL+Z1TbisMUoglPxify6s84ADoL8VNU03RlX7P57mc3gqjgD8INbetOYDuxQEtoD0wiqyEMm4Yu0EFLT2GgHCyqUQ9t89vtIcRrRKgtbbOaa/nxDAjEooIBhw0tE8QoW7DBeyV39cXVQoFR5AnyhmUm4rO/4tj2EBncwIXCOV4EOCBSsBAo8BgP62RwfOEB7fIh21lCl7bciPaqg4Zf12UHglApsy/JkEqvNSIA7gsPmF/LNProMiF0y8Sq2OT5bSXLv5SP9fPyrA1HfLPfD26KQAEV7iLfagMgFu/1BqemQid2SR4CQLCHvNFkcGZKwCyHZErrwgnHAio1nieWNVJe4yKWJIYzCEUtfDEUkkapwVBRNCLYGKZQDgVLB6PIIFDjywMKOdSgsjlBo5o/uDJ5Z8wrrIQRLJaEUyuRhDOeNCFERTrOjyoIXdUXPxxW+okyQo/wIARk4eDcV9Qfw25TTV0PvkBW1qdOI2S6cgdJtgSe5bvOnMXFtORb7k8MyjPph1Kjxr3eRPHAnpTVOpIB3RlyB0VF3/cljpJPt8PCANG9AeHyHkvqL+GXFgbhG2hij9gS+vPjtMoYZDfAYfDjnLd8l1n7sJiarD5djPJg/IMnteh9Khh8M+bOB4kpPJoeeX4N0YgOqBIswriQs9WpT8TEQAAAA==');
    format('woff2');
}

.element-iconfont {
    font-family: 'element-iconfont' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.el-icon-down:before {
    content: '\e6e9';
}
</style>
