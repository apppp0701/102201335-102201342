<template>
<view class="login-container">
<!-- Header -->
<view class="header">
<text class="title">HELLO </text>
<text class="subtitle">欢迎使用ProjectPartner</text>
</view>

<!-- Login Form -->
<view class="form">
  <view class="input-group">
    <text class="icon">👤</text>
    <input class="input" v-model="phone" placeholder="请输入手机号" />
  </view>
  <view class="input-group">
    <text class="icon">🔒</text>
    <input class="input" v-model="password" type="password" placeholder="请输入密码" />
  </view>
</view>

<!-- Buttons -->
<button class="login-button" @click="handleLogin">登录</button>
<button class="register-button" @click="navigateToRegister">注册</button>

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
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 更改为向上对齐 */
  height: 100vh; /* 使用视口高度 */
  background: linear-gradient(to bottom, #C7F6C7, #E4EFE8);
  padding-top: 180px; /* 添加顶部内边距以整体上移 */
  padding-bottom: 20px; /* 可选：保持底部间距 */
}

.header {
display: flex;
flex-direction: column; /* 设置为垂直排列 /
align-items: center; / 水平居中 /
justify-content: center; / 垂直居中 */
}

.title {
line-height: 10px;
font-size: 30px;
font-weight: bold;
}

.subtitle {
line-height: 50px;
font-size: 16px;
margin-top: 10px;
}

.form {
width: 100%;
max-width: 300px;
margin-bottom: 20px;
}

.input-group {
display: flex;
align-items: center;
margin-bottom: 15px;
background-color: #fff;
border-radius: 25px;
padding: 10px;
}

.icon {
margin-right: 10px;
font-size: 18px;
}

.input {
flex: 1;
border: none;
outline: none;
}

.login-button {
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

.register-button {
width: 100%;
max-width: 300px;
padding: 5px;
background-color: transparent;
color: #4CAF50;
border: 1px solid #4CAF50;
border-radius: 25px;
text-align: center;
}

.error-message {
color: red;
margin-top: 20px;
}
</style>