<template>
	<view class="content">

		<u-navbar title="详情" back-icon-color="#5098FF"></u-navbar>

		<view class="main">
			<scroll-view scroll-y="true" style="height: 100%;">
				<diary-item :list="content" :detailpage="true" @togglelike="togglelike" @togglefolow="togglefolow"
					@togglecollect="togglecollect" @report="report" @todetail="todetail" @checklocation="checklocation"
					@tocirclepage="tocirclepage" @touserdetail="userdetail">
				</diary-item>
				
				<view class="comment_box">
					<view class="title">评论(32)</view>
				</view>
			</scroll-view>
		</view>


		<u-top-tips ref="uTips" :navbar-height="statusBarHeight + navbarHeight"></u-top-tips>
	</view>
</template>

<script>
	import DiaryItem from "../../components/diaryItem/diaryItem.vue"
	
	export default {
		components:{
			DiaryItem
		},
		data() {
			return {
				// 状态栏高度，H5中，此值为0，因为H5不可操作状态栏
				statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
				// 导航栏内容区域高度，不包括状态栏高度在内
				navbarHeight: 44,
				contentID: '',
				content: {
					id: 561,
					userid: 7821,
					username: "ksks",
					following: false,
					collect: false,
					circle: '美食',
					circleid: 8113,
					comments: 23,
					commentsData: [],
					location: {
						longitude: 115.8587658,
						latitude: 28.7591635,
					},
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
				}, 
			}
		},
		onLoad(option) {
			this.contentID = option.id
		},
		methods: {
			togglelike(id) {

				console.log("togglelike 文章id为 " + id)

			},
			togglefolow(id) {
				console.log("togglefolow 用户id为 " + id)
				this.$refs.uTips.show({
					title: '关注/取消关注成功'
				});

			},
			togglecollect(id) {
				console.log("togglecollect 文章id为 " + id)
				this.$refs.uTips.show({
					title: '收藏/取消收藏成功'
				});
			},
			report(id) {
				console.log("report 举报 文章id为 " + id)
			},
			todetail(id) {
				console.log("todetail 跳转文章详情 文章id为 " + id)

				// uni.navigateTo({
				// 	url: `../contentdetail/contentdetail?id=${id}`
				// })

			},
			checklocation(location) {
				uni.openLocation({
					longitude: location.longitude,
					latitude: location.latitude
				})
			},
			tocirclepage(params) {
				uni.navigateTo({
					url: `../circledetail/circledetail?id=${params.id}&name=${params.name}`
				})
			},
			userdetail(id) {
				uni.navigateTo({
					url: `../userdetail/userdetail?id=${id}`
				})
			},
		},
		computed: {

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




			.main {
				flex: 1;
				overflow: hidden;
				position: relative;
				// background-color: pink;
				
				.comment_box{
					padding: 0 20rpx;
					
					.title{
						width: 100%;
						font-size: 32rpx;
					}
				}
			}


		}
	}
</style>
