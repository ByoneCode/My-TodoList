<template>
  <div class="setinfo-menu" :class="{ 'open-setinfo': allstat.isSetInfo }">
    <!-- 添加 open-setinfo 类显示 -->
    <div class="setinfo-header">
      <div class="setinfo-title">
        <span>修改资料</span>
      </div>
      <div class="setinfo-close" @click="close">
        <i class="iconfont icon-del"></i>
      </div>
    </div>
    <div class="setinfo-list">
      <div class="setinfo-name">
        <span>用户名</span>
        <input type="text" v-model="store.state.userInfo.username" disabled/>
      </div>
      <div class="setinfo-name">
        <span>修改昵称</span>
        <input type="text" v-model="stat.nickname" />
      </div>
      <div class="setinfo-password">
        <span>修改密码</span>
        <input type="password" v-model="stat.password" />
      </div>
      <div class="setinfo-confirm">
        <span>确认密码</span>
        <input type="password" v-model="stat.repassword" />
      </div>
      <!-- <div class="setinfo-avatar">
        <i class="iconfont icon-add"></i>
      </div>-->
    </div>
    <div class="setinfo-btn">
      <div class="setinfo-update" @click="submit">
        <span>更新</span>
      </div>
    </div>
    <modal title="提示" :msg="msg" :is-center="true" v-model:visible="visible" />
  </div>
  <div class="shade" v-if="allstat.isSetInfo"></div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { updUserInfo } from '/@/api/user';
import Modal from '/@/components/modal/index.vue'

const store = useStore();
const allstat = store.state;

const msg = ref('')
const visible = ref(false)
const stat = reactive({
  nickname: store.state.userInfo.nickname || store.state.userInfo.username,
  password: '',
  repassword: ''
})

const reset = () => {
  stat.nickname = store.state.userInfo.nickname || store.state.userInfo.username
  stat.password = ''
  stat.repassword = ''
}


const close = () => {
  reset()
  store.commit('toggleSetInfo')
}

const submit = async () => {
  if (stat.nickname === '') {
    visible.value = true
    msg.value = '昵称不能为空'
    return false
  } else {
    if (stat.password !== '') {
      if (stat.password !== stat.repassword) {
        visible.value = true
        msg.value = '两次密码不一致'
        return false
      }
    }
  }
  const res: any = await updUserInfo({ nickname: stat.nickname, password: stat.password });
  if (res.code === 200) {
    store.commit('toggleSetInfo')
    if( stat.password !== ''&& stat.repassword !== '') {
      localStorage.removeItem('token')
      location.reload()
      return false
    }
    store.commit('updUserInfo',stat.nickname)
    reset()
  } else {
    visible.value = true
    msg.value = '修改失败或者未修改'
  }
}
</script>

<style lang="less" scoped>
@import "./style";
</style>