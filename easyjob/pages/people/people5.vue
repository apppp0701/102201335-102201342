<template>
  <view class="profile-container">
    <!-- Static Avatar -->
    <view class="avatar-display">
      <image src='../../static/photo/Camera_XHS_17284907348801040g0083128aen7ghk2g49lj.jpg' mode="aspectFit" class="avatar-image" />
    </view>

    <!-- Static Personal Information -->
    <view class="form">
      <view class="input-group">
        <text class="label">姓名</text>
        <text class="info">蒋方方</text>
      </view>
      <view class="input-group">
        <text class="label">手机号</text>
        <text class="info">12345678901</text>
      </view>
      <view class="input-group">
        <text class="label">学校</text>
        <text class="info">福州大学</text>
      </view>
      <view class="input-group">
        <text class="label">学院</text>
        <text class="info">机械学院</text>
      </view>
      <view class="input-group">
        <text class="label">专业</text>
        <text class="info">机械工程</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // Static data for display
    };
  }
}
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #C8F6C8;
  height: 100vh;
}

.avatar-display {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e0e0e0;
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.form {
  width: 80%;
}

.input-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.label {
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}

.info {
  padding: 8px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>