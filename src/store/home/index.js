import {reqCategoryList, reqGetBannerList, reqGetFloorList} from "@/api";

const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
}

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}

const getters = {}

const actions = {
    async categoryList(context) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            context.commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList(context) {
        let result = await reqGetBannerList()

        if (result.code === 200) context.commit("BANNERLIST", result.data)
    },

    async getFloorList(context) {
        let result = await  reqGetFloorList()
        if (result.code === 200) context.commit('FLOORLIST', result.data)
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
