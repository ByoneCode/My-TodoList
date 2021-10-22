<template>
    <div
        class="note-list-item"
        :class="{ edit: stat.isEdit === index }"
        v-for="(item, index) in allstat.noteList"
        :key="index"
        @click="handleOpenEdit(index)"
    >
        <div class="note-toolbar">
            <div class="note-finish">
                <i class="iconfont icon-finish" @click.stop="handleCloseEdit"></i>
            </div>
            <div class="note-star" :class="{'active-star':item.isStar}">
                <i class="iconfont icon-star"></i>
                <i class="iconfont icon-star-selected"></i>
            </div>
            <div class="note-del">
                <i class="iconfont icon-del"></i>
            </div>
        </div>
        <div contenteditable="true" class="note-content">
            <p>{{ item.text }}</p>
        </div>
        <div class="note-tools">
            <i class="iconfont icon-bold"></i>
            <i class="iconfont icon-italic"></i>
            <i class="iconfont icon-underline"></i>
            <i class="iconfont icon-delline"></i>
            <i class="iconfont icon-list"></i>
            <i class="iconfont icon-image"></i>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useStore } from 'vuex'


const store = useStore()
const allstat = store.state


const stat = reactive({
    isEdit: -1
})
// const props = defineProps({

// })




// 关闭编辑
const handleCloseEdit = () => {
    stat.isEdit = -1
    const item: any = document.querySelector('.note-container')
        item.removeEventListener('click',() => {console.log('事件卸载');
    },false)
}

// 打开编辑
const handleOpenEdit = (i: number) => {
    stat.isEdit = i
    // 点开获取聚焦
    const edit: any = document.querySelector('div.edit .note-content')
    setTimeout(() => {
        edit.focus()
    },1)
    const item: any = document.querySelector('.note-container')
    item.addEventListener('click',(e: any) => {
        if(e.target.id === 'note-container'){
            handleCloseEdit()
        }
        return false
    },true)
}
</script>

<style scoped lang="less">
@import "./style.less";
</style>