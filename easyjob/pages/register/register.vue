<template>
  <view class="register-container">
    <!-- Avatar Upload -->
    <view class="rravatar-upload" @click="uploadAvatar">
      <image :src="avatar ? avatar : '../../static/upload-placeholder.png'" mode="rraspectFit" class="rravatar-image" />
      <text v-if="!avatar" class="rrupload-text">上传头像</text>
    </view>

    <!-- Registration Form -->
    <view class="rrform">
      <view class="rrinput-group" v-for="(item, index) in formFields" :key="index">
        <text class="rrlabel">{{ item.label }}</text>
        <input class="rrinput" v-model="item.value" :type="item.type" :placeholder="item.placeholder" />
      </view>
    </view>

    <!-- Submit Button -->
    <button class="rrsubmit-button" @click="register">完成</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      avatar: '',
      formFields: [
        { label: '姓名', value: '', placeholder: '请输入姓名', type: 'text' },
        { label: '手机号', value: '', placeholder: '请输入手机号', type: 'text' },
        { label: '学校', value: '', placeholder: '请输入学校', type: 'text' },
        { label: '学院', value: '', placeholder: '请输入学院', type: 'text' },
        { label: '专业', value: '', placeholder: '请输入专业', type: 'text' },
        { label: '密码', value: '', placeholder: '请输入密码', type: 'password' },
        { label: '确认密码', value: '', placeholder: '请确认密码', type: 'password' }
      ]
    };
  },
  methods: {
    uploadAvatar() {
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          this.avatar = res.tempFilePaths[0];
        }
      });
    },
    register() {
      // Validate inputs, register logic here
      // Assuming registration is successful:
      uni.navigateTo({
        url: '/pages/login/login'
      });
    }
  }
}
</script>

<style>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #C8F6C8;
  height: 100vh;
}

.rravatar-upload {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e0e0e0;
  position: relative;
}

.rravatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.rrupload-text {
  position: absolute;
  font-size: 12px;
  color: #666;
}

.rrform {
  width: 80%;
}

.rrinput-group {
  margin-bottom: 15px;
}

.rrlabel {
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}

.rrinput {
  width: 100%;
  padding: 9px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.rrsubmit-button {
  width: 80%;
  padding: 4px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 25px;
  text-align: center;
  margin-top: 10px;
}
</style>