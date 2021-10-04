<template>
    <aside class="container__sidebar" :class="{ 'open-side': allstat.isSide }">
        <div class="sidebar">
            <User @open-account="openAccount"/>
            <SideNav :list="stat.navList" />
            <div class="side-hr"></div>
            <SideList :list="stat.taskList" @add-list="addList" />
        </div>
    </aside>
    <Account :isopen="stat.isOpenUser" @close-user="closeAccount" />
    <div class="shade" v-show="allstat.isSide" @click="closeSide"></div>
</template>

<script setup lang="ts">
import SideNav from "./SideNav.vue";
import SideList from "./SideList.vue";
import User from "./User.vue";
import Account from "../account/index.vue";
import { reactive, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const allstat = store.state;
 
const closeSide = () => {
    store.commit("toggleSide");
};

const taskCount = computed(() => {
    return allstat.taskList.filter((e: any) => e.isok === 0).length
})

const stat = reactive({
    isOpenUser: false,
    navList: [
    {
        title: "星标",
        icon: "star",
        path: "/star/index",
        hidden: false,
        count: 6
    },
    {
        title: "便笺",
        icon: "note",
        path: "/note/index",
        hidden: false,
        count: 6
    },
    {
        title: "任务",
        icon: "home",
        path: "/home/index",
        hidden: false,
        count: taskCount
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

const addList = (item: any,reset: any) => {
    if(item.title === ''){
        item.title = '无标题列表'
    }
    stat.taskList.push(item)
    reset()
}

const openAccount = () => {
    stat.isOpenUser = true
}
const closeAccount = () => {
    stat.isOpenUser = false
}
</script>

<style lang="less" scoped>
@import "./index";
</style>
