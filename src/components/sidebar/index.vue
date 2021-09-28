<template>
    <aside class="container__sidebar" :class="{ 'open-side': allstat.isSide }">
        <div class="sidebar">
            <User />
            <SideNav :list="navList" />
            <div class="side-hr"></div>
            <SideList />
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

const navList = [
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
];

const emit = defineEmits(["closeSide"]);
</script>

<style lang="less" scoped>
@import "./index";
</style>
