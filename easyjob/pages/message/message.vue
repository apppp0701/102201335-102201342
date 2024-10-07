<template>
  <view class="container">
    <!-- Message List -->
    <view class="message-list">
      <view v-for="(message, index) in messages" :key="index" class="message-card" @click="navigateToChat(index)">
        <view class="avatar">
          <!-- 修正了这里的 src 属性，去掉了多余的字符 -->
          <image src="../../static/logo.png" class="avatar-image" />
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
        { nickname: '昵称1', hasNew: true },
        { nickname: '昵称2', hasNew: true },
		{ nickname: '昵称2', hasNew: true },
        { nickname: '昵称3', hasNew: false },
		{ nickname: '昵称3', hasNew: false },
		{ nickname: '昵称3', hasNew: false },
		{ nickname: '昵称3', hasNew: false },
		{ nickname: '昵称3', hasNew: false },
		{ nickname: '昵称3', hasNew: false },
		{ nickname: '昵称3', hasNew: false },
		{ nickname: '昵称3', hasNew: false },
		{ nickname: '昵称3', hasNew: false },
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

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
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
