<template>
  <div>
    <homeheader :city='city' />
    <home-swiper :list ='swiperList' />
    <home-icons :list ='iconList' />
    <home-recommend :list='recommendList' />
    <home-weekend :list='weekendList' />
  </div>
</template>

<script>
import homeheader from './components/homeheader'
import homeSwiper from './components/homeswiper'
import homeIcons from './components/homeicons'
import homeRecommend from './components/homerecommend'
import homeWeekend from './components/homeweekend'
import axios from 'axios'
export default {
  name:'home',
  components:{
    homeheader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  },
  data(){
    return{
      city:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {
    this.getHomeInfo()
  },
}

</script>
<style >
</style>