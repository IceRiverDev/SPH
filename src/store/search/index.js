import {reqGetSearchInfo} from "@/api";

const state = {
    searchList: {}
}

const mutations = {
    SEARCHLIST(state, result) {
        state.searchList = result
    }
}

const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    attributeList(state) {
        return state.searchList.attrsList || []
    },
    trademarkList() {
        return state.searchList.trademarkList || []
    },
    pageNo(state) {
        return state.searchList.pageNo
    },
    pageSize(state) {
        return state.searchList.pageSize
    },
    total(state) {
        return state.searchList.total
    },
    totalPages() {
        return state.searchList.totalPages
    },
}

const actions = {
    async getSearchList(context, params = {}) {
        let result = await reqGetSearchInfo(params);
        if (result.code === 200) context.commit('SEARCHLIST', result.data)
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
