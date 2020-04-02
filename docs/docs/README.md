<Contents :contents="contents" />

<script>
export default {
  data(){
    return {
      contents: []
    }
  },

  created(){
    let arr = require.context("./", true, /^(?!\.\/README\.md$).+\.md$/).keys()

    this.contents = arr.map(item => {
      let str = item.match(/(?<=\.\/)([\s\S]*)(?=\.md)/)[0]
      let name = str.replace(/\/\d{0,}\_/g, '/')
      let path = './' + str + '.html'
      return { name, path }
    })
  }
}
</script>
