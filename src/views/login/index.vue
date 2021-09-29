<template>
  <div class="login">
    <form action="">
      <div class="login-user">
        <i class="iconfont icon-people"></i>
        <input type="text" placeholder="用户名或邮件地址">
      </div>
      <div class="login-password">
        <i class="iconfont icon-password"></i>
        <input type="password" placeholder="密码">
      </div>
      <!-- <div class="login-remember">
        <input type="checkbox" class="remember">
        <span>记住我</span>
      </div> -->
      <div class="login-btn">
        <input type="button" value="登录">
      </div>
      <div class="login-reg">
        <span>立即注册</span>
      </div>
    </form>
  </div>
    
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
@import "./style";
</style>