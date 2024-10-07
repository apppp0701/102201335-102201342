<template>
  <view class="container">
    <!-- Teacher Section -->
    <view class="section">
      <image src="../../static/teacher.png" mode="aspectFit" class="identity-image" />
      <button class="identity-button" @click="selectIdentity('teacher')">我是老师</button>
    </view>

    <view class="divider"></view>

    <!-- Student Section -->
    <view class="section">
      <image src="../../static/student.png" mode="aspectFit" class="identity-image" />
      <button class="identity-button" @click="selectIdentity('student')">我是学生</button>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    selectIdentity(identity) {
      // Record the identity (e.g., store in local storage or state management)
      uni.setStorageSync('selectedIdentity', identity);
      // Navigate to the register page
      uni.navigateTo({
        url: '/pages/register/register'
      });
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 更改为向上对齐 */
  height: 100vh; /* 使用视口高度 */
  background: linear-gradient(to bottom, #C7F6C7, #E4EFE8);
  padding-top: 100px; /* 添加顶部内边距以整体上移 */
  padding-bottom: 20px; /* 可选：保持底部间距 */
}


.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

.identity-image {
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
}

.identity-button {
  width: 150px;
  padding: 5px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 25px;
  text-align: center;
}

.divider {
  width: 80%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
}
</style>