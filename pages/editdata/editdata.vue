<template>
	<view class="content">
		<u-navbar back-text="个人信息"></u-navbar>
		<view class="main">
			<scroll-view scroll-y="true" style="height: 100%;">
				<view class="edit-head">
					<view class="head">
						<u-avatar :src="src" mode="square" size='130'></u-avatar>
					</view>
					<view class="edit-icon">
						<u-icon name="edit-pen-fill"></u-icon>
					</view>

				</view>
				<view class="message-box">
					<u-form :model="form" ref="uForm" label-position='top'>
						<u-form-item label="昵称" :label-style='labelStyle'>
							<u-input v-model="form.name" />
						</u-form-item>
						<u-form-item label="签名">
							<u-input v-model="form.intro" />
						</u-form-item>
						<u-form-item label="生日">
							<u-input v-model="form.birthday" type="select" @click='show=true'></u-input>

						</u-form-item>
					</u-form>
					<view>
						<view class="bgd">个人背景</view>
						<u-upload :action="action" :max-count="1" :file-list="fileList"></u-upload>

					</view>
				</view>


			</scroll-view>
		</view>
		<view class="picker">
			<u-picker mode="time" start-year="1990" v-model="show" :params="params" @confirm='confirm'></u-picker>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				//这里要用后端服务器的地址，这是组件默认的演示地址，会报错
				
				action: 'http://www.example.com/upload',
				fileList: [{
					url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
				}],
				src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.91ye.cn%2FFileUpload%2Fixncfkctiwn.jpg&refer=http%3A%2F%2Fwww.91ye.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639892114&t=d2dc977adbd4382ce4cb1f9d1db9c6c2',
				params: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},

				show: false,
				form: {
					name: '',
					intro: '',
					birthday: ''
				},



			};
		},
		methods: {
			confirm(e) {
				console.log(e);
				this.form.birthday = e.year + '年' + e.month + '月' + e.day + '日'

			}
		}

	}
</script>
<style>
	page {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>
<style lang="scss">
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.main {
		flex: 1;
		overflow: hidden;
		position: relative;

		.message-box {
			align-items: center;
			padding: 20rpx 50rpx;
			// border: 1px red solid;
		}

		.edit-head {
			display: flex;
			// width: 100rpx;
			// height: 100rpx;
			// background-color: red;
			padding: 20rpx 50rpx;
			flex-direction: row;
			
			align-items: flex-end;
			.head {
				border-radius: 30rpx;
				overflow: hidden;
			}

			.edit-icon {
				font-size: 34rpx;
				margin-left: 20rpx;

			}
		}

		.bgd {
			margin-top: 30rpx;
		}

		// .picker{
		// 	width: 100vw;
		// 	height: 400rpx;
		// }
	}
</style>
