import Vue from 'vue';
import Vuex from 'vuex';
import {INCREMENT_MUTATION,DECREMENT_MUTATION,multiplit_MUTATION} from '../store/mutation-type';
import {INCREMENT_ACTION,DECREMENT_ACTION,multiplit_ACTION} from '../store/action-type';

Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
    count:0
  },
  mutations:{       //可以做时间旅行，但是不能进行时间旅行
    [INCREMENT_MUTATION](state,data){
      state.count+=data.payload;
    },
    [DECREMENT_MUTATION](state,data){
      state.count-=data.payload;
    },
    [multiplit_ACTION](state,data){
      state.count*=data.payload
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
  actions:{     //里面可以做任意的异步操作
    [INCREMENT_ACTION]({commit},action){
      return new Promise((reslove,reject)=>{
        setTimeout(()=>{
          commit({
            type:INCREMENT_MUTATION,
            payload:action.payload,
            
          })
          reslove()
        },2000)
      })
    },
    [DECREMENT_MUTATION]({commit},action){
      commit({
        type:DECREMENT_ACTION,
        payload:action.payload
      })
    },
    async [multiplit_MUTATION](context,action){
      await context.dispatch({
        type:INCREMENT_ACTION,
        payload:action.payload.inp
      })
      context.commit({
        type:multiplit_ACTION,
        payload:action.payload.mul
      })
    }
  }
})

export default store