import { ButtonTab, ButtonTabItem } from 'vue-button-tab'
import 'vue-button-tab/lib/vue-button-tab.css'
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