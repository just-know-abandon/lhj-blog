<template>
  <div class="main-q">
    <div class="main">
      <div class="main-main">
        <el-row :gutter="0">
          <el-col :span="16" class="main-main-l">
            <div class="hero">
              <h1 class="h">LHJ-Blog</h1>
              <div class="search">
                <el-input clearable class="search_input" placeholder="搜索..." v-model="searchinput" v-on:input="returndata"></el-input>
                <router-link :to="{name:'SearchAuthor', query: {searchauthor: searchinput}}" class="search_btn1_router">
                  <button class="search_btn1"
                  @click="openFullScreen2">作者</button>
                </router-link>
                <!--  @click="searchauthor(this.searchinput)" -->
                <router-link :to="{name:'SearchTitle', query: {searchtitle: searchinput}}" >
                  <button class="search_btn2">文章</button>
                </router-link>
                <!--  @click="searchtitle" -->
              </div>
            </div>
            <router-view class="main-main-l-router" name="main" />
          </el-col>
          <el-col :span="8" class="main-main-r">
            <!-- <Introduce /> -->
            <Fenlei />
            <List />
            <el-calendar v-model="value" class="rili"></el-calendar>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// import Introduce from '../../components/Main-R/Introduce'
import List from '../../components/Main-R/List'
import Fenlei from '../../components/Main-R/Fenlei'
export default {
  data () {
    return {
      // fullscreenLoading: false,
      searchinput: '',
      value: new Date()
    }
  },
  methods: {
    returndata () {
      if (this.searchinput === '') {
        this.$router.push({ name: 'index' })
      }
    },
    // openFullScreen1 () {
    //   this.fullscreenLoading = true
    //   setTimeout(() => {
    //     this.fullscreenLoading = false
    //   }, 1000)
    // }
    openFullScreen2 () {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        loading.close()
      }, 500)
    }
  },
  name: 'Main',
  components: {
    // Introduce,
    List,
    Fenlei
  }
}
</script>

<style scoped>
.main-q{
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
}
/* .main{
  background-color: pink;
  border: 1px #000 solid;
} */
.main-main-l{
  /* background-color: rgb(90, 107, 95); */
  margin-top: 10px;
  /* padding-bottom: 30px; */
}
.main-main-l-router{
  /* background-color: #fff; */
  /* background-color: rgba(255,255,255,0.2); */
  /* opacity: 0.8; */
  margin-top: 20px;
  padding: 30px 20px 20px 20px;
  border-radius: 4px;
}
.main-main-r{
  /* background-color: steelblue; */
  margin-top: 104px;
}
.rili{
  margin: 3% auto;
  width: 90%;
  border-radius: 4px;
}
.hero{
  color: rgb(93, 170, 155);
  padding-top: 10px;
  /* background-color: red; */
  position: relative;
}
.h {
  margin: 0;
}
.search {
  position: absolute;
  bottom: 2px;
  right: 60px;
  height: 33px;
  /* border: 1px solid black; */
}
.search_input{
  width: 150px;
  /* padding: 6px 5px; */
  /* outline-style: none; */
  /* border: 1px solid #ccc; */
  /* border-radius: 8px; */
  font-size: 14px;
  font-family: "Microsoft soft";
  margin-right: 10px;
}
.search /deep/.el-input__inner{
  height: 33px !important;
}
.search_input:focus{
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(117, 221, 200, .6);
  box-shadow: inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(117, 221, 200, .6);
}
.search_btn1{
  width: 60px;
  height: 33px;
  border-width: 0px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: rgb(93, 170, 155);
  cursor: pointer;
  outline: none;
  font-family: "Microsoft soft";
  color: #fff;
  font-size: 12px;
}
.search_btn2{
  width: 60px;
  height: 33px;
  border-width: 0px;
  border-left: 1px #fff solid;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: rgb(93, 170, 155);
  cursor: pointer;
  outline: none;
  font-family: "Microsoft soft";
  color: #fff;
  font-size: 12px;
}
.search_btn1:hover, .search_btn2:hover{
  color: rgb(117, 221, 200);
  background-color: #fff;
}
.hero:after {
  background-color: rgb(117, 221, 200);
  display: block;
  content: "";
  margin-top: 10px;
  height: 1px;
  width: 120px;
}
.rili /deep/ .el-calendar-day {
  height: 40px !important;
}
</style>
