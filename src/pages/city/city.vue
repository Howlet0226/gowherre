<template>
  <div>
      <cityHeader />
      <citySearch />
  </div>
</template>

<script>
    import cityHeader from './components/cityHeader'
    import citySearch from './components/citysearch'
export default {
    name:'city',
    components:{
       cityHeader,
       citySearch 
    }
}

</script>
<style scoped>
</style>