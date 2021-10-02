<template>
    <div class="side-list">
        <ul>
            <li v-for="(item,index) in list" :key="`list-${index}`">
                <div class="list-items" @click.right="rightMenu">
                    <div class="list-icon">
                        <i>{{item.icon}}</i>
                    </div>
                    <div class="list-title">
                        <span>{{item.title}}</span>
                    </div>
                    <div class="list-count">
                        <span>{{item.count}}</span>
                    </div>
                </div>
            </li>
            <li v-show="stat.isCreate">
                <div class="list-items">
                    <div class  ="list-icon">
                        <i class="iconfont icon-nav"></i>
                    </div>
                    <div class="list-title">
                        <input type="text" v-model="stat.tempItem.title" ref="title" @keyup.enter="emit('addList',stat.tempItem,reset)" />
                    </div>
                </div>
            </li>
        </ul>
        <div class="side-add" @click="createList">
            <i class="iconfont icon-add" ></i>
            <span>新建列表</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { reactive, ref, nextTick } from "vue";
const store = useStore()
const title = ref(null)
const stat = reactive({
    isCreate: false,
    tempItem: {
        icon: '🎉',
        title: '无标题列表'
    }
})
const props = defineProps({
    list: {
        type: Object,
        default: [],
    }
});

const emit = defineEmits(['addList'])

const createList = () => {
    stat.isCreate = true
    nextTick(() => {
        const { value }: any= title
        value.setSelectionRange(0,5)
        value.focus()
    })
}

const reset = () => {
    stat.isCreate = false
    stat.tempItem = {
        icon: '🎉',
        title: '无标题列表'
    }
}
// 右击菜单事件
const rightMenu = () => {
    const items: any = document.querySelector('.side-list')
    items.oncontextmenu = function(){
        return false;
    }
    console.log('你点击了右键菜单');
}
</script>

<style lang="less" scoped>
@import "./sidelist";
</style>
