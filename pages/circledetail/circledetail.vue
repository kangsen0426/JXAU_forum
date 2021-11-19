<template>
	<view class="content">

		<u-navbar back-icon-color="#5098FF">
			<view class="tag_title">
				<i class="iconfont icon-jinghao"></i>
				{{circle}}
			</view>
		</u-navbar>

		<view class="main">
			<scroll-view scroll-y="true" style="height: 100%;">
				圈子详情 圈子id {{circleID}}
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
				circleID: '',
				circle: ''
			}
		},
		onLoad(option) {
			this.circleID = option.id
			this.circle = option.name
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

			.tag_title {
				width: 100%;
				padding-left: 80rpx;
				display: flex;
				align-items: center;
				justify-content:center;
				// background-color: pink;
				i{
					margin-right: 10rpx;
					color: #5098FF;
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
