<template>
  <view class="container">
    <!-- Header -->
    
    <!-- Person Card List -->
    <view class="card-list">
      <view 
        v-for="(person, index) in people" 
        :key="index" 
        class="person-card" 
        @click="goToPersonData(person)"
      >
        <view class="card-content">
          <view class="avatar">
            <image src="../../static/logo.png" mode="aspectFit" class="avatar-image" />
          </view>
          <view class="person-info">
            <view class="person-info-line">
              <text class="person-name">姓名：{{ person.name }}</text>
            </view>
            <view class="person-info-line">
              <text class="person-id">学校：{{ person.id }}</text>
            </view>
            <view class="person-info-line">
              <text class="person-major">专业：{{ person.major }}</text>
            </view>
          </view>
          <!-- Added button with two states -->
          <button 
            class="action-button" 
            @click.stop="toggleJoinStatus(person)"
          >
            {{ person.joinStatus }}
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          name: '李小明',
          id: '福州大学',
          major: '计算机科学与技术',
          joinStatus: this.getJoinStatus('李小明') || '同意申请' // Initial button state
        },
        {
          name: '李老师',
          id: '福州大学',
          major: '计算机科学与技术',
          joinStatus: this.getJoinStatus('李老师') || '同意申请' // Initial button state
        },
        // Add more unique people as needed
      ]
    };
  },
  methods: {
    getJoinStatus(name) {
      // Retrieve the stored status from localStorage
      return localStorage.getItem(name);
    },
    toggleJoinStatus(person) {
      // Toggle join status between "同意申请" and "已加入"
      person.joinStatus = person.joinStatus === '同意申请' ? '已加入' : '同意申请';
      
      // Save the updated status to localStorage
      localStorage.setItem(person.name, person.joinStatus);
    },
    goToPersonData(person) {
      // Navigate to the person data page and pass the person data
      uni.navigateTo({
        url: `/pages/myself/data?name=${person.name}&id=${person.id}&major=${person.major}`
      });
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to bottom, #C7F6C7, #E4EFE8); /* 浅绿色渐变背景 */
  padding: 20px; /* 添加一些内边距 */
}
	
.card-list {
  display: flex;
  flex-direction: column;
}

.person-card {
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-content {
  display: flex;
  align-items: center; /* 保持子元素垂直居中 */
}

.avatar {
  display: flex;
  align-items: center;
}

.avatar-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.person-info {
  flex-grow: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

.person-info-line {
  margin-bottom: 4px;
}

.person-name,
.person-id,
.person-major {
  font-size: 14px;
  color: #333;
}

.action-button {
  margin-left: 10px; /* 添加左边距 */
  padding: 2px 12px;
  background-color: #007BFF; /* 按钮背景颜色 */
  color: white; /* 按钮文字颜色 */
  border: none;
  border-radius: 4px; /* 圆角按钮 */
  cursor: pointer;
  transition: background-color 0.3s; /* 添加过渡效果 */
  font-size: 16px; /* 设置按钮内字体大小 */
}


.action-button:hover {
  background-color: #0056b3; /* 鼠标悬停时的背景颜色 */
}
</style>
