<template>

</template>

<script>
const Menu = require('../config.menu')
export default {
    created(){
        console.log(Menu.getContents());
    }
}
</script>

<style>
</style>