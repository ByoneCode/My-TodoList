<template>
  <template v-for="item in taskListItem(0)">
    <div class="taskList-item">
      <div class="item-select">
        <i class="iconfont icon-noselect"></i>
      </div>
      <div class="item-title">
        <span>{{ item.name }}</span>
      </div>
      <div class="item-star">
        <i class="iconfont icon-star"></i>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
  const props = defineProps({
    list: {
      type: Object,
      default: () => { }
    }
  })
  // 过滤未完成和已完成
  function taskListItem(num: number) {
    if (num === 0) {
      return props.list.filter((item: any) => item.isok == 0)
    }else{
      return props.list.filter((item: any) => item.isok == 1)
    }
  }
</script>

<style lang="less" scoped>
  .icons{
    font-size: 20px;
    color: #929292;
    font-weight: bold;
  }
  .item{
    margin: 5px auto;
    padding: 0 1rem;
    overflow: hidden;
    display: flex;
    z-index: 1;
    width: 90%;
    height: 55px;
    align-items: center;
    border-radius: 5px;
  }
.taskList-item {
  .item();
  background-color: #242426;
  @media (max-width: 768px) {
    width: 80%;
  }
  &:hover {
    background-color: #292929;
  }
  .item-select {
    i.icon-noselect {
      .icons();
    }
  }
  .item-title {
    margin-left: 15px;
    color: #fff;
  }
  .item-star {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    i.icon-star {
      .icons();
    }
  }
}
</style>