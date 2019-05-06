<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:{
    list:Array
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="less" scoped>
@import url("~styles/mixins.less");
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.title-img-wrapper {
  overflow: hidden;
  height: 0;
    padding-bottom: 37.09%;
  .title-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.1rem;
  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    .ellipsis();
  }
  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    .ellipsis();
  }
}
</style>
