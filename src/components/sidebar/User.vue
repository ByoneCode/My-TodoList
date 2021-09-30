<template>
    <div class="user">
        <div class="side-user" @click="toggleMenu" tabindex="-1" outline="0" @blur="toggleMenu">
            <div class="avatar">
                <span>杰</span>
            </div>
            <div class="info">
                <p>ByoneJie</p>
                <p>2488068072@qq.com</p>
            </div>
        </div>
        <div class="tool-menu" :class="{ 'open-menu': stat.isMenu }">
            <ul>
                <li>
                    <i class="iconfont icon-setuser"></i><span>管理账户</span>
                </li>
                <li>
                    <i class="iconfont icon-setting"></i><span>修改资料</span>
                </li>
                <li>
                    <i class="iconfont icon-theme"></i><span>切换主题</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "@vue/reactivity";

let stat = reactive({
    isMenu: false,
});

const toggleMenu = () => {
    stat.isMenu = !stat.isMenu;
};
</script>

<style lang="less" scoped>
@import "./user";
</style>
