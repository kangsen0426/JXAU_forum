<template>
	<view class="content">

		<!-- 自定义导航栏放这-->
		<u-navbar :is-back="false">
			<view class="slot-wrap">
				<u-search class="index_search" :clearabled="true" :show-action="false" disabled></u-search>
			</view>
		</u-navbar>

		<!-- 内容写进main里  如果滚动区域不同，改变scroll-view的位置-->
		<view class="main">

			<view class="index_tabs">
				<view class="left_tabs">
					<u-tabs bar-width="20" :list="tabs.list" :current="tabs.current" @change="Tabschange"></u-tabs>
				</view>
				<view class="right_menu">
					<i class="iconfont icon-caidan"></i>
				</view>
			</view>



			<swiper class="swiper" :current="tabs.current" @change="swiperchange">
				<swiper-item v-for="(item,index) in tabsListData" :key='index'>
					{{item.name}}
				</swiper-item>
			</swiper>



		</view>


		<u-tabbar :list="getTabBar" :mid-button="true" active-color="#5098FF"></u-tabbar>
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
				tabs: {
					list: [{
						name: '关注'
					}, {
						name: '推荐'
					}, {
						name: '热门'
					}],
					current: 1
				},
				tabsListData:[
					{
						name:'关注'
					},
					{
						name:'推荐'
					},
					{
						name:'热门'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			Tabschange(index) {

				//tab点击切换

				this.tabs.current = index;
				console.log("切换到：" + this.tabs.list[index].name)
			},
			swiperchange(e) {
				//swiper 滑动切换
				//同步tab 栏
				this.tabs.current = e.detail.current
			}

		},
		computed: {
			...mapGetters(['getTabBar'])
		}
	}
</script>

<style lang="less">
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

				.index_search {
					width: 100%;
				}
			}



			.main {
				flex: 1;
				overflow: hidden;
				position: relative;
				// background-color: pink;

				.index_tabs {
					width: 100%;
					height: 80rpx;
					display: flex;
					
					// background-color: pink;

					.left_tabs {
						width: calc(100% - 80rpx);
						height: 100%;
					}

					.right_menu {
						width: 80rpx;
						height: 100%;
						transform: rotateZ(90deg);
						display: flex;
						align-items: center;
						justify-content: center;
						box-shadow: rgba(0, 0, 0, 0.45) 0px 25rpx 20rpx -28rpx;

						i {
							font-size: 42rpx;
							transform: rotateZ(90deg);
						}

					}
				}

				.swiper {
					width: 100%;
					height: 100%;
					// background-color: pink;

				}
			}


		}
	}
</style>
