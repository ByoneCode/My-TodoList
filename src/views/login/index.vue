<template>
    <div class="login">
        <form action="">
            <div class="login-user">
                <i class="iconfont icon-people"></i>
                <input type="text" placeholder="邮箱" />
            </div>
            <div class="login-password">
                <i class="iconfont icon-password"></i>
                <input type="password" placeholder="密码" />
            </div>
            <div>
                <div class="login-signin">
                    <input type="button" value="登录" />
                </div>
                <div class="login-signup">
                    <input type="button" value="注册" />
                </div>
            </div>
        </form>
        <Account />
        <Profile />
    </div>
</template>

<script setup lang="ts">
import Account from "/@/components/account/index.vue";
import Profile from "/@/components/profile/index.vue";
</script>

<style lang="less" scoped>
@import "./style";
</style>
