<template>
  <div class="setuser-menu" :class="{'open-setuser':isopen}">
    <!-- 添加 open-setuser 类显示 -->
    <div class="setuser-title">
      <span>管理账户</span>
    </div>
    <div class="setuser-item">
      <div class="user-avatar">
        <span>杰</span>
      </div>
      <div class="user-info">
        <div class="user-name">
          <span>ByoneJie</span>
        </div>
        <div class="user-email">2488068072@qq.com</div>
      </div>
      <div class="user-logout">
        <span>注销</span>
      </div>
    </div>
    <div class="setuser-item">
      <div class="user-avatar">
        <span>杰</span>
      </div>
      <div class="user-info">
        <div class="user-name">
          <span>ByoneJie</span>
        </div>
        <div class="user-email">2488068072@qq.com</div>
      </div>
      <div class="user-logout">
        <span>注销</span>
      </div>
    </div>
    <div class="setuser-add">
      <i class="iconfont icon-add"></i>
      <span>添加账户</span>
    </div>
    <div class="setuser-close" @click="emit('closeUser')">
      <span>关闭</span>
    </div>
  </div>
  <div class="shade" v-if="isopen"></div>
</template>

<script setup lang="ts">

const props = defineProps({
  isopen: Boolean
})

const emit = defineEmits(['closeUser'])

</script>

<style lang="less" scoped>
@import "./style";
</style>