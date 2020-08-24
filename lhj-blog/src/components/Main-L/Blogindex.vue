<template>
  <div class="big">
    <div class="skill">{{msg}}</div>
    <div class="skillabout">
      <ul class="skillabout_ul">
        <li class="skillabout_li">
          <p class="skillabout_p" v-for="(item, index) in list" :key="index">
            {{item.skillabout}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '本站介绍',
      list: [
        {
          id: 0,
          skillabout: '本站仅为 Vue + Node 自学学习使用'
        },
        {
          id: 1,
          skillabout: '实现前后端分离开发'
        },
        {
          id: 2,
          skillabout: '前端：Vue.js、Element-UI、JQuery、Axios'
        },
        {
          id: 3,
          skillabout: '后端：Node.js、Express、Mysql、Redis'
        }
        // {
        //   id: 4,
        //   skillabout: '登录方面用 RedisStore， redis 数据库对 session 的存储'
        // }
      ]
    }
  }
}
</script>

<style scoped>
.big{
  width: 90%;
  color: #eee;
  background-color: rgba(85, 78, 78, 0.5);
  /* min-height: 1650px; */
}
.skill{
  height: 40px;
  border-bottom: #eee solid 1px;
  line-height: 40px;
  font-size: 20px;
  padding: 0 0 20px 20px;
}
.skillabout{
  padding: 20px 20px 50px;
}
.skillabout_ul, .skillabout_li {
  list-style: none;
}
.skillabout_ul, .skillabout_li {
  margin: 0;
  padding: 0;
}
/* .skillabout_p {
  text-indent: 2em;
} */
</style>
