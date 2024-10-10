<template>
  <view class="container">
    <!-- 表单部分 -->
    <form @submit="formSubmit">
      <view class="form-group">
        <input type="text" placeholder="项目名称" v-model="formData.name"/>
      </view>
      <view class="form-group">
        <input type="text" placeholder="项目负责人" v-model="formData.register"/> 
      </view>
      <view class="form-group">
        <input type="number" placeholder="招募人数" v-model.number="formData.project_num"/>
      </view>
      <view class="form-group">
        <picker mode="date" :value="formData.project_end" start="2015-09-01" end="2026-09-01" @change="bindDateChange">
          <view class="uni-input">{{ formData.project_end ? formData.project_end : '请选择截止日期' }}</view>
        </picker>
      </view>
      <view class="form-group">
        <textarea class="large-textarea" placeholder="项目描述" auto-height v-model="formData.description"></textarea> 
      </view>
      <view class="form-group">
        <textarea class="large-textarea" placeholder="项目目标" v-model="formData.project_goal"></textarea>
      </view>
      <view class="form-group">
        <textarea class="large-textarea" placeholder="项目需求" v-model="formData.project_need"></textarea>
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
        name: '', 
        register: '', 
        project_num: null, 
        project_end: '', 
        description: '', 
        project_goal: '', 
        project_need: '', 
      },
      cards: [] 
    };
  },
  methods: {
    bindDateChange(e) {
      const selectedDate = e.detail.value;
      const [year, month, day] = selectedDate.split('-');
      this.formData.project_end = `${year}年${month}月${day}日`; 
    },
    formSubmit(e) {
      e.preventDefault();
      // 提交表单后发送数据到后端
      console.log('发布内容:', this.formData);

      // 发送 POST 请求到 Django 后端
      uni.request({
        url: 'http://127.0.0.1:8000/api/project/create/', 
        method: 'POST',
        data: this.formData, 
        header: {
          'Content-Type': 'application/json' 
        },
        success: (res) => {
          if (res.statusCode === 200) {
            console.log('发布成功:', res.data);
            // 可以在这里更新卡片列表或进行其他操作
            this.cards.push({ content: '项目发布成功！' }); 
            this.$router.push('/pages/post/post'); 
          } else {
            console.error('发布失败:', res);
            uni.showToast({
              title: '发布失败',
              icon: 'none'
            });
          }
        },
        fail: (err) => {
          console.error('请求错误:', err);
          uni.showToast({
            title: '请求错误',
            icon: 'none'
          });
        }
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
    justify-content: center;
    margin-bottom: 10px;

    input,
    textarea {
      border: 1px solid #ccc;
      padding: 8px;
      width: 100%;
      max-width: 600px;
      background-color: white; 
    }

    picker {
      border: 1px solid #ccc;
      padding: 8px;
      display: block;
      width: 100%;
      max-width: 600px;
      background-color: white; 
    }

    .large-textarea {
      min-height: 100px;
      height: auto;
    }
  }

  button {
    background-color: #21C059;
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