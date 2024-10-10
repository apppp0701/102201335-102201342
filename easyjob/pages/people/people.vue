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
            <image :src="person.avatar" mode="aspectFit" class="avatar-image" />
          </view>
          <view class="person-info">
            <view class="person-info-line">
              <text class="person-name">姓名：{{ person.name }}</text>
            </view>
            <view class="person-info-line">
              <text class="person-school">学校：{{ person.school }}</text>
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
          name: '董小莉',
          school: '福州大学',
          major: '计算机科学与技术',
          role: '学生',
          id: '1',
          avatar: '../../static/photo/Camera_XHS_17284907275621040g0083128aen7ghk0g49lj.jpg'
        },
        {
          name: '李老师',
          school: '福州大学',
          major: '人工智能',
          role: '老师',
          id: '2',
          avatar: '../../static/photo/Camera_XHS_17284907293721040g0083128aen7ghk1049lj.jpg'
        },
        {
          name: '潘小晴',
          school: '福州大学',
          major: '网络安全',
          role: '学生',
          id: '3',
          avatar: '../../static/photo/Camera_XHS_17284907311851040g0083128aen7ghk1g49lj.jpg'
        },
        {
          name: '王老师',
          school: '福州大学',
          major: '电气工程及其自动化',
          role: '老师',
          id: '4',
          avatar: '../../static/photo/Camera_XHS_17284907330211040g0083128aen7ghk2049lj.jpg'
        },
        {
          name: '蒋方方',
          school: '福州大学',
          major: '机械工程',
          role: '学生',
          id: '5',
          avatar: '../../static/photo/Camera_XHS_17284907348801040g0083128aen7ghk2g49lj.jpg'
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
      // Navigate to the specific page for each person
      uni.navigateTo({
        url: `/pages/people/people${person.id}`
      });
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, #C7F6C7, #E4EFE8);
  padding: 20px;
}

.header {
  margin-bottom: 20px;
  text-align: center;
}

.title {
  font-size: 25px;
  font-weight: bold;
  display: block;
  text-align: left;
  margin-top: 50px;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 12px;
  color: #666;
  display: block;
  text-align: left;
}

.search-box {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.search-input {
  width: 300px;
  padding: 8px 36px 8px 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.search-input::placeholder {
  color: #aaa;
}

.search-box::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background-image: url('../../static/tab/search.png');
  background-size: contain;
  background-repeat: no-repeat;
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
  align-items: center;
  justify-content: center;
}

.avatar {
  display: flex;
  align-items: center;
  margin-bottom: 0;
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
  align-items: flex-start;
}

.person-info-line {
  margin-bottom: 4px;
}

.person-name,
.person-school,
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
  align-items: center;
  margin-top: -5px;
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