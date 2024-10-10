<template>
  <view class="container">
    <view class="card-list">
      <view 
        v-for="(item, index) in projects" 
        :key="index" 
        class="card" 
        @click="navigateToDetail(item.id)"
      >
        <view class="card-header">
          <text class="card-title">{{ item.title }}</text>
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
        { title: '数学建模比赛项目', id: '1' },
        { title: '人工智能研究项目', id: '2' },
        { title: '创新创意大赛', id: '3' },
      ]
    };
  },
  methods: {
    // 修改跳转方法，根据 ID 直接构造 URL
    navigateToDetail(id) {
		console.log(id);
      // 跳转到具体的页面，根据 ID 决定页面
	  try{
			uni.navigateTo({ url: `/pages/myself/member${id}`});
	  }catch(e){
	  	console.log("这里报错");
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
</style>
