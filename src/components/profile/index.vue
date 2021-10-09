<template>
  <div class="setinfo-menu" :class="{ 'open-setinfo': allstat.isSetInfo }">
    <!-- 添加 open-setinfo 类显示 -->
    <div class="setinfo-header">
      <div class="setinfo-title">
        <span>修改资料</span>
      </div>
      <div class="setinfo-close"  @click="store.commit('toggleSetInfo')">
        <i class="iconfont icon-del"></i>
      </div>
    </div>
    <div class="setinfo-list">
      <div class="setinfo-name">
        <span>修改用户名</span>
        <input type="text" />
      </div>
      <div class="setinfo-password">
        <span>修改密码</span>
        <input type="password" />
      </div>
      <div class="setinfo-confirm">
        <span>确认密码</span>
        <input type="password" />
      </div>
      <div class="setinfo-avatar">
        <i class="iconfont icon-add"></i>
      </div>
    </div>
    <div class="setinfo-btn">
      <div class="setinfo-update">
        <span>更新</span>
      </div>
    </div>
  </div>
  <div class="shade" v-if="allstat.isSetInfo"></div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();
const allstat = store.state;
</script>

<style lang="less" scoped>
@import "./style";
</style>