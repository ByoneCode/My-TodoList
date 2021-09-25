<template>
  <div class="task-add">
    <div class="add-container" @click="toggle(1)" v-show="toggleValue">
      <i class="iconfont icon-add"></i>
      <span>添加任务</span>
    </div>
    <div class="add-container" v-show="!toggleValue">
      <i class="iconfont icon-undone"></i>
      <input
        class="type-in-area"
        type="text"
        v-model="taskList.name"
        @keyup.enter="addTask"
        ref="focus"
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
function toggle(num: number): void {
  toggleValue.value = !toggleValue.value;
  if (num === 1) {
    nextTick(function () {
      const { value }: any = focus;
      value.focus();
    });
  }
}

function reset() {
  taskList.value = {
    name: "",
    isok: 0,
  };
}

function addTask() {
  store.commit("addTaskList", taskList.value);
  reset();
}
</script>

<style lang="less" scoped>
@import "./style";
</style>