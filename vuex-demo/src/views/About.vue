<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{count}}/{{doublestate}}/{{add}}-{{addcounts}}</div>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    addcounts(){
      return this.$store.getters.addcount(5)
    },
    ...mapState({
      count:state=>state.count,
      doublestate(state){
        return state.count*2
      }
    }),
    ...mapGetters({
      add:'addstate',
    })
    
  },
}

</script>
<style lang='' scoped>
</style>

