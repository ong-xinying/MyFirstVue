<template>
<div>
  <navbar id="nav" class="navbar-light fixed-top navbar-expand-lg">
  <navbar-collapse>
    <navbar-nav>
   <router-link v-for="routes in links" 
             v-bind:key="routes.id" 
             v-bind:to="`${routes.page}`"><navbar-item id="list">{{routes.text}}</navbar-item></router-link>
    <!-- <router-link v-bind:to="'/Home'">Home</router-link> -->
    </navbar-nav>
  </navbar-collapse>  
  </navbar> 
</div>
</template>

<script>
import { Navbar, NavbarItem, NavbarCollapse, NavbarNav} from "mdbvue";

export default {
  data() {
    return { 
      links: [ 
        { 
          id: 0,
          text: 'Home', 
          page: '/Home' 
        },
        {
          id: 1,
          text: 'Projects',
          page: '/Projects'
        },
        {
          id: 2,
          text: 'Photos',
          page: '/Photos'
        },
        { 
          id: 3,
          text: 'Singapore', 
          page: '/Singapore' 
        }
      ] 
    } 
  },
  components: {
    Navbar,
    NavbarItem,
    NavbarCollapse,
    NavbarNav
  }
}
</script>

<style scoped> 
#nav{
  background-color: white;
}
#list { 
  font-weight: 400;
}
a:hover { 
  text-decoration: underline;
  color: #3f4d63;
}
</style>


