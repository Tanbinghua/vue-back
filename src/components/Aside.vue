<template>
  <div class="aside">
    <el-button @click="isCollapse = !isCollapse" class="back-button">
      <i v-if="isCollapse" class="el-icon-d-arrow-right"></i>
      <i v-else class="el-icon-d-arrow-left"></i>
    </el-button>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :unique-opened="isOpen"
      mode="vertical"
      :class="{'back-active-ul': !isCollapse}"
      :default-active="onRoutes"
      router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">主要功能</span>
        </template>
        <el-menu-item-group title="vue论坛">
          <el-menu-item :route="{path: '/'}" index="">论坛主题</el-menu-item>
          <el-menu-item :route="{path: '/newContent'}" index="newContent">新建主题</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="编辑">
          <el-menu-item index="form" :route="{path: '/form'}">表单</el-menu-item>
          <el-menu-item index="editor" :route="{path: '/editor'}">编辑器</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项1-4</span>
          <el-menu-item index="1-4-1">选项1-4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="user" :route="{path: '/user'}">
        <i class="el-icon-menu"></i>
        <span slot="title">用户</span>
      </el-menu-item>
      <el-menu-item index="about" :route="{path: '/about'}">
        <i class="el-icon-setting"></i>
        <span slot="title">关于</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      isOpen: true
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style scoped>
.aside {
  position: relative;
}

.back-button {
  position: absolute;
  z-index: 1;
  right: -55px;
}

.back-active-ul {
  width: 200px;
}

</style>
