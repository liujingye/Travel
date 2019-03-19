import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	//公用数据state
	state,
	/*//在这个过程没有任何异步操作，而且操作简单没有批量操作，组件可以直接调用mutation
	actions: {
		//两个参数，上下文借助ctx拿到commit方法和传递过来的数据city。action接收传过来的city
		changeCity (ctx,city) {
			//commit执行changeCity这个mutation，传的内容是city
			ctx.commit('changeCity', city)
		}
	},*/
	//actions已经接收到传过来的city，需要调用mutations来改变公用的数据
	mutations,
	getters: {
		doubleCity (state) {
			return state.city + ' ' + state.city
		}
	}
})
