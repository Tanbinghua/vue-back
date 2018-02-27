<template>
  <div class="header">
    <el-row :gutter="20">
      <el-col :span="6">
        <img src="../assets/logo.png" alt="logo" class="title">
        <span class="title">vue-background</span>
      </el-col>
      <el-col :span="4" style="float: right;">
        <el-dropdown trigger="hover" class="back-dropdown" @command="handleCommand">
          <el-badge is-dot class="back-badge el-dropdown-link">
            <img :src="user_info.avatar_url" :alt="user_info.loginname" class="avatar">
          </el-badge>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix" command="message">
              消息
              <el-badge class="mark" value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix" command="clear">
              处理
              <el-badge class="mark" value="3" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix" command="login">登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user_info: this.$store.state.user_info
    }
  },
  methods: {
    handleCommand (command) {
      switch (command) {
        case 'login':
          this.login()
          break
        case 'message':
          this.message()
          break
        case 'clear':
          this.clear()
          break
      }
    },
    login () {
      sessionStorage.setItem('accesstoken', '')
      sessionStorage.setItem('loginname', '')
      this.$router.push('/login')
    },
    message () {
      this.$message('message')
    },
    clear () {
      this.$message('clear')
    }
    // getInfo () {
    //   let url = this.$store.state.svrUrl + '/user/' + sessionStorage.getItem('loginname')
    //   const self = this
    //   this.axios.get(url).then((res) => {
    //     if (res.status === 200) {
    //       self.user_info = res.data.data
    //       this.$store.commit({
    //         type: 'setUserInfo',
    //         info: JSON.stringify(self.user_info)
    //       })
    //     } else {
    //       console.log('Login: 请求用户数据失败')
    //     }
    //   }).catch((res) => {
    //     console.log('Login: ', res)
    //   })
    // }
  }
  // created () {
  //   this.getInfo()
  // }
}
</script>

<style scoped>

img.title {
  width: 45px;
  height: 45px;
  vertical-align: middle;
}

span.title {
  font-size: 20px;
  color: #fff;
}

.back-badge {
  width: 30px;
  height: 30px;
  line-height: 60px;
  border-radius: 15px;
}

img.avatar {
  width: 30px;
  height: 30px;
}

.back-dropdown:hover {
  cursor: pointer;
}
</style>
