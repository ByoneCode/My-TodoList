<template>
    <aside class="container__sidebar" :class="{ 'open-side': allstat.isSide }">
        <div class="sidebar">
            <User />
            <SideNav :list="stat.navList" />
            <div class="side-hr"></div>
            <SideList :list="stat.taskList" @add-list="addList" />
        </div>
    </aside>
    <div class="shade" v-show="allstat.isSide" @click="closeSide"></div>
</template>

<script setup lang="ts">
import SideNav from "./SideNav.vue";
import SideList from "./SideList.vue";
import User from "./User.vue";
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();
const allstat = store.state;

const closeSide = () => {
    store.commit("toggleSide");
};

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
    taskList: [
        {
            title: '入门',
            icon: '👋'
        },
        {
            title: '资源',
            icon: '🛒'
        }
    ]
})

const addList = () => {
    stat.taskList.push({
        title: '新建列表',
        icon: '🤹‍♀️'
    })
}
</script>

<style lang="less" scoped>
@import "./index";
</style>
