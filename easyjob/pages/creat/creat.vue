<template>
  <view class="container">
    <!-- 表单部分 -->
    <form @submit="formSubmit">
      <view class="form-group">
        <input type="text" placeholder="项目名称" v-model="formData.projectName"/>
      </view>
      <view class="form-group">
        <input type="text" placeholder="项目负责人" v-model="formData.projectLeader"/> <!-- 项目负责人输入框 -->
      </view>
      <view class="form-group">
        <input type="number" placeholder="招募人数" v-model.number="formData.recruitNumber"/>
      </view>
      <view class="form-group">
        <picker mode="date" :value="formData.deadline" start="2015-09-01" end="2026-09-01" @change="bindDateChange">
          <view class="uni-input">{{ formData.deadline ? formData.deadline : '请选择截止日期' }}</view>
        </picker>
      </view>
      <view class="form-group">
        <textarea class="large-textarea" placeholder="项目描述" auto-height v-model="formData.projectDescription"></textarea> <!-- 修改为项目描述 -->
      </view>
      <view class="form-group">
        <textarea class="large-textarea" placeholder="项目目标" v-model="formData.projectGoal"></textarea>
      </view>
      <view class="form-group">
        <textarea class="large-textarea" placeholder="项目需求" v-model="formData.teamRequirement"></textarea>
      </view>
      <button form-type="submit">发送</button>
    </form>

    <!-- 卡片列表部分 -->
    <view class="card-list">
      <view class="card" v-for="(item, index) in cards" :key="index">
        <view class="card-content">
          <text>{{ item.content }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        projectName: '', // 项目名称
        projectLeader: '', // 项目负责人
        recruitNumber: null, // 招募人数
        deadline: '', // 初始化截止日期为空
        projectDescription: '', // 项目描述
        projectGoal: '', // 项目目标
        teamRequirement: '' // 团队需求
      }
    };
  },
  methods: {
    bindDateChange(e) {
      const selectedDate = e.detail.value;
      const [year, month, day] = selectedDate.split('-');
      this.formData.deadline = `${year}年${month}月${day}日`; // 格式化日期
    },
    formSubmit() {
      // 提交表单后跳转到发布页面
      console.log('发布内容:', this.formData);
      this.$router.push('/pages/post/post'); // 页面跳转
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 20px;

  .form-group {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  
    input,
    textarea {
      border: 1px solid #ccc;
      padding: 8px;
      width: 100%;
      max-width: 600px;
      background-color: white; /* 设置背景颜色为白色 */
    }
  
    picker {
      border: 1px solid #ccc;
      padding: 8px;
      display: block;
      width: 100%;
      max-width: 600px;
      background-color: white; /* 设置背景颜色为白色 */
    }
  
    .large-textarea {
      min-height: 100px;
      height: auto;
    }
  }


  button {
    background-color: green;
    color: white;
    margin-top: 15px;
  }

  .card-list {
    margin-top: 30px;

    .card {
      border: 1px solid #ccc;
      padding: 16px;
      margin-bottom: 12px;
      border-radius: 4px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
