<div class="table-of-contents">
  <ul>
    <li v-for="(item, index) in contents" :key="index">
      <a :href="item">{{ item }}</a>
    </li>
  </ul>
</div>

<script>
export default {
  data(){
    return {
      contents: require.context("./", false, /^(?!\.\/README\.md$).+\.md$/).keys()
    }
  }
}
</script>
