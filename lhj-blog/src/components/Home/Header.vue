<template>
  <div>
    <div class="header">
      <div class="header-main">
        <div class="header-main-l">
          <router-link to="/index">
            <img src="../../assets/images/logo.png" alt="" class="header-main-l-logo">
          </router-link>
        </div>
        <div class="header-main-c">
          <!-- <ul class="header-main-c-ul">
            <li class="header-main-c-li">首页</li>
            <li class="header-main-c-li">本站</li>
            <li class="header-main-c-li">关于</li>
          </ul> -->
          <ul class="header-main-c-ul">
            <li v-for="(item, index) in list" :key="index" class="header-main-c-li">
              <router-link class="header-main-c-li-router" :to="item.path">
                {{item.title}}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="header-main-r">
          <el-button type="primary" round>登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: '首页',
          path: '/index'
        },
        {
          title: '本站',
          path: '/blogindex'
        },
        {
          title: '关于',
          path: '/about'
        }
      ]
    }
  }
}
</script>

<style scoped>
.el-button--primary{
  background-color: rgb(93, 170, 155);
  border-color: rgb(93, 170, 155);
}
.el-button--primary:hover{
  color: rgb(93, 170, 155);
  background-color: #fff;
  border-color: #fff;
}
.header{
  /* background-color: #fff; */
  /* border-bottom: solid 1px #666666; */
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
}
.header-main{
  display: flex;
  justify-content: center;
  padding: 10px 10vw;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
}
.header-main-l-logo{
  width: 60px;
  height: 60px;
}
.header-main-l, .header-main-r {
  width: 20vw;
}
.header-main-c {
  width: 60vw;
  padding: 0 20vw;
}
ul,li{
  margin: 0;
  padding: 0;
}
.header-main-c-ul{
  display: flex;
}
.header-main-c-li{
  flex: 1;
  list-style: none;
  /* background-color: #fff; */
}
.header-main-c-li-router{
  color: rgb(93, 170, 155);
  text-decoration: none;
}
.header-main-c-li-router:hover{
  color: #eee;
}
</style>
