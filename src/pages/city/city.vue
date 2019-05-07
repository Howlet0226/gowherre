<template>
  <div>
      <city-header />
      <city-search />
      <city-list />
  </div>
</template>

<script>
    import cityHeader from './components/cityHeader'
    import citySearch from './components/citysearch'
    import cityList from 'components/citylist'
export default {
    name:'city',
    components:{
       cityHeader,
       citySearch,
       cityList 
    }
}

</script>
<style scoped>
</style>