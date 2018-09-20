<template>
<div>
<!-- Footer -->
<footer id="footer" class="font-small pt-4">
  <container class="text-left">
    <row>
      <column sm="6">
        Made with Vue.js<br>
        <i class="fa fa-heart"></i>&nbsp;Web development, machine learning and photography
      </column>
      <column sm="6">
        <h3><a href="https://www.linkedin.com/in/ong-xinying/"><i class="fa fa-linkedin-square"></i></a>
        <a href="https://www.github.com/ong-xinying"><i class="fa fa-github-square"></i></a></h3>
      </column>
    </row>
  </container>
  <div class="footer-copyright text-center py-2">
    <container fluid>
      &copy; OXY. All Rights Reserved.                                               
    </container>
  </div>
</footer>
<!-- Footer -->
</div>
</template>

<script>
import { Container, Row, Column } from "mdbvue";

export default {
  components: {
    Container,
    Row,
    Column
  }
};
</script>

<style scoped>
#footer{
  color: #3f4d63;
  bottom:0px;
  text-align: center;
  background-color: white ;
  width:100%;
  overflow: hidden;
  font-weight: 400
}
a {
  color: #3f4d63;
}
a:hover {
  color: #3f4d63;
}
</style>



