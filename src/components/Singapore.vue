<template>
<div class="singapore" style="margin:20px">
    <div class="row justify-content-center" style="margin-top:70px">
    <div class="col-sm-3">
    </div>
    <div class="col-sm-6">
    <card>
    <card-body>
      <!--<li v-for="(value, key) in info.main">-->
      <card-title><h5>Random Weather Facts</h5></card-title> 
      <h6>
      Current Temperature in Deg Celcius: 
      {{info.main && (Math.round((info.main.temp-273.15)*10)/10).toFixed(2)}} 
      </h6>
      <h6>
      Sky Description: 
      {{info.weather && info.weather[0] && info.weather[0].description}}
      <img v-if="info.weather && info.weather[0]" v-bind:src="'https://openweathermap.org/img/w/'+ info.weather[0].icon + '.png'">
      </h6>
    </card-body>
    </card>
    </div>
    <div class="col-sm-3">
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
  margin: 20px;
}
h5, h6 {
  color: #3f4d63;
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