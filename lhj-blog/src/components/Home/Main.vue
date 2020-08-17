<template>
  <div class="main-q">
    <div class="main">
      <div class="main-main">
        <el-row :gutter="0">
          <el-col :span="16" class="main-main-l">
            <div class="hero">
              <h1>LHJ-Blog</h1>
            </div>
            <router-view class="main-main-l-router" name="main" />
          </el-col>
          <el-col :span="8" class="main-main-r">
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
  margin-top: 40px;
}
.rili{
  margin: 3% auto;
  width: 90%;
}
.hero{
  color: rgb(117, 221, 200);
}
.hero:after {
  background-color: rgb(117, 221, 200);
  display: block;
  content: "";
  margin-top: 10px;
  height: 1px;
  width: 120px;
}
</style>
