<template>
  <div class="setinfo-menu" :class="{'open-setinfo':allstat.isSetInfo}">
    <!-- 添加 open-setinfo 类显示 -->
    <div class="setinfo-title">
      <span>修改资料</span>
    </div>
    <div class="setinfo-name">
      <input type="text" />
    </div>
    <div class="setinfo-avatar">
      <span class="avatar-change">更改图片</span>
      <span>图片更改最多可能需要24小时才会生效。</span>
    </div>
    <div class="setinfo-btn">
      <div class="setinfo-update">
        <span>更新</span>
      </div>
      <div class="setinfo-cancel" @click="store.commit('toggleSetInfo')">
        <span>取消</span>
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