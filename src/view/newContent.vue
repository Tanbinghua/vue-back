<template>
  <div class="new">
    <el-form :inline="true" :model="screening" style="margin: 20px auto 20px 20px;">
      <el-form-item label="标题">
        <el-input v-model="screening.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="主题">
        <el-select v-model="screening.region">
          <el-option label="分享" value="share"></el-option>
          <el-option label="问答" value="ask"></el-option>
          <el-option label="招聘" value="job"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <quill-editor v-model="content"></quill-editor>
    <div style="text-align: center; margin-top: 20px;">
      <el-button type="primary" @click="msg('已提交')">提交</el-button>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  data () {
    return {
      content: '',
      screening: {
        region: 'share',
        title: ''
      },
      list: 0,
      publish: false
    }
  },
  components: {
    quillEditor
  },
  methods: {
    pubTopic () {
      if (this.list === 0) {
        this.tab = 'share'
      } else if (this.list === 1) {
        this.tab = 'ask'
      } else if (this.list === 2) {
        this.tab = 'job'
      }
      if (this.title.length >= 10 && this.content && this.accesstoken) {
        let that = this
        this.axios.post(this.$store.state.svrUrl + 'topics', {
          accesstoken: that.accesstoken,
          title: that.title,
          tab: that.tab,
          content: that.content
        }).then((res) => {
          that.title = ''
          that.content = ''
          that.tips = '发表成功！'
          that.publish = true
          setTimeout(() => {
            that.publish = false
          }, 1500)
        }).catch((res) => {
          that.publish = true
        })
      } else {
        this.publish = true
      }
    }
  }
}
</script>

<style scoped>
</style>
