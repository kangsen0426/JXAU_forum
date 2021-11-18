<template>
	<view class="daily_wrap">
		<view class="top_wrap">
			<view class="left">
				<view class="user_avatar">
					<u-image :src="list.avatar" height="100%" border-radius="50%"></u-image>
				</view>
				<view class="user_name">
					{{list.username}}
				</view>
				<view class="badge">
					<i class="iconfont icon-guanliyuan_guanliyuanliebiao"></i>
				</view>
			</view>
			<view class="right">
				<view class="button_wrap">
					<view class="button">
						<u-icon v-if="list.following" name="checkbox-mark"></u-icon>
						{{list.following ? '已关注' : '关注'}}
					</view>
				</view>
				<view class="more_option">
					<i class="iconfont icon-xianxingtubiaozhizuomoban-25"></i>
				</view>
			</view>
		</view>
		<view class="diary_content">
			<view class="text_area">
				<u-read-more :show-height="200" :toggle="true" text-indent="0">
						<rich-text :nodes="list.content"></rich-text>
				</u-read-more>
			</view>
			<view class="image_box">
				<view v-if="index < 5" :class="['outer_box',list.imgArray.length === 1 ? 'outer_box_onlyone' : '']" v-for="(item,index) in list.imgArray" :key="index">
					<u-image :src="item" height="100%"></u-image>
				</view>
				<view v-if="list.imgArray.length >= 6" class="outer_box_verymore">
					+{{list.imgArray.length - 5}}
				</view>
			</view>
		</view>
		<view class="bottom">
			<view>
				<span class="bottom_tag location">
					<i class="iconfont icon-weizhi"></i>
				</span>
				<span class="bottom_tag">
					<i class="iconfont icon-jinghao"></i>
					{{list.circle}}
				</span>
			</view>
			<view class="options">
				<i class="iconfont icon-fenxiang"></i>
				<i class="iconfont icon-xiaoxi midle"><span>{{list.comments}}</span></i>
				<i class="iconfont icon-xihuan1"></i>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"diaryItem",
		props:{
			list:{
				type:Object,
				default:{},
				required:true
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
.daily_wrap{
	padding: 20rpx;
	.top_wrap{
		height: 100rpx;
		display: flex;
		// background-color: pink;
		
		.left{
			width: 70%;
			height: 100%;
			display: flex;
			align-items: center;
			// background-color: yellow;
			
			.user_avatar{
				width: 80rpx;
				height: 80rpx;
				margin-right: 20rpx;
				
				
			}
			
			.user_name{
				max-width: 180rpx;
				margin-right: 20rpx;
				font-weight: bold;
				overflow: hidden;
				text-overflow: ellipsis;
				/* 超出省略号 */
				white-space: nowrap;
			}
			
			.badge{
				
				i{
					padding-right: 10rpx;
					color: #5098FF;
				}
			}
		}
		
		.right{
			width: 30%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			.button_wrap{
				width: 60%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				.button{
					width: 95%;
					height: 70%;
					font-size: 18rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 60rpx;
					background-color: #fff;
					border: 1rpx solid rgba(0,0,0,0.1);
				}
			}
			
			.more_option{
				width: 30%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				// background-color: green;
				
				i{
					font-size: 42rpx;
				}
			}
			
		}
	}
	
	.diary_content{
		// height: 40rpx;
		// background-color: pink;
		
		.image_box{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			// justify-content: space-between;
			
			.outer_box{
				width: calc(100% / 3 - 10rpx);
				height: 240rpx;
				padding: 10rpx 0;
				padding-right: 10rpx;
				// background-color: pink;
			}
			
			.outer_box_onlyone{
				width: 80%;
				height: 340rpx;
			}
			
			.outer_box_verymore{
				width: calc(100% / 3 - 10rpx);
				height: 220rpx;
				padding: 10rpx 0;
				padding-right: 10rpx;
				text-align: center;
				line-height: 220rpx;
				font-size: 62rpx;
				color: #fff;
				background-color: rgba(0, 0, 0, 0.6);
			}
		}
		
	}
	
	.bottom{
		height: 50rpx;
		line-height: 50rpx;
		// background-color: pink;
		
		.bottom_tag{
			box-sizing: border-box;
			padding: 8rpx 20rpx;
			// min-width: 120rpx;
			// height: 40rpx;
			border-radius: 30rpx;
			font-size: 16rpx;
			margin-right: 20rpx;
			border: 1rpx solid rgba(0,0,0,0.1);
			
			i{
				font-size: 24rpx;
				margin-right: 5rpx;
				color: #5098FF;
			}
		}
		
		.location{
			
			i{
				margin-right: 0;
			}
		}
		
		.options{
			height: 70rpx;
			display: flex;
			line-height: 70rpx;
			justify-content: flex-end;
			border-bottom: 1rpx solid rgba(0,0,0,0.1);
			// background-color: pink;
			
			i{
				padding: 0 30rpx;
				font-size: 42rpx;
			}
			
			.midle{
				padding-right: 15rpx;
				
				span{
					font-size: 24rpx;
				}
			}
		}
	}
}
</style>
