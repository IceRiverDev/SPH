import request from "@/api/request";
import requestMock from "@/api/mockRequests"

export const reqCategoryList = () => {
    return request({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

export const reqGetBannerList = () => {
    return requestMock({
        url: '/banner',
        method: 'get'
    })
}

export const  reqGetFloorList = () => {
    return requestMock({
        url: "/floor",
        method: 'get'
    })
}

export const reqGetSearchInfo = (params) => {
    return request({
        url: "/list",
        method: "post",
        data: params
    })
}

export const reqGetGoodsInfo = (skuId) => {
    return request({
        url: `/item/${skuId}`,
        method: "get",
    })
}

export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    return request({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}
