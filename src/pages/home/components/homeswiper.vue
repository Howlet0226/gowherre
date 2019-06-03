<template>
  <div class="wrapper">
    <swiper :options="swiperOption"
            v-if="list.length">
      <swiper-slide v-for="item of list"
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },

  data () {
    return {
      swiperOption: {
        //设置分页器，也就是轮播图下面的东西
        pagination: ".swiper-pagination",
        // 环路，实现无缝轮播
        loop: true,
        // 自动播放
        autoplay: 2000,
        // 用户操作swiper之后，是否禁止autoplay。
        autoplayDisableOnInteraction: false,
      }
    };
  }
};
</script>
<style  lang="less" scoped >
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
  .swiper-img {
    width: 100%;
  }
}
</style>
