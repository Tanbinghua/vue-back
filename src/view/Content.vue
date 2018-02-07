<template>
  <div class="content">
    <div class="float-left" style="margin-top: 20px;">
      <header>
        <div style="text-align: center;">
          <span v-if="topic.top" class="top-topic">置顶</span>
          <span v-if="topic.good" class="good-topic">精华</span>
          <span class="back-header">{{topic.title}}</span>
        </div>
        <div class="back-label">
          <span>发布于&nbsp;{{ topic.create_at | formatDate }}</span>
          <router-link :to="{path: '/user', query: {id: topic.author.loginname}}" class="back-link">
            作者&nbsp;{{ topic.author.loginname }}
          </router-link>
          <span>{{ topic.visit_count }}&nbsp;次浏览</span>
          <span>来自&nbsp;{{ topic.tab | formatTabs }}</span>
        </div>
      </header>
      <section>
        <div v-html="topic.content" class="back-section"></div>
      </section>
      <div class="back-reply">
        <p>共&nbsp;{{topic.reply_count}}&nbsp;条回复</p>
        <div v-for="(reply, index) in topic.replies" :key="reply.id" class="back-reply-list">
          <div style="margin-right: 10px; display: inline-block; float: left;">
            <router-link :to="'/user/' + reply.author.loginname"><img :src="reply.author.avatar_url" :alt="reply.author.loginname"></router-link>
          </div>
          <div>
            <div>
              <span style="font-weight: bold;">{{reply.author.loginname}}</span>
              <span style="color: #409EFF;">
                {{index+1}}&nbsp;楼&nbsp;•&nbsp;{{reply.create_at | formatDate}}
              </span>
              <span class="star-on">
                <i :class="{'el-icon-star-on': !isLike, 'el-icon-star-off': isLike}"></i>
                {{reply.ups.length}}
              </span>
            </div>
            <div v-html="$options.filters.formatComment(reply.content)"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="float-right">
      <el-card style="margin-top: 20px;">
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
      let self = this
      let url = this.$store.state.svrUrl + '/topic/' + id
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

<style scoped>

header, section, .back-reply {
  background-color: #fff;
  padding: 10px;
}

.top-topic {
  background-color: #009688;
  color: #fff;
  padding: .2rem .6rem;
  border-radius: .2rem;
}

.good-topic {
  background-color: darkorange;
  color: white;
  padding: .2rem;
  border-radius: .2rem;
}

.back-header {
  font-size: 20px;
  font-weight: bold;
}

.back-label {
  font-size: 14px;
  color: #666;
  text-align: left;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px #999 solid;
}

.back-label ::before {
  padding: 5px;
  content: "•";
}

.back-section {
  text-align: left;
}

.back-link {
  text-decoration: none;
  color: #666;
}

.back-reply {
  margin-top: 20px;
  text-align: left;
}

.back-reply-list {
  padding: 10px;
  border-top: 1px solid #999;
}

.back-reply-list img {
  width: 30px;
  border-radius: 3px;
}

.star-on {
  float: right;
}

.star-on:hover {
  cursor: pointer;
}
</style>
