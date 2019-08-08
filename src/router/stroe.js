import Vue from 'vue'
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)
export default new Vuex.store({
    // 状态
    state:{
        num:0
    },
    mutations:{
        add(state){
            console.log(this.state.num)
            state.num++
        },
        reduce(state){
            console.log(this.state.num)
            state.num--
        }
    }

})