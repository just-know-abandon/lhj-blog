<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人介绍</span>
      </div>
      <div class="introduce-box" v-for="(item) in introduce" :key="item.id">
        <p class="introduce-p">{{item.introduce}}</p>
      </div>
      <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      dimension: ['it'],
      metrics: ['个人技术栈'],
      max: '5'
    }
    return {
      chartData: {
        columns: ['技术', '个人技术栈'],
        rows: [
          { it: 'Node', 个人技术栈: 1 },
          { it: 'Vue', 个人技术栈: 2 },
          { it: 'JQ', 个人技术栈: 1 },
          { it: 'js', 个人技术栈: 2 },
          { it: 'CSS', 个人技术栈: 3 },
          { it: 'Html', 个人技术栈: 3 }
        ]
      },
      introduce: [
        {
          id: 0,
          introduce: 'LHJ'
        },
        {
          id: 1,
          introduce: '广东科技学院'
        },
        {
          id: 2,
          introduce: '前端菜鸟'
        },
        {
          id: 3,
          introduce: '软件工程'
        }
      ]
    }
  }
}
</script>

<style scoped>
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
  padding: 5px 0 5px 15px;
  margin: 0;
}
.introduce-p::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 15px;
  height: 2px;
  width: 30px;
  background-color: rgb(27, 233, 191);
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
</style>
