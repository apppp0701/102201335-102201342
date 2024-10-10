<template>
  <view class="chat-container">
    <!-- Chat Messages -->
    <view class="messages">
      <view v-for="(msg, index) in chatMessages" :key="index" :class="['message', msg.type]">
        <image v-if="msg.type === 'received'" src="../../static/tab/my1.png" mode="aspectFit" class="avatar" />
        <text class="message-text">{{ msg.text }}</text>
        <image v-if="msg.type === 'sent'" src="../../static/tab/my2.png" mode="aspectFit" class="avatar" />
      </view>
    </view>

    <!-- Input Area -->
    <view class="input-area">
      <input class="message-input" v-model="newMessage" placeholder="输入消息..." />
      <button class="send-button" @click="sendMessage">发送</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      chatMessages: [], // 现在这个数组为空
      newMessage: ''
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.chatMessages.push({ text: this.newMessage, type: 'sent' });
        this.newMessage = '';
        // 移除了自动回复的模拟代码
      }
    }
  }
}
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.message {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.sent {
  justify-content: flex-end;
}

.received {
  justify-content: flex-start;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.message-text {
  max-width: 60%;
  padding: 10px;
  border-radius: 10px;
  margin: 0 10px;
}

.sent .message-text {
  background-color: #4CAF50;
  color: white;
}

.received .message-text {
  background-color: #fff;
  color: #333;
}

.input-area {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  position: sticky;
  bottom: 0;
  width: 100%;
}

.message-input {
  width: 70%; /* 80% 宽度，根据父容器大小变化 */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-right: -5px;
  background-color: #f9f9f9;
}


.send-button {
  padding: 0px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>