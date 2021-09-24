<template>
  <div class="task">
    <div class="taskToolsbar">
      <div class="taskToolsbar-title">
        <div class="tools-icon">
          <i class="iconfont icon-note"></i>
        </div>
        <div class="tools-title">
          <span>便笺</span>
        </div>
      </div>
    </div>
    <div class="stickyList">
      <div class="sticky-container">
        <div class="stickyList-item">
          <div class="sticky-time">
            <span>17:09</span>
          </div>
          <div class="sticky-title">
            <span>便笺标题</span>
          </div>
        </div>
      </div>
    </div>
    <div class="task-add">
      <div class="add">
        <i class="iconfont icon-add"></i>
        <span>添加便笺</span>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
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
.task {
  flex: 1 1 0px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: background-color 0.3s;
  position: relative;
  .task-add{
      background: #1a1b1c;
      height: 100px;
      position: absolute;
      bottom: 0;
      right: 2px;
      left: 0;
      user-select: none;
      .add{
        .item();
        margin-top: 15px;
        background-color: #1f1f20;
        @media (max-width: 768px){
          width: 80%;
        }
        i.icon-add{
          .icons();
        }
        span{
          margin-left: 15px;
          color: #fff;
        }
      }
    }
}
.taskToolsbar {
  padding: 0 0 1rem 1rem;
  @media (min-width: 768px) {
    padding-top: 2rem;
  }
  .taskToolsbar-title {
    display: flex;
    align-items: center;
    .tools-icon {
      i.icon-note {
        font-size: 30px;
        color: #efad03;
      }
    }
    .tools-title > span {
      font-size: 30px;
      font-weight: bold;
      margin-left: 0.8rem;
      color: #788cde;
    }
  }
}
.stickyList {
  .sticky-container {
    .stickyList-item {
      margin: 5px auto;
      padding: 0 1rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      z-index: 1;
      width: 90%;
      height: 55px;
      // align-items: center;
      justify-content: center;
      border-radius: 5px;
      background-color: #242426;
      .sticky-time {
        color: #949494;
        font-size: 12px;
        align-self: flex-end;
      }
      .sticky-title {
        color: white;
      }
    }
  }
}
</style>