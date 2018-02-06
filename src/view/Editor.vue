<template>
  <div class="edit">
    <h1>富文本编辑器</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topic: {
        author: {},
        replies: {}
      },
      isLike: true
    }
  },
  methods: {
    getTopic () {
      let id = this.$route.query.id
      if (!id) return
      let self = this
      let url = this.$store.state.svrUrl + '/user/' + id
      this.axios.get(url).then((res) => {
        self.topic = res.data.data
      }).catch((res) => {
        console.log('Content: ', res)
      })
    }
  },
  mounted () {
    this.getTopic()
  }
}
</script>
