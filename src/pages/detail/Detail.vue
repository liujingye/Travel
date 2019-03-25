<template>
	<div>
		<detail-banner 
			:sightName="sightName"
			:bannerImg="bannerImg"
			:gallaryImgs="gallaryImgs"
		>
		</detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
	import DetailBanner from './components/Banner'
	import DetailHeader from './components/Header'
	import DetailList from './components/List'
	import axios from 'axios'
	export default {
		name: 'Detail',//名字使用，递归组件时，keepalive取消缓存时，vue开发工具显示组件名
		components: {
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data () {
			return {
				sightName: '',
				bannerImg: '',
				gallaryImgs: [],
				list: []
			}
		},
		methods: {
			getDetailInfo () {
				/*axios.get('/api/detail.json?id=' + this.$route.params.id)*/
				axios.get('/api/detail.json', {
					params: {
						id: this.$route.params.id
					}
				}).then(this.handleGetDataSucc)//ajax获取完毕，输出结果，执行handleGetDataSucc函数
			},
			handleGetDataSucc (res) {
				res = res.data
				if (res.ret && res.data) {
					const data = res.data
					this.sightName = data.sightName
					this.bannerImg = data.bannerImg
					this.gallaryImgs = data.gallaryImgs
					this.list = data.categoryList
				}
			}
		},
		/*借助mounted生命周期钩子发送ajax请求*/
		/*南山滑雪场id是/detail/0002，但是并没有重新取数据。因为detail页面通过keepalive做了缓存，mounted只会执行一次，如果想重新进入该页面重新发送ajax请求可以配合使用activated生命周期函数或keep-alive exclude="Detail"*/
		mounted () {
			this.getDetailInfo()
		}
	}
</script>

<style lang="stylus" scoped>
	.content
		height:50rem
</style>
