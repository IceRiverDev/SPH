import axios from "axios";
import nprogress from "nprogress"
import "nprogress/nprogress.css"

// 1. 利用axios对象的方法create，去创建一个axios实例
const request = axios.create({
    baseURL: "/api",
    timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
    nprogress.start()
    return config
})

// 响应拦截器
request.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, error => {
    return Promise.reject(new Error(error))
})

// 对外暴露
export default request
