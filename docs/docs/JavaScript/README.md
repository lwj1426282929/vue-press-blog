<!-- <div class="table-of-contents">
  <ul>
    <li v-for="(item, index) in contents" :key="index">
      <a :href="item.path">{{ item.name }}</a>
    </li>
  </ul>
</div> -->

<Contents :contents="contents"></Contents>

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

    this.generateTree(this.contents)
  },

  methods: {
    generateTree(contents){
      let arr = []
      contents.reduceRight((sum, cur) => {
        // console.log(sum);
        // console.log(cur);
        return arr.push(cur);
      }, arr)

      console.log(arr);
    }
  }
}
</script>
