<template>
  <div class="projects" style="margin:20px">
    <div class="row justify-content-center">
    <div class="col-3">
      
    </div>
    <div class="col-6">
      <card>
      <card-title>My Github Repositories</card-title>
   <carousel :per-page="1">
    <slide>
    <ul>
        <li v-for="item in info">{{item.name}}</li>
        </ul>
    </slide>
    <slide>
       <a v-if="info[0]" :href="info[0].html_url">{{info[0] && info[0].html_url}}</a>
    {{info[1] && info[1].html_url}}
    {{info[2] && info[2].html_url}}
       
    </slide>
    <slide>
    <card-img :src="require(`@/assets/item1.jpg`)" alt="Photo Dead"></card-img>
    </slide>
    <slide>
    <card-img :src="require(`@/assets/night1.jpg`)" alt="Photo Dead"></card-img>
    </slide>
  </carousel>
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
import { Card, CardImg, CardBody, CardTitle, CardText, Btn } from "mdbvue";

export default {
  data() {
    return {
      msg: "A Simple Vue Web App",
      info: [],
      item: ''
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
h1,
h2,
h3,
h4 {
  font-weight: normal;
  margin: 20px;
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
