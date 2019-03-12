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
		<div class="header-right">
		  {{this.city}}
		  <span class="iconfont arrow-icon">&#xe64a;</span>
	  </div>
	</div>
</div>	
</template>
	
<script>	
export default {
  name: 'HomeHeader',
  props: {
  	city: String
  }
}			
</script>		
			
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		display: flex
		// 1rem = html font-size = 50px ,(43px) ，86(2倍图)/100
		line-height: .86rem
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
			width: 1.24rem
			float: right
			text-align: center
			.arrow-icon
				margin-left: -.04rem
				font-size:.24rem 		
</style>
			