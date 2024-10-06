<template>
  <div class="project-recommendation">
    <!-- 页面顶部 -->
    <div class="header">
      <h1>项目推荐</h1>
      <p>精心筛选 只为更优秀的你</p>
    </div>

    <!-- 搜索框 -->
    <div class="search-bar">
      <input type="text" placeholder="搜索" />
    </div>

    <!-- 项目列表 -->
    <ul class="projects-list">
      <li v-for="(item, index) in projects" :key="index" @click="openProject(item)">
        <div class="project-card">
          <h2>{{ item.title }}</h2>
          <p>招募: {{ item.recruitment }}人 报名截止: {{ item.deadline }}</p>
          <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex">{{ tag }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        // 假设这是从服务器获取的数据
        { title: '数学建模比赛项目', recruitment: 2, deadline: '2024年3月1日', tags: ['数学建模', '数据分析', '编程', '文档撰写'] },
        // ...其他项目数据...
      ],
    };
  },
  methods: {
    openProject(project) {
      console.log('Opening project:', project);
      // 这里可以添加跳转到新页面的逻辑
    },
  },
};
</script>

<style scoped>
/* 样式部分 */
.project-recommendation {
  /* 整体样式 */
}

.header {
  /* 头部样式 */
}

.search-bar input {
  /* 搜索框样式 */
}

.projects-list li {
  /* 列表项样式 */
}

.project-card {
  /* 卡片样式 */
}
</style>
