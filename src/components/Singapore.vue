<template>
<div class="singapore" style="margin:20px">
    <div class="row justify-content-center" style="opacity:0.95">
    <div class="col-3">
      
    </div>
    <div class="col-6">
      <card>
    <card-body>
      <!--<li v-for="(value, key) in info.main">-->
    <h4>
      Current Temperature in Deg Celcius: 
      {{info.main && (Math.round((info.main.temp-273.15)*10)/10).toFixed(2)}} 
    </h4>
    <h4>
      Sky Description: 
      {{info.weather && info.weather[0] && info.weather[0].description}}
      <img v-if="info.weather && info.weather[0]" :src="'https://openweathermap.org/img/w/'+ info.weather[0].icon + '.png'">
    </h4>
    </card-body>
  </card>
    </div>
    <div class="col-3">
    <card>
</card>
    </div>
</div>
  </div>
</template>

<script>
import axios from "axios";
import { Card, CardImg, CardBody, CardTitle, CardText, Btn } from 'mdbvue';

export default {
  data () {
    return {
      info: []
    }
  },
  components: {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Btn
  },
  mounted () {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?id=1880252&APPID=474e2fb5a113dfb7843c5cff410241c1')
      .then(response => (this.info = response.data));
  }
}
</script>

<style scoped>
h1, h2, h3, h4 {
  font-weight: normal;
  margin: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>