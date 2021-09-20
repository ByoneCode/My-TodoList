<template>
    <div class="task-add">
      <div class="add" @click="toggle(1)" v-show="toggleValue">
        <i class="iconfont icon-add"></i>
        <span>添加任务</span>
      </div>
      <div class="add" v-show="!toggleValue">
        <i class="iconfont icon-noselect"></i>
        <input class="add-task" type="text" ref="focus" @blur="toggle(2)" >
      </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'

const toggleValue = ref(true)
const focus = ref(null)

function toggle(num: number):void {
  toggleValue.value = !toggleValue.value
  if(num === 1){
    nextTick(function() {
      const { value }: any= focus
      console.log(typeof value);
      value.focus()
    })
    
  }
 
}
</script>

<style lang="less" scoped>

  .icons{
    font-size: 20px;
    color: #929292;
    font-weight: bold;
  }
  .item{
    margin: 5px auto;
    padding: 0 1rem;
    overflow: hidden;
    display: flex;
    z-index: 1;
    width: 90%;
    height: 55px;
    align-items: center;
    border-radius: 5px;
  }
  .task{
    flex: 1 1 0px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: background-color 0.3s;
    position: relative;
  }
   .task-add{
      background: #1a1b1c;
      height: 100px;
      position: absolute;
      bottom: 0;
      right: 2px;
      left: 0;
      .add{
        .item();
        cursor: text;
        margin-top: 15px;
        background-color: #1f1f20;
        @media (max-width: 768px){
          width: 80%;
        }
        i.icon-add,i.icon-noselect{
          .icons();
        }
        span{
          margin-left: 10px;
          color: #fff;
        }
        input.add-task{
          outline: none;
          background: transparent;
          margin-left: 10px;
          border: none;
          color: #fff;
        }
      }
    }
</style>