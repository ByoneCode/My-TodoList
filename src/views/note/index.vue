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
    <div class="note-list scrollbar">
      <div class="note-container">
        <div class="note-list-item note-add">
          <i class="iconfont icon-add"></i>
        </div>
        <div class="note-list-item">
          <div class="note-time">
            <span>2021/09/25</span>
          </div>
          <div class="note-content">
            <p>
              这是一个记事本可以用来为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接即使源 property 不存在，toRef 也会返回一个可用的 ref。这使得它在使用可选 prop 时特别有用，可选 prop 并不会被 toRefs 处理。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
@import "./style";
</style>