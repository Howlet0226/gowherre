<template>
  <ul class="list">
    <li class="item"
        v-for="(item,index) of letters"
        :key="index"
        :ref="item"
        @click="handleclick"
        @touchstart.prevent='handleTouchStart'
        @touchmove='handleTouchMove'
        @touchend='handleTouchEnd'>{{item}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let item in this.cities) {
        // 由于cities是一个对象，我们通过遍历，把它的属性放到数组里面
        // 这样恰好每个数组的索引可以与我们滑动时每个字母计算出来的值相等
        letters.push(item)
      }
      return letters
    }
  },
  data () {
    return {
      flag: false,
      startY: 0,
      timer: null
    }
  },
  // 为什么使用updated？因为刚开始cities的数据是空，vue会执行完mounted，
  // 当我们ajax获取到数据的时候，页面会重新渲染，会执行updated，所以使用这个才有用
  updated () {
    // 在这个组件被重新渲染好以后，获取到字母列表中字母A上方距离list组件最上方的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleclick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.flag = true
    },
    handleTouchMove (e) {
      if (this.flag) {
        // 做一个节流的处理
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 因为这里的clientY是相对于整个屏幕的，所以我们要减掉header组件的高度
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          // 防止滑到列表外面还在执行
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        })
      }
    },
    handleTouchEnd () {
      this.flag = false
    }
  }
}
</script>
<style lang='less'  scoped>
@import url("~styles/varibles.less");
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    text-align: center;
    line-height: 0.4rem;
    color: @bgColor;
  }
}
</style>
