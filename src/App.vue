<template>
  <div id="app">
    <!-- 显示当前路由地址所对应的内容 ,keep-alive 路由被加载一次后就把路由之中的内容放到内存之中，下一次再进入这个路由的时候不需要再次渲染这个组件重新执行钩子函数，直接从内存之中把以前的内容显示就可以。exclude除去组件Detail不做缓存外，其他的都做缓存-->
    <keep-alive exclude="Detail">
    	<router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	
</style>
