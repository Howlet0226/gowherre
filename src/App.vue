<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.swiper-pagination-bullet-active {
  background: #fff;
}
.swiper-container {
  overflow: inherit;
}
.icons .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
</style>
