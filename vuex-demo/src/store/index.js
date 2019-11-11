import Vue from 'vue';
import Vuex from 'vuex';
import {INCREMENT} from '../store/mutation-type';

Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    [INCREMENT](state,data){
      state.count+=data.payload;
    }
  },
  getters:{
    doublestate(state){
      return state.count*2
    },
    tripblestate(state){
      return state.count*3
    },
    addstate(state,getters){
      return getters.doublestate+getters.tripblestate;
    },
    addcount(state,getters){
      return (id)=>{
        return getters.doublestate+id;
      }
    }
  },
  actions:{
    addment({commit},action){
      setTimeout(()=>{
        commit(action);
      },2000)
      // console.log(context);
    }
  }
})

export default store