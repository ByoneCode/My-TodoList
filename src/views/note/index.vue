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
                    <span>便笺</span>
                </div>
            </div>
        </div>
        <!-- list -->
        <div class="note-list">
            <div class="note-container" id="note-container">
                <!-- <div class="note-list-item note-add">
          <i class="iconfont icon-add"></i>
        </div> -->
                <note-item></note-item>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import noteItem from '/@/components/noteItem/index.vue'
</script>

<style lang="less" scoped>
@import "./style";
</style>
