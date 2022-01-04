<template>
  <div class="setuser-menu" :class="{ 'open-setuser': isopen }">
    <!-- 添加 open-setuser 类显示 -->
    <div class="setuser-header">
      <div class="setuser-title">
        <span>管理账户</span>
      </div>
      <div class="setuser-close" @click="emit('closeUser')">
        <i class="iconfont icon-del"></i>
      </div>
    </div>
    <div class="setuser-content">
      <div class="avatar">
        <span>{{getAvatar()}}</span>
      </div>
      <div class="nickname">
        {{store.state.userInfo.nickname || store.state.userInfo.username}}
      </div>
      <div class="email">
        {{store.state.userInfo.email}}
      </div>
    </div>
    <div class="setuser-add" @click="logout">
      <i class="iconfont icon-logout"></i>
      <span>退出账户</span>
    </div>
    <!-- <div class="setuser-close" >
      <span>关闭</span>
    </div>-->
  </div>
  <div class="shade" v-if="isopen"></div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from "vuex"


const store = useStore()

const router = useRouter();

const props = defineProps({
  isopen: Boolean
})

const emit = defineEmits(['closeUser'])

const logout = () => {
  localStorage.removeItem('token');
  router.replace('/login')
}

// 获取头像
const getAvatar = () => {
    const { nickname, username } = store.state.userInfo
    let name = nickname || username
    return name[0].toLocaleUpperCase();
}
</script>

<style lang="less" scoped>
@import "./style";
</style>