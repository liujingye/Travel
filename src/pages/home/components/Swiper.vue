<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
	    <!-- slides -->
	    <swiper-slide v-for="item of swiperList" :key="item.id">
	    	<img class="swiper-img" :src="item.imgUrl"/>
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div>
	    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
	  </swiper>
  </div>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		data () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					loop:true,
					/*swiperButtonPre: '.swiper-button-prev',
					swiperButtonNext: '.swiper-button-next',
					swiperScrollbar: '.swiper-scrollbar' */
				},
				swiperList: [{
					id: '0001',
					imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/d74b0949794af25e495727702c380f28.jpg_890x330_b315a134.jpg'
				},{
					id: '0002',
					imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/466e1fc1336afbabc006e217dfe69d07.jpg_890x330_b91967db.jpg'
				}]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
	.wrapper
		overflow:hidden
		width: 100%
		height: 0
		padding-bottom: 37.08%
		background: #eee
		.swiper-img
			width: 100%
</style>