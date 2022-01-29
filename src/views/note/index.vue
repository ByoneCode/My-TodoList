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
                <div class="heading-title" @click="visible = true">
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
                <note-item :list="stat.noteList" @handleDel="handleDel" @handleOpenEdit="handleOpenEdit"></note-item>
            </div>
        </div>

        <div class="note-content" :class="{active: stat.isEdit}">
            <div class="header">
                <div class="btn quit" @click="handleCacel">
                    取消
                </div>
                <div class="btn save" @click="handleNote()">
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
        <modal
        title="提示"
        :msg="stat.noteMsg"
        v-model:visible="visible"
        />
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref, nextTick } from "vue";
import { addNoteList, delNoteList, getNoteList, updNoteList } from "/@/api/note";
import noteItem from '/@/components/noteItem/index.vue'
import Modal from '/@/components/modal/index.vue'
const stat: any = reactive({
    id: 0,
    content: '',
    isEdit: false,
    noteList: [],
    btnText: '保存',
    type: 'add',
    noteMsg: ''
})


const visible = ref(false)

onMounted( async () => {
  // 获取任务列表
  const { data } = await getNoteList();
  stat.noteList = data.items
})

const content = ref()
const handleOpenEdit = (text: string,type: string,id?: number) => {
    if(type === 'add'){
        stat.btnText = '保存'
        stat.type = 'add'
        content.value.focus()
    }else{
        stat.type = 'edit'
        stat.btnText = '修改'
        stat.id = id
    }
    stat.isEdit = true
    stat.content = text
}

const handleCacel = () => {
    stat.isEdit = false
}


// 添加/修改便签
const handleNote = async () => {
    let text = content.value.innerHTML
    const htmlspecial = text.replace(/<[^>]+>|&nbsp;/g,"");
    if(stat.type === 'add'){
        const res: any = await addNoteList({content: text})
        const { data } = res
        if(res.code === 200){
            stat.noteList.push({
                id: data.id,
                content: text,
                sort_content: htmlspecial
            } as never)
            content.value.innerHTML = ''
            handleCacel()
        }else{
           visible.value = true
           stat.noteMsg = res.msg
        }
    }else{
        if(stat.id !== null || stat.id != undefined ||stat.id !== 0){
            const res: any = await updNoteList({id: stat.id,content: text})
            if(res.code === 200){
                const index = stat.noteList.findIndex((el: any) => el.id === stat.id)
                stat.noteList[index].content = text
                stat.noteList[index].sort_content = htmlspecial
                handleCacel()
            }else{
                visible.value = true;
                stat.noteMsg = res.msg
            }
        }else{
           visible.value = true;
           stat.noteMsg = '编辑错误'
        }
    }

}

const handleDel = async (id: number) => {
    const res: any = await delNoteList(id)
    const index = stat.noteList.findIndex((el: any) => el.id === id)
    if(res.code === 200){
        stat.noteList.splice(index,1)
    }else{
        visible.value = true;
        stat.noteMsg = '删除错误'
    }
}

// 清除粘贴默认格式
document.addEventListener('paste', (e: any) => {
    // 阻止默认的复制事件
    e.preventDefault()
        
    let txt = ''
    let range = null
    // 获取复制的文本
    txt = e.clipboardData.getData('text/plain')
    // 获取页面文本选区
    range = (window.getSelection()!).getRangeAt(0)
    // 删除默认选中文本
    range.deleteContents()
    // 创建一个文本节点，用于替换选区文本
    let pasteTxt = document.createTextNode(txt)
    // 插入文本节点
    range.insertNode(pasteTxt)
    // 将焦点移动到复制文本结尾
    range.collapse(false)
})

</script>

<style lang="less" scoped>
@import "./style";
</style>
