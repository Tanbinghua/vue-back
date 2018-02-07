<template>
  <div class="error">
    <h1>404</h1>
    <p>你访问的页面不存在或者你没有权限访问，如有疑问请联系管理员！</p>
    <el-button type="text" @click="toHome">返回首页</el-button>
  </div>
</template>

<script>
export default {
  name: 'error',
  methods: {
    toHome () {
      this.$router.push('/forum')
    }
  }
}
</script>
