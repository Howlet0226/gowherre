<template>
  <div class="header">
    <div class="haeder-left">
      <span class="iconfont back-icon">&#xeb99;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe623;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "homeheader",
  props: {
    city: String
  }
};
</script>
<style scoped lang='less'>
@import "~styles/varibles.less";
.header {
  display: flex;
  line-height: @headerHeight;
  background: @bgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }
  .header-input {
    // 让此内容占据header盒子中剩下的部分
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }
  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    float: right;
    text-align: center;
    color: #fff;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>