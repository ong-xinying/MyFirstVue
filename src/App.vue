<template>
  <div id="app" style="height:100%">
    <nav class="navbar navbar-expand-lg navbar-light warning-color lighten-5">
    <router-link v-bind:to="'/Home'">Home</router-link>
    <router-link v-bind:to="'/Projects'">Projects</router-link>
    <router-link v-bind:to=" '/Photos'">Curated</router-link>
    <router-link v-bind:to="'/Singapore'">Singapore</router-link>
    <router-link v-bind:to="'/SayHi'">Say Hi</router-link>
    <router-link v-bind:to="'/About'">About</router-link>
     </nav>
    <router-view></router-view>
  </div>
</template>

<script>

</script>


<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-image: url('https://images.pexels.com/photos/240225/pexels-photo-240225.jpeg');
  background-size: 100%;
  background-repeat: no-repeat;
  position:fixed;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
  z-index:1000;
}

a {
  color: #2c3e50;
  margin-right: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}

a:hover {
  color: #000000; 
}

</style>
