<template>
    <div class="yto-search-container">

        <!-- 搜索图标 -->
        <div class="icon search-icon"
             v-if="showSearch"
             @click="search" />

        <!-- 输入框 -->
        <div class="input-wrap">
            <form action="">
                <input type="search"
                       :placeholder="placeholder"
                       v-model="value_"
                       @keyup.enter="enter"
                       @blur="blur" />
            </form>
        </div>

        <!-- 清除图标 -->
        <div class="icon clear-icon"
             v-if="showClear && value_"
             @click="clear" />
    </div>
</template>

<script>
export default {
    name: 'YtoSearch',

    model: {
        prop: 'value',
        event: 'change'
    },

    props: {
        showSearch: {
            type: Boolean,
            default: () => true
        },
        showClear: {
            type: Boolean,
            default: () => true
        },
        placeholder: {
            type: String
        },
        value: {
            type: String
        }
    },

    data () {
        return {
            value_: this.value
        };
    },

    methods: {
        // 点击搜索图标
        search () {
            this.blur();
        },

        // 点击清除图标
        clear () {
            this.value_ = '';
            this.$emit('on-clear');
        },

        // 键盘点击确定
        enter (e) {
            e.target.blur();
            this.$emit('on-enter', this.value_);
        },

        // 输入框失焦
        blur () {
            this.$emit('on-blur');
        }
    },

    watch: {
        value_ (val) {
            this.$emit('change', val);
        }
    }
};
</script>

<style lang="stylus" scoped>
.yto-search-container {
    height: 100%;
    background: #f2f3f5;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .input-wrap {
        flex: 1;
        height: 100%;

        form {
            width: 100%;
            height: 100%;
        }

        input {
            background: none;
            border: 0 none;
            width: 100%;
            height: 100%;
            outline: none;
            box-shadow: none;
            position: relative;
            top: -2px;
            font-size: 14px;
            line-height: 20px;

            &[type="search"]::-webkit-search-cancel-button {
                -webkit-appearance: none; // 去掉默认的小×
            }

            &::-webkit-input-placeholder {
                color: #999;
            }
        }
    }

    .icon {
        width: 16px;
        height: 16px;
        margin: 0 5px;

        &.search-icon {
            background: url("/note/img/search_icon.png") no-repeat center center;
            background-size: contain;
        }

        &.clear-icon {
            margin-left: 0;
            background: url("/note/img/search_icon.png") no-repeat center center;
            background-size: contain;
        }
    }
}
</style>
