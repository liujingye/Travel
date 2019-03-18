<template>
	<div>
		<div class="search">
			<!-- 2.input框的值与keyword双向绑定 -->
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
		</div>
		<div 
		class="search-content" 
		ref="search"
		v-show="keyword"
		><!-- 当keyword有值时显示search-content -->
			<ul>
				<!-- 5.循环列表 -->
				<li 
				class="search-item border-bottom" 
				v-for="item of list"
				:key="item.id"
				>
					{{item.name}}
				</li>
				<li class="search-item border-bottom" v-show="hasNoData"><!-- list长为零时显示 -->
					没有找到匹配项
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default {
		name: 'CitySearch',
		//3.接收City中子组件传入的cities
		props: {
			cities: Object
		},
		data () {
			return {
				//1.定义搜索词,默认为空
				keyword: '',
				list: [],
				timer: null
			}
		},
		computed: {
			hasNoData () {
				return !this.list.length
			}
		},
		//4.侦听器侦听keyword
		watch: {
			keyword () {
				if (this.timer) {
					clearTimeout(this.timer)
				}
				//删除input时，清空列表
				if (!this.keyword) {
					this.list=[]
					return
				}
				this.timer=setTimeout(()=>{
					const result=[]
					//i='A','B'...
					for (let i in this.cities) {
						//value={"id": 56,"spell": "aba","name": "阿坝"},	...
						this.cities[i].forEach((value) => {
							if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
								result.push(value)
							}
						})
					}
					this.list=result
				},100)
			}
		},
		mounted () {
			this.scroll=new Bscroll(this.$refs.search)
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.search
		height: .72rem
		padding: 0 .1rem
		background: $bgColor
		.search-input
			box-sizing: border-box
			width: 100%
			height: .62rem
			padding: 0 .1rem
			line-hight: .62rem
			text-align: center
			border-radius: .06rem
			color: #666
	.search-content
		z-index: 1
		overfloe: hidden
		position: absolute
		top: 1.58rem
		left: 0
		right: 0
		bottom: 0
		background: #eee
		.search-item
			line-height: .62rem
			padding-left: .2rem
			background: #fff
			color: #666
</style>