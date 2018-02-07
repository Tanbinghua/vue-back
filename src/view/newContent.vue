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
      }
    }
  },
  components: {
    quillEditor
  }
}
</script>

<style scoped>
</style>
