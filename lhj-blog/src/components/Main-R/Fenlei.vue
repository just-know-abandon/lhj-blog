<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{msga}}</span>
      </div>
      <ul class="fenlei_ul">
        <li class="fenlei_li" v-for="(item, index) in fenleiList" :key="index">
          <router-link :to="{name:'FenleiList', query: {keyword: item.keyword}}" tag="div" class="ulrouter">
            <!--  {{getTotle(item.keyword)}} -->
            <p class="fenlei_p">{{item.keyword}} ({{item.totle}}{{getTotle(item.id, item.keyword)}})</p>
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
      msga: '文章分类',
      fenleiList: [
        {
          id: 0,
          keyword: 'html',
          totle: ''
        },
        {
          id: 1,
          keyword: 'css',
          totle: ''
        },
        {
          id: 2,
          keyword: 'js',
          totle: ''
        },
        {
          id: 3,
          keyword: 'vue',
          totle: ''
        },
        {
          id: 4,
          keyword: 'node',
          totle: ''
        }
      ]
    }
  },
  // mounted () {
  //   this.$axios.get('http://localhost:8000/blog/list?keyword=html')
  //     .then(res => {
  //       console.log(res.data.data.length)
  //       this.fenleiList[0].totle = res.data.data.length
  //     })
  //   this.$axios.get('http://localhost:8000/blog/list?keyword=css')
  //     .then(res => {
  //       console.log(res.data.data.length)
  //       this.fenleiList[1].totle = res.data.data.length
  //     })
  //   this.$axios.get('http://localhost:8000/blog/list?keyword=js')
  //     .then(res => {
  //       console.log(res.data.data.length)
  //       this.fenleiList[2].totle = res.data.data.length
  //     })
  //   this.$axios.get('http://localhost:8000/blog/list?keyword=vue')
  //     .then(res => {
  //       console.log(res.data.data.length)
  //       this.fenleiList[3].totle = res.data.data.length
  //     })
  //   this.$axios.get('http://localhost:8000/blog/list?keyword=node')
  //     .then(res => {
  //       console.log(res.data.data.length)
  //       this.fenleiList[4].totle = res.data.data.length
  //     })
  // }
  methods: {
    getTotle (id, keyword) {
      this.$axios.get('http://localhost:8000/blog/list?keyword=' + keyword)
        .then(res => {
          // console.log(res.data.data)
          // console.log(res.data.data.length)
          this.fenleiList[id].totle = res.data.data.length
        })
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
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
.fenlei_ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
.fenlei_li{
  margin-bottom: 10px;
}
.fenlei_p{
  display: inline;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.fenlei_p:hover{
  color: rgb(117, 221, 200);
}
.ulrouter{
  display: inline;
  text-decoration: none;
  margin: 0 0 10px 0;
}
</style>
