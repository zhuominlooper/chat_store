import {Toast ,Theme } from "teaset";
import React from "react";
import { ActivityIndicator } from "react-native";

let customKey = null;
Toast.showLoading=(text)=> {
  if (customKey) return;
  customKey = Toast.show({
    text,
    icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
    position: 'center',
    duration: 20000,
  });
}

Toast.hideLoading=()=> {
  if (!customKey) return;
  Toast.hide(customKey);
  customKey = null;
}

export default Toast