<template>
  <div class="markdown" style="margin-top: 20px;">
    <markdown-editor></markdown-editor>
    <div style="margin-top:20px; text-align: center;">
      <el-button type="primary" @click="msg('已提交')">提交</el-button>
    </div>
  </div>
</template>

<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import 'simplemde/dist/simplemde.min.css'
export default {
  data () {
    return {}
  },
  methods: {
    msg (val) {
      this.$message({
        message: val,
        type: 'success'
      })
    }
  },
  components: {
    markdownEditor
  }
}
</script>
