### 第一天
  1.安装所以的环境  
  2.包含java8,andorid,react-native-cli,并配置环境变量  
  3.开启电脑主板的虚拟设置，可以支持android模拟器  
  4.连接真机，保证react-native项目能在真机调试 
***
### 第二天
  1.在rv的默认容器中，布局都是flex，方向是column  
  2.在rn中，样式是不会继承的  
  3.不能加单位px，vh，但是能添加百分比  
  4.Dimensions获取当前设备的宽高    
  5.andorid默认不支持gif图片，需要在安卓里面引用包  
  6.如果使用网络地址的图片，必须设置宽高  
  7.TextInput没有边框  
  8.在自定义组件里面可以传递标签，相当于自定义组件是个容器，子组件通过props.children来显示(插槽)  
  9.在index可以配置浏览器捕获请求  
  10.安装mobx，配置@babel/plugin-proposal-decorators，支持es7装饰器语法  
  11.mobx采用装饰器语法来实现的全局数据挂载，在6.0之后需要在mobx的实例的构造函数添加 makeObservable(this)，才会自动在数据改变之后刷新  
***
### 第三天
1.编写登录页面，并引入teaset库来显示轻提示和加载动画
2.引入react-native-elements的第三方组件库
3.引入基本的页面图片
4.构建基本的请求框架，采用axois的二次封装实现
5.优化一些代码
***
### 第四天
1.引入了渐变色的组件，并实现了一个自定义的button，在任何地方可以引入
2.默认配置defaultProps，用于配置默认样式
3.学习了StyleSheet.create，用于生成一个组件style
4.引入了验证码框的组件样式，并且修改了一些默认布局
5.用css动态计算高度height:calc(100vh - 150px)
