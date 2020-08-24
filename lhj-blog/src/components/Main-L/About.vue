<template>
  <div class="big">
    <div class="about">
      <div class="introduce-box" v-for="(item) in introduce" :key="item.id">
        <p class="introduce-p">{{item.introduce}}</p>
      </div>
      <div class="echar_w">
        <ve-bar class="echar" :data="chartData" :settings="chartSettings"></ve-bar>
      </div>
    </div>
    <div class="font">
      <ul class="font_ul">
        <el-tooltip v-for="(item, index) in imglist" :key="index" class="item" effect="dark" :content="item.content" placement="right-end">
          <el-button>
            <li class="font_li">
              <img class="font_img" :src="item.imgsrc" alt="">
            </li>
          </el-button>
        </el-tooltip>
      </ul>
    </div>
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
      msg: '个人介绍',
      name: 'About',
      imglist: [
        {
          id: 0,
          imgsrc: require('../../assets/images/email.png'),
          content: '751609117@qq.com'
        },
        {
          id: 1,
          imgsrc: require('../../assets/images/qq.png'),
          content: '751609117'
        },
        {
          id: 2,
          imgsrc: require('../../assets/images/wechat.png'),
          content: 'lhj9711_'
        }
      ],
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
  },
  methods: {
    open () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: 'action: $ { action } '
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.big{
  width: 90%;
  color: #eee;
  background-color: rgba(85, 78, 78, 0.5);
}
.font{
  border-top: #eee solid 1px;
  padding: 20px;
  width: 300px;
  margin: 50px auto 0;
}
.font_ul, .font_li{
  margin: 0;
  padding: 0;
  list-style: none;
}
.font_ul{
  display: flex;
  justify-content: center;
  align-content: center;
}
.font_li{
  width: 60px;
  height: 60px;
  /* margin: 10px 20px; */
  box-shadow: 0 0 20px #25ccf7;
  border-radius: 50%;
  cursor: pointer;
}
.font_img{
  width: 40px;
  height: 40px;
  margin: 10px;
}
.el-button{
  background-color: rgba(85, 78, 78, 0.5);
  width: 60px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 50%;
  margin: 10px 20px;
}
.introduce-box {
  font-size: 14px;
  position: relative;
  width: 50%;
  /* color: rgb(97, 97, 97); */
  display: inline-block;
  margin-bottom: 10px;
}
.introduce-p{
  padding: 5px 0 5px 0;
  margin: 0;
  text-align: center;
}
.introduce-p::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -30px;
  height: 2px;
  width: 60px;
  background-color: rgb(27, 233, 191);
}
.about{
  width: 90%;
  margin: 0 auto;
}
.echar_w{
  width: 80%;
  margin: 0 auto;
}
.echar{
  margin-top: 30px;
  padding: 20px 24px 0 20px;
  background-color: rgba(118, 184, 170, 0.6);
  border-radius: 10px;
}
</style>
