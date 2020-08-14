<template>
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
</template>
<script>
import Header from './Home/Header'
import Main from './Home/Main'
import Footer from './Home/Footer'
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
  }
}
</script>

<style scoped>

</style>
