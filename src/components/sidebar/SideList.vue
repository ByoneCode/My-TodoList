<template>
    <div class="side-list">
        <ul>
            <li v-for="(item,index) in list" :key="`list-${index}`">
                <div class="list-items">
                    <div class="list-icon">
                        <i>{{item.icon}}</i>
                    </div>
                    <div class="list-title">
                        <span>{{item.title}}</span>
                    </div>
                    <div class="list-count">
                        <span>6</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="side-add" @click="emit('addList')">
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
    }
});
const emit = defineEmits(['addList'])
</script>

<style lang="less" scoped>
@import "./sidelist";
</style>
