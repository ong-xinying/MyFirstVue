<template>
  <div class="photos" style="margin:20px">
    <div class="row justify-content-center">
    <div class="col-3">
      
    </div>
    <div class="col-6">
      <card>
   <carousel :per-page="1">
    <slide>
    <card-img :src="require(`@/assets/cat1.jpg`)" alt="Photo Dead"></card-img>
    </slide>
    <slide>
    <card-img :src="require(`@/assets/sky4.jpg`)" alt="Photo Dead"></card-img>
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
import { Card, CardImg, CardBody, CardTitle, CardText, Btn } from "mdbvue";

export default {
  data() {
    return {
      msg: "A Simple Vue Web App"
    };
  },
  components: {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Btn
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
