<template>
  <view class="iicontainer">
    <!-- 顶部文字 -->
    <view class="iiheader">
      <text class="iititle">项目推荐</text>
      <text class="iisubtitle">精心筛选 只为更优秀的你</text>
    </view>

    <!-- 搜索框 -->
    <view class="iisearch-box">
      <input class="iisearch-input" type="text" placeholder="搜索" />
    </view>

    <!-- 卡片列表 -->
    <view class="iicard-list">
      <view v-for="(item, index) in projects" :key="index" class="iicard" @click="navigateToDetail(item)">
        <view class="iicard-header">
          <text class="iicard-title">{{ item.title }}</text>
        </view>
        <view class="iicard-footer">
          <text class="iifooter-text">招募：{{ item.recruit }}</text>
          <text class="iifooter-text">报名截止：{{ item.deadline }}</text>
        </view>
      </view>
    </view>

    <!-- 右下角按钮 -->
    <view class="iifloating-button" @click="navigateToPost">
      <image src="../../static/button.png" mode="aspectFit" />
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
          recruit: '2人',
          deadline: '2024年3月1日',
          id: '1'
        },
        {
          title: '人工智能研究项目',
          recruit: '3人',
          deadline: '2024年4月15日',
          id: '2'
        },
        {
          title: '环保公益活动',
          recruit: '5人',
          deadline: '2024年5月10日',
          id: '3'
        },
        // 在这里继续添加更多项目...
        {
          title: '更多项目名称',
          recruit: '招募人数',
          deadline: '截止日期',
          id: '4' // 确保id是唯一的
        },
        // 更多项目...
      ]
    };
  },
  methods: {
    navigateToDetail(item) {
      // 跳转到详情界面，并传递项目ID
      uni.navigateTo({
        url: `/pages/post/post?id=${item.id}`
      });
    },
    navigateToPost() {
      // 跳转到发布帖子界面
      uni.navigateTo({
        url: '/pages/creat/creat'
      });
    }
  }
}
</script>

<style>
.iifooter-text {
  margin-right: 10px; /* 招募和报名截止之间的距离 */
}

.iicontainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to bottom, #C7F6C7, #E4EFE8); /* 浅绿色渐变背景 */
  padding: 20px; /* 添加一些内边距 */
}

.iiheader {
  margin-bottom: 20px; /* 搜索框高度 */
  text-align: center; /* Center the text */
}

.iititle {
  font-size: 25px;
  font-weight: bold;
  display: block; /* Ensure title is on a new line */
  text-align: left; /* Right align the title */
  margin-top: 50px; /* 增加标题与上方元素之间的间距 */
  margin-bottom: 5px; /* 增加标题与副标题之间的间距 */
}

.iisubtitle {
  font-size: 12px;
  color: #666;
  display: block; /* Ensure subtitle is on a new line */
  text-align: left; /* Right align the subtitle */
}

.iisearch-box {
  position: relative; /* 为定位图标做准备 */
  width: 100%; /* 使容器宽度为100% */
  display: flex; /* 使用 flexbox 来居中 */
  justify-content: center; /* 水平居中对齐 */
  margin: 20px 0; /* 设置上下外边距，可以根据需要调整 */
}

.iisearch-input {
  width: 300px; /* 适当缩短搜索框的宽度 */
  padding: 8px 36px 8px 40px; /* 左侧留出空间给图标 */
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff; /* 设置背景色为白色 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加轻微阴影以提升视觉效果 */
}

.iisearch-input::placeholder {
  color: #aaa; /* 更改占位符颜色 */
}

/* 添加搜索图标 */
.iisearch-box::before {
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

.iicard-list {
  display: flex;
  flex-direction: column;
}

.iicard {
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.iicard-header {
  margin-bottom: 8px;
}

.iicard-title {
  font-size: 18px;
  font-weight: bold;
}

.iicard-footer {
  font-size: 12px;
  color: #999;
}

/* 右下角按钮样式 */
.iifloating-button {
  position: fixed;
  bottom: 80px; /* 距离底部20px */
  right: 20px; /* 距离右边20px */
  width: 60px; /* 根据需要调整宽度 */
  height: 60px; /* 根据需要调整高度 */
  z-index: 1000; /* 确保按钮在最上层 */
}

.iifloating-button image {
  width: 100%;
  height: 100%;
}
</style>
