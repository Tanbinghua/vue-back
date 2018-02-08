<template>
  <div class="form-wrap">
    <div class="login">
      <h3 style="margin: 0 0 22px 0; text-align: center;">后台管理系统登录</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="back-form" label-position="right">
        <el-form-item prop="account" v-if="!isToken">
          <el-input v-model="ruleForm.account" placeholder="请输入您的账号" v-focus></el-input>
        </el-form-item>
        <el-form-item prop="password" v-if="!isToken">
          <el-input type="password" v-model="ruleForm.password" placeholder="请输入您的密码"></el-input>
        </el-form-item>
        <el-form-item prop="accessToken" v-if="isToken">
          <el-input type="password" v-model="ruleForm.accessToken" placeholder="请输入您的token"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="logIn('ruleForm')" class="back-btn">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="tips">
        <span style="float: left;"><a href="https://www.vue-js.com/search_pass" target="_blank">忘记密码？</a></span>
        <span><el-button type="text" v-if="!isToken" @click="isToken = !isToken">使用accesstoken登录</el-button></span>
        <span><el-button type="text" v-if="isToken" @click="isToken = !isToken">使用账号密码登录</el-button></span>
        <span style="float: right;"><a href="https://www.vue-js.com/signup" target="_blank">立即注册！</a></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        account: '',
        password: '',
        accessToken: 'e079976d-9950-471f-9e08-c939c71916b1'
      },
      user_info: {},
      isLogin: false,
      isToken: false,
      rules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        accessToken: [
          {required: true, message: '请输入accessToken', trigger: 'blur'},
          {len: 36, message: 'accessToken长度为36', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    logIn (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 社区并没有提供账号密码登录
          // if (!this.isToken) {
          //   this.$router.push('/forum')
          // } else {
          let url = this.$store.state.svrUrl + 'accesstoken'
          const self = this
          this.axios.post(url, {
            accesstoken: self.ruleForm.accessToken
          }).then((res) => {
            if (res.status === 200 && res.data.success) {
              sessionStorage.setItem('accesstoken', self.ruleForm.accessToken)
              sessionStorage.setItem('loginname', res.data.loginname)
              self.isLogin = true
              self.showMsg('登录成功', 'success')
              this.$router.push('/forum')
            } else {
              self.showMsg('登录失败，请检查token是否正确', 'error')
            }
          }).catch((res) => {
            console.log('Login: ', res)
            self.showMsg('登录失败，token错误或服务器正忙', 'error')
          })
          // }
        } else {
          this.showMsg('登录失败，请重试', 'error')
          return false
        }
      })
    },
    showMsg (message, type) {
      this.$message({
        message,
        type
      })
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style scoped>
.form-wrap {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #324157;
}

.login {
  width: 300px;
  height: 230px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -115px;
  margin-left: -150px;
  background-color: #fff;
  padding: 20px;
}

.back-btn {
  width: 100%;
  height: 36px;
  background-color: #324157;
  color: #fff;
  border: none;
}

.back-btn:hover {
  background-color: #fff;
  color: #324157;
  border: 1px solid #324157;
}

.tips {
  margin: -25px 0 0 0;
  text-align: center;
}

.tips a {
  display: inline-block;
  text-decoration: none;
  color: #409EFF;
  font-size: 14px;
  margin-top: 10px;
}
</style>
