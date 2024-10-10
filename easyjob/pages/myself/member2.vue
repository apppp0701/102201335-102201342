<template>
  <view class="container">
    <!-- Person Card List -->
    <view class="card-list">
      <view 
        v-for="(person, index) in people" 
        :key="index" 
        class="person-card"
      >
        <view class="card-content">
          <view class="avatar">
            <image src="../../static/logo.png" mode="aspectFit" class="avatar-image" />
          </view>
          <view class="person-info">
            <view class="person-info-line">
              <text class="person-name">姓名：{{ person.name }}</text>
            </view>
            <view class="person-info-line">
              <text class="person-id">学校：{{ person.id }}</text>
            </view>
            <view class="person-info-line">
              <text class="person-major">专业：{{ person.major }}</text>
            </view>
          </view>
          <!-- Button to toggle join status -->
          <button 
            class="action-button" 
            @click.stop="toggleJoinStatus(person)"
          >
            {{ person.joinStatus }}
          </button>
        </view>
      </view>
    </view>

    <!-- Status Toggle Button -->
    <view class="status-toggle-container">
      <button 
        class="status-button" 
        @click="toggleOverallStatus"
      >
        {{ overallStatus }}
      </button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          name: '蒋方方',
          id: '福州大学',
          major: '计算机科学与技术',
          joinStatus:  '同意申请',
        },
        {
          name: '董小莉',
          id: '福州大学',
          major: '机械工程',
          joinStatus:  '同意申请',
        },
      ],
      overallStatus: '招募中'
    };
  },
  methods: {
    getJoinStatus(name) {
      return localStorage.getItem(name);
    },
    toggleJoinStatus(person) {
      person.joinStatus = person.joinStatus === '同意申请' ? '已加入' : '同意申请';
      // localStorage.setItem(person.name, person.joinStatus);
    },
    toggleOverallStatus() {
      if (this.overallStatus === '招募中') {
        this.overallStatus = '进行中';
      } else if (this.overallStatus === '进行中') {
        this.overallStatus = '已完成';
      } else {
        this.overallStatus = '招募中';
      }
    },
    // 删除 goToPersonData 方法
    // goToPersonData(person) {
    //   uni.navigateTo({
    //     url: `/pages/myself/data?name=${person.name}&id=${person.id}&major=${person.major}`
    //   });
    // }
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
  flex-grow: 1; /* Allow the card list to grow and take available space */
/*  overflow-y: auto; */ /* Add scrolling if necessary */
}

.person-card {
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-content {
  display: flex;
  align-items: center;
}

.avatar {
  display: flex;
  align-items: center;
}

.avatar-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.person-info {
  flex-grow: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

.person-info-line {
  margin-bottom: 4px;
}

.person-name,
.person-id,
.person-major {
  font-size: 12px;
  color: #333;
}

.action-button {
  margin-left: 10px;
  padding: 0px 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
}

.action-button:hover {
  background-color: #079A44;
}

.status-toggle-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 500px; /* Add some margin to the bottom */
}

.status-button {
  padding: 6px 20px; /* Increase padding for more height */
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
}

.status-button:hover {
  background-color: #1E88E5;
}
</style>
