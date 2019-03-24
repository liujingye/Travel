<template>
	<div>
		<!-- 循环组件一级内容 ,注意写循环内容的位置-->
		<div class="item"
			v-for="(item,index) of list" 
			:key="index"	
		>
			<div class="item-title border-bottom">
				<span class="item-title-icon"></span>
				{{item.title}}
			</div>
			<!-- 二级标题，递归组件，组件自身调用自己，若有item.children说明是多级菜单 子组件中的调用需要和父组件保持同步-->
			<div v-if="item.children" class="item-children">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailList',//名字大多时候在使用递归组件时使用
		props:{
			list:Array
		},
>>>>>>> detail-list
	}
</script>

<style lang="stylus" scoped>
	.item-title 
		line-height: .8rem
		font-size: .32rem
		padding: 0 .2rem
		.item-title-icon 
			position: relative
			left: .06rem
			top: .06rem
			display: inline-block;
			width: .36rem
			height: .36rem
			background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
			margin-right: .1rem
			background-size: .4rem 3rem
	.item-children 
		padding: 0 .2rem
>>>>>>> detail-list
</style>