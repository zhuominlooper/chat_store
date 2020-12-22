import ajax from "./ajax";
import { ACCOUNT_LOGIN } from "./path-map";

//创建请求函数
export const reqLogin=(...args)=>ajax(ACCOUNT_LOGIN,...args,"POST")