<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
         <!-- ({{notelength}}) -->
        <span>{{msga}}</span>
      </div>
      <ul class="introduce-ul">
        <li class="introduce-li" v-for="(item,index) in noteList" :key="index">
          <!--  @click.native="conta()" -->
          <router-link tag="div" class="ulrouter" :to="{name:'Detail', query: {id: item.id}}">
            <p class="introduce-p">{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msga: '最新发布',
      noteList: [],
      notelength: ''
      // msg: '',
      // author: '',
      // createtime: '',
      // content: ''
    }
  },
  methods: {
    sort (a, b) {
      return a.create_time - b.create_time
    },
    cont () {
      this.$axios.get('http://localhost:8000/blog/list')
        .then(res => {
          this.notelength = res.data.data.length
          // console.log(res.data)
          if (res.data.data.length >= 5) {
            res.data.data = res.data.data.slice(0, 5)
          }
          this.noteList = res.data.data
          // this.notelength = res.data.data.length
        })
        .catch(err => {
          console.log(err)
        })
    }
    // conta () {
    //   console.log(this.$route)
    //   console.log(this.$route.query.id)
    //   this.$axios.get('http://localhost:8000/blog/detail?id=' + this.$route.query.id)
    //     .then(res => {
    //       console.log(res.data.data)
    //       this.msg = res.data.data.title
    //       this.author = res.data.data.author
    //       this.createtime = res.data.data.createtime
    //       this.content = res.data.data.content
    //       // this.$emit('sendconta', this.msg, this.other, this.createtime, this.content)
    //     })
    //     .catch(err => {
    //       console.log(err + '连接失败')
    //     })
    // }
  },
  mounted () {
    this.cont()
  }
}
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.box-card {
  margin: 3% auto;
  width: 90%;
}
.introduce-ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
.introduce-li{
  margin-bottom: 10px;
}
.introduce-p{
  display: inline;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.introduce-p:hover{
  color: rgb(117, 221, 200);
}
.ulrouter{
  display: inline;
  text-decoration: none;
  margin: 0 0 10px 0;
}
</style>
