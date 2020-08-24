<template>
  <div>
    <div class="footer">
      <!-- <ul class="footer-ul">
        <li class="footer-li">LHJ个人博客</li>
        <span>|</span>
        <li class="footer-li">2020</li>
        <span>|</span>
        <li class="footer-li">Email:751609117@qq.com</li>
        <span>|</span>
        <li class="footer-li">QQ:751609117</li>
      </ul> -->
      <ul class="footer-ul">
        <li v-for="(item, index) in list" :key="index">
          {{item.li}}
          <span>|</span>
        </li>
        <li>QQ:751609117</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          li: 'LHJ个人博客'
        },
        {
          id: 2,
          li: '2020'
        },
        {
          id: 3,
          li: 'Email:751609117@qq.com'
        }
        // {
        //   id: 4,
        //   li: 'QQ:751609117'
        // }
      ]
    }
  }
}
</script>

<style scoped>
.footer{
  height: 60px;
  border-top: solid 1px #eee;
}
ul, li{
  margin: 0;
  padding: 0;
}
.footer-ul{
  color: #eee;
  list-style: none;
  height: 60px;
  width: 50vw;
  margin: 0 auto;
  text-align: center;
  line-height: 60px;
  font-size: 14px;
  display: flex;
  justify-content: center;
}
span{
  margin: 0 14px;
}
</style>
