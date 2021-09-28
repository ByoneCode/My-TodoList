<template>
  <div class="note">
    <!-- heading -->
    <div class="heading">
      <div class="heading-main">
        <!-- icon -->
        <div class="heading-icon">
          <i class="iconfont icon-note"></i>
        </div>
        <!-- title -->
        <div class="heading-title">
          <span contenteditable="true">便笺</span>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="note-list scrollbar">
      <div class="note-container" :class="{'note-edit':stat.isEdit}">
        <!-- <div class="note-list-item note-add">
          <i class="iconfont icon-add"></i>
        </div> -->
        <div class="note-list-item" :class="{edit:item.isEdit}" v-for="(item,index) in stat.list" @click="toggleEdit(index)">
          <div class="note-toolbar">
            <div class="note-star">
              <i class="iconfont icon-star"></i>
            </div>
            <div class="note-del">
              <i class="iconfont icon-delete"></i>
            </div>
          </div>
          <div class="note-content">
            <p>
              {{item.text}}
            </p>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const stat = reactive({
  isEdit: false,
  list: [
    {
      text: '滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中。',
      isEdit: false
    },
    {
      text: `La trompe de l'éléphant, c'est pour ramasser les pistaches: pas besoin de se baisser. Le cou de la girafe, c'est pour brouter les astres: pas besoin de voler. La peau du caméléon, verte, bleue, mauve, blanche, selon sa volonté, c'est pour se cacher des animaux voraces: pas besoin de fuir. La carapace de la tortue, c'est pour dormir à l'intérieur, même l'hiver: pas besoin de maison. Le poème du poète, c'est pour dire tout cela et mille et mille et mille autres choses: pas besoin de comprendre.`,
      isEdit: false
    },
    {
      text: '这是一个记事本可以用来为源响应式对象上的某个 property 新创建一个ref。然后，ref 可以被传递，它会保持对其源 property的响应式连接即使源 property 不存在，toRef 也会返回一个可用的ref。这使得它在使用可选 prop 时特别有用，可选 prop 并不会被 toRefs处理。这是一个记事本可以用来为源响应式对象上的某个 property 新创建一个ref。然后，ref 可以被传递，它会保持对其源 property的响应式连接即使源 property 不存在，toRef 也会返回一个可用的ref。这使得它在使用可选 prop 时特别有用，可选 prop 并不会被 toRefs处理。这是一个记事本可以用来为源响应式对象上的某个 property 新创建一个ref。然后，ref 可以被传递，它会保持对其源 property的响应式连接即使源 property 不存在，toRef 也会返回一个可用的ref。这使得它在使用可选 prop 时特别有用，可选 prop 并不会被 toRefs处理。',
      isEdit: false
    },
  ]
})
const toggleEdit = (i: number) => {
  stat.isEdit = !stat.isEdit
  stat.list[i].isEdit = !stat.list[i].isEdit
}
</script>

<style lang="less" scoped>
@import "./style";
</style>