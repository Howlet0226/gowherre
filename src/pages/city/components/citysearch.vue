<template>
  <div>
    <div class="search">
      <input v-model="keyword"
             class="search-input"
             type="text"
             placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content"
         ref="search"
         v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
            @click='handleclick(item.name)'>
          {{item.name}}
        </li>
        <li class="search-item border-bottom"
            v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleclick (city) {
      this.$store.dispatch('changeCity', city)
      // js中有a标签和location来跳转页面，vue除了router-link,
      // 还有使用js代码来进行跳转的this.$router.push('/')
      this.$router.push('/')
    }
  },
  watch: {
    // 监事双向数据绑定的值，来改变搜索出来的内容
    keyword () {
      // 节流的处理
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            //   用indexof来判断里面是否有
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              // 有的放进result里面
              result.push(value)
            }
          })
        }
        // 把result返回给list数组去渲染
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang='less' scoped>
@import url("~styles/varibles.less");
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: @bgColor;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    border-radius: 0.06rem;
    color: #666;
    text-align: center;
  }
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>
