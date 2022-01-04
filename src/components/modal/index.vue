<template>
  <teleport to="body">
    <div>
      <div class="modal-mask" v-show="visible"></div>
      <transition 
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__backOutUp"
      >
      <div class="modal-info" v-show="visible" :class="{is_center:isCenter}" :style="top">
        <div class="modal-body">
          <div class="modal-header">
            <div class="modal-title">{{title}}</div>
          </div>
          <div class="modal-content">
            <slot v-if="$slots['default']" />
            <template v-else>{{msg}}</template>
          </div>
          <div class="modal-footer">
            <button class="task-btn" @click="onClose">
              <span>知道了</span>
            </button>
          </div>
        </div>
      </div>
      </transition>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: '提示'
  },
  msg: {
    type: String,
    default: ''
  },
  offsetTop: {
    type: String,
    default: '20px'
  },
  isCenter: {
    type: Boolean,
    default: true
  },
  close: Function
})

// 注册事件
const emit = defineEmits(['close','update:visible'])

const top: any = computed(() => {
  if(!props.isCenter){
    return {
      top: props.offsetTop,
      bottom: 'unset'
    }
  }
  return false
})

// 关闭模态窗事件
const onClose = () => {
  emit('close');
  emit('update:visible',false)
}

</script>

<style lang="less" scoped>
.modal-mask{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0,0,0,.45);
    filter: alpha(opacity=50);
  }
.modal-info{
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: center;
  z-index: 9999;
  .initpos;
  &.is_center{
    align-items: center;
  }
  .modal-body{
    position: relative;
    z-index: 1000;
    background    : @bg-color-items;
    width: 350px;
    border-radius : 4px;
    overflow: hidden;
    box-sizing: border-box;
    padding: 1.5rem 1.2rem;
    color           : @text-color-white;
    .modal-header{
      .modal-title{
        display: block;
        overflow: hidden;
        font-weight: 500;
        font-size: 1.15rem;
        line-height: 1.4;
      }
    }
    .modal-content{
      margin: 1.2rem 0;
      color: @text-color-grey;
      overflow: hidden;
    }
    .modal-footer{
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>