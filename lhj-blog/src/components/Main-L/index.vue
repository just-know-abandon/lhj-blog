<template>
  <div class="big">
    <!-- <div class="hero">
      <h1>LHJ-Blog</h1>
    </div> -->
    <ul>
      <li class="inli" v-for="(item, index) in noteList" :key="index">
        <p class="item_header">{{item}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      noteList: []
    }
  },
  mounted () {
    // this.$axios.get('http://localhost:3000/note/getNote')
    //   .then(res => {
    //     console.log(res.data)
    //   })
    //   .catch(err => {
    //     console.log(err + '连接失败')
    //   }),
    this.$axios.get('http://localhost:3000/note/getNoteList')
      .then(res => {
        console.log(res.data)
        this.noteList = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.big{
  width: 80%;
}
/* .hero{
  color: rgb(117, 221, 200);
}
.hero:after {
  background-color: rgb(117, 221, 200);
  display: block;
  content: "";
  margin-top: 1.66667em;
  height: 1px;
  width: 120px;
} */
ul, li, p{
  margin: 0;
  padding: 0;
}
ul, li{
  list-style: none;
}
li{
  margin-top: 30px;
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
ul>li{
  border: 1px solid #cccccc;
  /* border-left: 1px solid #cccccc; */
  /* border-right: 1px solid #cccccc; */
  /* border-bottom: 1px solid #cccccc; */
  height: 126px;
  position: relative;
}
ul>li:nth-child(1){
  margin-top: 0;
}
ul>li:hover{
  background-color: rgb(118, 184, 170);
}
ul>li:hover{
  color: #ffffff;
  padding-left: 100px;
}
.item_header{
  padding-top: 1em;
}
.inli{
  background-color: rgba(255,255,255,0.2);
  border-radius: 4px;
  border: none;
  color: #fff;
}
</style>
