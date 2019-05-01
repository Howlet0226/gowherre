<template>
  <div>
    <homeheader />
    <home-swiper />
    <homeIcons />
  </div>
</template>

<script>
import homeheader from './components/homeheader'
import homeSwiper from './components/homeswiper'
import homeIcons from './components/homeicons'
export default {
  name:'home',
  components:{
    homeheader,
    homeSwiper,
    homeIcons
  }
}

</script>
<style >
</style>