<template>
  <view class="container">
    <!-- 头像框 -->
    <view class="avatar-container">
      <image 
        class="avatar" 
        src="../../static/tab/my2.png"
        mode="aspectFill" 
        @error="onImageError" 
      />
    </view>
    
    <!-- 老师主页 -->
    <view v-if="userRole === 'teacher'" class="profile">
      <text>欢迎你，这里是你的老师主页。</text>
      <button @click="navigateToMyProject">我的项目</button>
      <button @click="navigateToProjectPage">指导项目</button>
    </view>
    
    <!-- 学生主页 -->
    <view v-else-if="userRole === 'student'" class="profile">
      
      <text>欢迎你，这里是你的学生主页。</text>
      <button @click="navigateToMyProject">我的项目</button>
      <button @click="navigateToProjectPage">参与项目</button>
    </view>
    
    <view class="role-switch">
      <text>切换角色:</text>
      <button @click="setRole('teacher')">老师</button>
      <button @click="setRole('student')">学生</button>
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
</style>
