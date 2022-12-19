import Home from "@/pages/Home/Home.vue";
import Search from "@/pages/Search/Search.vue";
import Register from "@/pages/Register/Register.vue";
import Login from "@/pages/Login/Login.vue";
import Detail from "@/pages/Detail/Detail.vue";
import AddCartSuccess from "@/pages/AddCartSuccess/AddCartSuccess.vue";

export default [
    {
        path: "/home",
        component: Home,
        meta: {show: true}
    },
    {
        name: "search",
        path: "/search/:keyword?",
        component: Search,
        meta: {show: true},
    },
    {
        path: "/register",
        component: Register,
        meta: {show: false}
    },
    {
        path: "/login",
        component: Login,
        meta: {show: false}
    },
    {
        path: "/detail/:skuid",
        name: "detail",
        component: Detail,
        meta: {show: true}
    },
    {
        path: "/addcartsuccess",
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: {show: false}
    },
    {
        path: "*",
        redirect: "/home"
    }
]
