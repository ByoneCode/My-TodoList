<template>
  <aside
    class="container__right"
    :class="{ 'task-open': allstat.openTaskInfo }"
  >
    <div class="taskinfo_container">
      <div class="taskinfo-head">
        <div class="head-info">
          <i
            class="iconfont icon-undone"
            v-if="allstat.taskInfo.isok === 0"
          ></i>
          <i class="iconfont icon-done" v-else></i>
          <div class="head-title">
            <span v-if="allstat.taskInfo.isok === 0">{{
              allstat.taskInfo.name
            }}</span>
            <span
              v-else
              style="color: #919191; text-decoration: line-through"
              >{{ allstat.taskInfo.name }}</span
            >
          </div>
          <div class="head-star">
            <i class="iconfont icon-star"></i>
          </div>
        </div>
      </div>
      <div class="task-tools">
        <div class="tools-item">
          <i class="iconfont icon-sun"></i>
          <span>添加到"我的一天"</span>
        </div>
      </div>
      <div class="task-bottom">
        <i
          class="iconfont icon-up"
          @click="store.commit('toggleTaskInfo', null)"
        ></i>
        <span>创建于9月18日</span>
        <i class="iconfont icon-delete"></i>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const allstat = store.state;

// 当页面切换渲染完成时关闭
const router = useRouter();
router.afterEach(() => {
  store.commit("toggleTaskInfo", null);
});
</script>

<style lang="less" scoped>
.container__right {
  display: flex;
  width: 350px;
  position: relative;
  display: none;
  @media (max-width: 678px) {
    width: 100vw;
    display: block;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
    transition: all 0.2s ease;
    transform: translateX(100%);
  }
  &.task-open {
    transform: translateX(0);
    @media (min-width: 768px) {
      display: block;
    }
  }
  .taskinfo_container {
    height: 100vh;
    width: 100%;
    background-color: #1e1e1e;
    .taskinfo-head {
      display: flex;
      height: 120px;
      background-color: #242426;
      border-bottom: 1px solid #121212;
      align-items: flex-end;
      color: #9b9fab;
      font-weight: bold;
      .head-info {
        display: flex;
        width: 100%;
        padding: 0 1rem;
        margin: 2rem 0;
        align-items: center;
        justify-content: space-between;
        .head-title {
          flex: 1;
          padding-left: 1rem;
          font-size: 20px;
        }
        i.iconfont {
          font-size: 20px;
        }
      }
    }
    .task-tools {
      margin-top: 1rem;
      .tools-item {
        width: 85%;
        margin: 0.5rem auto;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        background-color: #242426;
        border: 1px solid #292929;
        color: #919191;
        .ease();
        &:hover {
          background-color: #292929;
          .ease();
        }
        i {
          font-size: 30px;
        }
        span {
          font-size: 15px;
          margin-left: 1rem;
        }
      }
    }
    .task-bottom {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #242426;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      span {
        font-size: 14px;
      }
      i,
      span {
        color: #919191;
      }
      i.iconfont {
        font-size: 20px;
        padding: 0 1rem;
        height: 50px;
        line-height: 50px;
        .ease();
        &:hover {
          background-color: #292929;
          .ease();
        }
      }
    }
  }
}
</style>