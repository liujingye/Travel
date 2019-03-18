<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list 
		:cities="cities" 
		:hot="hotCities"
		:letter="letter" 
		><!-- 7.将letter传递给子组件city-list -->
		</city-list>
		<city-alphabet 
		:cities="cities"
		@change="handleLetterChange"> <!--3.绑定监听change事件-->
		</city-alphabet>
	</div>
</template>

<script>
	import axios from 'axios'
	import CityHeader from './components/Header'
	import CitySearch from './components/Search'
	import CityList from './components/List'
	import CityAlphabet from './components/Alphabet'
	export default {
		name: 'City',
		components: {
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data () {
			return {
				cities: {},
				hotCities: [],
				//5.通过属性的形式将letter数据传递给子组件city-list,默认值为空
				letter:''
			}
		},
		methods: {
			getCityInfo () {
				axios.get('/api/city.json')
					.then(this.handleGetCityInfoSucc)
			},
			handleGetCityInfoSucc (res) {
				res = res.data
				if (res.ret && res.data) {
					const data = res.data
					this.cities = data.cities
					this.hotCities = data.hotCities
				}
			},
			//4.父组件City接收到子组件Alphabet传递的letter数据
			handleLetterChange(letter) {
				//6.接收到外部传来的letter数据时
				this.letter=letter
			}
		},
		mounted () {
			this.getCityInfo()
		}
	}
</script>

<style lang="stylus" scoped></style>
