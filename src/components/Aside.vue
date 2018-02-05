<template>
  <div class="aside">
    <el-button @click="isCollapse = !isCollapse" class="back-button">
      <i v-if="isCollapse" class="el-icon-d-arrow-right"></i>
      <i v-else class="el-icon-d-arrow-left"></i>
    </el-button>
    <el-menu
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :unique-opened="isOpen"
      mode="vertical"
      :class="{'back-active-ul': !isCollapse}"
      default-active="forum"
      router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group title="vue论坛">
          <el-menu-item index="forum">论坛主题</el-menu-item>
          <el-menu-item index="newContent">新建主题</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组二">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
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
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose () {
      // console.log('close')
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
