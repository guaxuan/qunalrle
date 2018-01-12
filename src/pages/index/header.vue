<template>
	<div class = "header">
		<div class = "back iconfont">&#xe624;</div>
		<div class="search">
			<span class="iconfont search-icon">&#xe741;</span>请输入搜索内容
		</div>
		<div class="city">北京</div>
	</div>
</template>

<script>
	export default {
		name: 'index-header'
	}
</script>

<style lang = "stylus" scoped>
	@import '../../assets/stylus/varibles.styl';
	.header
		display: flex
		height: .88rem
		line-height: .88rem
		background: $bgColor
		color: #fff
		.back
			width: .58rem
			text-align: center
		.search
			flex: 1
			height: .6rem
			line-height: .6rem
			margin: .14rem .2rem
			padding-left: .2rem
			background: #fff
			border-radius: .1rem
			color: #999
			.search-icon
				position: relative
				top: .02rem
				padding-right: .04rem
		.city
			padding-right: .6rem
			position: relative
			&:before
				position: absolute
				top: .34rem
				right: .2rem
				content: "\0020"
				width: 0
				height: 0
				border-left: .14rem solid transparent
				border-right: .14rem solid transparent
				border-top: .14rem solid #fff
</style>
