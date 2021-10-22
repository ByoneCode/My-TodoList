<template>
    <div class="task-add">
      <div class="add-container" @click="toggle(1)" v-show="toggleValue">
        <i class="iconfont icon-add"></i>
        <span>添加项目</span>
      </div>
      <div class="add-container" v-show="!toggleValue">
        <i class="iconfont icon-undone"></i>
        <input class="type-in-area" type="text" v-model="taskList.name" @keyup.enter="addTask" @blur="toggle(2)" ref="focus" >
      </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";
import { addTaskList } from "/@/api/taskList";

const toggleValue = ref(true);
const focus = ref(null);
const taskList = ref({
    name: ""
});

const props = defineProps({
  gid: [Number,String,Array]
})

const emit = defineEmits(['addSuccess'])

function toggle(num: number):void {
  toggleValue.value = !toggleValue.value
  if(num === 1){
    nextTick(function() {
      const { value }: any= focus
      value.focus()
    })
  }
}

function reset() {
    taskList.value = {
        name: "",
    };
}

async function addTask() {
    const res: any = await addTaskList({name:taskList.value.name,gid:props.gid})
    if(res.code === 200){
      emit('addSuccess',{id:res.data.id,gid:props.gid,isdel:0,isok:0,name:taskList.value.name})
      reset();
    }
}
</script>

<style lang="less" scoped>
@import "./style";
</style>
