<template>
  <div>
    <div class="main">
      <div class="main-main">
        <el-row :gutter="0">
          <el-col :span="18" class="main-main-l">
            <router-view name="main" />
          </el-col>
          <el-col :span="6" class="main-main-r">
            <!-- <div class="main-main-l-introduce">个人介绍</div> -->
            <!-- <div class="main-main-l-list">文章列表</div> -->
            <!-- <div class="main-main-l-fenlei">文章分类</div> -->
            <Introduce />
            <List />
            <Fenlei />
            <el-calendar v-model="value" class="rili"></el-calendar>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Introduce from '../../components/Main-R/Introduce'
import List from '../../components/Main-R/List'
import Fenlei from '../../components/Main-R/Fenlei'
// import Index from '../../components/Main-L/index'
// import About from '../../components/Main-L/About'
// import Blogindex from '../../components/Main-L/Blogindex'
export default {
  data () {
    return {
      value: new Date()
    }
  },
  name: 'Main',
  components: {
    Introduce,
    List,
    Fenlei
    // Index,
    // About,
    // Blogindex
  }
}
</script>

<style scoped>
.main{
  background-color: pink;
}
.main-main-l{
  background-color: springgreen;
}
.main-main-r{
  background-color: steelblue;
}
.rili{
  margin: 3% auto;
  width: 90%;
}
.viewmain{
  position: absolute;
  top: 10px;
}
</style>
