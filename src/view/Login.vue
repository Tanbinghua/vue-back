<template>
  <div class="form-wrap">
    <div class="login">
      <h3 style="margin: 0 0 22px 0; text-align: center;">后台管理系统登录</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="back-form" label-position="right">
        <el-form-item prop="account">
          <el-input v-model="ruleForm.account" placeholder="请输入您的账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="请输入您的密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="logIn('ruleForm')" class="back-btn">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="tips">
        <span style="float: left;"><el-button type="text">忘记密码？</el-button></span>
        <span style="float: right;"><el-button type="text">立即注册！</el-button></span>
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
        password: ''
      },
      rules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    logIn (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/forum')
        } else {
          console.log('error')
          return false
        }
      })
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
}
</style>
