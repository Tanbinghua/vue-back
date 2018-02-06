<template>
  <div class="user">
    <div class="float-left">
      <el-card class="back-card">
        <div slot="header">
          <span>个人信息</span>
          <el-button style="float: right; padding: 3px 0;" @click="toEditor(user_info.loginname)">编辑资料</el-button>
        </div>
        <div>
          <img :src="user_info.avatar_url" :alt="user_info.loginname" style="vertical-align: baseline;">
          <div style="display: inline-block; margin-left: 20px;">
            <p>{{user_info.loginname}}</p>
            <p><span>{{user_info.score}}&nbsp;积分</span></p>
            <p>
              <a :href="'https://github.com/' + user_info.githubUsername" style="text-decoration: none; color: #666;">github&nbsp;@{{user_info.loginname}}</a>
            </p>
            <p><span>注册时间&nbsp;{{user_info.create_at | formatDate}}</span></p>
          </div>
        </div>
      </el-card>
      <el-card class="back-card" v-if="user_info.recent_topics.length">
        <div slot="header">
          <span>最近创建的话题</span>
          <el-button style="float: right; padding: 3px 0;">查看更多</el-button>
        </div>
        <ul style="list-style-type: none; padding: 0; margin: 0;">
          <li v-for="topic in user_info.recent_topics" :key="topic.id" class="back-list">
            <img :src="topic.author.avatar_url" :alt="topic.author.loginname" style="width: 30px; vertical-align: middle;">
            <router-link :to="{path: '/content', query: {id: topic.id}}" class="back-link">{{topic.title}}</router-link>
            <span style="float: right; color: #666; font-size: 14px;">{{topic.last_reply_at | formatDate}}</span>
          </li>
        </ul>
      </el-card>
      <el-card class="back-card" v-if="user_info.recent_replies.length">
        <div slot="header">
          <span>最近参与的话题</span>
          <el-button style="float: right; padding: 3px 0;">查看更多</el-button>
        </div>
        <ul style="list-style-type: none; padding: 0; margin: 0;">
          <li v-for="reply in user_info.recent_replies" :key="reply.id" class="back-list">
            <img :src="reply.author.avatar_url" :alt="reply.author.loginname" style="width: 30px; vertical-align: middle;">
            <router-link :to="{path: '/content', query: {id: reply.id}}" class="back-link">{{reply.title}}</router-link>
            <span style="float: right; color: #666; font-size: 14px;">{{reply.last_reply_at | formatDate}}</span>
          </li>
        </ul>
      </el-card>
      <el-card class="back-card" v-if="user_info.collect_topics.length">
        <div slot="header">
          <span>最近收藏的话题</span>
          <el-button style="float: right; padding: 3px 0;">查看更多</el-button>
        </div>
        <ul style="list-style-type: none; padding: 0; margin: 0;">
          <li v-for="topic in user_info.collect_topics" :key="topic.id" class="back-list">
            <img :src="topic.author.avatar_url" :alt="topic.author.loginname" style="width: 30px; vertical-align: middle;">
            <router-link :to="{path: '/content', query: {id: topic.id}}" class="back-link">{{topic.title}}</router-link>
            <span style="float: right; color: #666; font-size: 14px;">{{topic.last_reply_at | formatDate}}</span>
          </li>
        </ul>
      </el-card>
    </div>
    <div class="float-right">
      <el-card class="back-card">
        <div slot="header">
          <span>广告</span>
          <el-button style="float: right; padding: 3px 0;">查看更多</el-button>
        </div>
        <div>暂无内容</div>
      </el-card>
    </div>
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
      const self = this
      let url = this.$store.state.svrUrl + this.$route.path
      this.axios.get(url).then((res) => {
        self.user_info = res.data.data
      }).catch((res) => {
        console.log('User: ', res)
      })
    },
    toEditor (name) {
      this.$router.push({path: '/form', query: {id: name}})
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<style scoped>

.back-card {
  margin-top: 20px;
}

.back-list {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.back-link {
  text-decoration: none;
  color: #409EFF;
  margin: auto 10px;
}
</style>
