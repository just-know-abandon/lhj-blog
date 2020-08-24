<template>
  <div class="big">
    <div class="title">
      <div class="title_t">{{msg}}</div>
      <div class="title_b">
        <span>{{author}}</span>
        <span>{{getDate(this.createtime)}}</span>
      </div>
    </div>
    <div class="content" v-html="content">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: '',
      msg: '',
      author: '',
      createtime: '',
      content: ''
    }
  },
  methods: {
    getDate (data) {
      var myDate = new Date(data)
      const a = '-'
      const b = ':'
      const year = myDate.getFullYear()
      const month = myDate.getMonth() + 1
      const day = myDate.getDate()
      const hour = myDate.getHours()
      const min = myDate.getMinutes()
      const sec = myDate.getSeconds()
      const result = year + a + month + a + day + ' ' + hour + b + min + b + sec
      return result
    },
    cont () {
      console.log(this.$route)
      console.log(this.$route.query.id)
      this.$axios.get('http://localhost:8000/blog/detail?id=' + this.$route.query.id)
        .then(res => {
          console.log(res.data.data)
          this.id = res.data.data.id
          this.msg = res.data.data.title
          this.author = res.data.data.author
          this.createtime = res.data.data.createtime
          this.content = res.data.data.content
        })
        .catch(err => {
          console.log(err + '连接失败')
        })
    }
  },
  mounted () {
    this.cont()
  },
  created () {
    // this.cont()
    // console.log(this.$route)
    // console.log(this.$route.query.id)
    // this.$axios.get('http://localhost:8000/blog/detail?id=' + this.$route.query.id)
    //   .then(res => {
    //     console.log(res.data.data)
    //     this.msg = res.data.data.title
    //     this.author = res.data.data.author
    //     this.createtime = res.data.data.createtime
    //     this.content = res.data.data.content
    //   })
    //   .catch(err => {
    //     console.log(err + '连接失败')
    //   })
  },
  watch: {
    $route (to, from) {
      if (to !== from) {
        // this.id = this.$route.query.id
        // console.log(this.id)
        this.cont()
      }
    }
  }
}
</script>

<style scoped>
.big{
  width: 90%;
  color: #eee;
  background-color: rgba(85, 78, 78, 0.5);
  min-height: 862px;
}
.title{
  height: 40px;
  border-bottom: #eee solid 1px;
  font-size: 20px;
  padding: 0 0 20px 20px;
  position: relative;
}
.title_t{
  text-align: center;
  font-size: 26px;
  line-height: 40px;
}
.title_b{
  position: absolute;
  right: 20px;
  bottom: 0;
  font-size: 12px;
  height: 20px;
}
.title_b > span{
  margin-left: 10px;
}
.content{
  padding: 20px;
}
</style>
