<template>
  <view class="container">
    <!-- 显示的内容部分 -->
    <view class="form-group">
      <label class="label">项目名称</label>
      <input type="text" :value="formData.projectName" disabled />
    </view>
    <view class="form-group">
      <label class="label">项目负责人</label>
      <input type="text" :value="formData.projectLeader" disabled />
    </view>
    <view class="form-group">
      <label class="label">招募人数</label>
      <input type="number" :value="formData.recruitNumber" disabled />
    </view>
    <view class="form-group">
      <label class="label">截止日期</label>
      <picker mode="date" :value="formData.deadline" disabled>
        <view class="uni-input">{{ formData.deadline }}</view>
      </picker>
    </view>
    <view class="form-group">
      <label class="label">项目描述</label>
      <textarea class="large-textarea" :value="formData.projectDescription" disabled></textarea>
    </view>
    <view class="form-group">
      <label class="label">项目目标</label>
      <textarea class="large-textarea" :value="formData.projectGoal" disabled></textarea>
    </view>
    <view class="form-group">
      <label class="label">团队需求</label>
      <textarea class="large-textarea" :value="formData.teamRequirement" disabled></textarea>
    </view>
    
    <!-- 新增按钮 -->
    <view class="button-container">
      <button 
        class="button" 
        :class="{ 'disabled-button': isJoined }" 
        @click="handleRequestJoin" 
        :disabled="isJoined"
      >
        {{ isJoined ? '已申请' : '请求加入' }}
      </button>
      <button class="button" @click="goToChat">立即沟通</button>
    </view>
    
    <!-- 显示申请状态 -->
    <view v-if="requestStatus" class="request-status">{{ requestStatus }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
       formData: {
              projectName: '人工智能研究项目',
              projectLeader: '潘小晴',
              recruitNumber: 3,
              deadline: '2024年11月11日',
              projectDescription: '本项目将深入探讨人工智能领域的前沿技术，通过机器学习、深度学习等方法开展研究。团队成员将致力于开发智能算法，优化数据处理流程，以及实现智能系统的应用。',
              projectGoal: '开发出高效的智能算法，解决特定领域的问题，并在学术会议或竞赛中展示研究成果，推动人工智能技术的实际应用和发展。',
              teamRequirement: '团队成员需具备良好的编程能力，熟悉Python或相关编程语言，了解机器学习和深度学习的基本原理，并具有强烈的探索精神和良好的学习能力。'
            },

      requestStatus: '', // 用于存储申请状态
      isJoined: false // 用于判断是否已申请
    };
  },
  methods: {
    handleRequestJoin() {
      // 设置申请状态为已申请
      this.isJoined = true;
      // 可在这里添加进一步的申请处理逻辑
    },
    goToChat() {
      // 使用 uni.navigateTo 进行页面跳转
      uni.navigateTo({
        url: '/pages/chat/chat'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;

  .form-group {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .label {
      font-weight: bold;
      margin-right: 10px;
      width: 120px;
    }

    input,
    textarea {
      border: 1px solid #ccc;
      padding: 8px;
      width: 100%;
      max-width: 600px;
      background-color: #f9f9f9;
    }

    picker {
      border: 1px solid #ccc;
      padding: 8px;
      display: block;
      width: 100%;
      max-width: 600px;
      background-color: #f9f9f9;
    }

    .large-textarea {
      min-height: 100px;
      height: auto;
      resize: none;
    }
  }

  .button-container {
    display: flex; /* 使用Flexbox布局 */
    justify-content: space-between; /* 按钮间距 */
    margin-top: 20px; /* 按钮上方的间距 */
  }

  .button {
    background-color: #21C059; /* 按钮背景色 */
    color: white; /* 按钮文字颜色 */
    border: none; /* 无边框 */
    padding: 3px 20px; /* 按钮内边距 */
    border-radius: 5px; /* 按钮圆角 */
    cursor: pointer; /* 鼠标悬停时显示为手型 */
  }

  .disabled-button {
    background-color: #ccc; /* 灰色背景 */
    color: white; /* 保持文字颜色为白色 */
    cursor: not-allowed; /* 鼠标悬停时显示为禁止手型 */
  }

  .request-status {
    color: green; /* 状态文本颜色 */
    margin-top: 10px; /* 状态文本与按钮的间距 */
    font-weight: bold; /* 加粗状态文本 */
    text-align: center; /* 文字居中 */
    width: 100%; /* 确保它占满整个宽度 */
  }
}
</style>
