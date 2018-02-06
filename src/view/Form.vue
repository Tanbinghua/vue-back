<template>
  <div class="form">
    Form
  </div>
</template>

<script>
export default {
  data () {
    return {
      user_info: {
        recent_topics: [],
        recent_replies: [],
        collect_topics: []
      },
      activeName: '1'
    }
  },
  methods: {
    getUser () {
      if (this.$route.path === '/form') return
      const self = this
      let url = this.$store.state.svrUrl + this.$route.path
      this.axios.get(url).then((res) => {
        self.user_info = res.data.data
      }).catch((res) => {
        console.log('User: ', res)
      })
    }
  },
  created () {
    this.getUser()
  }
}
</script>
