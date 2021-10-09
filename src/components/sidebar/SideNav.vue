<template>
    <div class="side-nav">
        <nav aria-label="列表">
            <ul>
                <li
                    v-for="(item, index) in list"
                    :key="`navlist${index}`"
                    @click="goto(item.path)"
                >
                    <div
                        class="nav-item"
                        :class="{ 
                            'active': route.path === item.path
                        }" 
                    >
                        <i class="iconfont" :class="`icon-${item.icon}`"></i>
                        <span class="item-title">{{ item.title }}</span>
                        <span class="item-count">{{item.count}}</span>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { reactive, ref } from "vue";
import { stat } from "fs";

const store = useStore();

const router = useRouter();
const route = useRoute();
const props = defineProps({
    list: {
        type: Object,
        default: () => {},
    },
});

// 跳转

const top = ref('0px')
top.value = route.meta.top + 'px'
function goto(path: string): void {
    router.beforeEach((from) => {
        if(from.meta.top !== undefined){
            top.value =  from.meta.top + 'px'    
        }  
    })
    router.push(path);
    store.commit("toggleSide");
}
</script>

<style lang="less" scoped>
// @import "./index";
@import "./sidenav";
.side-nav {
    nav>ul {
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: v-bind(top);
            width: 0.35rem;
            height: 1.25rem;
            border-radius: 4px;
            background-color: royalblue;
            transition: all .3s ease;
        }
    }
}
</style>
