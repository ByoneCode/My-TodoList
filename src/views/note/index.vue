<template>
  <div class="note">
    <!-- heading -->
    <div class="heading">
      <div class="heading-main">
        <!-- icon -->
        <div class="heading-icon">
          <i class="iconfont icon-note"></i>
        </div>
        <!-- title -->
        <div class="heading-title">
          <span>便笺</span>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="noteList">
      <div class="note-container">
        <div class="noteList-item">
          <div class="note-time">
            <span>17:09</span>
          </div>
          <div class="note-title">
            <span>便笺标题</span>
          </div>
        </div>
      </div>
    </div>
    <!-- add -->
    <div class="noteAdd">
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
@import "./style";
</style>