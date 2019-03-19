<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" 
						v-for="item of hot" 
						:key="item.id"
						@click="handleCityClick(item.name)"
					>
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div 
				class="area" 
				v-for="(item, key) of cities" 
				:key="key"
				:ref="key"
			><!-- 11.ref=key,key=A,B,C...-->
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div 
						class="item border-bottom" 
						v-for="innerItem of item" 
						:key="innerItem.id"
						@click="handleCityClick(innerItem.name)"
					>
						{{innerItem.name}}
					</div>
				</div>
			</div>
	</div>
</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	import { mapState,mapMutations } from 'vuex'
	export default {
		name: 'CityList',
		props: {
			hot: Array,
			cities: Object,
			/*8.父组件City传递letter，子组件List接收letter*/
			letter: String
		},
		computed: {
			...mapState({
				currentCity: 'city'
			})
		},
		methods: {
			handleCityClick (city) {
				//action派发一个名为changeCity的Action,将city传过去
				//this.$store.dispatch('changeCity',city)
				//通过commit直接调用mutation
				//this.$store.commit('changeCity',city)
				this.changeCity(city)
				this.$router.push('/')
			},
			//将名为changeCity的mutation映射到这个组件中名为changeCity的方法中
			...mapMutations(['changeCity'])
		},
		mounted () {
			this.scroll = new Bscroll(this.$refs.wrapper)
		},
		/*9.借助vue侦听器 一旦letter变化就执行*/
		watch: {
			letter () {
				if (this.letter) {
					//12通过this.$refs获取letter对应的class=area的区域
					const element = this.$refs[this.letter][0]//this.$refs[this.letter]为数组不是一个标准的dom元素
					//10.让berrer-scroll区域自动滚动到某个元素上
					this.scroll.scrollToElement (element)
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.border-topbottom
		&:before
			border-color: #ccc
		&:after
			border-color: #ccc
	.border-bottom
		&:before
			boerder-color: #ccc
	.list
		overflow: hidden
		position: absolute
		top: 1.58rem
		left: 0
		right: 0
		bottom: 0
		.title
			line-height: .54rem
			background: #eee
			padding-left: .2rem
			color: #666
			font-size: .26rem
		.button-list
			overflow: hidden
			padding: .1rem .6rem .1rem .1rem
			.button-wrapper
				float: left
				width: 33.33%
				.button
					margin: .1rem
					padding: .1rem 0
					text-align: center
					border: .02rem solid #ccc
					border-radius: .06rem
	.item-list
		.item
			line-height: .76rem
			padding-left: .2rem
</style>
