<template>
  <div class="form">
    <el-form :rules="rules" :model="ruleForm" ref="ruleForm" label-width="80px" class="back-form">
      <el-form-item label="用户名" prop="loginname">
        <el-input v-model="ruleForm.loginname"></el-input>
      </el-form-item>
      <el-form-item label="GitHub" prop="githubUsername">
        <el-input v-model="ruleForm.githubUsername"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否码农" prop="isMan">
        <el-switch v-model="ruleForm.isMan"></el-switch>
      </el-form-item>
      <el-form-item label="爱好" prop="hobby">
        <el-select v-model="ruleForm.hobby" placeholder="请选择爱好">
          <el-option label="打游戏" value="game"></el-option>
          <el-option label="听音乐" value="music"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="积分" prop="score">
        <el-input type="number" v-model="ruleForm.score"></el-input>
      </el-form-item>
      <el-form-item label="个人介绍" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        loginname: '',
        githubUsername: '',
        score: '',
        hobby: '',
        sex: '男',
        date1: 0,
        date2: 0,
        isMan: true,
        desc: ''
      },
      rules: {
        loginname: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        githubUsername: [
          {required: true, message: '请输入GitHub用户名', trigger: 'blur'}
        ],
        date1: [
          {type: 'date', required: true, message: '请选择日期', trigger: 'blur'}
        ],
        date2: [
          {type: 'date', required: true, message: '请选择时间', trigger: 'blur'}
        ],
        score: [
          {required: true, message: '请输入积分', trigger: 'blur'}
        ],
        hobby: [
          {required: true, message: '请选择爱好', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    getUser () {
      let id = this.$route.query.id
      if (!id) id = this.$store.state.user_info.loginname
      const self = this
      let url = this.$store.state.svrUrl + '/user/' + id
      this.axios.get(url).then((res) => {
        Object.assign(self.ruleForm, res.data.data)
      }).catch((res) => {
        console.log('User: ', res)
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: '请完成表单',
            type: 'error'
          })
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<style scoped>
.back-form {
  width: 700px;
  border-radius: 5px;
  background-color: #fff;
  padding: 30px 15px 15px 15px;
  margin-top: 20px;
  box-shadow: 5px 5px 20px #ccc;
}
</style>
