import instance from './interceptors'
import {Toast  } from "teaset";
//发送异步ajax请求的模块,封装axios
//统一处理异常优化
export default function ajax(url, data = {}, type = "GET") {
    //对请求统一加上时间戳，防止浏览器的缓存行为而不调用请求
    url = `${url}?timestamp=${new Date().getTime()}`
    return new Promise((resolve, reject) => {
        let promise
        //执行请求
        switch (type) {
            case "GET":
                promise = instance.get(url, {
                    params: data
                });
                break
            case "POST":
                promise = instance.post(url, data);
                break
            case "PUT":
                promise = instance.put(url, data);
                break
            case "DELETE":
                promise = instance.delete(url, {
                    params: data
                });
                break
            default:
                break
        }
        promise.then(response => {
            if (response.data.code ==10000) {
                resolve({...response.data,code:200})
            } else {
                Toast.fail(response.data.msg,2000)
                resolve({
                    code:404
                })
            }
        })
    })
}