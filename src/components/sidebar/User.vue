<template>
    <div class="user">
        <div class="side-user" id="open-tools" @click="toggleMenu">
            <div class="avatar">
                <span style="vertical-align: middle;">{{getAvatar()}}</span>
            </div>
            <div class="info">
                <p>{{store.state.userInfo.nickname || store.state.userInfo.username}}</p>
                <p>{{store.state.userInfo.email}}</p>
            </div>
        </div>
        <div class="tool-menu" :class="{ 'open-menu': stat.isMenu }">
            <ul>
                <li @click="emit('openAccount')">
                    <i class="iconfont icon-setuser"></i><span>管理账户</span>
                </li>
                <li @click="store.commit('toggleSetInfo')">
                    <i class="iconfont icon-setting"></i><span>修改资料</span>
                </li>
                <li @click="store.commit('toggleSetTheme')">
                    <i class="iconfont icon-theme"></i><span>切换主题</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore()

const emit = defineEmits(['openAccount'])

let stat = reactive({
    isMenu: false,
});



// 关闭菜单
let body: any = document.querySelector('body')
body.addEventListener('click',(e: any)=>{    
    if(stat.isMenu === true){
        if(e.target.id === 'open-tools'){
            stat.isMenu = true
        }else {
            stat.isMenu = false
        }
    }
},true)

const toggleMenu = () => {
    stat.isMenu = !stat.isMenu;
};

// 获取头像
const getAvatar = () => {
    const { nickname, username } = store.state.userInfo
    let name = nickname || username
    return name[0].toLocaleUpperCase();
}
</script>

<style lang="less" scoped>
@import "./user";
</style>
