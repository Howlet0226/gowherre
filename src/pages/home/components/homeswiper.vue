<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      list: [
        {
          id: 1,
          imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e9f92741ef8b1cb0472ced96150d0d1c.jpg_750x200_1f0a2392.jpg"
            },
        {
          id: 2,
          imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/ad0e87bbf175a2d3999ada53eacf2e55.jpg_750x200_30f6dbce.jpg"
               }
           ],
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay : 2000,
        autoplayDisableOnInteraction: false,
      }
    };
  }
};
</script>
<style  lang="less" scoped >
.wrapper{
    width: 100%;
    height: 0;
    padding-bottom: 26.5%;
    background: #eee;
    .swiper-img{
        width: 100%;
    }
}

</style>