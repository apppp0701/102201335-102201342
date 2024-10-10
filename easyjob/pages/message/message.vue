<template>
  <view class="container">
    <!-- Message List -->
    <view class="message-list">
      <view v-for="(message, index) in messages" :key="index" class="message-card" @click="navigateToChat(index)">
        <view class="avatar">
          <!-- 使用 message.avatar 来设置头像 -->
          <image :src="message.avatar" class="avatar-image" />
        </view>
        <text class="nickname">{{ message.nickname }}</text>
        <view v-if="message.hasNew" class="new-message-dot"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        { nickname: '董小莉', hasNew: true, avatar: '../../static/photo/Camera_XHS_17284907275621040g0083128aen7ghk0g49lj.jpg' },
        { nickname: '李老师', hasNew: true, avatar: '../../static/photo/Camera_XHS_17284907293721040g0083128aen7ghk1049lj.jpg' },
        { nickname: '潘小晴', hasNew: true, avatar: '../../static/photo/Camera_XHS_17284907311851040g0083128aen7ghk1g49lj.jpg' },
        { nickname: '王老师', hasNew: false, avatar: '../../static/photo/Camera_XHS_17284907330211040g0083128aen7ghk2049lj.jpg' },
        { nickname: '蒋方方', hasNew: false, avatar: '../../static/photo/Camera_XHS_17284907348801040g0083128aen7ghk2g49lj.jpg' },
        { nickname: '令狐冲', hasNew: false, avatar: '../../static/photo/Camera_XHS_17284907391261040g0083128aen7ghk3g49lj.jpg' },
        { nickname: '陈老师', hasNew: false, avatar: '../../static/photo/Camera_XHS_17284907372541040g0083128aen7ghk3049lj.jpg' },
        { nickname: '朱珊珊', hasNew: false, avatar: '../../static/photo/Camera_XHS_17284907293721040g0083128aen7ghk1049lj.jpg' },
        { nickname: '韩小钰', hasNew: false, avatar: '../../static/photo/Camera_XHS_17284907330211040g0083128aen7ghk2049lj.jpg' },
        { nickname: '张老师', hasNew: false, avatar: '../../static/photo/Camera_XHS_17284907429331040g0083128aen7ghk4g49lj.jpg' },
        { nickname: '黄老师', hasNew: false, avatar: '../../static/photo/Camera_XHS_17284907410671040g0083128aen7ghk4049lj.jpg' },
        // Add more messages as needed
      ]
    };
  },
  methods: {
    navigateToChat(index) {
      // Mark message as read
      this.messages[index].hasNew = false;
      // Navigate to chat page
      uni.navigateTo({
        url: `/pages/chat/chat?nickname=${this.messages[index].nickname}`
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

.message-list {
  display: flex;
  flex-direction: column;
}

.message-card {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  position: relative;
  background-color: transparent;
}

.avatar {
  margin-right: 10px;
}

.avatar-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.nickname {
  font-size: 16px;
  color: #333;
}

.new-message-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  right: 20px;
}
</style>
