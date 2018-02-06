<template>
  <el-container class="back-container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <Aside class="back-aside"></Aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from '../components/Header'
import Aside from '../components/Aside'
import Footer from '../components/Footer'

export default {
  data () {
    return {}
  },
  components: {
    Header,
    Aside,
    Footer
  },
  methods: {
    openMsg (str, type) {
      this.$message({
        message: str,
        type
      })
    }
  },
  created () {
    this.$message('欢迎回来，管理员！')
  }
}
</script>

<style scoped>
.back-container {
  height: 100vh;
}

.el-header, .el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  background-color: #50657b;
}

.back-aside {
  background-color: #545c64;
}

.back-aside {
  max-width: 250px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
