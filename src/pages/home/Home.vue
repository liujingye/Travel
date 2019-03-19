<template>
	<div>
		<home-header></home-header>
		<home-swiper :list=swiperList></home-swiper>
		<home-icons :list=iconList></home-icons>
		<home-recommend :list=recommendList></home-recommend>
		<home-weekend :list=weekendList></home-weekend>
	</div>
</template>

<script>
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons'
	import HomeRecommend from './components/Recommend'
	import HomeWeekend from './components/Weekend'
	import axios from 'axios'
	import { mapState } from 'vuex'
	export default {
	  name: 'Home',
	  components: {
	    HomeHeader,
	    HomeSwiper,
	    HomeIcons,
	    HomeRecommend,
	    HomeWeekend
	  },
	  data () {
	  	return {
	  		lastCity: '',
	  		swiperList:[],
	  		iconList: [],
	  		recommendList: [],
	  		weekendList: []
	  	}
	  },
	  computed: {
	  	...mapState(['city'])
	  },
	  methods: {
	  	getHomeInfo() {
	  		//首页header城市改变时内容也需要跟着改变，即需要重新进行一次ajax请求,将city放在请求的参数里
	  		axios.get('/api/index.json?city=' + this.city)
	  			.then(this.getHomeInfoSucc)
	  	},
	  	getHomeInfoSucc (res) {
	  		res = res.data
	  		if (res.ret && res.data) {
	  			const data = res.data
	  			this.swiperList = data.swiperList
	  			this.iconList = data.iconList
	  			this.recommendList = data.recommendList
	  			this.weekendList = data.weekendList
	  		}
	  	}
	  },
	  mounted () {
	  	this.lastCity = this.city
	  	this.getHomeInfo ()
	  },
	  //首次执行页面时mounted和activated都会执行，再次返回时只执行activated
	  activated () {
	  	if (this.lastCity !== this.city) {
	  		this.lastCity = this.city
	  		this.getHomeInfo ()
	  	}
	  }
	}
</script>

<style></style>
