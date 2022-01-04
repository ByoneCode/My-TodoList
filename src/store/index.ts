import { createStore } from "vuex";

export default createStore({
  state: {
    isSide: false,
    userInfo: [],
    groupInfo: {},
    taskGroup: [],
    isSetInfo: false,
    isSetTheme: false
  },
  mutations: {
    // 获取组信息
    getGroupInfo(stat,item){
      stat.groupInfo = item
    },
    // 组列表
    groupList(stat,list){
      stat.taskGroup = list
    },
    addGroup(stat,item){
      stat.taskGroup.push(item as never)
    },
    delGroup(stat,id){
      const index = stat.taskGroup.findIndex((el: any) => el.id === parseInt(id))
      stat.taskGroup.splice(index,1)
    },
    // 切换侧滑栏
    toggleSide(stat){
      stat.isSide = !stat.isSide;   
    },
    // 关闭用户信息设置
    toggleSetInfo(stat){
      stat.isSetInfo = !stat.isSetInfo;
    },
    // 关闭主题切换
    toggleSetTheme(stat){
      stat.isSetTheme = !stat.isSetTheme;
    },
    // 设置用户信息
    setUserInfo(stat,item){
      stat.userInfo = item;
    }
  }
})