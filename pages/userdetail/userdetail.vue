<template>
	<view class="content">
		
		<u-navbar title="用户" back-icon-color="#5098FF"></u-navbar>

		<view class="main">
			<scroll-view scroll-y="true" style="height: 100%;">
				用户详情 用户id {{userid}}
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
				userid:''
			}
		},
		onLoad(option) {
			this.userid = option.id
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




			.main {
				flex: 1;
				overflow: hidden;
				position: relative;
				// background-color: pink;
			}


		}
	}
</style>
