<template>
  <aside
    class="container__sidebar"
    :class="{ 'open_side': allstat.isSide }"
  >
    <div class="sidebar">
      <div class="side_user">
        <div class="avatar">
          <span>杰</span>
        </div>
        <div class="info">
          <p>ByoneJie</p>
          <p>2488068072@qq.com</p>
        </div>
        <div class="theme">
          <i class="iconfont icon-theme"></i>
        </div>
      </div>
      <side-nav :list="stat.navList"></side-nav>
      <div class="side_hr"></div>
      <side-list></side-list>
      <div class="side_add">
        <i class="iconfont icon-add"></i>
        <span>新建列表</span>
      </div>
    </div>
  </aside>
  <div class="shade" v-show="allstat.isSide" @click="closeSide"></div>
</template>

<script setup lang="ts">
import SideNav from "./SideNav.vue";
import SideList from "./SideList.vue";
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore()
const allstat = store.state

const closeSide = () => {
  store.commit("toggleSide")
}

const stat = reactive({
  navList: [
    {
      title: "星标",
      icon: "star",
      path: "/star/index",
      hidden: false,
    },
    {
      title: "便笺",
      icon: "note",
      path: "/note/index",
      hidden: false,
    },
    {
      title: "任务",
      icon: "home",
      path: "/home/index",
      hidden: false,
    },
  ],
});

const emit = defineEmits(["closeSide"]);
</script>

<style lang="less" scoped>
@import "./index";
</style>