import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
  	path: '/',
  	name: 'Home',
  	component: Home
	},{
		path: '/city',
		name: 'City',
		component: City
	},{
		path: '/detail/:id',//:id创建动态路由，/detail/固定，后面带参数放到id变量里面
		name: 'Detail',
		component: Detail
	}],
	/*解决页面之间拖动相互影响。每次作路由切换时，让新进入的页面x=0,y=0，页面切换时始终进入到最顶部*/
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})
