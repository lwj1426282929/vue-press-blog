<div class="table-of-contents">
  <ul>
    <li v-for="(item, index) in contents" :key="index">
      <a :href="item.path">{{ item.name }}</a>
    </li>
  </ul>
</div>

<script>
export default {
  data(){
    return {
      contents: []
    }
  },

  created(){
    let arr = require.context("./", true, /^(?!\.\/README\.md$).+\.md$/).keys();
    this.contents = arr.map(item => {
      let name = item.match(/(?<=\.\/)([\s\S]*)(?=\.md)/)[0]
      return {
        name,
        path: './' + name + '.html'
      }
    })
  }
}
</script>