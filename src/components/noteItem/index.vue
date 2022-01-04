<template>
    <div
        class="note-list-item"
        v-for="(item, index) in list"
        :key="index"
        @click="emit('handleOpenEdit',item.content,'edit',item.id)"
    >
        <div class="note-toolbar">
            <div class="note-finish">
                <i class="iconfont icon-finish"></i>
            </div>
            <div class="note-edit">
                <i class="iconfont icon-edit"></i>
            </div>
            <!-- <div class="note-star" :class="{'active-star':item.isStar}">
                <i class="iconfont icon-star"></i>
                <i class="iconfont icon-star-selected"></i>
            </div> -->
            <div class="note-del">
                <i class="iconfont icon-del" @click.stop="emit('handleDel',item.id)"></i>
            </div>
        </div>
        <div class="note-content">
            <p>{{ item.sort_content }}</p>
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
import { reactive, defineEmits } from 'vue'
import { useStore } from 'vuex'


const store = useStore()
const allstat = store.state


const stat = reactive({
    isEdit: -1
})

const emit = defineEmits(['handleOpenEdit','handleDel'])
const props = defineProps({
    list: {
        type: Object,
        default: {}
    }
})


</script>

<style scoped lang="less">
@import "./style.less";
</style>