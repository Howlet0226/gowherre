<template>
  <div>
    <div class="search">
      <input type="text"
             placeholder="输入城市名或拼音"
             class="search-input">
    </div>
  </div>
</template>

<script>
export default {
  name: 'citySearch'

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
</style>
