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
        projectName: '机器人设计大赛',
        projectLeader: '蒋方方',
        recruitNumber: 4,
        deadline: '2024年11月12日',
        projectDescription: '本项目旨在设计和制造能够完成特定任务的机器人，涉及机械结构设计、电子电路搭建、控制算法编写等多个方面。团队成员将共同工作，从零开始打造参赛机器人，并在比赛中展示其性能。',
        projectGoal: '设计并制作出具有创新性、实用性和稳定性的机器人，能够在规定时间内完成大赛设定的任务，力争在机器人设计大赛中获得优异成绩。',
        teamRequirement: '团队成员需具备一定的机械设计、电子工程和编程基础，熟悉至少一种编程语言（如C/C++、Python等），并具有团队合作精神和动手解决问题的能力。'
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
