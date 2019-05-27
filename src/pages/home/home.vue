<template>
  <div>
    <homeheader />
    <home-swiper :list='swiperList' />
    <home-icons :list='iconList' />
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
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    homeheader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastcity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
    this.lastcity = this.city
  },
  activated () {
    console.log(this.lastcity, this.recommendList, this.iconList)
    if (this.lastcity != this.city) {
      this.getHomeInfo()
      this.lastcity = this.city
    }
  },
}

</script>
<style >
</style>
