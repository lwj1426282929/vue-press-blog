<template>
  <block color="#1989fa">
    <p class="custom-block-title">前端框架</p>
    <p></p>
  </block>
  <el-row :gutter="20">
    <el-col :lg="6" :md="8" :sm="12" :xs="24" v-for="(item, index) in frames_js" :key="index">
      <div class="card">
        <a :href="item.link" target="_blank">
          <div class="card-mask" >
            <img :src="item.img">
            <p class="card-name">{{ item.name }}</p>
          </div>
          <div class="card-desc">{{ item.desc }}</div>
        </a>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return {
      frames_js:[
        { name: 'Vue', desc: '渐进式 JavaScript 框架', img: require('./img/vue.png'), link: 'https://cn.vuejs.org/' },
        { name: 'React', desc: '用于构建用户界面的 JavaScript 库', img: require('./img/react.svg'), link: 'https://react.docschina.org/' },
        { name: 'Angular', desc: '用于构建用户界面的 JavaScript 库', img: require('./img/angular.svg'), link: 'https://angular.cn/' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.theme-default-content:not(.custom) {
  margin: 0;
  max-width: 100%;

  .card {
    border: 1px solid #ebeef5;
    border-radius: 4px;
    overflow: hidden;
    transition: .3s;
    margin-bottom: 1rem;

    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }

    a {
      display: block;
      color: #333;

      &:hover {
        text-dir
      }
    }

    .card-mask {
      height: 40px;
      display: flex;
      align-items: center;
      margin: .5rem;
      img {
        width: 40px;
        height: 40px;
        margin-right: 1rem;
      }
      p {
        flex: 1;
      }
    }

    .card-desc {
      height: 2rem;
      line-height: 2rem;
      color: #999;
      font-size: 0.75rem;
      margin: .5rem;
    }
  }
}
</style>
