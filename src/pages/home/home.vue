<template>
  <div>
    <homeheader />
    <home-swiper />
    <home-icons />
    <home-recommend />
    <home-weekend />
  </div>
</template>

<script>
import homeheader from './components/homeheader'
import homeSwiper from './components/homeswiper'
import homeIcons from './components/homeicons'
import homeRecommend from './components/homerecommend'
import homeWeekend from './components/homeweekend'

export default {
  name:'home',
  components:{
    homeheader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  }
}

</script>
<style >
</style>