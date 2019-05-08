<template>
  <div>
    <city-header />
    <city-search :cities="cities" />
    <city-list :cities="cities"
               :hot="hotCities"
               :letter='letter' />
    <alphabet :cities="cities"
              @change='handleletter' />
  </div>
</template>

<script>
import cityHeader from './components/cityHeader'
import citySearch from './components/citysearch'
import cityList from './components/citylist'
import alphabet from './components/alphabet'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    cityHeader,
    citySearch,
    cityList,
    alphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    // 利用async/await来获取异步信息,当然也可以使用Promise,在home就是用的Promise
    async getcityinfo () {
      var _res = await axios.get('/api/city.json')
      const res = _res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleletter (letter) {
      this.letter = letter;
    }
  },
  mounted () {
    this.getcityinfo()
  }
}
</script>
<style scoped>
</style>
