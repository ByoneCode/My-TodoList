<template>
    <template v-for="(item,index) in list" :key="`task-${index}`">
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
                <input v-if="done == 0" type="text" class="edit-item" v-model="item.name" @change="editTask(item.name,item.id)" @keyup.enter="eventChange">
                <input v-else type="text" class="edit-item done-item" v-model="item.name" @change="editTask(item.name,item.id)" @keyup.enter="eventChange">
            </div>
            <!-- :class="{'active-star':  item.isstar === 1}" -->
            <div class="item-star">
                <i v-show="item.isstar === 0" class="iconfont icon-star" @click="toggleStar(item.id,1)"></i>
                <i v-show="item.isstar === 1" class="iconfont icon-star-selected" @click="toggleStar(item.id,0)"></i>
            </div>
            <div class="item-del">
                <i class="iconfont icon-del" @click="delTask(item.id,index)"></i>
            </div>
            <div class="item-send" v-if="isMove">
                <i class="iconfont icon-transfer" @click="emit('mvTask',item.id,$event)"></i>
            </div>
        </div>
    </template>
</template>

<script setup lang="ts">
import { delTaskList, updTaskList } from '/@/api/taskList';
import { ref } from 'vue';
const props = defineProps({
    list: {
        type: Object,
        default: () => {},
    },
    done: {
        type: Number,
        default: 0,
    },
    isMove: {
        type: Boolean,
        default: true
    }
})

const emit = defineEmits(['mvTask','delTaskSuccess','doneSuccess','starSuccess'])

// 显示编辑
const showIndex = ref(-1)

// 勾选完成、取消 
async function toggleDone(ok: number,id: number) {
    const res: any = await updTaskList({ id: id, isok: ok })
    if(res.code === 200){
        emit('doneSuccess',id,ok)
    }
}
// 删除项目
async function delTask(id: number,index: any) {
    const res: any = await delTaskList(id)
    if(res.code === 200){
        emit('delTaskSuccess',index)
    }
}
// 收藏项目
async function toggleStar(id: number,status: number) {
   const res: any = await updTaskList({ id: id, isstar: status })
    if(res.code === 200){
        emit('starSuccess',id,status)
    }
}
// 编辑项目
async function editTask(name: string,id: number) {
    const res: any = updTaskList({ id: id, name: name})
}
// 把事件转发给失去焦点
const eventChange = (event: any) => {
    event.target.blur()
}
</script>

<style lang="less" scoped>
@import "./style";
.test{
    position: fixed;
    width: 100px;
    height: 100px;
    background-color: aqua;
}
</style>
