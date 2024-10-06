<template>
  <view class="container">
    <!-- 顶部文字 -->
    <view class="header">
      <text class="title">项目推荐</text>
      <text class="subtitle">精心筛选 只为更优秀的你</text>
    </view>
    
    <!-- 搜索框 -->
    <view class="search-box">
      <input class="search-input" type="text" placeholder="搜索" />
    </view>
    
    <!-- 卡片列表 -->
    <view class="card-list">
      <view v-for="(item, index) in projects" :key="index" class="card">
        <view class="card-header">
          <text class="card-title">{{ item.title }}</text>
        </view>
        <view class="card-tags">
          <text v-for="(tag, index) in item.tags" :key="index" class="tag">{{ tag }}</text>
        </view>
        <view class="card-footer">
          <text class="footer-text">招募：{{ item.recruit }}</text>
          <text class="footer-text">报名截止：{{ item.deadline }}</text>
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
        {
          title: '数学建模比赛项目',
          tags: ['数学建模', '数据分析', '编程', '文档撰写'],
          recruit: '2人',
          deadline: '2024年3月1日'
        },
        // 添加更多项目
      ]
    }
  }
}
</script>

<style>
.footer-text {
	  margin-right: 10px; /* 招募和报名截止之间的距离 */
	}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to bottom, #C7F6C7, #E4EFE8); /* 浅绿色渐变背景 */
  padding: 20px; /* 添加一些内边距 */
}

.header {
  margin-bottom: 20px;/*搜索框高度*/
  text-align: center; /* Center the text */
}

.title {
  font-size: 25px;
  font-weight: bold;
  display: block; /* Ensure title is on a new line */
  text-align: left; /* Right align the title */
  margin-top: 50px; /* 增加标题与上方元素之间的间距 */
  margin-bottom: 5px; /* 增加标题与副标题之间的间距 */
}

.subtitle {
  font-size: 12px;
  color: #666;
  display: block; /* Ensure subtitle is on a new line */
  text-align: left; /* Right align the subtitle */
}


.search-box {
    position: relative; /* 为定位图标做准备 */
    width: 100%; /* 使容器宽度为100% */
    display: flex; /* 使用 flexbox 来居中 */
    justify-content: center; /* 水平居中对齐 */
    margin: 20px 0; /* 设置上下外边距，可以根据需要调整 */
}

.search-input {
    width: 300px; /* 适当缩短搜索框的宽度 */
    padding: 8px 36px 8px 40px; /* 左侧留出空间给图标 */
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: #fff; /* 设置背景色为白色 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加轻微阴影以提升视觉效果 */
}

.search-input::placeholder {
    color: #aaa; /* 更改占位符颜色 */
}

/* 添加搜索图标 */
.search-box::before {
    content: ''; /* 使用伪元素 */
    position: absolute; /* 绝对定位 */
    left: 10px; /* 距离左侧10px */
    top: 50%; /* 垂直居中 */
    transform: translateY(-50%); /* 精确垂直居中 */
    width: 16px; /* 图标宽度 */
    height: 16px; /* 图标高度 */
    background-image: url('../../static/tab/search.png'); /* 替换为您的图标路径 */
    background-size: contain; /* 图标适应背景 */
    background-repeat: no-repeat; /* 不重复 */
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

.card-tags {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.tag {
  background-color: #e0e0e0;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 4px;
  margin-bottom: 4px;
  font-size: 12px;
}

.card-footer {
  font-size: 12px;
  color: #999;
}
</style>
