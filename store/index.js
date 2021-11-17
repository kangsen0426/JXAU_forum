import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {

		tabBarlist: [{
			pagePath: "/pages/index/index",
				iconPath: "home",
				selectedIconPath: "home-fill",
				text: '首页',
				customIcon: false,
			},
			{
				pagePath: "/pages/circle/circle",
				iconPath: "photo",
				selectedIconPath: "photo-fill",
				text: '圈子',
				customIcon: false,
			},
			{
				pagePath: "/pages/add/add",
				iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
				selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
				text: '发布',
				midButton: true,
				customIcon: false,
			},
			{
				pagePath: "/pages/message/message",
				iconPath: "play-right",
				selectedIconPath: "play-right-fill",
				text: '消息',
				count: 23,
				isDot: false,
				customIcon: false,
			},
			{
				pagePath: "/pages/home/home",
				iconPath: "account",
				selectedIconPath: "account-fill",
				text: '我的',
				
				customIcon: false,
			},
		]
	},
	getters: {
		getTabBar(state) {
			return state.tabBarlist
		}
	},
	mutations: {

	},
	actions: {

	}
})

export default store
