<template>
    <aside class="container__sidebar" :class="{ 'open-side': allstat.isSide }">
        <div class="sidebar">
                <!-- user -->
                <div class="side-user" @click="toggleMenu">
                    <div class="avatar">
                        <span>杰</span>
                    </div>
                    <div class="info">
                        <p>ByoneJie</p>
                        <p>2488068072@qq.com</p>
                    </div>
                    <!-- user menu -->
                    <div class="tool-menu" :class="{ 'open-menu': stat.isMenu }">
                        <ul>
                            <li>管理账户</li>
                            <li>修改资料</li>
                            <li>切换主题</li>
                        </ul>
                    </div>
                </div>
            <!-- nav list -->
            <side-nav :list="stat.navList"></side-nav>
            <!-- divided line -->
            <div class="side-hr"></div>
            <!-- diy list -->
            <side-list></side-list>
            <div class="side-add">
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

const store = useStore();
const allstat = store.state;

const closeSide = () => {
    store.commit("toggleSide");
};

const toggleMenu = () => {
    stat.isMenu = !stat.isMenu;
};

const stat = reactive({
    isMenu: false,
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
