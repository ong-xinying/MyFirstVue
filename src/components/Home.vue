<template>
  <div id="background1">
    <div id="overlay1" class="row justify-content-center">
    <div class="col-sm-5" style="margin-top:120px">
  “A human being is a part of the whole called by us universe, a part limited in time and space. He experiences himself, his thoughts and feeling as something separated from the rest, a kind of optical delusion of his consciousness. This delusion is a kind of prison for us, restricting us to our personal desires and to affection for a few persons nearest to us. Our task must be to free ourselves from this prison by widening our circle of compassion to embrace all living creatures and the whole of nature in its beauty.” 
― Albert Einstein
    </div>
    </div>
  </div>
</template>

<script>
import { Card, CardImg, CardBody, CardTitle, CardText, Btn } from "mdbvue";

export default {
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
#background1{
  background-image: url('https://images.pexels.com/photos/924002/pexels-photo-924002.jpeg');
  height:550px;
  background-position: top center;
  background-repeat: repeat;
}
#overlay1 {
    z-index:2;
    height:550px;
    /* background: rgba(0,0,0,0.00); */
    color: #3f4d63;
    font-weight: 400;
    font-size: 18px;
}
</style>
