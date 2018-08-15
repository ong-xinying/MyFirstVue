// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Projects from './components/Projects'
import Photos from './components/Photos'
import Singapore from './components/Singapore'
import VueCarousel from 'vue-carousel';

//import the vue router
import VueRouter from 'vue-router'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

Vue.use(VueCarousel);
Vue.use(VueRouter)

//define your routes
const routes = [
  { path: '/Home', component: Home },
  { path: '/Projects', component: Projects },
  { path: '/Singapore', component: Singapore },
  { path: '/Photos', component: Photos},
  { path: '/*', component: Home}
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

//instantiate the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { 
    App
   },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app