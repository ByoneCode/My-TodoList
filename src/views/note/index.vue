<template>
    <div class="note">
        <!-- heading -->
        <div class="heading">
            <div class="heading-main">
                <!-- icon -->
                <div class="heading-icon">
                    <i class="iconfont icon-note"></i>
                </div>
                <!-- title -->
                <div class="heading-title">
                    <span>便笺</span>
                </div>
            </div>

            <div class="add-icon" @click="handleOpenEdit('','add')">
                <i class="iconfont icon-add1"></i>
            </div>
        </div>
        <!-- list -->
        <div class="note-list">
            <div class="note-container" id="note-container">
                <note-item :list="stat.noteList" @handleOpenEdit="handleOpenEdit"></note-item>
            </div>
        </div>

        <div class="note-content" :class="{active: stat.isEdit}">
            <div class="header">
                <div class="btn quit" @click="handleCacel">
                    取消
                </div>
                <div class="btn save" @click="handleNote">
                    {{stat.btnText}}
                </div>
            </div>
            <div class="toolbar">
                <!-- 工具栏 -->
            </div>
            <div class="container">
                <div class="text" placeholder="记便笺..." contenteditable="true" ref="content" v-html="stat.content">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref, nextTick } from "vue";
import { addNoteList, getNoteList } from "/@/api/note";
import noteItem from '/@/components/noteItem/index.vue'

const stat = reactive({
    content: '',
    isEdit: false,
    noteList: [],
    btnText: '保存',
    type: 'add'
})


onMounted( async () => {
  // 获取任务列表
  const { data } = await getNoteList();
  stat.noteList = data.items
})

const content = ref()
const handleOpenEdit = (text: string,type: string) => {
    if(type === 'add'){
        stat.btnText = '保存'
        stat.type = 'add'
        content.value.focus()
    }else{
        stat.type = 'edit'
        stat.btnText = '修改'
    }
    stat.isEdit = true
    stat.content = text
}

const handleCacel = () => {
    stat.isEdit = false
}

// 添加/修改便签
const handleNote = async () => {
    if(stat.type === 'add'){
        let text = content.value.innerHTML
        const res: any = await addNoteList({content: text})
        const { data } = res
        if(res.code === 200){
            const htmlspecial = text.replace(/<[^>]+>/g,"");
            stat.noteList.push({
                id: data.id,
                content: text,
                sort_content: htmlspecial
            } as never)
            handleCacel()
        }else{
            // TODO 添加失败事件
            console.log('error');
            
        }
    }else{

    }

}

</script>

<style lang="less" scoped>
@import "./style";
</style>
