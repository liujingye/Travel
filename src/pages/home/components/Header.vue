<template>
<div>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
		  输入城市/景点/游玩主题
	  </div>
		<router-link to='/city'>
			<div class="header-right">
				<!-- {{this.$store.state.city}}this.$store=store/index.js的Vuex.Store -->
					{{this.city}}
				<span class="iconfont arrow-icon">&#xe64a;</span>
			 </div>
		</router-link>
	</div>
</div>	
</template>
	
<script>	
//import { mapState, mapGetters } from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
  	//mapState指把vuex里面的数据映射到这个组件的computed计算属性里，即把公用数据city映射到名为city的计算属性之中
  	...mapState (['city']),
  	//...mapGetters(['doubleCity'])
  }
}			
</script>		
			
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		display: flex
		// 1rem = html font-size = 50px ,(43px) ，86(2倍图)/100
		line-height: $headerHeight
		background: $bgColor
		color: #fff
		.header-left
			width: .64rem
			float: left
			.back-icon
				text-align: center
				font-size: .4rem
		.header-input
			flex: 1
			padding-left:.2rem
			height: .64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: .2rem
			background: #fff
			color: #ccc
			border-radius: .1rem
			//text-align: center
		.header-right
			min-width: 1.04rem
			float: right
			text-align: center
			color: #fff
			.arrow-icon
				margin-left: -.04rem
				font-size:.24rem 		
</style>
			