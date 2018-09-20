<template>
  <div id="app" style="height:100%">
    <navi></navi>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
  components: {
    'Navi': Navigation,
    'Foot': Footer
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3f4d63;
  /* background-image: url('https://images.pexels.com/photos/240225/pexels-photo-240225.jpeg'); */
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
  overflow: hidden;
}
a {
  color: #3f4d63;
}
a:hover {
  color: #3f4d63; 
} 
</style>
