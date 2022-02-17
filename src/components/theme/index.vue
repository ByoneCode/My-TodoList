<template>
  <div class="theme">
    <div class="theme-menu" :class="{ 'open-theme': allstat.isSetTheme }">
      <!-- 添加 open-theme 类显示 -->
      <div class="theme-header">
        <div class="theme-title">
          <span>切换主题</span>
        </div>
        <div class="theme-close"  @click="store.commit('toggleSetTheme')">
          <i class="iconfont icon-del"></i>
        </div>
      </div>
      <div class="theme-list">
        <div class="theme-item" @click="switchTheme('light')">
          <i class="iconfont icon-light"></i>
          <span>白天模式</span>
        </div>
        <div class="theme-item" @click="switchTheme('dark')">
          <i class="iconfont icon-moon"></i>
          <span>黑夜模式</span>
        </div>
        <!-- <div class="theme-item">
          <i class="iconfont icon-notebook"></i>
          <span>跟随系统</span>
        </div> -->
      </div>
    </div>
  </div>
  <div class="shade" v-if="allstat.isSetTheme"></div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { changeStyle } from '/@/utils/factory';
import { menusModel } from '/@/utils/model';
const store = useStore();
const allstat = store.state;  


const switchTheme = (mode: string) => {
  changeStyle(menusModel[mode]);
  // 切换成功储存再本地
  localStorage.setItem('theme',mode);
  store.commit('toggleSetTheme');
}
</script>

<style lang="less" scoped>
@import "./style";
</style>
