<template>
    <div class="login">
        <form>
            <div class="form-login">
                <div class="login-input">
                    <i class="iconfont icon-people"></i>
                    <input type="text" placeholder="用户名" v-model="data.login.username" />
                </div>
                <div class="login-input">
                    <i class="iconfont icon-password"></i>
                    <input type="password" placeholder="密码" v-model="data.login.password" />
                </div>
                <div class="form-reg" v-show="!isLogin">
                    <div class="login-input">
                        <i class="iconfont icon-password"></i>
                        <input type="password" placeholder="确认密码" v-model="data.login.cpassword" />
                    </div>
                    <div class="login-input">
                        <i class="iconfont icon-password"></i>
                        <input type="email" placeholder="邮箱" v-model="data.login.email"/>
                    </div> 
                </div>
               
                <div class="login-submit" v-show="isLogin">
                    <div class="login-signin">
                        <input type="button" @click="loging()" value="登录" />
                    </div>
                    <div class="login-signup">
                        <input type="button" @click="isLogin = false" value="去注册" />
                    </div>
                </div>
                <div class="login-submit" v-show="!isLogin">
                    <div class="login-signin">
                        <input type="button" @click="reg" value="注册" />
                    </div>
                    <div class="login-signup">
                        <input type="button" @click="isLogin = true" value="去登录" />
                    </div>
                </div>
            </div>
        </form>
        <modal
        title="提示"
        :msg="data.msg"
        :is-center="false"
        offset-top="40px"
        v-model:visible="visible"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { register, login } from '/@/api/login';
import { useRouter } from 'vue-router';
import Modal from '/@/components/modal/index.vue'

const router = useRouter()

const data = reactive({
    msg: '',
    login: {
        username: '',
        password: '',
        cpassword: '',
        email: ''
    }
})

const isLogin = ref(true);
const visible = ref(false)
const reset = () => {
    data.login = {
        username: '',
        password: '',
        cpassword: '',
        email: ''
    }
}
const reg = async () => {
    const {username, password ,cpassword} = data.login;
    if(username === ''){
        visible.value = true
        data.msg = '请填写完整';
        return false;
    }
    if(password !== cpassword){
        visible.value = true
        data.msg = '密码和确认密码必须一致';
        return false;
    }
    const res: any = await register(data.login);
    if(res.code === 200){
        visible.value = true
        data.msg = '注册成功';
        reset();
    }else{
        visible.value = true
        data.msg = '注册失败';
    }
}

const loging = async () => {
    const {username, password} = data.login;
    if(username !== '' && password !== ''){
        const res: any = await login({username: username, password: password});
        if(res.code === 200){
            localStorage.setItem('token',res.data.token);
            router.replace('/');
        }else{
            visible.value = true
            data.msg = res.msg;
        }
    }else{
        visible.value = true
        data.msg = '填写完整';
    }
   
}
</script>

<style lang="less" scoped>
@import "./style";
</style>
