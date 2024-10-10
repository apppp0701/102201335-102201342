<template>
  <view class="container">
    <view class="card-list">
      <view 
        v-for="(item, index) in projects" 
        :key="item.id" 
        class="card"
      >
        <view class="card-header">
          <text class="card-title">{{ item.title }}</text>
        </view>
        <view class="card-footer">
          <text class="footer-text">招募：{{ item.recruit }}</text>
          <text class="footer-text">报名截止：{{ item.deadline }}</text>
          <button 
            class="exit-button" 
            :class="{ 'exited': item.status === '已退出' }" 
            @click.stop="exitProject(index)"
          >
            {{ item.status === '已退出' ? '已退出' : '退出' }}
          </button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: '数学建模比赛项目', recruit: '2人', deadline: '2024年11月1日', id: '1', status: '招募中' },
        { title: '人工智能研究项目', recruit: '3人', deadline: '2024年11月3日', id: '2', status: '招募中' },
        { title: '机器人设计大赛', recruit: '5人', deadline: '2024年11月4日', id: '3', status: '招募中' },
        { title: '英语口语比赛', recruit: '2人', deadline: '2024年11月6日', id: '4', status: '招募中' },
        { title: '海峡杯', recruit: '3人', deadline: '2024年11月5日', id: '5', status: '招募中' },
        { title: '电子设计大赛', recruit: '5人', deadline: '2024年11月2日', id: '6', status: '招募中' },
      ]
    };
  },
  methods: {
    exitProject(index) {
      // 更改项目状态
      this.projects[index].status = '已退出';
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to bottom, #C7F6C7, #E4EFE8);
  padding: 20px;
}

.footer-text {
  margin-right: 10px;
}

.card-list {
  display: flex;
  flex-direction: column;
}

.card {
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  margin-bottom: 8px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
}

.card-footer {
  font-size: 12px;
  color: #999;
  display: flex;
  align-items: center;
}

.exit-button {
  margin-left: auto;
  padding: 0px 12px;
  background-color: #21C059;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.exit-button.exited {
  background-color: #aaa;
  cursor: default;
}

.exit-button:hover {
  background-color: #d32f2f;
}

.exit-button.exited:hover {
  background-color: #aaa;
}
</style>
