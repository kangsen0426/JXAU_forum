<template>
	<view class="content">
		
		<u-navbar title="搜索"></u-navbar>
		<view class="slot-wrap">
			<u-search class="index_search" :clearabled="true"></u-search>
		</view>
		
		<view class="main">
			<scroll-view scroll-y="true" style="height: 100%;">
				搜索页面
			</scroll-view>
		</view>


	
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
				contentID:''
			}
		},
		onLoad(option) {
			this.contentID = option.id
		},
		methods: {
			...mapMutations([])
		},
		computed: {
			...mapGetters([])
		}
	}
</script>

<style lang="scss" scoped>
	page {
		width: 100%;
		height: 100%;

		.content {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			
			.slot-wrap {
				display: flex;
				align-items: center;
				width: 100%;
				/* 如果您想让slot内容占满整个导航栏的宽度 */
				/* flex: 1; */
				/* 如果您想让slot内容与导航栏左右有空隙 */
				padding: 0 30rpx;
				// background-color: pink;
			
				.index_search {
					width: 100%;
				}
			}




			.main {
				flex: 1;
				overflow: hidden;
				position: relative;
				// background-color: pink;
			}


		}
	}
</style>
