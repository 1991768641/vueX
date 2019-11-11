<template>
 <div>
   {{count}} / {{message}}

 <button @click="handleclick">add</button>
 </div>
</template>

<script>
import {mapState} from 'vuex'
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
      this.$store.commit('increment');
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
      count:state=>state.count
    })
  },
}

</script>
<style lang='' scoped>
</style>
