<template>
  <div class="edit" style="margin-top: 20px;">
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
      isLike: true
    }
  },
  components: {
    quillEditor
  },
  methods: {
    getTopic () {
      let id = this.$route.query.id
      if (!id) return
      let self = this
      let url = this.$store.state.svrUrl + '/topic/' + id
      this.axios.get(url).then((res) => {
        self.content = res.data.data.content
      }).catch((res) => {
        console.log('Content: ', res)
      })
    },
    msg (val) {
      this.$message({
        message: val,
        type: 'success'
      })
    }
  },
  mounted () {
    this.getTopic()
  }
}
</script>
