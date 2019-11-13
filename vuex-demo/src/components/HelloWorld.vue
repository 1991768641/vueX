<template>
 <div>
   <!-- {{count2}} / {{count3}} / {{count4}} / {{message}} -->
  <button @click="decrement">减</button>
  {{count2}} / {{doublestate}}
  <button @click="increment">加</button>
  <button @click="multiplit">乘</button>
 </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
import {INCREMENT_ACTION,DECREMENT_ACTION,multiplit_ACTION} from '../store/action-type';

export default {
  
  data () {
    return {
      title:'hello'
    }
  },
  mounted() {
    
  },
  methods: {
    increment(){
      // setTimeout(()=>{
      //   this.$store.commit({
      //     type:INCREMENT,
      //     payload:100
      //   });
      // },2000)
      this.$store.dispatch({
        type:INCREMENT_ACTION,
        payload:100
      })
    },
    decrement(){
      this.$store.dispatch({
        type:DECREMENT_ACTION,
        payload:50
      })
    },
    multiplit(){
      this.$store.dispatch({
        type:multiplit_ACTION,
        payload:{
          inp:2,
          mul:3
        }
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
