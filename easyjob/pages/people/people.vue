<template>
  <view class="container">
    <!-- Header -->
    <view class="header">
      <text class="title">人才推荐</text>
      <text class="subtitle">寻找更适合你的伙伴</text>
    </view>

    <!-- Search Box -->
    <view class="search-box">
      <input class="search-input" type="text" placeholder="搜索" />
    </view>

    <!-- Person Card List -->
    <view class="card-list">
      <view v-for="(person, index) in people" :key="index" class="person-card" @click="goToPersonData(person)">
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
          <image src="../../static/message.png" mode="aspectFit" class="more-icon" @click.stop="goToChat(person)" />
        </view>
        <view class="role-tag">
          <text class="tag">{{ person.role }}</text>
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
          role: '学生'
        },
        {
          name: '李老师',
          id: '福州大学',
          major: '计算机科学与技术',
          role: '老师'
        },
        {
          name: '李小明',
          id: '福州大学',
          major: '计算机科学与技术',
          role: '学生'
        },
        {
          name: '李老师',
          id: '福州大学',
          major: '计算机科学与技术',
          role: '老师'
        },
        {
          name: '李小明',
          id: '福州大学',
          major: '计算机科学与技术',
          role: '学生'
        },
        // Add more people as needed
      ]
    };
  },
  methods: {
    goToChat(person) {
      // Navigate to the chat page and pass the person data
      uni.navigateTo({
        url: `/pages/chat/chat?name=${person.name}&id=${person.id}&major=${person.major}&role=${person.role}`
      });
    },
    goToPersonData(person) {
      // Navigate to the person data page and pass the person data
      uni.navigateTo({
        url: `/pages/myself/data?name=${person.name}&id=${person.id}&major=${person.major}&role=${person.role}`
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

.header {
  margin-bottom: 20px; /* 搜索框高度 */
  text-align: center; /* Center the text */
}

.title {
  font-size: 25px;
  font-weight: bold;
  display: block; /* Ensure title is on a new line */
  text-align: left; /* Right align the title */
  margin-top: 50px; /* 增加标题与上方元素之间的间距 */
  margin-bottom: 5px; /* 增加标题与副标题之间的间距 */
}

.subtitle {
  font-size: 12px;
  color: #666;
  display: block; /* Ensure subtitle is on a new line */
  text-align: left; /* Right align the subtitle */
}

.search-box {
  position: relative; /* 为定位图标做准备 */
  width: 100%; /* 使容器宽度为100% */
  display: flex; /* 使用 flexbox 来居中 */
  justify-content: center; /* 水平居中对齐 */
  margin: 20px 0; /* 设置上下外边距，可以根据需要调整 */
}

.search-input {
  width: 300px; /* 适当缩短搜索框的宽度 */
  padding: 8px 36px 8px 40px; /* 左侧留出空间给图标 */
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff; /* 设置背景色为白色 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加轻微阴影以提升视觉效果 */
}

.search-input::placeholder {
  color: #aaa; /* 更改占位符颜色 */
}

/* 添加搜索图标 */
.search-box::before {
  content: ''; /* 使用伪元素 */
  position: absolute; /* 绝对定位 */
  left: 10px; /* 距离左侧10px */
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%); /* 精确垂直居中 */
  width: 16px; /* 图标宽度 */
  height: 16px; /* 图标高度 */
  background-image: url('../../static/tab/search.png'); /* 替换为您的图标路径 */
  background-size: contain; /* 图标适应背景 */
  background-repeat: no-repeat; /* 不重复 */
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
  justify-content: center; /* 添加水平居中 */
}

.avatar {
  display: flex;
  align-items: center;
  margin-bottom: 0; /* 移除默认的底部外边距 */
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
  align-items: flex-start; /* 使内容左对齐 */
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

.more-icon {
  width: 20px;
  height: 20px;
}

.role-tag {
  display: flex;
  align-items: center; /* 垂直居中标签内容 */
  margin-top: -5px; /* 上移标签以缩小与头像的距离 */
  margin-left: 5px;
}

.tag {
  background-color: #4CAF50;
  color: white;
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 4px;
}

</style>
