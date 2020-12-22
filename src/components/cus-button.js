import React, { Component } from 'react'
import { Text,StyleSheet,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import { pxToDp } from "../utils/styles.kit";
export default class CusButtonComponent extends Component {
        //默认的props属性
        static defaultProps={
            style:{},
            textStyle:{},
            children:'Button',
            disabled:false
        }
      constructor(){
          super()
        this.styles = StyleSheet.create({
            linearGradient: {
              flex: 1,
              paddingLeft: pxToDp(15),
              paddingRight: pxToDp(15),
              justifyContent:'center',
              alignItems:'center'
            },
            buttonText: {
              fontSize: pxToDp(15),
              fontFamily: 'Gill Sans',
              textAlign: 'center',
              color:'#ffffff',
              backgroundColor: 'transparent',
            },
          });
      }

    
    render() {
     const {styles}=this
        return (
            <TouchableOpacity disabled={this.props.disabled} onPress={this.props.onPress} style={{overflow:'hidden', width:'100%',height:'100%',...this.props.style}} >
               <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['#93cd', '#e0708c']} style={styles.linearGradient}>
                    <Text style={{...styles.buttonText,...this.props.textStyle}}>
                     {/* 通过插槽传入值 */}
                     {this.props.children}
                    </Text>
                     </LinearGradient>
            </TouchableOpacity>
             
        )
    }
}
