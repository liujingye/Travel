<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
	    	<swiper-slide
	    		v-for="(item,index) in imgs"
	    		:key="index"
	    	>
	    		<img class="gallary-img" :src="item"/>
				<div class="banner-info"></div>
	    	</swiper-slide>
	    	<!-- 分页，标注页码 -->
	    	<div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CommonGallary',
		props: {
			imgs: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {
			handleGallaryClick () {
				this.$emit('close')
			}
		},
		data () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					paginationType: 'fraction',/*分数形式的分页标注*/
					observeParents: true,
					observer: true//swiper插件观察到这个元素或父元素发生了dom结构变化时会自动自我刷新一次，解决swiper宽度计算问题。开始swiper默认隐藏，再次显示出来时swiper计算宽度有问题，导致轮播图无法正常滚动
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
 html
 	.container >>> .swiper-container
 		overflow: inherit
	.container
		display: flex
		flex-direction: column
		justify-content: center
		z-index: 99
		position: fixed
		left: 0
		right: 0
		top: 0
		bottom: 0
		background: #000
		.wrapper
			height: 0
			width: 100%
			padding-bottom: 100%
			.gallary-img
				width: 100%
			.swiper-pagination
				color: #fff
				bottom: -1rem
</style>