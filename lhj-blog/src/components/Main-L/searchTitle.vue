<template>
  <div class="big">
    <!-- <div class="hero">
      <h1>LHJ-Blog</h1>
    </div> -->
    <ul class="inul">
      <router-link class="ulrouter" tag="div" :to="{name:'Detail', query: {id: item.id}}" v-for="(item, index) in noteList" :key="index">
        <li class="inli">
          <p class="item_header">{{item.title}}</p>
          <p class="item_header">{{item.id}}</p>
          <p class="item_header">{{item.content}}</p>
          <p class="item_header">{{item.author}}</p>
        </li>
      </router-link>
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      noteList: [],
      queryInfo: {
        query: '',
        // 当前页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 5
      },
      total: null
    }
  },
  created () {
    this.getnoteList(this.queryInfo.pagesize, this.queryInfo.pagenum)
    // this.getnoteList()
  },
  methods: {
    // 监听 page-sizes 改变事件（多少条数据一页）
    handleSizeChange (newSize) {
      // console.log(newSize)
      this.queryInfo.pagesize = newSize
      this.getnoteList(newSize, {})
      this.queryInfo.pagenum = 1
    },
    // 监听页码值改变的事件(第几页)
    handleCurrentChange (newPage) {
      // console.log(newPage)
      this.queryInfo.pagenum = newPage
      this.getnoteList({}, newPage)
    },
    getnoteList (newSize, newPage) {
      this.$axios.get('http://localhost:8000/blog/list?keyword=' + this.$route.query.searchtitle)
        .then(res => {
          console.log('123')
          console.log(this.$route.query.searchtitle)
          console.log(res.data.data)
          // this.noteList = res.data.data
          // console.log(this.queryInfo.pagesize)
          if (newSize) {
            this.noteList = res.data.data.slice(0, newSize)
          }
          if (newPage === 1) {
            this.noteList = res.data.data.slice(0, this.queryInfo.pagesize)
          } else if (newPage > 1) {
            this.noteList = res.data.data.slice(this.queryInfo.pagesize * (newPage - 1), this.queryInfo.pagesize * newPage)
          }
          // console.log(res.data.data.length)
          this.total = res.data.data.length
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
  },
  watch: {
    $route (to, from) {
      if (to !== from) {
        // this.id = this.$route.query.id
        // console.log(this.id)
        this.getnoteList(this.queryInfo.pagesize, this.queryInfo.pagenum)
      }
    }
  }
}
</script>

<style scoped>
.big{
  width: 90%;
  background-color: rgba(85, 78, 78, 0.5);
  min-height: 720px;
}
ul, li, p{
  margin: 0;
  padding: 0;
}
ul, li{
  list-style: none;
}
.ulrouter{
  margin-top: 30px;
}
.inli{
  height: 100%;
  padding-left: 30px;
  /* 火狐 */
  -moz-transition: padding-left 0.5s;
  /* 谷歌 */
  -webkit-transition: padding-left 0.5s;
  /* opera */
  -o-transition: padding-left 0.5s;
  transition: padding-left 0.5s;
}
.inli{
  border: 1px solid #cccccc;
  height: 126px;
  position: relative;
}
.ulrouter:nth-child(1){
  margin-top: 0;
}
.inli:hover{
  background-color: rgb(118, 184, 170);
}
.inli:hover{
  color: #ffffff;
  padding-left: 60px;
}
.item_header{
  padding-top: 5px;
  cursor: pointer;
}
.inli{
  background-color: rgba(118, 184, 170, 0.2);
  border-radius: 4px;
  border: none;
  color: #fff;
  height: 120px;
}
.pagination{
  background-color: #fff;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
