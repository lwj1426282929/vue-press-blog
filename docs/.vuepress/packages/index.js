import { ButtonTab, ButtonTabItem } from './ButtonTab'

const components = {
  ButtonTab, 
  ButtonTabItem
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