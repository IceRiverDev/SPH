import Vuex from 'vuex'
import Vue from "vue";
import home from '@/store/home'
import search from "@/store/search";
import detail from "@/store/detail";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail
    }
})
