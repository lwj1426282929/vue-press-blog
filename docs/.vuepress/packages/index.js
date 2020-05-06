import { ButtonTab, ButtonTabItem } from './ButtonTab'
import Cell from './Cell'

const components = {
  ButtonTab, 
  ButtonTabItem,
  Cell
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