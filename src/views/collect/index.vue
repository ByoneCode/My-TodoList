<template>
  <div class="task">
    <div class="taskToolsbar">
      <div class="taskToolsbar-title">
        <div class="tools-icon">
          <i class="iconfont icon-home"></i>
        </div>
        <div class="tools-title">
          <span>重要</span>
        </div>
      </div>
    </div>
    <div class="taskList">
      <div class="task-container">
        <div class="taskList-item">
          <div class="item-select">
            <i class="iconfont icon-noselect"></i>
          </div>
          <div class="item-title">
            <span>苹果</span>
          </div>
          <div class="item-star">
            <i class="iconfont icon-star"></i>
          </div>
        </div>
        <div class="taskList-item">
          <div class="item-select">
            <i class="iconfont icon-noselect"></i>
          </div>
          <div class="item-title">
            <span>香蕉</span>
          </div>
          <div class="item-star">
            <i class="iconfont icon-star"></i>
          </div>
        </div>
      </div>
      <div class="main-background">
        <div class="backgroundLines"></div>
      </div>
    </div>
    <div class="task-add">
      <div class="add">
        <i class="iconfont icon-add"></i>
        <span>添加任务</span>
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
  .task{
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
  .taskToolsbar{
    padding: 0 0 1rem 1rem;
    @media (min-width: 768px) {
      padding-top: 2rem;
    }
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
    padding-bottom: 100px;
    .task-container{
      position: relative;
      overflow-y: auto;
      overflow-x: hidden;
      &::-webkit-scrollbar{
        width:2px;
      }
      &::-webkit-scrollbar-track{
        background: #1a1b1c;
        border-radius:2px;
      }
      &::-webkit-scrollbar-thumb{
        background: #858585;
        border-radius:10px;
      }
    }
    .taskList-item{
      .item();
      background-color: #242426;
      @media (max-width: 768px){
        width: 80%;
      }
      &:hover { background-color: #292929;}
      .item-select {
        i.icon-noselect{
          .icons();
        }
      }
      .item-title{
        margin-left: 15px;
        color: #fff;
      }
      .item-star{
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        i.icon-star{
          .icons();
        }
      }
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