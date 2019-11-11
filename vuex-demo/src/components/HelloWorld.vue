<template>
 <div>
   <!-- {{count2}} / {{count3}} / {{count4}} / {{message}} -->
  {{count2}} / {{doublestate}}
 <button @click="handleclick">add</button>
 </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
import {INCREMENT} from '../store/mutation-type';
export default {
  
  data () {
    return {
      title:'hello'
    }
  },
  mounted() {
    
  },
  methods: {
    handleclick(){
      // setTimeout(()=>{
      //   this.$store.commit({
      //     type:INCREMENT,
      //     payload:100
      //   });
      // },2000)
       this.$store.dispatch({
         type:INCREMENT,
         payload:100
       })
    }
  },
  // computed: mapState(['count'])
  /* ,
  computed: {
    count(){
      return this.$store.state.count
    }
  } */
  computed: {
    message(){
      return this.title+'world'
    },
    ...mapState({
      count2:state=>state.count,
      count3:'count',
      count4(state){
        return state.count
      }/* ,
      doublestate(state){
        return state.count*2
      } */
    }),
    ...mapGetters({
      doublestate:'doublestate'
    })
  },
}

</script>
<style lang='' scoped>
</style>
