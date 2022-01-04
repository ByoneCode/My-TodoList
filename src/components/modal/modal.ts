import { createVNode, render } from "vue";
import Modal from './index.vue';

// 动态创建一个Dom容器
const div = document.createElement('div');

export default ({ visible, title, msg , close }: any) => {
  const vnode = createVNode(Modal,{ visible, title,msg,close});

  render(vnode,div);

  // 添加子元素(组件)至父元素
  document.body.appendChild(div)
}