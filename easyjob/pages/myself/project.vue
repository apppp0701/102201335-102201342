<template>
  <view class="container">
    <view class="card-list">
      <view v-for="(item, index) in projects" :key="index" class="card" @click="navigateToDetail(item)">
        <view class="card-header">
          <text class="card-title">{{ item.title }}</text>
        </view>
        <view class="card-footer">
          <text class="footer-text">招募：{{ item.recruit }}</text>
          <text class="footer-text">报名截止：{{ item.deadline }}</text>
          <button 
            class="status-button" 
            :class="{ exited: item.status === '已退出' }"
            @click.stop="confirmExit(item)"
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
        { title: '数学建模比赛项目', recruit: '2人', deadline: '2024年3月1日', id: '1', status: '招募中' },
        { title: '人工智能研究项目', recruit: '3人', deadline: '2024年4月15日', id: '2', status: '招募中' },
    
        { title: '环保公益活动', recruit: '5人', deadline: '2024年5月10日',  id: '4', status: '招募中' },
		{ title: '数学建模比赛项目', recruit: '2人', deadline: '2024年3月1日', id: '5', status: '招募中' },
		{ title: '人工智能研究项目', recruit: '3人', deadline: '2024年4月15日', id: '6', status: '招募中' },
		{ title: '环保公益活动', recruit: '5人', deadline: '2024年5月10日', id: '7', status: '招募中' },
		{ title: '更多项目名称', recruit: '招募人数', deadline: '截止日期', id: '8', status: '招募中' },
      ]
    };
  },
  mounted() {
    // 从本地存储恢复状态
    this.projects.forEach((item) => {
      const savedStatus = localStorage.getItem(`project-status-${item.id}`);
      if (savedStatus) {
        item.status = savedStatus;
      }
    });
  },
  methods: {
    navigateToDetail(item) {
      uni.navigateTo({ url: `/pages/myself/member?id=${item.id}` });
    },
    confirmExit(item) {
      if (item.status !== '已退出') {
        if (confirm('您确定要退出这个项目吗？')) {
          item.status = '已退出';
          localStorage.setItem(`project-status-${item.id}`, item.status);
        }
      }
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
  margin-right: 10px; /* 招募和报名截止之间的距离 */
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
  align-items: center; /* 垂直居中对齐 */
}

.status-button {
  margin-left: auto; /* 将按钮推到最右侧 */
  padding: 0px 12px;
  background-color: #21C059; /* 按钮背景色 */
  color: white; /* 按钮文本颜色 */
  border: none; /* 去掉边框 */
  border-radius: 4px; /* 圆角 */
  cursor: pointer; /* 鼠标指针变为手指 */
  font-size: 14px; /* 文本大小 */
  transition: background-color 0.3s; /* 动画效果 */
}

.status-button.exited {
  background-color: #b0b0b0; /* 已退出按钮背景色 */
  cursor: default; /* 已退出时不显示手指 */
}

.status-button:hover:not(.exited) {
  background-color: #d32f2f; /* 悬停时的背景色 */
}
</style>