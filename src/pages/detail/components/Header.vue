<template>
	<div>
		<router-link 
			tag="div" 
			to="/" 
			class="header-abs"
			v-show="showAbs"
		>
			<div class="iconfont header-abs-back">&#xe624;</div>
		</router-link>
		<div 
			class="header-fixed" 
			v-show="!showAbs"
			:style="opacityStyle"
		>
		<!-- 渐隐渐现，绑定动态style -->
			<router-link to="/">
				<div class="iconfont header-fixed-back">&#xe624;</div>
			</router-link>
			景点详情	
		</div>	
	</div>
</template>
								
<script>		
	export default {
		name: 'DetailHeader',
		data () {		
			return {
				showAbs: true,
				opacityStyle:{
					opacity: 0
				}
			}
		},
		methods: {
			handleScroll () {
				const top = document.documentElement.scrollTop
				if (top > 60) {
					let opacity = top / 140
					opacity = opacity > 1 ? 1 : opacity 
					this.opacityStyle = {opacity:opacity} 
					this.showAbs = false
				} else {
					this.showAbs = true
				}
			}
		},
		//用了keepalive,只要页面一被展示，activated钩子就被执行
		activated () {
			//绑定scroll事件，一旦scroll被执行，对应的this.handleScroll方法被执行
			window.addEventListener('scroll',this.handleScroll)
		},
		//对window全局事件解绑
		//页面即将被隐藏或即将被替换成新的页面时这个组件的deactivated钩子会被执行
		deactivated () {
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>
		
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.header-abs
		position: absolute
		left: .2rem
		top: .2rem
		width: .8rem
		height: .8rem
		line-height: .8rem
		border-radius: .4rem
		text-align: center
		background: rgba(0,0,0,.8)
		.header-abs-back
			color: #fff
			font-size: .4rem
	.header-fixed
		position: fixed
		top: 0
		left: 0
		right: 0
		height: $headerHeight
		line-height: $headerHeight
		text-align: center
		color: #fff
		font-size: .32rem
		background: $bgColor
		.header-fixed-back
			position: absolute
			top: 0
			left: 0
			width: .64rem
			text-align: center
			font-size: .4rem
			color: #fff
</style>