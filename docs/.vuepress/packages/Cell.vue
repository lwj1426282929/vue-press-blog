<template>
    <div class="cell flx-ce-bet"
         :class="{ 'no-border': noBorder, 'textarea-line': type === 'textarea', required }">
        <div class="left"
             :class="{ 'left-textarea': type === 'textarea' }">{{ label }}</div>
        <div class="right"
             @click="$emit('trigger')">
            <div class="flx-ce-bet">
                <textarea v-if="type === 'textarea'"
                          :maxlength="maxlength"
                          rows="5"
                          :placeholder="placeholder"
                          v-model="data" />
                <input v-else
                   :type="computeType(type)"
                   :readonly="type === 'select'"
                   v-model="data"
                   :placeholder="placeholder" />
                <div class="unit" v-if="data && unit">
                    <span style="visibility: hidden;">{{ data }}</span>
                    <span>{{ unit }}</span>
                </div>
                <slot name="icon" />
            </div>
            <span class="mask"
                  v-if="type === 'textarea' && maxlength">{{ (data ? data.length : '0') + '/' +  maxlength}}</span>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Cell',

    model: {
        prop: 'value',
        event: 'change'
    },

    props: {
        value: [String, Number],
        label: String,
        placeholder: String,
        noBorder: Boolean,
        type: {
            type: String,
            default: () => 'text'
        },
        maxlength: Number,
        required: Boolean,
        unit: String
    },

    data () {
        return {
            data: ''
        };
    },

    watch: {
        data (val) {
            this.$emit('change', val);
        },

        value: {
            handler (val) {
                if (val !== this.data) this.data = val;
            },
            immediate: true
        }
    },

    methods: {
        computeType (type) {
            switch (type) {
                case 'text':
                case 'number':
                case 'search':
                case 'tel':
                case 'email':
                case 'password':
                case 'url':
                    return type;
                default:
                    return 'text';
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.cell {
    min-height: 104px;
    position: relative;

    &:after {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background: #eeeeee;
        transform: scaleY(0.5);
    }

    &.no-border:after {
        display: none;
    }

    &.textarea-line {
        align-items: flex-start;
        padding: 34px 0 0 0;
    }

    .left {
        color: #333333;
        font-size: 28px;
        width: 252px;

        &.left-textarea {
            position: relative;
            top: -2px;
        }
    }

    &.required .left:after {
        content: "*";
        color: #f4333c;
        margin-left: 4px;
    }

    .right {
        flex: 1;
        position: relative;
        padding-right: 30px;

        .mask {
            display: block;
            text-align: right;
            color: #999;
            font-size: 28px;
            font-weight: 500;
        }

        .unit {
            position: absolute;
            font-size: 28px;
            line-height: 30px;
            z-index: 5;
        }
    }

    input {
        background: none;
        border: 0 none;
        width: 100%;
        height: 100%;
        outline: none;
        box-shadow: none;
        position: relative;
        z-index: 10;
        font-size: 28px;
        line-height: 40px;
        &[type="search"]::-webkit-search-cancel-button {
            -webkit-appearance: none; // 去掉默认的小×
        }
        &::-webkit-input-placeholder {
            color: #999;
        }
    }

    textarea {
        background: none;
        border: 0 none;
        width: 100%;
        outline: none;
        box-shadow: none;
        position: relative;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC, Arial, Helvetica,
            sans-serif;
        resize: none;
        &::-webkit-input-placeholder {
            color: #999;
        }
    }
}
.flx-ce-bet {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
