<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>文章列表</span>
      </div>
      <div class="introduce-box" v-for="(item,index) in noteList" :key="index">
        <p class="introduce-p">{{item}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      noteList: []
    }
  },
  methods: {
  },
  mounted () {
    this.$axios.get('http://localhost:3000/note/getNoteList')
      .then(res => {
        console.log(res.data)
        if (res.data.length >= 6) {
          res.data = res.data.slice(0, 6)
        }
        this.noteList = res.data
      })
      .catch(err => {
        console.log(err)
      })
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
.introduce-box {
  font-size: 14px;
  position: relative;
  width: 50%;
  color: rgb(97, 97, 97);
  display: inline-block;
  margin-bottom: 20px;
}
.introduce-p{
  /* background-color: #bcdc9d; */
  /* display: inline; */
  display: inline-block;
  padding: 5px 0 5px 0;
  margin: 0;
}
.introduce-p::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0px;
  height: 2px;
  width: 30px;
  background-color: rgb(27, 233, 191);
}
</style>
