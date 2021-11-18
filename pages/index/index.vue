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
				<swiper-item v-for="item1 in tabsListData" :key='item1.id'>
					<scroll-list>
						<view v-for="item2 in item1.list" :key="item2.id">
							<diary-item :list="item2"></diary-item>
						</view>
					</scroll-list>
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
	import scrollList from "../../components/scrolllist/scrolllist.vue"
	import diaryItem from "../../components/diaryItem/diaryItem.vue"
	export default {
		components: {
			scrollList,
			diaryItem
		},
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
				tabsListData: [{
						name: '关注',
						id: 822,
						list: [{
								id: 561,
								userid: 7821,
								username: "ksks",
								following: false,
								circle:'美食',
								comments:23,
								commentsData:[],
								avatar: "https://s3.bmp.ovh/imgs/2021/11/f0007619e29465d0.jpg",
								badge: [],
								content: "范家发为范家发为比办公空间不可被概括为对的范家发为比办对的范家发为比办对的范家发为比办对的范公空间不可被概括为比办公空范家发为范家发为比办公空间不可被概括为对的范家发为比办对的范家发为比办对的范家发为比办对的范公空间不可被概括为比办公空间不可被概括为间不可被概括为",
								imgArray: [
									"https://s3.bmp.ovh/imgs/2021/11/91650c5bd05e52d2.jpg",
									"https://s3.bmp.ovh/imgs/2021/11/12628cf8aa4a62c7.jpg",
									"https://s3.bmp.ovh/imgs/2021/11/e2598f87131a75db.png",
									"https://s3.bmp.ovh/imgs/2021/11/6deded1a6fb9c0f9.png",
									"https://s3.bmp.ovh/imgs/2021/11/f0007619e29465d0.jpg",
									"https://s3.bmp.ovh/imgs/2021/11/ead26623c4006561.jpg",
									"https://s3.bmp.ovh/imgs/2021/11/bf8fffd2a4f239ef.jpg"
								]
							}
					 
						]
					},
					{
						name: '推荐',
						id: 366,
						list: [{
							id: 684,
							userid: 6347,
							username: "ksks",
							following: false,
							circle:'美食',
							comments:23,
							commentsData:[],
							avatar: "https://s3.bmp.ovh/imgs/2021/11/f0007619e29465d0.jpg",
							badge: [],
							content: "范家发为范家发为比办公空间不可被概括为对的范家发为比办对的范家发为比办对的范家发为比办对的范公空间不可被概括为比办公空间不可被概括为",
							imgArray: [
								"https://s3.bmp.ovh/imgs/2021/11/f0007619e29465d0.jpg"
							]
						}]
					},
					{
						name: '热门',
						id: 9431,
						list: []
					}
				],

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
