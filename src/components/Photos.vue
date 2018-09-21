<template>
  <div class="photos" style="margin-top:50px">
    <center>
    <row>
      <column sm="4" v-for="(image, index) in images" v-bind:key="image.id">
      <!-- <div v-bind:id="image.id" v-bind:style="{ backgroundImage: `url(${image.url})`}" @mouseover="showComments= index" @mouseleave="showComments= -1"> -->
      <div id="divMain" v-bind:style="{ backgroundImage: `url(${image.url})`}" @mouseover="showComments= index" @mouseleave="showComments= -1">
       <div class="overlay" v-show="showComments == index">{{image.alt}}</div>
      </div>
      </column>
      </row>
    </center>
    </div>
</template>
<script>
import { Card, CardImg, CardBody, CardTitle, CardText, Btn, Row, Column } from "mdbvue";

export default {
  data() {
    return {
      showComments: -1,
      images: [
        { 
          id: "i1",
          url: "https://i.imgur.com/lae3qII.png",
          alt: 'Trees near a mushroom farm in Taiwan'
        },
        { 
          id: "i2",
          url: require(`@/assets/dog.jpg`),
          alt: 'An Alishan trip with friends'
        },
        {
          id: "i3",
          url: require(`@/assets/lights.jpg`),
          alt: 'Lights at Dhoby Ghaut'
        },
        { 
          id: "i4",
          url: require(`@/assets/cat1.jpg`),
          alt: 'My shy neighbourhood cat'
        },
        { 
          id: "i5",
          url: require(`@/assets/sydney.jpg`),
          alt: 'Brother posing for GoPro in Sydney'
        },
        { 
          id: "i6",
          url: require(`@/assets/cathedral.jpg`),
          alt: 'The cathedral at City Hall'
        },
        { 
          id: "i7",
          url: require(`@/assets/sand.jpg`),
          alt: 'Playing at sand dunes'
        },
        {
          id: "i8",
          url: require(`@/assets/sky2.jpg`),
          alt: 'A kite trip with friends at Marina Barrage'
        },
        { 
          id: "i9",
          url: require(`@/assets/meow.jpg`),
          alt: 'Cat avoiding puddles of rainwater'
         }
      ]
    };
  },
  components: {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Btn,
    Row,
    Column
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
a {
  color: #42b983;
}
.photos{
  padding: 20px;
}
#main {
  min-height: 300px;
  background-size:cover;
  background-repeat: no-repeat;
  background-position: 50% 50%; 
  margin-top: 10px;
  margin-bottom: 10px;
}
#divMain {
  min-height: 300px;
  background-size:cover;
  background-repeat: no-repeat;
  background-position: 50% 50%; 
  margin-top: 10px;
  margin-bottom: 10px;
}
.overlay {
  min-height: 300px;
  position: relative;
  padding: 20px;
  z-index: 1000;
  font-weight: 500;
  color: white;
  background: rgba(0,0,0,0.32); 
}
</style>
