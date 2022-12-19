import Vue from "vue";
import VueRouter from 'vue-router'

import routes from "@/router/routes";

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject)
        originalPush.call(this, location, resolve, reject)
    else
        originalPush.call(this, location, () => {
        }, () => {
        })
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject)
        originalReplace.call(this, location, resolve, reject)
    else
        originalReplace.call(this, location, () => {
        }, () => {
        })
}

export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y: 0}
    }
})
