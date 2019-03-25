<template>
	<div>
		<ul class="list">
			<li class="item" 
			v-for="item of letters" 
			:key="item" 
			:ref="item"
			@touchstart.prevent="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
			@click="handleLetterClick"> <!-- 1.循环绑定click事件 .prevent事件修饰符阻止touchstart的默认行为解决滚动字母表时整个页面跟着滚动的行为-->
			{{item}} 
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'CityAlphabet',
		props: {
			cities:Object
		},
		computed: {
			letters () {
				const letters = []
				for (let i in this.cities) {
					letters.push(i)
				}
				return letters//['A','B'...]
			}
		},
		data () {
			return {
				touchStatus: false,
				startY: 0,
				timer: null
			}
		},
		//当页面的数据更新同时页面完成了自己的渲染时执行
		updated () {
			this.startY=this.$refs['A'][0].offsetTop
		},
		methods: {
			handleLetterClick (e) {
				//2.向外触发change事件，事件携带内容e.target.innerText
				this.$emit('change',e.target.innerText)
			},
			handleTouchStart () {
				this.touchStatus=true
			},
			handleTouchMove (e) {
				if (this.touchStatus) {
					//通过函数截留的方式减少handleTouchMove的执行频率，提升网页性能
					if (this.timer) {
						clearTimeout(this.timer)
					}
					this.timer=setTimeout(() => {
						//const startY=this.$refs['A'][0].offsetTop//offsetTop值是固定的，每次都要计算，性能比较低
						const touchY=e.touches[0].clientY-79
						const index=Math.floor((touchY-this.startY)/13.6)
						if (index>=0 && index<this.letters.length){
							this.$emit('change',this.letters[index])
						}
					},16)//如果正在做这件事，则延迟16ms后再执行，若在这16ms之间又做了手指的滚动，会将上次要做的操作清除掉，重新执行这次要做的事
				}
			},
			handleTouchEnd () {
				this.touchStatus=false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 1.58rem
		right: 0
		bottom: 0
		width: .4rem
		.item
			line-hight: .4rem
			text-align: center
			color: $bgColor
</style>