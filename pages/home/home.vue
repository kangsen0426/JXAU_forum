<template>
	<view class="content">


		<view class="main">
			<scroll-view scroll-y="true" style="height: 100%;">
				home
			</scroll-view>
		</view>


		<u-tabbar :list="getTabBar" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	import {
		mapMutations,
		mapGetters
	} from 'vuex';

	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			...mapMutations([])
		},
		computed: {
			...mapGetters(['getTabBar'])
		}
	}
</script>

<style lang="less" scoped>
	page {
		width: 100%;
		height: 100%;

		.content {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;




			.main {
				flex: 1;
				overflow: hidden;
				position: relative;
				// background-color: pink;
			}


		}
	}
</style>
