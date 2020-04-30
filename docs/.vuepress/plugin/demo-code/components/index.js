import CodeBlock from './CodeBlock.vue'

const components = {
    CodeBlock
}

const install = Vue => {
    for (const key in components) {
        Vue.component(key, components[key])
    }
}

export default {
    ...components,
    install
}
