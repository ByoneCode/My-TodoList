<template>
    <aside class="container__sidebar">
      <div class="sidebar">
        <p class="side_title">
          My TodoList
        </p>
        <div class="side_user">
            <div class="avatar">
              <span>杰</span>
            </div>
            <div class="info">
              <p>ByoneJie</p>
              <p>2488068072@qq.com</p>
            </div>
          <div class="search">
            <i class="iconfont icon-serch"></i>
          </div>
        </div>
        <div class="side_content">
          <nav aria-label="列表">
            <ul>
              <li>
                <div class="list-item">
                  <i class="iconfont icon-taiyang"></i>
                  <span class="item-title">我的一天</span>
                </div>
              </li>
              <li>
                <div class="list-item">
                  <i class="iconfont icon-star"></i>
                  <span class="item-title">重要</span>
                </div>
              </li>
              <li>
                <div class="list-item">
                  <i class="iconfont icon-jihua"></i>
                  <span class="item-title">计划内</span>
                </div>
              </li>
              <li>
                <div class="list-item">
                  <i class="iconfont icon-people"></i>
                  <span class="item-title">已分配给我</span>
                </div>
              </li>
              <li>
                <div class="list-item">
                  <i class="iconfont icon-home"></i>
                  <span class="item-title">任务</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="side_hr"></div>
        <div class="side_list">
          <ul>
            <li>
              <div class="list-items">
                <div class="list-icon">
                  <i>👋</i>
                </div>
                <div class="list-title">
                  <span>入门</span>
                </div>
                <div class="list-count">
                  <span>6</span>
                </div>
              </div>  
            </li>
            <li>
              <div class="list-items">
                <div class="list-icon">
                  <i>🛒</i>
                </div>
                <div class="list-title">
                  <span>资源</span>
                </div>
                <div class="list-count">
                  <span>6</span>
                </div>
              </div> 
            </li>
          </ul>
        </div>
        <div class="side_add">
          <i class="iconfont icon-add"></i>
          <span>新建列表</span>
        </div>
      </div>
    </aside>
</template>

<script setup lang="ts">
    
</script>

<style lang="less" scoped>
  @import "./index";
</style>