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
  </view>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        projectName: '示例项目名称',
        projectLeader: '负责人姓名', // 项目负责人
        recruitNumber: 3,
        deadline: '2024年10月10日',
        projectDescription: '这是项目的描述部分', // 新增项目描述字段
        projectGoal: '实现XXX目标',
        teamRequirement: '需要会使用XXX工具的人'
      }
    };
  }
}
</script>

<style lang="scss">
.container {
  padding: 20px;

  .form-group {
    display: flex; /* 使用Flexbox布局 */
    align-items: center; /* 垂直居中 */
    margin-bottom: 10px;

    .label {
      font-weight: bold; /* 加粗标签 */
      margin-right: 10px; /* 标签与输入框之间的间距 */
      width: 120px; /* 固定标签宽度，确保对齐 */
    }

    input,
    textarea {
      border: 1px solid #ccc;
      padding: 8px;
      width: 100%; /* 使输入框和文本区域填满可用空间 */
      max-width: 600px; /* 设置最大宽度以控制整体布局 */
      background-color: #f9f9f9; /* 禁用状态下的背景颜色 */
    }

    picker {
      border: 1px solid #ccc;
      padding: 8px;
      display: block;
      width: 100%;
      max-width: 600px; /* 设置最大宽度以控制整体布局 */
      background-color: #f9f9f9; /* 禁用状态下的背景颜色 */
    }

    .large-textarea {
      min-height: 100px; // 设置最小高度
      height: auto; // 允许自适应高度
      resize: none; /* 禁止用户调整大小 */
    }
  }
}
</style>
