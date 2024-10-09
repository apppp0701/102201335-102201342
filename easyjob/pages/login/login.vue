<template>
<view class="lllogin-container">
<!-- Header -->
<view class="llheader">
<text class="lltitle">HELLO </text>
<text class="llsubtitle">欢迎使用ProjectPartner</text>
</view>

<!-- Login Form -->
<view class="llform">
  <view class="llinput-group">
    <text class="llicon">👤</text>
    <input class="llinput" v-model="phone" placeholder="请输入手机号" />
  </view>
  <view class="llinput-group">
    <text class="llicon">🔒</text>
    <input class="llinput" v-model="password" type="password" placeholder="请输入密码" />
  </view>
</view>

<!-- Buttons -->
<button class="lllogin-button" @click="handleLogin">登录</button>
<button class="llregister-button" @click="navigateToRegister">注册</button>

<!-- Error Message -->
<text v-if="showError" class="error-message">登录失败</text>
</view>
</template>

<script>
export default {
data() {
return {
phone: '',
password: '',
showError: false
};
},
methods: {
handleLogin() {
// Simulate login process
if (this.phone === '123456789' && this.password === 'password') {
uni.switchTab({
url: '/pages/index/index'
});
} else {
this.showError = true;
setTimeout(() => {
this.showError = false;
}, 1000);
}
},
navigateToRegister() {
uni.navigateTo({
url: '/pages/register/choice'
});
}
}
}
</script>

<style>
.lllogin-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 更改为向上对齐 */
  height: 100vh; /* 使用视口高度 */
  background: linear-gradient(to bottom, #C7F6C7, #E4EFE8);
  padding-top: 180px; /* 添加顶部内边距以整体上移 */
  padding-bottom: 20px; /* 可选：保持底部间距 */
}

.llheader {
display: flex;
flex-direction: column; /* 设置为垂直排列 /
align-items: center; / 水平居中 /
justify-content: center; / 垂直居中 */
}

.lltitle {
line-height: 10px;
font-size: 30px;
font-weight: bold;
}

.llsubtitle {
line-height: 50px;
font-size: 16px;
margin-top: 10px;
}

.llform {
width: 100%;
max-width: 300px;
margin-bottom: 20px;
}

.llinput-group {
display: flex;
align-items: center;
margin-bottom: 15px;
background-color: #fff;
border-radius: 25px;
padding: 10px;
}

.llicon {
margin-right: 10px;
font-size: 18px;
}

.llinput {
flex: 1;
border: none;
outline: none;
}

.lllogin-button {
width: 100%;
max-width: 300px;
padding: 5px;
background-color: #4CAF50;
color: white;
border: none;
border-radius: 25px;
text-align: center;
margin-bottom: 10px;
}

.llregister-button {
width: 100%;
max-width: 300px;
padding: 5px;
background-color: transparent;
color: #4CAF50;
border: 1px solid #4CAF50;
border-radius: 25px;
text-align: center;
}

.llerror-message {
color: red;
margin-top: 20px;
}
</style>