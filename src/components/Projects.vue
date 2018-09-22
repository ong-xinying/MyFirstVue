<template>
  <div class="projects">
    <div class="row justify-content-center" style="margin-top:70px">
    <div class="col-sm-3">
     <card id="card1">
       <card-body>
         <card-title><h5>Github Repositories</h5></card-title>
        <li v-for="item in info" v-bind:key="item.name"> <a v-bind:href="item.html_url">
          {{item.name}}</a>
         </li>
       </card-body>
  <br>
    </card> 
    </div>
    <div class="col-sm-6" style="margin-bottom:20px">
      <card>
        <card-body class="cardBody">
        <carousel :navigationEnabled="true" :navigateTo="pageNo" :per-page="1">
        <slide v-for="item in info" v-bind:key="item.name">
      <!--<a v-if="info[0]" :href="info[0].html_url">{{info[0] && info[0].html_url}}</a>-->
        <card-title><h5>{{item.name}}</h5></card-title>
        <card-img v-bind:src="require('@/assets/'+item.name+'.png')" alt="Photo Dead"></card-img>
        </slide> 
        </carousel>
        </card-body>
      </card>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Card, CardImg, CardBody, CardTitle, CardText, Btn } from "mdbvue";

export default {
  data() {
    return {
      msg: "A Simple Vue Web App",
      info: [],
      item: '',
      pageNo: 1
    };
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
      .get('https://api.github.com/users/ong-xinying/repos')
      .then(response => (this.info = response.data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3, h4 {
  font-weight: normal;
  margin: 20px;
  color: #3f4d63;
}
h5 {
  color: #3f4d63;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 5px 25px;
  
}
a {
  color: #3f4d63;
}
a:hover {
  color: #3f4d63;
  text-decoration: underline;
}
#card1 {
  text-align: left;
}
.cardBody {
  margin: 8px;
}
</style>
