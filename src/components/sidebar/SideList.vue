<template>
    <div class="side-list">
        <ul>
            <li>
                <div class="list-items">
                    <div class="list-icon">
                        <i>👋</i>
                    </div>
                    <div class="list-title">
                        <span>入门</span>
                    </div>
                    <div class="list-count">
                        <span>6</span>
                    </div>
                </div>
            </li>
            <li>
                <div class="list-items">
                    <div class="list-icon">
                        <i>🛒</i>
                    </div>
                    <div class="list-title">
                        <span>资源</span>
                    </div>
                    <div class="list-count">
                        <span>6</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="side-add">
            <i class="iconfont icon-add"></i>
            <span>新建列表</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    list: {
        type: Array,
        default: [],
    },
});
</script>

<style lang="less" scoped>
@import "./sidelist";
</style>
