<template>
  <div class="list"
       ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item in hot"
               :key="item.id"
               @click="handleclick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item,key) of cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list"
             v-for="_item of item"
             :key='_item.id'
             @click='handleclick(_item.name)'>
          <div class="item border-bottom">{{_item.name}}</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'cityList',
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  methods: {
    handleclick (city) {
      this.$store.commit('changeCity', city)
      // js中有a标签和location来跳转页面，vue除了router-link,
      // 还有使用js代码来进行跳转的this.$router.push('/')
      this.$router.push('/')
    }
  },
  mounted () {
    // 使用这个插件，把获取到的标签作为参数传进去即可
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        // console.log(this.$refs[this.letter]);
        //由于在这个组件绑定的ref的值和alphabet里面绑定的值是一样的，所以利用emit事件传过来的值以后
        // 在这里直接获取，然后直接滚动过去
        const element = this.$refs[this.letter][0]
        // 利用betterscroll插件提供的scrollToElement方法，来实现我们的跳转
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style  lang='less' scoped>
@import url("~styles/varibles.less");
.border-topbottom,
.border-bottom {
  &::before {
    border-color: #ccc;
  }
  &::after {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  overflow: hidden;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }
  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
