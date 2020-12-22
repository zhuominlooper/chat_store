import { Dimensions } from "react-native";

//实现px转dp
//手机元素的宽度=手机屏幕宽度*元素宽度/设计稿宽度 现在设置375
/**
 * 屏幕宽度
 */
export const screenWidth=Dimensions.get("window").width
/**
 * 屏幕高度
 */
export const screenHeight=Dimensions.get("window").height

/**
 * px转dp的方法
 * @param {number} px 元素的宽度或者高度(px)
 */
export const pxToDp=(px)=>screenWidth*px/375