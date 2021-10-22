<template>
    <aside class="container__sidebar" :class="{ 'open-side': allstat.isSide }">
        <div class="sidebar">
            <User @open-account="openAccount"/>
            <SideNav :list="stat.navList" />
            <div class="side-hr"></div>
            <SideList :list="allstat.taskGroup" @add-list="addList" />
        </div>
    </aside>
    <Account :isopen="stat.isOpenUser" @close-user="closeAccount" />
    <Profile />
    <Theme />
    <div class="shade" v-show="allstat.isSide" @click="closeSide"></div>
</template>

<script setup lang="ts">
import SideNav from "./SideNav.vue";
import SideList from "./SideList.vue";
import User from "./User.vue";
import Account from "../account/index.vue";
import Profile from "../profile/index.vue";
import Theme from "../theme/index.vue";
import { reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { getTaskGroup, addTaskGroup } from "/@/api/taskGroup";

const store = useStore();
const allstat = store.state;
 
const closeSide = () => {
    store.commit("toggleSide");
};

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
        count: 0
    },
    {
        title: "任务",
        icon: "home",
        path: "/home/index",
        hidden: false,
        count: 0
    },
    ],
    taskList: []
})

onMounted(async() => {
    const { data } = await getTaskGroup(0)
    store.commit('groupList',data.items)
})


const addList = async (item: any,reset: any) => {
    if(item.title === ''){
        item.title = '无标题列表'
    }
    const res: any = await addTaskGroup(item)

    if(res.code === 200){
        item.id = parseInt(res.data.id) 
        store.commit('addGroup',item)
        reset()
    }
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
