<template>
	<view class="content">
		<u-navbar :is-back="true" back-icon-color="#5098FF" title="xsx写" title-color="#000"></u-navbar>

		<view class="main">
			

		</view>
		
		
	</view>
</template>

<script>
	import safeFooter from "../../components/safe-footer/safe-footer.vue"

	export default {
		components: {
			safeFooter
		},
		data() {
			return {
				
			}
		}

	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
		background-color: #fff;

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
