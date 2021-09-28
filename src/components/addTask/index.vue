<template>
    <div class="task-add">
        <div class="add-container">
            <i class="iconfont icon-add"></i>
            <i class="iconfont icon-undone"></i>
            <input
                class="type-in-area"
                type="text"
                v-model="taskList.name"
                @keyup.enter="addTask"
                ref="focus"
                placeholder="添加项目"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();
const toggleValue = ref(true);
const focus = ref(null);
const taskList = ref({
    name: "",
    isok: 0,
});

function reset() {
    taskList.value = {
        name: "",
        isok: 0,
    };
}

function addTask(e: HTMLElement) {
    store.commit("addTaskList", taskList.value);
    reset();
}
</script>

<style lang="less" scoped>
@import "./style";
</style>
