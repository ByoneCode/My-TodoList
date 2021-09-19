<template>
  <div class="task">
    <div class="taskToolsbar">
      <div class="taskToolsbar-title">
        <div class="tools-icon">
          <i class="iconfont icon-home"></i>
        </div>
        <div class="tools-title">
          <span>任务</span>
        </div>
      </div>
    </div>

    <div class="taskList">
      <div class="taskList-item">

      </div>
      <div class="main-background">
        <div class="backgroundLines"></div>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
  .task{
    flex: 1 1 0px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: background-color 0.3s;
  }
  .taskToolsbar{
    padding: 1rem;
    margin-top: 2rem;
    .taskToolsbar-title {
      display: flex;
      align-items: center;
      .tools-icon{
        i.icon-home{
          font-size: 30px;
          color: #788cde;
        }
      }
      .tools-title>span{
        font-size: 30px;
        font-weight: bold;
        margin-left: .8rem;
        color: #788cde;
      }
    }
  }
  .taskList{
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1 1 0px;
    .taskList-item{
      overflow: hidden;
      display: flex;
      z-index: 1;
    }
    .main-background{
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1 1 0px;
      .backgroundLines {
        margin: 0 24px;
        flex: 1;
        background: linear-gradient(180deg, #1a1b1c, #1a1b1c 52px, #171819 52px, #171819 52px);
        background-size: 100% 53px;
        box-shadow: inset 0 1px 0 0 #171819;
      }
    }
  }
</style>