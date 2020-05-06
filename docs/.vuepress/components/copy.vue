<template>
    <el-tooltip content="点击复制"
                placement="top">
        <div class="copy-container">
            <slot></slot>
        </div>
    </el-tooltip>
</template>

<style lang="stylus" scoped>
.copy-container {
    cursor: pointer;
    display: inline-block;
    position: relative;

    /deep/.code-copy {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0;
    }
}
</style>