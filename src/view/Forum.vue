<template>
  <div class="chart" style="min-width: 1200px;">
    <el-form :inline="true" :model="screening">
      <el-form-item label="主题" class="back-left">
        <el-select v-model="screening.region" @change="handleTabChange">
          <el-option label="全部" value="all"></el-option>
          <el-option label="精华" value="good"></el-option>
          <el-option label="weex" value="weex"></el-option>
          <el-option label="分享" value="share"></el-option>
          <el-option label="问答" value="ask"></el-option>
          <el-option label="招聘" value="job"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="back-right">
        <el-button type="primary" @click="onSubmit">筛选</el-button>
      </el-form-item>
      <el-form-item label="筛选" class="back-right">
        <el-input v-model="screening.tab" placeholder="请输入筛选内容"></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="tableData">
      <el-table-column label="类型" align="center" width="150">
        <template slot-scope="scope">
          <span class="back-tab com">{{scope.row.tab | formatTabs}}</span>
          <span v-if="scope.row.top" class="top back-tab">置顶</span>
          <span v-if="scope.row.good" class="good back-tab">精华</span>
        </template>
      </el-table-column>
      <el-table-column label="标题" header-align="center" align="left">
        <template slot-scope="scope">
          <router-link :to="{path: '/content', query: {id: scope.row.id}}" class="back-title">
            <i class="el-icon-tickets"></i>
            {{scope.row.title}}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column label="作者" align="center" width="170">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>作者：{{scope.row.author.loginname}}</p>
            <img :src="scope.row.author.avatar_url" :alt="scope.row.author.loginname" width="50" height="50" style="margin-left: 50px;">
            <div slot="reference">
              <router-link :to="{path: '/user', query: {id: scope.row.author.loginname}}"><el-tag size="medium">{{scope.row.author.loginname}}</el-tag></router-link>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="创作时间" align="center" width="140">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px;">{{scope.row.create_at | formatDate}}</span>
        </template>
      </el-table-column>
      <el-table-column label="浏览次数" align="center" width="140">
        <template slot-scope="scope">
          <i class="el-icon-view"></i>
          <span style="margin-left: 10px;">{{scope.row.visit_count}}</span>
        </template>
      </el-table-column>
      <el-table-column label="回复次数" align="center" width="140">
        <template slot-scope="scope">
          <i class="el-icon-info"></i>
          <span style="margin-left: 10px;">{{scope.row.reply_count}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row.id)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, jumper"
      :page-count="totalPage"
      @current-change="handleCurrentChange"
      :current-page.sync="page"
      style="margin-top: 20px; text-align: center;">
    </el-pagination>
    <el-dialog :visible.sync="dialogVisible" center width="350px">
      <span slot="title" style="color: #dd6161; font-size: 20px;">
        <i class="el-icon-warning"></i>
        警告
      </span>
      <div style="text-align: center;">是否确认删除此主题？</div>
      <span slot="footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button @click="deleteTopic" type="primary">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
const tabTotalPage = [
  ['all', 46],
  ['share', 11],
  ['good', 1],
  ['weex', 1],
  ['job', 2],
  ['ask', 33]
]

export default {
  data () {
    return {
      tableData: [],
      screening: {
        region: 'all'
      },
      page: 1,
      loading: false,
      totalPageMap: new Map(tabTotalPage),
      dialogVisible: false,
      deleteIndex: 0
    }
  },
  methods: {
    getDate () {
      let url = this.$store.state.svrUrl + 'topics?tab=' + this.screening.region + '&page=' + this.page
      const self = this
      this.axios.get(url).then((res) => {
        if (res.status === 200) {
          self.tableData = res.data.data
        } else if (res.status === 304) {
          self.$message('暂无数据更新，请稍后再试')
        } else {
          self.$message('获取数据失败，请稍后再试')
        }
      }).catch((res) => {
        console.log('Forum: ', res)
      })
    },
    handleTabChange (val) {
      this.screening.region = val
      this.loading = false
      this.getDate()
    },
    handleCurrentChange (val) {
      this.page = val
      this.getDate()
    },
    handleDelete (index) {
      this.dialogVisible = true
      this.deleteIndex = index
    },
    deleteTopic () {
      this.tableData.splice(this.deleteIndex, 1)
      this.$message({
        message: '删除成功',
        type: 'success'
      })
      this.dialogVisible = false
    },
    handleEdit (id) {
      this.$router.push({path: '/editor', query: {id: id}})
    },
    onSubmit () {
      console.log('submit')
    }
  },
  mounted () {
    this.getDate()
  },
  computed: {
    totalPage () {
      return this.totalPageMap.get(this.screening.region)
    }
  }
}
</script>

<style scoped>
.back-left {
  float: left;
  margin-left: 50px;
}

.back-right {
  float: right;
}

.back-title {
  text-decoration: none;
  color: #606266;
}

.back-title:hover {
  color: #409EFF;
}

.top {
  background-color: #009688;
}

.good {
  background-color: darkorange;
}

.com {
  background-color: rgb(7, 229, 236);
}

.back-tab {
  color: white;
  padding: .2rem;
  border-radius: .2rem;
  font-size: 14px;
}
</style>
