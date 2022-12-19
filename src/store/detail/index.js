import {reqAddOrUpdateShopCart, reqGetGoodsInfo} from "@/api";

const state = {
    goodsInfo: {},
}

const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    },
}

const actions = {
    async getGoodsInfo(context, skuId) {
        let result = await reqGetGoodsInfo(skuId)
        if (result.code === 200) {
            context.commit('GETGOODSINFO', result.data)
        }
    },
    async addOrUpdateCart(context, {skuId, skuNum}) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        console.log(result)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {}
    },
    spuSaleAttrList() {
        return state.goodsInfo.spuSaleAttrList || []
    }
}

export default  {
    state,
    mutations,
    actions,
    getters
}
