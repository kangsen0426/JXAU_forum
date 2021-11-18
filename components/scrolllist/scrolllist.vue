<template>
	<view class="scrolllist_wrap">
		<view :class="['loadingWraper',refresherTriggered ? 'isloading' : '']">
			<u-loading :show="true" size="36" color="#5098FF"></u-loading>
		</view>
		<scroll-view class="scroll" scroll-y="true" refresher-enabled refresher-default-style="none"
			:refresher-threshold='10' @refresherrestore="refresherrestore" :refresher-triggered="refresherTriggered"
			@refresherrefresh="refresherrefresh" @scrolltolower="scrolltolower">
			<slot></slot>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		name: "scrolllist",
		data() {
			return {
				timer: null,
				refresherTriggered: false, //下拉刷新的状态
				bottomRefresherTriggered: false, //上拉加载的状态
			};
		},
		methods: {
			refresherrefresh() {
				this.refresherTriggered = true
				console.log("下拉刷新~")

				setTimeout(() => {
					this.refresherTriggered = false

				}, 2000)


			},
			refresherrestore() {
				console.log("刷新结束~")
			},
			scrolltolower() {

				// if (this.timer) {
				// 	//还在刷新中
				// 	return
				// }

				console.log("上拉加载~")
				// this.bottomRefresherTriggered = true;

				// this.timer = setTimeout(() => {
				// 	this.bottomRefresherTriggered = false
				// 	this.timer = null
				// }, 2000)

			},
		}
	}
</script>

<style lang="less" scoped>
	.scrolllist_wrap {
		height: 100%;
		width: 100%;

		.loadingWraper {
			width: 100%;
			height: 0rpx;
			opacity: 0;
			transition: all 0.5s;
			// background-color: pink;
			text-align: center;
			overflow: hidden;
		}

		.isloading {
			height: 45rpx;
			opacity: 1;
		}

		.scroll {
			height: 100%;
			box-sizing: border-box;
			padding-bottom: 90rpx;
			// background-color: pink;
		}
	}
</style>
