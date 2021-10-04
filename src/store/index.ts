import { createStore } from "vuex";

export default createStore({
  state: {
    isSide: false,
    taskList: []
  },
  mutations: { 
    // 往任务清单添加数据
    addTaskList(stat,data){
      stat.taskList.push(data as never)
    },

    // 删除项目
    delTask(stat,index){
      stat.taskList.splice(index,1)
    },

    getTaskList(stat,data){
      stat.taskList = data
    },

    // 切换侧滑栏
    toggleSide(stat){
      stat.isSide = !stat.isSide;   
    }
  }
})