---
layout: Contents
---

<script>
export default {
  data(){
    return {
      contents: []
    }
  },

  mounted(){
    console.log(this.$page.frontmatter.layout)

    let arr = require.context("./", true, /^(?!\.\/README\.md$).+\.md$/).keys()

    // 生成所有扁平化文章目录
    let contents = arr.map(item => {
      let str = item.match(/(?<=\.\/)([\s\S]*)(?=\.md)/)[0]
      let name = str.replace(/\/\d{0,}\_/g, '/')
      let path = './' + str + '.html'
      return { name, path }
    })

    this.contents = contents

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
    }
  }
}
</script>
