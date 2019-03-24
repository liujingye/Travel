<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
<<<<<<< HEAD
		<detail-list></detail-list>
		<div class="content"></div>
=======
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
>>>>>>> detail-list
	</div>
</template>

<script>
	import DetailBanner from './components/Banner'
	import DetailHeader from './components/Header'
	import DetailList from './components/List'
	export default {
		name: 'Detail',
		components: {
			DetailBanner,
			DetailHeader,
			DetailList
<<<<<<< HEAD
=======
		},
		data () {
			return {
				list: [{
					title:'成人票',
					children: [{
						title: '成人三馆联票',
						children:[{
							title:'成人三馆联票-某一连锁店销售'
						}]
					},{
						title: '成人五馆联票'
					}]
				},{
					title:'学生票'
				},{
					title:'儿童票'
				},{
					title:'特惠票'
				},]
			}
>>>>>>> detail-list
		}
	}
</script>

<style lang="stylus" scoped>
	.content
		height:50rem
</style>