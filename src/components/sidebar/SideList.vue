<template>
  <div class="side-list">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="`list-${index}`"
      >
        <div class="list-items" @click="goto(item.path)">
          <div class="list-icon">
            <i>{{ item.icon }}</i>
          </div>
          <div class="list-title">
            <span>{{ item.title }}</span>
          </div>
          <div class="list-count">
            <span>{{ item.count }}</span>
          </div>
        </div>
      </li>
      <li v-show="stat.isCreate">
        <div class="list-items" style="padding: .675rem 1rem;">
          <div class="list-icon">
            <i class="iconfont icon-nav"></i>
          </div>
          <div class="list-title" style="margin-left: 12px;">
            <input
              type="text"
              v-model="stat.tempItem.title"
              ref="title"
              @keyup.enter="eventBlur"
              @blur="emit('addList', stat.tempItem, reset)"
            />
          </div>
        </div>
      </li>
    </ul>
    <div class="side-add" @click="createList">
      <i class="iconfont icon-add"></i>
      <span>新建列表</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import { reactive, ref, nextTick } from "vue";
import { log } from "console";

const router = useRouter()
const store = useStore()
const title = ref(null)
const stat = reactive({
  isCreate: false,
  tempItem: {
    icon: "🎉",
    title: "无标题列表",
  },
});
const props = defineProps({
  list: {
    type: Object,
    default: [],
  },
});

const emit = defineEmits(["addList"]);

// 把事件转发给blur
const eventBlur = (event: any) => {
  event.target.blur()
}


const createList = () => {
  stat.isCreate = true;
  nextTick(() => {
    const { value }: any = title;
    value.setSelectionRange(0, 5);
    value.focus();
  });
};

const reset = () => {
  stat.isCreate = false;
  stat.tempItem = {
    icon: "🎉",
    title: "无标题列表",
  };
};
// 跳转
const goto = (path: string) => {
  router.push(path)
}
</script>

<style lang="less" scoped>
@import "./sidelist";
</style>
