import React, {Component} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {pxToDp} from '../../../utils/styles.kit';
import {validatePhone} from '../../../utils/validater';
import {Input} from 'react-native-elements';
import {reqLogin} from '../../../api/index';
import CusButtonComponent from '../../../components/cus-button';
import WriteCode from "./w-code";
export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      phoneNum: '',
      phoneValid: true,
      //登录页面和验证码页面切换
      isShowLogin: true,
      //倒计时文本
      btnTimeText:'重新获取',
      //控制倒计时不可以点击
      isCountDown:false
    };
  }
  phoneChange = (data) => {
    this.setState({
      phoneNum: `${data}`,
    });
  };
  phoneSubmitFinish = async () => {
    const {phoneNum} = this.state;
    const phoneValid = validatePhone(phoneNum);
    this.setState({
      phoneValid,
    });
    if (!phoneValid) {
      return;
    }
    //发送请求
    const result = await reqLogin({phone: phoneNum});
    console.log(result);
    if (result.code === 200) {
      this.setState({
        isShowLogin:false
      })
      //开启定时器
      this.countDown()
    }
  };

  countDown=()=>{
    console.log(1111)
    this.setState({
      isCountDown:true
    })
   //定义倒计时
   let seconds=6
   this.setState({
     btnTimeText:`重新获取(${seconds}s)`
   })
   let timer=setInterval(()=>{
    seconds--
    this.setState({
      btnTimeText:`重新获取(${seconds}s)`
    })
    if(seconds===0){
      this.setState({
        btnTimeText:`重新获取`,
        isCountDown:false
      })
         clearInterval(timer)
    }
   },1000)

  }
  resetGetCode=()=>{
    this.countDown()
  }

  showLogin = () => {
    const {phoneNum, phoneValid} = this.state;
    return (
      <View>
        <Text style={{fontSize: pxToDp(25), color: '#888', fontWeight: 'bold'}}>
          手机登录注册
        </Text>
        <View style={{marginTop: pxToDp(30)}}>
          <Input
            value={phoneNum}
            maxLength={11}
            keyboardType="phone-pad"
            placeholder="请输入手机号码"
            inputStyle={{color: '#333'}}
            onChangeText={this.phoneChange}
            errorMessage={phoneValid ? '' : '手机号码格式不正确'}
            onSubmitEditing={this.phoneSubmitFinish}
            leftIcon={{
              type: 'font-awesome',
              name: 'phone',
              color: '#ccc',
              size: pxToDp(20),
            }}
          />
        </View>
        <View style={{width: '80%', height: pxToDp(40), alignSelf: 'center'}}>
          <CusButtonComponent
            onPress={this.phoneSubmitFinish}
            style={{borderRadius: pxToDp(20)}}>
            获取验证码
          </CusButtonComponent>
        </View>
      </View>
    );
  };
  showVCode = () => {
    const {phoneNum, phoneValid,btnTimeText,isCountDown} = this.state;
  return  <View>
      <Text
        style={{
          fontSize: pxToDp(25),
          color: '#888',
          fontWeight: 'bold',
        }}>
        输入到六位验证码
      </Text>
      <View style={{marginTop:pxToDp(16)}}>
      <Text >
        已发送到:{phoneNum}
      </Text>
      <View>
        <View>
          <WriteCode/>
        </View>
      <View style={{width: '80%', height: pxToDp(40), alignSelf: 'center',marginTop:pxToDp(16)}}>
          <CusButtonComponent 
           disabled={isCountDown}
            onPress={this.resetGetCode}
            style={{borderRadius: pxToDp(20)}}>
            {btnTimeText}
          </CusButtonComponent>
        </View>
      </View>
    </View>
    
    </View>

  };
  render() {
    const {isShowLogin} = this.state;
    return (
      <View>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Image
          source={require('../../res/profileBackground.jpg')}
          style={{width: '100%', height: pxToDp(200)}}></Image>
        <View style={{padding: pxToDp(20)}}>
          {isShowLogin ? this.showLogin() : this.showVCode()}
        </View>
      </View>
    );
  }
}
