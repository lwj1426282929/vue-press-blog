<Contents :contents="contents" />

<script>
import { menu } from '../../../docs/.vuepress/config.menu.js'

export default {
  data(){
    return {
      contents: []
    }
  },

  mounted(){

    console.log(menu);

    let arr = require.context("./", true, /^(?!\.\/README\.md$).+\.md$/).keys()

    // 生成所有扁平化文章目录
    let contents = arr.map(item => {
      let str = item.match(/(?<=\.\/)([\s\S]*)(?=\.md)/)[0]
      let name = str.replace(/\/\d{0,}\_/g, '/')
      let path = './' + str + '.html'
      return { name, path }
    })

    this.contents = contents

    // console.log(JSON.stringify(contents))
    // console.log(window.__MY_STATE__)

    // this.mergeTrees(contents)

    // let contents_ = contents.map(item => {
    //     let names = item.name.split('/')
    //     return this.generateTree(names, item.path)
    // })
  },
  

  methods: {
    // 生成1棵树
    generateTree(names, path){
      return names.reduceRight((sum, name) => {
        return { 
          name, 
          path: sum.name ? '' : path,
          children: sum.name ? [sum] : [] 
          }
      }, {})
    },

    mergeTrees(arr = []){
      let len = arr.length
      for(let i = 0; i < len -1; i++) {
        for(let j = i + 1; j < len; j++) {
          let index1 = arr[i].name.lastIndexOf('/')
          let index2 = arr[j].name.lastIndexOf('/')
          let name1 = arr[i].name.slice(0, index1)
          let name2 = arr[j].name.slice(0, index2)
          console.log(name1)
          console.log(name2)
          if(name1 === name2) {
            arr[i] = arr[i] + ',' + arr[j].name
          }
        }
      }
    }
  }
}
</script>
