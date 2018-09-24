<template>
  <div id="capture" class="photos" style="margin-top:50px">
  <center>
  <button type="button" class="btn" id="button1" v-on:click="newCanvas">New Palette</button>
  <button type="button" class="btn" id="button2" v-on:click="print">Download</button>
   <div id="colorPlate" class="row">
   <div class="col" v-bind:style="{'background-color': randomColor(0)}">
    <div class="fontControl"> {{colorToHex(color[0])}}
    </div>
   </div>
   <div class="col" v-bind:style="{'background-color': randomColor(1)}">
    <div class="fontControl"> {{colorToHex(color[1])}}
    </div>
   </div>
   <div class="col" v-bind:style="{'background-color': randomColor(2)}">
    <div class="fontControl"> {{colorToHex(color[2])}}
    </div>
   </div>
   <div class="col" v-bind:style="{'background-color': randomColor(3)}">
    <div class="fontControl"> {{colorToHex(color[3])}}
    </div>
   </div>
   <div class="col" v-bind:style="{'background-color': randomColor(4)}">
    <div class="fontControl"> {{colorToHex(color[4])}}
    </div>
   </div>
</div>
</center>
</div>
</template>
<script>
import { Card, CardImg, CardBody, CardTitle, CardText, Btn, Row, Column } from "mdbvue";
import html2canvas from 'html2canvas';

export default {
  data() {
    return {
      color: {}
    };
  },
  mounted: function () {
    // add an event listener for keypress
    window.addEventListener('keyup', this.keyPress)
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
  },
  methods: {
    keyPress : function(e){
      if(e.keyCode === 13)
      {
        location.reload();
      };
    },
    newCanvas ()
    {
      location.reload();
    },
    randomColor(index) {
      // function r()
      // {
      //   return Math.floor(256 * Math.random());
      // }
      const r = () => Math.floor(256 * Math.random());
      return this.color[index] = `rgb(${r()}, ${r()}, ${r()})`;
      // return this.color[index] || (this.color[index] = `rgb(${r()}, ${r()}, ${r()})`;
    },
    colorToHex(color) {
        var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

        var red = parseInt(digits[2]);
        var green = parseInt(digits[3]);
        var blue = parseInt(digits[4]);

        console.log(red + ", " + green + ", " + blue);

        var rgb = blue | (green << 8) | (red << 16);
        console.log(rgb);
        console.log(0x1000000 + rgb);
        return '#' + (0x1000000 + rgb).toString(16).slice(1);
    },
    print() {
        html2canvas(document.querySelector('#colorPlate')).then(function(canvas) {
        console.log(canvas);
        var link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'canvas.png';

        //simulate click
        link.click();      
        });
    },
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
#colorPlate {
  min-height: 400px;
  background-size:cover;
  background-repeat: no-repeat;
  background-position: 50% 50%; 
  margin-top: 10px;
  margin-bottom: 10px;
}
.fontControl {
  background-color: gainsboro;
  padding: 5px;
  text-align:center;
  font-size: 1rem;
  opacity: 0.4;
}
#button1 {
  color: #3f4d63;
}
#button2 {
  color: #3f4d63;
}
</style>
