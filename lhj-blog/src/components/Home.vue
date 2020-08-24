<template>
  <div class="big">
    <el-backtop></el-backtop>
    <div class="stars"></div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>
<script>
import Header from './Home/Header'
import Main from './Home/Main'
import Footer from './Home/Footer'
var $ = require('jquery')
// import $ from 'jquery'
export default {
  data () {
    return {
    }
  },
  name: 'Home',
  components: {
    Header,
    Main,
    Footer
  },
  mounted () {
    // $('.user-name').css('color', 'pink')
    $(document).ready(function () {
      // 星星的密集程度，数字越大越多
      var stars = 800
      var $stars = $('.stars')
      // 星星的看起来的距离,值越大越远,可自行调制到自己满意的样子
      var r = 800
      for (var i = 0; i < stars; i++) {
        var $star = $(`<div style="width: 2px;
    height: 2px;
    background: #F7F7B6;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 0 0 -300px;
    transform: translate3d(0, 0, -300px);
    backface-visibility: hidden;"/>`).addClass('star')
        $stars.append($star)
      }
      $('.star').each(function () {
        var cur = $(this)
        var s = 0.2 + (Math.random() * 1)
        var curR = r + (Math.random() * 300)
        cur.css({
          transformOrigin: '0 0 ' + curR + 'px',
          transform: ' translate3d(0,0,-' + curR + 'px) rotateY(' + (Math.random() * 360) + 'deg) rotateX(' + (Math.random() * -50) + 'deg) scale(' + s + ',' + s + ')'
        })
      })
    })
  }
}
</script>

<style scoped>
.wraper {
  height: 100vh;
  overflow-x: hidden;
}
.big {
  background: linear-gradient(to bottom, #000000 0%,#363535 100%);
  background-attachment: fixed;
  overflow: hidden;
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
  }
}
.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: fixed;
  bottom: 0;
  perspective-origin: 50% 100%;
  left: 50%;
  animation: rotate 90s infinite linear;
}
.star {
  width: 2px;
  height: 2px;
  background: #F7F7B6;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0 -300px;
  transform: translate3d(0, 0, -300px);
  backface-visibility: hidden;
}
</style>
