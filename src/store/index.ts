import { createStore } from "vuex";

export default createStore({
  state: {
    isSide: false,
    openTaskInfo: false, 
    taskInfo: {
      id: undefined,
    },
    taskList: []
  },
  mutations: { 
    // 关闭清单信息
    toggleTaskInfo(stat,data) {
      if(data !== null){
        // if(data.id !== stat.taskInfo.id && stat.taskInfo.id !== undefined){
        //   stat.taskInfo = data;
        //   return false;
        // }
        if(stat.openTaskInfo === false){
          stat.openTaskInfo = true
        }
        stat.taskInfo = data;
        return false;
      }
      stat.openTaskInfo = false;
    },

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