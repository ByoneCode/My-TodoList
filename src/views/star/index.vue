<template>
  <div class="star">
    <!-- heading -->
    <div class="heading">
      <div class="heading-main">
        <!-- icon -->
        <div class="heading-icon">
          <i class="iconfont icon-home"></i>
        </div>
        <!-- title -->
        <div class="heading-title">
          <span>星标</span>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="taskList">
      <div class="task-container">
        <div class="taskList-item">
          <div class="item-isdone">
            <i class="iconfont icon-undone"></i>
          </div>
          <div class="item-title">
            <span>苹果</span>
          </div>
          <div class="item-star">
            <i class="iconfont icon-star"></i>
          </div>
        </div>
        <div class="taskList-item">
          <div class="item-isdone">
            <i class="iconfont icon-undone"></i>
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
        <div class="background-lines"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
@import "./style";
</style>