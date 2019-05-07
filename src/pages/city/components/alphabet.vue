<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
    props:{
        cities:Object
    }
};
</script>
<style lang='less'  scoped>
@import url('~styles/varibles.less');
.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    position:absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .item{
        line-height: .4rem;
        color: @bgColor
    }
}
</style>