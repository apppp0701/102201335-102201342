<template>
  <view class="container">
    <!-- 头像框 -->
    <view class="avatar-container">
      <image 
        class="avatar" 
        src='../../static/logo.png' 
        mode="aspectFill" 
        @error="onImageError" 
      />
    </view>
    
    <!-- 老师主页 -->
    <view v-if="userRole === 'teacher'" class="profile">
      <text class="role-title">{{ username }}！</text>
      <text>欢迎你，这里是你的老师主页。</text>
      <button @click="navigateToMyProject">我的项目</button>
      <button @click="navigateToProjectPage">指导项目</button>
    </view>
    
    <!-- 学生主页 -->
    <view v-else-if="userRole === 'student'" class="profile">
      <text class="role-title">{{ username }}！</text>
      <text>欢迎你，这里是你的学生主页。</text>
      <button @click="navigateToMyProject">我的项目</button>
      <button @click="navigateToProjectPage">参与项目</button>
    </view>
    
    <view class="role-switch">
      <text>切换角色:</text>
      <button @click="setRole('teacher')">老师</button>
      <button @click="setRole('student')">学生</button>
    </view>

    <!-- 个人信息按钮 -->
    <view class="profile-button-container">
      <button class="profile-button" @click="goToPersonalInfo">个人信息</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userRole: 'teacher', // 初始身份为老师，可根据需要更改为 'student'
      username: '张三'   // 示例用户名
    };
  },
  methods: {
    setRole(role) {
      this.userRole = role; // 根据按钮设置用户身份
    },
    navigateToMyProject() {
      // 跳转到我的项目页面
      uni.navigateTo({
        url: '/pages/myself/myproject' // 确保路径正确
      });
    },
    navigateToProjectPage() {
      // 跳转到项目页面
      uni.navigateTo({
        url: '/pages/myself/project' // 跳转到 pages/myself/project
      });
    },
    goToPersonalInfo() {
      // 导航到个人信息页面
      uni.navigateTo({
        url: '/pages/myself/data'
      });
    },
    onImageError() {
      uni.showToast({ title: '头像加载失败', icon: 'none' });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to bottom, #C7F6C7, #E4EFE8); /* 浅绿色渐变背景 */
  padding: 20px; /* 添加一些内边距 */
}

.avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* 调整头像与其他内容之间的间距 */
}

.avatar {
  width: 80px; /* 头像宽度 */
  height: 80px; /* 头像高度 */
  border-radius: 50%; /* 头像圆形 */
  border: 2px solid #ccc; /* 头像边框 */
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.profile {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
}

.role-title {
  font-size: 20px;
  font-weight: bold;
}

.role-switch {
  margin-top: 20px;
}

/* 个人信息按钮的样式 */
.profile-button-container {
  margin-top: auto; /* 将按钮推到底部 */
  display: flex;
  justify-content: center; /* 按钮居中 */
  margin-top: 30px; /* 额外的顶部间距 */
}

.profile-button {
  padding: 6px 20px; /* 按钮内边距 */
  background-color: #4CAF50; /* 按钮背景色 */
  color: white; /* 按钮文本颜色 */
  border: none; /* 去掉边框 */
  border-radius: 5px; /* 圆角 */
  cursor: pointer; /* 鼠标指针变为手指 */
  font-size: 16px; /* 文本大小 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

.profile-button:hover {
  background-color: #45a049; /* 悬停时的背景色 */
}
</style>
