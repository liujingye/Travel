<template>
	<div>
		<div class="banner" @click="handleBannerClick"><!-- 3.绑定事件 -->
				<img class="banner-img" :src="bannerImg"/>
				<div class="banner-info">
					<div class="banner-tittle">
						{{this.sightName}}
					</div>
					<div class="banner-number">
						<span class="iconfont banner-icon">&#xe635;</span>
						{{this.gallaryImgs.length}}
					</div>
				</div>
		</div>
		<fade-animation>
			<!-- common-gallary以slot形式插入fade-animation组件中 -->
			<common-gallary 
				:imgs="gallaryImgs" 
				v-show="showGallary"
				@close="handleGallaryClose"
			>
		</common-gallary><!-- 1.common-gallary默认的形式是隐藏的，用showGallary控制gallary的显示和隐藏 -->
	</fade-animation>
	</div>	
</template>

<script>
	import CommonGallary from 'common/gallary/Gallary'
	import FadeAnimation from 'common/fade/FadeAnimation'
	export default {
		name: 'DetailBanner',
		props: {
			sightName: String,
			bannerImg: String,
			gallaryImgs: Array
		},
		data () {
			return {
				showGallary:false,//2.默认是false
			}
		},
		methods: {
			//4.写方法
			handleBannerClick () {
				this.showGallary=true
			},
			handleGallaryClose () {
				this.showGallary=false//gallary被点击时隐藏
			}
		},
		components: {
			CommonGallary,
			FadeAnimation
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		position: relative
		overflow: hidden
		height: 0
		padding-bottom: 55%
		.banner-img
			width: 100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			color: #fff
			background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.banner-tittle
				flex: 1
				font-size: .32rem
				padding: 0 .2rem
			.banner-number
				height: .32rem
				line-height: .32rem
				margin-top: .14rem
				padding: 0 .4rem
				border-radius: .2rem
				background: rgba(0,0,0,.8)
				font-size: .24rem
				.banner-icon
					font-size: .24rem
</style>