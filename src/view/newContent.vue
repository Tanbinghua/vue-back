<template>
  <div>
    <div class="float-left">
      <el-form :model="screening" style="margin: 20px auto 20px 20px;" label-width="50px">
        <el-form-item label="标题">
          <el-input v-model="screening.title" placeholder="标题字数十字以上"></el-input>
        </el-form-item>
        <el-form-item label="主题">
          <el-select v-model="screening.region">
            <el-option label="分享" value="share"></el-option>
            <el-option label="问答" value="ask"></el-option>
            <el-option label="招聘" value="job"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <markdown-editor v-model="content"></markdown-editor>
      <div style="text-align: center; margin-top: 20px;">
        <el-button type="primary" @click="msg('已提交')">提交</el-button>
      </div>
    </div>
    <div class="float-right">
      <el-card style="margin-top: 20px;">
        <div slot="header">
          <span>markdown语法参考</span>
          <a href="https://simplemde.com/markdown-guide" target="_blank" class="back-link">Markdown文档</a>
        </div>
        <div style="font-size: 14px; color: #666;">
          <p>### 单行的标题</p>
          <p>**粗体**</p>
          <p>`console.log('行内代码')`</p>
          <p>```js\n code \n``` 标记代码块</p>
          <p>[内容](链接)</p>
          <p>![文字说明](图片链接)</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import 'simplemde/dist/simplemde.min.css'
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
    markdownEditor
  },
  methods: {
    pubTopic () {
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
    },
    msg (val) {
      this.$message(this.content)
    }
  }
}
</script>

<style scoped>
.back-link {
  font-size: 14px;
  color: #409EFF;
  text-decoration: none;
  float: right;
}
</style>
