<template>
    <template v-for="(item,index) in taskListItem()" :key="`task-${index}`">
        <div class="task-list-item">
            <div class="item-isdone">
                <i
                    title="完成"
                    class="iconfont icon-undone"
                    v-if="done == 0"
                    @click="toggleDone(1,item.id)"
                ></i>
                <i title="未完成" @click="toggleDone(0,item.id)" class="iconfont icon-done" v-else></i>
            </div>
            <div class="item-title">
                <span v-if="done == 0" contenteditable="true">{{
                    item.name
                }}</span>
                <span v-else contenteditable="true" class="done-item">{{ item.name }}</span>
            </div>
            <div class="item-star" :class="{'active-star':  item.is_star === 1}">
                <i class="iconfont icon-star" @click="starTask(item.id)"></i>
            </div>
            <div class="item-del">
                <i class="iconfont icon-del" @click="delTask(item.id)"></i>
            </div>
        </div>
    </template>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
    list: {
        type: Object,
        default: () => {},
    },
    done: {
        type: Number,
        default: 0,
    },
});
// 过滤未完成和已完成
function taskListItem() {
    if (props.done === 0) {
        return props.list.filter((item: any) => item.isok == 0);
    } else {
        return props.list.filter((item: any) => item.isok == 1);
    }
}
// 勾选完成、取消
function toggleDone(i: number,id: number) {
    const list = taskListItem()
    const index = list.findIndex((el: any) => el.id === id)
    if(i === 1){
        list[index].isok = 1
    }else {
        list[index].isok = 0
    }
}
// 删除项目
function delTask(id: number): void {
    const list = store.state.taskList
    const index = list.findIndex((el: any) => el.id === id)
    store.commit('delTask',index)
}
// 收藏项目
function starTask(id: number): void {
    const list = props.list
    const index = list.findIndex((el: any) => el.id === id)
    if(list[index].is_star === 0){
        list[index].is_star = 1
    }else {
        list[index].is_star = 0
    }
}
</script>

<style lang="less" scoped>
@import "./style";
</style>
