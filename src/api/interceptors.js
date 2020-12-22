
import axios from "axios";
import { BASE_URI } from "./path-map";
import Toast from "./toast";
const instance = axios.create({
    baseURL: BASE_URI,
    timeout: 5000,
  });



  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //显示加载框
    Toast.showLoading('正在请求')
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    //关闭加载框
    const timer=setTimeout(()=>{
        Toast.hideLoading()
        clearInterval(timer)
    },500)
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

 /**
  * 创建axios实例，并添加拦截器
  */
  export default instance