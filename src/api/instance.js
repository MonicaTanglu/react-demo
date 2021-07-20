// import Vue from 'vue'
import axios from 'axios'
import { message, notification } from 'antd'
import store from '../store'

const service = axios.create({
    baseURL: '/internet',
    timeout: 30000
})
// 拦截器
service.interceptors.request.use(config => {
    config.headers['X-Access-Token'] = window['_token'] ? window['_token'] : localStorage.getItem('token')
    if (config.method === 'get') {
        config.params = {
            _t: new Date().getTime(),
            ...config.params
        }
    }
    return config
})
const resultJudge = (data) => {
    if (data.code === 500) {
        message.error(data.message)
        return false
    } else {
        return true
    }
}
const err = (error) => {
    if (error.response) {
        let data = error.response.data
        switch (error.response.status) {
            case 403:
                notification.error({
                    message: '系统提示',
                    description: "拒绝访问",
                    duration: 4
                })
                break
            case 500:
                notification.error({
                    message: "系统提示",
                    description: data.message,
                    duration: 4,
                });
                break
            case 404:
                notification.error({
                    message: "系统提示",
                    description: "很抱歉，资源未找到!",
                    duration: 4,
                });
                break;
            case 504:
                notification.error({ message: "系统提示", description: "网络超时" });
                break;
            case 401:
                notification.error({
                    message: "系统提示",
                    description: "token失效，请重新登录",
                    duration: 4,
                });
                if(error.response.config.params && error.response.config.params['customResolve']) {
                    store.dispatch('showLoginForm', true)
                    window.location.reload()
                } else {
                    store.dispatch('showLoginForm', true)
                }
                // location.href = '/'

                break;
            default:
                notification.error({
                    message: "系统提示",
                    description: data.message,
                    duration: 4,
                });
                break
        }
    }
    return Promise.reject(error)
}
service.interceptors.response.use(response => {
    if (response.config && response.config.params && response.config.params['customResolve']) return response.data
    let bl = resultJudge(response.data)
    if (bl) return response.data
    else return false
}, err)

// const installer = {
//     vm: {},
//     install (Vue, router = {}) {
//         Vue.use(router, service)
//     }
// }
export { service as axios }