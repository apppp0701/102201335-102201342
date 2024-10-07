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
      <button class="button" @click="handleRequestJoin">请求加入</button>
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
        projectName: '示例项目名称',
        projectLeader: '负责人姓名',
        recruitNumber: 3,
        deadline: '2024年10月10日',
        projectDescription: '这是项目的描述部分',
        projectGoal: '实现XXX目标',
        teamRequirement: '需要会使用XXX工具的人'
      },
      requestStatus: '' // 用于存储申请状态
    };
  },
  methods: {
    handleRequestJoin() {
      // 设置申请状态为“已申请”
      this.requestStatus = '已申请';
      // 0.5秒后清除状态
      setTimeout(() => {
        this.requestStatus = '';
      }, 500);
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

<style lang="scss">
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

  .request-status {
    color: green; /* 状态文本颜色 */
    margin-top: 10px; /* 状态文本与按钮的间距 */
    font-weight: bold; /* 加粗状态文本 */
    text-align: center; /* 文字居中 */
    width: 100%; /* 确保它占满整个宽度 */
  }

}
</style>

